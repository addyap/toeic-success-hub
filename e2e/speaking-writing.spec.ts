import { test, expect, type Locator, type Page } from "@playwright/test";

/**
 * Drives /speaking-writing: the writing exercises (word-count gate, draft
 * persistence, checklist) and both timer widgets (prep→response→done,
 * and a plain start/pause/reset countdown). The timers use real
 * setInterval-driven countdowns of up to 30 minutes — Playwright's Clock
 * API fast-forwards fake time instead of waiting in real time, so a test
 * can drive a full countdown to completion in milliseconds of wall time.
 *
 * Like /vocabulary, this page has no async data-fetch gate — the content
 * is in the server-rendered HTML immediately, before React hydrates and
 * wires up onClick/onChange. So the first interaction in each test is a
 * poll-and-retry (fill or click repeatedly until the expected state
 * shows up), safe here because every first action either sets an absolute
 * value (fill) or is idempotent to repeat (Start timer always resets to
 * the same starting state while idle/done).
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

async function fillUntil(locator: Locator, text: string, read: () => Promise<string | null>) {
  // Wider timeout than the config default: this is the one hydration-race
  // point in this file that showed real (if rare) variance under load.
  await expect
    .poll(
      async () => {
        await locator.fill(text);
        return read();
      },
      { timeout: 30_000 },
    )
    .toBe(String(text.trim().split(/\s+/).filter(Boolean).length));
}

test("writing exercise: word-count gate, draft persistence, and checklist", async ({ page }) => {
  await page.goto("/speaking-writing");

  const exercise = page.locator('[data-testid="writing-exercise"][data-id="email"]');
  await expect(exercise).toBeVisible();
  const wordCount = exercise.getByTestId("word-count");
  const textarea = exercise.getByPlaceholder("Type your reply here...");

  await expect(wordCount).toHaveAttribute("data-words", "0");
  await expect(exercise.getByText(/Add about \d+ more words/)).toBeVisible();

  // minWords is 100 for this exercise — under the target.
  await fillUntil(textarea, Array(50).fill("word").join(" "), () =>
    wordCount.getAttribute("data-words"),
  );
  await expect(exercise.getByText("Add about 50 more words to hit the target.")).toBeVisible();

  // Hit the target.
  await textarea.fill(Array(120).fill("word").join(" "));
  await expect(wordCount).toHaveAttribute("data-words", "120");
  await expect(exercise.getByText("Great — solid length for this task.")).toBeVisible();

  // Draft auto-saves to localStorage — must survive a reload.
  await page.reload();
  const reloadedExercise = page.locator('[data-testid="writing-exercise"][data-id="email"]');
  await expect(reloadedExercise.getByTestId("word-count")).toHaveAttribute("data-words", "120");
  await expect(reloadedExercise.getByPlaceholder("Type your reply here...")).toHaveValue(
    Array(120).fill("word").join(" "),
  );

  // Checklist reveal + check state.
  const checklist = reloadedExercise.getByTestId("checklist");
  await expect(checklist).toHaveCount(0);
  const selfCheckBtn = reloadedExercise.getByRole("button", { name: "Self-check my answer" });
  await clickUntil(
    selfCheckBtn,
    () => checklist.count(),
    (c) => c > 0,
  );
  await expect(checklist).toHaveAttribute("data-done", "0");
  await checklist.getByTestId("checklist-item").first().check();
  await expect(checklist).toHaveAttribute("data-done", "1");

  // Clear draft resets both the text and the word count, but not the checklist.
  await reloadedExercise.getByRole("button", { name: "Clear draft" }).click();
  await expect(reloadedExercise.getByTestId("word-count")).toHaveAttribute("data-words", "0");
  await expect(reloadedExercise.getByPlaceholder("Type your reply here...")).toHaveValue("");
});

test("writing timer counts down to completion with pause and reset", async ({ page }) => {
  // install() alone virtualizes timers but keeps ticking in real time —
  // pauseAt() actually freezes the clock, so only runFor moves it — a repeating
  // setInterval needs runFor (replays every tick), not fastForward (fires the
  // nearest due timer once and skips the rest).
  await page.clock.install();
  await page.clock.pauseAt(new Date());
  await page.goto("/speaking-writing");

  const exercise = page.locator('[data-testid="writing-exercise"][data-id="email"]');
  const timer = exercise.getByTestId("countdown-timer");
  await expect(timer).toHaveAttribute("data-running", "false");
  await expect(timer).toHaveAttribute("data-remaining", "600"); // 10 minutes

  const startBtn = timer.getByRole("button", { name: "Start timer" });
  await clickUntil(
    startBtn,
    () => timer.getAttribute("data-running"),
    (v) => v === "true",
  );

  await page.clock.runFor("00:30");
  await expect(timer).toHaveAttribute("data-remaining", "570");

  // Pause must actually stop the countdown, not just hide the button.
  await timer.getByRole("button", { name: "Pause" }).click();
  await expect(timer).toHaveAttribute("data-running", "false");
  await page.clock.runFor("00:30");
  await expect(timer).toHaveAttribute("data-remaining", "570"); // unchanged while paused

  await timer.getByRole("button", { name: "Reset" }).click();
  await expect(timer).toHaveAttribute("data-remaining", "600");
  await expect(timer).toHaveAttribute("data-done", "false");

  // Run it all the way out.
  await timer.getByRole("button", { name: "Start timer" }).click();
  await page.clock.runFor("10:01");
  await expect(timer).toHaveAttribute("data-done", "true");
  await expect(timer).toHaveAttribute("data-running", "false");
  await expect(timer).toHaveAttribute("data-remaining", "0");
  await expect(timer.getByText("Time's up — review against the checklist.")).toBeVisible();
});

test("prep/response speaking timer auto-advances through both phases", async ({ page }) => {
  // install() alone virtualizes timers but keeps ticking in real time —
  // pauseAt() actually freezes the clock, so only runFor moves it — a repeating
  // setInterval needs runFor (replays every tick), not fastForward (fires the
  // nearest due timer once and skips the rest).
  await page.clock.install();
  await page.clock.pauseAt(new Date());
  await page.goto("/speaking-writing");

  // "Read a text aloud" — 45s prep, 45s response.
  const card = page.locator('[data-testid="prompt-card"][data-rubric="read-aloud"]');
  const timer = card.getByTestId("prep-resp-timer");
  await expect(timer).toHaveAttribute("data-phase", "idle");

  const startBtn = timer.getByRole("button", { name: "Start timer" });
  await clickUntil(
    startBtn,
    () => timer.getAttribute("data-phase"),
    (v) => v === "prep",
  );
  await expect(timer).toHaveAttribute("data-remaining", "45");

  // Prep runs out — must auto-advance into the response phase with its own
  // fresh countdown, not just stop.
  await page.clock.runFor("00:45");
  await expect(timer).toHaveAttribute("data-phase", "response");
  await expect(timer).toHaveAttribute("data-remaining", "45");

  await page.clock.runFor("00:45");
  await expect(timer).toHaveAttribute("data-phase", "done");
  await expect(timer.getByText("Time's up — review against the checklist below.")).toBeVisible();

  // Restarting from "done" must reset cleanly back into prep.
  await timer.getByRole("button", { name: "Start timer" }).click();
  await expect(timer).toHaveAttribute("data-phase", "prep");
  await expect(timer).toHaveAttribute("data-remaining", "45");
});
