export type TipCategory = "Listening & Reading" | "Strategy";

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
];
