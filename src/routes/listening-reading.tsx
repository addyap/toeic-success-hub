import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Headphones, BookOpen, Clock, ListChecks, RotateCcw, Trophy } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PracticeQuestion, type PracticeQuestionData } from "@/components/PracticeQuestion";
import { absoluteUrl } from "@/lib/site";
import { cn, shuffle } from "@/lib/utils";
import { listeningReadingQuestions, questionsByPart } from "@/data/listeningReadingQuestions";

const OPTION_LABELS = ["A", "B", "C", "D"];

/** Returns a copy of `data` with its options shuffled into a new random order
 *  and relabeled A/B/C/D to match, so the correct answer isn't always in the
 *  same position as authored in the source data. */
function shuffleQuestionOptions(data: PracticeQuestionData): PracticeQuestionData {
  const shuffled = shuffle(data.options);
  const correctIndex = shuffled.findIndex((opt) => opt.label === data.correct);
  const options = shuffled.map((opt, i) => ({ ...opt, label: OPTION_LABELS[i] }));
  return { ...data, options, correct: OPTION_LABELS[correctIndex] };
}

export const Route = createFileRoute("/listening-reading")({
  head: () => ({
    meta: [
      { title: "Listening & Reading | ToeicPath - Official TOEIC Prep Guide" },
      {
        name: "description",
        content:
          "Practice all 7 TOEIC Listening & Reading parts with realistic questions and instant, detailed explanations for every answer.",
      },
      {
        property: "og:title",
        content: "Listening & Reading | ToeicPath - Official TOEIC Prep Guide",
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
  const [selectedPart, setSelectedPart] = useState<number | "all">("all");
  const activePart =
    selectedPart === "all" ? null : questionsByPart.find((p) => p.part === selectedPart);
  const activeQuestions = activePart ? activePart.questions : listeningReadingQuestions;
  const storageKey =
    selectedPart === "all"
      ? "toeicpath:lr-practice:best"
      : `toeicpath:lr-practice:best:part${selectedPart}`;

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
            <PartCard key={p.n} {...p} />
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
              <PartCard key={p.n} {...p} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto w-full max-w-3xl px-5 py-14">
          <PartFilter selectedPart={selectedPart} onSelect={setSelectedPart} />
          <PracticeSession key={storageKey} questions={activeQuestions} storageKey={storageKey} />
        </div>
      </section>
    </SiteLayout>
  );
}

function PartFilter({
  selectedPart,
  onSelect,
}: {
  selectedPart: number | "all";
  onSelect: (part: number | "all") => void;
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
      {questionsByPart.map((p) => (
        <button
          key={p.part}
          type="button"
          onClick={() => onSelect(p.part)}
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-medium transition",
            selectedPart === p.part
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card text-foreground hover:bg-muted",
          )}
        >
          Part {p.part}
        </button>
      ))}
    </div>
  );
}

function PracticeSession({
  questions,
  storageKey,
}: {
  questions: PracticeQuestionData[];
  storageKey: string;
}) {
  const [answers, setAnswers] = useState<(string | null)[]>(() => questions.map(() => null));
  const [resetKey, setResetKey] = useState(0);
  // SSR renders `questions` as-authored so client hydration matches the server
  // markup, then this fires client-side before paint to randomize each
  // question's option order — avoids both a hydration mismatch and a visible
  // flash of the unshuffled order.
  const [displayQuestions, setDisplayQuestions] = useState<PracticeQuestionData[]>(questions);
  useLayoutEffect(() => {
    setDisplayQuestions(questions.map(shuffleQuestionOptions));
  }, [questions]);
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
    setDisplayQuestions(questions.map(shuffleQuestionOptions));
    setResetKey((k) => k + 1);
    setJustImprovedBest(false);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: window.scrollY, behavior: "auto" });
    }
  };

  return (
    <div>
      <h2 className="font-display text-3xl font-semibold sm:text-4xl">Practice area</h2>
      <p className="mt-2 text-muted-foreground">
        Lock in an answer to each question to build your {questions.length}-question score. Your
        best score is saved on this device.
      </p>

      <div className="sticky top-[5.5rem] z-10 mt-6 rounded-2xl border border-border bg-card/95 p-4 shadow-soft backdrop-blur">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">
              Your session
            </div>
            <div className="mt-0.5 font-display text-2xl font-semibold">
              {score} <span className="text-muted-foreground">/ {total} correct</span>
            </div>
            <div className="text-xs text-muted-foreground">
              Answered {answeredCount} of {total}
              {best !== null && (
                <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 font-semibold text-primary">
                  <Trophy className="h-3 w-3" /> Best {best}/{total}
                </span>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary/60 hover:text-primary"
          >
            <RotateCcw className="h-4 w-4" /> Reset
          </button>
        </div>
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <div className="mt-6 space-y-5">
        {displayQuestions.map((q, i) => (
          <PracticeQuestion
            key={i}
            data={q}
            index={i}
            picked={answers[i]}
            resetKey={resetKey}
            onAnswer={(label) => handleAnswer(i, label)}
          />
        ))}
      </div>

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
}: {
  n: number;
  name: string;
  count: string;
  what: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
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
    </div>
  );
}
