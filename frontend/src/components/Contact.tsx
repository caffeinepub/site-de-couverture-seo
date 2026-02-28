import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

interface FormData {
    nom: string;
    email: string;
    telephone: string;
    service: string;
    message: string;
}

interface FormErrors {
    nom?: string;
    email?: string;
    telephone?: string;
    message?: string;
}

const serviceOptions = [
    'Réfection de toiture complète',
    'Pose de tuiles ou ardoises',
    'Réparation & entretien',
    'Isolation thermique',
    'Zinguerie & gouttières',
    'Traitement & nettoyage',
    'Autre',
];

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        nom: '',
        email: '',
        telephone: '',
        service: '',
        message: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = (): boolean => {
        const newErrors: FormErrors = {};
        if (!formData.nom.trim()) newErrors.nom = 'Veuillez entrer votre nom.';
        if (!formData.email.trim()) {
            newErrors.email = 'Veuillez entrer votre adresse e-mail.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Adresse e-mail invalide.';
        }
        if (!formData.telephone.trim()) {
            newErrors.telephone = 'Veuillez entrer votre numéro de téléphone.';
        } else if (!/^[\d\s\+\-\.]{8,}$/.test(formData.telephone)) {
            newErrors.telephone = 'Numéro de téléphone invalide.';
        }
        if (!formData.message.trim()) newErrors.message = 'Veuillez décrire votre projet.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setIsSubmitting(true);
        // Simulate form submission (mailto fallback)
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsSubmitting(false);
        setSubmitted(true);
    };

    return (
        <section
            id="contact"
            className="py-20 lg:py-28 bg-white"
            aria-labelledby="contact-heading"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <header className="text-center mb-14">
                    <p className="text-[oklch(0.55_0.13_42)] text-sm font-semibold tracking-widest uppercase mb-3">
                        Parlons de votre projet
                    </p>
                    <div className="section-divider" aria-hidden="true" />
                    <h2
                        id="contact-heading"
                        className="text-3xl sm:text-4xl lg:text-5xl section-heading mb-4"
                    >
                        Contactez-Nous
                    </h2>
                    <p className="section-subheading text-base sm:text-lg max-w-2xl mx-auto">
                        Obtenez votre devis gratuit sous 24h. Notre équipe est à votre disposition
                        pour étudier votre projet de couverture et vous conseiller.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
                    {/* Contact Info */}
                    <aside className="lg:col-span-2 space-y-6" aria-label="Informations de contact">
                        <div>
                            <h3 className="text-xl font-bold text-[oklch(0.22_0.015_50)] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                                Nos Coordonnées
                            </h3>
                            <div className="space-y-4">
                                {/* Mobile phone */}
                                <a
                                    href="tel:+33663739400"
                                    className="flex items-start gap-3 group"
                                    aria-label="Téléphone mobile : 06 63 73 94 00"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[oklch(0.55_0.13_42/0.1)] flex items-center justify-center text-[oklch(0.55_0.13_42)] group-hover:bg-[oklch(0.55_0.13_42)] group-hover:text-white transition-all duration-200">
                                        <Phone size={18} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-[oklch(0.52_0.02_60)] font-medium uppercase tracking-wider mb-0.5">Mobile</div>
                                        <div className="text-[oklch(0.22_0.015_50)] font-medium text-sm group-hover:text-[oklch(0.55_0.13_42)] transition-colors">06 63 73 94 00</div>
                                    </div>
                                </a>
                                {/* Landline phone */}
                                <a
                                    href="tel:+33172761763"
                                    className="flex items-start gap-3 group"
                                    aria-label="Téléphone fixe : 01 72 76 17 63"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[oklch(0.55_0.13_42/0.1)] flex items-center justify-center text-[oklch(0.55_0.13_42)] group-hover:bg-[oklch(0.55_0.13_42)] group-hover:text-white transition-all duration-200">
                                        <Phone size={18} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-[oklch(0.52_0.02_60)] font-medium uppercase tracking-wider mb-0.5">Fixe</div>
                                        <div className="text-[oklch(0.22_0.015_50)] font-medium text-sm group-hover:text-[oklch(0.55_0.13_42)] transition-colors">01 72 76 17 63</div>
                                    </div>
                                </a>
                                {/* Email */}
                                <a
                                    href="mailto:sv.couverture95@gmail.com"
                                    className="flex items-start gap-3 group"
                                    aria-label="E-mail : sv.couverture95@gmail.com"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[oklch(0.55_0.13_42/0.1)] flex items-center justify-center text-[oklch(0.55_0.13_42)] group-hover:bg-[oklch(0.55_0.13_42)] group-hover:text-white transition-all duration-200">
                                        <Mail size={18} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-[oklch(0.52_0.02_60)] font-medium uppercase tracking-wider mb-0.5">E-mail</div>
                                        <div className="text-[oklch(0.22_0.015_50)] font-medium text-sm group-hover:text-[oklch(0.55_0.13_42)] transition-colors">sv.couverture95@gmail.com</div>
                                    </div>
                                </a>
                                {/* Address */}
                                <a
                                    href="https://maps.google.com/?q=206+chemin+de+la+petite+patelle+Pierrelaye+95480"
                                    className="flex items-start gap-3 group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Adresse : 206 chemin de la petite patelle, Pierrelaye 95480"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[oklch(0.55_0.13_42/0.1)] flex items-center justify-center text-[oklch(0.55_0.13_42)] group-hover:bg-[oklch(0.55_0.13_42)] group-hover:text-white transition-all duration-200">
                                        <MapPin size={18} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-[oklch(0.52_0.02_60)] font-medium uppercase tracking-wider mb-0.5">Adresse</div>
                                        <div className="text-[oklch(0.22_0.015_50)] font-medium text-sm group-hover:text-[oklch(0.55_0.13_42)] transition-colors">206 chemin de la petite patelle, Pierrelaye 95480</div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="bg-[oklch(0.975_0.005_80)] rounded-xl p-5 border border-[oklch(0.87_0.015_70)]">
                            <div className="flex items-center gap-2 mb-3">
                                <Clock size={16} className="text-[oklch(0.55_0.13_42)]" aria-hidden="true" />
                                <h3 className="font-bold text-[oklch(0.22_0.015_50)] text-sm uppercase tracking-wider">
                                    Horaires d'ouverture
                                </h3>
                            </div>
                            <dl className="space-y-1.5 text-sm">
                                {[
                                    { day: 'Lundi – Vendredi', hours: '08h00 – 18h00' },
                                    { day: 'Samedi', hours: '09h00 – 13h00' },
                                    { day: 'Dimanche', hours: 'Fermé' },
                                ].map((item) => (
                                    <div key={item.day} className="flex justify-between">
                                        <dt className="text-[oklch(0.42_0.02_55)]">{item.day}</dt>
                                        <dd className={`font-medium ${item.hours === 'Fermé' ? 'text-[oklch(0.52_0.02_60)]' : 'text-[oklch(0.22_0.015_50)]'}`}>
                                            {item.hours}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>

                        {/* Emergency */}
                        <div className="bg-[oklch(0.55_0.13_42)] rounded-xl p-5 text-white">
                            <h3 className="font-bold mb-1 text-base" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                                Urgence Toiture ?
                            </h3>
                            <p className="text-white/80 text-sm mb-3">
                                Fuite, tuiles arrachées par le vent ? Nous intervenons en urgence 7j/7.
                            </p>
                            <a
                                href="tel:+33663739400"
                                className="inline-flex items-center gap-2 bg-white text-[oklch(0.55_0.13_42)] font-semibold text-sm px-4 py-2 rounded-lg hover:bg-[oklch(0.96_0.012_75)] transition-colors"
                                aria-label="Appeler pour une urgence toiture"
                            >
                                <Phone size={14} />
                                Appeler maintenant
                            </a>
                        </div>
                    </aside>

                    {/* Contact Form */}
                    <div className="lg:col-span-3">
                        {submitted ? (
                            <div className="h-full flex items-center justify-center">
                                <div className="text-center py-16">
                                    <div className="w-16 h-16 bg-[oklch(0.55_0.13_42/0.1)] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle size={32} className="text-[oklch(0.55_0.13_42)]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[oklch(0.22_0.015_50)] mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                                        Demande envoyée !
                                    </h3>
                                    <p className="text-[oklch(0.42_0.02_55)] text-base max-w-sm mx-auto">
                                        Merci pour votre message. Nous vous recontacterons sous 24h pour étudier votre projet.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                noValidate
                                aria-label="Formulaire de demande de devis"
                                className="space-y-5"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {/* Nom */}
                                    <div>
                                        <label htmlFor="nom" className="block text-sm font-medium text-[oklch(0.32_0.015_50)] mb-1.5">
                                            Nom complet <span className="text-[oklch(0.55_0.13_42)]" aria-hidden="true">*</span>
                                        </label>
                                        <input
                                            id="nom"
                                            name="nom"
                                            type="text"
                                            autoComplete="name"
                                            value={formData.nom}
                                            onChange={handleChange}
                                            className={`form-input ${errors.nom ? 'border-red-400 focus:ring-red-300' : ''}`}
                                            placeholder="Jean Dupont"
                                            aria-required="true"
                                            aria-describedby={errors.nom ? 'nom-error' : undefined}
                                        />
                                        {errors.nom && (
                                            <p id="nom-error" className="mt-1 text-xs text-red-500" role="alert">{errors.nom}</p>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-[oklch(0.32_0.015_50)] mb-1.5">
                                            Adresse e-mail <span className="text-[oklch(0.55_0.13_42)]" aria-hidden="true">*</span>
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`form-input ${errors.email ? 'border-red-400 focus:ring-red-300' : ''}`}
                                            placeholder="jean@exemple.fr"
                                            aria-required="true"
                                            aria-describedby={errors.email ? 'email-error' : undefined}
                                        />
                                        {errors.email && (
                                            <p id="email-error" className="mt-1 text-xs text-red-500" role="alert">{errors.email}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {/* Téléphone */}
                                    <div>
                                        <label htmlFor="telephone" className="block text-sm font-medium text-[oklch(0.32_0.015_50)] mb-1.5">
                                            Téléphone <span className="text-[oklch(0.55_0.13_42)]" aria-hidden="true">*</span>
                                        </label>
                                        <input
                                            id="telephone"
                                            name="telephone"
                                            type="tel"
                                            autoComplete="tel"
                                            value={formData.telephone}
                                            onChange={handleChange}
                                            className={`form-input ${errors.telephone ? 'border-red-400 focus:ring-red-300' : ''}`}
                                            placeholder="06 XX XX XX XX"
                                            aria-required="true"
                                            aria-describedby={errors.telephone ? 'telephone-error' : undefined}
                                        />
                                        {errors.telephone && (
                                            <p id="telephone-error" className="mt-1 text-xs text-red-500" role="alert">{errors.telephone}</p>
                                        )}
                                    </div>

                                    {/* Service */}
                                    <div>
                                        <label htmlFor="service" className="block text-sm font-medium text-[oklch(0.32_0.015_50)] mb-1.5">
                                            Type de prestation
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="form-input"
                                        >
                                            <option value="">Sélectionner un service</option>
                                            {serviceOptions.map(opt => (
                                                <option key={opt} value={opt}>{opt}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-[oklch(0.32_0.015_50)] mb-1.5">
                                        Description du projet <span className="text-[oklch(0.55_0.13_42)]" aria-hidden="true">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`form-input resize-none ${errors.message ? 'border-red-400 focus:ring-red-300' : ''}`}
                                        placeholder="Décrivez votre projet : type de toiture, surface approximative, travaux souhaités..."
                                        aria-required="true"
                                        aria-describedby={errors.message ? 'message-error' : undefined}
                                    />
                                    {errors.message && (
                                        <p id="message-error" className="mt-1 text-xs text-red-500" role="alert">{errors.message}</p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-terracotta w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                                    aria-busy={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                            </svg>
                                            Envoi en cours…
                                        </>
                                    ) : (
                                        <>
                                            <Send size={16} aria-hidden="true" />
                                            Envoyer ma demande de devis
                                        </>
                                    )}
                                </button>

                                <p className="text-xs text-[oklch(0.52_0.02_60)] text-center">
                                    Vos données sont confidentielles et ne seront jamais partagées.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
