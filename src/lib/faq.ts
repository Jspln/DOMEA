/**
 * Questions fréquentes du site DOMEA.
 */

export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: "Comment fonctionne l'avance immédiate du crédit d'impôt ?",
    answer:
      "Grâce au dispositif URSSAF de l'avance immédiate, votre crédit d'impôt de 50 % est déduit en temps réel sur chacune de nos factures. Vous ne payez que la moitié du tarif — plus besoin d'attendre votre déclaration d'impôts l'année suivante.",
  },
  {
    question: "Qui sera présent à mon domicile ?",
    answer:
      "Nous attribuons toujours le ou la même intervenant·e à votre logement pour garantir une vraie relation de confiance. Tous nos collaborateurs sont salariés, déclarés et formés à nos protocoles d'intervention.",
  },
  {
    question: "Dois-je fournir le matériel et les produits ?",
    answer:
      "Vous pouvez fournir votre propre matériel pour respecter vos préférences (produits écologiques, allergies). Sinon, nous apportons tout l'équipement professionnel nécessaire pour un résultat optimal — sans surcoût.",
  },
  {
    question: "Quels sont les délais pour démarrer une prestation ?",
    answer:
      "Après un premier échange et la visite de votre logement (gratuite et sans engagement), nous pouvons généralement démarrer dans la semaine qui suit. Pour les grands ménages ou interventions ponctuelles, nous nous adaptons à votre planning.",
  },
  {
    question: "Puis-je modifier ou annuler une prestation ?",
    answer:
      "Oui, vous pouvez modifier ou annuler une prestation sans frais jusqu'à 48 h avant l'intervention prévue. En cas d'imprévu, contactez-nous le plus tôt possible — nous trouverons toujours une solution.",
  },
  {
    question: "Quelles communes desservez-vous autour de Callian ?",
    answer:
      "Nous intervenons sur Callian, Montauroux, Tourrettes, Fayence, Saint-Paul-en-Forêt, Tanneron et Bagnols-en-Forêt. Vous habitez une commune voisine ? Contactez-nous, nous étudierons votre demande.",
  },
  {
    question: "Êtes-vous bien agréés services à la personne ?",
    answer:
      "Oui, DOMEA est officiellement déclarée et agréée services à la personne. Cet agrément garantit votre éligibilité au crédit d'impôt de 50 % sur l'ensemble de nos prestations.",
  },
  {
    question: "Comment se passe la facturation ?",
    answer:
      "Vous recevez votre facture après chaque prestation, déjà déduite de l'avance immédiate du crédit d'impôt. Paiement par prélèvement automatique sécurisé via le compte URSSAF, ou par virement.",
  },
];
