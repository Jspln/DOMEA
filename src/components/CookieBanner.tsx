"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "domea_cookies_consent_v1";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        const t = window.setTimeout(() => setVisible(true), 1200);
        return () => window.clearTimeout(t);
      }
    } catch {
      // localStorage indisponible — on n'affiche rien plutôt que de saturer
    }
  }, []);

  const close = (value: "accepted" | "declined") => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Bandeau de consentement aux cookies"
      className="fixed bottom-4 inset-x-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-50 animate-[slideUp_0.4s_ease-out]"
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-5">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
            <Cookie className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 text-sm">
              Un peu de transparence
            </h3>
            <p className="mt-1 text-xs text-gray-600 leading-relaxed">
              Ce site n&apos;utilise que des cookies strictement nécessaires
              à son fonctionnement. Aucun pistage publicitaire, aucune
              donnée revendue.
            </p>
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={() => close("accepted")}
                className="flex-1 bg-teal-600 text-white text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-teal-700 transition-colors"
              >
                J&apos;ai compris
              </button>
              <Link
                href="/politique-confidentialite"
                className="flex-1 text-center text-teal-700 text-xs font-semibold px-4 py-2.5 rounded-lg border border-teal-200 hover:bg-teal-50 transition-colors"
              >
                En savoir plus
              </Link>
            </div>
          </div>
          <button
            type="button"
            onClick={() => close("declined")}
            aria-label="Fermer le bandeau"
            className="p-1 text-gray-400 hover:text-gray-700"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
