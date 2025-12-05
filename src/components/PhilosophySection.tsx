import { Shield } from "lucide-react";
import { useInView } from "@/hooks/useInView";

type Language = "es" | "en";

const content = {
  es: {
    title: "Nuestra Filosofía",
    line1: "Bitcoin y el mundo crypto & web3 — simple y seguro — para empresarios y profesionales.",
    line2: "Asesoramiento exclusivo, estrategias a medida y confidencialidad absoluta.",
  },
  en: {
    title: "Our Philosophy",
    line1: "Bitcoin and the crypto & web3 world — simple and secure — for entrepreneurs and professionals.",
    line2: "Exclusive advisory, tailor-made strategies and absolute confidentiality.",
  },
};

interface PhilosophySectionProps {
  lang: Language;
}

export function PhilosophySection({ lang }: PhilosophySectionProps) {
  const { ref, isInView } = useInView();
  const t = content[lang];

  return (
    <section
      ref={ref}
      className={`relative py-32 px-6 border-t border-b border-cyan-400/20 transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start gap-6">
          <div className="hidden md:block mt-2 flex-shrink-0">
            <Shield className="w-12 h-12 text-cyan-400" strokeWidth={1.5} />
          </div>

          <div className="space-y-8">
            <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-cyan-400">
              {t.title}
            </h2>

            <div className="space-y-5 text-xl md:text-2xl font-normal text-gray-300 leading-snug">
              <p className="font-medium">{t.line1}</p>
              <p>{t.line2}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
    </section>
  );
}