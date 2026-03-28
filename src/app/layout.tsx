import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Raíz — Identidad Cultural Contemporánea",
  description:
    "Marca de diseño cultural con raíces profundas y mirada contemporánea. Donde la tradición se convierte en expresión.",
  keywords: "diseño cultural, identidad, artesanía contemporánea, Colombia, tradición",
  openGraph: {
    title: "Raíz — Identidad Cultural Contemporánea",
    description: "Donde la tradición se convierte en expresión.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cinzel.variable} ${cormorant.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
