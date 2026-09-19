const fs = require('fs');
const files = ['ai_generated_notes.js', 'notes_data.js', 'notes_data_exam_focused.js', 'notes_data_upgraded.js'];
let poorlyFormattedCount = 0;

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  const data = fs.readFileSync(file, 'utf8');
  
  // A simple regex to find the notes content, since JSON.parse on the whole file might fail if it's exported as a JS variable.
  // We'll use a script to extract the array of objects if possible.
  try {
      let content = data.replace(/^(const|let|var)\s+\w+\s*=\s*/, '');
      content = content.replace(/;?\s*$/, '');
      const jsonData = JSON.parse(content);
      
      let items = [];
      if (Array.isArray(jsonData)) items = jsonData;
      else if (jsonData.subjects) items = jsonData.subjects.flatMap(s => s.chapters).flatMap(c => c.topics);
      else if (Array.isArray(jsonData[Object.keys(jsonData)[0]])) items = jsonData[Object.keys(jsonData)[0]].flatMap(c => c.topics);
      
      items.forEach(topic => {
          if (!topic || !topic.notes) return;
          const notes = topic.notes;
          const headerCount = (notes.match(/#+\s+/g) || []).length;
          const htmlHeaderCount = (notes.match(/<h[1-6][^>]*>/g) || []).length;
          const totalHeaders = headerCount + htmlHeaderCount;
          
          if (totalHeaders < 2 && notes.length > 500) {
              console.log(`${file} -> Poorly formatted topic: "${topic.title}" (Length: ${notes.length}, Headers: ${totalHeaders})`);
              poorlyFormattedCount++;
          }
      });
  } catch (e) {
      console.log(`Failed to parse ${file}: ${e.message}`);
      // Fallback to regex
      const matches = data.match(/"title":\s*"([^"]+)",[\s\S]*?"notes":\s*"([^"]+)"/g);
      if (matches) {
          matches.forEach(m => {
              const titleMatch = m.match(/"title":\s*"([^"]+)"/);
              const notesMatch = m.match(/"notes":\s*"([^"]+)"/);
              if (titleMatch && notesMatch) {
                  const title = titleMatch[1];
                  const notes = notesMatch[1];
                  const headerCount = (notes.match(/#+\s+/g) || []).length;
                  const htmlHeaderCount = (notes.match(/<h[1-6][^>]*>/g) || []).length;
                  const totalHeaders = headerCount + htmlHeaderCount;
                  if (totalHeaders < 2 && notes.length > 500) {
                      console.log(`Fallback ${file} -> Poorly formatted topic: "${title}" (Length: ${notes.length}, Headers: ${totalHeaders})`);
                      poorlyFormattedCount++;
                  }
              }
          });
      }
  }
}
console.log(`Total poorly formatted notes found: ${poorlyFormattedCount}`);
