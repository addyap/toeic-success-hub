export const SITE_URL = "https://toeic.antonyaddy.com";
export const SITE_NAME = "ToeicPath";

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path}`;
}
