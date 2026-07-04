const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data.js');
const code = fs.readFileSync(dataPath, 'utf8');

const lines = code.split('\n');
let insideTemplate = false;

const validPrefixes = [
  'const ', 'module.exports', 'import ', 'export ',
  '//', '/*', '*/', '*',
  '  {', '  }', '    {', '    }', '      {', '      }', '        {', '        }', '          {', '          }',
  '    id:', '    title:', '    topics:', '    notes:', '    formulas:', '    mindmap:',
  '      id:', '      title:', '      topics:', '      notes:', '      formulas:', '      mindmap:',
  '        id:', '        title:', '        topics:', '        notes:', '        formulas:', '        mindmap:',
  '          id:', '          title:', '          topics:', '          notes:', '          formulas:', '          mindmap:',
  '    ],', '    },', '      ],', '      },', '        ],', '        },', '          ],', '          },',
  '  ],', '  },', '];', '};',
  ']', '}', '},'
];

function isValidJSLine(line) {
  const trimmed = line.trim();
  if (trimmed === '') return true;
  
  // Check if it matches any valid prefix
  for (const prefix of validPrefixes) {
    if (trimmed.startsWith(prefix)) return true;
  }
  
  // Also check standard JS braces and commas
  if (/^[{}[\],;\s]+$/.test(trimmed)) return true;
  
  return false;
}

console.log('Scanning data.js...');
let errorCount = 0;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Process backticks on this line to track insideTemplate
  let charEscaped = false;
  for (let c = 0; c < line.length; c++) {
    if (line[c] === '\\') {
      charEscaped = !charEscaped;
    } else if (line[c] === '`' && !charEscaped) {
      insideTemplate = !insideTemplate;
    } else {
      charEscaped = false;
    }
  }
  
  // If we are NOT inside a template literal on this line (or after processing it),
  // check if it's a valid structural line of JS
  if (!insideTemplate && !isValidJSLine(line)) {
    errorCount++;
    console.log(`Line ${i + 1} is invalid raw text:`, JSON.stringify(line.trim()));
    if (errorCount > 30) {
      console.log('Too many errors, stopping scan.');
      break;
    }
  }
}
console.log(`Scan finished. Found ${errorCount} invalid raw text sections outside template strings.`);
