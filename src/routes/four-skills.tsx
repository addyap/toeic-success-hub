import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Headphones,
  BookOpen,
  Mic,
  PenLine,
  Layers,
  ExternalLink,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { SpeakingTrainer, WritingTrainer } from "@/components/FourSkillsPractice";
import { absoluteUrl, SITE_NAME } from "@/lib/site";
import ogImage from "@/assets/og-four-skills.jpg";
import {
  examSections,
  examFacts,
  speakingTasks,
  writingTasks,
  type SkillTask,
} from "@/data/fourSkills";
import type { SpeakingPrompt, WritingPrompt } from "@/data/fourSkillsPrompts";

// The trainer COMPONENTS are a plain top-level import, not React.lazy +
// Suspense: that was tried to keep the whole component tree (plus its data)
// out of this route's initial bundle, but on a cold/slow first compile the
// Suspense boundary got stuck on the fallback forever (confirmed by
// reproducing it directly — the dynamic import resolves fine if triggered
// manually, but the SSR/hydration handoff for the lazy boundary never
// recovers). A stuck skeleton for an unlucky first visitor is worse than the
// extra bundle weight, so the components stay eager.
//
// The actual weight — the ~1000-line speakingPrompts/writingPrompts arrays in
// fourSkillsPrompts.ts — is lazy-loaded as DATA instead, below, the same
// useState + useEffect dynamic `import()` pattern already proven on
// /listening-reading (no Suspense boundary involved, so it doesn't hit the
// bug above).

const DESCRIPTION =
  "The complete guide to the TOEIC 4-Skills test: adaptive Listening and Reading, all 11 Speaking tasks and all 8 Writing tasks, with timed practice for Speaking and Writing.";

export const Route = createFileRoute("/four-skills")({
  head: () => ({
    meta: [
      { title: "TOEIC 4-Skills | ToeicPath — Format, Timings and Practice" },
      { name: "description", content: DESCRIPTION },
      {
        property: "og:title",
        content: "TOEIC 4-Skills | ToeicPath — Format, Timings and Practice",
      },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: absoluteUrl("/four-skills") },
      { property: "og:image", content: absoluteUrl(ogImage) },
      { property: "og:image:width", content: "1280" },
      { property: "og:image:height", content: "960" },
      {
        property: "og:image:alt",
        content: "The four TOEIC 4-Skills sections: Listening, Reading, Speaking and Writing",
      },
      { name: "twitter:image", content: absoluteUrl(ogImage) },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/four-skills") }],
  }),
  component: Page,
});

/** Deep links into the study-tips articles that expand on this page.
 *  Slugs must match entries in `src/data/studyTips.ts`. */
const relatedGuides = [
  {
    slug: "four-skills-format",
    title: "The 4-Skills format",
    blurb:
      "Why the adaptive version changes your pacing, and what the opening questions really cost.",
  },
  {
    slug: "speaking-tasks-1-11",
    title: "Speaking tasks 1–11",
    blurb: "What each task group is actually marked on, and how to fill the time you are given.",
  },
  {
    slug: "writing-tasks-1-8",
    title: "Writing tasks 1–8",
    blurb: "Budgeting 60 minutes across eight tasks when one essay takes half the clock.",
  },
];

const sectionIcons = {
  listening: Headphones,
  reading: BookOpen,
  speaking: Mic,
  writing: PenLine,
} as const;

function SectionHeader({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-secondary-foreground">
        {icon}
      </span>
      <div>
        <h2 className="font-display text-2xl font-semibold tracking-tight">{title}</h2>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  );
}

function TaskTable({ tasks }: { tasks: SkillTask[] }) {
  return (
    <div className="mt-6 space-y-4">
      {tasks.map((t) => (
        <div key={t.range} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-semibold">
              <span className="text-primary">Q{t.range}</span> · {t.task}
            </h3>
            <span className="text-xs font-medium text-muted-foreground">{t.timing}</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {t.criteria.map((c) => (
              <span
                key={c}
                className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
              >
                {c}
              </span>
            ))}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.advice}</p>
        </div>
      ))}
    </div>
  );
}

// Article, not FAQPage: examFacts below are declarative statements shown as
// headed paragraphs, not literal questions — forcing FAQPage schema onto
// content that isn't actually phrased as Q&A risks Google treating it as a
// content/schema mismatch. Same safe pattern as study-tips.$slug.tsx.
const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The TOEIC 4-Skills test",
  description: DESCRIPTION,
  author: { "@type": "Organization", name: SITE_NAME },
  publisher: { "@type": "Organization", name: SITE_NAME },
  mainEntityOfPage: absoluteUrl("/four-skills"),
};

function TrainerSkeleton() {
  return (
    <div aria-hidden="true" aria-busy="true" className="space-y-4">
      <div className="h-9 w-64 animate-pulse rounded-full bg-muted" />
      <div className="h-48 animate-pulse rounded-2xl bg-muted" />
    </div>
  );
}

function Page() {
  const [prompts, setPrompts] = useState<{
    speaking: SpeakingPrompt[];
    writing: WritingPrompt[];
  } | null>(null);

  useEffect(() => {
    let cancelled = false;
    import("@/data/fourSkillsPrompts").then((mod) => {
      if (cancelled) return;
      setPrompts({ speaking: mod.speakingPrompts, writing: mod.writingPrompts });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        // Static, hardcoded JSON built from this route's own constants — no
        // user input, so this is not an XSS vector.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <section className="bg-gradient-soft">
        <div className="mx-auto w-full max-w-5xl px-5 py-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Layers className="h-3.5 w-3.5" />
            All four skills, one sitting
          </span>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            The TOEIC 4-Skills test
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Listening, Reading, Speaking and Writing assessed in a single session of roughly 2 hours
            20 minutes, across 109 questions. It is the only TOEIC format that produces a complete
            picture of your English in one certificate — and the only one that always uses the
            adaptive versions of Listening and Reading.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {examSections.map((s) => {
              const Icon = sectionIcons[s.id];
              return (
                <div
                  key={s.id}
                  className="rounded-2xl border border-border bg-card p-5 shadow-soft"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-primary" />
                      <h2 className="font-semibold">{s.name}</h2>
                    </div>
                    <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                      {s.scale}
                    </span>
                  </div>
                  <p className="mt-3 text-sm font-medium">
                    {s.duration} · {s.questions}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-5">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Only sitting Speaking &amp; Writing?</strong> ETS
              also sells the Speaking and Writing Tests as their own standalone exam, separate from
              this 4-Skills bundle and from the linear Listening &amp; Reading test. It uses the
              exact same 11 Speaking tasks and 8 Writing tasks, with identical timings and scoring —
              so the Speaking and Writing sections below are exactly what you need, whether you sit
              them alone or as part of the full 4-Skills test.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-5 py-16">
        <SectionHeader
          icon={<Layers className="h-5 w-5" />}
          title="How the adaptive format works"
          subtitle="Multistage Adaptive — the part most candidates misunderstand"
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="font-semibold">Two units, not one long section</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Listening and Reading each split into Unit 1 (25 questions) and Unit 2 (20 questions).
              Your performance on Unit 1 decides which set of questions you receive in Unit 2, which
              is how the test reaches an accurate score in far less time than the 100-question
              linear version.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="font-semibold">What that means for your strategy</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Do not treat the opening questions as a warm-up. Arrive already focused, because Unit
              1 is where the test forms its first estimate of your level. And if Unit 2 suddenly
              feels harder, that is usually a good sign, not a bad one.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {examFacts.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-5">
              <h3 className="flex items-start gap-2 text-sm font-semibold">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto w-full max-w-5xl px-5 py-16">
          <SectionHeader
            icon={<Mic className="h-5 w-5" />}
            title="Speaking section"
            subtitle="11 tasks · 20 minutes · scored 0–200"
          />
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Every response is recorded and scored by trained raters. The evaluation criteria are
            cumulative: tasks 1–2 are judged on delivery alone, and each later group adds another
            layer on top of everything before it.
          </p>
          <TaskTable tasks={speakingTasks} />
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-5 py-16">
        <h2 className="font-display text-2xl font-semibold tracking-tight">Speaking practice</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Each drill runs on the real preparation and response timings. Record yourself if you want
          to hear the gap between what you meant to say and what came out — the audio never leaves
          your browser.
        </p>
        <div className="mt-8">
          {prompts ? <SpeakingTrainer prompts={prompts.speaking} /> : <TrainerSkeleton />}
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto w-full max-w-5xl px-5 py-16">
          <SectionHeader
            icon={<PenLine className="h-5 w-5" />}
            title="Writing section"
            subtitle="8 tasks · 60 minutes · scored 0–200"
          />
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Tasks 1–5 share a single 8-minute block, so you can move back and forth between them.
            Tasks 6, 7 and 8 are timed individually and cannot be revisited once you move on.
          </p>
          <TaskTable tasks={writingTasks} />
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-5 py-16">
        <h2 className="font-display text-2xl font-semibold tracking-tight">Writing practice</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Timed to the real task lengths, with a live word count. Submit to compare your answer
          against the marking criteria and a strong sample response.
        </p>
        <div className="mt-8">
          {prompts ? <WritingTrainer prompts={prompts.writing} /> : <TrainerSkeleton />}
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto w-full max-w-5xl px-5 py-16">
          <SectionHeader
            icon={<Layers className="h-5 w-5" />}
            title="How the 4-Skills test is scored"
            subtitle="Four independent scores, not one aggregate"
          />
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 font-semibold">Section</th>
                  <th className="py-3 pr-4 font-semibold">Scale</th>
                  <th className="py-3 font-semibold">Reported as</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/60">
                  <td className="py-3 pr-4 font-medium text-foreground">Listening</td>
                  <td className="py-3 pr-4">5–495</td>
                  <td className="py-3">Combined with Reading into a total of 10–990</td>
                </tr>
                <tr className="border-b border-border/60">
                  <td className="py-3 pr-4 font-medium text-foreground">Reading</td>
                  <td className="py-3 pr-4">5–495</td>
                  <td className="py-3">Combined with Listening into a total of 10–990</td>
                </tr>
                <tr className="border-b border-border/60">
                  <td className="py-3 pr-4 font-medium text-foreground">Speaking</td>
                  <td className="py-3 pr-4">0–200</td>
                  <td className="py-3">Its own score, with a CEFR level</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">Writing</td>
                  <td className="py-3 pr-4">0–200</td>
                  <td className="py-3">Its own score, with a CEFR level</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Your score report also maps each skill to a CEFR level (A1 to C1) and lists the
            abilities typical of candidates at your score. Because the four sections are marked
            independently, a strong Listening score cannot compensate for a weak Writing one — which
            is exactly why employers ask for the 4-Skills format.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-5 py-16">
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
          <h2 className="font-display text-xl font-semibold tracking-tight">
            Read the official rules before test day
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            ETS publishes an Examinee Handbook covering everything this page does not: accepted
            identity documents, the equipment and connection requirements for remote proctoring,
            what counts as a testing irregularity, and how to request a score review. It is revised
            regularly, so always read the current version rather than a saved copy.
          </p>
          <a
            href="https://www.etsglobal.org/"
            target="_blank"
            rel="noreferrer noopener"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
          >
            Official TOEIC handbook at ETS Global
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8">
          <h2 className="font-display text-xl font-semibold tracking-tight">
            Go deeper on each section
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {relatedGuides.map((g) => (
              <Link
                key={g.slug}
                to="/study-tips/$slug"
                params={{ slug: g.slug }}
                className="group rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-elegant"
              >
                <h3 className="font-semibold leading-snug group-hover:text-primary">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.blurb}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Read guide
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">
              Build the other half
            </div>
            <p className="mt-1 text-sm text-muted-foreground sm:text-base">
              Listening and Reading are still 90 of the 109 questions. Drill them with 700+ practice
              questions and full explanations.
            </p>
          </div>
          <Link
            to="/listening-reading"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-input bg-background px-5 py-2.5 text-sm font-semibold transition hover:bg-muted"
          >
            Practise Listening &amp; Reading
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
