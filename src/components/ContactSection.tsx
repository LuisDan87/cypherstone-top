import { Lock, Loader2 } from "lucide-react";
import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { useToast } from "@/hooks/use-toast";

type Language = "es" | "en";

const content = {
  es: {
    title: "Contacto Confidencial",
    subtitle: "Todas las comunicaciones son privadas y confidenciales",
    form: {
      name: "Nombre",
      contact: "WhatsApp",
      email: "Email",
      message: "Mensaje",
      submit: "Enviar mensaje privado",
      success: "¡Enviado! Te respondemos en menos de 24 hs.",
    },
    disclaimer: "Respuesta en menos de 24 horas",
  },
  en: {
    title: "Confidential Contact",
    subtitle: "All communications are private and confidential",
    form: {
      name: "Name",
      contact: "WhatsApp",
      email: "Email",
      message: "Message",
      submit: "Send private message",
      success: "Sent! We'll reply within 24 hours.",
    },
    disclaimer: "Response within 24 hours",
  },
};

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
            <Lock className="w-4 h-4" />
            {text.subtitle}
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
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder={text.form.name}
                required
                className="bg-white/5 border border-white/20 rounded-xl md:rounded-2xl px-5 py-5 md:py-4 text-base text-white placeholder:text-gray-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              />
              <input
                type="text"
                name="contact"
                placeholder={text.form.contact}
                className="bg-white/5 border border-white/20 rounded-xl md:rounded-2xl px-5 py-5 md:py-4 text-base text-white placeholder:text-gray-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder={text.form.email}
              required
              className="w-full bg-white/5 border border-white/20 rounded-xl md:rounded-2xl px-5 py-5 md:py-4 text-base text-white placeholder:text-gray-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
            />

            <textarea
              name="message"
              placeholder={text.form.message}
              required
              rows={5}
              className="w-full bg-white/5 border border-white/20 rounded-xl md:rounded-2xl px-5 py-5 md:py-4 text-base text-white placeholder:text-gray-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all resize-none"
            />

            <button
              type="submit"
              disabled={isLoading}
              className="w-full glass-button px-8 py-6 md:py-5 inline-flex items-center justify-center gap-3 text-lg md:text-base font-semibold disabled:opacity-50"
            >
              {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Lock className="w-6 h-6" />}
              {isLoading ? (lang === "es" ? "Enviando…" : "Sending…") : text.form.submit}
            </button>
          </form>

          {/* BOTÓN VERDE GRANDE ELIMINADO → WhatsApp ahora está solo en el mini-footer */}

          <p className="text-center text-gray-400 text-base md:text-base mt-8">
            {text.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}