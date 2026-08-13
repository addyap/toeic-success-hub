# TOEIC pedagogy-audit — repair manifest (2026-08-13)

Resumable fix set. Each item: file, itemId, exact old → exact new. Apply in order; skip any whose file already matches "new".

## Refuted / NOT fixed
- **studyTips.ts `speaking-tasks-1-11`** (was flagged CRITICAL: Task 11 prep 15s→45s) — REFUTED. EF and the site's own ETS-handbook source give Question 11 = **15s prepare / 60s speak**. Site is correct; no change.
- **fourSkillsPrompts.ts `sp-opinion-*`** (was flagged MAJOR, same 15s→45s claim) — REFUTED, same reason. No change.

## MAJOR — auto-fix

1. **listeningReadingQuestions.ts · part3ee3** (mis-keyed "what will she do next")
   - `correct: "C",` → `correct: "B",`
   - explanation old: `"Her last line is, 'Great, I'll do a final read-through first thing in the morning before we head to the meeting.' Sending the deck (B) is something she says she will do 'in the next five minutes,' not as her final next step, and contacting the client (A) and asking Marketing (D) are never mentioned."`
   - explanation new: `"The man says, 'Send me the current deck now,' and she replies, 'Sending it over in the next five minutes' — her immediate next action, so (B) is correct. (C) the final read-through happens later, 'first thing in the morning,' not next. Contacting the client (A) and asking Marketing (D) are never mentioned as her actions."`

2. **listeningReadingQuestions.ts · part4l3** (reopen day — B and D both true)
   - option D old: `{ label: "D", text: "Two days from now." },` → new: `{ label: "D", text: "Not until the following week." },`
   - explanation old: `"...not an earlier one (C), and not a same-day reopening (A) or a two-day wait (D)."`
   - explanation new: `"...not an earlier one (C), not a same-day reopening (A), and not a week-long wait (D)."`

3. **listeningReadingQuestions.ts · part5ap** (collective noun BrE "are" also valid)
   - context old: `"The maintenance committee ______ scheduled to meet every second Tuesday of the month to review facility repair requests."`
   - context new: `"Each member of the maintenance committee ______ scheduled to meet every second Tuesday of the month to review facility repair requests."`
   - explanation new: `"The subject 'Each member' is grammatically singular in every variety of English, so it takes the singular 'is'. (B) 'are' and (D) 'have been' are plural and do not agree with 'each member'. (C) 'were' is plural and also wrong for this recurring, ongoing schedule."`

4. **listeningReadingQuestions.ts · part5au** (mandative subjunctive; BrE indicative "wears" defensible)
   - option A old: `{ label: "A", text: "wears" },` → new: `{ label: "A", text: "worn" },`
   - explanation (A) clause new: `"(A) 'worn' is a past participle with no auxiliary and cannot serve as the finite verb of the that-clause."` (keep the rest of the explanation about subjunctive/base form)

5. **listeningReadingQuestions.ts · part5r10a** (past-perfect simple "had investigated" also valid)
   - option C old: `{ label: "C", text: "had investigated" },` → new: `{ label: "C", text: "had been investigated" },`
   - explanation (C) clause new: `"(C) 'had been investigated' is passive and would wrongly mean the staff themselves were the object of an investigation, not the ones doing it."`

6. **studyTips.ts · part5-incomplete-sentences** (2nd-conditional rule excludes "would")
   - old: `pairs only with 'could' + base verb in the result clause, never with 'will' or 'would have'.`
   - new: `pairs with 'would', 'could', or 'might' + base verb in the result clause, never with 'will' or 'would have'.`

7. **vocabulary.ts · profit margin** (definition indistinguishable from markup)
   - old: `definition: "The percentage difference between cost and selling price.",`
   - new: `definition: "Profit expressed as a percentage of the selling price (revenue).",`

8. **vocabulary.ts · upsell** (definition + example overlap cross-sell)
   - definition old: `"To persuade a customer to purchase a more expensive item, upgrade, or additional product."`
   - definition new: `"To persuade a customer to buy a more expensive version or upgrade of the item they are already considering."`
   - example old: `example: "The waiter upsold the couple on a bottle of wine to go with their meal.",`
   - example new: `example: "The sales assistant upsold the customer to the premium laptop model with more storage.",`

## MINOR — auto-fix

9. **studyTips.ts · score-bands-explained** (title/body number mismatch)
   - title old: `"Score bands explained: what 600, 785, and 900 actually mean"`
   - title new: `"Score bands explained: what 550, 785, and 945 actually mean"`

10. **fourSkillsPrompts.ts · sp-info-1** ("workshops" plural but only one)
   - old: `afternoon workshops` → new: `afternoon workshop` (in the question text). NOTE: if this prompt is `spoken`, `bun run generate:audio` must be re-run.

## RECOMMENDATIONS (not auto-applied — need a decision or media check)

- **fourSkillsPrompts.ts wr-sentence-6**: model says "water supply"; a water heater has both water and gas connections — the photo (`picture-plumber.jpg`) may show a gas line. Verify the photo before changing "water supply" → "gas supply".
- **fourSkillsPrompts.ts wr-essay-1**: model ~218 words vs ~300 target — expand to better exemplify the Q8 essay length (judgment rewrite).
- **fourSkillsPrompts.ts sp-read-5 / sp-read-6**: ~105–108 words for a 45s read-aloud — consider trimming to ~90.
- **fourSkillsPrompts.ts sp-opinion-4**: office-vs-remote theme overlaps wr-essay-2 — optional re-theme.
