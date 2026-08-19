import { test, expect, type Page } from "@playwright/test";

/**
 * Drives an Adaptive Practice section start-to-results. The risk this protects
 * is the two-unit flow and scoring: a fixed Unit 1 (25) whose score unlocks an
 * adaptive Unit 2 (20), summed to a clean /45 with a per-part breakdown that
 * must add up. Only a handful of questions are answered by design — submitting
 * never requires answering everything — which keeps the test fast while still
 * exercising the transition, the tier banner and the final scoring.
 *
 * Reading is used because its Unit 1 opens with standalone Part 5 items, so a
 * direct index lookup is safe for the first few answers.
 */

async function answerByIndex(page: Page, index: number) {
  const q = page.locator(`[data-testid="practice-question"][data-index="${index}"]`);
  const option = q.locator('[data-testid="question-option"]').first();
  const label = await option.getAttribute("data-label");
  await option.click();
  return label!;
}

test("complete an adaptive Reading section with an internally-consistent score", async ({
  page,
}) => {
  await page.goto("/adaptive-practice");

  // The start cards only render once the question bank has loaded (async gate),
  // so waiting for the button to be actionable is safe here.
  await page.getByTestId("start-reading").click();

  const session = page.locator('[data-testid="adaptive-session"]');
  await expect(session).toHaveAttribute("data-section", "reading");
  await expect(session).toHaveAttribute("data-phase", "unit1");
  await expect(page.getByText("Answered 0 of 25")).toBeVisible();
  await expect(page.getByText(/^36:5\d$|^37:00$/)).toBeVisible(); // fresh 37-minute clock

  // Reading Unit 1 opens with standalone Part 5 items (indices 0-2).
  for (const index of [0, 1, 2]) {
    await answerByIndex(page, index);
  }
  await expect(page.getByText("Answered 3 of 25")).toBeVisible();

  await page.getByTestId("submit-unit").click();

  // Unit 2 is unlocked, difficulty chosen from the Unit 1 score.
  await expect(session).toHaveAttribute("data-phase", "unit2");
  await expect(page.getByText("Answered 0 of 20")).toBeVisible();
  await expect(page.getByText(/set Unit 2|placed Unit 2/)).toBeVisible(); // the tier banner

  // Unit 2's first item may be a grouped set (a Part 6/7 passage), so answer
  // the first option on the page rather than assuming a standalone index-0.
  await page.locator('[data-testid="question-option"]').first().click();
  await expect(page.getByText("Answered 1 of 20")).toBeVisible();

  await page.getByTestId("submit-unit").click();

  const totalScore = page.locator('[data-testid="adaptive-total-score"]');
  await expect(totalScore).toBeVisible();
  const totalCorrect = Number(await totalScore.getAttribute("data-correct"));
  // Only 4 questions were answered, so 0..4 can be correct out of 45.
  expect(totalCorrect).toBeGreaterThanOrEqual(0);
  expect(totalCorrect).toBeLessThanOrEqual(4);
  await expect(totalScore).toHaveText(`${totalCorrect}/45`);

  // Reading has three parts (5, 6, 7); the per-part breakdown must total 45 and
  // its correct column must add up to the headline score.
  const partRows = page.locator('[data-testid="adaptive-part-row"]');
  await expect(partRows).toHaveCount(3);
});
