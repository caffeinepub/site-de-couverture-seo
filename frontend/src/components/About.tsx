import { useCallback } from 'react';
import { Award, Home, Wrench } from 'lucide-react';

interface Strength {
  id: string;
  icon: React.ElementType;
  iconImage?: string;
  iconImageAlt?: string;
  title: string;
  description: string;
}

const strengths: Strength[] = [
  {
    id: 'quality',
    icon: Award,
    iconImage: '/assets/generated/quality-icon.dim_128x128.png',
    iconImageAlt: 'Icône qualité',
    title: 'Qualité garantie',
    description: 'Travaux réalisés dans les règles de l\'art avec des matériaux sélectionnés. Garantie décennale sur tous nos chantiers.',
  },
  {
    id: 'expertise',
    icon: Home,
    iconImage: '/assets/generated/roof-icon.dim_128x128.png',
    iconImageAlt: 'Icône toiture',
    title: 'Expertise locale',
    description: 'Plus de 15 ans d\'expérience en Île-de-France. Nous connaissons les spécificités climatiques et architecturales de la région.',
  },
  {
    id: 'services',
    icon: Wrench,
    iconImage: '/assets/generated/services-icon.dim_128x128.png',
    iconImageAlt: 'Icône services',
    title: 'Service complet',
    description: 'De l\'étude à la réception des travaux, nous gérons l\'intégralité de votre projet de couverture.',
  },
];

export default function About() {
  const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    target.style.display = 'none';
  }, []);

  return (
    <section id="about" className="py-20 lg:py-28 bg-cream" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - text */}
          <div>
            <p className="text-terracotta font-semibold tracking-widest uppercase text-sm mb-3">
              À propos
            </p>
            <h2
              id="about-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Artisan couvreur de confiance en Île-de-France
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Verdier Couverture est une entreprise familiale fondée sur des valeurs de sérieux,
              de qualité et de proximité. Basés en Île-de-France, nous intervenons sur tous types
              de toitures dans un rayon de 80 km.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Notre équipe de couvreurs qualifiés maîtrise toutes les techniques de couverture
              traditionnelle et moderne. Chaque chantier est suivi personnellement par notre
              chef d'équipe pour garantir un résultat à la hauteur de vos attentes.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: '15+', label: 'Ans d\'expérience' },
                { value: '500+', label: 'Chantiers réalisés' },
                { value: '100%', label: 'Clients satisfaits' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-3xl font-bold text-terracotta mb-1">
                    {stat.value ?? ''}
                  </p>
                  <p className="text-muted-foreground text-xs leading-tight">
                    {stat.label ?? ''}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - strengths */}
          <div className="space-y-8">
            {(Array.isArray(strengths) ? strengths : []).map((strength) => {
              const Icon = strength.icon ?? null;
              return (
                <div key={strength.id} className="flex gap-5 items-start">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-sm bg-terracotta/10 flex items-center justify-center">
                    {strength.iconImage ? (
                      <img
                        src={strength.iconImage}
                        alt={strength.iconImageAlt ?? ''}
                        className="w-8 h-8 object-contain"
                        loading="lazy"
                        onError={handleImageError}
                      />
                    ) : Icon ? (
                      <Icon size={28} className="text-terracotta" aria-hidden="true" />
                    ) : null}
                  </div>
                  {/* Text */}
                  <div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                      {strength.title ?? ''}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {strength.description ?? ''}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
