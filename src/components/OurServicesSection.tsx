import { Coins, DollarSign, Landmark, TrendingUp, LucideIcon } from "lucide-react";
import { useInView } from "@/hooks/useInView";

type Language = "es" | "en";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  ideal: string;
}

const content: Record<Language, { title: string; subtitle: string; services: Service[] }> = {
  es: {
    title: "Nuestros Servicios",
    subtitle: "Soluciones personalizadas según su perfil y objetivos",
    services: [
      {
        icon: Coins,
        title: "Autocustodia de Bitcoin",
        description: "Setup completo de custodia segura: hardware wallet, autenticación multi-factor, respaldo físico y legal de accesos. Control total sobre sus Bitcoin sin depender de terceros.",
        ideal: "Ideal para: Primera compra de Bitcoin, migración desde exchanges, herencias y planificación sucesoria."
      },
      {
        icon: DollarSign,
        title: "Dolarización Digital",
        description: "Acceso inmediato a USD digitales (USDC, USDT) sin restricciones bancarias. Proteja su capital de la devaluación con stablecoins auditadas y respaldadas 1:1.",
        ideal: "Ideal para: Protección patrimonial, pagos internacionales, ahorro en dólares sin límites de compra."
      },
      {
        icon: Landmark,
        title: "Liquidez sin Vender Bitcoin",
        description: "Preserve su exposición a Bitcoin mientras accede a liquidez inmediata. Utilizamos protocolos institucionales de préstamos colateralizados con ratios conservadores y gestión activa del colateral.",
        ideal: "Ideal para: Necesidades de liquidez temporal, compra de activos, expansión empresarial sin vender BTC."
      },
      {
        icon: TrendingUp,
        title: "Estrategias de Rendimiento Conservadoras",
        description: "Generación de ingresos pasivos sobre stablecoins y Bitcoin mediante protocolos auditados y estrategias de bajo riesgo. Priorizamos preservación de capital sobre maximización de retornos.",
        ideal: "Ideal para: Yield sobre liquidez en stablecoins, optimización de tesorería empresarial, diversificación de ingresos."
      }
    ]
  },
  en: {
    title: "Our Services",
    subtitle: "Customized solutions according to your profile and goals",
    services: [
      {
        icon: Coins,
        title: "Bitcoin Self-Custody",
        description: "Complete secure custody setup: hardware wallet, multi-factor authentication, physical and legal access backup. Total control over your Bitcoin without relying on third parties.",
        ideal: "Ideal for: First Bitcoin purchase, exchange migration, inheritance and estate planning."
      },
      {
        icon: DollarSign,
        title: "Digital Dollarization",
        description: "Immediate access to digital USD (USDC, USDT) without banking restrictions. Protect your capital from devaluation with audited, 1:1 backed stablecoins.",
        ideal: "Ideal for: Wealth protection, international payments, dollar savings without purchase limits."
      },
      {
        icon: Landmark,
        title: "Liquidity Without Selling Bitcoin",
        description: "Preserve your Bitcoin exposure while accessing immediate liquidity. We use institutional lending protocols with conservative collateral ratios and active collateral management.",
        ideal: "Ideal for: Temporary liquidity needs, asset purchases, business expansion without selling BTC."
      },
      {
        icon: TrendingUp,
        title: "Conservative Yield Strategies",
        description: "Passive income generation on stablecoins and Bitcoin through audited protocols and low-risk strategies. We prioritize capital preservation over return maximization.",
        ideal: "Ideal for: Yield on stablecoin liquidity, corporate treasury optimization, income diversification."
      }
    ]
  }
};

export function OurServicesSection({ lang }: { lang: Language }) {
  const text = content[lang];
  const { ref, isInView } = useInView();

  return (
    <section 
      id="services"
      ref={ref}
      className={`relative py-20 md:py-32 px-6 transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-cyan-400 text-center mb-4 md:mb-6">
          {text.title}
        </h2>
        
        <p className="text-lg md:text-xl font-light text-gray-300 md:text-gray-medium text-center mb-12 md:mb-16 leading-relaxed max-w-3xl mx-auto">
          {text.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {text.services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 group transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(0,217,255,0.15)] hover:border-cyan-400/50 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isInView ? `${index * 150}ms` : "0ms",
                }}
              >
                <div className="mb-6">
                  <Icon 
                    className="w-12 h-12 text-cyan-400 opacity-85 group-hover:scale-110 transition-transform duration-300" 
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="text-xl md:text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-base md:text-base text-gray-300 md:text-gray-medium leading-loose md:leading-relaxed mb-4">
                  {service.description}
                </p>

                <p className="text-sm md:text-sm italic text-gray-400 md:text-gray-500 leading-relaxed">
                  {service.ideal}
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