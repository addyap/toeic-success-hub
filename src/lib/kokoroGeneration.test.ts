import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { afterEach, describe, expect, it } from "vitest";
import { parseVoice, synthesisFile, validClip } from "../../scripts/kokoro/cache";
import { KokoroWorker } from "../../scripts/kokoro/worker";

const dirs: string[] = [];
const workers: KokoroWorker[] = [];
afterEach(async () => {
  workers.splice(0).forEach((worker) => worker.close());
  await Promise.all(dirs.splice(0).map((dir) => rm(dir, { recursive: true, force: true })));
});
async function tempFile() {
  const dir = await mkdtemp(join(tmpdir(), "toeic-kokoro-"));
  dirs.push(dir);
  return pathToFileURL(join(dir, "clip.mp3"));
}
function worker(code: string, timeoutMs = 1000) {
  const worker = new KokoroWorker(process.execPath, ["-e", code], timeoutMs);
  workers.push(worker);
  return worker;
}

describe("offline Kokoro generation", () => {
  it("keys new recordings by text, allowlisted voice, and synthesis version", () => {
    expect(synthesisFile("Hello", "af_heart")).toBe(synthesisFile("Hello", "af_heart"));
    expect(synthesisFile("Hello", "af_heart")).not.toBe(synthesisFile("Hello", "bf_emma"));
    expect(synthesisFile("Hello", "af_heart")).not.toBe(synthesisFile("Changed", "af_heart"));
    expect(() => parseVoice("../../voice")).toThrow("Unsupported voice");
    expect(() => parseVoice("unknown")).toThrow();
  });
  it("rejects missing, corrupt, empty, and truncated cache files", async () => {
    const file = await tempFile();
    expect(await validClip(file, "hello")).toBe(false);
    await writeFile(file, Buffer.alloc(10_000));
    expect(await validClip(file, "hello")).toBe(false);
    await writeFile(file, "ID3");
    expect(await validClip(file, "hello")).toBe(false);
    const mp3 = Buffer.alloc(1000);
    mp3.write("ID3");
    await writeFile(file, mp3);
    expect(await validClip(file, "A.")).toBe(true);
    expect(await validClip(file, "A long sentence requiring several seconds of speech.")).toBe(
      false,
    );
  });
  it("exchanges serial jobs without loading a real model", async () => {
    const w = worker(
      `require('readline').createInterface({input:process.stdin}).on('line', () => console.log(JSON.stringify({lines:[{offset:0,tokens:[]}]})))`,
    );
    await w.record("hello", "af_heart", "/unused.mp3");
    await w.record("again", "bf_emma", "/unused.mp3");
  });
  it("fails cleanly for malformed replies and worker exit", async () => {
    const malformed = worker(`process.stdin.once('data', () => console.log('not json'))`);
    await expect(malformed.record("hi", "af_heart", "/unused")).rejects.toThrow("invalid JSON");
    const dead = worker("process.exit(2)");
    await expect(dead.record("hi", "af_heart", "/unused")).rejects.toThrow("exited");
  });
  it("times out a hung synthesis job", async () => {
    const hung = worker("process.stdin.resume()", 100);
    await expect(hung.record("hi", "af_heart", "/unused")).rejects.toThrow("timed out");
  });
});
