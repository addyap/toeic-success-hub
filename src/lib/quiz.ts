import type { PracticeQuestionData } from "@/components/PracticeQuestion";
import { shuffle } from "@/lib/utils";

const OPTION_LABELS = ["A", "B", "C", "D"];

/** Returns a copy of `data` with its options shuffled into a new random order
 *  and relabeled A/B/C/D to match, so the correct answer isn't always in the
 *  same position as authored in the source data. */
export function shuffleQuestionOptions(data: PracticeQuestionData): PracticeQuestionData {
  const shuffled = shuffle(data.options);
  const correctIndex = shuffled.findIndex((opt) => opt.label === data.correct);
  const options = shuffled.map((opt, i) => ({ ...opt, label: OPTION_LABELS[i] }));
  return { ...data, options, correct: OPTION_LABELS[correctIndex] };
}
