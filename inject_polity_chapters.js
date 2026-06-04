const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

const chapterToInsert = `,
      {
        id: "polity-advanced",
        title: "Advanced Polity Structures & Bodies",
        topics: [
          {
            id: "amendments-parts",
            title: "Constitutional Amendments, Parts & Schedules",
            notes: "Detailed notes expanded in notes_extra_4.js",
            formulas: "Schedules: TEARS OF OLD PM",
            mindmap: {
              root: "Amendments & Parts",
              branches: [
                {title: "Schedules", subnodes: ["12 Schedules", "Mnemonic"]},
                {title: "Parts", subnodes: ["Part I to XXII"]},
                {title: "Amendments", subnodes: ["42nd, 44th, 86th, 101st"]}
              ]
            }
          },
          {
            id: "important-articles",
            title: "High-Yield Special Articles Cheat Sheet",
            notes: "Detailed notes expanded in notes_extra_4.js",
            formulas: "Emergencies: 352, 356, 360",
            mindmap: {
              root: "Key Articles",
              branches: [
                {title: "Art 371", subnodes: ["Special states provisions"]},
                {title: "Emergency", subnodes: ["National, President's, Financial"]},
                {title: "Rajya Sabha", subnodes: ["Art 249, Art 312"]}
              ]
            }
          },
          {
            id: "positions-tenures",
            title: "Elections, Appointments & Terms of Office",
            notes: "Detailed notes expanded in notes_extra_4.js",
            formulas: "Ages: Pres (35), Gov (35), LS (25), RS (30)",
            mindmap: {
              root: "Positions",
              branches: [
                {title: "Ages", subnodes: ["Min Age matrix"]},
                {title: "Terms", subnodes: ["CAG 6/65, CEC 6/65"]},
                {title: "Oath/Resign", subnodes: ["Who administers / receives"]}
              ]
            }
          },
          {
            id: "constitutional-bodies",
            title: "Constitutional & Non-Constitutional Bodies",
            notes: "Detailed notes expanded in notes_extra_4.js",
            formulas: "Constitutional: Art 324 (EC), Art 280 (FC), Art 148 (CAG)",
            mindmap: {
              root: "Bodies",
              branches: [
                {title: "Constitutional", subnodes: ["EC, FC, CAG, UPSC, AG"]},
                {title: "Non-Constitutional", subnodes: ["NITI Aayog, NHRC, CVC, Lokpal"]}
              ]
            }
          }
        ]
      }`;

const oldPart = `                {
                  title: "Money Bills (110)",
                  subnodes: ["Lok Sabha only", "Certified by Speaker", "RS has max 14 days"]
                }
              ]
            }
          }
        ]
      },
    ]
  },
  history: {`;

if (code.includes(oldPart)) {
  const newPart = oldPart.replace(`      },\n    ]\n  },\n  history: {`, `      },${chapterToInsert}\n    ]\n  },\n  history: {`);
  code = code.replace(oldPart, newPart);
  fs.writeFileSync('app.js', code);
  console.log('Successfully injected advanced polity chapter into app.js');
} else {
  console.log('Failed to find polity/history boundary in app.js.');
}
