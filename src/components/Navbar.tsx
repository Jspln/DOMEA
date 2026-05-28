"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Comment ça marche", href: "#process" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Avis", href: "#avis" },
  { label: "FAQ", href: "#faq" },
  { label: "Partenaires", href: "#partenaires" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("accueil");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ids = navLinks
      .map((l) => l.href.replace("#", ""))
      .filter(Boolean);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-orange-100/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navigation principale">
        <div className="flex items-center justify-between h-24 lg:h-28">
          <a
            href="#accueil"
            aria-label="DOMEA - Accueil"
            className="shrink-0"
          >
            <Logo className="h-20 lg:h-24 w-auto" />
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const active = activeId === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    scrolled
                      ? active
                        ? "text-orange-600"
                        : "text-gray-600 hover:text-orange-600"
                      : active
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className={`absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full ${scrolled ? "bg-orange-500" : "bg-white"}`} />
                  )}
                </a>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.contact.phoneTel}`}
              className="inline-flex items-center gap-2 bg-[#E8705A] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#D4553F] transition-all active:scale-95"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Nous appeler
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 -mr-2 rounded-lg transition-colors ${scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-x-0 top-16 bottom-0 bg-white transition-all duration-300 ${
          open
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="px-4 py-6 flex flex-col gap-1">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-4 text-lg font-medium text-gray-800 hover:bg-orange-50 hover:text-orange-600 rounded-xl transition-colors border-b border-gray-50"
              style={{
                animation: open
                  ? `fadeInUp 0.3s ${i * 0.05}s ease-out both`
                  : undefined,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${siteConfig.contact.phoneTel}`}
            className="mt-4 flex items-center justify-center gap-2 bg-[#E8705A] text-white px-5 py-4 rounded-2xl text-base font-semibold"
          >
            <Phone className="w-5 h-5" aria-hidden="true" />
            Nous appeler — {siteConfig.contact.phone}
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}
