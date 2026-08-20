import { Languages, CheckCircle2 } from "lucide-react";
import { useCriteriaLang } from "@/lib/criteriaLang";
import { CRITERIA_LANGS } from "@/data/criteriaI18n";
import { frontIntroI18n } from "@/data/frontIntroI18n";
import { cn } from "@/lib/utils";

/** A short, native-language "how it works" section for first-time visitors,
 *  high on the home page. Shows ONE language at a time (never a stacked wall of
 *  the same text) via a chip row, reusing the shared self-assessment language
 *  store — so it defaults to the visitor's browser language and stays one
 *  consistent "your language" choice across the site. SSR-safe: the store's
 *  server snapshot is English, so hydration matches, then the client swaps to
 *  the stored/detected language. */
export function FrontIntro() {
  const [lang, setLang] = useCriteriaLang();
  const copy = frontIntroI18n[lang] ?? frontIntroI18n.en;

  return (
    <section className="mx-auto w-full max-w-6xl px-5 pt-10">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
            <Languages className="h-3.5 w-3.5" /> {copy.eyebrow}
          </div>
          <div className="flex flex-wrap gap-1.5" role="group" aria-label="Language">
            {CRITERIA_LANGS.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLang(l.code)}
                aria-pressed={l.code === lang}
                className={cn(
                  "rounded-full border px-2.5 py-1 text-xs font-medium transition",
                  l.code === lang
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/60 hover:text-foreground",
                )}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">{copy.heading}</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">{copy.intro}</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {copy.points.map((p) => (
            <div key={p.title} className="rounded-xl border border-border bg-background/50 p-4">
              <div className="flex items-center gap-2 font-semibold">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-success" /> {p.title}
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-muted-foreground/80">{copy.note}</p>
      </div>
    </section>
  );
}
