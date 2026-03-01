import React, { useState } from 'react';
import { Phone, ChevronDown, Shield, Star, Clock } from 'lucide-react';

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch {
      // ignore
    }
  };

  const handleScrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const el = document.getElementById('services');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch {
      // ignore
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Accueil VERDIER COUVERTURE"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-charcoal">
        {!imgError && (
          <img
            src="/assets/generated/hero-bg.dim_1920x1080.png"
            alt=""
            role="presentation"
            className="w-full h-full object-cover opacity-40"
            onError={() => setImgError(true)}
            loading="eager"
            decoding="async"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/80" />
      </div>

      {/* Tile pattern overlay */}
      <div className="absolute inset-0 tile-pattern opacity-5" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="inline-flex items-center gap-2 bg-terracotta/20 border border-terracotta/40 text-terracotta px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Shield size={14} />
          <span>Couvreur Professionnel Certifié — Île-de-France</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-offwhite leading-tight mb-6">
          Votre Couvreur de{' '}
          <span className="text-terracotta">Confiance</span>
          <br />
          en Île-de-France
        </h1>

        <p className="text-offwhite/80 text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          VERDIER COUVERTURE — Expert en réfection de toiture, zinguerie, isolation et réparations.
          Devis gratuit sous 24h, intervention rapide.
        </p>

        {/* Highlights */}
        <ul className="flex flex-wrap justify-center gap-4 mb-10 text-sm text-offwhite/70">
          <li className="flex items-center gap-2">
            <Star size={14} className="text-terracotta" />
            <span>Plus de 15 ans d'expérience</span>
          </li>
          <li className="flex items-center gap-2">
            <Clock size={14} className="text-terracotta" />
            <span>Intervention sous 48h</span>
          </li>
          <li className="flex items-center gap-2">
            <Shield size={14} className="text-terracotta" />
            <span>Garantie décennale</span>
          </li>
        </ul>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="tel:0663739400"
            className="btn-terracotta flex items-center gap-2 text-base px-8 py-4"
            aria-label="Appeler le 06 63 73 94 00"
          >
            <Phone size={18} />
            <span>06 63 73 94 00</span>
          </a>
          <a
            href="tel:0172761763"
            className="flex items-center gap-2 bg-offwhite/10 hover:bg-offwhite/20 border border-offwhite/30 text-offwhite px-8 py-4 rounded font-medium transition-colors duration-200 text-base"
            aria-label="Appeler le 01 72 76 17 63"
          >
            <Phone size={18} />
            <span>01 72 76 17 63</span>
          </a>
          <button
            onClick={handleScrollToContact}
            className="flex items-center gap-2 bg-transparent border border-terracotta text-terracotta hover:bg-terracotta hover:text-white px-8 py-4 rounded font-medium transition-colors duration-200 text-base"
          >
            Devis Gratuit
          </button>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto bg-charcoal/60 backdrop-blur-sm border border-offwhite/10 rounded-xl p-6">
          <div className="text-center">
            <div className="font-serif text-3xl font-bold text-terracotta">500+</div>
            <div className="text-offwhite/60 text-xs mt-1">Chantiers réalisés</div>
          </div>
          <div className="text-center border-x border-offwhite/10">
            <div className="font-serif text-3xl font-bold text-terracotta">15+</div>
            <div className="text-offwhite/60 text-xs mt-1">Années d'expérience</div>
          </div>
          <div className="text-center">
            <div className="font-serif text-3xl font-bold text-terracotta">98%</div>
            <div className="text-offwhite/60 text-xs mt-1">Clients satisfaits</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-offwhite/40 hover:text-terracotta transition-colors animate-bounce"
        aria-label="Défiler vers les services"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
