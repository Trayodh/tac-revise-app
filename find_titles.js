const fs = require('fs');
const content = fs.readFileSync('notes_data_exam_focused.js', 'utf8');

// The file starts with `let CURRENT_AFFAIRS_DB = ...` and ends with `let SUBJECT_NOTES = {...}`.
// Let's just find the start of `let SUBJECT_NOTES = {` and parse it or use regex safely.
const match = content.match(/"title": "([^"]+)"/g);
console.log(match.slice(0, 50));
