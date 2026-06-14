const fs = require('fs');
const path = require('path');
require('dotenv').config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'AIzaSyA0g3U1Nro31TC8ow-oaaaEwZ5mpRQ7MJM';

const UPSC_TOPIC_CATEGORIES = [
  { name: 'Polity & Governance',      color: '#4f46e5' },
  { name: 'Economy & Finance',        color: '#0891b2' },
  { name: 'Defence & Security',       color: '#dc2626' },
  { name: 'Military Appointments',    color: '#b45309' },
  { name: 'International Relations',  color: '#7c3aed' },
  { name: 'Environment & Ecology',    color: '#059669' },
  { name: 'Science & Technology',     color: '#d97706' },
  { name: 'Social Issues',            color: '#db2777' },
  { name: 'History & Culture',        color: '#92400e' },
  { name: 'Geography & Disasters',    color: '#0369a1' },
  { name: 'Awards & Appointments',    color: '#6d28d9' },
  { name: 'Sports',                   color: '#0d9488' },
];

async function runSelectionTest() {
  const rawItems = [
    { title: "Defence Minister Rajnath Singh visits Ladakh", description: "Rajnath Singh visited border posts in Ladakh to review operational readiness." },
    { title: "RBI Governor maintains repo rate at 6.5%", description: "The Monetary Policy Committee decided to keep the repo rate unchanged." },
    { title: "Indian Hockey Team wins Asian Champions Trophy", description: "India defeated Pakistan 2-1 in the final match in China." }
  ];
  
  const topicColorMap = UPSC_TOPIC_CATEGORIES.reduce((acc, t) => { acc[t.name] = t.color; return acc; }, {});
  
  const selectionPrompt = `You are a senior UPSC exam expert. Select the 2 most important news items from this list:
${JSON.stringify(rawItems.map((it,i) => ({ index: i, title: it.title, desc: it.description })))}

Rules:
- Assign each to one of these 12 topic areas: ${UPSC_TOPIC_CATEGORIES.map(t => t.name).join(', ')}
- Return ONLY a raw JSON array of objects with: { "index": <number>, "title": "<news title>", "topic": "<topic area name>", "topicColor": "<hex color from ${JSON.stringify(topicColorMap)}>" }.
- Do not include markdown fences or any formatting other than valid JSON.`;

  const model = 'gemini-2.5-flash';
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
  
  try {
    console.log("Sending selection request to Gemini...");
    const gemRes = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: selectionPrompt }] }],
        generationConfig: { temperature: 0.1, response_mime_type: 'application/json' }
      })
    });
    
    console.log("Response status:", gemRes.status);
    const text = await gemRes.text();
    console.log("Response text:", text);
    
    const data = JSON.parse(text);
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
    const cleaned = rawText.replace(/^```json\s*/,'').replace(/\s*```$/,'').trim();
    const selectionList = JSON.parse(cleaned);
    console.log("Parsed selection list successfully:", selectionList);
  } catch (err) {
    console.error("Selection test failed:", err);
  }
}

runSelectionTest();
