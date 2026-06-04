const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

const diTopic = `,
          {
            id: "data-interpretation",
            title: "Data Interpretation: Tables, Bar & Pie Charts",
            notes: "Detailed notes expanded in notes_extra_4.js",
            formulas: "DI Formulas",
            mindmap: {
              root: "DI",
              branches: [
                {title: "Charts", subnodes: ["Bar Charts", "Pie Charts", "Line Graphs"]},
                {title: "Calculations", subnodes: ["Percentage change", "Averages", "Ratios"]}
              ]
            }
          }`;

// The transition from statistics-prob to calculus:
const targetTransition = `          }
        ]
      },
      {
        id: "calculus",`;

if (code.includes(targetTransition)) {
  const newTransition = `          }${diTopic}
        ]
      },
      {
        id: "calculus",`;
  code = code.replace(targetTransition, newTransition);
  fs.writeFileSync('app.js', code);
  console.log('Successfully injected data-interpretation topic under statistics-prob');
} else {
  console.log('Failed to find statistics-prob/calculus transition.');
}
