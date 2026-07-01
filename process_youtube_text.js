require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');
const { execSync } = require('child_process');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const URL = process.argv[2];
if (!URL) { console.error("Please provide a YouTube video ID as an argument."); process.exit(1); }

// Extract video ID from typical youtube URLs or just use the ID
let videoId = URL;
if (URL.includes("youtu.be/")) videoId = URL.split("youtu.be/")[1].split("?")[0];
else if (URL.includes("v=")) videoId = URL.split("v=")[1].split("&")[0];
else if (URL.includes("/live/")) videoId = URL.split("/live/")[1].split("?")[0];

async function main() {
    console.log(`Fetching transcript for video ID: ${videoId}...`);
    
    let transcriptText = "";
    try {
        console.log("Running youtube_transcript_api CLI...");
        const rawJson = execSync(`python -m youtube_transcript_api ${videoId} --languages hi --format json`, { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
        const transcriptArr = JSON.parse(rawJson);
        transcriptText = transcriptArr.map(t => t.text).join(" ");
    } catch (e) {
        console.error("Failed to fetch transcript. The video might not have captions enabled.");
        process.exit(1);
    }

    if (!transcriptText || transcriptText.trim().length === 0) {
        console.error("Transcript is empty.");
        process.exit(1);
    }
    
    console.log(`Transcript extracted! Length: ${transcriptText.length} characters. Sending to Gemini...`);

    const prompt = `You are a strict, highly analytical UPSC and Defence Exam (NDA/CDS/AFCAT) content creator. 
I am providing you the raw transcript from a YouTube Live Video (likely translated from Hindi to English or pure Hindi).
Please analyze the entire transcript.
If it contains educational content, current affairs, military knowledge, math, physics, or anything relevant to Defence exams:
Generate a JSON output containing:
1. "title": A concise, formal title for the notes.
2. "subject": The subject (e.g. 'gs', 'maths', 'english', 'afcat', 'current_affairs').
3. "notes": A highly detailed, HTML-formatted study note summarizing the video. Use <strong> for emphasis, <ul> for lists. Translate all concepts into professional English.
4. "questions": An array of 10 highly challenging UPSC-style Multiple Choice Questions based on the video.
Each question should be an object with "question" (string), "options" (array of 4 strings), "correct" (0-3 index), and "explanation" (detailed string).

Transcript:
${transcriptText}

Output ONLY the raw JSON object. Do not use markdown backticks around the JSON.`;

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
        config: { temperature: 0.2 }
    });

    let rawText = response.text;
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
