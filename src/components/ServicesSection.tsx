import { Shield } from "lucide-react";
import { useInView } from "@/hooks/useInView";

type Language = "es" | "en";

const content = {
  es: {
    title: "Nuestra Filosofía",
    text1: "El mundo descentralizado puede resultar complejo, arriesgado y abrumador: el exceso de información contradictoria dificulta tomar decisiones seguras. Nuestra experiencia permite a empresarios e inversores acceder a Bitcoin y DeFi con claridad, seguridad y control total sobre sus activos.",
    text2: "En Cypherstone actuamos como su guía de confianza: evacuamos todas sus dudas, filtramos el ruido informativo y le mostramos el camino más seguro y simple según su perfil. Enseñamos autocustodia segura con hardware wallets, configuramos capas múltiples de autenticación, establecemos respaldos físicos de accesos, y diseñamos protocolos personalizados para cada cliente. Todo bajo confidencialidad absoluta: sus estrategias, operaciones e información patrimonial permanecen privadas",
  },
  en: {
    title: "Our Philosophy",
    text1: "The decentralized world can be overwhelming: contradictory information, hidden risks and complex decisions for those taking their first steps. Our experience enables entrepreneurs and investors to access Bitcoin and DeFi with clarity, security and total control.",
    text2: "Cypherstone is your trusted guide: we clarify your doubts, filter the noise and chart the safest path according to your profile. We teach self-custody with hardware wallets, configure multi-layer authentication, establish physical access backups, and design personalized protocols. All under absolute confidentiality: your strategies and wealth information remain private.",
  },
};

export function ServicesSection({ lang }: { lang: Language }) {
  const text = content[lang];
  const { ref, isInView } = useInView();

  return (
    <section 
      id="philosophy"
      ref={ref}
      className={`relative py-32 px-6 border-t border-b border-cyan-400/20 transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start gap-6">
          <div className="hidden md:block mt-2">
            <Shield className="w-12 h-12 text-cyan-400" strokeWidth={1.5} />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-cyan-400">
              {text.title}
            </h2>
            
            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-normal text-gray-light leading-relaxed">
                {text.text1}
              </p>
              
              {text.text2 && (
                <p className="text-xl md:text-2xl font-normal text-gray-light leading-relaxed">
                  {text.text2}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Section separator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
    </section>
  );
}
