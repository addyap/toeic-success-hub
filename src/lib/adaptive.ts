/** Builder for the Adaptive Practice mode — a format-accurate simulation of the
 *  TOEIC 4-Skills Multistage Adaptive Listening and Reading sections.
 *
 *  Each section runs 45 questions in two units: Unit 1 (25, the same kind of
 *  representative mix for everyone) then Unit 2 (20), whose difficulty is chosen
 *  from the learner's Unit 1 score. The real exam picks Unit 2 by item-level
 *  difficulty (IRT); this bank has no per-question difficulty ratings, so we
 *  approximate difficulty from the part plus the amount of text to process, and
 *  the UI is explicit that this simulates — rather than replicates — the
 *  adaptive engine.
 */

import type { PracticeQuestionData } from "@/components/PracticeQuestion";
import type { QuestionPart } from "@/data/listeningReadingQuestions";
import { groupQuestions, shuffleQuestionOptions } from "@/lib/quiz";
import { shuffle } from "@/lib/utils";

export type Section = "listening" | "reading";
export type Tier = "supportive" | "standard" | "challenging";

export const SECTION_PARTS: Record<Section, number[]> = {
  listening: [1, 2, 3, 4],
  reading: [5, 6, 7],
};

/** Real 4-Skills adaptive section times (verified against ETS Global). */
export const SECTION_MS: Record<Section, number> = {
  listening: 25 * 60 * 1000,
  reading: 37 * 60 * 1000,
};

export const UNIT1_COUNT = 25;
export const UNIT2_COUNT = 20;

/** Difficulty proxy. Base rank per part (photo/short-response are the gentlest
 *  listening items, conversations/talks the hardest; a single sentence is the
 *  gentlest reading item, long passages the hardest), nudged up by how much
 *  text the question makes you process. Higher = harder. */
const PART_BASE: Record<number, number> = {
  1: 1,
  2: 2,
  4: 4,
  3: 5,
  5: 2,
  6: 4,
  7: 6,
};

interface Unit {
  part: number;
  difficulty: number;
  questions: PracticeQuestionData[];
}

function unitDifficulty(part: number, questions: PracticeQuestionData[]): number {
  const q = questions[0];
  const textLen = (q.context?.length ?? 0) + (q.prompt?.length ?? 0);
  // text length contributes up to +3 on top of the part's base rank
  return (PART_BASE[part] ?? 3) + Math.min(3, textLen / 400);
}

/** All whole question-units (single items and grouped sets) for a section,
 *  tagged with part and difficulty, options pre-shuffled. */
function sectionUnits(byPart: QuestionPart[], section: Section): Unit[] {
  const units: Unit[] = [];
  for (const part of SECTION_PARTS[section]) {
    const pool = byPart.find((p) => p.part === part)?.questions ?? [];
    for (const g of groupQuestions(pool)) {
      const questions = g.questions.map(shuffleQuestionOptions);
      units.push({ part, difficulty: unitDifficulty(part, questions), questions });
    }
  }
  return units;
}

interface Picked {
  questions: PracticeQuestionData[];
  parts: number[];
}

/** Greedily pack whole units (in the given order) toward `count` without
 *  overshooting, then top up to exactly `count` with single-question units so
 *  the section total is always a clean 45. Consumed units are removed from
 *  `available`. Each picked question carries its part for the results breakdown. */
function packExact(available: Unit[], ordered: Unit[], count: number): Picked {
  const questions: PracticeQuestionData[] = [];
  const parts: number[] = [];
  const take = (u: Unit) => {
    questions.push(...u.questions);
    parts.push(...u.questions.map(() => u.part));
    const i = available.indexOf(u);
    if (i >= 0) available.splice(i, 1);
  };
  for (const u of ordered) {
    if (!available.includes(u)) continue;
    if (questions.length >= count) break;
    if (u.questions.length > 1 && questions.length + u.questions.length <= count) take(u);
  }
  // fill the remainder with singles (kept in `ordered` priority order)
  for (const u of ordered) {
    if (questions.length >= count) break;
    if (available.includes(u) && u.questions.length === 1) take(u);
  }
  return { questions, parts };
}

/** Unit 1: a representative spread across every part of the section, weighted
 *  roughly toward the real exam's part sizes, to exactly 25 questions. */
const UNIT1_WEIGHTS: Record<Section, Record<number, number>> = {
  listening: { 1: 2, 2: 5, 3: 9, 4: 9 },
  reading: { 5: 9, 6: 8, 7: 8 },
};

export interface AdaptiveBlueprint {
  unit1: PracticeQuestionData[];
  unit1Parts: number[];
  /** Three candidate Unit 2 sets; the one shown is chosen from the Unit 1 score
   *  at the transition, so nothing has to be rebuilt mid-session. */
  unit2: Record<Tier, PracticeQuestionData[]>;
  unit2Parts: Record<Tier, number[]>;
}

export function buildAdaptiveSection(byPart: QuestionPart[], section: Section): AdaptiveBlueprint {
  const available = shuffle(sectionUnits(byPart, section));

  // Unit 1 — pull each part's representative share, then the leftovers form the
  // pool the Unit 2 tiers draw from (so Unit 2 never repeats a Unit 1 item).
  const unit1: PracticeQuestionData[] = [];
  const unit1Parts: number[] = [];
  for (const part of SECTION_PARTS[section]) {
    const target = UNIT1_WEIGHTS[section][part] ?? 0;
    const partUnits = available.filter((u) => u.part === part);
    const picked = packExact(available, partUnits, target);
    unit1.push(...picked.questions);
    unit1Parts.push(...picked.parts);
  }

  const byEasiest = [...available].sort((a, b) => a.difficulty - b.difficulty);
  const byHardest = [...available].sort((a, b) => b.difficulty - a.difficulty);
  // "standard" reads from the middle of the difficulty range outward
  const mid = Math.floor(byEasiest.length / 2);
  const byMiddle = [...available].sort(
    (a, b) => Math.abs(byEasiest.indexOf(a) - mid) - Math.abs(byEasiest.indexOf(b) - mid),
  );

  // Each tier draws from a fresh copy of the leftover pool so the three
  // candidates are built independently (only one is ever shown).
  const supportive = packExact([...available], byEasiest, UNIT2_COUNT);
  const challenging = packExact([...available], byHardest, UNIT2_COUNT);
  const standard = packExact([...available], byMiddle, UNIT2_COUNT);

  return {
    unit1,
    unit1Parts,
    unit2: {
      supportive: supportive.questions,
      standard: standard.questions,
      challenging: challenging.questions,
    },
    unit2Parts: {
      supportive: supportive.parts,
      standard: standard.parts,
      challenging: challenging.parts,
    },
  };
}

/** Pick the Unit 2 tier from the Unit 1 result. */
export function tierForScore(correct: number, total: number): Tier {
  const pct = total === 0 ? 0 : correct / total;
  if (pct >= 0.7) return "challenging";
  if (pct <= 0.4) return "supportive";
  return "standard";
}

export const TIER_COPY: Record<Tier, { label: string; blurb: string }> = {
  supportive: {
    label: "more approachable",
    blurb:
      "Your Unit 1 score placed Unit 2 toward more approachable questions — shorter prompts and the gentler parts of the section.",
  },
  standard: {
    label: "mixed",
    blurb: "Your Unit 1 score placed Unit 2 at a balanced, mixed difficulty.",
  },
  challenging: {
    label: "more challenging",
    blurb:
      "Your Unit 1 score placed Unit 2 toward more challenging questions — longer texts and the harder parts of the section.",
  },
};
