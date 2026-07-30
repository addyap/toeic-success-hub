import { test, expect, type Locator, type Page } from "@playwright/test";

/**
 * Drives the /four-skills Speaking and Writing trainers end to end.
 *
 * Both are timer-driven, so every test installs Playwright's clock and
 * advances it explicitly. Two gotchas from the earlier (since-removed)
 * speaking-writing timers apply here and are the reason these tests are
 * written this way:
 *
 *  - `clock.install()` alone does NOT freeze time — it virtualizes timers
 *    while the clock keeps ticking in real wall time. `clock.pauseAt()`
 *    immediately after is what actually freezes it.
 *  - `clock.runFor()` replays every intermediate tick, which a countdown
 *    built on a 1-second `setInterval` needs. `fastForward()` fires only the
 *    single nearest-due timer and jumps past the rest, so a countdown
 *    advanced with it barely moves.
 *
 * Like /vocabulary, this page has no async data gate to wait on — all of its
 * content is server-rendered, so there is no natural signal for "React has
 * hydrated and wired up onClick". The first interaction of each test
 * therefore uses a click-and-poll retry: if the click landed before
 * hydration it was a silent no-op and the button is still there to click
 * again, so retrying is safe and just absorbs the race.
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

async function setUpClock(page: Page) {
  await page.clock.install();
  await page.clock.pauseAt(new Date());
}

function speakingSection(page: Page) {
  return page.locator("section", {
    has: page.getByRole("heading", { name: "Speaking practice", exact: true }),
  });
}

function writingSection(page: Page) {
  return page.locator("section", {
    has: page.getByRole("heading", { name: "Writing practice", exact: true }),
  });
}

test.describe("speaking trainer", () => {
  test("a drill runs prep -> speaking and reveals the criteria checklist", async ({ page }) => {
    await setUpClock(page);
    await page.goto("/four-skills");

    const section = speakingSection(page);
    // Task 1–2: 45s to prepare, then 45s to read aloud.
    const start = section.getByRole("button", { name: /Start · 45s prep, 45s speak/ });
    const prepTimer = section.getByText(/Preparation · \d+:\d\d/);

    await clickUntil(
      start,
      () => prepTimer.isVisible(),
      (visible) => visible,
    );
    await expect(prepTimer).toContainText("0:45");

    // Preparation elapses and the drill moves itself into the speaking phase.
    await page.clock.runFor(45_000);
    const speakTimer = section.getByText(/Speak now · \d+:\d\d/);
    await expect(speakTimer).toBeVisible();
    await expect(prepTimer).toBeHidden();

    // Part-way through the response the clock should still be counting down.
    await page.clock.runFor(15_000);
    await expect(speakTimer).toContainText("0:30");

    await section.getByRole("button", { name: "Finish early" }).click();
    await expect(section.getByText("Score yourself against the criteria")).toBeVisible();
    await expect(section.getByText("Did you finish the whole text within the time?")).toBeVisible();
  });

  test("the response phase ends on its own when the clock runs out", async ({ page }) => {
    await setUpClock(page);
    await page.goto("/four-skills");

    const section = speakingSection(page);
    const start = section.getByRole("button", { name: /Start · 45s prep, 45s speak/ });
    const prepTimer = section.getByText(/Preparation · \d+:\d\d/);

    await clickUntil(
      start,
      () => prepTimer.isVisible(),
      (visible) => visible,
    );

    // 45s prep + 45s response, with no "Finish early" click at all.
    await page.clock.runFor(90_000);
    await expect(section.getByText("Score yourself against the criteria")).toBeVisible();
    await expect(section.getByRole("button", { name: "Finish early" })).toBeHidden();
  });

  test("rotating cycles through that task's prompts and wraps around", async ({ page }) => {
    await setUpClock(page);
    await page.goto("/four-skills");

    const section = speakingSection(page);
    const rotate = section.getByRole("button", { name: "Try another prompt" });
    const counter = section.getByText(/^Prompt \d+ of \d+$/);
    const promptText = section.locator("blockquote");

    await expect(counter).toHaveText("Prompt 1 of 3");
    const first = await promptText.textContent();

    await clickUntil(
      rotate,
      () => counter.textContent(),
      (text) => text === "Prompt 2 of 3",
    );
    const second = await promptText.textContent();
    expect(second).not.toBe(first);

    await rotate.click();
    await expect(counter).toHaveText("Prompt 3 of 3");
    expect(await promptText.textContent()).not.toBe(second);

    // Wraps back to the first prompt rather than dead-ending.
    await rotate.click();
    await expect(counter).toHaveText("Prompt 1 of 3");
    expect(await promptText.textContent()).toBe(first);
  });

  test("switching task resets the prompt counter and reloads that task's timings", async ({
    page,
  }) => {
    await setUpClock(page);
    await page.goto("/four-skills");

    const section = speakingSection(page);
    const counter = section.getByText(/^Prompt \d+ of \d+$/);
    const rotate = section.getByRole("button", { name: "Try another prompt" });

    await clickUntil(
      rotate,
      () => counter.textContent(),
      (text) => text === "Prompt 2 of 3",
    );

    // Task 11 has different timings (15s prepare, 60s speak) to task 1–2.
    await section.getByRole("button", { name: /Q11 · Express an opinion/ }).click();
    await expect(counter).toHaveText("Prompt 1 of 3");
    await expect(
      section.getByRole("button", { name: /Start · 15s prep, 60s speak/ }),
    ).toBeVisible();
  });

  test("rotating mid-drill resets it instead of leaving a stale timer running", async ({
    page,
  }) => {
    await setUpClock(page);
    await page.goto("/four-skills");

    const section = speakingSection(page);
    const start = section.getByRole("button", { name: /Start · 45s prep, 45s speak/ });
    const prepTimer = section.getByText(/Preparation · \d+:\d\d/);

    await clickUntil(
      start,
      () => prepTimer.isVisible(),
      (visible) => visible,
    );
    await page.clock.runFor(10_000);
    await expect(prepTimer).toContainText("0:35");

    await section.getByRole("button", { name: "Try another prompt" }).click();

    // Back to the idle state: no timer, and the start button offered again.
    await expect(prepTimer).toBeHidden();
    await expect(start).toBeVisible();
  });
});

test.describe("writing trainer", () => {
  test("submitting reveals the criteria and a sample response", async ({ page }) => {
    await setUpClock(page);
    await page.goto("/four-skills");

    const section = writingSection(page);
    const start = section.getByRole("button", { name: /Start · 2 min/ });
    const response = page.locator("#writing-response");
    const submit = section.getByRole("button", { name: "Submit" });

    // The textarea is enabled from the outset (it is only disabled after
    // submitting), so Submit appearing is the signal that Start actually
    // registered — not the textarea's enabled state.
    await clickUntil(
      start,
      () => submit.isVisible(),
      (visible) => visible,
    );
    await expect(section.getByText("2:00")).toBeVisible();

    await response.fill("The workers lift the box because it is heavy.");
    await expect(section.getByText(/^9 words$/)).toBeVisible();

    await submit.click();
    await expect(section.getByText("Check your response against the criteria")).toBeVisible();
    // Scoped to the heading: the section's intro paragraph also contains the
    // phrase "a strong sample response", so a substring match hits both.
    await expect(section.getByRole("heading", { name: "A strong sample response" })).toBeVisible();
    // The answer is locked once submitted, so the sample can't be copied in.
    await expect(response).toBeDisabled();
  });

  test("running out of time submits the response automatically", async ({ page }) => {
    await setUpClock(page);
    await page.goto("/four-skills");

    const section = writingSection(page);
    const start = section.getByRole("button", { name: /Start · 2 min/ });
    const response = page.locator("#writing-response");
    const submit = section.getByRole("button", { name: "Submit" });

    await clickUntil(
      start,
      () => submit.isVisible(),
      (visible) => visible,
    );
    await response.fill("An unfinished answer.");

    // The full two minutes, with no Submit click.
    await page.clock.runFor(120_000);
    await expect(section.getByText("Check your response against the criteria")).toBeVisible();
    await expect(response).toBeDisabled();
    await expect(section.getByRole("button", { name: "Submit" })).toBeHidden();
  });

  test("an in-progress answer survives a reload, with its remaining time", async ({ page }) => {
    await setUpClock(page);
    await page.goto("/four-skills");

    const section = writingSection(page);
    const response = page.locator("#writing-response");
    const submit = section.getByRole("button", { name: "Submit" });

    await clickUntil(
      section.getByRole("button", { name: /Start · 2 min/ }),
      () => submit.isVisible(),
      (visible) => visible,
    );
    await response.fill("A partly written answer that must not be lost.");
    await page.clock.runFor(30_000);
    await expect(section.getByText("1:30")).toBeVisible();

    await page.reload();

    const reloaded = writingSection(page);
    await expect(page.locator("#writing-response")).toHaveValue(
      "A partly written answer that must not be lost.",
    );
    // The clock is not resumed automatically — the user was away for an
    // unknown time — but the time they had left is preserved and offered back.
    // Asserted via the Resume label rather than the timer chip: both render
    // "1:30", so a bare text match is ambiguous under strict mode.
    await expect(reloaded.getByRole("button", { name: /Resume · 1:30 left/ })).toBeVisible();
  });

  test("resetting clears the saved draft rather than leaving it behind", async ({ page }) => {
    await setUpClock(page);
    await page.goto("/four-skills");

    const section = writingSection(page);
    const response = page.locator("#writing-response");

    await clickUntil(
      section.getByRole("button", { name: /Start · 2 min/ }),
      () => section.getByRole("button", { name: "Submit" }).isVisible(),
      (visible) => visible,
    );
    await response.fill("Discard me.");
    await section.getByRole("button", { name: "Reset" }).click();
    await expect(response).toHaveValue("");

    await page.reload();
    await expect(page.locator("#writing-response")).toHaveValue("");
    await expect(writingSection(page).getByRole("button", { name: /Start · 2 min/ })).toBeVisible();
  });

  test("each writing task loads its own duration", async ({ page }) => {
    await setUpClock(page);
    await page.goto("/four-skills");

    const section = writingSection(page);
    const essayTask = section.getByRole("button", { name: /Q8 · Write an opinion essay/ });

    await clickUntil(
      essayTask,
      () => section.getByRole("button", { name: /Start · 30 min/ }).isVisible(),
      (visible) => visible,
    );
    await expect(section.getByText("30:00")).toBeVisible();

    await section.getByRole("button", { name: /Q6–7 · Respond to a written request/ }).click();
    await expect(section.getByRole("button", { name: /Start · 10 min/ })).toBeVisible();
    await expect(section.getByText("10:00")).toBeVisible();
  });
});
