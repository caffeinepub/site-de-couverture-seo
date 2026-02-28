import { Award, Users, Clock, CheckCircle } from 'lucide-react';

const values = [
    {
        icon: <Award size={22} />,
        title: 'Qualité Certifiée',
        description: 'Nous utilisons uniquement des matériaux de première qualité avec garantie décennale pour chaque chantier.',
    },
    {
        icon: <Users size={22} />,
        title: 'Équipe Expérimentée',
        description: 'Notre équipe de couvreurs qualifiés intervient avec professionnalisme et respect de votre propriété.',
    },
    {
        icon: <Clock size={22} />,
        title: 'Réactivité',
        description: 'Devis sous 24h, intervention rapide pour les urgences. Nous respectons les délais convenus.',
    },
];

const certifications = [
    'Qualibat — Couverture & Zinguerie',
    'Garantie Décennale assurée',
    'Membre de la CAPEB',
];

export default function About() {
    return (
        <section
            id="a-propos"
            className="py-20 lg:py-28 bg-white"
            aria-labelledby="about-heading"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Text Content */}
                    <div>
                        <p className="text-[oklch(0.55_0.13_42)] text-sm font-semibold tracking-widest uppercase mb-3">
                            Notre histoire
                        </p>
                        <div className="section-divider-left" aria-hidden="true" />
                        <h2
                            id="about-heading"
                            className="text-3xl sm:text-4xl lg:text-5xl section-heading mb-6"
                        >
                            À Propos de Nous
                        </h2>
                        <p className="text-[oklch(0.42_0.02_55)] text-base leading-relaxed mb-4">
                            Fondée en 2004, <strong className="text-[oklch(0.22_0.015_50)] font-semibold">VERDIER COUVERTURE</strong> est une entreprise artisanale
                            spécialisée dans tous les travaux de couverture et toiture. Basés à <strong className="text-[oklch(0.22_0.015_50)] font-semibold">Pierrelaye (95480)</strong>,
                            nous intervenons sur <strong className="text-[oklch(0.22_0.015_50)] font-semibold">Cergy</strong>, <strong className="text-[oklch(0.22_0.015_50)] font-semibold">Pontoise</strong>, <strong className="text-[oklch(0.22_0.015_50)] font-semibold">Argenteuil</strong>, <strong className="text-[oklch(0.22_0.015_50)] font-semibold">Conflans-Sainte-Honorine</strong> et dans toutes les communes du <strong className="text-[oklch(0.22_0.015_50)] font-semibold">Val-d'Oise (95)</strong>.
                        </p>
                        <p className="text-[oklch(0.42_0.02_55)] text-base leading-relaxed mb-4">
                            Notre philosophie est simple : chaque toit mérite le meilleur. Nous combinons
                            les techniques traditionnelles du métier de couvreur avec les innovations modernes
                            pour vous offrir une toiture durable, esthétique et performante.
                        </p>
                        <p className="text-[oklch(0.42_0.02_55)] text-base leading-relaxed mb-8">
                            De <strong className="text-[oklch(0.22_0.015_50)] font-semibold">Herblay</strong> à <strong className="text-[oklch(0.22_0.015_50)] font-semibold">Taverny</strong>, d'<strong className="text-[oklch(0.22_0.015_50)] font-semibold">Ermont</strong> à <strong className="text-[oklch(0.22_0.015_50)] font-semibold">Sannois</strong>, en passant par <strong className="text-[oklch(0.22_0.015_50)] font-semibold">Franconville</strong> et <strong className="text-[oklch(0.22_0.015_50)] font-semibold">Saint-Leu-la-Forêt</strong> — notre équipe se déplace partout en Île-de-France pour réaliser vos travaux de couverture avec le même soin et la même exigence.
                        </p>

                        {/* Values */}
                        <div className="space-y-5 mb-8">
                            {values.map((value) => (
                                <div key={value.title} className="flex gap-4">
                                    <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-[oklch(0.55_0.13_42/0.1)] flex items-center justify-center text-[oklch(0.55_0.13_42)]">
                                        {value.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[oklch(0.22_0.015_50)] mb-1 text-base" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                                            {value.title}
                                        </h3>
                                        <p className="text-[oklch(0.42_0.02_55)] text-sm leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Certifications */}
                        <div className="bg-[oklch(0.975_0.005_80)] rounded-lg p-5 border border-[oklch(0.87_0.015_70)]">
                            <h3 className="font-bold text-[oklch(0.22_0.015_50)] mb-3 text-sm uppercase tracking-wider">
                                Certifications & Qualifications
                            </h3>
                            <ul className="space-y-2" aria-label="Liste des certifications">
                                {certifications.map((cert) => (
                                    <li key={cert} className="flex items-start gap-2 text-sm text-[oklch(0.42_0.02_55)]">
                                        <CheckCircle size={15} className="text-[oklch(0.55_0.13_42)] flex-shrink-0 mt-0.5" aria-hidden="true" />
                                        {cert}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right: Visual */}
                    <div className="relative">
                        {/* Quality icon card */}
                        <div className="relative bg-[oklch(0.975_0.005_80)] rounded-2xl p-8 border border-[oklch(0.87_0.015_70)] shadow-lg">
                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[oklch(0.55_0.13_42/0.08)] rounded-bl-2xl rounded-tr-2xl" aria-hidden="true" />

                            <div className="flex justify-center mb-6">
                                <div className="relative">
                                    <div className="w-28 h-28 rounded-full bg-[oklch(0.55_0.13_42/0.1)] flex items-center justify-center">
                                        <img
                                            src="/assets/generated/quality-icon.dim_128x128.png"
                                            alt="Icône de bouclier avec coche représentant la garantie qualité de nos travaux de couverture"
                                            className="w-16 h-16 object-contain"
                                        />
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-[oklch(0.55_0.13_42)] rounded-full flex items-center justify-center" aria-hidden="true">
                                        <CheckCircle size={16} className="text-white" />
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-center text-xl font-bold text-[oklch(0.22_0.015_50)] mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                                Garantie Qualité Totale
                            </h3>
                            <p className="text-center text-[oklch(0.42_0.02_55)] text-sm mb-6">
                                Chaque chantier est suivi de A à Z avec un contrôle qualité rigoureux.
                            </p>

                            {/* Stats grid */}
                            <dl className="grid grid-cols-2 gap-4">
                                {[
                                    { value: '20+', label: 'Ans d\'expérience' },
                                    { value: '1 500+', label: 'Chantiers réalisés' },
                                    { value: '98%', label: 'Clients satisfaits' },
                                    { value: '10 ans', label: 'Garantie décennale' },
                                ].map((stat) => (
                                    <div key={stat.label} className="bg-white rounded-lg p-4 text-center border border-[oklch(0.87_0.015_70)]">
                                        <dt className="stat-number text-2xl">{stat.value}</dt>
                                        <dd className="text-[oklch(0.52_0.02_60)] text-xs mt-1 font-medium">{stat.label}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
