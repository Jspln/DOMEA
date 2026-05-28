/**
 * Données des services et tarifs.
 * Modifie ici les prix, descriptions et inclusions.
 */

import type { LucideIcon } from "lucide-react";
import { Home, Sparkles, Shirt, LayoutGrid, Leaf } from "lucide-react";

export type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  priceFrom: number;
  unit: string;
  color: {
    bg: string;
    text: string;
    accent: string;
  };
};

export const services: Service[] = [
  {
    id: "entretien-regulier",
    icon: Home,
    title: "Entretien régulier",
    shortDescription: "Un intérieur impeccable, semaine après semaine.",
    description:
      "Un ménage régulier adapté à votre rythme de vie. Sols, surfaces, salles de bain, cuisine : nous nous occupons de tout pour vous offrir un intérieur toujours impeccable.",
    features: [
      "Dépoussiérage de toutes les surfaces",
      "Aspiration et lavage des sols",
      "Nettoyage cuisine et sanitaires",
      "Vidage des poubelles",
      "Personnel toujours le même",
    ],
    priceFrom: 28,
    unit: "/ heure",
    color: {
      bg: "bg-orange-50",
      text: "text-orange-600",
      accent: "from-orange-400 to-orange-500",
    },
  },
  {
    id: "grand-menage",
    icon: Sparkles,
    title: "Grand ménage",
    shortDescription: "Nettoyage en profondeur, chaque recoin traité.",
    description:
      "Nettoyage en profondeur, idéal pour un emménagement, un déménagement ou un grand nettoyage saisonnier. Une remise à neuf complète de votre logement.",
    features: [
      "Nettoyage vitres intérieures",
      "Détartrage robinetterie et carrelage",
      "Nettoyage électroménager (four, frigo)",
      "Plinthes, portes, interrupteurs",
      "Devis personnalisé gratuit",
    ],
    priceFrom: 32,
    unit: "/ heure",
    color: {
      bg: "bg-amber-50",
      text: "text-amber-700",
      accent: "from-amber-400 to-amber-600",
    },
  },
  {
    id: "blanchisserie",
    icon: Shirt,
    title: "Blanchisserie",
    shortDescription: "Du linge frais, propre, parfaitement repassé.",
    description:
      "Lavage, séchage, pliage et repassage de votre linge. Récupérez vos vêtements frais et impeccablement repassés, sans effort de votre côté.",
    features: [
      "Tri par couleur et matière",
      "Repassage professionnel",
      "Pliage soigné",
      "Détachage des taches courantes",
      "Forfait kilo ou à la pièce",
    ],
    priceFrom: 26,
    unit: "/ heure",
    color: {
      bg: "bg-amber-50",
      text: "text-amber-700",
      accent: "from-amber-400 to-amber-500",
    },
  },
  {
    id: "organisation",
    icon: LayoutGrid,
    title: "Organisation intérieure",
    shortDescription: "Vos espaces optimisés, votre quotidien simplifié.",
    description:
      "Conseil en rangement et optimisation de vos espaces. Tri, désencombrement, mise en place de systèmes adaptés à votre vie quotidienne.",
    features: [
      "Audit de vos espaces",
      "Tri et désencombrement guidé",
      "Mise en place de rangements",
      "Conseils personnalisés",
      "Suivi sur plusieurs séances possible",
    ],
    priceFrom: 35,
    unit: "/ heure",
    color: {
      bg: "bg-rose-50",
      text: "text-rose-600",
      accent: "from-rose-400 to-rose-500",
    },
  },
  {
    id: "jardinage",
    icon: Leaf,
    title: "Jardinage & Entretien",
    shortDescription: "Un jardin soigné, toute l'année sans effort.",
    description:
      "Entretien régulier de votre jardin : tonte, taille, désherbage et plantation. Un espace extérieur impeccable pour profiter de chez vous.",
    features: [
      "Tonte et bordures de pelouse",
      "Taille des haies et arbustes",
      "Désherbage et binage",
      "Arrosage et entretien des massifs",
      "Ramassage et évacuation des déchets verts",
    ],
    priceFrom: 30,
    unit: "/ heure",
    color: {
      bg: "bg-stone-100",
      text: "text-stone-600",
      accent: "from-stone-400 to-stone-600",
    },
  },
];
