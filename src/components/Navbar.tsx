"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Colección", "Narrativa", "Cultura", "Atelier"];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[#F5EEE7]/95 backdrop-blur-md shadow-[0_1px_0_rgba(92,58,46,0.1)]"
            : "bg-transparent navbar-dark"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className={`navbar-logo flex flex-col items-start transition-all duration-500 ${scrolled ? "!text-[#5C3A2E]" : ""}`}>
            <span className="font-cinzel text-xl md:text-2xl font-semibold tracking-[0.2em] uppercase leading-none">
              Ali Guane
            </span>
            <span
              className={`text-[0.5rem] tracking-[0.35em] uppercase font-cormorant transition-colors duration-500 ${
                scrolled ? "text-[#A65A3A]" : "text-[#D8C3A5]"
              }`}
            >
              Colombia
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <li key={link}>
                <a href="#" className={`navbar-link ${scrolled ? "!text-[#5C3A2E]" : ""}`}>
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Right: CTA + Menu */}
          <div className="flex items-center gap-5">
            <a
              href="#"
              className={`hidden md:inline-block font-cinzel text-[0.62rem] tracking-[0.25em] uppercase transition-all duration-400 ${
                scrolled
                  ? "text-[#A65A3A] border-b border-[#A65A3A]"
                  : "text-[rgba(245,238,231,0.8)] border-b border-[rgba(245,238,231,0.3)]"
              } pb-0.5 hover:opacity-70`}
            >
              Explorar
            </a>

            {/* Mobile Burger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Abrir menú"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`block h-px w-6 transition-colors duration-500 ${
                    scrolled ? "bg-[#5C3A2E]" : "bg-[#F5EEE7]"
                  }`}
                />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu fixed inset-0 z-[100] bg-[#5C3A2E] flex flex-col justify-between p-10 ${
          menuOpen ? "open" : ""
        }`}
      >
        <div className="flex justify-between items-center">
          <span className="font-cinzel text-2xl tracking-[0.2em] text-[#F5EEE7]">Ali Guane</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-[#F5EEE7] text-2xl font-light p-2"
            aria-label="Cerrar menú"
          >
            ✕
          </button>
        </div>

        <ul className="flex flex-col gap-8 mt-16">
          {links.map((link, i) => (
            <li
              key={link}
              style={{ transitionDelay: `${i * 80}ms` }}
              className={`overflow-hidden ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} transition-all duration-500`}
            >
              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="font-cinzel text-4xl font-light tracking-[0.1em] text-[#F5EEE7] hover:text-[#D8C3A5] transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="border-t border-[rgba(245,238,231,0.15)] pt-6">
          <p className="font-cormorant text-sm italic text-[#D8C3A5] tracking-wide">
            Donde la tradición se convierte en expresión.
          </p>
        </div>
      </div>
    </>
  );
}
