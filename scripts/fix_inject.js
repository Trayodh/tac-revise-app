const fs = require('fs');
let text = fs.readFileSync('inject_ai_notes.js', 'utf8');

const replacements = {
  "'ancient-india':": "'ancient-india-core-and-mcqs':",
  "'medieval-india':": "'medieval-india-sultanate-and-mcqs':",
  "'modern-india':": "'modern-india-national-movement-and-mcqs':",
  "'world-history':": "'world-history-and-revision-mcqs':",
  "'world-geography-cosmology-and-mcqs':": "'world-geography-cosmology':",
  "'indian-geography-resources-and-mcqs':": "'indian-geography-resources':",
  "'environmental-geography-and-mcqs':": "'environmental-geography':",
  "'constitutional':": "'constitutional-framework-rights-and-mcqs':",
  "'union-executive':": "'union-executive-judiciary-and-mcqs':",
  "'state-governance':": "'state-local-governance-and-master-mcqs':",
  "'macroeconomics':": "'macroeconomics-five-year-plans-and-mcqs':",
  "'banking':": "'banking-inflation-public-finance-and-mcqs':",
  "'sectors':": "'economic-sectors-and-master-revision-mcqs':"
};

for (const [oldKey, newKey] of Object.entries(replacements)) {
  text = text.replace(oldKey, newKey);
}

fs.writeFileSync('inject_ai_notes.js', text, 'utf8');
console.log('Fixed inject_ai_notes.js keys.');
