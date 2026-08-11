require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Simulated or real fetch wrappers for other APIs
async function fetchGroq(prompt) {
    const apiKey = process.env.GROQ_API_KEY;
    let retries = 5;
    while (retries > 0) {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile', 
                messages: [{ role: 'user', content: prompt }],
                temperature: 0.1
            })
        });
        if (!response.ok) {
            const errText = await response.text();
            if (response.status === 429) {
                console.log(`[Groq] Rate limited. Waiting 15 seconds before retrying...`);
                await new Promise(r => setTimeout(r, 15000));
                retries--;
                continue;
            }
            throw new Error(`Groq Error: ${response.status} ${errText}`);
        }
        const data = await response.json();
        return data.choices[0].message.content;
    }
    throw new Error(`Groq Error: Rate limit retries exhausted.`);
}

async function fetchCerebras(prompt) {
    const apiKey = process.env.CEREBRAS_API_KEY;
    let retries = 5;
    while (retries > 0) {
        const response = await fetch('https://api.cerebras.ai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'gemma-4-31b', 
                messages: [{ role: 'user', content: prompt }],
                temperature: 0.7
            })
        });
        if (!response.ok) {
            const errText = await response.text();
            if (response.status === 429) {
                console.log(`[Cerebras] Rate limited. Waiting 15 seconds before retrying...`);
                await new Promise(r => setTimeout(r, 15000));
                retries--;
                continue;
            }
            throw new Error(`Cerebras Error: ${response.status} ${errText}`);
        }
        const data = await response.json();
        return data.choices[0].message.content;
    }
    throw new Error(`Cerebras Error: Rate limit retries exhausted.`);
}

async function fetchGemini(prompt, imagePath = null) {
    const apiKey = process.env.GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);
    
    if (imagePath) {
        // Handle vision
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        const fs = require('fs');
        const fileManager = {
            inlineData: {
                data: Buffer.from(fs.readFileSync(imagePath)).toString("base64"),
                mimeType: "image/jpeg"
            }
        };
        const result = await model.generateContent([prompt, fileManager]);
        return result.response.text();
    } else {
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        const result = await model.generateContent(prompt);
        return result.response.text();
    }
}

async function fetchApi4Ai(imagePath) {
    // API4AI simulated fetch since SDK varies, usually multipart/form-data
    // This is a stub for the actual OCR call
    console.log(`[API4AI] Extracting text from ${imagePath}...`);
    return "[OCR TEXT EXTRACTED BY API4AI]";
}

const TASK_TYPES = {
    ROUTINE: 'ROUTINE', // Groq
    CONTENT: 'CONTENT', // Cerebras
    COMPLEX: 'COMPLEX', // Gemini
    VISION: 'VISION'    // API4AI -> Gemini fallback
};

class AIRouter {
    static async route(taskType, prompt, imagePath = null) {
        let retries = 3;
        while (retries > 0) {
            try {
                switch (taskType) {
                    case TASK_TYPES.ROUTINE:
                        console.log("[Router] Routing to Groq (Routine Processing)");
                        return await fetchGroq(prompt);
                    case TASK_TYPES.CONTENT:
                        console.log("[Router] Routing to Cerebras (Content Generation)");
                        return await fetchCerebras(prompt);
                    case TASK_TYPES.COMPLEX:
                        console.log("[Router] Routing to Groq (Complex Reasoning/Research - Fallback from Gemini)");
                        return await fetchGroq(prompt);
                    case TASK_TYPES.VISION:
                        console.log("[Router] Routing to API4AI (Vision/OCR)");
                        let ocrText = await fetchApi4Ai(imagePath);
                        if (this._isAmbiguous(ocrText)) {
                            console.log("[Router] API4AI result ambiguous. Falling back to Gemini Vision...");
                            return await fetchGemini(prompt || "Extract text and explain diagrams.", imagePath);
                        }
                        return ocrText;
                    default:
                        throw new Error("Unknown task type");
                }
            } catch (error) {
                console.error(`[Router] Error executing ${taskType}: ${error.message}`);
                retries--;
                if (retries === 0) {
                    console.log(`[Router] Providers exhausted. Falling back to Groq as safety net...`);
                    return await fetchGroq(prompt);
                }
                console.log(`[Router] Retrying... (${retries} attempts left)`);
            }
        }
    }

    static _isAmbiguous(text) {
        // Simple heuristic: if confidence is low, or contains strange characters, flag as ambiguous.
        // For demonstration, we'll assume it's fine unless text is suspiciously short or garbled.
        if (!text || text.length < 10 || text.includes('')) return true;
        return false;
    }
}

module.exports = { AIRouter, TASK_TYPES };
