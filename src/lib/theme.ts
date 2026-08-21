import { useSyncExternalStore } from "react";

/** Light/dark theme preference, persisted per device. The actual `.dark`
 *  class on <html> is set two ways: synchronously before first paint by the
 *  inline script in src/routes/__root.tsx (so there's no flash of the wrong
 *  theme), and here, after hydration, whenever the user toggles it. Both read
 *  the same localStorage key and the same system-preference fallback, so they
 *  never disagree. Backed by a module-level store + `useSyncExternalStore`
 *  (same pattern as useCriteriaLang) so every toggle instance on the page
 *  stays in sync without a context provider. */

const KEY = "toeicpath:theme";
export type Theme = "light" | "dark";

function detectSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyThemeClass(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

let current: Theme | null = null;
const listeners = new Set<() => void>();

function read(): Theme {
  if (current) return current;
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(KEY);
  current = stored === "dark" || stored === "light" ? stored : detectSystemTheme();
  return current;
}

export function setTheme(theme: Theme) {
  current = theme;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(KEY, theme);
    applyThemeClass(theme);
  }
  listeners.forEach((fn) => fn());
}

function subscribe(fn: () => void) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function useTheme(): [Theme, (theme: Theme) => void] {
  const theme = useSyncExternalStore(subscribe, read, () => "light" as Theme);
  return [theme, setTheme];
}
