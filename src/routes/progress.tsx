import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Flame, Trophy, TrendingUp, TrendingDown, Minus, Brain, ListChecks } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { absoluteUrl } from "@/lib/site";
import { getHistory, getStreak, type ProgressEntry, type StreakState } from "@/lib/progress";
import { countWeakTerms } from "@/lib/vocabStats";

export const Route = createFileRoute("/progress")({
  head: () => ({
    meta: [
      { title: "My Progress | ToeicPath - Official TOEIC Prep Guide" },
      {
        name: "description",
        content:
          "Track your TOEIC practice streak and accuracy trends across all 7 Listening & Reading parts.",
      },
      { property: "og:title", content: "My Progress | ToeicPath - Official TOEIC Prep Guide" },
      {
        property: "og:description",
        content:
          "Track your TOEIC practice streak and accuracy trends across all 7 Listening & Reading parts.",
      },
      { property: "og:url", content: absoluteUrl("/progress") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/progress") }],
  }),
  component: Page,
});

const PART_LABELS: Record<number, string> = {
  1: "Part 1 · Photographs",
  2: "Part 2 · Question–Response",
  3: "Part 3 · Conversations",
  4: "Part 4 · Short Talks",
  5: "Part 5 · Incomplete Sentences",
  6: "Part 6 · Text Completion",
  7: "Part 7 · Reading Comprehension",
};
const PART_NUMBERS = [1, 2, 3, 4, 5, 6, 7] as const;
const SPARKLINE_POINTS = 10;

function Page() {
  const [history, setHistory] = useState<ProgressEntry[] | null>(null);
  const [streak, setStreak] = useState<StreakState | null>(null);
  const [weakTerms, setWeakTerms] = useState<number | null>(null);

  useEffect(() => {
    setHistory(getHistory());
    setStreak(getStreak());
    setWeakTerms(countWeakTerms());
  }, []);

  const loaded = history !== null && streak !== null && weakTerms !== null;
  // A mock test writes 8 entries (7 per-part breakdowns + 1 "all" aggregate)
  // for what is really one completed session — only count the aggregate
  // entry here so sessions/questions totals aren't inflated 2x. The per-part
  // breakdown rows are still used as-is by PartRow below, since that's
  // exactly the granular data they're for.
  const primaryEntries = history?.filter((e) => e.source === "practice" || e.scope === "all") ?? [];
  const totalSessions = primaryEntries.length;
  const totalQuestions = primaryEntries.reduce((sum, e) => sum + e.total, 0);
  const overallEntries = primaryEntries.filter((e) => e.scope === "all");

  return (
    <SiteLayout>
      <section className="bg-gradient-soft">
        <div className="mx-auto w-full max-w-4xl px-5 py-12 md:py-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <ListChecks className="h-3.5 w-3.5" /> My Progress
          </span>
          <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            See where you're improving.
          </h1>
          <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            Your practice streak and accuracy trends, tracked on this device across every session.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-5 py-12">
        {!loaded ? (
          <ProgressSkeleton />
        ) : totalSessions === 0 ? (
          <div className="rounded-2xl border border-border bg-card p-8 text-center text-muted-foreground">
            No practice sessions recorded yet — complete a practice session, a vocab quiz question,
            or a mock test to start building your history.
          </div>
        ) : (
          <>
            <div className="grid gap-4 sm:grid-cols-3">
              <StatCard
                icon={<Flame className="h-4 w-4" />}
                label="Current streak"
                value={`${streak.current} day${streak.current === 1 ? "" : "s"}`}
                sub={`Best: ${streak.longest} day${streak.longest === 1 ? "" : "s"}`}
              />
              <StatCard
                icon={<Trophy className="h-4 w-4" />}
                label="Sessions completed"
                value={String(totalSessions)}
                sub={`${totalQuestions} questions answered`}
              />
              <StatCard
                icon={<Brain className="h-4 w-4" />}
                label="Vocab terms to review"
                value={String(weakTerms)}
                sub="Recently missed terms"
              />
            </div>

            {overallEntries.length > 0 && (
              <div className="mt-6 rounded-2xl border border-border bg-card p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Overall accuracy
                    </div>
                    <div className="mt-1 font-display text-2xl font-semibold">
                      {accuracyLabel(overallEntries)}
                    </div>
                  </div>
                  <Sparkline values={recentAccuracies(overallEntries)} />
                </div>
              </div>
            )}

            <h2 className="mt-10 font-display text-2xl font-semibold">Accuracy by part</h2>
            <div className="mt-4 space-y-3">
              {PART_NUMBERS.map((part) => {
                const entries = (history ?? []).filter((e) => e.scope === part);
                return <PartRow key={part} label={PART_LABELS[part]} entries={entries} />;
              })}
            </div>
          </>
        )}
      </section>
    </SiteLayout>
  );
}

function ProgressSkeleton() {
  return (
    <div aria-hidden="true" aria-busy="true">
      <div className="grid gap-4 sm:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-24 animate-pulse rounded-2xl bg-muted" />
        ))}
      </div>
      <div className="mt-6 h-20 animate-pulse rounded-2xl bg-muted" />
      <div className="mt-10 space-y-3">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-16 animate-pulse rounded-2xl bg-muted" />
        ))}
      </div>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
        {icon} {label}
      </div>
      <div className="mt-1 font-display text-2xl font-semibold">{value}</div>
      <div className="text-xs text-muted-foreground">{sub}</div>
    </div>
  );
}

function accuracyLabel(entries: ProgressEntry[]): string {
  const correct = entries.reduce((s, e) => s + e.correct, 0);
  const total = entries.reduce((s, e) => s + e.total, 0);
  return `${Math.round((correct / total) * 100)}%`;
}

function recentAccuracies(entries: ProgressEntry[]): number[] {
  return entries.slice(-SPARKLINE_POINTS).map((e) => Math.round((e.correct / e.total) * 100));
}

function PartRow({ label, entries }: { label: string; entries: ProgressEntry[] }) {
  if (entries.length === 0) {
    return (
      <div className="flex items-center justify-between gap-4 rounded-2xl border border-dashed border-border bg-card/50 p-4 text-sm text-muted-foreground">
        <span>{label}</span>
        <span>Not practiced yet</span>
      </div>
    );
  }

  const sorted = [...entries].sort((a, b) => a.completedAt - b.completedAt);
  const latest = sorted[sorted.length - 1];
  const latestPct = Math.round((latest.correct / latest.total) * 100);
  const prior = sorted.slice(0, -1);
  const priorPct =
    prior.length > 0
      ? Math.round(
          (prior.reduce((s, e) => s + e.correct, 0) / prior.reduce((s, e) => s + e.total, 0)) * 100,
        )
      : null;
  const delta = priorPct === null ? 0 : latestPct - priorPct;

  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-4">
      <div className="min-w-0">
        <div className="truncate text-sm font-semibold text-foreground">{label}</div>
        <div className="text-xs text-muted-foreground">
          {entries.length} session{entries.length === 1 ? "" : "s"} · {accuracyLabel(entries)}{" "}
          all-time
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-3">
        <Sparkline values={recentAccuracies(entries)} />
        <div className="flex items-center gap-1 text-sm font-semibold tabular-nums">
          {latestPct}%{delta > 0 && <TrendingUp className="h-4 w-4 text-success" />}
          {delta < 0 && <TrendingDown className="h-4 w-4 text-destructive" />}
          {delta === 0 && <Minus className="h-4 w-4 text-muted-foreground" />}
        </div>
      </div>
    </div>
  );
}

function Sparkline({ values }: { values: number[] }) {
  if (values.length < 2) {
    return <div className="h-7 w-24 shrink-0" aria-hidden="true" />;
  }
  const w = 100;
  const h = 28;
  const pad = 3;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const points = values
    .map((v, i) => {
      const x = pad + (i / (values.length - 1)) * (w - pad * 2);
      const y = h - pad - ((v - min) / range) * (h - pad * 2);
      return `${x},${y}`;
    })
    .join(" ");
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="h-7 w-24 shrink-0 text-primary"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <polyline
        points={points}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
