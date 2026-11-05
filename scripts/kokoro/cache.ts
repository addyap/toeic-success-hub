import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";

export const MODEL = "kokoro-82m";
// Bump when the Python pipeline, model weights, speed, or encoding changes.
export const SYNTHESIS_VERSION = "kokoro-0.9.4-v1-speed1-mp3-64k";
// Original shipped files predate config-addressed filenames. Never advance this.
export const LEGACY_SYNTHESIS_VERSION = "kokoro-0.9.4-v1-speed1-mp3-64k";
export const VOICES = [
  "af_heart",
  "bm_george",
  "bf_emma",
  "am_fenrir",
  "af_bella",
  "am_michael",
] as const;

export function parseVoice(value: string): string {
  if (!(VOICES as readonly string[]).includes(value))
    throw new Error(`Unsupported voice: ${value}. Choose ${VOICES.join(", ")}.`);
  return value;
}

export function synthesisFile(text: string, voice: string): string {
  parseVoice(voice);
  const key = createHash("sha256")
    .update(JSON.stringify([SYNTHESIS_VERSION, text, voice]))
    .digest("hex");
  return `kokoro-${key}.mp3`;
}

/** MP3s are 64 kbps mono. Reject empty/invalid headers and short output,
 * including cached files; short letter cues still need a nonempty MP3. */
export async function validClip(path: URL, text: string): Promise<boolean> {
  try {
    const bytes = await readFile(path);
    const header =
      bytes.subarray(0, 3).toString() === "ID3" ||
      (bytes[0] === 0xff && (bytes[1] & 0xe0) === 0xe0);
    return (
      header &&
      bytes.length >= 500 &&
      (text.length <= 15 || bytes.length / 8050 >= (text.length / 15) * 0.55)
    );
  } catch {
    return false;
  }
}
