const fs = require('fs');

let text = fs.readFileSync('ai_generated_notes.js', 'utf8');

// We evaluate the text to manipulate the array
text = text.replace(/const /g, 'var ').replace(/let /g, 'var ');
eval(text);

const ancient = AI_GENERATED_NOTES.find(i => i.id === 'ancient-india-core-and-mcqs');
const medieval = AI_GENERATED_NOTES.find(i => i.id === 'medieval-india-sultanate-and-mcqs');
const modern = AI_GENERATED_NOTES.find(i => i.id === 'modern-india-national-movement-and-mcqs');
const world = AI_GENERATED_NOTES.find(i => i.id === 'world-history-and-revision-mcqs');

// Save old notes strings
const ancientText = ancient.notes;
const medievalText = medieval.notes;
const modernText = modern.notes;
const worldText = world.notes;

// We need to swap the content but keep the correct header.
// A regex to replace the text inside the <h3> tag
function replaceHeader(notesHtml, newTitle) {
    return notesHtml.replace(/(<h3[^>]*>)[^<]*(<\/h3>)/i, `$1${newTitle.toUpperCase()}$2`);
}

// 1. Ancient gets medievalText
ancient.notes = replaceHeader(medievalText, ancient.title);

// 2. Medieval gets modernText
medieval.notes = replaceHeader(modernText, medieval.title);

// 3. Modern gets worldText
modern.notes = replaceHeader(worldText, modern.title);

// 4. World gets ancientText (the intro text)
world.notes = replaceHeader(ancientText, world.title);

// Write back to file
const outText = "const AI_GENERATED_NOTES = " + JSON.stringify(AI_GENERATED_NOTES, null, 2) + ";\n";
fs.writeFileSync('ai_generated_notes.js', outText, 'utf8');
console.log('Fixed AI notes mismatch successfully!');
