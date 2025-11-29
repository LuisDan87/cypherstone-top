import { Lock, Send, MessageCircle, Mail } from "lucide-react";
import { useState } from "react";

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
    direct: {
      whatsapp: "WhatsApp",
      telegram: "Telegram",
      email: "Email encriptado",
    },
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
    direct: {
      whatsapp: "WhatsApp",
      telegram: "Telegram",
      email: "Encrypted email",
    },
    disclaimer: "Response within 24 hours",
  },
};

export function ContactSection({ lang }: { lang: Language }) {
  const text = content[lang];
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", contact: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-cyan-400">
            {text.title}
          </h2>
          <p className="text-base text-gray-medium inline-flex items-center gap-2 justify-center">
            <Lock className="w-4 h-4" />
            {text.subtitle}
          </p>
        </div>

        <div className="space-y-8">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={text.form.name}
                required
                className="bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-gray-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              />
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder={text.form.contact}
                className="bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-gray-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              />
            </div>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={text.form.email}
              required
              className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-gray-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={text.form.message}
              required
              rows={6}
              className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-gray-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all resize-none"
            />

            <button
              type="submit"
              disabled={submitted}
              className="w-full glass-button px-8 py-5 inline-flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Lock className="w-5 h-5" />
              {submitted ? text.form.success : text.form.submit}
            </button>
          </form>

          {/* Direct Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#25D366]/10 hover:bg-[#25D366]/20 border-2 border-[#25D366]/30 rounded-2xl px-6 py-4 text-white font-semibold inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              {text.direct.whatsapp}
            </a>

            <a
              href="https://t.me/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#0088CC]/10 hover:bg-[#0088CC]/20 border-2 border-[#0088CC]/30 rounded-2xl px-6 py-4 text-white font-semibold inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
            >
              <Send className="w-5 h-5" />
              {text.direct.telegram}
            </a>

            <a
              href="mailto:contact@cypherstone.com"
              className="flex-1 bg-cyan-400/10 hover:bg-cyan-400/20 border-2 border-cyan-400/30 rounded-2xl px-6 py-4 text-white font-semibold inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              {text.direct.email}
            </a>
          </div>

          <p className="text-center text-sm text-gray-dark">
            {text.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
