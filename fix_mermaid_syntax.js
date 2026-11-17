const fs = require('fs');

const files = ['ai_generated_notes.js', 'notes_data.js', 'notes_data_exam_focused.js', 'notes_data_upgraded.js'];

let totalFixed = 0;

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Fix Mitosis vs Meiosis (TD)
  content = content.replace(/Cell\[\\"\([^)]+\)\\"\]\)/g, 'Cell(("Parent Cell 2n"))');
  // I will just replace the exact problematic strings
  content = content.replace(/root\[\\"\([^"]+\)\\"\]\)/g, 'root(("Cells"))');
  content = content.replace(/Plant\[\\"\([^"]+\)\\"\]\)/g, 'Plant(("Plant Cell"))');
  content = content.replace(/Animal\[\\"\([^"]+\)\\"\]\)/g, 'Animal(("Animal Cell"))');
  content = content.replace(/Cell\[\\"\([^"]+\)\\"\]\)/g, 'Cell(("Eukaryotic Cell"))');
  content = content.replace(/Mitosis\[\\"\([^"]+\)\\"\]\)/g, 'Mitosis(("Mitosis"))');
  content = content.replace(/Meiosis\[\\"\([^"]+\)\\"\]\)/g, 'Meiosis(("Meiosis"))');
  content = content.replace(/DNA\[\\"\([^"]+\)\\"\]\)/g, 'DNA(("DNA"))');

  // Specific literal string replacements based on the screenshot
  content = content.replace(/root\[\\"\(Cells\\"\]\)/g, 'root(("Cells"))');
  content = content.replace(/Plant\[\\"\(Plant Cell\\"\]\)/g, 'Plant(("Plant Cell"))');
  content = content.replace(/Animal\[\\"\(Animal Cell\\"\]\)/g, 'Animal(("Animal Cell"))');
  content = content.replace(/Cell\[\\"\(Eukaryotic Cell\\"\]\)/g, 'Cell(("Eukaryotic Cell"))');
  content = content.replace(/Mitosis\[\\"\(Mitosis\\"\]\)/g, 'Mitosis(("Mitosis"))');
  content = content.replace(/Meiosis\[\\"\(Meiosis\\"\]\)/g, 'Meiosis(("Meiosis"))');
  content = content.replace(/DNA\[\\"\(DNA\\"\]\)/g, 'DNA(("DNA"))');

  if (content !== original) {
     console.log('Fixed syntax in ' + file);
     fs.writeFileSync(file, content);
     totalFixed++;
  }
}
console.log('Total files fixed: ' + totalFixed);
