/* ===================== CONTACT SECTION (sin espacio vacío + WhatsApp perfecto) ===================== */
import { Lock, Loader2 } from "lucide-react";
import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { useToast } from "@/hooks/use-toast";

type Language = "es" | "en";

const content = { /* tu content igual que antes */ };

export function ContactSection({ lang }: { lang: Language }) {
  const text = content[lang];
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const { ref, isInView } = useInView();

  const FORMSPREE_URL = "https://formspree.io/f/myzrpwrk";

  return (
    <section
      id="contact"
      ref={ref}
      className={`relative py-16 md:py-20 pb-12 md:pb-16 px-4 md:px-6 transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-cyan-400">
            {text.title}
          </h2>
          <p className="text-base text-gray-medium inline-flex items-center gap-2 justify-center">
            <Lock className="w-4 h-4" /> {text.subtitle}
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          <form
            action={FORMSPREE_URL}
            method="POST"
            onSubmit={() => {
              setIsLoading(true);
              setTimeout(() => {
                toast({ title: "¡Enviado!", description: text.form.success });
                setIsLoading(false);
              }, 800);
            }}
            className="glass-card p-6 md:p-10 space-y-6"
          >
            {/* tus inputs igual */}
            {/* ... */}
            <button type="submit" disabled={isLoading} className="w-full glass-button px-8 py-5 inline-flex items-center justify-center gap-3 text-base md:text-lg font-semibold disabled:opacity-50">
              {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Lock className="w-6 h-6" />}
              {isLoading ? (lang === "es" ? "Enviando…" : "Sending…") : text.form.submit}
            </button>
          </form>

          {/* WhatsApp con tu estilo cyan */}
          <div className="flex justify-center">
            <a
              href="https://wa.me/5491138113906"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-cyan-500/10 hover:bg-cyan-500/20 border-2 border-cyan-400/30 rounded-full transition-all duration-300 hover:scale-110 hover:border-cyan-400"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-cyan-400 group-hover:text-white transition-colors" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.099-.52l-.198-.298c-.149-.198-.446-.744-.744-1.243-.297-.496-.595-.297-.893-.099-.297.198-1.138.867-1.386 1.065-.248.198-.446.347-.595.546-.149.198-.844.744-1.04 1.044-.198.298-.397.595-.099.893.297.298 1.04 1.636 1.24 1.934.198.298.893 1.538 2.166 2.087.744.322 1.34.546 1.786.644.446.099.893.05 1.24-.099.347-.149 1.34-.744 1.538-1.042.198-.298.397-.595.546-.893.149-.298.347-.198.446-.099.099.099.893.744 1.091.943.198.198.397.298.595.248.198-.05 1.34-.595 1.538-.893.198-.298.397-.595.496-.794.099-.198.099-.397 0-.595z"/>
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </a>
          </div>

          <p className="text-center text-gray-400 text-sm md:text-base">
            {text.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}