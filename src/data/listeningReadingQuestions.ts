import type { PracticeQuestionData } from "@/components/PracticeQuestion";

/** Each of the 7 parts' ~800 questions live in their own module
 *  (src/data/listeningReading/part<N>.ts) so a session that only needs one
 *  part (see src/routes/listening-reading.tsx, via
 *  src/lib/listeningReadingParts.ts's per-part loaders) can dynamically
 *  import just that ~1/7th slice instead of the whole ~180KB (gzipped) bank.
 *
 *  This barrel statically imports all 7 and recombines them exactly as the
 *  single-file version used to, so mock-test.tsx and adaptive-practice.tsx —
 *  which both need every part regardless of filter — are unaffected: their
 *  existing `import("@/data/listeningReadingQuestions")` still resolves to
 *  the identical `listeningReadingQuestions`/`questionsByPart` shape and
 *  content as before. Bundler-wise, importing a module both statically (here)
 *  and dynamically (from listeningReadingParts.ts) still gives each part its
 *  own chunk, so this barrel's dynamic import fetches 7 small part chunks
 *  instead of one big one — same total bytes for mock-test/adaptive, no
 *  regression — while a single-part L&R session fetches only the one part
 *  chunk it actually needs, PROVIDED nothing statically imports a value from
 *  this barrel on a code path that single-part sessions also execute — that
 *  would eagerly pull in every part again (a one-line `import { x } from
 *  "@/data/listeningReadingQuestions"` at the top of a route file is enough
 *  to do it, even if `x` is never itself the full bank). The per-part loaders
 *  deliberately live in a separate module with no static edge to this one so
 *  that mistake isn't one accidental import away. */
import part1Questions from "./listeningReading/part1";
import part2Questions from "./listeningReading/part2";
import part3Questions from "./listeningReading/part3";
import part4Questions from "./listeningReading/part4";
import part5Questions from "./listeningReading/part5";
import part6Questions from "./listeningReading/part6";
import part7Questions from "./listeningReading/part7";

// Re-exported under their original names for existing per-part consumers
// (questionBank.test.ts's integrity checks) — the monolith used to export
// these directly, so this keeps that public API unchanged.
export {
  part1Questions,
  part2Questions,
  part3Questions,
  part4Questions,
  part5Questions,
  part6Questions,
  part7Questions,
};

export const listeningReadingQuestions: PracticeQuestionData[] = [
  ...part1Questions,
  ...part2Questions,
  ...part3Questions,
  ...part4Questions,
  ...part5Questions,
  ...part6Questions,
  ...part7Questions,
];

export interface QuestionPart {
  part: number;
  label: string;
  questions: PracticeQuestionData[];
}

export const questionsByPart: QuestionPart[] = [
  { part: 1, label: "Part 1 · Photographs", questions: part1Questions },
  { part: 2, label: "Part 2 · Question–Response", questions: part2Questions },
  { part: 3, label: "Part 3 · Conversations", questions: part3Questions },
  { part: 4, label: "Part 4 · Short Talks", questions: part4Questions },
  { part: 5, label: "Part 5 · Incomplete Sentences", questions: part5Questions },
  { part: 6, label: "Part 6 · Text Completion", questions: part6Questions },
  { part: 7, label: "Part 7 · Reading Comprehension", questions: part7Questions },
];

// Per-part dynamic-import loaders live in src/lib/listeningReadingParts.ts,
// deliberately NOT here — see that file's module doc for why co-locating
// them with this barrel (which statically imports every part, for
// mock-test.tsx/adaptive-practice.tsx) would defeat per-part lazy loading.
