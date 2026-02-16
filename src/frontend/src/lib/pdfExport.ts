import type { ComicPanel } from './comicModel';
import { deduplicatePanelParts } from './deduplication';

/**
 * Client-side comic export utility that generates a downloadable HTML document
 * styled as a printable PDF with all story panels followed by credits, applying deduplication.
 */

export async function exportComicToPDF(
  storyPanels: ComicPanel[],
  creditsPanels: ComicPanel[]
): Promise<void> {
  // Always apply deduplication for export (consistent behavior)
  const allPanels = [...storyPanels, ...creditsPanels];
  const deduplicatedPanels = deduplicatePanelParts(allPanels);
  
  const storyCount = storyPanels.length;
  const deduplicatedStory = deduplicatedPanels.slice(0, storyCount);
  const deduplicatedCredits = deduplicatedPanels.slice(storyCount);

  // Create HTML document for printing/saving
  const htmlContent = await generatePrintableHTML(deduplicatedStory, deduplicatedCredits);
  
  // Create a new window with the content
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    throw new Error('Failed to open print window. Please allow popups for this site.');
  }
  
  printWindow.document.write(htmlContent);
  printWindow.document.close();
  
  // Wait for images to load
  await new Promise(resolve => {
    printWindow.addEventListener('load', resolve);
    setTimeout(resolve, 1000); // Fallback timeout
  });
  
  // Trigger print dialog (user can save as PDF)
  printWindow.print();
}

async function generatePrintableHTML(
  storyPanels: ComicPanel[],
  creditsPanels: ComicPanel[]
): Promise<string> {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Spider-Man: Into the Spider-Verse - Comic</title>
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
    
    .section-title {
      font-size: 32px;
      font-weight: bold;
      margin: 40px 0 20px;
      text-transform: uppercase;
      border-bottom: 4px solid #000;
      padding-bottom: 10px;
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
    <h1>SPIDER-MAN:<br>INTO THE SPIDER-VERSE</h1>
    <p>A Comic Adaptation</p>
    <p style="font-size: 14px; margin-top: 40px;">Generated from Spider-Verse Comic Viewer</p>
  </div>
  
  <div class="story-section">
    <h2 class="section-title">Story</h2>
    ${storyPanels.map((panel, index) => renderPanelHTML(panel, index + 1)).join('\n')}
  </div>
  
  ${creditsPanels.length > 0 ? `
  <div class="credits">
    <h2 class="section-title">Credits</h2>
    ${creditsPanels.map(panel => renderPanelHTML(panel, null)).join('\n')}
  </div>
  ` : ''}
</body>
</html>
  `;
}

function renderPanelHTML(panel: ComicPanel, panelNumber: number | null): string {
  let html = '<div class="panel">';
  
  if (panelNumber !== null) {
    html += `<div class="panel-number">Panel ${panelNumber}</div>`;
  }
  
  if (panel.illustrationSrc) {
    html += `<img src="${panel.illustrationSrc}" alt="${escapeHtml(panel.illustrationAlt || 'Comic panel illustration')}" />`;
  }
  
  for (const part of panel.parts) {
    switch (part.type) {
      case 'caption':
        html += `<div class="caption">${escapeHtml(part.text)}</div>`;
        break;
      case 'dialogue':
        html += `<div class="dialogue"><span class="speaker">${escapeHtml(part.speaker)}:</span> ${escapeHtml(part.text)}</div>`;
        break;
      case 'thought':
        html += `<div class="thought"><span class="speaker">${escapeHtml(part.speaker)}:</span> ${escapeHtml(part.text)}</div>`;
        break;
      case 'sfx':
        html += `<div class="sfx">${escapeHtml(part.text)}</div>`;
        break;
      case 'scene':
        html += `<div class="scene">${escapeHtml(part.text)}</div>`;
        break;
    }
  }
  
  html += '</div>';
  return html;
}

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
