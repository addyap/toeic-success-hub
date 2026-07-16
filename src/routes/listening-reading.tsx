import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Headphones, BookOpen, Clock, ListChecks, RotateCcw, Trophy } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PracticeQuestion, type PracticeQuestionData } from "@/components/PracticeQuestion";
import { absoluteUrl } from "@/lib/site";

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

const part1a: PracticeQuestionData = {
  prompt: "Part 1 · Listen to statements A–D and pick the one that best describes the scene.",
  photo: true,
  audio: { label: "Photograph statements", durationSec: 0 },
  context:
    "A woman wearing an apron stands behind a café counter, holding a cup. Shelves of mugs line the wall behind her.",
  options: [
    { label: "A", text: "She's wiping down the counter." },
    { label: "B", text: "She's holding a cup." },
    { label: "C", text: "She's stocking the shelves." },
    { label: "D", text: "She's pouring coffee for a customer." },
  ],
  correct: "B",
  explanation:
    "B matches the action actually shown — she's holding a cup. A, C, and D describe plausible café actions that aren't happening in the scene. Part 1 rewards what is visibly true, not what could be true.",
};

const part1b: PracticeQuestionData = {
  prompt: "Part 1 · Listen to statements A–D and pick the one that best describes the scene.",
  photo: true,
  audio: { label: "Photograph statements", durationSec: 0 },
  context:
    "Several passengers sit in an airport waiting area. One man is reading a newspaper, and a suitcase stands on the floor beside him.",
  options: [
    { label: "A", text: "The passengers are boarding the plane." },
    { label: "B", text: "A man is folding his newspaper." },
    { label: "C", text: "A suitcase has been placed on the floor." },
    { label: "D", text: "The seats are being cleaned." },
  ],
  correct: "C",
  explanation:
    "C correctly describes the state of the scene — note the passive 'has been placed.' A and D name actions no one is performing, and B swaps the man's real action (reading) for a similar-sounding one (folding) — a classic Part 1 trap.",
};

const part2: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  audio: { label: "Spoken question", durationSec: 0 },
  context: 'Question: "When is the quarterly report due?"',
  options: [
    { label: "A", text: "In the conference room." },
    { label: "B", text: "By the end of the week." },
    { label: "C", text: "Yes, I reported it." },
  ],
  correct: "B",
  explanation:
    "'When' asks for a time. 'By the end of the week' answers a time question. (A) answers 'where' and (C) is a yes/no answer that also plays on the word 'report' — a classic Part 2 distractor.",
};

const part3: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 1 — Print shop brochures", durationSec: 38 },
  context:
    "(W) Hi, David. I just got back from the print shop. The brochures for tomorrow's trade show are ready, but they spelled our company name wrong on the back cover.\n(M) You're kidding. We hand those out in less than 18 hours. Can they reprint?\n(W) They said yes, but only if we approve a new proof by 5 PM today. Otherwise we'll have to use what we have.\n(M) Okay — forward me the proof as soon as it arrives and I'll sign off immediately.\n\nQuestion: What problem does the woman mention?",
  options: [
    { label: "A", text: "The trade show has been postponed." },
    { label: "B", text: "The print shop is closed for the day." },
    { label: "C", text: "The company name is misspelled on the brochures." },
    { label: "D", text: "The brochures were delivered to the wrong address." },
  ],
  correct: "C",
  explanation:
    "The woman states the brochures are ready 'but they spelled our company name wrong on the back cover.' (A), (B), and (D) are never mentioned — they are typical Part 3 distractors that reuse vocabulary ('trade show', 'print shop', 'brochures') from the conversation.",
};

const part3b: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 2 — Hotel shuttle inquiry", durationSec: 42 },
  context:
    "(M) Front desk, how may I help you?\n(W) Hi, this is Sarah Chen from room 412. I have a quick question about the airport shuttle — I saw the sign in the lobby says it runs every thirty minutes, but the brochure in my room says hourly.\n(M) Oh, I'm sorry for the confusion. We updated the schedule last month; the shuttle now departs on the hour and at half past. The next one leaves at 7:30 AM.\n(W) Great, and does it go directly to Terminal 2?\n(M) Yes, ma'am. It makes one brief stop at Terminal 1 first, then proceeds directly to Terminal 2.\n\nQuestion: Why does the woman call the front desk?",
  options: [
    { label: "A", text: "To extend her stay by one night." },
    { label: "B", text: "To report a problem with her room." },
    { label: "C", text: "To ask about conflicting shuttle information." },
    { label: "D", text: "To request a wake-up call for 7:00 AM." },
  ],
  correct: "C",
  explanation:
    "The woman mentions she saw two different shuttle schedules — one in the lobby ('every thirty minutes') and one in her room brochure ('hourly'). She calls to resolve this conflicting information. (A), (B), and (D) are never mentioned; they are common hotel-related distractors.",
};

const part3c: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 3 — Conference room booking", durationSec: 40 },
  context:
    "(W) Hi Greg, have you reserved the conference room for Friday's client presentation?\n(M) I tried to, but the system said both the Rose Room and the Orchid Room are already booked all day.\n(W) That's frustrating. The VP specifically asked for a room with a screen and seating for at least twelve.\n(M) Well, the Lily Room on the fourth floor is available from 2 PM, and it has a 4K display that connects wirelessly. It seats fourteen.\n(W) Perfect — let's book that and send an updated calendar invite to the client team.\n\nQuestion: What is the man trying to do?",
  options: [
    { label: "A", text: "Cancel an existing meeting with a client." },
    { label: "B", text: "Find an available room for a presentation." },
    { label: "C", text: "Repair a broken projector in the Rose Room." },
    { label: "D", text: "Schedule a training session for new staff." },
  ],
  correct: "B",
  explanation:
    "The man initially tried to reserve a conference room for the client presentation but found two rooms booked. He then suggests the Lily Room as an alternative, which has the display screen and seating the VP asked for. The core action is finding an available room. (A), (C), and (D) are never mentioned — no meeting is cancelled, no projector is broken, and the meeting is a client presentation, not a training session.",
};

const part4: PracticeQuestionData = {
  prompt: "Part 4 · Short Talks. Read the announcement and answer the question.",
  listening: true,
  audio: { label: "Short talk — Train announcement", durationSec: 0 },
  context:
    "Good morning, passengers, and welcome aboard Skyline Rail service 402 to Central Station. Please be advised that due to scheduled track maintenance between Riverside and Oak Park, we will be operating on a single track for approximately twenty minutes. You can expect a delay of about fifteen minutes into Central Station. Complimentary coffee and tea are available in the café car for the duration of the delay. We appreciate your patience this morning.\n\nQuestion: What does the speaker offer the passengers?",
  options: [
    { label: "A", text: "A full refund for their tickets." },
    { label: "B", text: "Free drinks in the café car." },
    { label: "C", text: "A transfer to an express train." },
    { label: "D", text: "A discount on their next trip." },
  ],
  correct: "B",
  explanation:
    "The announcement states 'Complimentary coffee and tea are available in the café car' — 'complimentary' means free. (A), (C), and (D) are common compensation offers but are never mentioned in the talk.",
};

const part5: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context: "The CEO ______ announced the merger during the press conference.",
  options: [
    { label: "A", text: "formal" },
    { label: "B", text: "formally" },
    { label: "C", text: "formality" },
    { label: "D", text: "formalize" },
  ],
  correct: "B",
  explanation:
    "The blank modifies the verb 'announced', so an adverb is needed: 'formally'. (A) is an adjective, (C) is a noun, and (D) is a verb — none can modify 'announced' grammatically.",
};

const part6: PracticeQuestionData = {
  prompt: "Part 6 · Read the email and choose the best word for each blank in turn.",
  context:
    "From: it-support@northwind.co\nTo: all-staff@northwind.co\nSubject: System Upgrade — This Weekend\n\nDear team,\n\nPlease be advised that a company-wide system upgrade has been (1) ______ for Saturday, June 20, from 10:00 PM to 2:00 AM. During this window, email and file servers will be unavailable. We apologize for any (2) ______ this may cause and thank you for your patience.\n\nIf you have urgent work, please complete it before 9:30 PM Saturday. Thank you for your (3) ______ and cooperation as we improve our infrastructure.\n\n— IT Support\n\nFor blank (1):",
  options: [
    { label: "A", text: "scheduled" },
    { label: "B", text: "schedule" },
    { label: "C", text: "scheduling" },
    { label: "D", text: "schedules" },
  ],
  correct: "A",
  explanation:
    "'Has been ______ for Saturday' needs a past participle to complete the present-perfect passive: 'has been scheduled'. Blank (2) is 'interruption' (the noun that fits 'any ______ this may cause') and blank (3) is 'understanding' — together a fixed business phrase: 'Thank you for your understanding and cooperation.'",
};

const part7: PracticeQuestionData = {
  prompt: "Part 7 · Read the email and answer the question.",
  context:
    "From: m.tanaka@northwind.co\nTo: all-staff@northwind.co\nSubject: Office closure\n\nPlease note that the Tokyo office will be closed on Monday, June 22, for routine electrical maintenance. Staff are encouraged to work from home that day. Normal operations will resume on Tuesday.\n\nQuestion: Why will the office be closed?",
  options: [
    { label: "A", text: "For a national holiday." },
    { label: "B", text: "For electrical maintenance." },
    { label: "C", text: "For a staff training session." },
    { label: "D", text: "For an office relocation." },
  ],
  correct: "B",
  explanation:
    "The email states the closure is 'for routine electrical maintenance', so (B) is correct.",
};

function Page() {
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
          <PracticeSession
            questions={[part1a, part1b, part2, part3, part3b, part3c, part4, part5, part6, part7]}
          />
        </div>
      </section>
    </SiteLayout>
  );
}

const BEST_KEY = "toeicpath:lr-practice:best";

function PracticeSession({ questions }: { questions: PracticeQuestionData[] }) {
  const [answers, setAnswers] = useState<(string | null)[]>(() => questions.map(() => null));
  const [resetKey, setResetKey] = useState(0);
  const [best, setBest] = useState<number | null>(null);
  const [bestLoaded, setBestLoaded] = useState(false);
  const [justImprovedBest, setJustImprovedBest] = useState(false);
  const bestRef = useRef<number | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(BEST_KEY);
      const parsed = raw ? parseInt(raw, 10) : NaN;
      if (!Number.isNaN(parsed)) setBest(parsed);
    } catch {
      // localStorage unavailable (private mode / disabled) — best score just won't persist
    }
    setBestLoaded(true);
  }, []);

  const score = useMemo(
    () => answers.reduce((acc, a, i) => acc + (a && a === questions[i].correct ? 1 : 0), 0),
    [answers, questions],
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
        localStorage.setItem(BEST_KEY, String(score));
      } catch {
        // localStorage unavailable (private mode / disabled) — best score just won't persist
      }
    }
  }, [complete, score, bestLoaded]);

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
        {questions.map((q, i) => (
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
