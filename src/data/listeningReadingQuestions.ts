import type { PracticeQuestionData } from "@/components/PracticeQuestion";

// ── Part 1 · Photographs ──
const part1a: PracticeQuestionData = {
  image: {
    src: "/images/part1/part1a.jpg",
    credit: "Photo by Shixart1985, CC BY 2.0, via Wikimedia Commons",
  },
  prompt: "Part 1 · Listen to statements A–D and pick the one that best describes the scene.",
  photo: true,
  audio: { label: "Photograph statements", durationSec: 0 },
  context:
    "A close-up of a barista's hands at an espresso machine. One hand presses a wooden tamper into a portafilter while the other rests on the machine's controls.",
  options: [
    { label: "A", text: "The barista is wiping down the espresso machine." },
    { label: "B", text: "The barista is pouring milk into a jug." },
    { label: "C", text: "The barista is pressing a tamper into a portafilter." },
    { label: "D", text: "The barista is stamping a customer's loyalty card." },
  ],
  correct: "C",
  explanation:
    "(C) matches the action actually shown — the tamper is being pressed into the portafilter. (D) swaps 'tamping' for the similar-sounding 'stamping,' a classic Part 1 auditory trap. (A) and (B) describe plausible café actions that aren't happening. Part 1 rewards what is visibly true, not what could be true.",
};

const part1b: PracticeQuestionData = {
  image: {
    src: "/images/part1/part1b.jpg",
    credit: "Photo by Amit Chattopadhyay, CC BY 2.0, via Wikimedia Commons",
  },
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
    "(C) correctly describes the state of the scene — note the passive 'has been placed.' (A) and (D) name actions no one is performing, and (B) swaps the man's real action (reading) for a similar-sounding one (folding) — a classic Part 1 trap.",
};

const part1c: PracticeQuestionData = {
  image: {
    src: "/images/part1/part1c.jpg",
    credit: "Photo by David Lucas, Public domain, via Wikimedia Commons",
  },
  prompt: "Part 1 · Listen to statements A–D and pick the one that best describes the scene.",
  photo: true,
  audio: { label: "Photograph statements", durationSec: 0 },
  context:
    "A worker in a yellow hard hat operates a pallet jack on a loading dock. Stacks of green plastic crates are piled against the wall to his right.",
  options: [
    { label: "A", text: "He's loading crates onto a delivery truck." },
    { label: "B", text: "He's operating a pallet jack." },
    { label: "C", text: "He's climbing a ladder to reach a top shelf." },
    { label: "D", text: "He's carrying a crate on his shoulder." },
  ],
  correct: "B",
  explanation:
    "(B) matches the action actually shown — he's operating the pallet jack. (A) is tempting because crates are visible, but no one is loading them onto a truck; the crates are simply stacked. (C) and (D) describe actions that aren't happening. Watch for statements that name objects you can genuinely see but attach the wrong action to them.",
};

const part1d: PracticeQuestionData = {
  image: {
    src: "/images/part1/part1d.jpg",
    credit: "Photo by Shixart1985, CC BY 2.0, via Wikimedia Commons",
  },
  prompt: "Part 1 · Listen to statements A–D and pick the one that best describes the scene.",
  photo: true,
  audio: { label: "Photograph statements", durationSec: 0 },
  context:
    "A woman in a dark blazer sits at a desk writing in a notebook with a pen. An open laptop stands on the desk beside her, and a framed picture hangs on the wall behind.",
  options: [
    { label: "A", text: "She's writing in a notebook." },
    { label: "B", text: "She's typing on the laptop." },
    { label: "C", text: "She's hanging a picture on the wall." },
    { label: "D", text: "She's righting an overturned chair." },
  ],
  correct: "A",
  explanation:
    "(A) describes the visible action — she's writing in the notebook. (B) is the trap: the laptop is right there and open, but her hands are on the pen, not the keyboard. (D) swaps 'writing' for the identical-sounding 'righting,' a classic Part 1 homophone trap. (C) names an object in the scene but an action nobody is performing.",
};

const part1e: PracticeQuestionData = {
  image: {
    src: "/images/part1/part1e.jpg",
    credit: "Photo by Mostafameraji, CC0, via Wikimedia Commons",
  },
  prompt: "Part 1 · Listen to statements A–D and pick the one that best describes the scene.",
  photo: true,
  audio: { label: "Photograph statements", durationSec: 0 },
  context:
    "A building under construction, seen from a distance. Scaffolding covers the concrete structure. One worker stands on the scaffolding at the left, and two workers in yellow hard hats stand on a platform to the right.",
  options: [
    { label: "A", text: "Scaffolding has been erected around the building." },
    { label: "B", text: "The workers are pouring concrete." },
    { label: "C", text: "A crane is lifting a steel beam." },
    { label: "D", text: "The workers are removing their hard hats." },
  ],
  correct: "A",
  explanation:
    "(A) correctly describes the state of the scene — note the passive 'has been erected,' which describes a result rather than an action in progress. When a photo is taken from far away and you can't make out precisely what each person is doing, the answer is usually a statement about the setting, not about an individual's action. (B), (C), and (D) all name specific actions that can't be seen.",
};

const part1f: PracticeQuestionData = {
  image: {
    src: "/images/part1/part1f.jpg",
    credit: "Photo by Pekka J. Heiskanen, CC BY 4.0, via Wikimedia Commons",
  },
  prompt: "Part 1 · Listen to statements A–D and pick the one that best describes the scene.",
  photo: true,
  audio: { label: "Photograph statements", durationSec: 0 },
  context:
    "A green and white train is stopped alongside a covered station platform. A crowd of passengers, many of them children wearing backpacks, walks along the platform beside the train.",
  options: [
    { label: "A", text: "The train is pulling out of the station." },
    { label: "B", text: "The platform has been cleared of passengers." },
    { label: "C", text: "The train is being washed." },
    { label: "D", text: "Passengers are walking along the platform." },
  ],
  correct: "D",
  explanation:
    "(D) describes what's visibly happening — the passengers are walking along the platform. (A) and (B) both reverse the actual situation: the train is stopped, not departing, and the platform is crowded, not cleared. (C) names an action nobody is performing. Reversals like these are common in Part 1, so listen carefully to the verb.",
};

const part1g: PracticeQuestionData = {
  image: {
    src: "/images/part1/part1g.jpg",
    credit: "Photo by PattayaPatrol, CC BY-SA 4.0, via Wikimedia Commons",
  },
  prompt: "Part 1 · Listen to statements A–D and pick the one that best describes the scene.",
  photo: true,
  audio: { label: "Photograph statements", durationSec: 0 },
  context:
    "In a clothing store, a woman reaches toward a rack of garments on hangers. Two dressed mannequins stand to her left, and folded shirts are displayed on shelves behind her.",
  options: [
    { label: "A", text: "She's folding shirts into a pile." },
    { label: "B", text: "She's looking through a rack of clothing." },
    { label: "C", text: "She's dressing a mannequin." },
    { label: "D", text: "She's paying at the register." },
  ],
  correct: "B",
  explanation:
    "(B) matches the action actually shown — she's going through the clothes on the rack. (A) and (C) are traps built from things you really can see: the shirts are already folded and the mannequins are already dressed, but she isn't doing either. (D) describes an action that isn't happening at all.",
};

const part1h: PracticeQuestionData = {
  image: {
    src: "/images/part1/part1h.jpg",
    credit: "Photo by Shixart1985, CC BY 2.0, via Wikimedia Commons",
  },
  prompt: "Part 1 · Listen to statements A–D and pick the one that best describes the scene.",
  photo: true,
  audio: { label: "Photograph statements", durationSec: 0 },
  context:
    "A man wearing a striped apron stands at a kitchen counter, holding a knife in one hand and half a red onion in the other. Another piece of onion rests on a wooden cutting board beside the sink.",
  options: [
    { label: "A", text: "He's washing vegetables in the sink." },
    { label: "B", text: "He's putting on an apron." },
    { label: "C", text: "He's cutting an onion." },
    { label: "D", text: "He's setting the table for a meal." },
  ],
  correct: "C",
  explanation:
    "(C) matches the action actually shown — he's cutting the onion. (A) and (B) are traps drawn from real details in the photo: there is a sink, and he is wearing an apron, but he isn't washing anything and he put the apron on long before this moment. Part 1 often names something genuinely present and pairs it with the wrong verb.",
};

const part1i: PracticeQuestionData = {
  image: {
    src: "/images/part1/part1i.jpg",
    credit: "Photo by CamrynBell, CC BY-SA 4.0, via Wikimedia Commons",
  },
  prompt: "Part 1 · Listen to statements A–D and pick the one that best describes the scene.",
  photo: true,
  audio: { label: "Photograph statements", durationSec: 0 },
  context:
    "A three-shelf library cart stands on a carpeted floor, filled with books shelved upright. There are no people in the photograph.",
  options: [
    { label: "A", text: "Books have been arranged on a cart." },
    { label: "B", text: "A librarian is pushing the cart." },
    { label: "C", text: "The cart's shelves are empty." },
    { label: "D", text: "Someone is reading at a table." },
  ],
  correct: "A",
  explanation:
    "(A) is correct, and note the passive 'have been arranged' — when a photo contains no people, the answer almost always describes the position or state of objects rather than anyone's action. (B) and (D) are the trap: they invent a person the photo doesn't contain. (C) simply contradicts what you can see.",
};

const part1j: PracticeQuestionData = {
  image: {
    src: "/images/part1/part1j.jpg",
    credit: "Photo by PattayaPatrol, CC BY-SA 4.0, via Wikimedia Commons",
  },
  prompt: "Part 1 · Listen to statements A–D and pick the one that best describes the scene.",
  photo: true,
  audio: { label: "Photograph statements", durationSec: 0 },
  context:
    "At a covered market stall, a vendor in an apron reaches across a display of grapes while a customer holds an open plastic bag above the produce. Bunches of bananas fill the front of the stall, and a scale sits on the counter.",
  options: [
    { label: "A", text: "The vendor is weighing the bananas." },
    { label: "B", text: "The stall is being packed up for the day." },
    { label: "C", text: "The vendor is watering plants in a greenhouse." },
    { label: "D", text: "The customer is holding an open plastic bag." },
  ],
  correct: "D",
  explanation:
    "(D) describes exactly what's visible — the customer holds the bag open over the fruit. (A) is the strongest trap: there really is a scale and there really are bananas, but nothing is on the scale. (C) moves the scene somewhere it isn't, and (B) contradicts the stall's full display.",
};

const part1k: PracticeQuestionData = {
  image: {
    src: "/images/part1/part1k.jpg",
    credit: "Photo by Mostafameraji, CC0, via Wikimedia Commons",
  },
  prompt: "Part 1 · Listen to statements A–D and pick the one that best describes the scene.",
  photo: true,
  audio: { label: "Photograph statements", durationSec: 0 },
  context:
    "A close-up of a barber's hands at work on a client's dark hair. One hand holds a comb flat against the back of the head while the other works a pair of scissors.",
  options: [
    { label: "A", text: "The barber is drying the client's hair." },
    { label: "B", text: "The barber is cutting the client's hair with scissors." },
    { label: "C", text: "The client is holding a mirror." },
    { label: "D", text: "The barber is sweeping up hair clippings." },
  ],
  correct: "B",
  explanation:
    "(B) describes the visible action — the scissors are cutting hair. (D) is plausible in a salon and will feel familiar, but sweeping isn't happening here. (A) names a different step in the same routine, and (C) invents a mirror the close-up doesn't show. Choose the statement that survives a look at this photo, not one that fits salons in general.",
};

const part1l: PracticeQuestionData = {
  image: {
    src: "/images/part1/part1l.jpg",
    credit: "Photo by Liz Roll, Public domain, via Wikimedia Commons",
  },
  prompt: "Part 1 · Listen to statements A–D and pick the one that best describes the scene.",
  photo: true,
  audio: { label: "Photograph statements", durationSec: 0 },
  context:
    "In a warehouse aisle, a man points a handheld barcode scanner at a storage rack. Shrink-wrapped pallets of bottled water are stacked from floor to ceiling on both sides of the aisle.",
  options: [
    { label: "A", text: "He's driving a forklift down the aisle." },
    { label: "B", text: "He's unwrapping a pallet of bottles." },
    { label: "C", text: "He's pointing a scanner at the rack." },
    { label: "D", text: "He's stacking bottles onto a shelf." },
  ],
  correct: "C",
  explanation:
    "(C) matches the action actually shown — he's aiming the handheld scanner at the rack. (B) and (D) describe things being done to the pallets, but the stock is untouched; it's already wrapped and stacked. (A) puts him on equipment he isn't using. In a warehouse photo, expect several statements that sound like warehouse work but describe the wrong action.",
};

// ── Part 2 · Question–Response ──
const part2: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Statement and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Statement and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Statement and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
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
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
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

const part2am: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
  context: "Question: \"What's the main topic on tomorrow's board meeting agenda?\"",
  options: [
    { label: "A", text: "The proposed merger with Fenwick Corp." },
    { label: "B", text: "It starts at nine sharp." },
    { label: "C", text: "The boardroom seats twelve people." },
  ],
  correct: "A",
  explanation:
    "'What' asks for the topic. (A) names it directly. (B) answers 'when' the meeting starts, a wrong question type, and (C) is an unrelated fact about the room's seating capacity.",
};

const part2an: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
  context: 'Question: "Has the loan application been approved yet?"',
  options: [
    { label: "A", text: "Not yet — the underwriter needs two more days." },
    { label: "B", text: "The interest rate is quite competitive." },
    { label: "C", text: "We approved of the new office decor." },
  ],
  correct: "A",
  explanation:
    "This is a yes/no question about the application's status. (A) answers directly with 'not yet.' (B) is a related but non-responsive fact about the rate, not the approval status, and (C) is a sound-alike trap reusing 'approved' to mean 'liked' rather than confirming the loan decision.",
};

const part2ao: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
  context: 'Question: "The software subscription renews automatically next month, doesn\'t it?"',
  options: [
    { label: "A", text: "Yes, unless we cancel it before the billing date." },
    { label: "B", text: "The update added several new features." },
    { label: "C", text: "We subscribe to three trade magazines." },
  ],
  correct: "A",
  explanation:
    "This tag question expects a yes/no confirmation about auto-renewal. (A) confirms it directly. (B) is an unrelated fact about a software update, and (C) is a sound-alike trap reusing 'subscribe' for magazines instead of confirming the software's renewal.",
};

const part2ap: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
  context: 'Question: "Would you like the photos printed on matte paper or glossy paper?"',
  options: [
    { label: "A", text: "Matte, please — it won't show fingerprints." },
    { label: "B", text: "Yes, they turned out beautifully." },
    { label: "C", text: "The photographer arrives at noon." },
  ],
  correct: "A",
  explanation:
    "This is an 'or' choice question offering two paper finishes. (A) selects matte with a reason. (B) incorrectly answers with a plain yes/no, which doesn't fit an 'or' question, and (C) is an unrelated fact about the photographer's arrival time.",
};

const part2aq: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
  context: 'Question: "Do you know which platform the express train to Leeds leaves from?"',
  options: [
    { label: "A", text: "Platform six, according to the departure board." },
    { label: "B", text: "Yes, I've ridden that train many times." },
    { label: "C", text: "The express train takes about ninety minutes." },
  ],
  correct: "A",
  explanation:
    "This is an embedded question — the real question is 'which platform does the train leave from?' (A) states the platform. (B) mistakes 'Do you know' for a literal yes/no question, confirming familiarity without giving a platform, and (C) answers 'how long' the trip takes, not 'which platform.'",
};

const part2ar: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the statement.",
  listening: true,
  spokenOptions: true,
  audio: { label: "Statement and responses", durationSec: 0 },
  context: 'Statement: "The production server crashed twice this morning."',
  options: [
    { label: "A", text: "I'll check the error logs and loop in the on-call engineer." },
    { label: "B", text: "The server room was renovated last year." },
    { label: "C", text: "Crash test results for the new model looked promising." },
  ],
  correct: "A",
  explanation:
    "This statement about a technical problem calls for an appropriate reaction. (A) proposes a logical next step. (B) is an unrelated fact about the room's renovation, and (C) is a sound-alike trap reusing 'crash' in the unrelated sense of vehicle crash tests.",
};

const part2as: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
  context: 'Question: "How much does it cost to rent the moving truck for a full day?"',
  options: [
    { label: "A", text: "About ninety dollars, plus mileage." },
    { label: "B", text: "It seats up to three people." },
    { label: "C", text: "The truck was rented out all weekend." },
  ],
  correct: "A",
  explanation:
    "'How much' asks for a cost. (A) gives the price. (B) states seating capacity, answering 'how many' rather than the price, and (C) is a sound-alike trap reusing 'rented' to describe someone else's usage instead of stating the daily rate.",
};

const part2new1: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
  context: 'Question: "When is my performance review scheduled?"',
  options: [
    { label: "A", text: "In Room 204, down the hall." },
    { label: "B", text: "Yes, it was already reviewed." },
    { label: "C", text: "Next Tuesday at ten o'clock." },
  ],
  correct: "C",
  explanation:
    "'When' asks for a time. 'Next Tuesday at ten o'clock' gives one. (A) answers 'where', a wrong question type, and (B) is a sound-alike trap treating 'review' as a yes/no verb instead of naming a date.",
};

const part2new2: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
  context: 'Question: "Did you submit the expense report for the sales trip?"',
  options: [
    { label: "A", text: "Yes, I submitted it this morning." },
    { label: "B", text: "The trip lasted five days." },
    { label: "C", text: "The expenses were quite high this time." },
  ],
  correct: "A",
  explanation:
    "This is a yes/no question about whether the report was submitted. (A) confirms it directly. (B) is an unrelated fact about the trip's length, and (C) reuses 'expenses' but comments on the amount instead of confirming submission.",
};

const part2new3: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
  context: 'Question: "The new payroll system goes live next Monday, doesn\'t it?"',
  options: [
    { label: "A", text: "Pay stubs are emailed automatically each cycle." },
    { label: "B", text: "Yes, IT finished the migration yesterday." },
    { label: "C", text: "I usually get paid twice a month." },
  ],
  correct: "B",
  explanation:
    "This tag question expects a yes/no confirmation about the launch date. (B) confirms it directly. (A) is a related but non-responsive fact about how stubs are delivered, and (C) is a sound-alike trap reusing 'pay' to describe personal pay frequency rather than confirming the system's go-live date.",
};

const part2new4: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
  context: 'Question: "Should we schedule the vendor meeting for Tuesday or Wednesday?"',
  options: [
    { label: "A", text: "Yes, that works for everyone." },
    { label: "B", text: "The vendor supplies our office furniture." },
    { label: "C", text: "Wednesday would be better — Tuesday's fully booked." },
  ],
  correct: "C",
  explanation:
    "This 'or' choice question requires picking one of the two named days. (C) selects Wednesday with a reason. (A) incorrectly answers with a plain yes/no, which doesn't fit an 'or' question, and (B) is an unrelated fact about what the vendor supplies.",
};

const part2new5: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
  context: 'Question: "Why did the inventory count come up short this quarter?"',
  options: [
    { label: "A", text: "Several pallets were mislabeled during the audit." },
    { label: "B", text: "The warehouse counts inventory every quarter." },
    { label: "C", text: "It was counted by hand this time." },
  ],
  correct: "A",
  explanation:
    "'Why' asks for a reason. Mislabeled pallets explain the shortfall. (B) is a general non-sequitur about how often counts happen, and (C) answers 'how' the count was done, a wrong question type for 'why.'",
};

const part2new6: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
  context: 'Question: "How do I join today\'s video conference call?"',
  options: [
    { label: "A", text: "It starts at two o'clock." },
    { label: "B", text: "Click the link in the calendar invite." },
    { label: "C", text: "The conference room seats twenty people." },
  ],
  correct: "B",
  explanation:
    "'How' asks for a method. Clicking the invite link explains the process. (A) answers 'when' the call starts, and (C) is a sound-alike trap swapping 'conference call' for a physical 'conference room' instead of describing how to join.",
};

const part2new7: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the statement.",
  listening: true,
  spokenOptions: true,
  audio: { label: "Statement and responses", durationSec: 0 },
  context:
    'Statement: "Several employees still haven\'t received their new parking permits for the office relocation."',
  options: [
    { label: "A", text: "I'll follow up with building management today." },
    { label: "B", text: "The new office is closer to the highway." },
    { label: "C", text: "Parking downtown is quite expensive." },
  ],
  correct: "A",
  explanation:
    "This statement about a problem calls for an appropriate reaction. (A) proposes a logical next step. (B) is an unrelated fact about the relocation itself, and (C) reuses 'parking' but makes a general cost comment instead of addressing the missing permits.",
};

const part2r9a: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
  context: 'Question: "Who\'s catering the retirement party on Friday?"',
  options: [
    { label: "A", text: "It starts at noon." },
    { label: "B", text: "Riverside Deli is handling it this time." },
    { label: "C", text: "The party room seats fifty guests." },
  ],
  correct: "B",
  explanation:
    "'Who' asks for the person or company responsible. Riverside Deli names them. (A) answers 'when' the party starts, and (C) is an unrelated fact about room capacity — neither identifies who's catering.",
};

const part2r9b: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
  context: 'Question: "Has the new printer been installed in the design studio?"',
  options: [
    { label: "A", text: "Not yet, IT is coming next Tuesday." },
    { label: "B", text: "The studio just got repainted." },
    { label: "C", text: "We printed five hundred flyers." },
  ],
  correct: "A",
  explanation:
    "This is a yes/no question about installation status. (A) answers directly with 'not yet.' (B) is an unrelated fact about the studio's paint job, and (C) is a sound-alike trap reusing 'printer' as 'printed' to describe an unrelated task rather than confirming installation.",
};

const part2r9c: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
  context: 'Question: "The annual audit starts next Monday, doesn\'t it?"',
  options: [
    { label: "A", text: "The auditors specialize in tax compliance." },
    { label: "B", text: "We audited the warehouse twice last year." },
    { label: "C", text: "Yes, the accounting team already prepared the files." },
  ],
  correct: "C",
  explanation:
    "Tag questions expect a yes/no confirmation. (C) confirms the timing directly. (A) is an unrelated fact about the auditors' specialty, and (B) reuses 'audited' to describe a different, already-completed event rather than confirming next Monday's start.",
};

const part2r9d: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
  context: 'Question: "Would you prefer the window seat or the aisle seat for the flight?"',
  options: [
    { label: "A", text: "The flight departs at six." },
    { label: "B", text: "Seat belts must stay fastened during takeoff." },
    { label: "C", text: "I'll take the aisle seat, thanks." },
  ],
  correct: "C",
  explanation:
    "Or-choice questions require picking one of the two named options. (C) selects the aisle seat. (A) answers 'when' the flight leaves, a wrong question type, and (B) is a plausible-sounding but irrelevant safety reminder that doesn't choose a seat.",
};

const part2r9e: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the statement.",
  listening: true,
  spokenOptions: true,
  audio: { label: "Statement and responses", durationSec: 0 },
  context: 'Statement: "The conference Wi-Fi keeps disconnecting during presentations."',
  options: [
    { label: "A", text: "I'll ask the IT team to check the router." },
    { label: "B", text: "We connected with several new clients last week." },
    { label: "C", text: "The conference room holds two hundred people." },
  ],
  correct: "A",
  explanation:
    "This statement about a technical problem calls for an appropriate reaction. (A) proposes a logical next step. (B) is a sound-alike trap reusing 'connected' in the unrelated sense of networking with clients, and (C) is an unrelated fact about room capacity.",
};

const part2r9f: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
  context: 'Question: "Where should I drop off the signed vendor contracts?"',
  options: [
    { label: "A", text: "They were signed this morning." },
    { label: "B", text: "At the front desk, in the blue folder." },
    { label: "C", text: "The vendor offers a ten percent discount." },
  ],
  correct: "B",
  explanation:
    "'Where' asks for a location. (B) gives the drop-off spot. (A) answers 'when' they were signed, a wrong question type, and (C) is an unrelated fact about vendor pricing.",
};

const part2r10a: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
  context: 'Question: "Where do new hires pick up their building access badge?"',
  options: [
    { label: "A", text: "The badge system was upgraded last year." },
    { label: "B", text: "At the security desk in the main lobby." },
    { label: "C", text: "New hires start on Mondays." },
  ],
  correct: "B",
  explanation:
    "'Where' asks for a location. 'At the security desk in the main lobby' gives one. (A) is an unrelated fact about a past system upgrade, and (C) answers 'when' hires start, a wrong question type for 'where.'",
};

const part2r10b: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
  context: 'Question: "Has the security patch been installed on all the laptops?"',
  options: [
    { label: "A", text: "Yes, IT pushed it out to every device last night." },
    { label: "B", text: "The patch covers three known vulnerabilities." },
    { label: "C", text: "Laptops are issued during orientation." },
  ],
  correct: "A",
  explanation:
    "This is a yes/no question about installation status. (A) confirms it directly. (B) is a related but non-responsive fact about what the patch fixes, not whether it was installed, and (C) is an unrelated fact about when laptops are issued.",
};

const part2r10c: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
  context: 'Question: "The new dinosaur exhibit opens to the public next Saturday, doesn\'t it?"',
  options: [
    { label: "A", text: "The museum expanded its gift shop last year." },
    { label: "B", text: "Exhibits are usually sponsored by local businesses." },
    { label: "C", text: "Yes, the ribbon-cutting is scheduled for ten a.m." },
  ],
  correct: "C",
  explanation:
    "This tag question expects a yes/no confirmation of the opening date. (C) confirms it directly. (A) is an unrelated fact about the gift shop, and (B) is a general non-sequitur about sponsorship rather than confirming Saturday's opening.",
};

const part2r10d: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
  context:
    'Question: "Should we print the brochures in-house, or send the job to an outside print shop?"',
  options: [
    { label: "A", text: "Let's send it out — our printer can't handle that paper stock." },
    { label: "B", text: "Yes, the brochures look great." },
    { label: "C", text: "The print shop is next to the bakery." },
  ],
  correct: "A",
  explanation:
    "This is an 'or' choice question requiring one of the two named options. (A) selects the outside print shop with a reason. (B) incorrectly answers with a plain yes/no, which doesn't fit an 'or' question, and (C) is an unrelated fact about the shop's location rather than a choice.",
};

const part2r10e: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the statement.",
  listening: true,
  spokenOptions: true,
  audio: { label: "Statement and responses", durationSec: 0 },
  context: 'Statement: "The pharmacy says this medication is on backorder for two weeks."',
  options: [
    { label: "A", text: "The pharmacy just renovated its front counter." },
    { label: "B", text: "I'll ask the doctor about a substitute in the meantime." },
    { label: "C", text: "Orders usually ship within two business days." },
  ],
  correct: "B",
  explanation:
    "This statement about a delay calls for an appropriate reaction. (B) proposes a logical next step. (A) is an unrelated fact about the pharmacy's counter, and (C) is a sound-alike trap reusing 'order' from 'backorder' to state an unrelated shipping policy instead of addressing the two-week delay.",
};

const part2r10f: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
  context: 'Question: "How much does it cost to rent a booth at the trade show?"',
  options: [
    { label: "A", text: "It's held in the convention center downtown." },
    { label: "B", text: "Booths are usually ten feet by ten feet." },
    { label: "C", text: "About twelve hundred dollars for a standard space." },
  ],
  correct: "C",
  explanation:
    "'How much' asks for a cost. Only (C) gives a price. (A) answers 'where' the show is held, and (B) states booth dimensions, answering a size question rather than the cost — both wrong question types.",
};

const part2r10g: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
  context: 'Question: "Who\'s reviewing the research grant applications this year?"',
  options: [
    { label: "A", text: "A committee from the dean's office." },
    { label: "B", text: "Applications are due by the end of March." },
    { label: "C", text: "The grant covers lab equipment and travel." },
  ],
  correct: "A",
  explanation:
    "'Who' asks for a person or group. (A) names the reviewing committee. (B) answers 'when' applications are due, and (C) answers 'what' the grant covers — both wrong question types for 'who.'",
};

const part2r11a: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
  context: 'Question: "How do I submit a reimbursement request for travel expenses?"',
  options: [
    { label: "A", text: "Fill out the online form and attach your receipts." },
    { label: "B", text: "The trip lasted three days." },
    { label: "C", text: "Travel expenses were higher this quarter." },
  ],
  correct: "A",
  explanation:
    "'How' asks for a method. Filling out the form describes the process. (B) answers 'how long' the trip was, and (C) is an unrelated fact about cost — both wrong question types for a 'how' question.",
};

const part2r11b: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
  context: 'Question: "Who\'s proofreading the annual report before it goes to print?"',
  options: [
    { label: "A", text: "It goes to print next Friday." },
    { label: "B", text: "Our copyediting team is handling it this year." },
    { label: "C", text: "The report is forty pages long." },
  ],
  correct: "B",
  explanation:
    "'Who' asks for a person or group. 'Our copyediting team' names them. (A) answers 'when' and (C) answers 'how long' — both wrong question types for a 'who' question.",
};

const part2r11c: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
  context: 'Question: "Did the courier already pick up the outgoing packages?"',
  options: [
    { label: "A", text: "Yes, right around noon." },
    { label: "B", text: "He picked up a new hobby last month." },
    { label: "C", text: "The packages weigh about ten pounds each." },
  ],
  correct: "A",
  explanation:
    "This is a yes/no question about whether the pickup happened. (A) confirms it directly. (B) is a sound-alike trap reusing 'picked up' to mean 'took up a hobby' instead of confirming the courier's visit, and (C) is an unrelated fact about weight rather than a yes/no answer.",
};

const part2r11d: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
  context: 'Question: "The elevator maintenance is scheduled for this weekend, isn\'t it?"',
  options: [
    { label: "A", text: "The building has three elevators." },
    { label: "B", text: "Maintenance crews usually work efficiently." },
    { label: "C", text: "Yes, technicians are coming Saturday morning." },
  ],
  correct: "C",
  explanation:
    "This tag question expects a yes/no confirmation of the schedule. (C) confirms it directly. (A) is an unrelated fact about the number of elevators, and (B) is a vague, general non-sequitur about crews rather than a confirmation.",
};

const part2r11e: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the question.",
  listening: true,
  spokenOptions: true,
  audio: { label: "Question and responses", durationSec: 0 },
  context:
    'Question: "Should we hold the client dinner at the steakhouse or the seafood restaurant?"',
  options: [
    { label: "A", text: "Yes, the client will enjoy either one." },
    { label: "B", text: "The seafood restaurant has better reviews, so let's book that one." },
    { label: "C", text: "The steakhouse just renovated its dining room." },
  ],
  correct: "B",
  explanation:
    "This is an 'or' choice question requiring one of the two named options. (B) selects the seafood restaurant with a reason. (A) incorrectly answers with a plain yes/no, which doesn't fit an 'or' question, and (C) reuses 'steakhouse' but gives an unrelated renovation fact instead of making a choice.",
};

const part2r11f: PracticeQuestionData = {
  prompt: "Part 2 · Question–Response. Choose the best reply to the statement.",
  listening: true,
  spokenOptions: true,
  audio: { label: "Statement and responses", durationSec: 0 },
  context: 'Statement: "The keynote speaker just canceled for tomorrow\'s conference."',
  options: [
    { label: "A", text: "Conferences usually run for two full days." },
    { label: "B", text: "The keynote address covers digital marketing trends." },
    { label: "C", text: "I'll reach out to our backup speaker right away." },
  ],
  correct: "C",
  explanation:
    "This statement about a last-minute problem calls for an appropriate reaction. (C) proposes a logical next step. (A) is an unrelated fact about conference length, and (B) reuses 'keynote' but describes its topic instead of reacting to the cancellation.",
};

// ── Part 3 · Conversations ──
const PART3_BROCHURE_MISPRINT = {
  prompt: "Part 3 · Conversations. Listen to the conversation and answer the three questions.",
  listening: true as const,
  groupId: "p3-brochure-misprint",
  audio: { label: "Conversation — Print shop brochures", durationSec: 0 },
  context:
    "(W) Hi, David. I just got back from the print shop. The brochures for tomorrow's trade show are ready, but they spelled our company name wrong on the back cover.\n(M) You're kidding. We hand those out in less than 18 hours. Can they reprint?\n(W) They said yes, but only if we approve a new proof by 5 PM today. Otherwise we'll have to use what we have.\n(M) Okay — forward me the proof as soon as it arrives and I'll sign off immediately.\n(W) Will do. Should I also let Marketing know there might be a delay picking these up?\n(M) Good idea — I'll call them now so they can plan the booth setup around it.",
};

const part31: PracticeQuestionData = {
  ...PART3_BROCHURE_MISPRINT,
  question: "What problem does the woman mention?",
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

const part32: PracticeQuestionData = {
  ...PART3_BROCHURE_MISPRINT,
  question: "What must happen by 5 PM for the brochures to be reprinted?",
  options: [
    { label: "A", text: "A new proof must be approved." },
    { label: "B", text: "Payment must be finalized." },
    { label: "C", text: "The design must be resubmitted." },
    { label: "D", text: "The trade show must be confirmed." },
  ],
  correct: "A",
  explanation:
    "The print shop will reprint 'only if we approve a new proof by 5 PM today.' Payment (B), resubmitting the design (C), and confirming the trade show (D) are never mentioned.",
};

const part33: PracticeQuestionData = {
  ...PART3_BROCHURE_MISPRINT,
  question: "What does the man say he will do next?",
  options: [
    { label: "A", text: "Contact the Marketing team." },
    { label: "B", text: "Pick up the brochures himself." },
    { label: "C", text: "Request a refund from the print shop." },
    { label: "D", text: "Reschedule the trade show." },
  ],
  correct: "A",
  explanation:
    "He says, 'I'll call them now so they can plan the booth setup around it,' referring to Marketing, whom the woman just suggested notifying. Picking up the brochures himself (B), a refund (C), and rescheduling (D) are never mentioned.",
};

const PART3_SHUTTLE_INQUIRY = {
  prompt: "Part 3 · Conversations. Listen to the conversation and answer the three questions.",
  listening: true as const,
  groupId: "p3-shuttle-inquiry",
  audio: { label: "Conversation — Hotel shuttle schedule inquiry", durationSec: 0 },
  context:
    "(M) Front desk, how may I help you?\n(W) Hi, this is Sarah Chen from room 412. I have a quick question about the airport shuttle — I saw the sign in the lobby says it runs every thirty minutes, but the brochure in my room says hourly.\n(M) Oh, I'm sorry for the confusion. We updated the schedule last month; the shuttle now departs on the hour and at half past. The next one leaves at 7:30 AM.\n(W) Great, and does it go directly to Terminal 2?\n(M) Yes, ma'am. It makes one brief stop at Terminal 1 first, then proceeds directly to Terminal 2.\n(W) That's good to know. I'll have four large suitcases with me — is there enough room, or should I book a second shuttle?\n(M) The van comfortably holds six bags, so four won't be a problem, but I'll let the driver know in advance just to be safe.",
};

const part3b1: PracticeQuestionData = {
  ...PART3_SHUTTLE_INQUIRY,
  question: "Why does the woman call the front desk?",
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

const part3b2: PracticeQuestionData = {
  ...PART3_SHUTTLE_INQUIRY,
  question: "What does the man say about the shuttle's current departure schedule?",
  options: [
    { label: "A", text: "It runs every fifteen minutes." },
    { label: "B", text: "It departs every half hour." },
    { label: "C", text: "It runs once every two hours." },
    { label: "D", text: "It operates only in the morning." },
  ],
  correct: "B",
  explanation:
    "The man says the shuttle 'now departs on the hour and at half past' — twice within each hour, or every half hour. Fifteen minutes (A) and every two hours (C) both misstate the interval, and nothing limits service to mornings only (D).",
};

const part3b3: PracticeQuestionData = {
  ...PART3_SHUTTLE_INQUIRY,
  question: "What does the man say he will do about the woman's luggage?",
  options: [
    { label: "A", text: "Reserve a second shuttle for her bags." },
    { label: "B", text: "Let the driver know in advance." },
    { label: "C", text: "Have a porter carry the bags to the van." },
    { label: "D", text: "Charge an additional luggage fee." },
  ],
  correct: "B",
  explanation:
    "The man says 'the van comfortably holds six bags, so four won't be a problem, but I'll let the driver know in advance just to be safe.' A second shuttle (A) is the option the woman raised, not what he does — he says it won't be necessary. A porter (C) and a fee (D) are never mentioned.",
};

const PART3_ROOM_BOOKING = {
  prompt: "Part 3 · Conversations. Listen to the conversation and answer the three questions.",
  listening: true as const,
  groupId: "p3-room-booking",
  audio: { label: "Conversation — Conference room booking", durationSec: 0 },
  context:
    "(W) Hi Greg, have you reserved the conference room for Friday's client presentation?\n(M) I tried to, but the system said both the Rose Room and the Orchid Room are already booked all day.\n(W) That's frustrating. The VP specifically asked for a room with a screen and seating for at least twelve.\n(M) Well, the Lily Room on the fourth floor is available from 2 PM, and it has a 4K display that connects wirelessly. It seats fourteen.\n(W) Perfect — let's book that and send an updated calendar invite to the client team.\n(M) Will do. Should I also arrange catering, or is the client bringing their own refreshments?\n(W) Let's order a light lunch for ten people — the client mentioned they'll grab coffee on their own.",
};

const part3c1: PracticeQuestionData = {
  ...PART3_ROOM_BOOKING,
  question: "What is the man trying to do?",
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

const part3c2: PracticeQuestionData = {
  ...PART3_ROOM_BOOKING,
  question: "What feature of the Lily Room does the man mention?",
  options: [
    { label: "A", text: "It has a wireless 4K display." },
    { label: "B", text: "It has floor-to-ceiling windows." },
    { label: "C", text: "It is located on the second floor." },
    { label: "D", text: "It requires booking one week in advance." },
  ],
  correct: "A",
  explanation:
    "The man says the room 'has a 4K display that connects wirelessly.' (C) swaps the actual floor — the room is on the fourth floor, not the second — a classic Part 3 numbers trap. Windows (B) and an advance-booking requirement (D) are never mentioned.",
};

const part3c3: PracticeQuestionData = {
  ...PART3_ROOM_BOOKING,
  question: "What will the woman order for the client meeting?",
  options: [
    { label: "A", text: "A light lunch for ten guests." },
    { label: "B", text: "Coffee for the client team." },
    { label: "C", text: "A catered breakfast." },
    { label: "D", text: "Snacks for the presentation team only." },
  ],
  correct: "A",
  explanation:
    "The woman says, 'Let's order a light lunch for ten people.' (B) reverses who does what — coffee is what the client will get on their own, not something she is ordering. A catered breakfast (C) and snacks for the presentation team only (D) are never mentioned.",
};

const PART3_INTERVIEW_RESCHEDULE = {
  prompt: "Part 3 · Conversations. Listen to the conversation and answer the three questions.",
  listening: true as const,
  groupId: "p3-interview-reschedule",
  audio: { label: "Conversation — Interview schedule conflict", durationSec: 0 },
  context:
    "(M) Hi Denise, I just saw that the candidate for the marketing position, Mr. Alvarez, is scheduled to come in at 2 PM tomorrow, but I have a budget meeting at that exact time.\n(W) Oh, I didn't realize that meeting had been moved up. Would 10 AM work instead?\n(M) Yes, 10 AM is open on my calendar. Can you also ask Priya from the design team to join, since the role works closely with her group?\n(W) Sure, I'll email both of them right now to confirm the new time.\n(M) Thanks. Also, could you send Priya the candidate's portfolio beforehand so she has time to review it?\n(W) Of course — I'll attach it to the same email so she gets everything at once.",
};

const part3d1: PracticeQuestionData = {
  ...PART3_INTERVIEW_RESCHEDULE,
  question: "Why does the man want to change the interview time?",
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

const part3d2: PracticeQuestionData = {
  ...PART3_INTERVIEW_RESCHEDULE,
  question: "Who does the man ask to be included in the interview?",
  options: [
    { label: "A", text: "Someone from the design team." },
    { label: "B", text: "A senior member of HR." },
    { label: "C", text: "The current marketing director." },
    { label: "D", text: "A representative from finance." },
  ],
  correct: "A",
  explanation:
    "The man asks Denise to 'ask Priya from the design team to join, since the role works closely with her group.' HR (B), the marketing director (C), and finance (D) are never mentioned.",
};

const part3d3: PracticeQuestionData = {
  ...PART3_INTERVIEW_RESCHEDULE,
  question: "What does the man ask the woman to send to Priya?",
  options: [
    { label: "A", text: "The candidate's portfolio." },
    { label: "B", text: "A copy of the job posting." },
    { label: "C", text: "The revised interview schedule." },
    { label: "D", text: "A list of interview questions." },
  ],
  correct: "A",
  explanation:
    "The man asks her to 'send Priya the candidate's portfolio beforehand so she has time to review it.' (C) reuses the scheduling topic discussed earlier in the conversation but isn't what's being sent to Priya. The job posting (B) and interview questions (D) are never mentioned.",
};

const PART3_SHIPMENT_DELAY = {
  prompt: "Part 3 · Conversations. Listen to the conversation and answer the three questions.",
  listening: true as const,
  groupId: "p3-shipment-delay",
  audio: { label: "Conversation — Supplier delivery delay", durationSec: 0 },
  context:
    "(M) Hi Ms. Tran, this is Mark from the warehouse. The shipment of packaging materials we ordered was supposed to arrive this morning, but it hasn't shown up yet.\n(W) I'm sorry about that — our supplier just informed us there's a delay at customs, and the truck won't leave the port until tomorrow.\n(M) That's a problem. We only have enough boxes for two more days of orders.\n(W) Understood. I'll ask them to prioritize a partial shipment by air so you get at least half the order tomorrow afternoon.\n(M) That would help a lot. Should I let the production team know to expect a shortfall?\n(W) Yes, please give them a heads-up, and I'll follow up with a written confirmation once the air shipment is booked.",
};

const part3e1: PracticeQuestionData = {
  ...PART3_SHIPMENT_DELAY,
  question: "According to the woman, why is the shipment late?",
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

const part3e2: PracticeQuestionData = {
  ...PART3_SHIPMENT_DELAY,
  question: "What solution does the woman propose?",
  options: [
    { label: "A", text: "Sending part of the order by air freight." },
    { label: "B", text: "Canceling the order and placing a new one." },
    { label: "C", text: "Switching to a different supplier." },
    { label: "D", text: "Refunding the cost of the shipment." },
  ],
  correct: "A",
  explanation:
    "The woman offers 'to prioritize a partial shipment by air so you get at least half the order tomorrow afternoon' — sending part of the order by air. Canceling (B), a new supplier (C), and a refund (D) are never mentioned.",
};

const part3e3: PracticeQuestionData = {
  ...PART3_SHIPMENT_DELAY,
  question: "What will the woman do once the air shipment is booked?",
  options: [
    { label: "A", text: "Send the man written confirmation." },
    { label: "B", text: "Personally deliver the boxes to the warehouse." },
    { label: "C", text: "Call the customs office for an update." },
    { label: "D", text: "Reduce the price of the delayed order." },
  ],
  correct: "A",
  explanation:
    "'I'll follow up with a written confirmation once the air shipment is booked.' Personally delivering the boxes (B), calling customs (C), and a price reduction (D) are never mentioned. Notifying the production team is the man's task, not hers — the written confirmation is what she commits to.",
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

const PART3_POOL_CAR = {
  prompt: "Part 3 · Conversations. Listen to the conversation and answer the three questions.",
  listening: true as const,
  groupId: "p3-pool-car",
  audio: { label: "Conversation — Company car trouble", durationSec: 0 },
  context:
    "(M) Hi Sandra, the pool car I reserved for tomorrow's client visit is making a strange noise. I don't think it's safe to drive.\n(W) Thanks for letting me know. I'll have the mechanic take a look at it today. In the meantime, would you like to take a taxi to the client visit instead?\n(M) That would help, as long as I can be reimbursed for the fare.\n(W) Definitely. Just keep the receipt and attach it to your expense report next week.\n(M) Sounds good. What time should I book the taxi for, given the client visit starts at 10?\n(W) I'd leave by 9:15 to be safe — traffic downtown tends to build up around then.",
};

const part3i1: PracticeQuestionData = {
  ...PART3_POOL_CAR,
  question: "Why does the man say the pool car is not safe to drive?",
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

const part3i2: PracticeQuestionData = {
  ...PART3_POOL_CAR,
  question: "What does the woman tell the man to do to be reimbursed?",
  options: [
    { label: "A", text: "Keep the receipt and submit it with his expense report." },
    { label: "B", text: "Email a copy of the receipt to accounting immediately." },
    { label: "C", text: "Get approval from her before booking the taxi." },
    { label: "D", text: "Use a company credit card for the fare." },
  ],
  correct: "A",
  explanation:
    "'Just keep the receipt and attach it to your expense report next week.' Emailing accounting (B), needing prior approval (C), and a company card (D) are never mentioned.",
};

const part3i3: PracticeQuestionData = {
  ...PART3_POOL_CAR,
  question: "What time does the woman recommend the man leave for the client visit?",
  options: [
    { label: "A", text: "9:15" },
    { label: "B", text: "10:00" },
    { label: "C", text: "8:30" },
    { label: "D", text: "9:45" },
  ],
  correct: "A",
  explanation:
    "'I'd leave by 9:15 to be safe — traffic downtown tends to build up around then.' The visit itself starts at 10:00 (B), which is the appointment time, not the recommended departure time. 8:30 (C) and 9:45 (D) are never mentioned.",
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
    { label: "D", text: "By the end of next week." },
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

const part3ba: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 53 — Dry cleaner stain complaint", durationSec: 36 },
  context:
    "(W) Hi, I'm picking up the navy blazer I dropped off Tuesday, but there's still a coffee stain on the left sleeve.\n(M) I'm so sorry about that — let me check our log... it looks like the stain treatment was only applied once. I can run it through a second treatment at no charge.\n(W) How long will that take?\n(M) About twenty minutes if you don't mind waiting, or I can have it ready by six this evening.\n\nQuestion: What problem does the woman report about her blazer?",
  options: [
    { label: "A", text: "A stain is still visible after cleaning." },
    { label: "B", text: "A button is missing from the sleeve." },
    { label: "C", text: "The wrong garment was returned to her." },
    { label: "D", text: "The blazer was torn during cleaning." },
  ],
  correct: "A",
  explanation:
    "The woman says the blazer still has 'a coffee stain on the left sleeve,' and the man confirms 'the stain treatment was only applied once.' (B), (C), and (D) are never mentioned — they are typical dry-cleaning-related distractors.",
};

const part3bb: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 54 — Optical shop lens error", durationSec: 38 },
  context:
    "(M) Hi, I picked up my new glasses yesterday, but everything looks blurry whenever I try to read up close.\n(W) I'm sorry to hear that. Let me check your prescription... it looks like the lab used the wrong reading power for your right lens.\n(M) Is there any way to get that corrected quickly?\n(W) Yes, I can order a replacement lens today, and it should be ready by Thursday.\n\nQuestion: Why does the man contact the optical shop?",
  options: [
    { label: "A", text: "His new glasses cause blurry close-up vision because of a lens error." },
    { label: "B", text: "He lost his glasses and needs a replacement pair." },
    { label: "C", text: "He wants a refund for his glasses." },
    { label: "D", text: "He needs to schedule a new eye exam." },
  ],
  correct: "A",
  explanation:
    "The man says his new glasses leave things 'blurry whenever I try to read up close,' and the woman finds 'the lab used the wrong reading power for your right lens.' (B), (C), and (D) are never mentioned — they are typical optical-shop-related distractors.",
};

const part3bc: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 55 — Moving day doorway problem", durationSec: 40 },
  context:
    "(M) Hi, we got the couch to the building, but it won't fit through the stairwell door — it's a few inches too wide.\n(W) Can you try tilting it or taking the legs off?\n(M) We already tried both; it's just not going to clear that doorway.\n(W) Then let's bring it up through the service elevator on the other side of the building instead.\n\nQuestion: What will the movers most likely do next?",
  options: [
    { label: "A", text: "Bring the couch up using the service elevator." },
    { label: "B", text: "Return the couch to the furniture store." },
    { label: "C", text: "Cut the couch apart to fit it through the door." },
    { label: "D", text: "Wait until a wider door is installed." },
  ],
  correct: "A",
  explanation:
    "After the couch fails to fit through the stairwell door even tilted and with the legs off, the woman says, 'let's bring it up through the service elevator on the other side of the building instead.' (B), (C), and (D) are never mentioned — they are typical moving-day distractors.",
};

const part3bd: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 56 — Car rental vehicle upgrade", durationSec: 37 },
  context:
    "(W) Hi, I reserved a compact car, but I just remembered I'll have three large suitcases and two passengers with me.\n(M) I understand. We do have a midsize SUV available for the same reservation dates.\n(W) Would that cost more than my original reservation?\n(M) There's usually a daily upgrade fee, but I can waive it since our compact cars are limited today.\n\nQuestion: What does the woman ask for?",
  options: [
    { label: "A", text: "A larger vehicle to fit her luggage and passengers." },
    { label: "B", text: "A refund for her existing reservation." },
    { label: "C", text: "An extension of her rental period." },
    { label: "D", text: "A pickup at a different rental location." },
  ],
  correct: "A",
  explanation:
    "The woman explains she'll have 'three large suitcases and two passengers' and needs something bigger than the compact car she reserved; the man offers a midsize SUV. (B), (C), and (D) are never mentioned — they are typical car-rental-related distractors.",
};

const part3be: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 57 — Picture framing pickup", durationSec: 39 },
  context:
    "(M) Hi, I'm here to pick up the frame for my diploma — the order was supposed to be ready last week.\n(W) Let me check... yes, it's ready. Would you like glass or the acrylic covering we recommend for shipping?\n(M) I'll take the glass, since I'm just hanging it at home.\n(W) Great, that comes to forty-five dollars. Let me wrap it carefully for you before you go.\n\nQuestion: Where does this conversation most likely take place?",
  options: [
    { label: "A", text: "At a picture framing shop." },
    { label: "B", text: "At a photography studio." },
    { label: "C", text: "At an art gallery." },
    { label: "D", text: "At a print shop." },
  ],
  correct: "A",
  explanation:
    "The talk of picking up 'the frame for my diploma' and choosing between 'glass or the acrylic covering' points specifically to a picture framing shop. (B), (C), and (D) are never mentioned — they are other plausible settings that involve pictures or printing.",
};

const part3bf: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 58 — Charity auction venue setup", durationSec: 41 },
  context:
    "(W) Hi, this is Priya from the downtown community center. I'm calling to confirm the room setup for Saturday's charity auction.\n(M) Of course. I'm the facilities manager here, so I'll personally oversee the chair and table setup that morning.\n(W) Perfect. Will you also be handling the sound system, or should I bring my own microphone?\n(M) I'll have our AV staff test the sound system tomorrow, so you won't need to bring anything.\n\nQuestion: What is the man's job?",
  options: [
    { label: "A", text: "He is the facilities manager at the venue." },
    { label: "B", text: "He is a professional auctioneer." },
    { label: "C", text: "He is an AV technician." },
    { label: "D", text: "He is the charity's fundraising director." },
  ],
  correct: "A",
  explanation:
    "The man states directly, 'I'm the facilities manager here, so I'll personally oversee the chair and table setup.' (B), (C), and (D) are never mentioned — the AV staff are referenced as separate people he will send, not his own role.",
};

const part3bg: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 59 — Home internet service call", durationSec: 43 },
  context:
    "(W) Hi, thanks for coming — my internet has been cutting out every few minutes since yesterday.\n(M) Let me check the modem... I see the signal strength is very low. It might be the cable connection outside.\n(W) Is that something you can fix today?\n(M) Yes, I'll check the line outside first, and if that's the issue, I can replace the connector right now.\n\nQuestion: What problem does the woman report?",
  options: [
    { label: "A", text: "Her internet connection keeps cutting out." },
    { label: "B", text: "Her modem will not turn on at all." },
    { label: "C", text: "She was overcharged on her latest bill." },
    { label: "D", text: "Her Wi-Fi password stopped working." },
  ],
  correct: "A",
  explanation:
    "The woman says, 'my internet has been cutting out every few minutes since yesterday.' (B), (C), and (D) are never mentioned — they are typical home-internet-related distractors.",
};

const part3bh: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 60 — City tour booking conflict", durationSec: 42 },
  context:
    "(W) Hi, I booked the afternoon city tour for tomorrow, but a work meeting just got moved and now runs until 2 PM, so I'll miss the 1 PM departure.\n(M) No problem, we also run a tour at 4 PM that covers the same route.\n(W) That would work much better for me.\n(M) Great, I'll move your booking to the 4 PM tour and email you the updated ticket.\n\nQuestion: Why does the woman contact the tour company?",
  options: [
    { label: "A", text: "Her meeting schedule now conflicts with her booked tour time." },
    { label: "B", text: "She wants a refund for her tour booking." },
    { label: "C", text: "She lost her tour tickets." },
    { label: "D", text: "She wants to add more people to her booking." },
  ],
  correct: "A",
  explanation:
    "The woman explains her 'work meeting just got moved and now runs until 2 PM,' which makes her miss the 1 PM tour she booked. (B), (C), and (D) are never mentioned — they are typical tour-booking-related distractors.",
};

const part3bi: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 61 — Ferry departure delay", durationSec: 40 },
  context:
    "(W) Hi, I'm calling about the 10 AM ferry to Long Island — is it still leaving on time?\n(M) Actually, no. One of the engines needs a quick repair, so we're pushing departure back to 11:30.\n(W) That's going to make me late for a lunch reservation. Is there an earlier option?\n(M) Unfortunately this is the earliest ferry today, but I can offer you a voucher for the delay.\n\nQuestion: Why is the ferry departure delayed?",
  options: [
    { label: "A", text: "An engine needs to be repaired." },
    { label: "B", text: "The ferry hit rough weather." },
    { label: "C", text: "Not enough passengers arrived on time." },
    { label: "D", text: "The captain called in sick." },
  ],
  correct: "A",
  explanation:
    "The man explains, 'one of the engines needs a quick repair, so we're pushing departure back to 11:30.' (B), (C), and (D) are never mentioned — they are typical ferry-related distractors that reuse vocabulary ('ferry', 'departure') from the conversation.",
};

const part3bj: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 62 — University lab equipment mix-up", durationSec: 42 },
  context:
    "(M) Hi, we ordered a centrifuge for the biology lab, but the box that arrived contains a microscope instead.\n(W) I'm sorry about that mix-up. Let me check our system... it looks like your order was swapped with another university's shipment.\n(M) Can you send the correct centrifuge as soon as possible? We have experiments starting Monday.\n(W) I'll ship it overnight so it arrives by Saturday.\n\nQuestion: What problem does the man report?",
  options: [
    { label: "A", text: "The wrong equipment was delivered to the lab." },
    { label: "B", text: "The equipment arrived damaged." },
    { label: "C", text: "The order was never shipped." },
    { label: "D", text: "The invoice amount was incorrect." },
  ],
  correct: "A",
  explanation:
    "The man says 'the box that arrived contains a microscope instead' of the centrifuge they ordered, and the woman confirms 'your order was swapped with another university's shipment.' (B), (C), and (D) are never mentioned — they are typical shipping-related distractors.",
};

const part3bk: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 63 — Piano tuning appointment reschedule", durationSec: 36 },
  context:
    "(W) Hi, this is Elena. I have a piano tuning scheduled for tomorrow afternoon, but I just found out I'll be out of town for a family event.\n(M) No problem, I have an opening this Thursday morning or next Tuesday afternoon.\n(W) Thursday morning works well for me.\n(M) Great, I'll update your appointment to Thursday at 10 AM.\n\nQuestion: Why does the woman contact the piano tuner?",
  options: [
    { label: "A", text: "To reschedule her tuning appointment." },
    { label: "B", text: "To cancel her piano tuning service entirely." },
    { label: "C", text: "To ask about the price of a tuning." },
    { label: "D", text: "To request a specific brand of piano." },
  ],
  correct: "A",
  explanation:
    "The woman says she has an appointment 'scheduled for tomorrow afternoon, but I just found out I'll be out of town,' and the man offers new times, which she accepts. (B), (C), and (D) are never mentioned — they are typical scheduling-related distractors.",
};

const part3bl: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 64 — Locksmith lockout call", durationSec: 37 },
  context:
    "(M) Hi, I'm locked out of my apartment — I left my keys inside and the door locked automatically behind me.\n(W) I can send a locksmith to you within thirty minutes. Can you confirm the address?\n(M) Yes, it's 42 Birchwood Lane, apartment 3B.\n(W) Got it, he'll call you when he's five minutes away.\n\nQuestion: Why does the man call the locksmith company?",
  options: [
    { label: "A", text: "He is locked out of his apartment." },
    { label: "B", text: "He lost his car keys." },
    { label: "C", text: "He wants a lock replaced for security reasons." },
    { label: "D", text: "He needs a key duplicated." },
  ],
  correct: "A",
  explanation:
    "The man states, 'I'm locked out of my apartment — I left my keys inside and the door locked automatically behind me.' (B), (C), and (D) are never mentioned — they are typical locksmith-related distractors.",
};

const part3bm: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 65 — Roofing repair estimate", durationSec: 41 },
  context:
    "(W) Hi, we had some shingles blow off during last week's storm, and I'd like someone to come give us an estimate for repairs.\n(M) Sure, I can come by this Friday afternoon to take a look and measure the damaged area.\n(W) Would you also be able to check the gutters while you're there? They seemed to be sagging too.\n(M) Of course, I'll inspect those as well and include it in the estimate.\n\nQuestion: What does the woman ask the man to do?",
  options: [
    { label: "A", text: "Come provide an estimate for storm damage repairs." },
    { label: "B", text: "Install a completely new roof immediately." },
    { label: "C", text: "Repair a leak in the basement." },
    { label: "D", text: "Remove a fallen tree from the yard." },
  ],
  correct: "A",
  explanation:
    "The woman says shingles blew off in the storm and 'I'd like someone to come give us an estimate for repairs.' (B), (C), and (D) are never mentioned — they are typical roofing-related distractors.",
};

const part3bn: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 66 — Escape room group booking", durationSec: 38 },
  context:
    "(M) Hi, I'd like to book the \"Pharaoh's Tomb\" room for a group of eight this Saturday evening.\n(W) Let me check... we have an opening at 7 PM, and the room typically takes about sixty minutes to complete.\n(M) Perfect. Do you provide clues if we get stuck?\n(W) Yes, our staff can send hints through a screen inside the room if you request them.\n\nQuestion: Where does this conversation most likely take place?",
  options: [
    { label: "A", text: "At an escape room facility." },
    { label: "B", text: "At a movie theater." },
    { label: "C", text: "At a bowling alley." },
    { label: "D", text: "At an amusement park." },
  ],
  correct: "A",
  explanation:
    "The man wants to book 'the \"Pharaoh's Tomb\" room' and asks about 'clues if we get stuck,' with the woman describing in-room hints — details specific to an escape room facility. (B), (C), and (D) are never mentioned.",
};

const part3bo: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 67 — Solar panel installation quote", durationSec: 39 },
  context:
    "(W) So after reviewing your roof measurements, we can install a system that should cover about 80 percent of your electricity usage.\n(M) That sounds good. What's the next step to move forward?\n(W) I'll draft a formal quote tonight and email it to you by tomorrow morning so you can review the pricing.\n(M) Great, I'll look out for that.\n\nQuestion: What will the woman most likely do next?",
  options: [
    { label: "A", text: "Email a formal quote to the man." },
    { label: "B", text: "Begin installing the solar panels tomorrow." },
    { label: "C", text: "Schedule a roof inspection." },
    { label: "D", text: "Apply for a government rebate on his behalf." },
  ],
  correct: "A",
  explanation:
    "The woman says, 'I'll draft a formal quote tonight and email it to you by tomorrow morning so you can review the pricing.' (B), (C), and (D) are never mentioned — they are typical solar-installation-related distractors.",
};

const part3bp: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 68 — Radio station airtime booking", durationSec: 43 },
  context:
    "(M) Hi, I'm calling to book airtime for a client's radio ad during the morning drive-time slot.\n(W) I can help with that. I handle ad sales here at the station, so I can walk you through our available slots.\n(M) Great, do you have anything open next week between 7 and 9 AM?\n(W) Yes, Tuesday and Thursday both have open ten-second slots in that window.\n\nQuestion: What is the woman's job?",
  options: [
    { label: "A", text: "She handles advertising sales at the radio station." },
    { label: "B", text: "She is a radio show host." },
    { label: "C", text: "She is the client's marketing manager." },
    { label: "D", text: "She works in the station's sound engineering department." },
  ],
  correct: "A",
  explanation:
    "The woman states directly, 'I handle ad sales here at the station.' (B), (C), and (D) are never mentioned — they are typical radio-related distractors.",
};

const part3bq: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 69 — Antique desk appraisal request", durationSec: 40 },
  context:
    "(W) Hi, I inherited this old writing desk from my grandmother, and I'd like to know its value before I decide whether to sell it.\n(M) I'd be happy to appraise it. Do you know anything about its history or where it was originally purchased?\n(W) Not much, just that it's been in the family for at least three generations.\n(M) That's helpful. I can have a full appraisal ready for you within a week.\n\nQuestion: What does the woman want from the man?",
  options: [
    { label: "A", text: "An appraisal of the value of an inherited desk." },
    { label: "B", text: "A restoration of a damaged antique." },
    { label: "C", text: "A refund for a previous purchase." },
    { label: "D", text: "A recommendation for a moving company." },
  ],
  correct: "A",
  explanation:
    "The woman says she 'inherited this old writing desk' and 'would like to know its value before I decide whether to sell it,' and the man replies, 'I'd be happy to appraise it.' (B), (C), and (D) are never mentioned — they are typical antique-shop-related distractors.",
};

const part3br: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 70 — Community pool entry issue", durationSec: 36 },
  context:
    "(M) Hi, I tried to scan my membership card at the pool entrance this morning, but the gate wouldn't let me in.\n(W) Let me check your account... it looks like your membership expired at the end of last month.\n(M) I didn't realize that. Can I renew it right now over the phone?\n(W) Yes, I can process the renewal for you immediately.\n\nQuestion: Why does the man contact the pool front desk?",
  options: [
    { label: "A", text: "His membership card was not accepted at the entrance." },
    { label: "B", text: "He forgot his swim goggles." },
    { label: "C", text: "He wants to sign up for swim lessons." },
    { label: "D", text: "He lost his membership card." },
  ],
  correct: "A",
  explanation:
    "The man says he 'tried to scan my membership card at the pool entrance this morning, but the gate wouldn't let me in,' which the woman traces to an expired membership. (B), (C), and (D) are never mentioned — they are typical pool-related distractors.",
};

const PART3_BOWLING_DOUBLE_BOOKING = {
  prompt: "Part 3 · Conversations. Listen to the conversation and answer the three questions.",
  listening: true as const,
  groupId: "p3-bowling-double-booking",
  audio: { label: "Conversation — Bowling alley lane double-booking", durationSec: 0 },
  context:
    "(W) Hi, I reserved two lanes for a birthday party at 6 PM, but when we arrived, the lanes were already occupied by another group.\n(M) I'm so sorry about that mix-up. It looks like our system double-booked those lanes. I can offer you two lanes on the other side of the alley right now, plus complimentary shoe rentals for your group.\n(W) That would work, as long as we can still start close to 6.\n(M) Absolutely, I'll get you set up within the next five minutes.\n(W) Thank you. We also have a food order for twelve pizzas coming at 6:30 — will that still be delivered to the new lanes?\n(M) Yes, I'll update the delivery note myself so the driver brings everything to the new spot.",
};

const part3bs1: PracticeQuestionData = {
  ...PART3_BOWLING_DOUBLE_BOOKING,
  question: "What problem does the woman report?",
  options: [
    { label: "A", text: "Her reserved lanes were occupied by another group." },
    { label: "B", text: "The bowling shoes were the wrong sizes." },
    { label: "C", text: "Her party's food order never arrived." },
    { label: "D", text: "The birthday cake she ordered was missing." },
  ],
  correct: "A",
  explanation:
    "The woman says the lanes she 'reserved... for a birthday party at 6 PM' 'were already occupied by another group,' and the man confirms 'our system double-booked those lanes.' (B), (C), and (D) are never mentioned — they are typical bowling-alley-related distractors.",
};

const part3bs2: PracticeQuestionData = {
  ...PART3_BOWLING_DOUBLE_BOOKING,
  question: "What does the man offer the woman's group?",
  options: [
    { label: "A", text: "Two lanes elsewhere in the alley, plus free shoe rentals." },
    { label: "B", text: "A full refund of the reservation fee." },
    { label: "C", text: "A discount on a future visit." },
    { label: "D", text: "A private party room instead of lanes." },
  ],
  correct: "A",
  explanation:
    "He offers 'two lanes on the other side of the alley right now, plus complimentary shoe rentals for your group.' A refund (B), a future discount (C), and a private room (D) are never mentioned.",
};

const part3bs3: PracticeQuestionData = {
  ...PART3_BOWLING_DOUBLE_BOOKING,
  question: "What does the man say he will do about the food order?",
  options: [
    { label: "A", text: "Update the delivery note himself." },
    { label: "B", text: "Cancel the pizza order." },
    { label: "C", text: "Ask the woman to call the restaurant." },
    { label: "D", text: "Offer a free dessert instead." },
  ],
  correct: "A",
  explanation:
    "'I'll update the delivery note myself so the driver brings everything to the new spot.' Canceling the order (B), asking her to call the restaurant (C), and a free dessert (D) are never mentioned.",
};

const part3new1: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 72 — Auto repair shop brake diagnosis", durationSec: 34 },
  context:
    "(W) Hi, I brought my car in this morning because I keep hearing a grinding noise whenever I brake.\n(M) I checked it out, and it looks like your brake pads are almost completely worn down.\n(W) Is that something you can fix today?\n(M) Yes, I have the parts in stock, so I can replace them within the hour.\n\nQuestion: What is the problem with the woman's car?",
  options: [
    { label: "A", text: "The engine is overheating." },
    { label: "B", text: "The brake pads are worn down." },
    { label: "C", text: "The battery is dead." },
    { label: "D", text: "The tires are flat." },
  ],
  correct: "B",
  explanation:
    "The man says, 'it looks like your brake pads are almost completely worn down.' (A), (C), and (D) are never mentioned — they are typical auto-repair-related distractors.",
};

const part3new2: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 73 — Furniture store delivery reschedule", durationSec: 32 },
  context:
    "(M) Hi, this is Oliver. I'm calling about the delivery of my new dining table, scheduled for tomorrow morning.\n(W) Yes, I have that on file. Is there a problem?\n(M) The building's elevator is being serviced tomorrow, so nothing can be delivered until Thursday.\n(W) No problem, I'll move your delivery to Thursday morning and send a confirmation text.\n\nQuestion: Why does the man call the furniture store?",
  options: [
    {
      label: "A",
      text: "His building's elevator will be out of service on the scheduled delivery day.",
    },
    { label: "B", text: "He wants to cancel his order entirely." },
    { label: "C", text: "He wants a refund for a damaged table." },
    { label: "D", text: "He wants to add another item to his order." },
  ],
  correct: "A",
  explanation:
    "The man explains, 'the building's elevator is being serviced tomorrow, so nothing can be delivered until Thursday,' prompting him to reschedule. (B), (C), and (D) are never mentioned — they are typical furniture-delivery-related distractors.",
};

const part3new3: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 74 — Banquet hall anniversary gala setup", durationSec: 40 },
  context:
    "(W) Hi, I'm calling to confirm the table arrangement for Saturday's fiftieth anniversary dinner.\n(M) Of course. I'm the event coordinator here, so I'll make sure the ballroom is set up with round tables for eighty guests.\n(W) Wonderful. Will the dance floor be ready as well?\n(M) Yes, our crew will lay down the dance floor and lighting first thing Saturday morning.\n\nQuestion: Where does this conversation most likely take place?",
  options: [
    { label: "A", text: "At a florist shop." },
    { label: "B", text: "At a photography studio." },
    { label: "C", text: "At a banquet hall." },
    { label: "D", text: "At a bakery." },
  ],
  correct: "C",
  explanation:
    "References to 'the ballroom,' 'round tables for eighty guests,' and 'the dance floor' point to a banquet hall hosting the anniversary dinner. (A), (B), and (D) are never mentioned.",
};

const part3new4: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 75 — Bridal shop rush alteration", durationSec: 38 },
  context:
    "(W) Hi, I'm getting married in ten days, and the waist on my gown still feels too loose after the last fitting.\n(M) Let me take another look... you're right, we can take it in about an inch. I can have that done by Friday.\n(W) That would be perfect. Could I also come back Friday afternoon to try it on one more time?\n(M) Absolutely, I'll pencil you in for 3 PM.\n\nQuestion: What does the woman want the tailor to do?",
  options: [
    { label: "A", text: "Replace the fabric of the gown." },
    { label: "B", text: "Shorten the length of the gown." },
    { label: "C", text: "Add embroidery to the sleeves." },
    { label: "D", text: "Take in the waist of the gown." },
  ],
  correct: "D",
  explanation:
    "The woman says the waist 'still feels too loose,' and the man agrees, 'we can take it in about an inch.' (A), (B), and (C) are never mentioned — they are typical bridal-alteration-related distractors.",
};

const part3new5: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 76 — Language institute placement test results", durationSec: 33 },
  context:
    "(M) Hi, this is Andre. I took the placement test last week and wanted to find out which level I've been placed into.\n(W) Let me pull up your results... you scored high enough to skip straight to the intermediate class.\n(M) That's great news. When does that class start?\n(W) The next session begins Monday at 6 PM.\n\nQuestion: Why does the man call the language institute?",
  options: [
    { label: "A", text: "To find out his placement test results." },
    { label: "B", text: "To request a refund for the test fee." },
    { label: "C", text: "To complain about his teacher." },
    { label: "D", text: "To reschedule the placement test." },
  ],
  correct: "A",
  explanation:
    "The man says he 'wanted to find out which level I've been placed into.' (B), (C), and (D) are never mentioned — they are typical language-school-related distractors.",
};

const part3new6: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 77 — Career fair recruiting booth setup", durationSec: 36 },
  context:
    "(W) The recruiting booth is all set up, but the screen we're using to play our company video won't turn on.\n(M) Let me check the power strip... it looks like it just wasn't plugged in all the way.\n(W) Oh, that would do it. Can you fix that before students start arriving?\n(M) Yes, give me two minutes and it should be working.\n\nQuestion: What problem does the woman report at the recruiting booth?",
  options: [
    { label: "A", text: "The booth's brochures did not arrive." },
    { label: "B", text: "The video screen will not turn on." },
    { label: "C", text: "The booth location was changed without notice." },
    { label: "D", text: "The internet connection is too slow." },
  ],
  correct: "B",
  explanation:
    "The woman says 'the screen we're using to play our company video won't turn on.' (A), (C), and (D) are never mentioned — they are typical career-fair-related distractors.",
};

const part3new7: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 78 — Data center cooling system alert", durationSec: 37 },
  context:
    "(M) The temperature sensors in server room B just triggered an alert — it's five degrees above the normal range.\n(W) Let's check the backup cooling unit... it looks like the primary unit's compressor failed.\n(M) Should we shut down non-critical servers to reduce heat load?\n(W) Yes, I'll start shutting those down now while you call the repair vendor.\n\nQuestion: What will the woman most likely do next?",
  options: [
    { label: "A", text: "Call the repair vendor herself." },
    { label: "B", text: "Order a new cooling unit." },
    { label: "C", text: "Shut down non-critical servers." },
    { label: "D", text: "Replace the temperature sensors." },
  ],
  correct: "C",
  explanation:
    "The woman says, 'I'll start shutting those down now while you call the repair vendor,' indicating she herself will shut down the non-critical servers while the man contacts the vendor. (A), (B), and (D) are never mentioned or are misattributed to the wrong person.",
};

const part3new8: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 79 — Museum corporate group tour booking", durationSec: 39 },
  context:
    "(W) Hi, I'd like to arrange a private guided tour for about thirty employees as part of our team-building day next month.\n(M) We can absolutely do that. Would you prefer a general history tour or one focused on our current science exhibit?\n(W) The science exhibit sounds perfect for our engineering team.\n(M) Great, I'll pencil you in and send a proposal with pricing by tomorrow.\n\nQuestion: What does the woman want to arrange?",
  options: [
    { label: "A", text: "A private guided tour for a corporate team-building event." },
    { label: "B", text: "A fundraising gala at the museum." },
    { label: "C", text: "A membership discount for her employees." },
    { label: "D", text: "A rental of the museum's event space for a wedding." },
  ],
  correct: "A",
  explanation:
    "The woman says she'd like 'to arrange a private guided tour for about thirty employees as part of our team-building day.' (B), (C), and (D) are never mentioned — they are typical museum-related distractors.",
};

const part3new9: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 80 — Office security badge malfunction", durationSec: 35 },
  context:
    '(M) My key card stopped opening the server room door this morning, even though it worked fine yesterday.\n(W) Let me check the access log... it looks like your card\'s chip needs to be reprogrammed.\n(M) Can that be done quickly?\n(W) Yes, give me five minutes to reprogram it, and that should do the trick.\n\nQuestion: What does the woman mean when she says, "that should do the trick"?',
  options: [
    { label: "A", text: "She thinks the card needs to be replaced entirely." },
    { label: "B", text: "She wants the man to try opening the door himself first." },
    { label: "C", text: "She is not confident the fix will work." },
    { label: "D", text: "She expects the reprogramming to solve the problem." },
  ],
  correct: "D",
  explanation:
    "'Do the trick' is an idiom meaning to successfully solve a problem; the woman uses it right after describing the reprogramming fix, meaning she expects it to work. (A), (B), and (C) are never mentioned or misread the idiom.",
};

const part3new10: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 81 — Executive coaching session reschedule", durationSec: 34 },
  context:
    "(W) Hi, this is Monica. I have my coaching session with you scheduled for Thursday at 9 AM, but I just found out I need to fly to Chicago for a client meeting that morning.\n(M) No problem at all. I have an opening Wednesday afternoon at 4 PM, or we could do a video call while you're traveling.\n(W) Let's do Wednesday at 4 PM in person if possible.\n(M) Perfect, I'll update the calendar invite now.\n\nQuestion: Why does the woman want to reschedule her coaching session?",
  options: [
    { label: "A", text: "She is unhappy with her current coach." },
    { label: "B", text: "She has to travel for a client meeting." },
    { label: "C", text: "She has a doctor's appointment that morning." },
    { label: "D", text: "The coaching office will be closed Thursday." },
  ],
  correct: "B",
  explanation:
    "The woman explains she 'need[s] to fly to Chicago for a client meeting that morning.' (A), (C), and (D) are never mentioned — they are typical scheduling-related distractors.",
};

const part3r9a: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 82 — Law firm deposition reschedule", durationSec: 34 },
  context:
    "(M) Hi, this is Robert from Delacroix & Partners. I'm calling about tomorrow's deposition for the Hendricks case — our key witness just had a family emergency and can't attend.\n(W) I appreciate you letting us know. Would next Tuesday afternoon work as a new date?\n(M) Yes, Tuesday afternoon should work well for our client too.\n(W) Great, I'll notify the court reporter and send updated notices to both sides.\n\nQuestion: Why does the man call the woman?",
  options: [
    { label: "A", text: "A witness cannot attend tomorrow's deposition." },
    { label: "B", text: "He wants to withdraw from the case." },
    { label: "C", text: "He needs copies of the case files." },
    { label: "D", text: "He is requesting a lower legal fee." },
  ],
  correct: "A",
  explanation:
    "The man explains, 'our key witness just had a family emergency and can't attend,' which is why he calls to reschedule the deposition. (B), (C), and (D) are never mentioned — they are typical law-firm-related distractors that reuse vocabulary ('case', 'deposition') from the conversation.",
};

const PART3_SALON_COLOR = {
  prompt: "Part 3 · Conversations. Listen to the conversation and answer the three questions.",
  listening: true as const,
  groupId: "p3-salon-color",
  audio: { label: "Conversation — Hair salon color touch-up", durationSec: 0 },
  context:
    "(W) Hi, I picked up my hair color today, but it came out much darker than the shade we discussed at my consultation.\n(M) I'm so sorry about that. Let me take a look... you're right, it does look a shade or two darker than what we agreed on.\n(W) Is there a way to lighten it back to what I wanted?\n(M) Yes, I can apply a toner treatment this afternoon at no extra charge to get it closer to the original shade.\n(W) That's a relief. How long will the toner take?\n(M) About thirty minutes, so you should still be out well before your dinner reservation.",
};

const part3r9b1: PracticeQuestionData = {
  ...PART3_SALON_COLOR,
  question: "What problem does the woman report?",
  options: [
    { label: "A", text: "Her appointment was canceled without notice." },
    { label: "B", text: "Her hair color turned out darker than requested." },
    { label: "C", text: "She was overcharged for the service." },
    { label: "D", text: "Her hair was damaged by the treatment." },
  ],
  correct: "B",
  explanation:
    "The woman says her hair color 'came out much darker than the shade we discussed at my consultation,' and the man agrees it looks 'a shade or two darker.' (A), (C), and (D) are never mentioned — they are typical salon-related distractors.",
};

const part3r9b2: PracticeQuestionData = {
  ...PART3_SALON_COLOR,
  question: "What does the man offer to do?",
  options: [
    { label: "A", text: "Apply a toner treatment at no extra charge." },
    { label: "B", text: "Refund the cost of the coloring service." },
    { label: "C", text: "Reschedule her with a different stylist." },
    { label: "D", text: "Recommend a home coloring kit." },
  ],
  correct: "A",
  explanation:
    "'I can apply a toner treatment this afternoon at no extra charge to get it closer to the original shade.' A refund (B), a different stylist (C), and a home kit (D) are never mentioned.",
};

const part3r9b3: PracticeQuestionData = {
  ...PART3_SALON_COLOR,
  question: "How long does the man say the toner treatment will take?",
  options: [
    { label: "A", text: "About thirty minutes." },
    { label: "B", text: "About one hour." },
    { label: "C", text: "About fifteen minutes." },
    { label: "D", text: "About two hours." },
  ],
  correct: "A",
  explanation:
    "'About thirty minutes, so you should still be out well before your dinner reservation.' One hour (B), fifteen minutes (C), and two hours (D) are never mentioned.",
};

const part3r9c: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 84 — Ski resort lift closure", durationSec: 33 },
  context:
    "(M) Hi, I just tried to use my lift ticket on the north side, but a sign says that chairlift is closed for the day.\n(W) I'm sorry about that — the lift is down for a mechanical inspection. The south side lifts are all running normally, though.\n(M) Since I only planned to ski the north trails, is a partial refund possible?\n(W) Yes, I can issue a fifty percent credit toward your next visit.\n\nQuestion: What does the resort offer the man?",
  options: [
    { label: "A", text: "A full refund for his lift ticket." },
    { label: "B", text: "A free equipment rental." },
    { label: "C", text: "A fifty percent credit toward a future visit." },
    { label: "D", text: "A complimentary lesson with an instructor." },
  ],
  correct: "C",
  explanation:
    "The woman tells the man, 'I can issue a fifty percent credit toward your next visit.' (A), (B), and (D) are never mentioned — they are typical ski-resort-related distractors.",
};

const part3r9d: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 85 — Newspaper subscription billing error", durationSec: 32 },
  context:
    "(W) Hi, this is Claire calling about my subscription to the Daily Herald — I was charged for the annual plan, but I only signed up for the monthly one.\n(M) Let me check your account... you're right, it looks like our system defaulted you to the annual rate by mistake.\n(W) Can that be corrected and refunded?\n(M) Yes, I'll switch you back to the monthly plan and refund the difference within three business days.\n\nQuestion: What problem does the woman report?",
  options: [
    { label: "A", text: "Her newspaper delivery stopped completely." },
    { label: "B", text: "She never received a renewal notice." },
    { label: "C", text: "Her subscription was canceled by mistake." },
    { label: "D", text: "She was billed for the annual plan instead of the monthly plan." },
  ],
  correct: "D",
  explanation:
    "The woman says, 'I was charged for the annual plan, but I only signed up for the monthly one,' which the man confirms was a system error. (A), (B), and (C) are never mentioned — they are typical subscription-related distractors.",
};

const part3r9e: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 86 — Theater box office lost tickets", durationSec: 35 },
  context:
    "(M) Hi, I bought two tickets for tonight's show online, but the confirmation email never arrived and I don't have a printout.\n(W) No problem, I can look up your order by name at the box office and print new tickets for you.\n(M) Great, it's under Daniel Cho.\n(W) Found it — here are your replacement tickets. Enjoy the show.\n\nQuestion: What does the man ask the woman to do?",
  options: [
    { label: "A", text: "Exchange his tickets for a later show." },
    { label: "B", text: "Print replacement tickets for his order." },
    { label: "C", text: "Upgrade his seats to the balcony." },
    { label: "D", text: "Refund his ticket purchase." },
  ],
  correct: "B",
  explanation:
    "The man explains he never received his confirmation email, and the woman offers to 'look up your order by name at the box office and print new tickets for you.' (A), (C), and (D) are never mentioned — they are typical box-office-related distractors.",
};

const part3r9f: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 87 — Farm equipment part backorder", durationSec: 39 },
  context:
    "(W) Hi, I'm calling about the replacement hydraulic pump I ordered for my tractor — it was supposed to arrive this week.\n(M) Let me check... I'm sorry, the manufacturer has that part on backorder, so it won't ship for another two weeks.\n(W) That's a long wait during harvest season. Is there a loaner pump available in the meantime?\n(M) Yes, we have a rental unit I can have delivered to your farm tomorrow.\n\nQuestion: Why is the woman's part delayed?",
  options: [
    { label: "A", text: "The manufacturer has the part on backorder." },
    { label: "B", text: "The part was shipped to the wrong address." },
    { label: "C", text: "The dealership is closed for inventory." },
    { label: "D", text: "The part failed a quality inspection." },
  ],
  correct: "A",
  explanation:
    "The man explains, 'the manufacturer has that part on backorder, so it won't ship for another two weeks.' (B), (C), and (D) are never mentioned — they are typical farm-equipment-related distractors.",
};

const part3r9g: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 88 — Corporate audit expense discrepancy", durationSec: 36 },
  context:
    "(M) Hi Denise, while reviewing last quarter's expense accounts, I found a discrepancy of about eight thousand dollars that doesn't match the receipts on file.\n(W) That's concerning. Can you tell which department it's linked to?\n(M) It looks like it's tied to the regional sales team's travel expenses.\n(W) Let's set up a meeting with their manager this week to sort it out.\n\nQuestion: What does the man report finding?",
  options: [
    { label: "A", text: "A missing employee timesheet." },
    { label: "B", text: "An error in the payroll system." },
    { label: "C", text: "A discrepancy between expense accounts and receipts." },
    { label: "D", text: "A duplicate invoice from a vendor." },
  ],
  correct: "C",
  explanation:
    "The man says he found 'a discrepancy of about eight thousand dollars that doesn't match the receipts on file.' (A), (B), and (D) are never mentioned — they are typical audit-related distractors.",
};

const part3r9h: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 89 — Airport cargo refrigeration failure", durationSec: 41 },
  context:
    "(W) The refrigeration unit in cargo hold three just failed, and we have a shipment of fresh seafood due to leave in twenty minutes.\n(M) That's urgent — let's check if hold two's unit can take the load instead.\n(W) I just called ground crew, and hold two has space and working refrigeration.\n(M) Good, then let's transfer the shipment there right away before the flight departs.\n\nQuestion: What will they most likely do next?",
  options: [
    { label: "A", text: "Cancel the shipment entirely." },
    { label: "B", text: "Wait for the refrigeration unit to be repaired." },
    { label: "C", text: "Return the seafood to the supplier." },
    { label: "D", text: "Transfer the shipment to cargo hold two." },
  ],
  correct: "D",
  explanation:
    "The man says, 'let's transfer the shipment there right away before the flight departs,' referring to cargo hold two, which the woman confirmed has working refrigeration. (A), (B), and (C) are never mentioned — they are typical cargo-related distractors.",
};

const part3r9i: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 90 — Telecom merger account migration", durationSec: 33 },
  context:
    "(M) Hi, since your provider merged with ours last month, your business account is being migrated to our new billing platform this weekend.\n(W) Will my phone lines stay active during the switch?\n(M) Yes, everything will keep running smoothly — we've ironed out the kinks after testing with several other accounts already.\n(W) That's reassuring to hear.\n\nQuestion: What does the man mean when he says they've \"ironed out the kinks\"?",
  options: [
    { label: "A", text: "They discovered new problems during testing." },
    { label: "B", text: "They resolved the issues found during testing." },
    { label: "C", text: "They postponed the testing process." },
    { label: "D", text: "They canceled the migration plan." },
  ],
  correct: "B",
  explanation:
    "'Ironed out the kinks' is an idiom meaning to fix remaining small problems; the man uses it to reassure the woman that issues found while testing the migration with other accounts have already been resolved. (A), (C), and (D) are never mentioned or misread the idiom.",
};

const part3r9j: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 91 — Architecture firm blueprint deadline", durationSec: 30 },
  context:
    "(W) Hi, I'm calling about the blueprints for the Maple Street renovation — the client wants to see them by Friday.\n(M) I'm the lead architect on that project, so I'll finalize the structural revisions myself by Thursday.\n(W) Perfect, that gives us a day to review before sending them out.\n(M) Sounds good, I'll email you the draft first thing Thursday morning.\n\nQuestion: What is the man's role on the project?",
  options: [
    { label: "A", text: "He is the lead architect on the project." },
    { label: "B", text: "He is the construction site supervisor." },
    { label: "C", text: "He is the client's real estate agent." },
    { label: "D", text: "He is the firm's billing manager." },
  ],
  correct: "A",
  explanation:
    "The man states directly, 'I'm the lead architect on that project, so I'll finalize the structural revisions myself.' (B), (C), and (D) are never mentioned — they are typical architecture-firm-related distractors.",
};

const part3r10a: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 92 — Craft brewery keg shortage", durationSec: 33 },
  context:
    "(M) Hi, this is Dan from Northgate Brewing. I'm calling about our keg order for the festival this weekend — we only received sixteen kegs, but we ordered twenty-five.\n(W) Let me check our records... I see the discrepancy. It looks like nine kegs are still sitting in our loading dock; the driver must have missed them.\n(M) That's a relief, they weren't lost. Can you get them to us by tomorrow afternoon?\n(W) Yes, I'll have a truck out first thing tomorrow morning.\n\nQuestion: What does the woman discover about the missing kegs?",
  options: [
    {
      label: "A",
      text: "They are still at the loading dock and were never loaded onto the truck.",
    },
    { label: "B", text: "They were sold to another customer by mistake." },
    { label: "C", text: "They broke during transport and had to be discarded." },
    { label: "D", text: "They were never brewed due to an ingredient shortage." },
  ],
  correct: "A",
  explanation:
    "The woman says, 'it looks like nine kegs are still sitting in our loading dock; the driver must have missed them.' (B), (C), and (D) are never mentioned — they are plausible-sounding distractors that reuse vocabulary ('kegs', 'order') from the conversation.",
};

const part3r10b: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 93 — Dental clinic sterilizer breakdown", durationSec: 36 },
  context:
    "(W) Hi Mr. Reyes, unfortunately the sterilizer in exam room two just stopped heating properly, so we can't process instruments in there right now.\n(M) That's concerning with a full schedule today. Can we move those patients to room three?\n(W) Yes, room three's sterilizer is working fine, so I've already started rerouting the instrument trays there.\n(M) Good thinking. I'll call the repair technician now to see how soon they can come look at the broken unit.\n\nQuestion: What will the man do next?",
  options: [
    { label: "A", text: "Reschedule all of today's patient appointments." },
    { label: "B", text: "Call a technician to repair the sterilizer." },
    { label: "C", text: "Move exam room two to a different floor." },
    { label: "D", text: "Order a replacement sterilizer online." },
  ],
  correct: "B",
  explanation:
    "The man says, 'I'll call the repair technician now to see how soon they can come look at the broken unit.' (A), (C), and (D) are never mentioned — the woman, not the man, is the one rerouting trays to room three.",
};

const part3r10c: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 94 — Employee relocation package inquiry", durationSec: 34 },
  context:
    "(W) Hi, I'm calling about the relocation package for my transfer to the Denver office. I wanted to ask whether moving costs for my furniture are covered.\n(M) Yes, the package covers up to $3,000 in moving expenses, including furniture and boxes, as long as you use one of our approved moving companies.\n(W) Great, and is there a deadline to submit receipts?\n(M) You'll have sixty days after your move date to submit them for reimbursement.\n\nQuestion: Why is the woman calling?",
  options: [
    { label: "A", text: "To complain about a moving company's poor service." },
    { label: "B", text: "To request an extension on her start date in Denver." },
    {
      label: "C",
      text: "To ask whether her moving costs are covered under her relocation package.",
    },
    { label: "D", text: "To ask for a higher relocation budget." },
  ],
  correct: "C",
  explanation:
    "The woman says she is 'calling about the relocation package' and 'wanted to ask whether moving costs for my furniture are covered.' (A), (B), and (D) are never mentioned — they are common relocation-related distractors.",
};

const part3r10d: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 95 — Zoo enclosure renovation", durationSec: 38 },
  context:
    "(M) Hi, this is Owen from the maintenance crew. We're ready to start the renovation on the tiger enclosure, but the city inspector still hasn't signed off on the new fencing plan.\n(W) I spoke with the inspector this morning — she said she'll come by this afternoon to review it in person.\n(M) Okay, so should we hold off on removing the old fence until then?\n(W) Yes, please wait until she gives written approval before you touch the old fence.\n\nQuestion: Where does this conversation most likely take place?",
  options: [
    { label: "A", text: "At a construction equipment rental office." },
    { label: "B", text: "At a zoo." },
    { label: "C", text: "At a city planning office." },
    { label: "D", text: "At a fencing manufacturer's warehouse." },
  ],
  correct: "B",
  explanation:
    "The man refers to 'the renovation on the tiger enclosure,' which places the conversation at a zoo. (A), (C), and (D) are never confirmed as the setting — they are plausible-sounding distractors that reuse vocabulary ('inspector', 'fencing') from the conversation.",
};

const part3r10e: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 96 — Movie premiere seating mix-up", durationSec: 35 },
  context:
    "(W) Hi, I'm one of the ushers for tonight's premiere. Two rows we reserved for the sponsors are already filled with general ticket holders.\n(M) That's not good, the sponsors arrive in twenty minutes. Can we move those guests to the balcony seats instead?\n(W) I can do that, but I'll need two more staff members to help guide them up there quickly.\n(M) I'll pull two people from concessions right now and send them to you.\n\nQuestion: What does the woman want the man to do?",
  options: [
    { label: "A", text: "Cancel the premiere due to overselling." },
    { label: "B", text: "Refund the sponsors' tickets." },
    { label: "C", text: "Send extra staff to help relocate guests." },
    { label: "D", text: "Delay the start of the premiere." },
  ],
  correct: "C",
  explanation:
    "The woman says she'll need to move the general ticket holders 'but I'll need two more staff members to help guide them up there quickly,' and the man agrees to send staff from concessions. (A), (B), and (D) are never mentioned.",
};

const part3r10f: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 97 — Publishing house manuscript deadline", durationSec: 37 },
  context:
    "(M) Hi Ana, how's the final manuscript for the Bennett novel coming along? The printer needs the files by Friday.\n(W) The author just sent the last chapter revisions, so I'm finishing the layout now. We're cutting it close, but I should have it ready by Thursday night.\n(M) That works, as long as nothing else changes.\n(W) I'll flag it as final the moment it's done so nothing gets edited after that.\n\nQuestion: What does the woman mean when she says they are \"cutting it close\"?",
  options: [
    { label: "A", text: "The book's cover design needs to be reduced in size." },
    { label: "B", text: "The printing budget is nearly exhausted." },
    { label: "C", text: "They will finish just barely before the deadline." },
    { label: "D", text: "The manuscript is missing a large section of text." },
  ],
  correct: "C",
  explanation:
    "By saying they are 'cutting it close,' the woman means the manuscript will be finished only shortly before the Friday deadline, which is why she promises it 'ready by Thursday night.' (A), (B), and (D) are never mentioned.",
};

const part3r10g: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 98 — Bank loan application document", durationSec: 33 },
  context:
    "(M) Good afternoon, I'm calling about my small business loan application — I submitted it two weeks ago and haven't heard anything.\n(W) Let me pull that up... I see the issue. Your application is missing a signed copy of last year's tax return.\n(M) I can email that today. Will that get things moving again?\n(W) Yes, once we receive it, the underwriting team can finish reviewing your file within five business days.\n\nQuestion: What problem does the woman mention?",
  options: [
    { label: "A", text: "A signed document is missing from the man's application." },
    { label: "B", text: "The man's credit score is too low for approval." },
    { label: "C", text: "The loan amount requested exceeds the limit." },
    { label: "D", text: "The application was submitted after the deadline." },
  ],
  correct: "A",
  explanation:
    "The woman tells him, 'Your application is missing a signed copy of last year's tax return.' (B), (C), and (D) are never mentioned — they are typical loan-related distractors.",
};

const part3r10h: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 99 — City street festival permit", durationSec: 34 },
  context:
    "(W) Hi, this is Priya from the events office. We're finalizing the permit for Saturday's street festival, but we still need the vendor list for the food stalls.\n(M) I have it right here, I just need to add two more vendors who confirmed yesterday.\n(W) No problem, send the updated list by tomorrow morning and I'll submit the final permit application.\n(M) I'll get that to you first thing tomorrow.\n\nQuestion: What will the man do next?",
  options: [
    { label: "A", text: "Cancel two vendor bookings." },
    { label: "B", text: "Reschedule the street festival." },
    { label: "C", text: "Apply for the permit himself." },
    { label: "D", text: "Send an updated vendor list to the woman." },
  ],
  correct: "D",
  explanation:
    "The man agrees, 'I'll get that to you first thing tomorrow,' referring to the updated vendor list the woman asked for. (A), (B), and (C) are never mentioned — the woman, not the man, will submit the permit application.",
};

const part3r10i: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 100 — Amusement park ride closure", durationSec: 36 },
  context:
    "(M) Hi Teresa, why is the Thunder Loop roller coaster closed today? Guests keep asking at the gate.\n(W) The safety team found a loose bolt on one of the restraint bars during this morning's inspection, so we shut it down as a precaution.\n(M) Understood. Do we know when it'll reopen?\n(W) The mechanic is replacing the part now, so it should be running again by early afternoon.\n\nQuestion: Why is the roller coaster closed?",
  options: [
    { label: "A", text: "A guest was injured on the ride yesterday." },
    { label: "B", text: "The ride ran out of electricity during a power outage." },
    { label: "C", text: "Too few staff were available to operate it." },
    { label: "D", text: "A loose bolt was found on a restraint bar." },
  ],
  correct: "D",
  explanation:
    "The woman explains, 'The safety team found a loose bolt on one of the restraint bars during this morning's inspection, so we shut it down as a precaution.' (A), (B), and (C) are never mentioned.",
};

const part3r10j: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 101 — Textile factory quality control", durationSec: 35 },
  context:
    "(W) Hi Carlos, the batch of shirts from line four came back flagged after inspection — the stitching on the collars is uneven.\n(M) That's the second batch this week. Should we pull the rest of that shipment before it goes out?\n(W) Yes, hold everything from line four until the seamstresses recalibrate the machines.\n(M) I'll notify shipping right away so nothing leaves the warehouse today.\n\nQuestion: What does the woman mean when she says the shirts \"came back flagged\"?",
  options: [
    { label: "A", text: "The shirts were returned by a customer for a refund." },
    { label: "B", text: "The shirts failed inspection due to a defect." },
    { label: "C", text: "The shirts were marked with the wrong size labels." },
    { label: "D", text: "The shirts were reported missing from inventory." },
  ],
  correct: "B",
  explanation:
    "The woman explains the shirts 'came back flagged after inspection — the stitching on the collars is uneven,' meaning quality control identified a defect. (A), (C), and (D) are never mentioned.",
};

const part3r11a: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 102 — Coworking space booth double-booking", durationSec: 34 },
  context:
    "(M) Hi, this is Trevor from desk 14. I reserved the private booth for a client call at 3 PM today, but someone else is already using it.\n(W) I'm sorry about that — let me check the calendar... it looks like a system glitch double-booked that room.\n(M) Is there another quiet space available around that time?\n(W) Yes, the Meeting Pod on the second floor is free from 2:45 to 4. I'll block it for you now.\n\nQuestion: What problem does the man report?",
  options: [
    { label: "A", text: "The private booth he reserved is occupied by someone else." },
    { label: "B", text: "He forgot his access keycard at home." },
    { label: "C", text: "His membership invoice was charged twice." },
    { label: "D", text: "The coworking space's Wi-Fi is not working." },
  ],
  correct: "A",
  explanation:
    "The man says he reserved the booth 'but someone else is already using it,' which the woman confirms was caused by a scheduling glitch. (B), (C), and (D) are never mentioned — they are typical coworking-space distractors.",
};

const part3r11b: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 103 — Corporate travel agency fare change", durationSec: 36 },
  context:
    "(W) Hi, this is Melissa from corporate travel. I'm calling about your flight to Chicago next week — the fare you originally booked went up after the airline changed its schedule.\n(M) That's unfortunate. Is there a way to stay within our travel budget?\n(W) Yes, I found a nonstop flight departing two hours earlier that costs about the same as your original fare.\n(M) That works. Please go ahead and book that one instead.\n\nQuestion: Why does the woman call the man?",
  options: [
    {
      label: "A",
      text: "To tell him his original fare increased and offer an alternative flight.",
    },
    { label: "B", text: "To confirm his hotel reservation in Chicago." },
    { label: "C", text: "To request his passport number for the booking." },
    { label: "D", text: "To cancel his trip due to a policy change." },
  ],
  correct: "A",
  explanation:
    "The woman explains the fare 'went up after the airline changed its schedule' and offers a comparable alternative flight. (B), (C), and (D) are never mentioned.",
};

const part3r11c: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 104 — Marina boat slip late fee dispute", durationSec: 33 },
  context:
    "(W) Hi, I'm calling about my boat slip rental — there's a late fee on this month's invoice, but I paid on the first like always.\n(M) Let me check... it looks like your payment was received on time, but it was applied to the wrong slip number.\n(W) So the late fee shouldn't be there at all?\n(M) That's right, I'll remove it and email you a corrected invoice by tomorrow.\n\nQuestion: Why was a late fee added to the woman's invoice?",
  options: [
    { label: "A", text: "She missed the payment deadline." },
    { label: "B", text: "The marina raised its rental rates." },
    { label: "C", text: "Her payment was applied to the wrong slip number." },
    { label: "D", text: "Her boat exceeded the slip's length limit." },
  ],
  correct: "C",
  explanation:
    "The man finds that 'your payment was received on time, but it was applied to the wrong slip number,' which caused the erroneous fee. (A), (B), and (D) are never mentioned.",
};

const part3r11d: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 105 — Coffee roastery wholesale shortage", durationSec: 35 },
  context:
    "(M) Hi, this is Danny from Bluebird Café. I ordered twenty bags of the Ethiopian blend, but I just heard only twelve are available this week.\n(W) I'm sorry about that — that bean sold out faster than expected this harvest season.\n(M) Could you substitute the difference with the Colombian blend?\n(W) Of course, I'll add eight bags of Colombian at no extra charge and ship everything together tomorrow.\n\nQuestion: What does the woman offer to do?",
  options: [
    { label: "A", text: "Refund the missing eight bags in full." },
    { label: "B", text: "Deliver the remaining bags next month." },
    { label: "C", text: "Upgrade the café to a larger wholesale account." },
    { label: "D", text: "Substitute the shortfall with a different blend at no extra charge." },
  ],
  correct: "D",
  explanation:
    "The woman says she'll 'add eight bags of Colombian at no extra charge' to make up the shortfall. (A), (B), and (C) are never mentioned.",
};

const part3r11e: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 106 — Warehouse forklift certification renewal", durationSec: 37 },
  context:
    "(M) Hi Pam, I got a notice that my forklift certification expires next week, but I'm slammed with the inventory count until Friday.\n(W) No worries, there's a renewal course this Saturday morning, so you won't be caught without it.\n(M) That works — can you sign me up?\n(W) Already done. I'll email you the confirmation this afternoon.\n\nQuestion: What does the woman mean when she says the man \"won't be caught without it\"?",
  options: [
    { label: "A", text: "He will be transferred to a different warehouse." },
    { label: "B", text: "He will renew his certification before it expires." },
    { label: "C", text: "He will need to repay his training costs." },
    { label: "D", text: "His certification will lapse before it can be renewed." },
  ],
  correct: "B",
  explanation:
    "The woman schedules a renewal course before the certification expires, meaning he 'won't be caught without it' — i.e., he'll get it renewed in time. (A) and (C) are never mentioned, and (D) directly contradicts her reassurance.",
};

const part3r11f: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 107 — Corporate uniform order sizing error", durationSec: 31 },
  context:
    "(W) Hi, this is Carla from the front office. The batch of staff polo shirts we ordered came in, but half of them are in the wrong size.\n(M) I'm sorry to hear that — let me pull up the order... it looks like our warehouse pulled from the wrong size run by mistake.\n(W) Can you send correct replacements before the new-hire orientation next Monday?\n(M) Yes, I'll ship the correct sizes today by overnight courier so they arrive by Friday.\n\nQuestion: Why did the woman receive the wrong shirt sizes?",
  options: [
    { label: "A", text: "The warehouse pulled from the wrong size run." },
    { label: "B", text: "The order form listed incorrect sizes." },
    { label: "C", text: "The shirts shrank after being washed." },
    { label: "D", text: "The supplier ran out of the correct sizes." },
  ],
  correct: "A",
  explanation:
    "The man discovers 'our warehouse pulled from the wrong size run by mistake.' (B), (C), and (D) are never mentioned.",
};

const part3r11g: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 108 — TV studio broadcast equipment failure", durationSec: 40 },
  context:
    "(M) The backup camera in studio two just lost signal, and we're on air in eight minutes.\n(W) Let's switch the anchor desk shot to camera one for now while engineering resets camera two.\n(M) Should we warn the anchors about the change?\n(W) Yes, I'll radio the control room now and let them know before we go live.\n\nQuestion: What will the woman most likely do next?",
  options: [
    { label: "A", text: "Reset camera two herself." },
    { label: "B", text: "Cancel the broadcast for today." },
    { label: "C", text: "Contact the control room about the camera switch." },
    { label: "D", text: "Replace camera two with a new unit." },
  ],
  correct: "C",
  explanation:
    "The woman says, 'I'll radio the control room now and let them know before we go live.' (A), (B), and (D) are never mentioned — engineering, not the woman, resets the camera, and the broadcast is not cancelled.",
};

const part3r11h: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 109 — Water utility billing dispute", durationSec: 32 },
  context:
    "(W) Hi, I'm calling about my business's water bill this month — it's nearly triple what we normally pay.\n(M) Let me check your account... it looks like a meter reader recorded a reading from the wrong address.\n(W) So my actual usage hasn't changed?\n(M) Correct, I'll fix the reading and issue an adjusted bill within five business days.\n\nQuestion: Why was the woman's water bill unusually high?",
  options: [
    { label: "A", text: "Her business used significantly more water this month." },
    { label: "B", text: "The utility raised its rates citywide." },
    { label: "C", text: "A pipe was leaking on her property." },
    { label: "D", text: "A meter reader recorded a reading from the wrong address." },
  ],
  correct: "D",
  explanation:
    "The man discovers that 'a meter reader recorded a reading from the wrong address,' which caused the inflated bill. (A), (B), and (C) are never mentioned.",
};

const part3r11i: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 110 — Pet grooming salon scheduling", durationSec: 30 },
  context:
    "(W) Hi, I'm dropping off my dog Biscuit for his 2 PM grooming appointment.\n(M) Let me check... I'm sorry, it looks like Biscuit is actually booked for tomorrow at 2, not today.\n(W) Oh no, I must have misread the confirmation email. Is there any chance you could fit him in today?\n(M) We just had a cancellation for 3 PM, so I can squeeze him in then if you can wait an hour.\n\nQuestion: Where does this conversation most likely take place?",
  options: [
    { label: "A", text: "At a veterinary clinic." },
    { label: "B", text: "At a pet grooming salon." },
    { label: "C", text: "At a dog training school." },
    { label: "D", text: "At a pet supply store." },
  ],
  correct: "B",
  explanation:
    "The dialogue centers on a grooming appointment for a dog, placing it at a pet grooming salon. (A), (C), and (D) are never mentioned or supported by the conversation.",
};

const part3r11j: PracticeQuestionData = {
  prompt: "Part 3 · Conversations. Read the transcript and answer the question.",
  listening: true,
  audio: { label: "Conversation 111 — Customs brokerage fee dispute", durationSec: 38 },
  context:
    "(M) Hi, I'm looking at the invoice from your brokerage for our last import, and the clearance fee is higher than the estimate you gave us.\n(W) I see that too — it looks like our system charged you for two separate customs entries instead of one combined entry.\n(M) So we've been overcharged?\n(W) Yes, and I want to make this right, so I'll issue a full refund of the difference today.\n\nQuestion: What does the woman mean when she says she wants to \"make this right\"?",
  options: [
    { label: "A", text: "She wants to switch the client to a new account manager." },
    { label: "B", text: "She wants to renegotiate the brokerage contract." },
    { label: "C", text: "She wants to correct the overcharge with a refund." },
    { label: "D", text: "She wants to file a complaint against her own company." },
  ],
  correct: "C",
  explanation:
    "Right after saying she wants to 'make this right,' the woman states she'll 'issue a full refund of the difference today,' meaning she intends to correct the overcharge. (A), (B), and (D) are never mentioned.",
};

// ── Part 4 · Short Talks ──
const PART4_TRAIN = {
  prompt: "Part 4 · Short Talks. Listen to the talk and answer the three questions.",
  listening: true as const,
  groupId: "p4-train-delay",
  audio: { label: "Short talk — Train announcement", durationSec: 0 },
  context:
    "Good morning, passengers, and welcome aboard Skyline Rail service 402 to Central Station. Please be advised that due to scheduled track maintenance between Riverside and Oak Park, we will be operating on a single track for approximately twenty minutes. You can expect a delay of about fifteen minutes into Central Station. Complimentary coffee and tea are available in the café car for the duration of the delay. We appreciate your patience this morning.",
};

const part4a1: PracticeQuestionData = {
  ...PART4_TRAIN,
  question: "What is the main purpose of the announcement?",
  options: [
    { label: "A", text: "To advertise the refreshments sold on board." },
    { label: "B", text: "To explain why the service will reach its destination late." },
    { label: "C", text: "To direct passengers onto a replacement train." },
    { label: "D", text: "To announce a change to the train's final stop." },
  ],
  correct: "B",
  explanation:
    "The body of the announcement exists to account for the fifteen-minute delay into Central Station and the single-track working behind it. The café car is offered as compensation for that delay rather than being advertised in its own right (A), and the train's destination and route are unchanged, so nothing supports a replacement service (C) or a new final stop (D).",
};

const part4a2: PracticeQuestionData = {
  ...PART4_TRAIN,
  question: "What has caused the disruption?",
  options: [
    { label: "A", text: "Engineering work being carried out on the route." },
    { label: "B", text: "A mechanical problem with the train itself." },
    { label: "C", text: "Congestion on the approach to Central Station." },
    { label: "D", text: "A shortage of available train crew." },
  ],
  correct: "A",
  explanation:
    "The cause is 'scheduled track maintenance between Riverside and Oak Park', which is engineering work on the line — note that the answer describes it rather than repeating the phrase. The fault is with the track, not the train (B), and neither congestion (C) nor staffing (D) is raised at any point.",
};

const part4a3: PracticeQuestionData = {
  ...PART4_TRAIN,
  question: "What is available to passengers while the delay lasts?",
  options: [
    { label: "A", text: "A partial refund of the fare." },
    { label: "B", text: "A voucher towards a future journey." },
    { label: "C", text: "Hot drinks at no charge." },
    { label: "D", text: "An upgrade to a seat in the café car." },
  ],
  correct: "C",
  explanation:
    "'Complimentary coffee and tea are available in the café car for the duration of the delay' — complimentary means free of charge. Refunds (A) and vouchers (B) are the compensation passengers might expect but are never offered here, and the café car is where the drinks are served, not a class of seat (D).",
};

const PART4_GRAND_OPENING = {
  prompt: "Part 4 · Short Talks. Listen to the talk and answer the three questions.",
  listening: true as const,
  groupId: "p4-grand-opening",
  audio: { label: "Short talk — Store grand-opening ad", durationSec: 0 },
  context:
    "Attention shoppers! Greenfield Home Goods is celebrating its grand opening this Saturday at our new location on Maple Avenue. From nine A.M. until closing, enjoy twenty percent off your entire purchase. The first fifty customers through our doors will receive a free tote bag filled with samples. We'll also have live music, refreshments, and prize drawings throughout the day. Don't miss out — see you Saturday at Greenfield Home Goods!",
};

const part4b1: PracticeQuestionData = {
  ...PART4_GRAND_OPENING,
  question: "What event is being advertised?",
  options: [
    { label: "A", text: "The first day of trading at a new branch." },
    { label: "B", text: "A clearance sale before a store closes." },
    { label: "C", text: "A prize competition for regular customers." },
    { label: "D", text: "A change to a store's weekend opening hours." },
  ],
  correct: "A",
  explanation:
    "The store is 'celebrating its grand opening this Saturday at our new location on Maple Avenue', which is a new branch trading for the first time. The prize drawings (C) are one attraction on the day rather than the occasion itself, and nothing points to a closure (B) or to a permanent change in hours (D) — the nine A.M. start describes that Saturday only.",
};

const part4b2: PracticeQuestionData = {
  ...PART4_GRAND_OPENING,
  question: "What will the first fifty customers receive?",
  options: [
    { label: "A", text: "A voucher to spend on a later visit." },
    { label: "B", text: "A complimentary bag containing samples." },
    { label: "C", text: "Free tickets to the live music performance." },
    { label: "D", text: "An additional discount on their purchase." },
  ],
  correct: "B",
  explanation:
    "Those customers 'will receive a free tote bag filled with samples'. The live music (C) is open to everyone at no cost rather than ticketed, the twenty percent reduction (D) is not an extra on top of anything, and no future-visit voucher (A) is offered.",
};

const part4b3: PracticeQuestionData = {
  ...PART4_GRAND_OPENING,
  question: "What is implied about the twenty percent reduction?",
  options: [
    { label: "A", text: "It is reserved for the first fifty customers." },
    { label: "B", text: "It requires a coupon cut from the advertisement." },
    { label: "C", text: "It applies to anyone shopping on the day." },
    { label: "D", text: "It covers selected departments only." },
  ],
  correct: "C",
  explanation:
    "The reduction runs 'from nine A.M. until closing' on 'your entire purchase', with no limit on who qualifies — so everyone shopping that Saturday gets it. (A) is the trap the advertisement sets by placing two offers side by side: only the tote bags are capped at fifty. No coupon (B) or departmental restriction (D) is mentioned.",
};

const PART4_SAFETY_BRIEFING = {
  prompt: "Part 4 · Short Talks. Listen to the talk and answer the three questions.",
  listening: true as const,
  groupId: "p4-safety-briefing",
  audio: { label: "Short talk — Factory safety briefing", durationSec: 0 },
  context:
    "Good morning, everyone. Before we begin today's shift, I want to remind you that all workers must wear safety goggles and steel-toed boots at all times on the production floor. Yesterday's inspection turned up a loose guard rail near assembly line three, so that area will be roped off until maintenance completes repairs this afternoon. Please use the alternate walkway near the loading dock in the meantime. As always, report any hazards you notice to your shift supervisor immediately. Thank you for helping us keep this facility safe.",
};

const part4c1: PracticeQuestionData = {
  ...PART4_SAFETY_BRIEFING,
  question: "Where does the talk most likely take place?",
  options: [
    { label: "A", text: "At a manufacturing plant." },
    { label: "B", text: "At a building site." },
    { label: "C", text: "At a vehicle repair garage." },
    { label: "D", text: "At an equipment supplier's showroom." },
  ],
  correct: "A",
  explanation:
    "The talk refers to 'the production floor', 'assembly line three' and 'this facility', which together place it inside a factory. Protective boots and goggles would suit a building site (B) or a garage (C) equally well, which is what makes those tempting, but neither has assembly lines; a showroom (D) would have no production floor at all.",
};

const part4c2: PracticeQuestionData = {
  ...PART4_SAFETY_BRIEFING,
  question: "What must workers wear on the production floor?",
  options: [
    { label: "A", text: "Helmets and reflective vests." },
    { label: "B", text: "Eye protection and reinforced footwear." },
    { label: "C", text: "Gloves and ear defenders." },
    { label: "D", text: "Overalls issued by the supervisor." },
  ],
  correct: "B",
  explanation:
    "The requirement is 'safety goggles and steel-toed boots at all times' — goggles protect the eyes and steel toecaps reinforce the boot, so (B) restates both without reusing either word. The other three name protective equipment common on industrial sites but absent from this talk.",
};

const part4c3: PracticeQuestionData = {
  ...PART4_SAFETY_BRIEFING,
  question: "What are workers told to do while assembly line three is closed off?",
  options: [
    { label: "A", text: "Assist maintenance with the repair work." },
    { label: "B", text: "Wait until the afternoon before starting." },
    { label: "C", text: "Report to a supervisor for reassignment." },
    { label: "D", text: "Reach the area by a different route." },
  ],
  correct: "D",
  explanation:
    "'Please use the alternate walkway near the loading dock in the meantime' tells workers to go round another way. The repair belongs to maintenance rather than the listeners (A), the afternoon is when repairs finish rather than when work begins (B), and supervisors are mentioned only as the people to whom hazards are reported (C).",
};

const PART4_VOICEMAIL = {
  prompt: "Part 4 · Short Talks. Listen to the talk and answer the three questions.",
  listening: true as const,
  groupId: "p4-client-voicemail",
  audio: { label: "Short talk — Client voicemail", durationSec: 0 },
  context:
    "Hi, this is Marcus Lee calling from Bright Path Consulting for Dana. I'm so sorry for the short notice, but I need to reschedule our meeting that was planned for Thursday at two o'clock. Something urgent has come up on my end. Would Friday morning around ten work instead? I'll have the revised budget proposal ready either way. Please call me back at your earliest convenience to confirm, or just send me an email. Thanks so much for understanding, and I look forward to speaking with you soon.",
};

const part4d1: PracticeQuestionData = {
  ...PART4_VOICEMAIL,
  question: "Why is the speaker calling?",
  options: [
    { label: "A", text: "To propose meeting on a different day." },
    { label: "B", text: "To end an agreement between the two firms." },
    { label: "C", text: "To ask the listener to draw up a budget." },
    { label: "D", text: "To check that an email has arrived." },
  ],
  correct: "A",
  explanation:
    "The speaker needs 'to reschedule our meeting that was planned for Thursday' and suggests 'Friday morning around ten' instead. (C) reverses who does the work — Marcus is preparing the proposal, not Dana — and neither ending the relationship (B) nor chasing an email (D) is raised, though email is mentioned as a way of replying.",
};

const part4d2: PracticeQuestionData = {
  ...PART4_VOICEMAIL,
  question: "What does the speaker say he will do in any case?",
  options: [
    { label: "A", text: "Arrange for a colleague to attend instead." },
    { label: "B", text: "Have the updated proposal prepared." },
    { label: "C", text: "Send a written summary after the meeting." },
    { label: "D", text: "Hold the original Thursday appointment open." },
  ],
  correct: "B",
  explanation:
    "'I'll have the revised budget proposal ready either way' — 'either way' means whichever time is agreed, so the document is promised regardless. Nobody is standing in for him (A), no summary is offered (C), and the Thursday slot is precisely what he is giving up (D).",
};

const part4d3: PracticeQuestionData = {
  ...PART4_VOICEMAIL,
  question: "What is the listener asked to do?",
  options: [
    { label: "A", text: "Suggest a day later in the month." },
    { label: "B", text: "Pass the message to a colleague." },
    { label: "C", text: "Bring the proposal to the meeting." },
    { label: "D", text: "Respond by telephone or email." },
  ],
  correct: "D",
  explanation:
    "'Please call me back at your earliest convenience to confirm, or just send me an email' offers two ways of replying. Dana is asked to confirm the proposed Friday slot rather than to nominate another date (A), and the proposal is the speaker's to bring (C). No colleague is involved (B).",
};

const PART4_AUDIO_TOUR = {
  prompt: "Part 4 · Short Talks. Listen to the talk and answer the three questions.",
  listening: true as const,
  groupId: "p4-museum-tour",
  audio: { label: "Short talk — Museum audio tour", durationSec: 0 },
  context:
    "Welcome to Gallery Four, home to the museum's collection of nineteenth-century landscape paintings. The large canvas directly in front of you, painted in eighteen sixty-two, was the artist's first work to be publicly exhibited, and it established the dramatic use of light that would define her career. In her later works on display in the next gallery, you'll notice the brushwork becomes looser toward the horizon, a technique she developed years afterward, once she had moved to the coast. When you're ready, proceed through the archway on your right to Gallery Five, where you'll find those later, more abstract works. Press pause at any point if you'd like to linger here longer.",
};

const part4e1: PracticeQuestionData = {
  ...PART4_AUDIO_TOUR,
  question: "What is significant about the large canvas?",
  options: [
    { label: "A", text: "It was the last painting the artist finished." },
    { label: "B", text: "It was the first of her works shown in public." },
    { label: "C", text: "It was painted after she settled on the coast." },
    { label: "D", text: "It was the museum's earliest acquisition." },
  ],
  correct: "B",
  explanation:
    "The canvas 'was the artist's first work to be publicly exhibited'. (A) and (C) both belong to the later paintings hanging in Gallery Five, which the talk carefully separates from this one — the move to the coast came years afterward. How the museum obtained the work (D) is never discussed.",
};

const part4e2: PracticeQuestionData = {
  ...PART4_AUDIO_TOUR,
  question: "What does the speaker say about the artist's later paintings?",
  options: [
    { label: "A", text: "They were painted in a looser style near the horizon." },
    { label: "B", text: "They abandoned her characteristic treatment of light." },
    { label: "C", text: "They were completed before she left the city." },
    { label: "D", text: "They remain in a private collection." },
  ],
  correct: "A",
  explanation:
    "In the later works 'the brushwork becomes looser toward the horizon'. The dramatic handling of light is described as defining her whole career rather than being dropped (B), the coastal move came before those works rather than after (C), and they are on display in the next gallery, not privately held (D).",
};

const part4e3: PracticeQuestionData = {
  ...PART4_AUDIO_TOUR,
  question: "What are listeners told they may do?",
  options: [
    { label: "A", text: "Ask a guide for further explanation." },
    { label: "B", text: "Photograph the works without flash." },
    { label: "C", text: "Stop the recording to stay longer." },
    { label: "D", text: "Return to Gallery Four at the end." },
  ],
  correct: "C",
  explanation:
    "'Press pause at any point if you'd like to linger here longer' invites listeners to halt the recording and remain in the gallery. The talk directs them onward to Gallery Five rather than back (D), and neither guides (A) nor photography (B) is mentioned.",
};

const PART4_ALL_HANDS = {
  prompt: "Part 4 · Short Talks. Listen to the talk and answer the three questions.",
  listening: true as const,
  groupId: "p4-all-hands",
  audio: { label: "Short talk — Company all-hands announcement", durationSec: 0 },
  context:
    "Thank you all for joining today's all-hands meeting. I want to update you on a change to our remote work policy that takes effect next month. Starting the first of next month, employees will be required to come into the office at least three days a week, up from the current one day. This decision follows feedback from team leads about collaboration challenges. Your manager will reach out individually to confirm which three days work best for your team. We understand this is a big shift, and HR will be hosting Q&A sessions next week to address your questions. We appreciate your flexibility as we make this transition.",
};

const part4f1: PracticeQuestionData = {
  ...PART4_ALL_HANDS,
  question: "What is the announcement mainly about?",
  options: [
    { label: "A", text: "A revision to how often staff work from the office." },
    { label: "B", text: "The results of a recent staff survey." },
    { label: "C", text: "A change to who employees report to." },
    { label: "D", text: "New equipment being issued for home offices." },
  ],
  correct: "A",
  explanation:
    "The talk announces that in-office attendance is rising 'from the current one day' to 'at least three days a week' — a change in how often people work from the office. The feedback from team leads is the reason for the change rather than a survey being reported on (B), and neither reporting lines (C) nor equipment (D) is mentioned.",
};

const part4f2: PracticeQuestionData = {
  ...PART4_ALL_HANDS,
  question: "Why is the change being made, according to the speaker?",
  options: [
    { label: "A", text: "To reduce the cost of running the office." },
    { label: "B", text: "In response to concerns raised about teamwork." },
    { label: "C", text: "Because HR requested more in-person meetings." },
    { label: "D", text: "To match a policy used by a competitor." },
  ],
  correct: "B",
  explanation:
    "The decision 'follows feedback from team leads about collaboration challenges' — difficulty working together is a concern about teamwork. HR's role is running the Q&A sessions afterwards, not requesting the change (C), and neither cost (A) nor a competitor (D) is raised.",
};

const part4f3: PracticeQuestionData = {
  ...PART4_ALL_HANDS,
  question: "What will happen next week?",
  options: [
    { label: "A", text: "The new attendance requirement takes effect." },
    { label: "B", text: "Staff will learn their assigned in-office days." },
    { label: "C", text: "HR will run sessions to take employee questions." },
    { label: "D", text: "Team leads will submit their collaboration feedback." },
  ],
  correct: "C",
  explanation:
    "'HR will be hosting Q&A sessions next week to address your questions.' The policy itself takes effect 'next month', not next week (A), no timeframe is given for managers confirming days (B), and the team leads' feedback is described as something that already happened (D).",
};

const PART4_FLIGHT_DELAY = {
  prompt: "Part 4 · Short Talks. Listen to the talk and answer the three questions.",
  listening: true as const,
  groupId: "p4-flight-delay",
  audio: { label: "Short talk — Airport flight delay announcement", durationSec: 0 },
  context:
    "Attention passengers. Flight 238 to Chicago, originally scheduled to depart at three fifteen, has been delayed due to severe thunderstorms in the area. We currently expect boarding to begin at four forty-five at gate C12, though this time may change as conditions develop. Passengers connecting through Chicago should see a representative at the service desk near gate C10 to confirm their onward flights. Complimentary beverage vouchers are available at the counter for anyone affected by this delay. We apologize for the inconvenience and will provide updates as soon as they become available.",
};

const part4g1: PracticeQuestionData = {
  ...PART4_FLIGHT_DELAY,
  question: "Why has the flight been delayed?",
  options: [
    { label: "A", text: "A technical fault found during inspection." },
    { label: "B", text: "Weather conditions in the area." },
    { label: "C", text: "Insufficient ground crew on duty." },
    { label: "D", text: "A malfunction in air traffic control." },
  ],
  correct: "B",
  explanation:
    "The delay is 'due to severe thunderstorms in the area' — a weather condition. A mechanical fault (A), a staffing shortage (C), and an air traffic control failure (D) are never mentioned.",
};

const part4g2: PracticeQuestionData = {
  ...PART4_FLIGHT_DELAY,
  question: "What does the speaker suggest about the new boarding time?",
  options: [
    { label: "A", text: "It is confirmed and will not move again." },
    { label: "B", text: "It applies only to connecting passengers." },
    { label: "C", text: "It could still be adjusted." },
    { label: "D", text: "It replaces the original three fifteen departure entirely." },
  ],
  correct: "C",
  explanation:
    "Boarding is expected at four forty-five, 'though this time may change as conditions develop' — the new time is provisional, not final (A). It is given for all passengers on the flight, not just those connecting (B), and it is a revised estimate rather than a full schedule replacement (D).",
};

const part4g3: PracticeQuestionData = {
  ...PART4_FLIGHT_DELAY,
  question: "What is being offered to passengers affected by the delay?",
  options: [
    { label: "A", text: "Priority rebooking onto a later flight." },
    { label: "B", text: "A free drink at the counter." },
    { label: "C", text: "A discount on a future ticket." },
    { label: "D", text: "A private lounge pass." },
  ],
  correct: "B",
  explanation:
    "'Complimentary beverage vouchers are available at the counter for anyone affected by this delay' — complimentary means free of charge. Rebooking (A), a discount (C), and lounge access (D) are never offered; the service desk is mentioned only for connecting passengers confirming onward flights.",
};

const PART4_PRODUCT_LAUNCH = {
  prompt: "Part 4 · Short Talks. Listen to the talk and answer the three questions.",
  listening: true as const,
  groupId: "p4-product-launch",
  audio: { label: "Short talk — Product-launch press conference", durationSec: 0 },
  context:
    "Good afternoon, everyone, and thank you for joining us today. I'm thrilled to introduce the Solara X200, our most advanced solar-powered charger yet, capable of fully charging a smartphone in under two hours using nothing but sunlight. The X200 will be available in stores nationwide starting next Friday, priced at seventy-nine dollars. Due to overwhelming pre-order demand, our first shipment has already sold out, so we've doubled production for the following month. We believe this device will change the way people think about portable power, especially for outdoor enthusiasts and travelers. We'll now take a few questions from the press.",
};

const part4h1: PracticeQuestionData = {
  ...PART4_PRODUCT_LAUNCH,
  question: "What feature of the Solara X200 does the speaker highlight?",
  options: [
    { label: "A", text: "It charges a phone quickly using sunlight alone." },
    { label: "B", text: "It can charge several devices at the same time." },
    { label: "C", text: "It is smaller than the company's previous chargers." },
    { label: "D", text: "It includes a built-in battery backup." },
  ],
  correct: "A",
  explanation:
    "The device is described as 'capable of fully charging a smartphone in under two hours using nothing but sunlight' — fast, solar-only charging. Charging multiple devices (B), a smaller size (C), and a backup battery (D) are never mentioned, though 'our most advanced' charger yet implies improvement over earlier models generally.",
};

const part4h2: PracticeQuestionData = {
  ...PART4_PRODUCT_LAUNCH,
  question: "What can be inferred about interest in the X200 before its release?",
  options: [
    { label: "A", text: "It was lower than the company had hoped." },
    { label: "B", text: "It surpassed what the company had planned for." },
    { label: "C", text: "It came mainly from outdoor equipment retailers." },
    { label: "D", text: "It was limited to customers overseas." },
  ],
  correct: "B",
  explanation:
    "'Our first shipment has already sold out, so we've doubled production for the following month' — selling out and doubling production only make sense if demand outpaced what was planned. Nothing suggests demand was disappointing (A), retailer-specific (C), or geographically limited (D).",
};

const part4h3: PracticeQuestionData = {
  ...PART4_PRODUCT_LAUNCH,
  question: "What will most likely happen next?",
  options: [
    { label: "A", text: "The speaker will demonstrate the device." },
    { label: "B", text: "Attendees will place pre-orders." },
    { label: "C", text: "Reporters will ask the speaker questions." },
    { label: "D", text: "The event will move to a different venue." },
  ],
  correct: "C",
  explanation:
    "The speaker closes with 'We'll now take a few questions from the press,' which is the standard close of a press conference before reporters speak. Pre-orders (B) are described as already having happened, and neither a live demonstration (A) nor a venue change (D) is mentioned.",
};

const PART4_PHONE_MENU = {
  prompt: "Part 4 · Short Talks. Listen to the talk and answer the three questions.",
  listening: true as const,
  groupId: "p4-phone-menu",
  audio: { label: "Short talk — Customer-service phone menu", durationSec: 0 },
  context:
    "Thank you for calling Briarwood Insurance. Our office hours are Monday through Friday, eight A.M. to six P.M. If you're calling to file a new claim, please press one. To check the status of an existing claim, press two. For billing and payment questions, press three. If you know your representative's extension, you may enter it at any time. For all other inquiries, please stay on the line and the next available agent will assist you. Please note that call volumes are currently high, and wait times may exceed twenty minutes.",
};

const part4i1: PracticeQuestionData = {
  ...PART4_PHONE_MENU,
  question: "What should a caller do to check on a claim already filed?",
  options: [
    { label: "A", text: "Press one." },
    { label: "B", text: "Press two." },
    { label: "C", text: "Press three." },
    { label: "D", text: "Enter their representative's extension." },
  ],
  correct: "B",
  explanation:
    "'To check the status of an existing claim, press two' — an existing claim is one already filed. Pressing one (A) is for a new claim, pressing three (C) is for billing, and entering an extension (D) is offered only to callers who already know one.",
};

const part4i2: PracticeQuestionData = {
  ...PART4_PHONE_MENU,
  question: "What can be inferred about a caller with a question not covered by the menu options?",
  options: [
    { label: "A", text: "They will be transferred to billing automatically." },
    { label: "B", text: "They should wait on the line for a representative." },
    { label: "C", text: "They must call back during office hours." },
    { label: "D", text: "They should enter zero to be connected to an agent." },
  ],
  correct: "B",
  explanation:
    "'For all other inquiries, please stay on the line and the next available agent will assist you' covers exactly this caller. No automatic transfer to billing is offered (A), no instruction to call back during office hours is given for this case (C), and no zero option is mentioned (D).",
};

const part4i3: PracticeQuestionData = {
  ...PART4_PHONE_MENU,
  question: "What does the recording warn callers about?",
  options: [
    { label: "A", text: "The office is currently closed." },
    { label: "B", text: "Some menu options have changed recently." },
    { label: "C", text: "Hold times may be longer than usual." },
    { label: "D", text: "A representative's extension has changed." },
  ],
  correct: "C",
  explanation:
    "'Call volumes are currently high, and wait times may exceed twenty minutes' is a warning about long hold times. Office hours are stated but nothing indicates the office is closed right now (A), and neither changed menu options (B) nor a changed extension (D) is mentioned.",
};

const PART4_WEBINAR = {
  prompt: "Part 4 · Short Talks. Listen to the talk and answer the three questions.",
  listening: true as const,
  groupId: "p4-webinar-intro",
  audio: { label: "Short talk — Webinar introduction", durationSec: 0 },
  context:
    "Good morning, and welcome to today's webinar on effective time management for remote teams. My name is Diane Foster, and I'll be your facilitator for the next ninety minutes. Before we begin, please make sure your microphone is muted, as this session is being recorded. We'll start with a twenty-minute presentation, followed by a hands-on exercise in breakout rooms, and we'll close with a live question-and-answer period. A copy of today's slides will be emailed to all registered participants by the end of the day. If you experience any technical difficulties, please type your issue into the chat box, and our support staff will assist you.",
};

const part4j1: PracticeQuestionData = {
  ...PART4_WEBINAR,
  question: "Why does the speaker ask participants to mute their microphones?",
  options: [
    { label: "A", text: "Because the session is being recorded." },
    { label: "B", text: "Because the presentation is about to start." },
    { label: "C", text: "Because background noise disrupted an earlier session." },
    { label: "D", text: "Because only the facilitator may speak during the webinar." },
  ],
  correct: "A",
  explanation:
    "The instruction is given 'as this session is being recorded' — the reason stated is the recording, not the presentation's start (B). No earlier session is mentioned (C), and the later Q&A period shows participants are expected to speak eventually (D).",
};

const part4j2: PracticeQuestionData = {
  ...PART4_WEBINAR,
  question: "What will happen after the opening presentation?",
  options: [
    { label: "A", text: "Participants will complete a group activity in breakout rooms." },
    { label: "B", text: "Slides will be emailed immediately to attendees." },
    { label: "C", text: "The session will move straight to questions." },
    { label: "D", text: "Diane Foster will introduce a second speaker." },
  ],
  correct: "A",
  explanation:
    "The order given is presentation, then 'a hands-on exercise in breakout rooms', then the Q&A at the close — so breakout rooms come next. Slides go out 'by the end of the day', not right after the presentation (B), the Q&A is the final stage rather than the next one (C), and no second speaker is mentioned (D).",
};

const part4j3: PracticeQuestionData = {
  ...PART4_WEBINAR,
  question: "What are participants told to do if they have a technical problem?",
  options: [
    { label: "A", text: "Restart the webinar application." },
    { label: "B", text: "Describe the problem in the chat box." },
    { label: "C", text: "Wait until the question-and-answer period." },
    { label: "D", text: "Contact Diane Foster directly." },
  ],
  correct: "B",
  explanation:
    "'Please type your issue into the chat box, and our support staff will assist you' directs this to the chat, not to Diane Foster herself (D). No instruction to restart anything is given (A), and technical issues are handled as they arise rather than saved for the Q&A (C).",
};

const PART4_RESERVATION = {
  prompt: "Part 4 · Short Talks. Listen to the talk and answer the three questions.",
  listening: true as const,
  groupId: "p4-reservation",
  audio: { label: "Short talk — Restaurant reservation voicemail", durationSec: 0 },
  context:
    "Hi, this is Marco calling from Bellavista Restaurant to confirm your reservation for four people this Saturday at seven thirty P.M. We ask that you arrive within fifteen minutes of your reservation time, since tables are held for that period only and we have a fully booked evening. Please note that we've recently moved to a new location on Harbor Street, just two blocks from our old address. If you need to cancel or change the size of your party, please call us back at least twenty-four hours in advance. We look forward to seeing you this weekend.",
};

const part4k1: PracticeQuestionData = {
  ...PART4_RESERVATION,
  question: "What is the purpose of the call?",
  options: [
    { label: "A", text: "To verify an upcoming booking." },
    { label: "B", text: "To offer a table at short notice." },
    { label: "C", text: "To inform the listener of a menu change." },
    { label: "D", text: "To collect payment in advance." },
  ],
  correct: "A",
  explanation:
    "Marco is 'calling from Bellavista Restaurant to confirm your reservation' — confirming a booking already made. Nothing suggests a spontaneous offer (B), and neither a menu (C) nor payment (D) is mentioned.",
};

const part4k2: PracticeQuestionData = {
  ...PART4_RESERVATION,
  question: "What is implied about the party if they arrive after seven forty-five?",
  options: [
    { label: "A", text: "They will be seated at the old location instead." },
    { label: "B", text: "Their table could be given to someone else." },
    { label: "C", text: "They will need to reduce their party size." },
    { label: "D", text: "They will be charged an additional fee." },
  ],
  correct: "B",
  explanation:
    "'Tables are held for that period only and we have a fully booked evening' — with the restaurant full, a table not claimed within fifteen minutes would logically go to another party. The move to Harbor Street already happened, so there is no 'old location' to return to (A), and neither a size change (C) nor a fee (D) is mentioned.",
};

const part4k3: PracticeQuestionData = {
  ...PART4_RESERVATION,
  question: "What should the listener do if their group size changes?",
  options: [
    { label: "A", text: "Arrive fifteen minutes earlier than planned." },
    { label: "B", text: "Mention it to staff upon arrival." },
    { label: "C", text: "Contact the restaurant a day beforehand." },
    { label: "D", text: "Book a second table separately." },
  ],
  correct: "C",
  explanation:
    "'If you need to cancel or change the size of your party, please call us back at least twenty-four hours in advance' asks for advance notice, not a change made on arrival (B). Arriving early (A) relates to the fifteen-minute hold, a separate point, and no second booking is mentioned (D).",
};

const PART4_HOLIDAY_HOURS = {
  prompt: "Part 4 · Short Talks. Listen to the talk and answer the three questions.",
  listening: true as const,
  groupId: "p4-holiday-hours",
  audio: { label: "Short talk — Retail store holiday-hours announcement", durationSec: 0 },
  context:
    "Attention shoppers, thank you for visiting Falcon Electronics. Please note that in observance of the upcoming holiday, our store will close early today at six P.M. instead of our usual nine P.M. closing time. We will also be closed all day tomorrow and will reopen the following morning at our regular time of ten A.M. Our online store, however, remains open twenty-four hours a day for your convenience. If you need assistance before we close, our staff will be available at the customer service desk near the main entrance. We thank you for shopping with us and wish you a wonderful holiday.",
};

const part4l1: PracticeQuestionData = {
  ...PART4_HOLIDAY_HOURS,
  question: "How is today different from a typical day, according to the announcement?",
  options: [
    { label: "A", text: "The store will shut three hours ahead of schedule." },
    { label: "B", text: "The store will open three hours later than usual." },
    { label: "C", text: "Only online orders will be accepted." },
    { label: "D", text: "Staff will not be available for assistance." },
  ],
  correct: "A",
  explanation:
    "Closing moves from the 'usual nine P.M. closing time' to 'six P.M.' — three hours earlier. The opening time is unaffected today (B), in-store shopping continues normally until closing (C), and staff remain at the service desk until then (D).",
};

const part4l2: PracticeQuestionData = {
  ...PART4_HOLIDAY_HOURS,
  question: "What is implied about shopping while the physical store is closed?",
  options: [
    { label: "A", text: "It will not be possible until the store reopens." },
    { label: "B", text: "It can continue through the store's website." },
    { label: "C", text: "It will require picking up items at the service desk." },
    { label: "D", text: "It will be offered at a reduced price." },
  ],
  correct: "B",
  explanation:
    "'Our online store... remains open twenty-four hours a day for your convenience' while the physical store is shut — so shopping continues online (A is wrong for that reason). No in-store pickup (C) or discount (D) is mentioned.",
};

const part4l3: PracticeQuestionData = {
  ...PART4_HOLIDAY_HOURS,
  question: "When will the store next open to in-person customers?",
  options: [
    { label: "A", text: "Later the same day, after a short closure." },
    { label: "B", text: "The following morning, at its usual time." },
    { label: "C", text: "The following morning, earlier than usual." },
    { label: "D", text: "Two days from now." },
  ],
  correct: "B",
  explanation:
    "The store is 'closed all day tomorrow and will reopen the following morning at our regular time of ten A.M.' — the usual opening time, not an earlier one (C), and not a same-day reopening (A) or a two-day wait (D).",
};

const PART4_ROAD_CLOSURE = {
  prompt: "Part 4 · Short Talks. Listen to the talk and answer the three questions.",
  listening: true as const,
  groupId: "p4-road-closure",
  audio: { label: "Short talk — City public-works road closure announcement", durationSec: 0 },
  context:
    "This is an automated notice from the City of Riverton Department of Public Works. Beginning Monday, Elm Street between Fourth and Seventh Avenue will be closed to all vehicle traffic while crews repair a broken water main. The closure is expected to last through Thursday, and residents on the affected block will experience temporary water service interruptions each day between nine a.m. and one p.m. Detour signs will direct traffic along Maple Avenue for the duration of the project. Businesses along Elm Street are asked to inform customers that pedestrian access to storefronts will remain open throughout the repair. For questions or to report an issue, please call our maintenance hotline at the number listed on the city website.",
};

const part4m1: PracticeQuestionData = {
  ...PART4_ROAD_CLOSURE,
  question: "Why is Elm Street being closed to vehicles?",
  options: [
    { label: "A", text: "To resurface the road." },
    { label: "B", text: "To fix a damaged pipe beneath the street." },
    { label: "C", text: "To allow a downtown parade to pass." },
    { label: "D", text: "To clear a tree that fell across the road." },
  ],
  correct: "B",
  explanation:
    "The closure is 'while crews repair a broken water main' — a damaged pipe. Resurfacing (A), a parade (C), and a fallen tree (D) are never mentioned.",
};

const part4m2: PracticeQuestionData = {
  ...PART4_ROAD_CLOSURE,
  question: "What is implied about businesses on Elm Street during the closure?",
  options: [
    { label: "A", text: "They must close for the duration of the repair." },
    { label: "B", text: "They can still be reached on foot." },
    { label: "C", text: "They will be relocated to Maple Avenue temporarily." },
    { label: "D", text: "They will receive compensation from the city." },
  ],
  correct: "B",
  explanation:
    "Businesses are told 'pedestrian access to storefronts will remain open throughout the repair' — customers on foot can still get in, even though vehicles cannot. Nothing requires businesses to close (A), Maple Avenue is only the vehicle detour route (C), and no compensation is mentioned (D).",
};

const part4m3: PracticeQuestionData = {
  ...PART4_ROAD_CLOSURE,
  question: "What will affected residents experience each day during the project?",
  options: [
    { label: "A", text: "A brief loss of water service." },
    { label: "B", text: "Noise from repair work overnight." },
    { label: "C", text: "A temporary loss of electricity." },
    { label: "D", text: "Restricted access to their driveways." },
  ],
  correct: "A",
  explanation:
    "Residents 'will experience temporary water service interruptions each day between nine a.m. and one p.m.' — a daily, daytime loss of water. Electricity (C) is never mentioned, overnight noise (B) is not stated, and driveway access is not addressed (D).",
};

const PART4_CLASS_CANCELLATION = {
  prompt: "Part 4 · Short Talks. Listen to the talk and answer the three questions.",
  listening: true as const,
  groupId: "p4-class-cancellation",
  audio: { label: "Short talk — Gym class cancellation voicemail", durationSec: 0 },
  context:
    "Hi, this is Dana from Peak Fitness Studio calling to let you know that tonight's six o'clock spin class has been cancelled because our instructor, Marco, is out with a family emergency. We tried to find a substitute on short notice but weren't able to arrange one in time. Your class credit will automatically be restored to your account, so you won't need to do anything on your end. If you'd like, you're welcome to join tomorrow morning's seven a.m. spin class instead, which still has a few open spots. We apologize for the inconvenience and hope to see you at the studio again soon. Please call us back if you have any questions.",
};

const part4n1: PracticeQuestionData = {
  ...PART4_CLASS_CANCELLATION,
  question: "Why has tonight's class been cancelled?",
  options: [
    { label: "A", text: "Too few members signed up." },
    { label: "B", text: "The instructor is unavailable due to a personal matter." },
    { label: "C", text: "The studio's equipment needs repair." },
    { label: "D", text: "The building has lost electricity." },
  ],
  correct: "B",
  explanation:
    "Marco 'is out with a family emergency' — a personal matter that has made him unavailable. Low sign-up (A), equipment (C), and a power loss (D) are never mentioned.",
};

const part4n2: PracticeQuestionData = {
  ...PART4_CLASS_CANCELLATION,
  question: "What does the speaker say the listener needs to do to have their credit restored?",
  options: [
    { label: "A", text: "Call the studio to request it." },
    { label: "B", text: "Nothing, as it happens automatically." },
    { label: "C", text: "Attend the substitute class instead." },
    { label: "D", text: "Submit a refund form online." },
  ],
  correct: "B",
  explanation:
    "'Your class credit will automatically be restored to your account, so you won't need to do anything on your end.' Calling back (A) is offered only for questions, not for the credit, and no substitute class (C) was found, nor is a form mentioned (D).",
};

const part4n3: PracticeQuestionData = {
  ...PART4_CLASS_CANCELLATION,
  question: "What alternative does the speaker offer?",
  options: [
    { label: "A", text: "A private session with a different instructor." },
    { label: "B", text: "A spot in the next morning's class." },
    { label: "C", text: "A refund instead of a credit." },
    { label: "D", text: "A discount on a future class." },
  ],
  correct: "B",
  explanation:
    "The listener is 'welcome to join tomorrow morning's seven a.m. spin class instead, which still has a few open spots.' A substitute instructor could not be arranged for tonight (A), the credit is automatic rather than a refund (C), and no discount is mentioned (D).",
};

const PART4_PODCAST_INTRO = {
  prompt: "Part 4 · Short Talks. Listen to the talk and answer the three questions.",
  listening: true as const,
  groupId: "p4-podcast-intro",
  audio: { label: "Short talk — Business podcast episode introduction", durationSec: 0 },
  context:
    "Welcome back to Bottom Line Business, the podcast where we break down the strategies behind today's fastest-growing companies. I'm your host, Priya Chandra, and this week I'm joined by the co-founder of a logistics startup that scaled from three employees to over two hundred in just eighteen months. Before we dive into today's interview, quick note: registration for our annual listener meetup in Austin closes this Friday, so if you've been planning to grab a ticket, now's the time. As always, this episode is brought to you by our sponsor, Ledger Cloud Accounting. Let's get into the conversation.",
};

const part4o1: PracticeQuestionData = {
  ...PART4_PODCAST_INTRO,
  question: "What type of company does the podcast typically feature?",
  options: [
    { label: "A", text: "Companies expanding at an unusually fast pace." },
    { label: "B", text: "Companies preparing to go public." },
    { label: "C", text: "Companies in the accounting industry." },
    { label: "D", text: "Companies based outside the country." },
  ],
  correct: "A",
  explanation:
    "The show covers 'the strategies behind today's fastest-growing companies' — rapid expansion, not going public (B), which is never mentioned. Accounting (C) describes only the sponsor, and no international focus is stated (D).",
};

const part4o2: PracticeQuestionData = {
  ...PART4_PODCAST_INTRO,
  question: "What can be inferred about this week's guest?",
  options: [
    { label: "A", text: "Their company expanded its workforce dramatically in a short period." },
    { label: "B", text: "They previously worked at the show's sponsor." },
    { label: "C", text: "They are leaving their position as co-founder." },
    { label: "D", text: "They will appear at the Austin meetup." },
  ],
  correct: "A",
  explanation:
    "The guest's company 'scaled from three employees to over two hundred in just eighteen months' — dramatic workforce growth. A past role at the sponsor (B), stepping down (C), and appearing at the meetup (D) are never mentioned.",
};

const part4o3: PracticeQuestionData = {
  ...PART4_PODCAST_INTRO,
  question: "What does the host say about the Austin meetup?",
  options: [
    { label: "A", text: "It has been rescheduled to a later date." },
    { label: "B", text: "Registration closes soon." },
    { label: "C", text: "This week's guest will be speaking there." },
    { label: "D", text: "It is sponsored by Ledger Cloud Accounting." },
  ],
  correct: "B",
  explanation:
    "'Registration for our annual listener meetup in Austin closes this Friday, so if you've been planning to grab a ticket, now's the time' — a closing deadline. No rescheduling (A) is mentioned, the guest's attendance is never stated (C), and the sponsor is linked to the episode, not the meetup (D).",
};

const PART4_CHANGEOVER = {
  prompt: "Part 4 · Short Talks. Listen to the talk and answer the three questions.",
  listening: true as const,
  groupId: "p4-changeover",
  audio: { label: "Short talk — Factory production-line changeover briefing", durationSec: 0 },
  context:
    "All right, everyone, let's get started. As you know, at the end of this shift we're switching Line 3 over from the blue widget casing to the new gray casing model, so I need everyone at their changeover stations by two forty-five. Before you begin, make sure the old mold inserts are fully cleaned and returned to the tool crib — do not leave them on the line. The new gray casing molds arrived yesterday and have already been inspected and approved by quality control, so we're clear to install them as soon as the line stops. Changeover should take no more than forty minutes if everyone follows the checklist posted at each station. Once the line is running again, we'll do a first-piece inspection before resuming full production. Any questions, grab me before we break for changeover.",
};

const part4p1: PracticeQuestionData = {
  ...PART4_CHANGEOVER,
  question: "What is the main topic of the briefing?",
  options: [
    { label: "A", text: "A switch to a different casing model on one line." },
    { label: "B", text: "A newly introduced quality inspection process." },
    { label: "C", text: "A change to shift start and end times." },
    { label: "D", text: "The results of a first-piece inspection." },
  ],
  correct: "A",
  explanation:
    "The briefing exists to prepare the crew for 'switching Line 3 over from the blue widget casing to the new gray casing model.' Quality control is mentioned as already having approved the new molds, not as a new process (B), shift timing is only the changeover deadline within the existing shift (C), and the first-piece inspection is a step still to come, with no results yet (D).",
};

const part4p2: PracticeQuestionData = {
  ...PART4_CHANGEOVER,
  question: "What are workers told to do with the old mold inserts?",
  options: [
    { label: "A", text: "Leave them on the line for the next shift." },
    { label: "B", text: "Clean them and take them to storage." },
    { label: "C", text: "Send them for inspection by quality control." },
    { label: "D", text: "Install them on a different production line." },
  ],
  correct: "B",
  explanation:
    "'Make sure the old mold inserts are fully cleaned and returned to the tool crib' — cleaned and taken to storage. Leaving them on the line (A) is explicitly ruled out, quality control inspects the new molds, not the old ones (C), and no other line is mentioned (D).",
};

const part4p3: PracticeQuestionData = {
  ...PART4_CHANGEOVER,
  question: "What is implied about the new gray casing molds?",
  options: [
    { label: "A", text: "They still need to clear quality control before use." },
    { label: "B", text: "They can be installed as soon as the line stops." },
    { label: "C", text: "They will not arrive until after the changeover." },
    { label: "D", text: "They require a longer changeover than forty minutes." },
  ],
  correct: "B",
  explanation:
    "Because the molds 'have already been inspected and approved by quality control', the speaker says 'we're clear to install them as soon as the line stops' — clearance is already complete, not still pending (A). They 'arrived yesterday', before this briefing (C), and the forty-minute estimate is given as the expected length of the whole changeover (D).",
};

const PART4_WAKEUP_CALL = {
  prompt: "Part 4 · Short Talks. Listen to the talk and answer the three questions.",
  listening: true as const,
  groupId: "p4-wakeup-call",
  audio: { label: "Short talk — Hotel automated wake-up call", durationSec: 0 },
  context:
    "Good morning, this is your automated wake-up call from the front desk at the Lakeside Grand Hotel. It is currently six thirty a.m. Your shuttle to the airport is scheduled to depart from the main lobby entrance at seven fifteen, so please have your luggage ready in the hallway by seven o'clock for pickup by our bell staff. Breakfast is being served in the Harbor Room until nine a.m., though we recommend eating early given your shuttle time. If you need any assistance or would like to request a later shuttle, please dial zero to speak with our concierge desk. We hope you enjoyed your stay and look forward to welcoming you back to the Lakeside Grand.",
};

const part4q1: PracticeQuestionData = {
  ...PART4_WAKEUP_CALL,
  question: "What is the guest asked to prepare by seven o'clock?",
  options: [
    { label: "A", text: "Their bags, for collection outside the room." },
    { label: "B", text: "Their bill, for review at the front desk." },
    { label: "C", text: "Their room key, for return to reception." },
    { label: "D", text: "A breakfast reservation for the Harbor Room." },
  ],
  correct: "A",
  explanation:
    "The guest is told to 'have your luggage ready in the hallway by seven o'clock for pickup by our bell staff' — bags left outside the room. No mention is made of the bill (B), a key (C), or a breakfast reservation (D).",
};

const part4q2: PracticeQuestionData = {
  ...PART4_WAKEUP_CALL,
  question: "Why does the speaker recommend eating breakfast early?",
  options: [
    { label: "A", text: "The Harbor Room closes earlier than usual today." },
    { label: "B", text: "The shuttle is scheduled to depart soon after." },
    { label: "C", text: "Breakfast service ends before the shuttle departs." },
    { label: "D", text: "A large group is expected in the dining room." },
  ],
  correct: "B",
  explanation:
    "Breakfast runs 'until nine a.m., though we recommend eating early given your shuttle time' — the shuttle at seven fifteen is what makes an early breakfast advisable, not a shortened closing time (A), and breakfast in fact runs later than the shuttle departure, not before it (C). No crowding is mentioned (D).",
};

const part4q3: PracticeQuestionData = {
  ...PART4_WAKEUP_CALL,
  question: "What should the guest do to arrange a later shuttle?",
  options: [
    { label: "A", text: "Speak with the bell staff directly." },
    { label: "B", text: "Leave a note at the front desk." },
    { label: "C", text: "Call the concierge desk." },
    { label: "D", text: "Wait for the next scheduled announcement." },
  ],
  correct: "C",
  explanation:
    "'If you... would like to request a later shuttle, please dial zero to speak with our concierge desk.' Bell staff handle luggage pickup, not shuttle timing (A), and no note-leaving (B) or further announcement (D) is mentioned.",
};

const PART4_GALA_PITCH = {
  prompt: "Part 4 · Short Talks. Listen to the talk and answer the three questions.",
  listening: true as const,
  groupId: "p4-gala-pitch",
  audio: { label: "Short talk — Nonprofit gala fundraising pitch", durationSec: 0 },
  context:
    "Good evening, everyone, and thank you so much for joining us tonight at the Riverbend Children's Fund gala. Over the past year, your generosity has allowed us to open two new after-school tutoring centers and provide school supplies to more than eight hundred children in our community. Tonight, every dollar raised through the silent auction and the paddle raise will go directly toward building a third center in the Westside neighborhood. We're so close to our goal of two hundred thousand dollars, and with your help tonight, I believe we can get there. Please take a look at the auction items near the stage, and remember that bidding closes at nine p.m. sharp. Thank you again for standing with us and with the children we serve.",
};

const part4r1: PracticeQuestionData = {
  ...PART4_GALA_PITCH,
  question: "What has past donor support already accomplished?",
  options: [
    { label: "A", text: "Two tutoring centers were opened." },
    { label: "B", text: "A third center was completed." },
    { label: "C", text: "The organization's original goal was met." },
    { label: "D", text: "School supplies were sent nationwide." },
  ],
  correct: "A",
  explanation:
    "'Your generosity has allowed us to open two new after-school tutoring centers' describes what has already happened, over the past year. The third center is what tonight's funds are for building, not something completed (B), the two-hundred-thousand-dollar goal is described as not yet reached (C), and supplies went to the local community, not nationwide (D).",
};

const part4r2: PracticeQuestionData = {
  ...PART4_GALA_PITCH,
  question: "What is implied about the fundraising goal?",
  options: [
    { label: "A", text: "It has already been surpassed tonight." },
    { label: "B", text: "It remains just out of reach." },
    { label: "C", text: "It was reduced from an earlier target." },
    { label: "D", text: "It will not be revealed until next year." },
  ],
  correct: "B",
  explanation:
    "'We're so close to our goal of two hundred thousand dollars' — near but not there yet, so still out of reach. Nothing suggests the goal has been exceeded (A) or lowered (C), and the amount is stated tonight, not deferred (D).",
};

const part4r3: PracticeQuestionData = {
  ...PART4_GALA_PITCH,
  question: "What will the money raised tonight be used for?",
  options: [
    { label: "A", text: "Ongoing costs at the two existing centers." },
    { label: "B", text: "School supplies for the coming year." },
    { label: "C", text: "Constructing an additional center." },
    { label: "D", text: "Covering the cost of the gala event." },
  ],
  correct: "C",
  explanation:
    "'Every dollar raised through the silent auction and the paddle raise will go directly toward building a third center in the Westside neighborhood.' The two existing centers (A) and the supplies already provided (B) describe past achievements, and gala costs are never mentioned (D).",
};

// ── Part 4 set: one talk, three questions (real-exam format) ──
const PART4_SHIFT_BRIEFING = {
  prompt: "Part 4 · Short Talks. Listen to the talk and answer the three questions.",
  listening: true as const,
  groupId: "p4-shift-briefing",
  audio: { label: "Short talk — Warehouse shift-change briefing", durationSec: 0 },
  context:
    "Before you head out, let's do a quick shift-change briefing. Inventory count for aisle twelve is still incomplete, so the incoming night shift needs to finish that before starting any new picks. We had two pallet jacks go down for repair today, unit four and unit seven, and maintenance says they won't be back in service until tomorrow morning, so plan your routes around that. The loading dock on the east side will be closed for resurfacing starting at ten p.m., so all outbound trucks need to use the west dock tonight. Please make sure your area is swept and pallets are stacked before you clock out. Thanks for a good shift, everyone, and pass this information along to the next crew.",
};

const part4s1: PracticeQuestionData = {
  ...PART4_SHIFT_BRIEFING,
  question: "What is the main purpose of the talk?",
  options: [
    { label: "A", text: "To report equipment failures to the maintenance department." },
    { label: "B", text: "To review the findings of a completed inventory audit." },
    { label: "C", text: "To pass on conditions the incoming crew will need to work around." },
    { label: "D", text: "To introduce a new procedure for loading outbound trucks." },
  ],
  correct: "C",
  explanation:
    "Every item the speaker raises — the unfinished count, the two jacks out of service, the closed dock — is something the next crew has to work around, and the talk ends by asking listeners to 'pass this information along to the next crew.' Each wrong answer takes one true fragment and inflates it into the whole purpose: equipment is discussed but not reported to maintenance (A), the inventory count is explicitly unfinished rather than reviewed (B), and the dock change is a one-night workaround, not a new procedure (D).",
};

const part4s2: PracticeQuestionData = {
  ...PART4_SHIFT_BRIEFING,
  question: "What does the speaker imply about the two pallet jacks?",
  options: [
    { label: "A", text: "They will be unavailable for the whole of the night shift." },
    { label: "B", text: "They are being replaced with newer models." },
    { label: "C", text: "They should be returned to the maintenance area." },
    { label: "D", text: "They are needed to finish the count in aisle twelve." },
  ],
  correct: "A",
  explanation:
    "Maintenance says the jacks 'won't be back in service until tomorrow morning,' and the crew being briefed is handing over to the night shift — so the jacks are gone for that entire shift, which is why the speaker says to plan routes around them. Nothing suggests replacement units (B) or a return to maintenance (C), and (D) joins two real details — the jacks and aisle twelve — that the talk never connects.",
};

const part4s3: PracticeQuestionData = {
  ...PART4_SHIFT_BRIEFING,
  question: "Why must outbound trucks use the west dock tonight?",
  options: [
    { label: "A", text: "The east side will be undergoing repair work." },
    { label: "B", text: "The west dock is nearer to the aisle being counted." },
    { label: "C", text: "The east dock has no working pallet jacks available." },
    { label: "D", text: "More outbound trucks are expected than usual." },
  ],
  correct: "A",
  explanation:
    "The east dock 'will be closed for resurfacing starting at ten p.m.', and resurfacing is repair work, so (A) restates the reason without repeating the word. Proximity to the aisle being counted (B) and a heavier truck schedule (D) are never mentioned, and (C) links the broken jacks to the closed dock, two real details the talk keeps separate.",
};

const PART4_OUTAGE_UPDATE = {
  prompt: "Part 4 · Short Talks. Listen to the talk and answer the three questions.",
  listening: true as const,
  groupId: "p4-outage-update",
  audio: { label: "Short talk — Software company outage status update", durationSec: 0 },
  context:
    "This is an automated status update regarding the service disruption affecting our platform's file-upload feature. Our engineering team identified the root cause as a misconfigured server update pushed at approximately two a.m. Eastern Time, and a fix has already been deployed to our staging environment for testing. We expect the fix to be rolled out to all production servers within the next two hours, and file uploads should return to normal shortly after that. In the meantime, all other platform features, including messaging and document editing, continue to function normally. We'll post another update as soon as the issue is fully resolved, and we apologize for any disruption to your workflow. Thank you for your patience.",
};

const part4t1: PracticeQuestionData = {
  ...PART4_OUTAGE_UPDATE,
  question: "Which feature does the update say is affected?",
  options: [
    { label: "A", text: "Uploading files." },
    { label: "B", text: "Sending messages." },
    { label: "C", text: "Editing documents." },
    { label: "D", text: "Logging into the platform." },
  ],
  correct: "A",
  explanation:
    "The disruption affects 'our platform's file-upload feature'. Messaging and document editing are named as features that 'continue to function normally' (B, C), and logging in is never mentioned (D).",
};

const part4t2: PracticeQuestionData = {
  ...PART4_OUTAGE_UPDATE,
  question: "What does the update indicate about the cause of the issue?",
  options: [
    { label: "A", text: "It originated outside the company." },
    { label: "B", text: "It resulted from an error made internally." },
    { label: "C", text: "It was caused by a piece of failed equipment." },
    { label: "D", text: "It followed an unexpected rise in usage." },
  ],
  correct: "B",
  explanation:
    "The cause was 'a misconfigured server update pushed' by the company's own engineering team — a mistake made internally, ruling out an outside cause such as an attack (A). Neither hardware failure (C) nor a traffic spike (D) is mentioned.",
};

const part4t3: PracticeQuestionData = {
  ...PART4_OUTAGE_UPDATE,
  question: "What is expected to happen within the next two hours?",
  options: [
    { label: "A", text: "The fix will be tested in the staging environment." },
    { label: "B", text: "All platform features will be temporarily suspended." },
    { label: "C", text: "The fix will be applied across production servers." },
    { label: "D", text: "A further explanation of the cause will be published." },
  ],
  correct: "C",
  explanation:
    "'We expect the fix to be rolled out to all production servers within the next two hours' — the two-hour window is for the production rollout. Staging testing has already happened, before this update (A), other features stay running throughout (B), and any further update is timed by resolution, not by the two hours (D).",
};

const PART4_OPEN_HOUSE = {
  prompt: "Part 4 · Short Talks. Listen to the talk and answer the three questions.",
  listening: true as const,
  groupId: "p4-open-house",
  audio: { label: "Short talk — Real estate open-house announcement", durationSec: 0 },
  context:
    "Welcome to the open house at 214 Birchwood Lane. This four-bedroom home was fully renovated last year, including a new kitchen with granite countertops and stainless steel appliances. Feel free to walk through at your own pace, and I'll be here in the living room if you have any questions. Please sign the guest book by the front door before you leave, as the seller has asked us to keep a record of all visitors today. The property has already received two offers, so anyone interested is encouraged to submit paperwork by Friday at five p.m. Parking is available on the street, but please avoid blocking the neighbor's driveway.",
};

const part4u1: PracticeQuestionData = {
  ...PART4_OPEN_HOUSE,
  question: "What does the agent say about the property?",
  options: [
    { label: "A", text: "It underwent recent renovation work." },
    { label: "B", text: "It is being sold without a kitchen." },
    { label: "C", text: "It was built within the past year." },
    { label: "D", text: "It has three bedrooms." },
  ],
  correct: "A",
  explanation:
    "The home 'was fully renovated last year, including a new kitchen'. It was renovated, not newly built (C), the kitchen is a highlighted upgrade rather than absent (B), and the talk states it has four bedrooms, not three (D).",
};

const part4u2: PracticeQuestionData = {
  ...PART4_OPEN_HOUSE,
  question: "Why does the agent ask visitors to sign the guest book?",
  options: [
    { label: "A", text: "To be entered into a prize draw." },
    { label: "B", text: "To receive a printed copy of the listing." },
    { label: "C", text: "Because the seller wants a log of who attended." },
    { label: "D", text: "Because parking passes will be issued to signers." },
  ],
  correct: "C",
  explanation:
    "'The seller has asked us to keep a record of all visitors today' — a log of attendance. No raffle (A), listing copy (B), or parking pass (D) is mentioned.",
};

const part4u3: PracticeQuestionData = {
  ...PART4_OPEN_HOUSE,
  question: "What is implied about the property by Friday's deadline?",
  options: [
    { label: "A", text: "It has already attracted competing interest." },
    { label: "B", text: "It has failed to attract any offers so far." },
    { label: "C", text: "It will be taken off the market if unsold." },
    { label: "D", text: "Its price will be reduced after that date." },
  ],
  correct: "A",
  explanation:
    "'The property has already received two offers, so anyone interested is encouraged to submit paperwork by Friday' — the deadline exists because other buyers are already competing for it, the opposite of no interest at all (B). Neither withdrawing the listing (C) nor a price cut (D) is mentioned.",
};

const PART4_ONBOARDING = {
  prompt: "Part 4 · Short Talks. Listen to the talk and answer the three questions.",
  listening: true as const,
  groupId: "p4-onboarding-video",
  audio: { label: "Short talk — Corporate onboarding training video introduction", durationSec: 0 },
  context:
    "Welcome to Module One of our new employee onboarding series. My name is Denise Okafor, and I'll be your guide through this training video, which covers company policies, workplace safety, and how to use our internal software systems. This module is approximately twenty minutes long, and you'll be asked to complete a short quiz at the end before moving on to Module Two. If you need to pause the video, your progress will be saved automatically, so there's no need to rewatch anything you've already completed. All new hires must finish the full onboarding series within their first two weeks of employment. If you run into any technical issues, please contact the IT help desk rather than your manager.",
};

const part4v1: PracticeQuestionData = {
  ...PART4_ONBOARDING,
  question: "What topics does this module cover?",
  options: [
    { label: "A", text: "Company rules, workplace safety and internal software." },
    { label: "B", text: "Payroll procedures and employee benefits." },
    { label: "C", text: "Department structure and reporting lines." },
    { label: "D", text: "Customer service standards." },
  ],
  correct: "A",
  explanation:
    "Denise says the video 'covers company policies, workplace safety, and how to use our internal software systems'. Payroll and benefits (B), reporting structure (C), and customer service (D) are never mentioned as topics of this module.",
};

const part4v2: PracticeQuestionData = {
  ...PART4_ONBOARDING,
  question: "What happens if a viewer pauses the video partway through?",
  options: [
    { label: "A", text: "They must restart the module from the beginning." },
    { label: "B", text: "Their place is saved for them automatically." },
    { label: "C", text: "They must notify the IT help desk." },
    { label: "D", text: "Their access to the module expires." },
  ],
  correct: "B",
  explanation:
    "'Your progress will be saved automatically, so there's no need to rewatch anything you've already completed' — no restart is required (A), and there is nothing to notify IT about (C) or any expiry mentioned (D).",
};

const part4v3: PracticeQuestionData = {
  ...PART4_ONBOARDING,
  question: "What must new hires do before moving on to Module Two?",
  options: [
    { label: "A", text: "Have a meeting with their manager." },
    { label: "B", text: "Submit a signed copy of the policies." },
    { label: "C", text: "Pass a brief quiz at the end of the module." },
    { label: "D", text: "Watch the full video a second time." },
  ],
  correct: "C",
  explanation:
    "New hires 'will be asked to complete a short quiz at the end before moving on to Module Two.' A manager meeting (A) and a signed form (B) are never mentioned, and rewatching (D) contradicts the earlier point that progress is saved so nothing needs repeating.",
};

const PART4_STADIUM_PA = {
  prompt: "Part 4 · Short Talks. Listen to the talk and answer the three questions.",
  listening: true as const,
  groupId: "p4-stadium-pa",
  audio: {
    label: "Short talk — Sports stadium pre-game safety and parking announcement",
    durationSec: 0,
  },
  context:
    "Good afternoon, and welcome to Cardinal Stadium. Before today's game begins, we'd like to remind all fans that bags larger than the size of a standard sheet of paper are not permitted inside the venue and must be returned to your vehicle. Lot C, located behind the north entrance, is now full, so any fans still arriving should proceed directly to the overflow lot on Grant Street. In case of severe weather, stadium staff will direct fans to designated shelter areas beneath the main concourse, and updates will also be posted on the stadium's mobile app. Please have your tickets ready for scanning at the gate to help keep lines moving quickly. Enjoy the game, and thank you for your cooperation.",
};

const part4w1: PracticeQuestionData = {
  ...PART4_STADIUM_PA,
  question: "What restriction does the announcement mention?",
  options: [
    { label: "A", text: "A limit on the size of bags allowed inside." },
    { label: "B", text: "A ban on food brought from outside." },
    { label: "C", text: "A restriction on re-entering the venue." },
    { label: "D", text: "A limit on the number of tickets per person." },
  ],
  correct: "A",
  explanation:
    "'Bags larger than the size of a standard sheet of paper are not permitted inside the venue' — a size limit on bags. Outside food (B), re-entry (C), and ticket limits (D) are never mentioned.",
};

const part4w2: PracticeQuestionData = {
  ...PART4_STADIUM_PA,
  question: "What are arriving fans told to do now that Lot C is full?",
  options: [
    { label: "A", text: "Park in a nearby garage instead." },
    { label: "B", text: "Wait near the north entrance for a space." },
    { label: "C", text: "Go directly to the Grant Street lot." },
    { label: "D", text: "Use the shelter area beneath the concourse." },
  ],
  correct: "C",
  explanation:
    "Fans still arriving 'should proceed directly to the overflow lot on Grant Street.' A garage (A), waiting at the north entrance (B), and the shelter area (D) are never offered as parking options — the shelter is for severe weather only.",
};

const part4w3: PracticeQuestionData = {
  ...PART4_STADIUM_PA,
  question: "Where will fans be directed in the event of severe weather?",
  options: [
    { label: "A", text: "To the overflow lot on Grant Street." },
    { label: "B", text: "To designated areas under the main concourse." },
    { label: "C", text: "To their vehicles in Lot C." },
    { label: "D", text: "To the stadium's mobile app for instructions." },
  ],
  correct: "B",
  explanation:
    "'In case of severe weather, stadium staff will direct fans to designated shelter areas beneath the main concourse.' The Grant Street lot (A) is for parking, not shelter, and the app (D) is only where updates are posted, not where fans are sent.",
};

const PART4_SUPERMARKET_PA = {
  prompt: "Part 4 · Short Talks. Listen to the talk and answer the three questions.",
  listening: true as const,
  groupId: "p4-supermarket-pa",
  audio: { label: "Short talk — Supermarket in-store promotional PA announcement", durationSec: 0 },
  context:
    "Attention shoppers, welcome to Fresh Harvest Market. For the next fifteen minutes only, all bakery items are marked down by twenty-five percent, so head over to aisle two to take advantage of these savings. We'd also like to remind everyone that our deli counter will close at eight p.m. tonight, one hour earlier than usual, due to a staff training session. If you're a Fresh Harvest Rewards member, don't forget to scan your card at checkout to earn double points on all produce purchases today. Samples of our new organic granola are available near the front entrance for anyone who'd like to try before they buy. Thank you for shopping with us, and enjoy the rest of your visit.",
};

const part4x1: PracticeQuestionData = {
  ...PART4_SUPERMARKET_PA,
  question: "What is implied about the bakery discount?",
  options: [
    { label: "A", text: "It applies for a limited window today only." },
    { label: "B", text: "It is available every day this week." },
    { label: "C", text: "It applies only to Rewards members." },
    { label: "D", text: "It is offered on a different aisle each day." },
  ],
  correct: "A",
  explanation:
    "The discount runs 'for the next fifteen minutes only' — a short window on this visit, not a standing weekly offer (B). Rewards membership is tied to the separate produce points offer, not the bakery discount (C), and only one aisle is mentioned (D).",
};

const part4x2: PracticeQuestionData = {
  ...PART4_SUPERMARKET_PA,
  question: "Why is the deli counter closing an hour early tonight?",
  options: [
    { label: "A", text: "The store is closed for a holiday." },
    { label: "B", text: "Staff members are attending a training session." },
    { label: "C", text: "The counter has run out of stock." },
    { label: "D", text: "A piece of equipment is being fixed." },
  ],
  correct: "B",
  explanation:
    "The deli closes early 'due to a staff training session.' A holiday closure (A), running out of stock (C), and equipment repair (D) are never mentioned.",
};

const part4x3: PracticeQuestionData = {
  ...PART4_SUPERMARKET_PA,
  question: "How can Rewards members earn double points today?",
  options: [
    { label: "A", text: "By purchasing bakery items." },
    { label: "B", text: "By trying the granola samples." },
    { label: "C", text: "By buying produce and scanning their card." },
    { label: "D", text: "By shopping before the deli closes." },
  ],
  correct: "C",
  explanation:
    "Members are told to 'scan your card at checkout to earn double points on all produce purchases today' — the points apply to produce, not bakery items (A), and scanning the card is required, not merely trying a sample (B). The deli's closing time is unrelated to the points offer (D).",
};

const PART4_HOLD_MESSAGE = {
  prompt: "Part 4 · Short Talks. Listen to the talk and answer the three questions.",
  listening: true as const,
  groupId: "p4-hold-message",
  audio: { label: "Short talk — Call-center hold-music informational message", durationSec: 0 },
  context:
    "Thank you for calling Summit Bank customer support. Your call is important to us, and a representative will be with you as soon as possible. Current wait times are longer than usual due to a high volume of calls regarding recent updates to our mobile banking app. While you wait, you can visit our website to reset your password or check your account balance without speaking to an agent. If your call is regarding a lost or stolen card, please stay on the line, as this is treated as a priority and will be transferred immediately. Please note that this call may be recorded for quality assurance and training purposes. We appreciate your patience and will connect you shortly.",
};

const part4y1: PracticeQuestionData = {
  ...PART4_HOLD_MESSAGE,
  question: "Why are wait times longer than usual?",
  options: [
    { label: "A", text: "A large number of calls concern a recent app update." },
    { label: "B", text: "The call center is short-staffed today." },
    { label: "C", text: "The website is temporarily unavailable." },
    { label: "D", text: "A system outage is affecting all accounts." },
  ],
  correct: "A",
  explanation:
    "Wait times are longer 'due to a high volume of calls regarding recent updates to our mobile banking app.' Staffing (B), the website (C), and a system outage (D) are never mentioned as causes.",
};

const part4y2: PracticeQuestionData = {
  ...PART4_HOLD_MESSAGE,
  question: "What can callers do without speaking to a representative?",
  options: [
    { label: "A", text: "Report a lost or stolen card." },
    { label: "B", text: "Reset a password and check a balance." },
    { label: "C", text: "Request a new mobile banking app." },
    { label: "D", text: "Leave a message for a callback." },
  ],
  correct: "B",
  explanation:
    "'You can visit our website to reset your password or check your account balance without speaking to an agent.' A lost or stolen card requires staying on the line to speak to someone (A), and neither requesting the app (C) nor leaving a callback message (D) is mentioned.",
};

const part4y3: PracticeQuestionData = {
  ...PART4_HOLD_MESSAGE,
  question: "What is implied about callers reporting a lost or stolen card?",
  options: [
    { label: "A", text: "They will receive a replacement card by mail." },
    { label: "B", text: "They will bypass the current wait." },
    { label: "C", text: "They must call again during business hours." },
    { label: "D", text: "They will be asked to visit a branch." },
  ],
  correct: "B",
  explanation:
    "Despite wait times being 'longer than usual', these calls are 'treated as a priority and will be transferred immediately' — skipping the wait everyone else faces. A mailed card (A), calling back later (C), and a branch visit (D) are never mentioned.",
};

const PART4_EARNINGS_CALL = {
  prompt: "Part 4 · Short Talks. Listen to the talk and answer the three questions.",
  listening: true as const,
  groupId: "p4-earnings-call",
  audio: { label: "Short talk — Company earnings-call opening remarks excerpt", durationSec: 0 },
  context:
    "Good morning, everyone, and thank you for joining Vantix Corporation's second-quarter earnings call. I'm pleased to report that revenue this quarter reached three hundred twenty million dollars, an increase of eighteen percent compared to the same period last year, driven largely by strong demand in our cloud services division. Our operating margin also improved, thanks to cost efficiencies achieved through the automation initiatives we discussed on last quarter's call. We did see softer results in our hardware segment, which we attribute to ongoing supply chain constraints, and we expect that trend to continue into the third quarter. Later in this call, our Chief Financial Officer will walk you through the detailed financial statements, and I'll return afterward to take your questions. Before we move forward, I want to thank our employees for their continued dedication during a challenging global environment.",
};

const part4z1: PracticeQuestionData = {
  ...PART4_EARNINGS_CALL,
  question: "What is implied about the cloud services division?",
  options: [
    { label: "A", text: "It was a major driver of this quarter's growth." },
    { label: "B", text: "It is a newly created part of the company." },
    { label: "C", text: "It is being sold in the coming quarter." },
    { label: "D", text: "It brought in less revenue than hardware." },
  ],
  correct: "A",
  explanation:
    "Revenue growth of 'eighteen percent' is attributed to 'strong demand in our cloud services division' — a major driver of the increase. Nothing suggests the division is new (B) or being sold (C), and the hardware segment is described as weaker this quarter, not stronger (D).",
};

const part4z2: PracticeQuestionData = {
  ...PART4_EARNINGS_CALL,
  question: "Why did the hardware segment underperform?",
  options: [
    { label: "A", text: "Difficulties in the supply chain." },
    { label: "B", text: "Reduced spending on automation." },
    { label: "C", text: "Increased competition in the sector." },
    { label: "D", text: "A decline in customer demand." },
  ],
  correct: "A",
  explanation:
    "Softer hardware results are attributed to 'ongoing supply chain constraints'. Automation spending is credited with improving margin, not linked to the hardware weakness (B), and neither competition (C) nor falling demand (D) is mentioned as the cause.",
};

const part4z3: PracticeQuestionData = {
  ...PART4_EARNINGS_CALL,
  question: "What will happen next on the call?",
  options: [
    { label: "A", text: "The speaker will take questions from listeners." },
    { label: "B", text: "The Chief Financial Officer will present detailed figures." },
    { label: "C", text: "A new product will be unveiled." },
    { label: "D", text: "The call will end for a short break." },
  ],
  correct: "B",
  explanation:
    "'Later in this call, our Chief Financial Officer will walk you through the detailed financial statements, and I'll return afterward to take your questions' — the CFO's presentation comes first, with questions to follow afterward (A). No product launch (C) or break (D) is mentioned.",
};

const PART4_TRAFFIC_WEATHER = {
  prompt: "Part 4 · Short Talks. Listen to the talk and answer the three questions.",
  listening: true as const,
  groupId: "p4-traffic-weather",
  audio: { label: "Short talk — Radio traffic and weather update", durationSec: 0 },
  context:
    "Good morning, this is your six-forty traffic and weather update on WKRD Radio. If you're heading downtown this morning, expect heavy delays on Interstate 95 northbound near exit 12, where a multi-vehicle accident has traffic backed up for nearly three miles. Drivers are advised to take the Route 9 bypass instead until the scene is cleared, which authorities estimate will take at least another hour. On the weather side, expect sunny skies through midday, with rain moving in after four p.m., so grab an umbrella if you're heading out this evening. We'll have another update in twenty minutes.",
};

const part4aa1: PracticeQuestionData = {
  ...PART4_TRAFFIC_WEATHER,
  question: "Why is northbound traffic backed up on Interstate 95?",
  options: [
    { label: "A", text: "Construction work near exit 12." },
    { label: "B", text: "A collision involving several vehicles." },
    { label: "C", text: "Flooding caused by heavy rain." },
    { label: "D", text: "A vehicle stalled in a travel lane." },
  ],
  correct: "B",
  explanation:
    "'A multi-vehicle accident has traffic backed up for nearly three miles' — a collision involving several vehicles. Construction (A), flooding (C), and a stalled vehicle (D) are never mentioned; the rain is forecast for the afternoon, not the current cause of delay.",
};

const part4aa2: PracticeQuestionData = {
  ...PART4_TRAFFIC_WEATHER,
  question: "What are drivers advised to do?",
  options: [
    { label: "A", text: "Take an alternate route until the road clears." },
    { label: "B", text: "Delay their trip by about an hour." },
    { label: "C", text: "Avoid downtown entirely today." },
    { label: "D", text: "Listen for an update before leaving." },
  ],
  correct: "A",
  explanation:
    "'Drivers are advised to take the Route 9 bypass instead until the scene is cleared' — an alternate route, not a delayed departure (B) or avoiding downtown altogether (C). The next update is mentioned only as a general programming note, not as advice to wait for it (D).",
};

const part4aa3: PracticeQuestionData = {
  ...PART4_TRAFFIC_WEATHER,
  question: "What does the forecast suggest for later today?",
  options: [
    { label: "A", text: "Conditions will stay dry through the evening." },
    { label: "B", text: "Rain is expected after the middle of the afternoon." },
    { label: "C", text: "Skies will clear up by midday." },
    { label: "D", text: "A storm will arrive before lunchtime." },
  ],
  correct: "B",
  explanation:
    "'Sunny skies through midday, with rain moving in after four p.m.' — rain arrives well into the afternoon, not before lunch (D), and the evening will not stay dry (A). Skies are sunny in the morning and turn to rain later, rather than clearing at midday (C).",
};

const PART4_TOY_RECALL = {
  prompt: "Part 4 · Short Talks. Listen to the talk and answer the three questions.",
  listening: true as const,
  groupId: "p4-toy-recall",
  audio: { label: "Short talk — Children's toy product recall announcement", durationSec: 0 },
  context:
    "This is an important safety announcement from Brightstar Toys. We are voluntarily recalling our Rainbow Stacker toy, model number RS-204, sold nationwide between January and May of this year, after discovering that a small plastic piece can detach and pose a choking hazard to young children. If you own this product, please stop using it immediately and keep it away from children. Customers can return the toy to any Brightstar retailer for a full refund, no receipt required. For more information, visit our website or call our customer hotline listed on the recall notice.",
};

const part4ab1: PracticeQuestionData = {
  ...PART4_TOY_RECALL,
  question: "Why is the toy being recalled?",
  options: [
    { label: "A", text: "A small piece may come loose and be swallowed." },
    { label: "B", text: "The paint used contains a harmful chemical." },
    { label: "C", text: "The toy fails to meet a size requirement." },
    { label: "D", text: "Sharp edges were found on the packaging." },
  ],
  correct: "A",
  explanation:
    "'A small plastic piece can detach and pose a choking hazard to young children' — a piece coming loose and posing a swallowing risk. Paint (B), sizing (C), and packaging (D) are never mentioned.",
};

const part4ab2: PracticeQuestionData = {
  ...PART4_TOY_RECALL,
  question: "What is implied about customers seeking a refund?",
  options: [
    { label: "A", text: "They must provide proof of purchase." },
    { label: "B", text: "They can return the toy without a receipt." },
    { label: "C", text: "They must return it to the store of purchase." },
    { label: "D", text: "They will receive store credit rather than cash." },
  ],
  correct: "B",
  explanation:
    "Customers 'can return the toy to any Brightstar retailer for a full refund, no receipt required' — no proof of purchase is needed (A), and the return can be made at any retailer, not only the original store (C). A full refund is offered, not store credit (D).",
};

const part4ab3: PracticeQuestionData = {
  ...PART4_TOY_RECALL,
  question: "What should owners do with the toy in the meantime?",
  options: [
    { label: "A", text: "Keep it out of children's reach until it is returned." },
    { label: "B", text: "Continue using it under adult supervision." },
    { label: "C", text: "Remove the loose piece before returning it." },
    { label: "D", text: "Mail it directly to the manufacturer." },
  ],
  correct: "A",
  explanation:
    "Owners are told to 'stop using it immediately and keep it away from children' — not to keep using it even with supervision (B). Nothing is said about removing the piece first (C), and the toy goes to 'any Brightstar retailer', not by mail to the manufacturer (D).",
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
    { label: "C", text: "didn't arrive" },
    { label: "D", text: "wouldn't arrive" },
  ],
  correct: "A",
  explanation:
    "In a first conditional sentence, the if-clause uses the present simple even though it refers to the future, while the main clause uses 'will': 'If the shipment doesn't arrive..., the client will not receive...'. (B) 'won't arrive' incorrectly uses future tense inside the if-clause. (C) 'didn't arrive' (simple past) wrongly treats the arrival as an already-completed past event rather than a future condition. (D) 'wouldn't arrive' is the second-conditional (hypothetical) form and is inconsistent with 'will' in the main clause.",
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

const part5au: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The safety board insisted that every worker ______ a certified helmet before entering the site.",
  options: [
    { label: "A", text: "wears" },
    { label: "B", text: "wear" },
    { label: "C", text: "wearing" },
    { label: "D", text: "to wear" },
  ],
  correct: "B",
  explanation:
    "Verbs expressing demand, suggestion, or insistence (such as 'insisted') trigger the subjunctive mood in a following that-clause, which uses the base form of the verb regardless of the subject: 'insisted that every worker wear'. (A) 'wears' is the ordinary third-person present form and cannot follow this subjunctive pattern. (C) 'wearing' is a gerund/participle and cannot serve as the finite verb of the that-clause. (D) 'to wear' is a to-infinitive, which does not fit the bare subjunctive structure required after 'insisted that'.",
};

const part5av: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The court ordered the manufacturer to pay ______ to the injured customer for the faulty product.",
  options: [
    { label: "A", text: "damage" },
    { label: "B", text: "damages" },
    { label: "C", text: "damaging" },
    { label: "D", text: "damaged" },
  ],
  correct: "B",
  explanation:
    "'Damages' is a countable plural noun with a distinct legal meaning: monetary compensation awarded to a wronged party, which fits 'pay ______ to the injured customer'. (A) 'damage' is an uncountable noun meaning physical harm or destruction, a different sense that does not fit the idiom of paying compensation to a person. (C) 'damaging' is a gerund/present participle, not a noun that can be the direct object of 'pay'. (D) 'damaged' is a past participle/adjective and cannot function as the thing being paid.",
};

const part5aw: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "Applicants may submit their forms ______ online through the portal or in person at the main office.",
  options: [
    { label: "A", text: "either" },
    { label: "B", text: "neither" },
    { label: "C", text: "both" },
    { label: "D", text: "not only" },
  ],
  correct: "A",
  explanation:
    "'Either' pairs correlatively with 'or' to present two alternative options, matching the 'or' later in the sentence: 'either online... or in person...'. (B) 'neither' must be paired with 'nor', not 'or', and would also wrongly negate both options. (C) 'both' pairs with 'and' to join two things simultaneously, not to present alternatives with 'or'. (D) 'not only' pairs with 'but also', which is not the structure completed by 'or' here.",
};

const part5ax: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The manager claimed the report was inaccurate, but the analyst ______ verify every figure before submission.",
  options: [
    { label: "A", text: "does" },
    { label: "B", text: "did" },
    { label: "C", text: "is" },
    { label: "D", text: "was" },
  ],
  correct: "B",
  explanation:
    "This is emphatic do-support in the past tense, used to stress that an action genuinely happened, contradicting the manager's claim: 'the analyst did verify every figure' (auxiliary 'did' + bare verb 'verify'). (A) 'does' is present tense and clashes with the past-tense context established by 'claimed'. (C) 'is' and (D) 'was' cannot combine with the bare verb 'verify' at all, since emphatic verb stress requires a form of 'do', not 'be'.",
};

const part5ay: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "______ the marketing department, not the sales team, that proposed the new advertising campaign.",
  options: [
    { label: "A", text: "It was" },
    { label: "B", text: "There was" },
    { label: "C", text: "This was" },
    { label: "D", text: "That was" },
  ],
  correct: "A",
  explanation:
    "This is a cleft sentence, which uses the fixed pattern 'It was + noun phrase + that...' to emphasize which specific party performed the action: 'It was the marketing department... that proposed...'. (B) 'There was' is used for existential statements about existence or presence, not to emphasize an agent, and does not pair with a following 'that'-clause in this way. (C) 'This was' and (D) 'That was' are demonstrative constructions, not the standard cleft-sentence frame that requires 'It was' before the emphasized noun phrase and 'that' before the clause.",
};

const part5az: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "By the time the fire department arrived, the warehouse fire ______ the entire east wing.",
  options: [
    { label: "A", text: "destroyed" },
    { label: "B", text: "had destroyed" },
    { label: "C", text: "has destroyed" },
    { label: "D", text: "destroys" },
  ],
  correct: "B",
  explanation:
    "When two past events are sequenced with 'by the time', the event that finished earlier takes the past perfect while the later past event takes the simple past: the fire 'had destroyed' the wing before the fire department 'arrived'. (A) 'destroyed' (simple past) would place both events at the same point and fails to show that the destruction was already complete before the firefighters arrived. (C) 'has destroyed' (present perfect) does not fit a narrative anchored entirely in the past. (D) 'destroys' is present tense and cannot describe a completed past event at all.",
};

const part5ba: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "Despite the delay, customers said the new checkout process felt ______ than the old system.",
  options: [
    { label: "A", text: "quick" },
    { label: "B", text: "quickly" },
    { label: "C", text: "quicker" },
    { label: "D", text: "more quickly" },
  ],
  correct: "C",
  explanation:
    "'Feel' functions here as a linking verb, so its subject complement must be an adjective, and the comparison with 'than' requires the comparative form: 'felt quicker'. (A) 'quick' is the correct part of speech but the wrong (positive) degree for a comparison introduced by 'than'. (B) 'quickly' is an adverb, which cannot serve as the subject complement of a linking verb — adverbs modify actions, not the subject itself. (D) 'more quickly' is likewise a comparative adverb and has the same mismatch: linking verbs like 'feel' take adjective complements, not adverbs.",
};

const part5bb: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "______ the quarterly sales data, the analyst noticed an unusual drop in the northern region.",
  options: [
    { label: "A", text: "Having reviewed" },
    { label: "B", text: "Having been reviewed" },
    { label: "C", text: "To have reviewed" },
    { label: "D", text: "Reviewed" },
  ],
  correct: "A",
  explanation:
    "The introductory participial phrase must logically describe the subject of the main clause, 'the analyst', who performed the reviewing before noticing the drop; the active perfect participle 'Having reviewed' correctly attaches to that subject. (B) 'Having been reviewed' is passive and would wrongly imply that the analyst was the one being reviewed, creating a dangling modifier that does not logically attach to 'the analyst'. (C) 'To have reviewed' expresses purpose or a perfect infinitive result, which does not logically connect reviewing the data to noticing a drop. (D) 'Reviewed' alone reads as a passive past participle, again implying the analyst was reviewed rather than the one doing the reviewing, so it dangles in the same way as (B).",
};

const part5bc: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "By the end of next year, the firm ______ over five hundred new employees since its founding.",
  options: [
    { label: "A", text: "will hire" },
    { label: "B", text: "will have hired" },
    { label: "C", text: "has hired" },
    { label: "D", text: "had hired" },
  ],
  correct: "B",
  explanation:
    "The future perfect tense describes an action that will be completed before a specified point in the future, signaled here by 'by the end of next year': 'will have hired'. (A) 'will hire' is simple future and does not indicate that the hiring will already be complete by that future point. (C) 'has hired' (present perfect) cannot project completion into a stated future time frame. (D) 'had hired' (past perfect) marks completion before a past reference point, not a future one, which contradicts 'by the end of next year'.",
};

const part5new1: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "To avoid data loss, the IT team ______ back up the servers every night before the maintenance window closes.",
  options: [
    { label: "A", text: "always should" },
    { label: "B", text: "should always" },
    { label: "C", text: "should be always" },
    { label: "D", text: "always be should" },
  ],
  correct: "B",
  explanation:
    "A mid-position frequency adverb like 'always' is placed after a modal auxiliary and before the base verb: 'should always back up'. (A) 'always should' reverses this standard order, placing the adverb before the modal. (C) 'should be always' wrongly inserts 'be' before a bare action verb that needs no linking verb. (D) 'always be should' is not a grammatical auxiliary sequence at all.",
};

const part5new2: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The proposal received ______ overwhelming support from shareholders that the board approved it without further debate.",
  options: [
    { label: "A", text: "so" },
    { label: "B", text: "too" },
    { label: "C", text: "very" },
    { label: "D", text: "such" },
  ],
  correct: "D",
  explanation:
    "'Such' combines with an adjective + noun phrase ('such overwhelming support') to form the result structure 'such...that'. (A) 'so' can only precede an adjective or adverb alone (e.g., 'so overwhelming'), not an adjective followed by a noun. (B) 'too' expresses excess and does not fit the 'that'-result pattern. (C) 'very' is a plain intensifier and cannot combine with 'that' to introduce a result clause.",
};

const part5new3: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "Thanks to the automated invoicing system, the accounting department now handles ______ paper documents than it did five years ago.",
  options: [
    { label: "A", text: "fewer" },
    { label: "B", text: "less" },
    { label: "C", text: "little" },
    { label: "D", text: "much" },
  ],
  correct: "A",
  explanation:
    "'Documents' is a countable plural noun, so the comparative quantifier for countable nouns, 'fewer', is required. (B) 'less' is the comparative form used for uncountable nouns, not countable plurals. (C) 'little' is a plain (non-comparative) quantifier for uncountable nouns and cannot pair with 'than'. (D) 'much' likewise modifies uncountable nouns and has no comparative form of its own here — it would need to become 'more' to work with 'than'.",
};

const part5new4: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "Maria Chen, ______ of the newly formed compliance division, will oversee all regulatory audits going forward.",
  options: [
    { label: "A", text: "directs" },
    { label: "B", text: "directing" },
    { label: "C", text: "director" },
    { label: "D", text: "direction" },
  ],
  correct: "C",
  explanation:
    "The phrase set off by commas is an appositive renaming 'Maria Chen', so it must be a noun naming her role: 'director'. (A) 'directs' is a conjugated verb and cannot stand as a noun phrase in apposition. (B) 'directing' is a gerund/participle, not a title noun. (D) 'direction' is a noun but refers to the abstract act or guidance itself, not the person's job title, so it cannot rename 'Maria Chen'.",
};

const part5new5: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "Please remember ______ the conference room lights off after the meeting ends this evening.",
  options: [
    { label: "A", text: "turning" },
    { label: "B", text: "to turn" },
    { label: "C", text: "turn" },
    { label: "D", text: "turned" },
  ],
  correct: "B",
  explanation:
    "'Remember + to-infinitive' means to not forget a future obligation, which fits this instruction: 'remember to turn the lights off'. (A) 'turning' (gerund) would instead mean recalling a memory of a past action already performed, the opposite sense needed here. (C) 'turn' is a bare infinitive missing 'to' and cannot follow 'remember' directly. (D) 'turned' is a past tense/participle form and cannot serve as the verb complement of 'remember'.",
};

const part5new6: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "Management decided not to pursue the acquisition ______, citing concerns raised during initial due diligence.",
  options: [
    { label: "A", text: "far" },
    { label: "B", text: "farthest" },
    { label: "C", text: "farther" },
    { label: "D", text: "further" },
  ],
  correct: "D",
  explanation:
    "'Further' is used for figurative or abstract extension, such as continuing to pursue a plan, matching the sense of 'not... any more'. (C) 'Farther' is reserved for literal physical distance and does not fit an abstract business decision. (A) 'far' is the base positive form, not a comparative, and does not fit this context. (B) 'farthest' is a superlative, which is not appropriate since no set of multiple alternatives is being compared.",
};

const part5new7: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "______ efficiently the new scheduling software processes requests, the shorter the customer wait times will be.",
  options: [
    { label: "A", text: "The more" },
    { label: "B", text: "More" },
    { label: "C", text: "The most" },
    { label: "D", text: "So" },
  ],
  correct: "A",
  explanation:
    "The correlative comparative pattern 'the + comparative..., the + comparative...' expresses a proportional relationship: 'The more efficiently..., the shorter...'. (B) 'More' alone omits the required 'the' and cannot form this paired construction. (C) 'The most' is a superlative, not a comparative, so it does not fit the proportional pairing. (D) 'So' does not create the correlative comparative structure at all.",
};

const part5r9a: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "______ the factory reopened after the two-week strike than an electrical fire forced another shutdown.",
  options: [
    { label: "A", text: "No sooner did" },
    { label: "B", text: "Hardly did" },
    { label: "C", text: "No sooner had" },
    { label: "D", text: "No sooner has" },
  ],
  correct: "C",
  explanation:
    "The negative adverbial 'No sooner' triggers subject-auxiliary inversion and is fixed with 'than' (not 'when'), and the clause takes the past perfect to show the reopening was completed just before the fire: 'No sooner had the factory reopened... than...'. (A) 'No sooner did' pairs 'did' with the past-tense form 'reopened', but 'did' requires the bare infinitive 'reopen', making the combination ungrammatical. (B) 'Hardly did' has the same did-plus-past-tense mismatch and, more importantly, 'hardly' correlates with 'when', not 'than'. (D) 'No sooner has' uses the present perfect, which is inconsistent with the past-tense narrative and the simple past 'forced' in the main clause.",
};

const part5r9b: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The plant manager explained that, during last quarter's one-time investigation, the auditors ______ access the archived records without submitting a written request.",
  options: [
    { label: "A", text: "can have" },
    { label: "B", text: "will can" },
    { label: "C", text: "can" },
    { label: "D", text: "could" },
  ],
  correct: "D",
  explanation:
    "Because the reporting verb 'explained' is past tense and describes a one-time, now-concluded arrangement, the modal in the original statement ('can access') must backshift to 'could' in reported speech: 'explained that... the auditors could access...'. (C) 'can' is the unshifted direct-speech form and is inconsistent with the past-tense reporting verb describing a closed episode. (A) 'can have' is not a valid modal-backshift form. (B) 'will can' stacks two modals, which is ungrammatical in standard English.",
};

const part5r9c: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The new mobile app is designed to ______ the company's existing online platform, not replace it.",
  options: [
    { label: "A", text: "complement" },
    { label: "B", text: "compliment" },
    { label: "C", text: "complementary" },
    { label: "D", text: "complimentary" },
  ],
  correct: "A",
  explanation:
    "'Complement' as a verb means to complete or go well with something else, matching the sense that the app works alongside the platform rather than replacing it. (B) 'Compliment' means to praise or express admiration, an unrelated meaning. (C) 'Complementary' is an adjective, not a verb, and cannot follow 'to' in this infinitive verb slot. (D) 'Complimentary' is also an adjective, meaning either 'praising' or 'free of charge', and cannot serve as the main verb here.",
};

const part5r9d: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "To avoid ______ the shipment further, the warehouse team decided to work through the weekend.",
  options: [
    { label: "A", text: "delay" },
    { label: "B", text: "delaying" },
    { label: "C", text: "to delay" },
    { label: "D", text: "delayed" },
  ],
  correct: "B",
  explanation:
    "'Avoid' is followed only by a gerund, never a to-infinitive: 'avoid delaying the shipment'. (A) 'delay' is a bare base form and cannot directly follow 'avoid'. (C) 'to delay' is ungrammatical because 'avoid' does not take a to-infinitive complement. (D) 'delayed' is a past tense/participle form and cannot serve as the object of 'avoid'.",
};

const part5r9e: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The new distribution center can process ______ as many orders as the old facility could.",
  options: [
    { label: "A", text: "double" },
    { label: "B", text: "twice" },
    { label: "C", text: "most" },
    { label: "D", text: "more" },
  ],
  correct: "B",
  explanation:
    "The fixed multiplier expression 'twice as + adjective/quantifier + as' is used to compare two amounts: 'twice as many orders as'. (A) 'double' is a verb/adjective that cannot combine with 'as...as'; it would instead require a phrase like 'double the number of'. (C) 'most' is a superlative and cannot appear in the equal-comparison frame 'as...as'. (D) 'more' requires 'than', not 'as', so it clashes with the second 'as' already in the sentence.",
};

const part5r9f: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The merger ______ finalized before the end of the fiscal year, according to sources close to the negotiations.",
  options: [
    { label: "A", text: "believes to be" },
    { label: "B", text: "is believing to be" },
    { label: "C", text: "is believed to be" },
    { label: "D", text: "believed to being" },
  ],
  correct: "C",
  explanation:
    "The passive reporting pattern 'is believed to be + past participle' is used to present unconfirmed information attributed to a source, without naming the believer: 'The merger is believed to be finalized...'. (A) 'believes' is active and would wrongly require the merger itself to hold a belief. (B) 'is believing' uses 'believe' as a progressive verb, but 'believe' is a stative verb not normally used in continuous forms. (D) 'believed to being' is not a valid infinitive structure.",
};

const part5r9g: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The office manager increased the ______ order to include more envelopes and printer paper.",
  options: [
    { label: "A", text: "stationery" },
    { label: "B", text: "stationary" },
    { label: "C", text: "station" },
    { label: "D", text: "stationed" },
  ],
  correct: "A",
  explanation:
    "'Stationery' refers to paper goods and office supplies, matching 'envelopes and printer paper'. (B) 'Stationary' is an adjective meaning 'not moving' and does not fit a noun slot describing an 'order'. (C) 'Station' means a stopping place or facility and is unrelated to office supplies. (D) 'Stationed' is the past participle of the verb 'to station' (to assign to a post) and cannot modify 'order' as an adjective here.",
};

const part5r9h: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The new logistics platform is considered one of the most ______ tools the company has adopted in recent years.",
  options: [
    { label: "A", text: "more efficient" },
    { label: "B", text: "most efficient" },
    { label: "C", text: "efficiently" },
    { label: "D", text: "efficient" },
  ],
  correct: "D",
  explanation:
    "'Most' already appears in the fixed frame 'one of the most ___ tools', so the blank needs only the plain adjective: 'efficient'. (B) 'most efficient' would wrongly duplicate the superlative marker, producing 'one of the most most efficient tools'. (A) 'more efficient' is a comparative degree, which conflicts with the superlative frame 'one of the most'. (C) 'efficiently' is an adverb and cannot modify the noun 'tools' directly.",
};

const part5r10a: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "By the time the auditors arrived, the accounting staff ______ the discrepancy for nearly two weeks.",
  options: [
    { label: "A", text: "had been investigating" },
    { label: "B", text: "has been investigating" },
    { label: "C", text: "had investigated" },
    { label: "D", text: "were investigating" },
  ],
  correct: "A",
  explanation:
    "The past perfect continuous shows an action that had been ongoing for a stated duration ('for nearly two weeks') before another past event ('the auditors arrived'), so 'had been investigating' is correct. (B) 'has been investigating' (present perfect continuous) cannot anchor to a past reference point like 'by the time... arrived'. (C) 'had investigated' (past perfect simple) emphasizes a completed action rather than the ongoing duration the sentence stresses. (D) 'were investigating' (past continuous) does not show that the action started before the auditors' arrival.",
};

const part5r10b: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The intern's report was not detailed ______ to satisfy the compliance department's strict requirements.",
  options: [
    { label: "A", text: "enough detailed" },
    { label: "B", text: "detailed enough" },
    { label: "C", text: "so enough" },
    { label: "D", text: "too enough" },
  ],
  correct: "B",
  explanation:
    "'Enough' follows the adjective it modifies, so the correct order is 'detailed enough'. (A) 'enough detailed' reverses this fixed word order, placing 'enough' before the adjective it should follow. (C) 'so enough' is not a standard degree structure in English. (D) 'too enough' incorrectly combines two incompatible degree words that cannot be used together.",
};

const part5r10c: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "Repaying only the ______ each month, without any interest, will not reduce the loan term.",
  options: [
    { label: "A", text: "principle" },
    { label: "B", text: "principally" },
    { label: "C", text: "principal" },
    { label: "D", text: "principled" },
  ],
  correct: "C",
  explanation:
    "'Principal' as a noun means the original sum of money borrowed, which fits a loan being repaid apart from interest. (A) 'principle' is a homophone meaning a fundamental rule or belief, an unrelated meaning here. (B) 'principally' is an adverb meaning 'mainly' and cannot serve as the direct object of 'repaying'. (D) 'principled' is an adjective meaning having high moral standards and does not fit the noun slot.",
};

const part5r10d: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The department's success was ______ due to new technology as to the dedication of its staff.",
  options: [
    { label: "A", text: "not only" },
    { label: "B", text: "as much" },
    { label: "C", text: "not as" },
    { label: "D", text: "not so much" },
  ],
  correct: "D",
  explanation:
    "The correlative pattern 'not so much X as Y' downplays the first cause in favor of the second, matching the sentence's contrast between technology and staff dedication. (A) 'not only' correlates with 'but also', not with a following 'as'. (B) 'as much' reverses the required word order and does not create this downplaying contrast. (C) 'not as' is incomplete and does not form the fixed correlative frame needed with the later 'as'.",
};

const part5r10e: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "Shippers are strongly advised to ______ high-value cargo before it leaves the warehouse.",
  options: [
    { label: "A", text: "insure" },
    { label: "B", text: "ensure" },
    { label: "C", text: "assure" },
    { label: "D", text: "assurance" },
  ],
  correct: "A",
  explanation:
    "'Insure' means to arrange financial compensation against loss or damage, which fits protecting cargo with a policy. (B) 'ensure' means to make certain that something happens or is true, not to purchase financial coverage. (C) 'assure' means to tell a person confidently in order to remove their doubts, which requires a person as the object, not cargo. (D) 'assurance' is a noun and cannot function as the main verb after 'to'.",
};

const part5r10f: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "Instead of ______ the entire report, the manager asked her assistant to summarize only the key findings.",
  options: [
    { label: "A", text: "print" },
    { label: "B", text: "to print" },
    { label: "C", text: "printed" },
    { label: "D", text: "printing" },
  ],
  correct: "D",
  explanation:
    "The preposition 'instead of' must be followed by a gerund, so 'printing' is correct. (A) 'print' is a bare base verb, and bare verbs cannot follow a preposition. (B) 'to print' is a to-infinitive, which also cannot directly follow a preposition. (C) 'printed' is a past participle/adjective form and does not fit the noun-like complement a preposition requires.",
};

const part5r10g: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The supervisor rescheduled the meeting to Thursday ______ the remote employees could join without conflicting with their morning shift.",
  options: [
    { label: "A", text: "so as to" },
    { label: "B", text: "so that" },
    { label: "C", text: "in order to" },
    { label: "D", text: "for" },
  ],
  correct: "B",
  explanation:
    "'So that' introduces a purpose clause with its own subject and modal verb ('the remote employees could join'), which is needed because the person benefiting from the purpose differs from the subject of the main clause. (A) 'so as to' and (C) 'in order to' must be followed directly by a bare infinitive, not a new subject and modal, so neither fits before 'the remote employees could join'. (D) 'for' is a preposition and cannot introduce a full clause containing a subject and modal verb.",
};

const part5r10h: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "After several months on the assembly line, the new technicians finally ______ the noise level in the factory.",
  options: [
    { label: "A", text: "used to" },
    { label: "B", text: "use to" },
    { label: "C", text: "got used to" },
    { label: "D", text: "would use to" },
  ],
  correct: "C",
  explanation:
    "'Get used to' (+ noun) means to become accustomed to something over time, matching 'after several months... finally'. (A) 'used to' describes a past habit that no longer happens (e.g., 'used to work here') and does not express adaptation. (B) 'use to' is not a standalone grammatical form outside negative or question auxiliary constructions like 'didn't use to'. (D) 'would use to' is not a valid English structure.",
};

const part5r11a: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "If the humidity in the warehouse ______ above 70 percent, the paper stock begins to warp within hours.",
  options: [
    { label: "A", text: "rises" },
    { label: "B", text: "will rise" },
    { label: "C", text: "rose" },
    { label: "D", text: "has risen" },
  ],
  correct: "A",
  explanation:
    "The zero conditional describes a general, factual result and uses the present simple in both clauses: 'if...rises..., the paper stock begins to warp'. (B) 'will rise' is future tense, which belongs to a first-conditional prediction, not a timeless factual pattern. (C) 'rose' (simple past) wrongly limits the statement to one specific past occasion rather than a general truth. (D) 'has risen' (present perfect) does not fit the timeless, repeatable cause-and-effect relationship being described.",
};

const part5r11b: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "Many employees wish the new expense-reporting software ______ so many confusing steps to submit a simple receipt.",
  options: [
    { label: "A", text: "doesn't require" },
    { label: "B", text: "hasn't required" },
    { label: "C", text: "didn't require" },
    { label: "D", text: "won't require" },
  ],
  correct: "C",
  explanation:
    "'Wish' + past simple expresses a present-time regret or desire for a current reality to be different: 'wish...didn't require'. (A) 'doesn't require' is the plain present-tense fact and cannot follow 'wish' in this pattern, since 'wish' requires a backshifted, hypothetical form. (B) 'hasn't required' (present perfect) does not create the distancing effect this structure needs. (D) 'won't require' is a future/volitional form, not the fixed past-simple form 'wish' takes for present regrets.",
};

const part5r11c: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "While walking the visitors through the facility, the safety officer stopped ______ the location of each fire extinguisher.",
  options: [
    { label: "A", text: "pointing out" },
    { label: "B", text: "point out" },
    { label: "C", text: "having pointed out" },
    { label: "D", text: "to point out" },
  ],
  correct: "D",
  explanation:
    "'Stop + to-infinitive' means to pause one activity in order to do something else; the officer paused the tour to point out the extinguishers: 'stopped to point out'. (A) 'stopped pointing out' (gerund) would instead mean the officer ceased an ongoing activity of pointing things out, reversing the intended meaning. (B) 'point out' is a bare infinitive and cannot follow 'stopped' directly. (C) 'having pointed out' is a perfect participle and does not fit this verb pattern at all.",
};

const part5r11d: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The financial consultant will ______ the executive team on the tax implications of the proposed merger next week.",
  options: [
    { label: "A", text: "advise" },
    { label: "B", text: "advice" },
    { label: "C", text: "advisory" },
    { label: "D", text: "advisable" },
  ],
  correct: "A",
  explanation:
    "'Advise' is the verb meaning to give guidance, fitting directly after the modal 'will': 'will advise the team'. (B) 'advice' is the uncountable noun and cannot function as the main verb after 'will'. (C) 'advisory' is an adjective (or a noun for a formal warning) and cannot serve as a verb here. (D) 'advisable' is an adjective meaning 'wise or sensible to do' and likewise cannot act as the main verb.",
};

const part5r11e: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "All vendors must comply ______ the updated safety standards before shipments to the facility can resume.",
  options: [
    { label: "A", text: "to" },
    { label: "B", text: "with" },
    { label: "C", text: "for" },
    { label: "D", text: "by" },
  ],
  correct: "B",
  explanation:
    "'Comply with' is the fixed collocation meaning to act in accordance with a rule or standard. (A) 'to' does not collocate with 'comply' in standard English. (C) 'for' and (D) 'by' likewise are not the preposition this verb takes; 'comply' requires 'with' regardless of context.",
};

const part5r11f: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "______ the shipment clears customs by Thursday, the product launch event will need to be postponed.",
  options: [
    { label: "A", text: "If" },
    { label: "B", text: "Provided that" },
    { label: "C", text: "Unless" },
    { label: "D", text: "Even if" },
  ],
  correct: "C",
  explanation:
    "'Unless' means 'if...not', so the sentence logically states that the launch will be postponed only if the shipment fails to clear customs: 'Unless...clears..., the event will need to be postponed'. (A) 'If' and (B) 'Provided that' both introduce a positive condition, which would wrongly mean the launch is postponed when the shipment DOES clear customs. (D) 'Even if' signals that the outcome happens regardless of the condition, which contradicts the sentence's clear cause-and-effect logic.",
};

const part5r11g: PracticeQuestionData = {
  prompt: "Part 5 · Choose the word that best completes the sentence.",
  context:
    "The marketing team and the product team consulted ______ extensively before finalizing the joint campaign proposal.",
  options: [
    { label: "A", text: "themselves" },
    { label: "B", text: "the other" },
    { label: "C", text: "others" },
    { label: "D", text: "each other" },
  ],
  correct: "D",
  explanation:
    "'Each other' is a reciprocal pronoun used when two distinct parties act mutually toward one another, matching 'the marketing team and the product team'. (A) 'themselves' is a reflexive pronoun, which would wrongly suggest each team consulted only itself rather than the other team. (B) 'the other' lacks reciprocal meaning and cannot stand alone without 'each' preceding it. (C) 'others' is vague and fails to refer specifically back to the two named teams.",
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

const part6aa: PracticeQuestionData = {
  prompt: "Part 6 · Read the email and choose the best word for the blank.",
  context:
    "From: outreach@brightleaf-industries.com\nTo: all-staff@brightleaf-industries.com\nSubject: Announcing Our First Annual Community Volunteer Day\n\nDear colleagues,\n\nWe are excited to announce that Brightleaf Industries will host its first annual Community Volunteer Day on Saturday, November 14. Employees who participate will not only earn a paid day off but ______ receive a $50 donation match to the charity of their choice. Sign-up sheets are available in the break room and will remain open until November 1. We hope you will join us in giving back to the community that supports our business.\n\nCommunity Outreach Team",
  options: [
    { label: "A", text: "also" },
    { label: "B", text: "too" },
    { label: "C", text: "either" },
    { label: "D", text: "neither" },
  ],
  correct: "A",
  explanation:
    "The fixed correlative construction 'not only X but also Y' requires 'also' to complete the parallel pair begun by 'not only': 'will not only earn a paid day off but also receive a $50 donation match'. (B) 'too' normally appears at the end of a clause (e.g., 'will receive it too') and cannot immediately follow 'but' in this correlative pattern; (C) 'either' pairs with a negative verb ('not... either'), not with 'not only... but'; (D) 'neither' pairs with 'nor', not with 'but', so it cannot combine with 'not only' here.",
};

const part6ab: PracticeQuestionData = {
  prompt: "Part 6 · Read the notice and choose the best word for the blank.",
  context:
    "From: events@meridian-expo-group.com\nTo: exhibitors@meridian-expo-group.com\nSubject: Trade Show Booth Registration Deadline Approaching\n\nDear Exhibitor,\n\nThis is a reminder that all booth registration forms and payment confirmations must be submitted ______ Friday, August 8, to secure your preferred location on the exhibit floor. Booths not confirmed by this date will be released to exhibitors on the waiting list. Please note that setup will begin the following Monday at 7:00 AM, and all displays must be ready before doors open to the public. We look forward to seeing you at this year's show.\n\nMeridian Expo Group",
  options: [
    { label: "A", text: "by" },
    { label: "B", text: "until" },
    { label: "C", text: "since" },
    { label: "D", text: "during" },
  ],
  correct: "A",
  explanation:
    "'By' correctly marks the deadline point by which a one-time action must be completed, as in 'must be submitted by Friday, August 8'. (B) 'until' describes a state or continuous action that persists up to a point and then stops (e.g., 'the office is open until 5 PM'), not a deadline for a single completed action like submitting a form; (C) 'since' marks a starting point already in the past and cannot refer to a future deadline; (D) 'during' requires an ongoing period or event rather than a specific date by which something must be finished.",
};

const part6ac: PracticeQuestionData = {
  prompt: "Part 6 · Read the memo and choose the best word for the blank.",
  context:
    "From: safety-compliance@ironvale-manufacturing.com\nTo: department-managers@ironvale-manufacturing.com\nSubject: Mandatory Fire Drill Compliance Audit\n\nDear Managers,\n\nAs part of our annual safety review, each of the five production departments ______ required to complete a documented fire drill before the end of this month. Please schedule your drill with the safety office at least three business days in advance so that an observer can be present. A copy of the completed evacuation log must be submitted within 24 hours of the drill. Thank you for helping us maintain a safe and compliant workplace.\n\nSafety Compliance Office",
  options: [
    { label: "A", text: "is" },
    { label: "B", text: "are" },
    { label: "C", text: "were" },
    { label: "D", text: "have been" },
  ],
  correct: "A",
  explanation:
    "'Each' is a singular indefinite pronoun and remains the true subject of the clause even when followed by a plural noun phrase, so the verb must stay singular: 'each of the five production departments is required'. (B) 'are' incorrectly agrees with the plural noun 'departments' instead of the singular subject 'each'; (C) 'were' is likewise plural and also shifts to past tense, which does not fit an ongoing requirement; (D) 'have been' is a plural present-perfect form that disagrees with the singular subject 'each' for the same reason as (B).",
};

const part6new1: PracticeQuestionData = {
  prompt: "Part 6 · Read the email and choose the best word for the blank.",
  context:
    "From: customer-service@crestlinefreight.com\nTo: clients@crestlinefreight.com\nSubject: Notice: Delivery Rates to Remain Unchanged\n\nDear Valued Client,\n\nWe would like to inform you that, ______ the recent rise in fuel costs across the shipping industry, Crestline Freight Solutions will keep our standard delivery rates unchanged through the end of the fiscal year. This decision reflects our commitment to providing predictable, affordable service to our long-term partners. We will continue to monitor market conditions and will notify you well in advance of any future adjustments. Thank you for your continued trust in our services.\n\nCustomer Service Team",
  options: [
    { label: "A", text: "Because of" },
    { label: "B", text: "Despite" },
    { label: "C", text: "Although" },
    { label: "D", text: "Even though" },
  ],
  correct: "B",
  explanation:
    "'Despite' is a preposition that must be followed directly by a noun phrase, correctly connecting 'the recent rise in fuel costs' to the main clause without a linking verb, and it captures the intended contrast between rising costs and unchanged rates. (A) 'Because of' is also a preposition that could grammatically precede a noun phrase, but it signals cause-and-effect, which would illogically suggest rates stayed the same because costs rose. (C) 'Although' and (D) 'Even though' are subordinating conjunctions that require a full clause with its own subject and verb (e.g., 'although fuel costs have risen'), not a bare noun phrase, so neither can directly precede 'the recent rise.'",
};

const part6new2: PracticeQuestionData = {
  prompt: "Part 6 · Read the email and choose the best word for the blank.",
  context:
    "From: hiring@solsticetalentpartners.com\nTo: client-partners@solsticetalentpartners.com\nSubject: Candidate Recommendation for Regional Sales Manager\n\nDear Partners,\n\nAfter conducting final interviews with the three shortlisted candidates, our recruiting team has identified Mr. Okafor as the strongest fit for the Regional Sales Manager position. Of the three finalists, he demonstrated the ______ experience leading cross-functional teams in a comparable industry. We recommend moving forward with a formal offer by the end of this week to avoid losing him to a competing offer. Please let us know if you would like to schedule a final reference call before extending the offer.\n\nSolstice Talent Partners",
  options: [
    { label: "A", text: "more" },
    { label: "B", text: "much" },
    { label: "C", text: "most" },
    { label: "D", text: "many" },
  ],
  correct: "C",
  explanation:
    "Comparing one candidate against two others (three finalists total) requires the superlative form, making 'most' correct: 'he demonstrated the most experience... of the three finalists.' (A) 'more' is the comparative form used to compare exactly two items, not three; (B) 'much' can modify the uncountable noun 'experience' but does not express a comparison at all; (D) 'many' is used with countable nouns, but 'experience' in this sense is uncountable, so 'many experience' is ungrammatical.",
};

const part6new3: PracticeQuestionData = {
  prompt: "Part 6 · Read the memo and choose the best word for the blank.",
  context:
    "From: operations@ferrodynamics.com\nTo: production-staff@ferrodynamics.com\nSubject: Automated Sorting Line Now Fully Operational\n\nDear Team,\n\nFollowing the installation of the new automated sorting line last week, employees will now spend ______ time manually inspecting outgoing shipments than they did under the previous process. Early data suggests that manual inspection duties have dropped by roughly half across all three shifts. Supervisors will use the additional time to focus on quality audits and staff training. We will share a full performance report once a full month of data has been collected.\n\nOperations Department",
  options: [
    { label: "A", text: "less" },
    { label: "B", text: "fewer" },
    { label: "C", text: "lesser" },
    { label: "D", text: "few" },
  ],
  correct: "A",
  explanation:
    "'Time' is an uncountable noun, so the comparative quantifier 'less' is required: 'spend less time... than they did under the previous process.' (B) 'fewer' is reserved for comparisons with countable nouns (e.g., fewer shipments) and cannot combine with the uncountable noun 'time'; (C) 'lesser' means smaller in degree or importance and is used to rank a noun (e.g., 'a lesser concern'), not to compare quantities of time; (D) 'few' describes a small countable number on its own and cannot form a comparison with 'than' in this position.",
};

const part6new4: PracticeQuestionData = {
  prompt: "Part 6 · Read the memo and choose the best word for the blank.",
  context:
    "From: compliance@brackenridgelegal.com\nTo: all-staff@brackenridgelegal.com\nSubject: Mandatory Review of Updated Client Confidentiality Handbook\n\nDear Colleagues,\n\nThe firm has revised several sections of the client confidentiality handbook to reflect new data protection regulations that take effect next month. Given the importance of these changes, management strongly recommends that every staff member ______ the updated handbook in full before the compliance deadline on August 15. Employees who have questions about specific provisions should direct them to the compliance office rather than relying on informal guidance from colleagues. A signed acknowledgment form must be submitted to confirm that the handbook has been reviewed.\n\nCompliance Office",
  options: [
    { label: "A", text: "reviews" },
    { label: "B", text: "reviewed" },
    { label: "C", text: "reviewing" },
    { label: "D", text: "review" },
  ],
  correct: "D",
  explanation:
    "After a verb of recommendation such as 'recommends that,' English uses the subjunctive mood, which takes the base form of the verb regardless of the subject, making 'review' correct: 'recommends that every staff member review the updated handbook.' (A) 'reviews' is the third-person-singular present form, which would be expected outside the subjunctive but is not used after 'recommends that'; (B) 'reviewed' is a past-tense form and does not fit the subjunctive construction; (C) 'reviewing' is a gerund/present participle and cannot serve as the main verb of the clause introduced by 'that.'",
};

const part6r9a: PracticeQuestionData = {
  prompt: "Part 6 · Read the memo and choose the best word for the blank.",
  context:
    "From: it-rollout@solara-analytics.com\nTo: warehouse-team@solara-analytics.com\nSubject: New Inventory Tracking System — Rollout Timeline\n\nDear Team,\n\nWe are pleased to share that the new inventory tracking system is currently in its final testing phase across all three warehouses. Once the system ______ fully operational next Tuesday, all staff will be required to log incoming and outgoing shipments exclusively through the new handheld scanners rather than the paper logs currently in use. Training sessions will be held Monday afternoon to ensure everyone feels comfortable with the new devices before the switch takes effect. We appreciate your patience as we transition away from the outdated tracking process. Please direct any questions about the rollout schedule to your shift supervisor.\n\nIT Rollout Team",
  options: [
    { label: "A", text: "will become" },
    { label: "B", text: "becomes" },
    { label: "C", text: "became" },
    { label: "D", text: "becoming" },
  ],
  correct: "B",
  explanation:
    "Time clauses introduced by 'once' that refer to a future event use the present simple, not the future tense, so 'becomes' is correct: 'Once the system becomes fully operational next Tuesday, all staff will be required...' (A) 'will become' incorrectly uses future tense inside a time clause, where English requires the present simple even though the meaning is future; (C) 'became' is simple past and wrongly implies the switch already happened; (D) 'becoming' is a gerund/participle and cannot function as the finite verb of the 'once' clause.",
};

const part6r9b: PracticeQuestionData = {
  prompt: "Part 6 · Read the notice and choose the best word for the blank.",
  context:
    "From: security@kestreltower.com\nTo: all-tenants@kestreltower.com\nSubject: Updated Visitor Access Procedure\n\nDear Tenants,\n\nBeginning next Monday, Kestrel Tower Management will implement a stricter visitor access procedure to improve building security. All visitors, including delivery couriers and outside contractors, must ______ their identification scanned at the front desk before they will be issued a temporary access badge. Tenants who are expecting a visitor should notify the front desk in advance so that check-in can proceed smoothly. Visitors who arrive without prior notice may experience a short delay while staff verify their appointment. We thank you for your cooperation as we work to keep the building secure for everyone.\n\nBuilding Management",
  options: [
    { label: "A", text: "have" },
    { label: "B", text: "having" },
    { label: "C", text: "has" },
    { label: "D", text: "to have" },
  ],
  correct: "A",
  explanation:
    "The causative structure 'have + object + past participle' describes arranging for someone else to perform an action, and after the modal 'must' the base form 'have' is required: 'must have their identification scanned.' (B) 'having' is a gerund/present participle and cannot follow a modal verb directly; (C) 'has' is a third-person-singular form that also cannot follow a modal, which always takes the base form; (D) 'to have' adds an infinitive marker that is ungrammatical directly after a modal verb like 'must.'",
};

const part6r9c: PracticeQuestionData = {
  prompt: "Part 6 · Read the memo and choose the best word for the blank.",
  context:
    "From: marketing@ashgroveretail.com\nTo: store-managers@ashgroveretail.com\nSubject: Q2 Customer Satisfaction Survey Results\n\nDear Store Managers,\n\nThank you to everyone who encouraged customers to complete our Q2 satisfaction survey. The overall results were extremely ______, with 92 percent of respondents rating their shopping experience as good or excellent, a notable increase from last quarter. Several customers specifically praised the new self-checkout kiosks and the shorter average wait times at customer service counters. We will share the full breakdown by store location during next week's regional call. Please pass along our thanks to your teams for their continued efforts to improve the in-store experience.\n\nMarketing Department",
  options: [
    { label: "A", text: "encourage" },
    { label: "B", text: "encouraged" },
    { label: "C", text: "encouraging" },
    { label: "D", text: "encouragement" },
  ],
  correct: "C",
  explanation:
    "The results themselves produce a positive feeling in the reader, so the '-ing' participial adjective is required to describe the cause of that feeling: 'the overall results were extremely encouraging.' (A) 'encourage' is a base-form verb and cannot follow a linking verb like 'were' as a subject complement; (B) 'encouraged' is the '-ed' participial adjective used for a person who experiences a feeling (e.g., 'managers were encouraged by the results'), not for the results themselves; (D) 'encouragement' is a noun, and while nouns can follow 'were,' it would require an article (e.g., 'were an encouragement'), which is missing here.",
};

const part6r9d: PracticeQuestionData = {
  prompt: "Part 6 · Read the memo and choose the best word for the blank.",
  context:
    "From: customerservice@willowmerehomegoods.com\nTo: store-associates@willowmerehomegoods.com\nSubject: Holiday Return Policy Update\n\nDear Associates,\n\nAs the holiday shopping season approaches, we want to make you aware of an important update to our return policy. A number of customers ______ requested an extended return window for gifts purchased during November and December, and starting this year we will offer returns through January 31 instead of the standard 30-day period. Please make sure receipts issued during the holiday season clearly reflect this extended deadline. Associates should also remind customers at checkout that gift receipts are available upon request. We appreciate your help in making this transition smooth for our customers.\n\nCustomer Service Team",
  options: [
    { label: "A", text: "has" },
    { label: "B", text: "is" },
    { label: "C", text: "was" },
    { label: "D", text: "have" },
  ],
  correct: "D",
  explanation:
    "'A number of' functions as a plural quantifier meaning 'several,' so it takes a plural verb agreeing with 'customers,' making 'have requested' correct. (A) 'has' is singular and would incorrectly agree with 'number' as if it were the true subject, a common confusion with the similar but distinct phrase 'the number of,' which does take a singular verb; (B) 'is' is also singular and present tense, mismatched both in number and in failing to form the needed present-perfect verb phrase; (C) 'was' is singular and past tense, which fits neither the plural subject nor the present-perfect structure needed here.",
};

const part6r10a: PracticeQuestionData = {
  prompt: "Part 6 · Read the email and choose the best word for the blank.",
  context:
    "From: projects@cascadebridgeworks.com\nTo: client-relations@cascadebridgeworks.com\nSubject: Riverside Bridge Renovation – Timeline Update\n\nDear Client Relations Team,\n\nThe Riverside Bridge renovation project remains on track despite last month's brief weather delay. By the time the state inspectors arrive next Friday for the final structural review, the crew ______ the reinforcement work on all four support piers, including the protective coating that was added ahead of schedule. This puts us roughly one week ahead of the original timeline. We will send photographs of the completed piers along with the updated inspection checklist by Wednesday. Please let us know if the client would like to schedule a site visit before the inspection date.\n\nProject Management Office",
  options: [
    { label: "A", text: "will have completed" },
    { label: "B", text: "completes" },
    { label: "C", text: "will complete" },
    { label: "D", text: "has completed" },
  ],
  correct: "A",
  explanation:
    "'By the time' introducing a present-tense clause about a future event ('inspectors arrive next Friday') pairs with the future perfect in the main clause to show an action finished before that future point: 'the crew will have completed the reinforcement work'. (B) 'completes' is present simple and does not indicate completion prior to another future event; (C) 'will complete' is simple future and would suggest the action happens at or after the inspection rather than being finished beforehand; (D) 'has completed' is present perfect and cannot combine with a future time frame introduced by 'by the time...next Friday'.",
};

const part6r10b: PracticeQuestionData = {
  prompt: "Part 6 · Read the email and choose the best word for the blank.",
  context:
    "From: training@apexlearningsolutions.com\nTo: all-staff@apexlearningsolutions.com\nSubject: Reminder: Redeem Your Annual Training Credit\n\nDear colleagues,\n\nAs the fiscal year draws to a close, we want to remind everyone that unused training credits expire on September 30 and cannot be carried over into next year. When redeeming your credit through the employee portal, you may choose ______ the online certification bundle or the in-person workshop series, but the credit cannot be split between the two options. Both choices include full access to course materials for twelve months after enrollment. If you have already redeemed your credit this year, no further action is needed. Please reach out to the training team with any questions before the deadline.\n\nApex Learning Solutions",
  options: [
    { label: "A", text: "neither" },
    { label: "B", text: "both" },
    { label: "C", text: "either" },
    { label: "D", text: "each" },
  ],
  correct: "C",
  explanation:
    "'Either' pairs with 'or' to present two mutually exclusive options: 'choose either the online certification bundle or the in-person workshop series'. (A) 'neither' pairs with 'nor' and would create an illogical double negative, since the sentence describes making a choice rather than rejecting both options; (B) 'both' pairs with 'and', not 'or', and contradicts the later statement that 'the credit cannot be split between the two options'; (D) 'each' would need to refer to the two options individually rather than presenting them as alternatives joined by 'or'.",
};

const part6r10c: PracticeQuestionData = {
  prompt: "Part 6 · Read the email and choose the best word for the blank.",
  context:
    "From: marketing@harborfestevents.com\nTo: subscribers@harborfestevents.com\nSubject: Early-Bird Tickets Sold Out\n\nDear Harborfest Subscriber,\n\nThank you to everyone who took part in this year's early-bird ticket promotion for the annual waterfront festival. The response was ______ overwhelming that all early-bird tickets sold out within three days, nearly two weeks ahead of our original schedule. General admission tickets will go on sale next Monday at the standard price, and we encourage you to purchase early given the strong demand. A limited number of VIP packages, including reserved seating and backstage access, will also be released at that time. We appreciate your continued support of the festival each year.\n\nHarborfest Events Marketing Team",
  options: [
    { label: "A", text: "very" },
    { label: "B", text: "too" },
    { label: "C", text: "such" },
    { label: "D", text: "so" },
  ],
  correct: "D",
  explanation:
    "'So' pairs with an adjective ('overwhelming') followed by a 'that' clause expressing result: 'so overwhelming that all early-bird tickets sold out within three days'. (A) 'very' can intensify an adjective but cannot be followed by a 'that' result clause; (B) 'too' implies an excess that prevents something and typically pairs with an infinitive ('too crowded to enter'), not a 'that' clause of result; (C) 'such' must be followed by a noun phrase (e.g., 'such an overwhelming response'), not directly by an adjective alone.",
};

const part6r10d: PracticeQuestionData = {
  prompt: "Part 6 · Read the memo and choose the best word for the blank.",
  context:
    "From: quality-assurance@graniteridgefoods.com\nTo: production-staff@graniteridgefoods.com\nSubject: Q3 Sanitation Audit Findings\n\nDear Team,\n\nThe third-quarter sanitation audit identified a recurring buildup of residue on packaging equipment during late-afternoon shifts. To reduce contamination risk going forward, the audit team suggests ______ all packaging equipment before each shift rather than only at the beginning of the week. This adjustment is expected to bring residue levels back within the range required for our food safety certification. Shift supervisors will receive an updated cleaning checklist by Friday, and a brief refresher training will be held next Tuesday. We appreciate everyone's attention to this matter as we work to maintain our certification standing.\n\nQuality Assurance Department",
  options: [
    { label: "A", text: "sanitize" },
    { label: "B", text: "sanitizing" },
    { label: "C", text: "to sanitize" },
    { label: "D", text: "sanitized" },
  ],
  correct: "B",
  explanation:
    "The verb 'suggest' takes a gerund complement rather than an infinitive, making 'sanitizing' correct: 'the audit team suggests sanitizing all packaging equipment before each shift'. (A) 'sanitize' is a bare base form and cannot directly follow 'suggests' without 'to' or '-ing'; (C) 'to sanitize' uses an infinitive, but 'suggest' does not take a to-infinitive complement (unlike verbs such as 'want' or 'decide'); (D) 'sanitized' is a past participle and cannot serve as the object of 'suggests' in this position.",
};

const part6r11a: PracticeQuestionData = {
  prompt: "Part 6 · Read the email and choose the best word for the blank.",
  context:
    "From: operations@thornbury-freight.com\nTo: regional-managers@thornbury-freight.com\nSubject: Q3 Customer Complaint Trends\n\nDear Regional Managers,\n\nOur data team has completed the quarterly service review, and overall performance remains strong across most routes. However, the number of complaints related to late deliveries ______ risen sharply in the northern region, prompting a closer look at driver scheduling there. We will hold a call this Thursday to discuss possible causes, including recent staffing changes and weather disruptions. Please come prepared to share any relevant observations from your own routes. Your continued attention to this issue is greatly appreciated.\n\nOperations Analytics Team",
  options: [
    { label: "A", text: "have" },
    { label: "B", text: "has" },
    { label: "C", text: "were" },
    { label: "D", text: "are" },
  ],
  correct: "B",
  explanation:
    "'The number of' takes a singular verb because 'number' (not the noun that follows 'of') is the true subject, making 'has risen' correct — this is the reverse of the quantifier 'a number of,' which takes a plural verb. (A) 'have' incorrectly agrees with the plural noun 'complaints' instead of the singular subject 'number'; (C) 'were' is plural and past tense, matching neither the subject nor the present-perfect structure; (D) 'are' is likewise plural and present tense, not present perfect, so it cannot pair with 'risen.'",
};

const part6r11b: PracticeQuestionData = {
  prompt: "Part 6 · Read the memo and choose the best word for the blank.",
  context:
    "From: hr@millhaven-textiles.com\nTo: floor-supervisors@millhaven-textiles.com\nSubject: Shift Pattern Background for New Hires\n\nDear Supervisors,\n\nAs you onboard the newest group of floor workers, it may help to explain how our scheduling has evolved over time. The plant ______ run a single ten-hour shift each day, but after last year's expansion we now operate three overlapping eight-hour shifts to keep the machines running around the clock. New hires sometimes ask why longtime staff describe such a different daily routine, and this background should clear up the confusion. Please share this context during your first orientation session with each new group. Thank you for helping new employees understand how far the plant has come.\n\nHuman Resources",
  options: [
    { label: "A", text: "use to" },
    { label: "B", text: "uses to" },
    { label: "C", text: "used to" },
    { label: "D", text: "was used to" },
  ],
  correct: "C",
  explanation:
    "'Used to + base verb' describes a repeated past habit or state that no longer holds true, correctly contrasting the old single-shift pattern with today's three-shift system: 'The plant used to run a single ten-hour shift.' (A) 'use to' drops the required past-tense marker '-d'; (B) 'uses to' incorrectly adds a third-person '-s' to this invariable expression; (D) 'was used to' means 'was accustomed to' and would require a gerund ('was used to running'), not the base verb 'run' that follows the blank.",
};

const part6r11c: PracticeQuestionData = {
  prompt: "Part 6 · Read the email and choose the best word for the blank.",
  context:
    "From: it@brookstone-analytics.com\nTo: department-heads@brookstone-analytics.com\nSubject: New Data Dashboard Rollout\n\nDear Department Heads,\n\nOver the past three months, our engineering team has built a new reporting dashboard that consolidates sales, support, and inventory data into a single view. We are rolling out the tool company-wide next week ______ reduce the time managers currently spend compiling separate spreadsheets from multiple systems. A short training video will be sent to all department heads on Monday morning, and live Q&A sessions will be held throughout the week. Please encourage your teams to complete the video before their first login. We are confident this change will save valuable time across every department.\n\nIT Department",
  options: [
    { label: "A", text: "for" },
    { label: "B", text: "so" },
    { label: "C", text: "for to" },
    { label: "D", text: "to" },
  ],
  correct: "D",
  explanation:
    "The infinitive of purpose 'to reduce' explains why the dashboard is being rolled out, as in 'rolling out the tool... to reduce the time managers currently spend.' (A) 'for' would require a noun or gerund object ('for reducing'), not the bare base verb 'reduce'; (B) 'so' alone cannot introduce a purpose infinitive without 'as to' or 'that'; (C) 'for to' is not standard English and is never used to mark purpose.",
};

const part6r11d: PracticeQuestionData = {
  prompt: "Part 6 · Read the email and choose the best word for the blank.",
  context:
    "From: partnerdevelopment@ravenscroft-legal.com\nTo: associates@ravenscroft-legal.com\nSubject: Welcome Our New Senior Litigation Consultant\n\nDear Associates,\n\nWe are pleased to announce that Diane Okoro will join the firm next month as Senior Litigation Consultant. Diane, ______ the partners interviewed extensively over the past two months, brings more than fifteen years of experience in commercial litigation from her previous role at a national firm. She will initially focus on mentoring junior associates while managing a small caseload of her own. Please join us for an informal welcome reception in the second-floor lounge on her first day. We are confident her expertise will strengthen our litigation practice considerably.\n\nPartner Development Committee",
  options: [
    { label: "A", text: "whom" },
    { label: "B", text: "who" },
    { label: "C", text: "which" },
    { label: "D", text: "whose" },
  ],
  correct: "A",
  explanation:
    "'Whom' is required because it functions as the object of 'interviewed' within the non-restrictive clause ('the partners interviewed her'), not as the subject. (B) 'who' is a subject relative pronoun and would need the clause reversed ('who interviewed the partners') to fit; (C) 'which' refers to things, not people, and cannot stand for Diane; (D) 'whose' is possessive and must be followed by a noun (e.g., 'whose résumé'), not directly by a subject and verb like 'the partners interviewed.'",
};

const part6r11e: PracticeQuestionData = {
  prompt: "Part 6 · Read the email and choose the best word for the blank.",
  context:
    "From: events@goldcrest-eventsgroup.com\nTo: sponsors@goldcrest-eventsgroup.com\nSubject: Spring Gala Attendance Summary\n\nDear Sponsors,\n\nThank you again for supporting this year's Spring Gala. Preliminary numbers show that attendance was nearly as strong ______ last year's record-breaking turnout, falling short by only a few dozen guests. Even so, total donations exceeded last year's figures by nearly ten percent, thanks to a higher average contribution per guest. We will share the full financial summary once all outstanding pledges have been collected. Thank you again for your generosity and continued partnership.\n\nGoldcrest Events Group",
  options: [
    { label: "A", text: "than" },
    { label: "B", text: "as" },
    { label: "C", text: "that" },
    { label: "D", text: "like" },
  ],
  correct: "B",
  explanation:
    "The equative structure 'as + adjective + as' requires a second 'as' to complete the comparison of equal degree: 'nearly as strong as last year's record-breaking turnout.' (A) 'than' pairs with a comparative adjective (e.g., 'stronger than'), not with 'as,' and does not fit the 'as strong' construction already begun; (C) 'that' does not complete an equative comparison; (D) 'like' can introduce a comparison but cannot pair with a preceding 'as... ' to form the fixed 'as...as' pattern.",
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

const part7bc: PracticeQuestionData = {
  prompt: "Part 7 · Read the dividend notice and answer the question.",
  context:
    "ANNUAL MEMBER DIVIDEND NOTICE\nRiverbend Community Co-op\n\nDear Member,\n\nBased on your household's purchases between January 1 and December 31, you have earned a patronage dividend of $86.40. Consistent with co-op policy, dividends are issued automatically as store credit to your membership account within 10 business days of this notice.\n\nIf you would prefer to receive your dividend as a mailed check instead, you must submit a request through the member portal at riverbendcoop.org/account by March 1. Requests submitted after this date will be applied to next year's dividend distribution instead.\n\nQuestion: How will a member's dividend be issued if they take no action?",
  options: [
    { label: "A", text: "As a mailed check within 10 business days" },
    { label: "B", text: "As store credit to their membership account" },
    { label: "C", text: "As a discount on next year's membership fee" },
    { label: "D", text: "As cash at the register on their next visit" },
  ],
  correct: "B",
  explanation:
    "The notice states that dividends 'are issued automatically as store credit to your membership account within 10 business days', so (B) is correct.",
};

const part7bd: PracticeQuestionData = {
  prompt: "Part 7 · Read the appointment reminder and answer the question.",
  context:
    "APPOINTMENT REMINDER\nBrightsmile Dental Group\n\nDear Mr. Okafor,\n\nThis is a reminder of your upcoming cleaning and checkup appointment on Thursday, August 6, at 10:30 A.M. with Dr. Reyes. Please arrive 10 minutes early to complete an updated medical history form.\n\nOur office requires at least 24 hours' notice for any cancellation or rescheduling. Appointments canceled with less than 24 hours' notice, or missed entirely, will be charged a $50 late-cancellation fee, which must be paid before any future appointment can be scheduled.\n\nQuestion: What will happen if Mr. Okafor cancels his appointment with less than 24 hours' notice?",
  options: [
    { label: "A", text: "He will be charged a $50 late-cancellation fee" },
    { label: "B", text: "He will lose his place with Dr. Reyes permanently" },
    { label: "C", text: "He will be automatically rebooked for the same time next week" },
    { label: "D", text: "He will be required to find a new dental provider" },
  ],
  correct: "A",
  explanation:
    "The reminder states appointments 'canceled with less than 24 hours' notice ... will be charged a $50 late-cancellation fee', so (A) is correct.",
};

const part7be: PracticeQuestionData = {
  prompt: "Part 7 · Read the account tier change notice and answer the question.",
  context:
    "ACCOUNT TIER CHANGE NOTICE\nPixelDraft Software\n\nDear Ms. Lindqvist,\n\nBecause payment could not be processed for your Pro plan, your account has been moved to the free Basic tier, effective immediately. Basic tier accounts are limited to 5 GB of cloud storage, down from the 500 GB included with Pro.\n\nAny files you have stored beyond the new 5 GB limit remain safely archived, but they are now read-only and cannot be edited, downloaded, or shared until you upgrade back to Pro and bring your storage usage within the paid limit.\n\nQuestion: What can be inferred about a Basic tier account holder whose stored files exceed 5 GB?",
  options: [
    { label: "A", text: "Their excess files will be permanently deleted after 30 days" },
    { label: "B", text: "They cannot edit their excess files unless they upgrade back to Pro" },
    { label: "C", text: "They will be charged a storage overage fee automatically" },
    { label: "D", text: "Their account will be suspended entirely until they pay" },
  ],
  correct: "B",
  explanation:
    "The notice states that files beyond the 5 GB limit 'are now read-only and cannot be edited, downloaded, or shared until you upgrade back to Pro', so it can be inferred that such a user cannot edit their excess files without upgrading, making (B) correct.",
};

const part7bf: PracticeQuestionData = {
  prompt: "Part 7 · Read the lien sale notice and answer the question.",
  context:
    "NOTICE OF LIEN SALE\nSecure Stack Storage — Unit #214\n\nDear Mr. Bianchi,\n\nOur records show that Unit #214 has an outstanding balance of $410 in unpaid rent, dating back 3 months. In accordance with the terms of your rental agreement, the contents of this unit will be sold at public auction on September 12 to satisfy the lien unless the full balance is paid before that date.\n\nPayment may be made online, by phone, or in person at the facility office. Partial payments will not stop the scheduled auction; the entire $410 balance must be received in full before September 12.\n\nQuestion: What must Mr. Bianchi do to prevent the auction of his unit's contents?",
  options: [
    { label: "A", text: "Submit a partial payment before September 12" },
    { label: "B", text: "Pay the full $410 balance before September 12" },
    { label: "C", text: "Sign a new rental agreement for a smaller unit" },
    { label: "D", text: "Request an extension from the facility manager" },
  ],
  correct: "B",
  explanation:
    "The notice states the contents will be sold 'unless the full balance is paid before that date' and clarifies 'the entire $410 balance must be received in full before September 12', so (B) is correct.",
};

const part7bg: PracticeQuestionData = {
  prompt: "Part 7 · Read the pricing update and answer the question.",
  context:
    "PRICING UPDATE\nCityCycle Bike Share\n\nDear Rider,\n\nEffective October 1, the monthly membership fee for CityCycle will increase from $15 to $19. Members will continue to receive unlimited 30-minute rides at no extra charge; however, the per-minute overage rate for rides exceeding 30 minutes will rise from $0.10 to $0.15 per minute.\n\nAnnual members are not affected by this change until their next renewal date, at which point the new rates will apply to their renewed membership.\n\nQuestion: When will the new overage rate take effect for a monthly member?",
  options: [
    { label: "A", text: "Only after their current 30-minute ride ends" },
    { label: "B", text: "Starting October 1" },
    { label: "C", text: "At their next annual renewal date" },
    { label: "D", text: "Only if they exceed the ride limit twice in one month" },
  ],
  correct: "B",
  explanation:
    "The update states the changes, including the new overage rate, are 'effective October 1' for monthly members, so (B) is correct.",
};

const part7bh: PracticeQuestionData = {
  prompt: "Part 7 · Read the landlord's response letter and answer the question.",
  context:
    "Re: Maintenance Request #M-2291 — Leaking Kitchen Faucet\n\nDear Ms. Whitfield,\n\nThank you for submitting your maintenance request regarding the leaking kitchen faucet in Unit 6. A plumber has been scheduled to visit within 3 business days to complete the repair. Someone will need to be present to provide access, or you may leave a key with the building office.\n\nPlease note that this request has been classified as non-emergency, since it does not affect the unit's habitability. Emergency requests, such as a complete loss of heat or active flooding, are handled within 24 hours rather than the standard 3-business-day window.\n\nQuestion: What can be inferred about maintenance requests classified as emergencies?",
  options: [
    { label: "A", text: "They are handled more quickly than non-emergency requests" },
    { label: "B", text: "They require the tenant to be present at all times" },
    { label: "C", text: "They are only accepted during business hours" },
    { label: "D", text: "They result in a rent reduction for the tenant" },
  ],
  correct: "A",
  explanation:
    "The letter states this non-emergency request will be addressed 'within 3 business days', while 'emergency requests ... are handled within 24 hours rather than the standard 3-business-day window', so it can be inferred emergencies are handled more quickly, making (A) correct.",
};

const part7bi: PracticeQuestionData = {
  prompt: "Part 7 · Read the speaker confirmation letter and answer the question.",
  context:
    "SPEAKER CONFIRMATION\nTechForward Summit 2026\n\nDear Dr. Anand,\n\nWe are pleased to confirm your speaking slot at TechForward Summit, scheduled for 2:00-2:45 P.M. on November 12 in the Grand Ballroom. Your honorarium of $500 will be paid by check within 30 days after the event concludes.\n\nTo allow time for printed program materials, please submit your final presentation slides no later than November 1. Travel expenses will be reimbursed up to $300 upon submission of itemized receipts after the event.\n\nQuestion: What must Dr. Anand do before November 1?",
  options: [
    { label: "A", text: "Submit itemized travel receipts" },
    { label: "B", text: "Submit her final presentation slides" },
    { label: "C", text: "Confirm her hotel reservation" },
    { label: "D", text: "Deposit her honorarium check" },
  ],
  correct: "B",
  explanation:
    "The letter states 'please submit your final presentation slides no later than November 1', so (B) is correct.",
};

const part7bj: PracticeQuestionData = {
  prompt: "Part 7 · Read the delivery schedule change and answer the question.",
  context:
    "CSA DELIVERY SCHEDULE CHANGE\nGreen Valley Farm Share\n\nDear Member,\n\nStarting the week of July 6, your weekly produce box delivery day will change from Wednesday to Friday due to a new distribution route. Box contents and pricing remain unchanged.\n\nBoxes are left at your designated pickup site and must be collected within 24 hours of drop-off. Boxes not picked up within this window will be donated to the Green Valley Food Bank, and members will not be eligible for a replacement or refund for that week.\n\nQuestion: What will happen if a member does not pick up their box within 24 hours of drop-off?",
  options: [
    { label: "A", text: "The box will be redelivered the following day" },
    { label: "B", text: "The box will be donated to the food bank" },
    { label: "C", text: "The member will be charged a storage fee" },
    { label: "D", text: "The member's membership will be paused" },
  ],
  correct: "B",
  explanation:
    "The notice states boxes 'not picked up within this window will be donated to the Green Valley Food Bank', so (B) is correct.",
};

const part7bk: PracticeQuestionData = {
  prompt: "Part 7 · Read the cancellation policy update and answer the question.",
  context:
    "MEMBERSHIP CANCELLATION POLICY UPDATE\nIronclad Fitness\n\nDear Member,\n\nTo cancel your membership, you must submit written notice at least 30 days in advance. Members who cancel in the middle of a billing cycle are not entitled to a prorated refund for the remaining days of that cycle.\n\nThe one exception applies to medical cancellations: members who submit a doctor's note confirming they are unable to continue exercising will receive a prorated refund for the unused portion of their current billing cycle, in addition to being released from the 30-day notice requirement.\n\nQuestion: What can be inferred about a member who cancels for a documented medical reason?",
  options: [
    { label: "A", text: "They may receive a prorated refund unlike other canceling members" },
    { label: "B", text: "They must still provide 30 days' written notice" },
    { label: "C", text: "They are required to pay a medical cancellation fee" },
    { label: "D", text: "They are ineligible to rejoin the gym in the future" },
  ],
  correct: "A",
  explanation:
    "The update states medical cancellations 'will receive a prorated refund for the unused portion of their current billing cycle', unlike standard cancellations which 'are not entitled to a prorated refund', so (A) is correct.",
};

const part7bl: PracticeQuestionData = {
  prompt: "Part 7 · Read the invoice and answer the question.",
  context:
    'INVOICE #INV-3348\nClara Voss Graphic Design\n\nBill To: Marlowe & Finch Publishing\nAmount Due: $1,200\nDue Date: Net 15 days from invoice date\n\nServices: Book cover design and 2 rounds of revisions for "The Quiet Harbor"\n\nPayment must be received within 15 days of this invoice. Late payments will accrue interest at a rate of 1.5% per month on the outstanding balance. Please note that full usage rights and the final design files will not transfer to the client until payment is received in full.\n\nQuestion: What happens to the design files if payment is not received in full?',
  options: [
    { label: "A", text: "They are automatically deleted after 15 days" },
    { label: "B", text: "Usage rights and final files do not transfer to the client" },
    { label: "C", text: "They are sold to a different publisher" },
    { label: "D", text: "They are released at half resolution" },
  ],
  correct: "B",
  explanation:
    "The invoice states 'full usage rights and the final design files will not transfer to the client until payment is received in full', so (B) is correct.",
};

const part7bm: PracticeQuestionData = {
  prompt: "Part 7 · Read the inspection report summary and answer the question.",
  context:
    "HOME INSPECTION REPORT SUMMARY\n42 Willow Lane\n\nOverall Condition: Good\n\nRoof: Asphalt shingles show normal wear; estimated 5 years of useful life remaining. No active leaks observed.\n\nWater Heater: Unit is 11 years old and showing signs of corrosion at the base. Replacement is recommended within the next 12 months to avoid the risk of sudden failure.\n\nElectrical Panel: Panel is up to current code and shows no signs of overloading.\n\nQuestion: What does the report recommend regarding the water heater?",
  options: [
    { label: "A", text: "It should be replaced within the next 12 months" },
    { label: "B", text: "It should be inspected again in 5 years" },
    { label: "C", text: "It needs to be relocated away from the electrical panel" },
    { label: "D", text: "It should be repaired immediately due to an active leak" },
  ],
  correct: "A",
  explanation:
    "The report states 'Replacement is recommended within the next 12 months to avoid the risk of sudden failure', so (A) is correct.",
};

const part7bn: PracticeQuestionData = {
  prompt: "Part 7 · Read the scholarship renewal requirements and answer the question.",
  context:
    "SCHOLARSHIP RENEWAL REQUIREMENTS\nHartwell Merit Scholarship\n\nDear Recipient,\n\nTo renew your Hartwell Merit Scholarship each year, you must maintain a cumulative GPA of at least 3.0 and complete a minimum of 12 credit hours per semester. Students whose GPA falls below 3.0 for one semester are placed on probation and given one additional semester to raise their GPA before the scholarship is withdrawn.\n\nHowever, students who complete fewer than 12 credit hours in a semester lose the scholarship immediately, with no probation period offered, since full-time enrollment is considered a non-negotiable condition of the award.\n\nQuestion: What can be inferred about a student who completes only 9 credit hours in a semester?",
  options: [
    { label: "A", text: "They will be placed on probation for one semester" },
    { label: "B", text: "They will lose the scholarship immediately, without probation" },
    { label: "C", text: "They will keep the scholarship if their GPA is above 3.0" },
    { label: "D", text: "They will be given an extra semester to reach 12 credit hours" },
  ],
  correct: "B",
  explanation:
    "The notice states students who complete fewer than 12 credit hours 'lose the scholarship immediately, with no probation period offered', so (B) is correct.",
};

const part7bo: PracticeQuestionData = {
  prompt: "Part 7 · Read the driver account update and answer the question.",
  context:
    "DRIVER ACCOUNT UPDATE\nSwiftRide\n\nDear Driver,\n\nAs part of our annual safety review, your driver account has been temporarily suspended pending completion of your required background check renewal. This is a routine process applied to all drivers on their account anniversary.\n\nTo restore your ability to accept rides, please submit the enclosed consent form through the SwiftRide driver app within 10 days. Accounts that remain incomplete after 10 days will be deactivated and will require a new driver application to reapply.\n\nQuestion: What must the driver do within 10 days to avoid deactivation?",
  options: [
    { label: "A", text: "Complete a new driver application" },
    { label: "B", text: "Submit the consent form through the driver app" },
    { label: "C", text: "Pay a reactivation fee" },
    { label: "D", text: "Attend an in-person safety training session" },
  ],
  correct: "B",
  explanation:
    "The update states drivers should 'submit the enclosed consent form through the SwiftRide driver app within 10 days' to restore their account, so (B) is correct.",
};

const part7bp: PracticeQuestionData = {
  prompt: "Part 7 · Read the gift membership confirmation and answer the question.",
  context:
    "GIFT MEMBERSHIP CONFIRMATION\nBellmont Science Museum\n\nDear Ms. Ferreira,\n\nThank you for purchasing a Family Gift Membership for Mr. and Mrs. Delgado. The membership provides unlimited free admission for two adults and up to three children for 12 months, beginning on the date the recipient activates it online, not the purchase date.\n\nThe recipient must activate the membership at bellmontmuseum.org/activate within 6 months of the purchase date, or the gift will be forfeited and no refund will be issued.\n\nQuestion: What must the recipient do within 6 months of the purchase date?",
  options: [
    { label: "A", text: "Visit the museum in person to receive membership cards" },
    { label: "B", text: "Activate the membership online" },
    { label: "C", text: "Pay a renewal fee to keep the membership active" },
    { label: "D", text: "Register all children who will be included" },
  ],
  correct: "B",
  explanation:
    "The confirmation states the recipient 'must activate the membership at bellmontmuseum.org/activate within 6 months of the purchase date, or the gift will be forfeited', so (B) is correct.",
};

const part7bq: PracticeQuestionData = {
  prompt: "Part 7 · Read the bulk order pricing notice and answer the question.",
  context:
    "BULK ORDER PRICING\nQuickPress Print Shop\n\nOur bulk discount tiers apply as follows: 100-499 copies receive 10% off, 500-999 copies receive 15% off, and orders of 1,000 copies or more receive 20% off. Discounts are calculated per invoice.\n\nPlease note that bulk pricing applies only to orders of a single design printed in one run. Quantities of different designs submitted together in the same order are billed separately at standard pricing and are not combined to reach a higher discount tier.\n\nQuestion: What can be inferred about a customer who orders 200 copies each of three different flyer designs in one order?",
  options: [
    { label: "A", text: "The combined 600 copies will qualify for the 15% discount tier" },
    { label: "B", text: "Each design will be billed separately at standard pricing" },
    { label: "C", text: "The order will automatically qualify for the highest discount tier" },
    { label: "D", text: "The customer must reduce the order to a single design to be printed" },
  ],
  correct: "B",
  explanation:
    "The notice states bulk pricing 'applies only to orders of a single design' and that quantities of different designs 'are not combined to reach a higher discount tier', so each of the three 200-copy designs would be billed separately at standard pricing, making (B) correct.",
};

const part7br: PracticeQuestionData = {
  prompt: "Part 7 · Read the follow-up letter and answer the question.",
  context:
    "POST-ADOPTION FOLLOW-UP\nSecond Chance Animal Rescue\n\nDear Mr. and Mrs. Park,\n\nWe hope Max is settling in well with your family! As part of your adoption package, Max is enrolled in 30 days of free pet insurance, effective from his adoption date.\n\nPlease schedule a wellness checkup with a veterinarian within 14 days of adoption to ensure Max's vaccinations remain up to date; this appointment can be booked at any clinic of your choosing. If you would like a free behavior training session, simply request one within 60 days of adoption by replying to this email.\n\nQuestion: What must the Parks do within 14 days of Max's adoption?",
  options: [
    { label: "A", text: "Request a free behavior training session" },
    { label: "B", text: "Schedule a wellness checkup with a veterinarian" },
    { label: "C", text: "Renew Max's pet insurance policy" },
    { label: "D", text: "Return a signed adoption agreement" },
  ],
  correct: "B",
  explanation:
    "The letter states 'Please schedule a wellness checkup with a veterinarian within 14 days of adoption', so (B) is correct.",
};

const part7bs: PracticeQuestionData = {
  prompt: "Part 7 · Read the special assessment notice and answer the question.",
  context:
    "SPECIAL ASSESSMENT NOTICE\nLakeshore Towers Condominium Association\n\nDear Owner,\n\nThe Board has approved a special assessment of $2,400 per unit to fund the replacement of both building elevators, which are original to the 1998 construction. The full assessment is due by November 1.\n\nOwners who are unable to pay the full amount at once may instead choose a 6-month installment plan of $400 per month; however, owners who select the installment plan will have a 5% financing fee added to their total assessment amount.\n\nQuestion: What will happen to owners who choose the installment plan?",
  options: [
    { label: "A", text: "They will pay a lower total amount than the lump-sum payment" },
    { label: "B", text: "A 5% financing fee will be added to their total assessment" },
    { label: "C", text: "Their monthly condo fees will be waived during the repayment period" },
    { label: "D", text: "They will be required to attend a special board meeting" },
  ],
  correct: "B",
  explanation:
    "The notice states owners who select the installment plan 'will have a 5% financing fee added to their total assessment amount', so (B) is correct.",
};

const part7bt: PracticeQuestionData = {
  prompt: "Part 7 · Read the placement test results letter and answer the question.",
  context:
    "PLACEMENT TEST RESULTS\nGlobal Bridge Language Academy\n\nDear Ms. Kowalczyk,\n\nBased on your written and oral placement test scores, you have been placed at the Intermediate level and enrolled in Level 3: Intermediate Grammar and Conversation, beginning September 8.\n\nStudents who score at the Advanced level on the placement test are placed directly into Level 5 and are not required to complete Level 4: Conversation Intensive, which is designed specifically for students transitioning from Intermediate to Advanced proficiency.\n\nQuestion: What can be inferred about students who score at the Advanced level on the placement test?",
  options: [
    { label: "A", text: "They must still complete Level 4: Conversation Intensive" },
    { label: "B", text: "They are placed directly into Level 5 without taking Level 4" },
    { label: "C", text: "They are required to retake the placement test" },
    { label: "D", text: "They are exempt from all further coursework" },
  ],
  correct: "B",
  explanation:
    "The letter states Advanced-level students 'are placed directly into Level 5 and are not required to complete Level 4', so (B) is correct.",
};

const part7bu: PracticeQuestionData = {
  prompt: "Part 7 · Read the warranty extension offer and answer the question.",
  context:
    "EXTENDED WARRANTY OFFER\nAutoGuard Protection Plans\n\nDear Mr. Nowak,\n\nYour vehicle's original manufacturer warranty (3 years or 36,000 miles) is nearing its expiration. We are pleased to offer you the opportunity to extend your coverage an additional 2 years or 24,000 miles, whichever comes first, for a one-time fee of $895.\n\nThis extended plan covers the engine, transmission, and drivetrain (powertrain components) but does not include electronics, such as the infotainment system or sensors. This offer must be purchased before your original warranty expires; it cannot be added afterward.\n\nQuestion: What is NOT covered under the extended warranty plan?",
  options: [
    { label: "A", text: "The engine" },
    { label: "B", text: "The transmission" },
    { label: "C", text: "The infotainment system" },
    { label: "D", text: "The drivetrain" },
  ],
  correct: "C",
  explanation:
    "The offer states the plan 'does not include electronics, such as the infotainment system or sensors', so (C) is correct.",
};

const part7bv: PracticeQuestionData = {
  prompt: "Part 7 · Read the customization notice and answer the question.",
  context:
    'CUSTOMIZE YOUR BOX\nTasteCrate Snack Subscription\n\nHi Amara,\n\nYour next TasteCrate box ships on the 15th of each month. You may customize your box by swapping up to 3 items through your online account, but the customization window closes 5 days before the ship date.\n\nIf you do not customize by the deadline, your box will ship using your default preferences from the previous month. Please note that after 3 consecutive months without customization, your account will be flagged as "auto default," and monthly customization reminder emails will stop being sent.\n\nQuestion: What will happen if Amara does not customize her box by the deadline this month?',
  options: [
    { label: "A", text: "Her box will ship with items chosen at random" },
    { label: "B", text: "Her box will ship based on her previous month's default preferences" },
    { label: "C", text: "Her subscription will be automatically canceled" },
    { label: "D", text: "She will be charged an additional customization fee" },
  ],
  correct: "B",
  explanation:
    "The notice states 'If you do not customize by the deadline, your box will ship using your default preferences from the previous month', so (B) is correct.",
};

const part7bw: PracticeQuestionData = {
  prompt: "Part 7 · Read the donation receipt and answer the question.",
  context:
    "DONATION RECEIPT\nHopewell Community Foundation\n\nDear Ms. Fontaine,\n\nThank you for your generous contribution of $250, received on June 10. No goods or services were provided in exchange for this donation, so the full amount is tax-deductible in accordance with IRS guidelines.\n\nPlease note that for donors who receive a gift valued over $75 in connection with a donation, such as a tote bag or event ticket, the value of that gift must be subtracted from the donation amount when calculating the tax-deductible portion.\n\nQuestion: What can be inferred about a donor who receives a $100 gift in connection with a $250 donation?",
  options: [
    { label: "A", text: "The full $250 would be tax-deductible, the same as Ms. Fontaine's" },
    {
      label: "B",
      text: "The value of the gift would need to be subtracted from the deductible amount",
    },
    { label: "C", text: "The donation would not be eligible for a receipt" },
    { label: "D", text: "The donor would be required to return the gift" },
  ],
  correct: "B",
  explanation:
    "The receipt states that for donors receiving 'a gift valued over $75 ... the value of that gift must be subtracted from the donation amount when calculating the tax-deductible portion', so a donor receiving a $100 gift would need that value subtracted, unlike Ms. Fontaine who received no goods or services, making (B) correct.",
};

const part7bx: PracticeQuestionData = {
  prompt: "Part 7 · Read the season pass notice and answer the question.",
  context:
    "SEASON PASS BLACKOUT DATES\nAlpine Ridge Resort\n\nDear Passholder,\n\nYour 2026-27 season pass provides unlimited lift access on all operating days, with the exception of designated blackout dates: December 26-31 and January 1. Passholders will need a separate lift ticket to ski on these dates.\n\nAs a courtesy, passholders may purchase a single-day lift ticket for blackout dates at 50% off the regular window price, which is not available to non-passholders.\n\nQuestion: What option is available to passholders who want to ski on a blackout date?",
  options: [
    { label: "A", text: "They may use their season pass as usual" },
    { label: "B", text: "They may purchase a discounted single-day lift ticket" },
    { label: "C", text: "They may upgrade to a premium pass at no cost" },
    { label: "D", text: "They may ski for free at a partner resort instead" },
  ],
  correct: "B",
  explanation:
    "The notice states passholders 'may purchase a single-day lift ticket for blackout dates at 50% off the regular window price', so (B) is correct.",
};

const part7by: PracticeQuestionData = {
  prompt: "Part 7 · Read the insurance coverage notice and answer the question.",
  context:
    "MOVING INSURANCE COVERAGE\nTrueMove Relocation Services\n\nDear Ms. Castellano,\n\nYour move includes basic released value protection at no additional cost, which covers your belongings at $0.60 per pound per item in the event of loss or damage. For most households, this provides only partial reimbursement of an item's actual value.\n\nFull-value protection, which covers the replacement cost of damaged or lost items, is available for an additional fee based on your shipment's total weight. This option must be elected in writing before moving day; if no election is made, your shipment will default to basic released value protection.\n\nQuestion: What will happen if Ms. Castellano does not elect full-value protection in writing before moving day?",
  options: [
    { label: "A", text: "Her shipment will not be covered by any insurance" },
    { label: "B", text: "Her shipment will default to basic released value protection" },
    { label: "C", text: "Her move will be automatically postponed" },
    { label: "D", text: "She will be charged for full-value protection regardless" },
  ],
  correct: "B",
  explanation:
    "The notice states full-value protection 'must be elected in writing before moving day; if no election is made, your shipment will default to basic released value protection', so (B) is correct.",
};

const part7bz: PracticeQuestionData = {
  prompt: "Part 7 · Read the deposit refund policy and answer the question.",
  context:
    "HOUSING DEPOSIT REFUND POLICY\nFairmont University Residential Life\n\nDear Student,\n\nYour $500 housing deposit is refundable within 45 days after move-out, less any deductions for damages beyond normal wear and tear. Students who cancel their housing contract before June 1 receive a full refund of their deposit.\n\nStudents who cancel their housing contract on or after June 1 will have a $200 cancellation fee deducted from their deposit, since housing assignments become final and rooms are no longer released to the waitlist after that date.\n\nQuestion: What can be inferred about a student who cancels their housing contract on May 20?",
  options: [
    { label: "A", text: "They would receive a full refund of their $500 deposit" },
    { label: "B", text: "They would have a $200 cancellation fee deducted" },
    { label: "C", text: "They would forfeit the entire deposit" },
    { label: "D", text: "They would need to remain on the waitlist" },
  ],
  correct: "A",
  explanation:
    "The policy states 'Students who cancel their housing contract before June 1 receive a full refund of their deposit', and May 20 falls before June 1, so (A) is correct.",
};

const part7ca: PracticeQuestionData = {
  prompt: "Part 7 · Read the baggage fee policy update and answer the question.",
  context:
    "BAGGAGE FEE POLICY UPDATE\nAeroLink Airlines\n\nDear Traveler,\n\nEffective for tickets purchased on or after September 1, the fee for a first checked bag will increase from $30 to $35, and the fee for a second checked bag will increase from $45 to $50. These fees apply per direction of travel.\n\nPassengers holding the AeroLink co-branded credit card will continue to receive their first checked bag free of charge, unaffected by this fee increase, as outlined in their card's existing travel benefits.\n\nQuestion: What is stated about passengers who hold the AeroLink co-branded credit card?",
  options: [
    { label: "A", text: "They will pay the new $35 fee for their first checked bag" },
    { label: "B", text: "They will continue to receive their first checked bag free of charge" },
    { label: "C", text: "They will receive a discount on their second checked bag only" },
    { label: "D", text: "They must reapply for the benefit under the new policy" },
  ],
  correct: "B",
  explanation:
    "The update states cardholders 'will continue to receive their first checked bag free of charge, unaffected by this fee increase', so (B) is correct.",
};

const part7cb: PracticeQuestionData = {
  prompt: "Part 7 · Read the rescheduling policy and answer the question.",
  context:
    "SESSION RESCHEDULING POLICY\nLumière Portrait Studio\n\nDear Client,\n\nWe understand that plans change. Each booked session may be rescheduled once at no charge, provided you notify us at least 48 hours in advance. A second rescheduling request for the same session will incur a $40 rebooking fee.\n\nClients who fail to appear for their scheduled session without any prior notice will forfeit their deposit entirely, and a new deposit will be required to book a future session.\n\nQuestion: What will happen if a client requests to reschedule the same session for a second time?",
  options: [
    { label: "A", text: "The request will be denied automatically" },
    { label: "B", text: "The client will be charged a $40 rebooking fee" },
    { label: "C", text: "The client will forfeit their entire deposit" },
    { label: "D", text: "The session will be rescheduled at no additional cost" },
  ],
  correct: "B",
  explanation:
    "The policy states 'A second rescheduling request for the same session will incur a $40 rebooking fee', so (B) is correct.",
};

const part7cc: PracticeQuestionData = {
  prompt: "Part 7 · Read the maintenance plan renewal notice and answer the question.",
  context:
    "MAINTENANCE PLAN RENEWAL NOTICE\nClearSky Solar Services\n\nDear Mr. Adeyemi,\n\nYour annual solar panel maintenance plan, which includes panel cleaning and a full system inspection, is due for renewal at $150 for the coming year. As a loyalty benefit, customers who renew in each consecutive year earn an additional 5% discount on their renewal fee, up to a maximum of 20%.\n\nPlease note that if a renewal year is skipped, any accumulated loyalty discount is lost, and the customer must begin accumulating the discount again from 0% the next time they renew.\n\nQuestion: What can be inferred about a customer who has renewed for 3 consecutive years and then skips year 4?",
  options: [
    { label: "A", text: "They will keep their accumulated 15% discount when they renew again" },
    { label: "B", text: "They will restart their loyalty discount at 0% when they renew again" },
    { label: "C", text: "They will be permanently barred from the maintenance plan" },
    { label: "D", text: "They will receive the maximum 20% discount automatically" },
  ],
  correct: "B",
  explanation:
    "The notice states 'if a renewal year is skipped, any accumulated loyalty discount is lost, and the customer must begin accumulating the discount again from 0%', so (B) is correct.",
};

const part7cd: PracticeQuestionData = {
  prompt: "Part 7 · Read the turnaround time notice and answer the question.",
  context:
    "TURNAROUND TIME NOTICE\nLingua Bridge Translation Services\n\nDear Client,\n\nOur standard turnaround time for documents under 10 pages is 5 business days from the date payment is received. Rush service is available for documents under 10 pages at a 50% surcharge, reducing turnaround to 2 business days.\n\nDocuments exceeding 10 pages are not eligible for our standard 5-day guarantee and instead require a custom quote and timeline, which will be provided after our team reviews the document's length and complexity.\n\nQuestion: What is required for documents exceeding 10 pages?",
  options: [
    { label: "A", text: "A custom quote and timeline" },
    { label: "B", text: "An automatic rush service surcharge" },
    { label: "C", text: "Submission in a specific file format" },
    { label: "D", text: "Payment in two separate installments" },
  ],
  correct: "A",
  explanation:
    "The notice states documents exceeding 10 pages 'instead require a custom quote and timeline', so (A) is correct.",
};

const part7ce: PracticeQuestionData = {
  prompt: "Part 7 · Read the prescription refill policy and answer the question.",
  context:
    "PRESCRIPTION REFILL POLICY\nMeadowbrook Veterinary Clinic\n\nDear Client,\n\nRefill requests for your pet's ongoing medications are typically processed within 48 hours. To ensure medications remain appropriate for your pet's current health, any pet that has not been seen for a wellness exam within the past 12 months must complete a new exam before a refill will be approved.\n\nThe required exam may be scheduled for the same week as your refill request, so there is no need to delay your request while waiting for an appointment slot.\n\nQuestion: What is required before a refill will be approved for a pet not examined in the past 12 months?",
  options: [
    { label: "A", text: "A new wellness exam" },
    { label: "B", text: "A referral from a specialist" },
    { label: "C", text: "Full payment for the prior visit" },
    { label: "D", text: "A written statement from the owner" },
  ],
  correct: "A",
  explanation:
    "The policy states a pet 'not been seen for a wellness exam within the past 12 months must complete a new exam before a refill will be approved', so (A) is correct.",
};

const part7cf: PracticeQuestionData = {
  prompt: "Part 7 · Read the ticket exchange policy and answer the question.",
  context:
    "SEASON TICKET EXCHANGE POLICY\nRiverside Community Playhouse\n\nDear Season Ticket Holder,\n\nIf your schedule changes, you may exchange your tickets for a different performance date of the same show at no charge, provided the request is made at least 24 hours before curtain. Exchanges for a different show entirely are also permitted but incur a $5 per ticket processing fee.\n\nExchange requests made less than 24 hours before curtain cannot be accommodated under any circumstance, regardless of the reason for the request.\n\nQuestion: What can be inferred about a season ticket holder who requests an exchange 12 hours before curtain?",
  options: [
    { label: "A", text: "Their exchange will be processed for a $5 fee" },
    { label: "B", text: "Their exchange request will not be accommodated" },
    { label: "C", text: "Their exchange will be free if it is the same show" },
    { label: "D", text: "Their tickets will be automatically refunded instead" },
  ],
  correct: "B",
  explanation:
    "The policy states 'Exchange requests made less than 24 hours before curtain cannot be accommodated under any circumstance, regardless of the reason for the request', and 12 hours falls within that window, so (B) is correct.",
};

const part7cg: PracticeQuestionData = {
  prompt: "Part 7 · Read the driver pay update and answer the question.",
  context:
    "DRIVER PAY UPDATE\nZoomEats Driver Network\n\nDear Driver,\n\nStarting August 1, your per-delivery base pay will increase from $2.75 to $3.25, and the per-mile rate will rise from $0.45 to $0.55. These changes apply automatically to all deliveries completed after 12:00 A.M. on August 1; deliveries completed before that time will be paid at current rates regardless of when the weekly payout is issued.\n\nDrivers who maintain a customer rating of 4.8 or higher will also become eligible for a new $50 monthly bonus, paid out on the first business day of the following month. Drivers with a rating below 4.8 are not eligible for this bonus but will still receive the increased base and mileage pay.\n\nQuestion: What determines whether a delivery is paid at the new, higher rates?",
  options: [
    { label: "A", text: "Whether the driver's rating is 4.8 or higher" },
    { label: "B", text: "Whether the delivery is completed after 12:00 A.M. on August 1" },
    { label: "C", text: "Whether the weekly payout is issued before or after August 1" },
    { label: "D", text: "Whether the delivery distance exceeds 5 miles" },
  ],
  correct: "B",
  explanation:
    "The update states 'These changes apply automatically to all deliveries completed after 12:00 A.M. on August 1; deliveries completed before that time will be paid at current rates regardless of when the weekly payout is issued', so (B) is correct.",
};

const part7ch: PracticeQuestionData = {
  prompt: "Part 7 · Read the community garden notice and answer the question.",
  context:
    "COMMUNITY GARDEN PLOT ASSIGNMENT NOTICE\nOakdale Community Garden Association\n\nDear Member,\n\nYour application for the 2026 growing season has been approved, and you have been assigned Plot #14, a 10-by-15-foot bed located in the north section near the water spigot. Plot fees of $45 must be paid by April 1 to confirm your assignment; unpaid plots will be reassigned to applicants on the waiting list after that date.\n\nAll plot holders are required to plant and actively maintain their bed by May 15, or the plot will be forfeited without a refund. Garden tools are available for shared use in the storage shed, but personal hoses must be supplied by each member.\n\nQuestion: What must a plot holder supply for their own use?",
  options: [
    { label: "A", text: "A personal hose" },
    { label: "B", text: "A storage shed key" },
    { label: "C", text: "Their own garden tools" },
    { label: "D", text: "A copy of their approved application" },
  ],
  correct: "A",
  explanation:
    "The notice states 'personal hoses must be supplied by each member', so (A) is correct.",
};

const part7ci: PracticeQuestionData = {
  prompt: "Part 7 · Read the relocation stipend policy and answer the question.",
  context:
    "EMPLOYEE RELOCATION STIPEND POLICY\nNorthfield Corp — Human Resources\n\nDear Ms. Iwu,\n\nAs part of your transfer to our Denver office, you are eligible for a one-time relocation stipend of $6,000 to help cover moving expenses. This stipend is paid in full within 10 business days of your start date at the new location, provided you sign the relocation agreement beforehand.\n\nEmployees who voluntarily resign within 12 months of receiving the stipend are required to repay the full amount to the company. This repayment obligation applies only within that 12-month window and is not triggered by resignations that occur afterward.\n\nQuestion: What can be inferred about an employee who voluntarily resigns 13 months after receiving the stipend?",
  options: [
    { label: "A", text: "They must repay the full stipend amount" },
    { label: "B", text: "They are not required to repay the stipend" },
    { label: "C", text: "They must repay a prorated portion of the stipend" },
    { label: "D", text: "They must return the funds within 30 days of resigning" },
  ],
  correct: "B",
  explanation:
    "The policy states the repayment obligation 'applies only within that 12-month window and is not triggered by resignations that occur afterward', and 13 months falls outside that window, so (B) is correct.",
};

const part7cj: PracticeQuestionData = {
  prompt: "Part 7 · Read the makeup lesson policy and answer the question.",
  context:
    "MAKEUP LESSON POLICY\nHarmony Keys Piano Studio\n\nDear Parent,\n\nStudents who miss a scheduled lesson due to illness or family emergency may request a makeup lesson, provided the studio is notified at least 2 hours before the lesson's start time. Makeup lessons must be scheduled within 14 days of the missed lesson or the missed session will be forfeited.\n\nNo more than 2 makeup lessons are permitted per semester. Missed lessons without advance notice, including no-shows, are not eligible for a makeup and will be billed at the full lesson rate.\n\nQuestion: What is required for a missed lesson to be eligible for a makeup?",
  options: [
    {
      label: "A",
      text: "The studio must be notified at least 2 hours before the lesson's start time",
    },
    { label: "B", text: "The student must provide a doctor's note" },
    { label: "C", text: "The makeup must occur on the same day as the missed lesson" },
    { label: "D", text: "The parent must pay a rescheduling fee in advance" },
  ],
  correct: "A",
  explanation:
    "The policy states a makeup may be requested 'provided the studio is notified at least 2 hours before the lesson's start time', so (A) is correct.",
};

const part7ck: PracticeQuestionData = {
  prompt: "Part 7 · Read the vaccination requirement update and answer the question.",
  context:
    "VACCINATION REQUIREMENT UPDATE\nWagtown Dog Daycare\n\nDear Client,\n\nEffective September 1, all dogs attending daycare must have an up-to-date Bordetella (kennel cough) vaccination administered within the past 6 months, in addition to the rabies and DHPP vaccinations already required. Proof of vaccination must be uploaded to your client portal before your dog's next visit.\n\nDogs whose Bordetella vaccination records are not on file by September 1 will be turned away at check-in until updated records are provided; no exceptions will be made for same-day walk-ins.\n\nQuestion: What will happen to a dog without an updated Bordetella record on file by September 1?",
  options: [
    { label: "A", text: "It will be admitted but placed in a separate play area" },
    { label: "B", text: "It will be turned away at check-in until records are provided" },
    { label: "C", text: "It will be given a vaccination on-site by staff" },
    { label: "D", text: "It will be charged a late documentation fee" },
  ],
  correct: "B",
  explanation:
    "The update states such dogs 'will be turned away at check-in until updated records are provided', so (B) is correct.",
};

const part7cl: PracticeQuestionData = {
  prompt: "Part 7 · Read the membership tier notice and answer the question.",
  context:
    "MEMBERSHIP TIER NOTICE\nShineWave Car Wash\n\nDear Member,\n\nOur Unlimited Basic plan ($25/month) includes unlimited exterior washes at any ShineWave location. The Unlimited Premium plan ($40/month) adds interior vacuuming and tire shine to every wash, and Premium members may also bring one guest vehicle per month at no extra charge.\n\nBasic members who wish to add interior vacuuming to a single visit may do so for an $8 add-on fee, paid at the kiosk. Guest vehicles are not permitted under the Basic plan under any circumstance.\n\nQuestion: What happens if a Basic plan member wants to bring a guest's vehicle through the car wash?",
  options: [
    { label: "A", text: "They may pay the $8 add-on fee to include the guest's vehicle" },
    { label: "B", text: "Guest vehicles are not permitted under the Basic plan" },
    { label: "C", text: "They may bring one guest vehicle per month like Premium members" },
    { label: "D", text: "They must first upgrade permanently to the Premium plan" },
  ],
  correct: "B",
  explanation:
    "The notice states 'Guest vehicles are not permitted under the Basic plan under any circumstance', so (B) is correct.",
};

const part7cm: PracticeQuestionData = {
  prompt: "Part 7 · Read the subscription pause policy and answer the question.",
  context:
    "SUBSCRIPTION PAUSE POLICY\nChapter & Verse Book Box\n\nDear Member,\n\nYou may pause your monthly book box subscription for up to 3 consecutive months per calendar year at no charge. To pause, log in to your account and select \"Pause Subscription\" at least 5 days before your next billing date; requests made after this deadline will not take effect until the following month's cycle.\n\nWhile paused, you will not be charged and will not receive a book box, but your membership discount on the online store remains active. After 3 months, your subscription will automatically resume and billing will restart unless you cancel entirely.\n\nQuestion: What happens to a member's store discount while their subscription is paused?",
  options: [
    { label: "A", text: "It is suspended along with the subscription" },
    { label: "B", text: "It remains active" },
    { label: "C", text: "It is reduced by half" },
    { label: "D", text: "It converts to store credit" },
  ],
  correct: "B",
  explanation:
    "The policy states that while paused, 'your membership discount on the online store remains active', so (B) is correct.",
};

const part7cn: PracticeQuestionData = {
  prompt: "Part 7 · Read the reservation deposit policy and answer the question.",
  context:
    "RESERVATION DEPOSIT POLICY\nSkyline Rooftop Lounge\n\nDear Guest,\n\nReservations for parties of 8 or more require a $100 deposit, applied toward your final food and beverage bill. The deposit is fully refundable if the reservation is canceled at least 48 hours in advance; cancellations made within 48 hours forfeit the deposit entirely.\n\nParties that arrive more than 20 minutes late without notifying the venue will have their table released to walk-in guests, and the deposit will not be refunded in this case either.\n\nQuestion: When is the reservation deposit fully refundable?",
  options: [
    { label: "A", text: "When the reservation is canceled at least 48 hours in advance" },
    { label: "B", text: "When the party arrives more than 20 minutes late" },
    { label: "C", text: "When the final bill exceeds $100" },
    { label: "D", text: "When the reservation is for fewer than 8 guests" },
  ],
  correct: "A",
  explanation:
    "The policy states 'The deposit is fully refundable if the reservation is canceled at least 48 hours in advance', so (A) is correct.",
};

const part7co: PracticeQuestionData = {
  prompt: "Part 7 · Read the monitoring plan update and answer the question.",
  context:
    "MONITORING PLAN UPDATE\nSentry Shield Home Security\n\nDear Customer,\n\nStarting next billing cycle, our Standard Monitoring plan will include text and email alerts in addition to the existing phone call alerts, at no change to your current $30 monthly rate. Our Premium Monitoring plan ($45/month) will now also include video verification, allowing our response team to view live camera footage before dispatching emergency services.\n\nVideo verification requires cameras connected to the monitoring system; customers without connected cameras are not eligible for video verification regardless of which plan tier they are on.\n\nQuestion: What can be inferred about a Standard plan customer who upgrades to Premium but has no cameras installed?",
  options: [
    { label: "A", text: "They would still not be eligible for video verification" },
    { label: "B", text: "They would receive video verification through phone alerts instead" },
    { label: "C", text: "They would automatically have cameras installed for free" },
    { label: "D", text: "They would be moved back to the Standard plan" },
  ],
  correct: "A",
  explanation:
    "The update states that 'customers without connected cameras are not eligible for video verification regardless of which plan tier they are on', so a customer who upgrades without installing cameras would still not be eligible, making (A) correct.",
};

const part7cp: PracticeQuestionData = {
  prompt: "Part 7 · Read the tune-up package notice and answer the question.",
  context:
    "TUNE-UP PACKAGE NOTICE\nGearhead Bicycle Repair\n\nOur Standard Tune-Up ($60) includes brake and gear adjustment, tire pressure check, and a safety inspection, completed within 2 business days. The Deluxe Tune-Up ($95) adds a full drivetrain cleaning and wheel truing, and is completed within 3 business days due to the additional labor involved.\n\nCustomers may upgrade from a Standard to a Deluxe Tune-Up at any point before work begins by paying the $35 price difference; upgrades requested after work has started will not be accommodated.\n\nQuestion: How can a customer upgrade from a Standard to a Deluxe Tune-Up?",
  options: [
    { label: "A", text: "By paying the $35 price difference before work begins" },
    { label: "B", text: "By requesting the upgrade after work has started" },
    { label: "C", text: "By bringing in the bicycle a second time" },
    { label: "D", text: "By joining the shop's loyalty program" },
  ],
  correct: "A",
  explanation:
    "The notice states customers may upgrade 'at any point before work begins by paying the $35 price difference', so (A) is correct.",
};

const part7cq: PracticeQuestionData = {
  prompt: "Part 7 · Read the locker rental policy and answer the question.",
  context:
    "LOCKER RENTAL POLICY\nBeacon Hill Coworking\n\nDear Member,\n\nPersonal lockers are available for rent at $15 per month, billed alongside your membership fee. Lockers are assigned on a first-come, first-served basis and must be reserved through the front desk, as they cannot be booked through the online member portal.\n\nMembers who cancel their coworking membership must empty their locker within 5 business days; any items left after this period will be donated or discarded, and the locker will be reassigned to the next member on the waiting list.\n\nQuestion: How must a member reserve a locker?",
  options: [
    { label: "A", text: "Through the online member portal" },
    { label: "B", text: "Through the front desk" },
    { label: "C", text: "By joining the waiting list first" },
    { label: "D", text: "By paying a separate reservation deposit" },
  ],
  correct: "B",
  explanation:
    "The policy states lockers 'must be reserved through the front desk, as they cannot be booked through the online member portal', so (B) is correct.",
};

const part7cr: PracticeQuestionData = {
  prompt: "Part 7 · Read the package add-on notice and answer the question.",
  context:
    "PACKAGE ADD-ON NOTICE\nEverAfter Photography Studio\n\nDear Ms. Bellamy,\n\nYour Classic Package includes 6 hours of wedding-day coverage and one photographer. You may add an engagement session for $250 or a second photographer for $400; both add-ons must be requested no later than 30 days before your wedding date to allow time for scheduling.\n\nA private online gallery, delivered within 2 weeks of the session, is a feature of the engagement session add-on only; the second-photographer add-on affects wedding-day coverage exclusively and does not include a session or gallery of its own.\n\nQuestion: What can be inferred about a couple who adds the second-photographer option but not the engagement session?",
  options: [
    {
      label: "A",
      text: "They will still receive a private online gallery from an engagement session",
    },
    {
      label: "B",
      text: "They will not receive a private online gallery from an engagement session",
    },
    { label: "C", text: "They will receive two photographers at the engagement session as well" },
    { label: "D", text: "They must also book the engagement session within 2 weeks" },
  ],
  correct: "B",
  explanation:
    "The notice states the private online gallery 'is a feature of the engagement session add-on only' and that the second-photographer add-on 'does not include a session or gallery of its own', so a couple without the engagement session would not receive that gallery, making (B) correct.",
};

const part7cs: PracticeQuestionData = {
  prompt: "Part 7 · Read the venue change notice and answer the question.",
  context:
    "VENUE CHANGE NOTICE\nPolyglot Circle Language Exchange\n\nHi everyone,\n\nDue to a scheduling conflict at Café Lumière, this Thursday's meetup will move to The Reading Room, located two blocks north at 88 Elm Street. The meeting time remains unchanged at 7:00 P.M., and all language tables (Spanish, French, and Japanese) will run as originally planned.\n\nPlease note that The Reading Room does not allow outside food, so attendees who normally bring snacks to share are asked to hold off this week; drinks may still be purchased at the venue's counter.\n\nQuestion: What are attendees asked to do this week because of the new venue?",
  options: [
    { label: "A", text: "Arrive earlier than the usual meeting time" },
    { label: "B", text: "Refrain from bringing outside food to share" },
    { label: "C", text: "Bring their own drinks instead of purchasing them" },
    { label: "D", text: "Choose only one language table to attend" },
  ],
  correct: "B",
  explanation:
    "The notice states that because 'The Reading Room does not allow outside food ... attendees who normally bring snacks to share are asked to hold off this week', so (B) is correct.",
};

const part7ct: PracticeQuestionData = {
  prompt: "Part 7 · Read the crop coverage notice and answer the question.",
  context:
    "CROP COVERAGE NOTICE\nHarvestGuard Crop Insurance\n\nDear Policyholder,\n\nYour current policy covers losses from drought, hail, and flood up to $50,000 per growing season, with a $2,500 deductible per claim. Coverage for losses caused by frost is available only as an optional rider, which must be added before the start of the growing season; it cannot be added once planting has begun.\n\nClaims for covered perils must be filed within 30 days of the loss to be eligible for payout. Policyholders who have not added the frost rider and experience a frost-related loss will have that claim denied, though other covered perils affecting the same field remain unaffected.\n\nQuestion: What can be inferred about a policyholder who did not add the frost rider and experiences a frost-related crop loss after planting has begun?",
  options: [
    { label: "A", text: "Their claim for the frost-related loss will be denied" },
    { label: "B", text: "They may still add the rider retroactively to cover the loss" },
    { label: "C", text: "Their entire policy will be canceled due to the uncovered loss" },
    { label: "D", text: "They will receive a reduced payout instead of a full denial" },
  ],
  correct: "A",
  explanation:
    "Since the frost rider 'cannot be added once planting has begun' and 'Policyholders who have not added the frost rider and experience a frost-related loss will have that claim denied', a policyholder in this situation cannot retroactively add coverage and will have the claim denied, making (A) correct.",
};

const part7new1: PracticeQuestionData = {
  prompt: "Part 7 · Read the customer review and answer the question.",
  context:
    "★★★☆☆ (3 out of 5)\nReviewed by: TechDaily_Sam — Verified Purchase\n\nProduct: SoundWave Pro Wireless Earbuds\n\nThe sound quality on these earbuds genuinely surprised me for the price point — bass is punchy and the mids are clear even at higher volumes. Battery life matches the advertised 8 hours per charge, which held up in my testing. My main complaint is the charging case: the lid doesn't snap shut securely, and I've had the earbuds fall out twice when the case was in my bag. I've reached out to customer support about a possible design flaw but haven't heard back after five days.\n\nWould I recommend them? Cautiously yes, but I'd suggest a different case if you're rough on your gear.\n\nQuestion: What problem does the reviewer report with the product?",
  options: [
    { label: "A", text: "The sound quality is worse than advertised." },
    { label: "B", text: "The battery does not last as long as advertised." },
    { label: "C", text: "The charging case does not close securely." },
    { label: "D", text: "Customer support refused to respond to any inquiries." },
  ],
  correct: "C",
  explanation:
    "The reviewer writes 'the lid doesn't snap shut securely, and I've had the earbuds fall out twice when the case was in my bag', so (C) is correct.",
};

const part7new2: PracticeQuestionData = {
  prompt: "Part 7 · Read the news article and answer the question.",
  context:
    "LOCAL NEWS\n\nMillbrook Bakery to Open Second Location Downtown\n\nMillbrook Bakery, a neighborhood favorite for the past eight years, announced this week that it will open a second location on Cedar Street, three blocks from its original Oak Avenue shop. Owner Renata Sokolova said the expansion was driven by consistent lines out the door on weekend mornings at the original store.\n\nThe new location, expected to open in late September, will offer the same menu as the original shop but will also include a small seating area for customers who want to eat in, a feature the Oak Avenue location has never had due to space constraints.\n\nQuestion: Why did Millbrook Bakery decide to open a second location?",
  options: [
    { label: "A", text: "The lease at the original location was not renewed." },
    { label: "B", text: "A seating area could not be added to the original shop." },
    { label: "C", text: "The owner wanted to relocate away from Oak Avenue." },
    { label: "D", text: "Weekend lines at the original shop had become consistently long." },
  ],
  correct: "D",
  explanation:
    "The article states 'the expansion was driven by consistent lines out the door on weekend mornings at the original store', so (D) is correct.",
};

const part7new3: PracticeQuestionData = {
  prompt: "Part 7 · Read the advertisement and answer the question.",
  context:
    "INTRODUCING TASKFLOW 3.0\nThe project management tool built for growing teams\n\nTaskFlow 3.0 brings automated task assignment to your workflow: simply set your team's availability and skill tags, and TaskFlow will distribute new tasks automatically based on who has capacity. Existing TaskFlow customers know how much time manual assignment used to take — this update eliminates that step entirely.\n\nAlso included: unlimited projects on every plan, real-time collaboration comments, and a redesigned mobile app. Upgrade before September 30 and lock in your current subscription price for another 12 months.\n\nQuestion: What new capability does TaskFlow 3.0 introduce?",
  options: [
    { label: "A", text: "Unlimited projects on every plan." },
    { label: "B", text: "A price lock for all customers regardless of upgrade date." },
    { label: "C", text: "A completely redesigned pricing structure." },
    { label: "D", text: "Automated task assignment based on availability and skill tags." },
  ],
  correct: "D",
  explanation:
    "The ad states 'TaskFlow 3.0 brings automated task assignment to your workflow: simply set your team's availability and skill tags, and TaskFlow will distribute new tasks automatically', so (D) is correct.",
};

const part7new4: PracticeQuestionData = {
  prompt: "Part 7 · Read the job posting and answer the question.",
  context:
    "SOUS CHEF — The Copper Kettle Bistro\n\nThe Copper Kettle Bistro is looking for an experienced Sous Chef to support our Executive Chef in daily kitchen operations. Responsibilities include supervising line cooks during dinner service, managing inventory orders, and stepping in as kitchen lead on the Executive Chef's days off.\n\nCandidates must have at least three years of professional kitchen experience, including at least one year in a supervisory role. A culinary degree is preferred but not required for candidates who can demonstrate equivalent experience. This is a full-time position requiring evening and weekend availability.\n\nQuestion: What is required of applicants for this position?",
  options: [
    { label: "A", text: "A culinary degree from an accredited program." },
    { label: "B", text: "Prior experience specifically in French cuisine." },
    {
      label: "C",
      text: "At least three years of professional kitchen experience, including one year supervisory.",
    },
    { label: "D", text: "Availability only on weekday mornings." },
  ],
  correct: "C",
  explanation:
    "The posting states candidates 'must have at least three years of professional kitchen experience, including at least one year in a supervisory role', while a culinary degree is 'preferred but not required', so (C) is correct.",
};

const part7new5: PracticeQuestionData = {
  prompt: "Part 7 · Read the internal memo and answer the question.",
  context:
    "MEMO\nTo: All Staff\nFrom: Human Resources\nRe: Updated Dress Code Policy\n\nEffective August 1, Harrow & Vance is relaxing its business-formal dress code to business-casual for all staff, except on days with scheduled client meetings, when business-formal attire is still required. This change follows staff feedback collected in our spring engagement survey, in which dress code was the most frequently mentioned request for improvement.\n\nManagers will notify their teams in advance whenever a client meeting is scheduled so that appropriate attire can be planned. Questions about specific clothing items should be directed to your department manager.\n\nQuestion: Why is the company relaxing its dress code?",
  options: [
    { label: "A", text: "To reduce the company's clothing allowance budget." },
    { label: "B", text: "To comply with a new industry regulation." },
    { label: "C", text: "Because managers requested a simpler policy to enforce." },
    { label: "D", text: "Because staff feedback identified it as a frequent request." },
  ],
  correct: "D",
  explanation:
    "The memo states 'This change follows staff feedback collected in our spring engagement survey, in which dress code was the most frequently mentioned request for improvement', so (D) is correct.",
};

const part7new6: PracticeQuestionData = {
  prompt: "Part 7 · Read the invoice and answer the question.",
  context:
    "INVOICE #4471\nColdwell Heating & Cooling\n\nBill To: Marcus Yoon, 118 Birchwood Lane\nService: Diagnosis and repair of central air conditioning unit — replaced capacitor and cleaned condenser coils\nAmount Due: $215\n\nThis repair is covered under a 90-day labor warranty. If the same issue recurs within 90 days of this service date, the follow-up repair will be performed at no additional labor charge; replacement parts beyond the capacitor already installed would still be billed separately.\n\nPayment is due within 15 days of the invoice date. A $25 late fee applies to balances unpaid after that period.\n\nQuestion: What does the 90-day warranty on this repair cover?",
  options: [
    { label: "A", text: "Any new parts needed for a different issue." },
    { label: "B", text: "A full refund of the amount paid." },
    { label: "C", text: "Labor for a follow-up repair of the same issue." },
    { label: "D", text: "Replacement of the entire air conditioning unit." },
  ],
  correct: "C",
  explanation:
    "The invoice states 'If the same issue recurs within 90 days of this service date, the follow-up repair will be performed at no additional labor charge', so (C) is correct.",
};

const part7new7: PracticeQuestionData = {
  prompt: "Part 7 · Read the meeting minutes and answer the question.",
  context:
    "CITY COUNCIL MEETING MINUTES — Excerpt\nFairview City Council, Regular Session, June 3\n\nAgenda Item 4: Riverside Park Renovation\n\nThe Council voted 5-2 to approve $340,000 in funding for the renovation of Riverside Park's playground and walking trails, with construction expected to begin in early September. Council Member Torres noted that a second phase, covering the park's boat launch area, was discussed but not included in this vote and will require a separate funding proposal at a future meeting.\n\nThe motion passed on the condition that the contractor selected must be based within Fairview County.\n\nQuestion: What condition was attached to the approved funding?",
  options: [
    { label: "A", text: "The renovation must include the boat launch area." },
    { label: "B", text: "The selected contractor must be based within Fairview County." },
    { label: "C", text: "Construction must begin before September." },
    { label: "D", text: "A second public vote must be held before construction." },
  ],
  correct: "B",
  explanation:
    "The minutes state 'The motion passed on the condition that the contractor selected must be based within Fairview County', so (B) is correct.",
};

const part7new8: PracticeQuestionData = {
  prompt: "Part 7 · Read the itinerary and answer the question.",
  context:
    "TRAVEL ITINERARY\nPrepared for: Elena Vasquez\nTrip: Chicago Client Visit, October 14-15\n\nOctober 14\n8:45 A.M. — Depart O'Hare-bound flight AA 2214 from Newark (Terminal A)\n11:20 A.M. — Arrive Chicago O'Hare\n1:00 P.M. — Client meeting, Denholm & Ward LLP offices, downtown Chicago\n7:00 P.M. — Dinner reservation, Lakeside Grill\n\nOctober 15\n9:30 A.M. — Site visit, Denholm & Ward warehouse facility\n3:15 P.M. — Return flight AA 2231 to Newark\n\nNote: A car service has been arranged for all airport transfers; no rental car is needed for this trip.\n\nQuestion: What time is Elena Vasquez scheduled to arrive in Chicago?",
  options: [
    { label: "A", text: "11:20 A.M." },
    { label: "B", text: "8:45 A.M." },
    { label: "C", text: "1:00 P.M." },
    { label: "D", text: "3:15 P.M." },
  ],
  correct: "A",
  explanation:
    "The itinerary lists '11:20 A.M. — Arrive Chicago O'Hare' for October 14, so (A) is correct.",
};

const part7new9: PracticeQuestionData = {
  prompt: "Part 7 · Read the email and answer the question.",
  context:
    "From: r.kessler@brightpath-consulting.com\nTo: project-team@brightpath-consulting.com\nSubject: Revised Deadline for Hendricks Report\n\nHi team,\n\nAfter speaking with the client this morning, we've agreed to move the Hendricks Report deadline from Friday to the following Wednesday. The client's own data team is still finalizing the sales figures we need for Section 3, and they won't have those numbers ready until Monday.\n\nThis gives us a bit more breathing room, but let's still aim to have everything except Section 3 finished by Friday as originally planned, so we're not scrambling next week.\n\nQuestion: Why was the report deadline moved?",
  options: [
    {
      label: "A",
      text: "The client's own data team has not yet finalized figures the report needs.",
    },
    { label: "B", text: "The project team requested more time to revise their work." },
    { label: "C", text: "A member of the project team is unavailable until Wednesday." },
    { label: "D", text: "The client canceled the original meeting." },
  ],
  correct: "A",
  explanation:
    "The email states 'The client's own data team is still finalizing the sales figures we need for Section 3, and they won't have those numbers ready until Monday', so (A) is correct.",
};

const part7new10: PracticeQuestionData = {
  prompt: "Part 7 · Read the product recall notice and answer the question.",
  context:
    "PRODUCT RECALL NOTICE\nBuildRight Toys\n\nProduct: StackBlox Junior Building Set (Item #SB-118)\n\nBuildRight Toys is recalling the StackBlox Junior Building Set due to reports that a small connector piece can detach and separate from the larger block, posing a choking hazard to children under 3. Three incidents have been reported; no injuries have been confirmed.\n\nParents and caregivers should immediately take the product away from children and either return it to the place of purchase for a full refund or contact BuildRight at 1-800-555-0182 for a prepaid return label.\n\nQuestion: Why is BuildRight Toys recalling the StackBlox Junior Building Set?",
  options: [
    { label: "A", text: "The product does not meet advertised durability standards." },
    { label: "B", text: "A small piece can detach and create a choking hazard." },
    { label: "C", text: "Several children were confirmed injured by the toy." },
    { label: "D", text: "The set was mislabeled with the wrong age range." },
  ],
  correct: "B",
  explanation:
    "The notice states a connector piece 'can detach and separate from the larger block, posing a choking hazard to children under 3', so (B) is correct.",
};

const part7new11: PracticeQuestionData = {
  prompt: "Part 7 · Read the advertisement and answer the question.",
  context:
    "NEW YEAR, NEW YOU\nIronPeak Fitness — Founding Member Offer\n\nJoin IronPeak Fitness before January 31 and lock in our Founding Member rate of $29/month for life — even as regular membership prices rise in future years. Founding Members also receive one free personal training session per quarter and priority booking for group classes.\n\nThis offer is limited to the first 200 members at our new Riverside location and cannot be combined with any other discount.\n\nQuestion: What benefit is specifically promised to Founding Members regarding pricing?",
  options: [
    { label: "A", text: "A rate of $29/month that will never increase for them." },
    { label: "B", text: "A one-time sign-up discount of $29." },
    { label: "C", text: "Free membership for the first three months." },
    { label: "D", text: "A refund if prices increase within the first year." },
  ],
  correct: "A",
  explanation:
    "The ad states Founding Members 'lock in our Founding Member rate of $29/month for life — even as regular membership prices rise in future years', so (A) is correct.",
};

const part7new12: PracticeQuestionData = {
  prompt: "Part 7 · Read the customer review and answer the question.",
  context:
    "★★★★☆ (4 out of 5)\nReviewed by: FoodieInTown\n\nRestaurant: Basil & Stone\n\nI've eaten at Basil & Stone three times now and the food has been consistently excellent each visit — the wood-fired pizza in particular is worth the trip alone. My only hesitation in giving five stars is the wait: even with a reservation, we were seated about 20 minutes past our booked time on two of the three visits. The staff were apologetic about it, but if you're on a tight schedule, I'd build in some buffer time.\n\nStill one of my favorite spots in the neighborhood.\n\nQuestion: What is the reviewer's main criticism of Basil & Stone?",
  options: [
    { label: "A", text: "The pizza is inconsistent in quality." },
    { label: "B", text: "Reservations are often not honored on time." },
    { label: "C", text: "The staff are unfriendly when delays occur." },
    { label: "D", text: "The restaurant does not accept reservations." },
  ],
  correct: "B",
  explanation:
    "The reviewer writes 'even with a reservation, we were seated about 20 minutes past our booked time on two of the three visits', so (B) is correct.",
};

const part7new13: PracticeQuestionData = {
  prompt: "Part 7 · Read the policy announcement and answer the question.",
  context:
    "HYBRID WORK POLICY ANNOUNCEMENT\nDelmore & Associates\n\nEffective October 1, all employees will move to a hybrid schedule requiring a minimum of three in-office days per week, selected in coordination with your team lead. The remaining days may be worked remotely, subject to manager approval.\n\nEmployees whose roles require daily in-person client contact, such as front-desk and reception staff, are not eligible for remote work days under this policy and will continue reporting to the office five days per week as before.\n\nQuestion: What is required of employees whose roles involve daily in-person client contact?",
  options: [
    { label: "A", text: "They must report to the office five days per week." },
    { label: "B", text: "They must choose three in-office days like other staff." },
    { label: "C", text: "They may work remotely with additional manager approval." },
    { label: "D", text: "They must relocate to a client-facing office location." },
  ],
  correct: "A",
  explanation:
    "The announcement states such employees 'are not eligible for remote work days under this policy and will continue reporting to the office five days per week as before', so (A) is correct.",
};

const part7new14: PracticeQuestionData = {
  prompt: "Part 7 · Read the news article and answer the question.",
  context:
    "CITY TRANSIT NEWS\n\nBus Route 22 to Detour Around Main Street Construction\n\nStarting Monday, Route 22 buses will detour via Grant Avenue and Pine Street to avoid ongoing construction on Main Street between 5th and 8th Avenues. The detour is expected to remain in place for approximately six weeks while crews repave the roadway.\n\nRiders should note that the Main Street and 6th Avenue stop will be temporarily suspended during the detour; the nearest active stop during this period will be at Grant Avenue and 6th, roughly two blocks away.\n\nQuestion: What will happen to the Main Street and 6th Avenue bus stop during the detour?",
  options: [
    { label: "A", text: "It will be moved permanently to Grant Avenue." },
    { label: "B", text: "It will be temporarily suspended." },
    { label: "C", text: "It will operate on a reduced schedule." },
    { label: "D", text: "It will be replaced with a shuttle service." },
  ],
  correct: "B",
  explanation:
    "The article states 'the Main Street and 6th Avenue stop will be temporarily suspended during the detour', so (B) is correct.",
};

const part7r9a: PracticeQuestionData = {
  prompt: "Part 7 · Read the email and answer the question.",
  context:
    "From: it-support@westfieldmanufacturing.com\nTo: all-staff@westfieldmanufacturing.com\nSubject: Scheduled Server Migration This Weekend\n\nThis weekend, from Saturday 8:00 P.M. to Sunday 6:00 A.M., the IT department will migrate our internal file servers to a new cloud-based system. During this window, access to shared drives and the internal timesheet portal will be intermittent or unavailable.\n\nEmail and calendar services will not be affected. We recommend saving any files you need for Monday morning locally before Saturday evening. If access issues persist past 8:00 A.M. Sunday, please contact the IT helpdesk.\n\nQuestion: What is the main purpose of this email?",
  options: [
    { label: "A", text: "To warn staff about scheduled downtime during a server migration." },
    { label: "B", text: "To announce a new email client rollout." },
    { label: "C", text: "To request volunteers to assist with the migration." },
    { label: "D", text: "To report that the migration has already been completed." },
  ],
  correct: "A",
  explanation:
    "The email states that 'the IT department will migrate our internal file servers to a new cloud-based system' and that 'access to shared drives and the internal timesheet portal will be intermittent or unavailable' during that weekend, so (A) is correct.",
};

const part7r9b: PracticeQuestionData = {
  prompt: "Part 7 · Read the product recall notice and answer the question.",
  context:
    "PRODUCT RECALL NOTICE\nMeadowlark Baby Goods\n\nProduct: Comfort Ride Infant Car Seat, Model CR-310\n\nMeadowlark Baby Goods is recalling all Comfort Ride Infant Car Seats sold between January and May 2025 after testing revealed that the harness buckle can stick in the locked position, making it difficult to remove the child quickly in an emergency. No injuries have been reported.\n\nOwners should stop using the car seat immediately and visit meadowlarkbaby.com/recall to request a free replacement buckle kit, which includes clear installation instructions.\n\nQuestion: Why is Meadowlark Baby Goods recalling the Comfort Ride Infant Car Seat?",
  options: [
    { label: "A", text: "Because the fabric cover fades in sunlight." },
    {
      label: "B",
      text: "Because the harness buckle can stick and be difficult to release in an emergency.",
    },
    { label: "C", text: "Because the car seat failed a weight-capacity test." },
    { label: "D", text: "Because the company is redesigning the product line." },
  ],
  correct: "B",
  explanation:
    "The notice states the defect causes the harness buckle to 'stick in the locked position, making it difficult to remove the child quickly in an emergency', so (B) is correct.",
};

const part7r9c: PracticeQuestionData = {
  prompt: "Part 7 · Read the job posting and answer the question.",
  context:
    "WAREHOUSE SUPERVISOR — Palisade Distribution\n\nPalisade Distribution is hiring a Warehouse Supervisor to oversee daily operations at our Reno fulfillment center, including managing a team of 12 warehouse associates and coordinating inbound shipments. Candidates must have at least two years of experience supervising a warehouse or logistics team and must be certified to operate a forklift.\n\nExperience with inventory management software is preferred but not required, as training will be provided. This position requires the ability to work occasional overnight shifts during peak season.\n\nQuestion: What is required of applicants for this position?",
  options: [
    { label: "A", text: "A bachelor's degree in supply chain management." },
    { label: "B", text: "Prior experience with the company's specific inventory software." },
    {
      label: "C",
      text: "Certification to operate a forklift and at least two years of supervisory experience.",
    },
    { label: "D", text: "Availability for overnight shifts every week." },
  ],
  correct: "C",
  explanation:
    "The posting states candidates 'must have at least two years of experience supervising a warehouse or logistics team and must be certified to operate a forklift', while inventory software experience is 'preferred but not required', so (C) is correct.",
};

const part7r9d: PracticeQuestionData = {
  prompt: "Part 7 · Read the advertisement and answer the question.",
  context:
    "WAREHOUSE CLEARANCE EVENT\nDrayton & Sons Furniture\n\nThis Saturday and Sunday only, take an additional 25% off all already-reduced floor models at our Elmhurst warehouse location. Floor models are sold as-is and cannot be special-ordered in a different fabric or color, but all clearance purchases still include free local delivery within 20 miles.\n\nDoors open at 9:00 A.M. both days, and quantities are limited to what is currently on the showroom floor. No rain checks will be issued once an item is sold.\n\nQuestion: What is indicated about the furniture sold during this clearance event?",
  options: [
    { label: "A", text: "It can be special-ordered in other colors upon request." },
    { label: "B", text: "It comes with an extended two-year warranty." },
    { label: "C", text: "It is only available for purchase online." },
    {
      label: "D",
      text: "It is sold as-is and cannot be special-ordered in a different fabric or color.",
    },
  ],
  correct: "D",
  explanation:
    "The advertisement states 'Floor models are sold as-is and cannot be special-ordered in a different fabric or color', so (D) is correct.",
};

const part7r9e: PracticeQuestionData = {
  prompt: "Part 7 · Read the internal memo and answer the question.",
  context:
    "PARKING GARAGE RENOVATION NOTICE\nKestrel Tower — Building Management\n\nTo: All Tenants\n\nStarting Monday, July 27, the north half of the parking garage (Levels 2-4) will close for approximately three weeks while crews repair structural cracks in the concrete deck. Tenants assigned to spaces on these levels will be temporarily reassigned to the south garage, Levels 1 and 5, at no change to their monthly rate.\n\nTemporary parking passes for the south garage will be distributed to affected tenants by Friday, July 24. Please contact the building office if you have not received your temporary pass by that date.\n\nQuestion: What will happen to tenants whose assigned spaces are on Levels 2-4?",
  options: [
    {
      label: "A",
      text: "They will be temporarily reassigned to the south garage at no extra cost.",
    },
    { label: "B", text: "They will receive a discount on their monthly parking rate." },
    { label: "C", text: "They will need to find parking outside the building entirely." },
    { label: "D", text: "They will be required to reapply for a parking space." },
  ],
  correct: "A",
  explanation:
    "The memo states 'Tenants assigned to spaces on these levels will be temporarily reassigned to the south garage, Levels 1 and 5, at no change to their monthly rate', so (A) is correct.",
};

const part7r9f: PracticeQuestionData = {
  prompt: "Part 7 · Read the news article and answer the question.",
  context:
    "LOCAL NEWS\n\nCedar Street Bridge to Reopen Two Weeks Ahead of Schedule\n\nThe Cedar Street Bridge, closed since March for repairs to its support beams, will reopen to traffic this Friday, nearly two weeks earlier than the city's original estimate. City engineer Priya Raman said the project moved faster than expected because dry weather allowed crews to work every scheduled day without the rain delays common in past spring projects.\n\nThe bridge closure had forced commuters to detour through downtown, adding an average of 15 minutes to the morning commute for residents of the Cedar Heights neighborhood.\n\nQuestion: Why did the bridge repair project finish ahead of schedule?",
  options: [
    { label: "A", text: "The city hired additional repair crews." },
    {
      label: "B",
      text: "Dry weather allowed crews to work every scheduled day without rain delays.",
    },
    { label: "C", text: "The original repair estimate had been overly cautious." },
    { label: "D", text: "Residents petitioned the city to speed up the timeline." },
  ],
  correct: "B",
  explanation:
    "The article states 'the project moved faster than expected because dry weather allowed crews to work every scheduled day without the rain delays common in past spring projects', so (B) is correct.",
};

const part7r9g: PracticeQuestionData = {
  prompt: "Part 7 · Read the invoice and answer the question.",
  context:
    "INVOICE #LN-2298\nGreenPath Landscaping\n\nBill To: Nadia Ferreira, 76 Sycamore Court\nServices: Spring cleanup, mulch installation (12 cubic yards), and trimming of 4 hedges\nAmount Due: $540\n\nPayment is due within 10 days of the invoice date. A 5% discount has already been applied for enrolling in our seasonal maintenance plan. Please note that mulch installation is guaranteed to retain color for 90 days; if fading occurs before then, GreenPath will reapply mulch to the affected areas at no charge.\n\nQuestion: What does GreenPath guarantee about the mulch installation?",
  options: [
    { label: "A", text: "It includes a lifetime color guarantee." },
    { label: "B", text: "It will be inspected monthly by a technician." },
    { label: "C", text: "It will be replaced for free if it fades within 90 days." },
    { label: "D", text: "It qualifies for an automatic seasonal discount renewal." },
  ],
  correct: "C",
  explanation:
    "The invoice states 'mulch installation is guaranteed to retain color for 90 days; if fading occurs before then, GreenPath will reapply mulch to the affected areas at no charge', so (C) is correct.",
};

const part7r9h: PracticeQuestionData = {
  prompt: "Part 7 · Read the meeting minutes and answer the question.",
  context:
    "PTA MEETING MINUTES — Excerpt\nOakridge Elementary Parent-Teacher Association, May 12\n\nAgenda Item 3: Fall Fundraiser Planning\n\nThe committee agreed to hold this year's fundraiser as a fall carnival rather than a bake sale, based on higher net proceeds from last year's carnival at a neighboring school. Members present agreed that each participating family should sign up to staff at least one activity booth for a one-hour shift.\n\nVolunteer sign-up sheets will be sent home with students the week of August 24, and the committee asked that sign-ups be returned no later than September 5 so booth assignments can be finalized.\n\nQuestion: What is each participating family asked to do?",
  options: [
    { label: "A", text: "Donate a specific dollar amount toward the carnival." },
    { label: "B", text: "Bake goods for a table at the carnival." },
    { label: "C", text: "Attend a planning meeting before the event." },
    { label: "D", text: "Sign up to staff at least one activity booth for a one-hour shift." },
  ],
  correct: "D",
  explanation:
    "The minutes state that 'each participating family should sign up to staff at least one activity booth for a one-hour shift', so (D) is correct.",
};

const part7r9i: PracticeQuestionData = {
  prompt: "Part 7 · Read the policy announcement and answer the question.",
  context:
    "OVERTIME PAY POLICY ANNOUNCEMENT\nBarrow Manufacturing — Human Resources\n\nEffective the next pay period, overtime pay for hourly employees will be calculated on a daily basis (any hours worked beyond 8 in a single day) rather than the current weekly basis (any hours beyond 40 in a week). This change applies only to hourly production-line employees; salaried and administrative staff are not affected by this policy.\n\nEmployees who currently work compressed schedules, such as four 10-hour days, should speak with their supervisor, as the new daily calculation may affect their take-home pay differently than under the weekly system.\n\nQuestion: What does the announcement suggest about employees on a compressed four-day, 10-hour schedule?",
  options: [
    {
      label: "A",
      text: "Their pay under the new policy may differ from what they received under the weekly system.",
    },
    { label: "B", text: "They will be moved to a standard five-day schedule automatically." },
    { label: "C", text: "They are now classified as salaried employees." },
    { label: "D", text: "They will receive a flat bonus to offset the change." },
  ],
  correct: "A",
  explanation:
    "The announcement notes that for employees on compressed schedules, 'the new daily calculation may affect their take-home pay differently than under the weekly system', so (A) is correct.",
};

const part7r9j: PracticeQuestionData = {
  prompt: "Part 7 · Read the customer review and answer the question.",
  context:
    "★★★☆☆ (3 out of 5)\nReviewed by: TravelerMei — Verified Stay\n\nHotel: Cliffside Bay Resort\n\nThe view from our room was every bit as stunning as the photos promised, and the pool area was well maintained. Unfortunately, the air conditioning in our room struggled to keep up on the hot afternoons, never quite dropping below what felt like 75 degrees no matter how we adjusted the thermostat. We mentioned it to the front desk on our first night, and a technician came by the next afternoon, but the issue was never fully resolved during our four-night stay.\n\nGreat location, but bring a fan if you're visiting in summer.\n\nQuestion: What problem does the reviewer describe?",
  options: [
    { label: "A", text: "The pool area was poorly maintained." },
    { label: "B", text: "The room's air conditioning never adequately cooled the room." },
    { label: "C", text: "The front desk refused to send a technician." },
    { label: "D", text: "The view from the room did not match the photos." },
  ],
  correct: "B",
  explanation:
    "The reviewer writes that 'the air conditioning in our room struggled to keep up on the hot afternoons, never quite dropping below what felt like 75 degrees', so (B) is correct.",
};

const part7r9k: PracticeQuestionData = {
  prompt: "Part 7 · Read the conference agenda and answer the question.",
  context:
    "CONFERENCE AGENDA\nNorthstar HR Leadership Summit — Day 1\n\n8:30 A.M. — Registration and coffee, Grand Foyer\n9:30 A.M. — Opening keynote: 'The Future of Workplace Flexibility,' Main Hall\n11:00 A.M. — Breakout sessions (choose one): Remote Team Management / Compensation Strategy / Employee Wellness\n12:30 P.M. — Lunch, Terrace Room\n2:00 P.M. — Panel discussion: Building Inclusive Workplaces\n4:00 P.M. — Networking reception, Grand Foyer\n\nNote: Breakout session handouts will be available only in digital form this year; attendees are encouraged to bring a laptop or tablet.\n\nQuestion: What time do the breakout sessions begin?",
  options: [
    { label: "A", text: "8:30 A.M." },
    { label: "B", text: "9:30 A.M." },
    { label: "C", text: "11:00 A.M." },
    { label: "D", text: "2:00 P.M." },
  ],
  correct: "C",
  explanation: "The agenda lists '11:00 A.M. — Breakout sessions (choose one)', so (C) is correct.",
};

const part7r9l: PracticeQuestionData = {
  prompt: "Part 7 · Read the email and answer the question.",
  context:
    "Subject: You're Subscribed to The Weekly Roast\n\nHi Daniel,\n\nThanks for subscribing to The Weekly Roast, Cormorant Coffee's email newsletter. You'll receive one email each Thursday featuring a new coffee origin story, brewing tips, and early access to limited-release beans before they're posted on our website.\n\nAs a welcome gift, a 10% discount code will be sent in your first newsletter email this coming Thursday, valid for 30 days after it's sent.\n\nQuestion: When will Daniel receive his welcome discount code?",
  options: [
    { label: "A", text: "Immediately upon subscribing." },
    { label: "B", text: "After his first purchase from Cormorant Coffee." },
    { label: "C", text: "Only if he refers a friend to subscribe." },
    { label: "D", text: "In his first newsletter email this coming Thursday." },
  ],
  correct: "D",
  explanation:
    "The email states 'a 10% discount code will be sent in your first newsletter email this coming Thursday', so (D) is correct.",
};

const part7r9m: PracticeQuestionData = {
  prompt: "Part 7 · Read the news article and answer the question.",
  context:
    "LOCAL NEWS\n\nDowntown Farmers Market Moving to Larger Lot on Birch Street\n\nThe Saturday Downtown Farmers Market will relocate from its longtime home in the Courthouse Square parking lot to the larger municipal lot on Birch Street starting next month. Market organizer Felix Grantham said the move was necessary because vendor applications this year exceeded the Courthouse Square lot's capacity for the first time.\n\nThe Birch Street lot offers roughly twice the space and will allow the market to accommodate a waiting list of 14 vendors who could not be placed this season. Parking for shoppers will also expand from 40 spaces to over 100.\n\nQuestion: Why is the farmers market relocating?",
  options: [
    { label: "A", text: "Vendor applications exceeded the current lot's capacity." },
    { label: "B", text: "The Courthouse Square lot is being demolished." },
    { label: "C", text: "Shoppers complained about the parking lot's location." },
    { label: "D", text: "The city increased rent for the Courthouse Square lot." },
  ],
  correct: "A",
  explanation:
    "The article states 'the move was necessary because vendor applications this year exceeded the Courthouse Square lot's capacity for the first time', so (A) is correct.",
};

const part7r9n: PracticeQuestionData = {
  prompt: "Part 7 · Read the advertisement and answer the question.",
  context:
    'INTRODUCING LEDGERLINE 4.0\nAccounting software that closes your books faster\n\nLedgerLine 4.0 introduces one-click bank reconciliation, automatically matching transactions against your bank feed so you no longer have to reconcile line by line. Existing LedgerLine customers who upgrade before October 1 will keep their current subscription price locked in, even as new customer pricing rises next quarter.\n\nAlso new: customizable invoice templates and a redesigned reports dashboard. All plans now include unlimited user seats at no extra cost.\n\nQuestion: What does the phrase "keep their current subscription price locked in" imply for customers who upgrade before October 1?',
  options: [
    { label: "A", text: "Their price will be reduced below its current level." },
    {
      label: "B",
      text: "Their price will not increase even though new customer pricing is rising.",
    },
    { label: "C", text: "They will be charged a one-time upgrade fee instead of a subscription." },
    { label: "D", text: "Their subscription will convert to an annual contract." },
  ],
  correct: "B",
  explanation:
    "The advertisement states existing customers who upgrade before October 1 'will keep their current subscription price locked in, even as new customer pricing rises next quarter', so (B) is correct.",
};

const part7r10a: PracticeQuestionData = {
  prompt: "Part 7 · Read the email and answer the question.",
  context:
    'From: security@lumenbank.com\nTo: customers@lumenbank.com\nSubject: Important Security Notice — Action Required\n\nDear Customer,\n\nWe are writing to inform you that on July 10, we detected unauthorized access to a database containing customer email addresses and encrypted account numbers. No passwords or Social Security numbers were affected, as they are stored in a separate, unaffected system.\n\nAs a precaution, we are requiring all customers to reset their online banking password within 5 business days of this notice. You can do this by logging in to your account and selecting "Reset Password" from the account settings menu. We have also increased monitoring on all accounts for unusual activity.\n\nQuestion: What are customers required to do as a result of this notice?',
  options: [
    { label: "A", text: "Reset their online banking password within 5 business days." },
    { label: "B", text: "Close their bank account and open a new one." },
    { label: "C", text: "Visit a branch in person to verify their identity." },
    { label: "D", text: "Change their Social Security number on file." },
  ],
  correct: "A",
  explanation:
    "The email states the bank is 'requiring all customers to reset their online banking password within 5 business days of this notice', so (A) is correct.",
};

const part7r10b: PracticeQuestionData = {
  prompt: "Part 7 · Read the notice and answer the question.",
  context:
    "PRODUCT RECALL NOTICE\nHarvest Table Foods\n\nProduct: Zesty Taco Seasoning Mix, 3 oz packet, Lot Codes 4471-4488\n\nHarvest Table Foods is recalling select lots of its Zesty Taco Seasoning Mix after routine testing revealed the possible presence of undeclared milk powder, an allergen not listed on the product label. Customers with milk allergies who consume the affected product could experience a serious allergic reaction.\n\nNo illnesses have been reported to date. Customers who purchased the affected lots should not consume the product and may return it to the place of purchase for a full refund, no receipt required.\n\nQuestion: Why is Harvest Table Foods recalling the Zesty Taco Seasoning Mix?",
  options: [
    { label: "A", text: "Because the packets were mislabeled with the wrong lot codes." },
    { label: "B", text: "Because the product may contain undeclared milk powder." },
    { label: "C", text: "Because customers reported a metallic taste." },
    { label: "D", text: "Because the company is discontinuing the product line." },
  ],
  correct: "B",
  explanation:
    "The notice states testing revealed 'the possible presence of undeclared milk powder, an allergen not listed on the product label', so (B) is correct.",
};

const part7r10c: PracticeQuestionData = {
  prompt: "Part 7 · Read the job posting and answer the question.",
  context:
    "REGISTERED NURSE, MEDICAL-SURGICAL UNIT — Fairhaven General Hospital\n\nFairhaven General Hospital is seeking a Registered Nurse to join our Medical-Surgical Unit on a full-time, rotating-shift basis. Responsibilities include patient assessment, medication administration, and coordination with physicians on care plans.\n\nCandidates must hold a current state RN license and have at least two years of acute care experience. BLS and ACLS certifications must be current at the time of hire; candidates without ACLS certification may still apply if willing to obtain it within 90 days of starting. A bachelor's degree in nursing is preferred but not required.\n\nQuestion: What is required of applicants for this position?",
  options: [
    { label: "A", text: "A bachelor's degree in nursing." },
    { label: "B", text: "Five years of acute care experience." },
    {
      label: "C",
      text: "A current state RN license and at least two years of acute care experience.",
    },
    { label: "D", text: "Prior experience specifically in pediatric care." },
  ],
  correct: "C",
  explanation:
    "The posting states candidates 'must hold a current state RN license and have at least two years of acute care experience', while a nursing degree is 'preferred but not required', so (C) is correct.",
};

const part7r10d: PracticeQuestionData = {
  prompt: "Part 7 · Read the job posting and answer the question.",
  context:
    "GRADE 3 TEACHER — Elmsworth Elementary School\n\nElmsworth Elementary School is hiring a full-time Grade 3 teacher for the upcoming school year. Duties include developing lesson plans aligned with state curriculum standards, communicating regularly with parents, and supervising students during recess rotations.\n\nApplicants must hold a valid state teaching certification in elementary education and must complete a background check before an offer can be finalized. Experience with a specific reading curriculum is not required, as training will be provided during the two-week onboarding period in August.\n\nQuestion: What must happen before a job offer can be finalized?",
  options: [
    { label: "A", text: "The applicant must complete the two-week onboarding period." },
    { label: "B", text: "The applicant must have experience with a specific reading curriculum." },
    { label: "C", text: "The applicant must submit three letters of recommendation." },
    { label: "D", text: "The applicant must complete a background check." },
  ],
  correct: "D",
  explanation:
    "The posting states applicants 'must complete a background check before an offer can be finalized', so (D) is correct.",
};

const part7r10e: PracticeQuestionData = {
  prompt: "Part 7 · Read the advertisement and answer the question.",
  context:
    "SUMMER CLEARANCE SALE\nDreamRest Mattress Gallery\n\nThis weekend only, save up to 40% on select mattress models, including our best-selling PlushCloud Hybrid. Every clearance purchase includes free white-glove delivery and removal of your old mattress, a $150 value.\n\nFinancing is available with 0% interest for 12 months on purchases over $800, subject to credit approval. Clearance mattresses are final sale and cannot be returned or exchanged once delivered.\n\nQuestion: What is included with every clearance purchase?",
  options: [
    { label: "A", text: "Free delivery and removal of the customer's old mattress." },
    { label: "B", text: "A refundable deposit toward a future purchase." },
    { label: "C", text: "An extended 10-year warranty." },
    { label: "D", text: "A complimentary set of pillows." },
  ],
  correct: "A",
  explanation:
    "The advertisement states 'Every clearance purchase includes free white-glove delivery and removal of your old mattress, a $150 value', so (A) is correct.",
};

const part7r10f: PracticeQuestionData = {
  prompt: "Part 7 · Read the internal memo and answer the question.",
  context:
    "MEMO\nTo: All Employees\nFrom: Facilities & Security\nRe: New Building Access System\n\nStarting Monday, August 3, Bramwell Tower will switch from key-card access to a new mobile-badge system using the CredSafe app. Employees must download the CredSafe app and activate their digital badge before that date to avoid being locked out of the building.\n\nPhysical key cards will stop working entirely once the new system goes live; there will be no transition period during which both systems function side by side. IT will hold walk-in activation sessions in the lobby each morning this week for employees who need help.\n\nQuestion: What must employees do before August 3?",
  options: [
    { label: "A", text: "Return their physical key cards to Facilities." },
    { label: "B", text: "Download the CredSafe app and activate their digital badge." },
    { label: "C", text: "Attend a mandatory security training session." },
    { label: "D", text: "Submit a new photo for their employee ID." },
  ],
  correct: "B",
  explanation:
    "The memo states 'Employees must download the CredSafe app and activate their digital badge before that date to avoid being locked out of the building', so (B) is correct.",
};

const part7r10g: PracticeQuestionData = {
  prompt: "Part 7 · Read the news article and answer the question.",
  context:
    "LOCAL NEWS\n\nClosed Textile Plant to Reopen, Bringing 200 Jobs to Millport\n\nThe former Ashgrove Textile plant, shuttered for nearly three years, will reopen this fall under new ownership, Coastal Fabrics Inc., which plans to hire approximately 200 workers for manufacturing and warehouse roles. Company spokesperson Dana Whitfield said the location was chosen because of its proximity to rail lines, which will cut shipping costs to the company's East Coast distribution centers.\n\nMillport Mayor Enrique Salas called the announcement a turning point for the town's economy, noting that many former plant employees have struggled to find comparable work since the original closure.\n\nQuestion: Why did Coastal Fabrics Inc. choose the Millport location?",
  options: [
    { label: "A", text: "The town offered the company a large tax incentive." },
    { label: "B", text: "The original building required no renovation." },
    { label: "C", text: "Its proximity to rail lines would cut shipping costs." },
    { label: "D", text: "Former plant employees agreed to return at lower wages." },
  ],
  correct: "C",
  explanation:
    "The article states the location was chosen 'because of its proximity to rail lines, which will cut shipping costs to the company's East Coast distribution centers', so (C) is correct.",
};

const part7r10h: PracticeQuestionData = {
  prompt: "Part 7 · Read the invoice and answer the question.",
  context:
    "INVOICE #CT-5528\nSavory Grove Catering\n\nBill To: Whitmore & Cole Law Firm\nEvent: Client Appreciation Luncheon, July 18, 45 guests\nServices: Plated lunch service, dessert station, and staffing for 3 hours\nAmount Due: $2,025\n\nA 20% gratuity has already been included in the total above. Payment is due within 10 business days of the event. Please note that any changes to the guest count made within 48 hours of the event will be billed at the full per-person rate, even if the final guest count is lower.\n\nQuestion: What will happen if the guest count is reduced within 48 hours of the event?",
  options: [
    { label: "A", text: "The client will receive a partial refund for the reduction." },
    { label: "B", text: "The event will be rescheduled automatically." },
    { label: "C", text: "The 20% gratuity will be waived." },
    { label: "D", text: "The client will still be billed at the full per-person rate." },
  ],
  correct: "D",
  explanation:
    "The invoice states 'any changes to the guest count made within 48 hours of the event will be billed at the full per-person rate, even if the final guest count is lower', so (D) is correct.",
};

const part7r10i: PracticeQuestionData = {
  prompt: "Part 7 · Read the meeting minutes and answer the question.",
  context:
    "MEETING MINUTES SUMMARY\nCedarbrook Homeowners Association — Board Meeting, June 9\n\nThe Board approved $18,500 for resurfacing the community pool deck, with work scheduled for the first two weeks of September when the pool is normally closed for the season. The project will be funded from the HOA's existing capital reserve account, so no special assessment will be levied on homeowners.\n\nThe Board also discussed but did not vote on adding a second grill station near the pool, tabling the item until the September meeting for further cost estimates.\n\nQuestion: How will the pool deck resurfacing project be funded?",
  options: [
    { label: "A", text: "Through the HOA's existing capital reserve account." },
    { label: "B", text: "Through a special assessment charged to homeowners." },
    { label: "C", text: "Through a fundraiser held by the pool committee." },
    { label: "D", text: "Through an increase in monthly HOA dues." },
  ],
  correct: "A",
  explanation:
    "The minutes state the project 'will be funded from the HOA's existing capital reserve account, so no special assessment will be levied on homeowners', so (A) is correct.",
};

const part7r10j: PracticeQuestionData = {
  prompt: "Part 7 · Read the policy announcement and answer the question.",
  context:
    "PARENTAL LEAVE POLICY EXPANSION\nBrightfield Technologies — Human Resources\n\nEffective January 1, paid parental leave for all full-time employees will expand from 8 weeks to 12 weeks following the birth, adoption, or foster placement of a child. This benefit applies equally to all parents, regardless of gender, and is available regardless of the employee's length of tenure with the company.\n\nEmployees who have already begun a leave period before January 1 will have their remaining leave extended to reflect the new 12-week total, provided their leave started on or after October 1 of the current year.\n\nQuestion: What can be inferred about an employee whose parental leave began in September of the current year?",
  options: [
    { label: "A", text: "They will automatically receive the extended 12-week benefit." },
    { label: "B", text: "They would not qualify for the extension under the new policy." },
    { label: "C", text: "They must restart their leave in January to qualify." },
    { label: "D", text: "They will receive a prorated version of the extension." },
  ],
  correct: "B",
  explanation:
    "The announcement states the extension applies to leave 'started on or after October 1 of the current year', so an employee whose leave began in September would not qualify, making (B) correct.",
};

const part7r10k: PracticeQuestionData = {
  prompt: "Part 7 · Read the customer review and answer the question.",
  context:
    "★★☆☆☆ (2 out of 5)\nReviewed by: HomeInProgress\n\nProduct: Ashford Sectional Sofa — Meridian Home Furnishings\n\nThe sofa itself is comfortable and looks great in our living room, but the delivery experience left a lot to be desired. The crew arrived four hours outside the scheduled window without any call ahead, and once assembled, we noticed one of the cushion zippers was already broken. I contacted customer service the same day and was told a replacement cushion would ship 'within 2-3 weeks,' though it's now been over a month with no update.\n\nI'd think twice before ordering large furniture from this company again.\n\nQuestion: What does the reviewer indicate about the replacement cushion?",
  options: [
    { label: "A", text: "It arrived broken a second time." },
    { label: "B", text: "It was delivered within the promised 2-3 week window." },
    { label: "C", text: "It has not arrived despite the promised timeframe having passed." },
    { label: "D", text: "It was refunded instead of replaced." },
  ],
  correct: "C",
  explanation:
    "The reviewer writes that a replacement cushion was promised 'within 2-3 weeks,' but 'it's now been over a month with no update', indicating the item has not arrived despite the promised timeframe passing, so (C) is correct.",
};

const part7r10l: PracticeQuestionData = {
  prompt: "Part 7 · Read the training schedule and answer the question.",
  context:
    "NEW HIRE TRAINING SCHEDULE\nHarborview Insurance Group — Week 1\n\nMonday: 9:00 A.M. Orientation and paperwork, Conference Room A\nMonday: 1:00 P.M. IT systems setup and login training\nTuesday: 9:00 A.M. Product overview session, Training Center\nWednesday: 9:00 A.M. Shadowing with an assigned mentor (all day)\nThursday: 10:00 A.M. Compliance and ethics training (mandatory, no exceptions)\nFriday: 11:00 A.M. Team lunch and Q&A with department manager\n\nNote: New hires should bring a laptop to all sessions except Wednesday's shadowing day, during which laptops are not needed.\n\nQuestion: What time does the compliance and ethics training begin?",
  options: [
    { label: "A", text: "10:00 A.M. on Thursday." },
    { label: "B", text: "9:00 A.M. on Tuesday." },
    { label: "C", text: "1:00 P.M. on Monday." },
    { label: "D", text: "11:00 A.M. on Friday." },
  ],
  correct: "A",
  explanation:
    "The schedule lists 'Thursday: 10:00 A.M. Compliance and ethics training (mandatory, no exceptions)', so (A) is correct.",
};

const part7r10m: PracticeQuestionData = {
  prompt: "Part 7 · Read the email and answer the question.",
  context:
    "From: p.alvarado@brightfieldtech.com\nTo: marketing-team@brightfieldtech.com\nSubject: RSVP Needed — Fall Team Offsite\n\nHi team,\n\nAs a reminder, this year's team offsite will be held at Pinehurst Lodge on September 19-20. Please RSVP through the sign-up form by August 29 so we can finalize meal counts and lodge room assignments with the venue.\n\nIf we do not receive your RSVP by that date, we will assume you are not attending and will not reserve a spot or meal for you, since the lodge requires a final headcount one week in advance.\n\nQuestion: What is the main purpose of this email?",
  options: [
    { label: "A", text: "To announce the cancellation of the team offsite." },
    { label: "B", text: "To share directions to Pinehurst Lodge." },
    { label: "C", text: "To introduce a new venue for future offsites." },
    { label: "D", text: "To remind team members to RSVP by the deadline." },
  ],
  correct: "D",
  explanation:
    "The email opens with 'As a reminder, this year's team offsite will be held at Pinehurst Lodge... Please RSVP through the sign-up form by August 29', so its main purpose is to remind team members to submit their RSVP by the deadline, making (D) correct.",
};

const part7r11a: PracticeQuestionData = {
  prompt: "Part 7 · Read the email and answer the question.",
  context:
    "From: payroll@brightfield-tech.com\nTo: all-staff@brightfield-tech.com\nSubject: Upcoming Change to Pay Schedule\n\nBeginning with the November pay period, Brightfield Technologies will move from a biweekly pay schedule to a semi-monthly schedule, with paychecks issued on the 15th and last day of each month. Employees will notice one shorter transition period in October to align with the new schedule, but total annual pay will not change.\n\nDirect deposit information does not need to be updated, and no action is required from employees. Please direct any questions to the payroll help desk at ext. 4420.\n\nQuestion: What is the main purpose of this email?",
  options: [
    { label: "A", text: "To inform staff that the pay schedule is changing to twice a month." },
    { label: "B", text: "To request that employees update their direct deposit information." },
    { label: "C", text: "To announce a reduction in employees' annual pay." },
    { label: "D", text: "To ask employees to contact the payroll help desk immediately." },
  ],
  correct: "A",
  explanation:
    "The email states the company 'will move from a biweekly pay schedule to a semi-monthly schedule, with paychecks issued on the 15th and last day of each month', so (A) is correct.",
};

const part7r11b: PracticeQuestionData = {
  prompt: "Part 7 · Read the product recall notice and answer the question.",
  context:
    "PRODUCT RECALL NOTICE\nComfort Glow Home Products\n\nProduct: WarmBreeze Portable Space Heater, Model WB-410\n\nComfort Glow Home Products is recalling the WarmBreeze Portable Space Heater after testing found that the power cord can overheat and melt during extended use, posing a fire hazard. Four incidents involving minor property damage have been reported; no injuries have occurred.\n\nCustomers should immediately unplug and stop using the heater. A free replacement cord and safety inspection kit can be requested at comfortglow.com/recall or by calling 1-800-555-0177.\n\nQuestion: Why is Comfort Glow Home Products recalling the WarmBreeze Portable Space Heater?",
  options: [
    { label: "A", text: "Because the heater's thermostat displays an inaccurate temperature." },
    { label: "B", text: "Because the power cord can overheat and melt, posing a fire hazard." },
    { label: "C", text: "Because customers complained about excessive noise during operation." },
    { label: "D", text: "Because the company is discontinuing all portable heater models." },
  ],
  correct: "B",
  explanation:
    "The notice states testing found 'the power cord can overheat and melt during extended use, posing a fire hazard', so (B) is correct.",
};

const part7r11c: PracticeQuestionData = {
  prompt: "Part 7 · Read the job posting and answer the question.",
  context:
    "SOCIAL MEDIA MANAGER — Riverbend Wildlife Trust\n\nRiverbend Wildlife Trust, a nonprofit dedicated to local habitat conservation, is seeking a Social Media Manager to grow our online presence and support fundraising campaigns. Responsibilities include planning content calendars, managing our Instagram and Facebook accounts, and coordinating with our development team on donor appeals.\n\nCandidates must submit a portfolio of at least three prior social media campaigns they have managed. A degree in marketing or communications is preferred but not required for candidates who can demonstrate strong writing samples and campaign results. This is a part-time, remote position.\n\nQuestion: What must applicants submit with their application?",
  options: [
    { label: "A", text: "A signed confidentiality agreement." },
    { label: "B", text: "A letter of recommendation from a nonprofit employer." },
    { label: "C", text: "A portfolio of at least three prior social media campaigns." },
    { label: "D", text: "A completed marketing degree transcript." },
  ],
  correct: "C",
  explanation:
    "The posting states 'Candidates must submit a portfolio of at least three prior social media campaigns they have managed', so (C) is correct.",
};

const part7r11d: PracticeQuestionData = {
  prompt: "Part 7 · Read the advertisement and answer the question.",
  context:
    "15TH ANNIVERSARY SALE\nTurning Pages Bookstore\n\nTo celebrate 15 years in our neighborhood, Turning Pages is offering 20% off all hardcover fiction and 30% off all bargain-priced titles now through the end of the month. Members of our Reader's Circle loyalty program receive an additional 5% off on top of sale prices, stackable with the anniversary discount.\n\nThis is the first time we've allowed a loyalty discount to stack with a storewide sale, so Reader's Circle members should expect deeper savings than during past promotions.\n\nQuestion: What can be inferred about this year's anniversary sale compared to past sales?",
  options: [
    { label: "A", text: "It offers a smaller discount than previous years." },
    { label: "B", text: "It excludes hardcover fiction titles for the first time." },
    { label: "C", text: "It is only available to new bookstore customers." },
    {
      label: "D",
      text: "It allows loyalty members to save more than they could in previous sales.",
    },
  ],
  correct: "D",
  explanation:
    "The ad states 'This is the first time we've allowed a loyalty discount to stack with a storewide sale, so Reader's Circle members should expect deeper savings than during past promotions', so (D) is correct.",
};

const part7r11e: PracticeQuestionData = {
  prompt: "Part 7 · Read the internal memo and answer the question.",
  context:
    "MEMO\nTo: All Staff\nFrom: IT Security Office\nRe: Mandatory Cybersecurity Training\n\nAll employees must complete the annual cybersecurity awareness course through the online training portal by August 15. The course takes approximately 45 minutes and covers phishing recognition, password practices, and data handling procedures.\n\nEmployees who have not completed the course by the deadline will have their network access temporarily suspended until the training is finished. Supervisors will receive a completion report on August 16 to follow up with any employees still pending.\n\nQuestion: What must employees do by August 15?",
  options: [
    { label: "A", text: "Complete the annual cybersecurity awareness course." },
    { label: "B", text: "Submit a report on phishing attempts they have received." },
    { label: "C", text: "Change their network password." },
    { label: "D", text: "Meet individually with their supervisor." },
  ],
  correct: "A",
  explanation:
    "The memo states 'All employees must complete the annual cybersecurity awareness course through the online training portal by August 15', so (A) is correct.",
};

const part7r11f: PracticeQuestionData = {
  prompt: "Part 7 · Read the news article and answer the question.",
  context:
    "LOCAL NEWS\n\nCity Extends Pool Hours Amid Ongoing Heat Wave\n\nThe Fairbridge Community Pool will extend its daily hours through the end of the week, staying open until 9:00 P.M. instead of the usual 6:00 P.M. closing time, Parks and Recreation officials announced Tuesday. The decision comes as the region experiences its third consecutive day of temperatures above 95 degrees.\n\nAdditional lifeguards have been scheduled to cover the extended hours, and the snack bar will remain open to match the new closing time. Officials said hours will return to normal once the heat wave breaks.\n\nQuestion: Why did the city extend the pool's hours?",
  options: [
    { label: "A", text: "To accommodate a scheduled swim competition." },
    { label: "B", text: "Because the region is experiencing an extended heat wave." },
    { label: "C", text: "Because the snack bar required additional operating hours." },
    { label: "D", text: "To make up for hours lost during a previous closure." },
  ],
  correct: "B",
  explanation:
    "The article states 'The decision comes as the region experiences its third consecutive day of temperatures above 95 degrees', so (B) is correct.",
};

const part7r11g: PracticeQuestionData = {
  prompt: "Part 7 · Read the invoice and answer the question.",
  context:
    "INVOICE #CN-3391\nHollis IT Consulting\n\nBill To: Ashgrove Dental Partners\nServices: Network security audit (8 hours) and firewall configuration (4 hours), billed at $110/hour\nAmount Due: $1,320\n\nThis invoice reflects work completed under your monthly retainer agreement, which includes up to 10 hours of support per month at no additional charge; hours beyond the retainer are billed at the standard rate above. This month's total usage was 12 hours, 2 of which exceeded the retainer allowance.\n\nPayment is due within 15 days of the invoice date.\n\nQuestion: What does the invoice indicate about this month's hours?",
  options: [
    { label: "A", text: "All 12 hours were covered under the monthly retainer." },
    { label: "B", text: "The retainer agreement was canceled this month." },
    {
      label: "C",
      text: "2 of the 12 hours exceeded the retainer allowance and were billed separately.",
    },
    { label: "D", text: "The firewall configuration was provided free of charge." },
  ],
  correct: "C",
  explanation:
    "The invoice states 'This month's total usage was 12 hours, 2 of which exceeded the retainer allowance', so (C) is correct.",
};

const part7r11h: PracticeQuestionData = {
  prompt: "Part 7 · Read the meeting minutes and answer the question.",
  context:
    "CITY COUNCIL MEETING MINUTES — Excerpt\nFairbridge City Council, Regular Session, July 8\n\nAgenda Item 6: Elm Street Bike Lane Proposal\n\nThe Council voted 6-1 to approve the installation of a protected bike lane along Elm Street between 3rd and 9th Avenues, with construction to begin in early October. Council Member Osei raised concerns about the loss of on-street parking spaces, and the final vote included a condition that the city conduct a parking impact study within six months of the bike lane's completion.\n\nThe Council tabled a related proposal to extend the bike lane to Birchwood Avenue, pending the results of that study.\n\nQuestion: What condition was included in the approved vote?",
  options: [
    { label: "A", text: "The bike lane must be removed if usage is low." },
    { label: "B", text: "Construction must be completed before October." },
    { label: "C", text: "The extension to Birchwood Avenue must begin immediately." },
    {
      label: "D",
      text: "The city must conduct a parking impact study within six months of completion.",
    },
  ],
  correct: "D",
  explanation:
    "The minutes state 'the final vote included a condition that the city conduct a parking impact study within six months of the bike lane's completion', so (D) is correct.",
};

const part7r11i: PracticeQuestionData = {
  prompt: "Part 7 · Read the policy announcement and answer the question.",
  context:
    "TUITION REIMBURSEMENT POLICY UPDATE\nDelacroix Financial Group — Human Resources\n\nEffective January 1, the annual tuition reimbursement cap for employees pursuing job-related coursework will increase from $2,500 to $4,000 per calendar year. Employees must maintain a grade of B or higher in each reimbursed course and remain employed with the company for at least six months after the course ends, or the reimbursement must be repaid in full.\n\nCourses unrelated to an employee's current role or a documented career path within the company are not eligible for reimbursement under this policy.\n\nQuestion: What can be inferred about an employee who leaves the company four months after completing a reimbursed course?",
  options: [
    { label: "A", text: "They would be required to repay the reimbursement in full." },
    { label: "B", text: "They would keep the reimbursement without any obligation." },
    { label: "C", text: "They would only need to repay half of the reimbursement." },
    { label: "D", text: "They would be ineligible for reimbursement of future courses only." },
  ],
  correct: "A",
  explanation:
    "The announcement states employees 'must ... remain employed with the company for at least six months after the course ends, or the reimbursement must be repaid in full', and an employee leaving after four months falls short of that window, so (A) is correct.",
};

const part7r11j: PracticeQuestionData = {
  prompt: "Part 7 · Read the customer review and answer the question.",
  context:
    "★★★☆☆ (3 out of 5)\nReviewed by: DailyGrinder22 — Verified Subscriber\n\nApp: PulseTrack Fitness\n\nThe workout library is genuinely excellent — new routines are added weekly and the video demonstrations are clear. My issue is with syncing: my step count and heart rate data from my smartwatch frequently fail to sync with the app, sometimes dropping an entire day's data. I've reinstalled the app twice and reached out to support, who acknowledged it's a 'known issue' but couldn't give me a timeline for a fix.\n\nI'll stick with it for now because of the workout content, but the syncing problems are frustrating.\n\nQuestion: What is the reviewer's main complaint about PulseTrack Fitness?",
  options: [
    { label: "A", text: "The workout library is not updated frequently enough." },
    { label: "B", text: "The app frequently fails to sync data from a smartwatch." },
    { label: "C", text: "Customer support refused to acknowledge the issue." },
    { label: "D", text: "The video demonstrations are unclear." },
  ],
  correct: "B",
  explanation:
    "The reviewer writes 'my step count and heart rate data from my smartwatch frequently fail to sync with the app, sometimes dropping an entire day's data', so (B) is correct.",
};

const part7r11k: PracticeQuestionData = {
  prompt: "Part 7 · Read the conference agenda and answer the question.",
  context:
    "CONFERENCE AGENDA\nSustainable Business Forum — Day 2\n\n8:00 A.M. — Registration and coffee, East Atrium\n9:00 A.M. — Keynote: 'Supply Chains and Carbon Accounting,' Grand Hall\n10:30 A.M. — Breakout sessions (choose one): Renewable Energy Procurement / Circular Packaging / Green Financing\n12:00 P.M. — Lunch, Terrace Garden\n1:30 P.M. — Case study panel: Regional Manufacturers Leading the Transition\n3:30 P.M. — Closing remarks and networking reception\n\nNote: All session materials will be distributed via a QR code at check-in; printed handouts will not be available this year.\n\nQuestion: What time do the breakout sessions begin?",
  options: [
    { label: "A", text: "8:00 A.M." },
    { label: "B", text: "9:00 A.M." },
    { label: "C", text: "10:30 A.M." },
    { label: "D", text: "1:30 P.M." },
  ],
  correct: "C",
  explanation: "The agenda lists '10:30 A.M. — Breakout sessions (choose one)', so (C) is correct.",
};

const part7r11l: PracticeQuestionData = {
  prompt: "Part 7 · Read the email and answer the question.",
  context:
    "From: management@birchwoodapts.com\nTo: all-residents@birchwoodapts.com\nSubject: Scheduled Pest Control Treatment — Action Required\n\nDear Residents,\n\nOur pest control provider will treat all units in Building C on Thursday, July 30, between 9:00 A.M. and 1:00 P.M. as part of our quarterly preventive service. Residents must vacate their units during this window and remove pets from the premises, as the treatment involves a chemical spray that requires several hours to fully dry.\n\nResidents do not need to remove food from cabinets, but countertops should be cleared beforehand. Units that cannot be accessed during the scheduled window will be treated on the rescheduled date of August 6.\n\nQuestion: What must residents do before the treatment begins?",
  options: [
    { label: "A", text: "Remove all food items from their kitchen cabinets." },
    { label: "B", text: "Submit a written request to skip the treatment." },
    { label: "C", text: "Schedule an alternate treatment date with management." },
    { label: "D", text: "Clear their countertops and vacate the unit with any pets." },
  ],
  correct: "D",
  explanation:
    "The email states 'Residents must vacate their units during this window and remove pets from the premises' and that 'countertops should be cleared beforehand', so (D) is correct.",
};

const part7r11m: PracticeQuestionData = {
  prompt: "Part 7 · Read the job posting and answer the question.",
  context:
    "FREELANCE COPYWRITER — Lumen & Co. Creative Agency\n\nLumen & Co. is seeking a freelance copywriter to support web and email campaigns for a rotating roster of clients. This is a project-based, fully remote role with no minimum weekly hour commitment.\n\nApplicants must submit three writing samples demonstrating range across at least two industries. Experience with a specific content management system is not required, as onboarding materials are provided for each client's platform. Compensation is $0.60 per word, paid within 15 days of invoice submission.\n\nQuestion: What must applicants submit as part of their application?",
  options: [
    {
      label: "A",
      text: "Three writing samples demonstrating range across at least two industries.",
    },
    { label: "B", text: "A certification in a specific content management system." },
    { label: "C", text: "References from at least two previous clients." },
    { label: "D", text: "A minimum weekly availability commitment." },
  ],
  correct: "A",
  explanation:
    "The posting states 'Applicants must submit three writing samples demonstrating range across at least two industries', so (A) is correct.",
};

const part7r11n: PracticeQuestionData = {
  prompt: "Part 7 · Read the advertisement and answer the question.",
  context:
    "LEARN A NEW LANGUAGE THIS FALL\nLinguava — Annual Plan Sale\n\nFor a limited time, get our Annual Plan for $89 (regularly $149), unlocking every language course, offline lesson downloads, and personalized review sessions based on your progress. This offer applies only to new annual subscribers; current monthly subscribers must cancel their existing plan before purchasing the discounted annual plan separately.\n\nThe sale ends September 30, and the discounted rate applies only to the first year; renewal after year one will be billed at the standard annual rate of $149.\n\nQuestion: What is true about current monthly subscribers who want this offer?",
  options: [
    { label: "A", text: "They will be automatically upgraded at the discounted rate." },
    { label: "B", text: "They must cancel their monthly plan before purchasing the annual plan." },
    { label: "C", text: "They are not eligible for the offer under any circumstance." },
    { label: "D", text: "They receive the discount applied retroactively to past payments." },
  ],
  correct: "B",
  explanation:
    "The ad states 'current monthly subscribers must cancel their existing plan before purchasing the discounted annual plan separately', so (B) is correct.",
};

const part7r11o: PracticeQuestionData = {
  prompt: "Part 7 · Read the news article and answer the question.",
  context:
    "LOCAL NEWS\n\nGranite Hill Manufacturing Completes Solar Panel Installation\n\nGranite Hill Manufacturing announced Monday that it has completed installation of a 2-megawatt solar array atop its main production facility, a project the company says will offset roughly 70% of the plant's annual electricity consumption. Plant manager Yusuf Demir said the investment is expected to pay for itself within seven years through reduced utility bills.\n\nThe remaining 30% of the plant's electricity needs will continue to be purchased from the regional grid, though Demir noted the company is evaluating battery storage options that could further reduce grid reliance in the future.\n\nQuestion: What does the article imply about Granite Hill Manufacturing's electricity supply after the solar installation?",
  options: [
    { label: "A", text: "The plant will rely entirely on solar power going forward." },
    { label: "B", text: "The plant will sell excess electricity back to the grid." },
    { label: "C", text: "The plant will still purchase some electricity from the grid." },
    { label: "D", text: "The plant's electricity consumption will increase overall." },
  ],
  correct: "C",
  explanation:
    "The article states 'The remaining 30% of the plant's electricity needs will continue to be purchased from the regional grid', so (C) is correct.",
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
  part2am,
  part2an,
  part2ao,
  part2ap,
  part2aq,
  part2ar,
  part2as,
  part2new1,
  part2new2,
  part2new3,
  part2new4,
  part2new5,
  part2new6,
  part2new7,
  part2r9a,
  part2r9b,
  part2r9c,
  part2r9d,
  part2r9e,
  part2r9f,
  part2r10a,
  part2r10b,
  part2r10c,
  part2r10d,
  part2r10e,
  part2r10f,
  part2r10g,
  part2r11a,
  part2r11b,
  part2r11c,
  part2r11d,
  part2r11e,
  part2r11f,
];
export const part3Questions: PracticeQuestionData[] = [
  part31,
  part32,
  part33,
  part3b1,
  part3b2,
  part3b3,
  part3c1,
  part3c2,
  part3c3,
  part3d1,
  part3d2,
  part3d3,
  part3e1,
  part3e2,
  part3e3,
  part3f,
  part3g,
  part3h,
  part3i1,
  part3i2,
  part3i3,
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
  part3ba,
  part3bb,
  part3bc,
  part3bd,
  part3be,
  part3bf,
  part3bg,
  part3bh,
  part3bi,
  part3bj,
  part3bk,
  part3bl,
  part3bm,
  part3bn,
  part3bo,
  part3bp,
  part3bq,
  part3br,
  part3bs1,
  part3bs2,
  part3bs3,
  part3new1,
  part3new2,
  part3new3,
  part3new4,
  part3new5,
  part3new6,
  part3new7,
  part3new8,
  part3new9,
  part3new10,
  part3r9a,
  part3r9b1,
  part3r9b2,
  part3r9b3,
  part3r9c,
  part3r9d,
  part3r9e,
  part3r9f,
  part3r9g,
  part3r9h,
  part3r9i,
  part3r9j,
  part3r10a,
  part3r10b,
  part3r10c,
  part3r10d,
  part3r10e,
  part3r10f,
  part3r10g,
  part3r10h,
  part3r10i,
  part3r10j,
  part3r11a,
  part3r11b,
  part3r11c,
  part3r11d,
  part3r11e,
  part3r11f,
  part3r11g,
  part3r11h,
  part3r11i,
  part3r11j,
];
export const part4Questions: PracticeQuestionData[
  ] = [
  part4a1,
  part4a2,
  part4a3,
  part4b1,
  part4b2,
  part4b3,
  part4c1,
  part4c2,
  part4c3,
  part4d1,
  part4d2,
  part4d3,
  part4e1,
  part4e2,
  part4e3,
  part4f1,
  part4f2,
  part4f3,
  part4g1,
  part4g2,
  part4g3,
  part4h1,
  part4h2,
  part4h3,
  part4i1,
  part4i2,
  part4i3,
  part4j1,
  part4j2,
  part4j3,
  part4k1,
  part4k2,
  part4k3,
  part4l1,
  part4l2,
  part4l3,
  part4m1,
  part4m2,
  part4m3,
  part4n1,
  part4n2,
  part4n3,
  part4o1,
  part4o2,
  part4o3,
  part4p1,
  part4p2,
  part4p3,
  part4q1,
  part4q2,
  part4q3,
  part4r1,
  part4r2,
  part4r3,
  part4s1,
  part4s2,
  part4s3,
  part4t1,
  part4t2,
  part4t3,
  part4u1,
  part4u2,
  part4u3,
  part4v1,
  part4v2,
  part4v3,
  part4w1,
  part4w2,
  part4w3,
  part4x1,
  part4x2,
  part4x3,
  part4y1,
  part4y2,
  part4y3,
  part4z1,
  part4z2,
  part4z3,
  part4aa1,
  part4aa2,
  part4aa3,
  part4ab1,
  part4ab2,
  part4ab3,
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
  part5au,
  part5av,
  part5aw,
  part5ax,
  part5ay,
  part5az,
  part5ba,
  part5bb,
  part5bc,
  part5new1,
  part5new2,
  part5new3,
  part5new4,
  part5new5,
  part5new6,
  part5new7,
  part5r9a,
  part5r9b,
  part5r9c,
  part5r9d,
  part5r9e,
  part5r9f,
  part5r9g,
  part5r9h,
  part5r10a,
  part5r10b,
  part5r10c,
  part5r10d,
  part5r10e,
  part5r10f,
  part5r10g,
  part5r10h,
  part5r11a,
  part5r11b,
  part5r11c,
  part5r11d,
  part5r11e,
  part5r11f,
  part5r11g,
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
  part6aa,
  part6ab,
  part6ac,
  part6new1,
  part6new2,
  part6new3,
  part6new4,
  part6r9a,
  part6r9b,
  part6r9c,
  part6r9d,
  part6r10a,
  part6r10b,
  part6r10c,
  part6r10d,
  part6r11a,
  part6r11b,
  part6r11c,
  part6r11d,
  part6r11e,
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
  part7bc,
  part7bd,
  part7be,
  part7bf,
  part7bg,
  part7bh,
  part7bi,
  part7bj,
  part7bk,
  part7bl,
  part7bm,
  part7bn,
  part7bo,
  part7bp,
  part7bq,
  part7br,
  part7bs,
  part7bt,
  part7bu,
  part7bv,
  part7bw,
  part7bx,
  part7by,
  part7bz,
  part7ca,
  part7cb,
  part7cc,
  part7cd,
  part7ce,
  part7cf,
  part7cg,
  part7ch,
  part7ci,
  part7cj,
  part7ck,
  part7cl,
  part7cm,
  part7cn,
  part7co,
  part7cp,
  part7cq,
  part7cr,
  part7cs,
  part7ct,
  part7new1,
  part7new2,
  part7new3,
  part7new4,
  part7new5,
  part7new6,
  part7new7,
  part7new8,
  part7new9,
  part7new10,
  part7new11,
  part7new12,
  part7new13,
  part7new14,
  part7r9a,
  part7r9b,
  part7r9c,
  part7r9d,
  part7r9e,
  part7r9f,
  part7r9g,
  part7r9h,
  part7r9i,
  part7r9j,
  part7r9k,
  part7r9l,
  part7r9m,
  part7r9n,
  part7r10a,
  part7r10b,
  part7r10c,
  part7r10d,
  part7r10e,
  part7r10f,
  part7r10g,
  part7r10h,
  part7r10i,
  part7r10j,
  part7r10k,
  part7r10l,
  part7r10m,
  part7r11a,
  part7r11b,
  part7r11c,
  part7r11d,
  part7r11e,
  part7r11f,
  part7r11g,
  part7r11h,
  part7r11i,
  part7r11j,
  part7r11k,
  part7r11l,
  part7r11m,
  part7r11n,
  part7r11o,
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
