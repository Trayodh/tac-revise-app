const fs = require('fs');
require('dotenv').config();

/**
 * Performs OCR on a local file or a remote URL using API4AI.
 * 
 * @param {string} input - Path to local file (e.g., './image.png') or a URL (e.g., 'https://...')
 * @returns {Promise<Object>} - The JSON response from API4AI
 */
async function performOCR(input) {
    const isUrl = input.startsWith('http://') || input.startsWith('https://');
    const form = new FormData();

    if (isUrl) {
        form.append('url', input);
    } else {
        if (!fs.existsSync(input)) {
            throw new Error(`File not found: ${input}`);
        }
        const buffer = fs.readFileSync(input);
        const blob = new Blob([buffer]);
        form.append('image', blob, 'image.png');
    }

    // You can use the RapidAPI endpoint if you're using RapidAPI: 'https://ocr43.p.rapidapi.com/v1/results'
    const endpoint = 'https://api4ai.cloud/ocr/v1/results'; 
    const apiKey = process.env.API4AI_KEY; 

    const headers = {};
    if (apiKey) {
        // Use 'X-RapidAPI-Key' if using RapidAPI
        headers['X-API-KEY'] = apiKey; 
    } else {
        console.warn('Warning: No API4AI_KEY found in .env. Request might fail if the endpoint requires authentication.');
    }

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            body: form,
            headers: headers
        });
        
        if (!response.ok) {
            const errText = await response.text();
            throw new Error(`API Error ${response.status}: ${errText}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('OCR Error:', error.message);
        throw error;
    }
}

/**
 * Extracts pure text from the API4AI OCR response
 */
function extractTextFromResponse(data) {
    if (!data || !data.results || !data.results[0] || !data.results[0].entities) {
        return '';
    }
    
    // API4AI typically returns entities with 'objects' containing text and bounding boxes
    const entities = data.results[0].entities;
    let fullText = '';

    entities.forEach(entity => {
        if (entity.objects) {
            entity.objects.forEach(obj => {
                if (obj.entities && obj.entities[0] && obj.entities[0].text) {
                    fullText += obj.entities[0].text + ' ';
                }
            });
            fullText += '\n'; // newline after each primary block/line
        }
    });

    return fullText.trim();
}

// Example usage when running directly from the CLI
if (require.main === module) {
    const args = process.argv.slice(2);
    if (args.length < 1) {
        console.log('Usage: node ocr_api4ai.js <path-to-file-or-url>');
        process.exit(1);
    }

    const input = args[0];
    console.log(`Starting OCR for: ${input}...`);

    performOCR(input)
        .then(data => {
            console.log('\n--- Raw Response Summary ---');
            console.log(`Status: 200 OK`);
            
            const text = extractTextFromResponse(data);
            console.log('\n--- Extracted Text ---');
            console.log(text);
        })
        .catch(err => {
            console.error('Failed to perform OCR.');
        });
}

module.exports = {
    performOCR,
    extractTextFromResponse
};
