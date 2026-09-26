require('dotenv').config();

const GEMINI_KEY = process.env.GEMINI_API_KEY || '';
const CEREBRAS_KEY = process.env.CEREBRAS_API_KEY || '';
const GROQ_KEY = process.env.GROQ_API_KEY || '';

/**
 * Robustly fetch from an AI provider with fallbacks
 * @param {string} systemPrompt 
 * @param {string} userPrompt 
 * @param {string[]} providerOrder Array of provider names: 'cerebras', 'groq', 'gemini'
 * @returns {Promise<string>}
 */
async function generateAIContent(systemPrompt, userPrompt, providerOrder = ['cerebras', 'groq', 'gemini']) {
  let lastError = null;
  
  for (const provider of providerOrder) {
    try {
      console.log(`[AI_PROXY] Attempting generation with provider: ${provider}`);
      if (provider === 'gemini') {
        if (!GEMINI_KEY) throw new Error("Gemini API key missing");
        
        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_KEY}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            systemInstruction: { parts: [{ text: systemPrompt }] },
            contents: [{ parts: [{ text: userPrompt }] }],
            generationConfig: {
              temperature: 0.1,
              responseMimeType: "application/json"
            }
          }),
          signal: AbortSignal.timeout(60000)
        });
        
        if (res.ok) {
          const data = await res.json();
          const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) {
            console.log(`[AI_PROXY] Successfully generated with Gemini.`);
            return text;
          }
        } else {
          const errText = await res.text();
          throw new Error(`Gemini API Error (${res.status}): ${errText}`);
        }
      } else if (provider === 'cerebras') {
        if (!CEREBRAS_KEY) throw new Error("Cerebras API key missing");
        
        const res = await fetch('https://api.cerebras.ai/v1/chat/completions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${CEREBRAS_KEY}` },
          body: JSON.stringify({
            model: "gpt-oss-120b",
            messages: [
              { role: "system", content: systemPrompt },
              { role: "user", content: userPrompt }
            ],
            response_format: { type: "json_object" },
            max_tokens: 3000
          }),
          signal: AbortSignal.timeout(60000)
        });
        
        if (res.ok) {
          const data = await res.json();
          const text = data.choices?.[0]?.message?.content;
          if (text) {
            console.log(`[AI_PROXY] Successfully generated with Cerebras.`);
            return text;
          }
        } else {
          const errText = await res.text();
          throw new Error(`Cerebras API Error (${res.status}): ${errText}`);
        }
      } else if (provider === 'groq') {
        if (!GROQ_KEY) throw new Error("Groq API key missing");
        
        const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${GROQ_KEY}` },
          body: JSON.stringify({
            model: "openai/gpt-oss-120b",
            messages: [
              { role: "system", content: systemPrompt },
              { role: "user", content: userPrompt }
            ],
            response_format: { type: "json_object" },
            max_tokens: 3000
          }),
          signal: AbortSignal.timeout(60000)
        });
        
        if (res.ok) {
          const data = await res.json();
          const text = data.choices?.[0]?.message?.content;
          if (text) {
             console.log(`[AI_PROXY] Successfully generated with Groq.`);
             return text;
          }
        } else {
          const errText = await res.text();
          throw new Error(`Groq API Error (${res.status}): ${errText}`);
        }
      }
    } catch (err) {
      console.warn(`[AI_PROXY] Provider ${provider} failed: ${err.message}`);
      lastError = err;
    }
  }
  
  throw new Error(`All configured AI providers failed. Last error: ${lastError ? lastError.message : 'Unknown'}`);
}

module.exports = {
  generateAIContent
};
