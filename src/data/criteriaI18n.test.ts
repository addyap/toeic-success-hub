import { describe, it, expect } from "vitest";
import { speakingPrompts, writingPrompts } from "./fourSkillsPrompts";
import { criteriaTranslations, CRITERIA_LANGS, localizeCriteria } from "./criteriaI18n";

/** Collect every English checklist by prompt id — the source of truth the
 *  translations must stay aligned with. */
function englishChecklists(): Record<string, string[]> {
  const out: Record<string, string[]> = {};
  for (const p of speakingPrompts) out[p.id] = p.checklist;
  for (const w of writingPrompts) {
    const anyW = w as unknown as {
      id: string;
      checklist?: string[];
      items?: { id: string; checklist?: string[] }[];
    };
    if (anyW.checklist) out[anyW.id] = anyW.checklist;
    if (Array.isArray(anyW.items)) {
      for (const it of anyW.items) if (it.checklist) out[it.id] = it.checklist;
    }
  }
  return out;
}

const english = englishChecklists();
const translatableLangs = CRITERIA_LANGS.map((l) => l.code).filter((c) => c !== "en");

describe("criteria translations", () => {
  it("covers every prompt in every language", () => {
    for (const id of Object.keys(english)) {
      const entry = criteriaTranslations[id];
      expect(entry, `no translations for prompt "${id}"`).toBeDefined();
      for (const lang of translatableLangs) {
        expect(entry![lang], `"${id}" is missing ${lang}`).toBeDefined();
      }
    }
  });

  it("aligns every translation length with the English checklist", () => {
    for (const id of Object.keys(english)) {
      const entry = criteriaTranslations[id]!;
      for (const lang of translatableLangs) {
        expect(entry[lang]!.length, `"${id}" ${lang} length`).toBe(english[id].length);
      }
    }
  });

  it("has no orphan ids without a matching English prompt", () => {
    for (const id of Object.keys(criteriaTranslations)) {
      expect(english[id], `orphan translation id "${id}"`).toBeDefined();
    }
  });

  it("falls back to English per item when a translation is absent", () => {
    const en = ["a", "b", "c"];
    // Unknown id → English unchanged.
    expect(localizeCriteria("does-not-exist", en, "fr")).toEqual(en);
    // English requested → English unchanged.
    const realId = Object.keys(english)[0];
    expect(localizeCriteria(realId, english[realId], "en")).toEqual(english[realId]);
  });
});
