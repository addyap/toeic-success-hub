/**
 * Standing integrity guarantees for the 4-Skills Speaking/Writing prompt
 * bank, mirroring questionBank.test.ts's audio checks for the L&R bank.
 *
 * Added after `scripts/generate-audio.ts` silently drifted to a stale import
 * path during an unrelated refactor (caught only by manually running the
 * script) and after confirming this file had no audio-coverage check at all
 * — a spoken prompt missing its manifest entry fails silently at runtime
 * (PromptAudio renders nothing, the printed text just stands in), so this
 * needs the same "every spoken line has a manifest entry" guarantee L&R has.
 */
import { existsSync, statSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { speakingPrompts } from "./fourSkillsPrompts";
import { audioManifest } from "./audioManifest";
import { audioKey } from "../lib/audioSource";

const BYTES_PER_SEC = 15974;
const MIN_DURATION_RATIO = 0.55;

function audioPath(file: string) {
  return new URL(`../../public/audio/${file}`, import.meta.url);
}

describe("4-Skills speaking prompt audio", () => {
  const spoken = speakingPrompts.filter((p) => p.spoken);

  it("at least one prompt is marked spoken (sanity check the filter itself works)", () => {
    expect(spoken.length).toBeGreaterThan(0);
  });

  it("every spoken prompt has a manifest entry", () => {
    for (const p of spoken) {
      const key = audioKey(p.prompt);
      expect(
        audioManifest[key],
        `missing audio for ${p.id}: "${p.prompt.slice(0, 60)}"`,
      ).toBeTruthy();
    }
  });

  it("every spoken prompt's audio file exists and is not truncated", () => {
    const truncated: string[] = [];
    for (const p of spoken) {
      const entry = audioManifest[audioKey(p.prompt)];
      const seg = entry?.segments[0];
      if (!seg) continue;
      expect(existsSync(audioPath(seg.file)), `${p.id}: ${seg.file}`).toBe(true);
      if (p.prompt.length <= 15) continue;
      const seconds = statSync(audioPath(seg.file)).size / BYTES_PER_SEC;
      const ratio = seconds / (p.prompt.length / 15);
      if (ratio < MIN_DURATION_RATIO) {
        truncated.push(
          `${p.id} → ${seg.file} (${seconds.toFixed(2)}s): "${p.prompt.slice(0, 60)}"`,
        );
      }
    }
    expect(truncated, `truncated audio clips:\n${truncated.join("\n")}`).toHaveLength(0);
  });
});
