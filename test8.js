const fs = require('fs');
const marked = require('marked');

global.window = global;
global.document = {
  querySelectorAll: () => [],
  createElement: () => ({ style: {} }),
  head: { appendChild: () => {} },
  body: { appendChild: () => {} }
};
global.NOTES_DATABASE = {};

const wikiLinksCode = fs.readFileSync('wiki_links.js', 'utf8');
eval(wikiLinksCode);

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
console.log('Contains wiki-link?:', res.includes('class="wiki-link"'));
console.log(res.substring(res.indexOf('Big Bang Theory') - 100, res.indexOf('Big Bang Theory') + 50));
