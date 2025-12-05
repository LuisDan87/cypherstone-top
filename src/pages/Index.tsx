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

  useEffect(() => {
    // === TITLE ===
    document.title = isSpanish
      ? "Cypherstone — Bitcoin, Crypto, DeFi y Web3 para Empresarios"
      : "Cypherstone — Bitcoin, Crypto, DeFi & Web3 Advisory";

    // === META DESCRIPTION ===
    const metaDescription =
      document.querySelector('meta[name="description"]') ||
      (() => {
        const meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
        return meta;
      })();
    metaDescription.setAttribute(
      "content",
      isSpanish
        ? "Asesoramiento exclusivo en Bitcoin, crypto, DeFi y Web3 para empresarios y profesionales en Argentina. Custodia segura, estrategias conservadoras y confidencialidad absoluta."
        : "Exclusive advisory in Bitcoin, crypto, DeFi and Web3 for entrepreneurs and professionals in Argentina. Secure custody, conservative strategies and absolute confidentiality."
    );

    // === FUNCIÓN PARA CREAR/REEMPLAZAR META TAGS ===
    const setMeta = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    // === OPEN GRAPH ===
    setMeta("og:title", "Cypherstone — Bitcoin & Web3 Advisory");
    setMeta("og:description", "Simple y seguro. Asesoramiento confidencial en Bitcoin, crypto, DeFi y Web3 para empresarios.");
    setMeta("og:type", "website");
    setMeta("og:url", "https://www.cypherstone.com.ar");
    setMeta("og:image", "https://www.cypherstone.com.ar/og-image.png");
    setMeta("og:image:width", "1200");
    setMeta("og:image:height", "630");
    setMeta("og:image:alt", "Cypherstone – Bitcoin & Web3: Simple y Seguro para Empresarios");

    // === TWITTER ===
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:image", "https://www.cypherstone.com.ar/og-image.png");

    // === SCHEMA JSON-LD (ORGANIZATION) ===
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Cypherstone",
      "url": "https://www.cypherstone.com.ar",
      "logo": "https://www.cypherstone.com.ar/og-image.png",
      "description": isSpanish
        ? "Asesoramiento exclusivo en Bitcoin, crypto, DeFi y Web3 para empresarios y profesionales en Argentina."
        : "Exclusive advisory in Bitcoin, crypto, DeFi and Web3 for entrepreneurs and professionals in Argentina.",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "info@cypherstone.com.ar",
        "contactType": "Customer Service",
        "areaServed": "AR",
        "availableLanguage": ["Spanish", "English"]
      },
      "sameAs": [
        "https://www.instagram.com/cypherstonebtc/",
        "https://www.linkedin.com/company/cypherstone",
        "https://wa.me/5491138113906"
      ]
    };

    // Eliminar schema anterior si existe
    document.querySelector('script[type="application/ld+json"]')?.remove();

    // Agregar nuevo schema
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

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