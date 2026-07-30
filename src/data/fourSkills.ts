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
  /** True where the real test speaks this prompt aloud rather than printing
   *  it — tasks 5–7, 8–10 and 11. Those get generated TTS audio, which is why
   *  3 seconds of preparation is realistic: you are listening, not reading.
   *  Tasks 1–2 (you read the text) and 3–4 (you look at a photo) are excluded.
   *
   *  Audio comes from `bun run generate:audio`; until that has been run for a
   *  new prompt there is simply no player and the printed text stands in. */
  spoken?: boolean;
  /** Optional reference material shown before the question (tasks 8–10). */
  reference?: { title: string; lines: string[] };
  /** Photo for the describe-a-picture tasks (3–4), sourced from Wikimedia
   *  Commons under a commercial-use-permissive licence.
   *
   *  CC BY / CC BY-SA require attribution naming the author, naming the
   *  licence and linking to it, and linking back to the source — so these are
   *  structured fields rendered as real links, matching the Part 1 photos.
   *
   *  Each `prompt` below is written from what is actually visible in its
   *  photo. Writing the scene first and attaching an image afterwards is what
   *  broke 8 of the 12 Part 1 items previously; don't reintroduce it. */
  image?: {
    src: string;
    /** Short factual alt text describing the photo. */
    alt: string;
    author: string;
    sourceUrl: string;
    licenseName: string;
    licenseUrl: string;
  };
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
    id: "sp-read-2",
    taskRange: "1–2",
    taskName: "Read a text aloud",
    prepSeconds: 45,
    speakSeconds: 45,
    directions:
      "You will read the text aloud. You have 45 seconds to prepare, then 45 seconds to read.",
    prompt:
      "Good afternoon, passengers, and welcome aboard the four fifteen service to Manchester Piccadilly. This train will be calling at Reading, Oxford, Banbury and Birmingham New Street. A buffet car offering hot drinks, sandwiches and snacks is located in coach C, towards the middle of the train. Please keep your luggage with you at all times, and do not leave bags in the aisles or doorways. We expect to arrive in Manchester at approximately seven twenty this evening. Thank you for travelling with us, and we hope you enjoy your journey.",
    checklist: [
      "Did the place names stay clear — Piccadilly, Banbury, Birmingham?",
      "Did you read the times naturally rather than word by word?",
      "Did your pitch rise through the list of stops and fall at the end?",
      "Did you keep an even pace instead of speeding up towards the end?",
    ],
  },
  {
    id: "sp-read-3",
    taskRange: "1–2",
    taskName: "Read a text aloud",
    prepSeconds: 45,
    speakSeconds: 45,
    directions:
      "You will read the text aloud. You have 45 seconds to prepare, then 45 seconds to read.",
    prompt:
      "Are you spending too much of your week on paperwork? At Meridian Business Services, we handle the administration so you can concentrate on your customers. Our team manages invoicing, payroll and expense reporting for more than four hundred small businesses across the region. Setting up takes less than a day, there are no long-term contracts, and your first month is completely free. Visit our website or call our friendly advisers today, and find out how much time you could be getting back.",
    checklist: [
      "Did you sound persuasive rather than flat — this is an advertisement?",
      "Did you stress the selling points: 'less than a day', 'completely free'?",
      "Did the longer middle sentence stay intelligible all the way through?",
      "Did you pause at the commas rather than running the clauses together?",
    ],
  },
  {
    id: "sp-picture-1",
    taskRange: "3–4",
    taskName: "Describe a picture",
    prepSeconds: 45,
    speakSeconds: 30,
    directions:
      "Describe the picture in as much detail as you can. You have 45 seconds to prepare, then 30 seconds to speak.",
    prompt: "Describe what you can see in the photograph above.",
    image: {
      src: "/images/four-skills/picture-meeting.jpg",
      alt: "Four colleagues around a polished wooden conference table, one speaking with both hands raised, laptops and a travel mug on the table",
      author: "Amtec Photos",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Work_Meeting.jpg",
      licenseName: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    },
    checklist: [
      "Did you say where the scene takes place in your first sentence?",
      "Did you use the present continuous for the main actions ('he is explaining', 'she is holding a pen')?",
      "Did you describe more than one person, and what makes them different?",
      "Did you mention what is on the table — laptops, a mug, notepads?",
      "Were you still speaking when the time ran out?",
    ],
  },
  {
    id: "sp-picture-2",
    taskRange: "3–4",
    taskName: "Describe a picture",
    prepSeconds: 45,
    speakSeconds: 30,
    directions:
      "Describe the scene in as much detail as you can. You have 45 seconds to prepare, then 30 seconds to speak.",
    prompt: "Describe what you can see in the photograph above.",
    image: {
      src: "/images/four-skills/picture-market.jpg",
      alt: "A market vendor in an orange shirt standing behind a stall of vegetables, holding the pan of a large dial weighing scale, under bare hanging light bulbs",
      author: "PattayaPatrol",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:DFC_1786_A_market_vendor_in_an_orange_shirt_smiles_as_she_arranges_fresh_produce_under_bright_hanging_lights_at_an_evening_market_stall.jpg",
      licenseName: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    },
    checklist: [
      "Did you establish the setting — a market stall — before describing details?",
      "Did you describe what the vendor is doing, not just what she is wearing?",
      "Did you name specific produce and objects (scales, baskets, crates) rather than saying 'things'?",
      "Did you mention the lighting, which tells you it is an evening market?",
      "Did you move from the foreground to the background rather than jumping around?",
    ],
  },
  {
    id: "sp-picture-3",
    taskRange: "3–4",
    taskName: "Describe a picture",
    prepSeconds: 45,
    speakSeconds: 30,
    directions:
      "Describe the scene in as much detail as you can. You have 45 seconds to prepare, then 30 seconds to speak.",
    prompt: "Describe what you can see in the photograph above.",
    image: {
      src: "/images/four-skills/picture-kitchen.jpg",
      alt: "Three kitchen staff in black uniforms and striped headscarves preparing food behind a counter, with stacked bowls on a shelf overhead and a customer watching from the right",
      author: "PattayaPatrol",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:DZ6_0553_Busy_kitchen_staff_prepare_meals_behind_the_counter_as_a_customer_waits_and_watches.jpg",
      licenseName: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    },
    checklist: [
      "Did you say what kind of place this is and roughly how many people are present?",
      "Did you describe what the staff are doing, not just what they are wearing?",
      "Did you mention the person on the right, who is watching rather than cooking?",
      "Did you use the present continuous throughout for the actions in progress?",
      "Did you fill the full 30 seconds?",
    ],
  },
  {
    id: "sp-questions-1",
    spoken: true,
    taskRange: "5–7",
    taskName: "Respond to questions",
    prepSeconds: 3,
    speakSeconds: 15,
    directions:
      "Imagine a market research company is asking about your habits. You have 3 seconds to prepare, then 15 seconds to respond.",
    prompt:
      "How do you usually travel to work or to your place of study, and why did you choose that method?",
    checklist: [
      "Did you begin speaking almost immediately?",
      "Did you answer both halves of the question — the how and the why?",
      "Did you add a reason or example rather than stopping after one sentence?",
      "Did you get a complete thought out inside 15 seconds without rushing?",
    ],
  },
  {
    id: "sp-questions-2",
    spoken: true,
    taskRange: "5–7",
    taskName: "Respond to questions",
    prepSeconds: 3,
    speakSeconds: 15,
    directions:
      "Imagine a colleague is asking about your working habits. You have 3 seconds to prepare, then 15 seconds to respond.",
    prompt: "What time of day do you concentrate best, and what do you usually work on then?",
    checklist: [
      "Did you start speaking within a second or two?",
      "Did you answer both parts — the when and the what?",
      "Did you get a complete thought out inside 15 seconds without rushing?",
      "Did you avoid filler like 'ummm, let me think' that eats the clock?",
    ],
  },
  {
    id: "sp-questions-3",
    spoken: true,
    taskRange: "5–7",
    taskName: "Respond to questions",
    prepSeconds: 3,
    speakSeconds: 30,
    directions:
      "A researcher is asking about how you use technology. You have 3 seconds to prepare, then 30 seconds to respond.",
    prompt:
      "Do you prefer to shop online or in physical shops, and has that changed in the last few years?",
    checklist: [
      "Did you state a clear preference rather than hedging both ways?",
      "Did you address the 'has that changed' half of the question?",
      "Did you support your preference with a reason or an example?",
      "Did you keep going for the full 30 seconds?",
    ],
  },
  {
    id: "sp-info-1",
    spoken: true,
    taskRange: "8–10",
    taskName: "Respond using information provided",
    prepSeconds: 45,
    speakSeconds: 15,
    directions:
      "Read the schedule below. You have 45 seconds to read and think, then 15 seconds to answer the question.",
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
    id: "sp-info-2",
    spoken: true,
    taskRange: "8–10",
    taskName: "Respond using information provided",
    prepSeconds: 45,
    speakSeconds: 15,
    directions:
      "Read the itinerary below. You have 45 seconds to read and think, then 15 seconds to answer the question.",
    reference: {
      title: "Business trip itinerary — Ms Adeyemi, 8–9 October",
      lines: [
        "Tue 8 Oct  07:40   Depart Bristol Temple Meads (platform 5)",
        "Tue 8 Oct  10:15   Arrive London Paddington",
        "Tue 8 Oct  11:30   Client meeting — Hartwell Group, 12 Cannon Street",
        "Tue 8 Oct  14:00   Site visit — Docklands warehouse (taxi arranged)",
        "Tue 8 Oct  19:00   Dinner with regional team — The Copper Kettle",
        "Overnight          Kingsway Hotel, room booked under Adeyemi",
        "Wed 9 Oct  09:30   Workshop: contract renewals — Hartwell Group",
        "Wed 9 Oct  16:20   Return train to Bristol",
      ],
    },
    prompt:
      "I'm arranging the taxi for the second day. What time does Ms Adeyemi's workshop start, and where is she staying the night before?",
    checklist: [
      "Did you give both the correct time and the correct hotel?",
      "Did you avoid confusing the Tuesday and Wednesday entries?",
      "Did you answer in full sentences rather than reading the lines aloud?",
      "Did you sound confident rather than hesitant while locating the details?",
    ],
  },
  {
    id: "sp-info-3",
    spoken: true,
    taskRange: "8–10",
    taskName: "Respond using information provided",
    prepSeconds: 45,
    speakSeconds: 30,
    directions:
      "Read the programme below. You have 45 seconds to read and think, then 30 seconds to answer the question.",
    reference: {
      title: "Staff training day — Friday 22 November, Lakeside Centre",
      lines: [
        "09:15 – 10:00   Welcome and objectives — Room 1 (all staff)",
        "10:00 – 11:15   Data protection refresher — Room 1 (compulsory)",
        "11:15 – 11:30   Break — foyer",
        "11:30 – 12:45   Choose ONE: Customer service (Room 2) or Spreadsheets (Room 4)",
        "12:45 – 13:45   Lunch — not provided, cafés nearby",
        "13:45 – 15:15   First aid certification — Room 3 (sign up in advance)",
        "15:15 – 15:45   Feedback and close — Room 1",
      ],
    },
    prompt:
      "I can only come in the morning. Which sessions would I have to attend, and is there anything I need to do beforehand?",
    checklist: [
      "Did you identify the compulsory morning session correctly?",
      "Did you mention that one of the 11:30 sessions is a choice between two?",
      "Did you correctly note that the advance sign-up applies to the afternoon first aid session?",
      "Did you organise your answer rather than listing the programme in order?",
    ],
  },
  {
    id: "sp-opinion-1",
    spoken: true,
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
  {
    id: "sp-opinion-2",
    spoken: true,
    taskRange: "11",
    taskName: "Express an opinion",
    prepSeconds: 15,
    speakSeconds: 60,
    directions:
      "State your opinion and support it. You have 15 seconds to prepare, then 60 seconds to speak.",
    prompt:
      "Some employers have replaced individual offices with fully open-plan workspaces. Do you think open-plan offices help or harm productivity? Give reasons and examples to support your opinion.",
    checklist: [
      "Did you commit to 'help' or 'harm' in your opening sentence?",
      "Did you give two separate reasons rather than restating one?",
      "Did you include a concrete example from work or study?",
      "Did you acknowledge and answer the opposing view rather than ignoring it?",
      "Did you finish with a conclusion inside the 60 seconds?",
    ],
  },
  {
    id: "sp-opinion-3",
    spoken: true,
    taskRange: "11",
    taskName: "Express an opinion",
    prepSeconds: 15,
    speakSeconds: 60,
    directions:
      "State your opinion and support it. You have 15 seconds to prepare, then 60 seconds to speak.",
    prompt:
      "Which is more valuable for a young person starting a career: further academic study, or two years of practical work experience? Explain your choice with reasons and examples.",
    checklist: [
      "Did you choose one option clearly instead of saying both are valuable?",
      "Did you explain why your choice beats the alternative, not just why it is good?",
      "Did you use a specific example to make one reason concrete?",
      "Did your answer have a recognisable beginning, middle and end?",
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
  /** Tasks 1–5 share ONE clock across all five sentences, freely revisited —
   *  a genuinely different timing model from every other Writing task, which
   *  is timed individually with no going back. `WritingTrainer` branches on
   *  this flag to run a shared-pool countdown instead of a per-prompt one. */
  pooled?: boolean;
}

export const writingPrompts: WritingPrompt[] = [
  {
    id: "wr-sentence-1",
    taskRange: "1–5",
    taskName: "Write a sentence based on a picture",
    minutes: 2,
    pooled: true,
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
    id: "wr-sentence-2",
    taskRange: "1–5",
    taskName: "Write a sentence based on a picture",
    minutes: 2,
    pooled: true,
    directions:
      "Write ONE sentence about the picture using both words below. You may change the form of the words and use them in any order.",
    prompt:
      "Picture: a woman sitting at a kitchen table with a laptop open in front of her. She is holding a mug in one hand and looking at the screen. A notebook and a pair of glasses are on the table beside her.",
    requiredWords: ["while", "coffee"],
    checklist: [
      "Did you use both words, in any form?",
      "Is it exactly one sentence?",
      "Does 'while' actually join two simultaneous actions?",
      "Is the grammar accurate — tense, articles, subject–verb agreement?",
    ],
    model: "She is drinking coffee while she works on her laptop at the kitchen table.",
  },
  {
    id: "wr-sentence-3",
    taskRange: "1–5",
    taskName: "Write a sentence based on a picture",
    minutes: 2,
    pooled: true,
    directions:
      "Write ONE sentence about the picture using both words below. You may change the form of the words and use them in any order.",
    prompt:
      "Picture: a mechanic in blue overalls kneeling beside a car with its bonnet raised. A toolbox is open on the ground next to him and a spanner is in his right hand. Another car is waiting behind him in the garage.",
    requiredWords: ["repair", "although"],
    checklist: [
      "Did you use both words, in any form?",
      "Is it exactly one sentence?",
      "Does 'although' introduce a genuine contrast rather than just being inserted?",
      "Is the grammar accurate — tense, articles, subject–verb agreement?",
    ],
    model:
      "Although the mechanic is still repairing the first car, another one is already waiting behind him.",
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
    id: "wr-request-2",
    taskRange: "6–7",
    taskName: "Respond to a written request",
    minutes: 10,
    directions:
      "Read the email below and reply to it. Your response must do all three things listed in the directions.",
    prompt:
      "From: Customer Services, Brightfield Supplies\nSubject: Your order #48120\n\nDear customer,\n\nThank you for your recent order. Unfortunately, two of the items you requested — the A3 laminator and the box of archive folders — are currently out of stock. We expect the laminator to be available in approximately three weeks. The archive folders have been discontinued by the manufacturer.\n\nPlease let us know how you would like to proceed.\n\nKind regards,\nCustomer Services\n\nDIRECTIONS: Reply as the customer. In your email, ask ONE question about the delay, make ONE request regarding the discontinued item, and explain ONE consequence the delay will cause you.",
    targetWords: "roughly 100–130 words",
    checklist: [
      "Did you include all three required elements — a question, a request and a consequence?",
      "Did you keep the two out-of-stock items distinct in your reply?",
      "Did you open and close the email appropriately?",
      "Is the tone firm but still polite?",
    ],
    model:
      "Dear Customer Services,\n\nThank you for letting me know about the problems with order #48120.\n\nCould you confirm whether the three-week estimate for the A3 laminator is guaranteed, or whether it might be delayed further? I would prefer to know now rather than wait indefinitely.\n\nRegarding the archive folders, as these have been discontinued, I would be grateful if you could recommend an equivalent product and send me the price so that I can order it instead.\n\nI should mention that the delay is a real difficulty for us. We are preparing files for an audit at the end of this month, and without the laminator and the folders we will have to hire equipment locally at additional cost.\n\nI look forward to your reply.\n\nKind regards,\nJordan Vale",
  },
  {
    id: "wr-request-3",
    taskRange: "6–7",
    taskName: "Respond to a written request",
    minutes: 10,
    directions:
      "Read the email below and reply to it. Your response must do all three things listed in the directions.",
    prompt:
      "From: Elena Marchetti, Learning & Development\nSubject: Optional presentation skills course\n\nHello,\n\nWe are running a two-day presentation skills course on 14–15 May at our head office. The course is optional and places are limited to twelve people. It covers structuring a talk, handling questions, and using visual aids effectively.\n\nIf you would like a place, please reply and tell us what you hope to gain from it.\n\nBest wishes,\nElena\n\nDIRECTIONS: Reply as an employee who wants a place. In your email, accept the invitation, explain TWO things you hope to gain, and ask ONE question about the practical arrangements.",
    targetWords: "roughly 100–130 words",
    checklist: [
      "Did you clearly accept, rather than only expressing interest?",
      "Did you give two distinct things you hope to gain, not one restated?",
      "Did you ask a genuinely practical question — travel, times, materials?",
      "Did you vary your sentence structures across the reply?",
    ],
    model:
      "Dear Elena,\n\nThank you for the invitation. I would very much like to take one of the places on the course in May.\n\nThere are two things in particular I hope to gain. The first is confidence in handling questions: I present monthly figures to our regional managers and I find the discussion afterwards much harder than the talk itself. The second is practical guidance on visual aids, as my slides tend to be far too dense to read from the back of a room.\n\nCould you tell me whether the sessions run for the full working day on both dates? I need to arrange cover for my own team if so.\n\nBest wishes,\nRuth Kavanagh",
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
  {
    id: "wr-essay-2",
    taskRange: "8",
    taskName: "Write an opinion essay",
    minutes: 30,
    directions:
      "Write an essay stating your opinion. Support it with reasons and examples. You have 30 minutes to plan, write and revise.",
    prompt:
      "Some companies now allow employees to choose entirely where they work, with no requirement to attend an office. Do you think companies should require employees to work in person for part of the week? Use specific reasons and examples to support your answer.",
    targetWords: "around 300 words",
    checklist: [
      "Does your introduction state your position unambiguously?",
      "Does each body paragraph carry one reason, supported by an example?",
      "Did you address the strongest argument against your position?",
      "Did you use linking words to connect your ideas?",
      "Did you leave time to check tenses, articles and plurals?",
    ],
    model:
      "I believe companies should require employees to attend in person for part of each week, though the requirement should be modest — one or two days rather than four.\n\nMy main reason is that some kinds of work are far harder at a distance. Solving an ambiguous problem, negotiating a disagreement, or teaching a new colleague all depend on the unplanned conversation, and a scheduled video call is a poor substitute. In my own team, a pricing dispute that had circled by email for a fortnight was settled in twenty minutes once three of us were in the same room.\n\nThe second reason concerns people early in their careers. New employees learn a great deal by overhearing how experienced colleagues handle a difficult client or explain a decision. A fully remote arrangement removes that entirely, and the cost falls hardest on exactly the people least able to ask for what they are missing.\n\nThe strongest objection is that mandatory attendance ignores individual circumstances — carers, people with long commutes, and those who simply concentrate better at home. This is a serious point, and it is why I would argue for a light requirement rather than a return to five days. A policy of two fixed days keeps the collaborative benefits while leaving most of the week flexible.\n\nOverall, I think the evidence points to a middle position. Fully remote work sacrifices something real in mentoring and problem-solving, but a full return to the office sacrifices flexibility that employees now reasonably expect. A small, predictable in-person requirement captures most of the benefit of both.",
  },
  {
    id: "wr-essay-3",
    taskRange: "8",
    taskName: "Write an opinion essay",
    minutes: 30,
    directions:
      "Write an essay stating your opinion. Support it with reasons and examples. You have 30 minutes to plan, write and revise.",
    prompt:
      "Some people believe employers should pay for their staff to learn new skills, even skills not directly needed for their current job. Others believe training should be the employee's own responsibility. Which view do you agree with? Use specific reasons and examples to support your answer.",
    targetWords: "around 300 words",
    checklist: [
      "Did you pick one side rather than describing both views neutrally?",
      "Does each body paragraph develop a single reason?",
      "Are your examples specific rather than general claims?",
      "Does the conclusion restate your position without adding a new argument?",
      "Did you check for repeated vocabulary you could vary?",
    ],
    model:
      "I agree that employers should fund training for their staff, including skills that go beyond the immediate demands of the job.\n\nThe first reason is straightforward self-interest. Roles change faster than they used to, and an employer who only trains people for the job they hold today will eventually find that nobody is equipped for the job the company needs tomorrow. A retailer that taught its shop managers nothing about online sales spent years hiring expensive outside specialists for work its own staff could have done.\n\nSecond, funded training is one of the cheapest ways to keep good people. Employees who can see themselves developing are markedly less likely to leave, and replacing a skilled colleague costs far more than a course does. A former manager of mine approved a data analysis qualification for a colleague who had no immediate need for it; she stayed another six years and eventually led the team that used exactly those skills.\n\nThose who argue training is a personal responsibility do have a point about motivation: a course nobody chose and nobody wants is money wasted. But this argues for letting employees select their own training, not for withdrawing funding altogether. The answer to poor take-up is genuine choice, not a smaller budget.\n\nIn conclusion, I believe employers should pay for training, and should be relaxed about whether every skill has an obvious immediate use. The organisation gains adaptability, it retains experienced staff, and the cost is small set against the alternative of constantly recruiting from outside.",
  },
];
