import type { PracticeQuestionData } from "@/components/PracticeQuestion";

/** Per-part dynamic-import loaders for the Listening & Reading question bank,
 *  keyed by part number. Deliberately its own module, NOT exported from
 *  src/data/listeningReadingQuestions.ts: that barrel statically imports all
 *  7 parts (so mock-test.tsx/adaptive-practice.tsx, which need every part
 *  regardless of filter, get them all from one place). If this loader map
 *  lived there too, any *static* import of it — e.g. `import { partLoaders }
 *  from "@/data/listeningReadingQuestions"` at the top of a route file —
 *  would eagerly pull in the barrel and, through it, every part's ~1/7th
 *  chunk, defeating the point of loading only the one part actually needed.
 *  Living here, importing this map costs nothing extra: each entry is only a
 *  function that dynamically imports its part when actually called. */
export const partLoaders: Record<number, () => Promise<{ default: PracticeQuestionData[] }>> = {
  1: () => import("@/data/listeningReading/part1"),
  2: () => import("@/data/listeningReading/part2"),
  3: () => import("@/data/listeningReading/part3"),
  4: () => import("@/data/listeningReading/part4"),
  5: () => import("@/data/listeningReading/part5"),
  6: () => import("@/data/listeningReading/part6"),
  7: () => import("@/data/listeningReading/part7"),
};
