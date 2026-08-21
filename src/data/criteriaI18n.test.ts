import { describe, it, expect } from "vitest";
import { speakingPrompts, writingPrompts } from "./fourSkillsPrompts";
import { CRITERIA_LANGS, localizeCriteria, type TranslatableLang } from "./criteriaI18n";
import fr from "./criteria/fr";
import es from "./criteria/es";
import pt from "./criteria/pt";
import ja from "./criteria/ja";
import ko from "./criteria/ko";
import zh from "./criteria/zh";
import vi from "./criteria/vi";

// Statically imported here (unlike the app, which lazy-loads each language on
// demand — see criteriaI18n.ts) so every language's content gets validated
// regardless of runtime loading, which is a bundling concern, not a content one.
const criteriaByLang: Record<TranslatableLang, Record<string, string[]>> = {
  fr,
  es,
  pt,
  ja,
  ko,
  zh,
  vi,
};

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
const translatableLangs = CRITERIA_LANGS.map((l) => l.code).filter(
  (c): c is TranslatableLang => c !== "en",
);

describe("criteria translations", () => {
  it("covers every prompt in every language", () => {
    for (const id of Object.keys(english)) {
      for (const lang of translatableLangs) {
        expect(criteriaByLang[lang][id], `"${id}" is missing ${lang}`).toBeDefined();
      }
    }
  });

  it("aligns every translation length with the English checklist", () => {
    for (const id of Object.keys(english)) {
      for (const lang of translatableLangs) {
        expect(criteriaByLang[lang][id]?.length, `"${id}" ${lang} length`).toBe(english[id].length);
      }
    }
  });

  it("has no orphan ids without a matching English prompt", () => {
    for (const lang of translatableLangs) {
      for (const id of Object.keys(criteriaByLang[lang])) {
        expect(english[id], `orphan translation id "${id}" in ${lang}`).toBeDefined();
      }
    }
  });

  it("falls back to English per item when a translation is absent", () => {
    const en = ["a", "b", "c"];
    // No loaded map → English unchanged (this is the pre-fetch/loading state).
    expect(localizeCriteria("does-not-exist", en, "fr")).toEqual(en);
    // English requested → English unchanged, even with a map provided.
    const realId = Object.keys(english)[0];
    expect(localizeCriteria(realId, english[realId], "en", criteriaByLang.fr)).toEqual(
      english[realId],
    );
    // A loaded map without this id → falls back to English.
    expect(localizeCriteria("does-not-exist", en, "fr", criteriaByLang.fr)).toEqual(en);
  });
});
