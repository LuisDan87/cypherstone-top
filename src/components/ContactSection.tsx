import { Lock, Send, MessageCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { useToast } from "@/hooks/use-toast";

type Language = "es" | "en";

const content = {
  es: {
    title: "Contacto Confidencial",
    subtitle: "Todas las comunicaciones son encriptadas y confidenciales",
    form: {
      name: "Nombre",
      contact: "WhatsApp/Telegram",
      email: "Email",
      message: "Mensaje",
      submit: "Enviar mensaje encriptado",
      success: "¡Enviado! Te respondemos en menos de 24 hs.",
    },
    direct: { whatsapp: "WhatsApp", telegram: "Telegram" },
    disclaimer: "Respuesta en menos de 24 horas",
  },
  en: {
    title: "Confidential Contact",
    subtitle: "All communications are encrypted and confidential",
    form: {
      name: "Name",
      contact: "WhatsApp/Telegram",
      email: "Email",
      message: "Message",
      submit: "Send encrypted message",
      success: "Sent! We'll reply within 24 hours.",
    },
    direct: { whatsapp: "WhatsApp", telegram: "Telegram" },
    disclaimer: "Response within 24 hours",
  },
};

export function ContactSection({ lang }: { lang: Language }) {
  const text = content[lang];
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const { ref, isInView } = useInView();

  // ← CAMBIÁ SOLO ESTA LÍNEA CON TU ENDPOINT DE FORMSPREE
  const FORMSPREE_URL = "https://formspree.io/f/myzrpwrk"; // ← pegá tu link real
  // ↑

  return (
    <section
      id="contact"
      ref={ref}
      className={`relative py-16 md:py-32 px-4 md:px-6 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-cyan-400">{text.title}</h2>
          <p className="text-base text-gray-medium inline-flex items-center gap-2 justify-center">
            <Lock className="w-4 h-4" /> {text.subtitle}
          </p>
        </div>

        <div className="space-y-8">
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
            className="glass-card p-4 md:p-8 space-y-4 md:space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <input type="text" name="name" placeholder={text.form.name} required className="bg-white/5 border border-white/20 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-white placeholder:text-gray-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all text-sm md:text-base" />
              <input type="text" name="contact" placeholder={text.form.contact} className="bg-white/5 border border-white/20 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-white placeholder:text-gray-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all text-sm md:text-base" />
            </div>

            <input type="email" name="email" placeholder={text.form.email} required className="w-full bg-white/5 border border-white/20 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-white placeholder:text-gray-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all text-sm md:text-base" />

            <textarea name="message" placeholder={text.form.message} required rows={5} className="w-full bg-white/5 border border-white/20 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-white placeholder:text-gray-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all resize-none text-sm md:text-base" />

            <button type="submit" disabled={isLoading} className="w-full glass-button px-6 md:px-8 py-4 md:py-5 inline-flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base">
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Lock className="w-5 h-5" />}
              {isLoading ? (lang === "es" ? "Enviando…" : "Sending…") : text.form.submit}
            </button>
          </form>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a href="https://wa.me/5491138113906" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#25D366]/10 hover:bg-[#25D366]/20 border-2 border-[#25D366]/30 rounded-xl md:rounded-2xl px-6 py-4 text-white font-semibold inline-flex items-center justify-center gap-2 transition-all hover:scale-105">
              <MessageCircle className="w-5 h-5" /> {text.direct.whatsapp}
            </a>
            <a href="https://t.me/your-username" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#0088CC]/10 hover:bg-[#0088CC]/20 border-2 border-[#0088CC]/30 rounded-xl md:rounded-2xl px-6 py-4 text-white font-semibold inline-flex items-center justify-center gap-2 transition-all hover:scale-105">
              <Send className="w-5 h-5" /> {text.direct.telegram}
            </a>
          </div>

          <p className="text-center text-sm text-gray-dark">{text.disclaimer}</p>
        </div>
      </div>
    </section>
  );
}