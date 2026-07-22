import { test, expect, type Page } from "@playwright/test";

/**
 * Drives a full mock test start-to-results. This is the highest-value path
 * to protect: it has its own timers, a strictly one-way listening→reading
 * transition, and a scoring pipeline that's easy to silently break (see the
 * double-counting bug this exact feature shipped once — recorded in project
 * memory). A wrong score here is the definition of "refund the customer."
 *
 * Submitting a phase never requires answering every question, so this
 * answers only a handful (by design) rather than clicking through 200
 * questions — that keeps the test fast without skipping the real risk
 * areas (phase transition, deadline handling, final scoring).
 */

/** Clicks a specific question's first option (indexed within whatever list
 *  is currently rendered — the phase view indexes 0-based within its own
 *  section, review mode indexes 0-based across the combined 200) and
 *  returns which option label it picked — unknowable in advance since
 *  options are shuffled per session. */
async function answerByIndex(page: Page, index: number) {
  const q = page.locator(`[data-testid="practice-question"][data-index="${index}"]`);
  const option = q.locator('[data-testid="question-option"]').first();
  const label = await option.getAttribute("data-label");
  await option.click();
  return label!;
}

/** Clicks "Load N more" in the review list until the given absolute index is
 *  rendered (or the button runs out, meaning everything is already shown).
 *  Each click loads another batch of question cards above the button,
 *  shifting its position — scrolling it into view before every click avoids
 *  an occasional actionability timeout from clicking mid-shift. */
async function revealReviewIndex(page: Page, index: number) {
  const target = page.locator(`[data-testid="practice-question"][data-index="${index}"]`);
  const loadMore = page.getByRole("button", { name: /^Load \d+ more/ });
  while ((await target.count()) === 0 && (await loadMore.count()) > 0) {
    await loadMore.scrollIntoViewIfNeeded();
    await loadMore.click();
  }
}

/** In the post-submit review (fully revealed), reports whether the given
 *  previously-picked option is marked as the correct answer. */
async function wasCorrectInReview(page: Page, index: number, label: string) {
  await revealReviewIndex(page, index);
  const opt = page.locator(
    `[data-testid="practice-question"][data-index="${index}"] [data-testid="question-option"][data-label="${label}"]`,
  );
  const text = await opt.textContent();
  return text?.includes("Correct answer") ?? false;
}

test("complete a full mock test and get an internally-consistent score", async ({ page }) => {
  await page.goto("/mock-test");

  await page.getByRole("button", { name: "Start the mock test" }).click();

  const phase = page.locator('[data-testid="mock-test-phase"]');
  await expect(phase).toHaveAttribute("data-phase", "listening");
  await expect(page.getByText("Answered 0 of 100")).toBeVisible();
  await expect(page.getByText(/^44:5\d$|^45:00$/)).toBeVisible(); // fresh 45-minute clock

  // Part 1 items (indices 0-2 within the listening section) are standalone
  // questions, never grouped, so a direct index lookup is safe here.
  const listeningPicks: { index: number; label: string }[] = [];
  for (const index of [0, 1, 2]) {
    const label = await answerByIndex(page, index);
    listeningPicks.push({ index, label }); // absolute index in the 200-question review == index (listening comes first)
  }
  await expect(page.getByText("Answered 3 of 100")).toBeVisible();

  await page.getByRole("button", { name: "Submit Listening & continue to Reading" }).click();

  await expect(phase).toHaveAttribute("data-phase", "reading");
  await expect(page.getByText("Answered 0 of 100")).toBeVisible();
  await expect(page.getByText(/^7[45]:00$/)).toBeVisible(); // fresh 75-minute clock

  // Part 5 items open the reading section — also standalone questions.
  // The phase view indexes 0-based within the reading array alone; the
  // combined review later offsets these by the 100 listening questions.
  const readingPicks: { index: number; label: string }[] = [];
  for (const relIndex of [0, 1, 2]) {
    const label = await answerByIndex(page, relIndex);
    readingPicks.push({ index: 100 + relIndex, label });
  }
  await expect(page.getByText("Answered 3 of 100")).toBeVisible();

  await page.getByRole("button", { name: "Submit test & see results" }).click();

  const totalScore = page.locator('[data-testid="mock-test-total-score"]');
  await expect(totalScore).toBeVisible();
  const totalCorrect = Number(await totalScore.getAttribute("data-correct"));
  const totalQuestions = Number(await totalScore.getAttribute("data-total"));
  expect(totalQuestions).toBe(200);
  // Only 6 questions were ever answered, so at most 6 can be marked correct.
  expect(totalCorrect).toBeGreaterThanOrEqual(0);
  expect(totalCorrect).toBeLessThanOrEqual(6);

  const partRows = page.locator('[data-testid="mock-test-part-row"]');
  await expect(partRows).toHaveCount(7);
  const [partCorrectSum, partTotalSum] = await partRows.evaluateAll((rows) => [
    rows.reduce((sum, r) => sum + Number(r.getAttribute("data-correct")), 0),
    rows.reduce((sum, r) => sum + Number(r.getAttribute("data-total")), 0),
  ]);
  expect(partCorrectSum).toBe(totalCorrect); // per-part breakdown must add up to the headline score
  expect(partTotalSum).toBe(200);

  // Cross-check the headline number against what was actually picked: open
  // the review, look up each of the 6 answered questions by the exact option
  // label chosen mid-test, and confirm the count of "this was correct"
  // matches totalCorrect exactly — not just bounded by it.
  await page.getByRole("button", { name: /Review all \d+ answers/ }).click();
  let expectedCorrect = 0;
  for (const { index, label } of [...listeningPicks, ...readingPicks]) {
    if (await wasCorrectInReview(page, index, label)) expectedCorrect++;
  }
  expect(expectedCorrect).toBe(totalCorrect);
});
