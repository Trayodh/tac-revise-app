const { JSDOM } = require('jsdom');
const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
// Remove mermaid to avoid structuredClone error
html = html.replace(/<script src="https:\/\/cdn.jsdelivr.net\/npm\/mermaid.*><\/script>/g, '');

const dom = new JSDOM(html, { 
  runScripts: 'dangerously', 
  resources: 'usable',
  url: 'file:///' + __dirname.replace(/\\/g, '/') + '/'
});

dom.window.addEventListener('error', (e) => { 
  console.log('JSDOM ERROR:', e.error || e.message || e); 
});

setTimeout(() => {
  console.log('Done waiting 3 seconds for JSDOM.');
}, 3000);
