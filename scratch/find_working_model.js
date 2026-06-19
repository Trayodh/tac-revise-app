require('dotenv').config();
const apiKey = process.env.GEMINI_API_KEY;

const models = [
  'gemini-2.5-flash',
  'gemini-2.5-pro',
  'gemini-2.0-flash',
  'gemini-2.0-flash-lite',
  'gemini-1.5-flash',
  'gemini-1.5-pro',
  'gemini-3.1-flash-lite',
  'gemini-3.1-flash'
];

async function checkModel(model) {
  // Try with models/ prefix
  const targetUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
  const payload = {
    contents: [{ parts: [{ text: "Hello" }] }]
  };
  try {
    const res = await fetch(targetUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const txt = await res.text();
    console.log(`=== Model: ${model} ===`);
    console.log(`Status: ${res.status}`);
    console.log(`Response: ${txt}`);
  } catch (e) {
    console.log(`Model ${model} threw: ${e.message}`);
  }
}

async function main() {
  for (const m of models) {
    await checkModel(m);
    // Wait 2 seconds between to not trigger RPM limits
    await new Promise(r => setTimeout(r, 2000));
  }
}

main();
