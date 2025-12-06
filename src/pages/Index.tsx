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
    // TITLE + META DESCRIPTION
    document.title = isSpanish
      ? "Cypherstone — Bitcoin, Crypto, DeFi y Web3 para Empresarios"
      : "Cypherstone — Bitcoin, Crypto, DeFi & Web3 Advisory";

    const setMetaContent = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    setMetaContent("description", isSpanish
      ? "Asesoramiento exclusivo en Bitcoin, crypto, DeFi y Web3 para empresarios y profesionales en Argentina. Custodia segura, estrategias conservadoras y confidencialidad absoluta."
      : "Exclusive advisory in Bitcoin, crypto, DeFi and Web3 for entrepreneurs and professionals in Argentina. Secure custody, conservative strategies and absolute confidentiality."
    );

    // OPEN GRAPH + TWITTER
    const setOG = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setOG("og:title", "Cypherstone — Bitcoin & Web3 Advisory");
    setOG("og:description", "Simple y seguro. Asesoramiento confidencial en Bitcoin, crypto, DeFi y Web3 para empresarios.");
    setOG("og:type", "website");
    setOG("og:url", "https://www.cypherstone.com.ar");
    setOG("og:image", "https://www.cypherstone.com.ar/og-image.png");
    setOG("og:image:width", "1200");
    setOG("og:image:height", "630");
    setOG("og:image:alt", "Cypherstone – Bitcoin & Web3: Simple y Seguro para Empresarios");

    setOG("twitter:card", "summary_large_image");

    // SCHEMA JSON-LD (esto es la joya)
    const schema = {
      "@context": "https://schema.org",
      "@type": "FinancialService",
      "name": "Cypherstone",
      "url": "https://www.cypherstone.com.ar",
      "logo": "https://www.cypherstone.com.ar/og-image.png",
      "image": "https://www.cypherstone.com.ar/og-image.png",
      "description": isSpanish
        ? "Asesoramiento confidencial en Bitcoin, DeFi y Web3 para empresarios y profesionales en Argentina."
        : "Confidential advisory in Bitcoin, DeFi and Web3 for entrepreneurs and professionals in Argentina.",
      "telephone": "+5491138113906",
      "email": "info@cypherstone.com.ar",
      "address": { "@type": "PostalAddress", "addressCountry": "AR" },
      "areaServed": "AR",
      "sameAs": [
        "https://www.instagram.com/cypherstonebtc/",
        "https://www.linkedin.com/company/cypherstone",
        "https://wa.me/5491138113906"
      ]
    };

    document.querySelector('script[type="application/ld+json"]')?.remove();
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