"use client";

import { useEffect } from "react";

/**
 * Active la classe `.is-visible` sur tous les éléments `.reveal`
 * dès qu'ils entrent dans le viewport. Permet des animations
 * douces, sobres et performantes (CSS pur derrière).
 */
export default function ScrollAnimator() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const supportsIO = "IntersectionObserver" in window;
    const elements = document.querySelectorAll<HTMLElement>(".reveal");

    if (!supportsIO) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
