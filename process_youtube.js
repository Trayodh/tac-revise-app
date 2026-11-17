require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');
const { execSync } = require('child_process');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const URL = process.argv[2];
if (!URL) { console.error("Please provide a YouTube URL as an argument."); process.exit(1); }

async function main() {
    console.log("Downloading audio via yt-dlp...");
    execSync(`python -m yt_dlp -x --audio-format m4a -o "yt_audio_live.m4a" "${URL}"`);

    console.log("Uploading audio to Gemini...");
    const uploadResult = await ai.files.upload({
        file: 'yt_audio_live.m4a',
        config: {
            mimeType: 'audio/m4a'
        }
    });
    
    console.log(`Uploaded! URI: ${uploadResult.uri}`);
    console.log("Waiting 15 seconds for Google to process the audio...");
    await new Promise(r => setTimeout(r, 15000));

    console.log("Asking Gemini to analyze the Hindi audio and extract content...");
    const prompt = `You are a strict, highly analytical UPSC and Defence Exam (NDA/CDS/AFCAT) content creator. 
I have uploaded an audio file from a YouTube video (the speaker speaks Hindi).
Please analyze the entire audio.
If it contains educational content, current affairs, military knowledge, math, physics, or anything relevant to Defence exams:
Generate a JSON output containing:
1. "title": A concise, formal title for the notes.
2. "subject": The subject (e.g. 'gs', 'maths', 'english', 'afcat', 'current_affairs').
3. "notes": A highly detailed, HTML-formatted study note summarizing the video. Use <strong> for emphasis, <ul> for lists. Translate all concepts into professional English.
4. "questions": An array of 5 highly challenging UPSC-style Multiple Choice Questions based on the video.
Each question should be an object with "question" (string), "options" (array of 4 strings), "correct" (0-3 index), and "explanation" (detailed string).

Output ONLY the raw JSON object. Do not use markdown backticks around the JSON.`;

    const response = await ai.models.generateContent({
        model: 'gemini-flash-lite-latest',
        contents: [
            {
                role: 'user',
                parts: [
                    { fileData: { fileUri: uploadResult.uri, mimeType: uploadResult.mimeType } },
                    { text: prompt }
                ]
            }
        ],
        config: { temperature: 0.2 }
    });

    let rawText = response.text;
    if (rawText.startsWith('```json')) rawText = rawText.replace(/^```json\n/, '').replace(/\n```$/, '');
    else if (rawText.startsWith('```')) rawText = rawText.replace(/^```\n/, '').replace(/\n```$/, '');

    const parsed = JSON.parse(rawText);
    console.log("Successfully extracted content!");
    fs.writeFileSync('live_extraction_result.json', JSON.stringify(parsed, null, 2));
    console.log("Saved to live_extraction_result.json");
}

main().catch(console.error);
