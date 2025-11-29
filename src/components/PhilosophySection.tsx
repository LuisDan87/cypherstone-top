import { Shield } from "lucide-react";

type Language = "es" | "en";

const content = {
  es: {
    title: "Nuestra Filosofía",
    text: "El ecosistema cripto puede resultar complejo y arriesgado. Nuestro propósito es simplificar el acceso a Bitcoin y DeFi mediante conocimiento claro, protocolos de seguridad de grado institucional y total confidencialidad.",
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
