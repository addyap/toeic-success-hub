import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  Headphones,
  BookOpen,
  Sparkles,
  ArrowRight,
  Clock,
  Layers,
  Gauge,
  Mic,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { HeroAscent } from "@/components/HeroAscent";
import { FrontIntro } from "@/components/FrontIntro";
import { VOCAB_COUNT } from "@/data/vocabulary";
import { absoluteUrl, pageTitle } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: pageTitle("Home") },
      {
        name: "description",
        content: `TOEIC prep platform covering all four skills: the 4-Skills exam format, realistic Listening & Reading practice, timed Speaking and Writing drills, and a ${VOCAB_COUNT}-term vocabulary builder. Free during its launch period, no account required.`,
      },
      { property: "og:title", content: pageTitle("Home") },
      {
        property: "og:description",
        content: `TOEIC prep platform covering all four skills: the 4-Skills exam format, realistic Listening & Reading practice, timed Speaking and Writing drills, and a ${VOCAB_COUNT}-term vocabulary builder. Free during its launch period, no account required.`,
      },
      { property: "og:url", content: absoluteUrl("/") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* Hero — the "Ascent" answer-sheet (see HeroAscent.tsx) */}
      <HeroAscent />

      {/* Short, native-language orientation for first-time visitors */}
      <FrontIntro />

      {/* Track */}
      <section className="mx-auto w-full max-w-6xl px-5 py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">
              Two formats, both covered
            </div>
            <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
              Whichever TOEIC you're sitting.
            </h2>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <TrackCard
            to="/four-skills"
            icon={<Layers className="h-5 w-5" />}
            badge="All 4 skills"
            title="TOEIC 4-Skills"
            duration="~2h20 · 109 questions · adaptive"
            description="Listening, Reading, Speaking and Writing in one sitting, with timed drills for the 11 speaking and 8 writing tasks."
            tags={["Adaptive L&R", "11 speaking tasks", "8 writing tasks"]}
          />
          <TrackCard
            to="/listening-reading"
            icon={<Headphones className="h-5 w-5" />}
            badge="L&R Mastery"
            title="Listening & Reading"
            duration="2h total · 200 questions · 10–990"
            description="200 questions covering workplace communication — 100 Listening (45 min) and 100 Reading (75 min)."
            tags={["Photographs", "Conversations", "Reading comp."]}
          />
        </div>
      </section>

      {/* Features */}
      <section className="bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-5 py-16">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Three pillars of TOEIC success.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <Feature
              to="/four-skills"
              icon={<Mic className="h-5 w-5" />}
              title="Speaking & Writing"
              body="Every 4-Skills task explained, then drilled against the real exam clock — record your answers back and check them against the official criteria."
            />
            <Feature
              to="/listening-reading"
              icon={<BookOpen className="h-5 w-5" />}
              title="L&R Mastery"
              body="200 questions covering workplace communication, from photographs to long-form reading comprehension."
            />
            <Feature
              to="/vocabulary"
              icon={<Sparkles className="h-5 w-5" />}
              title="Business Lexicon"
              body={`${VOCAB_COUNT} essential terms across 6 key categories: management, travel, finance, technical, marketing & sales, and HR.`}
            />
          </div>
        </div>
      </section>

      {/* Mock test teaser */}
      <section className="mx-auto w-full max-w-6xl px-5 pt-10">
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
              <Clock className="h-3.5 w-3.5" /> Full mock test
            </div>
            <h3 className="mt-1 font-display text-xl font-semibold sm:text-2xl">
              200 questions. Two hours. One real score.
            </h3>
            <p className="mt-1 text-sm text-muted-foreground sm:text-base">
              A timed, full-length practice test in real exam proportions, with a complete score
              breakdown at the end.
            </p>
          </div>
          <Link
            to="/mock-test"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Take the mock test <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Adaptive practice teaser */}
      <section className="mx-auto w-full max-w-6xl px-5 pt-4">
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft sm:flex-row sm:items-center sm:p-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
              <Gauge className="h-3.5 w-3.5" /> Adaptive practice
            </div>
            <h3 className="mt-1 font-display text-xl font-semibold sm:text-2xl">
              The 4-Skills adaptive L&amp;R format, one section at a time.
            </h3>
            <p className="mt-1 text-sm text-muted-foreground sm:text-base">
              45 questions in two units against the real clock — how you do on Unit 1 sets Unit 2's
              difficulty, exactly like the adaptive test.
            </p>
          </div>
          <Link
            to="/adaptive-practice"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Try Adaptive Practice <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Study smarter teaser */}
      <section className="mx-auto w-full max-w-6xl px-5 pt-4">
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft sm:flex-row sm:items-center sm:p-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">
              Study smarter
            </div>
            <h3 className="mt-1 font-display text-xl font-semibold sm:text-2xl">
              Score higher with proven strategies.
            </h3>
            <p className="mt-1 text-sm text-muted-foreground sm:text-base">
              Pacing plans, part-by-part tactics, and the traps to avoid on test day.
            </p>
          </div>
          <Link
            to="/study-tips"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-95"
          >
            Read study tips <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-6xl px-5 py-16">
        <div className="overflow-hidden rounded-3xl bg-gradient-hero p-8 text-primary-foreground shadow-elegant sm:p-12">
          <h2 className="max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
            Ready when you are.
          </h2>
          <p className="mt-3 max-w-xl text-primary-foreground/85">
            Jump into a practice question right now — no sign-up, free while it's in launch.
          </p>
          <Link
            to="/listening-reading"
            search={{ part: 1 }}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-background/90"
          >
            Try Part 1 practice <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

function TrackCard({
  to,
  icon,
  title,
  duration,
  description,
  tags,
  badge,
}: {
  to: "/listening-reading" | "/four-skills";
  icon: React.ReactNode;
  title: string;
  duration: string;
  description: string;
  tags: string[];
  badge?: string;
}) {
  return (
    <Link
      to={to}
      className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-elegant"
    >
      {badge && (
        <span className="absolute right-5 top-5 rounded-full bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
          {badge}
        </span>
      )}
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </span>
      <h3 className="mt-4 font-display text-2xl font-semibold">{title}</h3>
      <div className="mt-1 text-sm text-muted-foreground">{duration}</div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
        Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}

function Feature({
  icon,
  title,
  body,
  to,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  to?: "/listening-reading" | "/four-skills" | "/vocabulary" | "/study-tips";
}) {
  if (to) {
    return (
      <Link
        to={to}
        className="group block rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-elegant"
      >
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
          {icon}
        </span>
        <h3 className="mt-4 font-semibold">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
        <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
          Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </div>
      </Link>
    );
  }
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </span>
      <h3 className="mt-4 font-semibold">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}
