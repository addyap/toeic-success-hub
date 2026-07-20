import type { PracticeQuestionData } from "@/components/PracticeQuestion";

type AudioSourceInput = Pick<
  PracticeQuestionData,
  "photo" | "spokenOptions" | "listening" | "context" | "options"
>;

export interface AudioTurn {
  /** Who speaks this turn. "narrator" covers Part 1 photo statements, Part 2
   *  single questions/statements, Part 4 monologues, and the question prompt
   *  read aloud after a Part 3/4 passage — matching how the real TOEIC test
   *  has a narrator read the printed question aloud after the recording. */
  speaker: "M" | "W" | "narrator";
  /** True for the trailing "Question: ...?" prompt read after a Part 3/4
   *  passage, so voice-assignment can give it a distinct, consistent voice
   *  instead of it being read by whichever speaker's turn it was glued to. */
  isQuestionPrompt?: boolean;
  text: string;
}

const TRAILING_QUESTION_RE = /\n\nQuestion:\s*(.*)$/s;

/** Splits a question's spoken content into per-speaker turns: Part 1 photo
 *  statements as one turn per option (see note below), Part 3 dialogues
 *  split by (M)/(W) tag, Part 2/4 single-speaker text as one narrator turn,
 *  and (for Part 3/4) the trailing "Question: ...?" line pulled out as its
 *  own turn — otherwise it would be read aloud as if it were part of the
 *  last speaker's dialogue.
 *
 *  Part 1 turns are keyed and looked up individually (by each turn's own
 *  text, via `audioKey`), never as a combined block — the client shuffles
 *  option order/labels every session to avoid a gameable answer position,
 *  so a single fixed recording of "A. ... B. ... C. ... D." would drift out
 *  of sync with whatever the current shuffle displays. Keying per-statement
 *  keeps each clip matched to its content regardless of on-screen position. */
export function getAudioTurns(data: AudioSourceInput): AudioTurn[] {
  if (data.photo) {
    return data.options.map((o) => ({ speaker: "narrator", text: o.text }));
  }
  if (!data.listening || !data.context) return [];

  const questionMatch = data.context.match(TRAILING_QUESTION_RE);
  const body = questionMatch ? data.context.slice(0, questionMatch.index) : data.context;

  const turns: AudioTurn[] = splitBody(body);

  if (questionMatch) {
    turns.push({ speaker: "narrator", isQuestionPrompt: true, text: questionMatch[1].trim() });
  }

  // Part 2: nothing is printed on the real test, so the audio has to carry
  // the three responses too, not just the question — read in the fixed
  // A/B/C order, independent of whatever order the shuffle displays them in.
  if (data.spokenOptions) {
    turns.push(...data.options.map((o) => ({ speaker: "narrator" as const, text: o.text })));
  }

  return turns;
}

/** Audio for a Part 3/4 question set: the conversation or talk once, followed
 *  by each of the set's questions read by the narrator — mirroring the real
 *  test, where one recording is followed by its three questions. The whole set
 *  shares a single clip, so it is keyed off every question in the set; adding
 *  or reworking any one of them re-keys the group and the clip regenerates. */
export function getGroupAudioTurns(
  questions: (AudioSourceInput & { question?: string })[],
): AudioTurn[] {
  const first = questions[0];
  if (!first?.listening || !first.context) return [];

  const questionMatch = first.context.match(TRAILING_QUESTION_RE);
  const body = questionMatch ? first.context.slice(0, questionMatch.index) : first.context;

  const turns = splitBody(body);
  for (const q of questions) {
    const text = q.question?.trim();
    if (text) turns.push({ speaker: "narrator", isQuestionPrompt: true, text });
  }
  return turns;
}

/** Splits a conversation body into per-speaker turns, or returns a single
 *  narrator turn for monologues (Part 4) and single-speaker prompts. */
function splitBody(body: string): AudioTurn[] {
  const turns: AudioTurn[] = [];
  const dialogueTurns = body.split(/(?=\((?:M|W)\d?\))/g).filter((t) => t.trim().length > 0);
  if (dialogueTurns.length > 1 && /^\((?:M|W)\d?\)/.test(dialogueTurns[0])) {
    for (const turn of dialogueTurns) {
      const m = turn.match(/^\((M|W)\d?\)\s*(.*)$/s);
      turns.push({
        speaker: (m?.[1] as "M" | "W" | undefined) ?? "narrator",
        text: (m?.[2] ?? turn).trim(),
      });
    }
  } else {
    // Single-speaker body: strip a leading (M)/(W) tag if present and a
    // "Question:"/"Statement:" label with surrounding quotes, since real
    // TOEIC audio speaks only the utterance itself, not the printed label.
    const cleaned = body
      .replace(/^\((M|W)\d?\)\s*/, "")
      .replace(/^(Question|Statement):\s*/i, "")
      .replace(/^"(.*)"$/s, "$1")
      .trim();
    turns.push({ speaker: "narrator", text: cleaned });
  }
  return turns;
}

/** Deterministic, dependency-free string hash (works identically in Node and
 *  the browser) used to key the audio manifest. Must stay in sync with
 *  scripts/generate-audio.ts, which computes the same key from the same
 *  turns so playback can look up what the generator produced. */
export function audioKey(text: string): string {
  let h1 = 0xdeadbeef ^ text.length;
  let h2 = 0x41c6ce57 ^ text.length;
  for (let i = 0; i < text.length; i++) {
    const ch = text.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  const hi = 2097151 & h2;
  const lo = h1 >>> 0;
  return (hi * 4294967296 + lo).toString(36);
}

export function audioKeyForTurns(turns: AudioTurn[]): string {
  const combined = turns
    .map((t) => `${t.speaker}${t.isQuestionPrompt ? "?" : ""}|${t.text}`)
    .join("");
  return audioKey(combined);
}
