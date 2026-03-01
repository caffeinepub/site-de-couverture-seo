import React, { useState, useEffect, useCallback } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'À propos' },
  { href: '#testimonials', label: 'Témoignages' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      try {
        setIsScrolled(window.scrollY > 20);
      } catch {
        // ignore
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    try {
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } catch {
      // fallback: do nothing
    }
    setIsMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-charcoal shadow-lg' : 'bg-charcoal/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch { /* ignore */ } }}
              className="flex flex-col leading-tight"
            >
              <span className="text-terracotta font-serif font-bold text-lg lg:text-xl tracking-wide">
                VERDIER
              </span>
              <span className="text-offwhite text-xs lg:text-sm tracking-widest uppercase">
                Couverture
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-offwhite/80 hover:text-terracotta transition-colors duration-200 text-sm font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Phone CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0663739400"
              className="flex items-center gap-2 text-offwhite hover:text-terracotta transition-colors duration-200 text-sm"
              aria-label="Appeler le mobile"
            >
              <Phone size={14} />
              <span>06 63 73 94 00</span>
            </a>
            <a
              href="tel:0172761763"
              className="flex items-center gap-2 bg-terracotta hover:bg-terracotta/90 text-white px-4 py-2 rounded text-sm font-medium transition-colors duration-200"
              aria-label="Appeler le fixe"
            >
              <Phone size={14} />
              <span>01 72 76 17 63</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="lg:hidden text-offwhite hover:text-terracotta transition-colors p-2"
            aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-charcoal border-t border-offwhite/10">
          <nav className="px-4 py-4 flex flex-col gap-4" aria-label="Navigation mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-offwhite/80 hover:text-terracotta transition-colors duration-200 text-base font-medium py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-2 border-t border-offwhite/10">
              <a
                href="tel:0663739400"
                className="flex items-center gap-2 text-offwhite hover:text-terracotta transition-colors duration-200"
                aria-label="Appeler le mobile"
              >
                <Phone size={16} />
                <span>06 63 73 94 00</span>
              </a>
              <a
                href="tel:0172761763"
                className="flex items-center gap-2 bg-terracotta hover:bg-terracotta/90 text-white px-4 py-2 rounded text-sm font-medium transition-colors duration-200 w-fit"
                aria-label="Appeler le fixe"
              >
                <Phone size={16} />
                <span>01 72 76 17 63</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
