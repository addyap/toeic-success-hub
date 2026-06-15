import { createFileRoute } from "@tanstack/react-router";
import { Mic, PenLine, Clock, Target } from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/speaking-writing")({
  head: () => ({
    meta: [
      { title: "TOEIC Speaking & Writing — Format & Practice | ToeicPath" },
      { name: "description", content: "Master the TOEIC S&W test: all 11 speaking and 8 writing tasks explained, with practice prompts and model responses." },
      { property: "og:title", content: "TOEIC Speaking & Writing — Format & Practice" },
      { property: "og:description", content: "All speaking and writing tasks explained, with practice prompts and model responses." },
    ],
  }),
  component: Page,
});

const speakingTasks = [
  { n: "1–2", name: "Read a text aloud", what: "Read a short announcement clearly with natural rhythm and pronunciation." },
  { n: "3", name: "Describe a picture", what: "Describe what you see in 45 seconds — people, place, actions, mood." },
  { n: "4–6", name: "Respond to questions", what: "Answer three related questions on a familiar topic without preparation." },
  { n: "7–9", name: "Respond using information", what: "Use a schedule, agenda or document to answer a caller's questions." },
  { n: "10", name: "Propose a solution", what: "Listen to a voicemail describing a problem and propose a solution." },
  { n: "11", name: "Express an opinion", what: "Give a one-minute opinion on a workplace or general issue, with reasons." },
];

const writingTasks = [
  { n: "1–5", name: "Write a sentence based on a picture", what: "Write one sentence using two given words to describe an image." },
  { n: "6–7", name: "Respond to a written request", what: "Reply to a customer or colleague email addressing all asked questions." },
  { n: "8", name: "Write an opinion essay", what: "Write a 300-word essay supporting an opinion with examples and reasons." },
];

const speakingPrompts = [
  {
    title: "Describe a picture",
    prompt: "You will see a photo of a busy coffee shop. Describe in 45 seconds: where it is, who is there, what they are doing, and the overall atmosphere.",
    model: "This is a busy coffee shop, probably during the morning rush. In the foreground, a barista wearing a brown apron is preparing a drink behind the counter. To the right, several customers are sitting at small wooden tables — one is working on a laptop while another is reading a newspaper. The lighting is warm and the place looks cozy and welcoming.",
  },
  {
    title: "Express an opinion",
    prompt: "Some people prefer to work for a large company, while others prefer to work for a small company. Which do you prefer, and why? Give specific reasons and examples.",
    model: "I prefer working for a small company. First, communication is faster because teams are close, so decisions don't get stuck in long approval chains. Second, employees usually take on a wider range of tasks, which helps them grow new skills quickly. For example, in my previous internship at a five-person startup, I handled both marketing and customer support, and that experience was more valuable to my career than a single-focus role would have been.",
  },
];

function Page() {
  return (
    <SiteLayout>
      <section className="bg-gradient-soft">
        <div className="mx-auto w-full max-w-6xl px-5 py-12 md:py-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Mic className="h-3.5 w-3.5" /> TOEIC Speaking & Writing
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Show what you can produce — not just recognise.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            The S&W test is delivered online and measures your ability to communicate in real workplace situations. Each section is scored from 0 to 200.
          </p>
        </div>
      </section>

      {/* Speaking */}
      <section className="mx-auto w-full max-w-6xl px-5 py-14">
        <div className="grid gap-4 sm:grid-cols-3">
          <Stat icon={<Mic className="h-4 w-4" />} label="Speaking" value="11 questions" />
          <Stat icon={<Clock className="h-4 w-4" />} label="Time" value="≈ 20 minutes" />
          <Stat icon={<Target className="h-4 w-4" />} label="Score" value="0 – 200" />
        </div>

        <h2 className="mt-10 font-display text-3xl font-semibold">Speaking tasks</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {speakingTasks.map((t) => <TaskCard key={t.n} {...t} />)}
        </div>
      </section>

      {/* Writing */}
      <section className="bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-5 py-14">
          <div className="grid gap-4 sm:grid-cols-3">
            <Stat icon={<PenLine className="h-4 w-4" />} label="Writing" value="8 questions" />
            <Stat icon={<Clock className="h-4 w-4" />} label="Time" value="≈ 60 minutes" />
            <Stat icon={<Target className="h-4 w-4" />} label="Score" value="0 – 200" />
          </div>

          <h2 className="mt-10 font-display text-3xl font-semibold">Writing tasks</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {writingTasks.map((t) => <TaskCard key={t.n} {...t} />)}
          </div>
        </div>
      </section>

      {/* Practice */}
      <section className="mx-auto w-full max-w-3xl px-5 py-14">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">Practice area</h2>
        <p className="mt-2 text-muted-foreground">Read each prompt, draft your answer aloud or in writing, then compare with the model response.</p>
        <div className="mt-8 space-y-5">
          {speakingPrompts.map((p) => <PromptCard key={p.title} {...p} />)}
          <WritingExercise />
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

function TaskCard({ n, name, what }: { n: string; name: string; what: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center gap-3">
        <span className="grid h-10 min-w-10 place-items-center rounded-xl bg-gradient-hero px-2 font-display text-sm font-semibold text-primary-foreground">{n}</span>
        <h3 className="font-semibold">{name}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{what}</p>
    </div>
  );
}

function PromptCard({ title, prompt, model }: { title: string; prompt: string; model: string }) {
  const [show, setShow] = useState(false);
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
      <div className="text-xs font-semibold uppercase tracking-wider text-primary">{title}</div>
      <p className="mt-2 text-base font-medium">{prompt}</p>
      <button
        onClick={() => setShow((s) => !s)}
        className="mt-4 inline-flex rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground hover:bg-secondary/80"
      >
        {show ? "Hide model response" : "Show model response"}
      </button>
      {show && (
        <p className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm leading-relaxed">{model}</p>
      )}
    </div>
  );
}

function WritingExercise() {
  const [text, setText] = useState("");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const min = 100;
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
      <div className="text-xs font-semibold uppercase tracking-wider text-primary">Respond to a written request</div>
      <p className="mt-2 text-base font-medium">
        Write a reply to the following email from a colleague. Address both questions.
      </p>
      <p className="mt-3 whitespace-pre-line rounded-lg bg-muted px-4 py-3 text-sm text-muted-foreground">
        {`Hi,\nI'm organizing the team off-site next month and I'd love your input. Could you (1) suggest a venue idea and (2) let me know what dates work for you? Thanks!\n— Priya`}
      </p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={6}
        placeholder="Type your reply here..."
        className="mt-4 w-full resize-y rounded-xl border border-border bg-background p-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40"
      />
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm">
        <span className="text-muted-foreground">Words: <strong className="text-foreground">{words}</strong> / {min}+</span>
        <span className={words >= min ? "font-semibold text-success" : "text-muted-foreground"}>
          {words >= min ? "Great — solid length for this task." : `Add about ${Math.max(0, min - words)} more words to hit the target.`}
        </span>
      </div>
    </div>
  );
}