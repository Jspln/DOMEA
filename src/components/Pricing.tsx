import { Check, Star } from "lucide-react";
import { services } from "@/lib/services";
import { getPrices } from "@/lib/prices";

export default function Pricing() {
  const prices = getPrices();
  const servicesWithPrices = services.map((s) => ({
    ...s,
    priceFrom: prices[s.id] ?? s.priceFrom,
  }));
  return (
    <section
      id="tarifs"
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block text-teal-700 font-semibold text-sm uppercase tracking-[0.2em] bg-teal-50 px-3 py-1 rounded-full">
            Tarifs transparents
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Des prix clairs,{" "}
            <span className="gradient-text">sans surprise</span>
          </h2>
          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            Tous nos tarifs incluent le matériel professionnel, les déplacements
            dans notre zone d&apos;intervention et la garantie d&apos;un service
            de qualité.
          </p>
        </div>

        {/* Toggle informatif */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 reveal">
          <div className="inline-flex items-center gap-3 bg-emerald-50 border border-emerald-200 px-5 py-3 rounded-full">
            <Star className="w-5 h-5 text-emerald-600 fill-current" />
            <span className="text-sm font-semibold text-emerald-900">
              Avec l&apos;avance immédiate URSSAF, vous ne payez que 50 % du
              tarif horaire affiché
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesWithPrices.map((service, i) => {
            const isHighlighted = i === 0;
            return (
              <div
                key={service.id}
                className={`relative rounded-3xl p-7 reveal flex flex-col ${
                  isHighlighted
                    ? "bg-gradient-to-br from-teal-700 to-emerald-800 text-white shadow-2xl shadow-teal-300/40 lg:-translate-y-3 lg:scale-[1.02]"
                    : "bg-white border border-gray-100 hover:border-teal-200 hover:shadow-xl"
                } transition-all`}
                data-delay={String((i + 1) * 100)}
              >
                {isHighlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-950 text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                    Le plus populaire
                  </div>
                )}

                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    isHighlighted
                      ? "bg-white/15 text-white"
                      : `${service.color.bg} ${service.color.text}`
                  }`}
                >
                  <service.icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold mb-1">{service.title}</h3>
                <p
                  className={`text-sm mb-5 ${
                    isHighlighted ? "text-teal-50/90" : "text-gray-500"
                  }`}
                >
                  {service.shortDescription}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold">
                      {Math.round(service.priceFrom / 2)}
                    </span>
                    <span className="text-2xl font-bold">€</span>
                    <span
                      className={`text-sm ml-1 ${
                        isHighlighted ? "text-teal-100" : "text-gray-400"
                      }`}
                    >
                      {service.unit}
                    </span>
                  </div>
                  <p
                    className={`text-xs mt-1 line-through ${
                      isHighlighted ? "text-teal-100" : "text-gray-400"
                    }`}
                  >
                    Tarif brut : {service.priceFrom} € {service.unit}
                  </p>
                </div>

                <ul className="space-y-2.5 flex-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isHighlighted ? "text-emerald-300" : "text-teal-600"
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all active:scale-95 ${
                    isHighlighted
                      ? "bg-white text-teal-800 hover:bg-teal-50"
                      : "bg-gray-900 text-white hover:bg-teal-700"
                  }`}
                >
                  Demander un devis
                </a>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-xs text-gray-400 max-w-2xl mx-auto">
          Le crédit d&apos;impôt est plafonné à 12 000 € de dépenses annuelles
          (majorations possibles). Les tarifs réels après crédit d&apos;impôt
          peuvent varier selon votre situation fiscale.
        </p>
      </div>
    </section>
  );
}
