module.exports = async function (req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const GEMINI_KEY = process.env.GEMINI_API_KEY || '';
    if (!GEMINI_KEY) {
      return res.status(500).json({ error: 'GEMINI_API_KEY is not configured on the server.' });
    }

    const body = req.body || {};
    // Extract the model from the body if provided, otherwise default to gemini-2.5-flash
    const model = body.model || 'gemini-2.5-flash';
    
    // Clean up the body before sending to Gemini API
    if (body.stream) {
      delete body.stream;
    }
    
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_KEY}`;
    
    const response = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error("[Vercel Proxy] Gemini API Error:", data);
      return res.status(response.status).json(data);
    }
    
    res.status(200).json(data);
  } catch (error) {
    console.error("[Vercel Proxy] Internal Error:", error);
    res.status(500).json({ error: error.message });
  }
};
