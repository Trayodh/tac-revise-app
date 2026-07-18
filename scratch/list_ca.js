const fs = require('fs');

function listTitles(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  let regex = /"July 2026":\s*\[([\s\S]*?)\](,\n\s*"June|\n\};)/;
  let match = content.match(regex);
  if (match) {
    let arrStr = '[' + match[1] + ']';
    try {
      let arr = eval('(' + arrStr + ')');
      console.log('--- ' + filePath + ' (' + arr.length + ' items) ---');
      arr.forEach((item, idx) => {
        let title = '';
        if (item.text) {
           let m = item.text.match(/<strong>(.*?)<\/strong>/) || item.text.match(/\*\*(.*?)\*\*/);
           if (m) title = m[1];
           else title = item.text.substring(0, 80) + '...';
        } else if (item.summary) {
           title = item.summary.substring(0, 80) + '...';
        }
        console.log(idx + ': ' + title.replace(/\n/g, ' '));
      });
    } catch(e) {
      console.log('Parse error for ' + filePath);
    }
  }
}

listTitles('data.js');
listTitles('current_affairs_db.js');
