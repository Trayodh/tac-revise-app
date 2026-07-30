const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

async function extractTextFromPDF(pdfPath) {
    console.log(`[Extractor] Reading PDF: ${path.basename(pdfPath)}`);
    const dataBuffer = fs.readFileSync(pdfPath);
    try {
        const data = await pdf(dataBuffer);
        return data.text;
    } catch (e) {
        console.error(`[Extractor] Failed to parse ${path.basename(pdfPath)}:`, e.message);
        return null;
    }
}

function cleanAndChunkText(text, chunkSize = 6000) {
    // Remove typical boilerplate
    let cleanText = text.replace(/(Copyright|All rights reserved|Page \d+)/gi, '');
    
    // Split into overlapping chunks to not break context boundaries
    const chunks = [];
    for (let i = 0; i < cleanText.length; i += chunkSize) {
        // Find nearest newline to break
        let end = i + chunkSize;
        if (end < cleanText.length) {
            let nextNewline = cleanText.indexOf('\n', end);
            if (nextNewline !== -1 && nextNewline - end < 1000) {
                end = nextNewline;
            }
        }
        chunks.push(cleanText.substring(i, end));
        i = end - chunkSize; // adjust loop (effectively moves forward by exact chunk size calculated)
        if(i < 0) i = 0;
    }
    return chunks;
}

module.exports = { extractTextFromPDF, cleanAndChunkText };
