import { createFileRoute } from "@tanstack/react-router";
import { Headphones, BookOpen, Clock, ListChecks } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PracticeQuestion, type PracticeQuestionData } from "@/components/PracticeQuestion";

export const Route = createFileRoute("/listening-reading")({
  head: () => ({
    meta: [
      { title: "TOEIC Listening & Reading — Format & Practice | ToeicPath" },
      { name: "description", content: "Complete guide to the TOEIC L&R test: all 7 parts explained with interactive practice questions and answer explanations." },
      { property: "og:title", content: "TOEIC Listening & Reading — Format & Practice" },
      { property: "og:description", content: "All 7 parts explained with interactive practice questions." },
    ],
  }),
  component: Page,
});

const listeningParts = [
  { n: 1, name: "Photographs", count: "6 questions", what: "Choose the statement that best describes a photo." },
  { n: 2, name: "Question–Response", count: "25 questions", what: "Hear a question and pick the best of three spoken replies." },
  { n: 3, name: "Conversations", count: "39 questions", what: "Listen to short dialogues, then answer 3 questions per conversation." },
  { n: 4, name: "Short Talks", count: "30 questions", what: "Hear announcements, voicemails, or speeches and answer 3 questions each." },
];

const readingParts = [
  { n: 5, name: "Incomplete Sentences", count: "30 questions", what: "Choose the word or phrase that best completes the sentence." },
  { n: 6, name: "Text Completion", count: "16 questions", what: "Fill in blanks within short texts (emails, notices, articles)." },
  { n: 7, name: "Reading Comprehension", count: "54 questions", what: "Read single and multiple passages and answer detail / inference questions." },
];

const part1: PracticeQuestionData = {
  prompt: "Part 1 · Look at the description of the scene and choose the sentence that best matches.",
  context: "Scene: A woman is sitting at a desk. Her hands are on a laptop keyboard. A coffee cup is next to the laptop.",
  options: [
    { label: "A", text: "She is writing on a whiteboard." },
    { label: "B", text: "She is typing on a keyboard." },
    { label: "C", text: "She is talking on the phone." },
    { label: "D", text: "She is reading a book." },
  ],
  correct: "B",
  explanation: "The scene specifies her hands are on a laptop keyboard, which matches 'typing on a keyboard'. The other options describe actions not present in the image.",
};

const part2: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  context: "Question: \"When is the marketing report due?\"",
  options: [
    { label: "A", text: "In the meeting room." },
    { label: "B", text: "By Friday afternoon." },
    { label: "C", text: "Yes, she wrote it." },
  ],
  correct: "B",
  explanation: "'When' asks for a time. 'By Friday afternoon' answers the time question. (A) answers 'where' and (C) answers a yes/no question.",
};

const part5: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context: "All employees must ______ the new safety guidelines before entering the warehouse.",
  options: [
    { label: "A", text: "review" },
    { label: "B", text: "reviewing" },
    { label: "C", text: "reviewed" },
    { label: "D", text: "reviews" },
  ],
  correct: "A",
  explanation: "After the modal verb 'must', the base form of the verb is required: 'must review'.",
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
  explanation: "The email states the closure is 'for routine electrical maintenance', so (B) is correct.",
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
            The L&R test measures everyday business English comprehension through 200 multiple-choice questions across seven parts. Scores range from 10 to 990.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <Stat icon={<Clock className="h-4 w-4" />} label="Listening" value="45 minutes" />
            <Stat icon={<Clock className="h-4 w-4" />} label="Reading" value="75 minutes" />
            <Stat icon={<ListChecks className="h-4 w-4" />} label="Biographical" value="+30 minutes" />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-14">
        <SectionHeader icon={<Headphones className="h-5 w-5" />} title="Listening section" subtitle="100 questions · 45 minutes" />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {listeningParts.map((p) => <PartCard key={p.n} {...p} />)}
        </div>

        <div className="mt-14">
          <SectionHeader icon={<BookOpen className="h-5 w-5" />} title="Reading section" subtitle="100 questions · 75 minutes" />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {readingParts.map((p) => <PartCard key={p.n} {...p} />)}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto w-full max-w-3xl px-5 py-14">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Practice area</h2>
          <p className="mt-2 text-muted-foreground">Try one question from each main part. Tap an answer to reveal the explanation.</p>
          <div className="mt-8 space-y-5">
            <PracticeQuestion data={part1} index={0} />
            <PracticeQuestion data={part2} index={1} />
            <PracticeQuestion data={part5} index={2} />
            <PracticeQuestion data={part7} index={3} />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">{icon} {label}</div>
      <div className="mt-1 font-display text-2xl font-semibold">{value}</div>
    </div>
  );
}

function SectionHeader({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">{icon}</span>
      <div>
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">{title}</h2>
        <div className="text-sm text-muted-foreground">{subtitle}</div>
      </div>
    </div>
  );
}

function PartCard({ n, name, count, what }: { n: number; name: string; count: string; what: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-hero font-display text-base font-semibold text-primary-foreground">{n}</span>
        <div>
          <h3 className="font-semibold">Part {n}: {name}</h3>
          <div className="text-xs text-muted-foreground">{count}</div>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{what}</p>
    </div>
  );
}