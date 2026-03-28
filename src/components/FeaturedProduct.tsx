"use client";

import { useEffect, useRef, useState } from "react";

export default function FeaturedProduct() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const relative = window.scrollY - sectionTop;
        setOffset(relative * 0.15);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#E9DED3] py-24 md:py-0 overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 min-h-[70vh]">
        {/* Image */}
        <div className="relative overflow-hidden h-72 md:h-auto">
          <div
            className="absolute inset-0 scale-110"
            style={{ transform: `translateY(${offset}px) scale(1.12)` }}
          >
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1000&q=85&auto=format&fit=crop&crop=center"
              alt="Pieza destacada Ali Guane"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 md:py-20">
          <div className="flex items-center gap-4 mb-8 reveal">
            <div className="w-8 h-px bg-[#A65A3A]" />
            <span className="section-label">Pieza del Mes</span>
          </div>

          <p className="font-cinzel text-[0.65rem] tracking-[0.3em] uppercase text-[#C6A56B] mb-3 reveal">
            — Edición Especial
          </p>

          <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-light tracking-wider text-[#5C3A2E] leading-tight mb-6 reveal">
            Mochila
            <br />
            <em className="font-cormorant italic font-light">Wayúu Contemporánea</em>
          </h2>

          <div className="divider divider-left mb-6 reveal" />

          <p className="body-editorial mb-6 reveal opacity-80">
            Tejida a mano por mujeres artesanas de La Guajira, cada mochila
            tarda hasta tres semanas en completarse. Los patrones geométricos
            narran historias de clanes, sueños y territorio.
          </p>

          <p className="body-editorial mb-10 reveal opacity-60 text-sm">
            Esta edición especial reinterpreta los patrones tradicionales con
            una paleta cromática reducida a tonos tierra, diálogo visual entre
            la artesana y el diseñador contemporáneo.
          </p>

          <div className="flex items-center gap-6 mb-10 reveal">
            <span className="font-cinzel text-3xl font-light text-[#A65A3A]">$890.000</span>
            <span className="font-cormorant text-sm italic text-[#5C3A2E]/50">
              Incluye certificado de origen
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 reveal">
            <a href="#" className="btn-primary">Adquirir Pieza</a>
            <a href="#" className="btn-outline">Ver Detalles</a>
          </div>
        </div>
      </div>
    </section>
  );
}
