/** Lightweight spaced-repetition tracking for the vocabulary quiz: terms
 *  missed recently are weighted to reappear more often, terms answered
 *  correctly gradually decay back toward the normal frequency. Not a full
 *  SM-2 scheduler — just enough to make weak terms resurface sooner. */

export interface VocabTermStat {
  misses: number;
  lastSeen: number;
}

const STATS_KEY = "toeicpath:vocab:stats";
const MAX_MISS_WEIGHT = 5;

export function getVocabStats(): Record<string, VocabTermStat> {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export function recordVocabAnswer(term: string, correct: boolean): void {
  try {
    const stats = getVocabStats();
    const prevMisses = stats[term]?.misses ?? 0;
    const misses = correct ? Math.max(0, prevMisses - 1) : prevMisses + 1;
    stats[term] = { misses, lastSeen: Date.now() };
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch {
    // localStorage unavailable — stats just won't persist
  }
}

/** Picks a random term, weighting recently-missed terms higher so they
 *  resurface sooner. Every term still has a nonzero chance of being picked. */
export function weightedPickTerm<T>(items: T[], getTerm: (item: T) => string): T {
  if (items.length === 0) throw new Error("weightedPickTerm: items must be non-empty");
  const stats = getVocabStats();
  const weights = items.map((item) => {
    const misses = Math.min(stats[getTerm(item)]?.misses ?? 0, MAX_MISS_WEIGHT);
    return 1 + misses * 3;
  });
  const total = weights.reduce((a, b) => a + b, 0);
  let roll = Math.random() * total;
  for (let i = 0; i < items.length; i++) {
    roll -= weights[i];
    if (roll <= 0) return items[i];
  }
  return items[items.length - 1];
}

export function countWeakTerms(): number {
  const stats = getVocabStats();
  return Object.values(stats).filter((s) => s.misses > 0).length;
}
