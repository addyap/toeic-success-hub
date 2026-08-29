import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { VOCAB_COUNT } from "@/data/vocabulary";

/**
 * Signature hero: the TOEIC answer sheet, alive.
 *
 * A field of A–B–C–D bubbles recedes on a tilted plane. Most sit quiet in
 * faint teal; a single amber path of *filled* bubbles rises diagonally to a
 * glowing terminus beside the "Target 990" dial — the learner's guided ascent
 * to their target score.
 *
 * Impact is carried by one orchestrated crescendo and one living element:
 *  - Entrance: the path draws itself bottom-to-top, the dial counts to 990,
 *    and the copy rises in a staggered sequence; the headline "990" ignites as
 *    the path lands.
 *  - At rest: a comet of light travels continuously *up* the path, and each
 *    time it reaches the summit a ripple fires from the terminus — the hero
 *    keeps saying "keep climbing" without the user touching anything.
 *  - Cursor: a soft spotlight brightens/lifts nearby bubbles; the plane
 *    parallax-shifts for depth.
 *  - First scroll: the sheet flattens, lifts and fades, handing off to the page.
 *
 * The teal→amber identity is defined here for both themes on purpose: the
 * site's dark tokens are a neutral slate (`--accent` isn't amber in dark), so
 * reading them would drop the brand colour. Overlay *text* still uses the
 * site tokens (foreground / muted-foreground) so it matches everything else.
 *
 * Canvas is decorative (aria-hidden); every word lives in real DOM for SSR,
 * SEO and screen readers. The wave, parallax, ignite and hand-off all honour
 * prefers-reduced-motion.
 */

const PALETTE = {
  light: {
    teal: "oklch(0.45 0.09 195)",
    glow: "oklch(0.62 0.11 190)",
    amber: "oklch(0.78 0.14 65)",
    amberHi: "oklch(0.9 0.16 78)",
  },
  dark: {
    teal: "oklch(0.72 0.06 200)",
    glow: "oklch(0.78 0.09 195)",
    amber: "oklch(0.8 0.15 68)",
    amberHi: "oklch(0.92 0.16 82)",
  },
} as const;

type Bubble = {
  x: number;
  y: number;
  r: number;
  row: number;
  col: number;
  t: number;
  onPath: boolean;
  order: number;
};

const STYLE = `
.ascent-in { animation: ascent-rise 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both; }
@keyframes ascent-rise {
  from { opacity: 0; transform: translateY(16px); filter: blur(6px); }
  to { opacity: 1; transform: none; filter: none; }
}
.ascent-990 { animation: ascent-ignite 1.7s ease-out 1.35s both; }
@keyframes ascent-ignite {
  0% { text-shadow: none; }
  45% { text-shadow: 0 0 34px oklch(0.82 0.16 72 / 0.85), 0 0 8px oklch(0.85 0.16 74 / 0.6); }
  100% { text-shadow: 0 0 16px oklch(0.8 0.15 70 / 0.35); }
}
@media (prefers-reduced-motion: reduce) {
  .ascent-in, .ascent-990 { animation: none !important; opacity: 1 !important; transform: none !important; filter: none !important; text-shadow: none !important; }
}
`;

export function HeroAscent() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dialNumRef = useRef<HTMLSpanElement>(null);
  const dialArcRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !section || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let pal: (typeof PALETTE)[keyof typeof PALETTE] = PALETTE.light;
    const readTheme = () => {
      pal = document.documentElement.classList.contains("dark") ? PALETTE.dark : PALETTE.light;
    };
    readTheme();
    const themeObs = new MutationObserver(readTheme);
    themeObs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    let W = 0;
    let H = 0;
    let bubbles: Bubble[] = [];
    let pathTop: Bubble | null = null;

    const buildField = () => {
      const ROWS = H < 620 ? 12 : 15;
      const COLS = W < 700 ? 15 : W < 1050 ? 20 : 26;
      bubbles = [];
      for (let r = 0; r < ROWS; r++) {
        const t = r / (ROWS - 1); // 0 near (bottom) → 1 far (top)
        const y = H * 0.985 - t * H * 0.86;
        const rowW = W * (1.15 - 0.42 * t); // converge toward the top
        const x0 = W / 2 - rowW / 2 + t * W * 0.1; // tilt the plane right
        const gap = rowW / (COLS - 1);
        const rad = Math.max(1.4, gap * 0.16);
        for (let c = 0; c < COLS; c++) {
          bubbles.push({ x: x0 + c * gap, y, r: rad, row: r, col: c, t, onPath: false, order: 0 });
        }
      }
      // Amber path: a gentle rising S from lower-left to upper-right.
      const idx = new Map(bubbles.map((b, i) => [b.row + "x" + b.col, i]));
      const cells: Array<[number, number]> = [];
      for (let r = 0; r < ROWS; r++) {
        const t = r / (ROWS - 1);
        const base = 0.16 + 0.66 * t;
        const wobble = 0.09 * Math.sin(t * Math.PI * 1.7);
        const cf = Math.min(COLS - 2, Math.max(1, Math.round((base + wobble) * (COLS - 1))));
        cells.push([r, cf]);
      }
      cells.forEach(([r, c], i) => {
        const b = bubbles[idx.get(r + "x" + c)!];
        if (b) {
          b.onPath = true;
          b.order = i / (cells.length - 1);
        }
      });
      const topCell = cells[ROWS - 1];
      pathTop = bubbles[idx.get(ROWS - 1 + "x" + topCell[1])!] ?? null;
    };

    let dpr = 1;
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildField();
    };

    // pointer
    const mouse = { x: -9999, y: -9999, active: false };
    let mx = -9999;
    let my = -9999;
    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
    };
    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);

    // scroll hand-off progress (hero is the first section, so window scroll works)
    let scrollP = 0;
    const onScroll = () => {
      scrollP = Math.min(1, Math.max(0, window.scrollY / (section.offsetHeight * 0.85)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const withAlpha = (c: string, a: number) => c.replace(")", ` / ${a.toFixed(3)})`);
    const projY = (by: number, flat: number) => H / 2 + (by - H / 2) * flat;

    const ARC = 119.4; // 2πr, r = 19
    let intro = reduce ? 1 : 0;
    const start = performance.now();
    let doneAt = 0; // when the entrance finishes; the ascending wave runs after
    let raf = 0;

    const draw = (now: number) => {
      if (!reduce) intro = Math.min(1, (now - start) / 1700);
      const ease = 1 - Math.pow(1 - intro, 3);
      if (!doneAt && ease > 0.999) doneAt = now;

      // continuous comet climbing the path (0→1 loop), only once settled
      const wave = doneAt && !reduce ? ((now - doneAt) / 3200) % 1 : -1;

      mx += (mouse.x - mx) * 0.12;
      my += (mouse.y - my) * 0.12;
      const parX = mouse.active && !reduce ? (mx - W / 2) * 0.012 : 0;
      const parY = mouse.active && !reduce ? (my - H / 2) * 0.01 : 0;

      const lift = scrollP * H * 0.32;
      const flat = 1 - scrollP * 0.6;
      const fade = 1 - scrollP;
      canvas.style.opacity = ((0.35 + 0.65 * ease) * (fade * fade)).toString();

      if (dialNumRef.current) dialNumRef.current.textContent = Math.round(ease * 990).toString();
      if (dialArcRef.current)
        dialArcRef.current.style.strokeDashoffset = (ARC * (1 - ease)).toString();

      ctx.clearRect(0, 0, W, H);
      ctx.save();
      ctx.translate(parX, parY - lift);

      // atmospheric bloom behind the summit
      if (pathTop && ease > 0.4) {
        const k = Math.min(1, (ease - 0.4) / 0.4);
        const ty = projY(pathTop.y, flat);
        const R = Math.max(W, H) * 0.28;
        const g = ctx.createRadialGradient(pathTop.x, ty, 0, pathTop.x, ty, R);
        g.addColorStop(0, withAlpha(pal.amber, 0.16 * k));
        g.addColorStop(1, withAlpha(pal.amber, 0));
        ctx.fillStyle = g;
        ctx.fillRect(pathTop.x - R, ty - R, R * 2, R * 2);
      }

      const spot = 150;

      // quiet bubbles
      for (const b of bubbles) {
        if (b.onPath) continue;
        const appear = Math.min(1, Math.max(0, (ease - b.t * 0.35) / 0.5));
        if (appear <= 0.02) continue;
        const y = projY(b.y, flat);
        let a = (0.11 + 0.17 * (1 - b.t)) * appear;
        let rr = b.r;
        if (mouse.active) {
          const d = Math.hypot(b.x - mx, y - my);
          if (d < spot) {
            const k = 1 - d / spot;
            a += k * 0.28;
            rr += k * 1.6;
          }
        }
        ctx.beginPath();
        ctx.arc(b.x, y, rr, 0, Math.PI * 2);
        ctx.strokeStyle = withAlpha(pal.teal, a);
        ctx.lineWidth = 1.1;
        ctx.stroke();
      }

      // connective thread under the path
      ctx.beginPath();
      let started = false;
      for (const b of bubbles) {
        if (!b.onPath) continue;
        if (ease * 1.12 - b.order <= 0) continue;
        const y = projY(b.y, flat);
        if (!started) {
          ctx.moveTo(b.x, y);
          started = true;
        } else {
          ctx.lineTo(b.x, y);
        }
      }
      if (started) {
        ctx.strokeStyle = withAlpha(pal.amber, 0.3);
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // path bubbles: filled amber, with a comet of light riding up the path
      for (const b of bubbles) {
        if (!b.onPath) continue;
        const reveal = Math.min(1, Math.max(0, (ease * 1.12 - b.order) / 0.12));
        if (reveal <= 0) continue;
        const y = projY(b.y, flat);
        let rr = (b.r + 1.2) * (0.6 + 0.4 * reveal);
        let glow = 10 + 10 * (1 - b.t);
        let hot = 0;
        if (wave >= 0) {
          const dd = b.order - wave; // ahead of the comet if > 0
          const sigma = dd >= 0 ? 0.05 : 0.13; // short leading edge, longer trail
          hot = Math.exp(-(dd * dd) / (2 * sigma * sigma));
          rr += hot * 2.6;
          glow += hot * 24;
        }
        if (mouse.active) {
          const d = Math.hypot(b.x - mx, y - my);
          if (d < spot) {
            const k = 1 - d / spot;
            rr += k * 2.2;
            glow += k * 14;
          }
        }
        ctx.save();
        ctx.shadowColor = hot > 0.5 ? pal.amberHi : pal.amber;
        ctx.shadowBlur = glow * reveal;
        ctx.globalAlpha = reveal;
        ctx.beginPath();
        ctx.arc(b.x, y, rr, 0, Math.PI * 2);
        ctx.fillStyle = hot > 0.45 ? pal.amberHi : pal.amber;
        ctx.fill();
        ctx.restore();
      }

      // bright terminus node
      if (pathTop && ease > 0.72) {
        const k = Math.min(1, (ease - 0.72) / 0.28);
        const y = projY(pathTop.y, flat);
        const puls = reduce ? 1 : 1 + 0.12 * Math.sin(now / 420);
        ctx.save();
        ctx.globalAlpha = k;
        ctx.shadowColor = pal.amberHi;
        ctx.shadowBlur = 26 * k;
        ctx.beginPath();
        ctx.arc(pathTop.x, y, (pathTop.r + 3.5) * puls, 0, Math.PI * 2);
        ctx.fillStyle = pal.amberHi;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.arc(pathTop.x, y, (pathTop.r + 9) * puls, 0, Math.PI * 2);
        ctx.strokeStyle = withAlpha(pal.amber, 0.5 * k);
        ctx.lineWidth = 1.4;
        ctx.stroke();
        // arrival ripple: fires as the comet reaches the summit each loop
        if (wave >= 0.88) {
          const rt = (wave - 0.88) / 0.12; // 0→1
          ctx.beginPath();
          ctx.arc(pathTop.x, y, pathTop.r + 4 + rt * 30, 0, Math.PI * 2);
          ctx.strokeStyle = withAlpha(pal.amberHi, 0.4 * (1 - rt));
          ctx.lineWidth = 2 * (1 - rt) + 0.4;
          ctx.stroke();
        }
        ctx.restore();
      }

      ctx.restore();
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      themeObs.disconnect();
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section ref={sectionRef} className="group relative isolate overflow-hidden">
      <style>{STYLE}</style>
      <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(105deg, color-mix(in srgb, var(--background) 94%, transparent) 0%, color-mix(in srgb, var(--background) 82%, transparent) 36%, transparent 68%)",
        }}
      />

      {/* Target dial, floating over the sheet */}
      <div
        className="ascent-in absolute right-4 top-6 z-10 flex items-center gap-3 rounded-2xl border border-border/70 bg-card/60 p-2.5 pr-4 shadow-soft backdrop-blur-md sm:right-8 md:top-12"
        style={{ animationDelay: "0.3s" }}
      >
        <span className="relative grid h-11 w-11 place-items-center">
          <svg viewBox="0 0 46 46" className="h-11 w-11" aria-hidden="true">
            <circle cx="23" cy="23" r="19" fill="none" stroke="var(--border)" strokeWidth="4" />
            <circle
              ref={dialArcRef}
              cx="23"
              cy="23"
              r="19"
              fill="none"
              stroke="oklch(0.78 0.14 65)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="119.4"
              strokeDashoffset="119.4"
              transform="rotate(-90 23 23)"
            />
          </svg>
        </span>
        <span className="leading-tight">
          <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Target
          </span>
          <span className="font-display text-xl font-semibold tabular-nums">
            <span ref={dialNumRef}>0</span>
            <span className="text-sm text-muted-foreground">/990</span>
          </span>
        </span>
      </div>

      <div className="relative mx-auto flex min-h-[60svh] w-full max-w-6xl flex-col justify-center px-5 py-14">
        <div className="max-w-2xl">
          <span
            className="ascent-in inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.78_0.14_65)] shadow-[0_0_0_4px_oklch(0.78_0.14_65/0.18)]" />
            The Business English Standard · TOEIC®
          </span>
          <h1
            className="ascent-in mt-4 font-display text-4xl font-semibold leading-[0.95] text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.15s" }}
          >
            Every answer is a step toward{" "}
            <span className="ascent-990 tabular-nums text-[oklch(0.68_0.15_64)] dark:text-[oklch(0.82_0.15_72)]">
              990
            </span>
            .
          </h1>
          <p
            className="ascent-in mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{ animationDelay: "0.35s" }}
          >
            Listening, Reading, Speaking and Writing — the complete, guided path to your target
            score, built to mirror the real test.
          </p>
          <div className="ascent-in mt-6 flex flex-wrap gap-3" style={{ animationDelay: "0.5s" }}>
            <Link
              to="/four-skills"
              className="group/cta inline-flex items-center gap-2 rounded-full bg-gradient-hero px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:-translate-y-0.5 hover:opacity-95"
            >
              Start preparing{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
            </Link>
            <Link
              to="/four-skills"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-primary/60"
            >
              See the four skills
            </Link>
          </div>
          <div
            className="ascent-in mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground"
            style={{ animationDelay: "0.65s" }}
          >
            <span>
              <b className="font-semibold text-foreground">All 7</b> L&amp;R parts
            </span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>
              <b className="font-semibold text-foreground">{VOCAB_COUNT}</b> business terms
            </span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>
              <b className="font-semibold text-foreground">No account</b> required
            </span>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground sm:flex">
        <span>Scroll</span>
        <span className="relative h-8 w-5 rounded-full border border-border">
          <span className="absolute left-1/2 top-1.5 h-1.5 w-1 -translate-x-1/2 animate-bounce rounded-full bg-[oklch(0.78_0.14_65)]" />
        </span>
      </div>
    </section>
  );
}
