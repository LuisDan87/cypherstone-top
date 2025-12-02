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
          <img src={stoneLogo} alt="Stone" className="h-10 w-auto" />
          <span className="text-white font-bold text-xl tracking-wider">CYPHERSTONE</span>
        </div>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center gap-6">
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

        {/* Botón Hamburguesa Móvil */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú Móvil Desplegable */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 animate-fade-in">
          <nav className="flex flex-col items-center gap-4 py-6">
            {navItems[lang].map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-muted-foreground hover:text-primary text-base font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
            
            {/* Toggle idioma */}
            <button onClick={onToggleLang} className="flex items-center gap-2 text-sm font-semibold mt-2">
              <span className={lang === "es" ? "text-primary" : "text-muted-foreground"}>ES</span>
              <span className="text-muted-foreground">|</span>
              <span className={lang === "en" ? "text-primary" : "text-muted-foreground"}>EN</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
