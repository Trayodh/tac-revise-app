const fs = require('fs');

let s = fs.readFileSync('data.js', 'utf8');

// Replace the specific question object with nothing
const questionToFind = `"question": "A person A sells a table costing \` 2000 to a person B and earns a profit of 6%. The person B sells it to another person C at a loss of 5%. At what price did B sell the table?",`;

const qIdx = s.indexOf(questionToFind);
if (qIdx === -1) {
    console.error("Question not found!");
    process.exit(1);
}

// Find the start of the object
const startIdx = s.lastIndexOf('{', qIdx);
// Find the end of the object
const endIdx = s.indexOf('}', qIdx) + 1;

// Also remove the trailing comma if it exists
let trailingEnd = endIdx;
while (s[trailingEnd] === ' ' || s[trailingEnd] === '\n' || s[trailingEnd] === '\r') {
    trailingEnd++;
}
if (s[trailingEnd] === ',') {
    trailingEnd++;
}

const finalString = s.substring(0, startIdx) + s.substring(trailingEnd);

fs.writeFileSync('data.js', finalString, 'utf8');
console.log("Successfully removed the math question from data.js.");
