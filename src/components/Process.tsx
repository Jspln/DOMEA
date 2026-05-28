import { PhoneCall, ClipboardCheck, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Vous nous contactez",
    description:
      "Un simple appel ou message via le formulaire. Nous échangeons sur vos besoins, votre logement et vos préférences.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Visite et devis sur-mesure",
    description:
      "Nous venons découvrir votre intérieur (sans engagement) et vous remettons un devis clair, gratuit, sans surprise.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "On s'occupe de tout",
    description:
      "Votre intervenant·e dédié·e démarre les prestations. Vous payez 50 % du tarif grâce à l'avance immédiate URSSAF.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="py-24 sm:py-32 bg-gradient-to-b from-white to-orange-50/40 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block text-[#E8705A] font-semibold text-sm uppercase tracking-[0.2em] bg-orange-50 px-3 py-1 rounded-full">
            Comment ça marche ?
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Une démarche simple,{" "}
            <span className="gradient-text">en 3 étapes</span>
          </h2>
          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            De votre premier contact à la première intervention, nous rendons
            tout le processus fluide et transparent.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Ligne de connexion */}
          <div
            className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-px border-t-2 border-dashed border-orange-200 pointer-events-none"
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative reveal text-center"
              data-delay={String((i + 1) * 150)}
            >
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#E8705A] to-[#C9923A] flex items-center justify-center text-white shadow-xl shadow-orange-200">
                  <step.icon className="w-10 h-10" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-white border-4 border-orange-100 flex items-center justify-center">
                  <span className="text-sm font-extrabold text-[#E8705A]">
                    {step.number}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
