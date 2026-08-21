import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Scrolls an element into view, but instantly rather than smoothly for
 *  anyone with the OS-level "reduce motion" preference set — the CSS
 *  `scroll-behavior: auto !important` override in styles.css only affects
 *  CSS/anchor-driven scrolling, not JS calls that pass `behavior: "smooth"`
 *  explicitly, so call sites need this instead of calling scrollIntoView
 *  directly. */
export function scrollIntoViewRespectingMotion(
  el: Element | null | undefined,
  opts: ScrollIntoViewOptions = { block: "start" },
) {
  if (!el) return;
  const reduceMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ ...opts, behavior: reduceMotion ? "auto" : "smooth" });
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
