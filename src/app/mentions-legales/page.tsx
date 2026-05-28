import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site ${siteConfig.name}.`,
  robots: { index: true, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <LegalLayout
      title="Mentions légales"
      description={`Informations légales relatives à ${siteConfig.name}.`}
    >
      <h2>1. Éditeur du site</h2>
      <p>
        Le présent site est édité par <strong>{siteConfig.legal.company}</strong>,
        société proposant des services à la personne.
      </p>
      <ul>
        <li>
          <strong>Raison sociale :</strong> {siteConfig.legal.company}
        </li>
        <li>
          <strong>SIRET :</strong> {siteConfig.legal.siret}
        </li>

        <li>
          <strong>Siège social :</strong> {siteConfig.contact.address.city} (
          {siteConfig.contact.address.postalCode}),{" "}
          {siteConfig.contact.address.region}, France
        </li>
        <li>
          <strong>Téléphone :</strong>{" "}
          <a href={`tel:${siteConfig.contact.phoneTel}`}>
            {siteConfig.contact.phone}
          </a>
        </li>
        <li>
          <strong>Email :</strong>{" "}
          <a href={`mailto:${siteConfig.contact.email}`}>
            {siteConfig.contact.email}
          </a>
        </li>
      </ul>

      <h2>2. Directeur de publication</h2>
      <p>
        Le directeur de publication est le représentant légal de{" "}
        {siteConfig.legal.company}.
      </p>

      <h2>3. Hébergement</h2>
      <p>
        Ce site est hébergé sur une infrastructure cloud sécurisée. L&apos;hébergeur
        peut être contacté via {siteConfig.contact.email}.
      </p>

      <h2>4. Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus du site (textes, images, logos, graphismes)
        sont la propriété exclusive de {siteConfig.legal.company} ou font
        l&apos;objet d&apos;une autorisation d&apos;utilisation. Toute
        reproduction, représentation, modification ou exploitation non
        expressément autorisée est interdite.
      </p>

      <h2>5. Conception et réalisation</h2>
      <p>
        Site conçu et développé par{" "}
        <a
          href={siteConfig.legal.creator.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {siteConfig.legal.creator.name}
        </a>
        .
      </p>

      <h2>6. Crédit d&apos;impôt</h2>
      <p>
        Les prestations proposées par {siteConfig.legal.company} ouvrent droit
        au crédit d&apos;impôt de 50 % pour les services à la personne, dans
        les conditions prévues par l&apos;article 199 sexdecies du Code général
        des impôts. Le plafond annuel de dépenses prises en compte est de
        12 000 €, pouvant être majoré sous certaines conditions.
      </p>

      <h2>7. Contact</h2>
      <p>
        Pour toute question, vous pouvez nous contacter à l&apos;adresse{" "}
        <a href={`mailto:${siteConfig.contact.email}`}>
          {siteConfig.contact.email}
        </a>
        .
      </p>
    </LegalLayout>
  );
}
