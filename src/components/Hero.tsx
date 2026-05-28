"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFaded, setVideoFaded] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoFaded(false);
          setReady(false);
          video.currentTime = 0;
          video.play();
          requestAnimationFrame(() => {
            requestAnimationFrame(() => setReady(true));
          });
        }
      },
      { threshold: 0.4 },
    );

    const handleEnded = () => setVideoFaded(true);
    video.addEventListener("ended", handleEnded);
    observer.observe(section);

    return () => {
      observer.disconnect();
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Vidéo de fond */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: videoFaded ? 0.3 : 1,
          transition: "opacity 2s ease",
        }}
        src="/video-hero-domea.mp4"
        muted
        playsInline
        aria-hidden="true"
      />

      {/* Overlay sombre permanent */}
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/30" aria-hidden="true" />

      {/* Contenu avec animations staggerées */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 w-full text-center">

        {/* Badge tagline */}
        <span
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-8"
          style={{
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#E8705A] opacity-75 anim-pulse-dot" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E8705A]" />
          </span>
          {siteConfig.tagline} · {siteConfig.contact.address.city}
        </span>

        {/* Titre */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.08] tracking-tight"
          style={{
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.8s ease 0.35s, transform 0.8s ease 0.35s",
          }}
        >
          Votre intérieur,{" "}
          <span className="text-[#E8705A]">notre métier</span>
        </h1>

        {/* Sous-titre */}
        <p
          className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed"
          style={{
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s",
          }}
        >
          Ménage, blanchisserie, jardinage — une équipe locale à Callian.
          <br className="hidden sm:block" />
          Et <strong className="text-[#E8705A] font-bold">-50 %</strong> grâce
          au crédit d&apos;impôt immédiat.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          style={{
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.85s, transform 0.7s ease 0.85s",
          }}
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 bg-[#E8705A] text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-[#D4553F] transition-all hover:shadow-xl hover:shadow-orange-900/30 active:scale-95"
          >
            Devis gratuit
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#credit-impot"
            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/20 transition-all"
          >
            <ShieldCheck className="w-5 h-5" />
            Comment ça marche ?
          </a>
        </div>

        {/* Trust indicators */}
        <div
          className="mt-14 flex flex-wrap justify-center gap-8 sm:gap-12"
          style={{
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease 1.1s, transform 0.7s ease 1.1s",
          }}
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-0.5 text-amber-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xl font-extrabold text-white">4,9/5</p>
            <p className="text-xs text-white/60">Avis clients</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-extrabold text-white">
              150<span className="text-[#E8705A]">+</span>
            </p>
            <p className="text-xs text-white/60">Foyers servis</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-extrabold text-white">
              -50<span className="text-[#E8705A]">%</span>
            </p>
            <p className="text-xs text-white/60">Crédit d&apos;impôt</p>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-10"
        style={{
          opacity: ready ? 0.7 : 0,
          transition: "opacity 0.7s ease 1.4s",
        }}
      >
        <span className="text-xs font-medium text-white/60 uppercase tracking-wider">
          Découvrir
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-white/40 flex justify-center pt-1.5">
          <span className="w-1 h-1.5 bg-white/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
