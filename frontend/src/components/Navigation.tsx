import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Accueil', href: 'hero' },
  { label: 'Services', href: 'services' },
  { label: 'À propos', href: 'about' },
  { label: 'Témoignages', href: 'testimonials' },
  { label: 'Contact', href: 'contact' },
];

function safeScrollTo(id: string): void {
  try {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  } catch {
    // ignore scroll errors
  }
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    try {
      setIsScrolled(window.scrollY > 50);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    let mounted = true;
    const listener = () => { if (mounted) handleScroll(); };
    try {
      window.addEventListener('scroll', listener, { passive: true });
      handleScroll();
    } catch {
      // ignore
    }
    return () => {
      mounted = false;
      try { window.removeEventListener('scroll', listener); } catch { /* ignore */ }
    };
  }, [handleScroll]);

  const handleNavClick = useCallback((href: string) => {
    setMobileOpen(false);
    safeScrollTo(href);
  }, []);

  const toggleMobile = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-charcoal/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20"
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavClick('hero')}
          className="font-serif text-xl font-bold text-offwhite hover:text-terracotta-light transition-colors duration-200"
          aria-label="Verdier Couverture — retour en haut"
        >
          Verdier <span className="text-terracotta">Couverture</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="text-offwhite/80 hover:text-offwhite text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+33600000000"
            className="flex items-center gap-2 text-offwhite/80 hover:text-terracotta-light text-sm transition-colors duration-200"
            aria-label="Appeler Verdier Couverture"
          >
            <Phone size={16} aria-hidden="true" />
            <span>06 00 00 00 00</span>
          </a>
          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className="btn-terracotta text-sm px-5 py-2.5 font-semibold"
          >
            Devis gratuit
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={toggleMobile}
          className="lg:hidden text-offwhite p-2"
          aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-charcoal/98 backdrop-blur-sm border-t border-offwhite/10"
          role="navigation"
          aria-label="Menu mobile"
        >
          <ul className="px-4 py-6 space-y-4" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left text-offwhite/80 hover:text-offwhite text-base font-medium py-2 transition-colors duration-200"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href="tel:+33600000000"
                className="flex items-center gap-2 text-terracotta-light text-base font-medium py-2"
              >
                <Phone size={18} aria-hidden="true" />
                06 00 00 00 00
              </a>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleNavClick('contact')}
                className="btn-terracotta w-full text-center py-3 font-semibold"
              >
                Devis gratuit
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
