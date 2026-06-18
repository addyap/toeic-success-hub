import { useEffect, useRef, useState } from "react";
import { Check, X, Play, Pause, RotateCcw, Headphones, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PracticeQuestionData {
  prompt: string;
  context?: string;
  options: { label: string; text: string }[];
  correct: string;
  explanation: string;
  audio?: {
    label: string;
    durationSec: number;
  };
  /** When true, hide the context (transcript) until the user answers and
   *  use SpeechSynthesis to read the context aloud instead of the fake player. */
  listening?: boolean;
}

export interface PracticeQuestionProps {
  data: PracticeQuestionData;
  index?: number;
  picked?: string | null;
  onAnswer?: (label: string, correct: boolean) => void;
  resetKey?: number;
}

export function PracticeQuestion({ data, index, picked: pickedProp, onAnswer, resetKey }: PracticeQuestionProps) {
  const [internalPicked, setInternalPicked] = useState<string | null>(null);
  const controlled = pickedProp !== undefined;
  const picked = controlled ? pickedProp ?? null : internalPicked;
  const revealed = picked !== null;

  useEffect(() => {
    if (!controlled) setInternalPicked(null);
  }, [resetKey, controlled]);

  const handlePick = (label: string) => {
    if (revealed) return;
    const isCorrect = label === data.correct;
    if (!controlled) setInternalPicked(label);
    onAnswer?.(label, isCorrect);
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-soft sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          {typeof index === "number" && (
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">
              Question {index + 1}
            </div>
          )}
          <p className="mt-1 text-base font-medium text-foreground sm:text-lg">{data.prompt}</p>
          {data.listening && data.context && (
            <SpeechPlayer
              label={data.audio?.label ?? "Listening audio"}
              text={data.context}
              resetKey={resetKey}
            />
          )}
          {!data.listening && data.audio && (
            <AudioPlayer label={data.audio.label} durationSec={data.audio.durationSec} />
          )}
          {data.context && (!data.listening || revealed) && (
            <div className="mt-3">
              {data.listening && (
                <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Transcript
                </div>
              )}
              <p className="whitespace-pre-line rounded-lg bg-muted px-4 py-3 text-sm leading-relaxed text-muted-foreground">
                {data.context}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {data.options.map((opt) => {
          const isCorrect = opt.label === data.correct;
          const isPicked = picked === opt.label;
          return (
            <button
              key={opt.label}
              onClick={() => handlePick(opt.label)}
              disabled={revealed}
              className={cn(
                "flex w-full items-start gap-3 rounded-xl border px-4 py-3 text-left text-sm transition",
                !revealed && "border-border hover:border-primary/60 hover:bg-muted",
                revealed && isCorrect && "border-success/60 bg-success/10",
                revealed && isPicked && !isCorrect && "border-destructive/60 bg-destructive/10",
                revealed && !isPicked && !isCorrect && "opacity-60",
              )}
            >
              <span
                className={cn(
                  "grid h-7 w-7 shrink-0 place-items-center rounded-full border text-xs font-bold",
                  !revealed && "border-border text-muted-foreground",
                  revealed && isCorrect && "border-success bg-success text-primary-foreground",
                  revealed && isPicked && !isCorrect && "border-destructive bg-destructive text-destructive-foreground",
                )}
              >
                {revealed && isCorrect ? <Check className="h-4 w-4" /> : revealed && isPicked ? <X className="h-4 w-4" /> : opt.label}
              </span>
              <span className="pt-0.5">{opt.text}</span>
            </button>
          );
        })}
      </div>

      {revealed && (
        <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">Explanation</div>
          <p className="mt-1 text-sm leading-relaxed text-foreground">{data.explanation}</p>
        </div>
      )}
    </div>
  );
}

function SpeechPlayer({ label, text, resetKey }: { label: string; text: string; resetKey?: number }) {
  const [speaking, setSpeaking] = useState(false);
  const [supported, setSupported] = useState(true);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setSupported(false);
    }
  }, []);

  const stop = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setSpeaking(false);
  };

  useEffect(() => () => stop(), []);
  useEffect(() => { stop(); }, [resetKey]);

  const toggle = () => {
    if (!supported) return;
    if (speaking) {
      stop();
      return;
    }
    // Strip speaker labels like "(M)" / "(W)" for cleaner TTS.
    const cleaned = text.replace(/\((M|W|M\d|W\d)\)/g, "").replace(/\s+/g, " ").trim();
    const u = new SpeechSynthesisUtterance(cleaned);
    u.rate = 0.85;
    u.pitch = 1;
    u.onend = () => setSpeaking(false);
    u.onerror = () => setSpeaking(false);
    utterRef.current = u;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
    setSpeaking(true);
  };

  return (
    <div className="mt-3 flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 p-3">
      <button
        type="button"
        onClick={toggle}
        disabled={!supported}
        aria-label={speaking ? "Stop audio" : "Play audio"}
        className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft transition hover:opacity-90 active:scale-95 disabled:opacity-50"
      >
        {speaking ? <Pause className="h-5 w-5" /> : <Play className="ml-0.5 h-5 w-5" />}
      </button>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 text-xs font-semibold text-primary">
          <Volume2 className="h-3.5 w-3.5" />
          <span className="truncate">{label}</span>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">
          {supported
            ? speaking
              ? "Playing… listen carefully, then answer below."
              : "Tap play to hear the audio (read aloud, slower pace). Transcript appears after you answer."
            : "Your browser does not support speech playback. Answer to reveal the transcript."}
        </p>
      </div>
    </div>
  );
}

function formatTime(sec: number) {
  const s = Math.max(0, Math.floor(sec));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, "0")}`;
}

function AudioPlayer({ label, durationSec }: { label: string; durationSec: number }) {
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const rafRef = useRef<number | null>(null);
  const lastTickRef = useRef<number | null>(null);

  useEffect(() => {
    if (!playing) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTickRef.current = null;
      return;
    }
    const tick = (t: number) => {
      if (lastTickRef.current == null) lastTickRef.current = t;
      const dt = (t - lastTickRef.current) / 1000;
      lastTickRef.current = t;
      setElapsed((e) => {
        const next = e + dt;
        if (next >= durationSec) {
          setPlaying(false);
          return durationSec;
        }
        return next;
      });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [playing, durationSec]);

  const pct = Math.min(100, (elapsed / durationSec) * 100);
  const ended = elapsed >= durationSec;

  const toggle = () => {
    if (ended) {
      setElapsed(0);
      setPlaying(true);
      return;
    }
    setPlaying((p) => !p);
  };

  const reset = () => {
    setPlaying(false);
    setElapsed(0);
  };

  // Static pseudo-waveform bars (deterministic for SSR stability)
  const bars = Array.from({ length: 32 }, (_, i) => 30 + ((i * 53) % 70));

  return (
    <div
      role="group"
      aria-label={`Audio: ${label}`}
      className="mt-3 flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 p-3"
    >
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause audio" : "Play audio"}
        className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft transition hover:opacity-90 active:scale-95"
      >
        {playing ? <Pause className="h-5 w-5" /> : <Play className="ml-0.5 h-5 w-5" />}
      </button>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 text-xs font-semibold text-primary">
          <Headphones className="h-3.5 w-3.5" />
          <span className="truncate">{label}</span>
          <span className="ml-auto font-mono tabular-nums text-muted-foreground">
            {formatTime(elapsed)} / {formatTime(durationSec)}
          </span>
        </div>
        <div className="relative mt-2 h-7">
          <div className="absolute inset-0 flex items-center gap-[2px] overflow-hidden rounded">
            {bars.map((h, i) => {
              const barPct = ((i + 0.5) / bars.length) * 100;
              const active = barPct <= pct;
              return (
                <span
                  key={i}
                  style={{ height: `${h}%` }}
                  className={cn(
                    "w-full flex-1 rounded-sm transition-colors",
                    active ? "bg-primary" : "bg-primary/25",
                  )}
                />
              );
            })}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={reset}
        aria-label="Restart audio"
        className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-card text-muted-foreground transition hover:text-primary"
      >
        <RotateCcw className="h-4 w-4" />
      </button>
    </div>
  );
}