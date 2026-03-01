import { useCallback } from 'react';
import { CheckCircle } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
}

const services: Service[] = [
  {
    id: 'refection',
    title: 'Réfection de toiture',
    description: 'Remplacement complet ou partiel de votre couverture avec des matériaux de qualité adaptés à votre région.',
    features: ['Diagnostic gratuit', 'Tuiles terre cuite', 'Garantie décennale'],
    image: '/assets/generated/service-refection-toiture.dim_800x500.png',
    imageAlt: 'Réfection de toiture en tuiles',
  },
  {
    id: 'pose-tuiles',
    title: 'Pose de tuiles',
    description: 'Pose et remplacement de tuiles canal, romanes ou mécaniques pour une toiture durable et esthétique.',
    features: ['Tuiles canal', 'Tuiles romanes', 'Tuiles mécaniques'],
    image: '/assets/generated/service-pose-tuiles.dim_800x500.png',
    imageAlt: 'Pose de tuiles sur toiture',
  },
  {
    id: 'zinguerie',
    title: 'Zinguerie',
    description: 'Réalisation et remplacement de gouttières, chéneaux, faîtages et tous ouvrages en zinc.',
    features: ['Gouttières zinc', 'Chéneaux', 'Solins et faîtages'],
    image: '/assets/generated/service-zinguerie.dim_800x500.png',
    imageAlt: 'Travaux de zinguerie sur toiture',
  },
  {
    id: 'isolation',
    title: 'Isolation toiture',
    description: 'Amélioration de l\'isolation thermique et phonique de votre toiture pour réduire vos factures d\'énergie.',
    features: ['Isolation par l\'extérieur', 'Laine de roche', 'Économies d\'énergie'],
    image: '/assets/generated/service-isolation.dim_800x500.png',
    imageAlt: 'Isolation thermique de toiture',
  },
  {
    id: 'reparation',
    title: 'Réparation urgente',
    description: 'Intervention rapide pour réparer les fuites, tuiles cassées ou dégâts après tempête.',
    features: ['Intervention 48h', 'Bâchage d\'urgence', 'Devis immédiat'],
    image: '/assets/generated/service-reparation.dim_800x500.png',
    imageAlt: 'Réparation urgente de toiture',
  },
  {
    id: 'nettoyage',
    title: 'Nettoyage & traitement',
    description: 'Nettoyage haute pression et traitement hydrofuge pour prolonger la durée de vie de votre toiture.',
    features: ['Haute pression', 'Traitement hydrofuge', 'Anti-mousse'],
    image: '/assets/generated/service-nettoyage.dim_800x500.png',
    imageAlt: 'Nettoyage et traitement de toiture',
  },
];

export default function Services() {
  const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    target.style.display = 'none';
    const parent = target.parentElement;
    if (parent) {
      parent.style.background = 'oklch(0.25 0.02 60)';
    }
  }, []);

  return (
    <section id="services" className="py-20 lg:py-28 bg-background" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-terracotta font-semibold tracking-widest uppercase text-sm mb-3">
            Nos prestations
          </p>
          <h2
            id="services-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Des services complets pour votre toiture
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            De la réfection complète à l'entretien régulier, nous prenons en charge tous vos travaux de couverture en Île-de-France.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <article key={service.id} className="card-service group" aria-label={service.title}>
              {/* Image */}
              <div className="relative h-48 overflow-hidden rounded-sm mb-5 bg-charcoal/20">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={handleImageError}
                />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {service.title ?? ''}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description ?? ''}
              </p>

              {/* Features */}
              <ul className="space-y-2" aria-label={`Caractéristiques de ${service.title}`}>
                {(Array.isArray(service.features) ? service.features : []).map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle size={16} className="text-terracotta flex-shrink-0" aria-hidden="true" />
                    <span>{feature ?? ''}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
