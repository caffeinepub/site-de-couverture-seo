import React, { useState } from 'react';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  features: string[];
}

function ServiceCard({ image, title, description, features }: ServiceCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="card-service group">
      <div className="relative h-48 overflow-hidden rounded-t-lg bg-charcoal/20">
        {!imgError ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            decoding="async"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-charcoal/30">
            <span className="text-offwhite/40 text-sm">Image non disponible</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-charcoal mb-2">{title}</h3>
        <p className="text-charcoal/70 text-sm mb-4 leading-relaxed">{description}</p>
        <ul className="space-y-1">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-charcoal/60">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

const services: ServiceCardProps[] = [
  {
    image: '/assets/generated/service-refection-toiture.dim_800x500.png',
    title: 'Réfection de Toiture',
    description: 'Rénovation complète de votre toiture avec des matériaux de qualité pour une durabilité maximale.',
    features: ['Dépose de l\'ancienne couverture', 'Traitement de la charpente', 'Pose de nouveaux matériaux', 'Garantie décennale'],
  },
  {
    image: '/assets/generated/service-pose-tuiles.dim_800x500.png',
    title: 'Pose de Tuiles',
    description: 'Installation professionnelle de tuiles terre cuite, béton ou ardoises selon vos préférences.',
    features: ['Tuiles terre cuite', 'Tuiles béton', 'Ardoises naturelles', 'Finitions soignées'],
  },
  {
    image: '/assets/generated/service-zinguerie.dim_800x500.png',
    title: 'Zinguerie',
    description: 'Travaux de zinguerie pour assurer l\'étanchéité parfaite de votre toiture.',
    features: ['Gouttières et descentes', 'Chéneaux', 'Solins et noues', 'Zinc et aluminium'],
  },
  {
    image: '/assets/generated/service-isolation.dim_800x500.png',
    title: 'Isolation Toiture',
    description: 'Amélioration de l\'isolation thermique et phonique pour réduire vos factures d\'énergie.',
    features: ['Isolation par l\'extérieur', 'Isolation des combles', 'Économies d\'énergie', 'Confort thermique'],
  },
  {
    image: '/assets/generated/service-reparation.dim_800x500.png',
    title: 'Réparation & Urgence',
    description: 'Intervention rapide pour toutes réparations urgentes : fuites, tuiles cassées, infiltrations.',
    features: ['Intervention sous 48h', 'Diagnostic gratuit', 'Réparation fuite', 'Remplacement tuiles'],
  },
  {
    image: '/assets/generated/service-nettoyage.dim_800x500.png',
    title: 'Nettoyage & Traitement',
    description: 'Nettoyage haute pression et traitement hydrofuge pour prolonger la vie de votre toiture.',
    features: ['Nettoyage haute pression', 'Traitement hydrofuge', 'Anti-mousse', 'Entretien préventif'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-offwhite" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-terracotta text-sm font-medium tracking-widest uppercase">Nos Prestations</span>
          <h2 id="services-heading" className="font-serif text-4xl lg:text-5xl font-bold text-charcoal mt-2 mb-4">
            Services de Couverture
          </h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto text-lg">
            De la réfection complète à la simple réparation, nous intervenons sur tous types de toitures
            en Île-de-France avec professionnalisme et réactivité.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
