"use client";

const products = [
  {
    id: 1,
    name: "Tejo Dorado",
    category: "Accesorio Ritual",
    price: "$380.000",
    img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80&auto=format&fit=crop&crop=top",
    tag: "Edición Limitada",
  },
  {
    id: 2,
    name: "Arcilla Viva",
    category: "Joyería de Tierra",
    price: "$260.000",
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80&auto=format&fit=crop&crop=center",
    tag: null,
  },
  {
    id: 3,
    name: "Selva Interior",
    category: "Textil Contemporáneo",
    price: "$520.000",
    img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80&auto=format&fit=crop&crop=top",
    tag: "Nuevo",
  },
  {
    id: 4,
    name: "Río de Sombra",
    category: "Bolso Artesanal",
    price: "$680.000",
    img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80&auto=format&fit=crop&crop=center",
    tag: null,
  },
];

export default function Collections() {
  return (
    <section id="coleccion" className="bg-[#E9DED3] py-24 md:py-36 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4 reveal">
              <div className="w-8 h-px bg-[#A65A3A]" />
              <span className="section-label">Colección 2025</span>
            </div>
            <h2 className="section-title reveal">
              Objetos con<br />
              <em className="font-cormorant font-light not-italic" style={{ fontStyle: "italic" }}>
                memoria propia
              </em>
            </h2>
          </div>
          <div className="reveal-right">
            <p className="body-editorial max-w-xs opacity-75">
              Cada objeto nace de un proceso consciente, lento y cultural. No son productos,
              son declaraciones.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, i) => (
            <div
              key={product.id}
              className="card-product reveal group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="img-hover relative aspect-[3/4] mb-5 bg-[#D8C3A5]">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Tag */}
                {product.tag && (
                  <span className="absolute top-4 left-4 font-cinzel text-[0.55rem] tracking-[0.25em] uppercase text-[#F5EEE7] bg-[#A65A3A] px-3 py-1.5">
                    {product.tag}
                  </span>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#5C3A2E]/0 group-hover:bg-[#5C3A2E]/20 transition-all duration-500 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
                  <span className="btn-ghost text-xs py-2 px-4">Ver Pieza</span>
                </div>
              </div>

              {/* Info */}
              <div>
                <p className="section-label mb-1">{product.category}</p>
                <h3 className="font-cinzel text-base md:text-lg font-light tracking-wide text-[#5C3A2E] mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="font-cormorant text-[#A65A3A] text-lg font-medium">
                    {product.price}
                  </span>
                  <button className="font-cinzel text-[0.55rem] tracking-[0.2em] uppercase text-[#5C3A2E] opacity-50 hover:opacity-100 transition-opacity border-b border-[#5C3A2E]/30 hover:border-[#A65A3A] pb-0.5">
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-16 reveal">
          <a href="#" className="btn-outline">
            Ver Colección Completa
          </a>
        </div>
      </div>
    </section>
  );
}
