import { MapPin } from 'lucide-react';

const cities = [
    'Pierrelaye', 'Cergy', 'Pontoise', 'Saint-Ouen-l\'Aumône', 'Conflans-Sainte-Honorine',
    'Herblay', 'Taverny', 'Ermont', 'Argenteuil', 'Osny',
    'Jouy-le-Moutier', 'Vauréal', 'Neuville-sur-Oise', 'Méry-sur-Oise', 'Eaubonne',
    'Sannois', 'Franconville', 'Cormeilles-en-Parisis', 'Montigny-lès-Cormeilles', 'L\'Isle-Adam',
    'Beaumont-sur-Oise', 'Persan', 'Saint-Leu-la-Forêt', 'Bouffémont', 'Domont',
    'Sarcelles', 'Garges-lès-Gonesse', 'Enghien-les-Bains', 'Soisy-sous-Montmorency', 'Montmorency',
    'Deuil-la-Barre', 'Groslay', 'Villiers-le-Bel', 'Gonesse', 'Écouen',
    'Fosses', 'Luzarches', 'Mériel', 'Auvers-sur-Oise', 'Valmondois',
];

const serviceKeywords = [
    'Couvreur Val-d\'Oise',
    'Réfection toiture 95',
    'Pose de tuiles',
    'Pose d\'ardoises',
    'Réparation toiture',
    'Zinguerie & gouttières',
    'Isolation toiture',
    'Nettoyage toiture',
    'Traitement toiture',
    'Démoussage toiture',
    'Couvreur urgence',
    'Étanchéité toiture',
];

export default function ServiceAreas() {
    return (
        <section
            id="zones-intervention"
            className="py-16 lg:py-20 bg-[oklch(0.975_0.005_80)]"
            aria-labelledby="zones-heading"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <header className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 text-[oklch(0.55_0.13_42)] text-sm font-semibold tracking-widest uppercase mb-3">
                        <MapPin size={14} aria-hidden="true" />
                        Zone de couverture
                    </div>
                    <div className="section-divider" aria-hidden="true" />
                    <h2
                        id="zones-heading"
                        className="text-3xl sm:text-4xl section-heading mb-4"
                    >
                        Couvreur Val-d'Oise — Nos Zones d'Intervention
                    </h2>
                    <p className="section-subheading text-base sm:text-lg max-w-3xl mx-auto">
                        <strong className="text-[oklch(0.22_0.015_50)]">VERDIER COUVERTURE</strong> intervient dans toute la région <strong className="text-[oklch(0.22_0.015_50)]">Val-d'Oise (95)</strong> et les communes voisines d'<strong className="text-[oklch(0.22_0.015_50)]">Île-de-France</strong>.
                        Réfection de toiture, pose de tuiles, réparation, zinguerie et isolation — nous nous déplaçons chez vous pour un devis gratuit.
                    </p>
                </header>

                {/* Cities tag cloud */}
                <div className="mb-10">
                    <h3 className="text-sm font-semibold text-[oklch(0.42_0.02_55)] uppercase tracking-wider mb-4 text-center">
                        Communes desservies
                    </h3>
                    <ul
                        className="flex flex-wrap justify-center gap-2.5"
                        aria-label="Liste des communes desservies par VERDIER COUVERTURE"
                    >
                        {cities.map((city) => (
                            <li key={city}>
                                <span className="inline-flex items-center gap-1.5 bg-white border border-[oklch(0.87_0.015_70)] text-[oklch(0.32_0.015_50)] text-sm font-medium px-3.5 py-1.5 rounded-full shadow-sm hover:border-[oklch(0.55_0.13_42/0.5)] hover:text-[oklch(0.55_0.13_42)] hover:bg-[oklch(0.55_0.13_42/0.05)] transition-colors duration-150">
                                    <MapPin size={11} className="text-[oklch(0.55_0.13_42)] flex-shrink-0" aria-hidden="true" />
                                    {city}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Service keywords */}
                <div className="border-t border-[oklch(0.87_0.015_70)] pt-8">
                    <h3 className="text-sm font-semibold text-[oklch(0.42_0.02_55)] uppercase tracking-wider mb-4 text-center">
                        Nos prestations dans toute la région
                    </h3>
                    <ul
                        className="flex flex-wrap justify-center gap-2.5"
                        aria-label="Prestations de couverture proposées"
                    >
                        {serviceKeywords.map((kw) => (
                            <li key={kw}>
                                <span className="inline-flex items-center bg-[oklch(0.55_0.13_42/0.1)] text-[oklch(0.45_0.1_42)] text-sm font-semibold px-4 py-1.5 rounded-full border border-[oklch(0.55_0.13_42/0.2)]">
                                    {kw}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Bottom CTA */}
                <div className="mt-10 text-center">
                    <p className="text-[oklch(0.42_0.02_55)] text-sm mb-4">
                        Vous ne trouvez pas votre commune ? Contactez-nous, nous intervenons dans un rayon de 100 km autour de Pierrelaye.
                    </p>
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="btn-terracotta inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold"
                        aria-label="Demander un devis gratuit pour votre commune"
                    >
                        <MapPin size={15} aria-hidden="true" />
                        Demander un devis gratuit
                    </a>
                </div>
            </div>
        </section>
    );
}
