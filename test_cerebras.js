const https = require('https');
const fs = require('fs');

let key = fs.readFileSync('.env', 'utf-8').match(/CEREBRAS_API_KEY=(.+)/)[1].trim();

https.get('https://api.cerebras.ai/v1/models', { headers: { 'Authorization': `Bearer ${key}` } }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log(data));
}).on('error', console.error);
