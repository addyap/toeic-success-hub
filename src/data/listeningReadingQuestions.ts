import type { PracticeQuestionData } from "@/components/PracticeQuestion";

// ── Part 1 · Photographs ──
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

const part1c: PracticeQuestionData = {
  prompt: "Part 1 · Listen to statements A–D and pick the one that best describes the scene.",
  photo: true,
  audio: { label: "Photograph statements", durationSec: 0 },
  context:
    "In a warehouse, a worker wearing a safety vest pushes a hand truck stacked with boxes down a narrow aisle. Tall stacks of crates line both sides.",
  options: [
    { label: "A", text: "He's loading boxes onto a delivery truck." },
    { label: "B", text: "He's pushing a hand truck stacked with boxes." },
    { label: "C", text: "He's climbing a ladder to reach the top shelf." },
    { label: "D", text: "He's sweeping the aisle floor." },
  ],
  correct: "B",
  explanation:
    "B matches the action actually shown — he's pushing a hand truck loaded with boxes. A confuses the hand truck with a delivery truck, a similar-sounding swap that's a classic Part 1 trap. C and D describe actions that aren't happening in the scene.",
};

const part1d: PracticeQuestionData = {
  prompt: "Part 1 · Listen to statements A–D and pick the one that best describes the scene.",
  photo: true,
  audio: { label: "Photograph statements", durationSec: 0 },
  context:
    "In an office, a man points at a laptop screen while a woman across the table writes in a notebook. A whiteboard covered in diagrams hangs on the wall behind them.",
  options: [
    { label: "A", text: "The man is printing out a report." },
    { label: "B", text: "The man is pointing at the laptop screen." },
    { label: "C", text: "The woman is erasing the whiteboard." },
    { label: "D", text: "They're shaking hands to end the meeting." },
  ],
  correct: "B",
  explanation:
    "B accurately describes the visible action — the man pointing at the laptop screen. A swaps 'pointing' for the similar-sounding 'printing,' a common Part 1 trap. C and D describe actions that aren't occurring — no one is erasing the board or shaking hands.",
};

const part1e: PracticeQuestionData = {
  prompt: "Part 1 · Listen to statements A–D and pick the one that best describes the scene.",
  photo: true,
  audio: { label: "Photograph statements", durationSec: 0 },
  context:
    "At a construction site, a worker in a hard hat kneels to fasten a beam with a wrench, while a second worker in the background carries a stack of wooden planks across the yard.",
  options: [
    { label: "A", text: "A worker is climbing a crane." },
    { label: "B", text: "A worker is planting flowers along the path." },
    { label: "C", text: "A worker is carrying a stack of planks." },
    { label: "D", text: "The workers are taking a lunch break." },
  ],
  correct: "C",
  explanation:
    "C matches the background worker's action — carrying a stack of planks. B swaps 'planks' for the similar-sounding 'planting,' a classic Part 1 auditory trap. A and D describe actions that aren't occurring — no one is climbing a crane or on break.",
};

const part1f: PracticeQuestionData = {
  prompt: "Part 1 · Listen to statements A–D and pick the one that best describes the scene.",
  photo: true,
  audio: { label: "Photograph statements", durationSec: 0 },
  context:
    "On a train platform, a conductor checks his watch while passengers line up to board through an open door. A cart of luggage sits near the edge of the platform.",
  options: [
    { label: "A", text: "The conductor is checking a ticket." },
    { label: "B", text: "The conductor is checking his watch." },
    { label: "C", text: "The passengers are waiting to disembark." },
    { label: "D", text: "The luggage cart is being pushed onto the train." },
  ],
  correct: "B",
  explanation:
    "B correctly describes the conductor's visible action — checking his watch. A names a plausible but unstated action; he's not shown handling a ticket. C reverses the actual situation, since the passengers are boarding, not disembarking, and D describes the luggage cart as moving when it's simply sitting near the platform's edge.",
};

// ── Part 2 · Question–Response ──
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

const part2b: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  audio: { label: "Spoken question", durationSec: 0 },
  context: 'Question: "Who\'s interviewing the marketing candidate this afternoon?"',
  options: [
    { label: "A", text: "In the third-floor conference room." },
    { label: "B", text: "Sandra from HR will handle it." },
    { label: "C", text: "Sometime around three o'clock." },
  ],
  correct: "B",
  explanation:
    "'Who' asks for a person. 'Sandra from HR' names the person responsible. (A) answers 'where' and (C) answers 'when' — both wrong question types for a 'who' question.",
};

const part2c: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  audio: { label: "Spoken question", durationSec: 0 },
  context: 'Question: "Where did you send the client\'s shipment?"',
  options: [
    { label: "A", text: "We shipped it yesterday afternoon." },
    { label: "B", text: "To our distribution center in Chicago." },
    { label: "C", text: "About twenty boxes in total." },
  ],
  correct: "B",
  explanation:
    "'Where' asks for a location. 'To our distribution center in Chicago' gives a place. (A) answers 'when' and also echoes the word 'shipment' as 'shipped' — a sound-alike trap — and (C) answers 'how many', a non-sequitur here.",
};

const part2d: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  audio: { label: "Spoken question", durationSec: 0 },
  context: 'Question: "Did you back up the server files before the update?"',
  options: [
    { label: "A", text: "Yes, I ran it last night before we started." },
    { label: "B", text: "No, she's not a backup singer anymore." },
    { label: "C", text: "The server room is on the second floor." },
  ],
  correct: "A",
  explanation:
    "This is a yes/no question about completing a backup. (A) confirms it was done. (B) is a sound-alike trap playing on 'back up' vs. 'backup singer' and doesn't answer the question, and (C) answers 'where', a wrong question type for a yes/no question.",
};

const part2e: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  audio: { label: "Spoken question", durationSec: 0 },
  context: 'Question: "The quarterly budget report is due Friday, isn\'t it?"',
  options: [
    { label: "A", text: "Yes, that's right — end of day Friday." },
    { label: "B", text: "It's about fifteen thousand dollars." },
    { label: "C", text: "I already reported the issue to my manager." },
  ],
  correct: "A",
  explanation:
    "This tag question expects a yes/no confirmation. (A) confirms the deadline directly. (B) answers a 'how much' question that wasn't asked, a non-sequitur, and (C) is a sound-alike trap swapping 'report' (noun) for 'reported' (verb) without confirming the deadline.",
};

const part2f: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  audio: { label: "Spoken question", durationSec: 0 },
  context: 'Question: "I think we should book the earlier flight to Chicago."',
  options: [
    { label: "A", text: "That works for me — I'll change the reservation now." },
    { label: "B", text: "The flight attendant was very helpful." },
    { label: "C", text: "We booked the hotel last week." },
  ],
  correct: "A",
  explanation:
    "This is a statement suggesting an action, which requires a reactive response of agreement or disagreement. (A) agrees and acts on it. (B) is a plausible-sounding non-sequitur about a past flight, and (C) is a sound-alike trap reusing 'booked' for an unrelated topic (the hotel) instead of responding to the suggestion.",
};

const part2g: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  audio: { label: "Spoken question", durationSec: 0 },
  context:
    'Question: "Should we hold the training session in the main hall or the small conference room?"',
  options: [
    { label: "A", text: "The small room would be better — we're only expecting ten people." },
    { label: "B", text: "Yes, we should hold it next week." },
    { label: "C", text: "I held the door open for her." },
  ],
  correct: "A",
  explanation:
    "This is an 'or' choice question, which requires picking one of the two named options rather than a yes/no answer. (A) selects a choice with a reason. (B) incorrectly treats it as a yes/no question, and (C) is a sound-alike trap on 'hold' used in an unrelated sense.",
};

const part2h: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  audio: { label: "Spoken question", durationSec: 0 },
  context: 'Question: "Why did the client cancel their order?"',
  options: [
    { label: "A", text: "They found a cheaper supplier." },
    { label: "B", text: "Mr. Chen handled that account." },
    { label: "C", text: "It was cancelled on Tuesday." },
  ],
  correct: "A",
  explanation:
    "'Why' asks for a reason. 'They found a cheaper supplier' gives one. (B) answers 'who', a wrong question type, and (C) answers 'when' while also repeating 'cancel' as 'cancelled' — a sound-alike trap that avoids stating a reason.",
};

// ── Part 3 · Conversations ──
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

const part3d: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 4 — Interview schedule conflict", durationSec: 40 },
  context:
    "(M) Hi Denise, I just saw that the candidate for the marketing position, Mr. Alvarez, is scheduled to come in at 2 PM tomorrow, but I have a budget meeting at that exact time.\n(W) Oh, I didn't realize that meeting had been moved up. Would 10 AM work instead?\n(M) Yes, 10 AM is open on my calendar. Can you also ask Priya from the design team to join, since the role works closely with her group?\n(W) Sure, I'll email both of them right now to confirm the new time.\n\nQuestion: Why does the man want to change the interview time?",
  options: [
    { label: "A", text: "The candidate withdrew his application." },
    { label: "B", text: "He has a scheduling conflict with another meeting." },
    { label: "C", text: "The design team requested a later start." },
    { label: "D", text: "The interview location has changed." },
  ],
  correct: "B",
  explanation:
    "The man says, 'I have a budget meeting at that exact time,' which is why he asks to move the interview. (A), (C), and (D) are never mentioned — they are typical distractors that reuse vocabulary ('candidate', 'design team', 'interview') from the conversation.",
};

const part3e: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 5 — Supplier delivery delay", durationSec: 42 },
  context:
    "(M) Hi Ms. Tran, this is Mark from the warehouse. The shipment of packaging materials we ordered was supposed to arrive this morning, but it hasn't shown up yet.\n(W) I'm sorry about that — our supplier just informed us there's a delay at customs, and the truck won't leave the port until tomorrow.\n(M) That's a problem. We only have enough boxes for two more days of orders.\n(W) Understood. I'll ask them to prioritize a partial shipment by air so you get at least half the order tomorrow afternoon.\n\nQuestion: According to the woman, why is the shipment late?",
  options: [
    { label: "A", text: "The warehouse forgot to place the order." },
    { label: "B", text: "The delivery truck broke down on the highway." },
    { label: "C", text: "There is a delay at customs." },
    { label: "D", text: "The packaging materials were out of stock." },
  ],
  correct: "C",
  explanation:
    "The woman explains that 'our supplier just informed us there's a delay at customs, and the truck won't leave the port until tomorrow.' (A), (B), and (D) are never mentioned — they are common shipment-related distractors that reuse vocabulary ('shipment', 'truck', 'packaging materials') from the conversation.",
};

const part3f: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 6 — IT helpdesk call", durationSec: 36 },
  context:
    "(W) Hi, this is Lauren in accounting. My laptop keeps freezing every time I open the new expense software.\n(M) Thanks for calling, Lauren. Can you tell me what error message appears, if any?\n(W) There's no error, it just freezes completely and I have to restart the computer.\n(M) That sounds like it could be a memory issue. I'll remote into your machine in the next ten minutes and check the software's memory usage.\n(W) Great, I'll be at my desk.\n\nQuestion: What problem is Lauren experiencing?",
  options: [
    { label: "A", text: "Her computer displays a memory error message." },
    { label: "B", text: "The expense software is not installed correctly." },
    { label: "C", text: "Her laptop freezes when she uses a certain program." },
    { label: "D", text: "Her password to the accounting system expired." },
  ],
  correct: "C",
  explanation:
    "Lauren states, 'my laptop keeps freezing every time I open the new expense software.' She explicitly says 'there's no error,' which rules out (A). (B) and (D) are never mentioned — they are typical IT-related distractors that reuse vocabulary ('expense software', 'accounting') from the conversation.",
};

const part3g: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 7 — Client dinner reservation", durationSec: 38 },
  context:
    "(M) Hi, I'd like to confirm a reservation for six people under the name Whitfield, for this Thursday at 7 PM.\n(W) Let me check... I see the reservation, but I have you down for four people, not six.\n(M) Oh, two of our clients confirmed just this morning, so we need to add two more seats.\n(W) No problem, I can update it to six and move you to a larger table in our private dining room.\n\nQuestion: Why does the man contact the restaurant?",
  options: [
    { label: "A", text: "To cancel the Thursday reservation." },
    { label: "B", text: "To increase the number of guests on a reservation." },
    { label: "C", text: "To complain about a previous dinner." },
    { label: "D", text: "To request a different day for the reservation." },
  ],
  correct: "B",
  explanation:
    "The man explains that 'two of our clients confirmed just this morning, so we need to add two more seats,' and the woman updates the reservation from four to six. (A), (C), and (D) are never mentioned — they are common restaurant-related distractors that reuse vocabulary ('reservation', 'Thursday') from the conversation.",
};

const part3h: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 8 — Expense report question", durationSec: 37 },
  context:
    "(W) Hi Tom, I'm calling about my expense report from last week — it still shows as pending.\n(M) Let me pull it up... I see the issue. The receipt for your taxi ride is missing from the submission.\n(W) I have it right here, I must have forgotten to attach it. Can I email it to you now?\n(M) Yes, please send it today and I'll approve the report by end of day tomorrow.\n\nQuestion: Why is the woman's expense report still pending?",
  options: [
    { label: "A", text: "She submitted the report to the wrong department." },
    { label: "B", text: "A receipt is missing from her submission." },
    { label: "C", text: "Her manager has not signed the approval form." },
    { label: "D", text: "The company changed its expense policy." },
  ],
  correct: "B",
  explanation:
    "The man tells her, 'I see the issue. The receipt for your taxi ride is missing from the submission.' (A), (C), and (D) are never mentioned — they are typical expense-related distractors that reuse vocabulary ('expense report', 'approve') from the conversation.",
};

// ── Part 4 · Short Talks ──
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

const part4b: PracticeQuestionData = {
  prompt: "Part 4 · Short Talks. Read the radio ad and answer the question.",
  listening: true,
  audio: { label: "Short talk — Store grand-opening ad", durationSec: 0 },
  context:
    "Attention shoppers! Greenfield Home Goods is celebrating its grand opening this Saturday at our new location on Maple Avenue. From nine A.M. until closing, enjoy twenty percent off your entire purchase. The first fifty customers through our doors will receive a free tote bag filled with samples. We'll also have live music, refreshments, and prize drawings throughout the day. Don't miss out — see you Saturday at Greenfield Home Goods!\n\nQuestion: What will the first fifty customers receive?",
  options: [
    { label: "A", text: "A twenty percent discount coupon for a future visit." },
    { label: "B", text: "A free tote bag filled with samples." },
    { label: "C", text: "An entry into a raffle for a gift card." },
    { label: "D", text: "A voucher for free refreshments." },
  ],
  correct: "B",
  explanation:
    "The ad states 'The first fifty customers through our doors will receive a free tote bag filled with samples.' The twenty percent discount (A) applies to all shoppers, not just the first fifty, and (C) and (D) are never mentioned in the talk.",
};

const part4c: PracticeQuestionData = {
  prompt: "Part 4 · Short Talks. Read the safety briefing and answer the question.",
  listening: true,
  audio: { label: "Short talk — Factory safety briefing", durationSec: 0 },
  context:
    "Good morning, everyone. Before we begin today's shift, I want to remind you that all workers must wear safety goggles and steel-toed boots at all times on the production floor. Yesterday's inspection turned up a loose guard rail near assembly line three, so that area will be roped off until maintenance completes repairs this afternoon. Please use the alternate walkway near the loading dock in the meantime. As always, report any hazards you notice to your shift supervisor immediately. Thank you for helping us keep this facility safe.\n\nQuestion: Why is the area near assembly line three roped off?",
  options: [
    { label: "A", text: "A machine there is being replaced." },
    { label: "B", text: "A guard rail needs to be repaired." },
    { label: "C", text: "A new safety inspection is starting." },
    { label: "D", text: "The loading dock is being cleaned." },
  ],
  correct: "B",
  explanation:
    "The speaker says the inspection found 'a loose guard rail near assembly line three, so that area will be roped off until maintenance completes repairs.' (A), (C), and (D) are never stated — the inspection already happened, and the loading dock is only mentioned as an alternate walkway.",
};

const part4d: PracticeQuestionData = {
  prompt: "Part 4 · Short Talks. Read the voicemail message and answer the question.",
  listening: true,
  audio: { label: "Short talk — Client voicemail", durationSec: 0 },
  context:
    "Hi, this is Marcus Lee calling from Bright Path Consulting for Dana. I'm so sorry for the short notice, but I need to reschedule our meeting that was planned for Thursday at two o'clock. Something urgent has come up on my end. Would Friday morning around ten work instead? I'll have the revised budget proposal ready either way. Please call me back at your earliest convenience to confirm, or just send me an email. Thanks so much for understanding, and I look forward to speaking with you soon.\n\nQuestion: Why is Marcus calling?",
  options: [
    { label: "A", text: "To cancel the contract with Dana's company." },
    { label: "B", text: "To request a new time for their meeting." },
    { label: "C", text: "To ask Dana to prepare a budget proposal." },
    { label: "D", text: "To confirm receipt of an email from Dana." },
  ],
  correct: "B",
  explanation:
    "Marcus says, 'I need to reschedule our meeting that was planned for Thursday at two o'clock... Would Friday morning around ten work instead?' Canceling the contract (A) and confirming an email (D) are never mentioned, and it is Marcus, not Dana, who will prepare the budget proposal (C).",
};

const part4e: PracticeQuestionData = {
  prompt: "Part 4 · Short Talks. Read the museum audio-tour excerpt and answer the question.",
  listening: true,
  audio: { label: "Short talk — Museum audio tour", durationSec: 0 },
  context:
    "Welcome to Gallery Four, home to the museum's collection of nineteenth-century landscape paintings. The large canvas directly in front of you, painted in eighteen sixty-two, was the artist's first work to be publicly exhibited, and it established the dramatic use of light that would define her career. Notice how the brushwork becomes looser toward the horizon, a technique she developed after moving to the coast. When you're ready, proceed through the archway on your right to Gallery Five, where you'll find her later, more abstract works. Press pause at any point if you'd like to linger here longer.\n\nQuestion: What is significant about the large painting in Gallery Four?",
  options: [
    { label: "A", text: "It was the artist's final completed work." },
    { label: "B", text: "It was the artist's first publicly exhibited work." },
    { label: "C", text: "It was painted after she moved to the coast." },
    { label: "D", text: "It was donated by a private collector." },
  ],
  correct: "B",
  explanation:
    "The narrator states the painting 'was the artist's first work to be publicly exhibited.' It is not her final work (A) — her later works are in Gallery Five — and the coastal move happened after this painting, since the looser brushwork technique was 'developed after moving to the coast' (C). (D) is never mentioned.",
};

const part4f: PracticeQuestionData = {
  prompt: "Part 4 · Short Talks. Read the company announcement and answer the question.",
  listening: true,
  audio: { label: "Short talk — Company all-hands announcement", durationSec: 0 },
  context:
    "Thank you all for joining today's all-hands meeting. I want to update you on a change to our remote work policy that takes effect next month. Starting the first of next month, employees will be required to come into the office at least three days a week, up from the current one day. This decision follows feedback from team leads about collaboration challenges. Your manager will reach out individually to confirm which three days work best for your team. We understand this is a big shift, and HR will be hosting Q&A sessions next week to address your questions. We appreciate your flexibility as we make this transition.\n\nQuestion: What will happen next week, according to the speaker?",
  options: [
    { label: "A", text: "The new policy will officially take effect." },
    { label: "B", text: "Managers will assign permanent office days." },
    { label: "C", text: "HR will hold sessions to answer employees' questions." },
    { label: "D", text: "Team leads will submit feedback on collaboration." },
  ],
  correct: "C",
  explanation:
    "The speaker says 'HR will be hosting Q&A sessions next week to address your questions.' The policy itself takes effect 'next month,' not next week (A), no timeframe is given for managers confirming office days (B), and the team leads' feedback is described as something that already happened (D).",
};

// ── Part 5 · Incomplete Sentences ──
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

const part5b: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The Human Resources team's ______ of the new payroll system took nearly three weeks to complete.",
  options: [
    { label: "A", text: "implement" },
    { label: "B", text: "implementation" },
    { label: "C", text: "implemented" },
    { label: "D", text: "implementing" },
  ],
  correct: "B",
  explanation:
    "The blank follows the possessive 'team's' and precedes 'of the new payroll system', so a noun is required: 'implementation'. (A) is the base verb, (C) is a past tense/participle form, and (D) is a gerund — none fits the possessive + noun-phrase slot.",
};

const part5c: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The finance team ______ the annual budget report since early Monday morning, and they still have not finished.",
  options: [
    { label: "A", text: "reviews" },
    { label: "B", text: "reviewed" },
    { label: "C", text: "has reviewed" },
    { label: "D", text: "has been reviewing" },
  ],
  correct: "D",
  explanation:
    "The time marker 'since early Monday morning' combined with 'still have not finished' signals an action that began in the past and is ongoing, which requires the present perfect continuous: 'has been reviewing'. (A) is simple present, (B) is simple past, and (C) is present perfect simple, which implies completion — all contradict the ongoing, unfinished nature of the action.",
};

const part5d: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The logistics manager is responsible ______ ensuring that all shipments arrive on schedule.",
  options: [
    { label: "A", text: "for" },
    { label: "B", text: "to" },
    { label: "C", text: "with" },
    { label: "D", text: "at" },
  ],
  correct: "A",
  explanation:
    "'Responsible for' is the fixed collocation used to describe a duty or task someone must handle. 'Responsible to' (B) instead describes accountability to a person or body (e.g., 'responsible to the board'), while (C) 'with' and (D) 'at' do not collocate with 'responsible' in this sense at all.",
};

const part5e: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The sales representative ______ closed the largest deal of the quarter was promoted to regional manager.",
  options: [
    { label: "A", text: "who" },
    { label: "B", text: "which" },
    { label: "C", text: "whom" },
    { label: "D", text: "whose" },
  ],
  correct: "A",
  explanation:
    "The relative clause needs a subject pronoun referring to a person ('the sales representative... closed the deal'), so 'who' is correct. (B) 'which' refers to things, not people; (C) 'whom' is an object pronoun and cannot serve as the subject of 'closed'; (D) 'whose' shows possession, which is not what the sentence expresses.",
};

const part5f: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "______ the server outage lasted less than an hour, the company lost thousands of dollars in potential sales.",
  options: [
    { label: "A", text: "Although" },
    { label: "B", text: "Despite" },
    { label: "C", text: "Because of" },
    { label: "D", text: "Due to" },
  ],
  correct: "A",
  explanation:
    "The blank introduces a full clause with its own subject and verb ('the server outage lasted less than an hour'), which requires a subordinating conjunction of contrast: 'Although'. (B) 'Despite' and (D) 'Due to' are prepositions that must be followed by a noun phrase, not a clause, and (C) 'Because of' is also a preposition and additionally signals cause rather than the contrast the sentence expresses.",
};

const part5g: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "Of the three assembly lines, Line C produces ______ number of defective units per month.",
  options: [
    { label: "A", text: "low" },
    { label: "B", text: "lower" },
    { label: "C", text: "the lower" },
    { label: "D", text: "the lowest" },
  ],
  correct: "D",
  explanation:
    "Because three assembly lines are being compared, the superlative form is required: 'the lowest'. (A) is the base positive adjective with no comparison, and (B) and (C) are comparative forms reserved for comparing exactly two items, not three or more.",
};

const part5h: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "______ information about the new office complex has been released to prospective tenants so far.",
  options: [
    { label: "A", text: "Many" },
    { label: "B", text: "Few" },
    { label: "C", text: "Little" },
    { label: "D", text: "A number of" },
  ],
  correct: "C",
  explanation:
    "'Information' is an uncountable noun, so it must be paired with a quantifier for uncountable nouns and the singular verb 'has been released': 'little' is correct. (A) 'Many', (B) 'Few', and (D) 'A number of' all modify plural countable nouns, which 'information' is not.",
};

// ── Part 6 · Text Completion ──
const part6: PracticeQuestionData = {
  prompt: "Part 6 · Read the email and choose the best word for the blank.",
  context:
    "From: it-support@northwind.co\nTo: all-staff@northwind.co\nSubject: System Upgrade — This Weekend\n\nDear team,\n\nPlease be advised that a company-wide system upgrade has been ______ for Saturday, June 20, from 10:00 PM to 2:00 AM. During this window, email and file servers will be unavailable. We apologize for any interruption this may cause and thank you for your understanding and cooperation as we improve our infrastructure.\n\n— IT Support",
  options: [
    { label: "A", text: "scheduled" },
    { label: "B", text: "schedule" },
    { label: "C", text: "scheduling" },
    { label: "D", text: "schedules" },
  ],
  correct: "A",
  explanation:
    "'Has been ______ for Saturday' needs a past participle to complete the present-perfect passive: 'has been scheduled'. (B) is a base verb/noun, (C) is a gerund/noun, and (D) is a third-person-singular verb — none fit after 'has been'.",
};

const part6b: PracticeQuestionData = {
  prompt: "Part 6 · Read the email and choose the best word for the blank.",
  context:
    "From: hr@brightpath-consulting.com\nTo: all-staff@brightpath-consulting.com\nSubject: New Flexible Work Hours Policy\n\nDear colleagues,\n\nStarting next Monday, employees will be ______ to choose their own start time between 7:00 AM and 10:00 AM, provided they complete a full eight-hour shift. This change is part of our ongoing effort to improve work-life balance across departments. Employees who wish to adjust their schedule should notify their manager at least two days in advance.\n\nThank you for your continued dedication.\n\nHR Department",
  options: [
    { label: "A", text: "permitted" },
    { label: "B", text: "permit" },
    { label: "C", text: "permission" },
    { label: "D", text: "permitting" },
  ],
  correct: "A",
  explanation:
    "The modal passive requires a past participle after 'will be': 'will be permitted to choose'. (B) 'permit' is a base verb and cannot follow 'will be' directly, (C) 'permission' is a noun and would leave the sentence without a verb, and (D) 'permitting' is a present participle/gerund that does not fit the passive construction.",
};

const part6c: PracticeQuestionData = {
  prompt: "Part 6 · Read the email and choose the best word for the blank.",
  context:
    "From: p.martinez@harlowfinancial.com\nTo: team-leads@harlowfinancial.com\nSubject: Confirmation: Quarterly Planning Meeting Agenda\n\nHi all,\n\nThis is to confirm that our quarterly planning meeting will take place this Thursday at 2:00 PM in Conference Room B. Please review the attached agenda ______ the meeting so that you can raise any questions during the discussion. We will begin with a budget review, followed by a presentation on the new marketing strategy. If you are unable to attend, kindly send a representative in your place.\n\nLooking forward to a productive session.\n\nPaula Martinez\nOperations Manager",
  options: [
    { label: "A", text: "prior to" },
    { label: "B", text: "since" },
    { label: "C", text: "until" },
    { label: "D", text: "among" },
  ],
  correct: "A",
  explanation:
    "'Prior to' correctly signals that the agenda must be read before the meeting so that questions can be raised once the discussion begins. (B) 'since' requires a starting point in time and doesn't fit this instruction, (C) 'until' would suggest the review continues up to the meeting rather than being completed beforehand, and (D) 'among' is a preposition of position among multiple items and makes no sense here.",
};

const part6d: PracticeQuestionData = {
  prompt: "Part 6 · Read the email and choose the best word for the blank.",
  context:
    "From: facilities@questcorp.com\nTo: all-employees@questcorp.com\nSubject: Parking Garage Renovation Notice\n\nDear staff,\n\nPlease be informed that the north parking garage will be closed for renovation from August 3 to August 21. During this period, all employees are asked to park in the temporary lot located behind the cafeteria. We recognize that this closure may cause some ______, and we appreciate your patience while the work is completed. Shuttle service will run every fifteen minutes between the temporary lot and the main building entrance.\n\nFacilities Management",
  options: [
    { label: "A", text: "inconvenience" },
    { label: "B", text: "inconvenient" },
    { label: "C", text: "inconveniently" },
    { label: "D", text: "inconvenienced" },
  ],
  correct: "A",
  explanation:
    "'Cause some inconvenience' requires the noun 'inconvenience' as the object of 'cause'. (B) 'inconvenient' is an adjective and cannot stand alone as the object of 'cause', (C) 'inconveniently' is an adverb, and (D) 'inconvenienced' is a past participle/adjective describing a person who has been affected — none of these can serve as the noun object the sentence needs.",
};

const part6e: PracticeQuestionData = {
  prompt: "Part 6 · Read the email and choose the best word for the blank.",
  context:
    "From: r.chen@novatech-devices.com\nTo: distributors@novatech-devices.com\nSubject: Update on SmartHome Hub Launch Date\n\nDear valued partners,\n\nWe regret to inform you that the launch of the SmartHome Hub, originally scheduled for September 1, will be delayed until October 15 due to an unexpected shortage of a key component. Our engineering team has been working closely with suppliers to resolve the issue as quickly as possible. ______, we do not expect any further delays beyond this new date, and we are confident that the extra time will allow us to deliver a more reliable product.\n\nBest regards,\n\nRachel Chen\nDirector of Distribution",
  options: [
    { label: "A", text: "Fortunately" },
    { label: "B", text: "Similarly" },
    { label: "C", text: "Otherwise" },
    { label: "D", text: "Meanwhile" },
  ],
  correct: "A",
  explanation:
    "'Fortunately' correctly introduces the reassuring news that no further delays are expected, matching the positive, confident tone of the rest of the sentence. (B) 'Similarly' would incorrectly suggest a comparison to something previously mentioned, (C) 'Otherwise' implies a conditional alternative that isn't set up anywhere in the message, and (D) 'Meanwhile' incorrectly suggests two events happening at the same time rather than introducing good news about the outcome.",
};

// ── Part 7 · Reading Comprehension ──
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

const part7b: PracticeQuestionData = {
  prompt: "Part 7 · Read the notice and answer the question.",
  context:
    "PRODUCT RECALL NOTICE\nBrightHome Appliances\n\nModel: BH-2200 Electric Kettle\n\nBrightHome Appliances is voluntarily recalling all BH-2200 Electric Kettles manufactured between March and June 2025. A defect in the base wiring may cause the kettle to overheat during use, posing a fire risk. No injuries have been reported to date.\n\nCustomers who purchased this model should stop using it immediately and contact our support line at 1-800-555-0199 to arrange a free replacement. Proof of purchase is not required.\n\nQuestion: Why is BrightHome Appliances recalling the BH-2200 Electric Kettle?",
  options: [
    { label: "A", text: "Because customers complained about its price." },
    { label: "B", text: "Because the wiring defect creates a fire risk." },
    { label: "C", text: "Because the kettle failed a taste-quality test." },
    { label: "D", text: "Because the company is discontinuing the model line." },
  ],
  correct: "B",
  explanation:
    "The notice states the defect 'may cause the kettle to overheat during use, posing a fire risk', so (B) is correct.",
};

const part7c: PracticeQuestionData = {
  prompt: "Part 7 · Read the job posting and answer the question.",
  context:
    "JUNIOR DATA ANALYST — Riverstone Consulting\n\nWe are seeking a detail-oriented Junior Data Analyst to join our growing team in Chicago. Responsibilities include cleaning datasets, building dashboards, and presenting findings to clients. Candidates must hold a bachelor's degree in statistics, economics, or a related field, and have at least one year of experience with SQL. Familiarity with Python is a plus but not required.\n\nThis is a hybrid role requiring two days per week in the office. Interested applicants should submit a resume and cover letter by August 15.\n\nQuestion: What is required of applicants for this position?",
  options: [
    { label: "A", text: "A master's degree in computer science." },
    { label: "B", text: "Advanced proficiency in Python." },
    { label: "C", text: "At least one year of experience with SQL." },
    { label: "D", text: "Prior experience managing a team." },
  ],
  correct: "C",
  explanation:
    "The posting states candidates 'must hold a bachelor's degree ... and have at least one year of experience with SQL', while Python is described as 'a plus but not required', so (C) is correct.",
};

const part7d: PracticeQuestionData = {
  prompt: "Part 7 · Read the flyer and answer the question.",
  context:
    "THE HARBOR VIEW HOTEL — Weekday Escape Package\n\nHelp us fill our rooms during the quieter weekdays! Our Weekday Escape Package is available Sunday through Thursday nights only and includes a deluxe room with harbor views, a complimentary breakfast for two, and a 20% discount at our on-site spa. Rooms must be booked at least seven days in advance, and the package is not available during holiday weekends.\n\nGuests who mention this flyer at check-in will also receive a late checkout until 2 p.m., subject to availability.\n\nQuestion: What can be inferred about the Weekday Escape Package?",
  options: [
    { label: "A", text: "It is designed to attract guests during slower business days." },
    { label: "B", text: "It is only available to hotel loyalty program members." },
    { label: "C", text: "It includes free admission to a nearby amusement park." },
    { label: "D", text: "It requires a minimum stay of one week." },
  ],
  correct: "A",
  explanation:
    "The flyer opens with 'Help us fill our rooms during the quieter weekdays!' and limits the package to 'Sunday through Thursday nights only', indicating it is meant to attract guests on slower days, so (A) is correct.",
};

const part7e: PracticeQuestionData = {
  prompt: "Part 7 · Read the delivery notice and answer the question.",
  context:
    "SWIFTCARGO DELIVERY NOTICE\n\nTracking Number: SC-88213456\n\nOur driver attempted to deliver your package today at 2:15 p.m., but no one was available to accept it at the address provided. Because the package requires a signature upon delivery, it could not be left at your door.\n\nYour package is now being held at our local depot (14 Elm Street) for up to five business days. To arrange redelivery or to pick up the package yourself, please schedule a time using the SwiftCargo app or call 1-800-555-0134. If the package is not claimed within five business days, it will be returned to the sender.\n\nQuestion: What must the recipient do to receive the package?",
  options: [
    { label: "A", text: "Wait for a second automatic delivery attempt." },
    { label: "B", text: "Pay a redelivery fee at the depot." },
    { label: "C", text: "Schedule a pickup or redelivery within five business days." },
    { label: "D", text: "Provide a copy of the original receipt." },
  ],
  correct: "C",
  explanation:
    "The notice instructs the recipient to 'schedule a time using the SwiftCargo app or call 1-800-555-0134' before the depot hold of 'up to five business days' expires, so (C) is correct.",
};

const part7f: PracticeQuestionData = {
  prompt: "Part 7 · Read the letter and answer the question.",
  context:
    "Dear Ms. Alvarez,\n\nThank you for bringing the issue with your recent order (#48213) to our attention. We are sorry to hear that the dining chairs arrived with visible scratches on the armrests. This does not meet the quality standard we aim to provide, and we take full responsibility for the packaging oversight that caused the damage.\n\nA replacement set will be shipped to you at no additional cost, and you should receive it within 5-7 business days. We have also issued a 15% discount code, SAVE15, for use on your next purchase with us. Please keep the damaged chairs until the replacement arrives, as our courier will collect them at that time.\n\nSincerely,\nDaniel Osei\nCustomer Care, Aldridge Furniture\n\nQuestion: What can be inferred from the letter?",
  options: [
    { label: "A", text: "The customer will be charged for the replacement chairs." },
    { label: "B", text: "The company believes its own packaging process caused the damage." },
    { label: "C", text: "The chairs were discontinued after the complaint." },
    { label: "D", text: "The customer must return the chairs before receiving a refund." },
  ],
  correct: "B",
  explanation:
    "The letter states the company 'take[s] full responsibility for the packaging oversight that caused the damage', indicating it believes its own process was at fault, so (B) is correct.",
};

export const part1Questions: PracticeQuestionData[] = [
  part1a,
  part1b,
  part1c,
  part1d,
  part1e,
  part1f,
];
export const part2Questions: PracticeQuestionData[] = [
  part2,
  part2b,
  part2c,
  part2d,
  part2e,
  part2f,
  part2g,
  part2h,
];
export const part3Questions: PracticeQuestionData[] = [
  part3,
  part3b,
  part3c,
  part3d,
  part3e,
  part3f,
  part3g,
  part3h,
];
export const part4Questions: PracticeQuestionData[] = [
  part4,
  part4b,
  part4c,
  part4d,
  part4e,
  part4f,
];
export const part5Questions: PracticeQuestionData[] = [
  part5,
  part5b,
  part5c,
  part5d,
  part5e,
  part5f,
  part5g,
  part5h,
];
export const part6Questions: PracticeQuestionData[] = [part6, part6b, part6c, part6d, part6e];
export const part7Questions: PracticeQuestionData[] = [
  part7,
  part7b,
  part7c,
  part7d,
  part7e,
  part7f,
];

export const listeningReadingQuestions: PracticeQuestionData[] = [
  ...part1Questions,
  ...part2Questions,
  ...part3Questions,
  ...part4Questions,
  ...part5Questions,
  ...part6Questions,
  ...part7Questions,
];
