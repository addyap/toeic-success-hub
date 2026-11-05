# Maintain Kokoro exercise audio

This guide is for maintainers who add listening content, choose voices, or deploy TOEICPath. It covers offline synthesis and playback. Reading-only exercises don't use text-to-speech (TTS).

## Audio inventory

The shared `PracticeQuestion` components serve Listening & Reading practice, mock tests, and adaptive practice. These paths all use the same audio plan and player.

| Exercise                  | Bank size             | Spoken content                                                                 |
| ------------------------- | --------------------- | ------------------------------------------------------------------------------ |
| Part 1: photographs       | 20 questions          | Four statements, each preceded by its displayed letter                         |
| Part 2: question–response | 93 questions          | Prompt and three responses, with displayed letter cues                         |
| Part 3: conversations     | 144 questions         | Dialogue with distinct male/female voices; grouped questions and numbered cues |
| Part 4: short talks       | 108 questions         | Talk, followed by its questions and numbered cues for sets                     |
| Speaking Q5–7, Q8–10, Q11 | 18 spoken prompts     | Examiner's question, in the narrator voice                                     |
| Speaking Q1–2, Q3–4       | 11 printed prompts    | No synthesized audio; learner reads or describes the image                     |
| Parts 5–7                 | 403 reading questions | No synthesized audio                                                           |
| Writing                   | 18 prompts            | No synthesized audio                                                           |

The generated manifest contains 563 entries and 1,075 segments, including four shared letter cues and five question-number cues. Content counts change when you edit the bank.

Learner recordings use `MediaRecorder` and browser blob URLs. They remain in memory, never reach Kokoro, and are revoked on reset or exit. Their playback shares audio ownership with the exercise player. Starting microphone recording stops exercise playback.

## Architecture and security

The data flow is:

```text
Authored bank → local Bun generator → local Python Kokoro worker
             → validated MP3s + manifest → same-origin static hosting
             → shared browser player → explicit device-speech fallback
```

Kokoro runs only on a maintainer's computer. The deployed app has no synthesis endpoint, external speech service, model download, or TTS credentials. Browser requests can only play local MP3 basenames from the manifest. Keep `media-src 'self' blob:` in your deployed content security policy. Python and its dependencies aren't part of the web build.

The worker receives JSON over stdin through a fixed executable and argument array. It runs without a shell, processes jobs serially, rejects invalid replies and exits, and times out each synthesis job after 180 seconds. FFmpeg has a separate 60-second timeout. Install model dependencies only from the package and model sources referenced in `scripts/kokoro/requirements.txt` and `scripts/kokoro-speak.py`.

## Set up synthesis

You need Bun, Python 3.12, `uv`, FFmpeg, and espeak-ng on your generation machine. On macOS with Homebrew, install the system tools:

```sh
brew install uv ffmpeg espeak-ng
```

From the repository root, install the Python environment:

```sh
bun run audio:setup
```

The first synthesis run downloads the public Kokoro model and voice weights. You don't need a Hugging Face token. Allow network access for setup and these downloads; subsequent synthesis uses the local model cache.

## Generate or validate recordings

After editing spoken content, generate recordings:

```sh
bun run generate:audio
```

The generator covers Parts 1–4, only Speaking prompts marked `spoken`, and shared cues. It lazily starts Python only for a missing or invalid recording. A fully cached run doesn't need Python or model weights.

To validate the committed manifest and files without synthesis or writes, run:

```sh
bun run audio:check
```

A successful check prints `Validated 563 Kokoro manifest entries` for the inventory documented here. Missing files, stale voice choices, truncated clips, or a stale manifest produce a nonzero exit code.

To replace recordings intentionally, use:

```sh
bun run generate:audio --force
```

Commit `src/data/audioManifest.ts` together with every referenced file in `public/audio/`. Listen to changed clips, especially short letter cues and proper nouns. File-header and duration checks detect obvious failures; they don't prove pronunciation accuracy or the absence of silence.

Run only one generator at a time in a checkout. The manifest is rebuilt in full, written to a temporary file, and renamed only after all recordings succeed. Failed runs preserve the previous manifest; completed but unreferenced clips can remain on disk. Don't delete older deployed assets while clients might still use their manifest.

## Choose voices

The default bank mixes American and British voices. Dialogue pairs are `bm_george`/`af_heart` and `am_fenrir`/`bf_emma`. The narrator uses `am_michael`; single-speaker passages and statements rotate through `af_heart`, `bm_george`, `bf_emma`, `am_fenrir`, and `af_bella`.

To choose the voice for single-speaker content and the examiner separately, run:

```sh
bun run generate:audio --voice af_heart --narrator-voice am_michael
```

Both options accept only `af_heart`, `bm_george`, `bf_emma`, `am_fenrir`, `af_bella`, or `am_michael`. `--voice` preserves dialogue pairs and the separate narrator. To check a custom-voice manifest, pass the same choices:

```sh
bun run audio:check --voice af_heart --narrator-voice am_michael
```

Voice selection happens during generation. The exercise player preserves the authored speaker identities and accent mixture; it doesn't generate different voices on demand. For voice names and language codes, see the [Kokoro voice reference](https://huggingface.co/hexgrad/Kokoro-82M/blob/main/VOICES.md) and [Kokoro inference library](https://github.com/hexgrad/kokoro).

## Cache behavior

The manifest's content keys keep shuffled options matched to their recordings. Newly synthesized filenames use SHA-256 over text, voice, and `SYNTHESIS_VERSION`, which includes the package version, speed, and encoding. Changing text or voice produces a different URL. `--force` adds a timestamp so an intentional rerender also gets a fresh URL.

Existing shipped clips retain their filenames when their model and voice match and their MP3 header and duration checks pass. New and cached files undergo the same checks. Bump `SYNTHESIS_VERSION` when the model, pipeline, speed, or encoding changes; legacy recordings are reusable only while it matches `LEGACY_SYNTHESIS_VERSION`. A version bump regenerates them because their old filenames don't encode synthesis settings.

Nitro's `/audio/**` rule is relative to its `/toeic/` base and sets `Cache-Control: public, max-age=3600`. The public audio URL is `/toeic/audio/FILE.mp3`. Retaining previous URLs and using fresh URLs for rerenders prevents a cached clip from being paired with changed text. Ensure any fronting proxy serves that path and preserves the cache header.

## Playback and fallback

`audioPlan.ts` resolves recordings and fallback text together. It includes shuffled letter cues, dialogue turns, question prompts, and numbered cues. A missing required segment or cue switches the entire sequence to fallback, preserving its order.

`KokoroAudioPlayer` plays the sequence after a click, preloads no audio, bounds a stalled media start to 15 seconds, and releases ownership on completion, Stop, reset, unmount, or failure. One shared coordinator stops the previous player. Answering a single question stops playback; answering one question in a shared Part 3/4 set leaves that set playing.

On a missing recording, failed media load, or rejected play request, the player offers **Play with device voice**. A second click explicitly starts browser speech with `en-US` and a slower rate. This is the device's voice, not Kokoro, and its accessible description warns that it can interrupt a screen reader. If speech is unsupported or fails, the exercise still accepts answers and reveals its transcript through the existing review flow. Speaking retains its printed prompt.

## Verify and deploy

Run the checks from the repository root:

```sh
bun run audio:check
npm test
npx tsc --noEmit
npm run lint
npx playwright test e2e/audio.spec.ts
npm run build
```

Unit tests cover the whole listening bank, shuffled options, group cues, the reading boundary, cache validation, voice keys, and worker errors/timeouts. Browser tests cover real MP3 delivery, playback ownership, segment sequencing, failure fallback, stale requests, reset, and Speaking rotation. The other browser suites exercise mock, adaptive, and practice sessions.

Deploy the normal web build with the committed recordings. **No new deployment secrets or environment variables are required.** Don't run Python setup or synthesis during deployment. Verify a deployed listening exercise loads `/toeic/audio/*.mp3`, the response has the cache header, and selecting a second player stops the first.
