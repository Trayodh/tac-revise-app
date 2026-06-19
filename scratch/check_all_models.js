require('dotenv').config();
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const models = [
  'gemini-2.5-flash',
  'gemini-3-flash-preview',
  'gemini-2.0-flash-lite',
  'gemini-1.5-flash',
  'gemini-1.5-pro',
  'gemini-2.0-pro-exp-02-05'
];

async function checkModel(model) {
  const targetUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
  const payload = {
    contents: [{ parts: [{ text: "Hello, list a 1-word greeting" }] }]
  };
  try {
    const res = await fetch(targetUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      console.log(`Model ${model} is WORKING`);
      return true;
    } else {
      const txt = await res.text();
      console.log(`Model ${model} FAILED (${res.status}): ${txt.substring(0, 150)}`);
      return false;
    }
  } catch (e) {
    console.log(`Model ${model} ERROR: ${e.message}`);
    return false;
  }
}

async function main() {
  for (const m of models) {
    await checkModel(m);
  }
}

main();
