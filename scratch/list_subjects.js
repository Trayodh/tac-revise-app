const fs = require('fs');
const dataSrc = fs.readFileSync('data.js', 'utf8');
const vm = require('vm');

try {
  // NOTES_DATABASE is declared with const in global scope of the code,
  // so runInNewContext will execute it, and then we evaluate NOTES_DATABASE.
  const db = vm.runInNewContext(dataSrc + "\nNOTES_DATABASE;");
  
  const structure = {};
  for (const [subjectId, subject] of Object.entries(db)) {
    structure[subjectId] = {
      title: subject.title,
      chapters: subject.chapters.map(c => ({
        id: c.id,
        title: c.title,
        topics: c.topics.map(t => ({ id: t.id, title: t.title }))
      }))
    };
  }
  fs.writeFileSync('scratch/subjects_structure.json', JSON.stringify(structure, null, 2));
  console.log("Success! Extracted structure.");
} catch (e) {
  console.error("Error:", e);
}
