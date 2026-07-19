#!/usr/bin/env bun
/**
 * Generates OpenAI TTS audio for every Part 1-4 practice question (the ones
 * with `photo` or `listening` set) and writes public/audio/*.mp3 plus
 * src/data/audioManifest.ts, which the app reads at runtime to play real
 * speech instead of falling back to the browser's built-in speechSynthesis.
 *
 * Usage:
 *   OPENAI_API_KEY=sk-... bun run generate:audio
 * or put OPENAI_API_KEY in .env.local (Bun loads it automatically; it's
 * already gitignored via the *.local rule).
 *
 * Safe to re-run after adding new content: existing audio files are skipped
 * unless --force is passed. Only questions new since the last run get
 * synthesized.
 */
import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import OpenAI from "openai";
import { listeningReadingQuestions } from "../src/data/listeningReadingQuestions";
import {
  getAudioTurns,
  getGroupAudioTurns,
  audioKeyForTurns,
  audioKey,
  type AudioTurn,
} from "../src/lib/audioSource";
import { groupQuestions } from "../src/lib/quiz";
import type { PracticeQuestionData } from "../src/components/PracticeQuestion";

const MODEL = "gpt-4o-mini-tts";
// Fixed voice for the printed "Question: ...?" prompt read after a Part 3/4
// passage, kept consistent site-wide — matches the real TOEIC test, where a
// single narrator reads every question regardless of who's in the recording.
const NARRATOR_VOICE = "alloy";
const ALL_VOICES = ["alloy", "nova", "onyx", "shimmer"];
const SPEAKER_VOICE_PAIRS: { M: string; W: string }[] = [
  { M: "onyx", W: "nova" },
  { M: "alloy", W: "shimmer" },
];

const FORCE = process.argv.includes("--force");

const AUDIO_DIR = new URL("../public/audio/", import.meta.url);
const MANIFEST_PATH = new URL("../src/data/audioManifest.ts", import.meta.url);

if (!process.env.OPENAI_API_KEY) {
  console.error("OPENAI_API_KEY is not set. Put it in .env.local or export it in your shell.");
  process.exit(1);
}

const client = new OpenAI();

interface ManifestSegment {
  voice: string;
  file: string;
}
interface ManifestEntry {
  model: string;
  segments: ManifestSegment[];
}

const manifest: Record<string, ManifestEntry> = {};
let conversationIndex = 0;
let singleVoiceIndex = 0;

async function synth(text: string, voice: string, file: string) {
  const dest = new URL(file, AUDIO_DIR);
  if (!FORCE && existsSync(dest)) return;
  const res = await client.audio.speech.create({
    model: MODEL,
    voice,
    input: text,
    response_format: "mp3",
  });
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
}

function voiceFor(turn: AudioTurn, pair: { M: string; W: string } | null): string {
  if (turn.isQuestionPrompt) return NARRATOR_VOICE;
  if (pair && (turn.speaker === "M" || turn.speaker === "W")) return pair[turn.speaker];
  return ALL_VOICES[singleVoiceIndex++ % ALL_VOICES.length];
}

/** `group` is the whole Part 3/4 set when `data` heads one: the clip then
 *  covers the recording plus every question in the set, matching what the
 *  player looks up at runtime. */
async function processItem(data: PracticeQuestionData, group?: PracticeQuestionData[]) {
  if (!data.photo && !data.listening) return;
  const turns = group ? getGroupAudioTurns(group) : getAudioTurns(data);
  if (turns.length === 0) return;

  if (data.photo) {
    // Each option's statement gets its own independently-keyed clip — never
    // one combined key for all four — so playback stays correct regardless
    // of the client-side answer shuffle, which reorders and relabels
    // options every session. The pre-recorded audio must match by content
    // (the statement's own text), not by position.
    for (const turn of turns) {
      const key = audioKey(turn.text);
      if (manifest[key]) continue;
      const voice = ALL_VOICES[singleVoiceIndex++ % ALL_VOICES.length];
      const file = `${key}-0.mp3`;
      await synth(turn.text, voice, file);
      manifest[key] = { model: MODEL, segments: [{ voice, file }] };
    }
    return;
  }

  const key = audioKeyForTurns(turns);
  if (manifest[key]) return; // identical content already processed this run

  const isDialogue = turns.some((t) => t.speaker === "M") && turns.some((t) => t.speaker === "W");
  const pair = isDialogue
    ? SPEAKER_VOICE_PAIRS[conversationIndex++ % SPEAKER_VOICE_PAIRS.length]
    : null;

  const manifestSegments: ManifestSegment[] = [];
  for (let i = 0; i < turns.length; i++) {
    const turn = turns[i];
    const voice = voiceFor(turn, pair);
    const file = `${key}-${i}.mp3`;
    await synth(turn.text, voice, file);
    manifestSegments.push({ voice, file });
  }
  manifest[key] = { model: MODEL, segments: manifestSegments };
}

async function main() {
  await mkdir(AUDIO_DIR, { recursive: true });
  let done = 0;
  // Walk in units so a Part 3/4 set is synthesized once, as a single clip.
  for (const unit of groupQuestions(listeningReadingQuestions)) {
    const isSet = unit.questions.length > 1;
    await processItem(unit.questions[0], isSet ? unit.questions : undefined);
    done += unit.questions.length;
    if (done % 25 < unit.questions.length) {
      console.log(`Processed ${done}/${listeningReadingQuestions.length} questions...`);
    }
  }

  const body = `// Generated by scripts/generate-audio.ts — do not edit by hand.
// Run \`bun run generate:audio\` (with OPENAI_API_KEY set) to regenerate.

export interface AudioManifestSegment {
  voice: string;
  file: string;
}

export interface AudioManifestEntry {
  model: string;
  segments: AudioManifestSegment[];
}

export const audioManifest: Record<string, AudioManifestEntry> = ${JSON.stringify(manifest, null, 2)};
`;
  await writeFile(MANIFEST_PATH, body);
  console.log(
    `Wrote ${Object.keys(manifest).length} manifest entries to ${MANIFEST_PATH.pathname}`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
