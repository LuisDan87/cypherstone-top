import { Shield } from "lucide-react";

type Language = "es" | "en";

const content = {
  es: {
    title: "Nuestra Filosofía",
    text: "El mundo descentralizado puede resultar complejo, arriesgado y abrumador: el exceso de información contradictoria dificulta tomar decisiones seguras. Nuestra experiencia permite a empresarios e inversores acceder a Bitcoin y DeFi con claridad, seguridad y control total sobre sus activos.\n\nEn Cypherstone actuamos como su guía de confianza: evacuamos todas sus dudas, filtramos el ruido informativo y le mostramos el camino más seguro y simple según su perfil. Enseñamos autocustodia segura con hardware wallets, configuramos capas múltiples de autenticación, establecemos respaldos físicos de accesos, y diseñamos protocolos personalizados para cada cliente. Todo bajo confidencialidad absoluta: sus estrategias, operaciones e información patrimonial permanecen privadas",
  },
  en: {
    title: "Our Philosophy",
    text: "The cryptocurrency ecosystem can be complex and risky. Our purpose is to simplify access to Bitcoin and DeFi through clear knowledge, institutional-grade security protocols and complete confidentiality.",
  },
};

export function PhilosophySection({ lang }: { lang: Language }) {
  const text = content[lang];

  return (
    <section className="relative py-32 px-6 border-t border-b border-cyan-400/20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start gap-6">
          <div className="hidden md:block mt-2">
            <Shield className="w-12 h-12 text-cyan-400" strokeWidth={1.5} />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-cyan-400">
              {text.title}
            </h2>
            
            <p className="text-xl md:text-2xl font-normal text-gray-light leading-relaxed">
              {text.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
