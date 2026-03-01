import { useCallback } from 'react';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';

interface FooterLink {
  label: string;
  href: string;
}

const serviceLinks: FooterLink[] = [
  { label: 'Réfection de toiture', href: 'services' },
  { label: 'Pose de tuiles', href: 'services' },
  { label: 'Zinguerie', href: 'services' },
  { label: 'Isolation', href: 'services' },
  { label: 'Réparation urgente', href: 'services' },
  { label: 'Nettoyage & traitement', href: 'services' },
];

const legalLinks: FooterLink[] = [
  { label: 'Mentions légales', href: 'contact' },
  { label: 'Politique de confidentialité', href: 'contact' },
];

function safeScrollTo(id: string): void {
  try {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  } catch {
    // ignore
  }
}

export default function Footer() {
  const handleNavClick = useCallback((href: string) => {
    safeScrollTo(href);
  }, []);

  const appId = (() => {
    try {
      return encodeURIComponent(window.location.hostname || 'verdiercouverture');
    } catch {
      return 'verdiercouverture';
    }
  })();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-offwhite/80" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="font-serif text-xl font-bold text-offwhite mb-4">
              Verdier <span className="text-terracotta">Couverture</span>
            </p>
            <p className="text-sm leading-relaxed mb-6">
              Artisan couvreur qualifié en Île-de-France. Réfection, pose de tuiles, zinguerie et isolation.
              Devis gratuit sous 48h.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+33600000000"
                className="flex items-center gap-2 text-sm hover:text-terracotta-light transition-colors duration-200"
                aria-label="Appeler Verdier Couverture"
              >
                <Phone size={15} aria-hidden="true" />
                06 00 00 00 00
              </a>
              <a
                href="mailto:contact@verdiercouverture.fr"
                className="flex items-center gap-2 text-sm hover:text-terracotta-light transition-colors duration-200"
                aria-label="Envoyer un email"
              >
                <Mail size={15} aria-hidden="true" />
                contact@verdiercouverture.fr
              </a>
              <p className="flex items-center gap-2 text-sm">
                <MapPin size={15} aria-hidden="true" className="flex-shrink-0" />
                12 Rue des Artisans, 95220 Herblay-sur-Seine
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-base font-bold text-offwhite mb-5">Nos services</h3>
            <ul className="space-y-3" role="list">
              {(Array.isArray(serviceLinks) ? serviceLinks : []).map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm hover:text-terracotta-light transition-colors duration-200 text-left"
                  >
                    {link.label ?? ''}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-base font-bold text-offwhite mb-5">Navigation</h3>
            <ul className="space-y-3" role="list">
              {[
                { label: 'Accueil', href: 'hero' },
                { label: 'Services', href: 'services' },
                { label: 'À propos', href: 'about' },
                { label: 'Témoignages', href: 'testimonials' },
                { label: 'Contact', href: 'contact' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm hover:text-terracotta-light transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & info */}
          <div>
            <h3 className="font-serif text-base font-bold text-offwhite mb-5">Informations</h3>
            <ul className="space-y-3 mb-6" role="list">
              {(Array.isArray(legalLinks) ? legalLinks : []).map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm hover:text-terracotta-light transition-colors duration-200 text-left"
                  >
                    {link.label ?? ''}
                  </button>
                </li>
              ))}
            </ul>
            <div className="text-xs space-y-1 text-offwhite/50">
              <p>RGE Qualibat</p>
              <p>Garantie décennale</p>
              <p>Assurance RC Pro</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-offwhite/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-offwhite/50">
            © {currentYear} Verdier Couverture. Tous droits réservés.
          </p>
          <p className="text-xs text-offwhite/50 flex items-center gap-1">
            Fait avec{' '}
            <Heart size={12} className="text-terracotta fill-terracotta" aria-hidden="true" />{' '}
            grâce à{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-terracotta-light transition-colors duration-200"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
