import { createFileRoute } from "@tanstack/react-router";
import { Shield } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { absoluteUrl } from "@/lib/site";
import { LegalPage, LegalSection, LAST_UPDATED, PUBLISHER } from "@/components/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | ToeicPath" },
      {
        name: "description",
        content:
          "How ToeicPath handles your data: what is stored on your device, what analytics are collected, and your rights under the GDPR.",
      },
      { property: "og:url", content: absoluteUrl("/privacy") },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/privacy") }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <LegalPage
        icon={<Shield className="h-3.5 w-3.5" />}
        eyebrow="Privacy"
        title="Privacy Policy"
        intro="This policy describes exactly what ToeicPath does with data. It is written to match how the site actually behaves, not to cover every hypothetical."
      >
        <LegalSection title="Summary">
          <p>
            ToeicPath has no user accounts and no database of learners. Your practice answers,
            scores, and streak are stored <strong>only in your own browser</strong> and are never
            transmitted to us. We use one privacy-focused analytics tool that does not use cookies
            and does not identify you.
          </p>
        </LegalSection>

        <LegalSection title="Who is responsible for your data">
          <p>
            The data controller is {PUBLISHER.name}. For any privacy question or to exercise the
            rights described below, contact{" "}
            <a className="underline" href={`mailto:${PUBLISHER.email}`}>
              {PUBLISHER.email}
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection title="What is stored on your device">
          <p>
            The site uses your browser's <code>localStorage</code> to keep your progress. This never
            leaves your device, is not readable by us, and is not personal data we hold. It covers:
          </p>
          <ul>
            <li>your practice answers and best score per section;</li>
            <li>your daily practice streak;</li>
            <li>your vocabulary review statistics;</li>
            <li>if you've purchased full access, a signed code proving that purchase.</li>
          </ul>
          <p>
            You can erase all of it at any time using the <strong>Reset</strong> control in the
            practice areas, or by clearing site data in your browser settings. Doing so is immediate
            and permanent — we hold no copy to restore.
          </p>
        </LegalSection>

        <LegalSection title="Payments">
          <p>
            If you purchase full access, payment is handled entirely by{" "}
            <strong>Stripe, Inc.</strong>, a PCI-compliant payment processor. You enter your card
            details directly on Stripe's own checkout page — we never see, receive, or store your
            card number, and no card data ever touches our servers. Stripe's use of your data is
            governed by{" "}
            <a
              className="underline"
              href="https://stripe.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stripe's own privacy policy
            </a>
            .
          </p>
          <p>
            We do not create a customer account or store a profile of you. After payment, our server
            asks Stripe to confirm the transaction succeeded and, if so, issues a small signed code
            to your browser proving you've paid — this code identifies a purchase, not a person, and
            is stored the same way as your other progress data: only in <code>localStorage</code>,
            only on your device.
          </p>
        </LegalSection>

        <LegalSection title="Analytics">
          <p>
            We use <strong>Umami</strong> to count page views and understand which sections are
            used. Umami is a privacy-focused analytics service: it sets <strong>no cookies</strong>,
            does not track you across sites, and does not collect information that identifies you
            personally. It records aggregate data such as page URL, referrer, browser type, device
            type and country.
          </p>
          <p>
            Because no cookies are used and no personal profile is built, this processing relies on
            our legitimate interest in understanding site usage, and does not require a consent
            banner. Umami is operated by Umami Software, Inc.
          </p>
        </LegalSection>

        <LegalSection title="Fonts and third-party requests">
          <p>
            Typefaces are self-hosted: the font files are served from this site, not from Google
            Fonts or any other third party. Your browser does not make any request to an external
            font provider when a page loads, and no IP address is disclosed to one for this purpose.
          </p>
          <p>
            Photographs used in Part 1 practice are also served from this site, not from third
            parties.
          </p>
        </LegalSection>

        <LegalSection title="What we do not do">
          <ul>
            <li>We do not sell or share your data.</li>
            <li>We do not run advertising or advertising trackers.</li>
            <li>We do not create user accounts or ask for your name or address.</li>
            <li>We do not send marketing email — there is no mailing list to join.</li>
          </ul>
        </LegalSection>

        <LegalSection title="Your rights under the GDPR">
          <p>
            If you are in the European Economic Area or the United Kingdom, you have the right to
            access, rectify, erase, restrict, and object to processing of your personal data, and
            the right to data portability. Because we hold no account and no identifiable record of
            you, in most cases there is nothing for us to retrieve or delete — the data you generate
            lives in your browser and is under your control.
          </p>
          <p>
            You may still contact us at{" "}
            <a className="underline" href={`mailto:${PUBLISHER.email}`}>
              {PUBLISHER.email}
            </a>{" "}
            with any request, and you have the right to lodge a complaint with your national
            supervisory authority — in France, the{" "}
            <a
              className="underline"
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection title="Children">
          <p>
            ToeicPath is intended for people preparing for a professional English examination and is
            not directed at children under 13. We do not knowingly collect data from them.
          </p>
        </LegalSection>

        <LegalSection title="Changes">
          <p>
            If this policy changes materially, the date below will change and the revised policy
            will be posted here. Last updated {LAST_UPDATED}.
          </p>
        </LegalSection>
      </LegalPage>
    </SiteLayout>
  );
}
