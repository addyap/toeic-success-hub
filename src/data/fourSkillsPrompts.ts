/** Speaking and Writing practice prompt banks for /four-skills.
 *
 *  Split out of fourSkills.ts because these arrays (and the prompt text
 *  they carry) are the bulk of that data file's weight — this module is
 *  imported dynamically by the route (`import("@/data/fourSkillsPrompts")`),
 *  the same lazy-data pattern already proven on /listening-reading, so the
 *  four-skills route's initial JS chunk only carries the small structural
 *  data (examSections/examFacts/speakingTasks/writingTasks) that stays in
 *  fourSkills.ts. Import types from here (`import type`), never the arrays
 *  themselves, from anywhere that must stay in the eager bundle.
 */

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
    id: "sp-read-4",
    taskRange: "1–2",
    taskName: "Read a text aloud",
    prepSeconds: 45,
    speakSeconds: 45,
    directions:
      "You will read the text aloud. You have 45 seconds to prepare, then 45 seconds to read.",
    prompt:
      "Good morning, ladies and gentlemen. This is the final boarding call for flight BA two-seven-four to Edinburgh, departing from gate fourteen. All passengers should now proceed immediately to the gate, as the doors will close at nine forty-five. Please have your boarding pass and passport ready for inspection. Passengers requiring special assistance, and those travelling with young children, are kindly asked to make themselves known to a member of staff. We remind you that hand luggage must fit within the overhead compartment or under the seat in front of you. Thank you, and we look forward to welcoming you aboard.",
    checklist: [
      "Did the flight number 'BA two-seven-four' and 'Edinburgh' stay clear and correctly stressed?",
      "Did your pitch fall firmly on 'gate fourteen' and 'nine forty-five' so the numbers land as key information?",
      "Did you pause after 'gentlemen' and before 'Please have your boarding pass' rather than rushing the instructions together?",
      "Did 'passengers requiring special assistance' get its own clear phrase, not blur into the next clause?",
    ],
  },
  {
    id: "sp-read-5",
    taskRange: "1–2",
    taskName: "Read a text aloud",
    prepSeconds: 45,
    speakSeconds: 45,
    directions:
      "You will read the text aloud. You have 45 seconds to prepare, then 45 seconds to read.",
    prompt:
      "Welcome to the Ashcombe Gallery of Natural History. As you enter this hall, you'll see the skeleton of a blue whale suspended above you, measuring almost twenty-five metres from nose to tail. To your left, cabinet seven displays fossils discovered along the Dorset coast over the past two hundred years. Please feel free to walk around the whale skeleton, but do not touch the display cases. If you'd like to hear more detail about any exhibit, simply press the green button on your handset and enter the three-digit number shown on the nearby label. Our next stop, the Mineral Room, is just through the archway on your right.",
    checklist: [
      "Did 'Ashcombe' and 'Dorset' stay clear, and did 'twenty-five metres' sound natural rather than spelled out?",
      "Did your pitch rise while listing 'cabinet seven... fossils... Dorset coast' and fall at the end of that sentence?",
      "Did you pause slightly before 'but do not touch the display cases' to mark the warning?",
      "Did 'three-digit number' and 'Mineral Room' stay crisp instead of running into the surrounding words?",
    ],
  },
  {
    id: "sp-read-6",
    taskRange: "1–2",
    taskName: "Read a text aloud",
    prepSeconds: 45,
    speakSeconds: 45,
    directions:
      "You will read the text aloud. You have 45 seconds to prepare, then 45 seconds to read.",
    prompt:
      "Good morning, everyone, and welcome to Hartley Manufacturing. Before you begin your shift on the production floor, please remember a few safety points. Safety glasses and steel-toed boots must be worn at all times in Zones A and B. The emergency assembly point is in the car park beside Gate Three; in the event of an alarm, exit through the nearest marked door, not the one you entered by. Machinery must never be left running unattended, and spills should be reported immediately to your supervisor. Fire extinguishers are located every twenty metres along the main corridor. Thank you for your attention, and have a safe shift.",
    checklist: [
      "Did 'Hartley Manufacturing' and 'Zones A and B' stay clear, with the letters A and B pronounced distinctly?",
      "Did your pitch fall clearly at the end of 'Gate Three' and again at 'the one you entered by'?",
      "Did you pause at the semicolon before 'in the event of an alarm' instead of rushing into the instruction?",
      "Did 'unattended' and 'extinguishers' stay fully intelligible despite being longer, less common words?",
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
    id: "sp-picture-4",
    taskRange: "3–4",
    taskName: "Describe a picture",
    prepSeconds: 45,
    speakSeconds: 30,
    directions:
      "Describe what you can see in the photograph above. You have 45 seconds to prepare, then 30 seconds to speak.",
    prompt: "Describe what you can see in the photograph above.",
    image: {
      src: "/images/four-skills/picture-construction.jpg",
      alt: "Two construction workers wearing hard hats standing on a rebar-reinforced concrete column, one guiding a crane hook and the other pointing and holding a rope, against a clear blue sky",
      author: "billjacobus1",
      sourceUrl: "https://www.flickr.com/photos/67513462@N00/122497422",
      licenseName: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    },
    checklist: [
      "Did you say where the scene takes place — a construction site, high up on a structure?",
      "Did you describe what each worker is doing, not just what they are wearing?",
      "Did you mention the crane hook and the rebar/formwork structure they are standing on?",
      "Did you use the present continuous throughout for the actions in progress?",
      "Were you still speaking when the time ran out?",
    ],
  },
  {
    id: "sp-picture-5",
    taskRange: "3–4",
    taskName: "Describe a picture",
    prepSeconds: 45,
    speakSeconds: 30,
    directions:
      "Describe what you can see in the photograph above. You have 45 seconds to prepare, then 30 seconds to speak.",
    prompt: "Describe what you can see in the photograph above.",
    image: {
      src: "/images/four-skills/picture-lab.jpg",
      alt: "Several lab technicians in white coats sitting at workstations looking through microscopes, while one man stands and speaks to the group, white cabinets and red chairs in the background",
      author: "US Army Africa",
      sourceUrl: "https://www.flickr.com/photos/36281822@N08/4077018383",
      licenseName: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    },
    checklist: [
      "Did you say what kind of place this is and roughly how many people are present?",
      "Did you describe what the seated technicians are doing with the microscopes?",
      "Did you mention the standing man, who appears to be speaking rather than working at a microscope?",
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
    id: "sp-questions-4",
    spoken: true,
    taskRange: "5–7",
    taskName: "Respond to questions",
    prepSeconds: 3,
    speakSeconds: 15,
    directions:
      "Imagine an event organizer is asking about your meeting preferences. You have 3 seconds to prepare, then 15 seconds to respond.",
    prompt:
      "Do you prefer meeting people in person or over video calls, and why do you prefer that format?",
    checklist: [
      "Did you start speaking within a second or two?",
      "Did you state a clear preference between in-person and video meetings?",
      "Did you give a specific reason rather than just naming your preference?",
      "Did you get a complete thought out inside 15 seconds without rushing?",
    ],
  },
  {
    id: "sp-questions-5",
    spoken: true,
    taskRange: "5–7",
    taskName: "Respond to questions",
    prepSeconds: 3,
    speakSeconds: 15,
    directions:
      "Imagine a magazine writer is asking about your daily habits. You have 3 seconds to prepare, then 15 seconds to respond.",
    prompt:
      "What app or tool do you use most often during the day, and what do you mainly use it for?",
    checklist: [
      "Did you begin speaking almost immediately?",
      "Did you name a specific app or tool rather than being vague?",
      "Did you explain what you actually use it for?",
      "Did you avoid filler like 'ummm, let me think' that eats the clock?",
    ],
  },
  {
    id: "sp-questions-6",
    spoken: true,
    taskRange: "5–7",
    taskName: "Respond to questions",
    prepSeconds: 3,
    speakSeconds: 30,
    directions:
      "A researcher is asking about your leisure time. You have 3 seconds to prepare, then 30 seconds to respond.",
    prompt:
      "How do you usually spend your weekends, and has the way you spend them changed since last year?",
    checklist: [
      "Did you describe how you typically spend your weekends?",
      "Did you address whether that has changed since last year?",
      "Did you support your answer with a specific example or detail?",
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
    id: "sp-info-4",
    spoken: true,
    taskRange: "8–10",
    taskName: "Respond using information provided",
    prepSeconds: 45,
    speakSeconds: 15,
    directions:
      "Read the appointment list below. You have 45 seconds to read and think, then 15 seconds to answer the question.",
    reference: {
      title: "Riverside Clinic — appointment list, Wednesday 5 August",
      lines: [
        "09:00   Dr. Halversen — Room 2 — routine check-ups",
        "09:00   Dr. Osei — Room 4 — new patient consultations",
        "10:30   Dr. Halversen — Room 2 — vaccinations (no appointment needed)",
        "11:00   Nurse Practitioner Reyes — Room 1 — blood pressure clinic",
        "12:00 – 13:00   Clinic closed for lunch",
        "13:00   Dr. Osei — Room 4 — follow-up appointments",
        "14:30   Dr. Halversen — Room 3 — minor injuries clinic",
        "16:00   Clinic closes",
      ],
    },
    prompt:
      "I want to see Dr. Halversen without an appointment, but I can only come after lunch. Is that possible, and what should I do instead?",
    checklist: [
      "Did you correctly identify that only the 10:30 vaccination clinic is a walk-in with no appointment needed?",
      "Did you correctly state that the 14:30 session in Room 3 (minor injuries) is not listed as a walk-in?",
      "Did you suggest booking ahead, or coming in the morning instead?",
      "Did you answer in full sentences rather than reading the list aloud?",
    ],
  },
  {
    id: "sp-info-5",
    spoken: true,
    taskRange: "8–10",
    taskName: "Respond using information provided",
    prepSeconds: 45,
    speakSeconds: 15,
    directions:
      "Read the timetable below. You have 45 seconds to read and think, then 15 seconds to answer the question.",
    reference: {
      title: "Skyline Airport Shuttle — Saturday timetable, Terminal 2 stop",
      lines: [
        "05:45   First shuttle — Terminal 2 to Riverside Hotel, direct",
        "06:30   Terminal 2 to Downtown, stops at Oakwood Station",
        "07:15   Terminal 2 to Riverside Hotel, direct",
        "08:00   Terminal 2 to Downtown, stops at Oakwood Station and Fairview Mall",
        "09:30 – 17:00   Shuttle runs every 45 minutes, alternating direct/stopping service",
        "17:45   Last direct shuttle to Riverside Hotel",
        "18:30   Last shuttle to Downtown, stops at Oakwood Station",
      ],
    },
    prompt:
      "My flight lands at 17:20 and I'm staying at the Riverside Hotel. Can I catch a direct shuttle, and if so, what time does it leave?",
    checklist: [
      "Did you correctly name the 17:45 shuttle as the one that goes to Riverside Hotel?",
      "Did you confirm it departs after the 17:20 landing time, so it can be caught?",
      "Did you correctly identify it as a direct service rather than a stopping one?",
      "Did you avoid mentioning the Downtown-bound shuttles, which aren't relevant here?",
    ],
  },
  {
    id: "sp-info-6",
    spoken: true,
    taskRange: "8–10",
    taskName: "Respond using information provided",
    prepSeconds: 45,
    speakSeconds: 30,
    directions:
      "Read the schedule below. You have 45 seconds to read and think, then 30 seconds to answer the question.",
    reference: {
      title: "New product launch — 'Halo' smart lamp, Tuesday 3 November, Grand Hall",
      lines: [
        "10:00 – 10:15   Doors open and registration",
        "10:15 – 10:45   Welcome address — CEO Priya Nandakumar",
        "10:45 – 11:30   Product demonstration — Halo smart lamp, Engineering team",
        "11:30 – 12:00   Press Q&A — Priya Nandakumar and Head of Design, Tom Ferris",
        "12:00 – 13:00   Networking lunch — Terrace",
        "13:00 – 14:00   Media interviews (by appointment only, sign up at registration desk)",
        "14:00 – 14:30   Photo session with product prototypes",
        "14:30   Event closes — gift bags at the exit",
      ],
    },
    prompt:
      "I'm a journalist and I'd like a one-on-one interview with Tom Ferris. When could that happen, and what do I need to do first?",
    checklist: [
      "Did you correctly identify the 13:00–14:00 media interview slot as the one-on-one opportunity?",
      "Did you mention that interviews require signing up in advance at the registration desk?",
      "Did you distinguish this from the 11:30 press Q&A, which is a group session rather than one-on-one?",
      "Did you organise your answer clearly rather than listing the whole schedule in order?",
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
  {
    id: "sp-opinion-4",
    spoken: true,
    taskRange: "11",
    taskName: "Express an opinion",
    prepSeconds: 15,
    speakSeconds: 60,
    directions:
      "State your opinion and support it. You have 15 seconds to prepare, then 60 seconds to speak.",
    prompt:
      "Some companies are requiring employees to return to the office full-time, while others let staff continue working remotely. Which approach do you think is better for employees and businesses? Give reasons and examples to support your opinion.",
    checklist: [
      "Did you clearly say whether you favor full-time office attendance or remote work?",
      "Did you give one reason focused on the employee's perspective and one focused on the business's?",
      "Did you use a specific example (a task, a team situation, a personal experience) rather than a general claim?",
      "Did you acknowledge the other side briefly before restating your position?",
      "Did you close with a clear concluding sentence rather than stopping mid-thought?",
    ],
  },
  {
    id: "sp-opinion-5",
    spoken: true,
    taskRange: "11",
    taskName: "Express an opinion",
    prepSeconds: 15,
    speakSeconds: 60,
    directions:
      "State your opinion and support it. You have 15 seconds to prepare, then 60 seconds to speak.",
    prompt:
      "Some companies pay employees a fixed salary regardless of individual output, while others use performance-based bonuses to reward top performers. Which system do you think is fairer and more effective? Give reasons and examples to support your opinion.",
    checklist: [
      "Did you state upfront whether you prefer fixed salaries or performance-based pay?",
      "Did you explain one reason related to fairness and one related to motivation or results?",
      "Did you illustrate your point with a concrete workplace scenario or example?",
      "Did you address a possible downside of your chosen system to show balanced thinking?",
      "Did you finish with a clear final statement instead of running out of time?",
    ],
  },
  {
    id: "sp-opinion-6",
    spoken: true,
    taskRange: "11",
    taskName: "Express an opinion",
    prepSeconds: 15,
    speakSeconds: 60,
    directions:
      "State your opinion and support it. You have 15 seconds to prepare, then 60 seconds to speak.",
    prompt:
      "Some people believe employees should stay with one company for many years to build expertise and trust, while others believe changing jobs every few years leads to faster career growth. Which do you agree with? Give reasons and examples to support your opinion.",
    checklist: [
      "Did you clearly state whether you favor long-term loyalty or frequent job changes?",
      "Did you give one reason about skill or career development and one about relationships or stability?",
      "Did you support each reason with a specific example, such as a career path or situation you know of?",
      "Did you keep your two reasons distinct rather than repeating the same idea twice?",
      "Did you end with a concise conclusion that reaffirms your position?",
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
  /** Photo for tasks 1–5, sourced from a commercial-use-permissive licence —
   *  same structured attribution shape as `SpeakingPrompt.image` (Part 1 and
   *  the Speaking picture-description task). The real task shows an actual
   *  photograph, not a text description — writing the scene first and
   *  attaching a photo afterwards is what broke 8 of 12 Part 1 items and the
   *  original 3 picture-sentence prompts here; each `prompt`/`model` below
   *  was written from what is actually visible in its photo instead. */
  image?: {
    src: string;
    alt: string;
    author: string;
    sourceUrl: string;
    licenseName: string;
    licenseUrl: string;
  };
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
    prompt: "Describe what you see in the picture above.",
    image: {
      src: "/images/four-skills/picture-movers.jpg",
      alt: "Two removalists in high-visibility vests lifting a large wooden case up a ramp into the back of a moving truck, houses visible in the background under a cloudy sky",
      author: "sunset_removals",
      sourceUrl: "https://www.flickr.com/photos/128772241@N07/15579303145",
      licenseName: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    },
    requiredWords: ["lift", "because"],
    checklist: [
      "Did you use both words, in any form?",
      "Is it exactly one sentence?",
      "Does the sentence clearly relate to the picture?",
      "Is the grammar accurate — tense, articles, subject–verb agreement?",
    ],
    model:
      "The two removalists are lifting the case up the ramp together because it is too heavy for one person to carry.",
  },
  {
    id: "wr-sentence-2",
    taskRange: "1–5",
    taskName: "Write a sentence based on a picture",
    minutes: 2,
    pooled: true,
    directions:
      "Write ONE sentence about the picture using both words below. You may change the form of the words and use them in any order.",
    prompt: "Describe what you see in the picture above.",
    image: {
      src: "/images/four-skills/picture-home-office.jpg",
      alt: "A woman sitting by a window holds a white cup of coffee in one hand while typing on a laptop balanced on her lap with the other",
      author: "homegets.com",
      sourceUrl: "https://www.flickr.com/photos/141436406@N04/49675580438",
      licenseName: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    },
    requiredWords: ["while", "coffee"],
    checklist: [
      "Did you use both words, in any form?",
      "Is it exactly one sentence?",
      "Does 'while' actually join two simultaneous actions?",
      "Is the grammar accurate — tense, articles, subject–verb agreement?",
    ],
    model: "She is holding a cup of coffee while she types on her laptop.",
  },
  {
    id: "wr-sentence-3",
    taskRange: "1–5",
    taskName: "Write a sentence based on a picture",
    minutes: 2,
    pooled: true,
    directions:
      "Write ONE sentence about the picture using both words below. You may change the form of the words and use them in any order.",
    prompt: "Describe what you see in the picture above.",
    image: {
      src: "/images/four-skills/picture-mechanic.jpg",
      alt: "A mechanic in a blue shirt reaching into the engine of a car with its bonnet raised, holding a large air filter part, with the windscreen and wipers visible behind him",
      author: "Bembety",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Mechanic_repairing_car_engine_1.jpg",
      licenseName: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
    },
    requiredWords: ["repair", "although"],
    checklist: [
      "Did you use both words, in any form?",
      "Is it exactly one sentence?",
      "Does 'although' introduce a genuine contrast rather than just being inserted?",
      "Is the grammar accurate — tense, articles, subject–verb agreement?",
    ],
    model:
      "Although the part looks difficult to fit back into place, the mechanic is trying to repair the engine himself.",
  },
  {
    id: "wr-sentence-4",
    taskRange: "1–5",
    taskName: "Write a sentence based on a picture",
    minutes: 2,
    pooled: true,
    directions:
      "Write ONE sentence about the picture using both words below. You may change the form of the words and use them in any order.",
    prompt: "Describe what you see in the picture above.",
    image: {
      src: "/images/four-skills/picture-office-desk.jpg",
      alt: "Two men sitting at a desk covered in papers, one writing in a spiral notebook while the other gestures with his hand as he speaks",
      author: "vondabdi",
      sourceUrl: "https://www.flickr.com/photos/12751915@N07/2219334007",
      licenseName: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    },
    requiredWords: ["discuss", "while"],
    checklist: [
      "Did you use both words, in any form?",
      "Is it exactly one sentence?",
      "Does 'while' actually join two simultaneous actions?",
      "Is the grammar accurate — tense, articles, subject–verb agreement?",
    ],
    model:
      "The two men are discussing the papers on the desk while one of them takes notes in a notebook.",
  },
  {
    id: "wr-sentence-5",
    taskRange: "1–5",
    taskName: "Write a sentence based on a picture",
    minutes: 2,
    pooled: true,
    directions:
      "Write ONE sentence about the picture using both words below. You may change the form of the words and use them in any order.",
    prompt: "Describe what you see in the picture above.",
    image: {
      src: "/images/four-skills/picture-cooking.jpg",
      alt: "A woman in a kitchen stirring green beans and sliced tomatoes into a large pot on the stove with a wooden spoon",
      author: "Wonderlane",
      sourceUrl: "https://www.flickr.com/photos/71401718@N00/6231890399",
      licenseName: "CC0 1.0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
    },
    requiredWords: ["stir", "before"],
    checklist: [
      "Did you use both words, in any form?",
      "Is it exactly one sentence?",
      "Does 'before' correctly order two actions?",
      "Is the grammar accurate — tense, articles, subject–verb agreement?",
    ],
    model: "The chef stirs the green beans into the pot before adding the sliced tomatoes on top.",
  },
  {
    id: "wr-sentence-6",
    taskRange: "1–5",
    taskName: "Write a sentence based on a picture",
    minutes: 2,
    pooled: true,
    directions:
      "Write ONE sentence about the picture using both words below. You may change the form of the words and use them in any order.",
    prompt: "Describe what you see in the picture above.",
    image: {
      src: "/images/four-skills/picture-plumber.jpg",
      alt: "A plumber crouched beside a water heater, using two wrenches to tighten a fitting on the gas line",
      author: "Tomwsulcer",
      sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=24565327",
      licenseName: "CC0 1.0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
    },
    requiredWords: ["tighten", "after"],
    checklist: [
      "Did you use both words, in any form?",
      "Is it exactly one sentence?",
      "Does 'after' correctly order two actions?",
      "Is the grammar accurate — tense, articles, subject–verb agreement?",
    ],
    model: "After tightening the fitting with both wrenches, he turns the water supply back on.",
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
    id: "wr-request-4",
    taskRange: "6–7",
    taskName: "Respond to a written request",
    minutes: 10,
    directions:
      "Read the email below and reply to it. Your response must do all three things listed in the directions.",
    prompt:
      "From: Marcus Webb, Finance Director\nSubject: Q3 budget report — deadline moved up\n\nDear team,\n\nDue to an upcoming external audit, I need the Q3 budget report submitted by this Wednesday instead of the original date of next Monday. Please prioritise this over other tasks this week.\n\nLet me know if this creates any difficulties.\n\nRegards,\nMarcus\n\nDIRECTIONS: Reply as a team member. In your email, explain ONE problem the new deadline causes, request ONE thing that would help you meet it, and ask ONE question about what the auditors will need to see.",
    targetWords: "roughly 100–130 words",
    checklist: [
      "Did you include all three required elements — a problem, a request and a question?",
      "Did you open and close the email appropriately?",
      "Did you vary your sentence structures rather than repeating one pattern?",
      "Is the register polite and professional throughout?",
    ],
    model:
      "Dear Marcus,\n\nThank you for the update on the audit.\n\nMoving the deadline to Wednesday is going to be difficult, as I am still waiting on final sales figures from the regional offices, which are not due until Tuesday afternoon. This leaves very little time to check the numbers before submission.\n\nWould it be possible for someone from the data team to help me consolidate the regional figures once they arrive, so I can focus on the analysis itself? That would make Wednesday realistic.\n\nI also wanted to ask what level of detail the auditors expect to see — a summary of variances, or the full transaction breakdown for each department?\n\nI will do everything I can to meet the new date.\n\nBest regards,\nAisha Patel",
  },
  {
    id: "wr-request-5",
    taskRange: "6–7",
    taskName: "Respond to a written request",
    minutes: 10,
    directions:
      "Read the email below and reply to it. Your response must do all three things listed in the directions.",
    prompt:
      "From: Priya Chandra, Team Lead\nSubject: Handover before my parental leave\n\nHi,\n\nAs you know, I start parental leave in three weeks and you'll be covering the client accounts I manage while I'm away. I'd like to arrange a handover session before I go.\n\nLet me know what would be most useful to cover, and if there's anything you're worried about.\n\nBest,\nPriya\n\nDIRECTIONS: Reply as the covering colleague. In your email, name ONE specific thing you'd like the handover session to cover, propose ONE arrangement for how you'll reach Priya if something urgent comes up while she's away, and ask ONE question about a concern you have.",
    targetWords: "roughly 100–130 words",
    checklist: [
      "Did you include all three required elements — a handover topic, an arrangement for urgent contact, and a question?",
      "Did you open and close the email appropriately?",
      "Did you vary your sentence structures rather than repeating one pattern?",
      "Is the register polite and professional throughout?",
    ],
    model:
      "Hi Priya,\n\nThank you for setting this up — congratulations again on the upcoming arrival!\n\nThe most useful thing for the handover session would be walking through the Halloran account renewal, since the contract is up in six weeks and I haven't been involved in those negotiations before.\n\nI'd suggest we agree that I'll only contact you by email, and only for something genuinely urgent — I don't want you checking your phone while you're meant to be off. For anything else, I'll hold it until you're back.\n\nOne thing I'm not sure about: should I keep sending your regular clients your out-of-office reply, or would you rather I introduce myself as their point of contact for now?\n\nBest,\nJordan",
  },
  {
    id: "wr-request-6",
    taskRange: "6–7",
    taskName: "Respond to a written request",
    minutes: 10,
    directions:
      "Read the email below and reply to it. Your response must do all three things listed in the directions.",
    prompt:
      "From: Grace Lindqvist, Marketing Director\nSubject: Feedback on the campaign report\n\nHi,\n\nThanks for sending over the campaign report. Overall it's strong, but before we present it to the board on Monday I'd like the competitor analysis section expanded, and the summary of results made clearer. Please also double-check the figures in the final table.\n\nLet me know if you have any concerns about the timeline.\n\nBest,\nGrace\n\nDIRECTIONS: Reply as the report's author. In your email, explain ONE part of the feedback you have already acted on, ask ONE question about what is unclear in the feedback, and state ONE problem with the Monday deadline.",
    targetWords: "roughly 100–130 words",
    checklist: [
      "Did you include all three required elements — something already done, a question and a problem?",
      "Did you open and close the email appropriately?",
      "Did you vary your sentence structures rather than repeating one pattern?",
      "Is the register polite and professional throughout?",
    ],
    model:
      "Hi Grace,\n\nThank you for the feedback on the report.\n\nI have already gone through the final table and corrected two figures that had been copied over from an earlier draft, so those numbers are now accurate.\n\nCould you clarify what you would like changed in the summary of results? I want to make sure I focus on the right area, whether that is the wording, the layout, or the level of detail.\n\nI do want to flag one issue with the Monday deadline: expanding the competitor analysis properly will mean requesting updated figures from two colleagues who are both out of the office until Sunday evening, which leaves very little time to review before the board meeting.\n\nI will do my best to have everything ready.\n\nBest wishes,\nDaniel Cho",
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
  {
    id: "wr-essay-4",
    taskRange: "8",
    taskName: "Write an opinion essay",
    minutes: 30,
    directions:
      "Write an essay stating your opinion. Support it with reasons and examples. You have 30 minutes to plan, write and revise.",
    prompt:
      "Some companies reward employees with individual performance bonuses, while others distribute bonuses equally among team members based on group results. Do you think individual bonuses are more effective than team-based rewards? Use specific reasons and examples to support your answer.",
    targetWords: "around 300 words",
    checklist: [
      "Does your introduction state your position unambiguously?",
      "Does each body paragraph carry one reason, supported by an example?",
      "Did you use linking words to connect your ideas?",
      "Did you leave time to check tenses, articles and plurals?",
      "Does the conclusion restate your position rather than adding a new argument?",
    ],
    model:
      "I believe that team-based rewards are more effective than individual bonuses for most organisations, because they encourage collaboration rather than internal competition.\n\nThe first reason is that individual bonuses can quietly damage teamwork. When employees know that only the top performer will be rewarded, they have little incentive to share knowledge or help a struggling colleague. At a former workplace of mine, sales staff stopped passing on useful client leads to one another once a monthly bonus was introduced for the single highest seller, and overall team sales actually fell.\n\nSecond, team-based rewards more accurately reflect how modern work is actually done. Most projects today depend on several people contributing different skills, and it is often difficult to isolate one person's exact contribution. A software release, for example, depends equally on developers, testers and designers; rewarding only the developer whose code was merged last ignores everyone else who made that release possible.\n\nOf course, some argue that team bonuses let weaker performers benefit from others' effort without contributing equally. This is a fair concern, and managers should still track and address individual underperformance directly through feedback and coaching. However, this does not mean the reward itself should be individual; it simply means recognition and reward can operate on different levels.\n\nIn conclusion, because individual bonuses tend to undermine cooperation while team-based rewards better match how collaborative work actually happens, I believe companies should generally favour rewarding teams rather than singling out individuals.",
  },
  {
    id: "wr-essay-5",
    taskRange: "8",
    taskName: "Write an opinion essay",
    minutes: 30,
    directions:
      "Write an essay stating your opinion. Support it with reasons and examples. You have 30 minutes to plan, write and revise.",
    prompt:
      "Many companies are moving from a standard five-day working week to a four-day working week with the same total pay. Do you think companies should adopt a four-day working week? Use specific reasons and examples to support your answer.",
    targetWords: "around 300 words",
    checklist: [
      "Does your introduction state your position unambiguously?",
      "Does each body paragraph carry one reason, supported by an example?",
      "Did you use linking words to connect your ideas?",
      "Did you leave time to check tenses, articles and plurals?",
      "Does the conclusion restate your position rather than adding a new argument?",
    ],
    model:
      "I strongly support companies adopting a four-day working week, since the evidence suggests it improves both employee wellbeing and organisational performance.\n\nOne major reason is that a shorter week reduces burnout without necessarily reducing output. Employees who know they only have four days to complete their tasks tend to eliminate low-value activities, such as unnecessary meetings, and focus on what actually matters. A marketing agency I read about trialled a four-day week and found that staff simply shortened their weekly meetings from an hour to twenty minutes, freeing up time without losing any important decisions.\n\nA second reason is that the policy helps companies attract and retain talent in a competitive job market. Skilled employees increasingly value flexibility as highly as salary, and an extra day off each week is a benefit that costs the company nothing in direct wages. Several technology firms that adopted four-day weeks have reported a noticeable drop in staff turnover, since employees are reluctant to leave a job that offers this level of work-life balance once they have experienced it.\n\nNaturally, not every industry can adopt this model easily; hospitals and factories that run continuously face genuine scheduling challenges. Even so, this is an argument for adapting the model to specific sectors, not for rejecting it entirely.\n\nIn conclusion, because a four-day week can raise efficiency while making a company more attractive to employees, I believe organisations that are able to implement it should do so, even if some sectors need a modified version of the idea.",
  },
  {
    id: "wr-essay-6",
    taskRange: "8",
    taskName: "Write an opinion essay",
    minutes: 30,
    directions:
      "Write an essay stating your opinion. Support it with reasons and examples. You have 30 minutes to plan, write and revise.",
    prompt:
      "When filling senior positions, some companies prefer to promote existing employees, while others prefer to hire experienced candidates from outside the organisation. Which approach do you think is generally better for a company? Use specific reasons and examples to support your answer.",
    targetWords: "around 300 words",
    checklist: [
      "Does your introduction state your position unambiguously?",
      "Does each body paragraph carry one reason, supported by an example?",
      "Did you use linking words to connect your ideas?",
      "Did you leave time to check tenses, articles and plurals?",
      "Does the conclusion restate your position rather than adding a new argument?",
    ],
    model:
      "In my opinion, companies are generally better served by promoting from within rather than hiring senior staff from outside, because internal candidates bring institutional knowledge that cannot easily be replaced.\n\nThe first reason is that internal promotions preserve continuity during a leadership transition. An employee who has spent several years at a company already understands its processes, its clients and the informal relationships that keep projects running smoothly. When a regional manager at a logistics company I know retired, the company promoted her deputy rather than hiring externally, and the transition was seamless because the new manager already knew every major client by name.\n\nThe second reason is that promoting from within sends a powerful signal to the rest of the workforce about career progression. Employees who can see a realistic path to senior roles are more motivated and more likely to remain with the company long term. A friend of mine works at a manufacturing firm where three of the last four plant manager positions went to outside hires; two experienced supervisors who had been waiting years for that promotion left for competitors within months of being passed over again, taking their production knowledge with them.\n\nExternal hiring certainly has its place, particularly when a company needs skills or a fresh perspective that nobody internally possesses, and I would not argue that outside hiring should never happen. Still, treating it as the default choice for senior roles overlooks the real cost of losing institutional memory and discouraging ambitious employees.\n\nIn conclusion, because internal candidates offer continuity and stronger long-term motivation for staff, I believe companies should generally prioritise promoting from within when filling senior positions.",
  },
];
