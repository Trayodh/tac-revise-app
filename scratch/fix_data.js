const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data.js');
console.log('Reading data.js from:', dataPath);
let content = fs.readFileSync(dataPath, 'utf8');

const targetStr = `            formulas: \`# Standard Form
ax^2 + bx + c = 0 where a ≠ 0
# Roots (Sridharacharya Formula)
x = [-b ± \\√(b² - 4ac)] / 2a
# Discriminant D = b² - 4ac
D > 0 : Two real, distinct roots
D = 0 : Two real, equal (repeated) roots
D < 0 : Two complex conjugate roots
# Sum & Product of Roots (α, β)
Sum α + β = -b/a
Product αβ = c/a
Equation from roots: x² - (α+β)x + αβ = 0
# Vertex of Parabola
x-coordinate of vertex = -b / 2a
Min value (a > 0) = c - b²/4a = -D/4a\`
ax² + bx + c = 0 (a ≠ 0)
# Roots & Discriminant
Roots: x = [-b ± \\√(b² - 4ac)] / 2a
Discriminant (Δ) = b² - 4ac
If Δ > 0: Real & distinct roots
If Δ = 0: Real & equal roots
If Δ < 0: Complex conjugate roots
# Sum & Product of Roots
If roots are α, β:
Sum (α + β) = -b/a
Product (αβ) = c/a
Equation from roots: x² - (α+β)x + αβ = 0
# Max/Min Value
Occurs at x = -b/2a
Min value (if a > 0) = -Δ/4a
Max value (if a < 0) = -Δ/4a\``;

const replacementStr = `            formulas: \`# Standard Form
ax^2 + bx + c = 0 where a ≠ 0
# Roots (Sridharacharya Formula)
x = [-b ± \\√(b² - 4ac)] / 2a
# Discriminant D = b² - 4ac
D > 0 : Two real, distinct roots
D = 0 : Two real, equal (repeated) roots
D < 0 : Two complex conjugate roots
# Sum & Product of Roots (α, β)
Sum α + β = -b/a
Product αβ = c/a
Equation from roots: x² - (α+β)x + αβ = 0
# Vertex of Parabola
x-coordinate of vertex = -b / 2a
Min value (a > 0) = c - b²/4a = -D/4a\``;

if (content.includes('ax² + bx + c = 0 (a ≠ 0)')) {
  console.log('Found target string pattern.');
  // Let's do a simple split and replace or exact index replacement to be 100% precise
  const idx = content.indexOf('ax² + bx + c = 0 (a ≠ 0)');
  if (idx !== -1) {
    // Find the formulas line before it
    const startIdx = content.lastIndexOf('formulas: `# Standard Form', idx);
    const endIdx = content.indexOf('Max value (if a < 0) = -Δ/4a`', idx) + 'Max value (if a < 0) = -Δ/4a`'.length;
    if (startIdx !== -1 && endIdx !== -1) {
      console.log('Identified exact bounds of duplicate code block.');
      const before = content.substring(0, startIdx);
      const after = content.substring(endIdx);
      const newContent = before + replacementStr + after;
      fs.writeFileSync(dataPath, newContent, 'utf8');
      console.log('Successfully wrote repaired data.js!');
    } else {
      console.log('Bounds check failed.');
    }
  }
} else {
  console.log('Pattern not found.');
}
