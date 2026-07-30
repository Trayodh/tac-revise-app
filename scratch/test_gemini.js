const https = require('https');
const key = process.env.GEMINI_API_KEY;

const prompt = `You are an expert educator. Topic: "Stone Age" (Subject: history).

Return ONLY a valid JSON object with these 4 keys. No markdown. No code fences. Just raw JSON.

{
  "explanation": "2-3 short paragraphs as HTML. Use bold tags for key terms. Use [[Term]] for wiki links.",
  "tableRows": "5 table rows as HTML tr elements with 3 td cells each.",
  "mnemonics": "3 li items with memory tricks.",
  "highYieldFacts": "5 li items with key facts."
}`;

const body = JSON.stringify({
  contents: [{ parts: [{ text: prompt }] }],
  generationConfig: { temperature: 0.3, maxOutputTokens: 8192 }
});

const req = https.request({
  hostname: 'generativelanguage.googleapis.com',
  path: '/v1beta/models/gemini-2.0-flash:generateContent?key=' + key,
  method: 'POST',
  headers: { 'Content-Type': 'application/json' }
}, res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    const r = JSON.parse(d);
    const txt = r.candidates?.[0]?.content?.parts?.[0]?.text || '';
    console.log('Response length:', txt.length);
    console.log('First 300 chars:', txt.substring(0, 300));
    try {
      const j = JSON.parse(txt.substring(txt.indexOf('{'), txt.lastIndexOf('}') + 1));
      console.log('JSON OK - keys:', Object.keys(j));
      console.log('Explanation preview:', j.explanation?.substring(0, 100));
    } catch(e) {
      console.log('JSON parse error:', e.message);
      console.log('Raw:', txt.substring(0, 500));
    }
  });
});
req.write(body);
req.end();
