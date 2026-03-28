"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${scrollY * 0.35}px)` }}
      >
        <img
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1800&q=85&auto=format&fit=crop"
          alt="Identidad cultural colombiana"
          className="w-full h-full object-cover object-center scale-110"
          loading="eager"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 overlay-dark" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(92,58,46,0.45) 0%, rgba(26,16,8,0.3) 50%, rgba(166,90,58,0.2) 100%)",
        }}
      />

      {/* Decorative top border */}
      <div
        className={`absolute top-0 left-0 right-0 h-px bg-[rgba(245,238,231,0.15)] transition-all duration-1500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Pre-title */}
        <p
          className={`hero-subtitle mb-6 transition-all duration-1000 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Colombia · Diseño Cultural
        </p>

        {/* Decorative line */}
        <div
          className={`h-px bg-gradient-to-r from-transparent via-[#D8C3A5] to-transparent mx-auto mb-8 transition-all duration-1200 delay-500 ${
            loaded ? "opacity-100 w-32" : "opacity-0 w-0"
          }`}
        />

        {/* Main Title */}
        <h1
          className={`hero-title mb-6 transition-all duration-1200 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Raíz
        </h1>

        {/* Tagline */}
        <p
          className={`font-cormorant text-xl md:text-2xl lg:text-3xl font-light italic text-[#D8C3A5] mb-12 leading-relaxed transition-all duration-1200 delay-900 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Donde la tradición se convierte en expresión.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1200 delay-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a href="#coleccion" className="btn-primary">
            Descubrir Colección
          </a>
          <a href="#narrativa" className="btn-ghost">
            Nuestra Historia
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-1000 delay-1200 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="font-cinzel text-[0.55rem] tracking-[0.35em] uppercase text-[rgba(216,195,165,0.7)]">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[rgba(216,195,165,0.6)] to-transparent" />
      </div>

      {/* Corner decoration */}
      <div className="absolute bottom-10 right-10 hidden md:flex items-center gap-3 opacity-40">
        <span className="font-cinzel text-[0.55rem] tracking-[0.3em] uppercase text-[#D8C3A5]">
          Colección 2025
        </span>
        <div className="w-8 h-px bg-[#D8C3A5]" />
      </div>
    </section>
  );
}
