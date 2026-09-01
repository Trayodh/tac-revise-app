const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.startsWith('notes_generated_') && f.endsWith('.js'));

const topicsWithMCQs = [];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace('window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};', '');
  content = content.replace('Object.assign(window.EXPANDED_NOTES_DATA, ', '');
  content = content.replace(/\);?\s*$/, '');
  
  try {
    const db = eval('(' + content + ')');
    for (let topicId in db) {
      const html = db[topicId];
      if (html.includes('(a)') && html.includes('(b)') && html.includes('(c)')) {
        topicsWithMCQs.push(topicId);
      }
    }
  } catch (e) {
    console.log('Error parsing', file);
  }
}

console.log("Topics with MCQs found:", topicsWithMCQs.length);
console.log(topicsWithMCQs.join(', '));
