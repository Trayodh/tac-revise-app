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

    const isJsonRequired = (body.generationConfig && body.generationConfig.responseMimeType === 'application/json');
    
    const OPENROUTER_KEY = process.env.OPENROUTER_API_KEY || '';
    if (!OPENROUTER_KEY) {
        throw new Error('OPENROUTER_API_KEY is missing');
    }

    const openRouterBody = {
        model: 'google/gemini-2.5-flash',
        messages: messages,
        temperature: body.generationConfig?.temperature || 0.7,
        max_tokens: 2000
    };
    if (isJsonRequired) openRouterBody.response_format = { type: 'json_object' };

    const fetchRes = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENROUTER_KEY}`
        },
        body: JSON.stringify(openRouterBody)
    });
    
    if (!fetchRes.ok) {
       const errText = await fetchRes.text();
       throw new Error("OpenRouter API Error: " + errText);
    }
    
    const data = await fetchRes.json();
    const aiText = data.choices?.[0]?.message?.content || "";
    
    const fakeGeminiResponse = {
        candidates: [{ content: { parts: [{ text: aiText }] } }]
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
    const fakeGeminiResponse = {
        candidates: [{ content: { parts: [{ text: (body.generationConfig && body.generationConfig.responseMimeType === 'application/json') ? "```json\n[]\n```\n\n_AI uplink failed (" + error.message + "). Working in offline mode._" : "I apologize, but I encountered a connection error. (_AI uplink failed: " + error.message + "._)" }] } }]
    };
    res.status(200).json(fakeGeminiResponse);
  }
};
