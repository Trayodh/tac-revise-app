
/**
 * fix_empty_fm.js
 * Fixes the 5 remaining topics with thin/empty formulas or mindmaps.
 * Uses pure string operations (indexOf + splice) to avoid regex backtick issues.
 */
const fs = require('fs');

const PATCHES = {
  'earth-atmosphere': {
    formulas: [
      '# Earths Structure',
      'Radius: ~6371 km | Circumference: ~40075 km',
      'Layers: Crust > Mantle > Outer Core > Inner Core',
      'Crust: Oceanic (5-10 km) | Continental (30-70 km)',
      '# Atmosphere Layers',
      'Troposphere: 0-12 km (weather, lapse rate 6.5°C per km)',
      'Stratosphere: 12-50 km (ozone layer at 20-35 km)',
      'Mesosphere: 50-80 km (meteors burn here)',
      'Thermosphere: 80-700 km (Aurora Borealis, ISS)',
      'Exosphere: 700 km+ (fades into space)',
      '# Composition of Atmosphere',
      'Nitrogen: 78% | Oxygen: 21% | Argon: 0.9% | CO2: 0.04%',
      '# Key Numbers',
      'Standard Lapse Rate = 6.5°C per 1000 m',
      'Ozone Layer: 20-35 km (Stratosphere)',
      'Equator: 0° | Tropics: 23.5°N/S | Arctic Circle: 66.5°N',
    ].join('\n'),
    mindmap: {
      root: 'Earth & Atmosphere',
      branches: [
        {
          title: 'Earth Layers',
          subnodes: ['Crust (5-70 km)', 'Mantle (silicate)', 'Outer Core (liquid Fe)', 'Inner Core (solid Fe)'],
        },
        {
          title: 'Atmosphere Layers',
          subnodes: ['Troposphere (0-12 km)', 'Stratosphere (12-50 km)', 'Mesosphere (50-80 km)', 'Thermosphere (80-700 km)'],
        },
        {
          title: 'Composition',
          subnodes: ['N2: 78%', 'O2: 21%', 'Ar: 0.9%', 'CO2: 0.04%'],
        },
        {
          title: 'Key Boundaries',
          subnodes: ['Tropopause (12 km)', 'Stratopause (50 km)', 'Mesopause (80 km)', 'Ozone at 20-35 km'],
        },
      ],
    },
  },

  'quadratic-eq': {
    formulas: [
      '# Standard Form',
      'ax^2 + bx + c = 0 where a ≠ 0',
      '# Roots (Sridharacharya Formula)',
      'x = [-b ± √(b² - 4ac)] / 2a',
      '# Discriminant D = b² - 4ac',
      'D > 0 : Two real, distinct roots',
      'D = 0 : Two real, equal (repeated) roots',
      'D < 0 : Two complex conjugate roots',
      '# Sum & Product of Roots (α, β)',
      'Sum α + β = -b/a',
      'Product αβ = c/a',
      'Equation from roots: x² - (α+β)x + αβ = 0',
      '# Vertex of Parabola',
      'x-coordinate of vertex = -b / 2a',
      'Min value (a > 0) = c - b²/4a = -D/4a',
    ].join('\n'),
    mindmap: {
      root: 'Quadratic Equations',
      branches: [
        {
          title: 'Standard Form',
          subnodes: ['ax² + bx + c = 0', 'Discriminant D = b²-4ac', 'Sridharacharya formula'],
        },
        {
          title: 'Nature of Roots',
          subnodes: ['D > 0: Real & distinct', 'D = 0: Real & equal', 'D < 0: Complex roots'],
        },
        {
          title: 'Root Relations',
          subnodes: ['Sum = -b/a', 'Product = c/a', 'Form eqn from roots'],
        },
        {
          title: 'Graphs',
          subnodes: ['Parabola: a>0 opens up', 'Vertex at x = -b/2a', 'Max/Min = -D/4a'],
        },
      ],
    },
  },

  'complex-numbers': {
    formulas: [
      '# Algebraic Form',
      'z = a + ib, where i² = -1, i³ = -i, i⁴ = 1',
      '# Modulus & Argument',
      '|z| = √(a² + b²)',
      'arg(z) = θ = tan⁻¹(b/a)',
      '# Polar & Euler Form',
      'z = r(cosθ + i sinθ)  [Polar]',
      'z = r·e^(iθ)  [Euler]',
      '# Conjugate',
      'Conjugate of z = a+ib is z̄ = a - ib',
      'z · z̄ = |z|²',
      '# De Moivre Theorem',
      '(cosθ + i sinθ)^n = cos(nθ) + i sin(nθ)',
      '# Cube Roots of Unity',
      '1, ω, ω²  where ω = (-1+i√3)/2',
      '1 + ω + ω² = 0   |   ω³ = 1',
    ].join('\n'),
    mindmap: {
      root: 'Complex Numbers',
      branches: [
        {
          title: 'Forms',
          subnodes: ['Algebraic: a + ib', 'Polar: r(cosθ + isinθ)', 'Euler: r·e^(iθ)'],
        },
        {
          title: 'Properties',
          subnodes: ['Modulus |z| = √(a²+b²)', 'Argument = tan⁻¹(b/a)', 'Conjugate: z̄ = a - ib', 'z·z̄ = |z|²'],
        },
        {
          title: 'De Moivre',
          subnodes: ['(cosθ+isinθ)^n = cos(nθ)+isin(nθ)', 'Used for nth roots'],
        },
        {
          title: 'Cube Roots of Unity',
          subnodes: ['1, ω, ω²', '1 + ω + ω² = 0', 'ω³ = 1'],
        },
      ],
    },
  },

  'straight-lines': {
    formulas: [
      '# Forms of Equation of Line',
      'Slope-Intercept: y = mx + c',
      'Point-Slope: y - y1 = m(x - x1)',
      'Two-Point: (y-y1)/(y2-y1) = (x-x1)/(x2-x1)',
      'Intercept Form: x/a + y/b = 1',
      '# Slope',
      'm = (y2 - y1)/(x2 - x1) = tan θ',
      '# Angle Between Two Lines',
      'tan θ = |m1 - m2| / |1 + m1·m2|',
      'Parallel: m1 = m2',
      'Perpendicular: m1 · m2 = -1',
      '# Distance Formulas',
      'Distance from point (x1,y1) to line ax+by+c=0:',
      'd = |ax1 + by1 + c| / √(a² + b²)',
      'Distance between parallel lines ax+by+c1=0 and ax+by+c2=0:',
      'd = |c1 - c2| / √(a² + b²)',
    ].join('\n'),
    mindmap: {
      root: 'Straight Lines',
      branches: [
        {
          title: 'Forms of Line',
          subnodes: ['Slope-intercept: y=mx+c', 'Point-slope form', 'Intercept: x/a + y/b = 1', 'Normal/Two-point form'],
        },
        {
          title: 'Slope Properties',
          subnodes: ['m = tanθ', 'Parallel: m1 = m2', 'Perp: m1×m2 = -1', 'Angle between lines'],
        },
        {
          title: 'Distances',
          subnodes: ['Point to line formula', 'Between parallel lines', 'Foot of perpendicular'],
        },
        {
          title: 'Special Points',
          subnodes: ['Centroid (avg of vertices)', 'Circumcenter (perp bisectors)', 'Orthocenter (altitudes)', 'Incenter (angle bisectors)'],
        },
      ],
    },
  },

  'central-tendency': {
    formulas: [
      '# Mean (Arithmetic Mean)',
      'AM = Sum of observations / n',
      'For grouped data: AM = Σ(f·x) / Σf',
      'Combined Mean = (n1·x̄1 + n2·x̄2) / (n1 + n2)',
      '# Median',
      'Middle value after sorting.',
      'For grouped: Median = L + [(N/2 - CF)/f] × h',
      '# Mode',
      'Most frequently occurring value.',
      'For grouped: Mode = L + [(f1 - f0)/(2f1 - f0 - f2)] × h',
      '# Empirical Relation',
      'Mode = 3 × Median - 2 × Mean',
      '# Other Means',
      'GM = (x1 × x2 × ... × xn)^(1/n)',
      'HM = n / (1/x1 + 1/x2 + ... + 1/xn)',
      'Inequality: AM ≥ GM ≥ HM',
      '# Dispersion',
      'Range = Max - Min',
      'Variance = Σ(x - x̄)² / n',
      'Standard Deviation SD = √Variance',
    ].join('\n'),
    mindmap: {
      root: 'Central Tendency',
      branches: [
        {
          title: 'Mean',
          subnodes: ['AM = Σx / n', 'Weighted mean', 'Combined mean formula', 'Affected by outliers'],
        },
        {
          title: 'Median',
          subnodes: ['Middle value (sorted)', 'Grouped: L + [(N/2-CF)/f]×h', 'Not affected by extremes'],
        },
        {
          title: 'Mode',
          subnodes: ['Most frequent value', 'Grouped mode formula', 'Empirical: 3M - 2A'],
        },
        {
          title: 'Dispersion',
          subnodes: ['Range = Max - Min', 'SD = √Variance', 'AM ≥ GM ≥ HM'],
        },
      ],
    },
  },
};

// ─── Helper: find closing brace of an object starting at `openIdx` ───────────
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

// ─── Helper: find closing backtick of a template literal starting right after the opening backtick ─
function findClosingBacktick(src, startIdx) {
  for (let i = startIdx; i < src.length; i++) {
    // Skip escaped backtick
    if (src[i] === '\\' && src[i + 1] === '`') { i++; continue; }
    if (src[i] === '`') return i;
  }
  return -1;
}

// ─── Helper: find closing quote ──────────────────────────────────────────────
function findClosingQuote(src, startIdx, quoteChar) {
  for (let i = startIdx; i < src.length; i++) {
    if (src[i] === '\\') { i++; continue; }
    if (src[i] === quoteChar) return i;
  }
  return -1;
}

let src = fs.readFileSync('data.js', 'utf8');
let patchCount = 0;

for (const [topicId, patch] of Object.entries(PATCHES)) {
  const needle1 = 'id: "' + topicId + '"';
  const needle2 = "id: '" + topicId + "'";
  let topicIdx = src.indexOf(needle1);
  if (topicIdx === -1) topicIdx = src.indexOf(needle2);
  if (topicIdx === -1) {
    console.log('SKIP - not found:', topicId);
    continue;
  }

  // Search within next 6000 chars for formulas / mindmap
  const searchEnd = topicIdx + 6000;

  // ── Patch formulas ─────────────────────────────────────────────────────────
  if (patch.formulas) {
    const formKey = 'formulas:';
    const fIdx = src.indexOf(formKey, topicIdx);
    if (fIdx !== -1 && fIdx < searchEnd) {
      // Skip whitespace after 'formulas:'
      let vStart = fIdx + formKey.length;
      while (vStart < src.length && (src[vStart] === ' ' || src[vStart] === '\t')) vStart++;
      const openChar = src[vStart];
      let vEnd = -1;
      if (openChar === '`') {
        vEnd = findClosingBacktick(src, vStart + 1);
        if (vEnd !== -1) {
          // Replace the value (including surrounding backticks)
          src = src.slice(0, vStart) + '`' + patch.formulas + '`' + src.slice(vEnd + 1);
          console.log('Patched formulas for:', topicId);
          patchCount++;
        }
      } else if (openChar === '"' || openChar === "'") {
        vEnd = findClosingQuote(src, vStart + 1, openChar);
        if (vEnd !== -1) {
          src = src.slice(0, vStart) + '`' + patch.formulas + '`' + src.slice(vEnd + 1);
          console.log('Patched formulas for:', topicId);
          patchCount++;
        }
      }
    }
  }

  // ── Patch mindmap ──────────────────────────────────────────────────────────
  if (patch.mindmap) {
    // After formulas patch the indices shifted; search again
    let topicIdx2 = src.indexOf(needle1);
    if (topicIdx2 === -1) topicIdx2 = src.indexOf(needle2);
    if (topicIdx2 === -1) { console.log('Re-find failed for mindmap:', topicId); continue; }

    const mmKey = 'mindmap:';
    const mmIdx = src.indexOf(mmKey, topicIdx2);
    if (mmIdx !== -1 && mmIdx < topicIdx2 + 6000) {
      // Find the opening brace
      let braceStart = mmIdx + mmKey.length;
      while (braceStart < src.length && src[braceStart] !== '{') braceStart++;
      if (src[braceStart] === '{') {
        const braceEnd = findClosingBrace(src, braceStart);
        if (braceEnd !== -1) {
          const newMmObj = JSON.stringify(patch.mindmap, null, 6)
            .split('\n')
            .map((line, i) => (i === 0 ? line : '              ' + line))
            .join('\n');
          src = src.slice(0, braceStart) + newMmObj + src.slice(braceEnd + 1);
          console.log('Patched mindmap for:', topicId);
          patchCount++;
        }
      }
    }
  }
}

fs.writeFileSync('data.js', src, 'utf8');
console.log('\nTotal patches applied:', patchCount, '/ expected:', Object.keys(PATCHES).length * 2);
