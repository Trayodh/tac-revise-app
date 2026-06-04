global.window = {};
global.EXPANDED_NOTES_DATA = {};
global.window.EXPANDED_NOTES_DATA = global.EXPANDED_NOTES_DATA;
require('../notes_extra_polity.js');
const notes = global.window.EXPANDED_NOTES_DATA['president'];
const matches = notes.match(/<h4.*?>([\s\S]*?)<\/h4>/g);
console.log("Headings found:", matches);
