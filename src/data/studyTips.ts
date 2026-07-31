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
    slug: "part1-photographs",
    title: "Part 1 — Photographs: reading the trap before you hear it",
    category: "Listening & Reading",
    readTime: "6 min",
    summary:
      "A close reading of how TOEIC Part 1 builds its four options — tense and voice traps, sound-alikes, and the state-versus-action distinction that decides most of the six questions.",
    sections: [
      {
        heading: "Scan in a fixed order, every time",
        body: "You get a few seconds of silence before the narrator starts, and nothing is printed on screen except the photo — no text version of the four statements, so everything you hear has to be matched against what you already noticed. Run the same scan every time: main subject first (a person if there is one, otherwise the dominant object), then what that subject is actually doing, then the secondary objects and the setting. If no one in the photo is doing anything specific, that is itself information — it tells you the correct statement is likely to describe the setting or a state, not an action.",
      },
      {
        heading: "The tense-and-voice trap, in detail",
        points: [
          "Active present continuous ('is operating', 'is pressing') describes someone doing something right now, in the frame — this is the most common correct-answer form when a single person is the clear subject of the photo.",
          "Passive present continuous ('is being wiped down', 'is being loaded') needs someone visibly performing that exact action at this instant. A plausible object in the scene is not enough — if no hands are on it, the option is wrong no matter how natural it sounds.",
          "Present perfect passive ('has been placed', 'have been arranged', 'has been erected') describes a finished result, with no one necessarily doing anything now. This is usually the safe, correct form for photos where nothing is actively happening, or where the action can't be pinned to a specific person — distant shots, group shots, stacked or arranged objects.",
          "Stative verbs (sit, stand, wear, hold, face, overlook) describe a condition, not an action in progress. Don't force these into an 'is X-ing' reading in your head, and don't expect to find an active agent for them — 'a picture is hanging on the wall' needs no one hanging it right now.",
        ],
      },
      {
        heading: "Sound-alike distractors are deliberate, not incidental",
        points: [
          "The test writers build at least one option per photo around a word that sounds like the correct one but changes the meaning entirely: work/walk, copy/coffee, fund/found, seat/sit, lead/lead (verb/noun stress), pass/past.",
          "Homophone pairs are especially common on verbs: writing/righting is a real example from this site's own bank (a woman writing in a notebook, distractor claims she's 'righting an overturned chair').",
          "Near-rhymes on technical vocabulary show up too — tamping/stamping (a barista pressing a tamper into a portafilter, distractor claims she's 'stamping a customer's loyalty card'). These pass at conversational speed if you're listening passively; you have to be listening for the specific action, not just recognising a familiar-sounding syllable.",
          "Because the four statements are read aloud back to back with no repeat, a sound-alike only needs to occupy your ear for half a second to do its job. Treat any option that 'sounds right' with extra suspicion, not less.",
        ],
      },
      {
        heading: "Four ways a distractor gets built",
        points: [
          "Right object, wrong action: the item is genuinely in the photo, but the verb attached to it is false. Crates stacked against a wall become 'he's loading crates onto a delivery truck' — the crates are real, the loading isn't happening.",
          "Right action, wrong object: the true action is close by, but the option attaches it to the wrong thing — 'the barista is pouring milk into a jug' when she's actually working the tamper, not the milk jug.",
          "Plausible but absent action: an action that would fit the general scene but isn't shown at all — 'the passengers are boarding the plane' for people sitting in a waiting area, or 'a crane is lifting a steel beam' for a construction site where no crane is even visible.",
          "True detail, wrong statement type: the option correctly names something visible but phrases it as an action when it's a state, or vice versa — describing scaffolding as something someone is currently building rather than as 'has been erected', a completed condition.",
        ],
      },
      {
        heading: "Group shots and distant shots default to state descriptions",
        body: "When a photo is taken from far away, or shows several people at once, you usually can't tell exactly what any one individual is doing with their hands — and the test knows this. In these cases the correct answer is very often a passive present-perfect statement about the overall scene ('scaffolding has been erected around the building') rather than a claim about a specific person's action, because a specific-action claim can't be verified at that distance or in that crowd. When you sense you're looking at a wide or group shot, mentally raise the odds that the answer is a state description before the audio even starts.",
      },
      {
        heading: "One practical habit that pays off immediately",
        body: "As each statement plays, don't wait for the fourth option before deciding — mark A, B, C, or D as a tentative keep or reject the instant you hear it, based on the scan you already did. By the time D finishes, you're choosing between at most two live candidates instead of replaying all four from memory. On a six-question part with no time to relisten, that habit alone recovers points that pure vocabulary study won't.",
      },
    ],
  },
  {
    slug: "part2-question-response",
    title: "Part 2 — Question–Response: why the first three words decide everything",
    category: "Listening & Reading",
    readTime: "6 min",
    summary:
      "A deep dive into TOEIC Part 2's 25 question–response items — the question-type taxonomy, the traps built into every wrong option, and why the best answers often don't sound like answers at all.",
    sections: [
      {
        heading: "No picture, no text, just three voices",
        body: "Part 2 strips away every non-audio crutch the test gives you elsewhere. The screen shows a single generic instruction — choose the best response to the question or statement you hear — and nothing else: no photo to scan, no question stem to read, no answer choices printed for your eyes. The narrator reads one question or statement, then three spoken responses labeled A, B, and C, and you have only a few seconds after option C to mark an answer before the next item starts. Twenty-five items run back to back with no repeats and no way to slow the audio down, which makes Part 2 the purest listening-only stretch of the entire test.",
      },
      {
        heading: "The question-type taxonomy",
        points: [
          "Wh-questions (Who, What, When, Where, Why, How, How many, How long) demand content that fills that exact slot. 'When is the quarterly report due?' only accepts a time ('By the end of the week') — a location or a yes/no reply is automatically wrong, no matter how fluent it sounds.",
          "Yes/no questions, led by an auxiliary (Did, Is, Do, Can, Has, Was), expect confirmation or denial, often with a supporting detail attached — 'Has the recall notice been sent to all affected owners?' answered by 'Not yet, we're still finalizing the mailing list' is a full, correct answer even though it never says the word 'no'.",
          "Tag questions ('...isn't it?', '...doesn't it?') function exactly like yes/no questions despite the extra clause riding along — 'The patient's insurance is still valid, isn't it?' is answered with a direct confirmation, not with commentary on the embedded statement.",
          "Negative questions ('Isn't the new assembly line supposed to start today?') trip up test-takers who assume the negative flips the logic. It doesn't — you still answer as if the question were positive: yes if it's true, no if it isn't.",
          "Choice (alternative) questions built around 'or' reject a plain yes/no outright. 'Should we hold the training session in the main hall or the small conference room?' needs one of the two named options picked, ideally with a reason attached.",
          "Embedded questions bury the real question inside a frame like 'Do you know...' or 'Could you tell me...'. 'Do you know when the contract needs to be signed?' is really asking 'when' — answer the embedded clause, not the frame verb, or you'll fall for a response about being personally acquainted with something.",
          "Statements with no question word at all still need a reactive response: agreement, disagreement, a next step, or an appropriate reaction. 'I think we should book the earlier flight to Chicago' is correctly met with 'That works for me — I'll change the reservation now,' not with a fact that happens to share vocabulary with the statement.",
        ],
      },
      {
        heading: "Why the correct answer often doesn't sound like an answer",
        body: "The gap between a mid-range score and a high one on Part 2 is almost entirely about tolerance for indirectness. ETS writes correct responses that deliberately avoid restating the grammar of the question: a yes/no question gets answered with a hedged, real-sounding line like 'Not yet, we're still finalizing the mailing list' instead of a bare 'no'; an embedded question gets answered as if the frame ('Do you know...', 'Could you tell me...') wasn't even there. The classic higher-band pattern is a response that deflects or reframes rather than answering head-on — 'When does the meeting start?' met with 'Didn't you get the email?' — and it is correct precisely because it's the kind of thing a real colleague would say. If you're listening for an answer shaped exactly like the question, you will systematically reject correct options at the harder end of the test.",
      },
      {
        heading: "The trap taxonomy in every wrong option",
        points: [
          "Word-echo traps reuse a word or its root from the question on an unrelated topic. Asked 'Where did you send the client's shipment?', a trap option answers 'We shipped it yesterday afternoon' — reusing 'shipment' as 'shipped' while actually answering 'when', not 'where'.",
          "Sound-alike traps swap in a near-homophone: 'back up the server' answered by 'she's not a backup singer anymore', or 'the new assembly line' answered by 'we assembled it ourselves', or 'still valid' answered by 'hasn't validated her parking'. The sound survives the trip from question to option; the meaning doesn't.",
          "Wrong-question-type traps answer a real question, just not the one asked — 'Who's interviewing the marketing candidate?' met with 'In the third-floor conference room' (that answers 'where') or 'Sometime around three o'clock' (that answers 'when'). These are the easiest traps to eliminate once you've locked the question word, and the hardest to catch if you tuned in late.",
          "Plausible-but-wrong-topic traps are true-sounding statements that simply answer nothing. Asked the asking price for an office space, 'The realtor showed it to three clients' is a believable real-estate fact — it just isn't a price.",
        ],
      },
      {
        heading: "The pressure of zero visual support",
        body: "Compare Part 2 to its neighbors. Part 1 gives you a photograph to anchor meaning before the audio even starts, so a missed word can often be recovered from what you can see. Parts 3 and 4 print the questions in advance and give you a run of several seconds of context — a whole conversation or talk — to triangulate the answer even if one detail slips past. Part 2 gives you nothing to fall back on: no photo, no printed question, no second data point. You get one pass at the question and three passes at responses deliberately built to sound plausible in isolation. Losing focus for the first two words of the question is often unrecoverable, because those two words are what tell you which of the three options is even structurally possible.",
      },
      {
        heading: "Listen for shape, not content — and don't try to take notes",
        body: "There's no time to write anything down: options arrive only a couple of seconds apart with nothing on screen to reference afterward, so notes are a liability, not a safety net. The workable technique is to hold the question's opening word (or its auxiliary, for yes/no and tag questions) as a single mental filter — a 'shape' the correct answer must fit — and run each of the three options past that filter the instant you hear it, discarding on contact rather than waiting to compare all three at the end. By the time option C finishes, you should already have eliminated two of the three; the pause before the next item is for confirming your instinct, not for reconstructing the question from memory.",
      },
    ],
  },
  {
    slug: "part3-conversations",
    title: "Part 3 Conversations: how to use the printed questions before the audio starts",
    category: "Listening & Reading",
    readTime: "6 min",
    summary:
      "How to pre-read the three printed questions per set, track the gist-detail-inference pattern, and handle graphic conversations in Part 3's 13 conversations.",
    sections: [
      {
        heading: "You get 39 questions, but only 13 conversations to earn them",
        body: "Part 3 is built from 13 conversations, each carrying exactly three questions, for 39 total. That ratio matters: you are never listening for one answer at a time, you are listening for three answers inside a single 30-45 second exchange, in order. Unlike Parts 1 and 2, the questions and all four answer options are printed in your test book or on screen — the entire tactical advantage of Part 3 comes from using that printed text in the seconds before the audio starts, not from having sharper ears.",
      },
      {
        heading: "The pre-read sequence, in the order that actually pays off",
        points: [
          "Read all three question stems first — not the answer options yet. 'What problem does the woman mention?', 'What must happen by 5 PM?', 'What does the man say he will do next?' tells you the shape of the conversation before you hear a word of it.",
          "Only after the three stems are locked in, glance at the options for question 1 if you have a second or two left — options 2 and 3 are rarely worth the time, since you won't need them until later and the conversation will already be moving.",
          "Do not try to read all twelve options (three questions times four choices) before the audio starts. That is the single most common way test-takers run out of pre-read time and end up hearing the first line of the conversation with their eyes still on the page.",
          "If a set includes a graphic, look at the graphic itself in your remaining seconds, not the questions again — you already know question 3 will send you there.",
        ],
      },
      {
        heading: "Gist, then detail, then 'what happens next'",
        body: "The three questions in a set are not random — they track the conversation from start to finish and from general to specific. Question 1 is almost always gist: who is speaking, where, or what the problem is (compare 'What problem does the woman mention?' or 'Why does the man contact the restaurant?'). Question 2 asks for a specific fact stated partway through — a deadline, a feature, a number, a cause ('What must happen by 5 PM for the brochures to be reprinted?', 'What feature of the Lily Room does the man mention?'). Question 3 is the forward-looking one: what a speaker will do, say, or send next, and its answer sits in the conversation's final lines. Answering in that sequence as the conversation unfolds — rather than waiting to the end and trying to reconstruct all three — is what the 45-second window is actually built for.",
      },
      {
        heading: "Graphic questions: match the spoken detail to the visual, not the wording",
        body: "When a set includes a graphic — a price list, a floor plan, a schedule, a seating chart — the correct answer is never read aloud as a full sentence. Instead, one speaker states a detail (a name, a time, a code, a row) that you must cross-reference against the graphic yourself to find the answer the question actually wants. If the graphic is a delivery schedule and the woman says 'the one that's delayed a day is the truck leaving on Thursday,' the question won't ask about Thursday directly — it will ask something like 'Which shipment will arrive late?', and you have to look at the graphic to see which shipment corresponds to that Thursday truck. Skimming the graphic before the audio starts, so you already know what its columns or labels represent, is what makes that cross-reference possible in real time instead of after the fact.",
      },
      {
        heading: "The scenarios Part 3 keeps returning to",
        points: [
          "Office logistics gone slightly wrong: a booked room falls through and a backup has to be found (a room reserved is unavailable, an alternative like a larger room down the hall gets proposed with its features listed as the detail question).",
          "Scheduling conflicts: a meeting or interview clashes with something else already on the calendar, and a new time gets proposed and confirmed, often pulling in a third person who needs to be looped in.",
          "Vendor and delivery problems: a shipment is delayed for a stated reason (customs, a supplier issue), and the fix — a partial shipment, an expedited option — is what question 2 or 3 is built around.",
          "Customer service and reservations: confirming or changing a booking (a restaurant table, a hotel shuttle time), often with a follow-up request layered on — a dietary restriction, a luggage question, a room count that changed.",
          "IT and facilities requests: something isn't working, the caller reports the symptom, and the fix or next step is what closes the conversation.",
          "In all of these, distractor options recycle vocabulary from the conversation (the restaurant name, the room name, the word 'shipment') attached to something that was never actually said — the trap is recognizing a familiar word, not recognizing a true statement.",
        ],
      },
      {
        heading: "'What will the man/woman do next?' has a specific failure mode",
        body: "This question type rewards listening to the very end of the conversation, and it punishes stopping early. The correct action is usually the last commitment made — 'I'll call them now,' 'I'll follow up with a written confirmation once it's booked,' 'I'll let the driver know in advance.' The classic wrong answer takes an action that was proposed and then dropped (a second shuttle that turns out not to be needed, a refund nobody actually offers) or assigns the right action to the wrong speaker — the man commits to calling Marketing, not the woman, even though she is the one who raised it. Track who says 'I'll' last, not just what gets discussed.",
      },
      {
        heading: "Two speakers versus three",
        points: [
          "Most sets use two speakers, and options label them simply 'the man' and 'the woman' — track who owns each fact as you go, since a detail question can hinge on who said the number, not just what the number was.",
          "Three-speaker sets add a second man or woman, so options may say 'the first man' and 'the second man,' or use a name once it's given. The extra voice usually exists to be looped into a decision the other two already made — a colleague from another department, a specialist being consulted — so listen for whose turn it is to speak and why they were brought in.",
          "Three-speaker sets don't add a fourth question, but they do compress more identification work into the same 45 seconds, so the pre-read matters even more: know before the audio starts whether you're tracking two voices or three.",
        ],
      },
      {
        heading: "Managing the gap between conversations",
        body: "You get only a few seconds between the end of one conversation's three questions and the start of the next one's audio — not enough to relax, but enough to start the pre-read cycle again if you move immediately. The moment you've locked in your answer to question 3, flip to the next set's three stems rather than reviewing what you just answered. Losing that gap to hesitation is how test-takers who understand every conversation still end up rushing the pre-read on set six, seven, and eight.",
      },
    ],
  },
  {
    slug: "part4-short-talks",
    title: "Part 4 — Short Talks: reading the format before you hear the answer",
    category: "Listening & Reading",
    readTime: "7 min",
    summary:
      "A deep dive into Part 4's ten single-speaker monologues — how to recognize the format in the first few words, avoid the classic 'true fragment' trap on purpose questions, and handle the inference and graphic items that show up more often here than in Part 3.",
    sections: [
      {
        heading: "One speaker, ten talks, thirty questions",
        body: "Part 4 drops the back-and-forth of Part 3 for a single continuous monologue: a voicemail, an announcement, an advertisement, a tour, a meeting excerpt, or a radio broadcast. Ten talks, three questions each, thirty questions total. The questions and answer choices are printed on screen exactly as in Part 3, so your job during the audio is confirmation, not memorization — read the three stems before the talk starts and let the recording fill in what you're already looking for. Because there's only one voice, the talk moves in a straighter line than a conversation does, which is exactly what makes format recognition such a reliable shortcut.",
      },
      {
        heading: "The format tells you what the questions will ask",
        points: [
          "Voicemail: almost always ends with a callback request, a deadline, or both ('Please call me back at your earliest convenience') — expect a question about why the speaker is calling and one about what the listener should do next.",
          "Announcement (transit, workplace, safety): opens with the reason for the announcement, then gives a cause and an instruction — expect a 'main purpose' question, a cause/reason question, and a 'what should X do' question.",
          "Advertisement: leads with the product or event, stacks numbers (discounts, hours, quantities), and closes with a call to action — expect at least one question built entirely around a number.",
          "Tour talk / guide introduction: establishes location early, then sequences what happens next ('next we'll head to...', 'please remember to...') — expect a location/inference question and a 'what will happen next' question.",
          "Meeting excerpt / briefing: states the topic, lists two or three items to work around, and hands off responsibility at the end — expect a purpose question built from the sum of the items, not any single one of them.",
          "Broadcast (news, weather, traffic): states the subject in the first sentence, then adds detail — expect the detail questions to test whether you can find a fact quickly, not whether you understood the gist.",
        ],
      },
      {
        heading: "Purpose stated early, action item buried late",
        body: "This site's own warehouse shift-change briefing is a clean example of the shape: 'Before you head out, let's do a quick shift-change briefing' announces the topic in the first sentence, and the payload — the closed east dock, the two broken pallet jacks, the unfinished aisle-twelve count — is delivered in the middle, with the actual instruction ('pass this information along to the next crew') arriving only in the last line. The client voicemail from Marcus Lee follows the same arc in miniature: the reason for the call ('I need to reschedule our meeting') comes in sentence two, and the action item ('Please call me back at your earliest convenience to confirm, or just send me an email') doesn't land until the final lines. If you tune out after the opening sentence because you think you've already got the purpose, you'll miss exactly the detail question that asks what the listener is supposed to do.",
      },
      {
        heading: "How 'main purpose' questions are built — and the trap inside them",
        body: "Part 4 purpose questions are rarely answered by one sentence; they're answered by the sum of the talk. The wrong options are built by taking one true fragment from partway through and inflating it into the whole purpose. The shift-briefing question 'What is the main purpose of the talk?' is a textbook case: the correct answer, 'to pass on conditions the incoming crew will need to work around,' covers all three items raised (the count, the jacks, the dock). Each wrong option grabs just one of them and overstates it — equipment trouble becomes 'to report equipment failures to the maintenance department,' the unfinished count becomes 'to review the findings of a completed inventory audit' (note the count is explicitly incomplete, not reviewed), and the one-night dock closure becomes 'to introduce a new procedure for loading outbound trucks.' The tell is always the same: a wrong purpose option sounds true because a piece of it is true. Before you commit, ask whether the option covers everything the speaker said or just the one detail you happened to latch onto.",
      },
      {
        heading: "Inference questions: more common here than in Part 3",
        body: "'What does the speaker imply about...' and 'What does the speaker mean when he says...' show up more often in Part 4 than in Part 3, because a single uninterrupted speaker has more room to leave a conclusion unstated. The pallet-jack question from the shift briefing shows how these get built: the talk never says outright that the jacks are unavailable all night, but it says maintenance won't have them 'back in service until tomorrow morning' and that the speaker is briefing the crew handing over to the night shift — put those two facts together and the implication (they'll be out for the entire night shift) follows even though no single sentence states it. The advertisement set does the same thing with the grand-opening promotion: the twenty percent discount runs 'from nine A.M. until closing' on 'your entire purchase' with no cap mentioned, while the free tote bags are explicitly capped at the first fifty customers — the trap answer borrows the fifty-customer limit and wrongly attaches it to the discount, because the two offers are announced back to back. Inference questions reward keeping separate facts separate, not blending whatever was mentioned near each other.",
      },
      {
        heading: "Numbers, dates, and times are favorite targets",
        points: [
          "If a talk mentions more than one number, assume at least one question tests whether you attached the right number to the right thing, not whether you heard a number at all.",
          "Watch for numbers that get restated in a different form: 'twenty percent off your entire purchase' becomes an answer option worded as 'an additional discount' or 'a discount on selected items' — the trap swaps the scope, not the figure.",
          "Deadlines and time windows in voicemails and announcements ('within the next two hours', 'starting at ten p.m.') are almost always the answer to a 'what will happen' or 'by when' question — flag the moment you hear a time expression.",
          "When two numbers compete for the same question (fifty customers vs. an uncapped discount; a fifteen-minute delay vs. a twenty-minute single-track window), the correct answer is the one attached to the noun the question actually asks about — re-read the question stem, not just the numbers you jotted down.",
        ],
      },
      {
        heading: "Graphic-based talks",
        body: "Some Part 4 talks pair with an on-screen graphic — a schedule, a floor plan, a price list, a program — the same way some Part 3 conversations do. The audio deliberately never states the answer directly; it gives you a name, a time, or a condition, and you have to cross-reference that against the graphic to find the one line it matches. Preview the graphic along with the three questions before the talk starts, and identify which column or row each question is likely to point to. The trap here isn't a sound-alike or a paraphrase — it's picking the row that seems most prominent on the graphic rather than the one the speaker actually pointed you to.",
      },
      {
        heading: "Pace: use the steadiness against the format",
        body: "Because Part 4 is one speaker reading a prepared script rather than two people improvising a natural exchange, the pace is more even than Part 3's — no interruptions, no false starts, no overlapping turns. That steadiness is an advantage: once you've identified the format in the opening line, you can predict roughly where the purpose, the cause, and the action item will fall in the timeline and aim your attention accordingly, rather than tracking a shifting conversation between two voices. Don't mistake steady for slow, though — the words-per-minute is the same as Part 3. The gain is entirely in predictability, not in extra time.",
      },
    ],
  },
  {
    slug: "part5-incomplete-sentences",
    title: "Part 5, Incomplete Sentences: read the options before you read the sentence",
    category: "Listening & Reading",
    readTime: "7 min",
    summary:
      "A triage method for all 30 Part 5 questions, built from real grammar categories, so you stop reading every sentence twice and start recognizing what each item is testing from the option list alone.",
    sections: [
      {
        heading: "Triage the options first, not the sentence",
        body: "The single biggest speed gain in Part 5 comes from resisting the urge to read the sentence first. Read the four options first instead, because their shape tells you what category of question you're facing before you've processed a single word of context. Four forms of the same root (formal / formally / formality / formalize) means a word-form question, solvable by grammar alone. Four different verb tenses or aspects of the same verb (reviews / reviewed / has reviewed / has been reviewing) means a tense question, solvable by finding the time-marker word. Four prepositions (for / to / with / at) means a fixed-collocation question, solvable only by memory. Four unrelated content words (look into / look forward to / look up / look after) means real vocabulary, and that's the one category where you do have to read for meaning. This one habit — options first — turns roughly two-thirds of Part 5 into pattern recognition instead of translation, which is exactly why the format allows only 20-25 seconds per item.",
      },
      {
        heading: "Word-form questions: find the job, not the meaning",
        points: [
          "Four forms of one root word means the test is checking whether you know what part of speech the blank needs, not what the word means — you often don't need to fully translate the sentence at all.",
          "Look immediately to the left and right of the blank. A possessive right before the blank ('the Human Resources team's ______ of the new payroll system') needs a noun, so 'implementation' beats the verb 'implement', the participle 'implemented', and the gerund 'implementing'.",
          "A verb right after the blank ('the CEO ______ announced the merger') needs an adverb to modify it, so 'formally' beats the adjective 'formal', the noun 'formality', and the verb 'formalize'.",
          "'Found + object + complement' patterns take the '-ing' adjective form for the thing causing a reaction, and the '-ed' form for the person experiencing it: staff found the scanning system 'satisfying' (it causes the feeling), never 'satisfied' (that would describe the staff themselves).",
          "A blank right after 'was' or 'is' with no object following is a complement slot — usually an adjective, not a noun or adverb: '...the request was ______ for a refund' needs 'ineligible', not the noun 'eligibility' or the adverb 'eligibly'.",
        ],
      },
      {
        heading: "Tense and aspect questions: the time marker is the answer key",
        body: "When the four options are all the same verb in different tenses, ignore the rest of the sentence and hunt for the one word or phrase that fixes the timeline — the test always plants one. 'Since early Monday morning' paired with 'still have not finished' can only mean an action that started in the past and is still going, which forces the present perfect continuous 'has been reviewing', ruling out the simple present, simple past, and the completed-sounding present perfect simple. 'By the time the auditors ______ their review, the finance department will have already submitted...' is the classic future-time-clause trap: 'by the time' behaves like 'when' or 'if' and takes the present simple ('complete'), never 'will complete' or 'will have completed', even though the sentence is clearly about the future. Conditional sentences work the same way: an if-clause in the past simple ('If the law firm hired additional paralegals') pairs only with 'could' + base verb in the result clause, never with 'will' or 'would have'. Once you can name the pattern — first conditional, second conditional, reported-speech backshift, future time clause — you stop guessing and start matching.",
      },
      {
        heading: "Fixed prepositions and collocations: memorize, don't reason",
        points: [
          "When the options are prepositions or near-synonyms, grammar logic won't save you — these are memorized pairings and the wrong choice usually still sounds almost plausible.",
          "'Responsible for' a task or duty versus 'responsible to' a person or board — same adjective, two different prepositions, two different meanings.",
          "'Look into' a complaint (investigate) is not 'look up' a fact (search for), 'look after' a person (care for), or 'look forward to' an event (anticipate) — four real phrasal verbs, four unrelated meanings, chosen entirely by context.",
          "Uncountable nouns like 'information' take 'little' or 'a little', never 'few', 'many', or 'several' — those quantifiers are reserved for countable plurals and this pairing shows up repeatedly on real forms.",
          "Keep a running list of these as you review missed questions. There is no shortcut except exposure — but a list of 40-50 memorized pairs covers a surprising share of what actually appears.",
        ],
      },
      {
        heading: "Relative pronouns, conjunctions, and clause-vs-phrase traps",
        body: "A cluster of Part 5 questions tests whether you can tell a clause from a phrase. 'Although', 'because', and 'if' are subordinating conjunctions that must be followed by a full clause with its own subject and verb; 'despite', 'because of', and 'due to' are prepositions that must be followed by a noun phrase. A sentence like '______ the server outage lasted less than an hour, the company lost thousands' has a full clause after the blank ('the outage lasted...'), which immediately eliminates 'despite' and 'due to' and leaves 'although'. Relative pronouns follow their own rule set: 'who' for people as subject, 'whom' for people as object, 'which' for things — and critically, 'which' is required (not 'that') in a non-restrictive clause set off by a comma, as in '...solar panels on the main building, which significantly reduced its electricity costs.' Correlative pairs are fixed and non-negotiable too: 'neither' pairs only with 'nor', never with 'or' or 'and', regardless of what sounds fluent.",
      },
      {
        heading: "Don't skip subject-verb agreement and article questions",
        points: [
          "'Each' is always singular, even when it's followed by a plural noun phrase: 'Each of the branch managers ______ required' takes 'is', not 'are' or 'were' — the verb agrees with 'each', not with 'managers'.",
          "Article questions hinge on whether the noun is being introduced for the first time (indefinite 'a'/'an') or already known to the reader ('the'), plus whether the following sound is a vowel or consonant sound, not just a vowel letter.",
          "Comparatives are for exactly two items, superlatives for three or more: 'Of the three assembly lines, Line C produces the lowest number of defects' — 'lower' would be wrong with three lines being compared.",
          "These agreement and article items are graded purely on rule recall, so they should be among your fastest, most confident answers if you know the rule cold.",
        ],
      },
      {
        heading: "Pacing discipline: protect Part 7, not your ego on Part 5",
        body: "Budget 20-25 seconds per Part 5 question, which totals 10-12 minutes for all 30. That budget is tight on purpose: Part 5 is worth exactly as many points as a Part 7 single-passage question, but it costs far less time when you work the options-first method. The single biggest cause of an unfinished Part 7 is not weak reading speed — it's bleeding 45-60 seconds per item on Part 5 grammar questions by re-reading the full sentence for word-form and tense items that could have been solved from the option list alone. If you hit 25 seconds and you're still unsure between two options on a fixed-collocation or vocabulary item, mark your best guess and move on; these are memorization gaps you fix in review, not puzzles you solve by staring longer.",
      },
      {
        heading: "A practical closing habit",
        body: "After every practice set, don't just check right and wrong — sort your Part 5 misses into the categories above (word-form, tense, preposition/collocation, relative pronoun/conjunction, agreement/article, pure vocabulary). A pattern will emerge fast, usually concentrated in one or two categories, and that tells you exactly where your remaining study time on this part should go instead of re-drilling everything evenly.",
      },
    ],
  },
  {
    slug: "part6-text-completion",
    title: "Part 6 Text Completion: reading beyond the blank",
    category: "Listening & Reading",
    readTime: "6 min",
    summary:
      "Why Part 6's 16 questions punish sentence-only reading, how to nail the guaranteed sentence-insertion item in each passage, and the order to read a text in so blanks stop feeling like guesswork.",
    sections: [
      {
        heading: "It looks like Part 5. It usually isn't.",
        body: "Sixteen questions, four short texts — an email, a memo, a notice, an article — four blanks each. Three of those four blanks per text are word- or phrase-level, the same surface format as Part 5, and it's tempting to solve them the same way: read the sentence, pick the option. That habit works maybe half the time in Part 6 and quietly wrecks your accuracy on the rest. In the site's own inventory-rollout memo, a blank asks you to complete 'Once the system ______ fully operational next Tuesday, all staff will be required to log shipments through the new scanners' — the correct choice is the present simple 'becomes,' not the future 'will become,' because a time clause with 'once' takes present tense even when the meaning is future. That's a rule you can catch inside one sentence. But other blanks in the same texts aren't so contained: a visitor-access notice asks why arriving visitors 'may experience a short delay,' and the connector that finishes that thought only makes sense once you've registered, from two sentences earlier, that staff need time to verify an appointment. Skip that earlier sentence and every option looks equally plausible.",
      },
      {
        heading: "What Part 6 actually tests that Part 5 doesn't",
        points: [
          "Pronoun antecedents: 'it,' 'this,' or 'they' in the blank's sentence often points back to a noun introduced one or two sentences earlier, not the one right next to it.",
          "Tense agreement with a time marker planted elsewhere in the text — a date, 'next Tuesday,' 'during this window,' 'starting this year' — that anchors the correct tense even when the blank's own sentence has no time word at all.",
          "Logical sequencing: whether the action in the blank happens before, during, or after an event described in an earlier paragraph, not just what sounds grammatical in isolation.",
          "In a real item from the site's system-upgrade email, the blank 'if you experience any issues accessing your files ______ the upgrade' is only solvable by remembering that the maintenance window was described three sentences earlier — 'after' is correct because problems would surface once the servers come back, not while they're still down.",
        ],
      },
      {
        heading: "The sentence-insertion blank: figure out its job first",
        body: "Every single Part 6 text has exactly one blank where the four options are complete sentences rather than words. All four are usually well-formed, plausible, standalone sentences — that's what makes this question type harder than it looks, and rushing it the way you'd rush a Part 5 item is the single biggest unforced error in this section. Before you even glance at the options, work out what job the missing sentence needs to do: is it explaining or justifying the claim just made, pivoting to a new but related subtopic, or delivering a concluding instruction or action? In the site's system-upgrade email, the blank sits between 'email and file servers will be temporarily unavailable' and 'the new system is expected to load documents... noticeably faster' — the sentence has to bridge those two ideas, so the correct option is the one that explains what the upgrade actually replaces, not the options about timesheets, training sessions, or password resets that would read perfectly fine in a different email. In the visitor-access notice, the insertion blank follows a sentence introducing a temporary badge — the correct option has to continue that exact thread (what to do with the badge), not just be office-appropriate.",
      },
      {
        heading: "Transition and connector blanks: trace the logic, not the vibe",
        points: [
          "'However' and 'in contrast' require a contradiction or reversal between the surrounding ideas — check that the sentence before genuinely conflicts with the one after, not just differs in topic.",
          "'Therefore' and 'as a result' require the second sentence to be a consequence of the first — a shared cause-effect link, not just two related facts placed near each other.",
          "'In addition' and 'furthermore' require the second sentence to extend the same point in the same direction — swap it for 'however' mentally and see if the passage still makes sense; if it does, 'in addition' is probably wrong.",
          "'Similarly' needs a genuine parallel being drawn, not just two sentences about the same general subject.",
          "When two connectors both sound acceptable, reread the sentence immediately before the blank one more time — the answer almost always hinges on what that specific sentence claimed, not on general plausibility.",
        ],
      },
      {
        heading: "Read the whole text once before answering anything",
        body: "Because later sentences frequently resolve earlier blanks — a time marker in paragraph two that fixes the tense of a blank in paragraph one, a badge mentioned after the insertion point that confirms which option belongs there — answering blanks in strict top-to-bottom order as you first meet them is a losing strategy. Read the full 100-to-150-word text once for gist: who's writing to whom, about what, and what they want the reader to do. Only then go back and fill the four blanks. This costs maybe ten extra seconds per passage and prevents the much larger cost of committing to a plausible-but-wrong answer on blank one before you've seen the information in blank four that would have ruled it out.",
      },
      {
        heading: "Time budget: Part 6 is not where you should be slow",
        body: "Sixteen questions across four short texts should take roughly 8 to 10 minutes — call it 30 to 35 seconds per blank once you include the one read-through per passage. That's slower than Part 5's 20-to-25-second target because of the extra reading, but it should never approach the pace of Part 7, where a single question can fairly cost a minute. If a sentence-insertion option has you genuinely torn between two choices after one reread of the surrounding sentences, mark your best guess and move on — Part 7 has more than three times as many questions and considerably less room to recover lost time.",
      },
    ],
  },
  {
    slug: "part7-reading-comprehension",
    title: "Reading Part 7: single, double, and triple passages under real time pressure",
    category: "Listening & Reading",
    readTime: "8 min",
    summary:
      "How to read the questions first, catch the paraphrase, map double- and triple-passage sets to the right document, and pace 54 questions without leaving points on the table.",
    sections: [
      {
        heading: "Read the questions first — and know what kind each one is",
        body: "Before you touch the passage, read every question attached to it — two to four for a single passage, five for a double or triple set. Sort each one by type, because the type dictates how much of the passage you actually need. A detail question (who, what, when, why, how much) is answered by one sentence — 'Why will the office be closed?' sends you hunting for a single cause. An inference question ('what can be inferred', 'what is suggested', 'what is most likely true') is never answered in one sentence; it requires combining two stated facts, the way a hotel flyer's opening line ('help us fill our rooms during the quieter weekdays') plus its Sunday–Thursday-only booking window together imply the package targets off-peak demand. A vocabulary-in-context question names a paragraph and line number — save it for last, since it only makes sense once you've read the surrounding sentence. And in double or triple sets, a synthesis question tells on itself with phrasing like 'based on both documents' or a comparison verb — that's your cue to stop reading one passage and start cross-referencing.",
      },
      {
        heading: "The paraphrase principle, with a real example",
        body: "The correct answer almost never reuses the passage's exact wording. ETS builds distractors out of borrowed vocabulary and saves the paraphrase for the correct choice, precisely because matching words is an unreliable strategy and the test is designed to punish it. In the Meridian Consulting expense-report set, Sofia Lindqvist writes she couldn't submit her report earlier 'because the portal was down most of last week.' The correct answer to why her submission was late isn't a copy of that line — it's 'The expense portal was not working,' which swaps 'down' for 'not working.' Train yourself to hear synonym pairs like these as matches — 'defect' for 'problem', 'reimbursed' for 'paid back', 'immediately' for 'right away' — and treat an answer choice that echoes a distinctive word from the passage as a yellow flag rather than a green one; that's exactly how the wrong options get built.",
      },
      {
        heading: "Double and triple passages: find out who's really being asked what",
        points: [
          "Read the document headers and subject lines before the body text — they tell you which document an early question is aimed at. In the lamp-return set, a question about 'what is required to report a damaged item' points at the Return & Exchange Policy block, while a question about 'the lamp's condition' points at Priya Desai's email — you don't need the other document for either one.",
          "Every double or triple set includes at least one guaranteed synthesis question that no single document can answer alone. In the Meridian Consulting triple passage, the travel policy caps hotel stays at $180 a night; Sofia's email states she paid $165 a night at the Lakeside Hotel. 'How does Sofia's hotel cost compare to the company policy?' only resolves once you've placed both numbers side by side.",
          "The hardest question in that same set goes a step further, pulling from all three documents at once: Sofia's report was late (her email), James approved the late submission because of the portal outage (his reply), and he approved the full $612 (his reply again) — three facts compressed into 'approved in full despite the late submission.'",
          "Any question containing 'based on both documents', 'based on all three documents', or a verb like 'compare' or 'differ from' is your signal that one passage won't be enough — go find the matching fact in the other document before choosing.",
        ],
      },
      {
        heading: "'NOT' and 'EXCEPT' questions: verify, don't scan",
        points: [
          "These questions flip the usual logic: three of the four options are true according to the passage, and you're hunting for the one that isn't (or is the odd one out).",
          "Don't skim for the 'obviously right' answer — check each of the four options against the text in turn, crossing off every one you can confirm as stated.",
          "Budget extra time rather than rushing. These are slower than an ordinary detail question, but once you've checked all four options there's no ambiguity left — they're some of the safest points in Part 7 if you don't cut the process short.",
          "If two options both seem unconfirmed, that means you skimmed past the one that's actually stated — go back and reread rather than guessing between them.",
        ],
      },
      {
        heading: "Vocabulary-in-context: the meaning this sentence needs, not the dictionary one",
        body: "'The word \"cover\" in paragraph 2, line 4, is closest in meaning to' is not testing whether you know the word — every option is a genuine meaning of it. It's testing whether you know which meaning applies here. Read the full sentence around the target word, not just the word itself, decide what job it's doing in that sentence, then substitute each option in turn to see which one preserves the meaning. TOEIC's business register leans on words in their less common sense far more than you'd expect from everyday English: 'address' usually means 'deal with' (address a concern), not a street address; 'cover' usually means 'include' (the warranty covers parts and labor), not 'place something over'; 'sound' usually means 'reliable' (a sound investment), not 'noise'. Pick the meaning the sentence forces, never the first meaning that comes to mind.",
      },
      {
        heading: "Forms, schedules, and invoices: scan, don't read",
        points: [
          "Not every single passage is prose. Order confirmations, price lists, itineraries, and fee schedules are laid out in labeled fields, not sentences — reading them top to bottom wastes time you don't need to spend.",
          "Go straight to the field the question names. If the question asks which shipping method a customer chose, locate the 'Shipping method:' line directly rather than reading the surrounding text.",
          "Treat the numbers in these passages as things a later question will ask you to reconcile with a second document — a product page's price, warranty length, and shipping surcharge are exactly the kind of details a customer's follow-up email will reference.",
          "The table is rarely the whole story in a multi-document set. In the printer-order triple passage, the product page's warranty terms only matter once you've read the customer's follow-up email explaining that the printer won't connect to WiFi — the form tells you the rule, the email tells you which case you're in.",
        ],
      },
      {
        heading: "Time-management triage across 54 questions",
        points: [
          "Part 7 gets whatever time Parts 5 and 6 left you — typically 50 to 55 minutes if Part 5 stayed near 20–25 seconds a question and Part 6 stayed near 8–10 minutes total.",
          "Single passages are your fastest points. A short notice like an office-closure email or a product recall notice, with two or three attached questions, should cost well under two minutes total — they're one document and mostly detail questions.",
          "Double and triple sets take longer to read but pay off per minute, since all your source material is already in front of you for the synthesis question. Budget roughly 4–5 minutes per set rather than rationing purely by question count.",
          "If you're behind pace going into the last triple passages, answer the single-document detail questions in each set first, then come back for the synthesis question if time allows — that banks 3–4 of the 5 points instead of guessing on all five.",
        ],
      },
      {
        heading: "Never leave Part 7 blank",
        body: "There is no penalty for a wrong answer on the TOEIC, which makes an unanswered question the single worst outcome available to you — worse than any guess. If time is called with questions still unanswered, fill in every remaining bubble with the same letter rather than leaving them empty; a consistent guess has real odds of landing a few correct answers by pure option distribution, and a blank has none. Do this in the last thirty seconds of the section, not the last three — it's a mechanical task, not a reading one, and it should never be the reason you lose points you didn't need to lose.",
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
