"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="bg-[#F5EEE7] py-24 md:py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Decorative element */}
        <div className="flex justify-center mb-8 reveal">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="opacity-40">
            <path d="M20 2 L22 18 L38 20 L22 22 L20 38 L18 22 L2 20 L18 18 Z" fill="#A65A3A" />
          </svg>
        </div>

        <div className="flex items-center gap-4 justify-center mb-6 reveal">
          <div className="w-8 h-px bg-[#A65A3A]" />
          <span className="section-label">Comunidad</span>
          <div className="w-8 h-px bg-[#A65A3A]" />
        </div>

        <h2 className="section-title mb-4 reveal">
          Sé parte de la historia
        </h2>

        <p className="body-editorial opacity-70 mb-12 reveal">
          Accede a lanzamientos exclusivos, historias de artesanos y
          ediciones limitadas antes que nadie. Sin ruido. Solo lo que importa.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="reveal">
            <div className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto border-b border-[#A65A3A]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="input-editorial flex-1 border-none outline-none"
                required
              />
              <button
                type="submit"
                className="font-cinzel text-[0.65rem] tracking-[0.25em] uppercase text-[#A65A3A] hover:text-[#5C3A2E] transition-colors py-3 px-2 whitespace-nowrap"
              >
                Suscribirse →
              </button>
            </div>
            <p className="font-cormorant text-xs italic text-[#5C3A2E]/40 mt-4">
              Sin spam. Puedes salir cuando quieras.
            </p>
          </form>
        ) : (
          <div className="reveal">
            <div className="h-px w-10 bg-[#C6A56B] mx-auto mb-4" />
            <p className="font-cormorant text-xl italic text-[#A65A3A]">
              Bienvenida a la comunidad Ali Guane.
            </p>
            <p className="font-cinzel text-[0.6rem] tracking-[0.3em] uppercase text-[#5C3A2E]/50 mt-2">
              Recibirás noticias muy pronto.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
