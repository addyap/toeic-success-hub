import { test, expect } from "@playwright/test";

/**
 * Pins the promises the pricing page makes.
 *
 * This site had a full Stripe/licence paywall built and then deliberately
 * removed (commit 23aeb1a) so that "free" could not drift by accident, after
 * an env-var kill switch was judged a footgun. /pricing now advertises a
 * future paid tier, which is exactly the situation where gating tends to creep
 * back in — so these tests assert the two things that must stay true:
 *
 *   1. There is no way to pay: no checkout control, no card entry, no form
 *      posting to a payment endpoint.
 *   2. Nothing is locked: every practice surface is reachable and usable
 *      without any licence, account or purchase.
 *
 * If a real paid tier is ever launched, these tests should be rewritten
 * deliberately — not quietly deleted to make a build pass.
 */

test.describe("pricing page", () => {
  test("states the site is free and marks the paid tier as coming soon", async ({ page }) => {
    await page.goto("/pricing");

    await expect(
      page.getByRole("heading", { name: "Everything is free right now." }),
    ).toBeVisible();
    await expect(page.getByTestId("free-banner")).toContainText("will not be charged");

    await expect(page.getByText("Coming soon")).toBeVisible();
    await expect(page.getByText("Not yet priced")).toBeVisible();
    await expect(page.getByText("Nothing to buy yet.")).toBeVisible();
  });

  test("offers no way to pay", async ({ page }) => {
    await page.goto("/pricing");

    // No checkout affordance of any kind.
    for (const label of [/checkout/i, /buy/i, /subscribe/i, /upgrade/i, /unlock/i, /pay/i]) {
      await expect(page.getByRole("button", { name: label })).toHaveCount(0);
    }
    // No card fields, and nothing posting to a payment endpoint.
    await expect(page.locator('input[type="password"], input[autocomplete*="cc-"]')).toHaveCount(0);
    await expect(page.locator("form[action*='checkout'], form[method='POST']")).toHaveCount(0);
  });

  test("every practice surface is reachable without paying", async ({ page }) => {
    // The mock test is the feature the old paywall gated most aggressively,
    // so it is the sharpest check that nothing has crept back.
    await page.goto("/mock-test");
    await expect(page.getByRole("button", { name: /start/i }).first()).toBeVisible();

    await page.goto("/listening-reading");
    await expect(page.locator('[data-testid="practice-question"]').first()).toBeVisible();

    await page.goto("/progress");
    await expect(page.getByRole("heading", { name: /See where you're improving/ })).toBeVisible();

    // And no page anywhere renders a lock/upgrade prompt.
    for (const path of ["/four-skills", "/vocabulary", "/mock-test"]) {
      await page.goto(path);
      await expect(
        page.getByText(/unlock full access|upgrade to pro|purchase required/i),
      ).toHaveCount(0);
    }
  });
});
