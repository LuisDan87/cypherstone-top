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
      success: "Mensaje enviado. Responderemos en menos de 24 horas.",
    },
    direct: { whatsapp: "WhatsApp", telegram: "Telegram", email: "Email encriptado" },
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
      success: "Message sent. We'll respond within 24 hours.",
    },
    direct: { whatsapp: "WhatsApp", telegram: "Telegram", email: "Encrypted email" },
    disclaimer: "Response within 24 hours",
  },
};

export function ContactSection({ lang }: { lang: Language }) {
  const text = content[lang];
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "", contact: "", email: "", message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { ref, isInView } = useInView();

  // CAMBIÁ SOLO ESTAS DOS LÍNEAS ↓↓↓
  const RESEND_API_KEY = "re_TU_API_KEY_DE_RESEND_AQUI";           // ← pegá tu key real
  const TU_EMAIL = "tuemail@gmail.com";                            // ← tu mail personal
  // ↑↑↑

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Cypherstone Contacto <no-reply@cypherstone.com.ar>",
          to: [TU_EMAIL],
          reply_to: formData.email,
          subject: `Nueva consulta web – ${formData.name}`,
          html: `
            <h2>Nueva consulta desde cypherstone.com.ar</h2>
            <p><strong>Nombre:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>WhatsApp/Telegram:</strong> ${formData.contact || "—"}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${formData.message.replace(/\n/g, "<br>")}</p>
            <hr>
            <small>Enviado automáticamente desde el ${new Date().toLocaleString("es-AR")}</small>
          `,
        }),
      });

      if (!res.ok) throw new Error("Error al enviar con Resend");

      toast({ title: "Mensaje enviado ✓", description: text.form.success });
      setFormData({ name: "", contact: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo enviar. Intentá de nuevo en unos segundos.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" ref={ref} className={`relative py-16 md:py-32 px-4 md:px-6 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-cyan-400">{text.title}</h2>
          <p className="text-base text-gray-medium inline-flex items-center gap-2 justify-center">
            <Lock className="w-4 h-4" /> {text.subtitle}
          </p>
        </div>

        <div className="space-y-8">
          <form onSubmit={handleSubmit} className="glass-card p-4 md:p-8 space-y-4 md:space-y-6">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder={text.form.name} required className="bg-white/5 border border-white/20 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-white placeholder:text-gray-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all text-sm md:text-base" />
              <input type="text" name="contact" value={formData.contact} onChange={handleChange} placeholder={text.form.contact} className="bg-white/5 border border-white/20 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-white placeholder:text-gray-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all text-sm md:text-base" />
            </div>

            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={text.form.email} required className="w-full bg-white/5 border border-white/20 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-white placeholder:text-gray-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all text-sm md:text-base" />

            <textarea name="message" value={formData.message} onChange={handleChange} placeholder={text.form.message} required rows={5} className="w-full bg-white/5 border border-white/20 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-white placeholder:text-gray-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all resize-none text-sm md:text-base" />

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