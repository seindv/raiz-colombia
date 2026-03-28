"use client";

export default function Editorial() {
  const editorials = [
    {
      category: "Tejido & Territorio",
      title: "El hilo que une dos mundos",
      excerpt:
        "Una exploración sobre cómo el telar de cintura de las mujeres Nasa se convirtió en el lenguaje visual de nuestra nueva colección.",
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&auto=format&fit=crop&crop=top",
      date: "Marzo 2025",
      large: true,
    },
    {
      category: "Diseño",
      title: "Geometría sagrada en contexto contemporáneo",
      excerpt: "Los símbolos que guiaron a nuestros ancestros, reinterpretados.",
      img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=700&q=80&auto=format&fit=crop&crop=center",
      date: "Febrero 2025",
      large: false,
    },
    {
      category: "Comunidad",
      title: "Las manos que hacen posible Raíz",
      excerpt: "Retratos y conversaciones con los artesanos que colaboran con la marca.",
      img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=700&q=80&auto=format&fit=crop&crop=top",
      date: "Enero 2025",
      large: false,
    },
  ];

  return (
    <section className="bg-[#F5EEE7] py-24 md:py-36 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-14">
          <div className="w-8 h-px bg-[#A65A3A]" />
          <span className="section-label reveal">Editorial</span>
          <div className="flex-1 h-px bg-[#D8C3A5] reveal" />
        </div>

        <h2 className="section-title mb-16 reveal">
          Historias que<br />
          <em className="font-cormorant italic font-light">merecen ser contadas</em>
        </h2>

        {/* Editorial Grid */}
        <div className="grid md:grid-cols-5 gap-6 md:gap-10">
          {/* Large Feature */}
          <div className="md:col-span-3 reveal-left group cursor-pointer">
            <div className="img-hover aspect-[4/3] mb-6 overflow-hidden">
              <img
                src={editorials[0].img}
                alt={editorials[0].title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <span className="section-label">{editorials[0].category}</span>
            <h3 className="font-cinzel text-2xl md:text-3xl font-light tracking-wide text-[#5C3A2E] mt-3 mb-3 leading-snug group-hover:text-[#A65A3A] transition-colors">
              {editorials[0].title}
            </h3>
            <p className="body-editorial opacity-70 mb-4 max-w-xl">
              {editorials[0].excerpt}
            </p>
            <div className="flex items-center gap-3">
              <span className="font-cormorant text-sm italic text-[#A65A3A]">{editorials[0].date}</span>
              <div className="w-6 h-px bg-[#A65A3A]" />
              <span className="font-cinzel text-[0.6rem] tracking-[0.25em] uppercase text-[#5C3A2E] opacity-50 group-hover:opacity-100 transition-opacity">
                Leer →
              </span>
            </div>
          </div>

          {/* Small Articles */}
          <div className="md:col-span-2 flex flex-col gap-8">
            {editorials.slice(1).map((article, i) => (
              <div
                key={article.title}
                className="reveal-right group cursor-pointer flex gap-5"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="img-hover w-28 md:w-36 flex-shrink-0 aspect-[2/3] overflow-hidden">
                  <img
                    src={article.img}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="section-label mb-2">{article.category}</span>
                  <h3 className="font-cinzel text-base md:text-lg font-light tracking-wide text-[#5C3A2E] mb-2 leading-snug group-hover:text-[#A65A3A] transition-colors">
                    {article.title}
                  </h3>
                  <p className="font-cormorant text-sm text-[#5C3A2E] opacity-60 line-clamp-2 mb-2">
                    {article.excerpt}
                  </p>
                  <span className="font-cormorant text-xs italic text-[#A65A3A]">{article.date}</span>
                </div>
              </div>
            ))}

            <div className="reveal pt-4 border-t border-[#D8C3A5]">
              <a href="#" className="font-cinzel text-[0.62rem] tracking-[0.25em] uppercase text-[#5C3A2E] hover:text-[#A65A3A] transition-colors border-b border-current pb-0.5">
                Ver todos los artículos →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
