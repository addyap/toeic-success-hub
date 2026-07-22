import process from "node:process";

// Server-only config. The .server.ts suffix prevents Vite from bundling
// this file into the client — values here never reach the browser.
//
// On Cloudflare Workers, env binds at REQUEST time. Module-scope reads
// (e.g. `const x = process.env.X`) resolve to undefined — always read
// process.env INSIDE a function or handler.
//
// When to use which env-access pattern:
//   - .server.ts module (this file): server-only helpers reused across
//     handlers. Wrap reads in a function so they run per-request.
//   - inline process.env inside a createServerFn handler: one-off reads
//     not reused elsewhere.
//   - import.meta.env.VITE_FOO: PUBLIC config readable from both client
//     and server (analytics IDs, public URLs). Define in .env with the
//     VITE_ prefix. Never put secrets here — they ship to the browser.

export function getServerConfig() {
  return {
    nodeEnv: process.env.NODE_ENV,
    // "Full access" one-time purchase. Monetization is considered enabled
    // only once stripePriceId is set — every gated page checks that flag
    // (see isMonetizationEnabled below), so leaving these unset keeps the
    // whole site exactly as free/open as it is today.
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    stripePriceId: process.env.STRIPE_PRICE_ID,
    licenseSigningPrivateKeyJwk: process.env.LICENSE_SIGNING_PRIVATE_KEY_JWK,
  };
}

/** Single source of truth for "is the paywall live." Deliberately just a
 *  presence check on the price ID (no network call) — cheap, synchronous,
 *  and lets every gated page render its free/paid state without an extra
 *  round trip to Stripe. */
export function isMonetizationEnabled(): boolean {
  return Boolean(getServerConfig().stripePriceId);
}
