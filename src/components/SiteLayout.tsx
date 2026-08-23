import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/theme";
import emblem from "@/assets/toeicpath-emblem.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/four-skills", label: "4 Skills" },
  { to: "/listening-reading", label: "Listening & Reading" },
  { to: "/mock-test", label: "Mock Test" },
  { to: "/adaptive-practice", label: "Adaptive" },
  { to: "/vocabulary", label: "Vocabulary" },
  { to: "/study-tips", label: "Study Tips" },
  { to: "/progress", label: "My Progress" },
] as const;

/** Icon-only light/dark toggle. Rendered once in the header, visible at every
 *  viewport width — small enough to sit beside the nav rather than needing
 *  its own row in the mobile menu. */
function ThemeToggle() {
  const [theme, setTheme] = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border text-muted-foreground transition hover:border-primary/60 hover:text-foreground"
    >
      {isDark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
    </button>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground font-sans">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:shadow-soft"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <Link to="/" className="group flex items-center gap-2">
            {/* Emblem is a self-contained teal circle (its own background) with
                transparent corners, so it reads on both themes without a
                wrapper. alt="" — the adjacent wordmark already names the link,
                so the image is decorative and shouldn't be announced twice. */}
            <img src={emblem} alt="" className="h-9 w-9" width={242} height={242} />
            <span className="font-display text-xl font-semibold tracking-tight">ToeicPath</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-secondary text-secondary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setOpen((o) => !o)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-border lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-border bg-background lg:hidden">
            <div className="mx-auto flex w-full max-w-6xl flex-col px-5 py-3">
              {navItems.map((item) => {
                const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-lg px-3 py-3 text-base font-medium",
                      active
                        ? "bg-secondary text-secondary-foreground"
                        : "text-foreground hover:bg-muted",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </header>

      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        {children}
      </main>

      <footer className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-5 py-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2">
              <img src={emblem} alt="" className="h-8 w-8" width={242} height={242} />
              <span className="font-display text-lg font-semibold">ToeicPath</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              A modern, mobile-first study platform for the TOEIC — all four skills, from adaptive
              Listening &amp; Reading to Speaking and Writing.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Test prep</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/four-skills" className="hover:text-foreground">
                  TOEIC 4-Skills
                </Link>
              </li>
              <li>
                <Link to="/listening-reading" className="hover:text-foreground">
                  Listening & Reading
                </Link>
              </li>
              <li>
                <Link to="/mock-test" className="hover:text-foreground">
                  Full Mock Test
                </Link>
              </li>
              <li>
                <Link to="/adaptive-practice" className="hover:text-foreground">
                  Adaptive Practice
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-foreground">
                  Pricing — free for now
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Resources</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/vocabulary" className="hover:text-foreground">
                  Vocabulary Builder
                </Link>
              </li>
              <li>
                <Link to="/study-tips" className="hover:text-foreground">
                  Study Tips
                </Link>
              </li>
              <li>
                <Link to="/progress" className="hover:text-foreground">
                  My Progress
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
          <ul className="mb-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <li>
              <Link to="/privacy" className="hover:text-foreground">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-foreground">
                Terms
              </Link>
            </li>
            <li>
              <Link to="/legal" className="hover:text-foreground">
                Mentions légales
              </Link>
            </li>
          </ul>
          © {new Date().getFullYear()} ToeicPath. TOEIC is a registered trademark of ETS. This site
          is not affiliated with ETS.
          <div className="mt-3">
            Part of{' '}
            <a
              href="https://www.antonyaddy.com/ressources-en-ligne"
              className="font-medium text-foreground hover:text-primary"
            >
              Fluentory by Antony Addy
            </a>{' '}
            — free tools for grammar, listening, speaking and exam prep, built by a certified trainer.
          </div>
        </div>
      </footer>
    </div>
  );
}
