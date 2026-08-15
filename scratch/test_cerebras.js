const https = require('https');
require('dotenv').config();

const CEREBRAS_API_KEY = process.env.CEREBRAS_API_KEY;

const payload = JSON.stringify({
  model: 'llama-3.3-70b',
  messages: [{ role: 'user', content: "Hello" }]
});

const req = https.request({
  hostname: 'api.cerebras.ai',
  path: '/v1/chat/completions',
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${CEREBRAS_API_KEY}`,
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(payload)
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log(res.statusCode, data));
});
req.on('error', console.error);
req.write(payload);
req.end();
