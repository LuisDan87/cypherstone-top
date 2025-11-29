import { MeshBackground } from "@/components/MeshBackground";
import { LanguageSwitcher, LanguageToggle } from "@/components/LanguageSwitcher";
import { HeroSection } from "@/components/HeroSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { PillarsSection } from "@/components/PillarsSection";
import { PartnersSection } from "@/components/PartnersSection";
import { ResourcesSection } from "@/components/ResourcesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const { lang, toggleLang } = LanguageSwitcher();

  return (
    <div className="relative min-h-screen bg-black text-white">
      <MeshBackground />
      
      <LanguageToggle lang={lang} onToggle={toggleLang} />

      <HeroSection lang={lang} />
      <PhilosophySection lang={lang} />
      <PillarsSection lang={lang} />
      <PartnersSection lang={lang} />
      <ResourcesSection lang={lang} />
      <ContactSection lang={lang} />
      <Footer lang={lang} />
    </div>
  );
};

export default Index;
