const fs = require('fs');
const marked = require('./node_modules/marked/marked.min.js');

// load wiki_links
const wikiLinksCode = fs.readFileSync('wiki_links.js', 'utf8');
eval(wikiLinksCode);

// mock DOM / window
global.window = {};
global.document = {
  querySelectorAll: () => []
};
global.NOTES_DATABASE = {};

// load notes_data.js
const notesDataCode = fs.readFileSync('notes_data.js', 'utf8');
eval(notesDataCode);

let topicNotes = window.EXPANDED_NOTES_DATA ? window.EXPANDED_NOTES_DATA['universe-solar-system'] : null;

if (!topicNotes) {
    console.log("Not in EXPANDED_NOTES_DATA, checking old_notes_data/notes_data topic.notes");
    // need to extract from NOTES_DATABASE maybe?
    // Wait, the notes Data code just evaluates and sets NOTES_DATABASE
    // Wait, in notes_data.js, it might set window.NOTES_DATABASE
}

if (!topicNotes) {
    topicNotes = `
<p>The <b>Universe</b> originated from the [[Big Bang Theory]]</p>
    `;
}

console.log("Raw Notes:", topicNotes.substring(0, 100));

let res = parseWikiLinks(topicNotes);
console.log("Parsed Notes:", res.substring(0, 100));
console.log("Contains link?", res.includes('class="wiki-link"'));
