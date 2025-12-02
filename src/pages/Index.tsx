import { MeshBackground } from "@/components/MeshBackground";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PillarsSection } from "@/components/PillarsSection";
import { OurServicesSection } from "@/components/OurServicesSection";
import { PartnersSection } from "@/components/PartnersSection";
import { ResourcesSection } from "@/components/ResourcesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const { lang, toggleLang } = LanguageSwitcher();

  return (
    <div className="relative min-h-screen bg-black text-white">
      <MeshBackground />
      
      <div className="relative z-10">
        <Header lang={lang} onToggleLang={toggleLang} />

        <HeroSection lang={lang} />
        <ServicesSection lang={lang} />
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
