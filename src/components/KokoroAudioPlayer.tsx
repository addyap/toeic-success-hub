import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Pause, Play, Volume2 } from "lucide-react";
import { publicUrl } from "@/lib/site";
import { claimAudioPlayback, releaseAudioPlayback } from "@/lib/audioPlayback";
import type { AudioPlan } from "@/lib/audioPlan";

function resetAudio(audio: HTMLAudioElement | null) {
  if (!audio) return;
  audio.onended = null;
  audio.onerror = null;
  audio.pause();
  audio.removeAttribute("src");
  audio.load();
}

/** Shared by every authored listening stimulus. Speech fallback is opt-in:
 * device speech can interrupt assistive technology and isn't a Kokoro voice. */
export function KokoroAudioPlayer({
  plan,
  label,
  resetKey,
  stopNow,
  hint,
}: {
  plan: AudioPlan;
  label: string;
  resetKey?: number;
  stopNow?: boolean;
  hint?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const [speechFailed, setSpeechFailed] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);
  const generation = useRef(0);
  const segment = useRef(0);
  const loadTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const warningId = useId();
  const fallback = failed || !plan.segments.length;
  // String identity prevents re-renders from restarting an unchanged sequence.
  const identity = JSON.stringify(plan);

  const stop = useCallback(() => {
    generation.current++;
    clearTimeout(loadTimer.current);
    resetAudio(audioRef.current);
    if (utterRef.current) {
      utterRef.current.onend = null;
      utterRef.current.onerror = null;
      utterRef.current = null;
      window.speechSynthesis.cancel();
    }
    setPlaying(false);
    releaseAudioPlayback(stop);
  }, []);

  useEffect(() => {
    setSpeechSupported("speechSynthesis" in window && "SpeechSynthesisUtterance" in window);
  }, []);
  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      stop();
      // Passive cleanup can run after React clears the DOM ref.
      resetAudio(audio);
    };
  }, [stop]);
  useEffect(() => {
    stop();
    setFailed(false);
    setSpeechFailed(false);
  }, [identity, resetKey, stop]);
  useEffect(() => {
    if (stopNow) stop();
  }, [stopNow, stop]);

  const toggle = () => {
    if (playing) return stop();
    claimAudioPlayback(stop);
    const token = ++generation.current;
    setPlaying(true);
    if (fallback) {
      try {
        const utterance = new SpeechSynthesisUtterance(plan.text);
        utterance.lang = "en-US";
        utterance.rate = 0.85;
        utterance.onend = () => {
          if (generation.current === token) stop();
        };
        utterance.onerror = () => {
          if (generation.current !== token) return;
          stop();
          setSpeechFailed(true);
        };
        utterRef.current = utterance;
        window.speechSynthesis.speak(utterance);
      } catch {
        stop();
        setSpeechFailed(true);
      }
      return;
    }
    segment.current = 0;
    const playSegment = () => {
      const audio = audioRef.current;
      if (!audio || generation.current !== token) return;
      const fail = () => {
        if (generation.current !== token) return;
        stop();
        setFailed(true);
      };
      audio.onerror = fail;
      audio.onended = () => {
        if (generation.current !== token) return;
        if (++segment.current < plan.segments.length) playSegment();
        else stop();
      };
      audio.src = publicUrl(`/audio/${plan.segments[segment.current].file}`);
      // Play directly from the gesture, including on Safari. Stale rejections
      // after Stop/reset/unmount must not switch the next question to fallback.
      const timer = setTimeout(fail, 15_000);
      loadTimer.current = timer;
      try {
        void audio
          .play()
          .then(() => clearTimeout(timer))
          .catch(fail);
      } catch {
        fail();
      }
    };
    playSegment();
  };

  return (
    <div
      role="group"
      aria-label={`Audio: ${label}`}
      className="mt-3 flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 p-3"
    >
      <audio ref={audioRef} preload="none" className="hidden" />
      <button
        type="button"
        onClick={toggle}
        disabled={!plan.text || (fallback && (!speechSupported || speechFailed))}
        aria-label={playing ? "Stop audio" : fallback ? "Play with device voice" : "Play audio"}
        aria-describedby={fallback ? warningId : undefined}
        className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft transition hover:opacity-90 active:scale-95 disabled:opacity-50"
      >
        {playing ? <Pause className="h-5 w-5" /> : <Play className="ml-0.5 h-5 w-5" />}
      </button>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 text-xs font-semibold text-primary">
          <Volume2 className="h-3.5 w-3.5" />
          <span className="truncate">{label}</span>
        </div>
        <p role="status" className="mt-1 text-xs text-muted-foreground">
          {playing
            ? "Playing… listen carefully."
            : fallback
              ? speechSupported && !speechFailed
                ? "Recording unavailable. You can play with your device's English voice."
                : "Audio unavailable. Use the transcript after answering, or the printed speaking prompt."
              : (hint ?? "Tap play to hear the audio. Transcript appears after you answer.")}
        </p>
        {fallback && (
          <p id={warningId} className="sr-only">
            Device speech may interrupt a screen reader's voice.
          </p>
        )}
      </div>
    </div>
  );
}
