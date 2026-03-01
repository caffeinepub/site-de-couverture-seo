import { Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Marie-Claire D.',
    location: 'Cergy',
    rating: 5,
    date: '2025-11-15',
    text: 'Excellent travail ! L\'équipe est intervenue rapidement après la tempête. Toiture réparée en une journée, propre et soignée. Je recommande vivement.',
  },
  {
    id: '2',
    name: 'Jean-Pierre M.',
    location: 'Argenteuil',
    rating: 5,
    date: '2025-10-03',
    text: 'Réfection complète de ma toiture en tuiles canal. Travail impeccable, délais respectés et prix honnête. Très professionnel.',
  },
  {
    id: '3',
    name: 'Sophie L.',
    location: 'Versailles',
    rating: 5,
    date: '2025-09-20',
    text: 'Nettoyage et traitement hydrofuge de ma toiture. Résultat bluffant ! La toiture est comme neuve. Équipe sympathique et sérieuse.',
  },
  {
    id: '4',
    name: 'Robert T.',
    location: 'Saint-Denis',
    rating: 5,
    date: '2025-08-12',
    text: 'Remplacement des gouttières et zinguerie complète. Travail soigné, devis respecté. Je ferai appel à eux pour la prochaine réfection.',
  },
  {
    id: '5',
    name: 'Isabelle F.',
    location: 'Pontoise',
    rating: 5,
    date: '2025-07-28',
    text: 'Isolation de toiture par l\'extérieur. Économies d\'énergie visibles dès la première facture. Très satisfaite du résultat.',
  },
  {
    id: '6',
    name: 'Michel B.',
    location: 'Évry',
    rating: 5,
    date: '2025-06-14',
    text: 'Intervention d\'urgence suite à une fuite. Réponse rapide, diagnostic précis et réparation efficace. Merci à toute l\'équipe !',
  },
];

function safeFormatDate(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return '';
    return date.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
  } catch {
    return '';
  }
}

function StarRating({ rating }: { rating: number }) {
  const safeRating = Math.min(5, Math.max(0, Math.round(rating ?? 0)));
  return (
    <div className="flex gap-0.5" aria-label={`Note : ${safeRating} sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < safeRating ? 'text-terracotta fill-terracotta' : 'text-muted-foreground/30'}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-background" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-terracotta font-semibold tracking-widest uppercase text-sm mb-3">
            Témoignages
          </p>
          <h2
            id="testimonials-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Ce que disent nos clients
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            La satisfaction de nos clients est notre priorité. Découvrez leurs retours d'expérience.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="testimonial-card" aria-label={`Témoignage de ${testimonial.name ?? ''}`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name ?? ''}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.location ?? ''}</p>
                </div>
                <time
                  dateTime={testimonial.date ?? ''}
                  className="text-muted-foreground text-xs"
                >
                  {safeFormatDate(testimonial.date ?? '')}
                </time>
              </div>
              <StarRating rating={testimonial.rating ?? 0} />
              <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                "{testimonial.text ?? ''}"
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
