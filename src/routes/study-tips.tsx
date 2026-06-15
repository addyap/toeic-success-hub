import { createFileRoute } from "@tanstack/react-router";
import { Clock, Headphones, BookOpen, Mic, PenLine, Lightbulb } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/study-tips")({
  head: () => ({
    meta: [
      { title: "TOEIC Study Tips & Test Strategy | ToeicPath" },
      { name: "description", content: "Practical time-management, listening, reading, speaking and writing strategies to lift your TOEIC score." },
      { property: "og:title", content: "TOEIC Study Tips & Test Strategy" },
      { property: "og:description", content: "Practical strategies to lift your TOEIC score." },
    ],
  }),
  component: Page,
});

const general = [
  "Take a timed full-length practice test every two weeks — not just question sets.",
  "Study 30 focused minutes daily instead of one long weekend cram session.",
  "Always review wrong answers the next day; that's where the score jumps live.",
  "Build a personal mistake notebook: question, your answer, why you missed it.",
];

const sections = [
  {
    icon: <Headphones className="h-5 w-5" />,
    title: "Listening",
    timing: "Average 12 seconds per question — there is no time to re-listen.",
    tips: [
      "Read Part 1 photo choices BEFORE the audio starts.",
      "In Part 2, focus on the first 2 words — they reveal question type (who/when/where).",
      "For Parts 3 & 4, preview the questions during the directions.",
      "Train with podcasts at 1.0x then 1.25x — the test speaks fast.",
    ],
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "Reading",
    timing: "75 minutes for 100 questions: ~30s for Part 5, ~1 min per Part 7 item.",
    tips: [
      "Do Part 7 first if you struggle with timing — it carries the most points.",
      "For Part 5, look at the blank and the words around it before reading the full sentence.",
      "Skim passages for the gist before reading each question stem.",
      "Never leave a blank — there is no penalty for wrong answers.",
    ],
  },
  {
    icon: <Mic className="h-5 w-5" />,
    title: "Speaking",
    timing: "Most tasks give 15–45 seconds prep and 30–60 seconds to respond.",
    tips: [
      "Record yourself daily — the test microphone shows every hesitation.",
      "Use a clear structure: opinion → reason 1 with example → reason 2 with example.",
      "Don't fix small mistakes; keep flow. Hesitation hurts more than slips.",
      "Pronounce final consonants (-ed, -s, -t). They affect comprehensibility scores.",
    ],
  },
  {
    icon: <PenLine className="h-5 w-5" />,
    title: "Writing",
    timing: "Aim for 8 min on the email, 30 min on the opinion essay.",
    tips: [
      "Email task: greet, address every point asked, close politely. Three short paragraphs.",
      "Opinion essay: 4–5 paragraphs — intro, two body paragraphs with examples, conclusion.",
      "Vary sentence length and connectors (however, in addition, for instance).",
      "Leave 2 minutes to proofread for subject-verb agreement and articles.",
    ],
  },
];

function Page() {
  return (
    <SiteLayout>
      <section className="bg-gradient-soft">
        <div className="mx-auto w-full max-w-6xl px-5 py-12 md:py-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Lightbulb className="h-3.5 w-3.5" /> Study Tips
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Smarter habits beat longer hours.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            A short collection of strategies that consistently move the needle — for every TOEIC section.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-5 py-12">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">General test-taking</h2>
        <ul className="mt-5 space-y-3">
          {general.map((g) => (
            <li key={g} className="flex gap-3 rounded-2xl border border-border bg-card p-4">
              <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                <Lightbulb className="h-4 w-4" />
              </span>
              <span className="text-sm leading-relaxed">{g}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 space-y-8">
          {sections.map((s) => (
            <div key={s.title} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-hero text-primary-foreground">{s.icon}</span>
                <div>
                  <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
                  <div className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" /> {s.timing}
                  </div>
                </div>
              </div>
              <ul className="mt-5 space-y-2">
                {s.tips.map((t) => (
                  <li key={t} className="flex gap-3 text-sm leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}