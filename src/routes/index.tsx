import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Headphones, BookOpen, Mic, PenLine, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import heroImg from "@/assets/hero-study.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ToeicPath — Modern TOEIC Test Preparation" },
      { name: "description", content: "Structured guides, interactive practice, and a smart vocabulary builder for the TOEIC L&R and S&W tests." },
      { property: "og:title", content: "ToeicPath — Modern TOEIC Test Preparation" },
      { property: "og:description", content: "Structured guides, interactive practice, and a smart vocabulary builder for the TOEIC L&R and S&W tests." },
    ],
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
              <Sparkles className="h-3.5 w-3.5" /> Built for serious learners
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
              Score higher on the <span className="bg-gradient-hero bg-clip-text text-transparent">TOEIC</span>, the calm way.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              ToeicPath gives you a clear map of every section, hundreds of bite-size practice items, and a vocabulary builder that fits in your pocket — so you walk into test day prepared, not panicked.
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
                "Speaking & Writing prompts",
                "Business vocabulary flashcards",
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
            badge="Most popular"
            title="Listening & Reading"
            duration="2h 30m · 200 questions · 10–990"
            description="Multiple-choice test of business English comprehension. Seven parts across audio and text."
            tags={["Photographs", "Conversations", "Reading comp."]}
          />
          <TrackCard
            to="/speaking-writing"
            icon={<Mic className="h-5 w-5" />}
            title="Speaking & Writing"
            duration="80m · 19 tasks · 0–400"
            description="Performance-based test recorded online. Read aloud, describe a picture, write emails and essays."
            tags={["Describe a picture", "Email response", "Opinion essay"]}
          />
        </div>
      </section>

      {/* Features */}
      <section className="bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-5 py-16">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Everything you need, nothing you don't.</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Feature icon={<BookOpen className="h-5 w-5" />} title="Clear part guides" body="Format, timing, and what examiners reward — for every part." />
            <Feature icon={<Sparkles className="h-5 w-5" />} title="Interactive practice" body="Tap an answer, see the explanation instantly. No grading screens." />
            <Feature icon={<PenLine className="h-5 w-5" />} title="Writing prompts" body="Sample tasks for emails and opinion essays with model responses." />
            <Feature icon={<Headphones className="h-5 w-5" />} title="Vocabulary builder" body="Business-themed flashcards with spaced reveal — perfect for commutes." />
          </div>
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

function Feature({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">{icon}</span>
      <h3 className="mt-4 font-semibold">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}
