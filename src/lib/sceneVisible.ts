import { useSyncExternalStore } from "react";

/** One shared preference for whether Part 1's text "Scene" description is shown
 *  underneath the photograph. It defaults to OFF, so practice matches the real
 *  test — in the actual TOEIC Part 1 you get only the photo and the four spoken
 *  statements, never a written description of the picture. Turning it on adds
 *  the description back as an optional scaffold for lower-level learners.
 *
 *  Backed by a module-level store + `useSyncExternalStore` (mirroring
 *  `useCriteriaLang`) so every question card reflects the same choice and
 *  updates together, without threading a prop through every PracticeQuestion
 *  call site (practice, mock test, adaptive).
 *
 *  SSR-safe: the server snapshot is always `false`, so the server markup and
 *  the hydration render agree; the client re-reads the stored preference right
 *  after hydration. This only governs items that actually have a photo — a
 *  Part 1 item with no image keeps its Scene text regardless, since there the
 *  description is the only stimulus (see QuestionPassage). */

const KEY = "toeicpath:show-scene";

let current: boolean | null = null;
const listeners = new Set<() => void>();

function read(): boolean {
  if (current !== null) return current;
  if (typeof window === "undefined") return false;
  current = window.localStorage.getItem(KEY) === "1";
  return current;
}

export function setSceneVisible(visible: boolean) {
  current = visible;
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(KEY, visible ? "1" : "0");
    } catch {
      // localStorage unavailable (private mode / disabled) — the choice just
      // won't persist across reloads.
    }
  }
  listeners.forEach((fn) => fn());
}

function subscribe(fn: () => void) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function useSceneVisible(): [boolean, (visible: boolean) => void] {
  const visible = useSyncExternalStore(subscribe, read, () => false);
  return [visible, setSceneVisible];
}
