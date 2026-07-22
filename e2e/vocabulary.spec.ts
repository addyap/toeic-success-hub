import { test, expect, type Locator, type Page } from "@playwright/test";

/**
 * Drives the vocabulary page's two study modes end to end — flashcards
 * (flip, navigate, shuffle, gloss language) and quiz (answer, score,
 * reset, next question). Neither has ever been driven by an automated
 * test before; only questionBank.test.ts (data shape) and manual browser
 * passes existed.
 *
 * Unlike /listening-reading and /mock-test, this page has no async
 * data-fetch gate to wait on (the ~190-term vocab list is small enough to
 * import statically) — the flashcard is already in the server-rendered
 * HTML the instant the page loads, well before React hydrates and wires up
 * its onClick. So the very first interaction in each test uses a
 * click-and-poll retry instead of a single click: every button here is
 * idempotent to click twice (reselecting the same filter/tab/language is a
 * no-op, not a toggle), so retrying is safe and just absorbs the race.
 */
async function clickUntil<T>(
  locator: Locator,
  read: () => Promise<T>,
  ready: (value: T) => boolean,
) {
  await expect
    .poll(async () => {
      await locator.click();
      return ready(await read());
    })
    .toBe(true);
}

test.describe("flashcards", () => {
  test("flip reveals the definition, and Prev/Next/Shuffle all change the card", async ({
    page,
  }) => {
    await page.goto("/vocabulary");

    const card = page.getByTestId("flashcard");
    await expect(card).toBeVisible();
    await expect(card).toHaveAttribute("data-flipped", "false");
    const term = await card.getAttribute("data-term");
    await expect(card.getByText("Tap to reveal meaning")).toBeVisible();

    await clickUntil(
      card,
      () => card.getAttribute("data-flipped"),
      (v) => v === "true",
    );
    await expect(card).toHaveAttribute("data-term", term!);
    await expect(card.getByText("Tap to reveal meaning")).toHaveCount(0);
    await expect(card.locator(".italic")).toBeVisible(); // the quoted example sentence

    // Next must move to a different card and reset the flip.
    await page.getByRole("button", { name: "Next" }).click();
    await expect(card).toHaveAttribute("data-flipped", "false");
    const secondTerm = await card.getAttribute("data-term");

    // Prev must go back to the first card.
    await page.getByRole("button", { name: "Prev" }).click();
    await expect(card).toHaveAttribute("data-term", term!);

    // Shuffle re-randomizes order and always resets to card 1, unflipped.
    await page.getByRole("button", { name: "Next" }).click(); // back to secondTerm
    await expect(card).toHaveAttribute("data-term", secondTerm!);
    await page.getByRole("button", { name: "Shuffle" }).click();
    await expect(page.getByText("Card 1 of")).toBeVisible();
    await expect(card).toHaveAttribute("data-flipped", "false");
  });

  test("a selected gloss language shows translated text, and None hides it again", async ({
    page,
  }) => {
    await page.goto("/vocabulary");
    await expect(page.getByTestId("flashcard")).toBeVisible();
    await expect(page.getByTestId("flashcard-gloss")).toHaveCount(0);

    // Arabic is the one RTL gloss language — verify both that the gloss
    // appears and that it's actually rendered right-to-left.
    const arabicBtn = page.getByRole("button", { name: "العربية" });
    await clickUntil(
      arabicBtn,
      () => page.getByTestId("flashcard-gloss").count(),
      (c) => c > 0,
    );
    await expect(page.getByTestId("flashcard-gloss")).toHaveAttribute("dir", "rtl");

    await page.getByRole("button", { name: "None", exact: true }).click();
    await expect(page.getByTestId("flashcard-gloss")).toHaveCount(0);
  });

  test("switching category filters the flashcard deck", async ({ page }) => {
    await page.goto("/vocabulary");
    await expect(page.getByTestId("flashcard")).toBeVisible();

    const cardCounter = page.getByText(/^Card 1 of \d+$/);
    // textContent, not innerText: this counter has Tailwind's `uppercase`
    // class, so innerText would return the CSS-rendered "CARD 1 OF N"
    // instead of the DOM's actual authored-case text.
    const readCount = async () => Number((await cardCounter.textContent())!.match(/of (\d+)/i)![1]);
    const allCount = await readCount();

    const financeBtn = page.getByRole("button", { name: "Finance", exact: false });
    await clickUntil(financeBtn, readCount, (n) => n !== allCount);
    const financeCount = await readCount();

    expect(financeCount).toBeGreaterThan(0);
    expect(financeCount).toBeLessThan(allCount);
  });
});

test.describe("quiz", () => {
  test("answering reveals exactly one correct option and updates the running score", async ({
    page,
  }) => {
    await page.goto("/vocabulary");

    const scoreEl = page.getByTestId("vocab-quiz-score");
    const quizTab = page.getByRole("button", { name: "Quiz" });
    await clickUntil(
      quizTab,
      () => scoreEl.count(),
      (c) => c > 0,
    );
    await expect(scoreEl).toHaveAttribute("data-total", "0");

    const options = page.getByTestId("vocab-quiz-option");
    await expect(options.first()).toBeVisible();
    const optionCount = await options.count();
    expect(optionCount).toBeGreaterThanOrEqual(2); // 4 normally; fewer only if a category is tiny

    const pickedTerm = await options.first().getAttribute("data-term");
    await options.first().click();

    // Exactly one option is ever marked correct, regardless of which was picked.
    const correctCount = await options.evaluateAll(
      (buttons) => buttons.filter((b) => b.textContent?.includes("Correct answer")).length,
    );
    expect(correctCount).toBe(1);

    // Passed as an argument rather than interpolated into a selector string —
    // a vocab term could in principle contain a quote character.
    const wasCorrect = await options.evaluateAll(
      (buttons, term) =>
        buttons.some(
          (b) => b.getAttribute("data-term") === term && b.textContent?.includes("Correct answer"),
        ),
      pickedTerm,
    );

    await expect(scoreEl).toHaveAttribute("data-total", "1");
    await expect(scoreEl).toHaveAttribute("data-correct", wasCorrect ? "1" : "0");

    // "Next question" must load a fresh question, unrevealed.
    await page.getByRole("button", { name: "Next question" }).click();
    await expect(page.getByTestId("vocab-quiz-option").first()).toBeEnabled();
    const correctCountAfterNext = await page
      .getByTestId("vocab-quiz-option")
      .evaluateAll(
        (buttons) => buttons.filter((b) => b.textContent?.includes("Correct answer")).length,
      );
    expect(correctCountAfterNext).toBe(0); // not revealed until answered again

    // Reset must zero the score without touching the in-progress question.
    await page.getByRole("button", { name: "Reset" }).click();
    await expect(scoreEl).toHaveAttribute("data-total", "0");
    await expect(scoreEl).toHaveAttribute("data-correct", "0");
  });
});
