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
        name: 'Marie-Claire Dupont',
        location: 'Versailles (78)',
        rating: 5,
        text: 'Excellent travail ! L\'équipe de Couverture Pro a refait entièrement notre toiture en ardoise. Travail soigné, propre et dans les délais. Le devis était clair et le prix honnête. Je recommande vivement !',
        service: 'Réfection toiture ardoise',
        date: 'Janvier 2025',
        initials: 'MC',
    },
    {
        name: 'Jean-Pierre Martin',
        location: 'Fontainebleau (77)',
        rating: 5,
        text: 'Suite à une tempête, j\'avais des tuiles cassées et une fuite importante. Intervention en moins de 48h, réparation parfaite. Très professionnel, je n\'hésiterai pas à les rappeler pour la réfection complète prévue l\'an prochain.',
        service: 'Réparation urgence',
        date: 'Novembre 2024',
        initials: 'JP',
    },
    {
        name: 'Sophie Lefebvre',
        location: 'Rambouillet (78)',
        rating: 5,
        text: 'Nous avons fait appel à Couverture Pro pour l\'isolation de notre toiture et la pose de nouvelles gouttières. Travail impeccable, équipe respectueuse et ponctuelle. Les économies sur notre chauffage sont déjà visibles !',
        service: 'Isolation & zinguerie',
        date: 'Septembre 2024',
        initials: 'SL',
    },
    {
        name: 'François Moreau',
        location: 'Melun (77)',
        rating: 5,
        text: 'Troisième fois que je fais appel à cette entreprise pour différents travaux de couverture. Toujours la même qualité, le même sérieux. Une équipe de vrais professionnels qui aiment leur métier. Merci !',
        service: 'Entretien & traitement',
        date: 'Août 2024',
        initials: 'FM',
    },
    {
        name: 'Isabelle Rousseau',
        location: 'Évry (91)',
        rating: 5,
        text: 'Devis rapide, travaux réalisés en 3 jours pour une toiture complète en tuiles. L\'équipe a tout nettoyé après le chantier. Résultat magnifique, notre maison a retrouvé tout son cachet. Très satisfaite !',
        service: 'Pose tuiles terre cuite',
        date: 'Juin 2024',
        initials: 'IR',
    },
    {
        name: 'Pierre Durand',
        location: 'Corbeil-Essonnes (91)',
        rating: 5,
        text: 'Excellent rapport qualité-prix. Couverture Pro a su nous conseiller sur les meilleures solutions pour notre budget. Travail de qualité, garantie décennale fournie. Je recommande sans hésitation.',
        service: 'Réfection partielle',
        date: 'Mars 2024',
        initials: 'PD',
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
