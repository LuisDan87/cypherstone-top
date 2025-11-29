import { useState, useEffect } from "react";

type Language = "es" | "en";

export function LanguageSwitcher() {
  const [lang, setLang] = useState<Language>(() => {
    const stored = localStorage.getItem("cypherstone-lang");
    return (stored as Language) || "es";
  });

  useEffect(() => {
    localStorage.setItem("cypherstone-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  };

  return { lang, toggleLang };
}

export function LanguageToggle({ lang, onToggle }: { lang: Language; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="fixed top-6 right-6 z-50 flex items-center gap-2 text-sm font-semibold tracking-wide"
    >
      <span
        className={`transition-all duration-300 ${
          lang === "es" ? "text-cyan-400" : "text-gray-medium"
        }`}
      >
        ES
      </span>
      <span className="text-gray-medium">|</span>
      <span
        className={`transition-all duration-300 ${
          lang === "en" ? "text-cyan-400" : "text-gray-medium"
        }`}
      >
        EN
      </span>
    </button>
  );
}
