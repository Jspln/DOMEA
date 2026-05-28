/**
 * Configuration centrale du site DOMEA.
 * Pour modifier le téléphone, l'email, l'adresse, etc.
 * tout est ici — pas besoin de chercher dans les composants.
 */

export const siteConfig = {
  name: "DOMEA",
  tagline: "Services à domicile à Callian",
  description:
    "DOMEA : entretien régulier, grand ménage, blanchisserie et organisation intérieure à Callian (83440). Profitez de l'avance immédiate du crédit d'impôt.",
  url: "https://domea.fr",
  locale: "fr-FR",

  contact: {
    phone: "+33 6 52 62 81 01",
    phoneTel: "+33652628101",
    email: "contact@domea-callian.fr",
    address: {
      city: "Callian",
      postalCode: "83440",
      region: "Var",
      country: "FR",
      // Coordonnées GPS de Callian (Var) pour la carte OpenStreetMap
      lat: 43.6225,
      lng: 6.7547,
    },
    serviceArea: [
      "Callian",
      "Montauroux",
      "Tourrettes",
      "Fayence",
      "Saint-Paul-en-Forêt",
      "Tanneron",
      "Bagnols-en-Forêt",
    ],
    hours: [
      { day: "Lundi - Vendredi", time: "8h00 - 19h00" },
      { day: "Samedi", time: "9h00 - 12h00" },
      { day: "Dimanche", time: "Fermé" },
    ],
  },

  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },

  legal: {
    company: "DOMEA SAS",
    siret: "000 000 000 00000",
    creator: {
      name: "Nexa360",
      url: "https://nexa-360.fr",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
