import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Sparkles, RefreshCw, ChevronLeft, ChevronRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/vocabulary")({
  head: () => ({
    meta: [
      { title: "TOEIC Vocabulary Builder — Business English Flashcards | ToeicPath" },
      { name: "description", content: "Categorized TOEIC vocabulary flashcards covering office, finance, marketing, travel, and meetings — with example sentences." },
      { property: "og:title", content: "TOEIC Vocabulary Builder" },
      { property: "og:description", content: "Categorized business English flashcards with example sentences." },
    ],
  }),
  component: Page,
});

type Card = { word: string; pos: string; meaning: string; example: string };
type Deck = { id: string; name: string; emoji: string; cards: Card[] };

const decks: Deck[] = [
  {
    id: "office",
    name: "Office & Meetings",
    emoji: "💼",
    cards: [
      { word: "agenda", pos: "noun", meaning: "List of items to be discussed at a meeting.", example: "Please review the agenda before tomorrow's meeting." },
      { word: "deadline", pos: "noun", meaning: "The latest time by which something must be finished.", example: "The deadline for the report is Friday." },
      { word: "postpone", pos: "verb", meaning: "Move an event to a later time.", example: "We had to postpone the launch by a week." },
      { word: "minutes", pos: "noun", meaning: "Written record of what was said at a meeting.", example: "Could you send out the minutes by EOD?" },
      { word: "stakeholder", pos: "noun", meaning: "A person with an interest in a project or company.", example: "All stakeholders were invited to the review." },
    ],
  },
  {
    id: "finance",
    name: "Finance",
    emoji: "💳",
    cards: [
      { word: "invoice", pos: "noun", meaning: "A document requesting payment for goods or services.", example: "Please send the invoice to accounting." },
      { word: "budget", pos: "noun/verb", meaning: "Plan for how money will be spent.", example: "We need to stay within the marketing budget." },
      { word: "expense", pos: "noun", meaning: "Money spent on something for the business.", example: "Travel expenses must be reported monthly." },
      { word: "revenue", pos: "noun", meaning: "Income generated from business activities.", example: "Revenue grew 12% year over year." },
      { word: "reimburse", pos: "verb", meaning: "Pay back money that someone has spent.", example: "The company will reimburse you for the flight." },
    ],
  },
  {
    id: "marketing",
    name: "Marketing & Sales",
    emoji: "📣",
    cards: [
      { word: "campaign", pos: "noun", meaning: "Series of coordinated promotional activities.", example: "The summer campaign starts next week." },
      { word: "launch", pos: "verb/noun", meaning: "Introduce a product to the market.", example: "We will launch the new model in Q3." },
      { word: "demographic", pos: "noun", meaning: "A particular group of consumers.", example: "This product targets a younger demographic." },
      { word: "feedback", pos: "noun", meaning: "Comments about a product or service.", example: "Customer feedback has been very positive." },
    ],
  },
  {
    id: "travel",
    name: "Travel",
    emoji: "✈️",
    cards: [
      { word: "itinerary", pos: "noun", meaning: "Planned route or schedule of a journey.", example: "Your itinerary has been emailed to you." },
      { word: "reservation", pos: "noun", meaning: "Booking for a service or seat.", example: "I'd like to make a reservation for two." },
      { word: "boarding pass", pos: "noun", meaning: "Document allowing you to board a flight.", example: "Please have your boarding pass ready." },
      { word: "delay", pos: "noun/verb", meaning: "A period of time something is late.", example: "Our flight was delayed by 90 minutes." },
    ],
  },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function Page() {
  const [deckId, setDeckId] = useState(decks[0].id);
  const deck = decks.find((d) => d.id === deckId)!;
  const [order, setOrder] = useState<number[]>(() => deck.cards.map((_, i) => i));
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);

  function selectDeck(id: string) {
    const d = decks.find((x) => x.id === id)!;
    setDeckId(id);
    setOrder(d.cards.map((_, i) => i));
    setIdx(0);
    setFlipped(false);
  }

  const card = useMemo(() => deck.cards[order[idx]], [deck, order, idx]);

  function next() { setFlipped(false); setIdx((i) => (i + 1) % order.length); }
  function prev() { setFlipped(false); setIdx((i) => (i - 1 + order.length) % order.length); }
  function reshuffle() { setOrder(shuffle(deck.cards.map((_, i) => i))); setIdx(0); setFlipped(false); }

  return (
    <SiteLayout>
      <section className="bg-gradient-soft">
        <div className="mx-auto w-full max-w-6xl px-5 py-12 md:py-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Vocabulary Builder
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            High-frequency TOEIC words, ready to memorize.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Tap a card to flip it. Words are grouped by the business contexts most common in the test.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-5 py-12">
        <div className="flex flex-wrap gap-2">
          {decks.map((d) => (
            <button
              key={d.id}
              onClick={() => selectDeck(d.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition",
                d.id === deckId
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground hover:bg-muted",
              )}
            >
              <span className="mr-1">{d.emoji}</span> {d.name}
            </button>
          ))}
        </div>

        <div className="mt-8">
          <button
            onClick={() => setFlipped((f) => !f)}
            className="block w-full text-left"
            aria-label="Flip flashcard"
          >
            <div className="relative min-h-[280px] overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-elegant transition hover:-translate-y-0.5 sm:min-h-[320px]">
              <div className="absolute right-5 top-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {idx + 1} / {order.length}
              </div>
              {!flipped ? (
                <div className="flex h-full min-h-[220px] flex-col items-center justify-center text-center">
                  <div className="text-xs uppercase tracking-wider text-primary">{card.pos}</div>
                  <div className="mt-3 font-display text-4xl font-semibold sm:text-5xl">{card.word}</div>
                  <div className="mt-6 text-xs text-muted-foreground">Tap to reveal meaning</div>
                </div>
              ) : (
                <div className="flex h-full min-h-[220px] flex-col justify-center">
                  <div className="font-display text-2xl font-semibold sm:text-3xl">{card.word}</div>
                  <p className="mt-3 text-base leading-relaxed text-foreground">{card.meaning}</p>
                  <p className="mt-4 rounded-xl bg-muted p-4 text-sm italic text-muted-foreground">"{card.example}"</p>
                </div>
              )}
            </div>
          </button>

          <div className="mt-5 flex items-center justify-between gap-3">
            <button onClick={prev} className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold hover:bg-muted">
              <ChevronLeft className="h-4 w-4" /> Prev
            </button>
            <button onClick={reshuffle} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold hover:bg-muted">
              <RefreshCw className="h-4 w-4" /> Shuffle
            </button>
            <button onClick={next} className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-95">
              Next <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="font-display text-2xl font-semibold">All words in this deck</h2>
          <div className="mt-4 divide-y divide-border rounded-2xl border border-border bg-card">
            {deck.cards.map((c) => (
              <div key={c.word} className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 p-4 sm:grid-cols-[160px_minmax(0,1fr)]">
                <div>
                  <div className="font-semibold">{c.word}</div>
                  <div className="text-xs text-muted-foreground">{c.pos}</div>
                </div>
                <div className="min-w-0 text-sm text-muted-foreground">{c.meaning}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}