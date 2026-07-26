import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Clock, Headphones, BookOpen, RotateCcw, AlertTriangle, Trophy } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import {
  PracticeQuestion,
  PracticeQuestionGroup,
  type PracticeQuestionData,
} from "@/components/PracticeQuestion";
import { absoluteUrl } from "@/lib/site";
import { cn, shuffle } from "@/lib/utils";
import { shuffleQuestionOptions, groupQuestions } from "@/lib/quiz";
import { recordSession, recordActivity, type ProgressScope } from "@/lib/progress";
import type { QuestionPart } from "@/data/listeningReadingQuestions";

export const Route = createFileRoute("/mock-test")({
  head: () => ({
    meta: [
      { title: "Full Mock Test | ToeicPath - Official TOEIC Prep Guide" },
      {
        name: "description",
        content:
          "Take a timed, 200-question TOEIC Listening & Reading mock test — real exam proportions, a 45-minute listening section and 75-minute reading section, and a full score breakdown at the end.",
      },
      {
        property: "og:title",
        content: "Full Mock Test | ToeicPath - Official TOEIC Prep Guide",
      },
      {
        property: "og:description",
        content:
          "Take a timed, 200-question TOEIC Listening & Reading mock test with a full score breakdown at the end.",
      },
      { property: "og:url", content: absoluteUrl("/mock-test") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/mock-test") }],
  }),
  component: Page,
});

// Real TOEIC L&R exam proportions (200 questions, 2 hours total).
const LISTENING_PARTS = [
  { part: 1, count: 6 },
  { part: 2, count: 25 },
  { part: 3, count: 39 },
  { part: 4, count: 30 },
];
const READING_PARTS = [
  { part: 5, count: 30 },
  { part: 6, count: 16 },
  { part: 7, count: 54 },
];
const LISTENING_MS = 45 * 60 * 1000;
const READING_MS = 75 * 60 * 1000;
const PAGE_SIZE = 15;
const SESSION_KEY = "toeicpath:mock-test:session";
const LAST_RESULT_KEY = "toeicpath:mock-test:last-result";

interface MockTestSession {
  phase: "listening" | "reading";
  listeningQuestions: PracticeQuestionData[];
  readingQuestions: PracticeQuestionData[];
  listeningAnswers: (string | null)[];
  readingAnswers: (string | null)[];
  listeningDeadline: number;
  readingDeadline: number | null;
}

interface PartScore {
  part: number;
  label: string;
  correct: number;
  total: number;
}

interface MockTestResult {
  completedAt: number;
  totalCorrect: number;
  totalQuestions: number;
  listeningCorrect: number;
  readingCorrect: number;
  byPart: PartScore[];
}

const PART_LABELS: Record<number, string> = {
  1: "Part 1 · Photographs",
  2: "Part 2 · Question–Response",
  3: "Part 3 · Conversations",
  4: "Part 4 · Short Talks",
  5: "Part 5 · Incomplete Sentences",
  6: "Part 6 · Text Completion",
  7: "Part 7 · Reading Comprehension",
};

function buildMockTest(byPart: QuestionPart[]) {
  // Sample whole units, never individual questions: a Part 3/4 set shares one
  // recording, so pulling question 2 without 1 and 3 would strand it. The exam
  // proportions divide evenly by three (39 = 13 sets, 30 = 10 sets), so a bank
  // of grouped questions fills each part exactly.
  const pick = (part: number, count: number) => {
    const pool = byPart.find((p) => p.part === part)?.questions ?? [];
    const picked: PracticeQuestionData[] = [];
    for (const unit of shuffle(groupQuestions(pool))) {
      if (picked.length === count) break;
      if (picked.length + unit.questions.length > count) continue;
      picked.push(...unit.questions);
    }
    return picked.map(shuffleQuestionOptions);
  };
  const listeningQuestions = LISTENING_PARTS.flatMap(({ part, count }) => pick(part, count));
  const readingQuestions = READING_PARTS.flatMap(({ part, count }) => pick(part, count));
  return { listeningQuestions, readingQuestions };
}

function loadSession(): MockTestSession | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as MockTestSession) : null;
  } catch {
    return null;
  }
}

function saveSession(session: MockTestSession | null) {
  try {
    if (session) localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    else localStorage.removeItem(SESSION_KEY);
  } catch {
    // localStorage unavailable (private mode / disabled) — session just won't persist
  }
}

function loadLastResult(): MockTestResult | null {
  try {
    const raw = localStorage.getItem(LAST_RESULT_KEY);
    return raw ? (JSON.parse(raw) as MockTestResult) : null;
  } catch {
    return null;
  }
}

function formatClock(ms: number): string {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function scoreSection(
  questions: PracticeQuestionData[],
  answers: (string | null)[],
  parts: { part: number; count: number }[],
): { correct: number; byPart: PartScore[] } {
  let offset = 0;
  const byPart: PartScore[] = [];
  let correct = 0;
  for (const { part, count } of parts) {
    let partCorrect = 0;
    for (let i = offset; i < offset + count && i < questions.length; i++) {
      if (answers[i] && answers[i] === questions[i].correct) {
        partCorrect++;
        correct++;
      }
    }
    byPart.push({ part, label: PART_LABELS[part], correct: partCorrect, total: count });
    offset += count;
  }
  return { correct, byPart };
}

function Page() {
  const [bank, setBank] = useState<QuestionPart[] | null>(null);
  const [session, setSession] = useState<MockTestSession | null>(null);
  const [finished, setFinished] = useState<{
    session: MockTestSession;
    result: MockTestResult;
  } | null>(null);
  const [lastResult, setLastResult] = useState<MockTestResult | null>(null);
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    import("@/data/listeningReadingQuestions").then((mod) => {
      if (cancelled) return;
      setBank(mod.questionsByPart);
    });
    setSession(loadSession());
    setLastResult(loadLastResult());
    return () => {
      cancelled = true;
    };
  }, []);

  // Ticking clock — also drives the auto-advance/auto-submit checks below.
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const finishTest = (s: MockTestSession) => {
    const listening = scoreSection(s.listeningQuestions, s.listeningAnswers, LISTENING_PARTS);
    const reading = scoreSection(s.readingQuestions, s.readingAnswers, READING_PARTS);
    const result: MockTestResult = {
      completedAt: Date.now(),
      totalCorrect: listening.correct + reading.correct,
      totalQuestions: s.listeningQuestions.length + s.readingQuestions.length,
      listeningCorrect: listening.correct,
      readingCorrect: reading.correct,
      byPart: [...listening.byPart, ...reading.byPart],
    };
    try {
      localStorage.setItem(LAST_RESULT_KEY, JSON.stringify(result));
    } catch {
      // localStorage unavailable — last-result summary just won't persist
    }
    for (const p of result.byPart) {
      recordSession({
        source: "mock-test",
        scope: p.part as ProgressScope,
        correct: p.correct,
        total: p.total,
      });
    }
    recordSession({
      source: "mock-test",
      scope: "all",
      correct: result.totalCorrect,
      total: result.totalQuestions,
    });
    recordActivity();
    setLastResult(result);
    setFinished({ session: s, result });
    saveSession(null);
    setSession(null);
  };

  // Auto-advance listening → reading, or reading → results, once a phase's
  // deadline passes — checked every tick so this fires even if the tab was
  // backgrounded or the page was reloaded mid-test.
  useEffect(() => {
    if (!session || now === null) return;
    if (session.phase === "listening" && now >= session.listeningDeadline) {
      const next: MockTestSession = {
        ...session,
        phase: "reading",
        readingDeadline: Date.now() + READING_MS,
      };
      setSession(next);
      saveSession(next);
    } else if (
      session.phase === "reading" &&
      session.readingDeadline !== null &&
      now >= session.readingDeadline
    ) {
      finishTest(session);
    }
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

  const startTest = () => {
    if (!bank) return;
    const { listeningQuestions, readingQuestions } = buildMockTest(bank);
    const s: MockTestSession = {
      phase: "listening",
      listeningQuestions,
      readingQuestions,
      listeningAnswers: listeningQuestions.map(() => null),
      readingAnswers: readingQuestions.map(() => null),
      listeningDeadline: Date.now() + LISTENING_MS,
      readingDeadline: null,
    };
    setFinished(null);
    setSession(s);
    saveSession(s);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const submitCurrentPhase = () => {
    if (!session) return;
    if (session.phase === "listening") {
      const next: MockTestSession = {
        ...session,
        phase: "reading",
        readingDeadline: Date.now() + READING_MS,
      };
      setSession(next);
      saveSession(next);
      window.scrollTo({ top: 0, behavior: "auto" });
    } else {
      finishTest(session);
    }
  };

  const updateAnswer = (
    which: "listeningAnswers" | "readingAnswers",
    index: number,
    label: string,
  ) => {
    if (!session) return;
    const arr = [...session[which]];
    arr[index] = label;
    const next = { ...session, [which]: arr };
    setSession(next);
    saveSession(next);
  };

  return (
    <SiteLayout>
      <section className="bg-gradient-soft">
        <div className="mx-auto w-full max-w-4xl px-5 py-12 md:py-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Clock className="h-3.5 w-3.5" /> Full Mock Test
          </span>
          <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            200 questions. Two hours. One real score.
          </h1>
          <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            A randomly assembled, full-length practice test in real TOEIC proportions — a 45-minute
            Listening section, then a 75-minute Reading section — with a complete breakdown when you
            finish.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-5 py-12">
        {!bank && !finished && (
          <div className="rounded-2xl border border-border bg-card p-8 text-center text-sm text-muted-foreground">
            Loading question bank…
          </div>
        )}

        {bank && !session && !finished && <IntroCard onStart={startTest} lastResult={lastResult} />}

        {session && now !== null && (
          <PhaseView
            session={session}
            now={now}
            onAnswer={updateAnswer}
            onSubmitPhase={submitCurrentPhase}
          />
        )}

        {finished && (
          <ResultsView
            session={finished.session}
            result={finished.result}
            onRetake={() => {
              setFinished(null);
            }}
          />
        )}
      </section>
    </SiteLayout>
  );
}

function IntroCard({
  onStart,
  lastResult,
}: {
  onStart: () => void;
  lastResult: MockTestResult | null;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      {lastResult && (
        <div className="mb-6 flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3">
          <Trophy className="h-5 w-5 shrink-0 text-primary" />
          <p className="text-sm text-foreground">
            Your last mock test: <strong>{lastResult.totalCorrect}</strong>/
            {lastResult.totalQuestions} correct (
            {Math.round((lastResult.totalCorrect / lastResult.totalQuestions) * 100)}%) on{" "}
            {new Date(lastResult.completedAt).toLocaleDateString()}.
          </p>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-border p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Headphones className="h-4 w-4" /> Listening
          </div>
          <div className="mt-1 text-2xl font-display font-semibold">100 questions</div>
          <div className="text-sm text-muted-foreground">45-minute timer</div>
        </div>
        <div className="rounded-xl border border-border p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-primary">
            <BookOpen className="h-4 w-4" /> Reading
          </div>
          <div className="mt-1 text-2xl font-display font-semibold">100 questions</div>
          <div className="text-sm text-muted-foreground">75-minute timer</div>
        </div>
      </div>

      <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
        <li>• Questions are drawn at random from the full practice bank every time.</li>
        <li>• Answers and explanations stay hidden until you finish — just like the real exam.</li>
        <li>• Once Reading starts, you can't go back to Listening.</li>
        <li>• Your progress is saved automatically if you accidentally close the tab.</li>
        <li>• Each section auto-submits when its timer runs out.</li>
      </ul>

      <button
        type="button"
        onClick={onStart}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-soft transition hover:opacity-90 sm:w-auto"
      >
        Start the mock test
      </button>
    </div>
  );
}

function PhaseView({
  session,
  now,
  onAnswer,
  onSubmitPhase,
}: {
  session: MockTestSession;
  now: number;
  onAnswer: (which: "listeningAnswers" | "readingAnswers", index: number, label: string) => void;
  onSubmitPhase: () => void;
}) {
  const isListening = session.phase === "listening";
  const questions = isListening ? session.listeningQuestions : session.readingQuestions;
  const answers = isListening ? session.listeningAnswers : session.readingAnswers;
  const which = isListening ? "listeningAnswers" : "readingAnswers";
  const deadline = isListening ? session.listeningDeadline : (session.readingDeadline ?? now);
  const remainingMs = deadline - now;
  const lowTime = remainingMs < 5 * 60 * 1000;
  const [visibleCount, setVisibleCount] = useState(() => Math.min(PAGE_SIZE, questions.length));
  const answeredCount = answers.filter((a) => a !== null).length;

  return (
    <div data-testid="mock-test-phase" data-phase={session.phase}>
      <div className="sticky top-[5.5rem] z-10 rounded-2xl border border-border bg-card/95 p-4 shadow-soft backdrop-blur">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
              {isListening ? (
                <Headphones className="h-3.5 w-3.5" />
              ) : (
                <BookOpen className="h-3.5 w-3.5" />
              )}
              {isListening ? "Listening section" : "Reading section"}
            </div>
            <div className="mt-0.5 text-sm text-muted-foreground">
              Answered {answeredCount} of {questions.length}
            </div>
          </div>
          <div
            className={cn(
              "flex items-center gap-2 rounded-full border px-4 py-2 font-display text-xl font-semibold tabular-nums",
              lowTime
                ? "border-destructive/40 bg-destructive/10 text-destructive"
                : "border-border bg-muted text-foreground",
            )}
          >
            <Clock className="h-4 w-4" />
            {formatClock(remainingMs)}
          </div>
        </div>
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${(answeredCount / questions.length) * 100}%` }}
          />
        </div>
      </div>

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
                onAnswer={(label) => onAnswer(which, u.start, label)}
              />
            ) : (
              <PracticeQuestionGroup
                key={u.start}
                questions={u.questions}
                startIndex={u.start}
                picked={u.questions.map((_, k) => answers[u.start + k])}
                revealed={false}
                onAnswer={(offset, label) => onAnswer(which, u.start + offset, label)}
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
            {isListening
              ? "Submitting moves you straight into the 75-minute Reading section — you won't be able to return to Listening afterward."
              : "Submitting ends the test and shows your full results and answer review."}
          </p>
        </div>
        <button
          type="button"
          onClick={onSubmitPhase}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90 sm:w-auto"
        >
          {isListening ? "Submit Listening & continue to Reading" : "Submit test & see results"}
        </button>
      </div>
    </div>
  );
}

function ResultsView({
  session,
  result,
  onRetake,
}: {
  session: MockTestSession;
  result: MockTestResult;
  onRetake: () => void;
}) {
  const [reviewVisible, setReviewVisible] = useState(0);
  const allQuestions = useMemo(
    () => [...session.listeningQuestions, ...session.readingQuestions],
    [session],
  );
  const allAnswers = useMemo(
    () => [...session.listeningAnswers, ...session.readingAnswers],
    [session],
  );
  const pct = Math.round((result.totalCorrect / result.totalQuestions) * 100);

  return (
    <div>
      <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center sm:p-8">
        <div className="text-xs font-semibold uppercase tracking-wider text-primary">
          Test complete
        </div>
        <div
          className="mt-2 font-display text-4xl font-semibold sm:text-5xl"
          data-testid="mock-test-total-score"
          data-correct={result.totalCorrect}
          data-total={result.totalQuestions}
        >
          {result.totalCorrect}/{result.totalQuestions}
        </div>
        <div className="mt-1 text-muted-foreground">{pct}% correct overall</div>
        <p className="mx-auto mt-3 max-w-md text-xs text-muted-foreground">
          This is your raw score. The official TOEIC scaled score (10–990) is set by ETS using a
          proprietary equating table, so it doesn't map linearly to a raw count.
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Headphones className="h-4 w-4" /> Listening
          </div>
          <div className="mt-1 text-2xl font-display font-semibold">
            {result.listeningCorrect}/100
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-primary">
            <BookOpen className="h-4 w-4" /> Reading
          </div>
          <div className="mt-1 text-2xl font-display font-semibold">
            {result.readingCorrect}/100
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
                data-testid="mock-test-part-row"
                data-part={p.part}
                data-correct={p.correct}
                data-total={p.total}
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
          onClick={onRetake}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
        >
          <RotateCcw className="h-4 w-4" /> Take another mock test
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
