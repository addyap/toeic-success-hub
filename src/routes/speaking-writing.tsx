import { createFileRoute } from "@tanstack/react-router";
import { Mic, PenLine, Clock, Target } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/speaking-writing")({
  head: () => ({
    meta: [
      { title: "Speaking & Writing | ToeicPath - Official TOEIC Prep Guide" },
      {
        name: "description",
        content:
          "Practice TOEIC Speaking & Writing tasks with timed prompts, model responses, and scoring checklists aligned to the official rubrics.",
      },
      {
        property: "og:title",
        content: "Speaking & Writing | ToeicPath - Official TOEIC Prep Guide",
      },
      {
        property: "og:description",
        content:
          "Practice TOEIC Speaking & Writing tasks with timed prompts, model responses, and scoring checklists aligned to the official rubrics.",
      },
      { property: "og:url", content: absoluteUrl("/speaking-writing") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/speaking-writing") }],
  }),
  component: Page,
});

const speakingTasks = [
  {
    n: "1–2",
    name: "Read a text aloud",
    what: "Read a short announcement clearly with natural rhythm and pronunciation.",
  },
  {
    n: "3",
    name: "Describe a picture",
    what: "Describe what you see in 45 seconds — people, place, actions, mood.",
  },
  {
    n: "4–6",
    name: "Respond to questions",
    what: "Answer three related questions on a familiar topic without preparation.",
  },
  {
    n: "7–9",
    name: "Respond using information",
    what: "Use a schedule, agenda or document to answer a caller's questions.",
  },
  {
    n: "10",
    name: "Propose a solution",
    what: "Listen to a voicemail describing a problem and propose a solution.",
  },
  {
    n: "11",
    name: "Express an opinion",
    what: "Give a one-minute opinion on a workplace or general issue, with reasons.",
  },
];

const writingTasks = [
  {
    n: "1–5",
    name: "Write a sentence based on a picture",
    what: "Write one sentence using two given words to describe an image.",
  },
  {
    n: "6–7",
    name: "Respond to a written request",
    what: "Reply to a customer or colleague email addressing all asked questions.",
  },
  {
    n: "8",
    name: "Write an opinion essay",
    what: "Write a 300-word essay supporting an opinion with examples and reasons.",
  },
];

type RubricKey = "read-aloud" | "describe-picture" | "opinion-speaking" | "email" | "essay";

const RUBRICS: Record<RubricKey, { title: string; items: string[] }> = {
  "read-aloud": {
    title: "Self-check — Read a text aloud",
    items: [
      "I paused briefly at every comma and period.",
      "I stressed the key words in each sentence, not every word equally.",
      "I kept a natural, steady pace — not rushed, not word-by-word.",
      "I pronounced numbers, names, and abbreviations clearly.",
      "I read with intonation, not a flat monotone.",
    ],
  },
  "describe-picture": {
    title: "Self-check — Describe a picture",
    items: [
      "I started by stating where the scene is set.",
      "I described the people and what they are doing.",
      "I added at least two specific details (objects, colors, numbers).",
      "I kept speaking for the full time with no long pauses.",
      "I used the present continuous correctly (is/are + -ing).",
    ],
  },
  "opinion-speaking": {
    title: "Self-check — Opinion",
    items: [
      "I stated my position in the first sentence.",
      "I gave two distinct reasons.",
      "I supported each reason with an example.",
      "I used linking words (because, for example, in addition).",
      "I ended with a one-line conclusion.",
    ],
  },
  email: {
    title: "Self-check — Email response",
    items: [
      "I opened with an appropriate greeting and closed politely.",
      "I addressed every point the prompt asked for.",
      "I made the required number of requests or answers.",
      "I organized the message into clear paragraphs.",
      "I checked subject–verb agreement and articles.",
    ],
  },
  essay: {
    title: "Self-check — Opinion essay",
    items: [
      "I stated a clear thesis in the introduction.",
      "I wrote two body paragraphs, each with a reason and an example.",
      "I used linking words to connect ideas.",
      "I wrote a conclusion that restates my position in new words.",
      "I reached roughly 300 words.",
    ],
  },
};

const speakingPrompts: {
  id: string;
  title: string;
  prompt: string;
  model: string;
  prepSec: number;
  respSec: number;
  rubric: RubricKey;
}[] = [
  {
    id: "read-aloud",
    title: "Task 1 · Read a text aloud",
    prompt:
      "Read the following announcement aloud. You have 45 seconds to prepare and 45 seconds to read. Focus on clear pronunciation, natural pace, and pauses at commas and periods.",
    model:
      "Thank you for calling the City Transit helpline. Please stay on the line for the next available representative. For schedule updates, press one.",
    prepSec: 45,
    respSec: 45,
    rubric: "read-aloud",
  },
  {
    id: "describe-picture",
    title: "Task 2 · Describe a picture",
    prompt:
      "Describe a picture of three people in a boardroom looking at a chart on a screen. You have 30 seconds to prepare and 45 seconds to speak.",
    model:
      "This picture appears to be taken inside a modern corporate boardroom during a business presentation. Three colleagues are seated around a long conference table, all facing a large screen mounted on the wall. The screen shows what looks like a bar chart, possibly displaying quarterly sales figures. On the left, a woman in a navy blazer is pointing at the chart, while the two others — a man in a white shirt and another woman with glasses — are taking notes. The atmosphere looks focused and professional.",
    prepSec: 30,
    respSec: 45,
    rubric: "describe-picture",
  },
  {
    id: "opinion",
    title: "Speaking Task 11 · Express an opinion",
    prompt:
      "Some people prefer to work for a large company, while others prefer to work for a small company. Which do you prefer, and why? Give specific reasons and examples.",
    model:
      "I prefer working for a small company. First, communication is faster because teams are close, so decisions don't get stuck in long approval chains. Second, employees usually take on a wider range of tasks, which helps them grow new skills quickly. For example, in my previous internship at a five-person startup, I handled both marketing and customer support, and that experience was more valuable to my career than a single-focus role would have been.",
    prepSec: 15,
    respSec: 60,
    rubric: "opinion-speaking",
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
            The S&W test is delivered online and measures your ability to communicate in real
            workplace situations. Each section is scored from 0 to 200.
          </p>
        </div>
      </section>

      {/* Speaking */}
      <section className="mx-auto w-full max-w-6xl px-5 py-14">
        <div className="grid gap-4 sm:grid-cols-3">
          <Stat icon={<Mic className="h-4 w-4" />} label="Speaking" value="11 Questions" />
          <Stat icon={<Clock className="h-4 w-4" />} label="Time" value="20 Minutes" />
          <Stat icon={<Target className="h-4 w-4" />} label="Score" value="0 – 200" />
        </div>

        <h2 className="mt-10 font-display text-3xl font-semibold">Speaking tasks</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {speakingTasks.map((t) => (
            <TaskCard key={t.n} {...t} />
          ))}
        </div>
      </section>

      {/* Writing */}
      <section className="bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-5 py-14">
          <div className="grid gap-4 sm:grid-cols-3">
            <Stat icon={<PenLine className="h-4 w-4" />} label="Writing" value="8 Questions" />
            <Stat icon={<Clock className="h-4 w-4" />} label="Time" value="60 Minutes" />
            <Stat icon={<Target className="h-4 w-4" />} label="Score" value="0 – 200" />
          </div>

          <h2 className="mt-10 font-display text-3xl font-semibold">Writing tasks</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {writingTasks.map((t) => (
              <TaskCard key={t.n} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Practice */}
      <section className="mx-auto w-full max-w-3xl px-5 py-14">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">Practice area</h2>
        <p className="mt-2 text-muted-foreground">
          Read each prompt, draft your answer aloud or in writing, then compare with the model
          response.
        </p>
        <div className="mt-8 space-y-5">
          {speakingPrompts.map((p) => (
            <PromptCard key={p.id} {...p} />
          ))}
          <WritingExercise
            id="email"
            title="Writing Task 6–7 · Respond to a written request"
            prompt="Write a reply to the following email from a colleague. Address both questions."
            email={`Hi,\nI'm organizing the team off-site next month and I'd love your input. Could you (1) suggest a venue idea and (2) let me know what dates work for you? Thanks!\n— Priya`}
            minWords={100}
            durationSec={10 * 60}
            rubric="email"
          />
          <WritingExercise
            id="essay"
            title="Writing Task 8 · Opinion essay"
            prompt="Some people believe employees should be allowed to work from home as often as they like. Others think they should come to the office every day. State your opinion with reasons and examples. Aim for about 300 words."
            minWords={300}
            durationSec={30 * 60}
            rubric="essay"
          />
        </div>
      </section>
    </SiteLayout>
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

function TaskCard({ n, name, what }: { n: string; name: string; what: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center gap-3">
        <span className="grid h-10 min-w-10 place-items-center rounded-xl bg-gradient-hero px-2 font-display text-sm font-semibold text-primary-foreground">
          {n}
        </span>
        <h3 className="font-semibold">{name}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{what}</p>
    </div>
  );
}

function PromptCard({
  title,
  prompt,
  model,
  prepSec,
  respSec,
  rubric,
}: {
  title: string;
  prompt: string;
  model: string;
  prepSec: number;
  respSec: number;
  rubric: RubricKey;
}) {
  const [show, setShow] = useState(false);
  return (
    <div
      className="rounded-2xl border border-border bg-card p-5 shadow-soft"
      data-testid="prompt-card"
      data-rubric={rubric}
    >
      <div className="text-xs font-semibold uppercase tracking-wider text-primary">{title}</div>
      <p className="mt-2 text-base font-medium">{prompt}</p>
      <PrepRespTimer prepSec={prepSec} respSec={respSec} />
      <button
        onClick={() => setShow((s) => !s)}
        className="mt-4 inline-flex rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground hover:bg-secondary/80"
      >
        {show ? "Hide model response" : "Show model response"}
      </button>
      {show && (
        <>
          <p className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm leading-relaxed">
            {model}
          </p>
          <Checklist rubric={rubric} />
        </>
      )}
    </div>
  );
}

function WritingExercise({
  id,
  title,
  prompt,
  email,
  minWords,
  durationSec,
  rubric,
}: {
  id: string;
  title: string;
  prompt: string;
  email?: string;
  minWords: number;
  durationSec: number;
  rubric: RubricKey;
}) {
  const storageKey = `toeicpath:sw:draft:${id}`;
  const [text, setText] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [showChecklist, setShowChecklist] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setText(raw);
    } catch {
      // localStorage unavailable (private mode / disabled) — draft just won't persist
    }
    setLoaded(true);
  }, [storageKey]);

  useEffect(() => {
    if (!loaded) return;
    try {
      if (text) localStorage.setItem(storageKey, text);
      else localStorage.removeItem(storageKey);
    } catch {
      // localStorage unavailable — draft just won't persist
    }
  }, [text, loaded, storageKey]);

  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return (
    <div
      className="rounded-2xl border border-border bg-card p-5 shadow-soft"
      data-testid="writing-exercise"
      data-id={id}
    >
      <div className="text-xs font-semibold uppercase tracking-wider text-primary">{title}</div>
      <p className="mt-2 text-base font-medium" id={`writing-prompt-${id}`}>
        {prompt}
      </p>
      {email && (
        <p className="mt-3 whitespace-pre-line rounded-lg bg-muted px-4 py-3 text-sm text-muted-foreground">
          {email}
        </p>
      )}
      <CountdownTimer durationSec={durationSec} label="Writing time" />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={8}
        placeholder="Type your reply here..."
        aria-labelledby={`writing-prompt-${id}`}
        className="mt-4 w-full resize-y rounded-xl border border-border bg-background p-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40"
      />
      <div
        className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm"
        data-testid="word-count"
        data-words={words}
        data-min={minWords}
      >
        <span className="text-muted-foreground">
          Words: <strong className="text-foreground">{words}</strong> / {minWords}+
        </span>
        <span
          className={
            words >= minWords ? "font-semibold text-success-text" : "text-muted-foreground"
          }
        >
          {words >= minWords
            ? "Great — solid length for this task."
            : `Add about ${Math.max(0, minWords - words)} more words to hit the target.`}
        </span>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
        <button
          type="button"
          onClick={() => setText("")}
          className="text-muted-foreground underline-offset-2 hover:text-primary hover:underline"
        >
          Clear draft
        </button>
        <span className="text-muted-foreground">Auto-saved on this device.</span>
        <button
          type="button"
          onClick={() => setShowChecklist((s) => !s)}
          className="ml-auto rounded-full border border-border bg-card px-3 py-1 font-semibold text-foreground hover:border-primary/60 hover:text-primary"
        >
          {showChecklist ? "Hide self-check" : "Self-check my answer"}
        </button>
      </div>
      {showChecklist && <Checklist rubric={rubric} />}
    </div>
  );
}

function Checklist({ rubric }: { rubric: RubricKey }) {
  const r = RUBRICS[rubric];
  const [checked, setChecked] = useState<boolean[]>(() => r.items.map(() => false));
  const done = checked.filter(Boolean).length;
  return (
    <div
      className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-4"
      data-testid="checklist"
      data-done={done}
      data-total={r.items.length}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="text-xs font-semibold uppercase tracking-wider text-primary">{r.title}</div>
        <div className="text-xs font-semibold text-primary">
          {done}/{r.items.length}
        </div>
      </div>
      <ul className="mt-3 space-y-2">
        {r.items.map((item, i) => (
          <li key={i}>
            <label className="flex cursor-pointer items-start gap-2 text-sm leading-relaxed">
              <input
                type="checkbox"
                data-testid="checklist-item"
                checked={checked[i]}
                onChange={(e) =>
                  setChecked((prev) => prev.map((v, j) => (j === i ? e.target.checked : v)))
                }
                className="mt-1 h-4 w-4 shrink-0 accent-primary"
              />
              <span
                className={checked[i] ? "text-muted-foreground line-through" : "text-foreground"}
              >
                {item}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

function format(s: number) {
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, "0")}`;
}

function PrepRespTimer({ prepSec, respSec }: { prepSec: number; respSec: number }) {
  const [phase, setPhase] = useState<"idle" | "prep" | "response" | "done">("idle");
  const [remaining, setRemaining] = useState(prepSec);
  const intRef = useRef<number | null>(null);

  const stop = () => {
    if (intRef.current != null) {
      clearInterval(intRef.current);
      intRef.current = null;
    }
  };
  useEffect(() => () => stop(), []);

  const start = () => {
    stop();
    setPhase("prep");
    setRemaining(prepSec);
  };
  const reset = () => {
    stop();
    setPhase("idle");
    setRemaining(prepSec);
  };

  useEffect(() => {
    if (phase !== "prep" && phase !== "response") return;
    intRef.current = window.setInterval(() => {
      setRemaining((r) => {
        if (r > 1) return r - 1;
        if (phase === "prep") {
          setPhase("response");
          return respSec;
        }
        setPhase("done");
        stop();
        return 0;
      });
    }, 1000);
    return () => stop();
  }, [phase, respSec]);

  const total = phase === "response" ? respSec : prepSec;
  const pct = phase === "done" ? 100 : ((total - remaining) / total) * 100;
  const label =
    phase === "idle"
      ? `Prep ${format(prepSec)} → Speak ${format(respSec)}`
      : phase === "prep"
        ? `Prep time · ${format(remaining)}`
        : phase === "response"
          ? `Speak now · ${format(remaining)}`
          : "Time's up — review against the checklist below.";

  return (
    <div
      className="mt-4 rounded-xl border border-border bg-muted/40 p-3"
      data-testid="prep-resp-timer"
      data-phase={phase}
      data-remaining={remaining}
    >
      <div className="flex items-center justify-between gap-3">
        <div
          className={
            "text-xs font-semibold uppercase tracking-wider " +
            (phase === "response"
              ? "text-primary"
              : phase === "done"
                ? "text-success-text"
                : "text-muted-foreground")
          }
        >
          {label}
        </div>
        <div aria-live="polite" className="sr-only">
          {phase === "prep" && "Preparation time started."}
          {phase === "response" && "Speak now."}
          {phase === "done" && "Time's up."}
        </div>
        <div className="flex items-center gap-2">
          {phase === "idle" || phase === "done" ? (
            <button
              type="button"
              onClick={start}
              className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground hover:opacity-90"
            >
              Start timer
            </button>
          ) : (
            <button
              type="button"
              onClick={reset}
              className="rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-foreground hover:border-primary/60 hover:text-primary"
            >
              Stop
            </button>
          )}
        </div>
      </div>
      {(phase === "prep" || phase === "response" || phase === "done") && (
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-background">
          <div
            className={
              "h-full rounded-full transition-all " +
              (phase === "response"
                ? "bg-primary"
                : phase === "done"
                  ? "bg-success"
                  : "bg-muted-foreground/60")
            }
            style={{ width: `${pct}%` }}
          />
        </div>
      )}
    </div>
  );
}

function CountdownTimer({ durationSec, label }: { durationSec: number; label: string }) {
  const [running, setRunning] = useState(false);
  const [remaining, setRemaining] = useState(durationSec);
  const [done, setDone] = useState(false);
  const intRef = useRef<number | null>(null);

  const stop = () => {
    if (intRef.current != null) {
      clearInterval(intRef.current);
      intRef.current = null;
    }
  };
  useEffect(() => () => stop(), []);

  useEffect(() => {
    if (!running) return;
    intRef.current = window.setInterval(() => {
      setRemaining((r) => {
        if (r > 1) return r - 1;
        setRunning(false);
        setDone(true);
        stop();
        return 0;
      });
    }, 1000);
    return () => stop();
  }, [running]);

  const start = () => {
    setDone(false);
    setRemaining(durationSec);
    setRunning(true);
  };
  const pause = () => setRunning(false);
  const reset = () => {
    setRunning(false);
    setDone(false);
    setRemaining(durationSec);
  };

  const pct = ((durationSec - remaining) / durationSec) * 100;

  return (
    <div
      className="mt-4 rounded-xl border border-border bg-muted/40 p-3"
      data-testid="countdown-timer"
      data-running={running}
      data-done={done}
      data-remaining={remaining}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div
          className={
            "text-xs font-semibold uppercase tracking-wider " +
            (done ? "text-success-text" : running ? "text-primary" : "text-muted-foreground")
          }
        >
          {done ? "Time's up — review against the checklist." : `${label} · ${format(remaining)}`}
        </div>
        <div aria-live="polite" className="sr-only">
          {done && "Time's up."}
        </div>
        <div className="flex items-center gap-2 text-xs">
          {!running && !done && (
            <button
              type="button"
              onClick={start}
              className="rounded-full bg-primary px-3 py-1 font-semibold text-primary-foreground hover:opacity-90"
            >
              Start timer
            </button>
          )}
          {running && (
            <button
              type="button"
              onClick={pause}
              className="rounded-full border border-border bg-card px-3 py-1 font-semibold text-foreground hover:border-primary/60 hover:text-primary"
            >
              Pause
            </button>
          )}
          {(remaining !== durationSec || done) && (
            <button
              type="button"
              onClick={reset}
              className="rounded-full border border-border bg-card px-3 py-1 font-semibold text-foreground hover:border-primary/60 hover:text-primary"
            >
              Reset
            </button>
          )}
        </div>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-background">
        <div
          className={"h-full rounded-full transition-all " + (done ? "bg-success" : "bg-primary")}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
