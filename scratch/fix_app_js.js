const fs = require('fs');
let appJs = fs.readFileSync('app.js', 'utf8');

const targetBlock = `            // Route all AI traffic through the secure Vercel backend
            const backendPayload = {
                targetAI: targetAI,
                messages: messages,
                isJsonRequired: isJsonRequired,
                temperature: reqBody.generationConfig?.temperature || 0.1,
                // Pass original request body for Gemini (which uses a different format)
                originalGeminiBody: targetAI === 'gemini' ? reqBody : null
            };

            const res = await originalFetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(backendPayload)
            });
            
            if (!res.ok) {
                const errText = await res.text();
                throw new Error("Backend API Error: " + errText);
            }
            
            const data = await res.json();
            aiText = data.text || "";`;

const newBlock = `            // DIRECT CLIENT-SIDE API CALLS
            if (targetAI === 'groq') {
                const groqBody = {
                    model: 'llama-3.3-70b-versatile',
                    messages: messages,
                    temperature: reqBody.generationConfig?.temperature || 0.1,
                    max_tokens: 1500
                };
                if (isJsonRequired) groqBody.response_format = { type: 'json_object' };

                const res = await originalFetch('https://api.groq.com/openai/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer PROCESS_ENV_GROQ_KEY'
                    },
                    body: JSON.stringify(groqBody)
                });
                if (!res.ok) throw new Error("Groq API Error: " + await res.text());
                const data = await res.json();
                aiText = data.choices?.[0]?.message?.content || "";
            } 
            else if (targetAI === 'cerebras') {
                const cerebrasBody = {
                    model: 'llama3.1-8b',
                    messages: messages,
                    temperature: reqBody.generationConfig?.temperature || 0.7,
                    max_completion_tokens: 1500
                };
                if (isJsonRequired) cerebrasBody.response_format = { type: 'json_object' };

                const res = await originalFetch('https://api.cerebras.ai/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer PROCESS_ENV_CEREBRAS_KEY'
                    },
                    body: JSON.stringify(cerebrasBody)
                });
                if (!res.ok) throw new Error("Cerebras API Error: " + await res.text());
                const data = await res.json();
                aiText = data.choices?.[0]?.message?.content || "";
            }
            else { // Gemini
                const geminiBody = reqBody;
                if (geminiBody.stream) delete geminiBody.stream;
                
                const geminiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=PROCESS_ENV_GEMINI_KEY';
                const res = await originalFetch(geminiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(geminiBody)
                });
                if (!res.ok) throw new Error("Gemini API Error: " + await res.text());
                const data = await res.json();
                aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
            }`;

if (appJs.includes(targetBlock)) {
    appJs = appJs.replace(targetBlock, newBlock);
    fs.writeFileSync('app.js', appJs);
    console.log("Successfully reverted app.js to use direct APIs.");
} else {
    console.log("Could not find the target block to replace.");
}
