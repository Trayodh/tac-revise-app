require('dotenv').config();
const { GoogleGenAI, Type, Schema } = require('@google/genai');
const fs = require('fs');
const path = require('path');

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
    console.error("No GEMINI_API_KEY found in .env");
    process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: API_KEY });
const DB_PATH = path.join(__dirname, '../js/motivation_data.js');
const TOTAL_STORIES_TARGET = 500;
const BATCH_SIZE = 10;

// Helper to extract JSON from the data file if it already exists
function loadExistingStories() {
    if (!fs.existsSync(DB_PATH)) return [];
    const content = fs.readFileSync(DB_PATH, 'utf-8');
    // Extract the JSON array from `const BRAVERY_STORIES = [...]`
    const match = content.match(/const BRAVERY_STORIES = (\[[\s\S]*\]);/);
    if (match && match[1]) {
        try {
            return JSON.parse(match[1]);
        } catch (e) {
            console.error("Failed to parse existing stories:", e);
            return [];
        }
    }
    return [];
}

function saveStories(stories) {
    const fileContent = `// Automatically Generated Motivation Stories Database
// Total Stories: ${stories.length}

const BRAVERY_STORIES = ${JSON.stringify(stories, null, 2)};

if (typeof window !== 'undefined') {
    window.BRAVERY_STORIES = BRAVERY_STORIES;
}
`;
    fs.writeFileSync(DB_PATH, fileContent, 'utf-8');
    console.log(`Saved ${stories.length} stories to ${DB_PATH}`);
}

async function generateBatch(existingStories) {
    // Collect a list of recently used names/units to avoid duplication
    const recentNames = existingStories.slice(-100).map(s => s.hero).join(', ');
    const promptText = `
You are an expert military historian. Generate a batch of ${BATCH_SIZE} UNIQUE and highly detailed stories of bravery from the Indian Armed Forces (Army, Navy, Air Force, Coast Guard, etc.).

IMPORTANT RULES:
1. DO NOT REPEAT ANY of these recently generated heroes: ${recentNames || "None yet."}
2. Ensure wide diversity: Mix famous Param Vir Chakra awardees with unsung heroes, women officers, doctors, logisticians, from different eras (WW1, WW2, 1947, 1962, 1965, 1971, Kargil, UN Missions, etc.).
3. Each story must be a gripping 300-500 word narrative.
4. Historically accurate. No fabricated dialogue unless verified.
`;

    const responseSchema = {
        type: Type.ARRAY,
        description: "List of motivation stories",
        items: {
            type: Type.OBJECT,
            properties: {
                title: { type: Type.STRING, description: "A compelling title" },
                hero: { type: Type.STRING, description: "Name of the hero (e.g. Captain Vikram Batra)" },
                rank: { type: Type.STRING },
                unit: { type: Type.STRING, description: "Unit, Ship, or Squadron" },
                branch: { type: Type.STRING, description: "Army, Navy, Air Force, etc." },
                operation: { type: Type.STRING, description: "Operation or War" },
                location: { type: Type.STRING },
                date: { type: Type.STRING },
                story: { type: Type.STRING, description: "The 300-500 word gripping narrative" },
                legacy: { type: Type.STRING, description: "Gallantry awards and legacy" },
                quote: { type: Type.STRING, description: "Verified quote or famous military quote" },
                moral: { type: Type.STRING, description: "Moral of the day (2-3 lines)" }
            },
            required: ["title", "hero", "rank", "unit", "branch", "operation", "location", "date", "story", "legacy", "quote", "moral"]
        }
    };

    console.log(`Requesting batch of ${BATCH_SIZE} stories...`);
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: promptText,
        config: {
            responseMimeType: 'application/json',
            responseSchema: responseSchema,
            temperature: 0.7,
        }
    });

    try {
        const newStories = JSON.parse(response.text);
        return newStories;
    } catch (e) {
        console.error("Failed to parse AI output:", e);
        return [];
    }
}

async function main() {
    console.log("Starting motivation story generator...");
    let stories = loadExistingStories();
    console.log(`Found ${stories.length} existing stories.`);

    while (stories.length < TOTAL_STORIES_TARGET) {
        try {
            const newBatch = await generateBatch(stories);
            if (newBatch && newBatch.length > 0) {
                // Adapt schema to old format if necessary, though we will update the app to use the new fields too.
                const mappedBatch = newBatch.map(s => ({
                    hero: `${s.rank} ${s.hero}`,
                    award: s.legacy,
                    unit: `${s.unit}, ${s.branch}`,
                    year: `${s.date} (${s.operation} - ${s.location})`,
                    story: `${s.title}\n\n${s.story}\n\nQuote: "${s.quote}"\n\nMoral: ${s.moral}`
                }));

                stories = stories.concat(mappedBatch);
                saveStories(stories);
                console.log(`Progress: ${stories.length} / ${TOTAL_STORIES_TARGET}`);
            } else {
                console.log("Batch returned empty, retrying in 5 seconds...");
                await new Promise(r => setTimeout(r, 5000));
            }
        } catch (error) {
            console.error("Error generating batch:", error);
            console.log("Waiting 10 seconds before retrying...");
            await new Promise(r => setTimeout(r, 10000));
        }
    }

    console.log("Finished generating 500 stories!");
}

main();
