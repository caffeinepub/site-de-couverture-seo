import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Services', href: '#services' },
    { label: 'À Propos', href: '#a-propos' },
    { label: 'Témoignages', href: '#temoignages' },
    { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setIsOpen(false);
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-[oklch(0.22_0.015_50)] shadow-lg'
                    : 'bg-[oklch(0.22_0.015_50/0.92)] backdrop-blur-sm'
            }`}
            role="banner"
        >
            <nav
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                aria-label="Navigation principale"
            >
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <a
                        href="#accueil"
                        onClick={(e) => { e.preventDefault(); handleNavClick('#accueil'); }}
                        className="flex items-center gap-2.5 group"
                        aria-label="VERDIER COUVERTURE - Retour à l'accueil"
                    >
                        <div className="w-9 h-9 rounded-sm flex items-center justify-center bg-[oklch(0.55_0.13_42)] group-hover:bg-[oklch(0.45_0.14_38)] transition-colors">
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
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                className="nav-link"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA Phone */}
                    <div className="hidden lg:flex items-center gap-3">
                        <div className="flex flex-col items-end gap-0.5">
                            <a
                                href="tel:+33663739400"
                                className="flex items-center gap-2 text-[oklch(0.72_0.09_48)] hover:text-white transition-colors text-sm font-medium"
                                aria-label="Appelez-nous au 06 63 73 94 00"
                            >
                                <Phone size={15} />
                                <span>06 63 73 94 00</span>
                            </a>
                            <a
                                href="tel:+33172761763"
                                className="flex items-center gap-2 text-[oklch(0.72_0.09_48)] hover:text-white transition-colors text-xs font-medium"
                                aria-label="Appelez-nous au 01 72 76 17 63"
                            >
                                <Phone size={12} />
                                <span>01 72 76 17 63</span>
                            </a>
                        </div>
                        <a
                            href="#contact"
                            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                            className="btn-terracotta px-5 py-2.5 rounded text-sm"
                        >
                            Devis Gratuit
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white p-2 rounded hover:bg-white/10 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div
                        id="mobile-menu"
                        className="lg:hidden border-t border-white/10 py-4"
                    >
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                    className="text-white/85 hover:text-white hover:bg-white/10 px-4 py-3 rounded text-sm font-medium transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-2 px-4">
                                <a
                                    href="tel:+33663739400"
                                    className="flex items-center gap-2 text-[oklch(0.72_0.09_48)] text-sm font-medium"
                                >
                                    <Phone size={15} />
                                    06 63 73 94 00
                                </a>
                                <a
                                    href="tel:+33172761763"
                                    className="flex items-center gap-2 text-[oklch(0.72_0.09_48)] text-sm font-medium"
                                >
                                    <Phone size={15} />
                                    01 72 76 17 63
                                </a>
                                <a
                                    href="#contact"
                                    onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                                    className="btn-terracotta px-5 py-2.5 rounded text-sm text-center"
                                >
                                    Devis Gratuit
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
