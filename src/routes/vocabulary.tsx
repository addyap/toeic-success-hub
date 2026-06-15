import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Sparkles, RefreshCw, ChevronLeft, ChevronRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/vocabulary")({
  head: () => ({
    meta: [
      { title: "Vocabulary Builder | ToeicPath - Official TOEIC Prep Guide" },
      { name: "description", content: "Free TOEIC practice tests, business English vocabulary, and expert study strategies to boost your score." },
      { property: "og:title", content: "Vocabulary Builder | ToeicPath - Official TOEIC Prep Guide" },
      { property: "og:description", content: "Free TOEIC practice tests, business English vocabulary, and expert study strategies to boost your score." },
      { property: "og:url", content: "/vocabulary" },
    ],
    links: [{ rel: "canonical", href: "/vocabulary" }],
  }),
  component: Page,
});

type Card = { word: string; pos: string; meaning: string; example: string };
type Deck = { id: string; name: string; emoji: string; cards: Card[] };

const decks: Deck[] = [
  {
    id: "office",
    name: "Office & Management",
    emoji: "💼",
    cards: [
      { word: "agenda", pos: "noun", meaning: "A list of items to be discussed at a meeting.", example: "Please review the agenda before tomorrow's meeting." },
      { word: "appraisal", pos: "noun", meaning: "A formal evaluation of an employee's performance.", example: "Her annual appraisal is scheduled for next Monday." },
      { word: "briefing", pos: "noun", meaning: "A short meeting to give essential information.", example: "The morning briefing covered all key project updates." },
      { word: "delegate", pos: "verb", meaning: "To assign a task or responsibility to another person.", example: "Good managers delegate work to develop their team." },
      { word: "minutes", pos: "noun", meaning: "The written record of what was said at a meeting.", example: "Could you send out the minutes by end of day?" },
      { word: "quorum", pos: "noun", meaning: "The minimum number of members needed for a meeting to be valid.", example: "We can't vote on the proposal without a quorum present." },
      { word: "resignation", pos: "noun", meaning: "A formal statement that you are leaving a job.", example: "She submitted her resignation effective at the end of the month." },
      { word: "supervise", pos: "verb", meaning: "To watch over and direct the work of others.", example: "He supervises a team of twelve engineers." },
    ],
  },
  {
    id: "travel",
    name: "Travel & Entertainment",
    emoji: "✈️",
    cards: [
      { word: "itinerary", pos: "noun", meaning: "A planned route or schedule of a journey.", example: "Your itinerary has been emailed to you." },
      { word: "layover", pos: "noun", meaning: "A short stop between flights on a longer trip.", example: "We have a three-hour layover in Singapore." },
      { word: "concierge", pos: "noun", meaning: "A hotel employee who assists guests with services and information.", example: "The concierge can recommend a good restaurant nearby." },
      { word: "fully booked", pos: "phrase", meaning: "Having no available rooms, seats, or reservations.", example: "I'm sorry, the hotel is fully booked this weekend." },
      { word: "voucher", pos: "noun", meaning: "A document that can be exchanged for goods, services, or a discount.", example: "Use this voucher for a free breakfast during your stay." },
      { word: "excursion", pos: "noun", meaning: "A short trip or outing, often organized for a group.", example: "The conference includes an optional excursion to the old city." },
      { word: "boarding pass", pos: "noun", meaning: "A document allowing you to board a flight.", example: "Please have your boarding pass ready at the gate." },
    ],
  },
  {
    id: "finance",
    name: "Finance & Budgeting",
    emoji: "💳",
    cards: [
      { word: "audit", pos: "noun/verb", meaning: "An official inspection of an organization's accounts.", example: "The annual audit found no significant issues." },
      { word: "deficit", pos: "noun", meaning: "The amount by which spending is greater than income.", example: "The company reported a deficit for the second quarter." },
      { word: "dividend", pos: "noun", meaning: "A share of a company's profits paid to shareholders.", example: "The board declared a quarterly dividend of $0.50 per share." },
      { word: "fiscal", pos: "adjective", meaning: "Relating to financial matters, especially of a government or company.", example: "Our fiscal year ends in March." },
      { word: "liability", pos: "noun", meaning: "A financial obligation or debt owed by a company.", example: "Long-term liabilities are listed on the balance sheet." },
      { word: "revenue", pos: "noun", meaning: "Income generated from business activities.", example: "Revenue grew 12% year over year." },
      { word: "yield", pos: "noun/verb", meaning: "The return or profit generated by an investment.", example: "The bond offers a yield of 4.2% annually." },
      { word: "overhead", pos: "noun", meaning: "Ongoing business costs not directly tied to a product or service.", example: "Moving to a smaller office helped reduce overhead." },
    ],
  },
  {
    id: "health",
    name: "Health & Technical",
    emoji: "🩺",
    cards: [
      { word: "diagnosis", pos: "noun", meaning: "The identification of an illness or problem.", example: "The diagnosis confirmed a mild case of the flu." },
      { word: "prescription", pos: "noun", meaning: "A written instruction from a doctor for medication.", example: "Please pick up your prescription from the pharmacy." },
      { word: "preventive", pos: "adjective", meaning: "Designed to keep something undesirable from happening.", example: "Preventive maintenance reduces equipment downtime." },
      { word: "specification", pos: "noun", meaning: "A detailed description of design, materials, or requirements.", example: "The product specifications are listed on page two." },
      { word: "troubleshooting", pos: "noun", meaning: "The process of identifying and solving problems in a system.", example: "Troubleshooting the network outage took most of the morning." },
      { word: "maintenance", pos: "noun", meaning: "The process of keeping equipment in good working condition.", example: "The server will be offline for scheduled maintenance." },
      { word: "upgrade", pos: "noun/verb", meaning: "An improvement or newer version of something.", example: "We rolled out a software upgrade across all departments." },
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