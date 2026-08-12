const fs = require('fs');
let code = fs.readFileSync('wiki_links.js', 'utf8');
code = code.replace(/document\.addEventListener[\s\S]*\}\);/, '');
code = code.replace(/const style = document\.createElement[\s\S]*?document\.head\.appendChild\(style\);/, '');
global.window = {};
global.document = { addEventListener: () => {} };
eval(code);

CONCEPT_GLOSSARY = [];
GLOSSARY_MAP = {};
addGlossaryTerm('Primary Source', 'Primary Source');
addGlossaryTerm('sources', 'Sources');

CONCEPT_GLOSSARY.sort((a, b) => b.term.length - a.term.length);
const escapedTerms = CONCEPT_GLOSSARY.map(g => {
  GLOSSARY_MAP[g.term.toLowerCase()] = g.topic;
  return g.term.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
});
GLOSSARY_REGEX = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'gi');

console.log("GLOSSARY_REGEX:", GLOSSARY_REGEX);
console.log("Glossary map:", GLOSSARY_MAP);

let html = "<strong>Primary Sources</strong>, objective , sources .";
console.log("OUTPUT:", autoLinkConcepts(html));
