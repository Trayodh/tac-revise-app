const fetch = require('node-fetch');

async function test() {
  const GEMINI_KEY = process.env.GEMINI_API_KEY || 'AIzaSyA0g3U1Nro31TC8ow-oaaaEwZ5mpRQ7MJM';
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${GEMINI_KEY}`;
  
  const payload = {
    contents: [{ parts: [{ text: "Generate a cheat sheet for all IAF missile systems" }] }],
    generationConfig: { maxOutputTokens: 8192, temperature: 0 },
    safetySettings: [
        { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" },
        { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
        { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
        { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" }
    ]
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const data = await res.json();
  console.log(JSON.stringify(data, null, 2));
}

test();
