import React from 'react';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';

const serviceLinks = [
  'Réfection de toiture',
  'Pose de tuiles',
  'Zinguerie',
  'Isolation toiture',
  'Réparation & urgence',
  'Nettoyage & traitement',
];

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'À propos' },
  { href: '#testimonials', label: 'Témoignages' },
  { href: '#contact', label: 'Contact' },
];

const zones = [
  'Val-d\'Oise (95)',
  'Yvelines (78)',
  'Hauts-de-Seine (92)',
  'Seine-Saint-Denis (93)',
  'Val-de-Marne (94)',
  'Paris (75)',
  'Seine-et-Marne (77)',
  'Essonne (91)',
];

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'verdier-couverture'
  );

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    try {
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch {
      // ignore
    }
  };

  return (
    <footer className="bg-charcoal text-offwhite/70" aria-label="Pied de page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="font-serif text-2xl font-bold text-terracotta">VERDIER</span>
              <br />
              <span className="text-offwhite text-sm tracking-widest uppercase">Couverture</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Votre couvreur de confiance en Île-de-France. Qualité, réactivité et garantie décennale
              pour tous vos travaux de toiture.
            </p>
            <div className="space-y-3">
              <a
                href="tel:0663739400"
                className="flex items-center gap-2 hover:text-terracotta transition-colors text-sm"
                aria-label="Appeler le mobile"
              >
                <Phone size={14} className="text-terracotta" />
                <span>06 63 73 94 00</span>
              </a>
              <a
                href="tel:0172761763"
                className="flex items-center gap-2 hover:text-terracotta transition-colors text-sm"
                aria-label="Appeler le fixe"
              >
                <Phone size={14} className="text-terracotta" />
                <span>01 72 76 17 63</span>
              </a>
              <a
                href="mailto:sv.couverture95@gmail.com"
                className="flex items-center gap-2 hover:text-terracotta transition-colors text-sm break-all"
              >
                <Mail size={14} className="text-terracotta flex-shrink-0" />
                <span>sv.couverture95@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={14} className="text-terracotta flex-shrink-0" />
                <span>Île-de-France</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-offwhite font-semibold mb-4 text-sm uppercase tracking-wide">Nos Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map(service => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, '#services')}
                    className="text-sm hover:text-terracotta transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-offwhite font-semibold mb-4 text-sm uppercase tracking-wide">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm hover:text-terracotta transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Zone d'intervention */}
          <div>
            <h3 className="text-offwhite font-semibold mb-4 text-sm uppercase tracking-wide">Zone d'Intervention</h3>
            <ul className="space-y-2">
              {zones.map(zone => (
                <li key={zone} className="text-sm">{zone}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-offwhite/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-offwhite/40">
          <p>© {year} VERDIER COUVERTURE — Tous droits réservés</p>
          <p className="flex items-center gap-1">
            Built with{' '}
            <Heart size={12} className="text-terracotta fill-terracotta mx-0.5" aria-label="love" />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-terracotta transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
