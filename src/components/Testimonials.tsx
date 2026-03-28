"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "Raíz me devolvió el orgullo de cargar algo que tiene historia. No es un objeto, es un argumento cultural.",
    name: "Valentina Ospina",
    role: "Directora Creativa, Bogotá",
  },
  {
    quote:
      "La primera vez que vi la colección supe que era diferente. No hay nada que se sienta así en el mercado colombiano.",
    name: "Santiago Morales",
    role: "Fotógrafo de Moda, Medellín",
  },
  {
    quote:
      "Lo que me conquista de Raíz es la honestidad. No venden nostalgia. Venden identidad con criterio.",
    name: "Laura Echeverri",
    role: "Periodista Cultural, Cali",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#5C3A2E] py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-4 mb-16 reveal justify-center">
          <div className="w-8 h-px bg-[#C6A56B]" />
          <span className="font-cinzel text-[0.65rem] tracking-[0.3em] uppercase text-[#C6A56B]">
            Voces
          </span>
          <div className="w-8 h-px bg-[#C6A56B]" />
        </div>

        {/* Active Quote */}
        <div className="text-center mb-12 reveal">
          <p className="font-cinzel text-2xl md:text-4xl">
            &ldquo;
          </p>
          <blockquote className="font-cormorant text-2xl md:text-3xl font-light italic text-[#F5EEE7] leading-relaxed mb-8 transition-all duration-500">
            {testimonials[active].quote}
          </blockquote>
          <div className="h-px w-10 bg-[#C6A56B] mx-auto mb-5" />
          <p className="font-cinzel text-sm tracking-[0.2em] text-[#D8C3A5]">
            {testimonials[active].name}
          </p>
          <p className="font-cormorant text-sm italic text-[#D8C3A5]/50 mt-1">
            {testimonials[active].role}
          </p>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 reveal">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-400 rounded-full ${
                i === active
                  ? "w-6 h-1.5 bg-[#C6A56B]"
                  : "w-1.5 h-1.5 bg-[rgba(245,238,231,0.3)] hover:bg-[rgba(245,238,231,0.6)]"
              }`}
              aria-label={`Testimonio ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
