const fs = require('fs');
let appJs = fs.readFileSync('app.js', 'utf8');

const insertContent = `
            },
            {
              id: "syl-afcat-spatial",
              title: "Spatial & Non-Verbal Reasoning (AFCAT)",
              notes: "Detailed notes expanded in notes_extra_afcat.js",
              formulas: "Key Types: Dot Situation, Venn Diagrams, Embedded Figures, Pattern Completion.",
              mindmap: {
                root: "Non-Verbal Reasoning",
                branches: [
                  {title: "Visual Puzzles", subnodes: ["Dot Situation", "Embedded Figures", "Paper Folding"]},
                  {title: "Logic", subnodes: ["Venn Diagrams", "Syllogisms"]}
                ]
              }
`;

appJs = appJs.replace(/<\/ul>\s*\`\s*}/, `</ul>
              \`${insertContent}`);

// Also inject into the search array if needed, but it's optional
fs.writeFileSync('app.js', appJs);
console.log('Injected topic successfully.');
