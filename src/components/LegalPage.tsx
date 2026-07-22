import type { ReactNode } from "react";

/**
 * Shared chrome for the legal pages so privacy, terms, and the French
 * mentions légales stay consistent and are edited in one place.
 */

/** Single source of truth for publisher identity across the legal pages.
 *
 * Address and SIRET are required by French law (LCEN art. 6-III) for a site
 * published from France. Sourced from antonyaddy.com/mentions-legales — same
 * individual entrepreneur (auto-entrepreneur), so the same SIRET and address
 * apply here; a SIRET identifies the person/business, not a single site. */
export const PUBLISHER = {
  name: "Antony Addy",
  email: "antony@antonyaddy.com",
  phone: "+33 6 49 82 98 26",
  site: "toeic.antonyaddy.com",
  address: "135 rue Henri Vadon, Résidence des Arènes, 83600 Fréjus, France",
  siret: "483 178 893 00028",
  /** Cloudflare is the deploy target (see .wrangler output in the build). */
  host: {
    name: "Cloudflare, Inc.",
    address: "101 Townsend St, San Francisco, CA 94107, United States",
    site: "https://www.cloudflare.com",
  },
} as const;

export const LAST_UPDATED = "22 July 2026";

export function LegalPage({
  icon,
  eyebrow,
  title,
  intro,
  children,
}: {
  icon: ReactNode;
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="bg-gradient-soft">
        <div className="mx-auto w-full max-w-3xl px-5 py-12 md:py-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            {icon} {eyebrow}
          </span>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">{intro}</p>
          <p className="mt-3 text-sm text-muted-foreground/80">Last updated {LAST_UPDATED}.</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-5 py-12">{children}</section>
    </>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-10 last:mb-0">
      <h2 className="font-display text-2xl font-semibold">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground [&_a]:text-primary [&_code]:rounded [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-xs [&_li]:ml-5 [&_li]:list-disc [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:space-y-1.5">
        {children}
      </div>
    </div>
  );
}
