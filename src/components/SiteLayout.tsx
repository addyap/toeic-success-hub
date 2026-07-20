import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/listening-reading", label: "Listening & Reading" },
  { to: "/mock-test", label: "Mock Test" },
  { to: "/speaking-writing", label: "Speaking & Writing" },
  { to: "/vocabulary", label: "Vocabulary" },
  { to: "/study-tips", label: "Study Tips" },
  { to: "/progress", label: "My Progress" },
] as const;

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
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-hero text-primary-foreground shadow-soft">
              <GraduationCap className="h-5 w-5" />
            </span>
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

          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-border lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
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

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-5 py-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-hero text-primary-foreground">
                <GraduationCap className="h-4 w-4" />
              </span>
              <span className="font-display text-lg font-semibold">ToeicPath</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              A modern, mobile-first study platform for TOEIC Listening, Reading, Speaking &
              Writing.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Test prep</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
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
                <Link to="/speaking-writing" className="hover:text-foreground">
                  Speaking & Writing
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
        </div>
      </footer>
    </div>
  );
}
