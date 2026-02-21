import type { ComicPanel, Chapter } from './comicModel';
import { deduplicatePanelParts } from './deduplication';
import { getPanelTimestamp } from './timeline';
import { t } from './i18n';

export async function exportComicToPDF(
  storyPanels: ComicPanel[],
  creditsPanels: ComicPanel[],
  language: string,
  authorName: string,
  timelineMode: boolean,
  chapters?: Chapter[]
): Promise<void> {
  const allPanels = [...storyPanels, ...creditsPanels];
  const deduplicatedPanels = deduplicatePanelParts(allPanels);
  
  const storyCount = storyPanels.length;
  const deduplicatedStory = deduplicatedPanels.slice(0, storyCount);
  const deduplicatedCredits = deduplicatedPanels.slice(storyCount);

  const htmlContent = await generatePrintableHTML(
    deduplicatedStory,
    deduplicatedCredits,
    language,
    authorName,
    timelineMode,
    chapters
  );
  
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    throw new Error('Failed to open print window. Please allow popups for this site.');
  }
  
  printWindow.document.write(htmlContent);
  printWindow.document.close();
  
  await new Promise(resolve => {
    printWindow.addEventListener('load', resolve);
    setTimeout(resolve, 1000);
  });
  
  printWindow.print();
}

async function generatePrintableHTML(
  storyPanels: ComicPanel[],
  creditsPanels: ComicPanel[],
  language: string,
  authorName: string,
  timelineMode: boolean,
  chapters?: Chapter[]
): Promise<string> {
  const title = t('pdf.title', language);
  const subtitle = t('pdf.subtitle', language);
  const authorLabel = t('pdf.author', language);
  const generatedText = t('pdf.generated', language);
  const storyLabel = t('pdf.story', language);
  const creditsLabel = t('pdf.credits', language);
  const panelLabel = t('pdf.panel', language);
  const chapterLabel = t('pdf.chapter', language);
  const authorNotProvided = t('author.notProvided', language);
  
  // Use provided author name or default to "Andy Romero Escobar J."
  const pdfAuthor = authorName || 'Andy Romero Escobar J.';

  return `
<!DOCTYPE html>
<html lang="${language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="author" content="${escapeHtml(pdfAuthor)}">
  <meta name="creator" content="${escapeHtml(pdfAuthor)}">
  <meta name="description" content="${escapeHtml(subtitle)}">
  <title>${escapeHtml(title)}</title>
  <style>
    @page {
      size: letter;
      margin: 0.5in;
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Arial', 'Helvetica', sans-serif;
      line-height: 1.6;
      color: #000;
      background: #fff;
    }
    
    .title-page {
      page-break-after: always;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      text-align: center;
    }
    
    .title-page h1 {
      font-size: 48px;
      font-weight: bold;
      margin-bottom: 20px;
      text-transform: uppercase;
    }
    
    .title-page p {
      font-size: 24px;
      margin-bottom: 10px;
    }
    
    .title-page .author {
      font-size: 18px;
      margin-top: 30px;
      font-style: italic;
    }
    
    .section-title {
      font-size: 32px;
      font-weight: bold;
      margin: 40px 0 20px;
      text-transform: uppercase;
      border-bottom: 4px solid #000;
      padding-bottom: 10px;
    }
    
    .chapter-title {
      font-size: 24px;
      font-weight: bold;
      margin: 30px 0 15px;
      text-transform: uppercase;
      border-bottom: 3px solid #000;
      padding-bottom: 8px;
    }
    
    .panel {
      margin-bottom: 40px;
      page-break-inside: avoid;
      border: 3px solid #000;
      padding: 20px;
      background: #fff;
    }
    
    .panel-number {
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 10px;
      text-transform: uppercase;
    }
    
    .timestamp {
      font-size: 12px;
      font-weight: bold;
      margin-bottom: 8px;
      color: #666;
      background: #f0f0f0;
      padding: 4px 8px;
      display: inline-block;
    }
    
    .panel img {
      width: 100%;
      height: auto;
      border: 2px solid #000;
      margin-bottom: 15px;
      display: block;
    }
    
    .caption {
      background: #ffd700;
      border: 3px solid #000;
      padding: 10px 15px;
      margin-bottom: 10px;
      font-weight: bold;
      font-size: 14px;
    }
    
    .dialogue {
      background: #fff;
      border: 3px solid #000;
      border-radius: 15px;
      padding: 12px 18px;
      margin-bottom: 10px;
      font-size: 14px;
    }
    
    .dialogue .speaker {
      font-weight: bold;
      text-transform: uppercase;
      font-size: 12px;
    }
    
    .thought {
      background: #fff;
      border: 3px dashed #000;
      border-radius: 20px;
      padding: 12px 18px;
      margin-bottom: 10px;
      font-style: italic;
      font-size: 13px;
    }
    
    .thought .speaker {
      font-weight: bold;
      font-size: 12px;
    }
    
    .sfx {
      text-align: center;
      font-size: 28px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 3px;
      margin: 15px 0;
      text-shadow: 2px 2px 0 #000;
    }
    
    .scene {
      background: #000;
      color: #fff;
      padding: 8px 15px;
      margin-bottom: 10px;
      font-weight: bold;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 2px;
      display: inline-block;
    }
    
    .credits {
      page-break-before: always;
      text-align: center;
      padding: 40px 0;
    }
    
    .credits .panel {
      border: none;
      padding: 20px;
    }
    
    .credits .caption {
      background: transparent;
      border: none;
      font-size: 16px;
      text-align: center;
    }
    
    @media print {
      body {
        background: #fff;
      }
      
      .panel {
        page-break-inside: avoid;
      }
    }
  </style>
</head>
<body>
  <div class="title-page">
    <h1>${escapeHtml(title)}</h1>
    <p>${escapeHtml(subtitle)}</p>
    <p class="author">${escapeHtml(authorLabel)}: ${escapeHtml(pdfAuthor)}</p>
    <p style="font-size: 14px; margin-top: 40px;">${escapeHtml(generatedText)}</p>
  </div>
  
  <div class="story-section">
    <h2 class="section-title">${escapeHtml(storyLabel)}</h2>
    ${chapters ? renderChaptersHTML(chapters, storyPanels, timelineMode, chapterLabel, panelLabel) : storyPanels.map((panel, index) => renderPanelHTML(panel, index + 1, timelineMode, panelLabel)).join('\n')}
  </div>
  
  ${creditsPanels.length > 0 ? `
  <div class="credits">
    <h2 class="section-title">${escapeHtml(creditsLabel)}</h2>
    ${creditsPanels.map(panel => renderPanelHTML(panel, null, false, panelLabel)).join('\n')}
  </div>
  ` : ''}
</body>
</html>
  `.trim();
}

function renderChaptersHTML(
  chapters: Chapter[],
  allPanels: ComicPanel[],
  timelineMode: boolean,
  chapterLabel: string,
  panelLabel: string
): string {
  let panelIndex = 0;
  return chapters.map(chapter => {
    const chapterPanels = chapter.panels;
    const chapterHTML = chapterPanels.map(panel => {
      panelIndex++;
      return renderPanelHTML(panel, panelIndex, timelineMode, panelLabel);
    }).join('\n');
    
    return `
      <h3 class="chapter-title">${escapeHtml(chapterLabel)} ${escapeHtml(chapter.id.toUpperCase())}: ${escapeHtml(chapter.title)}</h3>
      ${chapterHTML}
    `;
  }).join('\n');
}

function renderPanelHTML(
  panel: ComicPanel,
  panelNumber: number | null,
  timelineMode: boolean,
  panelLabel: string
): string {
  const timestamp = timelineMode && panel.timestamp !== undefined
    ? `<div class="timestamp">${getPanelTimestamp(panel)}</div>`
    : '';
  
  const panelNumberHTML = panelNumber !== null
    ? `<div class="panel-number">${escapeHtml(panelLabel)} ${panelNumber}</div>`
    : '';
  
  const illustration = panel.illustrationSrc
    ? `<img src="${escapeHtml(panel.illustrationSrc)}" alt="${escapeHtml(panel.illustrationAlt || '')}" />`
    : '';
  
  const parts = panel.parts.map(part => {
    switch (part.type) {
      case 'caption':
        return `<div class="caption">${escapeHtml(part.text)}</div>`;
      case 'dialogue':
        return `<div class="dialogue">${part.speaker ? `<div class="speaker">${escapeHtml(part.speaker)}:</div>` : ''}${escapeHtml(part.text)}</div>`;
      case 'thought':
        return `<div class="thought">${part.speaker ? `<div class="speaker">${escapeHtml(part.speaker)} thinks:</div>` : ''}${escapeHtml(part.text)}</div>`;
      case 'sfx':
        return `<div class="sfx">${escapeHtml(part.text)}</div>`;
      case 'scene':
        return `<div class="scene">${escapeHtml(part.text)}</div>`;
      default:
        return '';
    }
  }).join('\n');
  
  return `
    <div class="panel">
      ${panelNumberHTML}
      ${timestamp}
      ${illustration}
      ${parts}
    </div>
  `;
}

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
