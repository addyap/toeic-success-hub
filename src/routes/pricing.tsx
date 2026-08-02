import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Sparkles, Clock, Heart } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { absoluteUrl } from "@/lib/site";
import { VOCAB_COUNT } from "@/data/vocabulary";

/**
 * Pricing as a statement of intent only.
 *
 * There is deliberately NO payment system behind this page — no Stripe, no
 * licence check, and above all no gating anywhere in the app. A previous
 * paywall was built and then removed wholesale (commit 23aeb1a) precisely so
 * that "free" could not drift by accident, and an env-var kill switch was
 * judged a footgun after a concurrent change hard-disabled it. So this page is
 * static copy: nothing here can lock a feature, because there is no mechanism
 * to do so.
 *
 * No price is quoted. Announcing a number before one has been decided is a
 * commitment to visitors, and "coming soon" is the honest state.
 *
 * e2e/pricing.spec.ts pins the promises made here: no checkout control, and
 * every practice route still reachable without payment.
 */

const DESCRIPTION =
  "ToeicPath is free to use — every practice question, the full mock test, and progress tracking, at no cost. A paid tier is planned but not available yet.";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | ToeicPath — Free to use, paid tier coming soon" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Pricing | ToeicPath — Free to use" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: absoluteUrl("/pricing") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/pricing") }],
  }),
  component: Page,
});

const FREE_TODAY = [
  "Every Listening & Reading practice question, across all 7 parts",
  "The full timed mock test, with unlimited retakes",
  "The complete TOEIC 4-Skills section, including the Speaking and Writing trainers",
  `The ${VOCAB_COUNT}-term vocabulary builder, with glosses in 8 languages`,
  "Progress tracking, accuracy trends and your daily streak",
  "Every study guide",
];

const PLANNED = [
  "Deeper question banks and new practice formats",
  "Longer-term progress history and exportable reports",
  "More Speaking and Writing prompts with model answers",
];

function Page() {
  return (
    <SiteLayout>
      <section className="bg-gradient-soft">
        <div className="mx-auto w-full max-w-3xl px-5 py-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Pricing
          </span>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Everything is free right now.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Nothing on ToeicPath is locked, limited or behind a trial. There is no account to
            create, no card to enter, and nothing to cancel. A paid tier is planned for the future —
            but it does not exist yet, and this page will say so plainly until it does.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-5 py-14">
        <div
          className="rounded-2xl border border-success/30 bg-success/10 p-5"
          data-testid="free-banner"
        >
          <p className="flex items-start gap-3 text-sm font-semibold sm:text-base">
            <Heart className="mt-0.5 h-5 w-5 shrink-0 text-success" />
            <span>
              You will not be charged for anything on this site today. Every feature listed below is
              free, with no sign-up.
            </span>
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border-2 border-primary bg-card p-6 shadow-soft">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-display text-2xl font-semibold">Free</h2>
              <span className="rounded-full bg-success/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-success-text">
                Available now
              </span>
            </div>
            <p className="mt-1 font-display text-3xl font-semibold">
              £0<span className="text-base font-normal text-muted-foreground"> / forever</span>
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              The whole site, exactly as it is today.
            </p>
            <ul className="mt-5 space-y-3">
              {FREE_TODAY.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/four-skills"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
            >
              Start practising — free
            </Link>
          </div>

          <div className="rounded-2xl border border-dashed border-border bg-card/50 p-6">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-display text-2xl font-semibold text-muted-foreground">Pro</h2>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                <Clock className="h-3 w-3" />
                Coming soon
              </span>
            </div>
            <p className="mt-1 font-display text-3xl font-semibold text-muted-foreground">
              Not yet priced
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Ideas being considered for a future paid tier. None of this is available to buy, and
              nothing currently free will be moved behind it.
            </p>
            <ul className="mt-5 space-y-3">
              {PLANNED.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {/* Deliberately not a button. There is nothing to click, because
                there is nothing to buy — an inert "Notify me" control would
                imply a signup list that does not exist. */}
            <p className="mt-6 rounded-xl border border-dashed border-border bg-muted/40 p-4 text-center text-sm text-muted-foreground">
              Nothing to buy yet. When this becomes available it will be announced here first.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-card p-6">
          <h2 className="font-display text-xl font-semibold">
            Questions you might reasonably have
          </h2>
          <dl className="mt-4 space-y-4 text-sm">
            <div>
              <dt className="font-semibold">Is anything limited today?</dt>
              <dd className="mt-1 text-muted-foreground">
                No. Every question, the mock test, the 4-Skills trainers and progress tracking are
                fully available. There is no trial period and no usage cap.
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Will the free features become paid later?</dt>
              <dd className="mt-1 text-muted-foreground">
                The intention is that what is free today stays free. A paid tier, if it arrives,
                would be about new material on top rather than taking away what is already here.
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Do you store my payment details?</dt>
              <dd className="mt-1 text-muted-foreground">
                There is no payment system on this site at all — no checkout, and no card details
                are collected or stored anywhere. See the{" "}
                <Link to="/privacy" className="underline underline-offset-2 hover:text-foreground">
                  privacy policy
                </Link>{" "}
                for what little data the site does handle.
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </SiteLayout>
  );
}
