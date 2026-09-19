const fs = require('fs');
let data = fs.readFileSync('notes_extra_history.js', 'utf8');
let topicIdx = data.indexOf('EXPANDED_NOTES_DATA["mauryan-period"]');
console.log('topicIdx:', topicIdx);
let nextTopicIdx = data.indexOf('EXPANDED_NOTES_DATA["', topicIdx + 20);
console.log('nextTopicIdx:', nextTopicIdx);
let topicSlice = data.substring(topicIdx, nextTopicIdx !== -1 ? nextTopicIdx : data.length);
let expandedMatch = /(<\/div>\s*)(`\s*;?)/.exec(topicSlice);
console.log('expandedMatch:', !!expandedMatch);
