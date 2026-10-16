// The app is served at www.antonyaddy.com/toeic: the main site forwards
// /toeic/* to this project. BASE_PATH must match `base` in vite.config.ts.
export const SITE_ORIGIN = "https://www.antonyaddy.com";
export const BASE_PATH = "/toeic";
export const SITE_URL = `${SITE_ORIGIN}${BASE_PATH}`;
export const SITE_NAME = "ToeicPath";
export const SITE_TAGLINE = "TOEIC Practice & Prep";

/** Absolute URL for a route path ("/", "/four-skills") or for a bundled
 *  asset URL, which Vite already prefixes with BASE_PATH. No trailing slash
 *  on the home page: www.antonyaddy.com strips it. */
export function absoluteUrl(path: string) {
  if (path.startsWith(`${BASE_PATH}/`)) return `${SITE_ORIGIN}${path}`;
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

/** Path to a file in public/ ("/images/x.jpg" -> "/toeic/images/x.jpg"). */
export function publicUrl(path: string) {
  return `${BASE_PATH}${path}`;
}

/** Centralised page title. Never say "Official" — TOEIC® is an ETS
 *  trademark and this site isn't affiliated with or endorsed by ETS. */
export function pageTitle(section?: string): string {
  return section ? `${section} · ${SITE_NAME} — ${SITE_TAGLINE}` : `${SITE_NAME} — ${SITE_TAGLINE}`;
}
