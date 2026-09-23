const fs = require('fs');
let code = fs.readFileSync('server.js', 'utf8');

const newBlock = `        const GEMINI_KEY = process.env.GEMINI_API_KEY || 'AIzaSyA0g3U1Nro31TC8ow-oaaaEwZ5mpRQ7MJM';

        let apiResponse = null;
        let success = false;
        
        let targetUrl = \`https://generativelanguage.googleapis.com/v1beta/models/\${model}:generateContent?key=\${GEMINI_KEY}\`;
        if (stream) {
          targetUrl = \`https://generativelanguage.googleapis.com/v1beta/models/\${model}:streamGenerateContent?alt=sse&key=\${GEMINI_KEY}\`;
        }

        const geminiPayload = {
          contents,
          generationConfig,
          tools,
          systemInstruction
        };
        
        let retries = 3;
        let delayMs = 2000;
        
        while (retries > 0 && !success) {
          try {
            console.log(\`[PROXY] Sending request to Dedicated Gemini API: \${model}, Stream: \${!!stream}, Retries left: \${retries - 1}\`);
            apiResponse = await fetch(targetUrl, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(geminiPayload)
            });
            
            if (apiResponse.ok) {
              success = true;
            } else if (apiResponse.status === 429) {
              console.warn(\`[PROXY] Gemini API Rate Limited (429). Waiting \${delayMs}ms...\`);
              await new Promise(r => setTimeout(r, delayMs));
              delayMs *= 2;
              retries--;
            } else {
              console.error(\`[PROXY] Gemini API Error:\`, apiResponse.status, await apiResponse.text());
              break;
            }
          } catch (err) {
            console.error(\`[PROXY] Exception during request to Gemini:\`, err);
            break;
          }
        }

        if (success && apiResponse) {
          if (stream) {
            res.writeHead(200, {
              'Content-Type': 'text/event-stream',
              'Cache-Control': 'no-cache',
              'Connection': 'keep-alive'
            });
            for await (const chunk of apiResponse.body) {
              res.write(chunk);
            }
            res.end();
            return;
          } else {
            const data = await apiResponse.json();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
            return;
          }
        } else {
          console.warn('[PROXY] Dedicated Gemini API failed. Serving error message.');
          const fallbackData = {
            candidates: [
              {
                content: {
                  parts: [
                    { text: '### ⚠️ Dedicated AI Service Unavailable\\n\\nThe primary AI service is currently experiencing heavy load. Please try again in 10-20 seconds.' }
                  ]
                },
                finishReason: 'STOP'
              }
            ]
          };
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(fallbackData));
        }`;

const lines = code.split('\n');
let start = -1;
let end = -1;

for (let i = 650; i < lines.length; i++) {
  if (lines[i].includes('const GEMINI_KEY = process.env.GEMINI_API_KEY ||') && lines[i].includes('AIzaSy')) {
    start = i;
    break;
  }
}

for (let i = start; i < lines.length; i++) {
  if (lines[i].includes('res.end(JSON.stringify(fallbackData));')) {
    end = i;
    break;
  }
}

if (start !== -1 && end !== -1) {
  lines.splice(start, end - start + 1, newBlock);
  fs.writeFileSync('server.js', lines.join('\n'));
  console.log('Successfully replaced block in server.js');
} else {
  console.error('Could not find bounds to replace:', start, end);
}
