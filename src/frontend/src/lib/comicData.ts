import type { ComicPanel } from './comicModel';

/**
 * Structured comic data for Spider-Man: Into the Spider-Verse.
 * Each panel contains distinct comic parts (captions, dialogue, SFX, etc.) and optional illustrations.
 */

export const STORY_PANELS: ComicPanel[] = [
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-01.dim_1024x768.png',
    illustrationAlt: 'Brooklyn cityscape establishing shot in comic style',
    parts: [
      { type: 'caption', text: 'Brooklyn, New York' },
      { type: 'dialogue', speaker: 'Miles', text: "Alright… let's do this. My name is Miles Morales." }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-02.dim_1024x768.png',
    illustrationAlt: 'Miles Morales, a Black teenager, and his father Jefferson in their apartment',
    parts: [
      { type: 'scene', text: 'Miles\' apartment - Morning' },
      { type: 'dialogue', speaker: 'Jefferson', text: "You're going to be late! This school is important!" },
      { type: 'dialogue', speaker: 'Miles', text: 'I know, Dad… I just need space.' }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-03.dim_1024x768.png',
    illustrationAlt: 'Uncle Aaron\'s cozy apartment with graffiti art',
    parts: [
      { type: 'caption', text: 'Later, at Uncle Aaron\'s place' },
      { type: 'dialogue', speaker: 'Aaron', text: "You don't have to be what everyone expects. Be yourself." }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-04.dim_1024x768.png',
    illustrationAlt: 'Dark subway tunnel with glowing radioactive spider',
    parts: [
      { type: 'scene', text: 'Abandoned subway tunnel' },
      { type: 'caption', text: 'A strange spider bites Miles in the darkness.' },
      { type: 'sfx', text: 'BITE!' }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-05.dim_1024x768.png',
    illustrationAlt: 'Miles Morales, a Black teenager, stuck to ceiling with dramatic perspective in comic style',
    parts: [
      { type: 'dialogue', speaker: 'Miles', text: 'Why am I stuck to the ceiling?!' },
      { type: 'sfx', text: 'THWIP!' }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-06.dim_1024x768.png',
    illustrationAlt: 'Kingpin\'s underground facility with massive collider machine',
    parts: [
      { type: 'scene', text: 'Kingpin\'s underground facility' },
      { type: 'dialogue', speaker: 'Kingpin', text: 'Activate the collider.' },
      { type: 'sfx', text: 'WHRRRRR' }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-07.dim_1024x768.png',
    illustrationAlt: 'Dynamic comic-style battle scene with explosive energy blasts, inked outlines, and motion lines',
    parts: [
      { type: 'dialogue', speaker: 'Peter Parker', text: 'That machine will tear reality apart!' },
      { type: 'caption', text: 'Battle erupts. Explosions shake the chamber.' },
      { type: 'sfx', text: 'BOOM!' }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-08.dim_1024x768.png',
    illustrationAlt: 'Close-up of Peter Parker handing USB drive to Miles',
    parts: [
      { type: 'dialogue', speaker: 'Peter Parker', text: 'Take this device. Finish what I started.' },
      { type: 'caption', text: 'He hands Miles a small USB drive.' }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-09.dim_1024x768.png',
    illustrationAlt: 'Heavy impact moment with debris and motion streaks',
    parts: [
      { type: 'caption', text: 'Kingpin strikes. Silence falls.' },
      { type: 'sfx', text: 'CRASH!' }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-10.dim_1024x768.png',
    illustrationAlt: 'Miles Morales, a Black teenager, in shadow watching helplessly in comic style',
    parts: [
      { type: 'thought', speaker: 'Miles', text: 'I should\'ve helped him…' },
      { type: 'caption', text: 'Miles watches helplessly from the shadows.' }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-11.dim_1024x768.png',
    illustrationAlt: 'Gwen entering Miles\' dorm room',
    parts: [
      { type: 'scene', text: 'Miles\' dorm room' },
      { type: 'dialogue', speaker: 'Gwen', text: "You're not the only one like this." }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-12.dim_1024x768.png',
    illustrationAlt: 'Peter B. Parker with burger in casual scene',
    parts: [
      { type: 'dialogue', speaker: 'Peter B. Parker', text: "Kid, being Spider-Man isn't about perfection." },
      { type: 'caption', text: 'Peter B. takes a bite of his burger.' }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-13.dim_1024x768.png',
    illustrationAlt: 'Rooftop confrontation with Prowler and wind effects',
    parts: [
      { type: 'scene', text: 'Rooftop confrontation' },
      { type: 'dialogue', speaker: 'Prowler', text: "You don't belong here." },
      { type: 'sfx', text: 'WHOOSH' }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-14.dim_1024x768.png',
    illustrationAlt: 'Emotional reveal as Prowler removes mask, Miles Morales (Black teenager) reacts in shock',
    parts: [
      { type: 'dialogue', speaker: 'Miles', text: 'Uncle…?' },
      { type: 'caption', text: 'The mask comes off. Miles\' world shatters.' }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-15.dim_1024x768.png',
    illustrationAlt: 'Dramatic gunshot scene with stylized impact',
    parts: [
      { type: 'dialogue', speaker: 'Aaron', text: "You're going to be better than me." },
      { type: 'caption', text: 'Gunshot echoes.' },
      { type: 'sfx', text: 'BANG!' }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-16.dim_1024x768.png',
    illustrationAlt: 'Miles Morales, a Black teenager, standing determined with bold backlighting in comic style',
    parts: [
      { type: 'dialogue', speaker: 'Miles', text: "I won't run anymore." },
      { type: 'caption', text: 'Miles stands tall, determination in his eyes.' }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-17.dim_1024x768.png',
    illustrationAlt: 'Miles Morales, a Black teenager in Spider-Man suit, leaping from skyscraper with vertigo perspective',
    parts: [
      { type: 'dialogue', speaker: 'Peter B.', text: 'Then jump.' },
      { type: 'caption', text: 'Miles leaps from the skyscraper. The city rises toward him.' },
      { type: 'sfx', text: 'LEAP!' }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-18.dim_1024x768.png',
    illustrationAlt: 'Miles Morales, a Black teenager in Spider-Man suit, swinging through neon-lit Brooklyn streets in comic style',
    parts: [
      { type: 'dialogue', speaker: 'Miles', text: "I'm Spider-Man." },
      { type: 'caption', text: 'He swings through the neon-lit streets of Brooklyn.' }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-19.dim_1024x768.png',
    illustrationAlt: 'Dynamic comic-style final battle inside collider with portal energy, inked action lines and impact effects',
    parts: [
      { type: 'scene', text: 'Final battle inside the collider' },
      { type: 'dialogue', speaker: 'Kingpin', text: "You're nothing!" },
      { type: 'sfx', text: 'SMASH!' }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-20.dim_1024x768.png',
    illustrationAlt: 'Comic-style venom blast with jagged lightning energy, bold inked outlines and explosive motion effects',
    parts: [
      { type: 'dialogue', speaker: 'Miles', text: "I'm not supposed to be you." },
      { type: 'caption', text: 'Venom blast shatters the chamber.' },
      { type: 'sfx', text: 'ZZZZAP!' }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-21.dim_1024x768.png',
    illustrationAlt: 'Gwen smiling before stepping through portal',
    parts: [
      { type: 'dialogue', speaker: 'Gwen', text: "You're amazing." },
      { type: 'caption', text: 'She smiles before stepping through her portal.' }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-22.dim_1024x768.png',
    illustrationAlt: 'Multiple portals closing with circular shapes',
    parts: [
      { type: 'dialogue', speaker: 'Peter B.', text: "You've got this from here." },
      { type: 'caption', text: 'Portals close one by one.' },
      { type: 'sfx', text: 'VWORP' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Miles', text: 'Anyone can wear the mask. You just have to take the leap.' },
      { type: 'caption', text: 'Miles swings into the sunset, ready for whatever comes next.' }
    ]
  }
];

export const CREDITS_PANELS: ComicPanel[] = [
  {
    kind: 'credits',
    parts: [
      { type: 'caption', text: 'Original Spider-Man created by Stan Lee & Steve Ditko' }
    ]
  },
  {
    kind: 'credits',
    parts: [
      { type: 'caption', text: 'Miles Morales created by Brian Michael Bendis & Sara Pichelli' }
    ]
  },
  {
    kind: 'credits',
    parts: [
      { type: 'caption', text: 'Inspired by the animated film Spider-Man: Into the Spider-Verse' }
    ]
  },
  {
    kind: 'credits',
    parts: [
      { type: 'caption', text: 'Comic Adaptation by Andy Romero Escobar J.' }
    ]
  },
  {
    kind: 'credits',
    parts: [
      { type: 'caption', text: 'Thank you for reading.' }
    ]
  }
];
