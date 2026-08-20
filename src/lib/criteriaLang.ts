import { useSyncExternalStore } from "react";
import { CRITERIA_LANGS, type CriteriaLangCode } from "@/data/criteriaI18n";

/** One shared preference for the language of the self-assessment criteria,
 *  persisted per device. Backed by a module-level store + `useSyncExternalStore`
 *  so every "score yourself" card on the page reflects the same choice and
 *  updates together, without threading a context provider through the trainers.
 *
 *  SSR-safe: the server (and the hydration render) always sees "en" via the
 *  server snapshot, so markup matches; the client re-reads the stored/detected
 *  language immediately after hydration. */

const KEY = "toeicpath:criteria-lang";
const CODES = CRITERIA_LANGS.map((l) => l.code) as CriteriaLangCode[];

function isCode(v: string | null): v is CriteriaLangCode {
  return v !== null && (CODES as string[]).includes(v);
}

/** First run: default to the browser's language when we translate it, else English. */
function detectDefault(): CriteriaLangCode {
  if (typeof navigator === "undefined") return "en";
  const primary = navigator.language?.slice(0, 2).toLowerCase();
  return isCode(primary ?? "") ? (primary as CriteriaLangCode) : "en";
}

let current: CriteriaLangCode | null = null;
const listeners = new Set<() => void>();

function read(): CriteriaLangCode {
  if (current) return current;
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(KEY);
  current = isCode(stored) ? stored : detectDefault();
  return current;
}

export function setCriteriaLang(lang: CriteriaLangCode) {
  current = lang;
  if (typeof window !== "undefined") window.localStorage.setItem(KEY, lang);
  listeners.forEach((fn) => fn());
}

function subscribe(fn: () => void) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function useCriteriaLang(): [CriteriaLangCode, (lang: CriteriaLangCode) => void] {
  const lang = useSyncExternalStore(subscribe, read, () => "en" as CriteriaLangCode);
  return [lang, setCriteriaLang];
}
