import { createFileRoute } from "@tanstack/react-router";
import { getServerConfig, isMonetizationEnabled } from "@/lib/config.server";
import { getStripeClient } from "@/lib/stripe.server";
import { absoluteUrl } from "@/lib/site";

// Plain server route (not createServerFn) since this needs to issue a real
// HTTP redirect to Stripe's hosted checkout page, not return data to a
// client-side caller — see the createServerFn vs. server.handlers note in
// src/lib/api/example.functions.ts.
export const Route = createFileRoute("/api/checkout")({
  server: {
    handlers: {
      POST: async () => {
        if (!isMonetizationEnabled()) {
          return new Response("Not available yet.", { status: 404 });
        }
        const { stripePriceId } = getServerConfig();
        const session = await getStripeClient().checkout.sessions.create({
          mode: "payment",
          line_items: [{ price: stripePriceId!, quantity: 1 }],
          success_url: absoluteUrl("/purchase-success?session_id={CHECKOUT_SESSION_ID}"),
          cancel_url: absoluteUrl("/pricing"),
          consent_collection: { terms_of_service: "required" },
          custom_text: {
            terms_of_service_acceptance: {
              message: `I agree to the [Terms of Service](${absoluteUrl("/terms")}), including the immediate delivery of this digital product and the resulting loss of the standard 14-day EU withdrawal right.`,
            },
          },
        });
        if (!session.url) {
          return new Response("Could not start checkout.", { status: 500 });
        }
        return new Response(null, { status: 303, headers: { Location: session.url } });
      },
    },
  },
});
