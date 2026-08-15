const fs = require('fs');

const envStr = fs.readFileSync('.env', 'utf8');
let apiKey = '';
envStr.split('\n').forEach(line => {
    if (line.startsWith('GROQ_API_KEY=')) apiKey = line.split('=')[1].trim();
});

fetch('https://api.groq.com/openai/v1/models', {
    headers: { 'Authorization': `Bearer ${apiKey}` }
})
.then(r => r.json())
.then(data => {
    if (data.data) {
        console.log(data.data.map(m => m.id));
    } else {
        console.error(data);
    }
});
