import { Instagram, Linkedin, Lock } from "lucide-react";

type Language = "es" | "en";

const content = {
  es: {
    privacy: "Política de Privacidad",
    terms: "Términos",
    partner: "Partner",
    email: "info@cypherstone.com.ar",
    copyright: "© 2025 Cypherstone — Confidencialidad absoluta",
  },
  en: {
    privacy: "Privacy Policy",
    terms: "Terms",
    partner: "Partner",
    email: "info@cypherstone.com.ar",
    copyright: "© 2025 Cypherstone — Absolute confidentiality",
  },
};

export function Footer({ lang }: { lang: Language }) {
  const text = content[lang];

  return (
    <footer className="relative border-t border-white/10 bg-black/40 backdrop-blur-md py-12 md:py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Sección principal */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-8 text-center md:text-left">

          {/* Columna 1 – Links legales + partner */}
          <nav className="flex flex-col sm:flex-row md:flex-col items-center md:items-start gap-4 text-sm">
            <a href="#privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
              {text.privacy}
            </a>
            <a href="#terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
              {text.terms}
            </a>
            <a
              href="https://cybermassive.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-2"
            >
              {text.partner}
              <span className="text-xs opacity-60">CYBERMASSIVE</span>
            </a>
          </nav>

          {/* Columna 2 – Logo + frase de confianza */}
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">Cypherstone</h3>
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <Lock className="w-4 h-4 text-cyan-400" />
              Confidencialidad absoluta
            </p>
          </div>

          {/* Columna 3 – Redes sociales + email */}
          <div className="flex flex-col items-center md:items-end gap-5">
            {/* Redes sociales */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/cypherstonebtc/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white/5 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-full border border-white/10 hover:border-transparent transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://www.linkedin.com/company/cypherstone"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white/5 hover:bg-blue-600 rounded-full border border-white/10 hover:border-transparent transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* Email */}
            <a
              href="mailto:info@cypherstone.com.ar"
              className="text-gray-300 hover:text-cyan-400 font-medium transition-colors"
            >
              ✉ {text.email}
            </a>
          </div>
        </div>

        {/* Copyright centrado debajo */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-xs md:text-sm text-gray-500">
            {text.copyright}
          </p>
        </div>

        {/* Separador sutil superior (opcional, queda muy elegante) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      </div>
    </footer>
  );
}