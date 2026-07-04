const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dataPath = path.join(__dirname, '..', 'data.js');

function fixTwoDynamic() {
  let content = fs.readFileSync(dataPath, 'utf8');
  let lines = content.split('\n');
  
  let fixed629 = false;
  let fixed741 = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes("Increasing: f'(x)>0") && (line.includes("u'v + uv'") || line.includes("\\`"))) {
      console.log(`Found line to fix (differentiation formulas) at index ${i}: "${line.trim()}"`);
      lines[i] = "            Increasing: f'(x)>0 | Decreasing: f'(x)<0`,\r";
      fixed629 = true;
    }
    if (line.includes('Area under curve') && (line.includes("King's Property") || line.includes("\\`"))) {
      console.log(`Found line to fix (integration formulas) at index ${i}: "${line.trim()}"`);
      lines[i] = "            Area under curve = |∫ₐᵇ f(x) dx|`,\r";
      fixed741 = true;
    }
  }
  
  if (fixed629 || fixed741) {
    fs.writeFileSync(dataPath, lines.join('\n'), 'utf8');
    console.log('Saved corrected dynamic fixes.');
  } else {
    console.log('No matching lines found to fix.');
  }
  
  // Verify compilation
  try {
    const finalCode = fs.readFileSync(dataPath, 'utf8');
    new vm.Script(finalCode);
    console.log('🎉 SUCCESS: data.js compiles perfectly!');
  } catch (err) {
    console.error('❌ Verification failed:', err.stack);
  }
}

fixTwoDynamic();
