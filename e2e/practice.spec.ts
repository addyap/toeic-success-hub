import { test, expect, type Locator, type Page } from "@playwright/test";

/**
 * Drives a real practice session end to end. Unlike questionBank.test.ts
 * (which only checks the data is well-formed), this clicks through the
 * actual UI a learner uses — the class of bug a data check can't catch
 * (e.g. a click handler wired to the wrong index, a stale `revealed` state).
 */

async function answeredCount(page: Page) {
  // Not anchored at the end: once a session completes, a "Best X/Y" badge
  // gets appended into the same text node right after "Answered X of Y".
  const text = await page.getByText(/^Answered \d+ of \d+/).innerText();
  const [, answered, total] = text.match(/^Answered (\d+) of (\d+)/)!;
  return { answered: Number(answered), total: Number(total) };
}

async function sessionScore(page: Page) {
  const text = await page
    .locator(".sticky")
    .filter({ hasText: "Your session" })
    .getByText(/^\d+ \/ \d+ correct$/)
    .innerText();
  const [, correct, total] = text.match(/^(\d+) \/ (\d+) correct$/)!;
  return { correct: Number(correct), total: Number(total) };
}

/** Answers one question's first option and returns whether it was correct,
 *  read from the aria-live status text rather than assumed in advance —
 *  the client shuffles option order/labels every session, so which button
 *  holds the correct answer isn't knowable ahead of time. */
async function answerFirstOption(question: Locator): Promise<boolean> {
  await question.locator('[data-testid="question-option"]').first().click();
  const status = question.locator('[aria-live="polite"]');
  await expect(status).not.toBeEmpty();
  const statusText = await status.innerText();
  return statusText === "Correct!";
}

test("complete a Part 1 practice session and see a matching final score", async ({ page }) => {
  await page.goto("/listening-reading");

  const questions = page.locator('[data-testid="practice-question"]');
  // Wait for the default "All parts" view to actually be interactive before
  // clicking the filter — clicking during hydration hits SSR-rendered markup
  // whose onClick isn't wired up yet, so the click is a silent no-op.
  await expect(questions.first()).toBeVisible();
  const allTotal = (await answeredCount(page)).total;

  await page.getByRole("button", { name: "Part 1", exact: true }).click();
  await expect
    .poll(async () => (await answeredCount(page)).total, {
      message: "practice list should switch to Part 1's own question count",
    })
    .not.toBe(allTotal);

  const start = await answeredCount(page);
  expect(start.answered).toBe(0);
  const initialScore = await sessionScore(page);
  expect(initialScore.correct).toBe(0);
  expect(initialScore.total).toBe(start.total);

  const count = await questions.count();
  expect(count).toBe(start.total); // Part 1 fits in one page (< 15/page), so every question is mounted

  let expectedCorrect = 0;
  for (let i = 0; i < count; i++) {
    const q = questions.nth(i);
    const wasCorrect = await answerFirstOption(q);
    if (wasCorrect) expectedCorrect++;

    // Every answered question reveals exactly one correct option and its
    // explanation — the real invariant a learner relies on, not just "a
    // click did something."
    await expect(q.getByText("Explanation")).toBeVisible();
    const correctCount = await q
      .locator('[data-testid="question-option"]')
      .evaluateAll(
        (buttons) => buttons.filter((b) => b.textContent?.includes("Correct answer")).length,
      );
    expect(correctCount).toBe(1);

    const progress = await answeredCount(page);
    expect(progress.answered).toBe(i + 1);
  }

  const finalScore = await sessionScore(page);
  expect(finalScore.correct).toBe(expectedCorrect);
  expect(finalScore.total).toBe(count);

  await expect(page.getByText(`Session complete — ${expectedCorrect}/${count}`)).toBeVisible();

  // Reset must clear every answer and let each question be answered again —
  // if it left the old `revealed` state in place, this re-click would be a
  // no-op and Explanation would never (re)appear.
  await page.getByRole("button", { name: "Reset" }).click();
  const afterReset = await answeredCount(page);
  expect(afterReset.answered).toBe(0);
  await expect(questions.first().getByText("Explanation")).toHaveCount(0);
  await answerFirstOption(questions.first());
  await expect(questions.first().getByText("Explanation")).toBeVisible();
});

test("switching the part filter loads that part's own question count", async ({ page }) => {
  await page.goto("/listening-reading");

  // "All parts" is the default selection; wait for its bank to actually load
  // before reading a baseline, or a filter click below could be checked
  // against content that hasn't re-rendered yet.
  await expect(page.locator('[data-testid="practice-question"]').first()).toBeVisible();
  const all = await answeredCount(page);
  expect(all.total).toBeGreaterThan(0);

  await page.getByRole("button", { name: "Part 5", exact: true }).click();
  await expect
    .poll(async () => (await answeredCount(page)).total, {
      message: "practice list should switch to Part 5's own question count",
    })
    .not.toBe(all.total);
  const part5 = await answeredCount(page);
  expect(part5.total).toBeGreaterThan(0);
  expect(part5.total).toBeLessThan(all.total);

  await page.getByRole("button", { name: "All parts", exact: true }).click();
  await expect
    .poll(async () => (await answeredCount(page)).total, {
      message: "practice list should switch back to the full bank",
    })
    .toBe(all.total);
});
