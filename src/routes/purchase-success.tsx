import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { storeLicenseToken } from "@/lib/license";
import { verifyPurchase } from "@/lib/api/purchase.functions";

export const Route = createFileRoute("/purchase-success")({
  head: () => ({ meta: [{ title: "Purchase complete | ToeicPath" }] }),
  component: Page,
});

type State = "verifying" | "success" | "failed";

function Page() {
  const [state, setState] = useState<State>("verifying");

  useEffect(() => {
    const sessionId = new URLSearchParams(window.location.search).get("session_id");
    if (!sessionId) {
      setState("failed");
      return;
    }
    verifyPurchase({ data: { sessionId } })
      .then((result) => {
        if (result.ok) {
          storeLicenseToken(result.token);
          setState("success");
        } else {
          setState("failed");
        }
      })
      .catch(() => setState("failed"));
  }, []);

  return (
    <SiteLayout>
      <section className="mx-auto w-full max-w-md px-5 py-24 text-center">
        {state === "verifying" && (
          <>
            <Loader2 className="mx-auto h-10 w-10 animate-spin text-primary" />
            <h1 className="mt-4 font-display text-2xl font-semibold">Confirming your purchase…</h1>
            <p className="mt-2 text-sm text-muted-foreground">This only takes a second.</p>
          </>
        )}
        {state === "success" && (
          <>
            <CheckCircle2 className="mx-auto h-12 w-12 text-success" />
            <h1 className="mt-4 font-display text-2xl font-semibold">You're in!</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Full access is unlocked on this device — the complete practice bank, the mock test,
              and progress tracking.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/mock-test"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                Take the mock test
              </Link>
              <Link
                to="/listening-reading"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold hover:bg-muted"
              >
                Start practicing
              </Link>
            </div>
          </>
        )}
        {state === "failed" && (
          <>
            <XCircle className="mx-auto h-12 w-12 text-destructive" />
            <h1 className="mt-4 font-display text-2xl font-semibold">
              We couldn't confirm that purchase
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              If you were charged, contact support and we'll sort it out — no payment was lost.
            </p>
            <Link
              to="/pricing"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              Back to pricing
            </Link>
          </>
        )}
      </section>
    </SiteLayout>
  );
}
