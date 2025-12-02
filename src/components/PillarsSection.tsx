import { Shield, TrendingUp, Settings, Trees } from "lucide-react";
import { useInView } from "@/hooks/useInView";

type Language = "es" | "en";

const content = {
  es: {
    title: "Nuestra Metodología",
    pillars: [
      {
        icon: Shield,
        title: "Custodia Segura",
        description:
          "Custodia segura: hardware wallet, Yubikey, TOTP, password manager y resguardo físico de seed phrases",
      },
      {
        icon: TrendingUp,
        title: "Estrategias Conservadoras",
        description:
          "Estrategias conservadoras en DeFi con máxima protección de capital",
      },
      {
        icon: Settings,
        title: "Selección de Herramientas",
        description:
          "Selección y configuración óptima de herramientas y billeteras",
      },
      {
        icon: Trees,
        title: "Planificación Patrimonial",
        description:
          "Planificación patrimonial y fiscal eficiente (espacio reservado para futuro partner contable)",
      },
    ],
  },
  en: {
    title: "Our Methodology",
    pillars: [
      {
        icon: Shield,
        title: "Secure Custody",
        description:
          "Secure Custody: hardware wallet, Yubikey, TOTP, password manager and physical backup of seed phrases",
      },
      {
        icon: TrendingUp,
        title: "Conservative Strategies",
        description:
          "Conservative DeFi strategies with maximum capital protection",
      },
      {
        icon: Settings,
        title: "Tool Selection",
        description:
          "Optimal selection and configuration of tools and wallets",
      },
      {
        icon: Trees,
        title: "Wealth Planning",
        description:
          "Efficient wealth and tax planning (space reserved for future accounting partner)",
      },
    ],
  },
};

export function PillarsSection({ lang }: { lang: Language }) {
  const text = content[lang];
  const { ref, isInView } = useInView();

  return (
    <section 
      ref={ref}
      className={`relative py-32 px-6 transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-cyan-400 text-center mb-16">
          {text.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {text.pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className={`glass-card p-12 group hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_25px_rgba(0,217,255,0.1)] ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isInView ? `${index * 150}ms` : '0ms',
                }}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 via-purple-500 to-magenta-500 p-[2px]">
                    <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                      <Icon className="w-7 h-7 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  {pillar.title}
                </h3>

                <p className="text-base text-gray-medium leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section separator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
    </section>
  );
}
