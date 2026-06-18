import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, Headphones, MessageSquare, Target, Lightbulb } from "lucide-react";
import type { ReactNode } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { studyTips, type TipCategory, type StudyTip } from "@/data/studyTips";

const categoryIcon: Record<TipCategory, ReactNode> = {
  "Listening & Reading": <Headphones className="h-4 w-4" />,
  "Speaking & Writing": <MessageSquare className="h-4 w-4" />,
  Strategy: <Target className="h-4 w-4" />,
};

export const Route = createFileRoute("/study-tips/$slug")({
  loader: ({ params }): { tip: StudyTip } => {
    const tip = studyTips.find((t) => t.slug === params.slug);
    if (!tip) throw notFound();
    return { tip };
  },
  head: ({ loaderData }) => {
    const tip = loaderData?.tip;
    const title = tip
      ? `${tip.title} | ToeicPath - Official TOEIC Prep Guide`
      : "Study Tips | ToeicPath - Official TOEIC Prep Guide";
    const description = tip?.summary ??
      "Free TOEIC practice tests, business English vocabulary, and expert study strategies to boost your score.";
    const url = tip ? `/study-tips/${tip.slug}` : "/study-tips";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  notFoundComponent: NotFound,
  errorComponent: ({ error, reset }) => (
    <SiteLayout>
      <div className="mx-auto w-full max-w-3xl px-5 py-20 text-center">
        <h1 className="font-display text-3xl font-semibold">Something went wrong</h1>
        <p className="mt-2 text-muted-foreground">{error.message}</p>
        <button onClick={reset} className="mt-6 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
          Try again
        </button>
      </div>
    </SiteLayout>
  ),
  component: ArticlePage,
});

function ArticlePage() {
  const { tip } = Route.useLoaderData() as { tip: StudyTip };
  return (
    <SiteLayout>
      <article className="mx-auto w-full max-w-3xl px-5 py-12 md:py-16">
        <Link
          to="/study-tips"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> All study tips
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
            {categoryIcon[tip.category]} {tip.category}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground">
            <Clock className="h-3 w-3" /> {tip.readTime} read
          </span>
        </div>

        <h1 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
          {tip.title}
        </h1>
        <p className="mt-3 text-base text-muted-foreground sm:text-lg">{tip.summary}</p>

        <div className="mt-10 space-y-8">
          {tip.sections.map((section, i) => (
            <section key={i} className="rounded-2xl border border-border bg-card p-5 shadow-soft sm:p-6">
              <h2 className="font-display text-xl font-semibold sm:text-2xl">{section.heading}</h2>
              {section.body && (
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{section.body}</p>
              )}
              {section.points && (
                <ul className="mt-3 space-y-2">
                  {section.points.map((p, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-foreground sm:text-base">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <Link
            to="/study-tips"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> All study tips
          </Link>
        </div>
      </article>
    </SiteLayout>
  );
}

function NotFound() {
  return (
    <SiteLayout>
      <div className="mx-auto w-full max-w-3xl px-5 py-20 text-center">
        <Lightbulb className="mx-auto h-10 w-10 text-primary" />
        <h1 className="mt-4 font-display text-3xl font-semibold">Article not found</h1>
        <p className="mt-2 text-muted-foreground">That study tip doesn't exist — it may have been moved or renamed.</p>
        <Link
          to="/study-tips"
          className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to all study tips
        </Link>
      </div>
    </SiteLayout>
  );
}