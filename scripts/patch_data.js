const fs = require('fs');

const dataFile = 'data.js';
let content = fs.readFileSync(dataFile, 'utf8');

const targetStr = `"military-aptitude": {
    title: "Military GK & Aptitude",
    chapters: [`;

const insertion = `
      {
        id: "armed-forces-equipment-db",
        title: "Armed Forces Equipment Database",
        topics: [
          {
            id: "all-equipment",
            title: "Comprehensive Equipment Database",
            notes: \`<div id="armed-forces-equipment-container"></div>\`,
            formulas: "Interactive database loaded dynamically",
            mindmap: {
              root: "Armed Forces Equipment",
              branches: [
                {title: "Army", subnodes: ["Small Arms", "Artillery", "Vehicles"]},
                {title: "Air Force", subnodes: ["Fighters", "Transports", "Helicopters"]},
                {title: "Navy", subnodes: ["Submarines", "Destroyers", "Frigates"]}
              ]
            }
          }
        ]
      },`;

if (content.includes(targetStr) && !content.includes("armed-forces-equipment-db")) {
  content = content.replace(targetStr, targetStr + insertion);
  fs.writeFileSync(dataFile, content, 'utf8');
  console.log("Successfully patched data.js");
} else {
  console.log("Could not find target string or already patched.");
}
