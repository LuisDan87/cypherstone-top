import { Instagram, Linkedin, Mail, Lock } from "lucide-react";

type Language = "es" | "en";

const content = { /* tu content actual */ };

export function Footer({ lang }: { lang: Language }) {
  const text = content[lang];

  return (
    <>
      {/* Footer normal (legal + branding) */}
      <footer className="relative border-t border-white/10 bg-black/60 backdrop-blur-md py-12 px-6">
        {/* todo tu footer actual queda igual */}
        {/* ... (lo dejo tal cual tenías) */}
      </footer>

      {/* MINI FOOTER FIJO SOLO EN MÓVIL - ELEGANTE Y SUTIL */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-xl border-t border-white/10 z-40 md:hidden">
        <div className="flex items-center justify-center gap-8 py-3">
          
          {/* WhatsApp */}
          <a
            href="https://wa.me/5491138113906"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-gray-800/70 hover:bg-[#25D366]/20 rounded-full border border-gray-700/50 hover:border-[#25D366]/50 transition-all duration-300"
          >
            <svg className="w-5 h-5 text-gray-400 group-hover:text-[#25D366] transition" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:info@cypherstone.com.ar"
            className="group p-3 bg-gray-800/70 hover:bg-cyan-500/20 rounded-full border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300"
          >
            <Mail className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/cypherstonebtc/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-gray-800/70 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 rounded-full border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300"
          >
            <Instagram className="w-5 h-5 text-gray-400 group-hover:text-pink-400 transition" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/cypherstone"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-gray-800/70 hover:bg-blue-600/20 rounded-full border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition" />
          </a>
        </div>
      </div>
    </>
  );
}