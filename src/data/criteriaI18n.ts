/** Learner-language translations of the 4-Skills self-assessment criteria.
 *
 *  Self-assessment is where the learner's own language removes ambiguity: the
 *  whole task is judging your English against a criterion, so the criterion
 *  itself should be fully understood. The English `checklist` on each prompt in
 *  `fourSkillsPrompts.ts` stays the source of truth; the arrays here are keyed
 *  by prompt id and aligned index-for-index with that English list.
 *
 *  Embedded English inside a criterion — words the learner is being tested on
 *  ('renew', 'self-service', 'while', 'although'), place names, spoken numbers,
 *  flight codes — is deliberately kept in English in every language.
 *
 *  A missing language, or a translation array shorter than the English one,
 *  falls back to English per item (see `localizeCriteria`), so a newly added
 *  prompt never shows a blank line before its translations are written.
 *  `criteriaI18n.test.ts` guards length alignment. */

export const CRITERIA_LANGS = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "pt", label: "Português" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
  { code: "zh", label: "繁體中文" },
  { code: "vi", label: "Tiếng Việt" },
] as const;

export type CriteriaLangCode = (typeof CRITERIA_LANGS)[number]["code"];
export type TranslatableLang = Exclude<CriteriaLangCode, "en">;

/** Each translatable language's criteria live in their own module
 *  (src/data/criteria/<lang>.ts) rather than one shared object, and are
 *  fetched on demand: a learner who never leaves English never downloads any
 *  of the ~7 languages' ~33KB (gzipped) worth of strings. Each module exports
 *  a `Record<string, string[]>` keyed by prompt id, aligned index-for-index
 *  with that prompt's English `checklist` (see fourSkillsPrompts.ts).
 *
 *  criteriaI18n.test.ts imports every module directly (bypassing the lazy
 *  loader, which is a runtime/bundling concern, not a content one) to check
 *  coverage, length alignment, and orphan ids across all of them. */
export type CriteriaMap = Record<string, string[]>;

const loaders: Record<TranslatableLang, () => Promise<{ default: CriteriaMap }>> = {
  fr: () => import("./criteria/fr"),
  es: () => import("./criteria/es"),
  pt: () => import("./criteria/pt"),
  ja: () => import("./criteria/ja"),
  ko: () => import("./criteria/ko"),
  zh: () => import("./criteria/zh"),
  vi: () => import("./criteria/vi"),
};

const cache = new Map<TranslatableLang, CriteriaMap>();
const inflight = new Map<TranslatableLang, Promise<CriteriaMap>>();

/** Returns a previously loaded language's criteria map, or undefined if it
 *  hasn't been fetched yet (or the fetch is still in flight). Synchronous, so
 *  a component can seed its initial render from anything already cached
 *  before deciding whether it needs to kick off loadCriteriaLang(). */
export function getCachedCriteriaLang(lang: TranslatableLang): CriteriaMap | undefined {
  return cache.get(lang);
}

/** Fetches (and caches) one language's criteria module. Concurrent calls for
 *  the same language share one in-flight import rather than triggering
 *  duplicate network requests. */
export function loadCriteriaLang(lang: TranslatableLang): Promise<CriteriaMap> {
  const cached = cache.get(lang);
  if (cached) return Promise.resolve(cached);
  const existing = inflight.get(lang);
  if (existing) return existing;
  const promise = loaders[lang]().then((mod) => {
    cache.set(lang, mod.default);
    inflight.delete(lang);
    return mod.default;
  });
  inflight.set(lang, promise);
  return promise;
}

/** Returns the criteria in `lang`, falling back to the English source per item
 *  when a language hasn't loaded yet (or has no translation for a specific
 *  line). `english` is always the length-of-record source of truth, so the
 *  returned array matches it one-for-one regardless of translation state.
 *  `map` is the already-loaded map for `lang` (from getCachedCriteriaLang or
 *  a resolved loadCriteriaLang) — this function itself stays synchronous and
 *  side-effect-free so it's trivial to test and to call during render. */
export function localizeCriteria(
  id: string,
  english: string[],
  lang: CriteriaLangCode,
  map?: CriteriaMap,
): string[] {
  if (lang === "en") return english;
  const translated = map?.[id];
  if (!translated) return english;
  return english.map((en, i) => translated[i] ?? en);
}
