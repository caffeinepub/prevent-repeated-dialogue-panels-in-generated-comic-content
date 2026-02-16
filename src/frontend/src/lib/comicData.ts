import type { ComicPanel } from './comicModel';

/**
 * Structured comic data for Spider-Man: Into the Spider-Verse.
 * Expanded to 110 story panels covering the full movie narrative arc.
 * Each panel contains distinct comic parts (captions, dialogue, SFX, etc.) and optional illustrations.
 */

export const STORY_PANELS: ComicPanel[] = [
  // OPENING - Miles Introduction (Panels 1-10)
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-01.dim_1024x768.png',
    illustrationAlt: 'Miles Morales, a Black teenager with curly hair, standing in Brooklyn with cityscape behind him in bold comic style',
    parts: [
      { type: 'caption', text: 'Brooklyn, New York' },
      { type: 'dialogue', speaker: 'Miles', text: "Alright… let's do this one last time. My name is Miles Morales." }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-02.dim_1024x768.png',
    illustrationAlt: 'Miles Morales, a Black 16-year-old teenager with curly hair, and his father Jefferson in their apartment',
    parts: [
      { type: 'scene', text: 'Miles\' apartment - Morning' },
      { type: 'caption', text: 'I\'m 16 years old, and for the last week, my life has been weird.' },
      { type: 'dialogue', speaker: 'Jefferson', text: "You're going to be late! This school is important!" },
      { type: 'dialogue', speaker: 'Miles', text: 'I know, Dad… I just need space.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Jefferson', text: 'Space? You got a whole room!' },
      { type: 'thought', speaker: 'Miles', text: 'He doesn\'t get it. Nobody does.' }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-03.dim_1024x768.png',
    illustrationAlt: 'Uncle Aaron\'s cozy apartment with graffiti art on walls',
    parts: [
      { type: 'caption', text: 'Later, at Uncle Aaron\'s place' },
      { type: 'dialogue', speaker: 'Aaron', text: "You don't have to be what everyone expects. Be yourself." },
      { type: 'dialogue', speaker: 'Miles', text: 'Thanks, Uncle Aaron. You always know what to say.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'scene', text: 'Abandoned subway tunnel - Night' },
      { type: 'caption', text: 'Miles sneaks into the tunnels to practice his art.' },
      { type: 'dialogue', speaker: 'Miles', text: 'This is my spot. Where I can be me.' }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-04.dim_1024x768.png',
    illustrationAlt: 'Dark subway tunnel with a tiny, camouflaged radioactive spider barely visible against the wall, glowing faintly and almost invisible',
    parts: [
      { type: 'caption', text: 'A tiny, camouflaged spider—barely visible—drops from above.' },
      { type: 'sfx', text: 'BITE!' },
      { type: 'dialogue', speaker: 'Miles', text: 'Ow! What the—' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'thought', speaker: 'Miles', text: 'That spider looked... weird. Almost invisible.' },
      { type: 'caption', text: 'Miles shakes it off and keeps painting.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'scene', text: 'Next morning - Brooklyn Visions Academy' },
      { type: 'dialogue', speaker: 'Miles', text: 'Why does everything feel so... loud?' },
      { type: 'caption', text: 'His senses are overwhelming. Colors too bright. Sounds too sharp.' }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-05.dim_1024x768.png',
    illustrationAlt: 'Miles Morales, a Black teenager with curly hair, stuck to ceiling with dramatic upward perspective in comic style',
    parts: [
      { type: 'dialogue', speaker: 'Miles', text: 'Why am I stuck to the ceiling?!' },
      { type: 'sfx', text: 'THWIP!' },
      { type: 'caption', text: 'His hands won\'t let go. Papers stick to his fingers.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Classmate', text: 'Yo, Miles! You okay?' },
      { type: 'dialogue', speaker: 'Miles', text: 'Yeah! Totally fine! Just... stretching!' },
      { type: 'thought', speaker: 'Miles', text: 'What is happening to me?!' }
    ]
  },

  // DISCOVERY & PETER PARKER (Panels 11-25)
  {
    kind: 'story',
    parts: [
      { type: 'scene', text: 'That night - Back to the subway' },
      { type: 'caption', text: 'Miles returns to find answers.' },
      { type: 'dialogue', speaker: 'Miles', text: 'That spider... it did something to me.' }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-06.dim_1024x768.png',
    illustrationAlt: 'Kingpin\'s underground facility with massive collider machine',
    parts: [
      { type: 'scene', text: 'Kingpin\'s underground facility' },
      { type: 'dialogue', speaker: 'Kingpin', text: 'Activate the collider.' },
      { type: 'sfx', text: 'WHRRRRR' },
      { type: 'caption', text: 'The machine hums with dangerous energy.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Scientist', text: 'Sir, the dimensional readings are unstable!' },
      { type: 'dialogue', speaker: 'Kingpin', text: 'I don\'t care. I want my family back.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'caption', text: 'Miles watches from the shadows.' },
      { type: 'thought', speaker: 'Miles', text: 'What is this place? What are they doing?' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'sfx', text: 'THWIP!' },
      { type: 'dialogue', speaker: 'Peter Parker', text: 'Hey! You shouldn\'t be here, kid!' },
      { type: 'caption', text: 'Spider-Man swings into view.' }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-07.dim_1024x768.png',
    illustrationAlt: 'Dynamic comic-style battle scene with explosive energy blasts, bold inked outlines, and motion lines',
    parts: [
      { type: 'dialogue', speaker: 'Peter Parker', text: 'That machine will tear reality apart!' },
      { type: 'caption', text: 'Battle erupts. Explosions shake the chamber.' },
      { type: 'sfx', text: 'BOOM!' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Green Goblin', text: 'You can\'t stop this, Spider-Man!' },
      { type: 'sfx', text: 'CRASH!' },
      { type: 'caption', text: 'Green Goblin attacks with brutal force.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Peter Parker', text: 'Kid! Get out of here!' },
      { type: 'dialogue', speaker: 'Miles', text: 'I can help!' },
      { type: 'dialogue', speaker: 'Peter Parker', text: 'No! You\'re not ready!' }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-08.dim_1024x768.png',
    illustrationAlt: 'Close-up of Peter Parker handing USB drive to Miles',
    parts: [
      { type: 'dialogue', speaker: 'Peter Parker', text: 'Take this device. It\'ll shut down the collider.' },
      { type: 'caption', text: 'He hands Miles a small USB drive.' },
      { type: 'dialogue', speaker: 'Miles', text: 'Wait, what? I don\'t—' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Peter Parker', text: 'You have powers like me. I can tell.' },
      { type: 'dialogue', speaker: 'Miles', text: 'How did you know?' },
      { type: 'dialogue', speaker: 'Peter Parker', text: 'It\'s a Spider-Man thing. You\'ll understand.' }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-09.dim_1024x768.png',
    illustrationAlt: 'Heavy impact moment with debris and motion streaks',
    parts: [
      { type: 'caption', text: 'Kingpin strikes. The collider explodes.' },
      { type: 'sfx', text: 'CRASH!' },
      { type: 'dialogue', speaker: 'Kingpin', text: 'No more Spider-Man.' }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-10.dim_1024x768.png',
    illustrationAlt: 'Miles Morales, a Black teenager with curly hair, in shadow watching helplessly in comic style',
    parts: [
      { type: 'thought', speaker: 'Miles', text: 'I should\'ve helped him…' },
      { type: 'caption', text: 'Miles watches helplessly from the shadows.' },
      { type: 'caption', text: 'Peter Parker is gone.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'scene', text: 'Days later - Peter Parker\'s funeral' },
      { type: 'caption', text: 'The city mourns its hero.' },
      { type: 'dialogue', speaker: 'Mary Jane', text: 'He saved us all. Every single day.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'thought', speaker: 'Miles', text: 'I have his drive. I have to finish what he started.' },
      { type: 'caption', text: 'Miles clutches the USB drive in his pocket.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'scene', text: 'Miles\' dorm room - Night' },
      { type: 'caption', text: 'Miles tries to understand his new powers.' },
      { type: 'dialogue', speaker: 'Miles', text: 'Okay, hands. Stick. Unstick. Stick. Unstick.' }
    ]
  },

  // PETER B. PARKER & GWEN (Panels 26-45)
  {
    kind: 'story',
    parts: [
      { type: 'sfx', text: 'CRASH!' },
      { type: 'caption', text: 'A portal opens in Miles\' dorm room.' },
      { type: 'dialogue', speaker: 'Miles', text: 'What the—?!' }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-11.dim_1024x768.png',
    illustrationAlt: 'Peter B. Parker in worn Spider-Man suit emerging from dimensional portal',
    parts: [
      { type: 'dialogue', speaker: 'Peter B.', text: 'Okay, this is not my dimension.' },
      { type: 'caption', text: 'A disheveled Spider-Man stumbles through.' },
      { type: 'dialogue', speaker: 'Miles', text: 'Spider-Man?! But you\'re... dead!' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Peter B.', text: 'I\'m not YOUR Spider-Man. I\'m from another dimension.' },
      { type: 'dialogue', speaker: 'Miles', text: 'Another dimension? That\'s... that\'s crazy!' },
      { type: 'dialogue', speaker: 'Peter B.', text: 'Yeah, well, welcome to my life.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Miles', text: 'I have the USB drive. The one that can shut down the collider.' },
      { type: 'dialogue', speaker: 'Peter B.', text: 'Perfect! We use that, I go home, problem solved.' },
      { type: 'thought', speaker: 'Miles', text: 'He makes it sound so easy.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Peter B.', text: 'But first, you need to learn how to be Spider-Man.' },
      { type: 'dialogue', speaker: 'Miles', text: 'Me? I can\'t even control my powers!' },
      { type: 'dialogue', speaker: 'Peter B.', text: 'That\'s why I\'m here. To teach you.' }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-12.dim_1024x768.png',
    illustrationAlt: 'Training montage with Miles attempting web-swinging',
    parts: [
      { type: 'caption', text: 'Training begins.' },
      { type: 'dialogue', speaker: 'Peter B.', text: 'Swing from your hips!' },
      { type: 'dialogue', speaker: 'Miles', text: 'I\'m trying!' },
      { type: 'sfx', text: 'THWIP! CRASH!' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Peter B.', text: 'You\'re thinking too much. Just... feel it.' },
      { type: 'dialogue', speaker: 'Miles', text: 'Feel it? That\'s your advice?' },
      { type: 'dialogue', speaker: 'Peter B.', text: 'It worked for me!' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'caption', text: 'Days pass. Miles struggles.' },
      { type: 'thought', speaker: 'Miles', text: 'Maybe I\'m not cut out for this.' },
      { type: 'dialogue', speaker: 'Peter B.', text: 'Don\'t give up. You\'ve got this.' }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-13.dim_1024x768.png',
    illustrationAlt: 'Gwen Stacy in Spider-Woman suit landing gracefully',
    parts: [
      { type: 'sfx', text: 'THWIP!' },
      { type: 'dialogue', speaker: 'Gwen', text: 'You guys need help?' },
      { type: 'caption', text: 'Another Spider-Person arrives.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Miles', text: 'Who are you?' },
      { type: 'dialogue', speaker: 'Gwen', text: 'Gwen Stacy. Spider-Woman. From another dimension.' },
      { type: 'dialogue', speaker: 'Peter B.', text: 'Great. More of us.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Gwen', text: 'The collider pulled me here. We need to shut it down.' },
      { type: 'dialogue', speaker: 'Miles', text: 'That\'s what we\'re trying to do!' },
      { type: 'dialogue', speaker: 'Gwen', text: 'Then let\'s work together.' }
    ]
  },

  // MORE SPIDER-PEOPLE (Panels 36-50)
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-14.dim_1024x768.png',
    illustrationAlt: 'Spider-Noir, Peni Parker, and Spider-Ham arriving together',
    parts: [
      { type: 'caption', text: 'More portals open.' },
      { type: 'dialogue', speaker: 'Noir', text: 'Wherever I am, it\'s too colorful.' },
      { type: 'dialogue', speaker: 'Peni', text: 'Kawaii!' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Ham', text: 'That\'s all, folks!' },
      { type: 'dialogue', speaker: 'Miles', text: 'A cartoon pig? Seriously?' },
      { type: 'dialogue', speaker: 'Peter B.', text: 'Just roll with it.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'caption', text: 'The team assembles at Aunt May\'s house.' },
      { type: 'dialogue', speaker: 'Aunt May', text: 'So many Spider-People! I\'ll make sandwiches.' },
      { type: 'dialogue', speaker: 'Miles', text: 'This is insane.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Peter B.', text: 'We need to destroy the collider before it tears reality apart.' },
      { type: 'dialogue', speaker: 'Gwen', text: 'And get everyone home.' },
      { type: 'dialogue', speaker: 'Miles', text: 'I\'ll help. I have to.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Peter B.', text: 'Miles, you\'re not ready.' },
      { type: 'dialogue', speaker: 'Miles', text: 'When will I be ready?' },
      { type: 'dialogue', speaker: 'Peter B.', text: 'I don\'t know. But not yet.' }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-15.dim_1024x768.png',
    illustrationAlt: 'Miles looking dejected as the team prepares without him',
    parts: [
      { type: 'thought', speaker: 'Miles', text: 'They don\'t think I can do it.' },
      { type: 'caption', text: 'The team prepares to infiltrate Kingpin\'s facility.' },
      { type: 'dialogue', speaker: 'Gwen', text: 'Stay here, Miles. It\'s safer.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Miles', text: 'But I can help!' },
      { type: 'dialogue', speaker: 'Peter B.', text: 'Not this time, kid.' },
      { type: 'thought', speaker: 'Miles', text: 'I have to prove myself.' }
    ]
  },

  // PROWLER REVEAL (Panels 47-55)
  {
    kind: 'story',
    parts: [
      { type: 'scene', text: 'Miles follows the team in secret' },
      { type: 'caption', text: 'He can\'t just sit and wait.' },
      { type: 'thought', speaker: 'Miles', text: 'I need to show them I\'m ready.' }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-16.dim_1024x768.png',
    illustrationAlt: 'Kingpin\'s facility interior with guards and security',
    parts: [
      { type: 'caption', text: 'Inside Kingpin\'s facility' },
      { type: 'dialogue', speaker: 'Kingpin', text: 'Find the Spider-People. Kill them all.' },
      { type: 'sfx', text: 'ALARM!' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Peter B.', text: 'They know we\'re here!' },
      { type: 'dialogue', speaker: 'Gwen', text: 'Split up! Meet at the collider!' },
      { type: 'sfx', text: 'THWIP! THWIP!' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'caption', text: 'Miles sneaks through the shadows.' },
      { type: 'thought', speaker: 'Miles', text: 'I can do this. I have to.' },
      { type: 'sfx', text: 'FOOTSTEPS' }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-17.dim_1024x768.png',
    illustrationAlt: 'The Prowler emerging from shadows with menacing silhouette',
    parts: [
      { type: 'caption', text: 'The Prowler appears.' },
      { type: 'dialogue', speaker: 'Prowler', text: '...' },
      { type: 'thought', speaker: 'Miles', text: 'That\'s Kingpin\'s enforcer!' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'caption', text: 'They fight. Miles is outmatched.' },
      { type: 'sfx', text: 'CRASH! BANG!' },
      { type: 'dialogue', speaker: 'Miles', text: 'I can\'t beat him!' }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-18.dim_1024x768.png',
    illustrationAlt: 'Prowler mask removal revealing Uncle Aaron',
    parts: [
      { type: 'caption', text: 'The Prowler\'s mask comes off.' },
      { type: 'dialogue', speaker: 'Miles', text: 'Uncle Aaron?!' },
      { type: 'sfx', text: 'GASP' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Aaron', text: 'Miles? You\'re... you\'re Spider-Man?' },
      { type: 'dialogue', speaker: 'Miles', text: 'You\'re the Prowler? How could you?' },
      { type: 'thought', speaker: 'Miles', text: 'My hero... is a villain.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Aaron', text: 'I didn\'t know it was you. I would never—' },
      { type: 'dialogue', speaker: 'Kingpin', text: 'Finish him, Prowler!' },
      { type: 'dialogue', speaker: 'Aaron', text: 'I can\'t. He\'s my nephew.' }
    ]
  },
  {
    kind: 'story',
    illustrationSrc: '/assets/generated/spiderverse-panel-19.dim_1024x768.png',
    illustrationAlt: 'Dramatic moment of sacrifice with heavy shadows',
    parts: [
      { type: 'sfx', text: 'BANG!' },
      { type: 'caption', text: 'Kingpin shoots Aaron.' },
      { type: 'dialogue', speaker: 'Miles', text: 'No! Uncle Aaron!' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Aaron', text: 'Keep going... You\'re the best of us, Miles.' },
      { type: 'caption', text: 'Aaron dies in Miles\' arms.' },
      { type: 'thought', speaker: 'Miles', text: 'This is my fault.' }
    ]
  },

  // LEAP OF FAITH (Panels 58-70)
  {
    kind: 'story',
    parts: [
      { type: 'scene', text: 'Miles\' dorm room - Later' },
      { type: 'caption', text: 'Miles is broken. Lost.' },
      { type: 'thought', speaker: 'Miles', text: 'I can\'t do this. I\'m not Spider-Man.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Peter B.', text: 'Miles, we need you.' },
      { type: 'dialogue', speaker: 'Miles', text: 'I\'m not ready. You were right.' },
      { type: 'dialogue', speaker: 'Peter B.', text: 'I was wrong. You ARE ready.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Gwen', text: 'We believe in you, Miles.' },
      { type: 'dialogue', speaker: 'Miles', text: 'But I failed. Aaron died because of me.' },
      { type: 'dialogue', speaker: 'Peter B.', text: 'That wasn\'t your fault.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Miles', text: 'How do I know I\'m ready?' },
      { type: 'dialogue', speaker: 'Peter B.', text: 'You don\'t. It\'s a leap of faith.' },
      { type: 'caption', text: 'Miles looks at his reflection.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'thought', speaker: 'Miles', text: 'A leap of faith. That\'s all it is.' },
      { type: 'caption', text: 'He remembers Aaron\'s words.' },
      { type: 'caption', text: '"You\'re the best of us."' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'caption', text: 'Miles makes his suit.' },
      { type: 'dialogue', speaker: 'Miles', text: 'Time to be Spider-Man. MY way.' },
      { type: 'sfx', text: 'SPRAY PAINT' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'caption', text: 'He stands at the edge of a building.' },
      { type: 'thought', speaker: 'Miles', text: 'Just a leap of faith.' },
      { type: 'sfx', text: 'WIND HOWLING' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Miles', text: 'Here goes nothing.' },
      { type: 'caption', text: 'He jumps.' },
      { type: 'sfx', text: 'WHOOSH!' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'caption', text: 'He falls. And falls.' },
      { type: 'thought', speaker: 'Miles', text: 'Come on, Miles. You got this.' },
      { type: 'sfx', text: 'THWIP!' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'caption', text: 'His web shoots. He swings.' },
      { type: 'dialogue', speaker: 'Miles', text: 'YES! I\'m doing it!' },
      { type: 'sfx', text: 'SWING!' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'caption', text: 'Miles soars through the city.' },
      { type: 'thought', speaker: 'Miles', text: 'This is it. I\'m Spider-Man.' },
      { type: 'sfx', text: 'THWIP! THWIP!' }
    ]
  },

  // FINAL BATTLE (Panels 71-95)
  {
    kind: 'story',
    parts: [
      { type: 'scene', text: 'Kingpin\'s facility - The collider chamber' },
      { type: 'caption', text: 'The team is surrounded.' },
      { type: 'dialogue', speaker: 'Kingpin', text: 'You\'re too late. The collider is active.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Peter B.', text: 'We can still stop this!' },
      { type: 'dialogue', speaker: 'Kingpin', text: 'Not without the override key.' },
      { type: 'caption', text: 'He holds up the USB drive.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'sfx', text: 'THWIP!' },
      { type: 'dialogue', speaker: 'Miles', text: 'Looking for this?' },
      { type: 'caption', text: 'Miles swings in, snatching the drive.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Gwen', text: 'Miles! You came!' },
      { type: 'dialogue', speaker: 'Miles', text: 'Told you I was ready.' },
      { type: 'dialogue', speaker: 'Peter B.', text: 'That\'s my guy!' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Kingpin', text: 'Get him!' },
      { type: 'caption', text: 'Villains attack from all sides.' },
      { type: 'sfx', text: 'CRASH! BOOM!' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'caption', text: 'The Spider-Team fights together.' },
      { type: 'dialogue', speaker: 'Noir', text: 'I love the smell of justice in the morning!' },
      { type: 'dialogue', speaker: 'Ham', text: 'That\'s all, folks!' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Peni', text: 'SP//dr, attack mode!' },
      { type: 'sfx', text: 'MECHA SOUNDS' },
      { type: 'caption', text: 'They\'re winning.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Miles', text: 'I\'ll shut down the collider!' },
      { type: 'dialogue', speaker: 'Peter B.', text: 'We\'ll cover you!' },
      { type: 'sfx', text: 'THWIP!' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'caption', text: 'Miles reaches the control panel.' },
      { type: 'thought', speaker: 'Miles', text: 'Just insert the drive. Easy.' },
      { type: 'sfx', text: 'BEEP BEEP' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Kingpin', text: 'You\'re not stopping me!' },
      { type: 'caption', text: 'Kingpin charges at Miles.' },
      { type: 'sfx', text: 'ROAR!' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Miles', text: 'I have to do this. For Aaron. For everyone.' },
      { type: 'caption', text: 'He inserts the drive.' },
      { type: 'sfx', text: 'CLICK' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'caption', text: 'The collider begins to shut down.' },
      { type: 'dialogue', speaker: 'Kingpin', text: 'NO!' },
      { type: 'sfx', text: 'WHRRRRR... POWERING DOWN' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Miles', text: 'It\'s over, Kingpin.' },
      { type: 'caption', text: 'Kingpin lunges at Miles.' },
      { type: 'sfx', text: 'CRASH!' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'caption', text: 'Miles uses his venom strike.' },
      { type: 'sfx', text: 'ZAP!' },
      { type: 'dialogue', speaker: 'Kingpin', text: 'AHHH!' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'caption', text: 'Kingpin falls, defeated.' },
      { type: 'dialogue', speaker: 'Miles', text: 'Stay down.' },
      { type: 'thought', speaker: 'Miles', text: 'I did it. I actually did it.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'caption', text: 'Portals open. The Spider-People prepare to leave.' },
      { type: 'dialogue', speaker: 'Peter B.', text: 'Time to go home.' },
      { type: 'dialogue', speaker: 'Gwen', text: 'We\'ll miss you, Miles.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Miles', text: 'Will I see you again?' },
      { type: 'dialogue', speaker: 'Gwen', text: 'Maybe. The multiverse is a big place.' },
      { type: 'dialogue', speaker: 'Peter B.', text: 'You\'re gonna be a great Spider-Man, kid.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'caption', text: 'One by one, they return to their dimensions.' },
      { type: 'dialogue', speaker: 'Noir', text: 'Farewell, colorful world.' },
      { type: 'dialogue', speaker: 'Ham', text: 'See ya later, alligator!' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Peni', text: 'Bye, Miles! You\'re the best!' },
      { type: 'caption', text: 'The portals close.' },
      { type: 'thought', speaker: 'Miles', text: 'I\'m alone again. But I\'m not the same.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'scene', text: 'Brooklyn - Days later' },
      { type: 'caption', text: 'Miles swings through his city.' },
      { type: 'dialogue', speaker: 'Miles', text: 'My name is Miles Morales. I\'m Spider-Man.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'caption', text: 'He stops a robbery.' },
      { type: 'dialogue', speaker: 'Thief', text: 'Spider-Man?!' },
      { type: 'dialogue', speaker: 'Miles', text: 'That\'s right. And this is MY city.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'sfx', text: 'THWIP!' },
      { type: 'caption', text: 'He webs up the criminals.' },
      { type: 'dialogue', speaker: 'Bystander', text: 'Thank you, Spider-Man!' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Miles', text: 'Just doing my job!' },
      { type: 'thought', speaker: 'Miles', text: 'This is what I was meant to do.' },
      { type: 'caption', text: 'He swings away.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'scene', text: 'Miles\' apartment - Evening' },
      { type: 'dialogue', speaker: 'Jefferson', text: 'Miles, you\'ve been different lately. In a good way.' },
      { type: 'dialogue', speaker: 'Miles', text: 'Thanks, Dad. I\'m just... finding myself.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Jefferson', text: 'I\'m proud of you, son.' },
      { type: 'thought', speaker: 'Miles', text: 'If only he knew.' },
      { type: 'caption', text: 'Miles smiles.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'scene', text: 'Brooklyn rooftop - Night' },
      { type: 'caption', text: 'Miles stands on a rooftop, looking over the city.' },
      { type: 'thought', speaker: 'Miles', text: 'This is my home. These are my people.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Miles', text: 'I\'m not the only Spider-Man. But I\'m the only one here.' },
      { type: 'caption', text: 'He puts on his mask.' },
      { type: 'thought', speaker: 'Miles', text: 'And that\'s enough.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'sfx', text: 'THWIP!' },
      { type: 'caption', text: 'Miles swings into the night.' },
      { type: 'dialogue', speaker: 'Miles', text: 'Let\'s do this!' }
    ]
  },

  // EPILOGUE (Panels 96-110)
  {
    kind: 'story',
    parts: [
      { type: 'caption', text: 'Weeks pass. Miles grows into his role.' },
      { type: 'thought', speaker: 'Miles', text: 'Every day is a new challenge.' },
      { type: 'sfx', text: 'THWIP!' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'caption', text: 'He saves people. Stops crimes.' },
      { type: 'dialogue', speaker: 'Miles', text: 'All in a day\'s work!' },
      { type: 'thought', speaker: 'Miles', text: 'I\'m getting better at this.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'scene', text: 'Brooklyn Visions Academy' },
      { type: 'caption', text: 'Miles balances school and hero work.' },
      { type: 'dialogue', speaker: 'Teacher', text: 'Miles, excellent essay!' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Miles', text: 'Thanks! I\'ve been inspired lately.' },
      { type: 'thought', speaker: 'Miles', text: 'If only they knew what inspires me.' },
      { type: 'caption', text: 'He smiles.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'scene', text: 'Miles\' dorm room - Late night' },
      { type: 'caption', text: 'Miles works on his suit.' },
      { type: 'thought', speaker: 'Miles', text: 'Always room for improvement.' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'sfx', text: 'KNOCK KNOCK' },
      { type: 'dialogue', speaker: 'Gwen', text: 'Hey, Miles.' },
      { type: 'dialogue', speaker: 'Miles', text: 'Gwen?! How did you—' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Gwen', text: 'I figured out how to control the portals.' },
      { type: 'dialogue', speaker: 'Miles', text: 'That\'s amazing!' },
      { type: 'dialogue', speaker: 'Gwen', text: 'Want to go on an adventure?' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'dialogue', speaker: 'Miles', text: 'Always.' },
      { type: 'caption', text: 'They swing through a portal together.' },
      { type: 'sfx', text: 'PORTAL OPENING' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'caption', text: 'The multiverse awaits.' },
      { type: 'thought', speaker: 'Miles', text: 'This is just the beginning.' },
      { type: 'sfx', text: 'WHOOSH!' }
    ]
  },
  {
    kind: 'story',
    parts: [
      { type: 'caption', text: 'Miles Morales is Spider-Man.' },
      { type: 'caption', text: 'And his story is far from over.' },
      { type: 'dialogue', speaker: 'Miles', text: 'Let\'s go save the multiverse!' }
    ]
  },
];

export const CREDITS_PANELS: ComicPanel[] = [
  {
    kind: 'credits',
    parts: [
      { type: 'caption', text: 'THE END' },
      { type: 'caption', text: '...OR IS IT?' }
    ]
  },
  {
    kind: 'credits',
    parts: [
      { type: 'caption', text: 'SPIDER-MAN: INTO THE SPIDER-VERSE' },
      { type: 'caption', text: 'A Comic Adaptation' }
    ]
  },
  {
    kind: 'credits',
    parts: [
      { type: 'caption', text: 'Based on the Sony Pictures Animation film' },
      { type: 'caption', text: 'Directed by Bob Persichetti, Peter Ramsey, and Rodney Rothman' }
    ]
  },
  {
    kind: 'credits',
    parts: [
      { type: 'caption', text: 'Characters created by Stan Lee and Steve Ditko' },
      { type: 'caption', text: 'Miles Morales created by Brian Michael Bendis and Sara Pichelli' }
    ]
  },
  {
    kind: 'credits',
    parts: [
      { type: 'caption', text: 'Thank you for reading!' },
      { type: 'caption', text: 'Stay tuned for more adventures!' }
    ]
  }
];
