import { spawn, type ChildProcessWithoutNullStreams } from "node:child_process";
import { createInterface } from "node:readline";

/** One local worker, serial jobs, bounded wait, explicit JSON acknowledgement.
 * No shell interpolation, network endpoint, or user-supplied executable. */
export class KokoroWorker {
  private child: ChildProcessWithoutNullStreams;
  private pending: { resolve: () => void; reject: (error: Error) => void } | null = null;
  private failure: Error | null = null;

  constructor(
    executable: string,
    args: string[],
    private timeoutMs = 180_000,
  ) {
    this.child = spawn(executable, args, { stdio: "pipe" });
    this.child.stderr.pipe(process.stderr);
    createInterface({ input: this.child.stdout }).on("line", (line) => {
      if (!this.pending) return;
      try {
        const result = JSON.parse(line);
        if (
          !Array.isArray(result.lines) ||
          result.lines.length !== 1 ||
          !Number.isFinite(result.lines[0]?.offset) ||
          !Array.isArray(result.lines[0]?.tokens)
        )
          throw new Error("Invalid Kokoro acknowledgement");
        this.pending.resolve();
      } catch {
        this.fail(new Error("Kokoro returned invalid JSON or a failed job"));
      }
    });
    this.child.on("error", (error) => this.fail(error));
    this.child.on("exit", (code) => this.fail(new Error(`Kokoro exited (${code})`)));
    this.child.stdin.on("error", (error) => this.fail(error));
  }

  private fail(error: Error) {
    this.failure = error;
    this.pending?.reject(error);
  }

  async record(text: string, voice: string, out: string) {
    if (this.failure) throw this.failure;
    if (this.pending) throw new Error("Kokoro jobs must run serially");
    let timer: ReturnType<typeof setTimeout> | undefined;
    try {
      await new Promise<void>((resolve, reject) => {
        this.pending = { resolve, reject };
        timer = setTimeout(() => {
          this.fail(new Error("Kokoro synthesis timed out"));
          this.close();
        }, this.timeoutMs);
        this.child.stdin.write(JSON.stringify({ lines: [{ text, voice }], out, speed: 1 }) + "\n");
      });
    } finally {
      clearTimeout(timer);
      this.pending = null;
    }
  }

  close() {
    this.child.stdin.end();
    this.child.kill();
  }
}
