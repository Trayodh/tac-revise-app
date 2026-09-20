const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

const topicToInsert = `,
        {
          id: "history-kings-dynasties",
          title: "All Eras: Kings & Dynasties",
          notes: "Detailed notes expanded in notes_extra_4.js",
          formulas: "Dynasties Chronology\\nAncient -> Medieval -> Modern",
          mindmap: {
            root: "Kings",
            branches: [
              {title: "Ancient", subnodes: ["Mauryan", "Gupta"]},
              {title: "Medieval", subnodes: ["Sultanate", "Mughals"]},
              {title: "Modern", subnodes: ["British Viceroys"]}
            ]
          }
        }`;

// In app.js, find the end of "syl-history".
// "title": "Late Gandhi" is the last branch of syl-history's mindmap.
code = code.replace(/(title:\s*"Late Gandhi",\s*subnodes:\s*\[[^\]]+\]\s*\}\s*\]\s*\}\s*\})/g, match => match + topicToInsert);

fs.writeFileSync('app.js', code);
console.log('Successfully injected kings topic into app.js');
