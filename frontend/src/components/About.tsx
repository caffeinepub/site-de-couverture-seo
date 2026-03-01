import React, { useState } from 'react';
import { CheckCircle, Award, Users, Wrench } from 'lucide-react';

const strengths = [
  { icon: Award, text: 'Plus de 15 ans d\'expérience dans la couverture' },
  { icon: CheckCircle, text: 'Garantie décennale sur tous nos travaux' },
  { icon: Users, text: 'Équipe de couvreurs qualifiés et certifiés' },
  { icon: Wrench, text: 'Matériaux de qualité professionnelle' },
];

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-20 bg-cream" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div>
            <span className="text-terracotta text-sm font-medium tracking-widest uppercase">À Propos</span>
            <h2 id="about-heading" className="font-serif text-4xl lg:text-5xl font-bold text-charcoal mt-2 mb-6">
              VERDIER COUVERTURE,<br />
              <span className="text-terracotta">Votre Expert Toiture</span>
            </h2>
            <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
              Entreprise familiale basée en Île-de-France, VERDIER COUVERTURE intervient depuis plus de
              15 ans sur tous types de toitures. Notre engagement : qualité, réactivité et transparence
              à chaque étape de vos travaux.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-8">
              Nous réalisons des devis gratuits et détaillés, sans engagement. Notre équipe de couvreurs
              expérimentés intervient rapidement sur toute l'Île-de-France pour répondre à vos besoins,
              qu'il s'agisse d'une urgence ou d'un projet de rénovation planifié.
            </p>

            <ul className="space-y-4">
              {strengths.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon size={20} className="text-terracotta flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image / visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-charcoal/10 aspect-[4/3]">
              {!imgError ? (
                <img
                  src="/assets/generated/quality-icon.dim_128x128.png"
                  alt="Qualité VERDIER COUVERTURE"
                  className="w-32 h-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
                  loading="lazy"
                  decoding="async"
                  onError={() => setImgError(true)}
                />
              ) : null}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-terracotta/20 flex items-center justify-center mb-4">
                  <Award size={40} className="text-terracotta" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">Couvreur Certifié</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">
                  Entreprise qualifiée, assurée et garantie décennale pour tous vos travaux de toiture
                  en Île-de-France.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4 w-full max-w-xs">
                  <div className="bg-terracotta/10 rounded-lg p-3 text-center">
                    <div className="font-serif text-2xl font-bold text-terracotta">500+</div>
                    <div className="text-xs text-charcoal/60 mt-1">Chantiers</div>
                  </div>
                  <div className="bg-terracotta/10 rounded-lg p-3 text-center">
                    <div className="font-serif text-2xl font-bold text-terracotta">15+</div>
                    <div className="text-xs text-charcoal/60 mt-1">Années</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-terracotta/20 rounded-full -z-10" aria-hidden="true" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-terracotta/10 rounded-full -z-10" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
