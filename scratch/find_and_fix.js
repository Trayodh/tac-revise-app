const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data.js');
let content = fs.readFileSync(dataPath, 'utf8');

// Find startMarker: "D < 0 : Two complex conjugate roots"
const startMarker = 'D < 0 : Two complex conjugate roots';
const startIdx = content.indexOf(startMarker);

if (startIdx !== -1) {
  console.log('Found startMarker index:', startIdx);
  
  // Find where the next template string ends (the backtick following "Max value (if a < 0) =")
  const regex = /Max value\s*\(if\s*a\s*<\s*0\)\s*=\s*-[^\n`]+`/g;
  regex.lastIndex = startIdx;
  const match = regex.exec(content);
  
  if (match) {
    const endIdx = match.index + match[0].length;
    console.log('Found matching end pattern:', match[0], 'at endIdx:', endIdx);
    
    const formulasStart = content.lastIndexOf('formulas: `# Standard Form', startIdx);
    if (formulasStart !== -1) {
      const replacementStr = `            formulas: \`# Standard Form
ax^2 + bx + c = 0 where a ≠ 0
# Roots (Sridharacharya Formula)
x = [-b ± √(b² - 4ac)] / 2a
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

      const newContent = content.substring(0, formulasStart) + replacementStr + content.substring(endIdx);
      fs.writeFileSync(dataPath, newContent, 'utf8');
      console.log('Successfully wrote spliced data.js using Regex!');
    } else {
      console.log('formulasStart not found.');
    }
  } else {
    console.log('Regex match for end marker failed.');
  }
} else {
  console.log('startMarker not found.');
}
