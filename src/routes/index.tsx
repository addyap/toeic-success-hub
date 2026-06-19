import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Headphones, BookOpen, Mic, PenLine, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import heroImg from "@/assets/hero-study.jpg";
import { vocabulary } from "@/data/vocabulary";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home | ToeicPath - Official TOEIC Prep Guide" },
      { name: "description", content: "Free TOEIC practice tests, business English vocabulary, and expert study strategies to boost your score." },
      { property: "og:title", content: "Home | ToeicPath - Official TOEIC Prep Guide" },
      { property: "og:description", content: "Free TOEIC practice tests, business English vocabulary, and expert study strategies to boost your score." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-soft" />
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.05fr_1fr] md:py-20 lg:gap-16">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Master the Business English Standard
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
              Master the <span className="bg-gradient-hero bg-clip-text text-transparent">Business English</span> Standard.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Your complete guide to the TOEIC® Listening, Reading, Speaking, and Writing tests. Aligned with official ETS standards to help you achieve your career goals.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/listening-reading"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-hero px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:opacity-95"
              >
                Start preparing <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/study-tips"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted"
              >
                Read study tips
              </Link>
            </div>
            <ul className="mt-7 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {[
                "All 7 L&R parts explained",
                "Aligned with official ETS standards",
                `${vocabulary.length} business vocabulary terms`,
                "No account required",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success" /> {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-hero opacity-20 blur-2xl" />
            <img
              src={heroImg}
              alt="A learner studying for the TOEIC at her desk"
              width={1280}
              height={960}
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-elegant"
            />
            <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-border bg-card p-4 shadow-soft sm:block">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Target score</div>
              <div className="mt-1 font-display text-2xl font-semibold">900<span className="text-muted-foreground">/990</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="mx-auto w-full max-w-6xl px-5 py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Pick a track</div>
            <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">Two tests. One clear path.</h2>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <TrackCard
            to="/listening-reading"
            icon={<Headphones className="h-5 w-5" />}
            badge="L&R Mastery"
            title="Listening & Reading"
            duration="2h total · 200 questions · 10–990"
            description="200 questions covering workplace communication — 100 Listening (45 min) and 100 Reading (75 min)."
            tags={["Photographs", "Conversations", "Reading comp."]}
          />
          <TrackCard
            to="/speaking-writing"
            icon={<Mic className="h-5 w-5" />}
            badge="S&W Excellence"
            title="Speaking & Writing"
            duration="80m · 19 tasks · 0–400"
            description="Real-world scenarios for active production: read aloud, describe a picture, write emails, and craft opinion essays."
            tags={["Describe a picture", "Email response", "Opinion essay"]}
          />
        </div>
      </section>

      {/* Features */}
      <section className="bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-5 py-16">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Three pillars of TOEIC success.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <Feature to="/listening-reading" icon={<BookOpen className="h-5 w-5" />} title="L&R Mastery" body="200 questions covering workplace communication, from photographs to long-form reading comprehension." />
            <Feature icon={<Mic className="h-5 w-5" />} title="S&W Excellence" body="Real-world scenarios for active production — speak with confidence and write with clarity." />
            <Feature to="/vocabulary" icon={<Sparkles className="h-5 w-5" />} title="Business Lexicon" body={`${vocabulary.length} essential terms across 4 key industries: management, travel, finance, and technical.`} />
          </div>
        </div>
      </section>

      {/* Study smarter teaser */}
      <section className="mx-auto w-full max-w-6xl px-5 pt-4">
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft sm:flex-row sm:items-center sm:p-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Study smarter</div>
            <h3 className="mt-1 font-display text-xl font-semibold sm:text-2xl">Score higher with proven strategies.</h3>
            <p className="mt-1 text-sm text-muted-foreground sm:text-base">Pacing plans, part-by-part tactics, and the traps to avoid on test day.</p>
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
          <h2 className="max-w-2xl font-display text-3xl font-semibold sm:text-4xl">Ready when you are.</h2>
          <p className="mt-3 max-w-xl text-primary-foreground/85">Jump into a practice question right now — no sign-up, no paywall.</p>
          <Link
            to="/listening-reading"
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
  to, icon, title, duration, description, tags, badge,
}: { to: "/listening-reading" | "/speaking-writing"; icon: React.ReactNode; title: string; duration: string; description: string; tags: string[]; badge?: string }) {
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
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">{icon}</span>
      <h3 className="mt-4 font-display text-2xl font-semibold">{title}</h3>
      <div className="mt-1 text-sm text-muted-foreground">{duration}</div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">{t}</span>
        ))}
      </div>
      <div className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
        Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}

function Feature({ icon, title, body, to }: { icon: React.ReactNode; title: string; body: string; to?: "/listening-reading" | "/vocabulary" | "/speaking-writing" | "/study-tips" }) {
  if (to) {
    return (
      <Link to={to} className="group block rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-elegant">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">{icon}</span>
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
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">{icon}</span>
      <h3 className="mt-4 font-semibold">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}
