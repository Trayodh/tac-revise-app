const fs = require('fs');
let data = fs.readFileSync('data.js', 'utf8');

// The text contains stuff like:
// &lt;a href="https://news.google.com..." ... <br><a href="..." target="_blank" style="color:var(--accent);">Read Original Release</a>
// Let's strip out anything starting from <br><br>&lt;a href... to the end of the text property.

data = data.replace(/(<strong>.*?<\/strong>)<br><br>&lt;a href=.*?Read Original Release<\/a>/g, '$1');

// Also for summary if it contains similar junk
data = data.replace(/"summary": "&lt;a href=.*?",/g, '"summary": "Summary offline due to API limitation.",');

fs.writeFileSync('data.js', data);
console.log('Done');
