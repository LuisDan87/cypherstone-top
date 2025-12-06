import { Shield, TrendingUp, Settings, Trees, LucideIcon } from "lucide-react";
import { useInView } from "@/hooks/useInView";

type Language = "es" | "en";

interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
}

const content: Record<Language, { title: string; pillars: Pillar[] }> = {
  es: {
    title: "Nuestra Metodología",
    pillars: [
      { 
        icon: Shield, 
        title: "Custodia Segura", 
        description: "Custodia segura: hardware wallet, Yubikey, TOTP, password manager y resguardo físico de seed phrases" 
      },
      { 
        icon: TrendingUp, 
        title: "Estrategias Conservadoras", 
        description: "Estrategias conservadoras en DeFi y web3 con máxima protección de capital" 
      },
      { 
        icon: Settings, 
        title: "Selección de Herramientas", 
        description: "Selección y configuración óptima de herramientas y billeteras" 
      },
      { 
        icon: Trees, 
        title: "Planificación Patrimonial", 
        description: "Planificación patrimonial y fiscal eficiente" 
      },
    ],
  },
  en: {
    title: "Our Methodology",
    pillars: [
      { 
        icon: Shield, 
        title: "Secure Custody", 
        description: "Secure Custody: hardware wallet, Yubikey, TOTP, password manager and physical backup of seed phrases" 
      },
      { 
        icon: TrendingUp, 
        title: "Conservative Strategies", 
        description: "Conservative strategies in DeFi and web3 with maximum capital protection" 
      },
      { 
        icon: Settings, 
        title: "Tool Selection", 
        description: "Optimal selection and configuration of tools and wallets" 
      },
      { 
        icon: Trees, 
        title: "Wealth Planning", 
        description: "Efficient wealth and tax planning" 
      },
    ],
  },
};

export function PillarsSection({ lang }: { lang: Language }) {
  const text = content[lang];
  const { ref, isInView } = useInView();

  return (
    <section
      id="methodology"
      ref={ref}
      className={`relative py-32 px-6 transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-cyan-400 text-center mb-16">
          {text.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-8">
          {text.pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className={`relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 group transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_70px_rgba(219,39,119,0.18)] hover:border-pink-500/40 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isInView ? `${index * 150}ms` : "0ms" }}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500/30 via-magenta-500/20 to-purple-600/10 p-[2px] shadow-lg shadow-pink-500/10">
                    <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                      <Icon
                        className="w-8 h-8 text-pink-400 group-hover:scale-110 transition-transform duration-300"
                        strokeWidth={1.7}
                      />
                    </div>
                  </div>
                </div>

                <h3 className="text-xl md:text-xl font-bold text-white mb-4">
                  {pillar.title}
                </h3>

                <p className="text-base md:text-base text-gray-300 md:text-gray-medium leading-loose md:leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
    </section>
  );
}