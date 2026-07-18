const fs = require('fs');
const path = require('path');

const mappings = [
  { file: 'IMG-20260717-WA0010.jpg', newName: 'glacial-landforms.jpg', targetKey: 'geomorphology-rocks' },
  { file: 'IMG-20260717-WA0011.jpg', newName: 'earth-atmosphere.jpg', targetKey: 'earth-atmosphere' },
  { file: 'IMG-20260717-WA0012.jpg', newName: 'types-of-rainfall.jpg', targetKey: 'climatology-clouds' },
  { file: 'IMG-20260717-WA0013.jpg', newName: 'earth-interior.jpg', targetKey: 'geomorphology-rocks' },
  { file: 'IMG-20260717-WA0014.jpg', newName: 'atmospheric-circulation.jpg', targetKey: 'climatology-clouds' },
  { file: 'IMG-20260717-WA0015.jpg', newName: 'volcanic-systems.jpg', targetKey: 'geomorphology-rocks' },
  { file: 'IMG-20260717-WA0016.jpg', newName: 'mountains-formation.jpg', targetKey: 'world-geography-mountains' }
];

const tempDir = path.join(__dirname, '../temp_images');
const imagesDir = path.join(__dirname, '../images');
const notesFile = path.join(__dirname, '../notes_extra_geography.js');

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir);
}

let notesContent = fs.readFileSync(notesFile, 'utf8');

for (const map of mappings) {
  const oldPath = path.join(tempDir, map.file);
  const newPath = path.join(imagesDir, map.newName);
  
  if (fs.existsSync(oldPath)) {
    fs.copyFileSync(oldPath, newPath);
    console.log(`Copied ${map.file} to images/${map.newName}`);
    
    // Regex to match the EXPANDED_NOTES_DATA key and find the first <h2> tag inside it
    // We will do a simple string manipulation for safety
    const searchString = `EXPANDED_NOTES_DATA["${map.targetKey}"] = \``;
    const startIndex = notesContent.indexOf(searchString);
    if (startIndex !== -1) {
      // Find the first </h2> after the start index
      const h2Index = notesContent.indexOf('</h2>', startIndex);
      if (h2Index !== -1) {
        const insertionPoint = h2Index + 5; // right after </h2>
        const imgTag = `\n  <img src="images/${map.newName}" style="width:100%; border-radius: 8px; margin: 15px 0; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" alt="${map.newName}">`;
        
        notesContent = notesContent.substring(0, insertionPoint) + imgTag + notesContent.substring(insertionPoint);
        console.log(`Added image tag for ${map.newName} to ${map.targetKey}`);
      } else {
        console.log(`Could not find </h2> in ${map.targetKey}`);
      }
    } else {
      console.log(`Could not find key ${map.targetKey} in notes_extra_geography.js`);
    }
  } else {
    console.log(`File not found: ${oldPath}`);
  }
}

fs.writeFileSync(notesFile, notesContent);
console.log('Successfully updated notes_extra_geography.js');
