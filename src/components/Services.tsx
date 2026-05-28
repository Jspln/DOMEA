import { Check, ArrowRight } from "lucide-react";
import { services } from "@/lib/services";
import { getPrices } from "@/lib/prices";

export default function Services() {
  const prices = getPrices();
  const servicesWithPrices = services.map((s) => ({
    ...s,
    priceFrom: prices[s.id] ?? s.priceFrom,
  }));
  return (
    <section
      id="services"
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block text-[#E8705A] font-semibold text-sm uppercase tracking-[0.2em] bg-orange-50 px-3 py-1 rounded-full">
            Nos services
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Des prestations adaptées à{" "}
            <span className="gradient-text">votre quotidien</span>
          </h2>
          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            Ménage, blanchisserie, organisation et jardinage — toutes nos prestations
            sont éligibles au crédit d&apos;impôt de 50 % via l&apos;avance immédiate de l&apos;URSSAF.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {servicesWithPrices.map((service, i) => (
            <article
              key={service.id}
              className="group relative bg-white rounded-2xl border border-gray-100 p-5 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/40 transition-all duration-500 hover:-translate-y-2 reveal flex flex-col"
              data-delay={String((i + 1) * 100)}
            >
              <div
                className={`absolute inset-x-0 -top-px h-1 bg-gradient-to-r ${service.color.accent} opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl`}
              />

              <div
                className={`w-14 h-14 rounded-2xl ${service.color.bg} ${service.color.text} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
              >
                <service.icon className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {service.shortDescription}
              </p>

              <ul className="space-y-2 mb-6 flex-1">
                {service.features.slice(0, 3).map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <Check
                      className={`w-4 h-4 ${service.color.text} shrink-0 mt-0.5`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-5 border-t border-gray-100 flex items-end justify-between">
                <div>
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider">
                    À partir de
                  </p>
                  <p className="text-2xl font-extrabold text-gray-900">
                    {Math.round(service.priceFrom / 2)} €
                    <span className="text-xs font-normal text-gray-400 ml-1">
                      / h*
                    </span>
                  </p>
                </div>
                <a
                  href="#contact"
                  aria-label={`Demander un devis pour ${service.title}`}
                  className={`inline-flex items-center gap-1 ${service.color.text} text-sm font-semibold hover:gap-2 transition-all`}
                >
                  Devis
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-gray-400">
          * Tarif après déduction du crédit d&apos;impôt de 50 %. Tarif horaire
          brut affiché dans la section{" "}
          <a href="#tarifs" className="underline hover:text-orange-600">
            Tarifs
          </a>
          .
        </p>
      </div>
    </section>
  );
}
