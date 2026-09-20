const fs = require('fs');
let data = fs.readFileSync('notes_data.js', 'utf8');
['afcat-verbal-reasoning', 'afcat-nonverbal-reasoning', 'chemistry-substances'].forEach(ch => {
  let idx = data.indexOf('\"id\": \"' + ch + '\"');
  if (idx !== -1) {
      console.log(ch, '->\n', data.substring(idx, idx + 300));
  }
});
