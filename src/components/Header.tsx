import { useState } from "react";
import { Menu, X } from "lucide-react";
import stoneLogo from "@/assets/stone.png";

type Language = "es" | "en";

const navItems = {
  es: [
    { label: "Inicio", href: "#hero" },
    { label: "Servicios", href: "#services" },
    { label: "Partners", href: "#partners" },
    { label: "Contacto", href: "#contact" },
  ],
  en: [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Partners", href: "#partners" },
    { label: "Contact", href: "#contact" },
  ],
};

export function Header({ lang, onToggleLang }: { lang: Language; onToggleLang: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Nombre */}
        <div className="flex items-center gap-3">
          <img src={stoneLogo} alt="Cypherstone" className="h-10 w-auto md:h-10" />
          <span className="text-white font-bold text-xl md:text-xl tracking-wider">CYPHERSTONE</span>
        </div>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems[lang].map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
            >
              {item.label}
            </button>
          ))}
          
          {/* Toggle idioma */}
          <button onClick={onToggleLang} className="flex items-center gap-2 text-sm font-semibold">
            <span className={lang === "es" ? "text-primary" : "text-muted-foreground"}>ES</span>
            <span className="text-muted-foreground">|</span>
            <span className={lang === "en" ? "text-primary" : "text-muted-foreground"}>EN</span>
          </button>
        </nav>

        {/* Botón Hamburguesa Móvil - MÁS GRANDE */}
        <button
          className="md:hidden text-white p-3 rounded-lg hover:bg-white/10 transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú Móvil Desplegable - MÁS CÓMODO */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10">
          <nav className="flex flex-col items-center gap-1 py-8 px-6">
            {navItems[lang].map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-white hover:text-cyan-400 text-lg font-medium transition-colors py-4 w-full text-center border-b border-white/5 last:border-0"
              >
                {item.label}
              </button>
            ))}
            
            {/* Toggle idioma en móvil */}
            <button 
              onClick={onToggleLang} 
              className="flex items-center gap-3 text-lg font-semibold mt-6 py-4"
            >
              <span className={lang === "es" ? "text-cyan-400" : "text-gray-500"}>ES</span>
              <span className="text-gray-600">|</span>
              <span className={lang === "en" ? "text-cyan-400" : "text-gray-500"}>EN</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}