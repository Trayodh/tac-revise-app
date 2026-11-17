const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

// We want to replace the first "    ]," after "Dispersion" with "    ,"
const searchPart1 = `                  title: "Dispersion",
                  subnodes: ["Variance (σ²)", "Standard Deviation (σ)", "Coeff of Variation (CV)"]
                }
              ]
            }
          }
        ]
      }
    ],`;

const replacePart1 = `                  title: "Dispersion",
                  subnodes: ["Variance (σ²)", "Standard Deviation (σ)", "Coeff of Variation (CV)"]
                }
              ]
            }
          }
        ]
      }
    ,`;

// We also want to replace the transition to "english:" to close the chapters array
const searchPart2 = `                {title: "Time & Work", subnodes: ["Efficiency", "Pipes & Cisterns"]}
              ]
            }
          }
        ]
      }
  },

  english: {`;

const replacePart2 = `                {title: "Time & Work", subnodes: ["Efficiency", "Pipes & Cisterns"]}
              ]
            }
          }
        ]
      }
    ]
  },

  english: {`;

if (code.includes(searchPart1) && code.includes(searchPart2)) {
  code = code.replace(searchPart1, replacePart1);
  code = code.replace(searchPart2, replacePart2);
  fs.writeFileSync('app.js', code);
  console.log('Successfully fixed mathematics chapters array syntax!');
} else {
  console.log('Failed to match search patterns for fixing syntax.');
}
