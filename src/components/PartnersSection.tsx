import { ExternalLink, Plus } from "lucide-react";
import cybermassiveLogo from "@/assets/cybermassive_logo-3.svg";

type Language = "es" | "en";

const content = {
  es: {
    title: "Partners Estratégicos",
    cybermassive: {
      description: "Partner estratégico en ciberseguridad empresarial de grado institucional",
      cta: "Visitar sitio",
    },
    reserved: {
      title: "Próximamente",
      description: "Espacio reservado para partner contable/fiscal",
    },
  },
  en: {
    title: "Strategic Partners",
    cybermassive: {
      description: "Strategic partner in institutional-grade enterprise cybersecurity",
      cta: "Visit site",
    },
    reserved: {
      title: "Coming Soon",
      description: "Reserved space for accounting/tax partner",
    },
  },
};

export function PartnersSection({ lang }: { lang: Language }) {
  const text = content[lang];

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-cyan-400 text-center mb-16">
          {text.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Cybermassive Card */}
          <a
            href="https://cybermassive.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-12 group hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,217,255,0.2)] cursor-pointer"
          >
            <div className="flex flex-col items-center text-center space-y-6">
              <img 
                src={cybermassiveLogo} 
                alt="CYBERMASSIVE" 
                className="h-12 w-auto"
              />

              <p className="text-base text-gray-medium leading-relaxed">
                {text.cybermassive.description}
              </p>

              <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                {text.cybermassive.cta}
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </a>

          {/* Reserved Space Card */}
          <div className="glass-card p-12 border-dashed border-2 border-white/15 opacity-60">
            <div className="flex flex-col items-center text-center space-y-6 h-full justify-center">
              <div className="w-16 h-16 rounded-full border-2 border-dashed border-gray-dark/50 flex items-center justify-center">
                <Plus className="w-8 h-8 text-gray-dark" />
              </div>

              <div className="space-y-2">
                <p className="text-lg italic text-gray-dark font-medium">
                  {text.reserved.title}
                </p>
                <p className="text-sm text-gray-dark">
                  {text.reserved.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
