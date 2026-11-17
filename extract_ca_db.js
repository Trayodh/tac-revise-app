const fs = require('fs');
const c = fs.readFileSync('data.js.pre_fix_backup', 'utf8');
const start = c.indexOf('let CURRENT_AFFAIRS_DB =');
const end = c.indexOf('const CBT_EXAMS_DATABASE =');
const block = c.substring(start, end).trimEnd();

// Convert "let CURRENT_AFFAIRS_DB = {...};" to window.CURRENT_AFFAIRS_DB = {...};
const converted = 'window.CURRENT_AFFAIRS_DB = ' + block.replace(/^let CURRENT_AFFAIRS_DB\s*=\s*/, '').replace(/;\s*$/, '') + ';\n';

fs.writeFileSync('current_affairs_db.js', converted);
console.log('Extracted! Size:', converted.length, 'bytes');

// Quick validation
try {
  const fn = new Function(converted + ' return typeof CURRENT_AFFAIRS_DB;');
  console.log('Valid JS: typeof =', fn.call({ CURRENT_AFFAIRS_DB: null }));
} catch(e) {
  console.log('Validation note:', e.message.slice(0, 60));
}
