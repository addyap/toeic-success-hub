import { expect, test, type Page } from "@playwright/test";

async function listening(page: Page, part = 1) {
  await page.goto(`/toeic/listening-reading?part=${part}`);
  await expect(
    page
      .getByTestId(part === 3 || part === 4 ? "practice-question-group" : "practice-question")
      .first(),
  ).toBeVisible();
}

async function mockMedia(
  page: Page,
  mode: "success" | "reject" | "pending" = "success",
  speech = true,
) {
  await page.addInitScript(
    ({ mode, speech }) => {
      const state = window as unknown as {
        spoken: { text: string; lang: string }[];
        rejectPlay: () => void;
      };
      state.spoken = [];
      HTMLMediaElement.prototype.play = function () {
        if (mode === "reject") return Promise.reject(new Error("Audio failed"));
        if (mode === "pending")
          return new Promise<void>((_resolve, reject) => {
            state.rejectPlay = () => reject(new Error("Stale request"));
          });
        return Promise.resolve();
      };
      HTMLMediaElement.prototype.pause = function () {};
      HTMLMediaElement.prototype.load = function () {};
      if (speech) {
        Object.defineProperty(window, "speechSynthesis", {
          value: {
            speak: (u: SpeechSynthesisUtterance) =>
              state.spoken.push({ text: u.text, lang: u.lang }),
            cancel: () => {},
          },
        });
      } else {
        Reflect.deleteProperty(window, "speechSynthesis");
        Reflect.deleteProperty(window, "SpeechSynthesisUtterance");
      }
    },
    { mode, speech },
  );
}

test("real Kokoro MP3 loads and only the active card plays", async ({ page }) => {
  await listening(page);
  const cards = page.getByTestId("practice-question");
  const response = page.waitForResponse(
    (r) => r.url().includes("/toeic/audio/") && [200, 206].includes(r.status()),
  );
  await cards.nth(0).getByRole("button", { name: "Play audio", exact: true }).click();
  expect((await response).headers()["content-type"]).toMatch(/audio\/(mpeg|mp3)/);
  await expect(cards.nth(0).getByRole("button", { name: "Stop audio" })).toBeVisible();
  await cards.nth(1).getByRole("button", { name: "Play audio", exact: true }).click();
  await expect(cards.nth(0).getByRole("button", { name: "Play audio", exact: true })).toBeVisible();
  await expect(cards.nth(1).getByRole("button", { name: "Stop audio" })).toBeVisible();
  await expect
    .poll(() =>
      cards
        .nth(1)
        .locator("audio")
        .evaluate((el: HTMLAudioElement) => !el.paused && el.currentTime > 0),
    )
    .toBe(true);
  await cards.nth(1).getByTestId("question-option").first().click();
  await expect(page.getByRole("button", { name: "Stop audio" })).toHaveCount(0);
  await cards.nth(0).getByRole("button", { name: "Play audio", exact: true }).click();
  await cards
    .nth(0)
    .locator("audio")
    .evaluate((el) => {
      (window as unknown as { previousAudio: HTMLAudioElement }).previousAudio =
        el as HTMLAudioElement;
    });
  await page.getByRole("button", { name: "Part 5", exact: true }).click();
  await expect(page.locator("audio")).toHaveCount(0);
  expect(
    await page.evaluate(
      () => (window as unknown as { previousAudio: HTMLAudioElement }).previousAudio.paused,
    ),
  ).toBe(true);
});

test("segment completion advances and the final segment releases playback", async ({ page }) => {
  await mockMedia(page);
  await listening(page);
  const card = page.getByTestId("practice-question").first();
  await card.getByRole("button", { name: "Play audio", exact: true }).click();
  const audio = card.locator("audio");
  const first = await audio.getAttribute("src");
  await audio.evaluate((el) => el.dispatchEvent(new Event("ended")));
  await expect(audio).not.toHaveAttribute("src", first!);
  // Part 1 has four cue/statement pairs.
  for (let i = 1; i < 8; i++) await audio.evaluate((el) => el.dispatchEvent(new Event("ended")));
  await expect(card.getByRole("button", { name: "Play audio", exact: true })).toBeVisible();
  await expect(audio).not.toHaveAttribute("src");
});

test("a failed recording offers explicit English device speech without exposing answers", async ({
  page,
}) => {
  await mockMedia(page, "reject");
  await listening(page, 2);
  const card = page.getByTestId("practice-question").first();
  await card.getByRole("button", { name: "Play audio", exact: true }).click();
  const fallback = card.getByRole("button", { name: "Play with device voice" });
  await expect(fallback).toBeVisible();
  await expect(card.getByText("Transcript", { exact: true })).toHaveCount(0);
  expect(await page.evaluate(() => (window as unknown as { spoken: unknown[] }).spoken)).toEqual(
    [],
  );
  await fallback.click();
  const spoken = await page.evaluate(
    () => (window as unknown as { spoken: { text: string; lang: string }[] }).spoken,
  );
  expect(spoken).toHaveLength(1);
  expect(spoken[0].lang).toBe("en-US");
  expect(spoken[0].text).toMatch(/A\..*B\..*C\./);
  await card.getByTestId("question-option").first().click();
  await expect(card.getByRole("button", { name: "Stop audio" })).toHaveCount(0);
});

test("media errors and unsupported speech leave a usable exercise", async ({ page }) => {
  await mockMedia(page, "success", false);
  await listening(page);
  const card = page.getByTestId("practice-question").first();
  await card.getByRole("button", { name: "Play audio", exact: true }).click();
  await card.locator("audio").evaluate((el) => el.dispatchEvent(new Event("error")));
  await expect(card.getByRole("button", { name: "Play with device voice" })).toBeDisabled();
  await expect(card.getByRole("status").filter({ hasText: "Audio unavailable" })).toBeVisible();
  await card.getByTestId("question-option").first().click();
  await expect(card.getByText("Explanation", { exact: true })).toBeVisible();
});

test("stale play rejection after stopping cannot break the next playback", async ({ page }) => {
  await mockMedia(page, "pending");
  await listening(page);
  const card = page.getByTestId("practice-question").first();
  await card.getByRole("button", { name: "Play audio", exact: true }).click();
  await card.getByRole("button", { name: "Stop audio" }).click();
  await page.evaluate(() => (window as unknown as { rejectPlay: () => void }).rejectPlay());
  await expect(card.getByRole("button", { name: "Play audio", exact: true })).toBeVisible();
  await expect(card.getByRole("button", { name: "Play with device voice" })).toHaveCount(0);
});

test("a grouped conversation continues after its first answer and stops on reset", async ({
  page,
}) => {
  await mockMedia(page);
  await listening(page, 3);
  const group = page.getByTestId("practice-question-group").first();
  await group.getByRole("button", { name: "Play audio", exact: true }).click();
  await group.getByTestId("question-option").first().click();
  await expect(group.getByRole("button", { name: "Stop audio" })).toBeVisible();
  await page.getByRole("button", { name: "Reset session", exact: true }).click();
  await expect(page.getByRole("button", { name: "Stop audio" })).toHaveCount(0);
});

test("Speaking uses the shared player, stops on rotation, and leaves printed tasks silent", async ({
  page,
}) => {
  await mockMedia(page);
  await page.goto("/toeic/four-skills");
  const section = page.locator("section", {
    has: page.getByRole("heading", { name: "Speaking practice", exact: true }),
  });
  await expect(section.locator("audio")).toHaveCount(0);
  const task = section.getByRole("button", { name: /Q11 · Express an opinion/ });
  await expect
    .poll(async () => {
      await task.click();
      return section.locator("audio").count();
    })
    .toBe(1);
  await section.getByRole("button", { name: "Play audio", exact: true }).click();
  await expect(section.getByRole("button", { name: "Stop audio" })).toBeVisible();
  await section.getByRole("button", { name: "Try another prompt" }).click();
  await expect(section.getByRole("button", { name: "Play audio", exact: true })).toBeVisible();
  const writing = page.locator("section", {
    has: page.getByRole("heading", { name: "Writing practice", exact: true }),
  });
  await expect(writing.locator("audio")).toHaveCount(0);
});

test("Parts 5–7 render no audio players", async ({ page }) => {
  await listening(page, 5);
  for (const part of [5, 6, 7]) {
    await page.getByRole("button", { name: `Part ${part}`, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`part=${part}`));
    await expect(
      page
        .locator('[data-testid="practice-question"], [data-testid="practice-question-group"]')
        .first(),
    ).toBeVisible();
    await expect(page.locator("audio")).toHaveCount(0);
    await expect(page.getByRole("button", { name: "Play audio", exact: true })).toHaveCount(0);
  }
});

test("a stalled media start times out to device-speech fallback", async ({ page }) => {
  await mockMedia(page, "pending");
  await page.clock.install();
  await listening(page);
  const card = page.getByTestId("practice-question").first();
  await card.getByRole("button", { name: "Play audio", exact: true }).click();
  await page.clock.runFor(15_001);
  await expect(card.getByRole("button", { name: "Play with device voice" })).toBeVisible();
});
