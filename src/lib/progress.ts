/** Cross-page progress tracking: session history (for accuracy trends) and
 *  a daily practice streak. Client-only (localStorage), no backend. */

export type ProgressScope = "all" | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface ProgressEntry {
  completedAt: number;
  source: "practice" | "mock-test";
  scope: ProgressScope;
  correct: number;
  total: number;
}

export interface StreakState {
  current: number;
  longest: number;
  lastActiveDate: string; // YYYY-MM-DD, local time
}

const HISTORY_KEY = "toeicpath:progress:history";
const STREAK_KEY = "toeicpath:streak";
const MAX_HISTORY = 500;

export function getHistory(): ProgressEntry[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function recordSession(entry: {
  source: ProgressEntry["source"];
  scope: ProgressScope;
  correct: number;
  total: number;
}): void {
  if (entry.total <= 0) return;
  try {
    const history = getHistory();
    history.push({ ...entry, completedAt: Date.now() });
    const trimmed =
      history.length > MAX_HISTORY ? history.slice(history.length - MAX_HISTORY) : history;
    localStorage.setItem(HISTORY_KEY, JSON.stringify(trimmed));
  } catch {
    // localStorage unavailable (private mode / disabled) — history just won't persist
  }
}

function todayString(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function daysBetween(a: string, b: string): number {
  const msPerDay = 24 * 60 * 60 * 1000;
  return Math.round(
    (new Date(`${a}T00:00:00`).getTime() - new Date(`${b}T00:00:00`).getTime()) / msPerDay,
  );
}

export function getStreak(): StreakState {
  try {
    const raw = localStorage.getItem(STREAK_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    if (
      parsed &&
      typeof parsed.current === "number" &&
      typeof parsed.longest === "number" &&
      typeof parsed.lastActiveDate === "string"
    ) {
      return parsed;
    }
  } catch {
    // fall through to default
  }
  return { current: 0, longest: 0, lastActiveDate: "" };
}

/** Call whenever the user completes a meaningful unit of practice (a
 *  practice session, a mock-test section, a vocab quiz answer). Increments
 *  the streak once per calendar day, resets it if a day was missed. */
export function recordActivity(): StreakState {
  const today = todayString();
  const prev = getStreak();
  let next: StreakState;
  if (prev.lastActiveDate === today) {
    next = prev;
  } else if (prev.lastActiveDate && daysBetween(today, prev.lastActiveDate) === 1) {
    const current = prev.current + 1;
    next = { current, longest: Math.max(prev.longest, current), lastActiveDate: today };
  } else {
    next = { current: 1, longest: Math.max(prev.longest, 1), lastActiveDate: today };
  }
  try {
    localStorage.setItem(STREAK_KEY, JSON.stringify(next));
  } catch {
    // localStorage unavailable — streak just won't persist
  }
  return next;
}
