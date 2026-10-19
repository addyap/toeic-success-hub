import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Sparkles, Heart } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { absoluteUrl } from "@/lib/site";
import { VOCAB_COUNT } from "@/data/vocabularyCount";

/**
 * Pricing: free during launch, and nothing promised either way.
 *
 * There is deliberately NO payment system behind this page — no Stripe, no
 * licence check, no gating anywhere in the app. Everything listed really is
 * fully open today. The page makes no commitment about the future: it
 * neither promises the site stays free nor announces a paid tier, a date or
 * a price. If paid plans are ever introduced, this page is where they are
 * announced first.
 */

const DESCRIPTION =
  "ToeicPath is free during launch — every practice question, the full mock test, and progress tracking, with no sign-up.";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | ToeicPath — Free during launch" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Pricing | ToeicPath — Free during launch" },
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

function Page() {
  return (
    <SiteLayout>
      <section className="bg-gradient-soft">
        <div className="mx-auto w-full max-w-3xl px-5 py-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Pricing
          </span>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Free during launch.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Right now, nothing on ToeicPath is locked, limited or behind a trial — there's no
            account to create, no card to enter, and nothing to cancel. If paid plans are ever
            introduced, they will be announced on this page first.
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
              free during launch, with no sign-up.
            </span>
          </p>
        </div>

        <div className="mt-8 grid gap-5">
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
              Start practising
            </Link>
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
                fully available right now. There is no trial period and no usage cap.
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Will ToeicPath always be free?</dt>
              <dd className="mt-1 text-muted-foreground">
                ToeicPath is free during launch. No pricing has been decided; if paid plans are ever
                introduced, this page will be updated first and there will be no surprise charge.
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
