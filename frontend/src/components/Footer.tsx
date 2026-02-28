import { Phone, Mail, MapPin, Heart } from 'lucide-react';

const currentYear = new Date().getFullYear();

const footerLinks = {
    services: [
        { label: 'Réfection de toiture', href: '#services' },
        { label: 'Pose de tuiles & ardoises', href: '#services' },
        { label: 'Réparation & entretien', href: '#services' },
        { label: 'Isolation thermique', href: '#services' },
        { label: 'Zinguerie & gouttières', href: '#services' },
    ],
    navigation: [
        { label: 'Accueil', href: '#accueil' },
        { label: 'Nos Services', href: '#services' },
        { label: 'À Propos', href: '#a-propos' },
        { label: 'Témoignages', href: '#temoignages' },
        { label: 'Contact', href: '#contact' },
    ],
};

export default function Footer() {
    const handleNavClick = (href: string) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'verdier-couverture');

    return (
        <footer
            className="bg-[oklch(0.18_0.015_50)] text-white"
            role="contentinfo"
            aria-label="Pied de page"
        >
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2.5 mb-4">
                            <div className="w-9 h-9 rounded-sm flex items-center justify-center bg-[oklch(0.55_0.13_42)]">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path d="M3 12L12 3L21 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M5 10V20H19V10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M9 20V14H15V20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div>
                                <span className="block text-white font-bold text-base leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                                    VERDIER COUVERTURE
                                </span>
                            </div>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed mb-5">
                            Artisan couvreur depuis 2004. Spécialiste de la toiture en Île-de-France.
                            Qualité, fiabilité et savoir-faire au service de votre maison.
                        </p>
                        <div className="space-y-2">
                            <a href="tel:+33663739400" className="flex items-center gap-2 text-white/70 hover:text-[oklch(0.72_0.09_48)] transition-colors text-sm">
                                <Phone size={14} aria-hidden="true" />
                                06 63 73 94 00
                            </a>
                            <a href="tel:+33172761763" className="flex items-center gap-2 text-white/70 hover:text-[oklch(0.72_0.09_48)] transition-colors text-sm">
                                <Phone size={14} aria-hidden="true" />
                                01 72 76 17 63
                            </a>
                            <a href="mailto:sv.couverture95@gmail.com" className="flex items-center gap-2 text-white/70 hover:text-[oklch(0.72_0.09_48)] transition-colors text-sm">
                                <Mail size={14} aria-hidden="true" />
                                sv.couverture95@gmail.com
                            </a>
                            <div className="flex items-start gap-2 text-white/70 text-sm">
                                <MapPin size={14} className="flex-shrink-0 mt-0.5" aria-hidden="true" />
                                206 chemin de la petite patelle, Pierrelaye 95480
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <nav aria-label="Services de couverture">
                        <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                            Nos Services
                        </h3>
                        <ul className="space-y-2">
                            {footerLinks.services.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                        className="text-white/60 hover:text-[oklch(0.72_0.09_48)] transition-colors text-sm"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Navigation */}
                    <nav aria-label="Navigation du site">
                        <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                            Navigation
                        </h3>
                        <ul className="space-y-2">
                            {footerLinks.navigation.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                        className="text-white/60 hover:text-[oklch(0.72_0.09_48)] transition-colors text-sm"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Zone d'intervention */}
                    <div>
                        <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                            Zone d'Intervention
                        </h3>
                        <ul className="space-y-1.5 text-white/60 text-sm">
                            {[
                                'Paris (75)',
                                'Hauts-de-Seine (92)',
                                'Val-de-Marne (94)',
                                'Seine-Saint-Denis (93)',
                                'Yvelines (78)',
                                'Essonne (91)',
                                'Val-d\'Oise (95)',
                                'Seine-et-Marne (77)',
                            ].map((zone) => (
                                <li key={zone} className="flex items-center gap-1.5">
                                    <span className="w-1 h-1 rounded-full bg-[oklch(0.55_0.13_42)] flex-shrink-0" aria-hidden="true" />
                                    {zone}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
                    <p>
                        © {currentYear} VERDIER COUVERTURE. Tous droits réservés.
                    </p>
                    <p className="flex items-center gap-1">
                        Créé avec{' '}
                        <Heart
                            size={12}
                            className="text-[oklch(0.55_0.13_42)] fill-[oklch(0.55_0.13_42)]"
                            aria-label="amour"
                        />{' '}
                        par{' '}
                        <a
                            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[oklch(0.72_0.09_48)] hover:text-white transition-colors"
                        >
                            caffeine.ai
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
