import { test, expect, type Page } from "@playwright/test";
import { TEST_VALID_LICENSE_TOKEN } from "./fixtures/license";

/**
 * The paywall is entirely dormant today (no STRIPE_PRICE_ID configured in
 * production) — the "monetization disabled" tests below lock that in. The
 * "monetization enabled" tests run against a second dev server
 * (localhost:8090, see playwright.config.ts's second webServer) that's
 * started with a dummy STRIPE_PRICE_ID, which is the entire on/off switch
 * (see isMonetizationEnabled in src/lib/config.server.ts) — no real Stripe
 * credentials are needed for these, since they never hit the actual
 * checkout call, only the gating UI.
 *
 * "Purchased" state is simulated with a token signed by a dev-only test
 * keypair (e2e/fixtures/license.ts) — see TEST_PUBLIC_KEY_JWK in
 * src/lib/license.ts for why this can never be used against a real
 * production build, only a local `vite dev` server.
 */

async function seedLicense(page: Page) {
  await page.addInitScript((token) => {
    localStorage.setItem("toeicpath:license", token);
  }, TEST_VALID_LICENSE_TOKEN);
}

test.describe("monetization disabled (today's live state)", () => {
  // Default project baseURL: localhost:8080, no STRIPE_PRICE_ID.

  test("practice, mock test, and progress are all fully open with no paywall", async ({ page }) => {
    await page.goto("/listening-reading");
    await page.getByRole("button", { name: "Part 5", exact: true }).click();
    await expect(page.locator('[data-testid="practice-question"]').first()).toBeVisible();
    await expect(page.getByTestId("paywall-card")).toHaveCount(0);
    const sessionText = await page.getByText(/^Answered \d+ of \d+/).innerText();
    const total = Number(sessionText.match(/of (\d+)/)![1]);
    expect(total).toBeGreaterThan(5); // real bank size, not the 5-question teaser

    await page.goto("/mock-test");
    await expect(page.getByRole("button", { name: "Start the mock test" })).toBeVisible();
    await expect(page.getByTestId("paywall-card")).toHaveCount(0);

    await page.goto("/progress");
    await expect(page.getByTestId("paywall-card")).toHaveCount(0);

    await page.goto("/pricing");
    await expect(page.getByText("Pricing is coming soon")).toBeVisible();
  });
});

test.describe("monetization enabled, unlicensed visitor", () => {
  test.use({ baseURL: "http://localhost:8090" });

  test("practice shows a free teaser and a paywall for the rest", async ({ page }) => {
    await page.goto("/listening-reading");

    // Part 1 stays fully free.
    await page.getByRole("button", { name: "Part 1", exact: true }).click();
    await expect(page.locator('[data-testid="practice-question"]').first()).toBeVisible();
    await expect(page.getByTestId("paywall-card")).toHaveCount(0);
    const part1Total = Number(
      (await page.getByText(/^Answered \d+ of \d+/).innerText()).match(/of (\d+)/)![1],
    );
    expect(part1Total).toBeGreaterThan(5);

    // Part 5 is truncated to the teaser count.
    await page.getByRole("button", { name: "Part 5", exact: true }).click();
    await expect
      .poll(async () =>
        Number((await page.getByText(/^Answered \d+ of \d+/).innerText()).match(/of (\d+)/)![1]),
      )
      .toBe(5);
    await expect(page.getByTestId("paywall-card")).toBeVisible();
    await expect(page.getByText(/Unlock the rest of this bank/)).toBeVisible();
  });

  test("mock test and progress show a paywall instead of the real feature", async ({ page }) => {
    await page.goto("/mock-test");
    await expect(page.getByTestId("paywall-card")).toBeVisible();
    await expect(page.getByText("Unlock the full mock test")).toBeVisible();
    await expect(page.getByRole("button", { name: "Start the mock test" })).toHaveCount(0);

    await page.goto("/progress");
    await expect(page.getByTestId("paywall-card")).toBeVisible();
    await expect(page.getByText("Unlock progress tracking")).toBeVisible();
  });

  test("pricing page offers a real unlock button, not the coming-soon state", async ({ page }) => {
    await page.goto("/pricing");
    await expect(page.getByText("Pricing is coming soon")).toHaveCount(0);
    await expect(page.getByRole("button", { name: /Unlock full access/ })).toBeVisible();
  });
});

test.describe("monetization enabled, licensed visitor", () => {
  test.use({ baseURL: "http://localhost:8090" });

  test("a valid license unlocks practice, mock test, progress, and pricing all show full access", async ({
    page,
  }) => {
    await seedLicense(page);

    await page.goto("/listening-reading");
    await page.getByRole("button", { name: "Part 5", exact: true }).click();
    await expect(page.locator('[data-testid="practice-question"]').first()).toBeVisible();
    await expect(page.getByTestId("paywall-card")).toHaveCount(0);
    const total = Number(
      (await page.getByText(/^Answered \d+ of \d+/).innerText()).match(/of (\d+)/)![1],
    );
    expect(total).toBeGreaterThan(5);

    await page.goto("/mock-test");
    await expect(page.getByRole("button", { name: "Start the mock test" })).toBeVisible();
    await expect(page.getByTestId("paywall-card")).toHaveCount(0);

    await page.goto("/progress");
    await expect(page.getByTestId("paywall-card")).toHaveCount(0);

    await page.goto("/pricing");
    await expect(page.getByText("You already have full access on this device.")).toBeVisible();
  });

  test("a tampered token is rejected — still gated", async ({ page }) => {
    await page.addInitScript((token) => {
      localStorage.setItem("toeicpath:license", token + "tampered");
    }, TEST_VALID_LICENSE_TOKEN);

    await page.goto("/mock-test");
    await expect(page.getByTestId("paywall-card")).toBeVisible();
  });
});
