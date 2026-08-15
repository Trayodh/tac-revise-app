const fs = require('fs');
let code = fs.readFileSync('wiki_links.js', 'utf8');
code = code.replace(/document\.addEventListener[^;]+;/g, '');
code = code.replace(/const style = document\.createElement[^]+?document\.head\.appendChild\(style\);/g, '');
code = code.replace(/document\.querySelectorAll/g, '(() => [])');
code = code.replace(/window\.[a-zA-Z0-9_]+/g, '{}');

global.window = {};
global.document = { 
  addEventListener: () => {},
  createElement: () => ({ style: {} }),
  head: { appendChild: () => {} },
  querySelectorAll: () => []
};

// Simple eval
try {
  eval(code);
} catch(e) {
  console.log("EVAL ERROR:", e.message);
}

if (typeof autoLinkConcepts === 'undefined') {
  console.log("autoLinkConcepts not found!");
  process.exit(1);
}

CONCEPT_GLOSSARY = [];
GLOSSARY_MAP = {};
addGlossaryTerm('Objective', 'Objective Concept');
addGlossaryTerm('Primary Source', 'Primary Source Concept');
addGlossaryTerm('Source', 'Source Concept');

CONCEPT_GLOSSARY.sort((a, b) => b.term.length - a.term.length);
const escapedTerms = CONCEPT_GLOSSARY.map(g => {
  GLOSSARY_MAP[g.term.toLowerCase()] = g.topic;
  return g.term.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
});
GLOSSARY_REGEX = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'gi');

console.log("GLOSSARY_REGEX:", GLOSSARY_REGEX);

const html1 = "<strong>Primary Sources</strong>, objective, sources.";
console.log("INPUT 1: ", html1);
console.log("OUTPUT 1:", autoLinkConcepts(html1));

const html2 = "Objective, unedited";
console.log("INPUT 2: ", html2);
console.log("OUTPUT 2:", autoLinkConcepts(html2));
