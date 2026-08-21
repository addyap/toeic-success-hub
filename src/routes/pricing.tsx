import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Sparkles, Clock, Heart } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { absoluteUrl } from "@/lib/site";
import { VOCAB_COUNT } from "@/data/vocabulary";

/**
 * Pricing as a statement of intent only.
 *
 * There is deliberately NO payment system behind this page yet — no Stripe,
 * no licence check, no gating anywhere in the app. Everything listed as free
 * really is fully open today. But unlike an earlier version of this page,
 * that is not framed as permanent: ToeicPath is free during this launch
 * period, and pricing is coming in the months ahead. No date and no number
 * is quoted here — announcing either before it is decided would itself be a
 * false promise — but the direction (this will not stay free indefinitely)
 * is stated plainly rather than left implicit.
 */

const DESCRIPTION =
  "ToeicPath is free to use during its launch period — every practice question, the full mock test, and progress tracking, at no cost today. Pricing is coming in the months ahead.";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | ToeicPath — Free for now, pricing coming soon" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Pricing | ToeicPath — Free for now" },
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
            Free during launch. Pricing is coming.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Right now, nothing on ToeicPath is locked, limited or behind a trial — there's no
            account to create, no card to enter, and nothing to cancel. That's the launch period,
            not the long-term plan: ToeicPath will introduce pricing in the coming months. No date
            or price is set yet, so none is promised here — but the site will not stay free
            indefinitely.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-5 py-14">
        <div
          className="rounded-2xl border border-primary/30 bg-primary/5 p-5"
          data-testid="free-banner"
        >
          <p className="flex items-start gap-3 text-sm font-semibold sm:text-base">
            <Heart className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <span>
              You will not be charged for anything on this site today. Every feature listed below is
              free, with no sign-up — for now, during ToeicPath's launch period.
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
              £0
              <span className="text-base font-normal text-muted-foreground"> / during launch</span>
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              The whole site, exactly as it is today — for a limited time.
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
              Ideas being considered for a future paid tier. None of this is available to buy yet,
              and the current free features are expected to move under it once it launches.
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
                fully available right now. There is no trial period and no usage cap — but "right
                now" is the operative phrase; see below.
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Will the free features become paid later?</dt>
              <dd className="mt-1 text-muted-foreground">
                Yes. This free period is how ToeicPath launches, not how it stays — pricing is
                coming in the months ahead, and the features listed as free today are expected to
                move under it. No date or price has been decided, so none is quoted here; when they
                are, this page will be updated first and there will be no surprise charge.
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
