const fs = require('fs');

function findClosingBrace(src, openIdx) {
  let depth = 0;
  for (let i = openIdx; i < src.length; i++) {
    if (src[i] === '{') depth++;
    else if (src[i] === '}') { depth--; if (depth === 0) return i; }
  }
  return -1;
}

const mindmap = {
  root: 'Quadratic Equations',
  branches: [
    { title: 'Standard Form', subnodes: ['ax^2 + bx + c = 0', 'D = b^2 - 4ac', 'Sridharacharya formula'] },
    { title: 'Nature of Roots', subnodes: ['D > 0: Real & distinct', 'D = 0: Real & equal', 'D < 0: Complex roots'] },
    { title: 'Root Relations', subnodes: ['Sum = -b/a', 'Product = c/a', 'Eqn from roots: x^2-(S)x+P=0'] },
    { title: 'Graphs', subnodes: ['Parabola: a>0 opens up', 'Vertex at x=-b/2a', 'Min/Max = -D/4a'] },
  ],
};

let src = fs.readFileSync('data.js', 'utf8');

const topicIdx = src.indexOf('id: "quadratic-eq"');
const mmIdx = src.indexOf('mindmap:', topicIdx);
console.log('mindmap found at:', mmIdx, 'diff:', mmIdx - topicIdx);

let braceStart = mmIdx + 'mindmap:'.length;
while (braceStart < src.length && src[braceStart] !== '{') braceStart++;

const braceEnd = findClosingBrace(src, braceStart);
console.log('braceStart:', braceStart, 'braceEnd:', braceEnd);

const newMm = JSON.stringify(mindmap, null, 8)
  .split('\n')
  .map((line, i) => (i === 0 ? line : '            ' + line))
  .join('\n');

src = src.slice(0, braceStart) + newMm + src.slice(braceEnd + 1);
fs.writeFileSync('data.js', src, 'utf8');
console.log('Done. Patched quadratic-eq mindmap.');
