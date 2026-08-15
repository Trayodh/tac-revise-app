const fs = require('fs');
const envStr = fs.readFileSync('.env', 'utf8');
let apiKey = '';
envStr.split('\n').forEach(line => {
    if (line.startsWith('GEMINI_API_KEY=')) apiKey = line.split('=')[1].trim();
});
fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`)
    .then(r => r.json())
    .then(data => console.log(JSON.stringify(data.models.map(m => m.name), null, 2)));
