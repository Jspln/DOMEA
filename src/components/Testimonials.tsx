import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  return (
    <section
      id="avis"
      className="py-24 sm:py-32 bg-gradient-to-b from-orange-50/40 to-white relative overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 w-72 h-72 bg-orange-200/40 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block text-[#E8705A] font-semibold text-sm uppercase tracking-[0.2em] bg-white px-3 py-1 rounded-full shadow-sm">
            Avis clients
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Ils nous font confiance{" "}
            <span className="gradient-text">au quotidien</span>
          </h2>
          <div className="mt-6 inline-flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-gray-600 font-semibold">
              4,9 sur 5 — basé sur plus de 80 avis vérifiés
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={t.id}
              className="group bg-white rounded-3xl p-7 border border-gray-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/40 transition-all hover:-translate-y-1 reveal flex flex-col"
              data-delay={String((i + 1) * 100)}
            >
              <Quote
                className="w-8 h-8 text-orange-200 mb-3 group-hover:text-orange-400 transition-colors"
                aria-hidden="true"
              />

              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <blockquote className="text-gray-700 text-sm leading-relaxed flex-1">
                « {t.text} »
              </blockquote>

              <figcaption className="mt-6 pt-5 border-t border-gray-100 flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full bg-gradient-to-br from-[#E8705A] to-[#C9923A] flex items-center justify-center text-white font-bold text-sm shrink-0"
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">
                    {t.city} · {t.service}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
