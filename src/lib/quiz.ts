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

/** Returns a copy of `data` with its options shuffled into a new random order
 *  and relabeled A/B/C/D to match, so the correct answer isn't always in the
 *  same position as authored in the source data. The explanation's letter
 *  references are remapped in step with the shuffle. */
export function shuffleQuestionOptions(data: PracticeQuestionData): PracticeQuestionData {
  const shuffled = shuffle(data.options);
  const correctIndex = shuffled.findIndex((opt) => opt.label === data.correct);
  const options = shuffled.map((opt, i) => ({ ...opt, label: OPTION_LABELS[i] }));

  const oldToNew = new Map(shuffled.map((opt, i) => [opt.label, OPTION_LABELS[i]]));

  return {
    ...data,
    options,
    correct: OPTION_LABELS[correctIndex],
    explanation: data.explanation
      ? remapExplanationRefs(data.explanation, oldToNew)
      : data.explanation,
  };
}
