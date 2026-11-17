require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');
const { YoutubeTranscript } = require('youtube-transcript');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const videoId = process.argv[2];
if (!videoId) {
    console.error("Please provide a video ID as the first argument.");
    process.exit(1);
}

async function main() {
    console.log(`Fetching transcript for video ID: ${videoId}...`);
    
    let transcriptText = "";
    try {
        const transcriptArr = await YoutubeTranscript.fetchTranscript(videoId);
        transcriptText = transcriptArr.map(t => t.text).join(" ");
    } catch (e) {
        console.error("Failed to fetch transcript using youtube-transcript module.", e);
        process.exit(1);
    }

    if (!transcriptText || transcriptText.length === 0) {
        console.error("Transcript is empty.");
        process.exit(1);
    }

    console.log(`Transcript extracted! Length: ${transcriptText.length} characters. Sending to Gemini...`);

    const promptBase = fs.readFileSync('youtube_mega_prompt.txt', 'utf8');
    const prompt = promptBase + "\n\nTranscript:\n" + transcriptText;

    let rawText = "";
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            console.log(`Attempt ${attempt} to call Gemini...`);
            const response = await ai.models.generateContent({
                model: 'gemini-flash-lite-latest',
                contents: [
                    {
                        role: 'user',
                        parts: [
                            { text: prompt }
                        ]
                    }
                ],
                config: { 
                    temperature: 0.2,
                    responseMimeType: 'application/json'
                }
            });
            rawText = response.text;
            break;
        } catch (err) {
            console.error(`Attempt ${attempt} failed: ${err.message}`);
            if (attempt === 3) process.exit(1);
            console.log("Waiting 15 seconds before retry...");
            await new Promise(r => setTimeout(r, 15000));
        }
    }
    if (!rawText) rawText = "[]";
    if (rawText.startsWith('\`\`\`json')) rawText = rawText.replace(/^\`\`\`json\n/, '').replace(/\n\`\`\`$/, '');
    else if (rawText.startsWith('\`\`\`')) rawText = rawText.replace(/^\`\`\`\n/, '').replace(/\n\`\`\`$/, '');

    try {
        const parsed = JSON.parse(rawText);
        console.log("Successfully extracted content!");
        fs.writeFileSync('live_extraction_result.json', JSON.stringify(parsed, null, 2));
        console.log("Saved to live_extraction_result.json");
    } catch(e) {
        console.error("Failed to parse JSON from Gemini.", e);
        console.log("Raw output:", rawText);
    }
}

main().catch(console.error);
