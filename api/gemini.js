module.exports = async function (req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = req.body || {};
    if (body.generationConfig && body.generationConfig.response_mime_type) {
      body.generationConfig.responseMimeType = body.generationConfig.response_mime_type;
      delete body.generationConfig.response_mime_type;
    }
    
    // Parse Gemini request format
    let promptText = "";
    let systemInstructionText = "";
    const messages = [];

    if (body.systemInstruction && body.systemInstruction.parts && body.systemInstruction.parts[0] && body.systemInstruction.parts[0].text) {

        systemInstructionText = body.systemInstruction.parts[0].text;
        messages.push({ role: 'system', content: systemInstructionText });
    }
    if (body.contents && body.contents[0] && body.contents[0].parts && body.contents[0].parts[0] && body.contents[0].parts[0].text) {
        promptText = body.contents[0].parts[0].text;
        messages.push({ role: 'user', content: promptText });
    }
    
    const combinedText = (systemInstructionText + " " + promptText).toLowerCase();
    let targetAI = 'gemini'; // Default fallback
    
    // Intelligent Routing
    if (
        combinedText.includes("chatbot") || 
        combinedText.includes("dronacharya") ||
        combinedText.includes("conversational") ||
        combinedText.includes("educational preview")
    ) {
        targetAI = 'gemini';
    } else {
        targetAI = 'gemini'; // Default to gemini everywhere
    }

    let aiText = "";
    const isJsonRequired = (body.generationConfig && body.generationConfig.response_mime_type === 'application/json');

    if (targetAI === 'gemini') {
      const GEMINI_KEY = process.env.GEMINI_API_KEY || '';
      if (!GEMINI_KEY) {
          targetAI = 'cerebras'; // fallback
      } else {
          const fetchRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_KEY}`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(body)
          });
          
          if (!fetchRes.ok) {
              console.warn("Gemini API Error, falling back to cerebras");
              targetAI = 'cerebras';
          } else {
              const data = await fetchRes.json();
              if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
                  aiText = data.candidates[0].content.parts.map(p => p.text).join("");
              } else {
                  aiText = "";
              }
          }
      }
    }

    if (targetAI === 'cerebras') {
      const CEREBRAS_KEY = process.env.CEREBRAS_API_KEY || '';
      if (!CEREBRAS_KEY) return res.status(500).json({ error: 'CEREBRAS_API_KEY is missing' });
      
      const cerebrasBody = {
          model: 'gpt-oss-120b',
          messages: messages,
          temperature: body.generationConfig?.temperature || 0.7,
          max_completion_tokens: 2000
      };
      if (isJsonRequired) cerebrasBody.response_format = { type: 'json_object' };

      const fetchRes = await fetch('https://api.cerebras.ai/v1/chat/completions', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${CEREBRAS_KEY}`
          },
          body: JSON.stringify(cerebrasBody)
      });
      
      if (!fetchRes.ok) {
         const errText = await fetchRes.text();
         throw new Error("Cerebras API Error: " + errText);
      }
      const data = await fetchRes.json();
      aiText = data.choices?.[0]?.message?.content || "";
    }
    
    // Reconstruct Gemini format for the frontend parsing logic
    const fakeGeminiResponse = {
        candidates: [
            { content: { parts: [{ text: aiText }] } }
        ]
    };
    
    if (body.stream === true) {
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');
        res.write(`data: ${JSON.stringify(fakeGeminiResponse)}\n\n`);
        res.write(`data: [DONE]\n\n`);
        res.end();
    } else {
        res.status(200).json(fakeGeminiResponse);
    }
  } catch (error) {
    console.error("[Vercel Proxy] Internal Error:", error);
    // Fallback response if offline or errored
    const fakeGeminiResponse = {
        candidates: [{ content: { parts: [{ text: "```json\n[]\n```\n\n_AI uplink failed (" + error.message + "). Working in offline mode._" }] } }]
    };
    res.status(200).json(fakeGeminiResponse);
  }
};
