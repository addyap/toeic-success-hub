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

const part1k: PracticeQuestionData = {
  prompt: "Part 1 · Listen to statements A–D and pick the one that best describes the scene.",
  photo: true,
  audio: { label: "Photograph statements", durationSec: 0 },
  context:
    "In a hair salon, a stylist trims a client's hair while the client sits in a chair facing a large mirror. Bottles of shampoo and hair products line a shelf along the wall, and another customer waits on a bench near the entrance, flipping through a magazine.",
  options: [
    { label: "A", text: "She's sweeping hair clippings off the floor." },
    { label: "B", text: "She's trimming the client's hair while the client faces a mirror." },
    { label: "C", text: "She's reading a magazine while waiting on a bench." },
    { label: "D", text: "She's washing the client's hair at a sink." },
  ],
  correct: "B",
  explanation:
    "B accurately describes the stylist trimming the client's hair while the client sits facing the mirror. A describes an action that isn't happening — there's no mention of clippings being swept. C describes what the waiting customer is doing on the bench, not the stylist, mistakenly attributing one person's action to another. D describes a step that hasn't occurred; the scene shows trimming, not washing at a sink.",
};

const part1l: PracticeQuestionData = {
  prompt: "Part 1 · Listen to statements A–D and pick the one that best describes the scene.",
  photo: true,
  audio: { label: "Photograph statements", durationSec: 0 },
  context:
    "At a shipping dock, a worker in a hard hat scans a barcode on a cardboard box before loading it onto a delivery truck. Stacks of boxes sit on wooden pallets nearby, and a forklift is parked beside the loading ramp.",
  options: [
    { label: "A", text: "He's stacking boxes onto a forklift." },
    { label: "B", text: "He's scanning a barcode on a box before loading it onto the truck." },
    { label: "C", text: "He's signing a form beside the delivery truck." },
    { label: "D", text: "He's driving the forklift toward the ramp." },
  ],
  correct: "B",
  explanation:
    "B matches the scene exactly — he scans the barcode on the box before loading it onto the truck. A confuses the boxes already stacked on pallets with boxes being stacked onto the forklift, which isn't happening. C swaps 'scanning' for the similar-sounding 'signing,' an action that isn't shown. D is inaccurate because the forklift is parked beside the ramp, not being driven.",
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

const part2q: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  audio: { label: "Spoken question", durationSec: 0 },
  context: 'Question: "Why was the concrete pour postponed until tomorrow?"',
  options: [
    { label: "A", text: "Because the weather forecast predicts heavy rain this afternoon." },
    { label: "B", text: "It was poured on the east wing last week." },
    { label: "C", text: "The site foreman starts at seven." },
  ],
  correct: "A",
  explanation:
    "'Why' asks for a reason. Heavy rain justifies the postponement. (B) reuses 'poured' but describes an unrelated past event, and (C) is an unrelated fact about the foreman's schedule.",
};

const part2r: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  audio: { label: "Spoken question", durationSec: 0 },
  context: 'Question: "Why did the hotel switch to a new laundry service?"',
  options: [
    { label: "A", text: "The previous company kept losing linens." },
    { label: "B", text: "The switch is located near the lobby." },
    { label: "C", text: "We have two hundred rooms available." },
  ],
  correct: "A",
  explanation:
    "'Why' asks for a reason behind the change. Losing linens explains the switch. (B) plays on 'switch' as a light switch rather than the verb 'to switch,' and (C) is an unrelated fact about room capacity.",
};

const part2s: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  audio: { label: "Spoken question", durationSec: 0 },
  context: 'Question: "Who\'s leading the new teacher orientation next week?"',
  options: [
    { label: "A", text: "Ms. Reynolds from the curriculum department." },
    { label: "B", text: "It starts at nine on Monday." },
    { label: "C", text: "The orientation packet is in the main office." },
  ],
  correct: "A",
  explanation:
    "'Who' asks for a person's identity. Ms. Reynolds is the named leader. (B) answers 'when' and (C) answers 'where' — both wrong question types for a 'who' question.",
};

const part2t: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  audio: { label: "Spoken question", durationSec: 0 },
  context: 'Question: "Who approved the final cover design for the novel?"',
  options: [
    { label: "A", text: "The editorial director signed off on it yesterday." },
    { label: "B", text: "The design took about three weeks to finish." },
    { label: "C", text: "I really like the color scheme they chose." },
  ],
  correct: "A",
  explanation:
    "'Who' asks for the person responsible. The editorial director is the answer. (B) answers 'how long' and (C) offers a personal opinion rather than naming who approved it.",
};

const part2u: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  audio: { label: "Spoken question", durationSec: 0 },
  context: 'Question: "Did the wheat shipment clear customs inspection?"',
  options: [
    { label: "A", text: "Yes, it passed without any issues this morning." },
    { label: "B", text: "The shipment weighs about twenty tons." },
    { label: "C", text: "Customs officers usually clear paperwork by noon." },
  ],
  correct: "A",
  explanation:
    "This is a yes/no question about a specific shipment's status. (A) directly confirms it passed. (B) states the shipment's weight, not its customs status, and (C) is a general statement about customs timing that doesn't confirm whether this shipment cleared.",
};

const part2v: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  audio: { label: "Spoken question", durationSec: 0 },
  context: 'Question: "Has the recall notice been sent to all affected owners?"',
  options: [
    { label: "A", text: "Not yet, we're still finalizing the mailing list." },
    { label: "B", text: "The recall covers about ten thousand vehicles." },
    { label: "C", text: "Owners can visit any authorized dealership." },
  ],
  correct: "A",
  explanation:
    "This yes/no question asks about the notice's send status. (A) answers directly with 'not yet.' (B) states the scope of the recall rather than confirming whether notices were sent, and (C) gives unrelated advice for owners.",
};

const part2w: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  audio: { label: "Spoken question", durationSec: 0 },
  context: 'Question: "The new fiber lines are finished, aren\'t they?"',
  options: [
    { label: "A", text: "Yes, the installation crew completed them this morning." },
    { label: "B", text: "The waiting lines were pretty long today." },
    { label: "C", text: "We ordered extra cable last week." },
  ],
  correct: "A",
  explanation:
    "Tag questions expect a yes/no confirmation. (A) confirms completion. (B) reuses 'lines' to mean queues rather than fiber cables, and (C) is a related but non-responsive fact about ordering cable, not confirming completion.",
};

const part2x: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  audio: { label: "Spoken question", durationSec: 0 },
  context: "Question: \"The gala raised more than last year's event, didn't it?\"",
  options: [
    { label: "A", text: "Yes, we exceeded last year's total by fifteen percent." },
    { label: "B", text: "The gala was held at the downtown ballroom." },
    { label: "C", text: "About three hundred guests attended." },
  ],
  correct: "A",
  explanation:
    "This tag question expects confirmation about the amount raised. (A) confirms it directly. (B) answers 'where' the event was held, and (C) states attendance figures rather than confirming the fundraising total.",
};

const part2y: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  audio: { label: "Spoken question", durationSec: 0 },
  context:
    'Question: "Should we pour the foundation on Thursday, or wait until the inspector signs off?"',
  options: [
    { label: "A", text: "Let's wait for the inspector's approval first." },
    { label: "B", text: "The foundation is twelve inches thick." },
    { label: "C", text: "The inspector arrives every Thursday." },
  ],
  correct: "A",
  explanation:
    "This is an 'or' choice question offering two options. (A) selects one option directly. (B) is an unrelated fact about the foundation's thickness, and (C) recombines words from both choices without actually choosing one.",
};

const part2z: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  audio: { label: "Spoken question", durationSec: 0 },
  context: 'Question: "Would you like the ocean-view room, or the one facing the garden?"',
  options: [
    { label: "A", text: "The ocean-view room sounds perfect, thank you." },
    { label: "B", text: "The garden was replanted last spring." },
    { label: "C", text: "Check-out is at eleven a.m." },
  ],
  correct: "A",
  explanation:
    "This 'or' question asks the listener to pick one room type. (A) clearly selects the ocean-view room. (B) reuses 'garden' to describe landscaping rather than choosing that room, and (C) is unrelated information about check-out time.",
};

const part2aa: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the statement.",
  listening: true,
  audio: { label: "Spoken statement", durationSec: 0 },
  context: 'Statement: "The workshop materials haven\'t arrived from the printer yet."',
  options: [
    { label: "A", text: "I'll call them right now to check on the delivery." },
    { label: "B", text: "The workshop is scheduled for three hours." },
    { label: "C", text: "Printers in the lab need new ink cartridges." },
  ],
  correct: "A",
  explanation:
    "This statement calls for an appropriate reaction to a problem. (A) proposes a logical next step. (B) is an unrelated fact about the workshop's length, and (C) reuses 'printer' to refer to lab equipment rather than addressing the missing materials.",
};

const part2ab: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the statement.",
  listening: true,
  audio: { label: "Spoken statement", durationSec: 0 },
  context: 'Statement: "Sales of the paperback edition dropped sharply last quarter."',
  options: [
    { label: "A", text: "Maybe we should run a discount promotion." },
    { label: "B", text: "The paperback has three hundred pages." },
    { label: "C", text: "Our hardcover sales are shipped from the main warehouse." },
  ],
  correct: "A",
  explanation:
    "This statement about declining sales calls for a suggested response. (A) proposes an appropriate action. (B) is an unrelated fact about the book's length, and (C) mentions a different edition's shipping process rather than addressing the sales drop.",
};

const part2ac: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  audio: { label: "Spoken question", durationSec: 0 },
  context: 'Question: "Why was the 6:45 departure to Chicago delayed?"',
  options: [
    { label: "A", text: "A mechanical issue turned up during the pre-flight inspection." },
    { label: "B", text: "About forty passengers checked in at the gate." },
    { label: "C", text: "It departs from gate twelve." },
  ],
  correct: "A",
  explanation:
    "'Why' asks for a reason for the delay. (A) gives the cause. (B) mentions the gate but answers an unrelated question about passenger numbers, and (C) states the departure gate, which answers 'where,' not 'why.'",
};

const part2ad: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  audio: { label: "Spoken question", durationSec: 0 },
  context: 'Question: "Who\'s directing the reshoots next week?"',
  options: [
    { label: "A", text: "The same director who shot the original scenes." },
    { label: "B", text: "We reshot that scene twice yesterday." },
    { label: "C", text: "Next week works fine for me." },
  ],
  correct: "A",
  explanation:
    "'Who' asks for a person. (A) names the director. (B) reuses 'reshot' but describes a past event rather than naming a person, and (C) mistakenly answers a 'when' question about availability.",
};

const part2ae: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  audio: { label: "Spoken question", durationSec: 0 },
  context: 'Question: "Should I file the claim online or call the claims office?"',
  options: [
    { label: "A", text: "Online would be quicker since the phone lines are backed up." },
    { label: "B", text: "The claim was approved last Tuesday." },
    { label: "C", text: "I always file my taxes online in April." },
  ],
  correct: "A",
  explanation:
    "This is an or-choice question asking which filing method to use. (A) picks 'online' and justifies it. (B) refers to an unrelated past approval, and (C) reuses 'file... online' but talks about taxes, not the insurance claim.",
};

const part2af: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  audio: { label: "Spoken question", durationSec: 0 },
  context: 'Question: "Is the pool open for lap swimming this morning?"',
  options: [
    { label: "A", text: "Yes, but only until nine because of a swim class." },
    { label: "B", text: "The gym opens at six on weekdays." },
    { label: "C", text: "We're planning to build a second pool next year." },
  ],
  correct: "A",
  explanation:
    "This is a yes/no question about the pool's morning hours. (A) confirms availability with a time limit. (B) describes a different facility, the gym, and (C) reuses 'pool' but refers to a future construction plan, not today's hours.",
};

const part2ag: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  audio: { label: "Spoken question", durationSec: 0 },
  context: 'Question: "When does the recycling truck usually come by?"',
  options: [
    { label: "A", text: "Every other Thursday, early in the morning." },
    { label: "B", text: "It collects paper, glass, and plastic." },
    { label: "C", text: "The truck was repainted last month." },
  ],
  correct: "A",
  explanation:
    "'When' asks for a time. (A) gives the collection schedule. (B) describes what the truck collects, answering 'what,' not 'when,' and (C) reuses 'truck' but describes an unrelated repainting job.",
};

const part2ah: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  audio: { label: "Spoken question", durationSec: 0 },
  context: "Question: \"The vet said the dog's stitches should come out by Friday, didn't she?\"",
  options: [
    { label: "A", text: "Yes, that's exactly what she told us at the last visit." },
    { label: "B", text: "The dog is due for a rabies booster soon." },
    { label: "C", text: "She stitched up a tear in the couch cushion." },
  ],
  correct: "A",
  explanation:
    "This is a tag question seeking confirmation of what the vet said. (A) confirms it directly. (B) is an unrelated fact about vaccinations, and (C) reuses 'stitched' but describes mending furniture, not the dog's medical care.",
};

const part2ai: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  audio: { label: "Spoken question", durationSec: 0 },
  context: 'Question: "Do you happen to know where the spare projector bulb is kept?"',
  options: [
    { label: "A", text: "It's in the supply closet next to the printer." },
    { label: "B", text: "Yes, I've changed one before." },
    { label: "C", text: "The projector needs a new bulb every eight months." },
  ],
  correct: "A",
  explanation:
    "This is an embedded question — the real question is 'where is the spare bulb kept?' (A) states the location. (B) mistakes 'Do you know' for a literal yes/no question and confirms familiarity without giving a location, and (C) is an unrelated fact about replacement frequency rather than where the bulb is stored.",
};

const part2aj: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the statement.",
  listening: true,
  audio: { label: "Spoken statement", durationSec: 0 },
  context:
    'Statement: "Our biggest wholesale client is renegotiating their contract terms this week."',
  options: [
    {
      label: "A",
      text: "I'll pull together the account history so we're prepared for the discussion.",
    },
    { label: "B", text: "The client placed their first order two years ago." },
    { label: "C", text: "Wholesale prices tend to rise in the summer." },
  ],
  correct: "A",
  explanation:
    "This statement about an upcoming negotiation calls for an appropriate reaction. (A) proposes a useful next step. (B) is an unrelated fact about the client's history rather than a response to the renegotiation, and (C) reuses 'wholesale' but makes a general seasonal claim that doesn't address this week's contract talks.",
};

const part2ak: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  audio: { label: "Spoken question", durationSec: 0 },
  context: 'Question: "How long will the road resurfacing project take?"',
  options: [
    { label: "A", text: "About three weeks, weather permitting." },
    { label: "B", text: "It starts on Monday morning." },
    { label: "C", text: "The crew resurfaced two miles last month." },
  ],
  correct: "A",
  explanation:
    "'How long' asks for a duration. (A) gives one. (B) answers 'when' the project begins, not how long it lasts, and (C) reuses 'resurfaced' but describes a separate, already-completed job rather than stating the current project's length.",
};

const part2al: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  audio: { label: "Spoken question", durationSec: 0 },
  context:
    'Question: "Would you rather present the findings yourself, or have someone from the research team do it?"',
  options: [
    { label: "A", text: "I'd prefer to present it myself, since I know the data best." },
    { label: "B", text: "Yes, the findings were quite surprising." },
    { label: "C", text: "The research team meets every Tuesday." },
  ],
  correct: "A",
  explanation:
    "This is an or-choice question offering two options for who presents. (A) clearly selects one. (B) answers with a plain yes/no, which doesn't fit an 'or' question, and (C) reuses 'research team' but states a meeting schedule instead of choosing who will present.",
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

const part3q: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 17 — Hotel checkout charge", durationSec: 32 },
  context:
    "(M) Hi, I'm checking out of room 412, but I noticed an extra charge on my bill for room service that I never ordered.\n(W) I'm sorry about that — let me check... You're right, it looks like it was charged to your room by mistake. I'll remove it right away.\n(M) Thank you. Could you also print an updated receipt for me?\n(W) Of course, here you go. Is everything correct now?\n(M) Yes, that looks right.\n\nQuestion: Why does the man question his hotel bill?",
  options: [
    { label: "A", text: "He was charged for room service he did not order." },
    { label: "B", text: "He was charged twice for his room." },
    { label: "C", text: "He was charged for a minibar item he didn't use." },
    { label: "D", text: "He checked out a day late." },
  ],
  correct: "A",
  explanation:
    "The man says he noticed 'an extra charge on my bill for room service that I never ordered.' (B), (C), and (D) are never mentioned — they are typical distractors involving other billing problems.",
};

const part3r: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 18 — Software license seats", durationSec: 30 },
  context:
    "(W) Hi, our design team just hired two new contractors, but we only have five seats on our software license.\n(M) I see. I can request two additional seats from the vendor, but it usually takes about three business days to activate them.\n(W) That should be fine, they don't start until next Monday.\n(M) Great, I'll submit the request today and let you know once the new seats are active.\n\nQuestion: Why does the woman contact the man?",
  options: [
    { label: "A", text: "She needs additional software license seats for new contractors." },
    { label: "B", text: "She wants to cancel unused software licenses." },
    { label: "C", text: "She is reporting a software bug." },
    { label: "D", text: "She wants to renew an expiring license." },
  ],
  correct: "A",
  explanation:
    "The woman states her team 'only have five seats' now that two contractors have joined and needs the man to request more. (B), (C), and (D) are never mentioned.",
};

const part3s: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 19 — Missing shipment document", durationSec: 34 },
  context:
    "(M) Hi Rachel, customs just flagged our shipment to Germany — apparently we forgot to include the certificate of origin.\n(W) Oh no. Do you have a copy of it on file?\n(M) Yes, I found it in our records. I'll email it to the customs broker this afternoon.\n(W) Perfect, let me know once they confirm it's been received.\n\nQuestion: What problem does the man report?",
  options: [
    { label: "A", text: "A required document was missing from a shipment." },
    { label: "B", text: "A shipment was sent to the wrong country." },
    { label: "C", text: "A shipment was damaged in transit." },
    { label: "D", text: "A shipment's invoice total was incorrect." },
  ],
  correct: "A",
  explanation:
    "The man says customs flagged the shipment because 'we forgot to include the certificate of origin.' (B), (C), and (D) are never mentioned.",
};

const part3t: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 20 — Reference check call", durationSec: 29 },
  context:
    "(M) Hi, this is Mark from Ashford Consulting. I'm calling to check a reference for Lisa Chen, who listed you as her former supervisor.\n(W) Of course, I'd be happy to help. Lisa worked on my team for about two years.\n(M) Great. Could you tell me about her strengths as an employee?\n(W) She was extremely reliable and always met her deadlines. I'd hire her again without hesitation.\n\nQuestion: Why is the man calling the woman?",
  options: [
    { label: "A", text: "To check a job reference for a former employee." },
    { label: "B", text: "To offer the woman a new job." },
    { label: "C", text: "To schedule a job interview." },
    { label: "D", text: "To verify the woman's employment dates." },
  ],
  correct: "A",
  explanation:
    "The man states he is 'calling to check a reference for Lisa Chen.' (B), (C), and (D) are never mentioned.",
};

const part3u: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 21 — Catering headcount change", durationSec: 31 },
  context:
    "(W) Hi, I'm calling about our lunch order for Friday's meeting. We now have 35 people attending instead of 25.\n(M) Thanks for the update. I can adjust the order, but I'll need to know by tomorrow morning to guarantee enough food.\n(W) That's no problem, I'll confirm the final number by end of day today.\n(M) Perfect, I'll update the invoice once I hear from you.\n\nQuestion: Why does the woman contact the caterer?",
  options: [
    { label: "A", text: "To increase the number of guests for a catering order." },
    { label: "B", text: "To cancel a catering order." },
    { label: "C", text: "To change the date of an event." },
    { label: "D", text: "To request a different menu." },
  ],
  correct: "A",
  explanation:
    "The woman says 'we now have 35 people attending instead of 25' and asks the caterer to adjust the order. (B), (C), and (D) are never mentioned.",
};

const part3v: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 22 — Copier jamming", durationSec: 27 },
  context:
    "(M) Hi Diane, the copier on the third floor keeps jamming every time I try to print more than a few pages.\n(W) I've heard that from a couple of other people too. I'll put in a service request with the repair company today.\n(M) Thanks. In the meantime, is there another copier I can use?\n(W) Yes, the one on the second floor is working fine.\n\nQuestion: What problem does the man report about the copier?",
  options: [
    { label: "A", text: "It jams when printing multiple pages." },
    { label: "B", text: "It is out of toner." },
    { label: "C", text: "It is making a loud noise." },
    { label: "D", text: "It won't turn on." },
  ],
  correct: "A",
  explanation:
    "The man says the copier 'keeps jamming every time I try to print more than a few pages.' (B), (C), and (D) are never mentioned.",
};

const part3w: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 23 — Office relocation timeline", durationSec: 33 },
  context:
    "(M) Hi Karen, do you know when we're moving to the new office space downtown?\n(W) The move is scheduled for the last weekend of next month, so we'll all be working from the new location starting that Monday.\n(M) Got it. Should we start packing our desks soon?\n(W) Yes, please have everything boxed up by the Friday before the move.\n\nQuestion: When will employees begin working at the new office?",
  options: [
    { label: "A", text: "The Monday after the last weekend of next month." },
    { label: "B", text: "The first day of next month." },
    { label: "C", text: "Two weeks from now." },
    { label: "D", text: "The following quarter." },
  ],
  correct: "A",
  explanation:
    "The woman says the move happens 'the last weekend of next month, so we'll all be working from the new location starting that Monday.' (B), (C), and (D) are never mentioned.",
};

const part3x: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 24 — Marketing budget approval", durationSec: 30 },
  context:
    "(M) Hi Susan, I submitted the budget request for the fall marketing campaign last week. Has it been approved yet?\n(W) Yes, actually, it was approved this morning, but the finance committee reduced the amount by 10 percent.\n(M) That's manageable. We'll just scale back the print ads a bit.\n(W) Sounds good. You should see the updated budget in the system by tomorrow.\n\nQuestion: What does the woman say about the marketing budget request?",
  options: [
    { label: "A", text: "It was approved with a 10 percent reduction." },
    { label: "B", text: "It was rejected entirely." },
    { label: "C", text: "It was approved with no changes." },
    { label: "D", text: "It is still under review." },
  ],
  correct: "A",
  explanation:
    "The woman says the request 'was approved this morning, but the finance committee reduced the amount by 10 percent.' (B), (C), and (D) are never mentioned or are contradicted.",
};

const part3y: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 25 — Vendor invoice dispute", durationSec: 32 },
  context:
    "(W) Hi, I'm calling about invoice number 4482. We were billed for 500 units, but our records show we only received 450.\n(M) Let me check that... you're right, there was an error on our end. I'll issue a corrected invoice for 450 units.\n(W) Thank you. Could you send that over by the end of the week?\n(M) Absolutely, I'll have it to you by Friday.\n\nQuestion: Why does the woman contact the vendor?",
  options: [
    { label: "A", text: "The invoiced quantity does not match the quantity received." },
    { label: "B", text: "The invoice was never received." },
    { label: "C", text: "The price per unit was too high." },
    { label: "D", text: "The delivery arrived late." },
  ],
  correct: "A",
  explanation:
    "The woman says they 'were billed for 500 units, but our records show we only received 450.' (B), (C), and (D) are never mentioned.",
};

const part3z: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 26 — Inventory count discrepancy", durationSec: 29 },
  context:
    "(M) Hi Wendy, when you did the count in aisle twelve, did the numbers match the system?\n(W) Actually no, the system shows 200 units of that part, but I only counted 180 on the shelf.\n(M) That's odd. Can you recount tomorrow morning to confirm before we report the discrepancy?\n(W) Sure, I'll do that first thing and let you know the results.\n\nQuestion: What did the woman find when she counted the inventory?",
  options: [
    { label: "A", text: "There were fewer units on the shelf than the system showed." },
    { label: "B", text: "There were more units than expected." },
    { label: "C", text: "The items were mislabeled." },
    { label: "D", text: "The shelf was empty." },
  ],
  correct: "A",
  explanation:
    "The woman says 'the system shows 200 units of that part, but I only counted 180 on the shelf.' (B), (C), and (D) are never mentioned.",
};

const part3aa: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 27 — Client complaint escalation", durationSec: 31 },
  context:
    "(W) Hi, I need to escalate a call. A client says the product we shipped arrived with a cracked screen, and this is the second time it's happened.\n(M) Let's offer a full replacement and expedited shipping this time, at no extra cost to the client.\n(W) I'll call her back right away and let her know.\n(M) Good. Also flag her account so we can follow up personally on the next order.\n\nQuestion: Why does the woman escalate the call to her supervisor?",
  options: [
    { label: "A", text: "A client received a damaged product for the second time." },
    { label: "B", text: "A client wants a refund instead of a replacement." },
    { label: "C", text: "A client is canceling their account." },
    { label: "D", text: "A client wants to speak with upper management." },
  ],
  correct: "A",
  explanation:
    "The woman says the client's product 'arrived with a cracked screen, and this is the second time it's happened.' (B), (C), and (D) are never mentioned.",
};

const part3ab: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 28 — Training schedule conflict", durationSec: 28 },
  context:
    "(M) Hi Grace, I just realized the safety training you scheduled me for on Thursday conflicts with a client visit I can't reschedule.\n(W) No problem, there's another session on Monday at the same time. Would that work for you?\n(M) Yes, Monday works perfectly.\n(W) Great, I'll move your registration to the Monday session.\n\nQuestion: Why does the man contact the woman?",
  options: [
    { label: "A", text: "A scheduled training conflicts with another commitment." },
    { label: "B", text: "He wants to cancel the training entirely." },
    { label: "C", text: "He missed a previous training session." },
    { label: "D", text: "He needs training materials sent to him." },
  ],
  correct: "A",
  explanation:
    "The man says the training 'conflicts with a client visit I can't reschedule.' (B), (C), and (D) are never mentioned.",
};

const part3ac: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 29 — Company credit card fraud alert", durationSec: 30 },
  context:
    "(W) Hi, this is Karen from the finance department. I'm calling about a suspicious charge on your company credit card — a purchase of about $2,000 from an electronics store overseas.\n(M) That wasn't me. I still have my card right here with me.\n(W) I thought so. I've already frozen the card, and a replacement will be mailed to you within five business days.\n(M) Thank you for catching that so quickly.\n\nQuestion: What did the woman do about the suspicious charge?",
  options: [
    { label: "A", text: "She froze the card." },
    { label: "B", text: "She reported it to the police." },
    { label: "C", text: "She refunded the charge to the man." },
    { label: "D", text: "She canceled the man's business trip." },
  ],
  correct: "A",
  explanation:
    "The woman says, 'I've already frozen the card, and a replacement will be mailed to you within five business days.' (B), (C), and (D) are never mentioned — they are typical distractors involving other responses to fraud.",
};

const part3ad: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 30 — Conference speaker cancellation", durationSec: 28 },
  context:
    "(M) I just got an email from Dr. Patel — she says she can't make it to the conference next week due to a family emergency.\n(W) Oh no, she was our keynote speaker. Do we have anyone who could step in on short notice?\n(M) Actually, yes. Professor Lin already agreed to fill in if we asked her.\n(W) Great, let's confirm with her today.\n\nQuestion: Why can Dr. Patel no longer speak at the conference?",
  options: [
    { label: "A", text: "She has a family emergency." },
    { label: "B", text: "Her flight was canceled." },
    { label: "C", text: "She is ill." },
    { label: "D", text: "She has a scheduling conflict with another event." },
  ],
  correct: "A",
  explanation:
    "The man says Dr. Patel 'can't make it to the conference next week due to a family emergency.' (B), (C), and (D) are never mentioned — they are typical distractors involving other reasons for canceling.",
};

const part3ae: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 31 — Product photography shoot scheduling", durationSec: 29 },
  context:
    "(W) The photographer just called — he can't make it to tomorrow's product shoot because his equipment was damaged in transit.\n(M) That's a problem, we need those photos for the catalog by Friday.\n(W) He said he can reschedule for Thursday morning instead, if that works for us.\n(M) Thursday morning is fine. Let's confirm that with him right away.\n\nQuestion: Why is the photographer unable to attend tomorrow's shoot?",
  options: [
    { label: "A", text: "His equipment was damaged in transit." },
    { label: "B", text: "He is sick." },
    { label: "C", text: "He double-booked the appointment." },
    { label: "D", text: "The studio is unavailable." },
  ],
  correct: "A",
  explanation:
    "The woman explains he can't attend 'because his equipment was damaged in transit.' (B), (C), and (D) are never mentioned — they are typical distractors involving other scheduling problems.",
};

const part3af: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 32 — Office lease renewal negotiation", durationSec: 32 },
  context:
    "(M) I spoke with the landlord about renewing our office lease, and he's offering the same rent as last year if we sign a three-year term.\n(W) That's a good deal, but can we ask for a shorter term instead? A lot could change in three years.\n(M) I did ask — he said he'd only offer that rate for a term of three years or longer.\n(W) Alright, let's go ahead and sign for three years then.\n\nQuestion: What condition did the landlord set for keeping the same rent?",
  options: [
    { label: "A", text: "The company must sign a three-year lease." },
    { label: "B", text: "The company must pay a deposit." },
    { label: "C", text: "The company must renovate the space." },
    { label: "D", text: "The company must pay rent in advance." },
  ],
  correct: "A",
  explanation:
    "The man says the landlord 'said he'd only offer that rate for a term of three years or longer.' (B), (C), and (D) are never mentioned — they are typical distractors involving other lease conditions.",
};

const part3ag: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 33 — Data migration timeline", durationSec: 27 },
  context:
    "(W) How's the migration to the new database going?\n(M) We're on track — the IT team says all customer records will be transferred by next Wednesday.\n(W) That's earlier than I expected. Will the system be down during the transfer?\n(M) Only for two hours on Tuesday night, so it shouldn't affect business hours.\n\nQuestion: When does the IT team expect the data migration to be complete?",
  options: [
    { label: "A", text: "By next Wednesday." },
    { label: "B", text: "By the end of the month." },
    { label: "C", text: "By next Friday." },
    { label: "D", text: "By next Monday." },
  ],
  correct: "A",
  explanation:
    "The man says 'the IT team says all customer records will be transferred by next Wednesday.' (B), (C), and (D) are never mentioned — they are typical distractors involving other dates.",
};

const part3ah: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 34 — New supplier price quote comparison", durationSec: 31 },
  context:
    "(M) I got the quotes back from the two new suppliers. Riverside Textiles is offering a lower unit price than our current supplier.\n(W) That sounds promising. How does their delivery time compare?\n(M) That's the catch — their delivery time is two weeks longer than what we have now.\n(W) Then let's ask if they can match our current supplier's delivery schedule before we switch.\n\nQuestion: What disadvantage does Riverside Textiles have compared to the current supplier?",
  options: [
    { label: "A", text: "A longer delivery time." },
    { label: "B", text: "A higher unit price." },
    { label: "C", text: "A smaller product selection." },
    { label: "D", text: "Poor customer service." },
  ],
  correct: "A",
  explanation:
    "The man says 'their delivery time is two weeks longer than what we have now.' (B), (C), and (D) are never mentioned — they are typical distractors involving other supplier drawbacks.",
};

const part3ai: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 35 — Company car fleet insurance renewal", durationSec: 30 },
  context:
    "(W) The insurance company just sent the renewal quote for our delivery fleet, and the premium has gone up by 15 percent.\n(M) That's a big jump. Did they say why?\n(W) Yes, they said it's because of the two accidents we had last year.\n(M) Let's get quotes from other insurers before we renew with them.\n\nQuestion: Why did the insurance premium increase?",
  options: [
    { label: "A", text: "Because of accidents the company had last year." },
    { label: "B", text: "Because the fleet added more vehicles." },
    { label: "C", text: "Because of a change in government regulations." },
    { label: "D", text: "Because the company missed a payment." },
  ],
  correct: "A",
  explanation:
    "The woman says the increase is 'because of the two accidents we had last year.' (B), (C), and (D) are never mentioned — they are typical distractors involving other reasons for a premium increase.",
};

const part3aj: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 36 — Trade publication advertising placement", durationSec: 29 },
  context:
    "(M) I confirmed our ad placement with Industry Weekly — it'll run in their September issue on the inside back cover.\n(W) Perfect, that's a high-visibility spot. Did you send them the final artwork?\n(M) Not yet, they need it by next Monday to make the print deadline.\n(W) I'll have the design team finish it by Friday so we have a buffer.\n\nQuestion: When does the publication need the final artwork?",
  options: [
    { label: "A", text: "By next Monday." },
    { label: "B", text: "By the end of September." },
    { label: "C", text: "By the end of the year." },
    { label: "D", text: "By the following Monday." },
  ],
  correct: "A",
  explanation:
    "The man says the publication 'need[s] it by next Monday to make the print deadline.' (B), (C), and (D) are never mentioned — they are typical distractors involving other dates.",
};

const part3ak: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 37 — Employee parking permit issue", durationSec: 28 },
  context:
    "(W) Security just told me my parking permit expired at the end of last month, and I need to renew it before I can park in the garage.\n(M) You can renew it online through the facilities portal — it only takes a few minutes.\n(W) Good, I'll do that this afternoon so I don't get towed.\n(M) Just make sure to print the confirmation and leave it on your dashboard.\n\nQuestion: What does the man tell the woman to do after renewing her permit online?",
  options: [
    { label: "A", text: "Print the confirmation and leave it on her dashboard." },
    { label: "B", text: "Pay a late fee at the security office." },
    { label: "C", text: "Pick up a new physical permit from the front desk." },
    { label: "D", text: "Email the confirmation to security." },
  ],
  correct: "A",
  explanation:
    "The man tells her to 'print the confirmation and leave it on your dashboard.' (B), (C), and (D) are never mentioned — they are typical distractors involving other permit procedures.",
};

const part3al: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 38 — Facilities cleaning schedule change", durationSec: 27 },
  context:
    "(M) Did you see the notice from facilities? They're moving the office cleaning from evenings to early mornings starting next week.\n(W) Why the change?\n(M) They said it's because the evening cleaning crew was disturbing employees who work late.\n(W) That makes sense. I'll let my team know so they're not surprised.\n\nQuestion: Why is the cleaning schedule being changed?",
  options: [
    { label: "A", text: "The evening crew was disturbing employees working late." },
    { label: "B", text: "The evening crew requested different hours." },
    { label: "C", text: "The building's evening security was reduced." },
    { label: "D", text: "The cleaning company changed ownership." },
  ],
  correct: "A",
  explanation:
    "The man says the change is 'because the evening cleaning crew was disturbing employees who work late.' (B), (C), and (D) are never mentioned — they are typical distractors involving other reasons for the change.",
};

const part3am: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 39 — Conference gift order delay", durationSec: 30 },
  context:
    "(W) Have the branded tote bags for the conference arrived yet?\n(M) Not yet — the supplier said there's a delay because they ran out of the blue fabric we chose.\n(W) Can they use a different color instead so we still get them on time?\n(M) I already asked, and they said gray is available and can ship by Friday.\n\nQuestion: Why is the delivery of the tote bags delayed?",
  options: [
    { label: "A", text: "The supplier ran out of the blue fabric." },
    { label: "B", text: "The order was placed too late." },
    { label: "C", text: "The shipping company lost the package." },
    { label: "D", text: "The design needed final approval." },
  ],
  correct: "A",
  explanation:
    "The man says the delay is 'because they ran out of the blue fabric we chose.' (B), (C), and (D) are never mentioned — they are typical distractors involving other causes of delay.",
};

const part3an: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 40 — Marketing brochure translation deadline", durationSec: 31 },
  context:
    "(M) The translation agency says the French and German versions of the brochure will be ready by Wednesday, but the Spanish version needs an extra two days.\n(W) Why is the Spanish version taking longer?\n(M) They said the translator originally assigned to it is out sick, so someone else had to take over.\n(W) Okay, let's plan the print run around the Spanish version then.\n\nQuestion: Why is the Spanish translation taking longer than the others?",
  options: [
    { label: "A", text: "The original translator is out sick." },
    { label: "B", text: "The Spanish market requires extra legal review." },
    { label: "C", text: "The brochure content changed." },
    { label: "D", text: "The agency is short-staffed overall." },
  ],
  correct: "A",
  explanation:
    "The man says 'the translator originally assigned to it is out sick, so someone else had to take over.' (B), (C), and (D) are never mentioned — they are typical distractors involving other causes of delay.",
};

const part3ao: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 41 — Recording studio microphone malfunction", durationSec: 38 },
  context:
    "(M) Hi, we're supposed to start the podcast recording in ten minutes, but the microphone in booth two isn't picking up any sound.\n(W) Let me check the cable connection... it looks like the XLR cable came loose from the mixer. I'll plug it back in.\n(M) Great, could you also test the sound levels once it's reconnected?\n(W) Of course, give me two minutes and I'll confirm everything is working before you start.\n\nQuestion: What problem does the man report about booth two?",
  options: [
    { label: "A", text: "The microphone isn't picking up any sound." },
    { label: "B", text: "The recording software crashed." },
    { label: "C", text: "The booth's soundproofing is damaged." },
    { label: "D", text: "The lighting in the booth failed." },
  ],
  correct: "A",
  explanation:
    "The man says the microphone in booth two 'isn't picking up any sound.' (B), (C), and (D) are never mentioned — they are typical studio-related distractors that reuse vocabulary ('booth', 'recording') from the conversation.",
};

const part3ap: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 42 — Pharmacy prescription refill delay", durationSec: 40 },
  context:
    "(W) Hi, this is Melissa, I'm calling about my blood pressure prescription — I was told it would be ready today, but the pharmacist said it's still pending.\n(M) Let me check... it looks like your insurance requires prior authorization for this particular medication, and we're waiting on approval from your doctor's office.\n(W) How long does that usually take?\n(M) Typically one to two business days, but I can call your doctor's office directly to speed things up.\n\nQuestion: Why is the woman's prescription still pending?",
  options: [
    { label: "A", text: "Her insurance requires prior authorization for the medication." },
    { label: "B", text: "The pharmacy is out of stock of the medication." },
    { label: "C", text: "Her doctor has not signed the prescription." },
    { label: "D", text: "Her insurance card has expired." },
  ],
  correct: "A",
  explanation:
    "The man explains, 'your insurance requires prior authorization for this particular medication, and we're waiting on approval from your doctor's office.' (B), (C), and (D) are never mentioned — they are typical pharmacy-related distractors.",
};

const part3aq: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 43 — Art gallery loan extension request", durationSec: 37 },
  context:
    "(M) Hi, this is Daniel from the Whitfield Gallery. I'm calling about the painting we borrowed for our exhibit — it's due back next Friday.\n(W) Yes, I have that on file.\n(M) The exhibit has been so popular that we'd like to keep it on display for two more weeks, if that's possible.\n(W) I'll need to check with the owner, but I don't think that will be a problem. I'll call you back by tomorrow.\n\nQuestion: What does the man request?",
  options: [
    { label: "A", text: "A two-week extension on the painting's loan period." },
    { label: "B", text: "A replacement for a damaged painting." },
    { label: "C", text: "A discount on the loan fee." },
    { label: "D", text: "Permission to sell the painting." },
  ],
  correct: "A",
  explanation:
    "The man says, 'we'd like to keep it on display for two more weeks, if that's possible.' (B), (C), and (D) are never mentioned — they are typical gallery-related distractors.",
};

const part3ar: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 44 — Airport flight cancellation rebooking", durationSec: 36 },
  context:
    "(W) I'm sorry to tell you that your flight to Chicago has been canceled due to the storm.\n(M) Oh no, I have a meeting there tomorrow morning. What are my options?\n(W) I can rebook you on the 6 AM flight tomorrow, which should still get you there in time.\n(M) That works. Please go ahead and book that for me.\n\nQuestion: What will the woman most likely do next?",
  options: [
    { label: "A", text: "Book the man on the 6 AM flight tomorrow." },
    { label: "B", text: "Refund the cost of his ticket." },
    { label: "C", text: "Upgrade him to first class." },
    { label: "D", text: "Cancel his hotel reservation." },
  ],
  correct: "A",
  explanation:
    "The man asks her to 'go ahead and book that for me,' referring to the 6 AM flight she just offered. (B), (C), and (D) are never mentioned — they are typical airline-related distractors.",
};

const part3as: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 45 — Gym membership freeze request", durationSec: 39 },
  context:
    "(M) Hi, I'm going to be traveling for work for the next three months, and I was wondering if I could freeze my gym membership instead of canceling it.\n(W) Yes, we do offer that. There's a small five-dollar monthly fee to keep your account on hold.\n(M) That's fine. Can you start the freeze from next Monday?\n(W) Sure, I'll set that up right now at the front desk.\n\nQuestion: Where does this conversation most likely take place?",
  options: [
    { label: "A", text: "At a fitness center." },
    { label: "B", text: "At a travel agency." },
    { label: "C", text: "At a bank." },
    { label: "D", text: "At a hotel." },
  ],
  correct: "A",
  explanation:
    "The conversation centers on freezing a 'gym membership' and the woman refers to 'the front desk,' both of which point to a fitness center. (B), (C), and (D) are never mentioned — travel is only the man's reason for the request, not the setting.",
};

const part3at: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 46 — Construction site permit inspection", durationSec: 41 },
  context:
    "(M) Good morning, I'm here from the city building department to check on the permit status for this site.\n(W) Thanks for coming. We submitted the electrical permit application two weeks ago but haven't heard back.\n(M) I looked into it — the application is missing the certified electrician's signature, so it's been on hold.\n(W) I'll get that signature today and resubmit it this afternoon.\n\nQuestion: What is the man's role?",
  options: [
    { label: "A", text: "A city building department inspector." },
    { label: "B", text: "A certified electrician." },
    { label: "C", text: "The site's project manager." },
    { label: "D", text: "A permit application clerk at the woman's company." },
  ],
  correct: "A",
  explanation:
    "The man states he is 'here from the city building department to check on the permit status for this site.' (B), (C), and (D) are never mentioned — the certified electrician is referenced only as the person whose signature is missing.",
};

const part3au: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 47 — Bakery oven breakdown before wedding order", durationSec: 40 },
  context:
    "(W) We have a huge problem — the main oven just stopped heating, and we have forty wedding cake tiers to bake by tomorrow morning.\n(M) Let's check the circuit breaker first... no, that's not it. It might be the heating element.\n(W) I don't think we have time to fix it ourselves. Can we call the repair technician now?\n(M) Yes, I'll call him immediately and ask if he can come within the hour.\n\nQuestion: What problem does the woman describe?",
  options: [
    { label: "A", text: "The main oven has stopped heating." },
    { label: "B", text: "The wedding has been postponed." },
    { label: "C", text: "They ran out of baking ingredients." },
    { label: "D", text: "The delivery truck broke down." },
  ],
  correct: "A",
  explanation:
    "The woman says, 'the main oven just stopped heating, and we have forty wedding cake tiers to bake by tomorrow morning.' (B), (C), and (D) are never mentioned — they are typical bakery-related distractors.",
};

const part3av: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 48 — Library lost card replacement", durationSec: 36 },
  context:
    "(M) Hi, I think I lost my library card somewhere between here and the parking lot. Can you help me get a new one?\n(W) No problem, I can issue a replacement right now. There's a two-dollar fee for a new card.\n(M) That's fine. Will my checked-out books still be linked to the new card?\n(W) Yes, everything on your account will transfer automatically once I print the new card.\n\nQuestion: Why does the man visit the library desk?",
  options: [
    { label: "A", text: "To request a replacement for his lost library card." },
    { label: "B", text: "To pay an overdue book fine." },
    { label: "C", text: "To renew his library membership." },
    { label: "D", text: "To report a damaged book." },
  ],
  correct: "A",
  explanation:
    "The man says he 'lost my library card' and asks, 'Can you help me get a new one?' (B), (C), and (D) are never mentioned — they are typical library-related distractors.",
};

const part3aw: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 49 — Real estate apartment viewing reschedule", durationSec: 37 },
  context:
    "(W) Hi, this is Naomi. I was scheduled to view the apartment on Elm Street tomorrow at 3 PM, but something came up at work.\n(M) No problem, would another time this week work better for you?\n(W) Could we do Thursday at 5 PM instead?\n(M) Thursday at 5 works for me. I'll update the appointment and send you a confirmation email.\n\nQuestion: What does the woman ask the man to do?",
  options: [
    { label: "A", text: "Reschedule her apartment viewing to a different time." },
    { label: "B", text: "Lower the rent on the apartment." },
    { label: "C", text: "Extend her lease application deadline." },
    { label: "D", text: "Cancel the apartment viewing entirely." },
  ],
  correct: "A",
  explanation:
    "The woman explains something came up and asks, 'Could we do Thursday at 5 PM instead?' — she is rescheduling, not canceling. (B), (C), and (D) are never mentioned — they are typical real-estate-related distractors.",
};

const part3ax: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 50 — Software server outage response", durationSec: 42 },
  context:
    "(M) Our main server just went down, and customers are reporting they can't log into the app.\n(W) I see it too. Let's check the error logs first... it looks like it crashed after last night's update.\n(M) Should we roll back to the previous version?\n(W) Yes, I'll start the rollback now — it should restore access within fifteen minutes.\n\nQuestion: What will the woman most likely do next?",
  options: [
    { label: "A", text: "Roll back the server to the previous version." },
    { label: "B", text: "Contact customers individually to apologize." },
    { label: "C", text: "Shut down the app permanently." },
    { label: "D", text: "Install a new update immediately." },
  ],
  correct: "A",
  explanation:
    "The woman agrees to the man's suggestion and says, 'I'll start the rollback now — it should restore access within fifteen minutes.' (B), (C), and (D) are never mentioned — they are typical outage-related distractors.",
};

const part3ay: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 51 — Veterinary clinic appointment reschedule", durationSec: 36 },
  context:
    "(W) Hi, I need to reschedule my dog's checkup that was booked for Saturday morning — I have to be out of town.\n(M) That's fine. We have an opening this Wednesday at 2 PM, or next Saturday at the same time.\n(W) Wednesday at 2 works better for me.\n(M) Great, I've moved Max's appointment to Wednesday at 2 PM. We'll see you then.\n\nQuestion: Where does this conversation most likely take place?",
  options: [
    { label: "A", text: "At a veterinary clinic." },
    { label: "B", text: "At a pet grooming salon." },
    { label: "C", text: "At a boarding kennel." },
    { label: "D", text: "At a pet supply store." },
  ],
  correct: "A",
  explanation:
    "The conversation refers to 'my dog's checkup' and 'Max's appointment,' which point to a veterinary clinic. (B), (C), and (D) are never mentioned — they are other plausible pet-related settings.",
};

const part3az: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 52 — Home electrical wiring inspection", durationSec: 38 },
  context:
    "(M) I finished inspecting the wiring in your basement, and I found a section that's not up to code — it could be a fire hazard.\n(W) That's concerning. How soon can it be fixed?\n(M) I can replace that section tomorrow morning, it should only take about two hours.\n(W) Please go ahead and schedule that as soon as possible.\n\nQuestion: What problem does the man report?",
  options: [
    { label: "A", text: "A section of wiring is not up to code and poses a fire hazard." },
    { label: "B", text: "The circuit breaker panel needs replacement." },
    { label: "C", text: "The basement has a water leak." },
    { label: "D", text: "The home's electricity bill is unusually high." },
  ],
  correct: "A",
  explanation:
    "The man says he 'found a section that's not up to code — it could be a fire hazard.' (B), (C), and (D) are never mentioned — they are typical home-inspection-related distractors.",
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

const part4m: PracticeQuestionData = {
  prompt: "Part 4 · Short Talks. Read the public-works announcement and answer the question.",
  listening: true,
  audio: { label: "Short talk — City public-works road closure announcement", durationSec: 0 },
  context:
    "This is an automated notice from the City of Riverton Department of Public Works. Beginning Monday, Elm Street between Fourth and Seventh Avenue will be closed to all vehicle traffic while crews repair a broken water main. The closure is expected to last through Thursday, and residents on the affected block will experience temporary water service interruptions each day between nine a.m. and one p.m. Detour signs will direct traffic along Maple Avenue for the duration of the project. Businesses along Elm Street are asked to inform customers that pedestrian access to storefronts will remain open throughout the repair. For questions or to report an issue, please call our maintenance hotline at the number listed on the city website.\n\nQuestion: Why is Elm Street being closed to vehicle traffic?",
  options: [
    { label: "A", text: "The street is being repaved." },
    { label: "B", text: "Crews are repairing a broken water main." },
    { label: "C", text: "A parade is taking place downtown." },
    { label: "D", text: "A tree fell and blocked the road." },
  ],
  correct: "B",
  explanation:
    "The announcement states the street will be closed 'while crews repair a broken water main.' Repaving (A), a parade (C), and a fallen tree (D) are never mentioned.",
};

const part4n: PracticeQuestionData = {
  prompt: "Part 4 · Short Talks. Read the fitness studio voicemail and answer the question.",
  listening: true,
  audio: { label: "Short talk — Gym class cancellation voicemail", durationSec: 0 },
  context:
    "Hi, this is Dana from Peak Fitness Studio calling to let you know that tonight's six o'clock spin class has been cancelled because our instructor, Marco, is out with a family emergency. We tried to find a substitute on short notice but weren't able to arrange one in time. Your class credit will automatically be restored to your account, so you won't need to do anything on your end. If you'd like, you're welcome to join tomorrow morning's seven a.m. spin class instead, which still has a few open spots. We apologize for the inconvenience and hope to see you at the studio again soon. Please call us back if you have any questions.\n\nQuestion: Why was tonight's spin class cancelled?",
  options: [
    { label: "A", text: "The studio lost power." },
    { label: "B", text: "Not enough members registered." },
    { label: "C", text: "The instructor had a family emergency." },
    { label: "D", text: "The equipment was being repaired." },
  ],
  correct: "C",
  explanation:
    "Dana says the class was cancelled 'because our instructor, Marco, is out with a family emergency.' A power outage (A), low registration (B), and equipment repair (D) are never mentioned.",
};

const part4o: PracticeQuestionData = {
  prompt: "Part 4 · Short Talks. Read the podcast introduction and answer the question.",
  listening: true,
  audio: { label: "Short talk — Business podcast episode introduction", durationSec: 0 },
  context:
    "Welcome back to Bottom Line Business, the podcast where we break down the strategies behind today's fastest-growing companies. I'm your host, Priya Chandra, and this week I'm joined by the co-founder of a logistics startup that scaled from three employees to over two hundred in just eighteen months. Before we dive into today's interview, quick note: registration for our annual listener meetup in Austin closes this Friday, so if you've been planning to grab a ticket, now's the time. As always, this episode is brought to you by our sponsor, Ledger Cloud Accounting. Let's get into the conversation.\n\nQuestion: What can be inferred about this week's podcast guest?",
  options: [
    { label: "A", text: "They previously worked for Ledger Cloud Accounting." },
    { label: "B", text: "Their company has grown rapidly in a short time." },
    { label: "C", text: "They are stepping down as CEO of their company." },
    { label: "D", text: "They will speak at the Austin meetup." },
  ],
  correct: "B",
  explanation:
    "The host describes the guest as co-founder of a startup that 'scaled from three employees to over two hundred in just eighteen months,' which indicates rapid growth. A prior job at the sponsor (A), stepping down (C), and speaking at the meetup (D) are never mentioned.",
};

const part4p: PracticeQuestionData = {
  prompt: "Part 4 · Short Talks. Read the factory changeover briefing and answer the question.",
  listening: true,
  audio: { label: "Short talk — Factory production-line changeover briefing", durationSec: 0 },
  context:
    "All right, everyone, let's get started. As you know, at the end of this shift we're switching Line 3 over from the blue widget casing to the new gray casing model, so I need everyone at their changeover stations by two forty-five. Before you begin, make sure the old mold inserts are fully cleaned and returned to the tool crib — do not leave them on the line. The new gray casing molds arrived yesterday and have already been inspected and approved by quality control, so we're clear to install them as soon as the line stops. Changeover should take no more than forty minutes if everyone follows the checklist posted at each station. Once the line is running again, we'll do a first-piece inspection before resuming full production. Any questions, grab me before we break for changeover.\n\nQuestion: According to the speaker, what has already happened to the new gray casing molds?",
  options: [
    { label: "A", text: "They were sent back for repair." },
    { label: "B", text: "They have been inspected and approved by quality control." },
    { label: "C", text: "They were installed on Line 2." },
    { label: "D", text: "They were delayed in customs." },
  ],
  correct: "B",
  explanation:
    "The speaker states the new molds 'have already been inspected and approved by quality control.' Repair (A), installation on Line 2 (C), and a customs delay (D) are never mentioned.",
};

const part4q: PracticeQuestionData = {
  prompt: "Part 4 · Short Talks. Read the hotel wake-up call and answer the question.",
  listening: true,
  audio: { label: "Short talk — Hotel automated wake-up call", durationSec: 0 },
  context:
    "Good morning, this is your automated wake-up call from the front desk at the Lakeside Grand Hotel. It is currently six thirty a.m. Your shuttle to the airport is scheduled to depart from the main lobby entrance at seven fifteen, so please have your luggage ready in the hallway by seven o'clock for pickup by our bell staff. Breakfast is being served in the Harbor Room until nine a.m., though we recommend eating early given your shuttle time. If you need any assistance or would like to request a later shuttle, please dial zero to speak with our concierge desk. We hope you enjoyed your stay and look forward to welcoming you back to the Lakeside Grand.\n\nQuestion: What is the guest asked to do by seven o'clock?",
  options: [
    { label: "A", text: "Check out at the front desk." },
    { label: "B", text: "Have their luggage ready in the hallway." },
    { label: "C", text: "Return their room key." },
    { label: "D", text: "Confirm a breakfast reservation." },
  ],
  correct: "B",
  explanation:
    "The recording asks the guest to 'have your luggage ready in the hallway by seven o'clock for pickup by our bell staff.' Checking out (A), returning a key (C), and confirming breakfast (D) are never mentioned.",
};

const part4r: PracticeQuestionData = {
  prompt: "Part 4 · Short Talks. Read the fundraising gala speech and answer the question.",
  listening: true,
  audio: { label: "Short talk — Nonprofit gala fundraising pitch", durationSec: 0 },
  context:
    "Good evening, everyone, and thank you so much for joining us tonight at the Riverbend Children's Fund gala. Over the past year, your generosity has allowed us to open two new after-school tutoring centers and provide school supplies to more than eight hundred children in our community. Tonight, every dollar raised through the silent auction and the paddle raise will go directly toward building a third center in the Westside neighborhood. We're so close to our goal of two hundred thousand dollars, and with your help tonight, I believe we can get there. Please take a look at the auction items near the stage, and remember that bidding closes at nine p.m. sharp. Thank you again for standing with us and with the children we serve.\n\nQuestion: What can be inferred about the organization's fundraising goal?",
  options: [
    { label: "A", text: "It has already been exceeded." },
    { label: "B", text: "It has not yet been reached." },
    { label: "C", text: "It was lowered this year." },
    { label: "D", text: "It will be announced next year." },
  ],
  correct: "B",
  explanation:
    "The speaker says, 'We're so close to our goal of two hundred thousand dollars,' implying the target has not yet been met. Exceeding it (A), lowering it (C), and a future announcement (D) are never mentioned.",
};

const part4s: PracticeQuestionData = {
  prompt: "Part 4 · Short Talks. Read the warehouse shift-change briefing and answer the question.",
  listening: true,
  audio: { label: "Short talk — Warehouse shift-change briefing", durationSec: 0 },
  context:
    "Before you head out, let's do a quick shift-change briefing. Inventory count for aisle twelve is still incomplete, so the incoming night shift needs to finish that before starting any new picks. We had two pallet jacks go down for repair today, unit four and unit seven, and maintenance says they won't be back in service until tomorrow morning, so plan your routes around that. The loading dock on the east side will be closed for resurfacing starting at ten p.m., so all outbound trucks need to use the west dock tonight. Please make sure your area is swept and pallets are stacked before you clock out. Thanks for a good shift, everyone, and pass this information along to the next crew.\n\nQuestion: According to the speaker, why will outbound trucks use the west dock tonight?",
  options: [
    { label: "A", text: "The west dock has more available space." },
    { label: "B", text: "The east dock is closed for resurfacing." },
    { label: "C", text: "New dock equipment is being installed." },
    { label: "D", text: "The east dock flooded during a storm." },
  ],
  correct: "B",
  explanation:
    "The speaker states, 'The loading dock on the east side will be closed for resurfacing starting at ten p.m., so all outbound trucks need to use the west dock tonight.' More space (A), equipment installation (C), and flooding (D) are never mentioned.",
};

const part4t: PracticeQuestionData = {
  prompt: "Part 4 · Short Talks. Read the software outage status update and answer the question.",
  listening: true,
  audio: { label: "Short talk — Software company outage status update", durationSec: 0 },
  context:
    "This is an automated status update regarding the service disruption affecting our platform's file-upload feature. Our engineering team identified the root cause as a misconfigured server update pushed at approximately two a.m. Eastern Time, and a fix has already been deployed to our staging environment for testing. We expect the fix to be rolled out to all production servers within the next two hours, and file uploads should return to normal shortly after that. In the meantime, all other platform features, including messaging and document editing, continue to function normally. We'll post another update as soon as the issue is fully resolved, and we apologize for any disruption to your workflow. Thank you for your patience.\n\nQuestion: What is suggested about the cause of the outage?",
  options: [
    { label: "A", text: "It resulted from a cyberattack." },
    { label: "B", text: "It was caused by an internal update error." },
    { label: "C", text: "It was caused by a hardware failure." },
    { label: "D", text: "It was caused by unusually high user traffic." },
  ],
  correct: "B",
  explanation:
    "The update attributes the disruption to 'a misconfigured server update pushed at approximately two a.m. Eastern Time' by the company's own engineering team, indicating an internal error. A cyberattack (A), hardware failure (C), and high traffic (D) are never mentioned.",
};

const part4u: PracticeQuestionData = {
  prompt:
    "Part 4 · Short Talks. Read the real estate agent's open-house announcement and answer the question.",
  listening: true,
  audio: { label: "Short talk — Real estate open-house announcement", durationSec: 0 },
  context:
    "Welcome to the open house at 214 Birchwood Lane. This four-bedroom home was fully renovated last year, including a new kitchen with granite countertops and stainless steel appliances. Feel free to walk through at your own pace, and I'll be here in the living room if you have any questions. Please sign the guest book by the front door before you leave, as the seller has asked us to keep a record of all visitors today. The property has already received two offers, so anyone interested is encouraged to submit paperwork by Friday at five p.m. Parking is available on the street, but please avoid blocking the neighbor's driveway.\n\nQuestion: According to the agent, why should visitors sign the guest book?",
  options: [
    { label: "A", text: "To enter a raffle for a prize" },
    { label: "B", text: "Because the seller wants a record of all visitors" },
    { label: "C", text: "To receive a copy of the listing" },
    { label: "D", text: "Because parking passes are being distributed" },
  ],
  correct: "B",
  explanation:
    "The agent explains that 'the seller has asked us to keep a record of all visitors today.' A raffle (A), a copy of the listing (C), and parking passes (D) are never mentioned.",
};

const part4v: PracticeQuestionData = {
  prompt:
    "Part 4 · Short Talks. Read the corporate training video introduction and answer the question.",
  listening: true,
  audio: { label: "Short talk — Corporate onboarding training video introduction", durationSec: 0 },
  context:
    "Welcome to Module One of our new employee onboarding series. My name is Denise Okafor, and I'll be your guide through this training video, which covers company policies, workplace safety, and how to use our internal software systems. This module is approximately twenty minutes long, and you'll be asked to complete a short quiz at the end before moving on to Module Two. If you need to pause the video, your progress will be saved automatically, so there's no need to rewatch anything you've already completed. All new hires must finish the full onboarding series within their first two weeks of employment. If you run into any technical issues, please contact the IT help desk rather than your manager.\n\nQuestion: What must new hires do before proceeding to Module Two?",
  options: [
    { label: "A", text: "Meet with their manager" },
    { label: "B", text: "Submit a signed policy form" },
    { label: "C", text: "Complete a short quiz" },
    { label: "D", text: "Watch the video a second time" },
  ],
  correct: "C",
  explanation:
    "Denise states that new hires 'will be asked to complete a short quiz at the end before moving on to Module Two.' A manager meeting (A), a signed form (B), and rewatching (D) are never mentioned.",
};

const part4w: PracticeQuestionData = {
  prompt: "Part 4 · Short Talks. Read the stadium PA announcement and answer the question.",
  listening: true,
  audio: {
    label: "Short talk — Sports stadium pre-game safety and parking announcement",
    durationSec: 0,
  },
  context:
    "Good afternoon, and welcome to Cardinal Stadium. Before today's game begins, we'd like to remind all fans that bags larger than the size of a standard sheet of paper are not permitted inside the venue and must be returned to your vehicle. Lot C, located behind the north entrance, is now full, so any fans still arriving should proceed directly to the overflow lot on Grant Street. In case of severe weather, stadium staff will direct fans to designated shelter areas beneath the main concourse, and updates will also be posted on the stadium's mobile app. Please have your tickets ready for scanning at the gate to help keep lines moving quickly. Enjoy the game, and thank you for your cooperation.\n\nQuestion: Where does the announcer direct fans to park once Lot C is full?",
  options: [
    { label: "A", text: "In a nearby parking garage" },
    { label: "B", text: "On the street near the north entrance" },
    { label: "C", text: "In the overflow lot on Grant Street" },
    { label: "D", text: "In the shelter area beneath the concourse" },
  ],
  correct: "C",
  explanation:
    "The announcer says fans still arriving 'should proceed directly to the overflow lot on Grant Street.' A parking garage (A), on-street parking (B), and the shelter area (D) are never mentioned as parking options.",
};

const part4x: PracticeQuestionData = {
  prompt:
    "Part 4 · Short Talks. Read the supermarket in-store PA announcement and answer the question.",
  listening: true,
  audio: { label: "Short talk — Supermarket in-store promotional PA announcement", durationSec: 0 },
  context:
    "Attention shoppers, welcome to Fresh Harvest Market. For the next fifteen minutes only, all bakery items are marked down by twenty-five percent, so head over to aisle two to take advantage of these savings. We'd also like to remind everyone that our deli counter will close at eight p.m. tonight, one hour earlier than usual, due to a staff training session. If you're a Fresh Harvest Rewards member, don't forget to scan your card at checkout to earn double points on all produce purchases today. Samples of our new organic granola are available near the front entrance for anyone who'd like to try before they buy. Thank you for shopping with us, and enjoy the rest of your visit.\n\nQuestion: Why will the deli counter close early tonight?",
  options: [
    { label: "A", text: "The store is closing for a holiday" },
    { label: "B", text: "Staff will be attending a training session" },
    { label: "C", text: "The deli is out of inventory" },
    { label: "D", text: "A refrigeration unit is being repaired" },
  ],
  correct: "B",
  explanation:
    "The announcement states the deli will close early 'due to a staff training session.' A holiday closing (A), lack of inventory (C), and equipment repair (D) are never mentioned.",
};

const part4y: PracticeQuestionData = {
  prompt: "Part 4 · Short Talks. Read the call-center hold message and answer the question.",
  listening: true,
  audio: { label: "Short talk — Call-center hold-music informational message", durationSec: 0 },
  context:
    "Thank you for calling Summit Bank customer support. Your call is important to us, and a representative will be with you as soon as possible. Current wait times are longer than usual due to a high volume of calls regarding recent updates to our mobile banking app. While you wait, you can visit our website to reset your password or check your account balance without speaking to an agent. If your call is regarding a lost or stolen card, please stay on the line, as this is treated as a priority and will be transferred immediately. Please note that this call may be recorded for quality assurance and training purposes. We appreciate your patience and will connect you shortly.\n\nQuestion: What can be inferred about callers who report a lost or stolen card?",
  options: [
    { label: "A", text: "They will receive a new card by mail within 24 hours" },
    { label: "B", text: "They will be connected to a representative without further wait" },
    { label: "C", text: "They must call back during business hours" },
    { label: "D", text: "They will need to visit a branch in person" },
  ],
  correct: "B",
  explanation:
    "Although wait times are 'longer than usual,' the message says lost-or-stolen-card calls are 'treated as a priority and will be transferred immediately,' meaning these callers skip the wait. A mailed card (A), calling back later (C), and an in-person visit (D) are never mentioned.",
};

const part4z: PracticeQuestionData = {
  prompt:
    "Part 4 · Short Talks. Read the CEO's earnings-call opening remarks and answer the question.",
  listening: true,
  audio: { label: "Short talk — Company earnings-call opening remarks excerpt", durationSec: 0 },
  context:
    "Good morning, everyone, and thank you for joining Vantix Corporation's second-quarter earnings call. I'm pleased to report that revenue this quarter reached three hundred twenty million dollars, an increase of eighteen percent compared to the same period last year, driven largely by strong demand in our cloud services division. Our operating margin also improved, thanks to cost efficiencies achieved through the automation initiatives we discussed on last quarter's call. We did see softer results in our hardware segment, which we attribute to ongoing supply chain constraints, and we expect that trend to continue into the third quarter. Later in this call, our Chief Financial Officer will walk you through the detailed financial statements, and I'll return afterward to take your questions. Before we move forward, I want to thank our employees for their continued dedication during a challenging global environment.\n\nQuestion: What can be inferred about the company's cloud services division?",
  options: [
    { label: "A", text: "It is the company's newest business segment" },
    { label: "B", text: "It contributed significantly to this quarter's revenue growth" },
    { label: "C", text: "It will be sold off next quarter" },
    { label: "D", text: "It generated less revenue than the hardware segment" },
  ],
  correct: "B",
  explanation:
    "The CEO attributes the quarter's 'increase of eighteen percent' in revenue to 'strong demand in our cloud services division,' making its significant contribution to growth a logical conclusion. Being the newest segment (A), being sold off (C), and underperforming hardware (D) are never mentioned.",
};

const part4aa: PracticeQuestionData = {
  prompt:
    "Part 4 · Short Talks. Read the radio traffic and weather update and answer the question.",
  listening: true,
  audio: { label: "Short talk — Radio traffic and weather update", durationSec: 0 },
  context:
    "Good morning, this is your six-forty traffic and weather update on WKRD Radio. If you're heading downtown this morning, expect heavy delays on Interstate 95 northbound near exit 12, where a multi-vehicle accident has traffic backed up for nearly three miles. Drivers are advised to take the Route 9 bypass instead until the scene is cleared, which authorities estimate will take at least another hour. On the weather side, expect sunny skies through midday, with rain moving in after four p.m., so grab an umbrella if you're heading out this evening. We'll have another update in twenty minutes.\n\nQuestion: Why is traffic backed up on Interstate 95 northbound?",
  options: [
    { label: "A", text: "Road construction near exit 12." },
    { label: "B", text: "A multi-vehicle accident." },
    { label: "C", text: "Heavy rain flooding the roadway." },
    { label: "D", text: "A stalled vehicle blocking a lane." },
  ],
  correct: "B",
  explanation:
    "The reporter states that 'a multi-vehicle accident has traffic backed up for nearly three miles.' Construction (A), rain (C), and a stalled vehicle (D) are never mentioned — the rain is forecast for later in the day, not the current cause of delays.",
};

const part4ab: PracticeQuestionData = {
  prompt: "Part 4 · Short Talks. Read the product recall announcement and answer the question.",
  listening: true,
  audio: { label: "Short talk — Children's toy product recall announcement", durationSec: 0 },
  context:
    "This is an important safety announcement from Brightstar Toys. We are voluntarily recalling our Rainbow Stacker toy, model number RS-204, sold nationwide between January and May of this year, after discovering that a small plastic piece can detach and pose a choking hazard to young children. If you own this product, please stop using it immediately and keep it away from children. Customers can return the toy to any Brightstar retailer for a full refund, no receipt required. For more information, visit our website or call our customer hotline listed on the recall notice.\n\nQuestion: What are customers asked to do if they own the recalled toy?",
  options: [
    { label: "A", text: "Repair it using a kit mailed to them." },
    { label: "B", text: "Stop using it and return it for a refund." },
    { label: "C", text: "Exchange it for a different toy model." },
    { label: "D", text: "Register it online for a replacement part." },
  ],
  correct: "B",
  explanation:
    "The announcement instructs owners to 'stop using it immediately and keep it away from children' and states they 'can return the toy to any Brightstar retailer for a full refund.' A repair kit (A), an exchange (C), and online registration (D) are never mentioned.",
};

const part4ac: PracticeQuestionData = {
  prompt: "Part 4 · Short Talks. Read the library event announcement and answer the question.",
  listening: true,
  audio: { label: "Short talk — Public library author-talk announcement", durationSec: 0 },
  context:
    "Good afternoon, and welcome to the Fairview Public Library. We'd like to remind everyone that tonight's author talk with novelist Grace Bennett has been moved from the main reading room to the second-floor community hall to accommodate the number of people who have registered. The event begins at seven p.m. sharp, and doors will open thirty minutes early for seating. Copies of Ms. Bennett's latest novel will be available for purchase at the door, and she will be happy to sign books following the discussion. Please silence your phones once the program begins.\n\nQuestion: Why was tonight's author talk relocated?",
  options: [
    { label: "A", text: "The main reading room is being renovated." },
    { label: "B", text: "To accommodate a larger number of registered attendees." },
    { label: "C", text: "The author requested a bigger venue." },
    { label: "D", text: "There was a scheduling conflict with another event." },
  ],
  correct: "B",
  explanation:
    "The announcement says the talk was moved 'to accommodate the number of people who have registered.' Renovation (A), an author request (C), and a scheduling conflict (D) are never mentioned.",
};

const part4ad: PracticeQuestionData = {
  prompt: "Part 4 · Short Talks. Read the city council meeting update and answer the question.",
  listening: true,
  audio: { label: "Short talk — City council meeting recorded update", durationSec: 0 },
  context:
    "This is a recorded update from the Millbrook City Council regarding last night's meeting. Council members voted five to two in favor of a new ordinance that will add protected bike lanes along Sycamore Boulevard, with construction expected to begin next spring. Residents who wish to comment on the project's design can attend a public forum scheduled for the third Tuesday of next month at City Hall. The council also postponed a vote on the proposed dog park until further budget review, so that item will return at a future meeting. Meeting minutes and the full ordinance text are posted on the city website.\n\nQuestion: What did the council decide about the dog park?",
  options: [
    { label: "A", text: "It approved funding for construction to begin immediately." },
    { label: "B", text: "It voted to cancel the project entirely." },
    { label: "C", text: "It postponed the vote pending further budget review." },
    { label: "D", text: "It transferred responsibility for the project to a private developer." },
  ],
  correct: "C",
  explanation:
    "The update states the council 'postponed a vote on the proposed dog park until further budget review, so that item will return at a future meeting.' Approval (A), cancellation (B), and transferring the project (D) are never mentioned.",
};

const part4ae: PracticeQuestionData = {
  prompt: "Part 4 · Short Talks. Read the conference keynote introduction and answer the question.",
  listening: true,
  audio: { label: "Short talk — Tech conference keynote speaker introduction", durationSec: 0 },
  context:
    "Good morning, and welcome to the third annual Horizon Tech Summit. Before we get started, I have a quick announcement: the workshop on data privacy originally scheduled for room 204 has been moved to room 310 due to higher-than-expected registration. Now, it is my great pleasure to introduce our opening keynote speaker, Dr. Elena Vasquez, whose research in renewable battery technology has been cited in over two hundred academic papers. Please join me in welcoming Dr. Vasquez to the stage.\n\nQuestion: Why was the data privacy workshop moved to a different room?",
  options: [
    { label: "A", text: "The original room lost power." },
    { label: "B", text: "More people registered than expected." },
    { label: "C", text: "Dr. Vasquez requested the change." },
    { label: "D", text: "The room needed to be cleaned." },
  ],
  correct: "B",
  explanation:
    "The speaker explains the workshop was moved 'due to higher-than-expected registration.' A power loss (A), a request from Dr. Vasquez (C), and cleaning (D) are never mentioned.",
};

const part4af: PracticeQuestionData = {
  prompt:
    "Part 4 · Short Talks. Read the movie theater pre-show announcement and answer the question.",
  listening: true,
  audio: { label: "Short talk — Movie theater pre-show announcement", durationSec: 0 },
  context:
    "Welcome to Lakeview Cinemas. Before today's feature begins, please take a moment to locate the nearest exit in case of emergency. As a reminder, outside food and drinks are not permitted inside the auditorium, though exceptions are made for baby formula and medically necessary items. Today's showing will include approximately twelve minutes of previews before the main feature starts. If you experience any issues with the picture or sound quality, please alert a staff member in the lobby right away so we can assist you. Enjoy the show!\n\nQuestion: What should a moviegoer do if there is a problem with the picture quality?",
  options: [
    { label: "A", text: "Wait until the movie ends to report it." },
    { label: "B", text: "Call the theater's customer service line." },
    { label: "C", text: "Alert a staff member in the lobby." },
    { label: "D", text: "Ask for a refund at the concession stand." },
  ],
  correct: "C",
  explanation:
    "The announcement instructs viewers to 'alert a staff member in the lobby right away' if there are picture or sound issues. Waiting until the end (A), calling a customer service line (B), and asking for a refund at the concession stand (D) are never mentioned.",
};

const part4ag: PracticeQuestionData = {
  prompt: "Part 4 · Short Talks. Read the in-flight announcement and answer the question.",
  listening: true,
  audio: { label: "Short talk — Airline in-flight cabin service announcement", durationSec: 0 },
  context:
    "Ladies and gentlemen, this is your flight attendant speaking. We've reached our cruising altitude, so the captain has turned off the seatbelt sign, and you're now free to move about the cabin. However, we do recommend keeping your seatbelt fastened while seated in case of unexpected turbulence. Our beverage service will begin shortly, starting from the back of the aircraft, and complimentary snacks will be available for all passengers. We also remind you that the restrooms located at the front of the cabin are reserved for our first-class passengers. Thank you for flying with us today.\n\nQuestion: According to the flight attendant, in what order will beverage service proceed?",
  options: [
    { label: "A", text: "From the front of the aircraft to the back." },
    { label: "B", text: "From the back of the aircraft toward the front." },
    { label: "C", text: "First-class passengers only, then economy." },
    { label: "D", text: "Randomly, based on flight attendant availability." },
  ],
  correct: "B",
  explanation:
    "The flight attendant says beverage service 'will begin shortly, starting from the back of the aircraft.' Front-to-back order (A), first-class-only service (C), and random order (D) are never mentioned — the first-class detail applies only to restroom use.",
};

const part4ah: PracticeQuestionData = {
  prompt: "Part 4 · Short Talks. Read the cruise ship announcement and answer the question.",
  listening: true,
  audio: { label: "Short talk — Cruise ship mandatory safety drill announcement", durationSec: 0 },
  context:
    "Good afternoon, passengers, this is the cruise director speaking. In approximately one hour, all guests are required to attend the mandatory safety muster drill at their designated assembly station, listed on the back of your cabin door key card. Please bring your life jacket, located in your stateroom closet, and wear comfortable shoes for the drill. The ship's dining rooms will reopen for dinner service immediately following the drill, at six thirty this evening. Attendance is required by international maritime law, so we ask that all guests report promptly when the announcement sounds.\n\nQuestion: What are guests required to bring to the safety muster drill?",
  options: [
    { label: "A", text: "Their passport and boarding pass." },
    { label: "B", text: "A life jacket." },
    { label: "C", text: "Sunscreen and a hat." },
    { label: "D", text: "Their cabin key card only." },
  ],
  correct: "B",
  explanation:
    "The cruise director asks guests to 'bring your life jacket, located in your stateroom closet.' Passports (A), sunscreen (C), and bringing only the key card (D) are never mentioned — the key card is only referenced as showing the assembly station location.",
};

const part4ai: PracticeQuestionData = {
  prompt: "Part 4 · Short Talks. Read the career fair announcement and answer the question.",
  listening: true,
  audio: { label: "Short talk — Regional career fair welcome announcement", durationSec: 0 },
  context:
    "Welcome to the Riverside Regional Career Expo, held today at the downtown convention center. Over sixty employers are here today looking to fill positions in technology, healthcare, and skilled trades. If you haven't already, please stop by the registration table near the main entrance to receive your visitor badge and a floor map of employer booths. We strongly encourage bringing several printed copies of your resume, as many employers will conduct brief on-the-spot interviews. A free resume review session will also run continuously in Room B throughout the day. The expo concludes at four p.m. sharp.\n\nQuestion: What are attendees encouraged to bring with them?",
  options: [
    { label: "A", text: "A laptop for submitting online applications." },
    { label: "B", text: "Several printed copies of their resume." },
    { label: "C", text: "A professional reference letter." },
    { label: "D", text: "A completed job application form." },
  ],
  correct: "B",
  explanation:
    "The announcement says attendees are 'strongly encouraged' to bring 'several printed copies of your resume' because employers will conduct on-the-spot interviews. A laptop (A), a reference letter (C), and a completed application (D) are never mentioned.",
};

const part4aj: PracticeQuestionData = {
  prompt: "Part 4 · Short Talks. Read the parking garage announcement and answer the question.",
  listening: true,
  audio: { label: "Short talk — Mall parking garage closure announcement", durationSec: 0 },
  context:
    "Attention, shoppers. This is a reminder from Westfield Mall parking services that the third floor of the north parking garage will be closed for repaving beginning tonight at ten p.m. and continuing through tomorrow. Vehicles currently parked on that level must be removed by nine forty-five p.m., or they will be relocated at the owner's expense. In the meantime, the south garage remains open twenty-four hours and offers validated parking for up to three hours with any mall purchase. We apologize for the inconvenience and thank you for shopping with us.\n\nQuestion: What will happen to vehicles still on the third floor after nine forty-five p.m.?",
  options: [
    { label: "A", text: "They will be towed to an impound lot outside the mall." },
    { label: "B", text: "They will be relocated at the owner's expense." },
    { label: "C", text: "Their owners will be fined by mall security." },
    { label: "D", text: "They will be left in place until repaving is finished." },
  ],
  correct: "B",
  explanation:
    "The announcement warns that vehicles not removed by nine forty-five 'will be relocated at the owner's expense.' Towing to an impound lot (A), fines (C), and leaving vehicles in place (D) are never mentioned.",
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

const part5u: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "If the law firm ______ additional paralegals, it could handle twice as many cases each month.",
  options: [
    { label: "A", text: "hired" },
    { label: "B", text: "hires" },
    { label: "C", text: "will hire" },
    { label: "D", text: "had hired" },
  ],
  correct: "A",
  explanation:
    "This is a second conditional sentence describing a hypothetical present/future situation: the if-clause uses the past simple ('hired') while the main clause uses 'could' + base verb ('could handle'). (B) 'hires' (present simple) would require 'will' in the main clause, not 'could', so it doesn't match the second-conditional pattern. (C) 'will hire' (future) cannot appear in the if-clause of a conditional sentence. (D) 'had hired' is the third-conditional (past hypothetical) form and would require 'could have handled' in the main clause, not 'could handle'.",
};

const part5v: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The clinic administrator told the staff that the new health regulations ______ the following month.",
  options: [
    { label: "A", text: "will take effect" },
    { label: "B", text: "would take effect" },
    { label: "C", text: "take effect" },
    { label: "D", text: "had taken effect" },
  ],
  correct: "B",
  explanation:
    "In reported speech, when the reporting verb ('told') is in the past tense, the verb in the reported clause is normally backshifted; the original statement 'will take effect' becomes 'would take effect'. (A) 'will take effect' is the direct-speech form and is not backshifted, so it is inconsistent with the past-tense reporting verb 'told'. (C) 'take effect' (present simple) does not correctly report a future action and ignores the required backshift. (D) 'had taken effect' (past perfect) wrongly implies the regulations had already become effective before the reporting, which contradicts 'the following month'.",
};

const part5w: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The university installed new solar panels on the main building, ______ significantly reduced its electricity costs.",
  options: [
    { label: "A", text: "which" },
    { label: "B", text: "that" },
    { label: "C", text: "who" },
    { label: "D", text: "it" },
  ],
  correct: "A",
  explanation:
    "In a non-restrictive relative clause (one set off by a comma, adding extra information about a thing already mentioned), 'which' is the correct relative pronoun: '...solar panels on the main building, which significantly reduced its electricity costs.' (B) 'that' cannot introduce a non-restrictive (comma) relative clause. (C) 'who' is used only for people, not for things like solar panels. (D) 'it' is a personal pronoun, not a relative pronoun, so using it here creates an ungrammatical comma splice instead of a subordinate clause.",
};

const part5x: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "By the time the auditors ______ their review of the municipal budget, the finance department will have already submitted the revised figures to the city council.",
  options: [
    { label: "A", text: "will complete" },
    { label: "B", text: "complete" },
    { label: "C", text: "will have completed" },
    { label: "D", text: "completed" },
  ],
  correct: "B",
  explanation:
    "The conjunction 'by the time' introduces a future time clause, which in English uses the present simple even though the event is future, while the main clause uses the future perfect 'will have already submitted': 'By the time the auditors complete their review..., the finance department will have already submitted...'. (A) 'will complete' incorrectly uses future tense inside a time clause introduced by 'by the time'. (C) 'will have completed' is also future tense and cannot appear in the time clause. (D) 'completed' (past simple) wrongly suggests the review is already finished, which contradicts the future reference of the main clause.",
};

const part5y: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The government's new subsidy program is expected to have a positive ______ on small farms across the region.",
  options: [
    { label: "A", text: "affect" },
    { label: "B", text: "effect" },
    { label: "C", text: "affects" },
    { label: "D", text: "effecting" },
  ],
  correct: "B",
  explanation:
    "'Effect' is a noun meaning 'a result or consequence', and it fits the slot after the phrase 'a positive ___ on'. (A) 'affect' is normally a verb meaning 'to influence' and cannot be used as a noun here. (C) 'affects' is the verb form conjugated for a third-person singular subject and does not fit the noun position after 'a positive'. (D) 'effecting' is a gerund/present participle and cannot follow the adjective 'positive' in this noun slot.",
};

const part5z: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The retail chain ______ its flagship store in the capital next Tuesday, according to the press release.",
  options: [
    { label: "A", text: "opened" },
    { label: "B", text: "is opening" },
    { label: "C", text: "has opened" },
    { label: "D", text: "will have opened" },
  ],
  correct: "B",
  explanation:
    "The present continuous is used to describe a fixed, arranged future event, especially with a specific future time expression like 'next Tuesday': 'is opening'. (A) 'opened' is past tense and contradicts the future time marker 'next Tuesday'. (C) 'has opened' (present perfect) implies the opening has already taken place, which contradicts the future reference. (D) 'will have opened' (future perfect) would require a further future reference point (e.g., 'by next Tuesday') and does not match the simple planned-event context here.",
};

const part5aa: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "Because the company's main server crashed twice last week, the IT manager decided to ______ by a technician before the department resumed normal operations.",
  options: [
    { label: "A", text: "have it repaired" },
    { label: "B", text: "have it repair" },
    { label: "C", text: "repair it" },
    { label: "D", text: "have repaired it" },
  ],
  correct: "A",
  explanation:
    "The causative structure 'have + object + past participle' is used when someone arranges for another person to perform an action: 'have it repaired by a technician' means the technician does the repairing, not the IT manager. (B) 'have it repair' incorrectly uses the base form instead of the past participle. (C) 'repair it' is active voice and would mean the IT manager personally repairs the server, which contradicts 'by a technician'. (D) 'have repaired it' has the wrong word order; the causative pattern requires the object immediately after 'have' and before the past participle.",
};

const part5ab: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The manufacturing plant recently adopted a ______ automated assembly system to increase production speed.",
  options: [
    { label: "A", text: "highly efficient new" },
    { label: "B", text: "new highly efficient" },
    { label: "C", text: "efficient highly new" },
    { label: "D", text: "new efficient highly" },
  ],
  correct: "A",
  explanation:
    "Standard English adjective order places opinion/quality adjectives (including an intensifier + adjective like 'highly efficient') before age adjectives like 'new': 'a highly efficient new automated assembly system'. (B) 'new highly efficient' reverses this order, putting the age adjective before the opinion adjective, which sounds unnatural. (C) 'efficient highly new' separates the intensifier 'highly' from the adjective it modifies ('efficient'), which is ungrammatical. (D) 'new efficient highly' places the intensifier 'highly' at the end, where it cannot modify any adjective, making the phrase ungrammatical.",
};

const part5ac: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The customer service team at the telecom provider will ______ the billing complaint and report back to management by Friday.",
  options: [
    { label: "A", text: "look into" },
    { label: "B", text: "look forward to" },
    { label: "C", text: "look up" },
    { label: "D", text: "look after" },
  ],
  correct: "A",
  explanation:
    "'Look into' is a phrasal verb meaning to investigate, which fits the context of examining a complaint before reporting back. (B) 'look forward to' means to anticipate something with pleasure and makes no sense with a complaint. (C) 'look up' means to search for a specific piece of information (e.g., in a directory) and does not mean 'to investigate an issue'. (D) 'look after' means to take care of someone or something and does not fit the sense of investigating a complaint.",
};

const part5ad: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "Before approving the loan, the bank requested ______ additional information about the applicant's business history.",
  options: [
    { label: "A", text: "a few" },
    { label: "B", text: "a little" },
    { label: "C", text: "many" },
    { label: "D", text: "several" },
  ],
  correct: "B",
  explanation:
    "'Information' is an uncountable noun, so it must be modified by a quantifier for uncountable nouns such as 'a little'. (A) 'a few' is used only with countable plural nouns (e.g., 'a few documents'), not with uncountable 'information'. (C) 'many' likewise modifies countable plural nouns and cannot combine with 'information'. (D) 'several' also requires a countable plural noun and is ungrammatical before 'information'.",
};

const part5ae: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "If the insurance company ______ the claim more carefully, it would have detected the fraud before issuing payment.",
  options: [
    { label: "A", text: "had reviewed" },
    { label: "B", text: "reviewed" },
    { label: "C", text: "would review" },
    { label: "D", text: "has reviewed" },
  ],
  correct: "A",
  explanation:
    "This is a third conditional sentence describing a hypothetical situation in the past: the if-clause uses the past perfect ('had reviewed') while the main clause uses 'would have' + past participle ('would have detected'). (B) 'reviewed' (simple past) belongs to the second conditional pattern and would require 'would detect', not 'would have detected'. (C) 'would review' is a conditional form and cannot appear in the if-clause of a conditional sentence. (D) 'has reviewed' (present perfect) does not combine with 'would have detected' to form a valid conditional structure.",
};

const part5af: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The publishing house ______ three award-winning novels in 2019, the year it launched its new literary imprint.",
  options: [
    { label: "A", text: "has released" },
    { label: "B", text: "released" },
    { label: "C", text: "releases" },
    { label: "D", text: "had been releasing" },
  ],
  correct: "B",
  explanation:
    "The time marker 'in 2019' refers to a specific, completed point in the past, so the simple past tense 'released' is required. (A) 'has released' (present perfect) is used for actions with no definite finished time or that connect to the present, and cannot be used with a specific past-time expression like 'in 2019'. (C) 'releases' (present simple) does not describe a completed past action. (D) 'had been releasing' (past perfect continuous) incorrectly suggests an ongoing action before another past event, which does not match the single completed action described here.",
};

const part5ag: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The hotel chain is renovating the properties ______ received the lowest guest satisfaction scores last year.",
  options: [
    { label: "A", text: "that" },
    { label: "B", text: "who" },
    { label: "C", text: "whom" },
    { label: "D", text: "whose" },
  ],
  correct: "A",
  explanation:
    "'Properties' refers to things, not people, so the relative pronoun 'that' is required to introduce this restrictive clause (no comma), acting as the subject of 'received'. (B) 'who' is used only for people, not places or things. (C) 'whom' is also reserved for people and functions as an object pronoun, not a subject. (D) 'whose' is a possessive relative pronoun and would need to be followed by a noun (e.g., 'whose scores'), but here the pronoun itself must act as the subject of the verb 'received'.",
};

const part5ah: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "______ the utility company raised electricity rates twice last year, customer complaints decreased significantly.",
  options: [
    { label: "A", text: "Despite" },
    { label: "B", text: "Even though" },
    { label: "C", text: "Because of" },
    { label: "D", text: "Due to" },
  ],
  correct: "B",
  explanation:
    "'Even though' is a subordinating conjunction that introduces a full clause with a subject and verb ('the utility company raised electricity rates'), expressing a contrast. (A) 'Despite' is a preposition and must be followed by a noun phrase or gerund, not a full clause with a conjugated verb. (C) 'Because of' and (D) 'Due to' are also prepositions, but more importantly they express cause rather than contrast, which contradicts the logic of the sentence: rate increases would be expected to raise complaints, not lower them, so a contrast word is needed.",
};

const part5ai: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The transit authority chose diesel-electric buses because they are more ______ to operate than traditional diesel models, despite the higher upfront cost.",
  options: [
    { label: "A", text: "economy" },
    { label: "B", text: "economic" },
    { label: "C", text: "economical" },
    { label: "D", text: "economics" },
  ],
  correct: "C",
  explanation:
    "'Economical' means cost-efficient or thrifty, which fits the meaning of buses that are cheaper to run. (B) 'Economic' means relating to the economy or the study of economics (e.g., 'economic policy') and does not mean cost-saving. (A) 'Economy' is a noun referring to a system of trade and production, not an adjective. (D) 'Economics' is the noun naming the academic subject, and neither noun can grammatically follow 'more' in this comparative adjective slot.",
};

const part5aj: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The nonprofit organization plans to ______ its outdated database system upgraded before the annual fundraising campaign begins.",
  options: [
    { label: "A", text: "get" },
    { label: "B", text: "make" },
    { label: "C", text: "do" },
    { label: "D", text: "let" },
  ],
  correct: "A",
  explanation:
    "The passive causative structure 'get + object + past participle' shows that the organization will arrange for someone else to perform the action (upgrading the database) rather than doing it personally. (B) 'Make' as a causative verb requires a bare infinitive with an active meaning ('make someone upgrade it'), not a past participle. (C) 'Do' is not used in this causative pattern. (D) 'Let' as a causative verb takes a bare infinitive ('let it happen'), not a past participle, and would also change the meaning to permission rather than arrangement.",
};

const part5ak: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "Not only ______ the stadium expand its seating capacity, but it also added a new digital scoreboard.",
  options: [
    { label: "A", text: "did" },
    { label: "B", text: "does" },
    { label: "C", text: "has" },
    { label: "D", text: "it did" },
  ],
  correct: "A",
  explanation:
    "When a negative adverbial expression like 'Not only' opens a sentence, the subject and auxiliary verb must invert. Since the second clause uses the past-tense verb 'added', the first clause needs the past auxiliary 'did' followed by the base verb: 'Not only did the stadium expand...'. (B) 'does' is present tense and does not match the past-tense 'added'. (C) 'has' would create the present perfect 'has expanded', which is inconsistent with the simple past 'added'. (D) 'it did' fails to invert the subject and auxiliary, which is required after a fronted negative adverbial.",
};

const part5al: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The regional airline had to ______ two aircraft from a partner carrier to cover the holiday travel surge.",
  options: [
    { label: "A", text: "borrow" },
    { label: "B", text: "lend" },
    { label: "C", text: "borrowed" },
    { label: "D", text: "lent" },
  ],
  correct: "A",
  explanation:
    "'Borrow' means to take something temporarily from another party, and the preposition 'from' confirms that the airline is receiving the aircraft, so 'borrow' is correct. (B) 'Lend' means to give something to another party temporarily, which is the opposite direction of meaning and does not fit with 'from a partner carrier'. (C) 'Borrowed' is the wrong verb form; after the construction 'had to', a base form of the verb is required. (D) 'Lent' is both the wrong verb form after 'had to' and the wrong direction of meaning.",
};

const part5am: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The insurance adjuster promised to ______ the unresolved complaint by the end of the week.",
  options: [
    { label: "A", text: "follow up on" },
    { label: "B", text: "look up" },
    { label: "C", text: "come across" },
    { label: "D", text: "catch up on" },
  ],
  correct: "A",
  explanation:
    "'Follow up on' means to pursue further or check on the progress of something, which matches the meaning of continuing to address an unresolved complaint. (B) 'Look up' means to search for information, such as in a reference source, which does not fit an ongoing complaint. (C) 'Come across' means to find something unexpectedly, which does not match a deliberate, promised action. (D) 'Catch up on' means to complete tasks that have been neglected, such as work or reading, but is not idiomatically used with a single complaint that needs a resolution.",
};

const part5an: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "Before the technicians could restore power, the utility company had to purchase ______ to replace the damaged transformers.",
  options: [
    { label: "A", text: "a few pieces of equipment" },
    { label: "B", text: "a few equipments" },
    { label: "C", text: "many equipment" },
    { label: "D", text: "an equipment" },
  ],
  correct: "A",
  explanation:
    "'Equipment' is an uncountable noun, so it must be quantified with a counter phrase like 'a few pieces of'. (B) 'Equipments' is incorrect because uncountable nouns do not take a plural '-s' ending. (C) 'Many' is a quantifier reserved for countable plural nouns, not uncountable nouns like 'equipment', which would require 'much' or 'a lot of'. (D) 'An equipment' is incorrect because uncountable nouns cannot take the indefinite article 'an'.",
};

const part5ao: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The safety inspector recommended ______ the fire extinguishers annually to ensure they remain functional.",
  options: [
    { label: "A", text: "replace" },
    { label: "B", text: "replacing" },
    { label: "C", text: "replaced" },
    { label: "D", text: "to replace" },
  ],
  correct: "B",
  explanation:
    "'Recommend' takes a gerund complement ('recommend doing something'), so 'replacing' is correct: 'recommended replacing the fire extinguishers'. (A) 'replace' is a bare base form and cannot follow 'recommended' directly without 'to' or '-ing'. (C) 'replaced' is a past tense/participle form and does not fit the verb-complement slot. (D) 'to replace' is ungrammatical here, since unlike verbs such as 'decide' or 'plan', 'recommend' does not take a to-infinitive complement.",
};

const part5ap: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The maintenance committee ______ scheduled to meet every second Tuesday of the month to review facility repair requests.",
  options: [
    { label: "A", text: "is" },
    { label: "B", text: "are" },
    { label: "C", text: "were" },
    { label: "D", text: "have been" },
  ],
  correct: "A",
  explanation:
    "A collective noun like 'committee' referring to a single unit takes a singular verb, so 'is' is correct: 'The maintenance committee is scheduled to meet...'. (B) 'are' and (D) 'have been' are plural forms that do not agree with the collective subject treated as one unit. (C) 'were' is also plural and additionally shifts the sentence into the wrong tense for this recurring, ongoing schedule.",
};

const part5aq: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "Documents ______ without proper authorization will be immediately flagged by the security system.",
  options: [
    { label: "A", text: "submit" },
    { label: "B", text: "submitting" },
    { label: "C", text: "submitted" },
    { label: "D", text: "having submitted" },
  ],
  correct: "C",
  explanation:
    "This is a reduced relative clause standing in for 'Documents that are submitted without proper authorization'; since the documents receive the action of submitting, the past participle 'submitted' is required. (A) 'submit' is a bare verb and cannot postmodify a noun this way. (B) 'submitting' is an active participle, which would wrongly imply the documents themselves perform the submitting. (D) 'having submitted' is a perfect active participle showing the subject completed an action before another past event, which contradicts the passive meaning needed here.",
};

const part5ar: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "If the board had approved the budget increase last quarter, the new manufacturing line ______ operational by now.",
  options: [
    { label: "A", text: "would be" },
    { label: "B", text: "would have been" },
    { label: "C", text: "will be" },
    { label: "D", text: "was" },
  ],
  correct: "A",
  explanation:
    "This is a mixed conditional: the past perfect if-clause ('had approved') expresses an unreal past condition, while 'by now' signals a present result, which requires 'would' + base verb: 'would be operational'. (B) 'would have been' is the pure third-conditional form for a past result, but 'by now' points to the present, not the past. (C) 'will be' is a real future form and cannot combine with the hypothetical past perfect if-clause. (D) 'was' is a plain past indicative and does not express the necessary hypothetical meaning.",
};

const part5as: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The airline added extra check-in counters ______ reduce passenger wait times during the holiday season.",
  options: [
    { label: "A", text: "to" },
    { label: "B", text: "for" },
    { label: "C", text: "so as" },
    { label: "D", text: "in order" },
  ],
  correct: "A",
  explanation:
    "To express purpose directly before a base-form verb, the simple infinitive marker 'to' is used: 'added counters to reduce wait times'. (B) 'for' can express purpose but must be followed by a noun or gerund ('for reducing'), not a bare verb. (C) 'so as' and (D) 'in order' are purpose expressions that require 'to' immediately after them ('so as to reduce', 'in order to reduce'); used alone before a bare verb, they are incomplete and ungrammatical.",
};

const part5at: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context: "The new customer support software is ______ user-friendly as the version it replaced.",
  options: [
    { label: "A", text: "as" },
    { label: "B", text: "so" },
    { label: "C", text: "such" },
    { label: "D", text: "too" },
  ],
  correct: "A",
  explanation:
    "An affirmative equal comparison uses the correlative pair 'as...as': 'is as user-friendly as the version it replaced'. (B) 'so' can substitute for the first 'as' only in negative equal comparisons ('is not so user-friendly as...'), not in an affirmative sentence like this one. (C) 'such' does not form this comparative structure with 'as'. (D) 'too' expresses excess and does not fit the equal-comparison pattern 'as + adjective + as'.",
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

const part6k: PracticeQuestionData = {
  prompt: "Part 6 · Read the memo and choose the best word for the blank.",
  context:
    "From: it-operations@meridiantech.com\nTo: all-staff@meridiantech.com\nSubject: Updated Data Backup and Disaster Recovery Policy\n\nDear colleagues,\n\nEffective August 1, all employees must back up critical project files ______ the shared cloud drive at the end of each working day, rather than storing them solely on local hard drives. This updated policy is part of our broader disaster-recovery strategy, designed to minimize data loss in the event of a system failure. IT Operations will conduct random compliance checks throughout the month. Please contact the helpdesk if you need assistance setting up automatic backups.\n\nIT Operations",
  options: [
    { label: "A", text: "at" },
    { label: "B", text: "for" },
    { label: "C", text: "to" },
    { label: "D", text: "of" },
  ],
  correct: "C",
  explanation:
    "The verb 'back up' pairs with the preposition 'to' when specifying the destination of the saved files, as in 'back up files to a drive', so 'to' correctly completes 'back up critical project files to the shared cloud drive'. (A) 'at' describes a location or point in time, not a destination for saved data; (B) 'for' would suggest purpose or benefit rather than a destination; (D) 'of' does not fit the verb-preposition pattern of 'back up' at all.",
};

const part6l: PracticeQuestionData = {
  prompt: "Part 6 · Read the letter and choose the best word for the blank.",
  context:
    "From: procurement@brightfield-manufacturing.com\nTo: contact@summitpackaging.com\nSubject: Welcome to Brightfield Manufacturing's Supplier Network\n\nDear Summit Packaging Team,\n\nWe are delighted to welcome you as an official supplier for Brightfield Manufacturing. Enclosed with this letter you will find our vendor handbook, which outlines our quality standards, delivery expectations, and invoicing procedures. We kindly ask that you review these materials carefully and ______ any questions to your assigned account manager, Laura Chen, within the next two weeks. We look forward to a long and productive partnership.\n\nProcurement Department",
  options: [
    { label: "A", text: "transmit" },
    { label: "B", text: "forward" },
    { label: "C", text: "deliver" },
    { label: "D", text: "dispatch" },
  ],
  correct: "B",
  explanation:
    "'Forward' collocates naturally with a request to send something on to another person, as in 'forward any questions to your assigned account manager'. (A) 'transmit' is typically used for signals, data, or broadcasts rather than questions directed to a person; (C) 'deliver' usually applies to physical items or formal messages, not routed questions; (D) 'dispatch' is used for sending goods, vehicles, or personnel, not for directing inquiries to someone.",
};

const part6m: PracticeQuestionData = {
  prompt: "Part 6 · Read the newsletter announcement and choose the best word for the blank.",
  context:
    "From: hr-newsletter@caldwellfinancial.com\nTo: all-employees@caldwellfinancial.com\nSubject: Employee Spotlight: Welcome Our New Marketing Director\n\nHello everyone,\n\nWe are excited to announce that Rachel Osei ______ our team as the new Marketing Director beginning July 21, after eight years leading campaigns at a national retail chain. Rachel holds an MBA from Boston College and has a strong track record of building brand awareness for consumer products. Please join us in the break room this Friday at 3 p.m. to welcome her before her official start date. Refreshments will be provided.\n\nHR Newsletter Team",
  options: [
    { label: "A", text: "joined" },
    { label: "B", text: "has joined" },
    { label: "C", text: "joining" },
    { label: "D", text: "will join" },
  ],
  correct: "D",
  explanation:
    "Because the announcement specifies a future start date ('beginning July 21'), the main verb must be in the future tense, making 'will join' correct. (A) 'joined' is simple past and would contradict the future start date; (B) 'has joined' (present perfect) implies the action is already completed, which also contradicts 'beginning July 21'; (C) 'joining' is a participle/gerund form and cannot serve as the main verb of the sentence without an auxiliary such as 'is' or 'will be'.",
};

const part6n: PracticeQuestionData = {
  prompt: "Part 6 · Read the email and choose the best word for the blank.",
  context:
    "From: support@nexawave-internet.com\nTo: customers@nexawave-internet.com\nSubject: Service Outage on July 15 – Our Apology\n\nDear Valued Customer,\n\nWe are writing to apologize for the ______ interruption to your internet service that occurred on July 15 between 2 p.m. and 6 p.m. The issue was caused by a hardware failure at one of our regional data centers and has since been fully resolved. As a gesture of goodwill, we are crediting your account with one week of free service. Thank you for your continued patience and loyalty.\n\nNexaWave Customer Support",
  options: [
    { label: "A", text: "unexpectedly" },
    { label: "B", text: "expectation" },
    { label: "C", text: "unexpected" },
    { label: "D", text: "expect" },
  ],
  correct: "C",
  explanation:
    "The blank modifies the noun 'interruption', so an adjective is required, making 'unexpected' correct. (A) 'unexpectedly' is an adverb and cannot directly modify a noun; (B) 'expectation' is a noun and would create 'the expectation interruption', which is not a valid noun phrase; (D) 'expect' is a base-form verb and cannot function as a noun modifier.",
};

const part6o: PracticeQuestionData = {
  prompt: "Part 6 · Read the memo and choose the best word for the blank.",
  context:
    "From: hr@larkspurconsulting.com\nTo: all-staff@larkspurconsulting.com\nSubject: Updated Dress Code Policy\n\nDear Team,\n\nStarting next Monday, employees may wear business-casual attire on any day of the week ______ they are not scheduled to meet with clients or attend a formal presentation. On days involving client meetings, traditional business attire is still required. We believe this update will improve comfort while maintaining a professional image for those representing the company externally. Please direct any questions about the policy to your department manager.\n\nHuman Resources",
  options: [
    { label: "A", text: "even though" },
    { label: "B", text: "as long as" },
    { label: "C", text: "so that" },
    { label: "D", text: "in case" },
  ],
  correct: "B",
  explanation:
    "'As long as' introduces the condition under which employees may dress casually, correctly linking the permission to the requirement that they have no client meetings or formal presentations that day. (A) 'even though' introduces a contrast or concession, which would illogically suggest the casual dress is allowed despite having client meetings; (C) 'so that' introduces a purpose or result, which does not fit a conditional relationship; (D) 'in case' suggests a precaution taken against a possible future event, which does not match the straightforward condition being described.",
};

const part6p: PracticeQuestionData = {
  prompt: "Part 6 · Read the email and choose the best word for the blank.",
  context:
    "From: sustainability@oakridgeenterprises.com\nTo: all-employees@oakridgeenterprises.com\nSubject: Launching Our Office Recycling and Sustainability Initiative\n\nDear Colleagues,\n\nBeginning August 1, Oakridge Enterprises will introduce ______ new recycling program that includes color-coded bins for paper, plastic, and compostable waste on every floor of the building. This initiative supports our company-wide goal of reducing landfill waste by 30 percent over the next two years. Training sessions on proper waste sorting will be held during the first week of August. We appreciate everyone's cooperation in making our workplace more environmentally responsible.\n\nSustainability Committee",
  options: [
    { label: "A", text: "the" },
    { label: "B", text: "that" },
    { label: "C", text: "a" },
    { label: "D", text: "an" },
  ],
  correct: "C",
  explanation:
    "'A' is the correct indefinite article because 'new recycling program' is being introduced for the first time in the announcement, and 'new' begins with a consonant sound, ruling out 'an'. (A) 'the' would incorrectly imply the program has already been mentioned or is already known to the reader; (B) 'that' is a demonstrative that would also incorrectly suggest the program was referenced earlier; (D) 'an' is reserved for words beginning with a vowel sound, but 'new' begins with the consonant sound /n/, so 'an' is grammatically incorrect here.",
};

const part6q: PracticeQuestionData = {
  prompt: "Part 6 · Read the announcement and choose the best word for the blank.",
  context:
    "From: events@brightwaycorp.com\nTo: all-staff@brightwaycorp.com\nSubject: 20th Anniversary Celebration – Save the Date\n\nDear team,\n\nBrightway Corporation ______ its twentieth anniversary on September 15, and we invite everyone to join the celebration in the main atrium. The event will include a catered lunch, a brief speech from the CEO, and a slideshow highlighting milestones from the past two decades. Employees are encouraged to wear company colors for the occasion. More details, including the schedule, will be shared next week.\n\nEvents Team",
  options: [
    { label: "A", text: "celebrated" },
    { label: "B", text: "has celebrated" },
    { label: "C", text: "will celebrate" },
    { label: "D", text: "was celebrating" },
  ],
  correct: "C",
  explanation:
    "The event is scheduled for a specific future date (September 15), so the future tense 'will celebrate' is required, as in 'Brightway Corporation will celebrate its twentieth anniversary on September 15.' (A) 'celebrated' is simple past, describing a completed action, which does not fit a future date; (B) 'has celebrated' is present perfect, used for actions completed at an unspecified past time, not a scheduled future event; (D) 'was celebrating' is past continuous, describing an ongoing past action, which also does not match the future date.",
};

const part6r: PracticeQuestionData = {
  prompt: "Part 6 · Read the email and choose the best word for the blank.",
  context:
    "From: hr@parklanesolutions.com\nTo: all-staff@parklanesolutions.com\nSubject: New Employee Referral Bonus Program\n\nDear colleagues,\n\nWe are pleased to announce a new referral bonus program that rewards staff for recommending qualified candidates for open positions. Employees who refer a candidate who is successfully hired will receive a ______ bonus of $500 after the new hire completes ninety days of employment. To submit a referral, simply forward the candidate's resume to hr@parklanesolutions.com along with a short note explaining why you recommend them. We look forward to welcoming great new talent through your network.\n\nHuman Resources",
  options: [
    { label: "A", text: "generous" },
    { label: "B", text: "generosity" },
    { label: "C", text: "generously" },
    { label: "D", text: "generate" },
  ],
  correct: "A",
  explanation:
    "The blank modifies the noun 'bonus,' so an adjective is required, making 'generous' correct, as in 'will receive a generous bonus of $500.' (B) 'generosity' is a noun and cannot modify another noun in this position; (C) 'generously' is an adverb, which would need to modify a verb rather than a noun; (D) 'generate' is a verb and does not fit the sentence structure at all.",
};

const part6s: PracticeQuestionData = {
  prompt: "Part 6 · Read the email and choose the best word for the blank.",
  context:
    "From: onboarding@cedarfinancialgroup.com\nTo: newclient@example.com\nSubject: Welcome to Cedar Financial Group\n\nDear Ms. Alvarez,\n\nWelcome to Cedar Financial Group. We are delighted that you have chosen us to manage your investment portfolio. Over the next two weeks, your dedicated account manager, Mr. Chen, will contact you ______ phone to schedule an initial consultation and review your financial goals in detail. In the meantime, please complete the attached client information form and return it at your earliest convenience. We look forward to building a long-term partnership with you.\n\nCedar Financial Group",
  options: [
    { label: "A", text: "by" },
    { label: "B", text: "in" },
    { label: "C", text: "at" },
    { label: "D", text: "on" },
  ],
  correct: "A",
  explanation:
    "The fixed expression 'by phone' (without an article) is the standard way to describe contacting someone using a telephone, as in 'will contact you by phone to schedule an initial consultation.' (B) 'in phone' is not an idiomatic English expression; (C) 'at phone' is also not used in this context; (D) 'on phone' is incorrect without an article — the correct form would be 'on the phone,' not simply 'on phone.'",
};

const part6t: PracticeQuestionData = {
  prompt: "Part 6 · Read the announcement and choose the best word for the blank.",
  context:
    "From: wellness@summitlogistics.com\nTo: all-staff@summitlogistics.com\nSubject: Launching Our New Workplace Wellness Program\n\nDear team,\n\nWe are excited to launch a new workplace wellness program designed to support employees' physical and mental health. The program will ______ free yoga classes, on-site health screenings, and a subsidized gym membership, all beginning next month. Employees who complete at least three wellness activities per quarter will also be eligible for a small reward. We encourage everyone to take advantage of these new resources and prioritize their well-being.\n\nWellness Committee",
  options: [
    { label: "A", text: "offer" },
    { label: "B", text: "attend" },
    { label: "C", text: "afford" },
    { label: "D", text: "reach" },
  ],
  correct: "A",
  explanation:
    "The verb 'offer' correctly describes a program providing services or benefits to employees, as in 'The program will offer free yoga classes, on-site health screenings, and a subsidized gym membership.' (B) 'attend' means to be present at an event, which employees do, not something the program itself does; (C) 'afford' means to have enough money for something, which does not fit the meaning of a program providing benefits; (D) 'reach' typically refers to arriving at a place or level, not providing services, so it does not fit here.",
};

const part6u: PracticeQuestionData = {
  prompt: "Part 6 · Read the notice and choose the best word for the blank.",
  context:
    "From: it-procurement@vantagepointe.com\nTo: department-heads@vantagepointe.com\nSubject: Annual Software License Renewal Notice\n\nDear Department Heads,\n\nOur company-wide licenses for the project management and design software suites are due for renewal on October 1. ______ the renewal proceeds automatically, each department must confirm its current number of active users by September 20 so that billing remains accurate. Departments that fail to submit updated user counts by the deadline will be billed based on last year's figures. Please send confirmations directly to IT Procurement.\n\nIT Procurement",
  options: [
    { label: "A", text: "Although" },
    { label: "B", text: "Because" },
    { label: "C", text: "Unless" },
    { label: "D", text: "Since" },
  ],
  correct: "A",
  explanation:
    "The conjunction 'Although' correctly introduces a contrast between the automatic nature of the renewal and the fact that departments must still take action, as in 'Although the renewal proceeds automatically, each department must confirm its current number of active users.' (B) 'Because' would incorrectly suggest the confirmation is required as a result of the automatic renewal, which does not match the sentence's logic; (C) 'Unless' would mean the confirmation is only needed if the renewal does not proceed automatically, which contradicts the intended meaning; (D) 'Since,' used causally, would create the same illogical cause-and-effect relationship as 'Because.'",
};

const part6v: PracticeQuestionData = {
  prompt: "Part 6 · Read the memo and choose the best word for the blank.",
  context:
    "From: facilities@oakridgebusinesspark.com\nTo: all-tenants@oakridgebusinesspark.com\nSubject: New Noise Complaint Procedure\n\nDear Tenants,\n\nTo address the recent increase in noise-related concerns, Oak Ridge Business Park is introducing ______ formal procedure for reporting excessive noise between suites. Beginning next Monday, tenants may submit complaints through the online tenant portal, and Facilities Management will respond within two business days. Repeated violations may result in a formal warning to the tenant responsible. We appreciate your cooperation in maintaining a comfortable work environment for all.\n\nFacilities Management",
  options: [
    { label: "A", text: "a" },
    { label: "B", text: "an" },
    { label: "C", text: "the" },
    { label: "D", text: "one" },
  ],
  correct: "A",
  explanation:
    "The indefinite article 'a' is required before 'formal procedure' because this is introducing a new, non-specific procedure for the first time, and 'formal' begins with a consonant sound, requiring 'a' rather than 'an,' as in 'introducing a formal procedure.' (B) 'an' is used before words beginning with a vowel sound, not the consonant sound in 'formal'; (C) 'the' would incorrectly imply that the procedure has already been mentioned or is already known to the reader; (D) 'one' would emphasize a numerical quantity rather than simply introducing a new procedure, which does not fit naturally here.",
};

const part6w: PracticeQuestionData = {
  prompt: "Part 6 · Read the email and choose the best word for the blank.",
  context:
    "From: projects@delacroix-engineering.com\nTo: team@delacroix-engineering.com\nSubject: Bridge Inspection Project – Status Update\n\nDear team,\n\nBy the time the inspection crew arrived on site Tuesday morning, the survey team had already ______ the preliminary structural assessment, which saved us nearly two days on the overall timeline. The final report is now being compiled and should be ready for client review by Friday. Please let me know if you need access to the raw survey data before then.\n\nProject Management Office",
  options: [
    { label: "A", text: "completed" },
    { label: "B", text: "complete" },
    { label: "C", text: "completing" },
    { label: "D", text: "completes" },
  ],
  correct: "A",
  explanation:
    "The past perfect tense 'had already ______' requires a past participle to pair with the auxiliary 'had', making 'completed' correct: 'the survey team had already completed the preliminary structural assessment'. (B) 'complete' is a base verb/adjective and cannot follow 'had' directly, (C) 'completing' is a present participle/gerund that would need a different auxiliary such as 'was', and (D) 'completes' is a third-person-singular present-tense form that does not combine with 'had' to form the past perfect.",
};

const part6x: PracticeQuestionData = {
  prompt: "Part 6 · Read the memo and choose the best word for the blank.",
  context:
    "From: operations@fairview-distribution.com\nTo: warehouse-staff@fairview-distribution.com\nSubject: New Conveyor Belt System Now Operational\n\nDear team,\n\nFollowing last month's upgrade, the new conveyor belt system is now moving packages far more ______ than the outdated equipment it replaced, cutting average sorting time by nearly 40 percent. Supervisors have reported noticeably fewer jams and delays during peak shipping hours. We will continue monitoring performance over the next quarter and welcome any feedback on the transition.\n\nOperations Department",
  options: [
    { label: "A", text: "efficiently" },
    { label: "B", text: "efficient" },
    { label: "C", text: "efficiency" },
    { label: "D", text: "efficiencies" },
  ],
  correct: "A",
  explanation:
    "The comparative structure 'more ______ than' modifies the verb 'moving', so an adverb is required, making 'efficiently' correct: 'moving packages far more efficiently than the outdated equipment'. (B) 'efficient' is an adjective and can only modify a noun, not a verb, (C) 'efficiency' is a singular noun, and (D) 'efficiencies' is a plural noun — neither noun form can describe how the system is moving packages.",
};

const part6y: PracticeQuestionData = {
  prompt: "Part 6 · Read the email and choose the best word for the blank.",
  context:
    "From: training@caldera-systems.com\nTo: new-hires@caldera-systems.com\nSubject: Mandatory Orientation Session Reminder\n\nDear new team members,\n\nThis is a reminder that the orientation session, ______ will cover company policies, benefits enrollment, and workplace safety procedures, is scheduled for this Thursday at 9:00 AM in the main training room. Attendance is mandatory for all employees hired within the last thirty days. Please bring a valid photo ID, as building security will verify your identity at check-in.\n\nTraining Department",
  options: [
    { label: "A", text: "which" },
    { label: "B", text: "who" },
    { label: "C", text: "whom" },
    { label: "D", text: "whose" },
  ],
  correct: "A",
  explanation:
    "The relative pronoun 'which' correctly introduces a non-restrictive clause referring back to a thing — 'the orientation session' — and functions as the subject of 'will cover'. (B) 'who' is reserved for people, not events, (C) 'whom' is an object relative pronoun for people and cannot serve as the subject of 'will cover', and (D) 'whose' is possessive and would need to be followed by a noun (e.g., 'whose agenda'), not directly by a verb.",
};

const part6z: PracticeQuestionData = {
  prompt: "Part 6 · Read the notice and choose the best word for the blank.",
  context:
    "From: safety@brennan-manufacturing.com\nTo: production-floor@brennan-manufacturing.com\nSubject: Updated Guidelines for Reporting Equipment Malfunctions\n\nDear team,\n\nAll employees are responsible for ______ any equipment malfunction to their shift supervisor immediately, rather than attempting a repair without authorization. This procedure is designed to prevent injuries and reduce unplanned downtime on the production floor. A new incident log has been placed near each workstation for quick reference. Thank you for helping us maintain a safe working environment.\n\nSafety Committee",
  options: [
    { label: "A", text: "reporting" },
    { label: "B", text: "report" },
    { label: "C", text: "reports" },
    { label: "D", text: "reported" },
  ],
  correct: "A",
  explanation:
    "The preposition 'for' must be followed by a gerund functioning as a noun, making 'reporting' correct: 'responsible for reporting any equipment malfunction'. (B) 'report' is a base verb form and cannot directly follow a preposition, (C) 'reports' is a third-person-singular verb form, and (D) 'reported' is a past tense/participle form — neither can serve as the object of the preposition 'for' in this position.",
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

const part7o: PracticeQuestionData = {
  prompt: "Part 7 · Read the bank notice and answer the question.",
  context:
    "NOTICE OF FEE SCHEDULE CHANGE\nMeridian Trust Bank\n\nDear Account Holder,\n\nEffective September 1, the monthly maintenance fee for Standard Checking accounts will increase from $8 to $12. This fee will continue to be waived for customers who maintain a minimum daily balance of $1,500 or who receive direct deposits totaling at least $500 per month.\n\nCustomers who wish to avoid the new fee without meeting these requirements may switch to our fee-free Basic Checking account, which has no monthly minimum but does not include free checks or overdraft protection. To make this change, visit any branch or call 1-800-555-0199 before September 1.\n\nQuestion: How can a Standard Checking customer avoid the new $12 fee without changing accounts?",
  options: [
    { label: "A", text: "By calling the bank to request a one-time waiver" },
    {
      label: "B",
      text: "By maintaining a minimum daily balance of $1,500 or receiving at least $500 in monthly direct deposits",
    },
    { label: "C", text: "By closing and reopening the account" },
    { label: "D", text: "By opting into paperless statements" },
  ],
  correct: "B",
  explanation:
    "The notice states the fee 'will continue to be waived for customers who maintain a minimum daily balance of $1,500 or who receive direct deposits totaling at least $500 per month', so (B) is correct.",
};

const part7p: PracticeQuestionData = {
  prompt: "Part 7 · Read the enrollment confirmation and answer the question.",
  context:
    "COURSE ENROLLMENT CONFIRMATION\nWestbridge University — Office of the Registrar\n\nDear Ms. Alvarez,\n\nThis confirms your enrollment in ECON 305: International Trade Policy for the Fall semester. The course meets Tuesdays and Thursdays from 2:00 to 3:15 p.m. in Hartley Hall, Room 210, beginning September 8.\n\nPlease note that this course has a required weekly discussion section, and you have not yet selected a section time. You must choose a discussion section through the student portal by August 25, or you will be automatically dropped from the course and placed on the waitlist.\n\nQuestion: What must Ms. Alvarez do by August 25?",
  options: [
    { label: "A", text: "Pay the remaining course tuition balance" },
    { label: "B", text: "Select a discussion section through the student portal" },
    { label: "C", text: "Purchase the course textbook" },
    { label: "D", text: "Submit a permission form from her academic advisor" },
  ],
  correct: "B",
  explanation:
    "The confirmation states 'You must choose a discussion section through the student portal by August 25, or you will be automatically dropped from the course', so (B) is correct.",
};

const part7q: PracticeQuestionData = {
  prompt: "Part 7 · Read the rental agreement summary and answer the question.",
  context:
    "RENTAL AGREEMENT SUMMARY\nCoastal Car Rentals — Confirmation #CR-88213\n\nVehicle: Mid-size Sedan\nPickup: July 22, 9:00 a.m., Downtown Branch\nReturn: July 26, 9:00 a.m., Downtown Branch\nRate: $45/day, unlimited mileage\n\nNote: The vehicle must be returned with a full fuel tank. If returned with less than a full tank, a refueling charge of $9 per gallon will be added to your final bill, in addition to a flat $15 service fee. Rentals returned more than one hour past the scheduled time will be charged for an additional full day.\n\nQuestion: What will happen if the vehicle is returned with a partly empty fuel tank?",
  options: [
    { label: "A", text: "The rental rate will be recalculated at a higher daily rate" },
    { label: "B", text: "The renter will be charged a refueling charge plus a $15 service fee" },
    { label: "C", text: "The renter will lose their damage deposit" },
    { label: "D", text: "The renter will be required to return the vehicle to a different branch" },
  ],
  correct: "B",
  explanation:
    "The summary states 'a refueling charge of $9 per gallon will be added to your final bill, in addition to a flat $15 service fee', so (B) is correct.",
};

const part7r: PracticeQuestionData = {
  prompt: "Part 7 · Read the membership policy update and answer the question.",
  context:
    "Peak Fitness Center — Membership Policy Update\n\nDear Member,\n\nStarting next month, members will be able to place their membership on freeze for medical or travel reasons for up to 90 days per calendar year at no charge, provided a freeze request is submitted at least 5 business days in advance. Previously, freezes were limited to 30 days and required a $10 processing fee.\n\nCancellations still require 30 days' written notice and are not affected by this update. Members currently on an active freeze do not need to take any action; the new terms will apply automatically.\n\nQuestion: What can be inferred about members who are currently on an active freeze?",
  options: [
    { label: "A", text: "They will receive written confirmation of the change by mail" },
    { label: "B", text: "They will benefit from the new terms without submitting any new request" },
    { label: "C", text: "They will be given priority for future freeze extensions" },
    { label: "D", text: "They will be moved to a different membership tier automatically" },
  ],
  correct: "B",
  explanation:
    "The update states that members on an active freeze 'do not need to take any action; the new terms will apply automatically', so it can be inferred that they benefit from the new terms without submitting a new request, making (B) correct.",
};

const part7s: PracticeQuestionData = {
  prompt: "Part 7 · Read the permit approval letter and answer the question.",
  context:
    "CITY OF FAIRVIEW — DEPARTMENT OF BUILDING AND SAFETY\n\nRe: Permit Application #BP-4471, 218 Maple Street\n\nDear Mr. Nakamura,\n\nYour application for a permit to construct a rear deck addition at the above address has been approved. Construction may begin immediately, but must be completed within 180 days of this letter's date, or the permit will expire and a new application will be required.\n\nA city inspector must conduct a final inspection before the deck may be used. Please call (555) 209-4400 at least 48 hours in advance to schedule this inspection once construction is complete.\n\nQuestion: What is indicated about the deck once construction is finished?",
  options: [
    { label: "A", text: "It must be registered with the homeowners' association" },
    { label: "B", text: "It cannot be used until a city inspector has approved it" },
    { label: "C", text: "It will require a new permit if the color is changed" },
    { label: "D", text: "It must be insured separately from the main house" },
  ],
  correct: "B",
  explanation:
    "The letter states 'A city inspector must conduct a final inspection before the deck may be used', so (B) is correct.",
};

const part7t: PracticeQuestionData = {
  prompt: "Part 7 · Read the status update notification and answer the question.",
  context:
    "SkyPoint Rewards — Status Update Notification\n\nDear Mr. Owusu,\n\nCongratulations! Based on the 32,000 qualifying miles you flew between January 1 and December 31, you have reached Silver tier status, effective immediately. Silver tier members receive priority boarding and one complimentary checked bag on all SkyPoint-operated flights.\n\nPlease note that Gold tier status, which adds lounge access, requires 50,000 qualifying miles within the same calendar year. Your tier status is reviewed annually each January and will reset unless the mileage threshold is met again in the following year.\n\nQuestion: What must Mr. Owusu do to obtain lounge access?",
  options: [
    { label: "A", text: "Fly 50,000 qualifying miles to reach Gold tier" },
    { label: "B", text: "Pay an annual fee for lounge membership" },
    { label: "C", text: "Fly on SkyPoint-operated flights exclusively" },
    { label: "D", text: "Request a one-time upgrade from customer service" },
  ],
  correct: "A",
  explanation:
    "The notification states 'Gold tier status, which adds lounge access, requires 50,000 qualifying miles within the same calendar year', so (A) is correct.",
};

const part7u: PracticeQuestionData = {
  prompt: "Part 7 · Read the vendor application notice and answer the question.",
  context:
    "Riverside Farmers Market — 2026 Vendor Applications Now Open\n\nThe Riverside Farmers Market is accepting vendor applications for the upcoming season, which runs every Saturday from May through October. Priority will be given to applicants who sell locally grown produce; applications from prepared-food vendors will be considered only after all produce vendor spaces are filled.\n\nCompleted applications, along with a $50 non-refundable application fee, must be submitted by April 10. Vendors will be notified of acceptance by April 24. Space is limited to 40 vendors, and no more than 10 spaces will be reserved for prepared-food vendors.\n\nQuestion: What can be inferred about prepared-food vendor applicants?",
  options: [
    { label: "A", text: "They are required to attend a market orientation session before selling" },
    {
      label: "B",
      text: "They may not receive a space if all produce vendor spots are filled first",
    },
    { label: "C", text: "They receive a discount on the $50 application fee" },
    { label: "D", text: "They are limited to selling only baked goods" },
  ],
  correct: "B",
  explanation:
    "The notice states 'applications from prepared-food vendors will be considered only after all produce vendor spaces are filled', so it can be inferred that a prepared-food vendor may not get a space, making (B) correct.",
};

const part7v: PracticeQuestionData = {
  prompt: "Part 7 · Read the press release and answer the question.",
  context:
    'FOR IMMEDIATE RELEASE\n\nBrightline Logistics Wins 2026 Regional Excellence in Sustainability Award\n\nBrightline Logistics announced today that it has received the Regional Excellence in Sustainability Award from the Metro Chamber of Commerce, recognizing its transition to an all-electric delivery fleet completed last year. The award is presented annually to one company in the transportation sector that demonstrates measurable environmental impact.\n\n"This recognition reflects three years of investment in cleaner delivery operations," said CEO Priya Chandrasekaran. Brightline plans to open its methodology to other regional logistics firms through a free sustainability workshop series beginning in September.\n\nQuestion: What is indicated about the Regional Excellence in Sustainability Award?',
  options: [
    { label: "A", text: "It includes a cash prize for the winning company" },
    { label: "B", text: "It is awarded once a year to a single transportation-sector company" },
    { label: "C", text: "It requires companies to reapply every year to maintain eligibility" },
    {
      label: "D",
      text: "It is open only to companies headquartered in the same city as the Chamber",
    },
  ],
  correct: "B",
  explanation:
    "The release states 'The award is presented annually to one company in the transportation sector', so (B) is correct.",
};

const part7w: PracticeQuestionData = {
  prompt: "Part 7 · Read the payment plan offer and answer the question.",
  context:
    "Cedar Valley Utilities — Payment Plan Offer\n\nDear Customer,\n\nOur records indicate your account balance of $342.60 is currently past due. To help avoid service interruption, we are offering a payment plan that allows you to spread this balance over four equal monthly installments of $85.65, added to your regular monthly bill.\n\nTo enroll, you must contact our billing department by August 5. Accounts not enrolled in a payment plan and remaining unpaid after August 15 will be subject to service disconnection. Enrollment in the plan does not affect your ability to dispute charges separately.\n\nQuestion: What will happen to accounts that are unpaid and not enrolled in a payment plan after August 15?",
  options: [
    { label: "A", text: "They will receive a late fee added to the next bill" },
    { label: "B", text: "They will be subject to service disconnection" },
    { label: "C", text: "They will be referred to a collections agency" },
    { label: "D", text: "They will have their service temporarily suspended for 24 hours" },
  ],
  correct: "B",
  explanation:
    "The offer states 'Accounts not enrolled in a payment plan and remaining unpaid after August 15 will be subject to service disconnection', so (B) is correct.",
};

const part7x: PracticeQuestionData = {
  prompt: "Part 7 · Read the overdue notice and answer the question.",
  context:
    'Fairhaven Public Library — Overdue Notice\n\nDear Patron,\n\nThe following item is overdue: "Data Structures and Algorithms" (Call #QA76.9), originally due July 5. A fine of $0.25 per day is accruing on this item, up to a maximum fine of $10 per item.\n\nPlease return the item or renew it online at fairhavenlibrary.org/account within 7 days. Items not returned or renewed within 21 days of the due date will be marked as lost, and the patron will be billed the full replacement cost of $65.\n\nQuestion: What will happen if the item is not returned or renewed within 21 days of the due date?',
  options: [
    { label: "A", text: "The patron's library card will be suspended" },
    { label: "B", text: "The patron will be billed the full replacement cost of $65" },
    { label: "C", text: "The patron will be charged a processing fee in addition to the fine" },
    { label: "D", text: "The item will be sent to a collections agency" },
  ],
  correct: "B",
  explanation:
    "The notice states 'Items not returned or renewed within 21 days of the due date will be marked as lost, and the patron will be billed the full replacement cost of $65', so (B) is correct.",
};

const part7y: PracticeQuestionData = {
  prompt: "Part 7 · Read the museum notice and answer the question.",
  context:
    'MEMBERSHIP RENEWAL NOTICE\nFairview City Museum of Art\n\nDear Ms. Delgado,\n\nYour Dual Membership (two adults, unlimited free admission) is due to expire on August 15. Renewing before that date keeps your current rate of $95 per year; after August 15, the Dual Membership rate rises to $110. Members also receive a 10% discount at the museum shop and early entry to special exhibitions, including the upcoming Modern Sculpture exhibit opening September 3.\n\nTo renew online, log in to your account at fairviewmuseum.org/members and select "Renew Now." Members who renew by mail should allow up to two weeks for processing.\n\nQuestion: What will happen if Ms. Delgado renews her membership after August 15?',
  options: [
    { label: "A", text: "She will lose access to the museum shop discount" },
    { label: "B", text: "She will be charged the new $110 rate" },
    { label: "C", text: "Her membership will be automatically canceled" },
    { label: "D", text: "She will no longer receive early exhibition entry" },
  ],
  correct: "B",
  explanation:
    "The notice states that 'after August 15, the Dual Membership rate rises to $110', so (B) is correct.",
};

const part7z: PracticeQuestionData = {
  prompt: "Part 7 · Read the booking confirmation and answer the question.",
  context:
    "BOOKING CONFIRMATION\nHearth & Desk Co-working Space\n\nHi Marcus,\n\nThis confirms your reservation of Meeting Room B for Thursday, June 12, from 1:00 P.M. to 3:00 P.M. Your booking includes a projector, whiteboard, and complimentary coffee service for up to 6 guests. Please note that Meeting Room B is located on the third floor and requires a keycard, which you can pick up from the front desk starting at 12:45 P.M.\n\nIf you need to cancel or reschedule, please do so at least 24 hours in advance to avoid a $25 cancellation fee.\n\nQuestion: What must Marcus do before he can enter Meeting Room B on June 12?",
  options: [
    { label: "A", text: "Pay a $25 access fee at the front desk" },
    { label: "B", text: "Pick up a keycard from the front desk" },
    { label: "C", text: "Submit a list of attendee names in advance" },
    { label: "D", text: "Confirm the booking with building security" },
  ],
  correct: "B",
  explanation:
    "The confirmation notes the room 'requires a keycard, which you can pick up from the front desk starting at 12:45 P.M.', so (B) is correct.",
};

const part7aa: PracticeQuestionData = {
  prompt: "Part 7 · Read the warranty approval letter and answer the question.",
  context:
    "WARRANTY CLAIM APPROVAL\nBrightHome Appliances\n\nDear Mr. Kowalski,\n\nWe have reviewed your warranty claim (Claim #WC-4471) for your BrightHome Model X200 refrigerator and confirmed that the compressor failure is covered under your 5-year extended warranty. A replacement compressor will be shipped to your registered address within 5 business days, and a certified technician will contact you within 2 business days to schedule the installation at no charge.\n\nPlease keep your original proof-of-purchase receipt on file, as it may be required for any future claims. If the technician determines that additional parts are needed, those will also be covered under the same warranty terms.\n\nQuestion: What will happen within 2 business days of this letter?",
  options: [
    { label: "A", text: "The replacement compressor will arrive at Mr. Kowalski's address" },
    { label: "B", text: "A technician will contact Mr. Kowalski to schedule installation" },
    { label: "C", text: "Mr. Kowalski will receive a refund for the appliance" },
    { label: "D", text: "The warranty claim will be officially closed" },
  ],
  correct: "B",
  explanation:
    "The letter states 'a certified technician will contact you within 2 business days to schedule the installation', so (B) is correct.",
};

const part7ab: PracticeQuestionData = {
  prompt: "Part 7 · Read the certification notice and answer the question.",
  context:
    "CERTIFICATION NOTICE\nGlobal Compliance Institute\n\nDear Ms. Efe,\n\nCongratulations — you have successfully completed the Workplace Safety Certification course and passed the final assessment with a score of 88%. Your certificate is valid for 3 years from the date of this notice and will be sent to your employer's HR department automatically, since your enrollment was submitted through your company's corporate training account.\n\nTo maintain your certification, you must complete a renewal course before the 3-year expiration date. A reminder will be sent to your registered email 60 days before expiration.\n\nQuestion: What can be inferred about Ms. Efe's certification if she does not complete a renewal course before the expiration date?",
  options: [
    { label: "A", text: "It will remain valid indefinitely" },
    { label: "B", text: "It will need to be renewed through a different institute" },
    { label: "C", text: "It will no longer be valid" },
    { label: "D", text: "It will be downgraded to a temporary certificate" },
  ],
  correct: "C",
  explanation:
    "Since the certificate 'is valid for 3 years' and Ms. Efe 'must complete a renewal course before the 3-year expiration date' to maintain it, it can be inferred that the certification would no longer be valid if she fails to renew it, making (C) correct.",
};

const part7ac: PracticeQuestionData = {
  prompt: "Part 7 · Read the open house invitation and answer the question.",
  context:
    "OPEN HOUSE INVITATION\nRiverside Realty Group\n\nYou're Invited: Open House at 214 Maple Grove Lane\n\nJoin us this Saturday, July 25, from 11:00 A.M. to 2:00 P.M. for an open house at this newly renovated 3-bedroom, 2-bathroom home featuring an updated kitchen, hardwood floors throughout, and a fenced backyard. Light refreshments will be served, and our agent, Priya Nair, will be on-site to answer questions and provide a printed information packet.\n\nParking is limited on Maple Grove Lane, so visitors are encouraged to park in the community lot on Birchwood Avenue and walk the short block to the property.\n\nQuestion: Where should visitors to the open house park their cars?",
  options: [
    { label: "A", text: "In the driveway of 214 Maple Grove Lane" },
    { label: "B", text: "In the community lot on Birchwood Avenue" },
    { label: "C", text: "In a lot reserved by Riverside Realty Group" },
    { label: "D", text: "On the street directly in front of the house" },
  ],
  correct: "B",
  explanation:
    "The invitation states visitors 'are encouraged to park in the community lot on Birchwood Avenue', so (B) is correct.",
};

const part7ad: PracticeQuestionData = {
  prompt: "Part 7 · Read the subscription cancellation confirmation and answer the question.",
  context:
    "SUBSCRIPTION CANCELLATION CONFIRMATION\nHorizon Monthly Magazine\n\nDear Mr. Takahashi,\n\nThis confirms that your subscription to Horizon Monthly has been canceled as requested. You will continue to receive the 2 remaining issues already paid for under your current billing cycle, and no further charges will be applied to your card on file. Because you canceled more than 30 days before your renewal date, you are not eligible for a prorated refund, as our refund policy only applies to cancellations made after an automatic renewal charge has occurred.\n\nIf you change your mind, you may resubscribe at any time at horizonmonthly.com/subscribe.\n\nQuestion: What can be inferred about customers who cancel their subscription after an automatic renewal charge has occurred?",
  options: [
    { label: "A", text: "They are eligible for a prorated refund" },
    { label: "B", text: "They must pay an early cancellation fee" },
    { label: "C", text: "They lose access to remaining issues immediately" },
    { label: "D", text: "They cannot resubscribe in the future" },
  ],
  correct: "A",
  explanation:
    "Mr. Takahashi, who canceled before a renewal charge occurred, is told he is 'not eligible for a prorated refund' because the 'refund policy only applies to cancellations made after an automatic renewal charge has occurred', so it can be inferred that customers who cancel after a renewal charge are eligible for a refund, making (A) correct.",
};

const part7ae: PracticeQuestionData = {
  prompt: "Part 7 · Read the internal memo and answer the question.",
  context:
    "OFFICE RELOCATION ANNOUNCEMENT\nVantek Solutions — Internal Memo\n\nTo: All Staff\nFrom: Facilities Department\n\nWe are pleased to announce that Vantek Solutions will relocate its headquarters from 88 Industrial Parkway to 500 Commerce Center Drive, effective Monday, October 6. The new office offers additional meeting space, a larger break room, and covered parking for all employees. Moving crews will pack and transport desk items the weekend of October 3–4, so employees must clear personal belongings from desks by end of day Friday, October 2.\n\nIT will handle the relocation of computer equipment separately; employees do not need to disconnect their own monitors or docking stations.\n\nQuestion: What are employees required to do by end of day Friday, October 2?",
  options: [
    { label: "A", text: "Disconnect their computer monitors" },
    { label: "B", text: "Submit a change-of-address form" },
    { label: "C", text: "Clear personal belongings from their desks" },
    { label: "D", text: "Return their building access badges" },
  ],
  correct: "C",
  explanation:
    "The memo states 'employees must clear personal belongings from desks by end of day Friday, October 2', so (C) is correct.",
};

const part7af: PracticeQuestionData = {
  prompt: "Part 7 · Read the award notification letter and answer the question.",
  context:
    "SCHOLARSHIP AWARD NOTIFICATION\nDelacroix Foundation for the Arts\n\nDear Ms. Osei,\n\nCongratulations! The Delacroix Foundation is pleased to inform you that you have been selected to receive the 2026 Emerging Artist Grant in the amount of $4,000. This award is intended to support the completion of your proposed ceramics project and must be used within 12 months of the award date. Half of the grant ($2,000) will be disbursed within 2 weeks, with the remaining balance issued upon submission of a progress report at the 6-month mark.\n\nPlease sign and return the enclosed award agreement by August 1 to accept the grant.\n\nQuestion: When will Ms. Osei receive the remaining $2,000 of her grant?",
  options: [
    { label: "A", text: "Immediately after signing the award agreement" },
    { label: "B", text: "Upon submission of a progress report at the 6-month mark" },
    { label: "C", text: "At the end of the 12-month project period" },
    { label: "D", text: "Only if she requests it in writing" },
  ],
  correct: "B",
  explanation:
    "The letter states 'the remaining balance issued upon submission of a progress report at the 6-month mark', so (B) is correct.",
};

const part7ag: PracticeQuestionData = {
  prompt: "Part 7 · Read the promotional email and answer the question.",
  context:
    "SPECIAL OFFER\nQuickBite Delivery\n\nHi Daniel,\n\nIt's been a while! Enjoy 30% off your next order (up to a maximum discount of $10) with code COMEBACK30. This offer is valid on orders of $20 or more and expires July 31. Simply enter the code at checkout — the discount cannot be combined with other promotions or applied to previous orders.\n\nWe've missed having you as a customer. Order now at quickbite.com or through the app.\n\nQuestion: What can be inferred about a customer who places a $50 order using code COMEBACK30?",
  options: [
    { label: "A", text: "The full 30% discount of $15 will be applied" },
    { label: "B", text: "The discount will be capped at $10" },
    { label: "C", text: "The order will not qualify because it exceeds the limit" },
    { label: "D", text: "The customer will receive free delivery instead" },
  ],
  correct: "B",
  explanation:
    "Thirty percent of a $50 order would be $15, but the email specifies the discount is 'up to a maximum discount of $10', so it can be inferred the discount would be capped at $10, making (B) correct.",
};

const part7ah: PracticeQuestionData = {
  prompt: "Part 7 · Read the meeting minutes summary and answer the question.",
  context:
    "MEETING MINUTES SUMMARY\nWillowbrook Cooperative — Board of Directors\n\nThe Board met on May 14 and approved the proposed roof replacement project for Building C, with work scheduled to begin June 2 and take approximately 3 weeks. The project will be funded through the reserve fund, so no special assessment will be charged to residents. Residents of Building C were asked to move any items stored on balconies to a secure location before June 2 to prevent damage during construction.\n\nThe Board also tabled a discussion on updated parking regulations until the next meeting, scheduled for June 18.\n\nQuestion: How will the roof replacement project for Building C be funded?",
  options: [
    { label: "A", text: "Through a special assessment charged to all residents" },
    { label: "B", text: "Through the cooperative's reserve fund" },
    { label: "C", text: "Through a loan from the co-op's bank" },
    { label: "D", text: "Through an increase in monthly maintenance fees" },
  ],
  correct: "B",
  explanation:
    "The minutes state the project 'will be funded through the reserve fund, so no special assessment will be charged to residents', so (B) is correct.",
};

const part7ai: PracticeQuestionData = {
  prompt: "Part 7 · Read the reservation confirmation and answer the question.",
  context:
    "RESERVATION CONFIRMATION\nPawsitive Stay Pet Boarding\n\nDear Mrs. Alvarez,\n\nThis confirms your boarding reservation for your dog, Biscuit, from August 8 to August 15. Check-in is available between 8:00 A.M. and 6:00 P.M. on August 8; please bring Biscuit's vaccination records and any medications with clear dosage instructions. Biscuit is enrolled in our Standard package, which includes 2 daily walks and access to the outdoor play yard.\n\nIf you would like to add the Deluxe package (includes grooming and one-on-one playtime), please contact us at least 48 hours before check-in, as it cannot be added on the day of arrival.\n\nQuestion: What must Mrs. Alvarez do if she wants to add the Deluxe package for Biscuit?",
  options: [
    { label: "A", text: "Pay an additional fee at check-in on August 8" },
    { label: "B", text: "Contact the facility at least 48 hours before check-in" },
    { label: "C", text: "Bring extra medication for Biscuit" },
    { label: "D", text: "Wait until Biscuit's next boarding stay" },
  ],
  correct: "B",
  explanation:
    "The confirmation states to 'contact us at least 48 hours before check-in, as it cannot be added on the day of arrival', so (B) is correct.",
};

const part7aj: PracticeQuestionData = {
  prompt: "Part 7 · Read the installation proposal and answer the question.",
  context:
    "SOLAR INSTALLATION PROPOSAL\nSunPeak Energy Solutions\n\nDear Mr. Bianchi,\n\nThank you for requesting a quote. Based on our site assessment of your roof, we recommend a 16-panel system with an estimated output of 6.4 kW, sufficient to cover approximately 90% of your household's average annual electricity usage. The total installation cost is $18,500 before incentives; after applying the available federal tax credit, your net cost would be approximately $12,950.\n\nThis quote is valid for 60 days. Installation typically takes 1–2 days once permits are approved, and permit approval in your area generally takes 3–4 weeks.\n\nQuestion: What can be inferred about Mr. Bianchi's electricity needs after the solar system is installed?",
  options: [
    { label: "A", text: "He will no longer need any electricity from the grid" },
    { label: "B", text: "He may still need to draw some electricity from the grid" },
    { label: "C", text: "He will produce more electricity than he uses" },
    { label: "D", text: "His electricity usage will decrease by 90%" },
  ],
  correct: "B",
  explanation:
    "The proposal states the system would cover 'approximately 90% of your household's average annual electricity usage', implying the remaining portion would still need to come from another source such as the grid, so (B) is correct.",
};

const part7ak: PracticeQuestionData = {
  prompt: "Part 7 · Read the lease renewal notice and answer the question.",
  context:
    "LEASE RENEWAL NOTICE\nWillow Creek Apartments\n\nDear Ms. Farrow,\n\nYour current lease for Unit 14B is set to expire on September 30. We are pleased to offer you a renewal for a 12-month term at a monthly rent of $1,275, an increase of $50 from your current rate. This offer is valid only if you submit the signed renewal agreement by August 20.\n\nIf we do not receive your signed agreement by that date, your unit will be listed for new applicants, and you will be required to vacate by the lease expiration date. Tenants who renew are not required to submit a new security deposit.\n\nQuestion: What will happen if Ms. Farrow does not submit the signed renewal agreement by August 20?",
  options: [
    { label: "A", text: "Her rent will increase to a higher rate than $1,275" },
    { label: "B", text: "Her unit will be listed for new applicants" },
    { label: "C", text: "She will be charged a new security deposit" },
    { label: "D", text: "Her lease will automatically renew at the current rate" },
  ],
  correct: "B",
  explanation:
    "The notice states 'If we do not receive your signed agreement by that date, your unit will be listed for new applicants', so (B) is correct.",
};

const part7al: PracticeQuestionData = {
  prompt: "Part 7 · Read the loyalty program update and answer the question.",
  context:
    "LOYALTY PROGRAM UPDATE\nCedar & Vine Home Goods\n\nDear Rewards Member,\n\nStarting September 1, our Rewards program is changing how points are earned. Gold tier members will earn 3 points per dollar spent, up from 2 points, while Silver tier members will continue to earn 1 point per dollar, unchanged from the current program. Gold tier status requires $1,500 in annual purchases, while Silver tier requires no minimum spending.\n\nPoints earned before September 1 will not be affected and may still be redeemed at the current rate of 100 points per $5 reward. Members will be notified by email once their accumulated points are eligible for redemption.\n\nQuestion: What can be inferred about Silver tier members after September 1?",
  options: [
    { label: "A", text: "They will earn points at the same rate as before the change" },
    { label: "B", text: "They will be upgraded automatically to Gold tier" },
    { label: "C", text: "They will lose any points earned before September 1" },
    { label: "D", text: "They will need to spend $1,500 annually to keep their status" },
  ],
  correct: "A",
  explanation:
    "The update states that Silver tier members 'will continue to earn 1 point per dollar, unchanged from the current program', so it can be inferred they will earn points at the same rate as before, making (A) correct.",
};

const part7am: PracticeQuestionData = {
  prompt: "Part 7 · Read the guest policy update and answer the question.",
  context:
    "GUEST POLICY UPDATE\nHarborlight Coworking\n\nDear Member,\n\nEffective August 1, all members will be limited to 4 guest visits per month, included at no charge with any membership plan. Previously, guest visits were unlimited but required a $10 day-pass fee per guest. Guests beyond the 4-visit monthly limit will still be permitted but will now be charged a $15 day-pass fee, payable by the guest at check-in.\n\nMembers must register each guest online at least 2 hours before arrival so that front-desk staff can prepare a visitor badge. Guests who arrive without prior registration will not be admitted.\n\nQuestion: What must a member do before bringing a guest to Harborlight Coworking?",
  options: [
    { label: "A", text: "Pay the $15 day-pass fee on the guest's behalf" },
    { label: "B", text: "Register the guest online at least 2 hours before arrival" },
    { label: "C", text: "Request written approval from building management" },
    { label: "D", text: "Upgrade to a higher-tier membership plan" },
  ],
  correct: "B",
  explanation:
    "The update states 'Members must register each guest online at least 2 hours before arrival', and that guests who arrive without registration 'will not be admitted', so (B) is correct.",
};

const part7an: PracticeQuestionData = {
  prompt: "Part 7 · Read the contract addendum and answer the question.",
  context:
    "CONTRACT ADDENDUM\nBetween: Larkspur Design Studio and Contractor: Owen Bryce\n\nThis addendum modifies Section 4 (Compensation) of the freelance services agreement dated January 10. Effective for all work performed after July 1, the hourly rate for design services will increase from $45 to $55. All other terms of the original agreement, including the 15-day invoice payment period, remain unchanged.\n\nThis addendum must be signed by both parties before it takes effect. Work completed before July 1 will be billed at the original rate of $45 per hour, regardless of when the invoice is submitted.\n\nQuestion: At what rate will work completed on June 28 be billed?",
  options: [
    { label: "A", text: "$45 per hour" },
    { label: "B", text: "$55 per hour" },
    { label: "C", text: "A prorated rate between $45 and $55" },
    { label: "D", text: "The rate in effect when the invoice is submitted" },
  ],
  correct: "A",
  explanation:
    "The addendum states 'Work completed before July 1 will be billed at the original rate of $45 per hour, regardless of when the invoice is submitted', so (A) is correct.",
};

const part7ao: PracticeQuestionData = {
  prompt: "Part 7 · Read the utility rate change notice and answer the question.",
  context:
    "NOTICE OF ELECTRICITY RATE CHANGE\nCascade Power & Light\n\nDear Customer,\n\nEffective with your October billing cycle, the per-kilowatt-hour rate for residential customers will increase from $0.14 to $0.16. This adjustment reflects rising costs of infrastructure maintenance and does not apply to customers enrolled in the Fixed-Rate Protection Plan, whose rate of $0.13 per kilowatt-hour is locked in through the end of their current 24-month agreement.\n\nCustomers not enrolled in the Fixed-Rate Protection Plan may apply for the plan at any time, though new enrollments will be subject to the rate in effect at the time of enrollment, not the current $0.13 rate.\n\nQuestion: What can be inferred about a customer who enrolls in the Fixed-Rate Protection Plan in November?",
  options: [
    { label: "A", text: "They will pay $0.13 per kilowatt-hour for 24 months" },
    { label: "B", text: "They will not pay the new $0.16 rate" },
    { label: "C", text: "They will pay a rate other than $0.13 per kilowatt-hour" },
    { label: "D", text: "They will receive a refund for October charges" },
  ],
  correct: "C",
  explanation:
    "The notice states that 'new enrollments will be subject to the rate in effect at the time of enrollment, not the current $0.13 rate', so it can be inferred a November enrollee will pay a rate other than $0.13, making (C) correct.",
};

const part7ap: PracticeQuestionData = {
  prompt: "Part 7 · Read the expense reimbursement policy update and answer the question.",
  context:
    "EXPENSE REIMBURSEMENT POLICY UPDATE\nNorthgate Consulting — Finance Department\n\nEffective July 1, employees must submit expense reports through the new digital portal, ExpenseTrack, rather than the paper forms previously used. Reports must be submitted within 21 days of the expense date; reports submitted after this window will not be reimbursed except in cases of documented travel delays.\n\nThe daily meal per diem for business travel will also increase from $55 to $65. Employees are reminded to attach itemized receipts for any single expense over $25; expenses without receipts above this amount will be reimbursed at half value.\n\nQuestion: What will happen to an expense report submitted 25 days after the expense date, with no documented travel delay?",
  options: [
    { label: "A", text: "It will be reimbursed at half value" },
    { label: "B", text: "It will not be reimbursed" },
    { label: "C", text: "It will be reimbursed at the new $65 per diem rate" },
    { label: "D", text: "It will require additional manager approval" },
  ],
  correct: "B",
  explanation:
    "The update states 'reports submitted after this window will not be reimbursed except in cases of documented travel delays', and a report submitted 25 days later with no documented delay falls outside the 21-day window, so (B) is correct.",
};

const part7aq: PracticeQuestionData = {
  prompt: "Part 7 · Read the community newsletter excerpt and answer the question.",
  context:
    "MAPLEWOOD NEIGHBORHOOD ASSOCIATION NEWSLETTER — July Edition\n\nStreet Resurfacing Update: The city has confirmed that resurfacing of Elmwood Drive and Birchwood Court will begin August 4 and is expected to take 10 days. Residents on these streets should move vehicles to the temporary parking area at Maplewood Community Center during work hours, 7:00 A.M. to 5:00 P.M., to avoid having vehicles towed.\n\nAlso in this issue: the annual block party has been moved from its usual August date to September 12 due to the resurfacing schedule, and volunteer sign-ups for the event are now open on the association website.\n\nQuestion: Why should residents move their vehicles during work hours?",
  options: [
    { label: "A", text: "To make room for the annual block party setup" },
    { label: "B", text: "To avoid having their vehicles towed" },
    { label: "C", text: "To allow volunteers to park closer to the community center" },
    { label: "D", text: "Because street parking will be permanently removed" },
  ],
  correct: "B",
  explanation:
    "The newsletter states residents should move their vehicles 'to avoid having vehicles towed', so (B) is correct.",
};

const part7ar: PracticeQuestionData = {
  prompt: "Part 7 · Read the job offer letter and answer the question.",
  context:
    "Dear Ms. Whitfield,\n\nWe are delighted to offer you the position of Marketing Coordinator at Fernbrook Media, reporting to Director of Marketing, Alan Cho. Your starting annual salary will be $58,000, with eligibility for a performance bonus after your first full year. This offer includes 15 days of paid vacation and health insurance coverage beginning on your first day of employment.\n\nThis offer is contingent upon successful completion of a background check. Please sign and return the enclosed offer letter by July 24 to confirm your acceptance; if we do not receive your response by that date, we will assume you are not accepting the position and will consider other candidates.\n\nQuestion: What is required for the job offer to become final?",
  options: [
    { label: "A", text: "Completion of a 90-day probationary period" },
    { label: "B", text: "Successful completion of a background check" },
    { label: "C", text: "A signed recommendation letter from a previous employer" },
    { label: "D", text: "An in-person meeting with Alan Cho" },
  ],
  correct: "B",
  explanation:
    "The letter states 'This offer is contingent upon successful completion of a background check', so (B) is correct.",
};

const part7as: PracticeQuestionData = {
  prompt: "Part 7 · Read the return and exchange policy update and answer the question.",
  context:
    "RETURN & EXCHANGE POLICY UPDATE\nCastle & Co. Clothing\n\nDear Customer,\n\nStarting August 1, our return window will extend from 30 days to 60 days for all regular-priced merchandise, provided the item is unworn and includes the original tags. Sale items will continue to be final sale and are not eligible for return or exchange, consistent with our current policy.\n\nRefunds will be issued to the original form of payment for regular-priced returns; exchanges for a different size or color remain available at any store location regardless of where the item was purchased.\n\nQuestion: What can be inferred about a customer who wants to return a sale item purchased on August 5?",
  options: [
    { label: "A", text: "They will have 60 days to return the item" },
    { label: "B", text: "They will not be able to return or exchange the item" },
    { label: "C", text: "They will receive store credit instead of a refund" },
    { label: "D", text: "They must return the item to the original purchase location" },
  ],
  correct: "B",
  explanation:
    "The update states 'Sale items will continue to be final sale and are not eligible for return or exchange', so it can be inferred the customer will not be able to return or exchange the item, making (B) correct.",
};

const part7at: PracticeQuestionData = {
  prompt: "Part 7 · Read the class schedule change notice and answer the question.",
  context:
    "CLASS SCHEDULE CHANGE NOTICE\nPulse Cycling Studio\n\nDear Members,\n\nStarting Monday, the 6:00 A.M. Tuesday and Thursday cycling classes will move to 6:30 A.M. to accommodate our new instructor's schedule. All other class times remain unchanged. Members who booked the 6:00 A.M. slot for the next two weeks have already been automatically transferred to the new 6:30 A.M. time; no action is required on your part.\n\nIf the new time does not work for your schedule, you may cancel your booking through the app up to 4 hours before class without penalty.\n\nQuestion: What has already happened to members who had booked the 6:00 A.M. class for the next two weeks?",
  options: [
    { label: "A", text: "Their bookings were canceled and must be rebooked" },
    { label: "B", text: "They were automatically transferred to the 6:30 A.M. class" },
    { label: "C", text: "They were given priority booking for future classes" },
    { label: "D", text: "They were refunded the cost of their class package" },
  ],
  correct: "B",
  explanation:
    "The notice states that affected members 'have already been automatically transferred to the new 6:30 A.M. time; no action is required on your part', so (B) is correct.",
};

const part7au: PracticeQuestionData = {
  prompt: "Part 7 · Read the booking confirmation and answer the question.",
  context:
    "BOOKING CONFIRMATION\nOakhaven Manor Wedding Venue\n\nDear Ms. Delacroix and Mr. Reyes,\n\nThis confirms your booking of the Garden Pavilion for your wedding on May 16, from 4:00 P.M. to 11:00 P.M. Your package includes venue access, on-site parking for 80 vehicles, and use of the bridal suite starting at 12:00 P.M. on the day of the event. A deposit of $1,500 has been received; the remaining balance of $4,200 is due no later than 30 days before the event date.\n\nPlease note that outside catering is not permitted; all food and beverage service must be arranged through Oakhaven's in-house catering team, whom you may contact directly to schedule a menu tasting.\n\nQuestion: When is the remaining balance of $4,200 due?",
  options: [
    { label: "A", text: "On the day of the wedding" },
    { label: "B", text: "No later than 30 days before the event date" },
    { label: "C", text: "Immediately upon signing the booking confirmation" },
    { label: "D", text: "Within 30 days after the wedding" },
  ],
  correct: "B",
  explanation:
    "The confirmation states 'the remaining balance of $4,200 is due no later than 30 days before the event date', so (B) is correct.",
};

const part7av: PracticeQuestionData = {
  prompt: "Part 7 · Read the board election notice and answer the question.",
  context:
    "NOTICE OF BOARD ELECTION\nSummit Ridge Cooperative\n\nDear Shareholder,\n\nThe annual election for two open seats on the Board of Directors will be held at the shareholder meeting on October 9. Shareholders interested in running must submit a candidacy statement to the co-op office by September 18. Ballots will be mailed to all shareholders of record by September 25 and must be returned, either in person or by mail, no later than October 9.\n\nOnly shareholders in good standing, meaning no outstanding maintenance fee balance, are eligible to vote or run for a seat.\n\nQuestion: What is required for a shareholder to be eligible to vote in the election?",
  options: [
    { label: "A", text: "Attendance at the September 18 candidacy deadline" },
    { label: "B", text: "Having no outstanding maintenance fee balance" },
    { label: "C", text: "Owning a unit for at least five years" },
    { label: "D", text: "Submitting a written endorsement from another shareholder" },
  ],
  correct: "B",
  explanation:
    "The notice states 'Only shareholders in good standing, meaning no outstanding maintenance fee balance, are eligible to vote or run for a seat', so (B) is correct.",
};

const part7aw: PracticeQuestionData = {
  prompt: "Part 7 · Read the shipment delay notice and answer the question.",
  context:
    "SHIPMENT DELAY NOTICE\nTrailblazer Freight\n\nDear Customer,\n\nYour shipment (Tracking #TF-77302), originally scheduled to arrive on July 20, has been delayed due to severe weather conditions along its transport route. We now expect delivery on or before July 24. Shipments delayed due to weather are not eligible for the on-time delivery refund that applies to delays caused by carrier error.\n\nWe apologize for the inconvenience and will send an updated tracking notification once your shipment resumes transit.\n\nQuestion: What can be inferred about shipments delayed because of carrier error?",
  options: [
    { label: "A", text: "They are eligible for the on-time delivery refund" },
    { label: "B", text: "They are rerouted through a different carrier" },
    { label: "C", text: "They receive priority handling once resumed" },
    { label: "D", text: "They are not eligible for any compensation" },
  ],
  correct: "A",
  explanation:
    "The notice states weather-related delays 'are not eligible for the on-time delivery refund that applies to delays caused by carrier error', which indicates that delays caused by carrier error are eligible for that refund, so (A) is correct.",
};

const part7ax: PracticeQuestionData = {
  prompt: "Part 7 · Read the package update notice and answer the question.",
  context:
    "PACKAGE UPDATE NOTICE\nBrightPath Tutoring\n\nDear Parent,\n\nStarting with the fall term, our 10-session package will now include one complimentary progress assessment, previously offered only with the 20-session package. The 10-session package price remains $450, unchanged from the current term. Families currently enrolled in a 10-session package for the summer term will not receive the complimentary assessment, as this benefit applies only to packages purchased for the fall term onward.\n\nSessions may still be rescheduled up to 24 hours in advance at no charge.\n\nQuestion: What is now included with the fall term 10-session package?",
  options: [
    { label: "A", text: "A complimentary progress assessment" },
    { label: "B", text: "Two additional free sessions" },
    { label: "C", text: "Access to online practice materials" },
    { label: "D", text: "A discount on the 20-session package" },
  ],
  correct: "A",
  explanation:
    "The notice states 'our 10-session package will now include one complimentary progress assessment', so (A) is correct.",
};

const part7ay: PracticeQuestionData = {
  prompt: "Part 7 · Read the policy renewal notice and answer the question.",
  context:
    "POLICY RENEWAL NOTICE\nGuardian Trust Insurance\n\nDear Ms. Okoro,\n\nYour homeowner's insurance policy (Policy #HO-58821) is set to renew on September 15 at an annual premium of $1,240, an increase of $95 from your current premium. This increase reflects updated regional risk assessments and does not apply to policyholders who have installed a monitored security system verified by our partner providers, who instead qualify for a 10% discount on their renewal premium.\n\nTo apply for the security system discount, submit verification documents through your online account at least 10 days before your renewal date.\n\nQuestion: What can be inferred about a policyholder with a verified monitored security system?",
  options: [
    { label: "A", text: "Their premium will not increase by $95 like Ms. Okoro's" },
    { label: "B", text: "Their policy will not renew automatically" },
    { label: "C", text: "They are exempt from all future rate increases" },
    { label: "D", text: "They must switch to a different provider" },
  ],
  correct: "A",
  explanation:
    "The notice states the $95 increase 'does not apply to policyholders who have installed a monitored security system ... who instead qualify for a 10% discount on their renewal premium', so it can be inferred their premium will not increase by $95 like Ms. Okoro's, making (A) correct.",
};

const part7az: PracticeQuestionData = {
  prompt: "Part 7 · Read the parking permit renewal notice and answer the question.",
  context:
    "RESIDENTIAL PARKING PERMIT RENEWAL\nCity of Brookhaven — Parking Services\n\nDear Resident,\n\nYour residential parking permit for Zone 4 expires on August 31. Renewal applications submitted online at brookhaven.gov/parking before August 15 will retain the current annual fee of $35. Applications submitted between August 15 and the expiration date will be charged a $10 late processing fee in addition to the annual fee.\n\nPermits not renewed by August 31 will be deactivated, and vehicles parked in Zone 4 without a valid permit will be subject to ticketing beginning September 1.\n\nQuestion: What will happen to a resident who submits a renewal application on August 20?",
  options: [
    { label: "A", text: "Their application will be automatically rejected" },
    {
      label: "B",
      text: "They will be charged a $10 late processing fee in addition to the annual fee",
    },
    { label: "C", text: "Their permit will be immediately deactivated" },
    { label: "D", text: "They will be moved to a different parking zone" },
  ],
  correct: "B",
  explanation:
    "The notice states 'Applications submitted between August 15 and the expiration date will be charged a $10 late processing fee in addition to the annual fee', and August 20 falls within that window, so (B) is correct.",
};

const part7ba: PracticeQuestionData = {
  prompt: "Part 7 · Read the reunion invitation letter and answer the question.",
  context:
    "Dear Alumna,\n\nWestbridge University's Alumni Association warmly invites you to the 2026 Homecoming Reunion Weekend, taking place October 16-18 on campus. Early-bird registration, priced at $75 per person, is available through August 30; after that date, registration increases to $95 per person. Your registration fee includes access to the Friday evening welcome reception, Saturday's campus tours, and the alumni dinner banquet.\n\nHotel accommodations are not included in the registration fee, but the Association has secured a discounted room block at the Westbridge Inn for attendees who book by September 15, after which the discounted rate is no longer guaranteed.\n\nQuestion: What must an alumna do to receive the discounted hotel rate at the Westbridge Inn?",
  options: [
    { label: "A", text: "Register for the reunion before August 30" },
    { label: "B", text: "Book a room at the Westbridge Inn by September 15" },
    { label: "C", text: "Attend the Friday evening welcome reception" },
    { label: "D", text: "Pay the full $95 registration fee" },
  ],
  correct: "B",
  explanation:
    "The letter states the Association 'has secured a discounted room block at the Westbridge Inn for attendees who book by September 15, after which the discounted rate is no longer guaranteed', so (B) is correct.",
};

const part7bb: PracticeQuestionData = {
  prompt: "Part 7 · Read the moving estimate and answer the question.",
  context:
    "MOVING ESTIMATE\nSteadyHands Moving Co.\n\nDear Mr. Castellano,\n\nBased on the inventory list you submitted, we estimate your move from your 2-bedroom apartment to your new home will take 6 hours and cost $720, calculated at our hourly rate of $120 for a 2-person crew. This estimate assumes standard access at both locations; if either location requires use of a freight elevator reservation or has stairs beyond one flight, an additional $15 per hour will apply for the extra time required.\n\nThis estimate is valid for 30 days from the date of this letter. A 20% deposit is due at the time of booking to reserve your moving date.\n\nQuestion: What can be inferred about a move that requires navigating two flights of stairs at the new home?",
  options: [
    { label: "A", text: "It will cost less than the original estimate" },
    { label: "B", text: "It may take longer and cost more than the standard estimate" },
    { label: "C", text: "It will require a larger moving crew" },
    { label: "D", text: "It will not be covered by the estimate at all" },
  ],
  correct: "B",
  explanation:
    "The estimate states that if a location 'has stairs beyond one flight, an additional $15 per hour will apply for the extra time required', and two flights of stairs is beyond one flight, so it can be inferred the move may take longer and cost more than the standard estimate, making (B) correct.",
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
  part1k,
  part1l,
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
  part2q,
  part2r,
  part2s,
  part2t,
  part2u,
  part2v,
  part2w,
  part2x,
  part2y,
  part2z,
  part2aa,
  part2ab,
  part2ac,
  part2ad,
  part2ae,
  part2af,
  part2ag,
  part2ah,
  part2ai,
  part2aj,
  part2ak,
  part2al,
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
  part3q,
  part3r,
  part3s,
  part3t,
  part3u,
  part3v,
  part3w,
  part3x,
  part3y,
  part3z,
  part3aa,
  part3ab,
  part3ac,
  part3ad,
  part3ae,
  part3af,
  part3ag,
  part3ah,
  part3ai,
  part3aj,
  part3ak,
  part3al,
  part3am,
  part3an,
  part3ao,
  part3ap,
  part3aq,
  part3ar,
  part3as,
  part3at,
  part3au,
  part3av,
  part3aw,
  part3ax,
  part3ay,
  part3az,
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
  part4m,
  part4n,
  part4o,
  part4p,
  part4q,
  part4r,
  part4s,
  part4t,
  part4u,
  part4v,
  part4w,
  part4x,
  part4y,
  part4z,
  part4aa,
  part4ab,
  part4ac,
  part4ad,
  part4ae,
  part4af,
  part4ag,
  part4ah,
  part4ai,
  part4aj,
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
  part5u,
  part5v,
  part5w,
  part5x,
  part5y,
  part5z,
  part5aa,
  part5ab,
  part5ac,
  part5ad,
  part5ae,
  part5af,
  part5ag,
  part5ah,
  part5ai,
  part5aj,
  part5ak,
  part5al,
  part5am,
  part5an,
  part5ao,
  part5ap,
  part5aq,
  part5ar,
  part5as,
  part5at,
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
  part6k,
  part6l,
  part6m,
  part6n,
  part6o,
  part6p,
  part6q,
  part6r,
  part6s,
  part6t,
  part6u,
  part6v,
  part6w,
  part6x,
  part6y,
  part6z,
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
  part7o,
  part7p,
  part7q,
  part7r,
  part7s,
  part7t,
  part7u,
  part7v,
  part7w,
  part7x,
  part7y,
  part7z,
  part7aa,
  part7ab,
  part7ac,
  part7ad,
  part7ae,
  part7af,
  part7ag,
  part7ah,
  part7ai,
  part7aj,
  part7ak,
  part7al,
  part7am,
  part7an,
  part7ao,
  part7ap,
  part7aq,
  part7ar,
  part7as,
  part7at,
  part7au,
  part7av,
  part7aw,
  part7ax,
  part7ay,
  part7az,
  part7ba,
  part7bb,
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
