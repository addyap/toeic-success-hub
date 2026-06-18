import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Lightbulb, Clock, ArrowRight, Headphones, BookOpen, MessageSquare, Target } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { studyTips, type TipCategory } from "@/data/studyTips";

export const Route = createFileRoute("/study-tips/")({
  head: () => ({
    meta: [
      { title: "Study Tips | ToeicPath - Official TOEIC Prep Guide" },
      { name: "description", content: "Free TOEIC practice tests, business English vocabulary, and expert study strategies to boost your score." },
      { property: "og:title", content: "Study Tips | ToeicPath - Official TOEIC Prep Guide" },
      { property: "og:description", content: "Free TOEIC practice tests, business English vocabulary, and expert study strategies to boost your score." },
      { property: "og:url", content: "/study-tips" },
    ],
    links: [{ rel: "canonical", href: "/study-tips" }],
  }),
  component: Page,
});

const categoryOrder: TipCategory[] = ["Listening & Reading", "Speaking & Writing", "Strategy"];

const categoryIcon: Record<TipCategory, ReactNode> = {
  "Listening & Reading": <Headphones className="h-4 w-4" />,
  "Speaking & Writing": <MessageSquare className="h-4 w-4" />,
  Strategy: <Target className="h-4 w-4" />,
};

function Page() {
  return (
    <SiteLayout>
      <section className="bg-gradient-soft">
        <div className="mx-auto w-full max-w-6xl px-5 py-12 md:py-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Lightbulb className="h-3.5 w-3.5" /> Study Tips
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Expert strategies for every part of the test.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Short, focused articles on pacing, listening tactics, reading shortcuts, and the speaking and writing templates that earn the most points. Pick a section and start with the part you're losing points on.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-14">
        {categoryOrder.map((cat) => {
          const items = studyTips.filter((t) => t.category === cat);
          if (items.length === 0) return null;
          return (
            <div key={cat} className="mb-12 last:mb-0">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  {categoryIcon[cat]}
                </span>
                <div>
                  <h2 className="font-display text-2xl font-semibold sm:text-3xl">{cat}</h2>
                  <div className="text-sm text-muted-foreground">
                    {items.length} article{items.length === 1 ? "" : "s"}
                  </div>
                </div>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {items.map((tip) => (
                  <TipCard key={tip.slug} tip={tip} />
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </SiteLayout>
  );
}

function TipCard({ tip }: { tip: (typeof studyTips)[number] }) {
  return (
    <Link
      to="/study-tips/$slug"
      params={{ slug: tip.slug }}
      className="group flex flex-col rounded-2xl border border-border bg-card p-5 shadow-soft transition hover:border-primary/60 hover:shadow-lg"
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
          {categoryIcon[tip.category]} {tip.category}
        </span>
        <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground">
          <Clock className="h-3 w-3" /> {tip.readTime}
        </span>
      </div>
      <h3 className="mt-3 font-display text-lg font-semibold leading-snug group-hover:text-primary">
        {tip.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tip.summary}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
        Read article <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}