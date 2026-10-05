const http = require('http');
const data = JSON.stringify({
    model: 'gemini-3.8-flash',
    contents: [{ parts: [{ text: 'Cheat Sheet for the topic: test' }] }]
});
const options = { hostname: 'localhost', port: 4000, path: '/api/gemini', method: 'POST', headers: { 'Content-Type': 'application/json', 'Content-Length': data.length } };
const req = http.request(options, res => { console.log(res.statusCode); res.on('data', d => process.stdout.write(d)); });
req.write(data); req.end();
