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
    <footer className="relative border-t border-white/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">

          {/* Links izquierda */}
          <nav className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 text-sm">
            <a href="#privacy" className="text-gray-dark hover:text-cyan-400 transition-colors duration-300">
              {text.privacy}
            </a>
            <span className="text-gray-dark">·</span>
            <a href="#terms" className="text-gray-dark hover:text-cyan-400 transition-colors duration-300">
              {text.terms}
            </a>
            <span className="text-gray-dark">·</span>
            <a
              href="https://cybermassive.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-dark hover:text-cyan-400 transition-colors duration-300 inline-flex items-center gap-2"
            >
              {text.partner}
              <span className="text-xs opacity-60">CYBERMASSIVE</span>
            </a>
          </nav>

          {/* Mail + copyright en el centro */}
          <div className="flex flex-col items-center gap-3">
            <a
              href="mailto:info@cypherstone.com.ar"
              className="text-gray-300 hover:text-cyan-400 font-medium text-base transition-colors duration-300"
            >
              ✉ info@cypherstone.com.ar
            </a>
            <p className="text-sm text-gray-dark">
              {text.copyright}
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}