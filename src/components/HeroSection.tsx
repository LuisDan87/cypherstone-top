import { Lock } from "lucide-react";
import logoImage from "@/assets/cypherstone-logo.png";

type Language = "es" | "en";

const content = {
  es: {
    headline: "Asesoría en Bitcoin, cryptomonedas y finanzas descentralizadas",
    cta: "Agendar consulta confidencial",
    credibility: "14 años de experiencia en Bitcoin y criptomonedas",
  },
  en: {
    headline: "Bitcoin, Crypto & Decentralized Finance Advisory",
    cta: "Schedule confidential consultation",
    credibility: "14 years in Bitcoin and digital assets",
  },
};

export function HeroSection({ lang }: { lang: Language }) {
  const text = content[lang];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-16 md:py-0 overflow-hidden">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-transparent" />

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-magenta-500/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
        {/* LOGO MÁS GRANDE + SIN ESTIRAR → versión definitiva */}
        <div className="mb-8 md:mb-16 animate-fade-in">
          <img
            src={logoImage}
            alt="CYPHERSTONE"
            className="w-auto h-40 sm:h-48 md:h-64 lg:h-80 xl:h-96 2xl:h-[520px] max-w-none mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Headline (tu tamaño reducido que te gustaba) */}
        <h1
          style={{ animationDelay: "0.2s" }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white animate-fade-in"
        >
          {text.headline}
        </h1>

        {/* Credibility Statement */}
        <p
          style={{ letterSpacing: "1.5px", animationDelay: "0.4s" }}
          className="italic font-normal text-center text-muted-foreground animate-fade-in text-lg"
        >
          {text.credibility}
        </p>

        {/* CTA Button */}
        <div className="pt-4 md:pt-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <button
            onClick={scrollToContact}
            className="glass-button px-6 sm:px-10 md:px-12 py-4 md:py-5 text-base md:text-lg font-semibold inline-flex items-center gap-2 md:gap-3 group"
          >
            <Lock className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform duration-300" />
            {text.cta}
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-cyan-400 rounded-full" />
        </div>
      </div>

      {/* Section separator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
    </section>
  );
}