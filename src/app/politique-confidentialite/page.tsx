import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Politique de confidentialité et protection des données personnelles sur ${siteConfig.name}.`,
  robots: { index: true, follow: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalLayout
      title="Politique de confidentialité"
      description="Protection de vos données personnelles et conformité RGPD."
    >
      <p className="lead">
        Cette politique décrit comment {siteConfig.legal.company} collecte,
        utilise et protège vos données personnelles dans le respect du RGPD.
      </p>

      <h2>1. Données collectées</h2>
      <p>
        Lorsque vous utilisez notre formulaire de contact, nous collectons
        uniquement les informations strictement nécessaires :
      </p>
      <ul>
        <li>Nom et prénom</li>
        <li>Adresse email</li>
        <li>Numéro de téléphone (optionnel)</li>
        <li>Service souhaité et message libre</li>
      </ul>

      <h2>2. Finalité du traitement</h2>
      <p>Vos données sont utilisées exclusivement pour :</p>
      <ul>
        <li>Vous recontacter au sujet de votre demande de devis</li>
        <li>Établir une proposition commerciale personnalisée</li>
        <li>Gérer la relation client si vous devenez client</li>
      </ul>

      <h2>3. Conservation des données</h2>
      <p>
        Vos données sont conservées <strong>3 ans</strong> à compter du
        dernier contact pour les prospects. Pour les clients, elles sont
        conservées pendant la durée du contrat puis archivées selon les
        obligations légales en vigueur (notamment 10 ans pour les pièces
        comptables).
      </p>

      <h2>4. Destinataires des données</h2>
      <p>
        Vos données ne sont <strong>jamais revendues ni transmises</strong> à
        des tiers à des fins commerciales. Seules les personnes habilitées au
        sein de {siteConfig.legal.company} y ont accès.
      </p>

      <h2>5. Vos droits</h2>
      <p>
        Conformément au RGPD, vous disposez à tout moment des droits suivants :
      </p>
      <ul>
        <li>Droit d&apos;accès à vos données</li>
        <li>Droit de rectification</li>
        <li>Droit à l&apos;effacement (« droit à l&apos;oubli »)</li>
        <li>Droit à la limitation du traitement</li>
        <li>Droit à la portabilité</li>
        <li>Droit d&apos;opposition</li>
      </ul>
      <p>
        Pour exercer ces droits, contactez-nous à{" "}
        <a href={`mailto:${siteConfig.contact.email}`}>
          {siteConfig.contact.email}
        </a>{" "}
        en précisant votre demande. Vous avez également le droit
        d&apos;introduire une réclamation auprès de la{" "}
        <a
          href="https://www.cnil.fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          CNIL
        </a>
        .
      </p>

      <h2>6. Cookies</h2>
      <p>
        Ce site n&apos;utilise <strong>aucun cookie de traçage publicitaire</strong>.
        Seuls des cookies strictement nécessaires au fonctionnement
        (consentement, préférences) peuvent être déposés. Vous pouvez à tout
        moment vider les cookies via les paramètres de votre navigateur.
      </p>

      <h2>7. Sécurité</h2>
      <p>
        Nous mettons en œuvre des mesures techniques et organisationnelles
        appropriées pour protéger vos données contre toute perte,
        utilisation abusive, accès non autorisé, divulgation ou modification.
      </p>

      <h2>8. Modifications de la politique</h2>
      <p>
        Cette politique peut évoluer pour refléter les changements
        réglementaires ou nos pratiques. La date de dernière mise à jour est
        indiquée ci-dessous.
      </p>
      <p className="text-sm text-gray-500">
        <em>Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</em>
      </p>
    </LegalLayout>
  );
}
