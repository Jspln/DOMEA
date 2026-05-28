"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faq } from "@/lib/faq";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 text-[#E8705A] font-semibold text-sm uppercase tracking-[0.2em] bg-orange-50 px-3 py-1 rounded-full">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Vos questions,{" "}
            <span className="gradient-text">nos réponses</span>
          </h2>
          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            Tout ce qu&apos;il faut savoir avant de démarrer avec DOMEA.
          </p>
        </div>

        <div className="space-y-3 reveal">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.question}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? "border-orange-200 bg-orange-50/40 shadow-md shadow-orange-100/40"
                    : "border-gray-100 bg-white hover:border-orange-100"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                >
                  <span
                    className={`font-semibold transition-colors ${
                      isOpen ? "text-[#E8705A]" : "text-gray-900"
                    }`}
                  >
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isOpen
                        ? "bg-[#E8705A] text-white rotate-180"
                        : "bg-gray-100 text-gray-500"
                    }`}
                    aria-hidden="true"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                <div
                  id={`faq-${i}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center reveal">
          <p className="text-gray-600 mb-4">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#E8705A] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#D4553F] transition-colors active:scale-95"
          >
            Contactez-nous directement
          </a>
        </div>
      </div>
    </section>
  );
}
