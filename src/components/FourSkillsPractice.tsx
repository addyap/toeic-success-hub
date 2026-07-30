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
import {
  speakingPrompts,
  writingPrompts,
  type SpeakingPrompt,
  type WritingPrompt,
} from "@/data/fourSkills";

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

const speakingGroups = groupByTask(speakingPrompts);
const writingGroups = groupByTask(writingPrompts);

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

/** The criteria checklist, as tickable items that can be saved to progress
 *  history. This is explicitly self-assessment — nothing here is machine
 *  marked — so the saved entry is kept in its own scope and never folded into
 *  the objectively-scored Listening & Reading accuracy figures. */
function Checklist({
  items,
  title,
  scope,
}: {
  items: string[];
  title: string;
  scope: "speaking" | "writing";
}) {
  const [ticked, setTicked] = useState<string[]>([]);
  const [saved, setSaved] = useState(false);

  const toggle = (item: string) =>
    setTicked((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]));

  const save = () => {
    recordSession({ source: "four-skills", scope, correct: ticked.length, total: items.length });
    setSaved(true);
  };

  return (
    <div className="mt-6 rounded-2xl border border-border bg-card p-5">
      <h4 className="flex items-center gap-2 text-sm font-semibold">
        <CheckCircle2 className="h-4 w-4 text-primary" />
        {title}
      </h4>
      <ul className="mt-3 space-y-1">
        {items.map((item) => {
          const checked = ticked.includes(item);
          return (
            <li key={item}>
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
                  onChange={() => toggle(item)}
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

export function SpeakingTrainer() {
  const [taskRange, setTaskRange] = useState(speakingGroups[0].taskRange);
  const [promptIndex, setPromptIndex] = useState(0);
  const group = useMemo(
    () => speakingGroups.find((g) => g.taskRange === taskRange) as TaskGroup<SpeakingPrompt>,
    [taskRange],
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
      <TaskPicker groups={speakingGroups} activeRange={taskRange} onSelect={selectTask} />
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
          title="Score yourself against the criteria"
          items={prompt.checklist}
          scope="speaking"
        />
      )}
    </div>
  );
}

export function WritingTrainer() {
  const [taskRange, setTaskRange] = useState(writingGroups[0].taskRange);
  const [promptIndex, setPromptIndex] = useState(0);
  const group = useMemo(
    () => writingGroups.find((g) => g.taskRange === taskRange) as TaskGroup<WritingPrompt>,
    [taskRange],
  );
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

  const selectTask = useCallback((range: string) => {
    setTaskRange(range);
    setPromptIndex(0);
  }, []);

  const nextPrompt = useCallback(() => {
    setPromptIndex((i) => (i + 1) % group.items.length);
  }, [group]);

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <div>
      <TaskPicker groups={writingGroups} activeRange={taskRange} onSelect={selectTask} />
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
