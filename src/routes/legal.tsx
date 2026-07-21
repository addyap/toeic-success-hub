import { createFileRoute } from "@tanstack/react-router";
import { Landmark } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { absoluteUrl } from "@/lib/site";
import { LegalPage, LegalSection, PUBLISHER } from "@/components/LegalPage";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: "Mentions légales | ToeicPath" },
      {
        name: "description",
        content:
          "Mentions légales du site ToeicPath : éditeur, directeur de la publication, hébergeur et propriété intellectuelle.",
      },
      { property: "og:url", content: absoluteUrl("/legal") },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/legal") }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <LegalPage
        icon={<Landmark className="h-3.5 w-3.5" />}
        eyebrow="Mentions légales"
        title="Mentions légales"
        intro="Informations relatives à l'éditeur et à l'hébergeur du site, conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique."
      >
        <LegalSection title="Éditeur du site">
          <ul>
            <li>
              <strong>Éditeur :</strong> {PUBLISHER.name}
            </li>
            <li>
              <strong>Contact :</strong>{" "}
              <a className="underline" href={`mailto:${PUBLISHER.email}`}>
                {PUBLISHER.email}
              </a>{" "}
              — {PUBLISHER.phone}
            </li>
            <li>
              <strong>Directeur de la publication :</strong> {PUBLISHER.name}
            </li>
            <li>
              <strong>Site :</strong> {PUBLISHER.site}
            </li>
            <li>
              <strong>Adresse :</strong> {PUBLISHER.address}
            </li>
            <li>
              <strong>SIRET :</strong> {PUBLISHER.siret}
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="Hébergeur">
          <ul>
            <li>
              <strong>Hébergeur :</strong> {PUBLISHER.host.name}
            </li>
            <li>
              <strong>Adresse :</strong> {PUBLISHER.host.address}
            </li>
            <li>
              <strong>Site :</strong>{" "}
              <a
                className="underline"
                href={PUBLISHER.host.site}
                target="_blank"
                rel="noopener noreferrer"
              >
                {PUBLISHER.host.site}
              </a>
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="Propriété intellectuelle">
          <p>
            L'ensemble des questions, textes, enregistrements audio et explications présents sur ce
            site sont des créations originales et sont protégés par le droit d'auteur. Toute
            reproduction ou rediffusion, totale ou partielle, sans autorisation écrite préalable est
            interdite.
          </p>
          <p>
            Les photographies utilisées dans la partie 1 proviennent de Wikimedia Commons et restent
            la propriété de leurs auteurs respectifs. Chaque photographie est accompagnée du nom de
            son auteur et de sa licence.
          </p>
        </LegalSection>

        <LegalSection title="Marques">
          <p>
            TOEIC est une marque déposée d'Educational Testing Service (ETS). Ce site est
            indépendant et n'est ni affilié à ETS, ni approuvé, ni parrainé par ETS. Aucun sujet
            officiel d'examen n'est reproduit sur ce site.
          </p>
        </LegalSection>

        <LegalSection title="Données personnelles">
          <p>
            Le traitement des données est décrit dans notre{" "}
            <a className="underline" href="/privacy">
              politique de confidentialité
            </a>
            . Le site ne crée pas de compte utilisateur : votre progression est enregistrée
            uniquement dans votre navigateur.
          </p>
        </LegalSection>
      </LegalPage>
    </SiteLayout>
  );
}
