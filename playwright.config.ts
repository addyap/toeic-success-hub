import { defineConfig, devices } from "@playwright/test";

// Runs against the dev server (not the built output) — matches how every
// manual browser-verification pass on this app has always been done, and
// sidesteps having two different Nitro deploy presets (Cloudflare vs Vercel,
// see vite.config.ts) that would need separate serve-and-preview setups.
export default defineConfig({
  testDir: "./e2e",
  // A single dev server backs every test (see webServer below); running
  // more than one spec at a time means they compete for its first-request
  // compile of the large question-bank chunk, which caused real flakiness
  // (a load taking well past even a generous per-assertion timeout under
  // contention). Only 3 tests total, so serial execution costs little.
  fullyParallel: false,
  workers: 1,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: "list",
  timeout: 60_000,
  // The question bank is a ~170KB dynamically-imported chunk; the dev server
  // transforms it from source on its first request each run, which can take
  // longer than the 5s default on a cold start — raised globally rather than
  // per-assertion so every first-load check in a spec gets the same headroom.
  expect: { timeout: 15_000 },
  use: {
    baseURL: "http://localhost:8080",
    trace: "retain-on-failure",
  },
  webServer: [
    {
      command: "npm run dev",
      url: "http://localhost:8080",
      reuseExistingServer: !process.env.CI,
      timeout: 60_000,
    },
    // Second server, paywall flipped on (STRIPE_PRICE_ID present is the
    // entire on/off switch — see isMonetizationEnabled in config.server.ts).
    // Its own port so both states can be tested in the same run without
    // restarting anything. No real Stripe secret needed here: the gating
    // tests only need `enabled: true` plus the dev-only test license
    // (e2e/fixtures/license.ts) — they never exercise the real checkout call.
    {
      command: "npm run dev -- --port 8090",
      url: "http://localhost:8090",
      reuseExistingServer: !process.env.CI,
      timeout: 60_000,
      env: { STRIPE_PRICE_ID: "price_test_e2e_dummy" },
    },
  ],
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
