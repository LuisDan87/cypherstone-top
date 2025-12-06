import { Instagram, Linkedin, Lock } from "lucide-react";

type Language = "es" | "en";

const content = { /* ... tu content actual queda igual ... */ };

export function Footer({ lang }: { lang: Language }) {
  const text = content[lang];

  return (
    <>
      {/* Footer normal (legal + branding) - visible siempre */}
      <footer className="relative border-t border-white/10 bg-black/60 backdrop-blur-md py-12 px-6">
        {/* ... todo tu footer actual queda 100 % igual ... */}
        <div className="max-w-6xl mx-auto">
          {/* Tu código actual del footer aquí (Política, Partner, Confidencialidad, etc.) */}
          {/* Lo dejo igual que tenías */}
          <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">
            {/* Links legales */}
            <nav className="flex flex-col gap-4 md:gap-3 text-base md:text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-cyan-400 transition py-2">{text.privacy}</a>
              <a href="#terms" className="text-gray-400 hover:text-cyan-400 transition py-2">{text.terms}</a>
              <a href="https://cybermassive.tech" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition inline-flex items-center gap-2 py-2">
                {text.partner} <span className="text-xs opacity-60">CYBERMASSIVE</span>
              </a>
            </nav>

            <div className="flex flex-col items-center gap-3">
              <h3 className="text-2xl font-bold text-white tracking-tight">Cypherstone</h3>
              <p className="text-base md:text-sm text-gray-400 flex items-center gap-2">
                <Lock className="w-5 h-5 md:w-4 md:h-4 text-cyan-400" />
                Confidencialidad absoluta
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-8 md:gap-6">
              <div className="flex gap-6 md:gap-4">
                <a href="https://wa.me/5491138113906" target="_blank" rel="noopener noreferrer" className="group p-4 md:p-3 bg-gray-800 hover:bg-[#25D366] rounded-full border border-gray-700 hover:border-transparent transition-all">
                  <svg className="w-7 h-7 md:w-5 md:h-5 text-gray-400 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/cypherstonebtc/" target="_blank" rel="noopener noreferrer" className="group p-4 md:p-3 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-full border border-gray-700 hover:border-transparent transition-all">
                  <Instagram className="w-7 h-7 md:w-5 md:h-5 text-gray-400 group-hover:text-white transition" />
                </a>
                <a href="https://www.linkedin.com/company/cypherstone" target="_blank" rel="noopener noreferrer" className="group p-4 md:p-3 bg-gray-800 hover:bg-blue-600 rounded-full border border-gray-700 hover:border-transparent transition-all">
                  <Linkedin className="w-7 h-7 md:w-5 md:h-5 text-gray-400 group-hover:text-white transition" />
                </a>
              </div>
              <a href="mailto:info@cypherstone.com.ar" className="text-gray-300 hover:text-cyan-400 font-medium text-lg md:text-base py-3 px-2">
                ✉ {text.email}
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 text-center">
            <p className="text-base md:text-sm text-gray-500">{text.copyright}</p>
          </div>
        </div>
      </footer>

      {/* MINI FOOTER FIJO SOLO EN MÓVIL */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 z-40 md:hidden">
        <div className="flex items-center justify-around py-4 px-6">
          <a
            href="https://wa.me/5491138113906"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 text-white"
          >
            <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center">
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
              </svg>
            </div>
            <span className="text-xs">WhatsApp</span>
          </a>

          <a
            href="mailto:info@cypherstone.com.ar"
            className="flex flex-col items-center gap-1 text-white"
          >
            <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center border border-cyan-400/30">
              <span className="text-2xl">✉</span>
            </div>
            <span className="text-xs">Email</span>
          </a>

          <a
            href="https://www.linkedin.com/company/cypherstone"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 text-white"
          >
            <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center border border-blue-400/30">
              <Linkedin className="w-7 h-7" />
            </div>
            <span className="text-xs">LinkedIn</span>
          </a>
        </div>
      </div>
    </>
  );
}