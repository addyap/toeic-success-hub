import { describe, expect, it } from "vitest";
import { vocabulary } from "./vocabulary";
import { VOCAB_COUNT } from "./vocabularyCount";

describe("VOCAB_COUNT", () => {
  it("matches the number of terms in the vocabulary list", () => {
    expect(VOCAB_COUNT).toBe(vocabulary.length);
  });
});
