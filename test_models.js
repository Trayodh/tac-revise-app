require('dotenv').config();
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'AIzaSyA0g3U1Nro31TC8ow-oaaaEwZ5mpRQ7MJM';

const models = [
  'models/gemini-2.5-flash',
  'models/gemini-3-flash-preview',
  'models/gemini-2.0-flash-lite',
  'models/gemini-1.5-flash',
  'models/gemini-3.5-flash'
];

async function testModel(model) {
  const targetUrl = `https://generativelanguage.googleapis.com/v1beta/${model}:generateContent?key=${GEMINI_API_KEY}`;
  const payload = {
    contents: [{ parts: [{ text: "Hello" }] }]
  };
  try {
    const res = await fetch(targetUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      console.log(`Model ${model} is working!`);
      return true;
    } else {
      const txt = await res.text();
      console.log(`Model ${model} failed with status ${res.status}: ${txt.substring(0, 200)}`);
      return false;
    }
  } catch (e) {
    console.log(`Model ${model} threw error: ${e.message}`);
    return false;
  }
}

async function main() {
  for (const m of models) {
    const success = await testModel(m);
    if (success) {
      console.log(`Selected model for work: ${m}`);
      break;
    }
  }
}

main();
