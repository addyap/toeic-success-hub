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

    // Not hardcoded: the exact prompt count per task group grows with each
    // content round, so read it from the page instead of assuming a number.
    const initialLabel = await counter.textContent();
    const total = Number(initialLabel?.match(/of (\d+)/)?.[1]);
    expect(total).toBeGreaterThan(1);

    await expect(counter).toHaveText(`Prompt 1 of ${total}`);
    const first = await promptText.textContent();
    let previous = first;

    for (let n = 2; n <= total; n++) {
      await clickUntil(
        rotate,
        () => counter.textContent(),
        (text) => text === `Prompt ${n} of ${total}`,
      );
      const current = await promptText.textContent();
      expect(current).not.toBe(previous);
      previous = current;
    }

    // Wraps back to the first prompt rather than dead-ending.
    await rotate.click();
    await expect(counter).toHaveText(`Prompt 1 of ${total}`);
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

    // The "of N" count is server-rendered and present pre-hydration, so it's
    // safe to read before proving the click itself landed.
    const total = Number((await counter.textContent())?.match(/of (\d+)/)?.[1]);
    expect(total).toBeGreaterThan(1);

    await clickUntil(
      rotate,
      () => counter.textContent(),
      (text) => text === `Prompt 2 of ${total}`,
    );

    // Task 11 has different timings (15s prepare, 60s speak) to task 1–2.
    await section.getByRole("button", { name: /Q11 · Express an opinion/ }).click();
    await expect(counter).toHaveText(/^Prompt 1 of \d+$/);
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
  // Tasks 1–5 (the default active group) share ONE clock across all five
  // sentences instead of timing each one individually — see the "pooled
  // writing trainer" describe block below for that behavior. These tests
  // exercise the generic per-prompt timer/draft/self-assessment behavior
  // shared by every OTHER writing task, so they switch to Q6–7 first (a
  // genuinely independently-timed task) rather than testing against the
  // pooled default.
  async function selectIndependentTask(page: Page) {
    const section = writingSection(page);
    // `#writing-response` (an exact, unprefixed id) only exists in the
    // per-prompt trainer — the pooled one renders `#writing-response-<id>`
    // instead — so its presence is a reliable "the right trainer mounted"
    // signal regardless of whether the button reads "Start" or "Resume".
    await clickUntil(
      section.getByRole("button", { name: /Q6–7 · Respond to a written request/ }),
      () => page.locator("#writing-response").isVisible(),
      (visible) => visible,
    );
    return section;
  }

  test("submitting reveals the criteria and a sample response", async ({ page }) => {
    await setUpClock(page);
    await page.goto("/four-skills");
    const section = await selectIndependentTask(page);

    const start = section.getByRole("button", { name: /Start · 10 min/ });
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
    await expect(section.getByText("10:00")).toBeVisible();

    await response.fill("The workers lift the box because it is heavy.");
    // Start-anchored only: Q6–7 has a targetWords hint appended to the same
    // text node ("9 words · target roughly 100–130 words"), unlike the
    // pooled sentence task this assertion used to run against.
    await expect(section.getByText(/^9 words/)).toBeVisible();

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
    const section = await selectIndependentTask(page);

    const start = section.getByRole("button", { name: /Start · 10 min/ });
    const response = page.locator("#writing-response");
    const submit = section.getByRole("button", { name: "Submit" });

    await clickUntil(
      start,
      () => submit.isVisible(),
      (visible) => visible,
    );
    await response.fill("An unfinished answer.");

    // The full ten minutes, with no Submit click.
    await page.clock.runFor(600_000);
    await expect(section.getByText("Check your response against the criteria")).toBeVisible();
    await expect(response).toBeDisabled();
    await expect(section.getByRole("button", { name: "Submit" })).toBeHidden();
  });

  test("an in-progress answer survives a reload, with its remaining time", async ({ page }) => {
    await setUpClock(page);
    await page.goto("/four-skills");
    const section = await selectIndependentTask(page);

    const response = page.locator("#writing-response");
    const submit = section.getByRole("button", { name: "Submit" });

    await clickUntil(
      section.getByRole("button", { name: /Start · 10 min/ }),
      () => submit.isVisible(),
      (visible) => visible,
    );
    await response.fill("A partly written answer that must not be lost.");
    await page.clock.runFor(30_000);
    await expect(section.getByText("9:30")).toBeVisible();

    await page.reload();

    // Re-select the same task after reload: the trainer always mounts on
    // the default (pooled) group first.
    const reloaded = await selectIndependentTask(page);
    await expect(page.locator("#writing-response")).toHaveValue(
      "A partly written answer that must not be lost.",
    );
    // The clock is not resumed automatically — the user was away for an
    // unknown time — but the time they had left is preserved and offered back.
    // Asserted via the Resume label rather than the timer chip: both render
    // "9:30", so a bare text match is ambiguous under strict mode.
    await expect(reloaded.getByRole("button", { name: /Resume · 9:30 left/ })).toBeVisible();
  });

  test("resetting clears the saved draft rather than leaving it behind", async ({ page }) => {
    await setUpClock(page);
    await page.goto("/four-skills");
    const section = await selectIndependentTask(page);

    const response = page.locator("#writing-response");

    await clickUntil(
      section.getByRole("button", { name: /Start · 10 min/ }),
      () => section.getByRole("button", { name: "Submit" }).isVisible(),
      (visible) => visible,
    );
    await response.fill("Discard me.");
    await section.getByRole("button", { name: "Reset" }).click();
    await expect(response).toHaveValue("");

    await page.reload();
    // Reload always remounts on the default group (1–5, pooled) first —
    // the reset only needs to prove Q6–7's own draft is gone, so re-select
    // it rather than asserting on whatever the pooled default now shows.
    await expect(
      writingSection(page).getByRole("button", { name: /Start · 8 min for all \d+/ }),
    ).toBeVisible();
    const resetSection = await selectIndependentTask(page);
    await expect(page.locator("#writing-response")).toHaveValue("");
    await expect(resetSection.getByRole("button", { name: /Start · 10 min/ })).toBeVisible();
  });

  test("a saved self-assessment reaches /progress without inflating L&R totals", async ({
    page,
  }) => {
    await setUpClock(page);
    await page.goto("/four-skills");
    const section = await selectIndependentTask(page);

    const submit = section.getByRole("button", { name: "Submit" });

    await clickUntil(
      section.getByRole("button", { name: /Start · 10 min/ }),
      () => submit.isVisible(),
      (visible) => visible,
    );
    await page.locator("#writing-response").fill("An answer to assess.");
    await submit.click();

    const boxes = section.getByRole("checkbox");
    const total = await boxes.count();
    expect(total).toBeGreaterThan(1);
    await boxes.nth(0).check();
    await boxes.nth(1).check();
    await expect(section.getByText(`2 of ${total} met`)).toBeVisible();

    await section.getByRole("button", { name: "Save self-assessment" }).click();
    await expect(section.getByText("Saved to your progress")).toBeVisible();
    // Locked after saving so a rating can't be silently double-counted.
    await expect(boxes.nth(0)).toBeDisabled();

    await page.goto("/progress");
    const row = page.locator('[data-testid="self-assessment-row"][data-skill="writing"]');
    await expect(row).toHaveAttribute("data-sessions", "1");
    await expect(row).toContainText(`2 of ${total} criteria met`);

    // Self-ratings are not machine-marked, so they must stay out of the
    // objective Listening & Reading figures entirely.
    const sessions = page.locator('[data-testid="stat-card"][data-label="Sessions completed"]');
    await expect(sessions).toContainText("0 questions answered");
    await expect(page.getByText("Accuracy by part")).toBeHidden();
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

test.describe("pooled writing trainer (tasks 1–5)", () => {
  // Unlike every other Writing task, 1–5 share ONE clock across all five
  // sentences (three in practice), freely revisited with no reset — the
  // real exam's genuine timing model. These tests exist specifically
  // because a mismatch between this description and independent per-prompt
  // timers was a real, shipped bug: see the fix that introduced this file.
  test("switching sentences does not reset the shared clock", async ({ page }) => {
    await setUpClock(page);
    await page.goto("/four-skills");

    const section = writingSection(page);
    const start = section.getByRole("button", { name: /Start · 8 min for all \d+/ });
    const sentence1 = page.locator("#writing-response-wr-sentence-1");
    const submitAll = section.getByRole("button", { name: /Submit all \d+/ });

    // The textarea renders whether or not the clock has actually started, so
    // (unlike Submit-all appearing) it isn't a valid signal that Start's
    // click landed post-hydration rather than being a silent pre-hydration
    // no-op — see the file header's hydration-race note.
    await clickUntil(
      start,
      () => submitAll.isVisible(),
      (visible) => visible,
    );
    await expect(section.getByText("8:00")).toBeVisible();

    await sentence1.fill("The workers are lifting the box because it is heavy.");
    await page.clock.runFor(30_000);
    await expect(section.getByText("7:30")).toBeVisible();

    await section.getByRole("button", { name: "Sentence 2" }).click();
    // The clock keeps its 7:30 — moving between sentences must not restart
    // or pause the shared pool.
    await expect(section.getByText("7:30")).toBeVisible();
    await expect(page.locator("#writing-response-wr-sentence-2")).toHaveValue("");

    await page.clock.runFor(15_000);
    await section.getByRole("button", { name: "Sentence 1" }).click();
    // Switching back preserves both the draft and the now-further-elapsed
    // shared clock.
    await expect(sentence1).toHaveValue("The workers are lifting the box because it is heavy.");
    await expect(section.getByText("7:15")).toBeVisible();
  });

  test("submitting reveals a review of every sentence, not just the active one", async ({
    page,
  }) => {
    await setUpClock(page);
    await page.goto("/four-skills");

    const section = writingSection(page);
    // Not hardcoded: the pooled sentence count grows with each content
    // round, so read it off the "Start" button's own label instead of
    // assuming a number.
    const startLabel = await section
      .getByRole("button", { name: /Start · 8 min for all \d+/ })
      .textContent();
    const total = Number(startLabel?.match(/all (\d+)/)?.[1]);
    expect(total).toBeGreaterThan(1);

    await clickUntil(
      section.getByRole("button", { name: new RegExp(`Start · 8 min for all ${total}`) }),
      () => section.getByRole("button", { name: `Submit all ${total}` }).isVisible(),
      (visible) => visible,
    );
    await page.locator("#writing-response-wr-sentence-1").fill("Only the first sentence answered.");

    await section.getByRole("button", { name: `Submit all ${total}` }).click();
    await expect(section.getByRole("heading", { name: `Review all ${total}` })).toBeVisible();
    // The now-disabled textarea still renders the same text, so a bare
    // getByText matches it too under strict mode — scope to the review
    // block's own dashed-border answer paragraph specifically.
    await expect(
      section.locator("p.border-dashed", { hasText: "Only the first sentence answered." }),
    ).toBeVisible();
    // Sentences left blank are shown as such rather than silently omitted.
    await expect(section.getByText("(left blank)")).toHaveCount(total - 1);
    // Every sentence gets its own checklist and sample, not just the one
    // that was actually written.
    await expect(section.getByText("Check your sentence against the criteria")).toHaveCount(total);
    await expect(section.getByText("A strong sample sentence")).toHaveCount(total);
  });

  test("running out of the shared clock submits all three at once", async ({ page }) => {
    await setUpClock(page);
    await page.goto("/four-skills");

    const section = writingSection(page);
    await clickUntil(
      section.getByRole("button", { name: /Start · 8 min for all \d+/ }),
      () => section.getByRole("button", { name: /Submit all \d+/ }).isVisible(),
      (visible) => visible,
    );
    await page.locator("#writing-response-wr-sentence-1").fill("Whatever I managed in time.");

    // The full eight-minute pool, with no manual submit.
    await page.clock.runFor(480_000);
    await expect(section.getByRole("heading", { name: /Review all \d+/ })).toBeVisible();
    await expect(section.getByRole("button", { name: /Submit all \d+/ })).toBeHidden();
  });
});
