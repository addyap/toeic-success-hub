export type VocabCategory = "Management" | "Travel" | "Finance" | "Technical";

export interface VocabTerm {
  term: string;
  pos: string; // part of speech
  category: VocabCategory;
  definition: string;
  example: string;
}

export const vocabulary: VocabTerm[] = [
  // ── Management ──
  { term: "delegate", pos: "verb", category: "Management", definition: "To assign a task or responsibility to someone else.", example: "Good managers delegate routine tasks so they can focus on strategy." },
  { term: "stakeholder", pos: "noun", category: "Management", definition: "A person or group with an interest in a project or company.", example: "We need to update all stakeholders before the launch." },
  { term: "milestone", pos: "noun", category: "Management", definition: "A significant point or stage in a project.", example: "Completing the prototype is our first major milestone." },
  { term: "appraisal", pos: "noun", category: "Management", definition: "A formal assessment of an employee's performance.", example: "Annual appraisals will take place in December." },
  { term: "onboarding", pos: "noun", category: "Management", definition: "The process of integrating and training a new employee.", example: "The onboarding process now includes a week of training." },
  { term: "oversee", pos: "verb", category: "Management", definition: "To supervise or be in charge of work.", example: "She oversees the entire marketing department." },
  { term: "headcount", pos: "noun", category: "Management", definition: "The total number of employees.", example: "Budget cuts mean we can't increase headcount this quarter." },
  { term: "agenda", pos: "noun", category: "Management", definition: "A list of items to be discussed at a meeting.", example: "Please circulate the agenda before the meeting." },

  // ── Travel ──
  { term: "itinerary", pos: "noun", category: "Travel", definition: "A planned route or schedule for a journey.", example: "Your itinerary includes a two-hour layover in Dubai." },
  { term: "layover", pos: "noun", category: "Travel", definition: "A period of waiting between connecting flights.", example: "We have a short layover before the connecting flight." },
  { term: "reimbursement", pos: "noun", category: "Travel", definition: "Repayment of money that someone has spent.", example: "Submit your receipts for reimbursement of travel expenses." },
  { term: "accommodation", pos: "noun", category: "Travel", definition: "A place to stay, such as a hotel room.", example: "The company will cover accommodation for the conference." },
  { term: "boarding pass", pos: "noun", category: "Travel", definition: "A document that allows a passenger to board a flight.", example: "Please have your boarding pass ready at the gate." },
  { term: "voucher", pos: "noun", category: "Travel", definition: "A document that can be exchanged for goods or services.", example: "Guests received a meal voucher during the delay." },
  { term: "baggage allowance", pos: "noun", category: "Travel", definition: "The amount of luggage a passenger is permitted to bring.", example: "Economy passengers have a 23-kg baggage allowance." },
  { term: "shuttle", pos: "noun", category: "Travel", definition: "A vehicle that runs a regular short route between two points.", example: "A free shuttle runs between the hotel and the airport." },

  // ── Finance ──
  { term: "invoice", pos: "noun", category: "Finance", definition: "A bill listing goods or services and the amount owed.", example: "The supplier sent an invoice for last month's order." },
  { term: "revenue", pos: "noun", category: "Finance", definition: "The total income a business generates.", example: "Quarterly revenue rose by 12 percent." },
  { term: "expenditure", pos: "noun", category: "Finance", definition: "The amount of money that is spent.", example: "We need to reduce expenditure on office supplies." },
  { term: "forecast", pos: "noun/verb", category: "Finance", definition: "A prediction of future figures or trends.", example: "The sales forecast for next year looks promising." },
  { term: "audit", pos: "noun/verb", category: "Finance", definition: "An official inspection of an organization's accounts.", example: "An external firm will audit our financial records." },
  { term: "reconcile", pos: "verb", category: "Finance", definition: "To make two sets of accounts agree.", example: "Please reconcile the bank statement with our ledger." },
  { term: "overhead", pos: "noun", category: "Finance", definition: "The ongoing operating expenses of a business.", example: "Moving offices will lower our monthly overhead." },
  { term: "fiscal", pos: "adjective", category: "Finance", definition: "Relating to financial matters, especially budgets.", example: "The fiscal year ends in March." },

  // ── Technical ──
  { term: "troubleshoot", pos: "verb", category: "Technical", definition: "To identify and solve problems with a system.", example: "IT will troubleshoot the network issue this afternoon." },
  { term: "downtime", pos: "noun", category: "Technical", definition: "A period when a system is unavailable.", example: "The upgrade will cause two hours of downtime." },
  { term: "deploy", pos: "verb", category: "Technical", definition: "To put software into active use.", example: "We plan to deploy the new version on Friday." },
  { term: "bandwidth", pos: "noun", category: "Technical", definition: "The capacity of a network to transmit data.", example: "Video calls require sufficient bandwidth." },
  { term: "configuration", pos: "noun", category: "Technical", definition: "The way a system's settings are arranged.", example: "Check the printer configuration before reporting a fault." },
  { term: "backup", pos: "noun", category: "Technical", definition: "A copy of data kept in case the original is lost.", example: "Always keep a backup of important files." },
  { term: "latency", pos: "noun", category: "Technical", definition: "The delay before data transfer begins.", example: "High latency made the video conference lag." },
  { term: "specifications", pos: "noun", category: "Technical", definition: "Detailed requirements or features of a product.", example: "The new laptops meet all our technical specifications." },
];