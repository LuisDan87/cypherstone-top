import { useEffect } from "react";
import { MeshBackground } from "@/components/MeshBackground";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { PillarsSection } from "@/components/PillarsSection";
import { OurServicesSection } from "@/components/OurServicesSection";
import { PartnersSection } from "@/components/PartnersSection";
import { ResourcesSection } from "@/components/ResourcesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const { lang, toggleLang } = LanguageSwitcher();
  const isSpanish = lang === "es";

  // SEO PERFECTO sin errores de TypeScript/React
  useEffect(() => {
    // Title
    document.title = isSpanish
      ? "Cypherstone — Bitcoin, Crypto, DeFi y Web3 para Empresarios"
      : "Cypherstone — Bitcoin, Crypto, DeFi & Web3 Advisory";

    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]') || 
      (() => {
        const meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
        return meta;
      })();
    metaDescription.setAttribute("content", isSpanish
      ? "Asesoramiento exclusivo en Bitcoin, crypto, DeFi y Web3 para empresarios y profesionales en Argentina. Custodia segura, estrategias conservadoras y confidencialidad absoluta."
      : "Exclusive advisory in Bitcoin, crypto, DeFi and Web3 for entrepreneurs and professionals in Argentina. Secure custody, conservative strategies and absolute confidentiality."
    );

    // Open Graph
    const setMeta = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta("og:title", "Cypherstone — Bitcoin & Web3 Advisory");
    setMeta("og:description", "Simple y seguro. Asesoramiento confidencial en Bitcoin, crypto y Web3 para empresarios.");
    setMeta("og:type", "website");
    setMeta("og:url", "https://www.cypherstone.com.ar");
    setMeta("og:image", "https://www.cypherstone.com.ar/og-image.jpg");

    // Twitter
    setMeta("twitter:card", "summary_large_image");

  }, [isSpanish]);

  return (
    <div className="relative min-h-screen bg-black text-white">
      <MeshBackground />

      <div className="relative z-10">
        <Header lang={lang} onToggleLang={toggleLang} />

        <HeroSection lang={lang} />
        <PhilosophySection lang={lang} />
        <PillarsSection lang={lang} />
        <OurServicesSection lang={lang} />
        <PartnersSection lang={lang} />
        <ResourcesSection lang={lang} />
        <ContactSection lang={lang} />
        <Footer lang={lang} />
      </div>
    </div>
  );
};

export default Index;