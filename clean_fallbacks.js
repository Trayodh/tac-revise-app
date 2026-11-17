const fs = require('fs');
let data = fs.readFileSync('data.js', 'utf8');

// Find all items with _fallback_ and remove their objects
// We know they look like { "id": "ca_live_..._fallback_...", ... } and end at the next }, or }, {
// A safer way is to parse the specific string block if possible.
// Or just regex replace the whole object.

data = data.replace(/\{\s*"id":\s*"ca_live_[^"]+_fallback_\d+",[\s\S]*?(?=\},\s*\{|\}\s*\])/g, function(match) {
    return ''; // replace with empty string
});

// Fix up trailing commas if any like `,,` or `[,` or `, ]`
data = data.replace(/,\s*,/g, ',');
data = data.replace(/\[\s*,/g, '[');
data = data.replace(/,\s*\]/g, ']');

fs.writeFileSync('data.js', data);
console.log('Cleaned');
