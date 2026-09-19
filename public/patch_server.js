const fs = require('fs');

let serverCode = fs.readFileSync('server.js', 'utf8');

// 1. Add Rate Limiting Map at the top
if (!serverCode.includes('const rateLimitMap')) {
  serverCode = serverCode.replace(
    "const MIME_TYPES =",
    `// Basic in-memory rate limiter (15 requests per minute per IP)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60000;
const MAX_REQUESTS_PER_WINDOW = 15;

const MIME_TYPES =`
  );
}

// 2. Add Rate Limiting Check in the request handler
if (!serverCode.includes('const clientIp')) {
  serverCode = serverCode.replace(
    "if (req.url.startsWith('/api/gemini') && req.method === 'POST') {",
    `if (req.url.startsWith('/api/gemini') && req.method === 'POST') {
    // Rate Limiting Logic
    const clientIp = req.socket.remoteAddress || req.headers['x-forwarded-for'] || 'unknown';
    const now = Date.now();
    let rlData = rateLimitMap.get(clientIp);
    if (!rlData || (now - rlData.startTime > RATE_LIMIT_WINDOW_MS)) {
      rlData = { count: 0, startTime: now };
    }
    rlData.count++;
    rateLimitMap.set(clientIp, rlData);
    
    if (rlData.count > MAX_REQUESTS_PER_WINDOW) {
      console.warn(\`[PROXY] Rate limit exceeded for IP: \${clientIp}\`);
      res.writeHead(429, { 'Content-Type': 'application/json', 'Retry-After': 60 });
      res.end(JSON.stringify({ error: 'Too Many Requests. Please wait a minute before trying again.' }));
      return;
    }
`
  );
}

// 3. Add Streaming Support
if (!serverCode.includes('streamGenerateContent')) {
  serverCode = serverCode.replace(
    "let { model, contents } = payload;",
    `let { model, contents, stream } = payload;`
  );

  const requestLoopOriginal = `const targetUrl = \`https://generativelanguage.googleapis.com/v1beta/models/\${currentModel}:generateContent?key=\${GEMINI_API_KEY}\`;`;
  const requestLoopStream = `const endpoint = stream ? ':streamGenerateContent?alt=sse&key=' : ':generateContent?key=';
          const targetUrl = \`https://generativelanguage.googleapis.com/v1beta/models/\${currentModel}\${endpoint}\${GEMINI_API_KEY}\`;`;
  serverCode = serverCode.replace(requestLoopOriginal, requestLoopStream);

  const fetchOriginal = `apiResponse = await fetch(targetUrl, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(requestPayload)
            });
            
            const duration = ((Date.now() - startTime) / 1000).toFixed(2);
            console.log(\`[PROXY] Gemini API (\${currentModel}) returned status: \${apiResponse.status} in \${duration}s\`);
            
            data = await apiResponse.json();`;

  const fetchStream = `apiResponse = await fetch(targetUrl, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(requestPayload)
            });
            
            const duration = ((Date.now() - startTime) / 1000).toFixed(2);
            console.log(\`[PROXY] Gemini API (\${currentModel}) returned status: \${apiResponse.status} in \${duration}s\`);
            
            if (stream && apiResponse.ok) {
              res.writeHead(200, {
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache',
                'Connection': 'keep-alive'
              });
              
              // Pipe the stream directly to the client
              for await (const chunk of apiResponse.body) {
                res.write(chunk);
              }
              res.end();
              return; // Exit completely after streaming
            } else {
              data = await apiResponse.json();
            }`;
  serverCode = serverCode.replace(fetchOriginal, fetchStream);
}

fs.writeFileSync('server.js', serverCode);
console.log('Successfully patched server.js with rate limiting and streaming!');
