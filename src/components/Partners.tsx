/* eslint-disable @next/next/no-img-element */
import { ArrowRight, CheckCircle } from "lucide-react";

const partners = [
  {
    logo: "/Design sans titre-67.png",
    name: "ASR Rénovation",
    subtitle: "Agence Sans Risques",
    description:
      "Travaux de rénovation clés en main. Transformez votre bien avant de le mettre en location, avec des artisans sélectionnés et des garanties solides.",
    bg: "bg-amber-50",
    border: "border-amber-200",
    logoBg: "bg-white",
    url: "https://agencesansrisque.com",
    tag: "Rénovation & Travaux",
  },
  {
    logo: "/domea-sans-fond.png",
    name: "DOMÉA",
    subtitle: "Services à domicile",
    description:
      "Entretien régulier, ménage, blanchisserie et jardinage. Nous maintenons votre bien impeccable entre chaque location, avec le crédit d'impôt à -50 %.",
    bg: "bg-orange-50",
    border: "border-orange-200",
    logoBg: "bg-white",
    url: "#contact",
    tag: "Entretien & Services",
    highlight: true,
  },
  {
    logo: "/logo_key_inspire.png",
    name: "Key Inspire",
    subtitle: "Conciergerie",
    description:
      "Gestion locative, accueil des voyageurs, check-in / check-out et optimisation des revenus locatifs. Votre bien loué, géré, rentabilisé.",
    bg: "bg-gray-50",
    border: "border-gray-200",
    logoBg: "bg-white",
    url: "https://keyinspire-conciergerie.com",
    tag: "Gestion locative",
  },
];

const steps = [
  { label: "ASR rénove votre bien" },
  { label: "Key Inspire gère la location" },
  { label: "DOMÉA entretient entre chaque séjour" },
];

export default function Partners() {
  return (
    <section
      id="partenaires"
      className="py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block text-[#E8705A] font-semibold text-sm uppercase tracking-[0.2em] bg-orange-50 px-3 py-1 rounded-full">
            Notre écosystème
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            L&apos;investissement locatif{" "}
            <span className="gradient-text">clés en main</span>
          </h2>
          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            DOMÉA s&apos;associe à deux partenaires de confiance pour vous
            offrir une solution complète : de la rénovation à la gestion
            locative, en passant par l&apos;entretien quotidien.
          </p>
        </div>

        {/* Schéma des 3 étapes */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-16 reveal">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm text-sm font-medium text-gray-700">
                <span className="w-2 h-2 rounded-full bg-[#E8705A] shrink-0" />
                {step.label}
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="w-4 h-4 text-gray-400 shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Cards partenaires */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {partners.map((p, i) => (
            <div
              key={p.name}
              className={`relative rounded-3xl border ${p.border} ${p.bg} p-7 flex flex-col reveal ${
                p.highlight
                  ? "ring-2 ring-[#E8705A]/30 shadow-xl shadow-orange-100/60"
                  : "shadow-sm"
              }`}
              data-delay={String((i + 1) * 150)}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E8705A] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  C&apos;est nous !
                </span>
              )}

              <a
                href={p.url}
                target={p.url.startsWith("http") ? "_blank" : undefined}
                rel={p.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`w-20 h-16 rounded-xl ${p.logoBg} flex items-center justify-center mb-5 shadow-sm border border-gray-100 p-2 hover:shadow-md transition-shadow`}
              >
                <img src={p.logo} alt={p.name} className="h-full w-full object-contain" />
              </a>

              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-1">
                {p.tag}
              </span>
              <a
                href={p.url}
                target={p.url.startsWith("http") ? "_blank" : undefined}
                rel={p.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-xl font-extrabold text-gray-900 mb-0.5 hover:text-[#E8705A] transition-colors"
              >
                {p.name}
              </a>
              <p className="text-sm text-gray-500 mb-4">{p.subtitle}</p>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">
                {p.description}
              </p>

              <a
                href={p.url}
                target={p.url.startsWith("http") ? "_blank" : undefined}
                rel={p.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                  p.highlight
                    ? "text-[#E8705A] hover:text-[#D4553F]"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                En savoir plus
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Bloc résumé */}
        <div className="bg-gray-900 rounded-3xl p-8 sm:p-10 text-white reveal">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
              Investissez sereinement.{" "}
              <span className="text-[#E8705A]">On gère le reste.</span>
            </h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              Achetez, rénovez avec ASR, confiez la gestion à Key Inspire, et
              laissez DOMÉA entretenir votre bien entre chaque séjour. Un seul
              réseau, zéro stress.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              {[
                "Rénovation garantie",
                "Entretien régulier -50 %",
                "Gestion locative complète",
                "Partenaires locaux",
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#E8705A]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
