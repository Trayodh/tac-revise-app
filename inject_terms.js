const fs = require('fs');

const terms = JSON.parse(fs.readFileSync('extracted_wiki_terms.json', 'utf8'));

// Filter out some garbage terms
const cleanTerms = terms.filter(t => 
  t.length > 2 && 
  !/^[0-9]+$/.test(t) &&
  !t.includes('?')
).map(t => t.replace(/"/g, '\\"'));

let wikiJs = fs.readFileSync('wiki_links.js', 'utf8');

const regex = /const extraTerms = \[\s*([\s\S]*?)\s*\];/;
const match = wikiJs.match(regex);

if (match) {
  // We keep the original terms as well
  let existing = match[1];
  
  const newArrayStr = `const extraTerms = [\n${existing},\n  "${cleanTerms.join('",\n  "')}"\n];`;
  
  wikiJs = wikiJs.replace(regex, newArrayStr);
  fs.writeFileSync('wiki_links.js', wikiJs, 'utf8');
  console.log(`Injected ${cleanTerms.length} terms into wiki_links.js`);
} else {
  console.log("Could not find extraTerms in wiki_links.js");
}
