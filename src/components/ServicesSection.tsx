import { Shield } from "lucide-react";
import { useInView } from "@/hooks/useInView";

type Language = "es" | "en";

const content = {
  es: {
    title: "Nuestra Filosofía",
    text1:
      "El mundo descentralizado puede resultar complejo y abrumador. Nuestra experiencia permite a empresarios e inversores acceder a Bitcoin y DeFi con claridad, seguridad y control total",
    text2:
      "En Cypherstone somos su guía de confianza: evacuamos sus dudas y diseñamos el camino más seguro según su perfil. Confidencialidad absoluta.",
  },
  en: {
    title: "Our Philosophy",
    text1:
      "The decentralized world can be complex and overwhelming. Our experience enables entrepreneurs and investors to access Bitcoin and DeFi with clarity, security and total control.",
    text2:
      "At Cypherstone we are your trusted guide: we clarify your doubts and design the safest path according to your profile. Absolute confidentiality.",
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
            <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-cyan-400">{text.title}</h2>

            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-normal text-gray-light leading-relaxed">{text.text1}</p>

              {text.text2 && (
                <p className="text-xl md:text-2xl font-normal text-gray-light leading-relaxed">{text.text2}</p>
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
