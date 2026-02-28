import { Shield, Wrench, Home, Droplets, Thermometer, Star } from 'lucide-react';

interface Service {
    icon: React.ReactNode;
    title: string;
    description: string;
    features: string[];
    imgSrc?: string;
    imgAlt?: string;
}

const services: Service[] = [
    {
        icon: <Home size={28} />,
        title: 'Réfection de Toiture Complète',
        description: 'Remplacement intégral de votre couverture avec des matériaux de qualité supérieure. Nous intervenons sur tous types de toitures : tuiles, ardoises, zinc.',
        features: ['Diagnostic gratuit', 'Matériaux certifiés', 'Garantie 10 ans'],
        imgSrc: '/assets/generated/roof-icon.dim_128x128.png',
        imgAlt: 'Icône de toit en terre cuite représentant la réfection de toiture',
    },
    {
        icon: <Star size={28} />,
        title: 'Pose de Tuiles & Ardoises',
        description: 'Installation experte de tuiles en terre cuite, ardoises naturelles ou synthétiques. Chaque pose est réalisée dans les règles de l\'art pour une étanchéité parfaite.',
        features: ['Tuiles terre cuite', 'Ardoises naturelles', 'Zinc et cuivre'],
        imgSrc: '/assets/generated/services-icon.dim_128x128.png',
        imgAlt: 'Icône d\'outils de couverture représentant la pose de tuiles et ardoises',
    },
    {
        icon: <Wrench size={28} />,
        title: 'Réparation & Entretien',
        description: 'Intervention rapide pour réparer fuites, tuiles cassées ou gouttières endommagées. Entretien préventif pour prolonger la durée de vie de votre toiture.',
        features: ['Intervention 48h', 'Nettoyage mousse', 'Traitement hydrofuge'],
    },
    {
        icon: <Thermometer size={28} />,
        title: 'Isolation Thermique',
        description: 'Amélioration de l\'isolation de votre toiture pour réduire vos factures d\'énergie. Travaux éligibles aux aides de l\'État (MaPrimeRénov\').',
        features: ['Éligible MaPrimeRénov\'', 'Économies d\'énergie', 'Confort amélioré'],
    },
    {
        icon: <Droplets size={28} />,
        title: 'Zinguerie & Évacuation',
        description: 'Pose et remplacement de gouttières, chéneaux, descentes d\'eau pluviale. Travaux de zinguerie pour une étanchéité durable.',
        features: ['Gouttières aluminium', 'Zinc naturel', 'Cuivre traditionnel'],
    },
    {
        icon: <Shield size={28} />,
        title: 'Traitement & Protection',
        description: 'Nettoyage haute pression, traitement anti-mousse et application d\'hydrofuge pour protéger et embellir votre toiture durablement.',
        features: ['Nettoyage HP', 'Anti-mousse', 'Hydrofuge longue durée'],
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
                            className="card-service group"
                            aria-label={`Service : ${service.title}`}
                        >
                            {/* Icon */}
                            <div className="flex items-start gap-4 mb-4">
                                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-[oklch(0.55_0.13_42/0.1)] flex items-center justify-center text-[oklch(0.55_0.13_42)] group-hover:bg-[oklch(0.55_0.13_42)] group-hover:text-white transition-all duration-300">
                                    {service.imgSrc ? (
                                        <img
                                            src={service.imgSrc}
                                            alt={service.imgAlt}
                                            className="w-8 h-8 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                                        />
                                    ) : (
                                        service.icon
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-bold text-[oklch(0.22_0.015_50)] leading-snug" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                                        {service.title}
                                    </h3>
                                </div>
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
                            <div className="absolute top-4 right-4 text-[oklch(0.87_0.015_70)] text-4xl font-bold select-none" style={{ fontFamily: "'Playfair Display', Georgia, serif" }} aria-hidden="true">
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
