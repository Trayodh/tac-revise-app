const fs = require('fs');
let code = fs.readFileSync('data.js', 'utf8');
let regex = /"July 2026":\s*\[([\s\S]*?)\](,\n\s*"June|\n\};)/;
let codeDb = fs.readFileSync('current_affairs_db.js', 'utf8');
let regexDb = /"July 2026":\s*\[([\s\S]*?)\](,\n\s*"June|\n\};)/;

let matchDb = codeDb.match(regexDb);
if (matchDb) {
  let newContent = code.replace(regex, '"July 2026": [' + matchDb[1] + ']$2');
  fs.writeFileSync('data.js', newContent, 'utf8');
  console.log('Successfully synced data.js July 2026 with current_affairs_db.js');
} else {
  console.log('Regex match failed on current_affairs_db.js');
}
