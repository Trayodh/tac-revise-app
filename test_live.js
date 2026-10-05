const https = require('https');

const prompt = `You are a Graphic Designer and Military Educator.
The user wants a "Cheat Sheet" for the topic: "All active IAF aircraft with their weapons and other specs".
Generate a standalone HTML output that represents a highly visual, printable "Graphic Cheat Sheet".
STRICT RULES:
1. ONLY return raw HTML. Do not wrap it in markdown code blocks.
2. The entire cheat sheet should be wrapped in a <div class="printable-cheat-sheet">.
`;

const data = JSON.stringify({
    model: 'gemini-3.8-flash',
    contents: [{ parts: [{ text: prompt }] }]
});

const options = {
    hostname: 'tac-revise-app.onrender.com',
    port: 443,
    path: '/api/gemini',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
    }
};

const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`);
    let result = '';
    res.on('data', d => result += d);
    res.on('end', () => console.log(result.substring(0, 500)));
});

req.on('error', error => console.error(error));
req.write(data);
req.end();
