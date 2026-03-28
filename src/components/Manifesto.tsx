"use client";

export default function Manifesto() {
  return (
    <section id="narrativa" className="bg-[#F5EEE7] py-28 md:py-40 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-4 mb-12 reveal">
          <div className="w-8 h-px bg-[#A65A3A]" />
          <span className="section-label">Manifiesto</span>
        </div>

        {/* Quote */}
        <blockquote className="reveal mb-16">
          <p className="quote-editorial leading-loose">
            &ldquo;No somos una reliquia del pasado.
            <br />
            Somos el presente que conoce su historia.&rdquo;
          </p>
        </blockquote>

        {/* Body */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <div className="reveal-left">
            <p className="body-editorial mb-6">
              Ali Guane nace de un deseo profundo: demostrar que la identidad cultural no es
              un límite, sino la mayor fuente de innovación. Cada pieza que diseñamos
              es un diálogo entre el pasado que nos define y el futuro que construimos.
            </p>
            <p className="body-editorial opacity-75">
              Nuestros materiales hablan de la tierra. Nuestra estética, de una generación
              que ha aprendido a mirar con nuevos ojos lo que siempre estuvo ahí.
            </p>
          </div>

          <div className="reveal-right flex flex-col justify-between">
            <div>
              <div className="divider divider-left mb-6" />
              <p className="body-editorial italic text-[#A65A3A] mb-8">
                Diseñado en Colombia. Pensado para el mundo.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { num: "12", label: "Artesanos colaboradores" },
                { num: "3", label: "Regiones de origen" },
                { num: "100%", label: "Materiales naturales" },
                { num: "∞", label: "Historias por contar" },
              ].map(({ num, label }) => (
                <div key={label} className="border-t border-[#D8C3A5] pt-4">
                  <p className="font-cinzel text-2xl md:text-3xl font-light text-[#A65A3A] mb-1">
                    {num}
                  </p>
                  <p className="font-cormorant text-sm tracking-wide text-[#5C3A2E] opacity-70">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom cta */}
        <div className="mt-16 reveal">
          <a href="#" className="btn-outline">
            Conocer la Historia
          </a>
        </div>
      </div>
    </section>
  );
}
