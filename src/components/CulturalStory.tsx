"use client";

import { useEffect, useRef, useState } from "react";

export default function CulturalStory() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const relative = window.scrollY - sectionTop;
        setOffset(relative * 0.2);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pillars = [
    {
      icon: "◈",
      title: "Origen",
      desc: "Trabajamos directamente con comunidades artesanas de Boyacá, el Cauca y la Costa Pacífica.",
    },
    {
      icon: "◇",
      title: "Proceso",
      desc: "Cada pieza demora semanas. El tiempo es parte del diseño. La prisa no existe aquí.",
    },
    {
      icon: "◉",
      title: "Propósito",
      desc: "Reinvertimos en formación artesanal y documentación de técnicas ancestrales en riesgo.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="cultura"
      className="relative py-0 overflow-hidden"
    >
      {/* Full bleed image */}
      <div className="relative h-[60vh] md:h-[80vh] parallax-container">
        <div
          className="absolute inset-0 scale-110"
          style={{ transform: `translateY(${offset}px) scale(1.12)` }}
        >
          <img
            src="https://images.unsplash.com/photo-1604871000636-074fa5117945?w=1600&q=85&auto=format&fit=crop&crop=center"
            alt="Manos artesanas colombianas"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 overlay-dark" />

        {/* Centered text on image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="section-label text-[#D8C3A5] mb-6 reveal">Identidad Cultural</p>
          <h2
            className="font-cinzel text-4xl md:text-6xl lg:text-7xl font-light text-[#F5EEE7] tracking-[0.08em] leading-tight mb-6 reveal"
          >
            Hecho a mano.
            <br />
            <em className="font-cormorant italic font-light accent-gold">
              Pensado con el alma.
            </em>
          </h2>
          <div className="h-px w-16 bg-[#D8C3A5]/60 mb-6 reveal" />
          <p className="font-cormorant text-lg md:text-xl text-[#D8C3A5] max-w-xl font-light italic reveal">
            La hormiga construye sin prisa, pero sin pausa. Así hacemos cada pieza.
          </p>
        </div>
      </div>

      {/* Three Pillars */}
      <div className="bg-[#5C3A2E] py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 md:gap-16">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="reveal text-center md:text-left"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <span className="font-cinzel text-2xl text-[#C6A56B] block mb-4">
                {pillar.icon}
              </span>
              <h3 className="font-cinzel text-lg tracking-[0.15em] uppercase text-[#F5EEE7] mb-3">
                {pillar.title}
              </h3>
              <div className="w-8 h-px bg-[#A65A3A] mb-4 mx-auto md:mx-0" />
              <p className="font-cormorant text-base md:text-lg text-[#D8C3A5] font-light leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
