/** Reference data for the TOEIC 4-Skills exam (Listening, Reading, Speaking
 *  and Writing in a single sitting).
 *
 *  Formats, timings and evaluation criteria below are the published exam
 *  specification. The 4-Skills test is only offered with the Multistage
 *  Adaptive versions of the Listening and Reading sections, which is why the
 *  question counts here differ from the linear L&R test covered in
 *  /listening-reading (100 questions per section).
 *
 *  Practice prompts are written for this site — they follow the official task
 *  formats but are not reproductions of real exam material.
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

/** Speaking drills. `prepSeconds` / `speakSeconds` mirror the real task
 *  timings so practice runs under genuine exam pressure. */
export interface SpeakingPrompt {
  id: string;
  taskRange: string;
  taskName: string;
  prepSeconds: number;
  speakSeconds: number;
  directions: string;
  /** Read-aloud text, picture description, or the question itself. */
  prompt: string;
  /** Optional reference material shown before the question (tasks 8–10). */
  reference?: { title: string; lines: string[] };
  checklist: string[];
}

export const speakingPrompts: SpeakingPrompt[] = [
  {
    id: "sp-read-1",
    taskRange: "1–2",
    taskName: "Read a text aloud",
    prepSeconds: 45,
    speakSeconds: 45,
    directions:
      "You will read the text aloud. You have 45 seconds to prepare, then 45 seconds to read.",
    prompt:
      "Thank you for calling the Northside Community Library. Our opening hours have recently changed. We are now open from nine in the morning until eight in the evening, Monday through Friday, and from ten until five at the weekend. Members can renew borrowed items over the phone, online, or at any of the self-service machines in the main entrance hall. If you would like to speak with a member of our staff, please stay on the line and the next available assistant will be with you shortly.",
    checklist: [
      "Did every word stay intelligible, including 'renew', 'available' and 'self-service'?",
      "Did your pitch rise on the list of hours and fall at the end of each sentence?",
      "Did you pause at the commas instead of running clauses together?",
      "Did you finish the whole text within the time?",
    ],
  },
  {
    id: "sp-picture-1",
    taskRange: "3–4",
    taskName: "Describe a picture",
    prepSeconds: 45,
    speakSeconds: 30,
    directions:
      "Describe the scene in as much detail as you can. You have 45 seconds to prepare, then 30 seconds to speak.",
    prompt:
      "Picture to describe: a busy hospital reception area. A nurse in blue scrubs stands behind a curved counter, handing a clipboard to an elderly man who is leaning on a walking stick. Four people sit in a row of chairs along the wall behind him — one is reading a leaflet, another is looking at her phone. A large sign reading 'Outpatients' hangs above a corridor on the right, and a cleaning trolley has been left beside a potted plant.",
    checklist: [
      "Did you say where the scene takes place in your first sentence?",
      "Did you use the present continuous for the main actions ('she is handing', 'he is leaning')?",
      "Did you cover more than one person or area, not just the closest detail?",
      "Were you still speaking when the time ran out?",
    ],
  },
  {
    id: "sp-questions-1",
    taskRange: "5–7",
    taskName: "Respond to questions",
    prepSeconds: 3,
    speakSeconds: 30,
    directions:
      "Imagine a market research company is asking about your habits. You have 3 seconds to prepare, then 30 seconds to respond.",
    prompt:
      "How do you usually travel to work or to your place of study, and why did you choose that method?",
    checklist: [
      "Did you begin speaking almost immediately?",
      "Did you answer both halves of the question — the how and the why?",
      "Did you add a reason or example rather than stopping after one sentence?",
      "Did you use the full 30 seconds?",
    ],
  },
  {
    id: "sp-info-1",
    taskRange: "8–10",
    taskName: "Respond using information provided",
    prepSeconds: 45,
    speakSeconds: 30,
    directions:
      "Read the schedule below. You have 45 seconds to read, then 3 seconds to prepare and 30 seconds to answer the question.",
    reference: {
      title: "Regional Sales Workshop — Thursday 14 March, Room B2",
      lines: [
        "09:00 – 09:30   Registration and coffee",
        "09:30 – 10:45   Opening session: reviewing last quarter — Dana Whitfield",
        "10:45 – 11:00   Break",
        "11:00 – 12:30   Workshop: handling objections — Marc Oyelaran",
        "12:30 – 13:30   Lunch (Riverside Room)",
        "13:30 – 15:00   Workshop: pricing conversations — Dana Whitfield",
        "15:00 – 15:30   Closing remarks and questions",
      ],
    },
    prompt:
      "I missed the email with the details. Who is running the afternoon workshops, and what time does the day finish?",
    checklist: [
      "Did you give the correct name and the correct finishing time?",
      "Did you answer both parts of the question?",
      "Did you speak in full sentences rather than reading the schedule out flatly?",
      "Did you avoid long pauses while searching the text?",
    ],
  },
  {
    id: "sp-opinion-1",
    taskRange: "11",
    taskName: "Express an opinion",
    prepSeconds: 15,
    speakSeconds: 60,
    directions:
      "State your opinion and support it. You have 15 seconds to prepare, then 60 seconds to speak.",
    prompt:
      "Some companies now expect employees to be reachable by phone or email outside working hours. Do you think this is acceptable? Give reasons and examples to support your opinion.",
    checklist: [
      "Did you state your position clearly in the first sentence?",
      "Did you give at least two distinct reasons?",
      "Did you support each reason with a concrete example?",
      "Did you reach a conclusion instead of trailing off when time ran out?",
    ],
  },
];

export interface WritingPrompt {
  id: string;
  taskRange: string;
  taskName: string;
  minutes: number;
  directions: string;
  prompt: string;
  /** Tasks 1–5 supply two words that must both appear in the sentence. */
  requiredWords?: [string, string];
  targetWords?: string;
  checklist: string[];
  model: string;
}

export const writingPrompts: WritingPrompt[] = [
  {
    id: "wr-sentence-1",
    taskRange: "1–5",
    taskName: "Write a sentence based on a picture",
    minutes: 2,
    directions:
      "Write ONE sentence about the picture using both words below. You may change the form of the words and use them in any order.",
    prompt:
      "Picture: two warehouse workers in high-visibility vests are lifting a heavy cardboard box onto a metal shelf. A forklift is parked behind them.",
    requiredWords: ["lift", "because"],
    checklist: [
      "Did you use both words, in any form?",
      "Is it exactly one sentence?",
      "Does the sentence clearly relate to the picture?",
      "Is the grammar accurate — tense, articles, subject–verb agreement?",
    ],
    model:
      "The two workers are lifting the box together because it is too heavy for one person to carry.",
  },
  {
    id: "wr-request-1",
    taskRange: "6–7",
    taskName: "Respond to a written request",
    minutes: 10,
    directions:
      "Read the email below and reply to it. Your response must do all three things listed in the directions.",
    prompt:
      "From: Priya Raghunathan, Office Manager\nSubject: Desk move next Friday\n\nDear colleague,\n\nAs part of the refurbishment of the second floor, your team will be relocated to the east wing on Friday 21 June. You will need to empty your desk by Thursday evening. Boxes and labels will be available from the print room from Monday.\n\nIf you have any questions or particular requirements, please let me know by the end of this week.\n\nBest regards,\nPriya\n\nDIRECTIONS: Reply as an employee. In your email, ask ONE question about the move, make ONE request about your new desk, and state ONE problem with the proposed date.",
    targetWords: "roughly 100–130 words",
    checklist: [
      "Did you include all three required elements — a question, a request and a problem?",
      "Did you open and close the email appropriately?",
      "Did you vary your sentence structures rather than repeating one pattern?",
      "Is the register polite and professional throughout?",
    ],
    model:
      "Dear Priya,\n\nThank you for letting us know about the move to the east wing.\n\nCould you tell me whether the IT team will be reconnecting our monitors and docking stations, or whether we are expected to do this ourselves? I would also be grateful if my new desk could be positioned away from the main walkway, as I take a large number of client calls and the corridor noise carries.\n\nOne difficulty is the date itself. I am scheduled to run a training session for new starters all day on Friday 21 June, so I would not be able to unpack until the following Monday. Would it be possible for my boxes to be moved on the Thursday evening instead?\n\nBest regards,\nSam Okonkwo",
  },
  {
    id: "wr-essay-1",
    taskRange: "8",
    taskName: "Write an opinion essay",
    minutes: 30,
    directions:
      "Write an essay stating your opinion. Support it with reasons and examples. You have 30 minutes to plan, write and revise.",
    prompt:
      "Many organisations have replaced their annual performance review with short, frequent check-ins between managers and their staff. Do you think frequent check-ins are a better way to manage performance than an annual review? Use specific reasons and examples to support your answer.",
    targetWords: "around 300 words",
    checklist: [
      "Does your introduction state your position unambiguously?",
      "Does each body paragraph carry one reason, supported by an example?",
      "Did you use linking words to connect your ideas?",
      "Did you leave time to check tenses, articles and plurals?",
      "Does the conclusion restate your position rather than adding a new argument?",
    ],
    model:
      "In my view, frequent check-ins are a considerably more effective way of managing performance than a single annual review, although they place greater demands on managers.\n\nThe strongest argument for regular check-ins is that feedback arrives while it can still change something. If an employee is approaching a project in the wrong way in February, being told so in December helps nobody. In my previous team, a colleague spent several months building reports that our clients never opened; a short monthly conversation would have surfaced that in weeks rather than at the end of the year.\n\nFrequent conversations also produce a fairer assessment. Annual reviews are vulnerable to recency bias, because managers remember the last two months far better than the first ten. A manager who has recorded twelve short discussions has evidence to draw on, rather than an impression formed in the final quarter.\n\nThere is a reasonable objection: check-ins consume management time, and a poorly run one becomes a status update that helps nobody. This is a genuine risk, but it is an argument for training managers properly, not for returning to a single annual meeting.\n\nOn balance, I believe organisations should favour regular check-ins. They correct problems early, they reduce bias, and they treat performance as something developed continuously rather than judged once a year.",
  },
];
