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
                className="bg-white/5 border border-white/20 rounded-xl md:rounded-2xl px-5 py-4 text-white placeholder:text-gray-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              />
              <input
                type="text"
                name="contact"
                placeholder={text.form.contact}
                className="bg-white/5 border border-white/20 rounded-xl md:rounded-2xl px-5 py-4 text-white placeholder:text-gray-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder={text.form.email}
              required
              className="w-full bg-white/5 border border-white/20 rounded-xl md:rounded-2xl px-5 py-4 text-white placeholder:text-gray-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
            />

            <textarea
              name="message"
              placeholder={text.form.message}
              required
              rows={5}
              className="w-full bg-white/5 border border-white/20 rounded-xl md:rounded-2xl px-5 py-4 text-white placeholder:text-gray-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all resize-none"
            />

            <button
              type="submit"
              disabled={isLoading}
              className="w-full glass-button px-8 py-5 inline-flex items-center justify-center gap-3 text-base md:text-lg font-semibold disabled:opacity-50"
            >
              {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Lock className="w-6 h-6" />}
              {isLoading ? (lang === "es" ? "Enviando…" : "Sending…") : text.form.submit}
            </button>
          </form>

          {/* WhatsApp Button – Logo oficial perfecto 2025 */}
          <div className="flex justify-center">
            <a
              href="https://wa.me/5491138113906"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#25D366] hover:bg-[#1da851] transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/30 shadow-xl"
              aria-label="Contactar por WhatsApp"
            >
              <svg
                className="w-11 h-11 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
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