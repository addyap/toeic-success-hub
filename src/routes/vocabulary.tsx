import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Sparkles,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Check,
  X,
  BookOpen,
  Brain,
  Headphones,
  ArrowRight,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { cn, shuffle } from "@/lib/utils";
import { vocabulary, type VocabCategory, type VocabTerm } from "@/data/vocabulary";
import { recordVocabAnswer, weightedPickTerm } from "@/lib/vocabStats";
import { recordActivity } from "@/lib/progress";
import {
  vocabularyGlosses,
  GLOSS_LANGUAGES,
  RTL_LANGS,
  type GlossLang,
} from "@/data/vocabularyGlosses";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/vocabulary")({
  head: () => ({
    meta: [
      { title: "Business Lexicon | ToeicPath - Official TOEIC Prep Guide" },
      {
        name: "description",
        content: `Learn ${vocabulary.length} high-frequency TOEIC business vocabulary terms with flashcards and quizzes across management, travel, finance, technical, marketing & sales, and HR categories.`,
      },
      { property: "og:title", content: "Business Lexicon | ToeicPath - Official TOEIC Prep Guide" },
      {
        property: "og:description",
        content: `Learn ${vocabulary.length} high-frequency TOEIC business vocabulary terms with flashcards and quizzes across management, travel, finance, technical, marketing & sales, and HR categories.`,
      },
      { property: "og:url", content: absoluteUrl("/vocabulary") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/vocabulary") }],
  }),
  component: Page,
});

type Filter = "All" | VocabCategory;
type Mode = "flashcards" | "quiz";

const FILTERS: { id: Filter; emoji: string }[] = [
  { id: "All", emoji: "✨" },
  { id: "Management", emoji: "💼" },
  { id: "Travel", emoji: "✈️" },
  { id: "Finance", emoji: "💳" },
  { id: "Technical", emoji: "🛠️" },
  { id: "Marketing & Sales", emoji: "📈" },
  { id: "Human Resources", emoji: "🧑‍💼" },
];

const LS_FILTER = "toeicpath:vocab:filter";
const LS_SCORE = "toeicpath:vocab:score";
const LS_GLOSS = "toeicpath:vocab:gloss-lang";

function Page() {
  const [filter, setFilter] = useState<Filter>("All");
  const [mode, setMode] = useState<Mode>("flashcards");
  const [score, setScore] = useState<{ correct: number; total: number }>({ correct: 0, total: 0 });
  const [glossLang, setGlossLang] = useState<GlossLang | null>(null);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const f = localStorage.getItem(LS_FILTER) as Filter | null;
      if (f && FILTERS.some((x) => x.id === f)) setFilter(f);
      const s = localStorage.getItem(LS_SCORE);
      if (s) {
        const parsed = JSON.parse(s);
        if (typeof parsed?.correct === "number" && typeof parsed?.total === "number")
          setScore(parsed);
      }
      const g = localStorage.getItem(LS_GLOSS) as GlossLang | null;
      if (g && GLOSS_LANGUAGES.some((x) => x.id === g)) setGlossLang(g);
    } catch {
      // localStorage unavailable (private mode / disabled) — filter/score just won't persist
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated)
      try {
        localStorage.setItem(LS_FILTER, filter);
      } catch {
        // localStorage unavailable — filter just won't persist
      }
  }, [filter, hydrated]);

  useEffect(() => {
    if (hydrated)
      try {
        localStorage.setItem(LS_SCORE, JSON.stringify(score));
      } catch {
        // localStorage unavailable — score just won't persist
      }
  }, [score, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      if (glossLang) localStorage.setItem(LS_GLOSS, glossLang);
      else localStorage.removeItem(LS_GLOSS);
    } catch {
      // localStorage unavailable — gloss language just won't persist
    }
  }, [glossLang, hydrated]);

  const terms = useMemo(
    () => (filter === "All" ? vocabulary : vocabulary.filter((t) => t.category === filter)),
    [filter],
  );

  return (
    <SiteLayout>
      <section className="bg-gradient-soft">
        <div className="mx-auto w-full max-w-6xl px-5 py-12 md:py-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Business Lexicon
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            High-frequency TOEIC vocabulary, built for business.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            {vocabulary.length} curated terms across {FILTERS.length - 1} categories. Study with
            flashcards, then test recall with a quick quiz. Your category and score are saved on
            this device.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("vocab-practice")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
            >
              Start practising <ArrowRight className="h-4 w-4" />
            </button>
            <span className="text-sm text-muted-foreground">Jump to the flashcards and quiz.</span>
          </div>
        </div>
      </section>

      <section id="vocab-practice" className="mx-auto w-full max-w-3xl scroll-mt-20 px-5 py-10">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition",
                f.id === filter
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground hover:bg-muted",
              )}
            >
              <span className="mr-1">{f.emoji}</span> {f.id}
            </button>
          ))}
        </div>

        {/* Mode toggle */}
        <div className="mt-6 inline-flex rounded-full border border-border bg-card p-1">
          <button
            onClick={() => setMode("flashcards")}
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition",
              mode === "flashcards"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            <BookOpen className="h-4 w-4" /> Flashcards
          </button>
          <button
            onClick={() => setMode("quiz")}
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition",
              mode === "quiz"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            <Brain className="h-4 w-4" /> Quiz
          </button>
        </div>

        {mode === "flashcards" && (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Gloss:
            </span>
            <button
              onClick={() => setGlossLang(null)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-medium transition",
                glossLang === null
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground hover:bg-muted",
              )}
            >
              None
            </button>
            {GLOSS_LANGUAGES.map((l) => (
              <button
                key={l.id}
                onClick={() => setGlossLang(l.id)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs font-medium transition",
                  glossLang === l.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:bg-muted",
                )}
              >
                {l.nativeLabel}
              </button>
            ))}
          </div>
        )}

        <div className="mt-8">
          {mode === "flashcards" ? (
            <Flashcards terms={terms} glossLang={glossLang} key={`fc-${filter}`} />
          ) : (
            <Quiz
              terms={terms}
              pool={vocabulary}
              score={score}
              setScore={setScore}
              storageKey={`toeicpath:vocab:quiz:${filter}`}
              key={`qz-${filter}`}
            />
          )}
        </div>

        <aside className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">
            Put it to work
          </div>
          <h2 className="mt-1 font-display text-xl font-semibold sm:text-2xl">
            These terms show up most in Part 5 and Part 7.
          </h2>
          <p className="mt-1 text-sm text-muted-foreground sm:text-base">
            Part 5 tests whether you can pick the right word for a business context, and Part 7's
            emails, memos and notices reuse this exact vocabulary. Practice both directly.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/listening-reading"
              search={{ part: 5 }}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-95"
            >
              <Headphones className="h-4 w-4" /> Try Part 5 practice{" "}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/study-tips"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
            >
              <Sparkles className="h-4 w-4" /> Read study tips
            </Link>
          </div>
        </aside>
      </section>
    </SiteLayout>
  );
}

function Flashcards({ terms, glossLang }: { terms: VocabTerm[]; glossLang: GlossLang | null }) {
  const [order, setOrder] = useState<number[]>(() => terms.map((_, i) => i));
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setOrder(terms.map((_, i) => i));
    setIdx(0);
    setFlipped(false);
  }, [terms]);

  if (terms.length === 0) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center text-muted-foreground">
        No terms in this category yet.
      </div>
    );
  }

  const card = terms[order[idx] ?? 0];
  const gloss = glossLang ? vocabularyGlosses[card.term]?.[glossLang] : undefined;
  const glossDir = glossLang && RTL_LANGS.has(glossLang) ? "rtl" : "ltr";

  const next = () => {
    setFlipped(false);
    setIdx((i) => (i + 1) % order.length);
  };
  const prev = () => {
    setFlipped(false);
    setIdx((i) => (i - 1 + order.length) % order.length);
  };
  const reshuffle = () => {
    setOrder(shuffle(terms.map((_, i) => i)));
    setIdx(0);
    setFlipped(false);
  };

  return (
    <div>
      <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Card {idx + 1} of {order.length}
      </div>
      <button
        onClick={() => setFlipped((f) => !f)}
        className="block w-full text-left"
        data-testid="flashcard"
        data-flipped={flipped}
        data-term={card.term}
      >
        <div className="relative min-h-[280px] overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-elegant transition hover:-translate-y-0.5 sm:min-h-[320px]">
          <div className="absolute right-5 top-5 text-xs font-semibold uppercase tracking-wider text-primary">
            {card.category}
          </div>
          {!flipped ? (
            <div className="flex h-full min-h-[220px] flex-col items-center justify-center text-center">
              <div className="text-xs uppercase tracking-wider text-primary">{card.pos}</div>
              <div className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
                {card.term}
              </div>
              {gloss && (
                <div
                  dir={glossDir}
                  data-testid="flashcard-gloss"
                  className="mt-2 text-lg text-muted-foreground"
                >
                  {gloss}
                </div>
              )}
              <div className="mt-6 text-xs text-muted-foreground">Tap to reveal meaning</div>
            </div>
          ) : (
            <div className="flex h-full min-h-[220px] flex-col justify-center">
              <div className="font-display text-2xl font-semibold sm:text-3xl">{card.term}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {card.pos}
                {gloss && (
                  <span dir={glossDir} data-testid="flashcard-gloss" className="text-foreground">
                    {" "}
                    · {gloss}
                  </span>
                )}
              </div>
              <p className="mt-3 text-base leading-relaxed text-foreground">{card.definition}</p>
              <p className="mt-4 rounded-xl bg-muted p-4 text-sm italic text-muted-foreground">
                "{card.example}"
              </p>
            </div>
          )}
        </div>
      </button>

      <div className="mt-5 flex items-center justify-between gap-3">
        <button
          onClick={prev}
          className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold hover:bg-muted"
        >
          <ChevronLeft className="h-4 w-4" /> Prev
        </button>
        <button
          onClick={reshuffle}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold hover:bg-muted"
        >
          <RefreshCw className="h-4 w-4" /> Shuffle
        </button>
        <button
          onClick={next}
          className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-95"
        >
          Next <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

interface QuizQuestion {
  answer: VocabTerm;
  options: VocabTerm[];
}

function buildQuestion(terms: VocabTerm[], pool: VocabTerm[]): QuizQuestion {
  // Recently-missed terms are weighted to come up more often (lightweight
  // spaced repetition), while every term keeps a nonzero chance of appearing.
  const answer = weightedPickTerm(terms, (t) => t.term);
  // Distractors prefer same category, fall back to full pool
  const sameCat = pool.filter((t) => t.term !== answer.term && t.category === answer.category);
  const others = pool.filter((t) => t.term !== answer.term);
  const distractorPool = sameCat.length >= 3 ? sameCat : others;
  const distractors = shuffle(distractorPool).slice(0, 3);
  const options = shuffle([answer, ...distractors]);
  return { answer, options };
}

/** The on-screen quiz question, stored by term string so it survives a reload
 *  — otherwise the current question (and any answer already picked) is lost and
 *  a fresh one is rolled. The cumulative score already persisted; this makes
 *  the question itself resumable too. Terms are re-resolved from the pool on
 *  load, so a stale save from before the vocabulary bank changed is discarded. */
interface SavedQuizQuestion {
  answerTerm: string;
  optionTerms: string[];
  picked: string | null;
}

function loadQuizQuestion(
  key: string,
  pool: VocabTerm[],
): { q: QuizQuestion; picked: string | null } | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const saved = JSON.parse(raw) as SavedQuizQuestion;
    const byTerm = new Map(pool.map((t) => [t.term, t]));
    const answer = byTerm.get(saved.answerTerm);
    const options = (saved.optionTerms ?? []).map((t) => byTerm.get(t));
    if (!answer || options.length === 0 || options.some((o) => !o)) return null;
    return { q: { answer, options: options as VocabTerm[] }, picked: saved.picked ?? null };
  } catch {
    return null;
  }
}

function saveQuizQuestion(key: string, q: QuizQuestion, picked: string | null) {
  try {
    const payload: SavedQuizQuestion = {
      answerTerm: q.answer.term,
      optionTerms: q.options.map((o) => o.term),
      picked,
    };
    localStorage.setItem(key, JSON.stringify(payload));
  } catch {
    // localStorage unavailable — the current question just won't survive a
    // reload, which is the pre-existing behaviour.
  }
}

function Quiz({
  terms,
  pool,
  score,
  setScore,
  storageKey,
}: {
  terms: VocabTerm[];
  pool: VocabTerm[];
  score: { correct: number; total: number };
  setScore: React.Dispatch<React.SetStateAction<{ correct: number; total: number }>>;
  storageKey: string;
}) {
  const [q, setQ] = useState<QuizQuestion | null>(null);
  const [picked, setPicked] = useState<string | null>(null);

  // Restore the in-progress question (and any answer already picked), or roll a
  // fresh one. Runs once per category — the component is remounted, via `key`,
  // when the filter changes, so `terms`/`storageKey` change together.
  const hydratedRef = useRef(false);
  useEffect(() => {
    if (terms.length < 1) {
      setQ(null);
      setPicked(null);
    } else {
      const saved = loadQuizQuestion(storageKey, pool);
      if (saved) {
        setQ(saved.q);
        setPicked(saved.picked);
      } else {
        setQ(buildQuestion(terms, pool));
        setPicked(null);
      }
    }
    hydratedRef.current = true;
  }, [terms, pool, storageKey]);

  // Persist the current question and picked answer as they change, so a reload
  // lands the learner back on the same question.
  useEffect(() => {
    if (!hydratedRef.current || !q) return;
    saveQuizQuestion(storageKey, q, picked);
  }, [q, picked, storageKey]);

  if (!q) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center text-muted-foreground">
        Not enough terms to quiz in this category.
      </div>
    );
  }

  const revealed = picked !== null;

  const choose = (term: string) => {
    if (revealed) return;
    const isCorrect = term === q.answer.term;
    setPicked(term);
    setScore((s) => ({
      correct: s.correct + (isCorrect ? 1 : 0),
      total: s.total + 1,
    }));
    recordVocabAnswer(q.answer.term, isCorrect);
    recordActivity();
  };

  const nextQuestion = () => {
    setPicked(null);
    setQ(buildQuestion(terms, pool));
  };

  const resetScore = () => setScore({ correct: 0, total: 0 });

  const pct = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;

  return (
    <div>
      <div
        className="mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground"
        data-testid="vocab-quiz-score"
        data-correct={score.correct}
        data-total={score.total}
      >
        <span>
          Score:{" "}
          <span className="text-foreground">
            {score.correct} / {score.total}
          </span>{" "}
          {score.total > 0 && <span className="text-primary">({pct}%)</span>}
        </span>
        <button onClick={resetScore} className="text-primary hover:underline">
          Reset
        </button>
      </div>

      <div className="rounded-2xl border border-border bg-card p-5 shadow-soft sm:p-6">
        <div className="text-xs font-semibold uppercase tracking-wider text-primary">
          {q.answer.category} · {q.answer.pos}
        </div>
        <p className="mt-2 text-base font-medium text-foreground sm:text-lg">
          Which term matches this definition?
        </p>
        <p className="mt-2 rounded-lg bg-muted px-4 py-3 text-sm leading-relaxed text-muted-foreground">
          {q.answer.definition}
        </p>

        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {q.options.map((opt) => {
            const isCorrect = opt.term === q.answer.term;
            const isPicked = picked === opt.term;
            return (
              <button
                key={opt.term}
                onClick={() => choose(opt.term)}
                aria-disabled={revealed}
                data-testid="vocab-quiz-option"
                data-term={opt.term}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition",
                  !revealed && "border-border hover:border-primary/60 hover:bg-muted",
                  revealed && "pointer-events-none",
                  revealed && isCorrect && "border-success/60 bg-success/10",
                  revealed && isPicked && !isCorrect && "border-destructive/60 bg-destructive/10",
                  revealed && !isPicked && !isCorrect && "opacity-60",
                )}
              >
                <span
                  className={cn(
                    "grid h-7 w-7 shrink-0 place-items-center rounded-full border text-xs font-bold",
                    !revealed && "border-border text-muted-foreground",
                    revealed && isCorrect && "border-success bg-success text-primary-foreground",
                    revealed &&
                      isPicked &&
                      !isCorrect &&
                      "border-destructive bg-destructive text-destructive-foreground",
                  )}
                >
                  {revealed && isCorrect ? (
                    <Check className="h-4 w-4" />
                  ) : revealed && isPicked ? (
                    <X className="h-4 w-4" />
                  ) : (
                    "•"
                  )}
                </span>
                <span className="font-medium">{opt.term}</span>
                {revealed && (isCorrect || isPicked) && (
                  <span className="sr-only">{isCorrect ? "Correct answer" : "Incorrect"}</span>
                )}
              </button>
            );
          })}
        </div>

        <div aria-live="polite" className="sr-only">
          {revealed &&
            (picked === q.answer.term
              ? "Correct!"
              : `Incorrect. The correct answer is ${q.answer.term}.`)}
        </div>

        {revealed && (
          <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">
              Example
            </div>
            <p className="mt-1 text-sm italic leading-relaxed text-foreground">
              "{q.answer.example}"
            </p>
            <button
              onClick={nextQuestion}
              className="mt-3 inline-flex items-center gap-1 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:opacity-95"
            >
              Next question <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
