import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

/**
 * Automated WCAG sweep of every top-level route, run via axe-core. This
 * catches the mechanical half of accessibility (missing labels, contrast,
 * landmark/heading structure, ARIA misuse) — it does NOT replace a real
 * screen-reader pass for things like reading order or focus management,
 * which is how the a11y issues from the original 2026-07-16 audit
 * (flashcard flip aria-label, silent quiz feedback, focus-loss-to-body,
 * low-contrast text) were actually found. Keep both going forward.
 */

const ROUTES = [
  "/",
  "/listening-reading",
  "/mock-test",
  "/speaking-writing",
  "/vocabulary",
  "/study-tips",
  "/progress",
  "/privacy",
  "/terms",
  "/legal",
];

for (const route of ROUTES) {
  test(`${route} has no automatically-detectable accessibility violations`, async ({ page }) => {
    await page.goto(route);
    // Let async-loaded content (lazy question bank, dynamic imports) settle
    // before scanning, so the check covers what a real visitor sees.
    await page.waitForLoadState("networkidle");

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(
      results.violations,
      results.violations
        .map(
          (v) =>
            `${v.id} (${v.impact}): ${v.description}\n  ${v.nodes.map((n) => n.target.join(" ")).join("\n  ")}`,
        )
        .join("\n\n"),
    ).toEqual([]);
  });
}

test("a mid-session practice state (answered question, revealed explanation) stays clean", async ({
  page,
}) => {
  await page.goto("/listening-reading");
  await page.getByRole("button", { name: "Part 1", exact: true }).click();
  const question = page.locator('[data-testid="practice-question"]').first();
  await expect(question).toBeVisible();
  await question.locator('[data-testid="question-option"]').first().click();
  await expect(question.getByText("Explanation")).toBeVisible();

  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  expect(
    results.violations,
    results.violations.map((v) => `${v.id}: ${v.description}`).join("\n"),
  ).toEqual([]);
});
