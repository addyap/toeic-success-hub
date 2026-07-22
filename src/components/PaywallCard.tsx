import { Link } from "@tanstack/react-router";
import { Lock } from "lucide-react";

export function PaywallCard({
  title,
  description,
  ctaLabel = "Unlock full access",
}: {
  title: string;
  description: string;
  ctaLabel?: string;
}) {
  return (
    <div
      className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center sm:p-8"
      data-testid="paywall-card"
    >
      <Lock className="mx-auto h-8 w-8 text-primary" />
      <h3 className="mt-3 font-display text-xl font-semibold sm:text-2xl">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground sm:text-base">{description}</p>
      <Link
        to="/pricing"
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
      >
        <Lock className="h-4 w-4" /> {ctaLabel}
      </Link>
    </div>
  );
}
