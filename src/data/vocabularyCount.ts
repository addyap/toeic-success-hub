/**
 * Number of terms in src/data/vocabulary.ts, kept in its own module so pages
 * that only print the count (home, hero, pricing) don't bundle the whole
 * 300-term list. vocabularyCount.test.ts fails if the two drift apart.
 */
export const VOCAB_COUNT = 300;
