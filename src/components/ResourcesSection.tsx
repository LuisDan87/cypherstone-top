import { FileCheck, Download } from "lucide-react";
import { useState } from "react";

type Language = "es" | "en";

const content = {
  es: {
    title: "Recurso Exclusivo",
    description: "Descarga nuestra Checklist 2025 de Seguridad Patrimonial en Criptomonedas",
    placeholder: "tu@email.com",
    cta: "Descargar checklist gratuita",
    success: "¡Checklist enviada! Revisa tu email.",
  },
  en: {
    title: "Exclusive Resource",
    description: "Download our 2025 Private Crypto Security Checklist",
    placeholder: "your@email.com",
    cta: "Download free checklist",
    success: "Checklist sent! Check your email.",
  },
};

export function ResourcesSection({ lang }: { lang: Language }) {
  const text = content[lang];
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real implementation, this would send the email to your backend
      console.log("Checklist requested for:", email);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card p-12 relative overflow-hidden border-2 border-transparent bg-gradient-to-br from-cyan-400/10 via-purple-500/10 to-magenta-500/10">
          {/* Decorative icon */}
          <div className="absolute -right-8 -top-8 opacity-10">
            <FileCheck className="w-48 h-48 text-cyan-400" />
          </div>

          <div className="relative z-10 space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-cyan-400">
                {text.title}
              </h2>
              <p className="text-xl text-gray-light leading-relaxed">
                {text.description}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={text.placeholder}
                required
                className="flex-1 bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-gray-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              />
              <button
                type="submit"
                disabled={submitted}
                className="glass-button px-8 py-4 whitespace-nowrap inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Download className="w-5 h-5" />
                {submitted ? text.success : text.cta}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
