import { useState, useCallback } from 'react';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

function safeOpenMailto(data: FormData): void {
  try {
    const subject = encodeURIComponent(`Demande de devis - ${data.subject || 'Toiture'}`);
    const body = encodeURIComponent(
      `Nom : ${data.name}\nEmail : ${data.email}\nTéléphone : ${data.phone}\n\n${data.message}`
    );
    const href = `mailto:contact@verdiercouverture.fr?subject=${subject}&body=${body}`;
    const a = document.createElement('a');
    a.href = href;
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } catch {
    // ignore mailto errors
  }
}

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value ?? '' }));
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    safeOpenMailto(form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  }, [form]);

  return (
    <section id="contact" className="py-20 lg:py-28 bg-cream" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-terracotta font-semibold tracking-widest uppercase text-sm mb-3">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Demandez votre devis gratuit
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Réponse sous 48h. Déplacement et devis gratuits sur toute l'Île-de-France.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-8">
              Nos coordonnées
            </h3>
            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  label: 'Téléphone',
                  value: '06 00 00 00 00',
                  href: 'tel:+33600000000',
                },
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'contact@verdiercouverture.fr',
                  href: 'mailto:contact@verdiercouverture.fr',
                },
                {
                  icon: MapPin,
                  label: 'Adresse',
                  value: '12 Rue des Artisans, 95220 Herblay-sur-Seine',
                  href: null,
                },
                {
                  icon: MapPin,
                  label: 'Zone d\'intervention',
                  value: 'Île-de-France — rayon 80 km',
                  href: null,
                },
                {
                  icon: Clock,
                  label: 'Horaires',
                  value: 'Lun–Ven : 8h–18h | Sam : 9h–12h',
                  href: null,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-terracotta/10 flex items-center justify-center">
                      <Icon size={22} className="text-terracotta" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-muted-foreground hover:text-terracotta transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-8">
              Envoyez-nous un message
            </h3>
            {submitted ? (
              <div className="bg-terracotta/10 border border-terracotta/30 rounded-sm p-6 text-center">
                <p className="text-terracotta font-semibold text-lg mb-2">Message envoyé !</p>
                <p className="text-muted-foreground text-sm">
                  Votre client mail s'est ouvert. Nous vous répondrons dans les 48h.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                      Nom complet <span className="text-terracotta" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Jean Dupont"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                      Téléphone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="06 00 00 00 00"
                      autoComplete="tel"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                    Email <span className="text-terracotta" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="jean@exemple.fr"
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
                    Type de prestation
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="">Sélectionnez une prestation</option>
                    <option value="Réfection de toiture">Réfection de toiture</option>
                    <option value="Pose de tuiles">Pose de tuiles</option>
                    <option value="Zinguerie">Zinguerie</option>
                    <option value="Isolation">Isolation</option>
                    <option value="Réparation urgente">Réparation urgente</option>
                    <option value="Nettoyage et traitement">Nettoyage et traitement</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                    Message <span className="text-terracotta" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="form-input resize-none"
                    placeholder="Décrivez votre projet ou votre problème..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn-terracotta w-full flex items-center justify-center gap-2 py-3.5 font-semibold"
                >
                  <Send size={18} aria-hidden="true" />
                  Envoyer le message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
