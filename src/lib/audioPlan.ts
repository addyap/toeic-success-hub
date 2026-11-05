import type { PracticeQuestionData } from "@/components/PracticeQuestion";
import { audioManifest, type AudioManifestEntry } from "@/data/audioManifest";
import {
  audioKey,
  audioKeyForTurns,
  getAudioTurns,
  getGroupAudioTurns,
  letterCueKey,
  questionCueKey,
  questionCueText,
} from "./audioSource";

export interface AudioPlan {
  segments: AudioManifestEntry["segments"];
  text: string;
}

type Manifest = Record<string, AudioManifestEntry>;

/** Only permit local MP3 basenames, even if a generated manifest is malformed. */
export function validAudioEntry(
  entry: AudioManifestEntry | undefined,
): entry is AudioManifestEntry {
  return (
    !!entry &&
    entry.model === "kokoro-82m" &&
    entry.segments.length > 0 &&
    entry.segments.every((s) => /^[a-zA-Z0-9-]+\.mp3$/.test(s.file))
  );
}

export function promptAudioPlan(text: string, manifest: Manifest = audioManifest): AudioPlan {
  const entry = manifest[audioKey(text)];
  return { text, segments: validAudioEntry(entry) ? entry.segments : [] };
}

/** Resolve recordings and fallback speech together so cues, shuffle order, and
 * grouped questions stay identical on both playback paths. */
export function questionAudioPlan(
  data: PracticeQuestionData,
  group?: PracticeQuestionData[],
  manifest: Manifest = audioManifest,
): AudioPlan {
  const turns = group ? getGroupAudioTurns(group) : getAudioTurns(data);
  if (!turns.length) return { text: "", segments: [] };
  if (data.photo || data.spokenOptions) {
    const lead = turns.slice(0, turns.length - data.options.length);
    const entries = [
      ...lead.map((t) => manifest[audioKey(t.text)]),
      ...data.options.flatMap((o) => [manifest[letterCueKey(o.label)], manifest[audioKey(o.text)]]),
    ];
    return {
      text: [...lead.map((t) => t.text), ...data.options.map((o) => `${o.label}. ${o.text}`)].join(
        " ... ",
      ),
      segments: entries.every(validAudioEntry) ? entries.flatMap((e) => e.segments) : [],
    };
  }
  let n = 0;
  const text = turns
    .map((t) => (t.isQuestionPrompt ? `${questionCueText(++n)} ${t.text}` : t.text))
    .join(" ");
  const entry = manifest[audioKeyForTurns(turns)];
  if (!validAudioEntry(entry) || entry.segments.length !== turns.length)
    return { text, segments: [] };
  n = 0;
  const segments = [];
  for (let i = 0; i < turns.length; i++) {
    if (turns[i].isQuestionPrompt) {
      const cue = manifest[questionCueKey(++n)];
      if (!validAudioEntry(cue)) return { text, segments: [] };
      segments.push(...cue.segments);
    }
    segments.push(entry.segments[i]);
  }
  return { text, segments };
}
