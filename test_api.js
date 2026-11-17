require('dotenv').config();
const key = process.env.GEMINI_API_KEY;
const prompt = `You are Dronacharya...
<h1 style="color: var(--primary); text-align: center; margin-bottom: 16px;">The \${'Math'}: [Create a grand, poetic subtitle relevant to the topic] (NDA/CDS/UPSC)</h1>`;
fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=' + key, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ model: 'gemini-3-flash-preview', contents: [{ parts: [{ text: prompt }] }] })
}).then(r => r.json()).then(console.log).catch(console.error);
