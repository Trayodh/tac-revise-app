const fs = require('fs');
const marked = require('marked');

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
    if (window.NOTES_DATABASE && window.NOTES_DATABASE['geography'] && window.NOTES_DATABASE['geography'].chapters) {
        for (let chapter of window.NOTES_DATABASE['geography'].chapters) {
            for (let topic of chapter.topics) {
                if (topic.id === 'universe-solar-system') {
                    topicNotes = topic.notes;
                }
            }
        }
    }
}

let parsedNotes = marked.parse(topicNotes);
let res = parseWikiLinks(parsedNotes);
console.log('Contains wiki-link?:', res.includes('class=\"wiki-link\"'));
