import { Lock } from "lucide-react";
import logoImage from "@/assets/cypherstone-logo.png";
type Language = "es" | "en";
const content = {
  es: {
    headline: "Asesoría privada en Bitcoin, cryptomonedas y finanzas descentralizadas",
    subheadline: "Acompañamos a empresarios, profesionales e inversores en la adopción segura  de Bitcoin, cryptomonedas y finanzas descentralizadas, con absoluta discreción y profesionalismo",
    cta: "Solicitar contacto privado"
  },
  en: {
    headline: "Bitcoin, Crypto & Decentralized Finance Advisory",
    subheadline: "We guide entrepreneurs, professionals and investors in the secure and profitable adoption of Bitcoin, Cryptocurrency and DeFi, with absolute discretion and institutional methodology.",
    cta: "Request private contact"
  }
};
export function HeroSection({
  lang
}: {
  lang: Language;
}) {
  const text = content[lang];
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-transparent" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-magenta-500/5 rounded-full blur-3xl animate-float" style={{
      animationDelay: "2s"
    }} />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Logo */}
        <div className="mb-16 animate-fade-in">
          <img src={logoImage} alt="CYPHERSTONE" className="h-20 md:h-28 lg:h-32 mx-auto" />
        </div>

        {/* Headline */}
        <h1 style={{
        animationDelay: "0.2s"
      }} className="text-4xl md:text-6xl font-extrabold leading-tight text-white animate-fade-in lg:text-4xl">
          {text.headline}
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl font-light text-gray-light leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{
        animationDelay: "0.4s"
      }}>
          {text.subheadline}
        </p>

        {/* CTA Button */}
        <div className="pt-6 animate-fade-in" style={{
        animationDelay: "0.6s"
      }}>
          <button onClick={scrollToContact} className="glass-button px-12 py-5 text-lg font-semibold inline-flex items-center gap-3 group">
            <Lock className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
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
    </section>;
}