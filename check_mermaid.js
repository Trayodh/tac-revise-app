const fs = require('fs');
const files = ['ai_generated_notes.js', 'notes_data.js', 'notes_data_exam_focused.js', 'notes_data_upgraded.js'];
let found = false;
for (const file of files) {
  if (!fs.existsSync(file)) continue;
  const data = fs.readFileSync(file, 'utf8');
  
  // Search for any node definition with [ or ] or \( or \) inside brackets
  // specifically targeting common syntax errors in mermaid
  const m1 = data.match(/\w+\[\\[\"\']?\(.*?\)\\[\"\']?\]\)/g); // e.g. root[\"(Cells\"])
  const m2 = data.match(/\w+\(\\[\"\']?\[.*?\]\\[\"\']?\)/g); // e.g. root(\"[Cells]\")
  const m3 = data.match(/\w+\[.*?\].*?\)/g); // e.g. root[Cells]) 
  
  if (m1) { console.log(file, 'm1', m1); found = true; }
  if (m2) { console.log(file, 'm2', m2); found = true; }
  // Only match inside mermaid blocks to avoid false positives for m3
  const mermaidBlocks = data.match(/```mermaid[\s\S]*?```/g);
  if (mermaidBlocks) {
      for (const block of mermaidBlocks) {
          const badNodes = block.match(/\w+\[[^\]]*\]\)/g);
          const badNodes2 = block.match(/\w+\([^\)]*\)\]/g);
          const badNodes3 = block.match(/\w+\[\"?\([^\)]*\)\"?\]\)/g); // A[\"(B)\"])
          const badNodes4 = block.match(/\w+\(\[\"?.*\"?\]\)/g); // flowcharts: Cell(["text"]) is VALID flowchart, but maybe mindmap?
          if (badNodes && block.includes('mindmap')) { console.log(file, 'badNodes', badNodes); found = true; }
          if (badNodes2 && block.includes('mindmap')) { console.log(file, 'badNodes2', badNodes2); found = true; }
          if (badNodes3 && block.includes('mindmap')) { console.log(file, 'badNodes3', badNodes3); found = true; }
      }
  }
}
if (!found) console.log('No broken syntax found!');
