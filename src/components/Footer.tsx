"use client";

export default function Footer() {
  const links = {
    Colección: ["Nueva temporada", "Accesorios", "Textiles", "Joyería", "Ediciones limitadas"],
    Marca: ["Nuestra historia", "Manifesto", "Artesanos", "Sostenibilidad", "Prensa"],
    Atelier: ["Personalización", "Pedidos corporativos", "Colaboraciones", "Cuidado de piezas"],
    Contacto: ["Bogotá, Colombia", "hola@aliguane.co", "+57 310 000 0000", "WhatsApp"],
  };

  return (
    <footer className="bg-[#1A1008] text-[#D8C3A5] pt-20 pb-10 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Top: Logo + Nav */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 pb-16 border-b border-[rgba(216,195,165,0.1)]">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-6">
              <p className="font-cinzel text-2xl text-[#F5EEE7] tracking-[0.2em] mb-1">Ali Guane</p>
              <p className="font-cormorant text-[0.6rem] tracking-[0.3em] uppercase text-[#A65A3A]">
                Colombia
              </p>
            </div>
            <p className="font-cormorant text-sm font-light italic text-[#D8C3A5]/60 leading-relaxed mb-6">
              Identidad cultural contemporánea.<br />
              Diseño con memoria.
            </p>
            {/* Social */}
            <div className="flex gap-4">
              {["IG", "TK", "PI"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="font-cinzel text-[0.55rem] tracking-[0.2em] text-[#D8C3A5]/40 hover:text-[#C6A56B] transition-colors border border-[rgba(216,195,165,0.2)] hover:border-[#C6A56B] w-8 h-8 flex items-center justify-center"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <p className="font-cinzel text-[0.6rem] tracking-[0.3em] uppercase text-[#F5EEE7] mb-5">
                {section}
              </p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-cormorant text-sm text-[#D8C3A5]/50 hover:text-[#D8C3A5] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <p className="font-cormorant text-xs italic text-[#D8C3A5]/30">
            © 2025 Ali Guane. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {["Privacidad", "Términos", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-cinzel text-[0.55rem] tracking-[0.2em] uppercase text-[#D8C3A5]/30 hover:text-[#D8C3A5]/70 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
