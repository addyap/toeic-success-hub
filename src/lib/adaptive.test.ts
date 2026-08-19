import { describe, expect, it } from "vitest";

import { questionsByPart } from "@/data/listeningReadingQuestions";
import {
  buildAdaptiveSection,
  SECTION_PARTS,
  UNIT1_COUNT,
  UNIT2_COUNT,
  tierForScore,
  type Section,
  type Tier,
} from "./adaptive";

const SECTIONS: Section[] = ["listening", "reading"];
const TIERS: Tier[] = ["supportive", "standard", "challenging"];
// The build has a shuffle in it, so exercise it a few times per section.
const RUNS = 8;

// Grouped questions share a generic `prompt` and one `context`, so identify a
// source question by its own text plus its (shuffle-independent) option set.
const idOf = (q: {
  prompt: string;
  question?: string;
  correct: string;
  context?: string;
  options: { text: string }[];
}) =>
  `${q.question ?? q.prompt}|${q.context ?? ""}|${q.options
    .map((o) => o.text)
    .sort()
    .join("~")}`;

describe("adaptive section builder", () => {
  for (const section of SECTIONS) {
    describe(section, () => {
      it(`Unit 1 is exactly ${UNIT1_COUNT} questions with matching parts`, () => {
        for (let r = 0; r < RUNS; r++) {
          const bp = buildAdaptiveSection(questionsByPart, section);
          expect(bp.unit1).toHaveLength(UNIT1_COUNT);
          expect(bp.unit1Parts).toHaveLength(UNIT1_COUNT);
        }
      });

      it(`every Unit 2 tier is exactly ${UNIT2_COUNT} questions with matching parts`, () => {
        for (let r = 0; r < RUNS; r++) {
          const bp = buildAdaptiveSection(questionsByPart, section);
          for (const tier of TIERS) {
            expect(bp.unit2[tier], `${tier} length`).toHaveLength(UNIT2_COUNT);
            expect(bp.unit2Parts[tier], `${tier} parts`).toHaveLength(UNIT2_COUNT);
          }
        }
      });

      it("every question belongs to a part of this section", () => {
        const allowed = new Set(SECTION_PARTS[section]);
        const bp = buildAdaptiveSection(questionsByPart, section);
        for (const p of bp.unit1Parts) expect(allowed.has(p)).toBe(true);
        for (const tier of TIERS) {
          for (const p of bp.unit2Parts[tier]) expect(allowed.has(p)).toBe(true);
        }
      });

      it("the chosen Unit 2 never repeats a Unit 1 question", () => {
        for (let r = 0; r < RUNS; r++) {
          const bp = buildAdaptiveSection(questionsByPart, section);
          const unit1Ids = new Set(bp.unit1.map(idOf));
          for (const tier of TIERS) {
            for (const q of bp.unit2[tier]) {
              expect(unit1Ids.has(idOf(q)), `${tier} overlaps Unit 1`).toBe(false);
            }
          }
        }
      });

      it("a full session (Unit 1 + any tier) has no duplicate questions", () => {
        const bp = buildAdaptiveSection(questionsByPart, section);
        for (const tier of TIERS) {
          const ids = [...bp.unit1, ...bp.unit2[tier]].map(idOf);
          expect(new Set(ids).size, `${tier} has duplicates`).toBe(ids.length);
        }
      });
    });
  }

  it("tierForScore maps performance to the right band", () => {
    expect(tierForScore(25, 25)).toBe("challenging");
    expect(tierForScore(18, 25)).toBe("challenging"); // 72%
    expect(tierForScore(15, 25)).toBe("standard"); // 60%
    expect(tierForScore(10, 25)).toBe("supportive"); // 40%
    expect(tierForScore(0, 25)).toBe("supportive");
  });
});
