const https = require('https');
const key = process.env.CEREBRAS_API_KEY;

const prompt = `You are writing study flashcard content for Indian defence exams (NDA/CDS/AFCAT).

Topic: "Rock Art" (history)

Return ONLY raw JSON with exactly these 4 keys (no markdown, no code fences):
{"explanation":"<p>One paragraph max 50 words. Bold key terms. Use [[Term]] for important people/places/events.</p><p>One more paragraph max 50 words.</p>","tableRows":"<tr><td style='border:1px solid var(--border);padding:8px;'>KEY TERM</td><td style='border:1px solid var(--border);padding:8px;'>DETAIL</td><td style='border:1px solid var(--border);padding:8px;'>EXAM TIP</td></tr>","mnemonics":"<li><strong>NAME</strong>: memory trick.</li>","highYieldFacts":"<li><span style='color:var(--warning)'>1</span>. fact here.</li>"}

Rules: tableRows=4 rows, mnemonics=3 items, highYieldFacts=5 items. Keep ALL content concise.`;

const body = JSON.stringify({
  model: 'gemma-4-31b',
  messages: [
    { role: 'system', content: 'You are a study notes generator. Always respond with raw JSON only.' },
    { role: 'user', content: prompt }
  ],
  response_format: { type: 'json_object' },
  max_completion_tokens: 4096
});

const req = https.request({
  hostname: 'api.cerebras.ai',
  path: '/v1/chat/completions',
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key }
}, res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    console.log('HTTP Status:', res.statusCode);
    try {
      const r = JSON.parse(d);
      const content = r.choices?.[0]?.message?.content || '';
      const finish = r.choices?.[0]?.finish_reason;
      console.log('Finish reason:', finish);
      console.log('Content length:', content.length);
      console.log('Content preview:', content.substring(0, 300));
      // try parse
      try {
        const j = JSON.parse(content);
        console.log('JSON OK - keys:', Object.keys(j));
      } catch(e) {
        console.log('JSON parse error:', e.message);
        console.log('Last 100 chars:', content.substring(content.length - 100));
      }
    } catch(e) {
      console.log('HTTP response parse error:', e.message);
      console.log('Raw:', d.substring(0, 500));
    }
  });
});
req.write(body);
req.end();
