const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
require('dotenv').config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
    console.error("Please set GEMINI_API_KEY environment variable.");
    process.exit(1);
}

const diagramsDir = path.join(__dirname, 'assets', 'diagrams');
const allTopicsPath = path.join(__dirname, 'all_topics_mapping.json');

if (!fs.existsSync(allTopicsPath)) {
    console.error("Could not find all_topics_mapping.json");
    process.exit(1);
}

const allTopics = JSON.parse(fs.readFileSync(allTopicsPath, 'utf8'));
const topicsPromptList = allTopics.map(t => `- ID: ${t.id} | Subject: ${t.subject} | Chapter: ${t.chapter} | Title: ${t.title}`).join('\n');

// Phase 1: Scan All Images
function getImagesRecursively(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getImagesRecursively(fullPath));
        } else {
            if (file.toLowerCase().match(/\.(png|jpg|jpeg|svg|webp)$/)) {
                results.push(fullPath);
            }
        }
    });
    return results;
}

// Generate file hash to find exact duplicates
function getFileHash(filePath) {
    const fileBuffer = fs.readFileSync(filePath);
    const hashSum = crypto.createHash('sha256');
    hashSum.update(fileBuffer);
    return hashSum.digest('hex');
}

function slugify(text) {
    if (!text) return 'unknown';
    return text.toString().toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
}

async function analyzeImageWithGemini(filePath, folderHint, filenameHint) {
    let mimeType = 'image/jpeg';
    if (filePath.toLowerCase().endsWith('.png')) mimeType = 'image/png';
    else if (filePath.toLowerCase().endsWith('.webp')) mimeType = 'image/webp';

    const base64Image = fs.readFileSync(filePath).toString('base64');
    
    const prompt = `You are the Diagram Mapping Engine for a Defence Exams Revision App.
Analyze the provided image.
Original filename: "${filenameHint}"
Found in folder: "${folderHint}"

Determine exactly which topic this diagram belongs to from this syllabus taxonomy:
${topicsPromptList}

If the image is completely unrelated to any topic, or impossible to classify, set topic_id to "UNMAPPED".

Respond STRICTLY with a JSON object in the following format (no markdown code blocks, just raw JSON):
{
  "topic_id": "Exact ID from the list, or UNMAPPED",
  "title": "A short descriptive title for the image",
  "description_for_filename": "2 to 4 words describing the diagram for standardizing the filename (e.g. human_heart, heat_engine)",
  "keywords": ["array", "of", "relevant", "tags"],
  "relevance_score": <number 0-100 representing how perfectly this diagram matches the topic and improves understanding>
}`;

    let attempts = 0;
    while (attempts < 5) {
        attempts++;
        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=${GEMINI_API_KEY}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [
                            { text: prompt },
                            { inlineData: { mimeType: mimeType, data: base64Image } }
                        ]
                    }],
                    generationConfig: { 
                        temperature: 0.1,
                        responseMimeType: "application/json"
                    }
                })
            });

            const data = await response.json();
            if (data.error) {
                const errMsg = data.error.message;
                if (errMsg.includes('Quota exceeded') || errMsg.includes('429')) {
                    console.log(`    ! Rate limited. Waiting 15s...`);
                    await new Promise(r => setTimeout(r, 15000));
                    continue;
                }
                throw new Error(errMsg);
            }

            const rawText = data.candidates[0].content.parts[0].text;
            return JSON.parse(rawText.trim());
        } catch (err) {
            console.log(`    ! Fetch/Parse error on attempt ${attempts}: ${err.message}. Waiting 10s...`);
            await new Promise(r => setTimeout(r, 10000));
            if (attempts >= 5) {
                return { topic_id: "UNMAPPED", relevance_score: 0, title: "Error analyzing", keywords: [], description_for_filename: "error" };
            }
        }
    }
}

async function runEngine() {
    console.log("Phase 1: Scanning all images...");
    const allImages = getImagesRecursively(diagramsDir);
    console.log(`Found ${allImages.length} images.`);

    console.log("Phase 4: Detecting Exact Duplicates via Hashing...");
    const hashes = {};
    const uniqueImages = [];
    
    for (const imgPath of allImages) {
        const hash = getFileHash(imgPath);
        if (hashes[hash]) {
            console.log(`Deleting exact duplicate: ${imgPath}`);
            try { fs.unlinkSync(imgPath); } catch(e){} // Delete exact duplicate
        } else {
            hashes[hash] = imgPath;
            uniqueImages.push(imgPath);
        }
    }
    
    console.log(`Proceeding with ${uniqueImages.length} unique images for AI Analysis.`);

    const analyzedImages = [];

    // Phase 2, 3, 7, 9: Identify, Tags, Ranking
    console.log("Starting AI Analysis via Gemini...");
    for (let i = 0; i < uniqueImages.length; i++) {
        const imgPath = uniqueImages[i];
        const folderHint = path.basename(path.dirname(imgPath));
        const filenameHint = path.basename(imgPath);
        
        console.log(`[${i+1}/${uniqueImages.length}] Analyzing ${filenameHint}...`);
        
        // Skip SVG for now as gemini vision doesn't support svg directly well. 
        if(imgPath.toLowerCase().endsWith('.svg')) {
             console.log(`  -> Skipping SVG for vision model, assuming UNMAPPED for now...`);
             analyzedImages.push({
                 originalPath: imgPath,
                 analysis: { topic_id: "UNMAPPED", relevance_score: 0, title: "SVG Image", keywords: [], description_for_filename: "svg_image" }
             });
             continue;
        }

        const result = await analyzeImageWithGemini(imgPath, folderHint, filenameHint);
        console.log(`  -> Mapped to: ${result.topic_id} (Score: ${result.relevance_score})`);
        
        analyzedImages.push({
            originalPath: imgPath,
            analysis: result
        });
        
        // Rate limiting logic
        await new Promise(r => setTimeout(r, 1000)); 
    }

    // Phase 5, 8, 10: Smart Selection, Ranking, Prevent Overloading
    const topicGrouped = {};
    for (const item of analyzedImages) {
        if (item.analysis.topic_id === 'UNMAPPED' || item.analysis.relevance_score < 80) {
            console.log(`Phase 3/8: Discarding irrelevant/low score image: ${item.originalPath} (Score: ${item.analysis.relevance_score})`);
            try { fs.unlinkSync(item.originalPath); } catch(e){}
            continue;
        }
        
        const tid = item.analysis.topic_id;
        if (!topicGrouped[tid]) topicGrouped[tid] = [];
        topicGrouped[tid].push(item);
    }

    const mappingIndex = {};
    
    console.log("Phase 5 & 10 & 11 & 12: Enforcing limits, Standardising Names, and Moving...");
    for (const tid of Object.keys(topicGrouped)) {
        let imagesForTopic = topicGrouped[tid];
        // Sort descending by relevance score
        imagesForTopic.sort((a, b) => b.analysis.relevance_score - a.analysis.relevance_score);
        
        const topicInfo = allTopics.find(t => t.id === tid);
        if (!topicInfo) continue;

        // Determine limits
        let limit = 4; // Default medium
        if (topicInfo.subject.toLowerCase() === 'geography' && imagesForTopic.length > 5) limit = 8;
        else if (imagesForTopic.length <= 2) limit = 2; // Small topic
        
        // Discard excess
        const toKeep = imagesForTopic.slice(0, limit);
        const toDiscard = imagesForTopic.slice(limit);
        
        for (const excess of toDiscard) {
            console.log(`Phase 5: Discarding excess image (limit ${limit}): ${excess.originalPath}`);
            try { fs.unlinkSync(excess.originalPath); } catch(e){}
        }

        // Move and rename
        if (!mappingIndex[topicInfo.subject]) mappingIndex[topicInfo.subject] = {};
        if (!mappingIndex[topicInfo.subject][topicInfo.chapter]) mappingIndex[topicInfo.subject][topicInfo.chapter] = {};
        if (!mappingIndex[topicInfo.subject][topicInfo.chapter][topicInfo.title]) {
            mappingIndex[topicInfo.subject][topicInfo.chapter][topicInfo.title] = [];
        }

        const targetDir = path.join(diagramsDir, slugify(topicInfo.subject), slugify(topicInfo.chapter));
        if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

        for (let i = 0; i < toKeep.length; i++) {
            const item = toKeep[i];
            const ext = path.extname(item.originalPath).toLowerCase();
            const safeDesc = slugify(item.analysis.description_for_filename);
            const newName = `${slugify(topicInfo.subject)}_${slugify(topicInfo.chapter)}_${slugify(topicInfo.title)}_${safeDesc}${ext}`;
            const newPath = path.join(targetDir, newName);
            
            // Move file
            if (item.originalPath !== newPath) {
                try {
                    fs.renameSync(item.originalPath, newPath);
                } catch (e) {
                    // Try copying and unlinking if cross device link
                    fs.copyFileSync(item.originalPath, newPath);
                    fs.unlinkSync(item.originalPath);
                }
            }

            mappingIndex[topicInfo.subject][topicInfo.chapter][topicInfo.title].push({
                file: newName,
                title: item.analysis.title,
                keywords: item.analysis.keywords,
                relevance_score: item.analysis.relevance_score,
                topic_id: topicInfo.id
            });
        }
    }

    // Phase 13: Build Mapping Index
    const indexPath = path.join(__dirname, 'diagram_index.json');
    fs.writeFileSync(indexPath, JSON.stringify(mappingIndex, null, 2));
    console.log(`Phase 13: Created diagram_index.json`);

    // Phase 6: Find missing images
    console.log("Phase 6 & 14: Validating and finding missing diagrams...");
    const missingReports = [];
    for (const topic of allTopics) {
        const hasDiagrams = mappingIndex[topic.subject] && 
                            mappingIndex[topic.subject][topic.chapter] && 
                            mappingIndex[topic.subject][topic.chapter][topic.title] && 
                            mappingIndex[topic.subject][topic.chapter][topic.title].length > 0;
                            
        if (!hasDiagrams) {
            missingReports.push(`Topic: ${topic.title}\nSubject: ${topic.subject}\nChapter: ${topic.chapter}\nMissing: Diagram needed for ${topic.title}\nPriority: High\n---`);
        }
    }

    fs.writeFileSync(path.join(__dirname, 'missing_diagrams_report.txt'), missingReports.join('\n\n'));
    console.log(`Wrote missing diagrams report to missing_diagrams_report.txt`);
    console.log("Audit complete.");
}

runEngine().catch(console.error);
