export type TipCategory = "Listening & Reading" | "Speaking & Writing" | "Strategy";

export interface TipSection {
  heading: string;
  body?: string;
  points?: string[];
}

export interface StudyTip {
  slug: string;
  title: string;
  category: TipCategory;
  readTime: string;
  summary: string;
  sections: TipSection[];
}

export const studyTips: StudyTip[] = [
  {
    slug: "listening-parts-1-4",
    title: "Listening Parts 1–4: tactics that actually move your score",
    category: "Listening & Reading",
    readTime: "6 min",
    summary:
      "Part-by-part tactics for Photographs, Question–Response, Conversations, and Short Talks — including what to do in the seconds before the audio starts.",
    sections: [
      {
        heading: "Part 1 — Photographs (6 questions)",
        points: [
          "Scan the photo before the audio: note people, actions, objects, and location.",
          "Listen for the verb tense. Many wrong options describe a plausible scene but the wrong action ('is being repaired' vs 'is being used').",
          "Beware similar-sounding traps: 'copy / coffee', 'walk / work'. The test exploits these on purpose.",
          "Passive voice with present continuous ('is being...') usually requires a person actively doing the action in the photo. If no one is doing it, the option is likely wrong.",
        ],
      },
      {
        heading: "Part 2 — Question–Response (25 questions)",
        points: [
          "Lock onto the first word: When, Where, Who, Why, How, or a yes/no auxiliary. It tells you the answer type before you hear the options.",
          "Wh- questions almost never take a 'Yes/No' answer — eliminate those immediately.",
          "Watch for indirect answers. 'When does the meeting start?' → 'Didn't you get the email?' is correct and common at higher levels.",
          "Reject options that repeat or echo a word from the question — that repetition is usually a trap.",
        ],
      },
      {
        heading: "Part 3 — Conversations (39 questions)",
        points: [
          "Read the three questions before the audio plays. They tell you what to listen for.",
          "The three questions follow the order of the conversation, so answer in sequence as you hear each detail.",
          "Listen for the gist first (who, where, what about), then the specific detail in question 2, then any 'what will the speaker do next' inference in question 3.",
          "New conversations include a graphic in some questions — match what you hear to the table/chart, not just the words.",
        ],
      },
      {
        heading: "Part 4 — Short Talks (30 questions)",
        points: [
          "Identify the format fast: voicemail, announcement, advertisement, or tour. The format predicts the questions.",
          "The purpose is usually stated in the first sentence; the action item or contact detail is usually near the end.",
          "Numbers, dates, and times are favorite question targets — flag them as you hear them.",
        ],
      },
      {
        heading: "The 8-second habit",
        body: "While the directions for each part are read aloud, you already know them — use that time to preview questions ahead. Never listen to the directions; read forward instead. This single habit is worth several points across the section.",
      },
    ],
  },
  {
    slug: "reading-parts-5-7",
    title: "Reading Parts 5–7: speed without sacrificing accuracy",
    category: "Listening & Reading",
    readTime: "6 min",
    summary:
      "How to handle grammar questions in seconds, manage text completion, and survive the long double- and triple-passage sets in Part 7.",
    sections: [
      {
        heading: "Part 5 — Incomplete Sentences (30 questions)",
        points: [
          "Look at the four options first. If they're forms of the same word (formal / formally / formality / formalize), it's a word-form question — find the slot's role (noun, verb, adjective, adverb) and pick by grammar alone, no need to read the whole sentence.",
          "If the options are different words, it's vocabulary — then you must read for meaning.",
          "Target: about 20–25 seconds per question. Don't let grammar items eat time you need for Part 7.",
        ],
      },
      {
        heading: "Part 6 — Text Completion (16 questions)",
        points: [
          "Four short passages, four blanks each. One blank per passage is a full sentence-insertion question — read the sentences before and after to test the flow.",
          "Treat the others like Part 5, but always check the surrounding sentence for tense and logic clues.",
        ],
      },
      {
        heading: "Part 7 — Reading Comprehension (54 questions)",
        points: [
          "Read the questions before the passage so you know what you're hunting for.",
          "Single passages first, then double, then triple — but the questions get harder, not just longer.",
          "For multi-passage sets, the answer to at least one question requires combining information from two different texts. Watch for it.",
          "Skim for keywords and synonyms; the answer rarely uses the exact words from the passage.",
          "'NOT / EXCEPT' questions: verify each option against the text. Slower, but these are easy points if you don't rush.",
        ],
      },
      {
        heading: "If you're running out of time",
        body: "Never leave blanks — there's no penalty for wrong answers on the TOEIC, so guess on everything you can't reach. Pick a single 'letter of the day' for pure guesses to save seconds.",
      },
    ],
  },
  {
    slug: "timing-and-pacing",
    title: "Timing and pacing: never run out of time again",
    category: "Strategy",
    readTime: "4 min",
    summary:
      "A concrete pacing plan for the 75-minute Reading section, where most test-takers lose points simply by running out of clock.",
    sections: [
      {
        heading: "Why pacing matters",
        body: "Listening is externally paced — the audio moves you along. Reading is self-paced, and that's where scores leak. Most people spend too long on Part 5 grammar and never finish Part 7, leaving easy points unanswered.",
      },
      {
        heading: "A target split for 75 minutes",
        points: [
          "Part 5 (30 questions): about 10–12 minutes. Move fast; these are short.",
          "Part 6 (16 questions): about 8–10 minutes.",
          "Part 7 (54 questions): the remaining 50-plus minutes. This is where the points are.",
          "Roughly one minute per single-passage question; budget a little more for multi-passage sets.",
        ],
      },
      {
        heading: "Checkpoints",
        points: [
          "By the 20-minute mark you should be into Part 7.",
          "With 10 minutes left, glance at how many questions remain and start guessing on anything you can't finish carefully.",
          "Fill in every bubble before time is called — blanks score zero, guesses don't.",
        ],
      },
    ],
  },
  {
    slug: "score-bands-explained",
    title: "Score bands explained: what 600, 785, and 900 actually mean",
    category: "Strategy",
    readTime: "4 min",
    summary:
      "How the 10–990 scale works, the CEFR levels it maps to, and the thresholds employers tend to care about.",
    sections: [
      {
        heading: "How the scale works",
        body: "TOEIC Listening & Reading is scored from 10 to 990, combining two section scores of 5–495 each. It's a scaled score, not a percentage — your raw correct count is converted using a formula that adjusts for form difficulty, so two test versions stay comparable.",
      },
      {
        heading: "Approximate CEFR mapping",
        points: [
          "Around 550 ≈ B1 (independent user, can handle routine work communication).",
          "Around 785 ≈ B2 (can operate effectively in most professional situations).",
          "Around 945 ≈ C1 (near-native operational command).",
          "These are approximate concordance points, not hard cutoffs.",
        ],
      },
      {
        heading: "Thresholds employers commonly use",
        points: [
          "600: a frequent baseline for customer-facing or coordination roles.",
          "700–785: often required for international or management-track positions.",
          "860+: treated as a strong, standout score in most hiring contexts.",
          "Always check the specific number your target employer or program asks for — requirements vary widely by country and industry.",
        ],
      },
    ],
  },
  {
    slug: "common-traps",
    title: "Common traps and how to sidestep them",
    category: "Strategy",
    readTime: "5 min",
    summary:
      "The recurring tricks the TOEIC uses to separate score bands — sound-alikes, word echoes, partial truths, and tense mismatches.",
    sections: [
      {
        heading: "Sound-alike distractors",
        body: "Especially in Listening Parts 1–2, wrong options use words that sound like the audio but mean something different (work/walk, copy/coffee, fund/found). Hearing a familiar sound is not the same as hearing the answer.",
      },
      {
        heading: "Word-repetition traps",
        body: "If an answer option repeats a distinctive word you just heard or read, be suspicious. Correct answers usually paraphrase rather than echo.",
      },
      {
        heading: "Partially-true options",
        body: "In Reading Part 7, an option may be true according to the passage but not answer the question asked. Re-read the question stem before committing.",
      },
      {
        heading: "Tense and voice mismatches",
        points: [
          "Part 1: 'is being [verb]ed' needs a person actively performing the action in the photo.",
          "Part 5: word-form questions hinge on the grammatical slot, not meaning — don't get distracted by a tempting vocabulary match.",
        ],
      },
      {
        heading: "Over-thinking yes/no questions",
        body: "In Part 2, indirect answers are correct more often at higher difficulty. 'Can you finish by Friday?' → 'I'll have to check my schedule' is a complete, correct answer.",
      },
    ],
  },
  {
    slug: "four-week-plan",
    title: "A 4-week study plan that fits a working schedule",
    category: "Strategy",
    readTime: "5 min",
    summary:
      "A realistic week-by-week plan to lift your score in a month, assuming about an hour a day.",
    sections: [
      {
        heading: "Week 1 — Diagnose and learn the format",
        points: [
          "Take one full practice test under time to get a baseline and find your weakest parts.",
          "Study the structure of all seven parts so nothing surprises you on test day.",
          "Start a vocabulary habit: 15–20 new business terms a day using the Business Lexicon.",
        ],
      },
      {
        heading: "Week 2 — Attack listening",
        points: [
          "Drill Parts 3 and 4 daily — they carry the most listening questions.",
          "Practice the preview habit: read questions before the audio every time.",
          "Re-listen to anything you miss with the transcript, then without it.",
        ],
      },
      {
        heading: "Week 3 — Attack reading and pacing",
        points: [
          "Time every Part 5 set; push toward 20–25 seconds per question.",
          "Do full Part 7 passages against the clock to build reading stamina.",
          "Practice guessing strategy so unfinished questions never cost you blanks.",
        ],
      },
      {
        heading: "Week 4 — Simulate and refine",
        points: [
          "Take two full timed tests to lock in pacing.",
          "Review only your error patterns — the trap types you fall for most.",
          "Taper the day before: light vocabulary review, rest, and an early night.",
        ],
      },
    ],
  },
  {
    slug: "speaking-tasks-1-11",
    title: "Speaking tasks 1–11: what each one actually rewards",
    category: "Speaking & Writing",
    readTime: "7 min",
    summary:
      "The eleven Speaking tasks are marked on cumulative criteria — task 1 only judges how you sound, task 11 judges everything. Here is what each group is really testing, and how long you get.",
    sections: [
      {
        heading: "Read the criteria before you practise",
        body: "The evaluation criteria stack. Tasks 1–2 are scored on pronunciation and intonation alone — the words are given to you, so content cannot be marked. Tasks 3–4 add grammar, vocabulary and cohesion. Tasks 5–7 add relevance and completeness of content. Tasks 8–11 are judged on all of it. Knowing which layer is being added tells you what to fix first: there is no point polishing your argument structure for task 2, and no point relying on a good accent in task 11.",
      },
      {
        heading: "Tasks 1–2 — Read a text aloud (45s prepare, 45s read)",
        points: [
          "You cannot lose marks for content here, so the entire job is delivery. Use the preparation time to mark your pauses and decide which words carry the stress.",
          "Read at a steady pace. Rushing to finish early gains nothing, and swallowed word endings cost you on pronunciation.",
          "Let your pitch rise through a list and fall at the end of a sentence — flat delivery is explicitly marked down under intonation and stress.",
          "If you stumble on a word, carry on. Stopping to restart costs more than the original slip.",
        ],
      },
      {
        heading: "Tasks 3–4 — Describe a picture (45s prepare, 30s speak)",
        points: [
          "Thirty seconds is shorter than it sounds. Have a fixed opening ready: where the scene is, then who is in it.",
          "Use the present continuous for the main actions — 'she is handing him a form', not 'she hands him a form'.",
          "Cover two or three areas of the image rather than exhausting one detail. Breadth reads as fluency; a single over-described object does not.",
          "Keep talking until you are cut off. An unfinished sentence scores better than five seconds of silence.",
        ],
      },
      {
        heading: "Tasks 5–7 — Respond to questions (3s prepare, then 15s, 15s and 30s)",
        points: [
          "Three seconds is not planning time. Practise answering on instinct, because you cannot script anything at this speed.",
          "Answer every part of the question. 'How do you travel to work and why?' is two questions, and completeness of content is a marked criterion here.",
          "Task 7 gives you double the time of tasks 5 and 6 — that is a signal to expand with a reason or an example, not to repeat yourself.",
        ],
      },
      {
        heading: "Tasks 8–10 — Respond using information provided (45s to read, then 3s prepare)",
        points: [
          "You are given something like a schedule, agenda or itinerary, and 45 seconds to read it before the questions start.",
          "Spend that time locating times, names, room numbers and prices. Those are almost always what you are asked for.",
          "Tasks 8 and 9 give you 15 seconds each; task 10 gives you 30 and is played twice, so it is usually the multi-part one.",
          "Answer in full sentences. Reading entries out flatly is not the same as reporting the information.",
        ],
      },
      {
        heading: "Task 11 — Express an opinion (15s prepare, 60s speak)",
        points: [
          "The longest response on the test, and the one where structure shows most.",
          "State your position in the first sentence. Do not build up to it — the rater needs to hear a clear stance.",
          "Two reasons, each with a concrete example, comfortably fills 60 seconds.",
          "A clear position you actually support scores better than a balanced survey you never resolve.",
        ],
      },
      {
        heading: "One practical thing on test day",
        body: "A timer is displayed on screen throughout. If you cannot see it, scroll down — it sits at the bottom of the page on some layouts. Knowing where it is before you start is worth more than it sounds when you have 30 seconds to fill.",
      },
    ],
  },
  {
    slug: "writing-tasks-1-8",
    title: "Writing tasks 1–8: from picture sentences to the opinion essay",
    category: "Speaking & Writing",
    readTime: "7 min",
    summary:
      "Sixty minutes, eight tasks, and half the clock belongs to the last one. How to budget the Writing section and what each task is marked on.",
    sections: [
      {
        heading: "Know where the time goes",
        body: "The 60 minutes are not evenly divided. Tasks 1–5 share a single 8-minute block between them. Tasks 6 and 7 get 10 minutes each. Task 8 — one essay — gets 30 minutes on its own. That means half the section rests on a single piece of writing, and the five picture sentences that look like the bulk of the section are actually the smallest part of it.",
      },
      {
        heading: "Tasks 1–5 — Write a sentence based on a picture (8 minutes for all five)",
        points: [
          "You get a picture and two words. Both must appear in your sentence, but you may change their form and use them in any order.",
          "Only grammar and relevance to the picture are marked. Ambition is not rewarded — an accurate simple sentence beats a complex one that breaks.",
          "That is roughly 90 seconds each. If one picture stalls you, move on and come back; these five share one clock, so you can navigate between them.",
          "Check the small things before you leave each item: articles, plurals, subject–verb agreement. That is precisely what is being marked.",
        ],
      },
      {
        heading: "Tasks 6–7 — Respond to a written request (10 minutes each)",
        points: [
          "Usually an email. The directions state exactly what your reply must contain — very often three specific things.",
          "Missing one of those required elements costs you more than any grammar slip, so read the directions twice and tick them off.",
          "Marked on quality and variety of your sentences, vocabulary, and organisation — so vary your structures instead of repeating one pattern.",
          "Keep the register polite and professional. Open and close it as a real email.",
          "Unlike tasks 1–5, these are timed individually and you cannot return to them once you move on.",
        ],
      },
      {
        heading: "Task 8 — Write an opinion essay (30 minutes)",
        points: [
          "Budget roughly 5 minutes planning, 20 writing, 5 checking. The checking pass is where easy marks live.",
          "Marked on whether your opinion is genuinely supported with reasons and/or examples, plus grammar, vocabulary and organisation.",
          "Structure: an introduction that states your position, two or three body paragraphs each carrying one supported reason, and a short conclusion.",
          "Around 300 words is a solid target. Length alone earns nothing, but a developed argument is hard to make in much less.",
          "Address the question that was asked. A well-written essay on an adjacent topic loses on relevance.",
        ],
      },
      {
        heading: "The on-screen tools are not your normal editor",
        points: [
          "Keyboard shortcuts are disabled. Ctrl+C and Ctrl+V do nothing — use the Cut, Copy, Paste, Undo and Redo buttons above the text box.",
          "Those tools only work within the task currently on screen. You cannot move text between items.",
          "A live word count sits in the upper right of the text box, and the timer in the upper right of the screen. Clicking the timer hides it; clicking the clock icon brings it back.",
          "Depending on the centre's equipment you may be given an AZERTY or a QWERTY keyboard. If you touch-type on one, confirm which you will get before you book.",
        ],
      },
    ],
  },
  {
    slug: "four-skills-format",
    title: "The 4-Skills format: what changes when all four are tested at once",
    category: "Strategy",
    readTime: "5 min",
    summary:
      "The 4-Skills test is not the Listening & Reading test with two sections bolted on. It uses the adaptive format, which changes how the opening questions matter.",
    sections: [
      {
        heading: "What the test actually looks like",
        body: "All four skills are assessed in one sitting of roughly 2 hours 20 minutes, across 109 questions: Listening (25 minutes, 45 questions), Reading (37 minutes, 45 questions), Speaking (20 minutes, 11 tasks) and Writing (60 minutes, 8 tasks). Listening and Reading are scored 5–495 each and combine into the familiar 10–990 total; Speaking and Writing are scored 0–200 each and reported separately, with a CEFR level for every skill.",
      },
      {
        heading: "It only runs in the adaptive format",
        body: "This is the detail that catches people out. The 4-Skills test is offered only with the Multistage Adaptive versions of Listening and Reading — which is why it has 45 questions per section rather than the 100 you get on the linear Listening & Reading test. If you have been practising against the 200-question format, the pacing you have trained is not the pacing you will sit.",
      },
      {
        heading: "Unit 1 decides what Unit 2 looks like",
        points: [
          "Each adaptive section splits into Unit 1 (25 questions) and Unit 2 (20 questions).",
          "Your performance on Unit 1 determines which questions you receive in Unit 2. That is how the test reaches an accurate score in far less time.",
          "So do not treat the opening questions as a warm-up. Arrive focused — the first unit is where the test forms its estimate of your level.",
          "If Unit 2 suddenly feels harder than Unit 1, that is usually a good sign rather than a bad one.",
        ],
      },
      {
        heading: "Four independent scores",
        points: [
          "The sections are marked independently. A strong Listening score cannot compensate for a weak Writing one.",
          "That independence is exactly why employers ask for the 4-Skills format — it exposes the gap between what you understand and what you can produce.",
          "It also means a bad Speaking section cannot damage the Listening score you already banked. Reset between sections rather than carrying one forward.",
        ],
      },
      {
        heading: "Rules worth knowing before you sit down",
        points: [
          "There is no penalty for a wrong answer. Never leave a Listening or Reading question blank — an unanswered question is a guaranteed zero, a guess is not.",
          "You answer in order and against the clock. You can change an answer while it is still on screen by clicking a different option, but you cannot roam back through the section.",
          "Read the current official Examinee Handbook from ETS before test day for identity documents, remote-proctoring equipment requirements and score review procedures. It is revised regularly, so check the live version rather than a saved copy.",
        ],
      },
    ],
  },
];
