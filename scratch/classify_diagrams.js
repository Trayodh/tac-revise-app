const fs = require('fs');
const path = require('path');

// Load API Key
const envStr = fs.readFileSync('.env', 'utf8');
let apiKey = '';
envStr.split('\n').forEach(line => {
    if (line.startsWith('GEMINI_API_KEY=')) {
        apiKey = line.split('=')[1].trim();
    }
});

if (!apiKey) {
    console.error("GEMINI_API_KEY not found in .env");
    process.exit(1);
}

// Load Chapters Index
const chaptersIndex = JSON.parse(fs.readFileSync('scratch/chapters_index.json', 'utf8'));

// Find all diagrams
const diagramsDir = path.join(__dirname, '../assets/diagrams');

function findImages(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            findImages(fullPath, fileList);
        } else if (/\.(png|jpg|jpeg)$/i.test(fullPath)) {
            fileList.push(fullPath);
        }
    }
    return fileList;
}

const images = findImages(diagramsDir);
console.log(`Found ${images.length} images.`);

// Target output
const outputFile = path.join(__dirname, '../diagram_mappings.json');
let mappings = [];
if (fs.existsSync(outputFile)) {
    try {
        mappings = JSON.parse(fs.readFileSync(outputFile, 'utf8'));
    } catch(e) {}
}

const processedIds = new Set(mappings.map(m => m.diagram_id));

// Helper: map folder name to subject key
const subjectMap = {
    'Biology': 'biology',
    'Chemistry': 'chemistry',
    'Ecology and Environment': 'ecology-and-environment', // Might need fallback
    'economics': 'economics',
    'english': 'english',
    'environment': 'ecology-and-environment',
    'geography': 'geography',
    'History': 'history',
    'mathematics': 'mathematics',
    'Maths': 'mathematics',
    'physics': 'physics',
    'polity': 'polity',
    'Polity-20260731T070614Z-1-001': 'polity'
};

async function processImage(imagePath) {
    const filename = path.basename(imagePath);
    if (processedIds.has(filename)) {
        return; // Already processed
    }

    // Get subject from folder
    const relativePath = path.relative(diagramsDir, imagePath);
    const topFolder = relativePath.split(path.sep)[0];
    const subjectKey = subjectMap[topFolder] || Object.keys(chaptersIndex)[0]; 

    const subjectChapters = chaptersIndex[subjectKey] || chaptersIndex['geography']; // fallback
    const chaptersStr = JSON.stringify(subjectChapters, null, 2);

    const prompt = `You are the primary indexing and classification module for the Antigravity application. 

Task:
Analyze the provided diagram/image along with any associated OCR metadata, and determine the single most relevant chapter to which it belongs.

Context & Reference Data:
1. Chapters Index:
${chaptersStr}

2. Input Diagram Data:
- Diagram ID: ${filename}
- Extracted OCR Text: "[Extract OCR text internally using your vision capabilities]"
- Caption/Metadata: "[The filename might offer a hint: ${filename}]"

Evaluation Rules:
1. Figure/Label Direct Matching: Look for chapter-specific numbering conventions in OCR text (e.g., "Figure 4.2" strongly indicates Chapter 4).
2. Key Topic Alignment: Match technical terms, diagram labels, symbols, or equations against the key sub-topics listed in the Chapters Index.
3. Fallback Mapping: If an image contains overlapping content spanning multiple chapters, choose the chapter where the core concept is first introduced or primarily explained.

Output Format:
Return ONLY a valid JSON object using the following structure:

{
  "diagram_id": "<Diagram ID>",
  "mapped_chapter_id": "<Chapter ID>",
  "confidence_score": <Float between 0.00 and 1.00>,
  "matched_indicators": ["<List key terms, OCR snippets, or visual cues that led to this decision>"],
  "reasoning": "<1-2 sentence explanation of the assignment>"
}`;

    const ext = path.extname(imagePath).substring(1).toLowerCase();
    const mimeType = ext === 'png' ? 'image/png' : 'image/jpeg';
    const base64Image = fs.readFileSync(imagePath).toString('base64');

    const body = {
        contents: [
            {
                parts: [
                    { text: prompt },
                    {
                        inlineData: {
                            mimeType: mimeType,
                            data: base64Image
                        }
                    }
                ]
            }
        ],
        generationConfig: {
            temperature: 0.1,
            responseMimeType: 'application/json'
        }
    };

    console.log(`Processing ${filename} (Subject: ${topFolder}) ...`);

    let retries = 3;
    let response;
    while (retries > 0) {
        response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        if (response.ok) break;

        const err = await response.text();
        if (response.status === 429) {
            console.log(`Rate limited on ${filename}. Waiting 30s...`);
            await new Promise(r => setTimeout(r, 30000));
            retries--;
        } else {
            console.error(`Failed ${filename}: ${err}`);
            return;
        }
    }

    if (!response || !response.ok) {
        console.error(`Failed ${filename} after retries.`);
        return;
    }

    const data = await response.json();
    try {
        const textResponse = data.candidates[0].content.parts[0].text;
        const jsonObj = JSON.parse(textResponse);
        mappings.push(jsonObj);
        fs.writeFileSync(outputFile, JSON.stringify(mappings, null, 2));
        console.log(`✅ ${filename} -> ${jsonObj.mapped_chapter_id}`);
    } catch(e) {
        console.error(`Parse error for ${filename}: `, e);
    }
    
    // Delay to avoid rate limits (15 RPM -> 4s per request)
    await new Promise(r => setTimeout(r, 4500));
}

async function main() {
    // Process only first 5 images for the test batch
    const testBatch = process.argv.includes('--test') ? images.slice(0, 5) : images;
    
    for (const img of testBatch) {
        await processImage(img);
    }
    console.log("Done!");
}

main();
