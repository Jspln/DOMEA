# DOMEA — Site vitrine

Site web vitrine de **DOMEA**, entreprise agréée de services à la personne basée à Callian (Var, 83440).

Construit avec **Next.js 16**, **React 19** et **Tailwind CSS v4**.

---

## ⚡ Démarrage rapide

> Pré-requis : [Node.js](https://nodejs.org/) version 20 ou supérieure.

```bash
# 1) Installer les dépendances (une seule fois)
npm install

# 2) Lancer le serveur de développement
npm run dev
```

Ouvre ensuite [http://localhost:3000](http://localhost:3000) dans ton navigateur. La page se met à jour automatiquement quand tu modifies un fichier.

---

## 🧱 Structure du projet

```
src/
├── app/
│   ├── layout.tsx              ← Layout global (police, SEO, metadata)
│   ├── page.tsx                ← Page d'accueil (assemble toutes les sections)
│   ├── globals.css             ← Styles globaux + design tokens
│   ├── sitemap.ts              ← Sitemap automatique (SEO)
│   ├── robots.ts               ← robots.txt automatique (SEO)
│   ├── opengraph-image.tsx     ← Image de partage sur les réseaux sociaux
│   ├── api/contact/route.ts    ← Endpoint du formulaire de contact
│   ├── mentions-legales/       ← Page Mentions légales
│   └── politique-confidentialite/ ← Page Politique de confidentialité (RGPD)
│
├── components/
│   ├── Navbar.tsx              ← Barre de navigation (sticky, active au scroll)
│   ├── Hero.tsx                ← Bandeau d'accueil
│   ├── Services.tsx            ← Cartes des 4 services
│   ├── Process.tsx             ← "Comment ça marche ?" en 3 étapes
│   ├── Pricing.tsx             ← Grille de tarifs
│   ├── CreditImpot.tsx         ← Simulateur d'économies (crédit d'impôt)
│   ├── Testimonials.tsx        ← Avis clients
│   ├── Faq.tsx                 ← Questions fréquentes (accordéon)
│   ├── Contact.tsx             ← Formulaire de devis + infos
│   ├── Footer.tsx              ← Pied de page
│   ├── Loader.tsx              ← Écran de chargement initial
│   ├── ScrollAnimator.tsx      ← Animations au défilement
│   ├── ScrollToTop.tsx         ← Bouton "retour en haut"
│   ├── CookieBanner.tsx        ← Bannière de cookies
│   ├── StructuredData.tsx      ← Données structurées (Google JSON-LD)
│   ├── LegalLayout.tsx         ← Wrapper pour les pages légales
│   └── Logo.tsx                ← Logo SVG
│
└── lib/
    ├── site-config.ts          ← ⭐ TOUTES tes infos (tel, email, adresse...)
    ├── services.ts             ← Liste des services & tarifs
    ├── testimonials.ts         ← Avis clients à afficher
    └── faq.ts                  ← Questions fréquentes
```

---

## ✏️ Comment modifier le contenu (sans toucher au code visuel)

Tout le contenu éditable est rassemblé dans le dossier **`src/lib/`** :

| Fichier              | Quoi modifier ?                                          |
| -------------------- | -------------------------------------------------------- |
| `site-config.ts`     | Téléphone, email, adresse, horaires, SIRET, réseaux...   |
| `services.ts`        | Liste des services, prix horaires, descriptifs           |
| `testimonials.ts`    | Avis clients affichés sur la page                        |
| `faq.ts`             | Questions/réponses de la FAQ                             |

Exemple : pour changer le numéro de téléphone, ouvre `src/lib/site-config.ts` et modifie la valeur de `contact.phone` et `contact.phoneTel`. Tout le site se met à jour automatiquement.

---

## 🚀 Mise en production

### Build local

```bash
npm run build
npm run start
```

### Déploiement sur Netlify

Le fichier `netlify.toml` est déjà configuré. Connecte simplement le dépôt Git à Netlify et la mise en ligne se fait automatiquement à chaque `push`.

### Variables d'environnement (à configurer)

Pour activer l'envoi réel des emails du formulaire de contact, ajoute un service comme [Resend](https://resend.com) :

```env
RESEND_API_KEY=ta_cle_ici
CONTACT_TO_EMAIL=contact@domea.fr
```

Puis branche-les dans `src/app/api/contact/route.ts` (TODO dans le fichier).

---

## 🎨 Personnalisation visuelle

Les **couleurs de marque** sont définies dans `src/app/globals.css` (variables CSS `--brand-*`). Tu peux les ajuster pour adapter le site à une nouvelle charte graphique.

Le **logo** est un SVG dans `src/components/Logo.tsx` — tu peux le remplacer par un autre SVG sans toucher au reste.

---

## 📋 Scripts disponibles

| Commande           | Description                                  |
| ------------------ | -------------------------------------------- |
| `npm run dev`      | Démarre le serveur de développement          |
| `npm run build`    | Compile pour la production                   |
| `npm run start`    | Lance le serveur de production (après build) |
| `npm run lint`     | Vérifie la qualité du code                   |

---

## 🛠️ Stack technique

- **[Next.js 16](https://nextjs.org)** — Framework React full-stack
- **[React 19](https://react.dev)** — Bibliothèque UI
- **[Tailwind CSS v4](https://tailwindcss.com)** — Styles utilitaires
- **[Lucide React](https://lucide.dev)** — Icônes
- **[TypeScript](https://www.typescriptlang.org)** — Typage statique

---

## 📞 Besoin d'aide ?

Site conçu par **[Nexa360](https://nexa-360.fr)**.
