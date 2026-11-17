const fs = require('fs');

async function merge() {
  if (!fs.existsSync('pathfinder_taxonomy.json')) {
    console.error("Missing pathfinder_taxonomy.json");
    return;
  }
  
  const taxonomyStr = fs.readFileSync('pathfinder_taxonomy.json', 'utf8');
  let taxonomy;
  try {
    taxonomy = JSON.parse(taxonomyStr);
  } catch (e) {
    console.error("Failed to parse JSON:", e.message);
    return;
  }
  
  // Load data.js
  let dataJs = fs.readFileSync('data.js', 'utf8');
  dataJs = dataJs.replace(/(const|let|var)\s+(NOTES_DATABASE)/g, 'global.$2');
  eval(dataJs);
  
  const db = global.NOTES_DATABASE;
  
  let newTopicsAdded = 0;
  
  for (const subject of taxonomy) {
    const subjId = subject.id;
    if (!db[subjId]) {
      // Create new subject
      db[subjId] = { id: subjId, title: subject.title, chapters: [] };
    }
    
    for (const chapter of subject.chapters) {
      const chapId = chapter.id;
      let existingChap = db[subjId].chapters.find(c => c.id === chapId);
      
      if (!existingChap) {
        existingChap = { id: chapId, title: chapter.title, topics: [] };
        db[subjId].chapters.push(existingChap);
      }
      
      for (const topicStr of chapter.topics) {
        // topicStr is just a string from JSON
        const topicId = topicStr.toLowerCase().replace(/[^a-z0-9]/g, '-');
        const existingTopic = existingChap.topics.find(t => t.id === topicId || t.title.toLowerCase() === topicStr.toLowerCase());
        
        if (!existingTopic) {
          existingChap.topics.push({
            id: topicId,
            title: topicStr
          });
          newTopicsAdded++;
        }
      }
    }
  }
  
  // Write back to data.js
  const newDbStr = JSON.stringify(db, null, 2);
  const finalFile = `const NOTES_DATABASE = ${newDbStr};\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = { NOTES_DATABASE };\n}\n`;
  
  fs.writeFileSync('data.js', finalFile);
  console.log(`Successfully merged. Added ${newTopicsAdded} new topics from Pathfinder.`);
}

merge();
