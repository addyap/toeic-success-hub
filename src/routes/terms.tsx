import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { absoluteUrl } from "@/lib/site";
import { LegalPage, LegalSection, LAST_UPDATED, PUBLISHER } from "@/components/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | ToeicPath" },
      {
        name: "description",
        content:
          "The terms governing use of ToeicPath, including what the practice material is, what it is not, and the limits of what we promise.",
      },
      { property: "og:url", content: absoluteUrl("/terms") },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/terms") }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <LegalPage
        icon={<FileText className="h-3.5 w-3.5" />}
        eyebrow="Terms"
        title="Terms of Use"
        intro="Plain terms for using ToeicPath. By using the site you accept them."
      >
        <LegalSection title="What ToeicPath is">
          <p>
            ToeicPath is an independent study resource offering original practice questions,
            explanations, and a timed mock test modelled on the format of the TOEIC® Listening &
            Reading test. It is provided for personal study.
          </p>
        </LegalSection>

        <LegalSection title="Independence from ETS">
          <p>
            <strong>
              TOEIC is a registered trademark of Educational Testing Service (ETS). ToeicPath is not
              affiliated with, endorsed by, sponsored by, or approved by ETS.
            </strong>{" "}
            References to TOEIC are made solely to describe the examination this material prepares
            you for. All practice questions, passages, audio, and explanations on this site are
            original works created for ToeicPath. No official or past examination material is
            reproduced here.
          </p>
        </LegalSection>

        <LegalSection title="No guarantee of results">
          <p>
            Practice scores on this site are an indication of progress within our own material. They
            are not an official TOEIC score, are not calibrated against ETS scoring, and do not
            predict the result you will obtain in a real examination. We make no promise about the
            score you will achieve.
          </p>
        </LegalSection>

        <LegalSection title="Accuracy">
          <p>
            We take considerable care over answer keys and explanations, and the question bank is
            checked automatically on every change. Even so, material of this size may contain
            errors. If you believe an answer is wrong, please tell us at{" "}
            <a className="underline" href={`mailto:${PUBLISHER.email}`}>
              {PUBLISHER.email}
            </a>{" "}
            — corrections are welcome and are acted on.
          </p>
        </LegalSection>

        <LegalSection title="Acceptable use">
          <p>You may use ToeicPath freely for your own study. You may not:</p>
          <ul>
            <li>
              copy, republish, resell, or redistribute the question bank, audio, or explanations,
              whether or not for profit;
            </li>
            <li>
              scrape or bulk-download the material, or use it to train a machine learning model;
            </li>
            <li>present the material as your own or as official examination content.</li>
          </ul>
          <p>
            Except where stated otherwise, the content of this site is the property of{" "}
            {PUBLISHER.name}. Photographs are used under the licences named beneath each image and
            remain the property of their respective authors.
          </p>
        </LegalSection>

        <LegalSection title="Purchases and refunds">
          <p>
            Full access to the complete practice bank, mock test, and progress tracking is available
            as a single one-time payment — no subscription, no recurring charge. Payment is
            processed by Stripe; we never see or store your card details (see our{" "}
            <a className="underline" href="/privacy">
              Privacy Policy
            </a>{" "}
            for how Stripe is used).
          </p>
          <p>
            Access is unlocked immediately after payment. Because this is digital content delivered
            instantly, and because you explicitly consent to that immediate delivery at checkout,
            you thereby waive the standard 14-day EU withdrawal right for this purchase, in
            accordance with Article L221-28 of the French Consumer Code. If a technical fault on our
            end prevents you from accessing what you paid for, contact{" "}
            <a className="underline" href={`mailto:${PUBLISHER.email}`}>
              {PUBLISHER.email}
            </a>{" "}
            within 14 days of purchase and we will fix it or refund you in full.
          </p>
        </LegalSection>

        <LegalSection title="Availability">
          <p>
            The site is provided as-is and as-available. We do not guarantee uninterrupted access
            and may change, suspend, or withdraw any part of it. Your saved progress lives only in
            your browser; clearing your browser data will delete it permanently and we cannot
            recover it.
          </p>
        </LegalSection>

        <LegalSection title="Liability">
          <p>
            To the fullest extent permitted by law, we are not liable for any indirect or
            consequential loss arising from use of this site, including examination outcomes.
            Nothing in these terms limits liability that cannot lawfully be limited, and nothing
            here affects the statutory rights you have as a consumer.
          </p>
        </LegalSection>

        <LegalSection title="Governing law">
          <p>
            These terms are governed by French law. If you are a consumer, you retain the protection
            of the mandatory provisions of the law of your country of residence, and may use the
            European Commission's{" "}
            <a
              className="underline"
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
            >
              online dispute resolution platform
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection title="Changes">
          <p>
            We may update these terms; the date above will change when we do. Last updated{" "}
            {LAST_UPDATED}.
          </p>
        </LegalSection>
      </LegalPage>
    </SiteLayout>
  );
}
