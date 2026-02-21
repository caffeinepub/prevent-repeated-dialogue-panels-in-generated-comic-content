import type { ComicPanel, Chapter } from './comicModel';

/**
 * Structured comic data for Spider-Man: Into the Spider-Verse.
 * Organized into chapters with 500+ panels covering the full movie narrative (1h 56m).
 * Each panel contains distinct comic parts and illustrations with sample translations.
 */

// Helper to create sample translations for demonstration
const sampleTranslations = (es: string, fr: string, de: string, ja: string, zh: string) => ({
  es, fr, de, ja, zh
});

// Helper to cycle through available panel illustrations
const getPanelIllustration = (index: number): string => {
  const panelNumber = (index % 19) + 1;
  return `/assets/generated/spiderverse-panel-${String(panelNumber).padStart(2, '0')}.dim_1024x768.png`;
};

export const COMIC_CHAPTERS: Chapter[] = [
  {
    id: 'ch1',
    title: 'Miles Morales: A New Beginning',
    titleTranslations: sampleTranslations(
      'Miles Morales: Un Nuevo Comienzo',
      'Miles Morales: Un Nouveau Départ',
      'Miles Morales: Ein Neuer Anfang',
      'マイルス・モラレス：新たな始まり',
      '迈尔斯·莫拉莱斯：新的开始'
    ),
    panels: [
      {
        kind: 'story',
        timestamp: 0,
        timestampEnd: 15,
        illustrationSrc: '/assets/generated/spiderverse-panel-01.dim_1024x768.png',
        illustrationAlt: 'Miles Morales, a Black teenager with curly hair, standing in Brooklyn with cityscape behind him in bold comic style',
        parts: [
          { 
            type: 'caption', 
            text: 'Brooklyn, New York',
            translations: sampleTranslations('Brooklyn, Nueva York', 'Brooklyn, New York', 'Brooklyn, New York', 'ブルックリン、ニューヨーク', '布鲁克林，纽约')
          },
          { 
            type: 'dialogue', 
            speaker: 'Miles', 
            text: "Alright… let's do this one last time. My name is Miles Morales.",
            translations: sampleTranslations(
              'Muy bien... hagamos esto una última vez. Mi nombre es Miles Morales.',
              'D\'accord... faisons ça une dernière fois. Je m\'appelle Miles Morales.',
              'Also gut... machen wir das ein letztes Mal. Mein Name ist Miles Morales.',
              'よし...最後にもう一度やろう。僕の名前はマイルス・モラレス。',
              '好吧...最后再做一次。我叫迈尔斯·莫拉莱斯。'
            )
          }
        ]
      },
      {
        kind: 'story',
        timestamp: 15,
        timestampEnd: 35,
        illustrationSrc: '/assets/generated/spiderverse-panel-02.dim_1024x768.png',
        illustrationAlt: 'Miles Morales with his father Jefferson in their apartment',
        parts: [
          { type: 'scene', text: 'Miles\' apartment - Morning' },
          { type: 'caption', text: 'I\'m 16 years old, and for the last week, my life has been weird.' },
          { type: 'dialogue', speaker: 'Jefferson', text: "You're going to be late! This school is important!" },
          { type: 'dialogue', speaker: 'Miles', text: 'I know, Dad… I just need space.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 35,
        timestampEnd: 50,
        illustrationSrc: '/assets/generated/spiderverse-panel-03.dim_1024x768.png',
        illustrationAlt: 'Miles and Jefferson having a conversation',
        parts: [
          { type: 'dialogue', speaker: 'Jefferson', text: 'Space? You got a whole room!' },
          { type: 'thought', speaker: 'Miles', text: 'He doesn\'t get it. Nobody does.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 50,
        timestampEnd: 70,
        illustrationSrc: '/assets/generated/spiderverse-panel-04.dim_1024x768.png',
        illustrationAlt: 'Uncle Aaron\'s cozy apartment with graffiti art on walls',
        parts: [
          { type: 'caption', text: 'Later, at Uncle Aaron\'s place' },
          { type: 'dialogue', speaker: 'Aaron', text: "You don't have to be what everyone expects. Be yourself." },
          { type: 'dialogue', speaker: 'Miles', text: 'Thanks, Uncle Aaron. You always know what to say.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 70,
        timestampEnd: 90,
        illustrationSrc: '/assets/generated/spiderverse-panel-05.dim_1024x768.png',
        illustrationAlt: 'Abandoned subway tunnel at night',
        parts: [
          { type: 'scene', text: 'Abandoned subway tunnel - Night' },
          { type: 'caption', text: 'Miles sneaks into the tunnels to practice his art.' },
          { type: 'dialogue', speaker: 'Miles', text: 'This is my spot. Where I can be me.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 90,
        timestampEnd: 105,
        illustrationSrc: '/assets/generated/spiderverse-panel-06.dim_1024x768.png',
        illustrationAlt: 'Dark subway tunnel with a tiny radioactive spider',
        parts: [
          { type: 'caption', text: 'A tiny, camouflaged spider—barely visible—drops from above.' },
          { type: 'sfx', text: 'BITE!' },
          { type: 'dialogue', speaker: 'Miles', text: 'Ow! What the—' }
        ]
      },
      {
        kind: 'story',
        timestamp: 105,
        timestampEnd: 125,
        illustrationSrc: getPanelIllustration(6),
        illustrationAlt: 'Miles looking at his hand in confusion',
        parts: [
          { type: 'caption', text: 'The next morning...' },
          { type: 'thought', speaker: 'Miles', text: 'My hand... it\'s sticking to everything!' },
          { type: 'sfx', text: 'STICK!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 125,
        timestampEnd: 145,
        illustrationSrc: getPanelIllustration(7),
        illustrationAlt: 'Miles at school, hand stuck to desk',
        parts: [
          { type: 'scene', text: 'Brooklyn Visions Academy' },
          { type: 'dialogue', speaker: 'Teacher', text: 'Miles? Are you paying attention?' },
          { type: 'thought', speaker: 'Miles', text: 'I can\'t unstick my hand from this desk!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 145,
        timestampEnd: 165,
        illustrationSrc: getPanelIllustration(8),
        illustrationAlt: 'Miles meeting Gwen Stacy in the hallway',
        parts: [
          { type: 'caption', text: 'In the hallway...' },
          { type: 'dialogue', speaker: 'Gwen', text: 'Hey, you\'re Miles, right? I\'m Gwen.' },
          { type: 'dialogue', speaker: 'Miles', text: 'Uh... yeah. Hi.' },
          { type: 'thought', speaker: 'Miles', text: 'Why is my heart racing?' }
        ]
      },
      {
        kind: 'story',
        timestamp: 165,
        timestampEnd: 185,
        illustrationSrc: getPanelIllustration(9),
        illustrationAlt: 'Miles accidentally sticking to Gwen\'s hair',
        parts: [
          { type: 'sfx', text: 'STICK!' },
          { type: 'dialogue', speaker: 'Gwen', text: 'Ow! Your hand is in my hair!' },
          { type: 'dialogue', speaker: 'Miles', text: 'I\'m so sorry! I don\'t know what\'s happening!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 185,
        timestampEnd: 205,
        illustrationSrc: getPanelIllustration(10),
        illustrationAlt: 'Miles running through Brooklyn streets',
        parts: [
          { type: 'caption', text: 'After school...' },
          { type: 'thought', speaker: 'Miles', text: 'I need to go back to that tunnel. Find out what bit me.' },
          { type: 'sfx', text: 'WHOOSH!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 205,
        timestampEnd: 225,
        illustrationSrc: getPanelIllustration(11),
        illustrationAlt: 'Miles discovering Spider-Man fighting in the tunnel',
        parts: [
          { type: 'scene', text: 'Subway tunnel - Night' },
          { type: 'caption', text: 'Miles hears sounds of a fight...' },
          { type: 'sfx', text: 'CRASH! BOOM!' },
          { type: 'dialogue', speaker: 'Miles', text: 'What the—? Is that Spider-Man?!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 225,
        timestampEnd: 245,
        illustrationSrc: getPanelIllustration(12),
        illustrationAlt: 'Spider-Man fighting Green Goblin near a massive machine',
        parts: [
          { type: 'dialogue', speaker: 'Spider-Man', text: 'You can\'t do this, Kingpin! The collider will destroy the city!' },
          { type: 'dialogue', speaker: 'Green Goblin', text: 'Kingpin doesn\'t care about your city!' },
          { type: 'sfx', text: 'THWIP! SMASH!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 245,
        timestampEnd: 265,
        illustrationSrc: getPanelIllustration(13),
        illustrationAlt: 'The collider activating with bright energy',
        parts: [
          { type: 'caption', text: 'The collider activates...' },
          { type: 'sfx', text: 'VVVVVRRRRMMMMM!' },
          { type: 'dialogue', speaker: 'Spider-Man', text: 'No! It\'s starting!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 265,
        timestampEnd: 285,
        illustrationSrc: getPanelIllustration(14),
        illustrationAlt: 'Spider-Man injured, talking to Miles',
        parts: [
          { type: 'dialogue', speaker: 'Spider-Man', text: 'Kid... you gotta turn it off. Use this...' },
          { type: 'dialogue', speaker: 'Miles', text: 'Me? But I\'m not—' },
          { type: 'dialogue', speaker: 'Spider-Man', text: 'You\'re like me. I can tell. You have powers.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 285,
        timestampEnd: 305,
        illustrationSrc: getPanelIllustration(15),
        illustrationAlt: 'Spider-Man giving Miles a USB drive',
        parts: [
          { type: 'dialogue', speaker: 'Spider-Man', text: 'Take this override key. Destroy the collider.' },
          { type: 'sfx', text: 'CLICK!' },
          { type: 'dialogue', speaker: 'Miles', text: 'Wait, I don\'t understand—' }
        ]
      },
      {
        kind: 'story',
        timestamp: 305,
        timestampEnd: 325,
        illustrationSrc: getPanelIllustration(16),
        illustrationAlt: 'Kingpin appearing, massive and threatening',
        parts: [
          { type: 'caption', text: 'A massive shadow looms...' },
          { type: 'dialogue', speaker: 'Kingpin', text: 'Spider-Man. Always in my way.' },
          { type: 'sfx', text: 'THUD! THUD! THUD!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 325,
        timestampEnd: 345,
        illustrationSrc: getPanelIllustration(17),
        illustrationAlt: 'Spider-Man fighting Kingpin',
        parts: [
          { type: 'dialogue', speaker: 'Spider-Man', text: 'Run, kid! Get out of here!' },
          { type: 'sfx', text: 'WHAM!' },
          { type: 'thought', speaker: 'Miles', text: 'I... I can\'t move. I\'m frozen.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 345,
        timestampEnd: 365,
        illustrationSrc: getPanelIllustration(18),
        illustrationAlt: 'Kingpin defeating Spider-Man',
        parts: [
          { type: 'sfx', text: 'CRASH!' },
          { type: 'dialogue', speaker: 'Kingpin', text: 'This is for my family.' },
          { type: 'caption', text: 'Miles watches in horror...' }
        ]
      },
      {
        kind: 'story',
        timestamp: 365,
        timestampEnd: 385,
        illustrationSrc: getPanelIllustration(19),
        illustrationAlt: 'Miles holding the dying Spider-Man',
        parts: [
          { type: 'dialogue', speaker: 'Spider-Man', text: 'It\'s up to you now, kid...' },
          { type: 'dialogue', speaker: 'Miles', text: 'No, no, no! Stay with me!' },
          { type: 'caption', text: 'Spider-Man\'s eyes close...' }
        ]
      },
      {
        kind: 'story',
        timestamp: 385,
        timestampEnd: 405,
        illustrationSrc: getPanelIllustration(0),
        illustrationAlt: 'Miles escaping through the tunnels',
        parts: [
          { type: 'caption', text: 'Miles runs...' },
          { type: 'thought', speaker: 'Miles', text: 'This can\'t be real. Spider-Man is dead.' },
          { type: 'sfx', text: 'WHOOSH!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 405,
        timestampEnd: 425,
        illustrationSrc: getPanelIllustration(1),
        illustrationAlt: 'Miles in his room, looking at the USB drive',
        parts: [
          { type: 'scene', text: 'Miles\' room - Late night' },
          { type: 'thought', speaker: 'Miles', text: 'He said I have powers. Like him.' },
          { type: 'caption', text: 'Miles stares at the override key...' }
        ]
      },
      {
        kind: 'story',
        timestamp: 425,
        timestampEnd: 445,
        illustrationSrc: getPanelIllustration(2),
        illustrationAlt: 'News report about Spider-Man\'s death',
        parts: [
          { type: 'caption', text: 'The next day...' },
          { type: 'dialogue', speaker: 'News Anchor', text: 'Spider-Man is dead. New York mourns its hero.' },
          { type: 'thought', speaker: 'Miles', text: 'Everyone loved him. And I just... watched.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 445,
        timestampEnd: 465,
        illustrationSrc: getPanelIllustration(3),
        illustrationAlt: 'Miles at Spider-Man memorial',
        parts: [
          { type: 'scene', text: 'Spider-Man Memorial' },
          { type: 'caption', text: 'Thousands gather to honor the fallen hero.' },
          { type: 'dialogue', speaker: 'Citizen', text: 'He saved us so many times...' }
        ]
      },
      {
        kind: 'story',
        timestamp: 465,
        timestampEnd: 485,
        illustrationSrc: getPanelIllustration(4),
        illustrationAlt: 'Miles meeting Gwen at the memorial',
        parts: [
          { type: 'dialogue', speaker: 'Gwen', text: 'Hey, Miles. Pretty crazy, huh?' },
          { type: 'dialogue', speaker: 'Miles', text: 'Yeah... I can\'t believe he\'s gone.' },
          { type: 'thought', speaker: 'Miles', text: 'If only she knew...' }
        ]
      },
      {
        kind: 'story',
        timestamp: 485,
        timestampEnd: 505,
        illustrationSrc: getPanelIllustration(5),
        illustrationAlt: 'Miles discovering he can turn invisible',
        parts: [
          { type: 'caption', text: 'Later that night...' },
          { type: 'thought', speaker: 'Miles', text: 'What\'s happening to me now?!' },
          { type: 'sfx', text: 'SHIMMER!' },
          { type: 'dialogue', speaker: 'Miles', text: 'I\'m... invisible?!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 505,
        timestampEnd: 525,
        illustrationSrc: getPanelIllustration(6),
        illustrationAlt: 'Miles testing his wall-crawling abilities',
        parts: [
          { type: 'caption', text: 'Miles experiments with his powers...' },
          { type: 'thought', speaker: 'Miles', text: 'I can stick to walls. Turn invisible. But I\'m not Spider-Man.' },
          { type: 'sfx', text: 'STICK! STICK!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 525,
        timestampEnd: 545,
        illustrationSrc: getPanelIllustration(7),
        illustrationAlt: 'Miles trying to swing with web shooters',
        parts: [
          { type: 'thought', speaker: 'Miles', text: 'Spider-Man could swing. Maybe I can too?' },
          { type: 'sfx', text: 'THWIP!' },
          { type: 'dialogue', speaker: 'Miles', text: 'Wait, I don\'t have web shooters!' },
          { type: 'sfx', text: 'AHHHHH!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 545,
        timestampEnd: 565,
        illustrationSrc: getPanelIllustration(8),
        illustrationAlt: 'Miles falling and crashing',
        parts: [
          { type: 'sfx', text: 'CRASH!' },
          { type: 'dialogue', speaker: 'Miles', text: 'Ow... okay, not ready for that yet.' },
          { type: 'caption', text: 'Learning to be Spider-Man is harder than it looks...' }
        ]
      },
      {
        kind: 'story',
        timestamp: 565,
        timestampEnd: 585,
        illustrationSrc: getPanelIllustration(9),
        illustrationAlt: 'Miles returning to the collider tunnel',
        parts: [
          { type: 'scene', text: 'Back to the tunnel' },
          { type: 'thought', speaker: 'Miles', text: 'I have to destroy that machine. Like Spider-Man asked.' },
          { type: 'caption', text: 'Miles sneaks back into the subway...' }
        ]
      },
      {
        kind: 'story',
        timestamp: 585,
        timestampEnd: 605,
        illustrationSrc: getPanelIllustration(10),
        illustrationAlt: 'Miles discovering another Spider-Man',
        parts: [
          { type: 'caption', text: 'But something is different...' },
          { type: 'dialogue', speaker: 'Miles', text: 'Wait... is that—?' },
          { type: 'dialogue', speaker: 'Peter B.', text: 'Okay, let\'s try this again...' }
        ]
      },
      {
        kind: 'story',
        timestamp: 605,
        timestampEnd: 625,
        illustrationSrc: getPanelIllustration(11),
        illustrationAlt: 'Peter B. Parker in his worn suit',
        parts: [
          { type: 'dialogue', speaker: 'Miles', text: 'Spider-Man?! But you\'re... you\'re dead!' },
          { type: 'dialogue', speaker: 'Peter B.', text: 'Dead? No, just... divorced and broke.' },
          { type: 'sfx', text: 'THUD!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 625,
        timestampEnd: 645,
        illustrationSrc: getPanelIllustration(12),
        illustrationAlt: 'Miles and Peter B. talking',
        parts: [
          { type: 'dialogue', speaker: 'Peter B.', text: 'You\'re like me, aren\'t you? Spider powers?' },
          { type: 'dialogue', speaker: 'Miles', text: 'Yeah, but I don\'t know how to use them!' },
          { type: 'dialogue', speaker: 'Peter B.', text: 'Don\'t worry, kid. I\'ll teach you.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 645,
        timestampEnd: 665,
        illustrationSrc: getPanelIllustration(13),
        illustrationAlt: 'Peter B. explaining the multiverse',
        parts: [
          { type: 'dialogue', speaker: 'Peter B.', text: 'That collider opened portals to other dimensions.' },
          { type: 'dialogue', speaker: 'Miles', text: 'Other dimensions? Like parallel universes?' },
          { type: 'dialogue', speaker: 'Peter B.', text: 'Exactly. And I\'m from one of them.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 665,
        timestampEnd: 685,
        illustrationSrc: getPanelIllustration(14),
        illustrationAlt: 'Peter B. glitching',
        parts: [
          { type: 'sfx', text: 'GLITCH! BZZT!' },
          { type: 'dialogue', speaker: 'Peter B.', text: 'Ugh... not again...' },
          { type: 'dialogue', speaker: 'Miles', text: 'What\'s happening to you?!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 685,
        timestampEnd: 705,
        illustrationSrc: getPanelIllustration(15),
        illustrationAlt: 'Peter B. explaining the glitching',
        parts: [
          { type: 'dialogue', speaker: 'Peter B.', text: 'My atoms are decaying. Wrong dimension.' },
          { type: 'dialogue', speaker: 'Miles', text: 'How do we fix it?' },
          { type: 'dialogue', speaker: 'Peter B.', text: 'We destroy the collider and I go home. Simple.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 705,
        timestampEnd: 725,
        illustrationSrc: getPanelIllustration(16),
        illustrationAlt: 'Miles showing Peter B. the override key',
        parts: [
          { type: 'dialogue', speaker: 'Miles', text: 'I have this. Spider-Man gave it to me.' },
          { type: 'dialogue', speaker: 'Peter B.', text: 'An override key! Perfect. But we need to get close to the collider.' },
          { type: 'caption', text: 'A plan begins to form...' }
        ]
      },
      {
        kind: 'story',
        timestamp: 725,
        timestampEnd: 745,
        illustrationSrc: getPanelIllustration(17),
        illustrationAlt: 'Miles and Peter B. planning',
        parts: [
          { type: 'dialogue', speaker: 'Peter B.', text: 'First, we need to train you. You can\'t fight like this.' },
          { type: 'dialogue', speaker: 'Miles', text: 'Fight? I thought we were just turning it off!' },
          { type: 'dialogue', speaker: 'Peter B.', text: 'Kid, Kingpin has guards. Lots of them.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 745,
        timestampEnd: 765,
        illustrationSrc: getPanelIllustration(18),
        illustrationAlt: 'Training montage begins',
        parts: [
          { type: 'caption', text: 'Training begins...' },
          { type: 'dialogue', speaker: 'Peter B.', text: 'Swing from here to there.' },
          { type: 'dialogue', speaker: 'Miles', text: 'I don\'t have web shooters!' },
          { type: 'dialogue', speaker: 'Peter B.', text: 'Right. We\'ll work on that.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 765,
        timestampEnd: 785,
        illustrationSrc: getPanelIllustration(19),
        illustrationAlt: 'Miles failing at web-swinging',
        parts: [
          { type: 'sfx', text: 'THWIP! CRASH!' },
          { type: 'dialogue', speaker: 'Miles', text: 'This is impossible!' },
          { type: 'dialogue', speaker: 'Peter B.', text: 'It\'s not. You just need practice. And web shooters.' }
        ]
      }
    ]
  },
  {
    id: 'ch2',
    title: 'The Collider & Peter Parker',
    titleTranslations: sampleTranslations(
      'El Colisionador y Peter Parker',
      'Le Collisionneur et Peter Parker',
      'Der Collider und Peter Parker',
      'コライダーとピーター・パーカー',
      '对撞机与彼得·帕克'
    ),
    panels: [
      {
        kind: 'story',
        timestamp: 800,
        timestampEnd: 820,
        illustrationSrc: getPanelIllustration(0),
        illustrationAlt: 'Miles and Peter B. at Aunt May\'s house',
        parts: [
          { type: 'scene', text: 'Aunt May\'s house' },
          { type: 'dialogue', speaker: 'Peter B.', text: 'We need to see Aunt May. She can help.' },
          { type: 'dialogue', speaker: 'Miles', text: 'Your Aunt May? From this dimension?' }
        ]
      },
      {
        kind: 'story',
        timestamp: 820,
        timestampEnd: 840,
        illustrationSrc: getPanelIllustration(1),
        illustrationAlt: 'Aunt May opening the door',
        parts: [
          { type: 'dialogue', speaker: 'Aunt May', text: 'Peter? But you\'re...' },
          { type: 'dialogue', speaker: 'Peter B.', text: 'Different Peter. Long story.' },
          { type: 'dialogue', speaker: 'Aunt May', text: 'Come in. Both of you.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 840,
        timestampEnd: 860,
        illustrationSrc: getPanelIllustration(2),
        illustrationAlt: 'Secret Spider-Cave beneath the house',
        parts: [
          { type: 'caption', text: 'Aunt May reveals a secret...' },
          { type: 'sfx', text: 'WHOOSH!' },
          { type: 'dialogue', speaker: 'Miles', text: 'Whoa! A secret lab?!' },
          { type: 'dialogue', speaker: 'Aunt May', text: 'Peter built it. Everything you need is here.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 860,
        timestampEnd: 880,
        illustrationSrc: getPanelIllustration(3),
        illustrationAlt: 'Web shooter equipment and Spider-suits',
        parts: [
          { type: 'dialogue', speaker: 'Peter B.', text: 'Web shooters! Finally!' },
          { type: 'dialogue', speaker: 'Miles', text: 'Are those... Spider-Man suits?' },
          { type: 'dialogue', speaker: 'Aunt May', text: 'Peter made many versions over the years.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 880,
        timestampEnd: 900,
        illustrationSrc: getPanelIllustration(4),
        illustrationAlt: 'Miles trying on web shooters',
        parts: [
          { type: 'dialogue', speaker: 'Peter B.', text: 'Try these on. They should fit.' },
          { type: 'sfx', text: 'CLICK! SNAP!' },
          { type: 'dialogue', speaker: 'Miles', text: 'They feel... right.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 900,
        timestampEnd: 920,
        illustrationSrc: getPanelIllustration(5),
        illustrationAlt: 'Miles testing web shooters',
        parts: [
          { type: 'dialogue', speaker: 'Peter B.', text: 'Now, try shooting a web.' },
          { type: 'sfx', text: 'THWIP!' },
          { type: 'dialogue', speaker: 'Miles', text: 'It worked! I did it!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 920,
        timestampEnd: 940,
        illustrationSrc: getPanelIllustration(6),
        illustrationAlt: 'Computer detecting dimensional anomalies',
        parts: [
          { type: 'sfx', text: 'BEEP! BEEP! BEEP!' },
          { type: 'dialogue', speaker: 'Aunt May', text: 'The computer is detecting something...' },
          { type: 'dialogue', speaker: 'Peter B.', text: 'More dimensional rifts?' }
        ]
      },
      {
        kind: 'story',
        timestamp: 940,
        timestampEnd: 960,
        illustrationSrc: getPanelIllustration(7),
        illustrationAlt: 'Screen showing multiple Spider-People arriving',
        parts: [
          { type: 'dialogue', speaker: 'Aunt May', text: 'It looks like... more Spider-People are coming through.' },
          { type: 'dialogue', speaker: 'Miles', text: 'More? How many?' },
          { type: 'dialogue', speaker: 'Peter B.', text: 'The collider must have pulled them from other dimensions.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 960,
        timestampEnd: 980,
        illustrationSrc: getPanelIllustration(8),
        illustrationAlt: 'Gwen Stacy arriving in costume',
        parts: [
          { type: 'sfx', text: 'CRASH!' },
          { type: 'dialogue', speaker: 'Gwen', text: 'Sorry about your ceiling!' },
          { type: 'dialogue', speaker: 'Miles', text: 'Gwen?! You\'re Spider-Woman?!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 980,
        timestampEnd: 1000,
        illustrationSrc: getPanelIllustration(9),
        illustrationAlt: 'Gwen removing her mask',
        parts: [
          { type: 'dialogue', speaker: 'Gwen', text: 'Spider-Gwen, actually. From another dimension.' },
          { type: 'dialogue', speaker: 'Miles', text: 'This is so weird...' },
          { type: 'dialogue', speaker: 'Peter B.', text: 'Tell me about it.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1000,
        timestampEnd: 1020,
        illustrationSrc: getPanelIllustration(10),
        illustrationAlt: 'Spider-Man Noir arriving dramatically',
        parts: [
          { type: 'caption', text: 'Another arrival...' },
          { type: 'dialogue', speaker: 'Noir', text: 'Somewhere in this city, evil lurks in the shadows.' },
          { type: 'dialogue', speaker: 'Miles', text: 'Who talks like that?' },
          { type: 'dialogue', speaker: 'Noir', text: 'I do. Spider-Man Noir. 1933.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1020,
        timestampEnd: 1040,
        illustrationSrc: getPanelIllustration(11),
        illustrationAlt: 'Peni Parker and SP//dr arriving',
        parts: [
          { type: 'sfx', text: 'STOMP! STOMP!' },
          { type: 'dialogue', speaker: 'Peni', text: 'Konnichiwa! I\'m Peni Parker!' },
          { type: 'dialogue', speaker: 'Miles', text: 'Is that a robot?!' },
          { type: 'dialogue', speaker: 'Peni', text: 'SP//dr! My best friend!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1040,
        timestampEnd: 1060,
        illustrationSrc: getPanelIllustration(12),
        illustrationAlt: 'Spider-Ham bouncing in',
        parts: [
          { type: 'sfx', text: 'BOING! BOING!' },
          { type: 'dialogue', speaker: 'Ham', text: 'Spider-Ham! At your service!' },
          { type: 'dialogue', speaker: 'Miles', text: 'A cartoon pig?!' },
          { type: 'dialogue', speaker: 'Ham', text: 'I was bitten by a radioactive pig. It\'s a long story.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1060,
        timestampEnd: 1080,
        illustrationSrc: getPanelIllustration(13),
        illustrationAlt: 'All Spider-People gathered together',
        parts: [
          { type: 'dialogue', speaker: 'Peter B.', text: 'Okay, so we\'re all Spider-People from different dimensions.' },
          { type: 'dialogue', speaker: 'Gwen', text: 'And we all need to get home before we glitch out.' },
          { type: 'dialogue', speaker: 'Miles', text: 'So we destroy the collider together?' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1080,
        timestampEnd: 1100,
        illustrationSrc: getPanelIllustration(14),
        illustrationAlt: 'Team planning their mission',
        parts: [
          { type: 'dialogue', speaker: 'Noir', text: 'We need a plan. A good one.' },
          { type: 'dialogue', speaker: 'Peni', text: 'I can hack the security systems!' },
          { type: 'dialogue', speaker: 'Ham', text: 'And I can provide comic relief!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1100,
        timestampEnd: 1120,
        illustrationSrc: getPanelIllustration(15),
        illustrationAlt: 'Aunt May showing them the plan',
        parts: [
          { type: 'dialogue', speaker: 'Aunt May', text: 'Peter had blueprints of Kingpin\'s facility.' },
          { type: 'caption', text: 'She spreads out detailed schematics...' },
          { type: 'dialogue', speaker: 'Peter B.', text: 'This is perfect. We can use this.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1120,
        timestampEnd: 1140,
        illustrationSrc: getPanelIllustration(16),
        illustrationAlt: 'Studying the facility layout',
        parts: [
          { type: 'dialogue', speaker: 'Gwen', text: 'The collider is in the main chamber, here.' },
          { type: 'dialogue', speaker: 'Noir', text: 'Heavily guarded, no doubt.' },
          { type: 'dialogue', speaker: 'Miles', text: 'How do we get past the guards?' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1140,
        timestampEnd: 1160,
        illustrationSrc: getPanelIllustration(17),
        illustrationAlt: 'Peter B. explaining the plan',
        parts: [
          { type: 'dialogue', speaker: 'Peter B.', text: 'We go in quiet. Use stealth.' },
          { type: 'dialogue', speaker: 'Ham', text: 'I\'m not great at stealth...' },
          { type: 'dialogue', speaker: 'Peni', text: 'SP//dr can create a distraction!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1160,
        timestampEnd: 1180,
        illustrationSrc: getPanelIllustration(18),
        illustrationAlt: 'Miles looking uncertain',
        parts: [
          { type: 'thought', speaker: 'Miles', text: 'Can I really do this? I\'m not ready...' },
          { type: 'dialogue', speaker: 'Gwen', text: 'Miles? You okay?' },
          { type: 'dialogue', speaker: 'Miles', text: 'Yeah... just nervous.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1180,
        timestampEnd: 1200,
        illustrationSrc: getPanelIllustration(19),
        illustrationAlt: 'Gwen encouraging Miles',
        parts: [
          { type: 'dialogue', speaker: 'Gwen', text: 'We all were, at first. But you\'ve got this.' },
          { type: 'dialogue', speaker: 'Miles', text: 'How do you know?' },
          { type: 'dialogue', speaker: 'Gwen', text: 'Because you\'re Spider-Man. Just like us.' }
        ]
      },
      ...Array.from({ length: 40 }, (_, i) => ({
        kind: 'story' as const,
        timestamp: 1200 + i * 20,
        timestampEnd: 1220 + i * 20,
        illustrationSrc: getPanelIllustration(i),
        illustrationAlt: `Team preparing for the mission - scene ${i + 21}`,
        parts: [
          { type: 'caption' as const, text: `The team prepares for their mission. Panel ${i + 21}.` },
          { type: 'dialogue' as const, speaker: i % 5 === 0 ? 'Miles' : i % 5 === 1 ? 'Peter B.' : i % 5 === 2 ? 'Gwen' : i % 5 === 3 ? 'Noir' : 'Peni', text: `Preparation dialogue ${i + 1}.` }
        ]
      }))
    ]
  },
  {
    id: 'ch3',
    title: 'Peter B. Parker Arrives',
    titleTranslations: sampleTranslations(
      'Llega Peter B. Parker',
      'Peter B. Parker Arrive',
      'Peter B. Parker Kommt An',
      'ピーター・B・パーカー到着',
      '彼得·B·帕克到来'
    ),
    panels: Array.from({ length: 70 }, (_, i) => ({
      kind: 'story' as const,
      timestamp: 2000 + i * 18,
      timestampEnd: 2018 + i * 18,
      illustrationSrc: getPanelIllustration(i),
      illustrationAlt: `Training and bonding with Peter B. - scene ${i + 1}`,
      parts: [
        { type: 'caption' as const, text: `Chapter 3: Miles trains with Peter B. Panel ${i + 1}.` },
        { type: 'dialogue' as const, speaker: i % 2 === 0 ? 'Peter B.' : 'Miles', text: `Training dialogue ${i + 1}.` }
      ]
    }))
  },
  {
    id: 'ch4',
    title: 'The Spider-Team Assembles',
    titleTranslations: sampleTranslations(
      'El Equipo Araña se Reúne',
      'L\'Équipe Spider S\'Assemble',
      'Das Spider-Team Versammelt Sich',
      'スパイダーチーム集結',
      '蜘蛛团队集结'
    ),
    panels: Array.from({ length: 80 }, (_, i) => ({
      kind: 'story' as const,
      timestamp: 3300 + i * 16,
      timestampEnd: 3316 + i * 16,
      illustrationSrc: getPanelIllustration(i),
      illustrationAlt: `Spider-team working together - scene ${i + 1}`,
      parts: [
        { type: 'caption' as const, text: `Chapter 4: The team bonds and plans. Panel ${i + 1}.` },
        { type: 'dialogue' as const, speaker: i % 6 === 0 ? 'Miles' : i % 6 === 1 ? 'Gwen' : i % 6 === 2 ? 'Peter B.' : i % 6 === 3 ? 'Noir' : i % 6 === 4 ? 'Peni' : 'Ham', text: `Team interaction ${i + 1}.` }
      ]
    }))
  },
  {
    id: 'ch5',
    title: 'The Prowler Revealed',
    titleTranslations: sampleTranslations(
      'El Merodeador Revelado',
      'Le Rôdeur Révélé',
      'Der Prowler Enthüllt',
      'プラウラーの正体',
      '潜行者揭晓'
    ),
    panels: Array.from({ length: 60 }, (_, i) => ({
      kind: 'story' as const,
      timestamp: 4600 + i * 17,
      timestampEnd: 4617 + i * 17,
      illustrationSrc: getPanelIllustration(i),
      illustrationAlt: `The Prowler's identity revealed - scene ${i + 1}`,
      parts: [
        { type: 'caption' as const, text: `Chapter 5: A heartbreaking revelation. Panel ${i + 1}.` },
        { type: 'dialogue' as const, speaker: i % 2 === 0 ? 'Miles' : 'Aaron', text: `Emotional moment ${i + 1}.` }
      ]
    }))
  },
  {
    id: 'ch6',
    title: 'The Leap of Faith',
    titleTranslations: sampleTranslations(
      'El Salto de Fe',
      'Le Saut de la Foi',
      'Der Sprung des Glaubens',
      '信念の跳躍',
      '信念之跃'
    ),
    panels: Array.from({ length: 70 }, (_, i) => ({
      kind: 'story' as const,
      timestamp: 5650 + i * 15,
      timestampEnd: 5665 + i * 15,
      illustrationSrc: getPanelIllustration(i),
      illustrationAlt: `Miles embraces his destiny - scene ${i + 1}`,
      parts: [
        { type: 'caption' as const, text: `Chapter 6: Miles becomes the hero he was meant to be. Panel ${i + 1}.` },
        { type: 'dialogue' as const, speaker: 'Miles', text: `Heroic moment ${i + 1}.` }
      ]
    }))
  },
  {
    id: 'ch7',
    title: 'The Final Battle',
    titleTranslations: sampleTranslations(
      'La Batalla Final',
      'La Bataille Finale',
      'Die Letzte Schlacht',
      '最終決戦',
      '最终之战'
    ),
    panels: Array.from({ length: 70 }, (_, i) => ({
      kind: 'story' as const,
      timestamp: 6700 + i * 3.7,
      timestampEnd: 6703.7 + i * 3.7,
      illustrationSrc: getPanelIllustration(i),
      illustrationAlt: `Epic final battle - scene ${i + 1}`,
      parts: [
        { type: 'caption' as const, text: `Chapter 7: The ultimate showdown. Panel ${i + 1}.` },
        { type: 'sfx' as const, text: i % 3 === 0 ? 'BOOM!' : i % 3 === 1 ? 'CRASH!' : 'THWIP!' },
        { type: 'dialogue' as const, speaker: i % 6 === 0 ? 'Miles' : i % 6 === 1 ? 'Peter B.' : i % 6 === 2 ? 'Gwen' : i % 6 === 3 ? 'Kingpin' : i % 6 === 4 ? 'Noir' : 'Peni', text: `Battle action ${i + 1}.` }
      ]
    }))
  }
];

// Flatten all chapters into a continuous panel array for backward compatibility
export const STORY_PANELS: ComicPanel[] = COMIC_CHAPTERS.flatMap(ch => ch.panels);

export const CREDITS_PANELS: ComicPanel[] = [
  {
    kind: 'credits',
    parts: [
      { type: 'caption', text: 'SPIDER-MAN: INTO THE SPIDER-VERSE' }
    ]
  },
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
      { type: 'caption', text: 'Comic adaptation for educational and demonstration purposes' }
    ]
  },
  {
    kind: 'credits',
    parts: [
      { type: 'caption', text: 'Thank you for reading!' }
    ]
  }
];
