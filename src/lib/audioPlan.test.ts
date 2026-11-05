import { describe, expect, it } from "vitest";
import { audioManifest } from "@/data/audioManifest";
import { listeningReadingQuestions, questionsByPart } from "@/data/listeningReadingQuestions";
import { speakingPrompts } from "@/data/fourSkillsPrompts";
import { audioKey, letterCueKey, questionCueKey } from "./audioSource";
import { promptAudioPlan, questionAudioPlan, validAudioEntry } from "./audioPlan";
import { applyOptionOrder, groupQuestions } from "./quiz";

describe("Kokoro audio coverage", () => {
  it("resolves every listening unit used by practice, mock, and adaptive sessions", () => {
    for (const { questions } of groupQuestions(listeningReadingQuestions)) {
      const first = questions[0];
      const plan = questionAudioPlan(first, questions.length > 1 ? questions : undefined);
      if (first.photo || first.listening) {
        expect(plan.segments.length, first.prompt).toBeGreaterThan(0);
        expect(plan.text).not.toBe("");
      } else expect(plan).toEqual({ text: "", segments: [] });
    }
  });
  it("keeps shuffled Part 1/2 recordings aligned with their spoken letters", () => {
    for (const part of questionsByPart.slice(0, 2)) {
      const first = part.questions[0];
      const shuffled = applyOptionOrder(first, first.options.map((o) => o.label).reverse());
      const plan = questionAudioPlan(shuffled);
      const tail = plan.segments.slice(-shuffled.options.length * 2);
      shuffled.options.forEach((o, i) => {
        expect(tail[i * 2]).toEqual(audioManifest[letterCueKey(o.label)].segments[0]);
        expect(tail[i * 2 + 1]).toEqual(audioManifest[audioKey(o.text)].segments[0]);
      });
      expect(plan.text).toContain(`A. ${shuffled.options[0].text}`);
    }
  });
  it("speaks grouped questions once, with numbered cues", () => {
    const group = groupQuestions(questionsByPart[2].questions).find(
      (u) => u.questions.length > 1,
    )!.questions;
    const plan = questionAudioPlan(group[0], group);
    group.forEach((q, i) => {
      expect(plan.text).toContain(`Question ${i + 1}. ${q.question}`);
      expect(plan.segments).toContainEqual(audioManifest[questionCueKey(i + 1)].segments[0]);
    });
    const missingCue = { ...audioManifest };
    delete missingCue[questionCueKey(1)];
    expect(questionAudioPlan(group[0], group, missingCue).segments).toEqual([]);
  });
  it("provides complete English fallback content for missing clips", () => {
    for (const part of questionsByPart.slice(0, 4)) {
      const plan = questionAudioPlan(part.questions[0], undefined, {});
      expect(plan.segments).toEqual([]);
      expect(plan.text.length).toBeGreaterThan(10);
      expect(plan.text).not.toMatch(/\((?:M|W)\)/);
    }
    expect(promptAudioPlan("Hello", {})).toEqual({ text: "Hello", segments: [] });
  });
  it("covers only spoken Speaking prompts; reading exercises have no audio plan", () => {
    for (const prompt of speakingPrompts.filter((p) => p.spoken)) {
      expect(promptAudioPlan(prompt.prompt).segments.length).toBeGreaterThan(0);
    }
    for (const part of questionsByPart.slice(4)) {
      for (const q of part.questions) expect(questionAudioPlan(q).segments).toEqual([]);
    }
  });
  it("rejects empty, foreign-model and nonlocal manifest entries", () => {
    expect(validAudioEntry({ model: "kokoro-82m", segments: [] })).toBe(false);
    for (const file of ["../secret.mp3", "https://evil.test/a.mp3", "/a.mp3", "a.mp3?x=1"]) {
      expect(
        validAudioEntry({ model: "kokoro-82m", segments: [{ file, voice: "af_heart" }] }),
      ).toBe(false);
    }
    expect(
      validAudioEntry({ model: "other", segments: [{ file: "clip.mp3", voice: "af_heart" }] }),
    ).toBe(false);
  });
});
