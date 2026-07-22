/** Server-only Stripe client. Uses the fetch-based HTTP client (not Stripe's
 *  default Node `https` client) so the same code works on both Nitro deploy
 *  targets this app uses: Vercel's Node runtime, and Cloudflare Workers'
 *  isolate runtime, which has no `https` module even with nodejs_compat. */
import Stripe from "stripe";
import { getServerConfig } from "./config.server";

let cached: Stripe | null = null;

export function getStripeClient(): Stripe {
  if (cached) return cached;
  const { stripeSecretKey } = getServerConfig();
  if (!stripeSecretKey) {
    throw new Error("STRIPE_SECRET_KEY is not set.");
  }
  cached = new Stripe(stripeSecretKey, {
    httpClient: Stripe.createFetchHttpClient(),
  });
  return cached;
}
