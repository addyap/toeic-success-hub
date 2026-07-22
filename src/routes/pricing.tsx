import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2, Lock, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { absoluteUrl } from "@/lib/site";
import { hasValidLicense } from "@/lib/license";
import { getPurchaseInfo } from "@/lib/api/purchase.functions";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | ToeicPath - Official TOEIC Prep Guide" },
      {
        name: "description",
        content:
          "One-time purchase for full access to ToeicPath's complete TOEIC Listening & Reading practice bank, timed mock test, and progress tracking.",
      },
      { property: "og:url", content: absoluteUrl("/pricing") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/pricing") }],
  }),
  loader: () => getPurchaseInfo(),
  component: Page,
});

const INCLUDED = [
  "The full 609-question Listening & Reading practice bank (all 7 parts)",
  "The complete 200-question timed mock test, unlimited retakes",
  "Progress tracking: accuracy trends by part, and your daily streak",
];

function Page() {
  const purchaseInfo = Route.useLoaderData();
  const [owned, setOwned] = useState<boolean | null>(null);

  useEffect(() => {
    hasValidLicense().then(setOwned);
  }, []);

  return (
    <SiteLayout>
      <section className="mx-auto w-full max-w-2xl px-5 py-16">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          <Sparkles className="h-3.5 w-3.5" /> Full access
        </span>
        <h1 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">
          One purchase. Everything unlocked.
        </h1>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          A single one-time payment — no subscription, no account needed.
        </p>

        <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
          <ul className="space-y-3">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm sm:text-base">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-border pt-6">
            {!purchaseInfo.enabled ? (
              <div className="rounded-xl border border-dashed border-border bg-muted/40 p-4 text-center text-sm text-muted-foreground">
                Pricing is coming soon. In the meantime, Part 1 practice and the vocabulary builder
                are free to use.
              </div>
            ) : owned ? (
              <div className="rounded-xl border border-success/30 bg-success/10 p-4 text-center text-sm font-semibold text-success-text">
                You already have full access on this device.
              </div>
            ) : (
              <form method="POST" action="/api/checkout">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
                >
                  <Lock className="h-4 w-4" />
                  {purchaseInfo.price
                    ? `Unlock full access — ${purchaseInfo.price.formatted}`
                    : "Unlock full access"}
                </button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Secure checkout via Stripe. Access unlocks immediately after payment.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
