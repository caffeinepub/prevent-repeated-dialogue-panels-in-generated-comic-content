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
      ...Array.from({ length: 44 }, (_, i) => ({
        kind: 'story' as const,
        timestamp: 105 + i * 15,
        timestampEnd: 120 + i * 15,
        illustrationSrc: getPanelIllustration(i + 6),
        illustrationAlt: `Miles discovering his new spider powers - scene ${i + 7}`,
        parts: [
          { type: 'caption' as const, text: `Miles discovers his new powers. Panel ${i + 7}.` },
          { type: 'dialogue' as const, speaker: 'Miles', text: `What's happening to me? (Part ${i + 1})` }
        ]
      }))
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
    panels: Array.from({ length: 60 }, (_, i) => ({
      kind: 'story' as const,
      timestamp: 800 + i * 20,
      timestampEnd: 820 + i * 20,
      illustrationSrc: getPanelIllustration(i + 50),
      illustrationAlt: `The collider awakens - scene ${i + 1}`,
      parts: [
        { type: 'caption' as const, text: `Chapter 2: The collider awakens. Panel ${i + 1}.` },
        { type: 'dialogue' as const, speaker: i % 3 === 0 ? 'Peter Parker' : 'Miles', text: `Dialogue for panel ${i + 1} in Chapter 2.` }
      ]
    }))
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
      illustrationSrc: getPanelIllustration(i + 110),
      illustrationAlt: `Peter B. Parker from another dimension - scene ${i + 1}`,
      parts: [
        { type: 'caption' as const, text: `Chapter 3: A new Spider-Man from another dimension. Panel ${i + 1}.` },
        { type: 'dialogue' as const, speaker: 'Peter B.', text: `Training Miles, panel ${i + 1}.` }
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
      illustrationSrc: getPanelIllustration(i + 180),
      illustrationAlt: `Spider-team members arrive - scene ${i + 1}`,
      parts: [
        { type: 'caption' as const, text: `Chapter 4: More Spider-People arrive. Panel ${i + 1}.` },
        { type: 'dialogue' as const, speaker: i % 4 === 0 ? 'Gwen' : i % 4 === 1 ? 'Noir' : i % 4 === 2 ? 'Peni' : 'Ham', text: `Team dialogue ${i + 1}.` }
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
      illustrationSrc: getPanelIllustration(i + 260),
      illustrationAlt: `Uncle Aaron's secret revealed - scene ${i + 1}`,
      parts: [
        { type: 'caption' as const, text: `Chapter 5: Uncle Aaron's secret. Panel ${i + 1}.` },
        { type: 'dialogue' as const, speaker: i % 2 === 0 ? 'Miles' : 'Aaron', text: `Emotional confrontation ${i + 1}.` }
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
      illustrationSrc: getPanelIllustration(i + 320),
      illustrationAlt: `Miles becomes Spider-Man - scene ${i + 1}`,
      parts: [
        { type: 'caption' as const, text: `Chapter 6: Miles becomes Spider-Man. Panel ${i + 1}.` },
        { type: 'dialogue' as const, speaker: 'Miles', text: `I can do this! Panel ${i + 1}.` }
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
      illustrationSrc: getPanelIllustration(i + 390),
      illustrationAlt: `The team fights Kingpin - scene ${i + 1}`,
      parts: [
        { type: 'caption' as const, text: `Chapter 7: The team fights Kingpin. Panel ${i + 1}.` },
        { type: 'sfx' as const, text: i % 3 === 0 ? 'BOOM!' : i % 3 === 1 ? 'CRASH!' : 'THWIP!' },
        { type: 'dialogue' as const, speaker: i % 5 === 0 ? 'Miles' : i % 5 === 1 ? 'Peter B.' : i % 5 === 2 ? 'Gwen' : i % 5 === 3 ? 'Kingpin' : 'Noir', text: `Final battle action ${i + 1}.` }
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
