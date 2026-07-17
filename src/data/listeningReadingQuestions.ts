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

const part1g: PracticeQuestionData = {
  prompt: "Part 1 · Listen to statements A–D and pick the one that best describes the scene.",
  photo: true,
  audio: { label: "Photograph statements", durationSec: 0 },
  context:
    "In a clothing store, a saleswoman folds sweaters and stacks them on a display table near the entrance. Racks of jackets stand nearby, and a mannequin wearing a scarf stands by the window.",
  options: [
    { label: "A", text: "She's holding a stack of folders near the window." },
    { label: "B", text: "She's folding sweaters and stacking them on a table." },
    { label: "C", text: "She's hanging jackets on a rack." },
    { label: "D", text: "She's trying on a scarf in front of a mirror." },
  ],
  correct: "B",
  explanation:
    "B matches the action actually shown — she's folding sweaters and stacking them on a table. A confuses folding with holding and sweaters with folders, a classic sound-alike swap. C and D describe actions that aren't happening in the scene; the jackets are already on the rack and the scarf is worn only by the mannequin.",
};

const part1h: PracticeQuestionData = {
  prompt: "Part 1 · Listen to statements A–D and pick the one that best describes the scene.",
  photo: true,
  audio: { label: "Photograph statements", durationSec: 0 },
  context:
    "In a restaurant kitchen, a chef in a white apron stirs a large pot of soup on the stove while another cook chops vegetables at a nearby counter. Pots and pans hang from an overhead rack.",
  options: [
    { label: "A", text: "The chef is staring at a pot of soup." },
    { label: "B", text: "The chef is stirring a pot of soup on the stove." },
    { label: "C", text: "The cook is washing dishes at the sink." },
    { label: "D", text: "The pans are being taken down from the rack." },
  ],
  correct: "B",
  explanation:
    "B matches the action actually shown — the chef is stirring the pot of soup on the stove. A confuses stirring with staring, a similar-sounding swap that's a classic Part 1 trap. C mentions a sink that isn't in the scene, and D describes an action that isn't happening; the pans are hanging, not being taken down.",
};

const part1i: PracticeQuestionData = {
  prompt: "Part 1 · Listen to statements A–D and pick the one that best describes the scene.",
  photo: true,
  audio: { label: "Photograph statements", durationSec: 0 },
  context:
    "In a public library, a librarian pushes a cart of returned books between tall bookshelves while a young man reads a newspaper at a table nearby.",
  options: [
    { label: "A", text: "The librarian is checking out books at the front desk." },
    { label: "B", text: "The librarian is pushing a cart of books between the shelves." },
    { label: "C", text: "The man is writing in a notebook at the table." },
    { label: "D", text: "The shelves are being restocked with new arrivals." },
  ],
  correct: "B",
  explanation:
    "B matches the action actually shown — the librarian is pushing a cart of books between the shelves. A describes an action that isn't happening and mentions a front desk that isn't in the scene. C misstates what the man is doing; he's reading a newspaper, not writing. D isn't happening — the cart holds returned books, not new arrivals being shelved.",
};

const part1j: PracticeQuestionData = {
  prompt: "Part 1 · Listen to statements A–D and pick the one that best describes the scene.",
  photo: true,
  audio: { label: "Photograph statements", durationSec: 0 },
  context:
    "At a farmers market stall, a vendor arranges baskets of fresh strawberries and peaches on a wooden table while a customer smells a bouquet of flowers at the next stall.",
  options: [
    { label: "A", text: "The vendor is watering plants in a greenhouse." },
    { label: "B", text: "The vendor is arranging baskets of fruit on the table." },
    { label: "C", text: "The customer is buying a bouquet of flowers." },
    { label: "D", text: "The vendor is weighing bags of flour." },
  ],
  correct: "B",
  explanation:
    "B matches the action actually shown — the vendor is arranging baskets of fruit on the table. A describes a greenhouse that isn't in the scene. C overstates the customer's action; she's smelling the flowers, not buying them. D confuses flour with flowers and fruit, a classic sound-alike trap.",
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

const part2i: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  audio: { label: "Spoken question", durationSec: 0 },
  context: 'Question: "How do I reset my password for the new expense system?"',
  options: [
    { label: "A", text: "Click the 'Forgot Password' link on the login page." },
    { label: "B", text: "It was reset about twenty minutes ago." },
    { label: "C", text: "The IT helpdesk is on the third floor." },
  ],
  correct: "A",
  explanation:
    "'How' asks for a method or process. Clicking the reset link explains the procedure. (B) answers 'when' and (C) answers 'where' — both wrong question types for a 'how' question.",
};

const part2j: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  audio: { label: "Spoken question", durationSec: 0 },
  context: 'Question: "How many units did we sell during the weekend clearance sale?"',
  options: [
    { label: "A", text: "We moved about three hundred units." },
    { label: "B", text: "The sale runs through this weekend." },
    { label: "C", text: "Yes, the discount was quite popular." },
  ],
  correct: "A",
  explanation:
    "'How many' asks for a quantity. Only (A) gives a number. (B) answers 'how long' the sale lasts, and (C) is a yes/no reply, which doesn't fit a quantity question.",
};

const part2k: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  audio: { label: "Spoken question", durationSec: 0 },
  context: 'Question: "Isn\'t the new assembly line supposed to start today?"',
  options: [
    { label: "A", text: "Yes, it's scheduled to go live this afternoon." },
    { label: "B", text: "No, we assembled it ourselves." },
    { label: "C", text: "It's on the second floor." },
  ],
  correct: "A",
  explanation:
    "Negative questions like 'Isn't...' still expect a yes/no confirmation. (A) confirms the schedule directly. (B) is a same-sound trap using 'assembled' instead of addressing the timing, and (C) answers 'where', not the yes/no question asked.",
};

const part2l: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  audio: { label: "Spoken question", durationSec: 0 },
  context: 'Question: "Do you know when the contract needs to be signed?"',
  options: [
    { label: "A", text: "By the end of this week, I believe." },
    { label: "B", text: "Yes, I know the client well." },
    { label: "C", text: "The lawyer's office is downtown." },
  ],
  correct: "A",
  explanation:
    "This is an embedded question — the real question is 'when does the contract need to be signed?' (A) gives a deadline. (B) mistakenly treats 'Do you know' as a literal yes/no question about personal acquaintance, and (C) answers 'where'.",
};

const part2m: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  audio: { label: "Spoken question", durationSec: 0 },
  context: 'Question: "What\'s the asking price for the downtown office space?"',
  options: [
    { label: "A", text: "It's listed at $4,200 a month." },
    { label: "B", text: "It's available starting next month." },
    { label: "C", text: "The realtor showed it to three clients." },
  ],
  correct: "A",
  explanation:
    "'What's the price' asks for a monetary figure. Only (A) provides one. (B) answers 'when' it's available, and (C) answers 'who' viewed it — both wrong question types.",
};

const part2n: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  audio: { label: "Spoken question", durationSec: 0 },
  context: "Question: \"The patient's insurance is still valid, isn't it?\"",
  options: [
    { label: "A", text: "Yes, it doesn't expire until December." },
    { label: "B", text: "No, she hasn't validated her parking yet." },
    { label: "C", text: "The appointment is at 2 PM." },
  ],
  correct: "A",
  explanation:
    "This tag question asks for confirmation about the insurance status. (A) confirms it directly with a supporting detail. (B) is a same-sound trap swapping 'valid' for 'validated' (parking), and (C) is a non-sequitur about scheduling.",
};

const part2o: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  audio: { label: "Spoken question", durationSec: 0 },
  context:
    'Question: "Would you like the buffet option or the plated dinner service for the gala?"',
  options: [
    { label: "A", text: "Let's go with the buffet — it's more casual." },
    { label: "B", text: "Yes, that sounds great." },
    { label: "C", text: "The gala starts at seven." },
  ],
  correct: "A",
  explanation:
    "Or-choice questions require picking one of the two options offered. (A) selects the buffet. (B) incorrectly answers with a plain yes/no, which doesn't work for an 'or' question, and (C) answers 'when', not which option.",
};

const part2p: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  audio: { label: "Spoken question", durationSec: 0 },
  context: 'Question: "We just received a complaint about a delivery delay."',
  options: [
    { label: "A", text: "I'll call the customer right away to check the tracking and apologize." },
    { label: "B", text: "The warehouse ships every day at noon." },
    { label: "C", text: "That complaint sounds delightful." },
  ],
  correct: "A",
  explanation:
    "This is a statement requiring an appropriate reaction, not an answer to a wh-question. (A) responds with a logical next step. (B) is an unrelated fact about shipping schedules, and (C) uses a similar-sounding word ('delightful') that clashes with the negative context — an implausible reaction.",
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

const part3i: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 9 — Company car trouble", durationSec: 38 },
  context:
    "(M) Hi Sandra, the pool car I reserved for tomorrow's client visit is making a strange noise. I don't think it's safe to drive.\n(W) Thanks for letting me know. I'll have the mechanic take a look at it today. In the meantime, would you like to take a taxi to the client visit instead?\n(M) That would help, as long as I can be reimbursed for the fare.\n(W) Definitely. Just keep the receipt and attach it to your expense report next week.\n\nQuestion: Why does the man say the pool car is not safe to drive?",
  options: [
    { label: "A", text: "It is making a strange noise." },
    { label: "B", text: "It has a flat tire." },
    { label: "C", text: "It failed a safety inspection." },
    { label: "D", text: "It ran out of fuel." },
  ],
  correct: "A",
  explanation:
    "The man says the pool car 'is making a strange noise' and that he doesn't think it's safe to drive. (B), (C), and (D) are never mentioned — they are typical distractors involving other vehicle problems.",
};

const part3j: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 10 — Trade show booth setup", durationSec: 40 },
  context:
    "(W) The booth panels for the trade show just arrived, but two of them are missing the company logo decals.\n(M) That's a problem — the show opens in two hours. Can we print replacement decals here at the hotel business center?\n(W) I already called them; they said they can have new decals ready within thirty minutes.\n(M) Great, I'll go pick them up as soon as they're done so we can finish setting up on time.\n\nQuestion: What does the woman say is missing from two of the booth panels?",
  options: [
    { label: "A", text: "The company logo decals" },
    { label: "B", text: "The price list" },
    { label: "C", text: "The product samples" },
    { label: "D", text: "The lighting fixtures" },
  ],
  correct: "A",
  explanation:
    "The woman states that two of the panels 'are missing the company logo decals.' (B), (C), and (D) are never mentioned — they are plausible booth-related items that do not appear in the conversation.",
};

const part3k: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 11 — Payroll discrepancy", durationSec: 39 },
  context:
    "(M) Denise, I noticed my paycheck this month is missing the overtime hours I worked on the Reyes project.\n(W) Let me check... you're right, it looks like those hours weren't entered into the system before payroll was processed.\n(M) Is there a way to get that corrected soon? I worked about fifteen extra hours.\n(W) Yes, I can submit a correction form today, and the adjustment should appear in your next paycheck.\n\nQuestion: What does the man say is missing from his paycheck?",
  options: [
    { label: "A", text: "Overtime hours for the Reyes project" },
    { label: "B", text: "His annual bonus" },
    { label: "C", text: "A travel reimbursement" },
    { label: "D", text: "A shift differential payment" },
  ],
  correct: "A",
  explanation:
    "The man says his paycheck 'is missing the overtime hours I worked on the Reyes project.' (B), (C), and (D) are never mentioned — they are common payroll-related distractors.",
};

const part3l: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 12 — Building maintenance request", durationSec: 37 },
  context:
    "(W) The air conditioning on the third floor has been out since Monday, and it's getting really uncomfortable in the office.\n(M) I reported it to building management yesterday. They said a technician is scheduled to come tomorrow morning.\n(W) Tomorrow? Could we at least get a few fans in the meantime?\n(M) I'll ask the front desk to send some up this afternoon.\n\nQuestion: According to the man, when is the technician scheduled to arrive?",
  options: [
    { label: "A", text: "Tomorrow morning" },
    { label: "B", text: "Later this afternoon" },
    { label: "C", text: "Next Monday" },
    { label: "D", text: "This evening" },
  ],
  correct: "A",
  explanation:
    "The man says building management told him 'a technician is scheduled to come tomorrow morning.' (B), (C), and (D) are never mentioned — the afternoon in the conversation refers only to when the fans will arrive.",
};

const part3m: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 13 — Contract renewal negotiation", durationSec: 41 },
  context:
    "(M) Ms. Fournier, our current contract with your firm expires at the end of this month. We'd like to renew, but we're hoping to negotiate a lower rate given our order volume.\n(W) I understand. Based on your volume this year, I can offer a five percent discount on the renewal.\n(M) That sounds fair. Could you send over the updated contract by Friday so our legal team can review it?\n(W) Absolutely, I'll have it in your inbox by Thursday.\n\nQuestion: What discount does the woman offer on the contract renewal?",
  options: [
    { label: "A", text: "Five percent" },
    { label: "B", text: "Ten percent" },
    { label: "C", text: "Fifteen percent" },
    { label: "D", text: "Twenty percent" },
  ],
  correct: "A",
  explanation:
    "The woman says, 'I can offer a five percent discount on the renewal.' (B), (C), and (D) are never mentioned — they are other plausible discount amounts.",
};

const part3n: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 14 — Defective product exchange", durationSec: 36 },
  context:
    "(W) Hi, I bought this blender last week, but it stopped working after just two uses. I'd like to exchange it.\n(M) I'm sorry to hear that. Do you have your receipt with you?\n(W) Yes, right here.\n(M) Great, since it's within our thirty-day return window, I can exchange it for a new one right now, no charge.\n\nQuestion: Why does the woman want to exchange the blender?",
  options: [
    { label: "A", text: "It stopped working after two uses." },
    { label: "B", text: "It was the wrong color." },
    { label: "C", text: "It was missing a part." },
    { label: "D", text: "It was too expensive." },
  ],
  correct: "A",
  explanation:
    "The woman says the blender 'stopped working after just two uses.' (B), (C), and (D) are never mentioned — they are typical distractors for retail return scenarios.",
};

const part3o: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 15 — Conference call technical difficulty", durationSec: 38 },
  context:
    "(M) Karen, can you hear me? I think the other participants are having trouble joining the call.\n(W) I can hear you fine, but I just got an email from the Tokyo office saying the dial-in number isn't working for them.\n(M) Let's send them the backup link instead and push the start time back ten minutes.\n(W) Good idea, I'll email everyone right now.\n\nQuestion: What problem does the Tokyo office report?",
  options: [
    { label: "A", text: "The dial-in number isn't working." },
    { label: "B", text: "The video feed is frozen." },
    { label: "C", text: "The meeting link expired." },
    { label: "D", text: "The audio is too quiet." },
  ],
  correct: "A",
  explanation:
    "The woman reports that the Tokyo office said 'the dial-in number isn't working for them.' (B), (C), and (D) are never mentioned — they are common technical-difficulty distractors.",
};

const part3p: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 16 — New employee equipment setup", durationSec: 39 },
  context:
    "(W) Hi, I'm starting Monday in the marketing department, and I wanted to check if my laptop will be ready.\n(M) Yes, IT finished setting it up yesterday. It'll be waiting at your desk with your login credentials.\n(W) Perfect. Will I also need to stop by IT to get a security badge?\n(M) No, badges are handled by the front desk, not IT — just check in there when you arrive.\n\nQuestion: According to the man, where will the new employee's laptop be?",
  options: [
    { label: "A", text: "Waiting at her desk" },
    { label: "B", text: "At the IT help desk" },
    { label: "C", text: "In the front desk storage room" },
    { label: "D", text: "Being shipped to her home" },
  ],
  correct: "A",
  explanation:
    "The man says the laptop 'will be waiting at your desk with your login credentials.' (B), (C), and (D) are never mentioned — the front desk is discussed only in connection with the security badge.",
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

const part4g: PracticeQuestionData = {
  prompt: "Part 4 · Short Talks. Read the airport announcement and answer the question.",
  listening: true,
  audio: { label: "Short talk — Airport flight delay announcement", durationSec: 0 },
  context:
    "Attention passengers. Flight 238 to Chicago, originally scheduled to depart at three fifteen, has been delayed due to severe thunderstorms in the area. We currently expect boarding to begin at four forty-five at gate C12, though this time may change as conditions develop. Passengers connecting through Chicago should see a representative at the service desk near gate C10 to confirm their onward flights. Complimentary beverage vouchers are available at the counter for anyone affected by this delay. We apologize for the inconvenience and will provide updates as soon as they become available.\n\nQuestion: Why has Flight 238 been delayed?",
  options: [
    { label: "A", text: "A mechanical problem with the aircraft." },
    { label: "B", text: "Severe thunderstorms in the area." },
    { label: "C", text: "A shortage of ground crew staff." },
    { label: "D", text: "An air traffic control system failure." },
  ],
  correct: "B",
  explanation:
    "The announcement states the flight 'has been delayed due to severe thunderstorms in the area.' A mechanical problem (A), a staff shortage (C), and an air traffic control failure (D) are never mentioned.",
};

const part4h: PracticeQuestionData = {
  prompt: "Part 4 · Short Talks. Read the press conference excerpt and answer the question.",
  listening: true,
  audio: { label: "Short talk — Product-launch press conference", durationSec: 0 },
  context:
    "Good afternoon, everyone, and thank you for joining us today. I'm thrilled to introduce the Solara X200, our most advanced solar-powered charger yet, capable of fully charging a smartphone in under two hours using nothing but sunlight. The X200 will be available in stores nationwide starting next Friday, priced at seventy-nine dollars. Due to overwhelming pre-order demand, our first shipment has already sold out, so we've doubled production for the following month. We believe this device will change the way people think about portable power, especially for outdoor enthusiasts and travelers. We'll now take a few questions from the press.\n\nQuestion: What can be inferred about the Solara X200?",
  options: [
    { label: "A", text: "It will be sold exclusively online." },
    { label: "B", text: "Demand for the product has exceeded the company's expectations." },
    { label: "C", text: "It is the company's first solar-powered product." },
    { label: "D", text: "It will initially be available only overseas." },
  ],
  correct: "B",
  explanation:
    "The speaker notes that 'our first shipment has already sold out, so we've doubled production for the following month,' which logically indicates demand outpaced expectations. Exclusive online sales (A), the product being the company's first (C), and overseas-only availability (D) are never stated.",
};

const part4i: PracticeQuestionData = {
  prompt: "Part 4 · Short Talks. Read the phone-menu recording and answer the question.",
  listening: true,
  audio: { label: "Short talk — Customer-service phone menu", durationSec: 0 },
  context:
    "Thank you for calling Briarwood Insurance. Our office hours are Monday through Friday, eight A.M. to six P.M. If you're calling to file a new claim, please press one. To check the status of an existing claim, press two. For billing and payment questions, press three. If you know your representative's extension, you may enter it at any time. For all other inquiries, please stay on the line and the next available agent will assist you. Please note that call volumes are currently high, and wait times may exceed twenty minutes.\n\nQuestion: What should a caller do to check the status of an existing claim?",
  options: [
    { label: "A", text: "Press one." },
    { label: "B", text: "Press two." },
    { label: "C", text: "Press three." },
    { label: "D", text: "Stay on the line without pressing anything." },
  ],
  correct: "B",
  explanation:
    "The recording states, 'To check the status of an existing claim, press two.' Pressing one (A) is for filing a new claim, pressing three (C) is for billing questions, and staying on the line (D) is only for other inquiries.",
};

const part4j: PracticeQuestionData = {
  prompt: "Part 4 · Short Talks. Read the webinar introduction and answer the question.",
  listening: true,
  audio: { label: "Short talk — Webinar introduction", durationSec: 0 },
  context:
    "Good morning, and welcome to today's webinar on effective time management for remote teams. My name is Diane Foster, and I'll be your facilitator for the next ninety minutes. Before we begin, please make sure your microphone is muted, as this session is being recorded. We'll start with a twenty-minute presentation, followed by a hands-on exercise in breakout rooms, and we'll close with a live question-and-answer period. A copy of today's slides will be emailed to all registered participants by the end of the day. If you experience any technical difficulties, please type your issue into the chat box, and our support staff will assist you.\n\nQuestion: What are participants asked to do before the webinar begins?",
  options: [
    { label: "A", text: "Download the presentation slides." },
    { label: "B", text: "Mute their microphones." },
    { label: "C", text: "Join a breakout room." },
    { label: "D", text: "Type their name into the chat box." },
  ],
  correct: "B",
  explanation:
    "The facilitator says, 'please make sure your microphone is muted, as this session is being recorded.' Downloading slides (A), joining a breakout room (C), and typing a name into chat (D) are never mentioned as pre-session steps.",
};

const part4k: PracticeQuestionData = {
  prompt:
    "Part 4 · Short Talks. Read the reservation confirmation voicemail and answer the question.",
  listening: true,
  audio: { label: "Short talk — Restaurant reservation voicemail", durationSec: 0 },
  context:
    "Hi, this is Marco calling from Bellavista Restaurant to confirm your reservation for four people this Saturday at seven thirty P.M. We ask that you arrive within fifteen minutes of your reservation time, since tables are held for that period only and we have a fully booked evening. Please note that we've recently moved to a new location on Harbor Street, just two blocks from our old address. If you need to cancel or change the size of your party, please call us back at least twenty-four hours in advance. We look forward to seeing you this weekend.\n\nQuestion: What will most likely happen if the party arrives more than fifteen minutes after seven thirty?",
  options: [
    { label: "A", text: "The restaurant will offer them a different table." },
    { label: "B", text: "Their reservation may no longer be held." },
    { label: "C", text: "They will receive a discount on their bill." },
    { label: "D", text: "They will be moved to the new Harbor Street location automatically." },
  ],
  correct: "B",
  explanation:
    "Marco explains that 'tables are held for that period only,' which logically means a party arriving later than fifteen minutes risks losing the reservation. Being offered another table (A), a discount (C), and automatic relocation (D) are never mentioned.",
};

const part4l: PracticeQuestionData = {
  prompt: "Part 4 · Short Talks. Read the store announcement and answer the question.",
  listening: true,
  audio: { label: "Short talk — Retail store holiday-hours announcement", durationSec: 0 },
  context:
    "Attention shoppers, thank you for visiting Falcon Electronics. Please note that in observance of the upcoming holiday, our store will close early today at six P.M. instead of our usual nine P.M. closing time. We will also be closed all day tomorrow and will reopen the following morning at our regular time of ten A.M. Our online store, however, remains open twenty-four hours a day for your convenience. If you need assistance before we close, our staff will be available at the customer service desk near the main entrance. We thank you for shopping with us and wish you a wonderful holiday.\n\nQuestion: What can customers infer about shopping during the holiday closure?",
  options: [
    { label: "A", text: "They can still make purchases through the online store." },
    { label: "B", text: "They can pick up online orders at the customer service desk." },
    { label: "C", text: "They will receive a discount for shopping online instead." },
    { label: "D", text: "The store's regular hours will change permanently starting next week." },
  ],
  correct: "A",
  explanation:
    "Since the announcement states the physical store will be closed but 'our online store... remains open twenty-four hours a day for your convenience,' it can be inferred that customers can still shop online during the closure. In-store pickup (B), an online discount (C), and a permanent hours change (D) are never mentioned.",
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

const part5i: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The quarterly financial report ______ by the accounting department before it is submitted to the board next week.",
  options: [
    { label: "A", text: "reviews" },
    { label: "B", text: "is reviewed" },
    { label: "C", text: "reviewing" },
    { label: "D", text: "review" },
  ],
  correct: "B",
  explanation:
    "The report is the recipient of the action (it is reviewed by the department), so the passive voice 'is reviewed' is required. (A) 'reviews' is active voice, which would wrongly suggest the report reviews something itself. (C) 'reviewing' is a participle, not a finite verb, and cannot stand alone as the main verb. (D) 'review' is a bare base form with no subject agreement and cannot complete the verb phrase.",
};

const part5j: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "If the shipment ______ before Friday, the client will not receive the parts in time for the product launch.",
  options: [
    { label: "A", text: "doesn't arrive" },
    { label: "B", text: "won't arrive" },
    { label: "C", text: "hasn't arrived" },
    { label: "D", text: "wouldn't arrive" },
  ],
  correct: "A",
  explanation:
    "In a first conditional sentence, the if-clause uses the present simple even though it refers to the future, while the main clause uses 'will': 'If the shipment doesn't arrive..., the client will not receive...'. (B) 'won't arrive' incorrectly uses future tense inside the if-clause. (C) 'hasn't arrived' (present perfect) doesn't fit the simple factual condition being described. (D) 'wouldn't arrive' is the second-conditional (hypothetical) form and is inconsistent with 'will' in the main clause.",
};

const part5k: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The IT manager decided ______ the system upgrade until all servers could be safely taken offline for maintenance.",
  options: [
    { label: "A", text: "postponing" },
    { label: "B", text: "to postpone" },
    { label: "C", text: "postpone" },
    { label: "D", text: "postponed" },
  ],
  correct: "B",
  explanation:
    "The verb 'decide' is followed by a to-infinitive ('decide to do something'), so 'to postpone' is required. (A) 'postponing' is a gerund, which does not follow 'decide'. (C) 'postpone' is a bare infinitive missing 'to' and cannot follow 'decided' directly. (D) 'postponed' is a past tense/participle form and cannot serve as the object complement of 'decided'.",
};

const part5l: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The retail chain plans to open ______ branch store in Singapore next quarter as part of its Southeast Asia expansion.",
  options: [
    { label: "A", text: "a" },
    { label: "B", text: "an" },
    { label: "C", text: "the" },
    { label: "D", text: "no article" },
  ],
  correct: "A",
  explanation:
    "'Branch store' is a singular countable noun being introduced for the first time, so it needs the indefinite article 'a', used before a consonant sound. (B) 'an' is only used before a vowel sound, and 'branch' begins with a consonant sound. (C) 'the' would wrongly imply a specific store already known to the reader. (D) omitting the article is ungrammatical, since a singular countable noun cannot appear without an article here.",
};

const part5m: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "Warehouse staff found the new inventory-scanning system extremely ______, since it eliminated hours of manual data entry each week.",
  options: [
    { label: "A", text: "satisfy" },
    { label: "B", text: "satisfying" },
    { label: "C", text: "satisfied" },
    { label: "D", text: "satisfaction" },
  ],
  correct: "B",
  explanation:
    "In the pattern 'found + object + complement', the complement describes the system, which causes the feeling, so the active '-ing' form 'satisfying' is correct. (C) 'satisfied' is the '-ed' form used for a person who experiences a feeling, not the thing that causes it. (A) 'satisfy' is a base verb and cannot function as an adjective complement. (D) 'satisfaction' is a noun and does not fit the adjective slot after 'found the system extremely ___'.",
};

const part5n: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The proposal was rejected because it was neither cost-effective ______ compliant with the new environmental safety regulations.",
  options: [
    { label: "A", text: "or" },
    { label: "B", text: "nor" },
    { label: "C", text: "but" },
    { label: "D", text: "and" },
  ],
  correct: "B",
  explanation:
    "'Neither' must be paired with the correlative conjunction 'nor' to join two negated qualities: 'neither cost-effective nor compliant'. (A) 'or' is the correlative partner of 'either', not 'neither'. (C) 'but' is a contrastive conjunction and does not form a correlative pair with 'neither'. (D) 'and' would incorrectly present both qualities as affirmative rather than jointly negated.",
};

const part5o: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "In accordance with fire safety regulations, all employees ______ evacuate the building immediately whenever the alarm sounds.",
  options: [
    { label: "A", text: "must" },
    { label: "B", text: "should" },
    { label: "C", text: "might" },
    { label: "D", text: "could" },
  ],
  correct: "A",
  explanation:
    "'Must' expresses a firm, non-negotiable obligation, matching a legally mandated requirement introduced by 'in accordance with regulations'. (B) 'should' expresses only a recommendation, which is weaker than a legal mandate. (C) 'might' and (D) 'could' both express possibility rather than obligation, so neither fits a compulsory safety rule.",
};

const part5p: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "Sales figures ______ significantly last quarter after the company launched its new marketing campaign in Southeast Asia.",
  options: [
    { label: "A", text: "raised" },
    { label: "B", text: "rose" },
    { label: "C", text: "arose" },
    { label: "D", text: "risen" },
  ],
  correct: "B",
  explanation:
    "'Rise' is intransitive, meaning to increase by itself, and its simple past form 'rose' fits since the sales figures increased on their own. (A) 'raised' is the past tense of the transitive verb 'raise', which requires a direct object and cannot be used intransitively here. (C) 'arose' is the past tense of 'arise', meaning to come into existence or occur, a different meaning entirely. (D) 'risen' is a past participle and requires an auxiliary such as 'have', so it cannot stand alone as a simple past-tense verb.",
};

const part5q: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "Each of the branch managers ______ required to submit a monthly performance summary to headquarters.",
  options: [
    { label: "A", text: "are" },
    { label: "B", text: "is" },
    { label: "C", text: "were" },
    { label: "D", text: "have been" },
  ],
  correct: "B",
  explanation:
    "The subject of the sentence is 'each', which is always singular regardless of the plural noun in the following prepositional phrase, so the singular verb 'is' is correct. (A) 'are' and (D) 'have been' are plural forms that do not agree with the singular subject 'each'. (C) 'were' is also plural, and additionally puts the sentence in the wrong tense for this ongoing requirement.",
};

const part5r: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The construction project fell behind schedule due to unexpected weather delays; ______, the completion date has been pushed back by six weeks.",
  options: [
    { label: "A", text: "however" },
    { label: "B", text: "in addition" },
    { label: "C", text: "as a result" },
    { label: "D", text: "although" },
  ],
  correct: "C",
  explanation:
    "The second clause states the direct consequence of the weather delays, so the cause-and-effect transition 'as a result' is required. (A) 'however' signals contrast, but the second clause is not contradicting the first. (B) 'in addition' signals separate additional information, not a consequence. (D) 'although' is a subordinating conjunction that must introduce a dependent clause and cannot follow a semicolon to begin a new independent clause.",
};

const part5s: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The ______ union voted to approve the revised overtime policy after months of negotiation with management.",
  options: [
    { label: "A", text: "employee's" },
    { label: "B", text: "employees'" },
    { label: "C", text: "employees" },
    { label: "D", text: "employees's" },
  ],
  correct: "B",
  explanation:
    "The union belongs to the entire group of employees, so the plural possessive — a plain apostrophe added after the final 's' of the plural noun — is required: 'employees''. (A) 'employee's' is singular possessive, wrongly suggesting the union belongs to one employee. (C) 'employees' is the plain plural with no possessive marking, so it cannot show ownership before 'union'. (D) 'employees's' is not a valid English possessive form.",
};

const part5t: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "Because the returned merchandise was missing its receipt and original tags, the retailer determined that the request was ______ for a refund.",
  options: [
    { label: "A", text: "eligible" },
    { label: "B", text: "ineligible" },
    { label: "C", text: "eligibility" },
    { label: "D", text: "eligibly" },
  ],
  correct: "B",
  explanation:
    "The negative prefix 'in-' matches the context: missing the receipt and tags disqualifies the item, making the request 'ineligible'. (A) 'eligible' has the opposite meaning and contradicts the stated reason. (C) 'eligibility' is a noun and cannot serve as the subject complement after 'was'. (D) 'eligibly' is an adverb and cannot function as a complement describing 'the request'.",
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

const part6f: PracticeQuestionData = {
  prompt: "Part 6 · Read the email and choose the best word for the blank.",
  context:
    "From: communications@vertexholdings.com\nTo: all-employees@vertexholdings.com\nSubject: Vertex Holdings to Merge with Anderson Group\n\nDear team,\n\nWe are pleased to announce that Vertex Holdings has ______ an agreement to merge with the Anderson Group, effective September 1. This merger will strengthen our position in the regional market and create new opportunities for growth across both organizations. Over the coming weeks, senior leadership will hold information sessions to answer any questions you may have. We appreciate your patience and support during this transition.\n\nCommunications Team",
  options: [
    { label: "A", text: "reached" },
    { label: "B", text: "reach" },
    { label: "C", text: "reaching" },
    { label: "D", text: "reaches" },
  ],
  correct: "A",
  explanation:
    "The present perfect tense 'has ______ an agreement' requires the past participle form, 'reached', to pair with the auxiliary 'has'. (B) 'reach' is the base form and cannot follow 'has' directly, (C) 'reaching' is a present participle/gerund that would require a different auxiliary such as 'is', and (D) 'reaches' is a third-person singular present-tense form that does not combine with 'has' to form the present perfect.",
};

const part6g: PracticeQuestionData = {
  prompt: "Part 6 · Read the memo and choose the best word for the blank.",
  context:
    "From: finance@harborlinelogistics.com\nTo: all-staff@harborlinelogistics.com\nSubject: Updated Expense Reimbursement Procedure\n\nTo all employees,\n\nEffective immediately, all business-related expenses must be submitted through the new online portal rather than by paper form. Receipts and completed reports should be filed ______ five business days of the expense being incurred, or reimbursement may be delayed. Employees who need assistance with the portal should contact the finance help desk. Thank you for your cooperation as we transition to this more efficient system.\n\nFinance Department",
  options: [
    { label: "A", text: "within" },
    { label: "B", text: "during" },
    { label: "C", text: "since" },
    { label: "D", text: "between" },
  ],
  correct: "A",
  explanation:
    "'Within' is the correct preposition for expressing a deadline that falls inside a stated period of time, as in 'within five business days'. (B) 'during' is used with a specific ongoing period or event rather than a duration limit, (C) 'since' refers to a starting point in the past and requires a specific date or event, not a span of days, and (D) 'between' requires two distinct points (e.g., 'between Monday and Friday') and cannot precede a single duration like 'five business days'.",
};

const part6h: PracticeQuestionData = {
  prompt: "Part 6 · Read the email and choose the best word for the blank.",
  context:
    "From: it-support@meridiantech.com\nTo: all-employees@meridiantech.com\nSubject: New Multi-Factor Authentication Requirement\n\nDear colleagues,\n\nBeginning next month, all employees will be required to enable multi-factor authentication on their company accounts to reduce the risk of unauthorized access. This change significantly improves the overall ______ of our network and protects sensitive company data from potential breaches. Instructions for setting up the new authentication method are attached to this email. If you have any questions, contact the IT help desk before the deadline.\n\nIT Support Team",
  options: [
    { label: "A", text: "security" },
    { label: "B", text: "secure" },
    { label: "C", text: "securely" },
    { label: "D", text: "securing" },
  ],
  correct: "A",
  explanation:
    "A noun is needed after the adjective 'overall' and before the prepositional phrase 'of our network', so the noun form 'security' is required: 'the overall security of our network'. (B) 'secure' is an adjective/verb and cannot serve as the head noun in this phrase, (C) 'securely' is an adverb and cannot follow 'overall' in this position, and (D) 'securing' is a gerund that would need a different sentence structure to fit grammatically.",
};

const part6i: PracticeQuestionData = {
  prompt: "Part 6 · Read the email and choose the best word for the blank.",
  context:
    "From: hr-benefits@claremontfinancial.com\nTo: all-staff@claremontfinancial.com\nSubject: Open Enrollment Begins Monday\n\nDear employees,\n\nOpen enrollment for health and dental benefits begins Monday, October 5, and runs through October 23. Any changes you make to your coverage during this period will take ______ on January 1 of next year. Please review the updated plan options carefully before submitting your selections, as changes cannot be made after the enrollment window closes. Contact the benefits team with any questions.\n\nHR Benefits Team",
  options: [
    { label: "A", text: "effect" },
    { label: "B", text: "affect" },
    { label: "C", text: "effective" },
    { label: "D", text: "affecting" },
  ],
  correct: "A",
  explanation:
    "The fixed expression 'take effect' means 'become active' and requires the noun 'effect' after 'take'. (B) 'affect' is a verb meaning 'to influence' and does not fit the idiom 'take effect', (C) 'effective' is an adjective and cannot follow 'take' in this construction, and (D) 'affecting' is a present participle that does not complete the idiomatic phrase either.",
};

const part6j: PracticeQuestionData = {
  prompt: "Part 6 · Read the notice and choose the best word for the blank.",
  context:
    "From: office-admin@brightwaveconsulting.com\nTo: all-staff@brightwaveconsulting.com\nSubject: Office Closure for Labor Day\n\nDear team,\n\nPlease note that the office ______ closed next Monday, September 7, in observance of Labor Day. Regular business hours will resume on Tuesday, September 8. If you have an urgent matter that requires attention over the long weekend, please contact your supervisor directly. We wish everyone a safe and restful holiday.\n\nOffice Administration",
  options: [
    { label: "A", text: "will be" },
    { label: "B", text: "was" },
    { label: "C", text: "has been" },
    { label: "D", text: "is being" },
  ],
  correct: "A",
  explanation:
    "The time marker 'next Monday' points to a future event, so the future passive 'will be closed' is required. (B) 'was' is a simple past form and cannot refer to a future date, (C) 'has been' is a present perfect form that describes an action already completed, which contradicts 'next Monday', and (D) 'is being' describes an action in progress right now, not a state that will begin in the future.",
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

const part7g: PracticeQuestionData = {
  prompt: "Part 7 · Read the reminder and answer the question.",
  context:
    "WARRANTY REGISTRATION REMINDER\nVantage Home Electronics\n\nDear Customer,\n\nOur records show that you purchased a Vantage 55-inch Smart TV (Model VX-550) on April 3, but have not yet registered your product for warranty coverage. Registering online at vantage-electronics.com/register takes less than five minutes and extends your standard one-year warranty to two years at no additional cost.\n\nPlease note that registration must be completed within 30 days of purchase. If you do not register by May 3, your warranty will remain limited to the standard one-year term.\n\nQuestion: What will happen if the customer does not register the TV by May 3?",
  options: [
    { label: "A", text: "The TV will be automatically returned to the store." },
    { label: "B", text: "The warranty will remain limited to one year." },
    { label: "C", text: "The customer will be charged a late registration fee." },
    { label: "D", text: "The TV's remote control will stop working." },
  ],
  correct: "B",
  explanation:
    "The reminder states 'If you do not register by May 3, your warranty will remain limited to the standard one-year term', so (B) is correct.",
};

const part7h: PracticeQuestionData = {
  prompt: "Part 7 · Read the confirmation and answer the question.",
  context:
    "REGISTRATION CONFIRMATION\nGlobal Marketing Summit 2026\n\nDear Ms. Alvarez,\n\nThank you for registering for the Global Marketing Summit, taking place September 14-15 at the Riverside Convention Center. Your registration includes access to all keynote sessions, workshop tracks, and the networking reception on the evening of September 14.\n\nPlease bring a printed or digital copy of this confirmation to the registration desk to receive your attendee badge. Note that workshop seats are assigned on a first-come, first-served basis, so we recommend arriving at least 30 minutes before your first session.\n\nQuestion: Why does the confirmation recommend arriving 30 minutes early?",
  options: [
    { label: "A", text: "Because parking is limited near the venue." },
    {
      label: "B",
      text: "Because workshop seats are assigned on a first-come, first-served basis.",
    },
    { label: "C", text: "Because the keynote speaker requires extra security screening." },
    { label: "D", text: "Because attendee badges must be paid for in cash at the desk." },
  ],
  correct: "B",
  explanation:
    "The confirmation notes that 'workshop seats are assigned on a first-come, first-served basis, so we recommend arriving at least 30 minutes before your first session', so (B) is correct.",
};

const part7i: PracticeQuestionData = {
  prompt: "Part 7 · Read the notice and answer the question.",
  context:
    "SUBSCRIPTION RENEWAL NOTICE\nCloudTrack Project Management Software\n\nYour CloudTrack Pro annual subscription (Account #48210) is set to renew automatically on August 20 at the current rate of $180/year. If you would like to switch to a different plan or cancel your subscription, please do so before August 13 through your account settings page.\n\nNote: starting with this renewal cycle, all Pro plans will include unlimited file storage, a feature previously available only to Enterprise subscribers.\n\nQuestion: What can be inferred about the Enterprise plan before this renewal cycle?",
  options: [
    { label: "A", text: "It cost less than the Pro plan." },
    { label: "B", text: "It offered unlimited file storage while the Pro plan did not." },
    { label: "C", text: "It was being discontinued by CloudTrack." },
    { label: "D", text: "It required a separate account number." },
  ],
  correct: "B",
  explanation:
    "Since unlimited file storage is described as 'a feature previously available only to Enterprise subscribers', it follows that Enterprise had this feature while Pro did not, so (B) is correct.",
};

const part7j: PracticeQuestionData = {
  prompt: "Part 7 · Read the listing and answer the question.",
  context:
    "OFFICE SPACE FOR LEASE\nMeridian Business Park, Suite 210\n\nAvailable immediately: a 650-square-foot office suite on the second floor, featuring two private rooms, a shared reception area, and high-speed fiber internet included in the rent. Monthly rent is $1,450, with a minimum lease term of 12 months.\n\nOn-site parking is available for an additional $75/month per space. Interested parties should contact the leasing office at leasing@meridianpark.com to schedule a viewing.\n\nQuestion: What is included in the $1,450 monthly rent?",
  options: [
    { label: "A", text: "On-site parking for one vehicle." },
    { label: "B", text: "High-speed fiber internet." },
    { label: "C", text: "Furniture for both private rooms." },
    { label: "D", text: "A discounted lease renewal rate." },
  ],
  correct: "B",
  explanation:
    "The listing states the suite features 'high-speed fiber internet included in the rent', so (B) is correct.",
};

const part7k: PracticeQuestionData = {
  prompt: "Part 7 · Read the announcement and answer the question.",
  context:
    "MENU UPDATE\nHarbor Grill Restaurant\n\nStarting next Monday, Harbor Grill will introduce a refreshed dinner menu featuring locally sourced seafood and seasonal vegetables. Several long-time favorites, including the classic clam chowder, will remain on the menu, while a few less popular dishes will be retired to make room for new options.\n\nGuests who have dietary restrictions are encouraged to inform their server, as some new dishes contain nuts and shellfish not used in our previous menu.\n\nQuestion: What can be inferred about the previous dinner menu?",
  options: [
    { label: "A", text: "It did not include any dishes containing nuts or shellfish." },
    { label: "B", text: "It was created by a different head chef." },
    { label: "C", text: "It received complaints from most guests." },
    { label: "D", text: "It was more expensive than the new menu." },
  ],
  correct: "A",
  explanation:
    "The announcement notes that some new dishes 'contain nuts and shellfish not used in our previous menu', which means the previous menu did not include those ingredients, so (A) is correct.",
};

const part7l: PracticeQuestionData = {
  prompt: "Part 7 · Read the email and answer the question.",
  context:
    "Subject: We'd Love Your Feedback\n\nDear Mr. Tanaka,\n\nThank you for staying with Lakeside Inn during your recent visit. We would appreciate it if you could take a few minutes to complete our online guest survey at lakesideinn.com/survey. Your responses help us improve our services for future guests.\n\nAs a token of appreciation, everyone who completes the survey by June 30 will receive a 15% discount code for their next stay.\n\nQuestion: What will guests receive for completing the survey by June 30?",
  options: [
    { label: "A", text: "A free night at the inn." },
    { label: "B", text: "A 15% discount code for a future stay." },
    { label: "C", text: "A complimentary breakfast voucher." },
    { label: "D", text: "An invitation to a loyalty program." },
  ],
  correct: "B",
  explanation:
    "The email states that guests who complete the survey by June 30 'will receive a 15% discount code for their next stay', so (B) is correct.",
};

const part7m: PracticeQuestionData = {
  prompt: "Part 7 · Read the notice and answer the question.",
  context:
    "IMPORTANT: UPDATE TO OUR TERMS OF SERVICE\nStreamPlay Media\n\nWe are updating our Terms of Service, effective July 1. The key change concerns account sharing: under the revised terms, each subscription may only be used by members of a single household, verified periodically through device location data.\n\nSubscribers who continue using the service after July 1 will be considered to have accepted the updated terms. If you do not agree, you may cancel your subscription at any time before that date without penalty.\n\nQuestion: What can be inferred about someone who shares a StreamPlay account with a person outside their household?",
  options: [
    { label: "A", text: "They will be able to continue as before after July 1." },
    { label: "B", text: "They may be affected by the new device location verification." },
    { label: "C", text: "They will receive a free upgrade to a family plan." },
    { label: "D", text: "They must register the additional user's address." },
  ],
  correct: "B",
  explanation:
    "Since the revised terms restrict each subscription to 'members of a single household, verified periodically through device location data', someone sharing an account outside their household would be affected by this verification, so (B) is correct.",
};

const part7n: PracticeQuestionData = {
  prompt: "Part 7 · Read the announcement and answer the question.",
  context:
    "COMPANY VOLUNTEER DAY ANNOUNCEMENT\nNorthfield Corp Community Outreach\n\nNorthfield Corp is organizing a company-wide volunteer day on Saturday, October 10, in partnership with the Riverside Food Bank. Employees who sign up will spend the morning sorting and packing donated food items for local families.\n\nEmployees may sign up for one of two shifts, 8:00-11:00 a.m. or 11:00 a.m.-2:00 p.m., through the internal HR portal by October 3. Lunch will be provided for all volunteers at the end of their shift.\n\nQuestion: What will volunteers receive at the end of their shift?",
  options: [
    { label: "A", text: "A paid day off in exchange." },
    { label: "B", text: "Lunch." },
    { label: "C", text: "A company-branded T-shirt." },
    { label: "D", text: "A certificate of participation." },
  ],
  correct: "B",
  explanation:
    "The announcement states that 'Lunch will be provided for all volunteers at the end of their shift', so (B) is correct.",
};

export const part1Questions: PracticeQuestionData[] = [
  part1a,
  part1b,
  part1c,
  part1d,
  part1e,
  part1f,
  part1g,
  part1h,
  part1i,
  part1j,
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
  part2i,
  part2j,
  part2k,
  part2l,
  part2m,
  part2n,
  part2o,
  part2p,
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
  part3i,
  part3j,
  part3k,
  part3l,
  part3m,
  part3n,
  part3o,
  part3p,
];
export const part4Questions: PracticeQuestionData[] = [
  part4,
  part4b,
  part4c,
  part4d,
  part4e,
  part4f,
  part4g,
  part4h,
  part4i,
  part4j,
  part4k,
  part4l,
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
  part5i,
  part5j,
  part5k,
  part5l,
  part5m,
  part5n,
  part5o,
  part5p,
  part5q,
  part5r,
  part5s,
  part5t,
];
export const part6Questions: PracticeQuestionData[] = [
  part6,
  part6b,
  part6c,
  part6d,
  part6e,
  part6f,
  part6g,
  part6h,
  part6i,
  part6j,
];
export const part7Questions: PracticeQuestionData[] = [
  part7,
  part7b,
  part7c,
  part7d,
  part7e,
  part7f,
  part7g,
  part7h,
  part7i,
  part7j,
  part7k,
  part7l,
  part7m,
  part7n,
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

export interface QuestionPart {
  part: number;
  label: string;
  questions: PracticeQuestionData[];
}

export const questionsByPart: QuestionPart[] = [
  { part: 1, label: "Part 1 · Photographs", questions: part1Questions },
  { part: 2, label: "Part 2 · Question–Response", questions: part2Questions },
  { part: 3, label: "Part 3 · Conversations", questions: part3Questions },
  { part: 4, label: "Part 4 · Short Talks", questions: part4Questions },
  { part: 5, label: "Part 5 · Incomplete Sentences", questions: part5Questions },
  { part: 6, label: "Part 6 · Text Completion", questions: part6Questions },
  { part: 7, label: "Part 7 · Reading Comprehension", questions: part7Questions },
];
