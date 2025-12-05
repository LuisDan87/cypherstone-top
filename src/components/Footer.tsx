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
    <footer className="relative border-t border-white/10 bg-black/60 backdrop-blur-md py-12 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">

          <nav className="flex flex-col gap-3 text-sm">
            <a href="#privacy" className="text-gray-400 hover:text-cyan-400 transition">
              {text.privacy}
            </a>
            <a href="#terms" className="text-gray-400 hover:text-cyan-400 transition">
              {text.terms}
            </a>
            <a href="https://cybermassive.tech" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition inline-flex items-center gap-2">
              {text.partner}
              <span className="text-xs opacity-60">CYBERMASSIVE</span>
            </a>
          </nav>

          <div className="flex flex-col items-center gap-3">
            <h3 className="text-2xl font-bold text-white tracking-tight">Cypherstone</h3>
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <Lock className="w-4 h-4 text-cyan-400" />
              Confidencialidad absoluta
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-4">
              {/* WhatsApp en cyan */}
              <a
                href="https://wa.me/5491138113906"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-cyan-500/10 hover:bg-cyan-500/30 rounded-full border border-cyan-400/40 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-cyan-400 group-hover:text-white transition-colors" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.099-.52l-.198-.298c-.149-.198-.446-.744-.744-1.243-.297-.496-.595-.297-.893-.099-.297.198-1.138.867-1.386 1.065-.248.198-.446.347-.595.546-.149.198-.844.744-1.04 1.044-.198.298-.397.595-.099.893.297.298 1.04 1.636 1.24 1.934.198.298.893 1.538 2.166 2.087.744.322 1.34.546 1.786.644.446.099.893.05 1.24-.099.347-.149 1.34-.744 1.538-1.042.198-.298.397-.595.546-.893.149-.298.347-.198.446-.099.099.099.893.744 1.091.943.198.198.397.298.595.248.198-.05 1.34-.595 1.538-.893.198-.298.397-.595.496-.794.099-.198.099-.397 0-.595z"/>
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="none" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </a>

              <a href="https://www.instagram.com/cypherstonebtc/" target="_blank" rel="noopener noreferrer" className="group p-3 bg-white/5 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-full border border-white/10 transition-all duration-300">
                <Instagram className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
              </a>

              <a href="https://www.linkedin.com/company/cypherstone" target="_blank" rel="noopener noreferrer" className="group p-3 bg-white/5 hover:bg-blue-600 rounded-full border border-white/10 transition-all duration-300">
                <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
              </a>
            </div>

            <a href="mailto:info@cypherstone.com.ar" className="text-gray-300 hover:text-cyan-400 font-medium">
              ✉ {text.email}
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-xs md:text-sm text-gray-500">{text.copyright}</p>
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      </div>
    </footer>
  );
}