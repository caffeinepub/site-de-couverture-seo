import { Star, Quote } from 'lucide-react';

interface Testimonial {
    name: string;
    location: string;
    rating: number;
    text: string;
    service: string;
    date: string;
    initials: string;
}

const testimonials: Testimonial[] = [
    {
        name: 'Nathalie Berger',
        location: 'Eaubonne (95)',
        rating: 5,
        text: 'Nous avons fait appel à VERDIER COUVERTURE pour une réfection complète de notre toiture en tuiles. Travail absolument impeccable, équipe sérieuse et ponctuelle. Le chantier a été livré en avance et tout a été nettoyé après les travaux. Je recommande vivement !',
        service: 'Réfection de toiture',
        date: 'Janvier 2026',
        initials: 'NB',
    },
    {
        name: 'Thierry Marchand',
        location: 'Argenteuil (95)',
        rating: 5,
        text: 'Suite à une fuite importante après les fortes pluies, VERDIER COUVERTURE est intervenu en moins de 24h. Diagnostic précis, réparation rapide et soignée. Le prix était très raisonnable pour une intervention d\'urgence. Merci pour votre réactivité !',
        service: 'Réparation urgence',
        date: 'Novembre 2025',
        initials: 'TM',
    },
    {
        name: 'Céline Fontaine',
        location: 'Montmorency (95)',
        rating: 5,
        text: 'VERDIER COUVERTURE a réalisé l\'isolation de notre toiture et la pose de nouvelles gouttières en zinc. Le résultat est parfait, notre maison est bien plus chaude cet hiver. L\'équipe est professionnelle, propre et respectueuse. Très satisfaite de la prestation !',
        service: 'Isolation & zinguerie',
        date: 'Septembre 2025',
        initials: 'CF',
    },
    {
        name: 'Alain Petit',
        location: 'Taverny (95)',
        rating: 5,
        text: 'Deuxième fois que je fais appel à VERDIER COUVERTURE, toujours la même qualité et le même professionnalisme. Cette fois pour un traitement hydrofuge et un nettoyage complet de la toiture. Résultat bluffant, la toiture est comme neuve. Bravo à toute l\'équipe !',
        service: 'Traitement & nettoyage',
        date: 'Juin 2025',
        initials: 'AP',
    },
    {
        name: 'Sandrine Leroy',
        location: 'Sarcelles (95)',
        rating: 5,
        text: 'Nous avons contacté VERDIER COUVERTURE pour la pose de tuiles terre cuite sur notre extension. Le devis était clair et détaillé, sans mauvaise surprise. Les artisans sont minutieux et le rendu final est magnifique. Notre maison a vraiment gagné en cachet !',
        service: 'Pose de tuiles terre cuite',
        date: 'Mars 2025',
        initials: 'SL',
    },
    {
        name: 'Olivier Renaud',
        location: 'Ermont (95)',
        rating: 5,
        text: 'Excellent rapport qualité-prix avec VERDIER COUVERTURE. Ils ont su nous conseiller sur les meilleures solutions pour notre budget et ont réalisé la réfection partielle de notre toiture avec soin. La garantie décennale nous rassure. Je les recommande sans hésitation à mon entourage.',
        service: 'Réfection partielle',
        date: 'Décembre 2024',
        initials: 'OR',
    },
];

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5" aria-label={`Note : ${rating} étoiles sur 5`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                    key={i}
                    size={14}
                    className={i < rating ? 'text-[oklch(0.72_0.15_65)] fill-[oklch(0.72_0.15_65)]' : 'text-[oklch(0.87_0.015_70)]'}
                    aria-hidden="true"
                />
            ))}
        </div>
    );
}

export default function Testimonials() {
    return (
        <section
            id="temoignages"
            className="py-20 lg:py-28 bg-[oklch(0.975_0.005_80)] tile-pattern"
            aria-labelledby="testimonials-heading"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <header className="text-center mb-14">
                    <p className="text-[oklch(0.55_0.13_42)] text-sm font-semibold tracking-widest uppercase mb-3">
                        Ils nous font confiance
                    </p>
                    <div className="section-divider" aria-hidden="true" />
                    <h2
                        id="testimonials-heading"
                        className="text-3xl sm:text-4xl lg:text-5xl section-heading mb-4"
                    >
                        Témoignages de Nos Clients
                    </h2>
                    <p className="section-subheading text-base sm:text-lg max-w-2xl mx-auto">
                        Plus de 1 500 clients nous ont fait confiance. Découvrez leurs retours d'expérience
                        sur nos travaux de couverture et toiture.
                    </p>

                    {/* Overall rating */}
                    <div className="inline-flex items-center gap-3 mt-6 bg-white px-6 py-3 rounded-full border border-[oklch(0.87_0.015_70)] shadow-sm">
                        <div className="flex gap-0.5" aria-hidden="true">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} size={16} className="text-[oklch(0.72_0.15_65)] fill-[oklch(0.72_0.15_65)]" />
                            ))}
                        </div>
                        <span className="font-bold text-[oklch(0.22_0.015_50)]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>4.9/5</span>
                        <span className="text-[oklch(0.52_0.02_60)] text-sm">basé sur 127 avis</span>
                    </div>
                </header>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <article
                            key={testimonial.name}
                            className="testimonial-card"
                            aria-label={`Témoignage de ${testimonial.name}`}
                            itemScope
                            itemType="https://schema.org/Review"
                        >
                            {/* Quote icon */}
                            <div className="flex justify-end mb-2">
                                <Quote size={20} className="text-[oklch(0.55_0.13_42/0.3)]" aria-hidden="true" />
                            </div>

                            {/* Rating */}
                            <div className="mb-3">
                                <StarRating rating={testimonial.rating} />
                            </div>

                            {/* Text */}
                            <blockquote
                                className="text-[oklch(0.42_0.02_55)] text-sm leading-relaxed mb-5 pt-2"
                                itemProp="reviewBody"
                            >
                                "{testimonial.text}"
                            </blockquote>

                            {/* Service badge */}
                            <div className="mb-4">
                                <span className="inline-block bg-[oklch(0.55_0.13_42/0.1)] text-[oklch(0.45_0.14_38)] text-xs font-semibold px-3 py-1 rounded-full">
                                    {testimonial.service}
                                </span>
                            </div>

                            {/* Author */}
                            <footer className="flex items-center gap-3 pt-4 border-t border-[oklch(0.87_0.015_70)]">
                                <div
                                    className="w-10 h-10 rounded-full bg-[oklch(0.55_0.13_42)] flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                                    aria-hidden="true"
                                >
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <cite
                                        className="font-bold text-[oklch(0.22_0.015_50)] text-sm not-italic"
                                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                                        itemProp="author"
                                    >
                                        {testimonial.name}
                                    </cite>
                                    <div className="text-[oklch(0.52_0.02_60)] text-xs">
                                        {testimonial.location} · {testimonial.date}
                                    </div>
                                </div>
                            </footer>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
