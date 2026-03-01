import { useCallback } from 'react';
import { ChevronDown, Phone, Mail } from 'lucide-react';

const safeScrollToId = (id: string): void => {
  try {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  } catch {
    // ignore scroll errors
  }
};

export default function Hero() {
  const handleScrollToServices = useCallback(() => {
    safeScrollToId('services');
  }, []);

  const handleScrollToContact = useCallback(() => {
    safeScrollToId('contact');
  }, []);

  const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    target.style.display = 'none';
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Accueil"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-bg.dim_1920x1080.png"
          alt=""
          role="presentation"
          className="w-full h-full object-cover"
          onError={handleImageError}
          loading="eager"
        />
        <div className="absolute inset-0 bg-charcoal/70" />
      </div>

      {/* Tile pattern overlay */}
      <div className="absolute inset-0 z-0 tile-pattern opacity-10" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <p className="text-terracotta-light font-semibold tracking-widest uppercase text-sm sm:text-base mb-4">
          Couverture &amp; Zinguerie
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-offwhite leading-tight mb-6">
          Verdier Couverture
        </h1>
        <p className="text-offwhite/80 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed">
          Artisan couvreur qualifié en Île-de-France — réfection de toiture, pose de tuiles,
          zinguerie et isolation. Devis gratuit sous 48h.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            type="button"
            onClick={handleScrollToContact}
            className="btn-terracotta text-base px-8 py-4 rounded-sm font-semibold tracking-wide shadow-warm hover:shadow-lg transition-all duration-300"
          >
            Demander un devis gratuit
          </button>
          <button
            type="button"
            onClick={handleScrollToServices}
            className="border-2 border-offwhite/60 text-offwhite px-8 py-4 rounded-sm font-semibold tracking-wide hover:bg-offwhite/10 transition-all duration-300"
          >
            Nos prestations
          </button>
        </div>

        {/* Contact quick links */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-offwhite/70">
          <a
            href="tel:+33600000000"
            className="flex items-center gap-2 hover:text-terracotta-light transition-colors duration-200"
            aria-label="Appeler Verdier Couverture"
          >
            <Phone size={18} aria-hidden="true" />
            <span className="text-sm">06 00 00 00 00</span>
          </a>
          <a
            href="mailto:contact@verdiercouverture.fr"
            className="flex items-center gap-2 hover:text-terracotta-light transition-colors duration-200"
            aria-label="Envoyer un email à Verdier Couverture"
          >
            <Mail size={18} aria-hidden="true" />
            <span className="text-sm">contact@verdiercouverture.fr</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={handleScrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-offwhite/60 hover:text-offwhite transition-colors duration-200 animate-bounce"
        aria-label="Défiler vers les services"
      >
        <ChevronDown size={32} aria-hidden="true" />
      </button>
    </section>
  );
}
