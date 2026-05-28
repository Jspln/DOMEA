import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import Logo from "./Logo";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services";

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-[#E8705A]/40 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand - 4 cols */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Logo className="h-28 w-auto" />
            <p className="mt-5 text-sm text-gray-400 leading-relaxed max-w-xs">
              Services à domicile de qualité à {siteConfig.contact.address.city}.
              Entretien, ménage, blanchisserie et organisation. Crédit
              d&apos;impôt avec avance immédiate URSSAF.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#E8705A] text-gray-400 hover:text-white flex items-center justify-center transition-all"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#E8705A] text-gray-400 hover:text-white flex items-center justify-center transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <FooterColumn title="Services">
            {services.map((s) => (
              <FooterLink key={s.id} href={`#services`}>
                {s.title}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Informations">
            <FooterLink href="#credit-impot">Crédit d&apos;impôt</FooterLink>
            <FooterLink href="#process">Comment ça marche</FooterLink>
            <FooterLink href="#tarifs">Tarifs</FooterLink>
            <FooterLink href="#avis">Avis clients</FooterLink>
            <FooterLink href="#faq">FAQ</FooterLink>
            <FooterLink href="#contact">Devis gratuit</FooterLink>
          </FooterColumn>

          <FooterColumn title="Contact">
            <li className="flex items-start gap-2 text-sm">
              <MapPin className="w-4 h-4 text-[#E8705A] mt-0.5 shrink-0" />
              <span>
                {siteConfig.contact.address.city} (
                {siteConfig.contact.address.postalCode}),{" "}
                {siteConfig.contact.address.region}
              </span>
            </li>
            <li>
              <a
                href={`tel:${siteConfig.contact.phoneTel}`}
                className="flex items-start gap-2 text-sm hover:text-[#E8705A] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#E8705A] mt-0.5 shrink-0" />
                <span>{siteConfig.contact.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-start gap-2 text-sm hover:text-[#E8705A] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#E8705A] mt-0.5 shrink-0" />
                <span className="min-w-0">{siteConfig.contact.email}</span>
              </a>
            </li>
          </FooterColumn>
        </div>

        {/* Zones d'intervention */}
        <div className="pt-8 border-t border-white/5">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
            Zones d&apos;intervention
          </p>
          <div className="flex flex-wrap gap-2">
            {siteConfig.contact.serviceArea.map((city) => (
              <span
                key={city}
                className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5"
              >
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-center md:text-left">
            <p>
              &copy; {new Date().getFullYear()} {siteConfig.legal.company}.
              Tous droits réservés.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <Link
              href="/mentions-legales"
              className="hover:text-[#E8705A] transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="hover:text-[#E8705A] transition-colors"
            >
              Confidentialité
            </Link>
            <p>
              Conçu par{" "}
              <a
                href={siteConfig.legal.creator.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E8705A] hover:text-[#C9923A] font-medium transition-colors"
              >
                {siteConfig.legal.creator.name}
              </a>
            </p>
            <Link
              href="/admin"
              className="opacity-20 hover:opacity-60 transition-opacity text-gray-500"
              aria-label="Espace administration"
            >
              ·
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="lg:col-span-2">
      <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
        {title}
      </h3>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        className="text-sm text-gray-400 hover:text-[#E8705A] transition-colors"
      >
        {children}
      </a>
    </li>
  );
}
