import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Info } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const initialForm: FormData = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
};

const serviceOptions = [
  'Réfection de toiture',
  'Pose de tuiles',
  'Zinguerie',
  'Isolation toiture',
  'Réparation / Urgence',
  'Nettoyage & traitement',
  'Autre',
];

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = 'Nom requis';
    if (!form.phone.trim()) newErrors.phone = 'Téléphone requis';
    if (!form.message.trim()) newErrors.message = 'Message requis';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const subject = encodeURIComponent(
        `Demande de devis - ${form.service || 'Couverture'} - ${form.name}`
      );
      const body = encodeURIComponent(
        `Nom : ${form.name}\n` +
        `Téléphone : ${form.phone}\n` +
        `Email : ${form.email || 'Non renseigné'}\n` +
        `Service : ${form.service || 'Non précisé'}\n\n` +
        `Message :\n${form.message}`
      );
      const mailtoLink = `mailto:sv.couverture95@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      setSubmitted(true);
    } catch {
      // If mailto fails, still show confirmation
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-20 bg-charcoal" aria-labelledby="contact-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-offwhite/5 border border-offwhite/10 rounded-2xl p-12">
            <CheckCircle size={64} className="text-terracotta mx-auto mb-6" />
            <h2 className="font-serif text-3xl font-bold text-offwhite mb-4">
              Demande envoyée !
            </h2>
            <p className="text-offwhite/70 text-lg mb-2">
              Votre client de messagerie s'est ouvert avec votre demande de devis.
            </p>
            <p className="text-offwhite/50 text-sm mb-8">
              Votre message sera envoyé à{' '}
              <span className="text-terracotta">sv.couverture95@gmail.com</span>.
              Nous vous répondrons dans les plus brefs délais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0663739400"
                className="btn-terracotta flex items-center justify-center gap-2"
              >
                <Phone size={16} />
                <span>06 63 73 94 00</span>
              </a>
              <button
                onClick={handleReset}
                className="border border-offwhite/20 text-offwhite/70 hover:text-offwhite hover:border-offwhite/40 px-6 py-3 rounded font-medium transition-colors duration-200"
              >
                Nouvelle demande
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-charcoal" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-terracotta text-sm font-medium tracking-widest uppercase">Contact</span>
          <h2 id="contact-heading" className="font-serif text-4xl lg:text-5xl font-bold text-offwhite mt-2 mb-4">
            Demandez Votre Devis Gratuit
          </h2>
          <p className="text-offwhite/60 max-w-2xl mx-auto text-lg">
            Réponse sous 24h — Devis gratuit et sans engagement
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-bold text-offwhite mb-6">Nous Contacter</h3>
              <div className="space-y-4">
                <a
                  href="tel:0663739400"
                  className="flex items-start gap-4 group"
                  aria-label="Appeler le mobile"
                >
                  <div className="w-10 h-10 rounded-lg bg-terracotta/20 flex items-center justify-center flex-shrink-0 group-hover:bg-terracotta/30 transition-colors">
                    <Phone size={18} className="text-terracotta" />
                  </div>
                  <div>
                    <div className="text-offwhite/50 text-xs uppercase tracking-wide mb-1">Mobile</div>
                    <div className="text-offwhite font-medium group-hover:text-terracotta transition-colors">
                      06 63 73 94 00
                    </div>
                  </div>
                </a>

                <a
                  href="tel:0172761763"
                  className="flex items-start gap-4 group"
                  aria-label="Appeler le fixe"
                >
                  <div className="w-10 h-10 rounded-lg bg-terracotta/20 flex items-center justify-center flex-shrink-0 group-hover:bg-terracotta/30 transition-colors">
                    <Phone size={18} className="text-terracotta" />
                  </div>
                  <div>
                    <div className="text-offwhite/50 text-xs uppercase tracking-wide mb-1">Fixe</div>
                    <div className="text-offwhite font-medium group-hover:text-terracotta transition-colors">
                      01 72 76 17 63
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:sv.couverture95@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-terracotta/20 flex items-center justify-center flex-shrink-0 group-hover:bg-terracotta/30 transition-colors">
                    <Mail size={18} className="text-terracotta" />
                  </div>
                  <div>
                    <div className="text-offwhite/50 text-xs uppercase tracking-wide mb-1">Email</div>
                    <div className="text-offwhite font-medium group-hover:text-terracotta transition-colors break-all">
                      sv.couverture95@gmail.com
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-terracotta/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-terracotta" />
                  </div>
                  <div>
                    <div className="text-offwhite/50 text-xs uppercase tracking-wide mb-1">Zone</div>
                    <div className="text-offwhite font-medium">Île-de-France</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-terracotta/20 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-terracotta" />
                  </div>
                  <div>
                    <div className="text-offwhite/50 text-xs uppercase tracking-wide mb-1">Horaires</div>
                    <div className="text-offwhite font-medium">Lun–Sam : 7h–19h</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Info banner */}
            <div className="flex items-start gap-3 bg-terracotta/10 border border-terracotta/20 rounded-lg p-4">
              <Info size={16} className="text-terracotta flex-shrink-0 mt-0.5" />
              <p className="text-offwhite/70 text-sm leading-relaxed">
                Le formulaire ouvrira votre client de messagerie avec votre demande pré-remplie,
                adressée à <span className="text-terracotta">sv.couverture95@gmail.com</span>.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-offwhite/5 border border-offwhite/10 rounded-2xl p-8 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-offwhite/70 text-sm font-medium mb-2">
                    Nom complet <span className="text-terracotta">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jean Dupont"
                    className={`form-input ${errors.name ? 'border-red-400' : ''}`}
                    autoComplete="name"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-offwhite/70 text-sm font-medium mb-2">
                    Téléphone <span className="text-terracotta">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="06 XX XX XX XX"
                    className={`form-input ${errors.phone ? 'border-red-400' : ''}`}
                    autoComplete="tel"
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-offwhite/70 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jean@exemple.fr"
                  className="form-input"
                  autoComplete="email"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-offwhite/70 text-sm font-medium mb-2">
                  Type de service
                </label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Sélectionnez un service</option>
                  {serviceOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-offwhite/70 text-sm font-medium mb-2">
                  Description des travaux <span className="text-terracotta">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Décrivez vos travaux : type de toiture, surface approximative, problème constaté..."
                  className={`form-input resize-none ${errors.message ? 'border-red-400' : ''}`}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="btn-terracotta w-full flex items-center justify-center gap-2 text-base py-4"
              >
                <Send size={18} />
                <span>Envoyer ma demande de devis</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
