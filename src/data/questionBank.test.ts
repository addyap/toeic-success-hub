/**
 * Standing integrity guarantees for the question bank.
 *
 * These encode the checks that were previously run by hand after each content
 * change. They exist because this is a paid product: a wrong answer key, a
 * silent audio clip, or a passage that leaks its own answer is a refund and a
 * lost customer, and none of those fail loudly at runtime.
 */
import { existsSync, statSync } from "node:fs";
import { describe, expect, it } from "vitest";
import {
  listeningReadingQuestions,
  part1Questions,
  part2Questions,
  part3Questions,
  part4Questions,
  part5Questions,
  part6Questions,
  part7Questions,
} from "./listeningReadingQuestions";
import { audioManifest } from "./audioManifest";
import { audioKey, audioKeyForTurns, getAudioTurns, getGroupAudioTurns } from "../lib/audioSource";
import { groupQuestions } from "../lib/quiz";
import type { PracticeQuestionData } from "../components/PracticeQuestion";

const PARTS: [string, PracticeQuestionData[]][] = [
  ["1", part1Questions],
  ["2", part2Questions],
  ["3", part3Questions],
  ["4", part4Questions],
  ["5", part5Questions],
  ["6", part6Questions],
  ["7", part7Questions],
];

/** Generated mp3s are 125 kbps CBR, so bytes/sec is a reliable duration proxy
 *  without pulling in an audio-decoding dependency. */
const BYTES_PER_SEC = 15974;
/** Speech runs ~15 chars/sec; anything under half its expected length was
 *  truncated mid-synthesis (the failure mode that shipped two dead clips). */
const MIN_DURATION_RATIO = 0.55;

function audioPath(file: string) {
  return new URL(`../../public/audio/${file}`, import.meta.url);
}

describe("answer keys", () => {
  it.each(PARTS)("Part %s: every question's correct label exists in its options", (_n, qs) => {
    for (const q of qs) {
      const labels = q.options.map((o) => o.label);
      expect(labels, `"${q.question ?? q.prompt}"`).toContain(q.correct);
    }
  });

  it.each(PARTS)("Part %s: option labels are unique within a question", (_n, qs) => {
    for (const q of qs) {
      const labels = q.options.map((o) => o.label);
      expect(new Set(labels).size, `"${q.question ?? q.prompt}"`).toBe(labels.length);
    }
  });

  it.each(PARTS)("Part %s: no two options share the same text", (_n, qs) => {
    for (const q of qs) {
      const texts = q.options.map((o) => o.text.trim().toLowerCase());
      expect(new Set(texts).size, `"${q.question ?? q.prompt}"`).toBe(texts.length);
    }
  });

  it.each(PARTS)("Part %s: no option text is empty", (_n, qs) => {
    for (const q of qs) {
      for (const o of q.options) expect(o.text.trim().length).toBeGreaterThan(0);
    }
  });

  it("every question has a non-empty explanation", () => {
    for (const q of listeningReadingQuestions) {
      expect(q.explanation?.trim().length ?? 0, `"${q.question ?? q.prompt}"`).toBeGreaterThan(0);
    }
  });
});

describe("real-exam format", () => {
  it("Part 2 questions offer exactly three spoken responses", () => {
    for (const q of part2Questions) {
      expect(q.options).toHaveLength(3);
      expect(q.spokenOptions, "Part 2 is audio-only on the real test").toBe(true);
    }
  });

  it("every other part offers exactly four options", () => {
    for (const [n, qs] of PARTS) {
      if (n === "2") continue;
      for (const q of qs) expect(q.options, `Part ${n}`).toHaveLength(4);
    }
  });

  it("Part 1 questions each have a photo and a credit", () => {
    for (const q of part1Questions) {
      expect(q.photo).toBe(true);
      expect(q.image?.src).toBeTruthy();
      expect(q.image?.credit, `${q.image?.src} needs attribution`).toBeTruthy();
    }
  });

  it("Part 1 photo files exist on disk", () => {
    for (const q of part1Questions) {
      const src = q.image!.src.replace(/^\//, "");
      expect(existsSync(new URL(`../../public/${src}`, import.meta.url)), src).toBe(true);
    }
  });
});

describe("question groups (Parts 3, 4, 6, 7 sets)", () => {
  const units = groupQuestions(listeningReadingQuestions);
  const sets = units.filter((u) => u.questions.length > 1);

  it("every grouped question shares one identical passage", () => {
    for (const set of sets) {
      const contexts = new Set(set.questions.map((q) => q.context));
      expect(contexts.size, `${set.questions[0].groupId} has mismatched passages`).toBe(1);
    }
  });

  it("every question in a set carries its own sub-question text", () => {
    for (const set of sets) {
      for (const q of set.questions) {
        expect(q.question?.trim().length ?? 0, `${q.groupId}`).toBeGreaterThan(0);
      }
    }
  });

  it("no passage is reused across two different units", () => {
    const seen = new Map<string, string>();
    for (const u of units) {
      const ctx = u.questions[0].context;
      if (!ctx) continue;
      const id = u.questions[0].groupId ?? "(single)";
      expect(seen.has(ctx), `passage duplicated between ${seen.get(ctx)} and ${id}`).toBe(false);
      seen.set(ctx, id);
    }
  });

  it("a grouped passage never leaves a trailing single-question prompt behind", () => {
    for (const set of sets) {
      expect(set.questions[0].context ?? "", set.questions[0].groupId).not.toMatch(/\n\nQuestion:/);
    }
  });

  it("groupIds are contiguous, so no set is split in the export order", () => {
    const seenIds = new Set<string>();
    let prev: string | undefined;
    for (const q of listeningReadingQuestions) {
      if (q.groupId && q.groupId !== prev) {
        expect(seenIds.has(q.groupId), `${q.groupId} appears in two separate runs`).toBe(false);
        seenIds.add(q.groupId);
      }
      prev = q.groupId;
    }
  });
});

describe("audio", () => {
  /** Walks the bank exactly as scripts/generate-audio.ts does, so the test and
   *  the generator can never disagree about which clips should exist. */
  function expectedClips() {
    const clips: { key: string; index: number; text: string }[] = [];
    for (const unit of groupQuestions(listeningReadingQuestions)) {
      const first = unit.questions[0];
      if (!first.photo && !first.listening) continue;
      const isSet = unit.questions.length > 1;
      const turns = isSet ? getGroupAudioTurns(unit.questions) : getAudioTurns(first);
      if (turns.length === 0) continue;

      if (first.photo || first.spokenOptions) {
        for (const t of turns) clips.push({ key: audioKey(t.text), index: 0, text: t.text });
      } else {
        const key = audioKeyForTurns(turns);
        turns.forEach((t, i) => clips.push({ key, index: i, text: t.text }));
      }
    }
    return clips;
  }

  const clips = expectedClips();

  it("every spoken line has a manifest entry", () => {
    for (const c of clips) {
      expect(audioManifest[c.key], `missing audio for: "${c.text.slice(0, 60)}"`).toBeTruthy();
    }
  });

  it("every manifest segment points at a file that exists", () => {
    for (const entry of Object.values(audioManifest)) {
      for (const seg of entry.segments) {
        expect(existsSync(audioPath(seg.file)), seg.file).toBe(true);
      }
    }
  });

  it("no clip is truncated mid-synthesis", () => {
    const truncated: string[] = [];
    for (const c of clips) {
      const seg = audioManifest[c.key]?.segments[c.index];
      if (!seg || !existsSync(audioPath(seg.file))) continue;
      if (c.text.length <= 15) continue;
      const seconds = statSync(audioPath(seg.file)).size / BYTES_PER_SEC;
      const ratio = seconds / (c.text.length / 15);
      if (ratio < MIN_DURATION_RATIO) {
        truncated.push(`${seg.file} (${seconds.toFixed(2)}s): "${c.text.slice(0, 60)}"`);
      }
    }
    expect(truncated, `truncated audio clips:\n${truncated.join("\n")}`).toHaveLength(0);
  });
});

describe("mock test can be drawn at real-exam proportions", () => {
  // Real L&R section sizes. A part that cannot fill its quota from whole
  // groups would silently produce a short test.
  const QUOTAS: [string, PracticeQuestionData[], number][] = [
    ["1", part1Questions, 6],
    ["2", part2Questions, 25],
    ["3", part3Questions, 39],
    ["4", part4Questions, 30],
    ["5", part5Questions, 30],
    ["6", part6Questions, 16],
    ["7", part7Questions, 54],
  ];

  it.each(QUOTAS)("Part %s has enough questions to fill its quota", (_n, pool, quota) => {
    expect(pool.length).toBeGreaterThanOrEqual(quota);
  });

  it.each(QUOTAS)("Part %s quota is reachable using whole groups only", (n, pool, quota) => {
    // Greedily pack whole units; a part whose sets don't tile its quota would
    // leave the mock test permanently short.
    const sizes = groupQuestions(pool).map((u) => u.questions.length);
    let total = 0;
    for (const size of sizes.sort((a, b) => b - a)) {
      if (total + size <= quota) total += size;
    }
    expect(total, `Part ${n} can only reach ${total}/${quota}`).toBe(quota);
  });
});
