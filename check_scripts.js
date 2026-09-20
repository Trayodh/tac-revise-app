const fs = require('fs');
const { execSync } = require('child_process');

const html = fs.readFileSync('index.html', 'utf8');
const scripts = [];
const regex = /<script.*?src="(.*?)".*?><\/script>/g;
let match;
while ((match = regex.exec(html)) !== null) {
  if (match[1] && !match[1].startsWith('http')) {
    scripts.push(match[1].split('?')[0]);
  }
}

console.log('Checking ' + scripts.length + ' local scripts...');
scripts.forEach(s => {
  try {
    execSync('node -c "' + s + '"', { stdio: 'pipe' });
  } catch (e) {
    console.log('SYNTAX ERROR IN: ' + s);
    console.log(e.stderr.toString());
  }
});
console.log('Check complete.');
