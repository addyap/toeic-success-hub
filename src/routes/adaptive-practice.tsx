import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Clock,
  Headphones,
  BookOpen,
  RotateCcw,
  AlertTriangle,
  Layers,
  Sparkles,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import {
  PracticeQuestion,
  PracticeQuestionGroup,
  type PracticeQuestionData,
} from "@/components/PracticeQuestion";
import { absoluteUrl } from "@/lib/site";
import { cn } from "@/lib/utils";
import { groupQuestions } from "@/lib/quiz";
import {
  buildAdaptiveSection,
  SECTION_MS,
  SECTION_PARTS,
  UNIT1_COUNT,
  UNIT2_COUNT,
  tierForScore,
  TIER_COPY,
  type Section,
  type Tier,
} from "@/lib/adaptive";
import type { QuestionPart } from "@/data/listeningReadingQuestions";

export const Route = createFileRoute("/adaptive-practice")({
  head: () => ({
    meta: [
      { title: "Adaptive Practice | ToeicPath - Official TOEIC Prep Guide" },
      {
        name: "description",
        content:
          "Practise the TOEIC 4-Skills Multistage Adaptive format: a 45-question Listening or Reading section in two units, where your Unit 1 score sets Unit 2's difficulty, against the real 25- and 37-minute clocks.",
      },
      { property: "og:title", content: "Adaptive Practice | ToeicPath" },
      {
        property: "og:description",
        content:
          "A format-accurate simulation of the TOEIC 4-Skills adaptive Listening and Reading sections — two units, real timing, difficulty that responds to your Unit 1 score.",
      },
      { property: "og:url", content: absoluteUrl("/adaptive-practice") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/adaptive-practice") }],
  }),
  component: Page,
});

const PAGE_SIZE = 15;
const SESSION_KEY = "toeicpath:adaptive:session";
const lastResultKey = (section: Section) => `toeicpath:adaptive:last:${section}`;

const PART_LABELS: Record<number, string> = {
  1: "Part 1 · Photographs",
  2: "Part 2 · Question–Response",
  3: "Part 3 · Conversations",
  4: "Part 4 · Short Talks",
  5: "Part 5 · Incomplete Sentences",
  6: "Part 6 · Text Completion",
  7: "Part 7 · Reading Comprehension",
};

const SECTION_META: Record<Section, { name: string; minutes: number; Icon: typeof Headphones }> = {
  listening: { name: "Listening", minutes: 25, Icon: Headphones },
  reading: { name: "Reading", minutes: 37, Icon: BookOpen },
};

interface AdaptiveSession {
  section: Section;
  phase: "unit1" | "unit2";
  unit1: PracticeQuestionData[];
  unit1Parts: number[];
  unit2Tiers: Record<Tier, PracticeQuestionData[]>;
  unit2Parts: Record<Tier, number[]>;
  unit1Answers: (string | null)[];
  unit2Answers: (string | null)[] | null;
  tier: Tier | null;
  deadline: number;
}

interface PartScore {
  part: number;
  label: string;
  correct: number;
  total: number;
}

interface AdaptiveResult {
  section: Section;
  completedAt: number;
  tier: Tier;
  unit1Correct: number;
  unit2Correct: number;
  totalCorrect: number;
  byPart: PartScore[];
}

function formatClock(ms: number): string {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function countCorrect(questions: PracticeQuestionData[], answers: (string | null)[]): number {
  let n = 0;
  for (let i = 0; i < questions.length; i++) {
    if (answers[i] && answers[i] === questions[i].correct) n++;
  }
  return n;
}

function loadSession(): AdaptiveSession | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as AdaptiveSession) : null;
  } catch {
    return null;
  }
}

function saveSession(session: AdaptiveSession | null) {
  try {
    if (session) localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    else localStorage.removeItem(SESSION_KEY);
  } catch {
    // localStorage unavailable — session just won't persist
  }
}

function loadLastResult(section: Section): AdaptiveResult | null {
  try {
    const raw = localStorage.getItem(lastResultKey(section));
    return raw ? (JSON.parse(raw) as AdaptiveResult) : null;
  } catch {
    return null;
  }
}

function Page() {
  const [bank, setBank] = useState<QuestionPart[] | null>(null);
  const [session, setSession] = useState<AdaptiveSession | null>(null);
  const [finished, setFinished] = useState<{
    session: AdaptiveSession;
    result: AdaptiveResult;
  } | null>(null);
  const [lastResults, setLastResults] = useState<Record<Section, AdaptiveResult | null>>({
    listening: null,
    reading: null,
  });
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    import("@/data/listeningReadingQuestions").then((mod) => {
      if (cancelled) return;
      setBank(mod.questionsByPart);
    });
    setSession(loadSession());
    setLastResults({ listening: loadLastResult("listening"), reading: loadLastResult("reading") });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const finish = (s: AdaptiveSession) => {
    const tier = s.tier ?? tierForScore(countCorrect(s.unit1, s.unit1Answers), s.unit1.length);
    const unit2 = s.unit2Tiers[tier];
    const unit2Parts = s.unit2Parts[tier];
    const unit2Answers = s.unit2Answers ?? unit2.map(() => null);
    const unit1Correct = countCorrect(s.unit1, s.unit1Answers);
    const unit2Correct = countCorrect(unit2, unit2Answers);

    const questions = [...s.unit1, ...unit2];
    const parts = [...s.unit1Parts, ...unit2Parts];
    const answers = [...s.unit1Answers, ...unit2Answers];
    const byPart: PartScore[] = SECTION_PARTS[s.section].map((part) => {
      let correct = 0;
      let total = 0;
      for (let i = 0; i < questions.length; i++) {
        if (parts[i] !== part) continue;
        total++;
        if (answers[i] && answers[i] === questions[i].correct) correct++;
      }
      return { part, label: PART_LABELS[part], correct, total };
    });

    const result: AdaptiveResult = {
      section: s.section,
      completedAt: Date.now(),
      tier,
      unit1Correct,
      unit2Correct,
      totalCorrect: unit1Correct + unit2Correct,
      byPart,
    };
    try {
      localStorage.setItem(lastResultKey(s.section), JSON.stringify(result));
    } catch {
      // localStorage unavailable — last-result summary just won't persist
    }
    setLastResults((prev) => ({ ...prev, [s.section]: result }));
    setFinished({ session: { ...s, unit2Answers, tier }, result });
    saveSession(null);
    setSession(null);
  };

  // Section clock — one deadline across both units. Auto-submits on expiry even
  // if the tab was backgrounded or the page reloaded.
  useEffect(() => {
    if (!session || now === null) return;
    if (now >= session.deadline) finish(session);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [now]);

  useEffect(() => {
    if (!session) return;
    const warn = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [session]);

  const start = (section: Section) => {
    if (!bank) return;
    const bp = buildAdaptiveSection(bank, section);
    const s: AdaptiveSession = {
      section,
      phase: "unit1",
      unit1: bp.unit1,
      unit1Parts: bp.unit1Parts,
      unit2Tiers: bp.unit2,
      unit2Parts: bp.unit2Parts,
      unit1Answers: bp.unit1.map(() => null),
      unit2Answers: null,
      tier: null,
      deadline: Date.now() + SECTION_MS[section],
    };
    setFinished(null);
    setSession(s);
    saveSession(s);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const submitUnit = () => {
    if (!session) return;
    if (session.phase === "unit1") {
      const tier = tierForScore(
        countCorrect(session.unit1, session.unit1Answers),
        session.unit1.length,
      );
      const next: AdaptiveSession = {
        ...session,
        phase: "unit2",
        tier,
        unit2Answers: session.unit2Tiers[tier].map(() => null),
      };
      setSession(next);
      saveSession(next);
      window.scrollTo({ top: 0, behavior: "auto" });
    } else {
      finish(session);
    }
  };

  const updateAnswer = (index: number, label: string) => {
    if (!session) return;
    if (session.phase === "unit1") {
      const arr = [...session.unit1Answers];
      arr[index] = label;
      const next = { ...session, unit1Answers: arr };
      setSession(next);
      saveSession(next);
    } else {
      const arr = [...(session.unit2Answers ?? [])];
      arr[index] = label;
      const next = { ...session, unit2Answers: arr };
      setSession(next);
      saveSession(next);
    }
  };

  return (
    <SiteLayout>
      <section className="bg-gradient-soft">
        <div className="mx-auto w-full max-w-4xl px-5 py-12 md:py-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Layers className="h-3.5 w-3.5" /> Adaptive Practice
          </span>
          <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            The 4-Skills adaptive format, one section at a time.
          </h1>
          <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            45 questions in two units — a fixed Unit 1, then a Unit 2 whose difficulty responds to
            how you did — against the real 25-minute Listening and 37-minute Reading clocks.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-5 py-12">
        {!bank && !finished && (
          <div className="rounded-2xl border border-border bg-card p-8 text-center text-sm text-muted-foreground">
            Loading question bank…
          </div>
        )}

        {bank && !session && !finished && <IntroCard onStart={start} lastResults={lastResults} />}

        {session && now !== null && (
          <SessionView session={session} now={now} onAnswer={updateAnswer} onSubmit={submitUnit} />
        )}

        {finished && (
          <ResultsView
            session={finished.session}
            result={finished.result}
            onRestart={() => setFinished(null)}
          />
        )}
      </section>
    </SiteLayout>
  );
}

function IntroCard({
  onStart,
  lastResults,
}: {
  onStart: (section: Section) => void;
  lastResults: Record<Section, AdaptiveResult | null>;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3">
        <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
        <p className="text-sm text-foreground">
          <strong>How the adaptation works.</strong> Everyone gets the same Unit 1 (25 questions).
          Your score on it then places Unit 2 (20 questions) at a more approachable, mixed, or more
          challenging level. This mirrors the real test's two-unit structure; ETS chooses items by a
          proprietary difficulty model, so this is a faithful simulation of the format rather than a
          copy of its engine.
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {(["listening", "reading"] as Section[]).map((section) => {
          const meta = SECTION_META[section];
          const last = lastResults[section];
          return (
            <div key={section} className="flex flex-col rounded-xl border border-border p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                <meta.Icon className="h-4 w-4" /> {meta.name}
              </div>
              <div className="mt-1 font-display text-2xl font-semibold">45 questions</div>
              <div className="text-sm text-muted-foreground">
                {meta.minutes}-minute timer · Unit 1 (25) → Unit 2 (20)
              </div>
              {last && (
                <div className="mt-3 text-xs text-muted-foreground">
                  Last attempt: <strong className="text-foreground">{last.totalCorrect}</strong>/45
                  ({TIER_COPY[last.tier].label} Unit 2)
                </div>
              )}
              <button
                type="button"
                onClick={() => onStart(section)}
                data-testid={`start-${section}`}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
              >
                Start {meta.name} section
              </button>
            </div>
          );
        })}
      </div>

      <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
        <li>• Questions are drawn at random from the full practice bank every time.</li>
        <li>• You answer Unit 1, then submit to unlock the adaptive Unit 2 — no going back.</li>
        <li>• Answers and explanations stay hidden until you finish the section.</li>
        <li>• The section auto-submits when its timer runs out, and progress survives a reload.</li>
      </ul>
    </div>
  );
}

function SessionView({
  session,
  now,
  onAnswer,
  onSubmit,
}: {
  session: AdaptiveSession;
  now: number;
  onAnswer: (index: number, label: string) => void;
  onSubmit: () => void;
}) {
  const meta = SECTION_META[session.section];
  const isUnit1 = session.phase === "unit1";
  const questions = isUnit1 ? session.unit1 : session.tier ? session.unit2Tiers[session.tier] : [];
  const answers = (isUnit1 ? session.unit1Answers : session.unit2Answers) ?? [];
  const remainingMs = session.deadline - now;
  const lowTime = remainingMs < 5 * 60 * 1000;
  const answeredCount = answers.filter((a) => a !== null).length;
  const [visibleCount, setVisibleCount] = useState(() => Math.min(PAGE_SIZE, questions.length));

  // Reset pagination when the unit changes.
  useEffect(() => {
    setVisibleCount(Math.min(PAGE_SIZE, questions.length));
  }, [session.phase, questions.length]);

  return (
    <div data-testid="adaptive-session" data-section={session.section} data-phase={session.phase}>
      {/* Slim single-row session bar, matching the Listening & Reading practice
          pill. The countdown stays prominent; the section + unit label collapses
          to just its icon on mobile (the unit is also stated by the submit
          button and the Unit 2 banner below). */}
      <div className="sticky top-[4rem] z-10 flex items-center gap-3 rounded-full border border-border bg-card/95 py-2 pl-4 pr-2 shadow-soft backdrop-blur">
        <div className="flex shrink-0 items-center gap-1.5 text-primary">
          <meta.Icon className="h-4 w-4" />
          <span className="hidden text-xs font-semibold uppercase tracking-wider sm:inline">
            {meta.name} · {isUnit1 ? "Unit 1" : "Unit 2"}
          </span>
          <span className="font-display text-lg font-semibold leading-none tabular-nums text-foreground">
            {answeredCount}
            <span className="text-muted-foreground">/{questions.length}</span>
          </span>
        </div>
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${questions.length ? (answeredCount / questions.length) * 100 : 0}%` }}
          />
        </div>
        <div
          className={cn(
            "flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 font-display text-lg font-semibold leading-none tabular-nums",
            lowTime
              ? "border-destructive/40 bg-destructive/10 text-destructive"
              : "border-border bg-muted text-foreground",
          )}
        >
          <Clock className="h-4 w-4" />
          {formatClock(remainingMs)}
        </div>
      </div>

      {!isUnit1 && session.tier && (
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-4">
          <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <p className="text-sm text-foreground">{TIER_COPY[session.tier].blurb}</p>
        </div>
      )}

      <div className="mt-6 space-y-5">
        {groupQuestions(questions)
          .filter((u) => u.start < visibleCount)
          .map((u) =>
            u.questions.length === 1 ? (
              <PracticeQuestion
                key={u.start}
                data={u.questions[0]}
                index={u.start}
                picked={answers[u.start]}
                revealed={false}
                onAnswer={(label) => onAnswer(u.start, label)}
              />
            ) : (
              <PracticeQuestionGroup
                key={u.start}
                questions={u.questions}
                startIndex={u.start}
                picked={u.questions.map((_, k) => answers[u.start + k])}
                revealed={false}
                onAnswer={(offset, label) => onAnswer(u.start + offset, label)}
              />
            ),
          )}
      </div>

      {visibleCount < questions.length && (
        <button
          type="button"
          onClick={() => setVisibleCount((c) => Math.min(c + PAGE_SIZE, questions.length))}
          className="mt-6 w-full rounded-2xl border border-dashed border-border bg-card px-5 py-4 text-sm font-semibold text-foreground transition hover:border-primary/60 hover:text-primary"
        >
          Load {Math.min(PAGE_SIZE, questions.length - visibleCount)} more questions ({visibleCount}
          /{questions.length} shown)
        </button>
      )}

      <div className="mt-8 rounded-2xl border border-border bg-card p-5">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <p className="text-sm text-muted-foreground">
            {isUnit1
              ? "Submitting scores Unit 1 and unlocks the adaptive Unit 2 — you won't be able to return to Unit 1."
              : "Submitting ends the section and shows your full results and answer review."}
          </p>
        </div>
        <button
          type="button"
          onClick={onSubmit}
          data-testid="submit-unit"
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90 sm:w-auto"
        >
          {isUnit1 ? "Submit Unit 1 & unlock Unit 2" : "Submit section & see results"}
        </button>
      </div>
    </div>
  );
}

function ResultsView({
  session,
  result,
  onRestart,
}: {
  session: AdaptiveSession;
  result: AdaptiveResult;
  onRestart: () => void;
}) {
  const meta = SECTION_META[result.section];
  const allQuestions = useMemo(() => {
    const unit2 = session.tier ? session.unit2Tiers[session.tier] : [];
    return [...session.unit1, ...unit2];
  }, [session]);
  const allAnswers = useMemo(
    () => [...session.unit1Answers, ...(session.unit2Answers ?? [])],
    [session],
  );
  const [reviewVisible, setReviewVisible] = useState(0);
  const pct = Math.round((result.totalCorrect / 45) * 100);

  return (
    <div>
      <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center sm:p-8">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
          <meta.Icon className="h-3.5 w-3.5" /> {meta.name} section complete
        </div>
        <div
          className="mt-2 font-display text-4xl font-semibold sm:text-5xl"
          data-testid="adaptive-total-score"
          data-correct={result.totalCorrect}
        >
          {result.totalCorrect}/45
        </div>
        <div className="mt-1 text-muted-foreground">{pct}% correct</div>
        <p className="mx-auto mt-3 max-w-md text-xs text-muted-foreground">
          Raw score. The official 4-Skills scaled score (5–495 per section) is set by ETS's equating
          table, so it doesn't map linearly to a raw count.
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="text-sm font-semibold text-primary">Unit 1</div>
          <div className="mt-1 text-2xl font-display font-semibold">{result.unit1Correct}/25</div>
          <div className="text-xs text-muted-foreground">The fixed opening unit</div>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="text-sm font-semibold text-primary">Unit 2</div>
          <div className="mt-1 text-2xl font-display font-semibold">{result.unit2Correct}/20</div>
          <div className="text-xs text-muted-foreground">
            {TIER_COPY[result.tier].label} — set by your Unit 1 score
          </div>
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border border-border">
        <table className="w-full text-sm">
          <tbody>
            {result.byPart.map((p) => (
              <tr
                key={p.part}
                className="border-b border-border last:border-0"
                data-testid="adaptive-part-row"
                data-part={p.part}
              >
                <td className="px-4 py-3 text-foreground">{p.label}</td>
                <td className="px-4 py-3 text-right font-semibold tabular-nums text-foreground">
                  {p.correct}/{p.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onRestart}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
        >
          <RotateCcw className="h-4 w-4" /> Practise another section
        </button>
        {reviewVisible === 0 && (
          <button
            type="button"
            onClick={() => setReviewVisible(PAGE_SIZE)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary/60 hover:text-primary"
          >
            Review all {allQuestions.length} answers
          </button>
        )}
      </div>

      {reviewVisible > 0 && (
        <div className="mt-8">
          <h2 className="font-display text-2xl font-semibold">Answer review</h2>
          <div className="mt-4 space-y-5">
            {groupQuestions(allQuestions)
              .filter((u) => u.start < reviewVisible)
              .map((u) =>
                u.questions.length === 1 ? (
                  <PracticeQuestion
                    key={u.start}
                    data={u.questions[0]}
                    index={u.start}
                    picked={allAnswers[u.start]}
                    revealed
                  />
                ) : (
                  <PracticeQuestionGroup
                    key={u.start}
                    questions={u.questions}
                    startIndex={u.start}
                    picked={u.questions.map((_, k) => allAnswers[u.start + k])}
                    revealed
                  />
                ),
              )}
          </div>
          {reviewVisible < allQuestions.length && (
            <button
              type="button"
              onClick={() => setReviewVisible((c) => Math.min(c + PAGE_SIZE, allQuestions.length))}
              className="mt-6 w-full rounded-2xl border border-dashed border-border bg-card px-5 py-4 text-sm font-semibold text-foreground transition hover:border-primary/60 hover:text-primary"
            >
              Load {Math.min(PAGE_SIZE, allQuestions.length - reviewVisible)} more ({reviewVisible}/
              {allQuestions.length} shown)
            </button>
          )}
        </div>
      )}
    </div>
  );
}
