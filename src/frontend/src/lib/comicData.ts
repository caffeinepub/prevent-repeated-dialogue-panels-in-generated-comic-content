import type { ComicPanel } from './comicModel';

/**
 * Structured comic data for Spider-Man: Into the Spider-Verse.
 * Each panel contains distinct comic parts (captions, dialogue, SFX, etc.).
 */

export const STORY_PANELS: ComicPanel[] = [
  {
    kind: 'story',
    parts: [
      { type: 'caption', text: 'Brooklyn, New York' },
      { type: 'dialogue', speaker: 'Miles', text: "Alright… let's do this. My name is Miles Morales." }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'scene', text: 'Miles\' apartment - Morning' },
      { type: 'dialogue', speaker: 'Jefferson', text: "You're going to be late! This school is important!" },
      { type: 'dialogue', speaker: 'Miles', text: 'I know, Dad… I just need space.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'caption', text: 'Later, at Uncle Aaron\'s place' },
      { type: 'dialogue', speaker: 'Aaron', text: "You don't have to be what everyone expects. Be yourself." }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'scene', text: 'Abandoned subway tunnel' },
      { type: 'caption', text: 'A strange spider bites Miles in the darkness.' },
      { type: 'sfx', text: 'BITE!' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Miles', text: 'Why am I stuck to the ceiling?!' },
      { type: 'sfx', text: 'THWIP!' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'scene', text: 'Kingpin\'s underground facility' },
      { type: 'dialogue', speaker: 'Kingpin', text: 'Activate the collider.' },
      { type: 'sfx', text: 'WHRRRRR' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Peter Parker', text: 'That machine will tear reality apart!' },
      { type: 'caption', text: 'Battle erupts. Explosions shake the chamber.' },
      { type: 'sfx', text: 'BOOM!' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Peter Parker', text: 'Take this device. Finish what I started.' },
      { type: 'caption', text: 'He hands Miles a small USB drive.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'caption', text: 'Kingpin strikes. Silence falls.' },
      { type: 'sfx', text: 'CRASH!' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'thought', speaker: 'Miles', text: 'I should\'ve helped him…' },
      { type: 'caption', text: 'Miles watches helplessly from the shadows.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'scene', text: 'Miles\' dorm room' },
      { type: 'dialogue', speaker: 'Gwen', text: "You're not the only one like this." }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Peter B. Parker', text: "Kid, being Spider-Man isn't about perfection." },
      { type: 'caption', text: 'Peter B. takes a bite of his burger.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'scene', text: 'Rooftop confrontation' },
      { type: 'dialogue', speaker: 'Prowler', text: "You don't belong here." },
      { type: 'sfx', text: 'WHOOSH' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Miles', text: 'Uncle…?' },
      { type: 'caption', text: 'The mask comes off. Miles\' world shatters.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Aaron', text: "You're going to be better than me." },
      { type: 'caption', text: 'Gunshot echoes.' },
      { type: 'sfx', text: 'BANG!' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Miles', text: "I won't run anymore." },
      { type: 'caption', text: 'Miles stands tall, determination in his eyes.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Peter B.', text: 'Then jump.' },
      { type: 'caption', text: 'Miles leaps from the skyscraper. The city rises toward him.' },
      { type: 'sfx', text: 'LEAP!' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Miles', text: "I'm Spider-Man." },
      { type: 'caption', text: 'He swings through the neon-lit streets of Brooklyn.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'scene', text: 'Final battle inside the collider' },
      { type: 'dialogue', speaker: 'Kingpin', text: "You're nothing!" },
      { type: 'sfx', text: 'SMASH!' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Miles', text: "I'm not supposed to be you." },
      { type: 'caption', text: 'Venom blast shatters the chamber.' },
      { type: 'sfx', text: 'ZZZZAP!' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Gwen', text: "You're amazing." },
      { type: 'caption', text: 'She smiles before stepping through her portal.' }
    ]
  },
  {
    kind: 'story',
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
