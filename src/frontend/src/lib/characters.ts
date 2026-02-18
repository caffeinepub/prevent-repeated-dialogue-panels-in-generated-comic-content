/**
 * Character definitions for Spider-Verse with artwork assets.
 */

export interface Character {
  id: string;
  name: string;
  artworkSrc: string;
  artworkAlt: string;
}

export const CHARACTERS: Character[] = [
  {
    id: 'miles',
    name: 'Miles',
    artworkSrc: '/assets/generated/character-miles.dim_768x768.png',
    artworkAlt: 'Miles Morales - The new Spider-Man from Brooklyn'
  },
  {
    id: 'gwen',
    name: 'Gwen',
    artworkSrc: '/assets/generated/character-gwen.dim_768x768.png',
    artworkAlt: 'Gwen Stacy - Spider-Woman from another dimension'
  },
  {
    id: 'peter-b',
    name: 'Peter B.',
    artworkSrc: '/assets/generated/character-peter-b.dim_768x768.png',
    artworkAlt: 'Peter B. Parker - A worn-out Spider-Man mentor'
  },
  {
    id: 'peter-parker',
    name: 'Peter Parker',
    artworkSrc: '/assets/generated/character-peter-parker.dim_768x768.png',
    artworkAlt: 'Peter Parker - The original Spider-Man'
  },
  {
    id: 'noir',
    name: 'Noir',
    artworkSrc: '/assets/generated/character-noir.dim_768x768.png',
    artworkAlt: 'Spider-Man Noir - The dark detective from the 1930s'
  },
  {
    id: 'peni',
    name: 'Peni',
    artworkSrc: '/assets/generated/character-peni.dim_768x768.png',
    artworkAlt: 'Peni Parker - Anime-style Spider-hero with SP//dr robot'
  },
  {
    id: 'ham',
    name: 'Ham',
    artworkSrc: '/assets/generated/character-ham.dim_768x768.png',
    artworkAlt: 'Spider-Ham - The cartoon pig superhero'
  },
  {
    id: 'kingpin',
    name: 'Kingpin',
    artworkSrc: '/assets/generated/character-kingpin.dim_768x768.png',
    artworkAlt: 'Kingpin - The powerful crime lord and main villain'
  },
  {
    id: 'jefferson',
    name: 'Jefferson',
    artworkSrc: '/assets/generated/character-jefferson.dim_768x768.png',
    artworkAlt: 'Jefferson Davis - Miles\' father and NYPD officer'
  },
  {
    id: 'aaron',
    name: 'Aaron',
    artworkSrc: '/assets/generated/character-aaron-v2.dim_768x768.png',
    artworkAlt: 'Aaron Davis - Miles\' uncle with dark skin and short hair'
  }
];
