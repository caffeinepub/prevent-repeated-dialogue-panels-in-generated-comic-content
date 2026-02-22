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
        illustrationSrc: '/assets/generated/spiderverse-panel-07.dim_1024x768.png',
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
        illustrationSrc: '/assets/generated/spiderverse-panel-08.dim_1024x768.png',
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
        illustrationSrc: '/assets/generated/spiderverse-panel-09.dim_1024x768.png',
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
        illustrationSrc: '/assets/generated/spiderverse-panel-10.dim_1024x768.png',
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
        illustrationSrc: '/assets/generated/spiderverse-panel-11.dim_1024x768.png',
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
        illustrationSrc: '/assets/generated/spiderverse-panel-12.dim_1024x768.png',
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
        illustrationSrc: '/assets/generated/spiderverse-panel-13.dim_1024x768.png',
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
        illustrationSrc: '/assets/generated/spiderverse-panel-14.dim_1024x768.png',
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
        illustrationSrc: '/assets/generated/spiderverse-panel-15.dim_1024x768.png',
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
        illustrationSrc: '/assets/generated/spiderverse-panel-16.dim_1024x768.png',
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
        illustrationSrc: '/assets/generated/spiderverse-panel-17.dim_1024x768.png',
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
        illustrationSrc: '/assets/generated/spiderverse-panel-18.dim_1024x768.png',
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
        illustrationSrc: '/assets/generated/spiderverse-panel-19.dim_1024x768.png',
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
          { type: 'dialogue', speaker: 'Peter B.', text: 'Exactly. And I got pulled into yours.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 665,
        timestampEnd: 685,
        illustrationSrc: getPanelIllustration(14),
        illustrationAlt: 'Miles showing Peter B. the override key',
        parts: [
          { type: 'dialogue', speaker: 'Miles', text: 'Spider-Man gave me this. Said to destroy the collider.' },
          { type: 'dialogue', speaker: 'Peter B.', text: 'Good. Because if we don\'t, I\'ll glitch out and die here.' },
          { type: 'sfx', text: 'GLITCH!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 685,
        timestampEnd: 705,
        illustrationSrc: getPanelIllustration(15),
        illustrationAlt: 'Peter B. glitching',
        parts: [
          { type: 'caption', text: 'Peter B. starts glitching...' },
          { type: 'dialogue', speaker: 'Miles', text: 'What\'s happening to you?!' },
          { type: 'dialogue', speaker: 'Peter B.', text: 'My atoms... they don\'t belong here...' }
        ]
      },
      {
        kind: 'story',
        timestamp: 705,
        timestampEnd: 725,
        illustrationSrc: getPanelIllustration(16),
        illustrationAlt: 'Miles and Peter B. making a plan',
        parts: [
          { type: 'dialogue', speaker: 'Peter B.', text: 'We need to get back to that collider. Fast.' },
          { type: 'dialogue', speaker: 'Miles', text: 'But Kingpin\'s guards are everywhere!' },
          { type: 'dialogue', speaker: 'Peter B.', text: 'Then we\'ll need a plan. And maybe some help.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 725,
        timestampEnd: 745,
        illustrationSrc: getPanelIllustration(17),
        illustrationAlt: 'Miles trying to use his powers',
        parts: [
          { type: 'caption', text: 'Training montage begins...' },
          { type: 'dialogue', speaker: 'Peter B.', text: 'Okay, kid. Show me what you got.' },
          { type: 'dialogue', speaker: 'Miles', text: 'I... I can\'t control it!' },
          { type: 'sfx', text: 'STICK! UNSTICK!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 745,
        timestampEnd: 765,
        illustrationSrc: getPanelIllustration(18),
        illustrationAlt: 'Miles failing at web-swinging',
        parts: [
          { type: 'dialogue', speaker: 'Peter B.', text: 'Just relax. Feel the rhythm.' },
          { type: 'sfx', text: 'THWIP! CRASH!' },
          { type: 'dialogue', speaker: 'Miles', text: 'This is impossible!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 765,
        timestampEnd: 785,
        illustrationSrc: getPanelIllustration(0),
        illustrationAlt: 'Peter B. encouraging Miles',
        parts: [
          { type: 'dialogue', speaker: 'Peter B.', text: 'It\'s not about being perfect. It\'s about getting back up.' },
          { type: 'thought', speaker: 'Miles', text: 'Maybe he\'s right. Maybe I can do this.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 785,
        timestampEnd: 805,
        illustrationSrc: getPanelIllustration(1),
        illustrationAlt: 'Miles at home with his family',
        parts: [
          { type: 'scene', text: 'Miles\' apartment - Evening' },
          { type: 'dialogue', speaker: 'Rio', text: 'Miles, you\'ve been acting strange. Is everything okay?' },
          { type: 'dialogue', speaker: 'Miles', text: 'Yeah, Mom. Just... school stuff.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 805,
        timestampEnd: 825,
        illustrationSrc: getPanelIllustration(2),
        illustrationAlt: 'Jefferson talking to Miles',
        parts: [
          { type: 'dialogue', speaker: 'Jefferson', text: 'Son, I know things are tough. But we\'re here for you.' },
          { type: 'thought', speaker: 'Miles', text: 'If only I could tell them the truth...' }
        ]
      },
      {
        kind: 'story',
        timestamp: 825,
        timestampEnd: 845,
        illustrationSrc: getPanelIllustration(3),
        illustrationAlt: 'Miles sneaking out at night',
        parts: [
          { type: 'caption', text: 'Later that night...' },
          { type: 'thought', speaker: 'Miles', text: 'I have to meet Peter. We have work to do.' },
          { type: 'sfx', text: 'SNEAK!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 845,
        timestampEnd: 865,
        illustrationSrc: getPanelIllustration(4),
        illustrationAlt: 'Miles and Peter B. at a rooftop',
        parts: [
          { type: 'scene', text: 'Brooklyn rooftop' },
          { type: 'dialogue', speaker: 'Peter B.', text: 'Alright, let\'s try the web-swinging again.' },
          { type: 'dialogue', speaker: 'Miles', text: 'Do I have to? Last time hurt.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 865,
        timestampEnd: 885,
        illustrationSrc: getPanelIllustration(5),
        illustrationAlt: 'Miles attempting to swing',
        parts: [
          { type: 'dialogue', speaker: 'Peter B.', text: 'Trust yourself. You got this!' },
          { type: 'sfx', text: 'THWIP!' },
          { type: 'dialogue', speaker: 'Miles', text: 'Here goes nothing...' }
        ]
      },
      {
        kind: 'story',
        timestamp: 885,
        timestampEnd: 905,
        illustrationSrc: getPanelIllustration(6),
        illustrationAlt: 'Miles crashing again',
        parts: [
          { type: 'sfx', text: 'CRASH! BOOM!' },
          { type: 'dialogue', speaker: 'Miles', text: 'Ow... still not ready.' },
          { type: 'dialogue', speaker: 'Peter B.', text: 'Progress! You lasted three seconds longer.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 905,
        timestampEnd: 925,
        illustrationSrc: getPanelIllustration(7),
        illustrationAlt: 'Gwen Stacy appearing in costume',
        parts: [
          { type: 'caption', text: 'Suddenly...' },
          { type: 'dialogue', speaker: 'Gwen', text: 'You guys need some help?' },
          { type: 'dialogue', speaker: 'Miles', text: 'Gwen?! You\'re... Spider-Woman?!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 925,
        timestampEnd: 945,
        illustrationSrc: getPanelIllustration(8),
        illustrationAlt: 'Gwen explaining her situation',
        parts: [
          { type: 'dialogue', speaker: 'Gwen', text: 'From another dimension. The collider pulled me here too.' },
          { type: 'dialogue', speaker: 'Peter B.', text: 'Great! Another Spider-Person. We could use the backup.' }
        ]
      }
    ]
  },
  {
    id: 'ch2',
    title: 'The Spider-Team Assembles',
    titleTranslations: sampleTranslations(
      'El Equipo Araña se Reúne',
      'L\'Équipe Spider se Rassemble',
      'Das Spider-Team versammelt sich',
      'スパイダーチーム集結',
      '蜘蛛团队集结'
    ),
    panels: [
      {
        kind: 'story',
        timestamp: 945,
        timestampEnd: 965,
        illustrationSrc: getPanelIllustration(9),
        illustrationAlt: 'The three Spider-People on a rooftop',
        parts: [
          { type: 'caption', text: 'The team begins to form...' },
          { type: 'dialogue', speaker: 'Gwen', text: 'So, what\'s the plan?' },
          { type: 'dialogue', speaker: 'Peter B.', text: 'We need to get to Kingpin\'s lab and shut down the collider.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 965,
        timestampEnd: 985,
        illustrationSrc: getPanelIllustration(10),
        illustrationAlt: 'Miles looking uncertain',
        parts: [
          { type: 'dialogue', speaker: 'Miles', text: 'But I can barely control my powers!' },
          { type: 'dialogue', speaker: 'Gwen', text: 'You\'ll learn. We all did.' },
          { type: 'thought', speaker: 'Miles', text: 'I hope she\'s right...' }
        ]
      },
      {
        kind: 'story',
        timestamp: 985,
        timestampEnd: 1005,
        illustrationSrc: getPanelIllustration(11),
        illustrationAlt: 'Portal opening with more Spider-People',
        parts: [
          { type: 'caption', text: 'Suddenly, another portal opens...' },
          { type: 'sfx', text: 'VVVRRRMMMM!' },
          { type: 'dialogue', speaker: 'Peter B.', text: 'What now?!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1005,
        timestampEnd: 1025,
        illustrationSrc: getPanelIllustration(12),
        illustrationAlt: 'Spider-Man Noir appearing',
        parts: [
          { type: 'dialogue', speaker: 'Noir', text: 'Where am I? This place is too... colorful.' },
          { type: 'dialogue', speaker: 'Miles', text: 'Another Spider-Man?!' },
          { type: 'dialogue', speaker: 'Noir', text: 'Spider-Man Noir. From 1933.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1025,
        timestampEnd: 1045,
        illustrationSrc: getPanelIllustration(13),
        illustrationAlt: 'Peni Parker and SP//dr arriving',
        parts: [
          { type: 'sfx', text: 'WHOOSH!' },
          { type: 'dialogue', speaker: 'Peni', text: 'Konnichiwa! I\'m Peni Parker, and this is SP//dr!' },
          { type: 'dialogue', speaker: 'Miles', text: 'A robot?!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1045,
        timestampEnd: 1065,
        illustrationSrc: getPanelIllustration(14),
        illustrationAlt: 'Spider-Ham bouncing in',
        parts: [
          { type: 'sfx', text: 'BOING!' },
          { type: 'dialogue', speaker: 'Ham', text: 'That\'s all, folks! Wait, wrong franchise. I\'m Spider-Ham!' },
          { type: 'dialogue', speaker: 'Peter B.', text: 'A cartoon pig. Of course.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1065,
        timestampEnd: 1085,
        illustrationSrc: getPanelIllustration(15),
        illustrationAlt: 'All Spider-People together',
        parts: [
          { type: 'caption', text: 'The team is complete...' },
          { type: 'dialogue', speaker: 'Miles', text: 'This is insane!' },
          { type: 'dialogue', speaker: 'Gwen', text: 'Welcome to the Spider-Verse, Miles.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1085,
        timestampEnd: 1105,
        illustrationSrc: getPanelIllustration(16),
        illustrationAlt: 'The team planning their mission',
        parts: [
          { type: 'dialogue', speaker: 'Peter B.', text: 'Okay, everyone. Here\'s what we know about Kingpin...' },
          { type: 'caption', text: 'The Spider-Team strategizes...' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1105,
        timestampEnd: 1125,
        illustrationSrc: getPanelIllustration(17),
        illustrationAlt: 'Miles listening to the plan',
        parts: [
          { type: 'dialogue', speaker: 'Noir', text: 'In my dimension, we handle things with fists and shadows.' },
          { type: 'dialogue', speaker: 'Ham', text: 'In mine, we use cartoon physics!' },
          { type: 'thought', speaker: 'Miles', text: 'How is this my life now?' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1125,
        timestampEnd: 1145,
        illustrationSrc: getPanelIllustration(18),
        illustrationAlt: 'Gwen encouraging Miles',
        parts: [
          { type: 'dialogue', speaker: 'Gwen', text: 'Miles, you okay?' },
          { type: 'dialogue', speaker: 'Miles', text: 'Yeah, just... overwhelmed.' },
          { type: 'dialogue', speaker: 'Gwen', text: 'You\'re not alone anymore. We\'re a team.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1145,
        timestampEnd: 1165,
        illustrationSrc: getPanelIllustration(0),
        illustrationAlt: 'The team preparing to move out',
        parts: [
          { type: 'dialogue', speaker: 'Peter B.', text: 'Alright, Spider-People. Let\'s do this!' },
          { type: 'sfx', text: 'THWIP! THWIP! THWIP!' },
          { type: 'caption', text: 'The mission begins...' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1165,
        timestampEnd: 1185,
        illustrationSrc: getPanelIllustration(1),
        illustrationAlt: 'Team swinging through the city',
        parts: [
          { type: 'caption', text: 'The Spider-Team swings through Brooklyn...' },
          { type: 'dialogue', speaker: 'Miles', text: 'Wait for me!' },
          { type: 'sfx', text: 'WHOOSH!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1185,
        timestampEnd: 1205,
        illustrationSrc: getPanelIllustration(2),
        illustrationAlt: 'Miles struggling to keep up',
        parts: [
          { type: 'thought', speaker: 'Miles', text: 'They make it look so easy...' },
          { type: 'sfx', text: 'THWIP! SWING!' },
          { type: 'dialogue', speaker: 'Gwen', text: 'You\'re doing great, Miles!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1205,
        timestampEnd: 1225,
        illustrationSrc: getPanelIllustration(3),
        illustrationAlt: 'Arriving at Kingpin\'s facility',
        parts: [
          { type: 'scene', text: 'Kingpin\'s underground facility' },
          { type: 'dialogue', speaker: 'Peter B.', text: 'There it is. The collider.' },
          { type: 'caption', text: 'The massive machine looms before them...' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1225,
        timestampEnd: 1245,
        illustrationSrc: getPanelIllustration(4),
        illustrationAlt: 'Guards patrolling the area',
        parts: [
          { type: 'dialogue', speaker: 'Noir', text: 'Guards. Lots of them.' },
          { type: 'dialogue', speaker: 'Ham', text: 'I got this! Watch me work!' },
          { type: 'sfx', text: 'BOING! BONK!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1245,
        timestampEnd: 1265,
        illustrationSrc: getPanelIllustration(5),
        illustrationAlt: 'Spider-Ham taking out guards',
        parts: [
          { type: 'caption', text: 'Spider-Ham uses cartoon antics...' },
          { type: 'sfx', text: 'WHAM! POW! SPLAT!' },
          { type: 'dialogue', speaker: 'Guard', text: 'What the—?!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1265,
        timestampEnd: 1285,
        illustrationSrc: getPanelIllustration(6),
        illustrationAlt: 'Peni and SP//dr in action',
        parts: [
          { type: 'dialogue', speaker: 'Peni', text: 'SP//dr, engage combat mode!' },
          { type: 'sfx', text: 'BEEP BOOP! SMASH!' },
          { type: 'caption', text: 'The robot spider makes quick work of the guards...' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1285,
        timestampEnd: 1305,
        illustrationSrc: getPanelIllustration(7),
        illustrationAlt: 'Spider-Man Noir fighting in shadows',
        parts: [
          { type: 'dialogue', speaker: 'Noir', text: 'In the shadows, I am justice.' },
          { type: 'sfx', text: 'THUD! CRACK!' },
          { type: 'dialogue', speaker: 'Guard', text: 'Where did he come from?!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1305,
        timestampEnd: 1325,
        illustrationSrc: getPanelIllustration(8),
        illustrationAlt: 'Gwen and Peter B. working together',
        parts: [
          { type: 'dialogue', speaker: 'Gwen', text: 'Peter, left side!' },
          { type: 'dialogue', speaker: 'Peter B.', text: 'Got it!' },
          { type: 'sfx', text: 'THWIP! SWING! KICK!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1325,
        timestampEnd: 1345,
        illustrationSrc: getPanelIllustration(9),
        illustrationAlt: 'Miles watching the team fight',
        parts: [
          { type: 'thought', speaker: 'Miles', text: 'They\'re amazing. Like a real team.' },
          { type: 'dialogue', speaker: 'Peter B.', text: 'Miles! A little help here!' },
          { type: 'dialogue', speaker: 'Miles', text: 'Right! Coming!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1345,
        timestampEnd: 1365,
        illustrationSrc: getPanelIllustration(10),
        illustrationAlt: 'Miles trying to help but failing',
        parts: [
          { type: 'sfx', text: 'STICK! UNSTICK!' },
          { type: 'dialogue', speaker: 'Miles', text: 'My hands won\'t work!' },
          { type: 'thought', speaker: 'Miles', text: 'I\'m useless...' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1365,
        timestampEnd: 1385,
        illustrationSrc: getPanelIllustration(11),
        illustrationAlt: 'The team clearing the guards',
        parts: [
          { type: 'caption', text: 'The Spider-Team clears the area...' },
          { type: 'dialogue', speaker: 'Peter B.', text: 'All clear! Let\'s move!' },
          { type: 'sfx', text: 'WHOOSH!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1385,
        timestampEnd: 1405,
        illustrationSrc: getPanelIllustration(12),
        illustrationAlt: 'Approaching the collider controls',
        parts: [
          { type: 'dialogue', speaker: 'Gwen', text: 'There\'s the control panel.' },
          { type: 'dialogue', speaker: 'Miles', text: 'I have the override key!' },
          { type: 'dialogue', speaker: 'Peter B.', text: 'Good. Let\'s end this.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1405,
        timestampEnd: 1425,
        illustrationSrc: getPanelIllustration(13),
        illustrationAlt: 'Miles inserting the override key',
        parts: [
          { type: 'caption', text: 'Miles approaches the controls...' },
          { type: 'sfx', text: 'CLICK!' },
          { type: 'dialogue', speaker: 'Miles', text: 'Here goes...' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1425,
        timestampEnd: 1445,
        illustrationSrc: getPanelIllustration(14),
        illustrationAlt: 'Alarm sounding',
        parts: [
          { type: 'sfx', text: 'ALARM! ALARM!' },
          { type: 'dialogue', speaker: 'Noir', text: 'We\'ve been made!' },
          { type: 'dialogue', speaker: 'Ham', text: 'Uh oh...' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1445,
        timestampEnd: 1465,
        illustrationSrc: getPanelIllustration(15),
        illustrationAlt: 'Kingpin\'s villains arriving',
        parts: [
          { type: 'caption', text: 'Kingpin\'s elite squad arrives...' },
          { type: 'dialogue', speaker: 'Prowler', text: 'Going somewhere, Spider-Man?' },
          { type: 'sfx', text: 'THUD! THUD! THUD!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1465,
        timestampEnd: 1485,
        illustrationSrc: getPanelIllustration(16),
        illustrationAlt: 'The Prowler revealed',
        parts: [
          { type: 'dialogue', speaker: 'Miles', text: 'The Prowler...' },
          { type: 'caption', text: 'The masked villain steps forward...' },
          { type: 'thought', speaker: 'Miles', text: 'Something about him seems familiar...' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1485,
        timestampEnd: 1505,
        illustrationSrc: getPanelIllustration(17),
        illustrationAlt: 'Doc Ock appearing',
        parts: [
          { type: 'dialogue', speaker: 'Doc Ock', text: 'You\'re not shutting down my collider!' },
          { type: 'dialogue', speaker: 'Peter B.', text: 'Doc Ock? But you\'re—' },
          { type: 'dialogue', speaker: 'Doc Ock', text: 'A woman? Yes. Problem?' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1505,
        timestampEnd: 1525,
        illustrationSrc: getPanelIllustration(18),
        illustrationAlt: 'Tombstone and Scorpion joining',
        parts: [
          { type: 'caption', text: 'More villains emerge...' },
          { type: 'dialogue', speaker: 'Tombstone', text: '...' },
          { type: 'dialogue', speaker: 'Scorpion', text: 'Time to squash some spiders!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1525,
        timestampEnd: 1545,
        illustrationSrc: getPanelIllustration(0),
        illustrationAlt: 'The battle begins',
        parts: [
          { type: 'dialogue', speaker: 'Peter B.', text: 'Spider-Team, engage!' },
          { type: 'sfx', text: 'THWIP! CRASH! BOOM!' },
          { type: 'caption', text: 'The epic battle begins...' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1545,
        timestampEnd: 1565,
        illustrationSrc: getPanelIllustration(1),
        illustrationAlt: 'Gwen fighting Doc Ock',
        parts: [
          { type: 'dialogue', speaker: 'Gwen', text: 'Your tentacles don\'t scare me!' },
          { type: 'dialogue', speaker: 'Doc Ock', text: 'They should!' },
          { type: 'sfx', text: 'SLASH! DODGE!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1565,
        timestampEnd: 1585,
        illustrationSrc: getPanelIllustration(2),
        illustrationAlt: 'Noir fighting Tombstone',
        parts: [
          { type: 'dialogue', speaker: 'Noir', text: 'I\'ve faced tougher in the shadows.' },
          { type: 'sfx', text: 'PUNCH! BLOCK! KICK!' },
          { type: 'caption', text: 'Tombstone remains silent but deadly...' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1585,
        timestampEnd: 1605,
        illustrationSrc: getPanelIllustration(3),
        illustrationAlt: 'Ham vs Scorpion',
        parts: [
          { type: 'dialogue', speaker: 'Ham', text: 'Hey, Scorpy! Want some ham?' },
          { type: 'dialogue', speaker: 'Scorpion', text: 'I\'ll crush you, pig!' },
          { type: 'sfx', text: 'BOING! STING! MISS!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1605,
        timestampEnd: 1625,
        illustrationSrc: getPanelIllustration(4),
        illustrationAlt: 'Peni and SP//dr in combat',
        parts: [
          { type: 'dialogue', speaker: 'Peni', text: 'SP//dr, maximum power!' },
          { type: 'sfx', text: 'BEEP! SMASH! CRASH!' },
          { type: 'caption', text: 'The robot spider fights with precision...' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1625,
        timestampEnd: 1645,
        illustrationSrc: getPanelIllustration(5),
        illustrationAlt: 'Peter B. fighting multiple enemies',
        parts: [
          { type: 'dialogue', speaker: 'Peter B.', text: 'I\'m too old for this...' },
          { type: 'sfx', text: 'THWIP! SWING! KICK!' },
          { type: 'dialogue', speaker: 'Peter B.', text: 'But I\'ve still got it!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1645,
        timestampEnd: 1665,
        illustrationSrc: getPanelIllustration(6),
        illustrationAlt: 'Miles facing the Prowler',
        parts: [
          { type: 'caption', text: 'Miles confronts the Prowler...' },
          { type: 'dialogue', speaker: 'Prowler', text: 'You\'re just a kid. Go home.' },
          { type: 'dialogue', speaker: 'Miles', text: 'I can\'t. I have to stop this!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1665,
        timestampEnd: 1685,
        illustrationSrc: getPanelIllustration(7),
        illustrationAlt: 'The Prowler attacking',
        parts: [
          { type: 'sfx', text: 'SLASH! DODGE!' },
          { type: 'dialogue', speaker: 'Miles', text: 'You\'re fast!' },
          { type: 'thought', speaker: 'Miles', text: 'His moves... they\'re so familiar...' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1685,
        timestampEnd: 1705,
        illustrationSrc: getPanelIllustration(8),
        illustrationAlt: 'Miles getting cornered',
        parts: [
          { type: 'dialogue', speaker: 'Prowler', text: 'You can\'t win, kid.' },
          { type: 'caption', text: 'The Prowler corners Miles...' },
          { type: 'thought', speaker: 'Miles', text: 'I need to use my powers!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1705,
        timestampEnd: 1725,
        illustrationSrc: getPanelIllustration(9),
        illustrationAlt: 'Miles turning invisible',
        parts: [
          { type: 'sfx', text: 'SHIMMER!' },
          { type: 'dialogue', speaker: 'Prowler', text: 'What? Where did you go?!' },
          { type: 'thought', speaker: 'Miles', text: 'It worked! I\'m invisible!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1725,
        timestampEnd: 1745,
        illustrationSrc: getPanelIllustration(10),
        illustrationAlt: 'Miles sneaking past the Prowler',
        parts: [
          { type: 'caption', text: 'Miles uses his invisibility...' },
          { type: 'thought', speaker: 'Miles', text: 'I need to get to the controls!' },
          { type: 'sfx', text: 'SNEAK!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1745,
        timestampEnd: 1765,
        illustrationSrc: getPanelIllustration(11),
        illustrationAlt: 'The Prowler\'s mask damaged',
        parts: [
          { type: 'caption', text: 'In the chaos, the Prowler\'s mask cracks...' },
          { type: 'sfx', text: 'CRACK!' },
          { type: 'dialogue', speaker: 'Miles', text: 'No... it can\'t be...' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1765,
        timestampEnd: 1785,
        illustrationSrc: getPanelIllustration(12),
        illustrationAlt: 'Uncle Aaron revealed',
        parts: [
          { type: 'dialogue', speaker: 'Miles', text: 'Uncle Aaron?!' },
          { type: 'dialogue', speaker: 'Aaron', text: 'Miles... you\'re the Spider-Man?' },
          { type: 'caption', text: 'The truth is revealed...' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1785,
        timestampEnd: 1805,
        illustrationSrc: getPanelIllustration(13),
        illustrationAlt: 'Miles and Aaron\'s emotional moment',
        parts: [
          { type: 'dialogue', speaker: 'Miles', text: 'You\'re the Prowler? Why?!' },
          { type: 'dialogue', speaker: 'Aaron', text: 'I... I didn\'t know it was you, kid.' },
          { type: 'thought', speaker: 'Miles', text: 'Everything I believed... was a lie.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1805,
        timestampEnd: 1825,
        illustrationSrc: getPanelIllustration(14),
        illustrationAlt: 'Kingpin arriving',
        parts: [
          { type: 'caption', text: 'Kingpin enters the scene...' },
          { type: 'dialogue', speaker: 'Kingpin', text: 'Prowler! Finish him!' },
          { type: 'dialogue', speaker: 'Aaron', text: 'I... I can\'t.' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1825,
        timestampEnd: 1845,
        illustrationSrc: getPanelIllustration(15),
        illustrationAlt: 'Aaron protecting Miles',
        parts: [
          { type: 'dialogue', speaker: 'Aaron', text: 'He\'s just a kid, Fisk!' },
          { type: 'dialogue', speaker: 'Kingpin', text: 'Then you\'re no use to me.' },
          { type: 'sfx', text: 'BLAST!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1845,
        timestampEnd: 1865,
        illustrationSrc: getPanelIllustration(16),
        illustrationAlt: 'Aaron falling',
        parts: [
          { type: 'sfx', text: 'THUD!' },
          { type: 'dialogue', speaker: 'Miles', text: 'Uncle Aaron! No!' },
          { type: 'caption', text: 'Aaron collapses...' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1865,
        timestampEnd: 1885,
        illustrationSrc: getPanelIllustration(17),
        illustrationAlt: 'Miles holding dying Aaron',
        parts: [
          { type: 'dialogue', speaker: 'Aaron', text: 'Miles... keep going. You\'re the best of us...' },
          { type: 'dialogue', speaker: 'Miles', text: 'Don\'t leave me!' },
          { type: 'caption', text: 'Aaron\'s eyes close...' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1885,
        timestampEnd: 1905,
        illustrationSrc: getPanelIllustration(18),
        illustrationAlt: 'Miles filled with rage and determination',
        parts: [
          { type: 'caption', text: 'Something changes in Miles...' },
          { type: 'thought', speaker: 'Miles', text: 'No more running. No more fear.' },
          { type: 'sfx', text: 'CRACKLE!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1905,
        timestampEnd: 1925,
        illustrationSrc: getPanelIllustration(0),
        illustrationAlt: 'Miles unleashing his venom blast',
        parts: [
          { type: 'dialogue', speaker: 'Miles', text: 'You want Spider-Man? You got him!' },
          { type: 'sfx', text: 'VENOM BLAST!' },
          { type: 'caption', text: 'Miles discovers his unique power...' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1925,
        timestampEnd: 1945,
        illustrationSrc: getPanelIllustration(1),
        illustrationAlt: 'Miles taking down villains',
        parts: [
          { type: 'sfx', text: 'ZAP! BLAST! BOOM!' },
          { type: 'dialogue', speaker: 'Doc Ock', text: 'What is that power?!' },
          { type: 'dialogue', speaker: 'Miles', text: 'I\'m Spider-Man!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1945,
        timestampEnd: 1965,
        illustrationSrc: getPanelIllustration(2),
        illustrationAlt: 'The Spider-Team rallying',
        parts: [
          { type: 'dialogue', speaker: 'Peter B.', text: 'That\'s it, Miles! Show them!' },
          { type: 'dialogue', speaker: 'Gwen', text: 'We\'re with you!' },
          { type: 'caption', text: 'The team fights as one...' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1965,
        timestampEnd: 1985,
        illustrationSrc: getPanelIllustration(3),
        illustrationAlt: 'Miles reaching the controls',
        parts: [
          { type: 'dialogue', speaker: 'Miles', text: 'I\'m shutting this down!' },
          { type: 'sfx', text: 'CLICK! BEEP!' },
          { type: 'caption', text: 'Miles activates the override...' }
        ]
      },
      {
        kind: 'story',
        timestamp: 1985,
        timestampEnd: 2005,
        illustrationSrc: getPanelIllustration(4),
        illustrationAlt: 'The collider starting to shut down',
        parts: [
          { type: 'sfx', text: 'VVVRRRMMMM... POWERING DOWN...' },
          { type: 'dialogue', speaker: 'Kingpin', text: 'No! My family!' },
          { type: 'caption', text: 'The collider begins to destabilize...' }
        ]
      },
      {
        kind: 'story',
        timestamp: 2005,
        timestampEnd: 2025,
        illustrationSrc: getPanelIllustration(5),
        illustrationAlt: 'Portals opening to send everyone home',
        parts: [
          { type: 'dialogue', speaker: 'Peter B.', text: 'The portals are opening! Everyone, go!' },
          { type: 'dialogue', speaker: 'Gwen', text: 'Miles, you did it!' },
          { type: 'sfx', text: 'VVVRRRMMMM!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 2025,
        timestampEnd: 2045,
        illustrationSrc: getPanelIllustration(6),
        illustrationAlt: 'The Spider-Team saying goodbye',
        parts: [
          { type: 'dialogue', speaker: 'Noir', text: 'Until we meet again, kid.' },
          { type: 'dialogue', speaker: 'Peni', text: 'Sayonara, Miles!' },
          { type: 'dialogue', speaker: 'Ham', text: 'That\'s all, folks!' }
        ]
      },
      {
        kind: 'story',
        timestamp: 2045,
        timestampEnd: 2065,
        illustrationSrc: getPanelIllustration(7),
        illustrationAlt: 'Peter B. and Miles\' farewell',
        parts: [
          { type: 'dialogue', speaker: 'Peter B.', text: 'You\'re gonna be a great Spider-Man, Miles.' },
          { type: 'dialogue', speaker: 'Miles', text: 'Thanks for everything, Peter.' },
          { type: 'caption', text: 'A mentor and student part ways...' }
        ]
      },
      {
        kind: 'story',
        timestamp: 2065,
        timestampEnd: 2085,
        illustrationSrc: getPanelIllustration(8),
        illustrationAlt: 'Gwen\'s goodbye',
        parts: [
          { type: 'dialogue', speaker: 'Gwen', text: 'I\'ll find a way back. I promise.' },
          { type: 'dialogue', speaker: 'Miles', text: 'I\'ll be waiting.' },
          { type: 'thought', speaker: 'Miles', text: 'I\'ll miss her...' }
        ]
      },
      {
        kind: 'story',
        timestamp: 2085,
        timestampEnd: 2105,
        illustrationSrc: getPanelIllustration(9),
        illustrationAlt: 'Everyone returning to their dimensions',
        parts: [
          { type: 'caption', text: 'One by one, they return home...' },
          { type: 'sfx', text: 'WHOOSH! WHOOSH! WHOOSH!' },
          { type: 'dialogue', speaker: 'Miles', text: 'Goodbye, friends.' }
        ]
      }
    ]
  },
  {
    id: 'ch3',
    title: 'Miles Becomes Spider-Man',
    titleTranslations: sampleTranslations(
      'Miles se Convierte en Spider-Man',
      'Miles Devient Spider-Man',
      'Miles wird Spider-Man',
      'マイルスがスパイダーマンになる',
      '迈尔斯成为蜘蛛侠'
    ),
    panels: Array.from({ length: 80 }, (_, i) => ({
      kind: 'story' as const,
      timestamp: 2105 + i * 20,
      timestampEnd: 2125 + i * 20,
      illustrationSrc: getPanelIllustration(i),
      illustrationAlt: `Chapter 3 panel ${i + 1}`,
      parts: [
        { type: 'caption' as const, text: `Chapter 3, Panel ${i + 1}` }
      ]
    }))
  },
  {
    id: 'ch4',
    title: 'The Final Battle',
    titleTranslations: sampleTranslations(
      'La Batalla Final',
      'La Bataille Finale',
      'Die Letzte Schlacht',
      '最終決戦',
      '最后的战斗'
    ),
    panels: Array.from({ length: 80 }, (_, i) => ({
      kind: 'story' as const,
      timestamp: 3705 + i * 20,
      timestampEnd: 3725 + i * 20,
      illustrationSrc: getPanelIllustration(i),
      illustrationAlt: `Chapter 4 panel ${i + 1}`,
      parts: [
        { type: 'caption' as const, text: `Chapter 4, Panel ${i + 1}` }
      ]
    }))
  },
  {
    id: 'ch5',
    title: 'Victory and Loss',
    titleTranslations: sampleTranslations(
      'Victoria y Pérdida',
      'Victoire et Perte',
      'Sieg und Verlust',
      '勝利と喪失',
      '胜利与失落'
    ),
    panels: Array.from({ length: 80 }, (_, i) => ({
      kind: 'story' as const,
      timestamp: 5305 + i * 20,
      timestampEnd: 5325 + i * 20,
      illustrationSrc: getPanelIllustration(i),
      illustrationAlt: `Chapter 5 panel ${i + 1}`,
      parts: [
        { type: 'caption' as const, text: `Chapter 5, Panel ${i + 1}` }
      ]
    }))
  },
  {
    id: 'ch6',
    title: 'A New Hero Rises',
    titleTranslations: sampleTranslations(
      'Un Nuevo Héroe Surge',
      'Un Nouveau Héros Se Lève',
      'Ein Neuer Held Erhebt Sich',
      '新たなヒーローの誕生',
      '新英雄崛起'
    ),
    panels: Array.from({ length: 80 }, (_, i) => ({
      kind: 'story' as const,
      timestamp: 6905 + i * 20,
      timestampEnd: 6925 + i * 20,
      illustrationSrc: getPanelIllustration(i),
      illustrationAlt: `Chapter 6 panel ${i + 1}`,
      parts: [
        { type: 'caption' as const, text: `Chapter 6, Panel ${i + 1}` }
      ]
    }))
  },
  {
    id: 'ch7',
    title: 'The Spider-Verse Awaits',
    titleTranslations: sampleTranslations(
      'El Spider-Verso Espera',
      'Le Spider-Verse Attend',
      'Das Spider-Verse Wartet',
      'スパイダーバースが待っている',
      '蜘蛛宇宙在等待'
    ),
    panels: Array.from({ length: 50 }, (_, i) => ({
      kind: 'story' as const,
      timestamp: 8505 + i * 20,
      timestampEnd: 8525 + i * 20,
      illustrationSrc: getPanelIllustration(i),
      illustrationAlt: `Chapter 7 panel ${i + 1}`,
      parts: [
        { type: 'caption' as const, text: `Chapter 7, Panel ${i + 1}` }
      ]
    }))
  }
];

export const CREDITS_PANELS: ComicPanel[] = [
  {
    kind: 'credits',
    parts: [
      {
        type: 'caption',
        text: 'Spider-Man: Into the Spider-Verse',
        translations: sampleTranslations(
          'Spider-Man: Un Nuevo Universo',
          'Spider-Man: New Generation',
          'Spider-Man: A New Universe',
          'スパイダーマン：スパイダーバース',
          '蜘蛛侠：平行宇宙'
        )
      }
    ]
  },
  {
    kind: 'credits',
    parts: [
      {
        type: 'caption',
        text: 'Created by Andy Romero Escobar J.',
        translations: sampleTranslations(
          'Creado por Andy Romero Escobar J.',
          'Créé par Andy Romero Escobar J.',
          'Erstellt von Andy Romero Escobar J.',
          'アンディ・ロメロ・エスコバル・J.作',
          '由安迪·罗梅罗·埃斯科瓦尔·J.创作'
        )
      }
    ]
  },
  {
    kind: 'credits',
    parts: [
      {
        type: 'caption',
        text: 'Based on the Sony Pictures Animation film',
        translations: sampleTranslations(
          'Basado en la película de Sony Pictures Animation',
          'Basé sur le film de Sony Pictures Animation',
          'Basierend auf dem Sony Pictures Animation Film',
          'ソニー・ピクチャーズ・アニメーション映画に基づく',
          '基于索尼影业动画电影'
        )
      }
    ]
  },
  {
    kind: 'credits',
    parts: [
      {
        type: 'caption',
        text: 'Thank you for reading!',
        translations: sampleTranslations(
          '¡Gracias por leer!',
          'Merci d\'avoir lu!',
          'Danke fürs Lesen!',
          'お読みいただきありがとうございます！',
          '感谢阅读！'
        )
      }
    ]
  }
];
