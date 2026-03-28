import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Collections from "@/components/Collections";
import CulturalStory from "@/components/CulturalStory";
import FeaturedProduct from "@/components/FeaturedProduct";
import Editorial from "@/components/Editorial";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Collections />
        <CulturalStory />
        <FeaturedProduct />
        <Editorial />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
