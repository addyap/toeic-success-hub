import type { PracticeQuestionData } from "@/components/PracticeQuestion";
import { shuffle } from "@/lib/utils";

const OPTION_LABELS = ["A", "B", "C", "D"];

/** Rewrites the "(A)"-style option references inside an explanation so they
 *  follow the options to their new positions. Without this, shuffling silently
 *  invalidates every explanation that names an option by letter — an
 *  explanation reading "(A), (B), and (C) are never mentioned" can end up
 *  citing the very option the app just marked correct. */
function remapExplanationRefs(explanation: string, oldToNew: Map<string, string>): string {
  const remapped = explanation.replace(
    /\(([A-D])\)/g,
    (match, letter: string) => `(${oldToNew.get(letter) ?? letter})`,
  );

  // Re-sort the enumerations of wrong answers ("(C), (A), and (B) are never
  // mentioned"), which read as sloppy once the remap has scrambled them.
  return remapped
    .replace(/\(([A-D])\), \(([A-D])\), and \(([A-D])\)/g, (_m, a, b, c) => {
      const [x, y, z] = [a, b, c].sort();
      return `(${x}), (${y}), and (${z})`;
    })
    .replace(/\(([A-D])\) and \(([A-D])\)/g, (_m, a, b) => {
      const [x, y] = [a, b].sort();
      return `(${x}) and (${y})`;
    });
}

/** One card's worth of questions: either a single standalone question or a
 *  Part 3/4 set sharing one recording. `start` is the index of the first
 *  question within the flat bank, which the page uses to read and write the
 *  matching slice of its flat answers array. */
export interface QuestionUnit {
  start: number;
  questions: PracticeQuestionData[];
}

/** Collapses a flat question list into render units, merging runs of
 *  questions that share a `groupId`. Questions in a set are always adjacent in
 *  the bank, and nothing reorders questions (only options are shuffled), so a
 *  single forward pass is enough. */
export function groupQuestions(questions: PracticeQuestionData[]): QuestionUnit[] {
  const units: QuestionUnit[] = [];
  for (let i = 0; i < questions.length;) {
    const groupId = questions[i].groupId;
    if (!groupId) {
      units.push({ start: i, questions: [questions[i]] });
      i += 1;
      continue;
    }
    let end = i;
    while (end < questions.length && questions[end].groupId === groupId) end += 1;
    units.push({ start: i, questions: questions.slice(i, end) });
    i = end;
  }
  return units;
}

/** Reorders `ordered` (the already-resolved option objects, still carrying
 *  their authored labels) into positions A/B/C/D, and remaps the explanation's
 *  letter references to follow. Shared by the random shuffle and by resuming a
 *  saved session. */
function relabelOptions(
  data: PracticeQuestionData,
  ordered: PracticeQuestionData["options"],
): PracticeQuestionData {
  const correctIndex = ordered.findIndex((opt) => opt.label === data.correct);
  const options = ordered.map((opt, i) => ({ ...opt, label: OPTION_LABELS[i] }));

  const oldToNew = new Map(ordered.map((opt, i) => [opt.label, OPTION_LABELS[i]]));

  return {
    ...data,
    options,
    correct: OPTION_LABELS[correctIndex],
    explanation: data.explanation
      ? remapExplanationRefs(data.explanation, oldToNew)
      : data.explanation,
  };
}

/** A random permutation of a question's options, expressed as the options'
 *  authored labels. Persisted when a session is saved so resuming it can
 *  reproduce the exact on-screen order — without which a saved answer letter
 *  would point at a different option after a fresh reshuffle. */
export function randomOptionOrder(data: PracticeQuestionData): string[] {
  return shuffle(data.options).map((opt) => opt.label);
}

/** Rebuilds the shuffled display of `data` from a saved `order` (authored
 *  labels in display sequence), so a resumed session looks exactly as it did
 *  when left. Falls back to the as-authored order if `order` doesn't map 1:1 to
 *  the options — e.g. a stale saved order after the question bank changed. */
export function applyOptionOrder(
  data: PracticeQuestionData,
  order: string[],
): PracticeQuestionData {
  const byLabel = new Map(data.options.map((opt) => [opt.label, opt]));
  const ordered = order.map((label) => byLabel.get(label));
  if (ordered.length !== data.options.length || ordered.some((opt) => !opt)) {
    return relabelOptions(data, data.options);
  }
  return relabelOptions(data, ordered as PracticeQuestionData["options"]);
}

/** Returns a copy of `data` with its options shuffled into a new random order
 *  and relabeled A/B/C/D to match, so the correct answer isn't always in the
 *  same position as authored in the source data. The explanation's letter
 *  references are remapped in step with the shuffle. */
export function shuffleQuestionOptions(data: PracticeQuestionData): PracticeQuestionData {
  return applyOptionOrder(data, randomOptionOrder(data));
}
