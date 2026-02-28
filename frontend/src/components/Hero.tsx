import { ArrowDown, CheckCircle } from 'lucide-react';

const highlights = [
    'Plus de 20 ans d\'expérience',
    'Devis gratuit sous 24h',
    'Garantie décennale',
];

export default function Hero() {
    const handleScrollToContact = () => {
        const el = document.querySelector('#contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const handleScrollToServices = () => {
        const el = document.querySelector('#services');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="accueil"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            aria-label="Section d'accueil - Couverture professionnelle"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/generated/hero-bg.dim_1920x1080.png"
                    alt="Vue aérienne d'un artisan finissant un toit en ardoise traditionnel sur une maison française à l'heure dorée"
                    className="w-full h-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-[oklch(0.15_0.01_50/0.72)]" aria-hidden="true" />
                {/* Gradient overlay bottom */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[oklch(0.15_0.01_50/0.5)] to-transparent" aria-hidden="true" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[oklch(0.55_0.13_42/0.9)] text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.85_0.08_55)]" aria-hidden="true" />
                    Couvreur Professionnel Certifié
                </div>

                {/* H1 - Primary keyword */}
                <h1
                    className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    Expert en{' '}
                    <span className="text-[oklch(0.72_0.09_48)] italic">Couverture</span>
                    <br />
                    <span className="text-white">et Toiture</span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-8 leading-relaxed font-light">
                    Réfection complète, pose de tuiles et ardoises, réparation et entretien —
                    nous protégeons votre maison avec savoir-faire et passion depuis plus de 20 ans.
                </p>

                {/* Highlights */}
                <ul className="flex flex-wrap justify-center gap-4 mb-10" aria-label="Points forts">
                    {highlights.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-white/90 text-sm font-medium">
                            <CheckCircle size={16} className="text-[oklch(0.72_0.09_48)] flex-shrink-0" aria-hidden="true" />
                            {item}
                        </li>
                    ))}
                </ul>

                {/* Phone numbers */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
                    <a
                        href="tel:+33663739400"
                        className="inline-flex items-center justify-center gap-2 text-white/90 hover:text-white text-sm font-medium transition-colors"
                        aria-label="Appeler le 06 63 73 94 00"
                    >
                        <span className="text-[oklch(0.72_0.09_48)]">📱</span>
                        06 63 73 94 00
                    </a>
                    <span className="hidden sm:block text-white/30">|</span>
                    <a
                        href="tel:+33172761763"
                        className="inline-flex items-center justify-center gap-2 text-white/90 hover:text-white text-sm font-medium transition-colors"
                        aria-label="Appeler le 01 72 76 17 63"
                    >
                        <span className="text-[oklch(0.72_0.09_48)]">☎</span>
                        01 72 76 17 63
                    </a>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={handleScrollToContact}
                        className="btn-terracotta px-8 py-4 rounded text-base font-semibold"
                        aria-label="Demander un devis gratuit pour votre toiture"
                    >
                        Demander un Devis Gratuit
                    </button>
                    <button
                        onClick={handleScrollToServices}
                        className="btn-outline-terracotta px-8 py-4 rounded text-base border-white/60 text-white hover:bg-white/10 hover:border-white"
                        style={{ border: '2px solid rgba(255,255,255,0.6)', color: 'white', background: 'transparent', fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 600, letterSpacing: '0.025em', transition: 'all 0.2s ease' }}
                        aria-label="Découvrir nos services de couverture"
                    >
                        Nos Services
                    </button>
                </div>

                {/* Scroll indicator */}
                <div className="mt-16 flex justify-center">
                    <button
                        onClick={handleScrollToServices}
                        className="text-white/50 hover:text-white/80 transition-colors animate-bounce"
                        aria-label="Défiler vers les services"
                    >
                        <ArrowDown size={28} />
                    </button>
                </div>
            </div>

            {/* Stats bar */}
            <div className="absolute bottom-0 left-0 right-0 z-10 bg-[oklch(0.22_0.015_50/0.95)] backdrop-blur-sm border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <dl className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                        {[
                            { value: '20+', label: 'Années d\'expérience' },
                            { value: '1 500+', label: 'Toitures réalisées' },
                            { value: '4.9/5', label: 'Note clients' },
                            { value: '100%', label: 'Garantie décennale' },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <dt className="stat-number text-2xl sm:text-3xl">{stat.value}</dt>
                                <dd className="text-white/60 text-xs sm:text-sm mt-0.5 font-medium">{stat.label}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}
