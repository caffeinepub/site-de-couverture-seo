interface Service {
    title: string;
    description: string;
    features: string[];
    imgSrc: string;
    imgAlt: string;
}

const services: Service[] = [
    {
        title: 'Réfection de Toiture Complète',
        description: 'Remplacement intégral de votre couverture avec des matériaux de qualité supérieure. Nous intervenons sur tous types de toitures : tuiles, ardoises, zinc.',
        features: ['Diagnostic gratuit', 'Matériaux certifiés', 'Garantie 10 ans'],
        imgSrc: '/assets/generated/service-refection-toiture.dim_800x500.png',
        imgAlt: 'Réfection complète de toiture en tuiles',
    },
    {
        title: 'Pose de Tuiles & Ardoises',
        description: 'Installation experte de tuiles en terre cuite, ardoises naturelles ou synthétiques. Chaque pose est réalisée dans les règles de l\'art pour une étanchéité parfaite.',
        features: ['Tuiles terre cuite', 'Ardoises naturelles', 'Zinc et cuivre'],
        imgSrc: '/assets/generated/service-pose-tuiles.dim_800x500.png',
        imgAlt: 'Pose de tuiles et ardoises sur toiture',
    },
    {
        title: 'Réparation & Entretien',
        description: 'Intervention rapide pour réparer fuites, tuiles cassées ou gouttières endommagées. Entretien préventif pour prolonger la durée de vie de votre toiture.',
        features: ['Intervention 48h', 'Nettoyage mousse', 'Traitement hydrofuge'],
        imgSrc: '/assets/generated/service-reparation.dim_800x500.png',
        imgAlt: 'Réparation et entretien de toiture',
    },
    {
        title: 'Isolation Thermique',
        description: 'Amélioration de l\'isolation de votre toiture pour réduire vos factures d\'énergie. Travaux éligibles aux aides de l\'État (MaPrimeRénov\').',
        features: ['Éligible MaPrimeRénov\'', 'Économies d\'énergie', 'Confort amélioré'],
        imgSrc: '/assets/generated/service-isolation.dim_800x500.png',
        imgAlt: 'Isolation thermique de toiture',
    },
    {
        title: 'Zinguerie & Évacuation',
        description: 'Pose et remplacement de gouttières, chéneaux, descentes d\'eau pluviale. Travaux de zinguerie pour une étanchéité durable.',
        features: ['Gouttières aluminium', 'Zinc naturel', 'Cuivre traditionnel'],
        imgSrc: '/assets/generated/service-zinguerie.dim_800x500.png',
        imgAlt: 'Zinguerie et évacuation des eaux pluviales',
    },
    {
        title: 'Traitement & Protection',
        description: 'Nettoyage haute pression, traitement anti-mousse et application d\'hydrofuge pour protéger et embellir votre toiture durablement.',
        features: ['Nettoyage HP', 'Anti-mousse', 'Hydrofuge longue durée'],
        imgSrc: '/assets/generated/service-nettoyage.dim_800x500.png',
        imgAlt: 'Nettoyage et traitement hydrofuge de toiture',
    },
];

export default function Services() {
    return (
        <section
            id="services"
            className="py-20 lg:py-28 bg-[oklch(0.975_0.005_80)] tile-pattern"
            aria-labelledby="services-heading"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <header className="text-center mb-14">
                    <p className="text-[oklch(0.55_0.13_42)] text-sm font-semibold tracking-widest uppercase mb-3">
                        Ce que nous faisons
                    </p>
                    <div className="section-divider" aria-hidden="true" />
                    <h2
                        id="services-heading"
                        className="text-3xl sm:text-4xl lg:text-5xl section-heading mb-4"
                    >
                        Nos Services de Couverture
                    </h2>
                    <p className="section-subheading text-base sm:text-lg max-w-2xl mx-auto">
                        De la réfection complète à l'entretien régulier, nous proposons une gamme complète
                        de services pour protéger et valoriser votre patrimoine immobilier.
                    </p>
                </header>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <article
                            key={service.title}
                            className="card-service group overflow-hidden"
                            aria-label={`Service : ${service.title}`}
                        >
                            {/* Service Photo */}
                            <div className="relative -mx-6 -mt-6 mb-5 overflow-hidden h-44">
                                <img
                                    src={service.imgSrc}
                                    alt={service.imgAlt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                    decoding="async"
                                />
                                {/* Subtle overlay for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.015_50/0.35)] to-transparent" aria-hidden="true" />
                            </div>

                            {/* Title */}
                            <div className="mb-3">
                                <h3 className="text-lg font-bold text-[oklch(0.22_0.015_50)] leading-snug" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                                    {service.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-[oklch(0.42_0.02_55)] text-sm leading-relaxed mb-4">
                                {service.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-1.5" aria-label={`Caractéristiques de ${service.title}`}>
                                {service.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2 text-xs text-[oklch(0.42_0.02_55)] font-medium">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.55_0.13_42)] flex-shrink-0" aria-hidden="true" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Number badge */}
                            <div className="absolute top-4 right-4 text-white/70 text-4xl font-bold select-none drop-shadow" style={{ fontFamily: "'Playfair Display', Georgia, serif" }} aria-hidden="true">
                                {String(index + 1).padStart(2, '0')}
                            </div>
                        </article>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <a
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                        className="btn-terracotta inline-block px-8 py-4 rounded text-base"
                        aria-label="Demander un devis gratuit pour nos services de couverture"
                    >
                        Demander un Devis Gratuit
                    </a>
                </div>
            </div>
        </section>
    );
}
