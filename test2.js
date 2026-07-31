const json = '{"notes": "original string"}';
const match = /("notes"\s*:\s*")([\s\S]*?)(")/.exec(json);
const before = json.substring(0, match.index + match[1].length + match[2].length);
const htmlNotes = '\\n\\n<div style=\\"margin:20px\\">...</div>\\n';
console.log(before + htmlNotes + '"}');
