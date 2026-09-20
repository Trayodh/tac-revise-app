const fs = require('fs');
const path = require('path');

const premiumCard = (title, content, upscHighlights, detailedAnalysis) => `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: #4ade80; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600;">${title}</h3>
  
  ${content}

  ${upscHighlights ? `
  <div style="background: rgba(251,191,36,0.08); border-left: 4px solid #fbbf24; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color: #fbbf24;">🎯 UPSC Highlights (CDS/NDA Focus):</strong>
    <p style="color: #e2e8f0; margin-top: 8px;">${upscHighlights}</p>
  </div>` : ''}

  ${detailedAnalysis ? `
  <div style="background: rgba(56,189,248,0.08); border-left: 4px solid #38bdf8; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color: #38bdf8;">🧠 Detailed Analysis & Assertion-Reasoning:</strong>
    <p style="color: #e2e8f0; margin-top: 8px;">${detailedAnalysis}</p>
  </div>` : ''}
</div>
`;

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Check if already contains revision-card to avoid double wrapping
    if (content.includes('class="revision-card"')) {
        console.log(`Skipping ${path.basename(filePath)} - already upgraded`);
        return;
    }

    let modified = false;

    const sandbox = {
        window: { EXPANDED_NOTES_DATA: {} },
        EXPANDED_NOTES_DATA: {},
        String: String
    };
    
    try {
        // Fix up the file content so it executes correctly
        let codeToEval = content.replace(/window\.EXPANDED_NOTES_DATA/g, 'sandbox.window.EXPANDED_NOTES_DATA')
                                .replace(/^EXPANDED_NOTES_DATA/gm, 'sandbox.window.EXPANDED_NOTES_DATA');
        
        // Remove document/window references that might throw
        codeToEval = codeToEval.replace(/document\.getElementById.*?;/g, '');
        
        eval(codeToEval);
        
        let newContent = `window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};\n\n`;
        
        for (const [key, htmlStr] of Object.entries(sandbox.window.EXPANDED_NOTES_DATA)) {
            // Parse HTML to extract title and highlights
            let titleMatch = htmlStr.match(/<h[123][^>]*>(.*?)<\/h[123]>/i);
            let title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : "Revision Notes";
            
            let mainContent = htmlStr;
            if (titleMatch) {
                mainContent = mainContent.replace(titleMatch[0], '');
            }
            
            // Extract UPSC Highlights if they exist
            let upscHighlights = "";
            let upscRegex = /<div class="msc-title">.*?Upsc Highlights.*?<\/div>\s*<ul[^>]*>([\s\S]*?)<\/ul>\s*<\/div>/i;
            let upscMatch = mainContent.match(upscRegex);
            if (upscMatch) {
                upscHighlights = upscMatch[1].trim(); 
                mainContent = mainContent.replace(upscMatch[0], ''); 
            }
            
            let detailedAnalysis = "";
            let detailRegex = /<div class="msc-title">.*?Detailed Analysis.*?<\/div>\s*<ul[^>]*>([\s\S]*?)<\/ul>\s*<\/div>/i;
            let detailMatch = mainContent.match(detailRegex);
            if (detailMatch) {
                detailedAnalysis = detailMatch[1].trim();
                mainContent = mainContent.replace(detailMatch[0], '');
            }
            
            // Generate new HTML
            const newHtml = premiumCard(title, mainContent.trim(), upscHighlights, detailedAnalysis);
            
            newContent += `window.EXPANDED_NOTES_DATA["${key}"] = String.raw\`${newHtml}\`;\n\n`;
            modified = true;
        }
        
        if (modified) {
            fs.writeFileSync(filePath, newContent);
            console.log(`Successfully upgraded ${path.basename(filePath)}`);
        }
        
    } catch (err) {
        console.error(`Failed to process ${path.basename(filePath)} via eval: ${err.message}`);
    }
}

const files = fs.readdirSync(__dirname);
for (const file of files) {
    if (file.endsWith('.js') && (file.startsWith('notes_generated_') || file.startsWith('notes_extra_'))) {
        if (file === 'notes_generated_geography_deep.js') continue;
        processFile(path.join(__dirname, file));
    }
}
