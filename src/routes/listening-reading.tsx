import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import {
  Headphones,
  BookOpen,
  Clock,
  ListChecks,
  RotateCcw,
  Trophy,
  ArrowRight,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import {
  PracticeQuestion,
  PracticeQuestionGroup,
  type PracticeQuestionData,
} from "@/components/PracticeQuestion";
import { absoluteUrl, pageTitle } from "@/lib/site";
import { cn, scrollIntoViewRespectingMotion } from "@/lib/utils";
import { applyOptionOrder, randomOptionOrder, groupQuestions } from "@/lib/quiz";
import { recordSession, recordActivity, type ProgressScope } from "@/lib/progress";
import { useSceneVisible } from "@/lib/sceneVisible";
import type { QuestionPart } from "@/data/listeningReadingQuestions";

// The question bank (500+ items, growing every content round) is loaded via
// a dynamic import instead of a static one so its ~170KB (gzipped) doesn't
// block this route's initial JS parse/execute — it's fetched as a separate
// chunk right after mount instead, while the page above the practice section
// (hero, format cards) renders and becomes interactive immediately.
const PART_NUMBERS = [1, 2, 3, 4, 5, 6, 7] as const;

/** A paused practice session, saved so a learner can leave a set part-way —
 *  switch Listening↔Reading, close the tab — and come back to exactly where
 *  they were. `answers` holds each question's picked label (or null); `orders`
 *  holds each question's shuffled option order (as authored labels) so the
 *  saved letters still line up with the same options on resume. Both are
 *  indexed by the flat question position, like the live session state. This
 *  mirrors the Writing trainer's draft persistence, which is the only other
 *  place a learner can resume an in-progress exercise. */
interface LrProgress {
  answers: (string | null)[];
  orders: string[][];
}

function loadProgress(key: string, expectedLength: number): LrProgress | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as LrProgress;
    // Guard against a stale save from before the bank grew/shrank: a
    // length mismatch means the indices no longer address the same questions,
    // so discard it and start fresh rather than restore a scrambled session.
    if (
      !parsed ||
      !Array.isArray(parsed.answers) ||
      !Array.isArray(parsed.orders) ||
      parsed.answers.length !== expectedLength ||
      parsed.orders.length !== expectedLength
    ) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function saveProgress(key: string, progress: LrProgress) {
  try {
    localStorage.setItem(key, JSON.stringify(progress));
  } catch {
    // localStorage unavailable (private mode / disabled) — progress just
    // won't survive a reload, which is the pre-existing behaviour.
  }
}

function clearProgress(key: string) {
  try {
    localStorage.removeItem(key);
  } catch {
    // localStorage unavailable — nothing to clear.
  }
}

/** Reads `?part=N` so a specific part's practice is shareable/bookmarkable
 *  and linkable from other pages (vocabulary, study tips, progress) — not
 *  just reachable by clicking a filter chip after landing on this page.
 *  `part` is optional (rather than always-present, defaulting to "all") so
 *  every existing `<Link to="/listening-reading">` elsewhere in the app
 *  keeps compiling without having to pass a `search` prop. */
function parsePartSearch(search: Record<string, unknown>): { part?: ProgressScope } {
  const n = Number(search.part);
  if ((PART_NUMBERS as readonly number[]).includes(n)) {
    return { part: n as ProgressScope };
  }
  return {};
}

export const Route = createFileRoute("/listening-reading")({
  validateSearch: parsePartSearch,
  head: () => ({
    meta: [
      { title: pageTitle("Listening & Reading") },
      {
        name: "description",
        content:
          "Practice all 7 TOEIC Listening & Reading parts with realistic questions and instant, detailed explanations for every answer.",
      },
      {
        property: "og:title",
        content: pageTitle("Listening & Reading"),
      },
      {
        property: "og:description",
        content:
          "Practice all 7 TOEIC Listening & Reading parts with realistic questions and instant, detailed explanations for every answer.",
      },
      { property: "og:url", content: absoluteUrl("/listening-reading") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/listening-reading") }],
  }),
  component: Page,
});

const listeningParts = [
  {
    n: 1,
    name: "Photographs",
    count: "6 questions",
    what: "Choose the statement that best describes a photo.",
  },
  {
    n: 2,
    name: "Question–Response",
    count: "25 questions",
    what: "Hear a question and pick the best of three spoken replies.",
  },
  {
    n: 3,
    name: "Conversations",
    count: "39 questions",
    what: "Listen to short dialogues, then answer 3 questions per conversation.",
  },
  {
    n: 4,
    name: "Short Talks",
    count: "30 questions",
    what: "Hear announcements, voicemails, or speeches and answer 3 questions each.",
  },
];

const readingParts = [
  {
    n: 5,
    name: "Incomplete Sentences",
    count: "30 questions",
    what: "Choose the word or phrase that best completes the sentence.",
  },
  {
    n: 6,
    name: "Text Completion",
    count: "16 questions",
    what: "Fill in blanks within short texts (emails, notices, articles).",
  },
  {
    n: 7,
    name: "Reading Comprehension",
    count: "54 questions",
    what: "Read single and multiple passages and answer detail / inference questions.",
  },
];

function Page() {
  const selectedPart = Route.useSearch().part ?? "all";
  const navigate = Route.useNavigate();
  const setSelectedPart = (part: ProgressScope) =>
    // resetScroll:false keeps the viewport where it is on a filter change — the
    // filter chips live inside the practice section, so a default scroll-to-top
    // would yank the user away from the questions they're filtering.
    navigate({
      search: { part: part === "all" ? undefined : part },
      replace: true,
      resetScroll: false,
    });
  const [bank, setBank] = useState<{
    all: PracticeQuestionData[];
    byPart: QuestionPart[];
  } | null>(null);

  useEffect(() => {
    let cancelled = false;
    import("@/data/listeningReadingQuestions").then((mod) => {
      if (cancelled) return;
      setBank({ all: mod.listeningReadingQuestions, byPart: mod.questionsByPart });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const activePart =
    selectedPart === "all" || !bank ? null : bank.byPart.find((p) => p.part === selectedPart);
  const activeQuestions = activePart ? activePart.questions : (bank?.all ?? null);
  const storageKey =
    selectedPart === "all"
      ? "toeicpath:lr-practice:best"
      : `toeicpath:lr-practice:best:part${selectedPart}`;
  const progressKey =
    selectedPart === "all"
      ? "toeicpath:lr-practice:progress"
      : `toeicpath:lr-practice:progress:part${selectedPart}`;

  const scrollToPractice = () => {
    scrollIntoViewRespectingMotion(document.getElementById("practice"));
  };
  // A part button changes the `?part=` search param, which triggers a router
  // navigation that resets scroll to the top. So we can't scroll in the click
  // handler — we flag the intent and scroll in an effect that runs after the
  // navigation (and its scroll reset) has committed.
  const pendingScrollRef = useRef(false);
  const practicePart = (n: number) => {
    if (n === selectedPart) {
      scrollToPractice();
      return;
    }
    setSelectedPart(n as ProgressScope);
    pendingScrollRef.current = true;
  };
  useEffect(() => {
    if (!pendingScrollRef.current) return;
    pendingScrollRef.current = false;
    const id = requestAnimationFrame(scrollToPractice);
    return () => cancelAnimationFrame(id);
  }, [selectedPart]);

  return (
    <SiteLayout>
      <section className="bg-gradient-soft">
        <div className="mx-auto w-full max-w-6xl px-5 py-12 md:py-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Headphones className="h-3.5 w-3.5" /> TOEIC Listening & Reading
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            The format, the timing, and how to practice it.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            The L&R test measures everyday business English comprehension through 200
            multiple-choice questions across seven parts. Scores range from 10 to 990.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <Stat icon={<Clock className="h-4 w-4" />} label="Listening" value="45 minutes" />
            <Stat icon={<Clock className="h-4 w-4" />} label="Reading" value="75 minutes" />
            <Stat icon={<ListChecks className="h-4 w-4" />} label="Total time" value="2h 0min" />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={scrollToPractice}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
            >
              Start practising <ArrowRight className="h-4 w-4" />
            </button>
            <span className="text-sm text-muted-foreground">
              Jump straight to the questions, or read the format below first.
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-14">
        <SectionHeader
          icon={<Headphones className="h-5 w-5" />}
          title="Listening section"
          subtitle="100 questions · 45 minutes"
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {listeningParts.map((p) => (
            <PartCard key={p.n} {...p} onPractice={practicePart} />
          ))}
        </div>

        <div className="mt-14">
          <SectionHeader
            icon={<BookOpen className="h-5 w-5" />}
            title="Reading section"
            subtitle="100 questions · 75 minutes"
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {readingParts.map((p) => (
              <PartCard key={p.n} {...p} onPractice={practicePart} />
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:flex-row sm:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">
              Ready for the real thing?
            </div>
            <p className="mt-1 text-sm text-muted-foreground sm:text-base">
              Take a full, timed 200-question mock test — real exam proportions and a complete score
              breakdown at the end.
            </p>
          </div>
          <Link
            to="/mock-test"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
          >
            Take the mock test
          </Link>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">
              Build the vocabulary these parts test
            </div>
            <p className="mt-1 text-sm text-muted-foreground sm:text-base">
              Part 5 and Part 7 lean heavily on business vocabulary — flashcards and quizzes across
              6 categories, or read the strategy write-ups for each part.
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <Link
              to="/vocabulary"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
            >
              Build vocabulary
            </Link>
            <Link
              to="/study-tips"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              Study tips
            </Link>
          </div>
        </div>
      </section>

      <section id="practice" className="scroll-mt-20 bg-secondary/40">
        <div className="mx-auto w-full max-w-3xl px-5 py-14">
          <PartFilter selectedPart={selectedPart} onSelect={setSelectedPart} />
          {activeQuestions ? (
            <PracticeSession
              key={storageKey}
              questions={activeQuestions}
              storageKey={storageKey}
              progressKey={progressKey}
              scope={selectedPart}
            />
          ) : (
            <PracticeSessionSkeleton />
          )}
        </div>
      </section>
    </SiteLayout>
  );
}

function PracticeSessionSkeleton() {
  return (
    <div aria-hidden="true" aria-busy="true">
      <div className="h-9 w-56 animate-pulse rounded-lg bg-muted" />
      <div className="mt-3 h-5 w-full max-w-md animate-pulse rounded bg-muted" />
      <div className="mt-6 h-24 animate-pulse rounded-2xl bg-muted" />
      <div className="mt-6 space-y-5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-40 animate-pulse rounded-2xl bg-muted" />
        ))}
      </div>
    </div>
  );
}

function PartFilter({
  selectedPart,
  onSelect,
}: {
  selectedPart: ProgressScope;
  onSelect: (part: ProgressScope) => void;
}) {
  return (
    <div className="mb-6 flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => onSelect("all")}
        className={cn(
          "rounded-full border px-4 py-2 text-sm font-medium transition",
          selectedPart === "all"
            ? "border-primary bg-primary text-primary-foreground"
            : "border-border bg-card text-foreground hover:bg-muted",
        )}
      >
        All parts
      </button>
      {PART_NUMBERS.map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => onSelect(p)}
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-medium transition",
            selectedPart === p
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card text-foreground hover:bg-muted",
          )}
        >
          Part {p}
        </button>
      ))}
    </div>
  );
}

/** Lets the learner add back Part 1's text "Scene" description, which the real
 *  test never shows — off by default (exam-realistic), on as a scaffold. The
 *  preference is global (persisted), so it also applies in the mock test and
 *  adaptive practice; this is just where it's surfaced. */
function SceneToggle() {
  const [visible, setVisible] = useSceneVisible();
  return (
    <div className="mt-4 flex items-start gap-3 rounded-xl border border-border bg-card p-3">
      <button
        type="button"
        role="switch"
        aria-checked={visible}
        aria-label="Show Part 1 scene descriptions"
        onClick={() => setVisible(!visible)}
        className={cn(
          "relative mt-0.5 h-5 w-9 shrink-0 rounded-full transition-colors",
          visible ? "bg-primary" : "bg-muted",
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all",
            visible ? "left-[1.125rem]" : "left-0.5",
          )}
        />
      </button>
      <div className="text-sm leading-relaxed">
        <div className="font-medium text-foreground">Show scene descriptions (Part 1)</div>
        <p className="text-muted-foreground">
          The real test shows only the photo. Turn this on to also read a written description of
          each Part 1 scene.
        </p>
      </div>
    </div>
  );
}

// Practice lists can run to several hundred questions (the "All parts" view
// currently spans 365). Mounting every PracticeQuestion card up front — each
// with its own hooks, audio element, and option-shuffle state — bloats the
// initial DOM and script cost, which hits mobile hardest. Render an initial
// batch and let the user pull in more, instead of paying that cost upfront.
const PAGE_SIZE = 15;

function PracticeSession({
  questions,
  storageKey,
  progressKey,
  scope,
}: {
  questions: PracticeQuestionData[];
  storageKey: string;
  progressKey: string;
  scope: ProgressScope;
}) {
  const [answers, setAnswers] = useState<(string | null)[]>(() => questions.map(() => null));
  const [resetKey, setResetKey] = useState(0);
  const [visibleCount, setVisibleCount] = useState(() => Math.min(PAGE_SIZE, questions.length));
  // `orders` is each question's option order, as authored labels. null means
  // "as authored" — the SSR state, so client hydration matches the server
  // markup. A layout effect then sets it (before paint) to either a fresh
  // random shuffle or the order saved from a paused session, avoiding both a
  // hydration mismatch and a visible flash of the unshuffled order.
  const [orders, setOrders] = useState<string[][] | null>(null);
  const displayQuestions = useMemo(
    () => (orders ? questions.map((q, i) => applyOptionOrder(q, orders[i])) : questions),
    [questions, orders],
  );
  // Guards the persist effect from firing on the initial render (before the
  // restore effect has run), which would clear a saved session with the
  // default empty state.
  const hydratedRef = useRef(false);

  // Restore a paused session, or shuffle fresh. Runs before paint, once per
  // question set (the component is remounted, via `key`, when the part
  // changes — so `questions`/`progressKey` change together on a remount).
  useLayoutEffect(() => {
    const saved = loadProgress(progressKey, questions.length);
    if (saved) {
      setOrders(saved.orders);
      setAnswers(saved.answers);
      // Reveal enough pages to bring the furthest already-answered question
      // back into view, so a resumed learner sees their progress instead of a
      // page-one reset with the later answers hidden.
      const lastAnswered = saved.answers.reduce((m, a, i) => (a !== null ? i : m), -1);
      if (lastAnswered >= 0) {
        setVisibleCount(
          Math.min(questions.length, Math.ceil((lastAnswered + 1) / PAGE_SIZE) * PAGE_SIZE),
        );
      }
    } else {
      setOrders(questions.map(randomOptionOrder));
    }
    hydratedRef.current = true;
  }, [questions, progressKey]);
  // Part 3/4 sets render as one card, so the list is walked in units rather
  // than per question. Indices still address the flat answers array.
  const units = useMemo(() => groupQuestions(displayQuestions), [displayQuestions]);
  const [best, setBest] = useState<number | null>(null);
  const [bestLoaded, setBestLoaded] = useState(false);
  const [justImprovedBest, setJustImprovedBest] = useState(false);
  const bestRef = useRef<number | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      const parsed = raw ? parseInt(raw, 10) : NaN;
      if (!Number.isNaN(parsed)) setBest(parsed);
    } catch {
      // localStorage unavailable (private mode / disabled) — best score just won't persist
    }
    setBestLoaded(true);
  }, [storageKey]);

  const score = useMemo(
    () => answers.reduce((acc, a, i) => acc + (a && a === displayQuestions[i].correct ? 1 : 0), 0),
    [answers, displayQuestions],
  );
  const answeredCount = answers.filter((a) => a !== null).length;
  const total = questions.length;
  const complete = answeredCount === total;
  const pct = (answeredCount / total) * 100;

  // Persist the session while it's genuinely in progress (something answered,
  // not yet finished). An untouched set isn't worth saving, and a completed one
  // is cleared — its best score is already recorded, and resuming a finished
  // set would just re-show the answered state instead of offering a fresh run.
  useEffect(() => {
    if (!hydratedRef.current || !orders) return;
    if (answeredCount > 0 && !complete) {
      saveProgress(progressKey, { answers, orders });
    } else {
      clearProgress(progressKey);
    }
  }, [answers, orders, answeredCount, complete, progressKey]);

  useEffect(() => {
    bestRef.current = best;
  }, [best]);

  // useLayoutEffect (not useEffect) so `best`/`justImprovedBest` are settled
  // before the browser paints — avoids a one-frame flash of stale/null values
  // in the completion message below.
  useLayoutEffect(() => {
    if (!bestLoaded || !complete) return;
    const prevBest = bestRef.current;
    const improved = prevBest === null || score > prevBest;
    setJustImprovedBest(improved);
    if (improved) {
      setBest(score);
      try {
        localStorage.setItem(storageKey, String(score));
      } catch {
        // localStorage unavailable (private mode / disabled) — best score just won't persist
      }
    }
  }, [complete, score, bestLoaded, storageKey]);

  // Fires once per completed session (re-fires only if `complete` toggles
  // false→true again, i.e. after a reset) — feeds the cross-page progress
  // history and daily streak, independent of whether this was a new best.
  useEffect(() => {
    if (!complete || total === 0) return;
    recordSession({ source: "practice", scope, correct: score, total });
    recordActivity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [complete]);

  const handleAnswer = (idx: number, label: string) => {
    setAnswers((prev) => {
      if (prev[idx] !== null) return prev;
      const next = [...prev];
      next[idx] = label;
      return next;
    });
  };

  const reset = () => {
    setAnswers(questions.map(() => null));
    setOrders(questions.map(randomOptionOrder));
    setResetKey((k) => k + 1);
    setJustImprovedBest(false);
    // The persist effect clears the saved session once answers go empty, but do
    // it eagerly too so a reset can't leave a stale save behind on any path.
    clearProgress(progressKey);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: window.scrollY, behavior: "auto" });
    }
  };

  return (
    <div>
      <h2 className="font-display text-3xl font-semibold sm:text-4xl">Practice area</h2>
      <p className="mt-2 text-muted-foreground">
        Lock in an answer to each question to build your {questions.length}-question score. Your
        best score — and where you leave off — is saved on this device, so you can pause and pick up
        right where you were.
      </p>

      {/* The Scene toggle only concerns Part 1 (photo) items, so surface it just
          when Part 1 is in the active set. */}
      {(scope === 1 || scope === "all") && <SceneToggle />}

      <div className="sticky top-[4rem] z-10 mt-6 flex items-center gap-3 rounded-full border border-border bg-card/95 py-2 pl-4 pr-2 shadow-soft backdrop-blur">
        <div className="flex shrink-0 items-baseline gap-1.5">
          <span className="hidden text-xs font-semibold uppercase tracking-wider text-primary sm:inline">
            Session
          </span>
          <span className="font-display text-lg font-semibold leading-none">
            {score}
            <span className="text-muted-foreground">/{total}</span>
          </span>
        </div>
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
        {best !== null && (
          <span className="hidden shrink-0 items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary sm:inline-flex">
            <Trophy className="h-3 w-3" /> Best {best}/{total}
          </span>
        )}
        <button
          type="button"
          onClick={reset}
          aria-label="Reset session"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-semibold text-foreground transition hover:border-primary/60 hover:text-primary"
        >
          <RotateCcw className="h-4 w-4" /> <span className="hidden sm:inline">Reset</span>
        </button>
      </div>

      <div className="mt-6 space-y-5">
        {units
          .filter((u) => u.start < visibleCount)
          .map((u) =>
            u.questions.length === 1 ? (
              <PracticeQuestion
                key={u.start}
                data={u.questions[0]}
                index={u.start}
                picked={answers[u.start]}
                resetKey={resetKey}
                partBadge
                onAnswer={(label) => handleAnswer(u.start, label)}
              />
            ) : (
              <PracticeQuestionGroup
                key={u.start}
                questions={u.questions}
                startIndex={u.start}
                picked={u.questions.map((_, k) => answers[u.start + k])}
                resetKey={resetKey}
                partBadge
                onAnswer={(offset, label) => handleAnswer(u.start + offset, label)}
              />
            ),
          )}
      </div>

      {visibleCount < total && (
        <button
          type="button"
          onClick={() => setVisibleCount((c) => Math.min(c + PAGE_SIZE, total))}
          className="mt-6 w-full rounded-2xl border border-dashed border-border bg-card px-5 py-4 text-sm font-semibold text-foreground transition hover:border-primary/60 hover:text-primary"
        >
          Load {Math.min(PAGE_SIZE, total - visibleCount)} more questions ({visibleCount}/{total}{" "}
          shown)
        </button>
      )}

      {complete && (
        <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/5 p-5 text-center">
          <div className="font-display text-xl font-semibold">
            Session complete — {score}/{total}
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            {justImprovedBest ? "New best score saved!" : `Best so far: ${best}/${total}.`}
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
          >
            <RotateCcw className="h-4 w-4" /> Try again
          </button>
        </div>
      )}
    </div>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
        {icon} {label}
      </div>
      <div className="mt-1 font-display text-2xl font-semibold">{value}</div>
    </div>
  );
}

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
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </span>
      <div>
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">{title}</h2>
        <div className="text-sm text-muted-foreground">{subtitle}</div>
      </div>
    </div>
  );
}

function PartCard({
  n,
  name,
  count,
  what,
  onPractice,
}: {
  n: number;
  name: string;
  count: string;
  what: string;
  onPractice: (n: number) => void;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-hero font-display text-base font-semibold text-primary-foreground">
          {n}
        </span>
        <div>
          <h3 className="font-semibold">
            Part {n}: {name}
          </h3>
          <div className="text-xs text-muted-foreground">{count}</div>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{what}</p>
      <button
        type="button"
        onClick={() => onPractice(n)}
        className="mt-4 inline-flex items-center gap-1.5 self-start rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/20"
      >
        Practice Part {n} <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
