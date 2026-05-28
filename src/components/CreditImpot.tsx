"use client";

import { useState } from "react";
import { ShieldCheck, BadgeEuro, Clock, FileCheck } from "lucide-react";

const advantages = [
  {
    icon: BadgeEuro,
    title: "50 % de crédit d'impôt",
    description:
      "Bénéficiez d'un crédit d'impôt de 50 % sur l'ensemble de nos prestations de services à la personne.",
  },
  {
    icon: Clock,
    title: "Avance immédiate",
    description:
      "Grâce au dispositif URSSAF, vous ne payez que 50 %. Pas besoin d'attendre la prochaine déclaration d'impôts.",
  },
  {
    icon: FileCheck,
    title: "Zéro paperasse",
    description:
      "Nous prenons en charge toutes les démarches administratives liées au crédit d'impôt. Vous n'avez rien à faire.",
  },
  {
    icon: ShieldCheck,
    title: "Entreprise agréée",
    description:
      "DOMEA est officiellement agréée services à la personne, garantissant votre éligibilité au crédit d'impôt.",
  },
];

const presets = [2, 4, 8, 12, 16];

export default function CreditImpot() {
  const [hours, setHours] = useState(4);
  const hourlyRate = 28;

  const monthly = hours * hourlyRate * 4;
  const monthlyAfterCredit = monthly / 2;
  const yearlyAfterCredit = monthlyAfterCredit * 12;
  const yearlySavings = monthly * 12 - yearlyAfterCredit;

  const fmt = (n: number) =>
    n.toLocaleString("fr-FR", { maximumFractionDigits: 0 });

  return (
    <section
      id="credit-impot"
      className="py-24 sm:py-32 bg-gradient-to-br from-[#7a2819] via-[#b5402e] to-[#e8705a] text-white relative overflow-hidden"
    >
      <div
        className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-white/10 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9923A]/20 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block text-orange-200 font-semibold text-sm uppercase tracking-[0.2em] bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
            Avantage fiscal
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            -50 % grâce au{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-amber-200">
              crédit d&apos;impôt immédiat
            </span>
          </h2>
          <p className="mt-5 text-orange-100 text-lg leading-relaxed">
            Ne payez que la moitié grâce à l&apos;avance immédiate URSSAF.
            Aucune avance de trésorerie, aucune démarche fiscale à votre charge.
          </p>
        </div>

        {/* Simulateur */}
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/20 reveal mb-16">
          <h3 className="text-center font-bold text-xl sm:text-2xl mb-2">
            Simulez vos économies
          </h3>
          <p className="text-center text-orange-100 text-sm mb-8">
            Estimez ce que DOMEA vous coûte réellement, après crédit
            d&apos;impôt.
          </p>

          <div className="mb-8">
            <label
              htmlFor="hours-range"
              className="block text-sm font-medium text-orange-100 mb-3"
            >
              Heures par semaine :{" "}
              <span className="font-bold text-white text-lg">{hours} h</span>
            </label>
            <input
              id="hours-range"
              type="range"
              min={1}
              max={20}
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className="w-full h-2 bg-white/20 rounded-full appearance-none cursor-pointer accent-[#C9923A]"
            />
            <div className="mt-4 flex flex-wrap gap-2">
              {presets.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setHours(p)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    hours === p
                      ? "bg-white text-[#b5402e]"
                      : "bg-white/10 hover:bg-white/20 text-white/90"
                  }`}
                >
                  {p} h/sem
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <p className="text-xs text-orange-200 uppercase tracking-wider">
                Sans crédit d&apos;impôt
              </p>
              <p className="mt-2 text-3xl font-extrabold line-through text-white/50">
                {fmt(monthly)} €
              </p>
              <p className="text-xs text-orange-200 mt-1">/ mois</p>
            </div>
            <div className="bg-white text-gray-900 rounded-2xl p-5 shadow-2xl shadow-[#7a2819]/30 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-950 text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full">
                Votre coût réel
              </span>
              <p className="text-xs text-[#E8705A] uppercase tracking-wider font-semibold">
                Avec DOMEA
              </p>
              <p className="mt-2 text-3xl font-extrabold gradient-text">
                {fmt(monthlyAfterCredit)} €
              </p>
              <p className="text-xs text-gray-500 mt-1">/ mois après crédit</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <p className="text-xs text-orange-200 uppercase tracking-wider">
                Économie annuelle
              </p>
              <p className="mt-2 text-3xl font-extrabold text-[#C9923A]">
                {fmt(yearlySavings)} €
              </p>
              <p className="text-xs text-amber-200 mt-1">/ an grâce au CI</p>
            </div>
          </div>

          <p className="text-xs text-orange-100/70 text-center">
            Estimation basée sur un tarif horaire de {hourlyRate} € et 4 semaines
            par mois. Plafond du crédit d&apos;impôt : 12 000 € de dépenses
            annuelles (majorations possibles).
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((item, i) => (
            <div
              key={item.title}
              className="text-center reveal"
              data-delay={String((i + 1) * 100)}
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/10">
                <item.icon className="w-7 h-7 text-amber-300" />
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-orange-100 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
