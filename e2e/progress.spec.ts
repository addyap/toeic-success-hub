import { test, expect, type Page } from "@playwright/test";
import type { ProgressEntry, StreakState } from "../src/lib/progress";

/**
 * /progress is pure derived computation over localStorage — no clicks
 * needed, so seed the exact history/streak shape via addInitScript (runs
 * before any page script, so the app's own mount-time read sees it) and
 * assert the numbers it renders. This is the one page that has already
 * shipped a real bug once: a mock-test completion writes 8 history entries
 * (7 per-part + 1 "all" aggregate) for what is really one session, and an
 * earlier version double-counted them in the headline stats. These tests
 * pin that fix and the accuracy-trend math down.
 */

async function seed(page: Page, history: ProgressEntry[], streak?: StreakState) {
  await page.addInitScript(
    ([historyJson, streakJson]) => {
      localStorage.setItem("toeicpath:progress:history", historyJson);
      if (streakJson) localStorage.setItem("toeicpath:streak", streakJson);
    },
    [JSON.stringify(history), streak ? JSON.stringify(streak) : ""],
  );
}

function mockTestEntries(
  completedAt: number,
  totalCorrect: number,
  byPart: [number, number, number][],
) {
  // Mirrors mock-test.tsx's finishTest: one "all" aggregate entry plus one
  // entry per part, all sharing the same completedAt.
  const total = byPart.reduce((s, [, , t]) => s + t, 0);
  const entries: ProgressEntry[] = byPart.map(([part, correct, t]) => ({
    completedAt,
    source: "mock-test",
    scope: part as ProgressEntry["scope"],
    correct,
    total: t,
  }));
  entries.push({
    completedAt,
    source: "mock-test",
    scope: "all",
    correct: totalCorrect,
    total,
  });
  return entries;
}

test("mock-test entries don't double-count sessions or questions", async ({ page }) => {
  const history = [
    ...mockTestEntries(1000, 140, [
      [1, 5, 6],
      [2, 20, 25],
      [3, 30, 39],
      [4, 25, 30],
      [5, 22, 30],
      [6, 12, 16],
      [7, 26, 54],
    ]),
    {
      completedAt: 2000,
      source: "practice",
      scope: 1,
      correct: 5,
      total: 6,
    } satisfies ProgressEntry,
  ];
  await seed(page, history, { current: 3, longest: 5, lastActiveDate: "2026-01-01" });
  await page.goto("/progress");

  const sessionsCard = page.locator('[data-testid="stat-card"][data-label="Sessions completed"]');
  await expect(sessionsCard).toBeVisible();
  // 2 real sessions (1 mock test + 1 practice), not 9 (8 mock-test rows + 1 practice).
  await expect(sessionsCard).toContainText("2");
  // 200 (mock test total) + 6 (practice) = 206, not 200 counted 8 times over.
  await expect(sessionsCard).toContainText("206 questions answered");

  const streakCard = page.locator('[data-testid="stat-card"][data-label="Current streak"]');
  await expect(streakCard).toContainText("3 days");
  await expect(streakCard).toContainText("Best: 5 days");

  // Part 1's row must still see BOTH its mock-test breakdown entry and the
  // separate practice entry — the double-count fix only applies to the
  // top-level rollup, not the per-part granular view.
  const part1Row = page.locator('[data-testid="part-row"][data-part="1"]');
  await expect(part1Row).toHaveAttribute("data-sessions", "2");
});

test("a part's trend arrow reflects latest session vs. the average of everything before it", async ({
  page,
}) => {
  const history: ProgressEntry[] = [
    { completedAt: 1000, source: "practice", scope: 5, correct: 15, total: 30 }, // 50%
    { completedAt: 2000, source: "practice", scope: 5, correct: 15, total: 30 }, // 50%
    { completedAt: 3000, source: "practice", scope: 5, correct: 27, total: 30 }, // 90% (improved)
  ];
  await seed(page, history);
  await page.goto("/progress");

  const row = page.locator('[data-testid="part-row"][data-part="5"]');
  await expect(row).toBeVisible();
  await expect(row).toHaveAttribute("data-sessions", "3");
  await expect(row).toHaveAttribute("data-latest-pct", "90");
  // prior average of the first two (50%, 50%) is 50; 90 - 50 = +40.
  await expect(row).toHaveAttribute("data-delta", "40");

  // A single-session part has no prior average to compare against.
  const soloRow = page.locator('[data-testid="part-row"][data-part="6"]');
  await expect(soloRow).toHaveAttribute("data-sessions", "0"); // Part 6 never practiced in this seed
  await expect(soloRow).toContainText("Not practiced yet");
});

test("empty history shows the zero-state instead of a broken 0/0", async ({ page }) => {
  await seed(page, []);
  await page.goto("/progress");
  await expect(page.getByText(/complete a practice session/i)).toBeVisible();
  await expect(page.getByTestId("stat-card")).toHaveCount(0);
});
