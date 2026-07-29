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
import { Mic, Square, RotateCcw, Play, Clock, PenLine, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { recordActivity } from "@/lib/progress";
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

function TaskPicker<T extends { id: string; taskRange: string; taskName: string }>({
  items,
  activeId,
  onSelect,
}: {
  items: readonly T[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onSelect(item.id)}
          className={cn(
            "rounded-full border px-4 py-2 text-left text-sm font-medium transition",
            item.id === activeId
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card text-foreground hover:bg-muted",
          )}
        >
          {/* The question number is de-emphasised, but only on the unselected
              chips — dimming it against the filled primary background drops
              contrast below the WCAG AA 4.5:1 threshold. */}
          <span className={cn(item.id !== activeId && "opacity-70")}>Q{item.taskRange}</span> ·{" "}
          {item.taskName}
        </button>
      ))}
    </div>
  );
}

function Checklist({ items, title }: { items: string[]; title: string }) {
  return (
    <div className="mt-6 rounded-2xl border border-border bg-card p-5">
      <h4 className="flex items-center gap-2 text-sm font-semibold">
        <CheckCircle2 className="h-4 w-4 text-primary" />
        {title}
      </h4>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-muted-foreground">
            <span
              aria-hidden="true"
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

type SpeakingPhase = "idle" | "prep" | "speaking" | "done";

export function SpeakingTrainer() {
  const [promptId, setPromptId] = useState(speakingPrompts[0].id);
  const prompt = useMemo(
    () => speakingPrompts.find((p) => p.id === promptId) as SpeakingPrompt,
    [promptId],
  );
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

  // Switching task resets the drill.
  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [promptId]);

  const timerLabel =
    phase === "prep" ? "Preparation" : phase === "speaking" ? "Speak now" : "Ready";
  const timerValue = phase === "prep" ? prepLeft : phase === "speaking" ? speakLeft : null;

  return (
    <div>
      <TaskPicker items={speakingPrompts} activeId={promptId} onSelect={setPromptId} />

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

        <blockquote className="mt-5 border-l-2 border-primary/40 pl-4 text-base leading-relaxed text-foreground">
          {prompt.prompt}
        </blockquote>

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
        <Checklist title="Score yourself against the criteria" items={prompt.checklist} />
      )}
    </div>
  );
}

export function WritingTrainer() {
  const [promptId, setPromptId] = useState(writingPrompts[0].id);
  const prompt = useMemo(
    () => writingPrompts.find((p) => p.id === promptId) as WritingPrompt,
    [promptId],
  );

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
  }, [prompt]);

  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [promptId]);

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <div>
      <TaskPicker items={writingPrompts} activeId={promptId} onSelect={setPromptId} />

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
              Start · {prompt.minutes} min
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
          <Checklist title="Check your response against the criteria" items={prompt.checklist} />
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
