import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Marie L.',
    location: 'Cergy (95)',
    rating: 5,
    date: '2024-03-15',
    text: 'Excellent travail ! VERDIER COUVERTURE a refait entièrement notre toiture en 3 jours. Équipe sérieuse, propre et très professionnelle. Je recommande vivement.',
    service: 'Réfection de toiture',
  },
  {
    name: 'Pierre M.',
    location: 'Pontoise (95)',
    rating: 5,
    date: '2024-02-20',
    text: 'Intervention rapide suite à une fuite urgente. Diagnostic précis, réparation efficace. Tarif honnête et devis respecté. Très satisfait du résultat.',
    service: 'Réparation urgente',
  },
  {
    name: 'Sophie B.',
    location: 'Versailles (78)',
    rating: 5,
    date: '2024-01-10',
    text: 'Travaux de zinguerie impeccables. L\'équipe a été ponctuelle, soigneuse et a laissé le chantier propre. Le résultat est parfait, plus aucune infiltration.',
    service: 'Zinguerie',
  },
  {
    name: 'Jean-Claude R.',
    location: 'Saint-Denis (93)',
    rating: 5,
    date: '2023-11-05',
    text: 'Très bonne entreprise. Devis clair et détaillé, travaux réalisés dans les délais. La nouvelle isolation a vraiment amélioré le confort de notre maison.',
    service: 'Isolation toiture',
  },
  {
    name: 'Isabelle T.',
    location: 'Boulogne-Billancourt (92)',
    rating: 5,
    date: '2023-10-18',
    text: 'Nettoyage et traitement de toiture réalisés avec soin. Résultat bluffant, la toiture est comme neuve. Prix raisonnable et équipe sympathique.',
    service: 'Nettoyage & traitement',
  },
  {
    name: 'François D.',
    location: 'Évry (91)',
    rating: 5,
    date: '2023-09-22',
    text: 'Pose de tuiles réalisée avec expertise. Très satisfait de la qualité des matériaux utilisés et du soin apporté aux finitions. Je recommande sans hésitation.',
    service: 'Pose de tuiles',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Note : ${rating} sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'text-terracotta fill-terracotta' : 'text-offwhite/20'}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-offwhite" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-terracotta text-sm font-medium tracking-widest uppercase">Avis Clients</span>
          <h2 id="testimonials-heading" className="font-serif text-4xl lg:text-5xl font-bold text-charcoal mt-2 mb-4">
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto text-lg">
            La satisfaction de nos clients est notre priorité. Découvrez leurs témoignages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="testimonial-card"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div
                itemProp="itemReviewed"
                itemScope
                itemType="https://schema.org/LocalBusiness"
                className="hidden"
              >
                <span itemProp="name">VERDIER COUVERTURE</span>
              </div>

              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="font-semibold text-charcoal" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">{t.name}</span>
                  </div>
                  <div className="text-charcoal/50 text-sm">{t.location}</div>
                </div>
                <div
                  itemProp="reviewRating"
                  itemScope
                  itemType="https://schema.org/Rating"
                >
                  <meta itemProp="ratingValue" content={String(t.rating)} />
                  <meta itemProp="bestRating" content="5" />
                  <StarRating rating={t.rating} />
                </div>
              </div>

              <p className="text-charcoal/70 text-sm leading-relaxed mb-4" itemProp="reviewBody">
                "{t.text}"
              </p>

              <div className="flex items-center justify-between text-xs text-charcoal/40">
                <span className="bg-terracotta/10 text-terracotta px-2 py-1 rounded-full">
                  {t.service}
                </span>
                <time dateTime={t.date} itemProp="datePublished">
                  {new Date(t.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' })}
                </time>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
