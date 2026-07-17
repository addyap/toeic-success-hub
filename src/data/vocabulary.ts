export type VocabCategory =
  "Management" | "Travel" | "Finance" | "Technical" | "Marketing & Sales" | "Human Resources";

export interface VocabTerm {
  term: string;
  pos: string; // part of speech
  category: VocabCategory;
  definition: string;
  example: string;
}

export const vocabulary: VocabTerm[] = [
  // ── Management ──
  {
    term: "delegate",
    pos: "verb",
    category: "Management",
    definition: "To assign a task or responsibility to someone else.",
    example: "Good managers delegate routine tasks so they can focus on strategy.",
  },
  {
    term: "stakeholder",
    pos: "noun",
    category: "Management",
    definition: "A person or group with an interest in a project or company.",
    example: "We need to update all stakeholders before the launch.",
  },
  {
    term: "milestone",
    pos: "noun",
    category: "Management",
    definition: "A significant point or stage in a project.",
    example: "Completing the prototype is our first major milestone.",
  },
  {
    term: "appraisal",
    pos: "noun",
    category: "Management",
    definition: "A formal assessment of an employee's performance.",
    example: "Annual appraisals will take place in December.",
  },
  {
    term: "onboarding",
    pos: "noun",
    category: "Management",
    definition: "The process of integrating and training a new employee.",
    example: "The onboarding process now includes a week of training.",
  },
  {
    term: "oversee",
    pos: "verb",
    category: "Management",
    definition: "To supervise or be in charge of work.",
    example: "She oversees the entire marketing department.",
  },
  {
    term: "headcount",
    pos: "noun",
    category: "Management",
    definition: "The total number of employees.",
    example: "Budget cuts mean we can't increase headcount this quarter.",
  },
  {
    term: "agenda",
    pos: "noun",
    category: "Management",
    definition: "A list of items to be discussed at a meeting.",
    example: "Please circulate the agenda before the meeting.",
  },

  // ── Travel ──
  {
    term: "itinerary",
    pos: "noun",
    category: "Travel",
    definition: "A planned route or schedule for a journey.",
    example: "Your itinerary includes a two-hour layover in Dubai.",
  },
  {
    term: "layover",
    pos: "noun",
    category: "Travel",
    definition: "A period of waiting between connecting flights.",
    example: "We have a short layover before the connecting flight.",
  },
  {
    term: "reimbursement",
    pos: "noun",
    category: "Travel",
    definition: "Repayment of money that someone has spent.",
    example: "Submit your receipts for reimbursement of travel expenses.",
  },
  {
    term: "accommodation",
    pos: "noun",
    category: "Travel",
    definition: "A place to stay, such as a hotel room.",
    example: "The company will cover accommodation for the conference.",
  },
  {
    term: "boarding pass",
    pos: "noun",
    category: "Travel",
    definition: "A document that allows a passenger to board a flight.",
    example: "Please have your boarding pass ready at the gate.",
  },
  {
    term: "voucher",
    pos: "noun",
    category: "Travel",
    definition: "A document that can be exchanged for goods or services.",
    example: "Guests received a meal voucher during the delay.",
  },
  {
    term: "baggage allowance",
    pos: "noun",
    category: "Travel",
    definition: "The amount of luggage a passenger is permitted to bring.",
    example: "Economy passengers have a 23-kg baggage allowance.",
  },
  {
    term: "shuttle",
    pos: "noun",
    category: "Travel",
    definition: "A vehicle that runs a regular short route between two points.",
    example: "A free shuttle runs between the hotel and the airport.",
  },

  // ── Finance ──
  {
    term: "invoice",
    pos: "noun",
    category: "Finance",
    definition: "A bill listing goods or services and the amount owed.",
    example: "The supplier sent an invoice for last month's order.",
  },
  {
    term: "revenue",
    pos: "noun",
    category: "Finance",
    definition: "The total income a business generates.",
    example: "Quarterly revenue rose by 12 percent.",
  },
  {
    term: "expenditure",
    pos: "noun",
    category: "Finance",
    definition: "The amount of money that is spent.",
    example: "We need to reduce expenditure on office supplies.",
  },
  {
    term: "forecast",
    pos: "noun/verb",
    category: "Finance",
    definition: "A prediction of future figures or trends.",
    example: "The sales forecast for next year looks promising.",
  },
  {
    term: "audit",
    pos: "noun/verb",
    category: "Finance",
    definition: "An official inspection of an organization's accounts.",
    example: "An external firm will audit our financial records.",
  },
  {
    term: "reconcile",
    pos: "verb",
    category: "Finance",
    definition: "To make two sets of accounts agree.",
    example: "Please reconcile the bank statement with our ledger.",
  },
  {
    term: "overhead",
    pos: "noun",
    category: "Finance",
    definition: "The ongoing operating expenses of a business.",
    example: "Moving offices will lower our monthly overhead.",
  },
  {
    term: "fiscal",
    pos: "adjective",
    category: "Finance",
    definition: "Relating to financial matters, especially budgets.",
    example: "The fiscal year ends in March.",
  },

  // ── Technical ──
  {
    term: "troubleshoot",
    pos: "verb",
    category: "Technical",
    definition: "To identify and solve problems with a system.",
    example: "IT will troubleshoot the network issue this afternoon.",
  },
  {
    term: "downtime",
    pos: "noun",
    category: "Technical",
    definition: "A period when a system is unavailable.",
    example: "The upgrade will cause two hours of downtime.",
  },
  {
    term: "deploy",
    pos: "verb",
    category: "Technical",
    definition: "To put software into active use.",
    example: "We plan to deploy the new version on Friday.",
  },
  {
    term: "bandwidth",
    pos: "noun",
    category: "Technical",
    definition: "The capacity of a network to transmit data.",
    example: "Video calls require sufficient bandwidth.",
  },
  {
    term: "configuration",
    pos: "noun",
    category: "Technical",
    definition: "The way a system's settings are arranged.",
    example: "Check the printer configuration before reporting a fault.",
  },
  {
    term: "backup",
    pos: "noun",
    category: "Technical",
    definition: "A copy of data kept in case the original is lost.",
    example: "Always keep a backup of important files.",
  },
  {
    term: "latency",
    pos: "noun",
    category: "Technical",
    definition: "The delay before data transfer begins.",
    example: "High latency made the video conference lag.",
  },
  {
    term: "specifications",
    pos: "noun",
    category: "Technical",
    definition: "Detailed requirements or features of a product.",
    example: "The new laptops meet all our technical specifications.",
  },

  // ── Management (batch 2) ──
  {
    term: "deadline",
    pos: "noun",
    category: "Management",
    definition: "A time or date by which a task must be completed.",
    example: "We missed the deadline because of supplier delays.",
  },
  {
    term: "mentor",
    pos: "noun/verb",
    category: "Management",
    definition: "An experienced person who advises a less experienced colleague.",
    example: "She mentors two junior analysts on the team.",
  },
  {
    term: "workflow",
    pos: "noun",
    category: "Management",
    definition: "The sequence of steps in a work process.",
    example: "Automating the workflow saved hours each week.",
  },
  {
    term: "quota",
    pos: "noun",
    category: "Management",
    definition: "A fixed target or share that must be met.",
    example: "The sales team exceeded its monthly quota.",
  },
  {
    term: "incentive",
    pos: "noun",
    category: "Management",
    definition: "Something that motivates or encourages effort.",
    example: "Year-end bonuses are an incentive to hit targets.",
  },
  {
    term: "restructure",
    pos: "verb",
    category: "Management",
    definition: "To organize a company or system in a different way.",
    example: "The firm restructured its divisions to cut costs.",
  },
  {
    term: "subordinate",
    pos: "noun",
    category: "Management",
    definition: "An employee of lower rank than another.",
    example: "Managers should give subordinates clear instructions.",
  },
  {
    term: "consensus",
    pos: "noun",
    category: "Management",
    definition: "General agreement among a group.",
    example: "The board reached a consensus on the budget.",
  },
  {
    term: "accountable",
    pos: "adjective",
    category: "Management",
    definition: "Responsible and required to explain one's actions.",
    example: "Each team lead is accountable for their project.",
  },
  {
    term: "liaise",
    pos: "verb",
    category: "Management",
    definition: "To communicate and cooperate between groups.",
    example: "She liaises with the overseas branch weekly.",
  },
  {
    term: "prioritize",
    pos: "verb",
    category: "Management",
    definition: "To arrange tasks in order of importance.",
    example: "Please prioritize the client requests first.",
  },
  {
    term: "turnover",
    pos: "noun",
    category: "Management",
    definition: "The rate at which employees leave and are replaced.",
    example: "High staff turnover raised our training costs.",
  },
  {
    term: "supervise",
    pos: "verb",
    category: "Management",
    definition: "To watch over and direct work or workers.",
    example: "He supervises the night shift at the warehouse.",
  },
  {
    term: "mandate",
    pos: "noun",
    category: "Management",
    definition: "Official authority or an order to act.",
    example: "The committee has a mandate to reform hiring.",
  },
  {
    term: "competency",
    pos: "noun",
    category: "Management",
    definition: "A skill or ability needed to do a job well.",
    example: "Leadership is a key competency for this role.",
  },

  // ── Travel (batch 2) ──
  {
    term: "confirmation",
    pos: "noun",
    category: "Travel",
    definition: "Official verification that something is reserved.",
    example: "You'll receive an email confirmation of your booking.",
  },
  {
    term: "amenities",
    pos: "noun",
    category: "Travel",
    definition: "Useful or pleasant facilities provided to guests.",
    example: "The hotel's amenities include a gym and pool.",
  },
  {
    term: "departure",
    pos: "noun",
    category: "Travel",
    definition: "The act of leaving, or the time transport leaves.",
    example: "The departure was delayed by an hour.",
  },
  {
    term: "check-in",
    pos: "noun",
    category: "Travel",
    definition: "The process of registering on arrival at a hotel or airport.",
    example: "Check-in opens three hours before the flight.",
  },
  {
    term: "concierge",
    pos: "noun",
    category: "Travel",
    definition: "A hotel employee who assists guests with requests.",
    example: "The concierge arranged a taxi to the airport.",
  },
  {
    term: "excursion",
    pos: "noun",
    category: "Travel",
    definition: "A short trip, usually taken for leisure.",
    example: "The conference included an evening excursion.",
  },
  {
    term: "surcharge",
    pos: "noun",
    category: "Travel",
    definition: "An extra charge added to the usual price.",
    example: "A peak-season surcharge applies in July.",
  },
  {
    term: "vacancy",
    pos: "noun",
    category: "Travel",
    definition: "An available room or position.",
    example: "The hotel had no vacancies during the festival.",
  },
  {
    term: "detour",
    pos: "noun",
    category: "Travel",
    definition: "A roundabout route avoiding the direct way.",
    example: "Roadworks forced a detour through downtown.",
  },
  {
    term: "terminal",
    pos: "noun",
    category: "Travel",
    definition: "A building where passengers board transport.",
    example: "Our flight leaves from Terminal 3.",
  },
  {
    term: "customs",
    pos: "noun",
    category: "Travel",
    definition: "The official department that inspects goods entering a country.",
    example: "Declare any taxable goods at customs.",
  },
  {
    term: "fare",
    pos: "noun",
    category: "Travel",
    definition: "The money paid for a journey.",
    example: "The train fare increased again this year.",
  },
  {
    term: "lodging",
    pos: "noun",
    category: "Travel",
    definition: "A temporary place to stay.",
    example: "Lodging for the trip will be reimbursed.",
  },
  {
    term: "depart",
    pos: "verb",
    category: "Travel",
    definition: "To leave, especially to begin a journey.",
    example: "The coach departs at 8 a.m. sharp.",
  },
  {
    term: "complimentary",
    pos: "adjective",
    category: "Travel",
    definition: "Given free of charge.",
    example: "Guests enjoy a complimentary breakfast.",
  },

  // ── Finance (batch 2) ──
  {
    term: "asset",
    pos: "noun",
    category: "Finance",
    definition: "Something owned that has value.",
    example: "The company's main asset is its property.",
  },
  {
    term: "liability",
    pos: "noun",
    category: "Finance",
    definition: "A financial obligation or debt.",
    example: "Long-term liabilities appear on the balance sheet.",
  },
  {
    term: "budget",
    pos: "noun/verb",
    category: "Finance",
    definition: "A plan for income and spending.",
    example: "We went over budget on the marketing campaign.",
  },
  {
    term: "profit margin",
    pos: "noun",
    category: "Finance",
    definition: "The percentage difference between cost and selling price.",
    example: "Higher shipping costs cut our profit margin.",
  },
  {
    term: "quarter",
    pos: "noun",
    category: "Finance",
    definition: "A three-month period of the financial year.",
    example: "Sales rose sharply in the third quarter.",
  },
  {
    term: "dividend",
    pos: "noun",
    category: "Finance",
    definition: "A share of profits paid to shareholders.",
    example: "The firm raised its annual dividend.",
  },
  {
    term: "depreciation",
    pos: "noun",
    category: "Finance",
    definition: "The reduction in an asset's value over time.",
    example: "Depreciation lowers the equipment's book value.",
  },
  {
    term: "installment",
    pos: "noun",
    category: "Finance",
    definition: "One of several scheduled partial payments.",
    example: "You can pay in six monthly installments.",
  },
  {
    term: "solvent",
    pos: "adjective",
    category: "Finance",
    definition: "Able to pay all of one's debts.",
    example: "The company stayed solvent during the downturn.",
  },
  {
    term: "remittance",
    pos: "noun",
    category: "Finance",
    definition: "A sum of money sent in payment.",
    example: "Please attach the remittance to the invoice.",
  },
  {
    term: "arrears",
    pos: "noun",
    category: "Finance",
    definition: "Money that is owed and overdue.",
    example: "The account is three months in arrears.",
  },
  {
    term: "liquidity",
    pos: "noun",
    category: "Finance",
    definition: "The availability of cash or easily-sold assets.",
    example: "Strong liquidity helped the firm weather the crisis.",
  },
  {
    term: "surplus",
    pos: "noun",
    category: "Finance",
    definition: "An amount remaining after needs are met.",
    example: "The budget ended the year in surplus.",
  },
  {
    term: "valuation",
    pos: "noun",
    category: "Finance",
    definition: "An estimate of how much something is worth.",
    example: "The startup's valuation doubled in a year.",
  },
  {
    term: "withholding",
    pos: "noun",
    category: "Finance",
    definition: "Money held back, especially for tax.",
    example: "Tax withholding is deducted from each paycheck.",
  },

  // ── Technical (batch 2) ──
  {
    term: "interface",
    pos: "noun",
    category: "Technical",
    definition: "A point where two systems meet and interact.",
    example: "The app has a clean, simple user interface.",
  },
  {
    term: "encryption",
    pos: "noun",
    category: "Technical",
    definition: "The process of encoding data to keep it secure.",
    example: "Customer data is protected by encryption.",
  },
  {
    term: "server",
    pos: "noun",
    category: "Technical",
    definition: "A computer that provides data or services to others.",
    example: "The files are stored on a central server.",
  },
  {
    term: "firmware",
    pos: "noun",
    category: "Technical",
    definition: "Permanent software programmed into hardware.",
    example: "Update the router's firmware to fix the bug.",
  },
  {
    term: "compatibility",
    pos: "noun",
    category: "Technical",
    definition: "The ability of systems to work together.",
    example: "Check software compatibility before installing.",
  },
  {
    term: "integrate",
    pos: "verb",
    category: "Technical",
    definition: "To combine systems so they work as one.",
    example: "We integrated the new tool with our database.",
  },
  {
    term: "malfunction",
    pos: "noun/verb",
    category: "Technical",
    definition: "A failure to work correctly.",
    example: "A sensor malfunction halted the production line.",
  },
  {
    term: "upgrade",
    pos: "noun/verb",
    category: "Technical",
    definition: "An improvement to a newer or better version.",
    example: "The memory upgrade sped up the laptop.",
  },
  {
    term: "database",
    pos: "noun",
    category: "Technical",
    definition: "An organized collection of stored data.",
    example: "Customer records are kept in a secure database.",
  },
  {
    term: "protocol",
    pos: "noun",
    category: "Technical",
    definition: "A set of rules governing how data is exchanged.",
    example: "The devices communicate over a wireless protocol.",
  },
  {
    term: "patch",
    pos: "noun",
    category: "Technical",
    definition: "A small update that fixes software problems.",
    example: "Install the security patch immediately.",
  },
  {
    term: "scalable",
    pos: "adjective",
    category: "Technical",
    definition: "Able to grow to handle increased demand.",
    example: "The platform is scalable to millions of users.",
  },
  {
    term: "diagnostics",
    pos: "noun",
    category: "Technical",
    definition: "Tests run to locate faults in a system.",
    example: "Run diagnostics to find the source of the error.",
  },
  {
    term: "redundancy",
    pos: "noun",
    category: "Technical",
    definition: "Backup systems that prevent total failure.",
    example: "Server redundancy keeps the site online.",
  },
  {
    term: "authentication",
    pos: "noun",
    category: "Technical",
    definition: "The process of verifying someone's identity.",
    example: "Two-factor authentication adds a layer of security.",
  },

  // ── Management (batch 3) ──
  {
    term: "hierarchy",
    pos: "noun",
    category: "Management",
    definition:
      "The system of ranking people or positions by level of authority within an organization.",
    example: "New hires are given an org chart to understand the company's hierarchy.",
  },
  {
    term: "compliance",
    pos: "noun",
    category: "Management",
    definition: "The act of following official rules, laws, or company policies.",
    example:
      "All staff must complete annual training to ensure compliance with safety regulations.",
  },
  {
    term: "initiative",
    pos: "noun",
    category: "Management",
    definition: "A new plan or project intended to solve a problem or achieve a goal.",
    example: "The department launched an initiative to cut printing costs by half.",
  },
  {
    term: "feedback",
    pos: "noun",
    category: "Management",
    definition: "Comments or information about someone's performance, given to help them improve.",
    example: "Her manager gave her detailed feedback after the client presentation.",
  },
  {
    term: "escalate",
    pos: "verb",
    category: "Management",
    definition: "To refer a problem or decision to someone with greater authority.",
    example: "If the issue isn't resolved by Friday, escalate it to the regional director.",
  },
  {
    term: "streamline",
    pos: "verb",
    category: "Management",
    definition: "To make a process simpler and more efficient by removing unnecessary steps.",
    example: "The team streamlined the approval process from five steps to two.",
  },
  {
    term: "proactive",
    pos: "adjective",
    category: "Management",
    definition: "Acting in advance to deal with a problem before it happens.",
    example: "A proactive manager schedules extra staff before the busy season starts.",
  },
  {
    term: "benchmark",
    pos: "noun",
    category: "Management",
    definition: "A standard used to measure or compare the quality of something.",
    example: "The team set last quarter's results as the benchmark for this year's performance.",
  },
  {
    term: "autonomy",
    pos: "noun",
    category: "Management",
    definition: "The freedom to make decisions independently, without close supervision.",
    example: "Team leaders are granted autonomy to set their own project deadlines.",
  },
  {
    term: "conflict of interest",
    pos: "noun",
    category: "Management",
    definition:
      "A situation in which someone's personal interests could improperly affect their professional judgment.",
    example: "She disclosed a conflict of interest and stepped back from the hiring decision.",
  },
  {
    term: "micromanage",
    pos: "verb",
    category: "Management",
    definition:
      "To control every small detail of a task instead of trusting others to complete it.",
    example:
      "Employees felt discouraged when their supervisor started to micromanage every email they sent.",
  },
  {
    term: "succession",
    pos: "noun",
    category: "Management",
    definition:
      "The process by which someone takes over an important position or role from another person.",
    example: "The retiring CEO's succession was carefully planned two years in advance.",
  },
  {
    term: "task force",
    pos: "noun",
    category: "Management",
    definition: "A team assembled temporarily to address a specific problem or project.",
    example:
      "Senior management formed a task force to investigate the drop in customer satisfaction.",
  },
  {
    term: "compromise",
    pos: "verb",
    category: "Management",
    definition: "To settle a disagreement by having each side give up part of what it wants.",
    example: "The two managers compromised on a shared budget for the joint project.",
  },
  {
    term: "veto",
    pos: "verb",
    category: "Management",
    definition: "To use one's authority to reject a decision or proposal.",
    example: "The board can veto any proposal that exceeds the approved budget.",
  },

  // ── Travel (batch 3) ──
  {
    term: "connecting flight",
    pos: "noun",
    category: "Travel",
    definition: "A flight that continues a journey after a layover at an intermediate airport.",
    example: "Our connecting flight to Tokyo boards in twenty minutes.",
  },
  {
    term: "per diem",
    pos: "noun",
    category: "Travel",
    definition: "A fixed daily allowance paid to cover a traveler's meals and incidental expenses.",
    example: "The company provides a per diem of fifty euros for each day abroad.",
  },
  {
    term: "expense claim",
    pos: "noun",
    category: "Travel",
    definition: "A formal request submitted to recover money spent on business travel.",
    example: "Submit your expense claim within two weeks of returning from the conference.",
  },
  {
    term: "jet lag",
    pos: "noun",
    category: "Travel",
    definition: "Fatigue and disorientation caused by crossing multiple time zones quickly.",
    example: "She struggled with jet lag after the overnight flight to Singapore.",
  },
  {
    term: "carry-on",
    pos: "noun",
    category: "Travel",
    definition: "A small piece of luggage a passenger is permitted to bring into the cabin.",
    example: "Make sure your carry-on fits under the seat in front of you.",
  },
  {
    term: "duty-free",
    pos: "adjective",
    category: "Travel",
    definition: "Exempt from local taxes on goods sold to travelers, typically at airports.",
    example: "He bought a bottle of whisky at the duty-free shop before boarding.",
  },
  {
    term: "non-refundable",
    pos: "adjective",
    category: "Travel",
    definition: "Not eligible to be repaid if cancelled.",
    example: "The airline reminded her that economy fares are non-refundable.",
  },
  {
    term: "overbooked",
    pos: "adjective",
    category: "Travel",
    definition: "Having accepted more reservations than there is capacity to accommodate.",
    example:
      "The flight was overbooked, so the airline asked for volunteers to take a later departure.",
  },
  {
    term: "reroute",
    pos: "verb",
    category: "Travel",
    definition: "To direct someone or something along a different path than originally planned.",
    example: "Heavy snow forced the airline to reroute all flights through Frankfurt.",
  },
  {
    term: "itemize",
    pos: "verb",
    category: "Travel",
    definition: "To list expenses individually and in detail.",
    example: "Please itemize each meal and taxi fare on your travel expense form.",
  },
  {
    term: "reschedule",
    pos: "verb",
    category: "Travel",
    definition: "To arrange for an event or appointment to take place at a different time.",
    example: "The client asked to reschedule the meeting because her flight was delayed.",
  },
  {
    term: "visa waiver",
    pos: "noun",
    category: "Travel",
    definition:
      "An official exemption allowing travelers from certain countries to enter without applying for a visa.",
    example: "Business travelers from eligible countries can enter under the visa waiver program.",
  },
  {
    term: "keynote",
    pos: "noun",
    category: "Travel",
    definition: "The main address at a conference, usually setting the tone for the event.",
    example: "The CEO delivered the keynote on the first morning of the conference.",
  },
  {
    term: "registration fee",
    pos: "noun",
    category: "Travel",
    definition: "The amount charged to enroll as a participant in an event such as a conference.",
    example: "The registration fee includes admission to all conference sessions and materials.",
  },
  {
    term: "round-trip",
    pos: "adjective",
    category: "Travel",
    definition: "Describing travel that includes both an outbound and a return journey.",
    example: "She booked a round-trip ticket to Chicago for the sales conference.",
  },

  // ── Finance (batch 3) ──
  {
    term: "collateral",
    pos: "noun",
    category: "Finance",
    definition: "Property or an asset pledged as security for the repayment of a loan.",
    example: "The bank required collateral before approving the business loan.",
  },
  {
    term: "amortize",
    pos: "verb",
    category: "Finance",
    definition: "To gradually pay off a debt or spread the cost of an asset over a period of time.",
    example: "The firm amortizes the cost of its patents over fifteen years.",
  },
  {
    term: "equity",
    pos: "noun",
    category: "Finance",
    definition: "Ownership interest in a company, represented by shares of stock.",
    example: "Investors received equity in the startup in exchange for funding.",
  },
  {
    term: "default",
    pos: "verb",
    category: "Finance",
    definition: "To fail to repay a loan or fulfill a financial obligation.",
    example: "The borrower defaulted on the loan after missing three payments.",
  },
  {
    term: "underwrite",
    pos: "verb",
    category: "Finance",
    definition:
      "To assume financial risk by guaranteeing payment or the sale of newly issued securities.",
    example: "The investment bank agreed to underwrite the company's bond issue.",
  },
  {
    term: "portfolio",
    pos: "noun",
    category: "Finance",
    definition: "A collection of financial investments held by an individual or institution.",
    example: "She diversified her portfolio by adding foreign stocks and bonds.",
  },
  {
    term: "hedge",
    pos: "verb",
    category: "Finance",
    definition: "To protect against financial loss by taking an offsetting investment position.",
    example: "The airline hedged against rising fuel prices by locking in a fixed rate.",
  },
  {
    term: "leveraged",
    pos: "adjective",
    category: "Finance",
    definition: "Financed with a significant amount of borrowed money relative to equity.",
    example: "The heavily leveraged firm struggled to meet its debt payments during the downturn.",
  },
  {
    term: "capital gain",
    pos: "noun",
    category: "Finance",
    definition: "Profit realized from selling an asset for more than its purchase price.",
    example: "She reported a capital gain after selling her shares at a higher price.",
  },
  {
    term: "accrue",
    pos: "verb",
    category: "Finance",
    definition: "To accumulate or increase over time, especially interest or income.",
    example: "Interest accrues daily on the outstanding credit card balance.",
  },
  {
    term: "write-off",
    pos: "noun",
    category: "Finance",
    definition:
      "The cancellation of an uncollectible debt or the reduction of an asset's recorded value to zero.",
    example: "The company recorded a write-off for the unpaid invoice from the bankrupt client.",
  },
  {
    term: "appreciation",
    pos: "noun",
    category: "Finance",
    definition: "An increase in the value of an asset over time.",
    example: "The property's appreciation allowed the owners to sell it at a substantial profit.",
  },
  {
    term: "escrow",
    pos: "noun",
    category: "Finance",
    definition:
      "Money or documents held by a neutral third party until the conditions of an agreement are met.",
    example: "The buyer's deposit was held in escrow until the sale was finalized.",
  },
  {
    term: "outstanding",
    pos: "adjective",
    category: "Finance",
    definition: "Not yet paid or settled; still owed.",
    example: "The client still has an outstanding balance from last month's invoice.",
  },
  {
    term: "yield",
    pos: "noun",
    category: "Finance",
    definition: "The income return on an investment, usually expressed as a percentage.",
    example: "The bond offers a yield of four percent annually.",
  },

  // ── Technical (batch 3) ──
  {
    term: "firewall",
    pos: "noun",
    category: "Technical",
    definition:
      "A security system that monitors and controls incoming and outgoing network traffic to block unauthorized access.",
    example: "The firewall blocked several suspicious connection attempts overnight.",
  },
  {
    term: "algorithm",
    pos: "noun",
    category: "Technical",
    definition: "A defined sequence of steps used to perform a calculation or solve a problem.",
    example: "The new algorithm sorts customer data twice as fast as before.",
  },
  {
    term: "cybersecurity",
    pos: "noun",
    category: "Technical",
    definition: "The practice of protecting computer systems and networks from digital attacks.",
    example: "The company invested heavily in cybersecurity to protect client data.",
  },
  {
    term: "cloud computing",
    pos: "noun",
    category: "Technical",
    definition:
      "The delivery of computing services, such as storage and processing power, over the internet.",
    example: "Cloud computing allows employees to access files from any location.",
  },
  {
    term: "plug-in",
    pos: "noun",
    category: "Technical",
    definition: "A software component that adds a specific feature to an existing program.",
    example: "She installed a plug-in to translate the website automatically.",
  },
  {
    term: "malware",
    pos: "noun",
    category: "Technical",
    definition:
      "Software specifically designed to damage or gain unauthorized access to a computer system.",
    example: "The email attachment contained malware that infected three workstations.",
  },
  {
    term: "debug",
    pos: "verb",
    category: "Technical",
    definition: "To locate and remove errors from computer software.",
    example: "The developers spent the morning debugging the checkout module.",
  },
  {
    term: "compress",
    pos: "verb",
    category: "Technical",
    definition: "To reduce the size of a computer file so that it takes up less storage space.",
    example: "Compress the video files before emailing them to the client.",
  },
  {
    term: "synchronize",
    pos: "verb",
    category: "Technical",
    definition: "To update data across multiple devices or systems so that it matches everywhere.",
    example: "The app synchronizes your contacts across your phone and laptop automatically.",
  },
  {
    term: "hardware",
    pos: "noun",
    category: "Technical",
    definition: "The physical components of a computer or electronic system.",
    example: "The technician replaced the faulty hardware inside the server.",
  },
  {
    term: "software",
    pos: "noun",
    category: "Technical",
    definition: "The programs and applications that run on a computer or device.",
    example: "The company switched to accounting software with better reporting tools.",
  },
  {
    term: "crash",
    pos: "verb",
    category: "Technical",
    definition:
      "To stop working suddenly and unexpectedly, especially referring to computer systems.",
    example: "The server crashed twice during the product launch.",
  },
  {
    term: "wireless",
    pos: "adjective",
    category: "Technical",
    definition: "Operating without connecting cables, typically by using radio signals.",
    example: "All meeting rooms are equipped with wireless printers.",
  },
  {
    term: "proprietary",
    pos: "adjective",
    category: "Technical",
    definition:
      "Owned exclusively by one company and protected from being copied or used without permission.",
    example: "The system relies on proprietary software developed in-house.",
  },
  {
    term: "throughput",
    pos: "noun",
    category: "Technical",
    definition: "The amount of data or work a system processes within a given period of time.",
    example: "Upgrading the servers doubled the network's throughput.",
  },

  // ── Marketing & Sales ──
  {
    term: "target audience",
    pos: "noun",
    category: "Marketing & Sales",
    definition:
      "The specific group of consumers a product, service, or advertisement is designed to reach.",
    example:
      "The campaign's messaging was tailored to appeal to a target audience of young professionals.",
  },
  {
    term: "brand awareness",
    pos: "noun",
    category: "Marketing & Sales",
    definition:
      "The extent to which consumers are familiar with and can recognize a particular brand.",
    example:
      "The company launched a series of billboard ads to boost brand awareness in the region.",
  },
  {
    term: "endorse",
    pos: "verb",
    category: "Marketing & Sales",
    definition:
      "To publicly express approval or support of a product, often in exchange for payment.",
    example: "The athlete agreed to endorse the sportswear brand in its new television commercial.",
  },
  {
    term: "market share",
    pos: "noun",
    category: "Marketing & Sales",
    definition:
      "The percentage of total sales in an industry that is captured by a particular company.",
    example:
      "The firm's new product line helped it capture a larger market share than its competitors.",
  },
  {
    term: "markdown",
    pos: "noun",
    category: "Marketing & Sales",
    definition: "A reduction in the original selling price of a product.",
    example:
      "The store applied a thirty percent markdown on winter coats at the end of the season.",
  },
  {
    term: "clientele",
    pos: "noun",
    category: "Marketing & Sales",
    definition: "The customers of a business, considered collectively.",
    example: "The boutique has built a loyal clientele through personalized service.",
  },
  {
    term: "loyalty program",
    pos: "noun",
    category: "Marketing & Sales",
    definition:
      "A marketing strategy that rewards repeat customers with points, discounts, or exclusive offers.",
    example:
      "Members of the loyalty program earn points toward free merchandise with every purchase.",
  },
  {
    term: "cold call",
    pos: "verb",
    category: "Marketing & Sales",
    definition:
      "To contact a potential customer who has had no prior interaction with the company, without a scheduled appointment.",
    example: "Sales representatives cold call prospects every morning to generate new leads.",
  },
  {
    term: "upsell",
    pos: "verb",
    category: "Marketing & Sales",
    definition:
      "To persuade a customer to purchase a more expensive item, upgrade, or additional product.",
    example: "The waiter upsold the couple on a bottle of wine to go with their meal.",
  },
  {
    term: "niche market",
    pos: "noun",
    category: "Marketing & Sales",
    definition:
      "A narrowly defined segment of a market with specific needs not served by mainstream offerings.",
    example: "The company found success by targeting a niche market of eco-conscious pet owners.",
  },
  {
    term: "promotional",
    pos: "adjective",
    category: "Marketing & Sales",
    definition: "Relating to activities intended to advertise or increase sales of a product.",
    example:
      "The retailer ran a promotional offer that included a free gift with every purchase over fifty euros.",
  },
  {
    term: "demographic",
    pos: "noun",
    category: "Marketing & Sales",
    definition:
      "A section of a population defined by characteristics such as age, income, or gender, often used to define a target market.",
    example: "Marketers analyzed the demographic most likely to purchase the new smartphone.",
  },
  {
    term: "word of mouth",
    pos: "noun",
    category: "Marketing & Sales",
    definition:
      "The informal spread of information about a product or service from person to person.",
    example:
      "Word of mouth remains one of the most effective forms of advertising for small businesses.",
  },
  {
    term: "bulk order",
    pos: "noun",
    category: "Marketing & Sales",
    definition: "A large quantity purchase, typically made at a discounted rate.",
    example:
      "The distributor offered a reduced unit price for any bulk order over five hundred units.",
  },
  {
    term: "wholesale",
    pos: "adjective",
    category: "Marketing & Sales",
    definition:
      "Relating to the sale of goods in large quantities, typically to retailers rather than individual consumers.",
    example:
      "The manufacturer sells its products at wholesale prices to retailers across the country.",
  },
  {
    term: "campaign",
    pos: "noun",
    category: "Marketing & Sales",
    definition:
      "A series of coordinated activities designed to promote a product, service, or cause.",
    example:
      "The marketing team launched a digital campaign to introduce the product to a wider audience.",
  },
  {
    term: "testimonial",
    pos: "noun",
    category: "Marketing & Sales",
    definition:
      "A statement from a satisfied customer used to promote the credibility of a product or service.",
    example:
      "The company featured a customer testimonial on its homepage to build trust with new visitors.",
  },
  {
    term: "negotiate",
    pos: "verb",
    category: "Marketing & Sales",
    definition:
      "To discuss something with another party in order to reach a mutually acceptable agreement, such as on price or terms.",
    example:
      "The sales manager negotiated a lower price with the supplier before signing the contract.",
  },
  {
    term: "lucrative",
    pos: "adjective",
    category: "Marketing & Sales",
    definition: "Producing a great deal of profit.",
    example: "Expanding into the Asian market proved to be a lucrative decision for the company.",
  },
  {
    term: "slogan",
    pos: "noun",
    category: "Marketing & Sales",
    definition: "A short, memorable phrase used in advertising to promote a brand or product.",
    example: "The company's new slogan appeared on billboards throughout the city.",
  },

  // ── Human Resources ──
  {
    term: "candidate",
    pos: "noun",
    category: "Human Resources",
    definition: "A person being considered for a job or position.",
    example: "Only three candidates were invited back for a second interview.",
  },
  {
    term: "shortlist",
    pos: "verb",
    category: "Human Resources",
    definition:
      "To select a limited number of applicants from a larger pool for further consideration.",
    example: "The hiring committee shortlisted five applicants for the final round.",
  },
  {
    term: "background check",
    pos: "noun",
    category: "Human Resources",
    definition:
      "A screening process that verifies an applicant's employment history, education, and criminal record.",
    example: "The offer is contingent on a clean background check.",
  },
  {
    term: "job posting",
    pos: "noun",
    category: "Human Resources",
    definition: "A public announcement that a position is open and accepting applications.",
    example: "The job posting for the marketing role received over two hundred applications.",
  },
  {
    term: "probationary",
    pos: "adjective",
    category: "Human Resources",
    definition:
      "Relating to a trial period during which a new employee's performance is evaluated.",
    example:
      "New hires must complete a three-month probationary period before their contract is confirmed.",
  },
  {
    term: "severance package",
    pos: "noun",
    category: "Human Resources",
    definition: "The pay and benefits offered to an employee upon involuntary termination.",
    example: "Her severance package included two months' salary and continued health coverage.",
  },
  {
    term: "pension plan",
    pos: "noun",
    category: "Human Resources",
    definition: "A retirement savings program funded by an employer, an employee, or both.",
    example: "The company matches employee contributions to the pension plan up to five percent.",
  },
  {
    term: "parental leave",
    pos: "noun",
    category: "Human Resources",
    definition:
      "Authorized time off granted to an employee following the birth or adoption of a child.",
    example: "He requested twelve weeks of parental leave after his daughter was born.",
  },
  {
    term: "perk",
    pos: "noun",
    category: "Human Resources",
    definition: "An additional benefit provided to employees beyond their regular salary.",
    example: "Free gym membership is one of the perks of working here.",
  },
  {
    term: "flextime",
    pos: "noun",
    category: "Human Resources",
    definition:
      "A work arrangement that allows employees to choose their own starting and finishing hours within limits.",
    example: "Flextime lets staff start anytime between seven and ten in the morning.",
  },
  {
    term: "grievance",
    pos: "noun",
    category: "Human Resources",
    definition: "A formal complaint filed by an employee about workplace treatment or conditions.",
    example: "She filed a grievance after being passed over for promotion.",
  },
  {
    term: "disciplinary action",
    pos: "noun",
    category: "Human Resources",
    definition: "A formal response taken by management to address an employee's misconduct.",
    example: "Repeated lateness resulted in disciplinary action against the employee.",
  },
  {
    term: "harassment",
    pos: "noun",
    category: "Human Resources",
    definition:
      "Unwanted behavior in the workplace that creates an intimidating or hostile environment.",
    example: "The company has a zero-tolerance policy toward harassment of any kind.",
  },
  {
    term: "union",
    pos: "noun",
    category: "Human Resources",
    definition:
      "An organization of workers formed to negotiate with employers over wages and conditions.",
    example: "The union negotiated a pay increase for all factory staff.",
  },
  {
    term: "seniority",
    pos: "noun",
    category: "Human Resources",
    definition: "Priority or status given based on length of service with a company.",
    example: "Vacation time is allocated according to seniority.",
  },
  {
    term: "payroll",
    pos: "noun",
    category: "Human Resources",
    definition:
      "The total amount a company pays its employees, or the system used to calculate and distribute it.",
    example: "The payroll department processes salaries on the last day of each month.",
  },
  {
    term: "salaried",
    pos: "adjective",
    category: "Human Resources",
    definition: "Paid a fixed regular amount rather than an hourly wage.",
    example: "Salaried employees are not paid overtime for extra hours worked.",
  },
  {
    term: "underperform",
    pos: "verb",
    category: "Human Resources",
    definition: "To perform below an expected standard.",
    example: "Employees who consistently underperform are placed on an improvement plan.",
  },
  {
    term: "tenure",
    pos: "noun",
    category: "Human Resources",
    definition: "The length of time a person has held a job or position.",
    example: "During his ten-year tenure, sales tripled.",
  },
  {
    term: "dismissal",
    pos: "noun",
    category: "Human Resources",
    definition: "The act of formally removing an employee from their position.",
    example: "His dismissal followed a lengthy investigation into misconduct.",
  },
];

// Static count for pages (e.g. the homepage) that only need the number of
// terms and shouldn't import the full ~19KB terms array just for `.length`.
export const VOCAB_COUNT = vocabulary.length;
