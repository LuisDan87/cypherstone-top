import { Shield } from "lucide-react";
import { useInView } from "@/hooks/useInView";

type Language = "es" | "en";

const content = {
  es: {
    title: "Nuestra Filosofía",
    text: "Bitcoin y el mundo crypto, simples y seguros para empresarios y profesionales.\nAsesoramiento exclusivo, estrategias a medida y confidencialidad absoluta.",
  },
  en: {
    title: "Our Philosophy",
    text: "Bitcoin and the crypto world, simple and secure for entrepreneurs and professionals.\nExclusive advisory, tailor-made strategies and absolute confidentiality.",
  },
};

export function PhilosophySection({ lang }: { lang: Language }) {
  const { ref, isInView } = useInView();
  const current = content[lang];

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
              {current.title}
            </h2>

            {/* Texto nuevo, corto y potente */}
            <div className="space-y-5 text-xl md:text-2xl font-normal text-gray-light leading-snug">
              {current.text.split("\n").map((line, index) => (
                <p key={index} className={index === 0 ? "font-medium" : ""}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
    </section>
  );
}