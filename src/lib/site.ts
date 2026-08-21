export const SITE_URL = "https://toeic.antonyaddy.com";
export const SITE_NAME = "ToeicPath";
export const SITE_TAGLINE = "TOEIC Practice & Prep";

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path}`;
}

/** Centralised page title. Never say "Official" — TOEIC® is an ETS
 *  trademark and this site isn't affiliated with or endorsed by ETS. */
export function pageTitle(section?: string): string {
  return section ? `${section} · ${SITE_NAME} — ${SITE_TAGLINE}` : `${SITE_NAME} — ${SITE_TAGLINE}`;
}
