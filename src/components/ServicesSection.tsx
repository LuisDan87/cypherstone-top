// src/components/ServicesSection.tsx
import { useInView } from "@/hooks/useInView";

export function ServicesSection({ lang }: { lang: "es" | "en" }) {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className={`relative py-32 px-6 transition-all duration-700 ${
        isInView ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Este componente quedó obsoleto – ahora usamos PhilosophySection */}
      {/* Solo mantiene el separador para no romper el flujo visual */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
    </section>
  );
}