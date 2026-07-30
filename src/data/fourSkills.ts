/** Reference data for the TOEIC 4-Skills exam (Listening, Reading, Speaking
 *  and Writing in a single sitting).
 *
 *  Formats, timings and evaluation criteria below are the published exam
 *  specification. The 4-Skills test is only offered with the Multistage
 *  Adaptive versions of the Listening and Reading sections, which is why the
 *  question counts here differ from the linear L&R test covered in
 *  /listening-reading (100 questions per section).
 *
 *  This file is deliberately small — it's the part of /four-skills' data that
 *  stays in the route's eager bundle. The Speaking/Writing practice prompt
 *  banks (also written for this site, following the official task formats
 *  without reproducing real exam material) live in the separate, larger
 *  `fourSkillsPrompts.ts`, loaded on demand.
 */

export interface ExamSection {
  id: "listening" | "reading" | "speaking" | "writing";
  name: string;
  duration: string;
  questions: string;
  scale: string;
  summary: string;
}

export const examSections: ExamSection[] = [
  {
    id: "listening",
    name: "Listening",
    duration: "25 minutes",
    questions: "45 questions",
    scale: "5–495",
    summary:
      "Multistage Adaptive. Unit 1 has 25 questions, Unit 2 has 20 — and how you perform on Unit 1 decides which questions you get in Unit 2.",
  },
  {
    id: "reading",
    name: "Reading",
    duration: "37 minutes",
    questions: "45 questions",
    scale: "5–495",
    summary:
      "Also Multistage Adaptive, same 25 + 20 split. You control your own pace across the unit, so budget roughly 45 seconds per question.",
  },
  {
    id: "speaking",
    name: "Speaking",
    duration: "20 minutes",
    questions: "11 tasks",
    scale: "0–200",
    summary:
      "Recorded responses to 11 prompts, from reading a text aloud to defending an opinion. Preparation time is short and strictly enforced.",
  },
  {
    id: "writing",
    name: "Writing",
    duration: "60 minutes",
    questions: "8 tasks",
    scale: "0–200",
    summary:
      "Five picture sentences, two written responses to a request, and one opinion essay. Half the section's clock belongs to the essay alone.",
  },
];

/** Facts that catch candidates out on test day — all specific to the
 *  4-Skills / adaptive format rather than the linear L&R test. */
export const examFacts = [
  {
    title: "The four parts are independent",
    body: "How you do in one section has no bearing on the others. A weak Speaking performance cannot drag down your Listening score.",
  },
  {
    title: "There is no penalty for a wrong answer",
    body: "Nothing is deducted for guessing, so never leave a Listening or Reading question blank. An unanswered question is a guaranteed zero.",
  },
  {
    title: "Unit 1 sets the difficulty of Unit 2",
    body: "In the adaptive sections, your Unit 1 performance determines the questions you receive in Unit 2. The opening questions carry real weight — settle in fast.",
  },
  {
    title: "You answer in order, against a clock",
    body: "The system requires answers in sequence and by the deadline. You can change an answer while it is on screen by clicking a different option, but you cannot roam freely across the section.",
  },
  {
    title: "Keyboard shortcuts are disabled in Writing",
    body: "Ctrl+C / Ctrl+V will not work. Use the on-screen Cut, Copy, Paste, Undo and Redo buttons above the text box, and note that text cannot be moved between tasks.",
  },
  {
    title: "The keyboard layout may not be yours",
    body: "Depending on the centre's equipment you may be given an AZERTY or a QWERTY keyboard. If you type on one layout daily, confirm which you will get before booking.",
  },
];

export interface SkillTask {
  range: string;
  task: string;
  timing: string;
  criteria: string[];
  advice: string;
}

export const speakingTasks: SkillTask[] = [
  {
    range: "1–2",
    task: "Read a text aloud",
    timing: "45s to prepare · 45s to read",
    criteria: ["Pronunciation", "Intonation and stress"],
    advice:
      "Content is not marked here — only delivery. Use the preparation time to mark where you will pause and which words carry the stress, then read at a calm, even pace rather than racing to the end.",
  },
  {
    range: "3–4",
    task: "Describe a picture",
    timing: "45s to prepare · 30s to speak",
    criteria: ["Pronunciation", "Intonation and stress", "Grammar", "Vocabulary", "Cohesion"],
    advice:
      "Thirty seconds is short. Open with where the scene is and who is in it, then describe what the main people are doing in the present continuous, and finish with one background detail. Keep talking until you are stopped.",
  },
  {
    range: "5–7",
    task: "Respond to questions",
    timing: "3s to prepare each · 15s for Q5–6 · 30s for Q7",
    criteria: ["All of the above", "Relevance of content", "Completeness of content"],
    advice:
      "Three seconds is not planning time, so answer on instinct. Question 7 is worth double the time of the previous two — expand it with a reason or an example instead of stopping early.",
  },
  {
    range: "8–10",
    task: "Respond to questions using information provided",
    timing: "45s to read the information · 3s to prepare · 15s for Q8–9 · 30s for Q10",
    criteria: ["All of the above"],
    advice:
      "You are given a schedule, agenda or itinerary to read first. Spend the 45 seconds locating times, names and locations, since the questions almost always ask for those. Question 10 is played twice.",
  },
  {
    range: "11",
    task: "Express an opinion",
    timing: "15s to prepare · 60s to speak",
    criteria: ["All of the above"],
    advice:
      "The longest response on the test. State your position in the first sentence, then give two reasons with a concrete example each. A clear, well-supported position scores better than a balanced one you never resolve.",
  },
];

export const writingTasks: SkillTask[] = [
  {
    range: "1–5",
    task: "Write a sentence based on a picture",
    timing: "8 minutes for all five",
    criteria: ["Grammar", "Relevance of the sentence to the picture"],
    advice:
      "You are given a picture and two words that must both appear in your sentence. You may change their form and use them in any order. One accurate sentence beats an ambitious one that breaks — this task marks grammar, not creativity. That is roughly 90 seconds each.",
  },
  {
    range: "6–7",
    task: "Respond to a written request",
    timing: "10 minutes each",
    criteria: ["Quality and variety of your sentences", "Vocabulary", "Organisation"],
    advice:
      "Usually an email. The directions state exactly what your reply must contain — often three specific things — and every one of them has to appear. Read the directions twice, cover each point in its own short paragraph, and keep the register polite.",
  },
  {
    range: "8",
    task: "Write an opinion essay",
    timing: "30 minutes to plan, write and revise",
    criteria: [
      "Whether the opinion is supported with reasons and/or examples",
      "Grammar",
      "Vocabulary",
      "Organisation",
    ],
    advice:
      "Half the section in one task. Spend about 5 minutes planning, 20 writing and 5 checking. Aim for an introduction that states your position, two or three body paragraphs each carrying one supported reason, and a short conclusion. Around 300 words is a solid target.",
  },
];
