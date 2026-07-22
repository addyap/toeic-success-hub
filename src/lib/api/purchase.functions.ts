import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getServerConfig, isMonetizationEnabled } from "../config.server";
import { getStripeClient } from "../stripe.server";
import { mintLicenseToken } from "../license.server";

/** Cheap, network-free check for gated pages (practice/mock-test/progress) —
 *  just the on/off flag, not the price, so viewing those pages never waits
 *  on a Stripe API round trip the way the pricing page's fuller info does. */
export const getMonetizationStatus = createServerFn({ method: "GET" }).handler(async () => {
  return { enabled: isMonetizationEnabled() };
});

/** Whether the paywall is live, and the price to display if so. Deliberately
 *  tolerant of Stripe being unreachable/misconfigured — a fetch failure
 *  still reports the paywall as enabled (so gating stays consistent with
 *  isMonetizationEnabled everywhere else) but omits the price, so the
 *  pricing page falls back to "see price at checkout" rather than crashing
 *  the whole page for every visitor over a transient Stripe API issue. */
export const getPurchaseInfo = createServerFn({ method: "GET" }).handler(async () => {
  const enabled = isMonetizationEnabled();
  if (!enabled) return { enabled: false as const, price: null };

  try {
    const { stripePriceId } = getServerConfig();
    const price = await getStripeClient().prices.retrieve(stripePriceId!);
    if (price.unit_amount == null) return { enabled: true as const, price: null };
    const formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: price.currency.toUpperCase(),
    }).format(price.unit_amount / 100);
    return { enabled: true as const, price: { formatted } };
  } catch {
    return { enabled: true as const, price: null };
  }
});

/** Called from the purchase-success page with the session_id Stripe put in
 *  the redirect URL. Verifies payment status directly with Stripe's API
 *  (source of truth) rather than trusting the URL alone, then mints a
 *  license — no webhook involved, see license.server.ts's header comment
 *  for the tradeoff this accepts (no refund-triggered revocation). */
export const verifyPurchase = createServerFn({ method: "POST" })
  .validator(z.object({ sessionId: z.string().min(1) }))
  .handler(async ({ data }) => {
    if (!isMonetizationEnabled()) return { ok: false as const };
    const session = await getStripeClient().checkout.sessions.retrieve(data.sessionId);
    if (session.payment_status !== "paid") return { ok: false as const };
    const token = await mintLicenseToken();
    return { ok: true as const, token };
  });
