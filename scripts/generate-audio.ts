#!/usr/bin/env bun
/**
 * Records audio for every Part 1-4 practice question (the ones with `photo`
 * or `listening` set) with Kokoro (https://huggingface.co/hexgrad/Kokoro-82M),
 * a free voice model that runs on this computer, and writes
 * public/audio/*.mp3 plus src/data/audioManifest.ts, which the app reads at
 * runtime to play real speech instead of falling back to the browser's
 * built-in speechSynthesis.
 *
 * One-off setup (needs `brew install uv ffmpeg espeak-ng`):
 *   bun run audio:setup
 * Then:
 *   bun run generate:audio
 *
 * Safe to re-run: validated matching recordings are reused. Use --check to
 * validate without synthesis, --voice / --narrator-voice to select allowlisted
 * voices, or --force to record again under fresh URLs. See docs/audio.md.
 */
import { mkdir, rename, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { listeningReadingQuestions } from "../src/data/listeningReadingQuestions";
import { speakingPrompts } from "../src/data/fourSkillsPrompts";
import {
  getAudioTurns,
  getGroupAudioTurns,
  audioKeyForTurns,
  audioKey,
  letterCueText,
  letterCueKey,
  questionCueText,
  questionCueKey,
  OPTION_LETTERS,
  type AudioTurn,
} from "../src/lib/audioSource";
import { groupQuestions } from "../src/lib/quiz";
import type { PracticeQuestionData } from "../src/components/PracticeQuestion";

import { audioManifest as previousManifest } from "../src/data/audioManifest";
import {
  MODEL,
  SYNTHESIS_VERSION,
  LEGACY_SYNTHESIS_VERSION,
  parseVoice,
  synthesisFile,
  validClip,
} from "./kokoro/cache";
import { KokoroWorker } from "./kokoro/worker";

const args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
  if (["--voice", "--narrator-voice"].includes(args[i])) {
    parseVoice(args[++i] ?? "");
    continue;
  }
  if (!["--check", "--force"].includes(args[i])) throw new Error(`Unknown option: ${args[i]}`);
}
if (args.includes("--check") && args.includes("--force"))
  throw new Error("--check and --force cannot be combined");
const CHECK = args.includes("--check");
function voiceOption(flag: string): string | undefined {
  const index = process.argv.indexOf(flag);
  if (index < 0) return undefined;
  return parseVoice(process.argv[index + 1] ?? "");
}
const selectedVoice = voiceOption("--voice");
// Kokoro voice names start with their accent: "a" American, "b" British. The
// real TOEIC mixes accents, so the voices below mix both.
// Fixed voice for the printed "Question: ...?" prompt read after a Part 3/4
// passage, kept consistent site-wide — matches the real TOEIC test, where a
// single narrator reads every question regardless of who's in the recording.
const NARRATOR_VOICE = voiceOption("--narrator-voice") ?? "am_michael";
const ALL_VOICES = selectedVoice
  ? [selectedVoice]
  : ["af_heart", "bm_george", "bf_emma", "am_fenrir", "af_bella"];
const SPEAKER_VOICE_PAIRS: { M: string; W: string }[] = [
  { M: "bm_george", W: "af_heart" },
  { M: "am_fenrir", W: "bf_emma" },
];

const FORCE = process.argv.includes("--force");

const AUDIO_DIR = new URL("../public/audio/", import.meta.url);
const MANIFEST_PATH = new URL("../src/data/audioManifest.ts", import.meta.url);

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const KOKORO_PYTHON = `${ROOT}.venv-kokoro/bin/python`;
let kokoro: KokoroWorker | undefined;
function worker() {
  if (!kokoro) {
    if (!existsSync(KOKORO_PYTHON))
      throw new Error("Run `bun run audio:setup` before generating missing audio.");
    kokoro = new KokoroWorker(KOKORO_PYTHON, [`${ROOT}scripts/kokoro-speak.py`]);
  }
  return kokoro;
}

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

/** Reuse only validated recordings with matching model and voice. Existing
 * shipped recordings retain their URLs; all new synthesis uses a config hash.
 * Never overwrite a published clip (even --force) or publish a partial file. */
async function synth(text: string, voice: string, legacyFile: string) {
  const file = synthesisFile(text, voice);
  const match = legacyFile.match(/^([a-z0-9]+)-(\d+)\.mp3$/);
  const prior = match ? previousManifest[match[1]] : undefined;
  const priorSegment = match ? prior?.segments[Number(match[2])] : undefined;
  if (
    !FORCE &&
    prior?.model === MODEL &&
    priorSegment?.voice === voice &&
    ((priorSegment.file === legacyFile && SYNTHESIS_VERSION === LEGACY_SYNTHESIS_VERSION) ||
      new RegExp(`^${file.slice(0, -4)}(?:-[0-9]+)?\\.mp3$`).test(priorSegment.file)) &&
    (await validClip(new URL(priorSegment.file, AUDIO_DIR), text))
  )
    return priorSegment.file;
  if (!FORCE && !CHECK && (await validClip(new URL(file, AUDIO_DIR), text))) return file;
  if (CHECK) throw new Error(`Missing, stale, or invalid audio: ${legacyFile} (${voice})`);

  // A forced rerender gets a fresh URL, even if configuration is unchanged.
  const output = FORCE ? file.replace(".mp3", `-${Date.now()}.mp3`) : file;
  const dest = new URL(output, AUDIO_DIR);
  const temporary = new URL(`${output}.tmp.mp3`, AUDIO_DIR);
  try {
    await worker().record(text, voice, fileURLToPath(temporary));
    if (!(await validClip(temporary, text)))
      throw new Error(`Kokoro produced invalid or truncated audio: ${output}`);
    await rename(temporary, dest);
    return output;
  } finally {
    await rm(temporary, { force: true });
  }
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

  if (data.photo || data.spokenOptions) {
    // Each turn (Part 1's statements, or Part 2's question plus its three
    // responses) gets its own independently-keyed clip — never one combined
    // key — so playback stays correct regardless of the client-side answer
    // shuffle, which reorders and relabels options every session. The
    // pre-recorded audio must match by content, not by position.
    for (const turn of turns) {
      const key = audioKey(turn.text);
      if (manifest[key]) continue;
      const voice = ALL_VOICES[singleVoiceIndex++ % ALL_VOICES.length];
      const file = await synth(turn.text, voice, `${key}-0.mp3`);
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
    const file = await synth(turn.text, voice, `${key}-${i}.mp3`);
    manifestSegments.push({ voice, file });
  }
  manifest[key] = { model: MODEL, segments: manifestSegments };
}

/** 4-Skills Speaking prompts that the real test speaks aloud (tasks 5–7, 8–10
 *  and 11). Keyed by content via `audioKey`, exactly like Part 1/2 turns, and
 *  read by the fixed narrator voice since a single examiner voice asks every
 *  question in the real test. */
async function processSpeakingPrompts() {
  const spoken = speakingPrompts.filter((p) => p.spoken);
  for (const prompt of spoken) {
    const key = audioKey(prompt.prompt);
    if (manifest[key]) continue;
    const file = await synth(prompt.prompt, NARRATOR_VOICE, `${key}-0.mp3`);
    manifest[key] = { model: MODEL, segments: [{ voice: NARRATOR_VOICE, file }] };
  }
  console.log(`Processed ${spoken.length} spoken 4-Skills prompts...`);
}

/** The shared spoken letter cues ("A.", "B.", "C.", "D.") played before each
 *  option in Part 1/2. Four clips, reused across every such question and read
 *  by the fixed narrator voice — the examiner announces the letters in the
 *  real test. Content-independent, so the client-side answer shuffle never
 *  affects them. */
async function processLetterCues() {
  for (const label of OPTION_LETTERS) {
    const key = letterCueKey(label);
    if (manifest[key]) continue;
    const file = await synth(letterCueText(label), NARRATOR_VOICE, `${key}-0.mp3`);
    manifest[key] = { model: MODEL, segments: [{ voice: NARRATOR_VOICE, file }] };
  }
  console.log(`Processed ${OPTION_LETTERS.length} option letter cues...`);
}

/** Spoken "Question 1.".."Question N." cues played before each question read
 *  after a Part 3/4 passage. `count` is the largest number of questions in any
 *  set, so we generate exactly the cues that can be used. Narrator voice, like
 *  the rest of the examiner speech. */
async function processQuestionCues(count: number) {
  for (let n = 1; n <= count; n++) {
    const key = questionCueKey(n);
    if (manifest[key]) continue;
    const file = await synth(questionCueText(n), NARRATOR_VOICE, `${key}-0.mp3`);
    manifest[key] = { model: MODEL, segments: [{ voice: NARRATOR_VOICE, file }] };
  }
  console.log(`Processed ${count} question-number cues...`);
}

async function main() {
  if (!CHECK) await mkdir(AUDIO_DIR, { recursive: true });
  let done = 0;
  let maxSetSize = 0;
  // Walk in units so a Part 3/4 set is synthesized once, as a single clip.
  for (const unit of groupQuestions(listeningReadingQuestions)) {
    const isSet = unit.questions.length > 1;
    if (isSet) maxSetSize = Math.max(maxSetSize, unit.questions.length);
    await processItem(unit.questions[0], isSet ? unit.questions : undefined);
    done += unit.questions.length;
    if (done % 25 < unit.questions.length) {
      console.log(`Processed ${done}/${listeningReadingQuestions.length} questions...`);
    }
  }

  // Must run in this same invocation, not as a separate script: the manifest
  // is rebuilt from scratch on every run and overwrites audioManifest.ts, so
  // synthesizing 4-Skills audio in a second pass would drop every L&R entry.
  await processSpeakingPrompts();
  await processLetterCues();
  await processQuestionCues(maxSetSize);

  if (CHECK) {
    if (JSON.stringify(manifest) !== JSON.stringify(previousManifest)) {
      throw new Error(
        "The manifest is stale; run `bun run generate:audio` and commit it with its recordings.",
      );
    }
    console.log(
      `Validated ${Object.keys(manifest).length} Kokoro manifest entries; no synthesis or writes.`,
    );
    return;
  }
  const body = `// Generated by scripts/generate-audio.ts — do not edit by hand.
// Run \`bun run generate:audio\` (after a one-off \`bun run audio:setup\`) to regenerate.

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
  const temporaryManifest = new URL(`${MANIFEST_PATH.href}.tmp`);
  try {
    await writeFile(temporaryManifest, body);
    await rename(temporaryManifest, MANIFEST_PATH);
  } finally {
    await rm(temporaryManifest, { force: true });
  }
  console.log(
    `Wrote ${Object.keys(manifest).length} manifest entries to ${MANIFEST_PATH.pathname}`,
  );
}

main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(() => kokoro?.close());
