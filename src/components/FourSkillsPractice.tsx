/** Speaking and Writing trainers for the TOEIC 4-Skills section.
 *
 *  Both run against the real task timings, because time pressure is most of
 *  what makes these tasks hard — an untimed picture description tells you
 *  nothing about whether you can do it in 30 seconds.
 *
 *  The Speaking trainer can record your answer via MediaRecorder so you can
 *  hear yourself back. The audio stays in an in-memory blob URL and is never
 *  uploaded or persisted; it is revoked when you reset or leave the page.
 */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Mic,
  Square,
  RotateCcw,
  Play,
  Clock,
  PenLine,
  CheckCircle2,
  Shuffle,
  Volume2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { recordActivity, recordSession } from "@/lib/progress";
import { audioManifest } from "@/data/audioManifest";
import { audioKey } from "@/lib/audioSource";
import type { SpeakingPrompt, WritingPrompt } from "@/data/fourSkillsPrompts";
import {
  CRITERIA_LANGS,
  localizeCriteria,
  loadCriteriaLang,
  getCachedCriteriaLang,
  type CriteriaMap,
  type TranslatableLang,
} from "@/data/criteriaI18n";
import { useCriteriaLang } from "@/lib/criteriaLang";

function formatTime(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

/** A saved Writing answer. `running` is deliberately not persisted — a timer
 *  is never resumed automatically across a reload. */
interface WritingDraft {
  text: string;
  remaining: number;
  submitted: boolean;
}

const draftKey = (promptId: string) => `toeicpath:four-skills:writing:${promptId}`;

function loadDraft(promptId: string): WritingDraft | null {
  try {
    const raw = localStorage.getItem(draftKey(promptId));
    return raw ? (JSON.parse(raw) as WritingDraft) : null;
  } catch {
    return null;
  }
}

function saveDraft(promptId: string, draft: WritingDraft | null) {
  try {
    if (draft && (draft.text.trim() || draft.submitted)) {
      localStorage.setItem(draftKey(promptId), JSON.stringify(draft));
    } else {
      // An untouched answer isn't worth persisting, and clearing it keeps a
      // Reset from leaving a stale draft behind.
      localStorage.removeItem(draftKey(promptId));
    }
  } catch {
    // localStorage unavailable (private mode / disabled) — the draft just
    // won't survive a reload, which is the pre-existing behaviour.
  }
}

/** Real timing for Writing tasks 1–5: one shared 8-minute clock across all
 *  five sentences, freely revisited — not five independent per-sentence
 *  timers. Practice only has 3 sentences standing in for the real 5, but the
 *  clock itself must still be the genuine shared pool. */
const POOL_MINUTES = 8;

interface WritingPoolDraft {
  texts: Record<string, string>;
  remaining: number;
  submitted: boolean;
}

const poolDraftKey = (taskRange: string) => `toeicpath:four-skills:writing-pool:${taskRange}`;

function loadPoolDraft(taskRange: string): WritingPoolDraft | null {
  try {
    const raw = localStorage.getItem(poolDraftKey(taskRange));
    return raw ? (JSON.parse(raw) as WritingPoolDraft) : null;
  } catch {
    return null;
  }
}

function savePoolDraft(taskRange: string, draft: WritingPoolDraft | null) {
  try {
    const touched = draft && (Object.values(draft.texts).some((t) => t.trim()) || draft.submitted);
    if (draft && touched) {
      localStorage.setItem(poolDraftKey(taskRange), JSON.stringify(draft));
    } else {
      localStorage.removeItem(poolDraftKey(taskRange));
    }
  } catch {
    // localStorage unavailable (private mode / disabled) — the draft just
    // won't survive a reload, which is the pre-existing behaviour.
  }
}

interface TaskGroup<T> {
  taskRange: string;
  taskName: string;
  items: T[];
}

/** Collapses the flat prompt arrays into one entry per task group, preserving
 *  the order each group first appears. The picker shows task groups rather
 *  than individual prompts, so adding more prompts to `fourSkills.ts` deepens
 *  each group instead of growing the row of chips. */
function groupByTask<T extends { taskRange: string; taskName: string }>(
  items: T[],
): TaskGroup<T>[] {
  const groups: TaskGroup<T>[] = [];
  for (const item of items) {
    const existing = groups.find((g) => g.taskRange === item.taskRange);
    if (existing) existing.items.push(item);
    else groups.push({ taskRange: item.taskRange, taskName: item.taskName, items: [item] });
  }
  return groups;
}

function TaskPicker<T>({
  groups,
  activeRange,
  onSelect,
}: {
  groups: readonly TaskGroup<T>[];
  activeRange: string;
  onSelect: (taskRange: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {groups.map((group) => (
        <button
          key={group.taskRange}
          type="button"
          onClick={() => onSelect(group.taskRange)}
          aria-pressed={group.taskRange === activeRange}
          className={cn(
            "rounded-full border px-4 py-2 text-left text-sm font-medium transition",
            group.taskRange === activeRange
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card text-foreground hover:bg-muted",
          )}
        >
          {/* The question number is de-emphasised, but only on the unselected
              chips — dimming it against the filled primary background drops
              contrast below the WCAG AA 4.5:1 threshold. */}
          <span className={cn(group.taskRange !== activeRange && "opacity-70")}>
            Q{group.taskRange}
          </span>{" "}
          · {group.taskName}
        </button>
      ))}
    </div>
  );
}

/** "Prompt 2 of 3" plus a button to advance within the current task group. */
function PromptRotator({
  index,
  total,
  onNext,
}: {
  index: number;
  total: number;
  onNext: () => void;
}) {
  if (total <= 1) return null;
  return (
    <div className="mt-4 flex flex-wrap items-center gap-3">
      <span className="text-xs font-medium text-muted-foreground">
        Prompt {index + 1} of {total}
      </span>
      <button
        type="button"
        onClick={onNext}
        className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium transition hover:bg-muted"
      >
        <Shuffle className="h-3.5 w-3.5" />
        Try another prompt
      </button>
    </div>
  );
}

/** Plays the generated TTS clip for a prompt the real test speaks aloud.
 *
 *  Renders nothing when no clip exists for this text — audio is produced by
 *  `bun run generate:audio`, so a newly written prompt simply has no player
 *  until that has been run, and the printed prompt stands in meanwhile.
 *  Clips are content-addressed, so editing a prompt's wording orphans its
 *  audio and the generator must be re-run. */
function PromptAudio({ text }: { text: string }) {
  const entry = audioManifest[audioKey(text)];
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  if (!entry) return null;

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
      el.currentTime = 0;
      setPlaying(false);
    } else {
      void el.play();
      setPlaying(true);
    }
  };

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={toggle}
        className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition hover:bg-muted"
      >
        {playing ? <Square className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        {playing ? "Stop" : "Play the question"}
      </button>
      <p className="mt-1.5 text-xs text-muted-foreground">
        In the real test you only hear this — it is printed here as a fallback.
      </p>
      <audio
        ref={audioRef}
        src={`/audio/${entry.segments[0].file}`}
        onEnded={() => setPlaying(false)}
        preload="none"
      >
        <track kind="captions" />
      </audio>
    </div>
  );
}

/** The shared control for the self-assessment language. Every instance reads
 *  and writes the same device-wide preference (see `useCriteriaLang`), so the
 *  copy in a task's intro and the copies on its checklists always agree.
 *  `label` lets the intro spell the purpose out ("Self-assessment language")
 *  while the checklists use the terse in-card variant. */
function CriteriaLangSelect({ label = "Criteria language" }: { label?: string }) {
  const [lang, setLang] = useCriteriaLang();
  return (
    <label className="flex items-center gap-1.5 text-xs text-muted-foreground">
      <span className="sr-only sm:not-sr-only">{label}</span>
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value as (typeof CRITERIA_LANGS)[number]["code"])}
        className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition hover:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/40"
      >
        {CRITERIA_LANGS.map((l) => (
          <option key={l.code} value={l.code}>
            {l.label}
          </option>
        ))}
      </select>
    </label>
  );
}

/** The criteria checklist, as tickable items that can be saved to progress
 *  history. This is explicitly self-assessment — nothing here is machine
 *  marked — so the saved entry is kept in its own scope and never folded into
 *  the objectively-scored Listening & Reading accuracy figures. */
/** A learner's self-assessment against a prompt's criteria, persisted so it
 *  survives leaving and coming back — the same "resume where you left off"
 *  promise the Writing drafts and L&R practice sets make. Keyed by scope + the
 *  prompt id, which is what the checklist is already remounted on. `ticked`
 *  holds criteria indices (not text, so language switches don't disturb it);
 *  `saved` records that it was committed to progress, so a reload restores the
 *  "Saved" state rather than offering to re-save. */
interface SelfAssessment {
  ticked: number[];
  saved: boolean;
}

const selfAssessKey = (scope: string, id: string) =>
  `toeicpath:four-skills:self-assess:${scope}:${id}`;

function loadSelfAssessment(scope: string, id: string): SelfAssessment | null {
  try {
    const raw = localStorage.getItem(selfAssessKey(scope, id));
    return raw ? (JSON.parse(raw) as SelfAssessment) : null;
  } catch {
    return null;
  }
}

function saveSelfAssessment(scope: string, id: string, value: SelfAssessment | null) {
  try {
    if (value && (value.ticked.length > 0 || value.saved)) {
      localStorage.setItem(selfAssessKey(scope, id), JSON.stringify(value));
    } else {
      // Nothing ticked and not saved — not worth persisting, and clearing it
      // stops an untouched checklist leaving a stale entry behind.
      localStorage.removeItem(selfAssessKey(scope, id));
    }
  } catch {
    // localStorage unavailable (private mode / disabled) — the self-assessment
    // just won't survive a reload, which is the pre-existing behaviour.
  }
}

function Checklist({
  id,
  items,
  title,
  scope,
}: {
  id: string;
  items: string[];
  title: string;
  scope: "speaking" | "writing";
}) {
  // Track ticks by index, not by text: the same criterion keeps its state when
  // the learner switches language mid-review (translations align by index).
  const [ticked, setTicked] = useState<number[]>([]);
  const [saved, setSaved] = useState(false);
  const [lang] = useCriteriaLang();

  // Restore a saved self-assessment for this prompt, then persist any change.
  // The hydration guard stops the persist effect firing on first render (before
  // the restore) and clearing a saved entry with the default empty state.
  const hydratedRef = useRef(false);
  useEffect(() => {
    const stored = loadSelfAssessment(scope, id);
    if (stored) {
      setTicked(stored.ticked.filter((i) => i < items.length));
      setSaved(stored.saved);
    }
    hydratedRef.current = true;
  }, [scope, id, items.length]);
  useEffect(() => {
    if (!hydratedRef.current) return;
    saveSelfAssessment(scope, id, { ticked, saved });
  }, [ticked, saved, scope, id]);

  // Each language's criteria is a separate lazy-loaded chunk (see
  // criteriaI18n.ts) — a learner who stays on English never fetches any of
  // them. Seed from the cache (instant if this language was already loaded
  // elsewhere on the page this session) and kick off a fetch on a cache miss;
  // localizeCriteria falls back to English while `map` is still undefined.
  const [map, setMap] = useState<CriteriaMap | undefined>(() =>
    lang === "en" ? undefined : getCachedCriteriaLang(lang as TranslatableLang),
  );
  useEffect(() => {
    if (lang === "en") {
      setMap(undefined);
      return;
    }
    const cached = getCachedCriteriaLang(lang as TranslatableLang);
    if (cached) {
      setMap(cached);
      return;
    }
    let cancelled = false;
    loadCriteriaLang(lang as TranslatableLang).then((loaded) => {
      if (!cancelled) setMap(loaded);
    });
    return () => {
      cancelled = true;
    };
  }, [lang]);

  const localized = localizeCriteria(id, items, lang, map);

  const toggle = (index: number) =>
    setTicked((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );

  const save = () => {
    recordSession({ source: "four-skills", scope, correct: ticked.length, total: items.length });
    setSaved(true);
  };

  return (
    <div className="mt-6 rounded-2xl border border-border bg-card p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h4 className="flex items-center gap-2 text-sm font-semibold">
          <CheckCircle2 className="h-4 w-4 text-primary" />
          {title}
        </h4>
        <CriteriaLangSelect />
      </div>
      <ul className="mt-3 space-y-1">
        {localized.map((item, index) => {
          const checked = ticked.includes(index);
          return (
            <li key={index}>
              <label
                className={cn(
                  "flex cursor-pointer gap-3 rounded-lg p-2 text-sm transition",
                  saved ? "cursor-default" : "hover:bg-muted",
                  checked ? "text-foreground" : "text-muted-foreground",
                )}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  disabled={saved}
                  onChange={() => toggle(index)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--color-primary)]"
                />
                {item}
              </label>
            </li>
          );
        })}
      </ul>

      <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-border pt-4">
        <span className="text-sm font-semibold tabular-nums">
          {ticked.length} of {items.length} met
        </span>
        {saved ? (
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
            <CheckCircle2 className="h-4 w-4" />
            Saved to your progress
          </span>
        ) : (
          <button
            type="button"
            onClick={save}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition hover:bg-muted"
          >
            Save self-assessment
          </button>
        )}
      </div>
    </div>
  );
}

type SpeakingPhase = "idle" | "prep" | "speaking" | "done";

export function SpeakingTrainer({ prompts }: { prompts: SpeakingPrompt[] }) {
  const speakingGroups = useMemo(() => groupByTask(prompts), [prompts]);
  const [taskRange, setTaskRange] = useState(speakingGroups[0].taskRange);
  const [promptIndex, setPromptIndex] = useState(0);
  const group = useMemo(
    () => speakingGroups.find((g) => g.taskRange === taskRange) as TaskGroup<SpeakingPrompt>,
    [speakingGroups, taskRange],
  );
  // Guard the index: switching to a group with fewer prompts must not leave
  // promptIndex pointing past the end before the reset effect runs.
  const prompt = group.items[promptIndex] ?? group.items[0];
  const [phase, setPhase] = useState<SpeakingPhase>("idle");
  const [recordUrl, setRecordUrl] = useState<string | null>(null);
  const [recordError, setRecordError] = useState<string | null>(null);

  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);
  // Mirrors recordUrl so cleanup effects can revoke the current URL without
  // taking recordUrl as a dependency (which would revoke it on every change).
  const recordUrlRef = useRef<string | null>(null);
  recordUrlRef.current = recordUrl;

  const stopRecording = useCallback(() => {
    const rec = recorderRef.current;
    if (rec && rec.state !== "inactive") rec.stop();
    recorderRef.current = null;
  }, []);

  const clearRecording = useCallback(() => {
    if (recordUrlRef.current) URL.revokeObjectURL(recordUrlRef.current);
    setRecordUrl(null);
  }, []);

  // Release the microphone and any blob URL when the component unmounts.
  useEffect(() => {
    return () => {
      stopRecording();
      if (recordUrlRef.current) URL.revokeObjectURL(recordUrlRef.current);
    };
  }, [stopRecording]);

  const startRecording = useCallback(async () => {
    setRecordError(null);
    if (typeof MediaRecorder === "undefined" || !navigator.mediaDevices?.getUserMedia) {
      setRecordError("This browser can't record audio — practise out loud and time yourself.");
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const rec = new MediaRecorder(stream);
      chunksRef.current = [];
      rec.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };
      rec.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: rec.mimeType || "audio/webm" });
        setRecordUrl(URL.createObjectURL(blob));
        // Drop the mic indicator as soon as the take is finished.
        stream.getTracks().forEach((t) => t.stop());
      };
      recorderRef.current = rec;
      rec.start();
    } catch {
      setRecordError("Microphone access was blocked. You can still practise with the timer only.");
    }
  }, []);

  const finish = useCallback(() => {
    stopRecording();
    setPhase("done");
    recordActivity();
  }, [stopRecording]);

  const [prepLeft, setPrepLeft] = useState(prompt.prepSeconds);
  const [speakLeft, setSpeakLeft] = useState(prompt.speakSeconds);

  // Countdown for the preparation phase.
  useEffect(() => {
    if (phase !== "prep") return;
    const id = setInterval(() => {
      setPrepLeft((r) => {
        if (r <= 1) {
          clearInterval(id);
          setPhase("speaking");
          void startRecording();
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [phase, startRecording]);

  // Countdown for the response phase.
  useEffect(() => {
    if (phase !== "speaking") return;
    const id = setInterval(() => {
      setSpeakLeft((r) => {
        if (r <= 1) {
          clearInterval(id);
          finish();
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [phase, finish]);

  const reset = useCallback(() => {
    stopRecording();
    clearRecording();
    setPhase("idle");
    setPrepLeft(prompt.prepSeconds);
    setSpeakLeft(prompt.speakSeconds);
    setRecordError(null);
  }, [prompt, stopRecording, clearRecording]);

  // Switching task group or rotating to another prompt resets the drill.
  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prompt.id]);

  const selectTask = useCallback((range: string) => {
    setTaskRange(range);
    setPromptIndex(0);
  }, []);

  const nextPrompt = useCallback(() => {
    setPromptIndex((i) => (i + 1) % group.items.length);
  }, [group]);

  const timerLabel =
    phase === "prep" ? "Preparation" : phase === "speaking" ? "Speak now" : "Ready";
  const timerValue = phase === "prep" ? prepLeft : phase === "speaking" ? speakLeft : null;

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <TaskPicker groups={speakingGroups} activeRange={taskRange} onSelect={selectTask} />
        <CriteriaLangSelect label="Self-assessment language" />
      </div>
      <PromptRotator
        index={group.items.indexOf(prompt)}
        total={group.items.length}
        onNext={nextPrompt}
      />

      <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-soft">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          Question {prompt.taskRange} · {prompt.taskName}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">{prompt.directions}</p>

        {prompt.reference && (
          <div className="mt-5 rounded-xl border border-border bg-muted/50 p-4">
            <p className="text-sm font-semibold">{prompt.reference.title}</p>
            <ul className="mt-2 space-y-1">
              {prompt.reference.lines.map((line) => (
                <li key={line} className="font-mono text-xs text-muted-foreground sm:text-sm">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        )}

        {prompt.image && (
          <figure className="mt-5">
            <img
              src={prompt.image.src}
              alt={prompt.image.alt}
              loading="lazy"
              className="w-full rounded-xl border border-border object-cover"
            />
            {/* Full-opacity muted-foreground, not a faded variant: dimming
                drops this caption below WCAG AA's 4.5:1 contrast minimum. */}
            <figcaption className="mt-1 text-[11px] text-muted-foreground">
              Photo by {prompt.image.author} —{" "}
              <a
                href={prompt.image.sourceUrl}
                target="_blank"
                rel="noopener noreferrer license"
                className="underline underline-offset-2 hover:text-foreground"
              >
                source
              </a>
              {", "}
              <a
                href={prompt.image.licenseUrl}
                target="_blank"
                rel="noopener noreferrer license"
                className="underline underline-offset-2 hover:text-foreground"
              >
                {prompt.image.licenseName}
              </a>
              , via Wikimedia Commons
            </figcaption>
          </figure>
        )}

        <blockquote className="mt-5 border-l-2 border-primary/40 pl-4 text-base leading-relaxed text-foreground">
          {prompt.prompt}
        </blockquote>

        {prompt.spoken && <PromptAudio text={prompt.prompt} />}

        <div className="mt-6 flex flex-wrap items-center gap-4">
          {phase === "idle" ? (
            <button
              type="button"
              onClick={() => setPhase("prep")}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
            >
              <Mic className="h-4 w-4" />
              Start · {prompt.prepSeconds}s prep, {prompt.speakSeconds}s speak
            </button>
          ) : (
            <>
              {timerValue !== null && (
                <div
                  aria-live="polite"
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold tabular-nums",
                    phase === "speaking"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground",
                  )}
                >
                  <Clock className="h-4 w-4" />
                  {timerLabel} · {formatTime(timerValue)}
                </div>
              )}
              {phase === "speaking" && (
                <button
                  type="button"
                  onClick={finish}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition hover:bg-muted"
                >
                  <Square className="h-4 w-4" />
                  Finish early
                </button>
              )}
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition hover:bg-muted"
              >
                <RotateCcw className="h-4 w-4" />
                Reset
              </button>
            </>
          )}
        </div>

        {recordError && <p className="mt-4 text-sm text-muted-foreground">{recordError}</p>}

        {recordUrl && phase === "done" && (
          <div className="mt-6">
            <p className="flex items-center gap-2 text-sm font-semibold">
              <Play className="h-4 w-4 text-primary" />
              Your recording
            </p>
            <audio controls src={recordUrl} className="mt-2 w-full">
              <track kind="captions" />
            </audio>
            <p className="mt-2 text-xs text-muted-foreground">
              This audio stays in your browser. It is never uploaded, and it disappears when you
              reset or leave the page.
            </p>
          </div>
        )}
      </div>

      {phase === "done" && (
        <Checklist
          key={prompt.id}
          id={prompt.id}
          title="Score yourself against the criteria"
          items={prompt.checklist}
          scope="speaking"
        />
      )}
    </div>
  );
}

export function WritingTrainer({ prompts }: { prompts: WritingPrompt[] }) {
  const writingGroups = useMemo(() => groupByTask(prompts), [prompts]);
  const [taskRange, setTaskRange] = useState(writingGroups[0].taskRange);
  const group = useMemo(
    () => writingGroups.find((g) => g.taskRange === taskRange) as TaskGroup<WritingPrompt>,
    [writingGroups, taskRange],
  );
  const selectTask = useCallback((range: string) => setTaskRange(range), []);

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <TaskPicker groups={writingGroups} activeRange={taskRange} onSelect={selectTask} />
        <CriteriaLangSelect label="Self-assessment language" />
      </div>
      {/* A different component per timing model, not a branch inside one —
       *  the pooled and per-prompt trainers manage entirely different state
       *  shapes (one shared clock vs. one clock per prompt), and switching
       *  task group should always reset cleanly rather than try to carry
       *  state across two incompatible shapes. `key` forces a remount on
       *  every group change so neither trainer inherits stale state from
       *  the other. */}
      {group.items[0]?.pooled ? (
        <PooledWritingTrainer key={taskRange} group={group} />
      ) : (
        <SingleWritingTrainer key={taskRange} group={group} />
      )}
    </div>
  );
}

function SingleWritingTrainer({ group }: { group: TaskGroup<WritingPrompt> }) {
  const [promptIndex, setPromptIndex] = useState(0);
  const prompt = group.items[promptIndex] ?? group.items[0];

  const [running, setRunning] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [text, setText] = useState("");

  const totalSeconds = prompt.minutes * 60;
  const submit = useCallback(() => {
    setRunning(false);
    setSubmitted(true);
    recordActivity();
  }, []);
  const [remaining, setRemaining] = useState(totalSeconds);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          clearInterval(id);
          submit();
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [running, submit]);

  const reset = useCallback(() => {
    setRunning(false);
    setSubmitted(false);
    setText("");
    setRemaining(prompt.minutes * 60);
    saveDraft(prompt.id, null);
  }, [prompt]);

  // Which prompt the state below currently reflects. Until this matches the
  // active prompt, the save effect must not run — otherwise the empty initial
  // state would overwrite the very draft we are about to load.
  const [hydratedFor, setHydratedFor] = useState<string | null>(null);

  // Load any saved draft when the prompt changes. localStorage is read here
  // rather than in a state initialiser because this page is server-rendered:
  // reading during render would produce a hydration mismatch.
  useEffect(() => {
    const saved = loadDraft(prompt.id);
    if (saved) {
      setText(saved.text);
      setRemaining(saved.remaining);
      setSubmitted(saved.submitted);
    } else {
      setText("");
      setRemaining(prompt.minutes * 60);
      setSubmitted(false);
    }
    // Never auto-resume a running clock. The user has been away for an
    // unknown length of time, so restarting the timer for them would silently
    // burn minutes they never got to use.
    setRunning(false);
    setHydratedFor(prompt.id);
  }, [prompt]);

  useEffect(() => {
    if (hydratedFor !== prompt.id) return;
    saveDraft(prompt.id, { text, remaining, submitted });
  }, [hydratedFor, prompt.id, text, remaining, submitted]);

  const nextPrompt = useCallback(() => {
    setPromptIndex((i) => (i + 1) % group.items.length);
  }, [group]);

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <div>
      <PromptRotator
        index={group.items.indexOf(prompt)}
        total={group.items.length}
        onNext={nextPrompt}
      />

      <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-soft">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Question {prompt.taskRange} · {prompt.taskName}
            </p>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{prompt.directions}</p>
          </div>
          <div
            aria-live="polite"
            className={cn(
              "inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold tabular-nums",
              running
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground",
            )}
          >
            <Clock className="h-4 w-4" />
            {formatTime(remaining)}
          </div>
        </div>

        <div className="mt-5 whitespace-pre-line rounded-xl border border-border bg-muted/50 p-4 text-sm leading-relaxed">
          {prompt.prompt}
        </div>

        {prompt.requiredWords && (
          <p className="mt-4 text-sm">
            <span className="font-semibold">Use both words:</span>{" "}
            {prompt.requiredWords.map((w) => (
              <span
                key={w}
                className="mr-2 inline-block rounded-md bg-primary/10 px-2 py-0.5 font-mono text-primary"
              >
                {w}
              </span>
            ))}
          </p>
        )}

        <label htmlFor="writing-response" className="mt-6 block text-sm font-semibold">
          Your response
        </label>
        <textarea
          id="writing-response"
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={submitted}
          rows={prompt.minutes >= 10 ? 12 : 4}
          placeholder={running ? "Start typing…" : "Press Start to begin the timer."}
          className="mt-2 w-full resize-y rounded-xl border border-border bg-background p-4 text-sm leading-relaxed outline-none transition focus:border-primary disabled:opacity-70"
        />

        <div className="mt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>
            {wordCount} {wordCount === 1 ? "word" : "words"}
            {prompt.targetWords && ` · target ${prompt.targetWords}`}
          </span>
          <span>In the real test, keyboard shortcuts are disabled.</span>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {!running && !submitted && (
            <button
              type="button"
              onClick={() => setRunning(true)}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
            >
              <PenLine className="h-4 w-4" />
              {/* A restored draft keeps its remaining time, so offering
                  "Start · 30 min" there would misstate what you actually get. */}
              {remaining < totalSeconds
                ? `Resume · ${formatTime(remaining)} left`
                : `Start · ${prompt.minutes} min`}
            </button>
          )}
          {running && (
            <button
              type="button"
              onClick={submit}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
            >
              <CheckCircle2 className="h-4 w-4" />
              Submit
            </button>
          )}
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition hover:bg-muted"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </button>
        </div>
      </div>

      {submitted && (
        <>
          <Checklist
            key={prompt.id}
            id={prompt.id}
            title="Check your response against the criteria"
            items={prompt.checklist}
            scope="writing"
          />
          <div className="mt-4 rounded-2xl border border-primary/20 bg-primary/5 p-5">
            <h4 className="text-sm font-semibold">A strong sample response</h4>
            <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
              {prompt.model}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

/** Small tab strip so a pooled group's sentences can be jumped to directly at
 *  any time — unlike `PromptRotator`'s one-way "next", the real task lets you
 *  move freely back and forth across all five while the shared clock runs. */
function SentenceTabs({
  count,
  active,
  onSelect,
}: {
  count: number;
  active: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onSelect(i)}
          aria-pressed={i === active}
          className={cn(
            "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition",
            i === active
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card text-foreground hover:bg-muted",
          )}
        >
          Sentence {i + 1}
        </button>
      ))}
    </div>
  );
}

/** Writing tasks 1–5's genuine timing model: one shared clock across every
 *  sentence, freely revisited, that keeps running while you move between
 *  them — not five independent per-sentence timers. Kept as its own
 *  component (see `WritingTrainer`) since the state shape here (one clock,
 *  one draft per sentence, one submitted/not-submitted flag for the whole
 *  pool) doesn't fit `SingleWritingTrainer`'s per-prompt model at all. */
function PooledWritingTrainer({ group }: { group: TaskGroup<WritingPrompt> }) {
  const totalSeconds = POOL_MINUTES * 60;
  const [activeIndex, setActiveIndex] = useState(0);
  const [texts, setTexts] = useState<Record<string, string>>({});
  const [running, setRunning] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [remaining, setRemaining] = useState(totalSeconds);
  const prompt = group.items[activeIndex] ?? group.items[0];

  const submitAll = useCallback(() => {
    setRunning(false);
    setSubmitted(true);
    recordActivity();
  }, []);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          clearInterval(id);
          submitAll();
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [running, submitAll]);

  const reset = useCallback(() => {
    setRunning(false);
    setSubmitted(false);
    setTexts({});
    setRemaining(totalSeconds);
    savePoolDraft(group.taskRange, null);
  }, [group.taskRange, totalSeconds]);

  // Same hydration guard as SingleWritingTrainer: don't persist until the
  // pool's own saved draft (or lack of one) has actually been loaded, or the
  // blank initial state would overwrite it.
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = loadPoolDraft(group.taskRange);
    if (saved) {
      setTexts(saved.texts);
      setRemaining(saved.remaining);
      setSubmitted(saved.submitted);
    } else {
      setTexts({});
      setRemaining(totalSeconds);
      setSubmitted(false);
    }
    // Never auto-resume a running clock — see SingleWritingTrainer for why.
    setRunning(false);
    setActiveIndex(0);
    setHydrated(true);
    // group is remounted (via `key`) on every task-range change, so this only
    // needs to run once per mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    savePoolDraft(group.taskRange, { texts, remaining, submitted });
  }, [hydrated, group.taskRange, texts, remaining, submitted]);

  const setActiveText = (value: string) => {
    setTexts((prev) => ({ ...prev, [prompt.id]: value }));
  };

  return (
    <div>
      <p className="mt-4 text-xs text-muted-foreground">
        These {group.items.length} sentences share ONE clock, just like the real task's five — move
        between them freely with no penalty and no reset.
      </p>
      <SentenceTabs count={group.items.length} active={activeIndex} onSelect={setActiveIndex} />

      <div className="mt-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Question {prompt.taskRange} · {prompt.taskName}
            </p>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{prompt.directions}</p>
          </div>
          <div
            aria-live="polite"
            className={cn(
              "inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold tabular-nums",
              running
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground",
            )}
          >
            <Clock className="h-4 w-4" />
            {formatTime(remaining)}
          </div>
        </div>

        {prompt.image && (
          <figure className="mt-5">
            <img
              src={prompt.image.src}
              alt={prompt.image.alt}
              loading="lazy"
              className="w-full rounded-xl border border-border object-cover"
            />
            {/* Full-opacity muted-foreground, not a faded variant: dimming
                drops this caption below WCAG AA's 4.5:1 contrast minimum. */}
            <figcaption className="mt-1 text-[11px] text-muted-foreground">
              Photo by {prompt.image.author} —{" "}
              <a
                href={prompt.image.sourceUrl}
                target="_blank"
                rel="noopener noreferrer license"
                className="underline underline-offset-2 hover:text-foreground"
              >
                source
              </a>
              {", "}
              <a
                href={prompt.image.licenseUrl}
                target="_blank"
                rel="noopener noreferrer license"
                className="underline underline-offset-2 hover:text-foreground"
              >
                {prompt.image.licenseName}
              </a>
              , via Wikimedia Commons
            </figcaption>
          </figure>
        )}

        <div className="mt-5 whitespace-pre-line rounded-xl border border-border bg-muted/50 p-4 text-sm leading-relaxed">
          {prompt.prompt}
        </div>

        {prompt.requiredWords && (
          <p className="mt-4 text-sm">
            <span className="font-semibold">Use both words:</span>{" "}
            {prompt.requiredWords.map((w) => (
              <span
                key={w}
                className="mr-2 inline-block rounded-md bg-primary/10 px-2 py-0.5 font-mono text-primary"
              >
                {w}
              </span>
            ))}
          </p>
        )}

        <label
          htmlFor={`writing-response-${prompt.id}`}
          className="mt-6 block text-sm font-semibold"
        >
          Your sentence
        </label>
        <textarea
          id={`writing-response-${prompt.id}`}
          value={texts[prompt.id] ?? ""}
          onChange={(e) => setActiveText(e.target.value)}
          disabled={submitted}
          rows={4}
          placeholder={running ? "Start typing…" : "Press Start to begin the shared clock."}
          className="mt-2 w-full resize-y rounded-xl border border-border bg-background p-4 text-sm leading-relaxed outline-none transition focus:border-primary disabled:opacity-70"
        />

        <div className="mt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>{(texts[prompt.id] ?? "").trim() ? "Sentence started" : "Not started yet"}</span>
          <span>In the real test, keyboard shortcuts are disabled.</span>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {!running && !submitted && (
            <button
              type="button"
              onClick={() => setRunning(true)}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
            >
              <PenLine className="h-4 w-4" />
              {/* A restored draft keeps its remaining time, so offering
                  "Start · 8 min" there would misstate what you actually get. */}
              {remaining < totalSeconds
                ? `Resume · ${formatTime(remaining)} left`
                : `Start · ${POOL_MINUTES} min for all ${group.items.length}`}
            </button>
          )}
          {running && (
            <button
              type="button"
              onClick={submitAll}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
            >
              <CheckCircle2 className="h-4 w-4" />
              Submit all {group.items.length}
            </button>
          )}
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition hover:bg-muted"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </button>
        </div>
      </div>

      {submitted && (
        <div className="mt-6 space-y-6">
          <h4 className="font-display text-lg font-semibold">Review all {group.items.length}</h4>
          {group.items.map((item) => (
            <div key={item.id} className="rounded-2xl border border-border bg-card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                {item.id === prompt.id ? "Currently shown" : `Question ${item.taskRange}`}
              </p>
              <div className="mt-2 whitespace-pre-line rounded-xl border border-border bg-muted/50 p-3 text-sm leading-relaxed">
                {item.prompt}
              </div>
              <p className="mt-3 whitespace-pre-line rounded-xl border border-dashed border-border p-3 text-sm leading-relaxed">
                {(texts[item.id] ?? "").trim() || (
                  <span className="text-muted-foreground">(left blank)</span>
                )}
              </p>
              <Checklist
                key={item.id}
                id={item.id}
                title="Check your sentence against the criteria"
                items={item.checklist}
                scope="writing"
              />
              <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-4">
                <h5 className="text-sm font-semibold">A strong sample sentence</h5>
                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                  {item.model}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
