/**
 * Témoignages clients (exemples — à remplacer par les vrais avis).
 */

export type Testimonial = {
  id: string;
  name: string;
  city: string;
  service: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Marie L.",
    city: "Callian",
    service: "Entretien régulier",
    rating: 5,
    text: "Service impeccable depuis 6 mois. La même personne vient chaque semaine, mon intérieur est toujours parfait. L'avance immédiate du crédit d'impôt change vraiment la donne au quotidien.",
    initials: "ML",
  },
  {
    id: "2",
    name: "Jean-Pierre M.",
    city: "Montauroux",
    service: "Grand ménage",
    rating: 5,
    text: "Nous avons fait appel à DOMEA pour un grand ménage avant l'arrivée de nos enfants. Résultat bluffant, tout brillait. Très professionnel, je recommande sans hésiter.",
    initials: "JM",
  },
  {
    id: "3",
    name: "Sophie B.",
    city: "Fayence",
    service: "Blanchisserie",
    rating: 5,
    text: "Du linge nickel, plié avec soin. Je gagne facilement 4 heures par semaine que je passe maintenant avec mes enfants. Merci !",
    initials: "SB",
  },
  {
    id: "4",
    name: "Patrick D.",
    city: "Tourrettes",
    service: "Organisation intérieure",
    rating: 5,
    text: "Mon dressing a été complètement réorganisé en une matinée. Des conseils concrets, du tri intelligent. J'ai enfin de la place chez moi !",
    initials: "PD",
  },
];
