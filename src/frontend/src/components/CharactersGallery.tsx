import { CHARACTERS } from '@/lib/characters';
import { useI18n } from '@/hooks/useI18n';

export function CharactersGallery() {
  const { t } = useI18n();

  return (
    <section className="space-y-6">
      <h2 className="font-heading text-2xl md:text-3xl uppercase text-foreground tracking-tight">
        {t('section.characters')}
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {CHARACTERS.map((character) => (
          <div
            key={character.id}
            className="flex flex-col items-center space-y-2 group"
          >
            <div className="relative w-full aspect-square overflow-hidden border-4 border-border shadow-comic hover:shadow-comic-lg transition-shadow duration-200">
              <img
                src={character.artworkSrc}
                alt={character.artworkAlt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-200"
                onError={(e) => {
                  // Fallback to placeholder on error to prevent gallery breaking
                  const target = e.target as HTMLImageElement;
                  if (target.src !== '/assets/generated/character-aaron.dim_768x768.png') {
                    target.src = '/assets/generated/character-aaron.dim_768x768.png';
                  }
                }}
              />
            </div>
            <p className="font-heading text-lg uppercase tracking-wide text-center">
              {character.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
