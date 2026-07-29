import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Headphones,
  BookOpen,
  Mic,
  PenLine,
  Layers,
  ExternalLink,
  AlertCircle,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { SpeakingTrainer, WritingTrainer } from "@/components/FourSkillsPractice";
import { absoluteUrl } from "@/lib/site";
import {
  examSections,
  examFacts,
  speakingTasks,
  writingTasks,
  type SkillTask,
} from "@/data/fourSkills";

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
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/four-skills") }],
  }),
  component: Page,
});

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

function Page() {
  return (
    <SiteLayout>
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
          <SpeakingTrainer />
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
          <WritingTrainer />
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
