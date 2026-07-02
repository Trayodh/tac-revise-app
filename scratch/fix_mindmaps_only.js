/**
 * fix_mindmaps_only.js
 * Second pass: patches only mindmaps for the 4 remaining topics.
 * Uses index-based brace matching.
 */
const fs = require('fs');

const MINDMAPS = {
  'quadratic-eq': {
    root: 'Quadratic Equations',
    branches: [
      { title: 'Standard Form', subnodes: ['ax^2 + bx + c = 0', 'Discriminant D = b^2-4ac', 'Sridharacharya formula'] },
      { title: 'Nature of Roots', subnodes: ['D > 0: Real & distinct', 'D = 0: Real & equal', 'D < 0: Complex roots'] },
      { title: 'Root Relations', subnodes: ['Sum = -b/a', 'Product = c/a', 'Form eqn from roots'] },
      { title: 'Graphs', subnodes: ['Parabola: a>0 opens up', 'Vertex at x = -b/2a', 'Max/Min = -D/4a'] },
    ],
  },
  'complex-numbers': {
    root: 'Complex Numbers',
    branches: [
      { title: 'Forms', subnodes: ['Algebraic: a + ib', 'Polar: r(cos+isin)', 'Euler: r·e^(iθ)'] },
      { title: 'Properties', subnodes: ['Modulus |z|=√(a²+b²)', 'Argument=tan⁻¹(b/a)', 'Conjugate z̄ = a-ib', 'z·z̄ = |z|²'] },
      { title: 'De Moivre', subnodes: ['(cosθ+isinθ)^n = cos(nθ)+isin(nθ)', 'Used for nth roots'] },
      { title: 'Cube Roots of Unity', subnodes: ['1, ω, ω²', '1 + ω + ω² = 0', 'ω³ = 1'] },
    ],
  },
  'straight-lines': {
    root: 'Straight Lines',
    branches: [
      { title: 'Forms of Line', subnodes: ['Slope-intercept: y=mx+c', 'Point-slope form', 'Intercept: x/a + y/b = 1', 'Normal form'] },
      { title: 'Slope Properties', subnodes: ['m = tan(θ)', 'Parallel: m1 = m2', 'Perp: m1·m2 = -1', 'Angle between lines'] },
      { title: 'Distances', subnodes: ['Point to line formula', 'Between parallel lines'] },
      { title: 'Special Points', subnodes: ['Centroid (avg vertices)', 'Circumcenter (perp bisectors)', 'Orthocenter (altitudes)', 'Incenter (angle bisectors)'] },
    ],
  },
  'central-tendency': {
    root: 'Central Tendency',
    branches: [
      { title: 'Mean', subnodes: ['AM = Σx / n', 'Weighted mean', 'Combined mean formula', 'Affected by outliers'] },
      { title: 'Median', subnodes: ['Middle value (sorted)', 'Grouped: L+[(N/2-CF)/f]*h', 'Not affected by extremes'] },
      { title: 'Mode', subnodes: ['Most frequent value', 'Grouped mode formula', 'Empirical: 3*Median - 2*Mean'] },
      { title: 'Dispersion', subnodes: ['Range = Max - Min', 'SD = sqrt(Variance)', 'AM >= GM >= HM'] },
    ],
  },
};

function findClosingBrace(src, openIdx) {
  let depth = 0;
  for (let i = openIdx; i < src.length; i++) {
    if (src[i] === '{') depth++;
    else if (src[i] === '}') {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

let src = fs.readFileSync('data.js', 'utf8');
let count = 0;

for (const [topicId, mindmap] of Object.entries(MINDMAPS)) {
  const needle1 = 'id: "' + topicId + '"';
  const needle2 = "id: '" + topicId + "'";
  let topicIdx = src.indexOf(needle1);
  if (topicIdx === -1) topicIdx = src.indexOf(needle2);
  if (topicIdx === -1) { console.log('NOT FOUND:', topicId); continue; }

  // Find mindmap: within 6000 chars of the topic id
  const mmKey = 'mindmap:';
  const mmIdx = src.indexOf(mmKey, topicIdx);
  if (mmIdx === -1 || mmIdx > topicIdx + 6000) { console.log('mindmap key not found:', topicId); continue; }

  // Find opening brace of the mindmap object
  let braceStart = mmIdx + mmKey.length;
  while (braceStart < src.length && src[braceStart] !== '{') braceStart++;
  if (src[braceStart] !== '{') { console.log('No opening brace:', topicId); continue; }

  const braceEnd = findClosingBrace(src, braceStart);
  if (braceEnd === -1) { console.log('No closing brace:', topicId); continue; }

  const oldMindmap = src.slice(braceStart, braceEnd + 1);
  const newMindmap = JSON.stringify(mindmap, null, 8)
    .split('\n')
    .map((line, i) => (i === 0 ? line : '            ' + line))
    .join('\n');

  src = src.slice(0, braceStart) + newMindmap + src.slice(braceEnd + 1);
  console.log('Patched mindmap for:', topicId, '| old length:', oldMindmap.length, '| new length:', newMindmap.length);
  count++;
}

fs.writeFileSync('data.js', src, 'utf8');
console.log('\nMindmap patches applied:', count);
