/**
 * add_extra_subjects_to_data.js
 * Adds History, Geography, Polity, Economics subjects to NOTES_DATABASE
 */
const fs = require('fs');

const PLACEHOLDER = 'Detailed notes expanded in EXPANDED_NOTES_DATA';
const DATA_FILE = 'data.js';

let data = fs.readFileSync(DATA_FILE, 'utf8');

// Find the exact closing of NOTES_DATABASE — look for "};\r\n\r\nconst CBT_EXAMS"
// or "}\n\nconst CBT_EXAMS"
const insertMarker = data.indexOf('const CBT_EXAMS_DATABASE');
if (insertMarker === -1) { console.error('Cannot find CBT_EXAMS_DATABASE!'); process.exit(1); }

// We'll insert BEFORE "const CBT_EXAMS_DATABASE" — the data up to that point
// should end with: "  ]\n};\n\n"
// Find the }; that closes NOTES_DATABASE (the one right before CBT_EXAMS_DATABASE)
const beforeCBT = data.substring(0, insertMarker);
const lastBrace = beforeCBT.lastIndexOf('};');
if (lastBrace === -1) { console.error('Cannot find closing }; !'); process.exit(1); }

const alreadyHasHistory = data.includes('"premium-history"');
const alreadyHasGeo = data.includes('"premium-geography"');
const alreadyHasPolity = data.includes('"premium-polity"');
const alreadyHasEco = data.includes('"premium-economics"');

let newSubjects = '';

if (!alreadyHasHistory) {
  newSubjects += `,
  "premium-history": {
    "title": "Indian History (CDS/NDA/AFCAT)",
    "chapters": [
      {
        "id": "premium-history-ancient",
        "title": "Ancient India",
        "topics": [
          { "id": "hist-indus-valley", "title": "Indus Valley Civilisation", "notes": "${PLACEHOLDER}" },
          { "id": "hist-vedic-age", "title": "Vedic Age", "notes": "${PLACEHOLDER}" },
          { "id": "hist-buddhism-jainism", "title": "Buddhism & Jainism", "notes": "${PLACEHOLDER}" },
          { "id": "hist-mauryan-empire", "title": "Mauryan Empire", "notes": "${PLACEHOLDER}" },
          { "id": "hist-gupta-age", "title": "Gupta Age — The Golden Age", "notes": "${PLACEHOLDER}" }
        ]
      },
      {
        "id": "premium-history-medieval",
        "title": "Medieval India",
        "topics": [
          { "id": "hist-delhi-sultanate", "title": "Delhi Sultanate", "notes": "${PLACEHOLDER}" },
          { "id": "hist-mughal-empire", "title": "Mughal Empire", "notes": "${PLACEHOLDER}" },
          { "id": "hist-maratha-empire", "title": "Maratha Empire", "notes": "${PLACEHOLDER}" }
        ]
      },
      {
        "id": "premium-history-modern",
        "title": "Modern India",
        "topics": [
          { "id": "hist-british-conquest", "title": "British Conquest of India", "notes": "${PLACEHOLDER}" },
          { "id": "hist-1857-revolt", "title": "1857 Revolt", "notes": "${PLACEHOLDER}" },
          { "id": "hist-freedom-struggle", "title": "Indian Freedom Struggle", "notes": "${PLACEHOLDER}" },
          { "id": "hist-independence", "title": "Independence & Partition", "notes": "${PLACEHOLDER}" }
        ]
      }
    ]
  }`;
  console.log('✅ Added: premium-history');
}

if (!alreadyHasGeo) {
  newSubjects += `,
  "premium-geography": {
    "title": "Indian Geography (CDS/NDA/AFCAT)",
    "chapters": [
      {
        "id": "premium-geo-india",
        "title": "Indian Geography",
        "topics": [
          { "id": "geo-physical-features", "title": "Physical Features of India", "notes": "${PLACEHOLDER}" },
          { "id": "geo-rivers-lakes", "title": "Rivers, Lakes & Water Bodies", "notes": "${PLACEHOLDER}" },
          { "id": "geo-climate-seasons", "title": "Climate & Seasons of India", "notes": "${PLACEHOLDER}" },
          { "id": "geo-soils-agriculture", "title": "Soils & Agriculture", "notes": "${PLACEHOLDER}" },
          { "id": "geo-forests-wildlife", "title": "Forests, Wildlife & National Parks", "notes": "${PLACEHOLDER}" },
          { "id": "geo-minerals-industries", "title": "Minerals, Energy & Industries", "notes": "${PLACEHOLDER}" }
        ]
      },
      {
        "id": "premium-geo-world",
        "title": "World Geography",
        "topics": [
          { "id": "geo-transport-trade", "title": "Transport, Trade & India Neighbours", "notes": "${PLACEHOLDER}" },
          { "id": "geo-world-physical", "title": "World Physical Geography", "notes": "${PLACEHOLDER}" },
          { "id": "geo-world-climate", "title": "World Climate Zones & Biomes", "notes": "${PLACEHOLDER}" }
        ]
      }
    ]
  }`;
  console.log('✅ Added: premium-geography');
}

if (!alreadyHasPolity) {
  newSubjects += `,
  "premium-polity": {
    "title": "Indian Polity & Governance (CDS)",
    "chapters": [
      {
        "id": "premium-polity-constitution",
        "title": "Constitution & Rights",
        "topics": [
          { "id": "pol-constitution-making", "title": "Making of Indian Constitution", "notes": "${PLACEHOLDER}" },
          { "id": "pol-fundamental-rights", "title": "Fundamental Rights", "notes": "${PLACEHOLDER}" },
          { "id": "pol-dpsp-duties", "title": "DPSPs & Fundamental Duties", "notes": "${PLACEHOLDER}" }
        ]
      },
      {
        "id": "premium-polity-governance",
        "title": "Governance & Institutions",
        "topics": [
          { "id": "pol-parliament", "title": "Parliament of India", "notes": "${PLACEHOLDER}" },
          { "id": "pol-president-pm", "title": "President, VP & Prime Minister", "notes": "${PLACEHOLDER}" },
          { "id": "pol-judiciary", "title": "Supreme Court & Judicial Review", "notes": "${PLACEHOLDER}" },
          { "id": "pol-federalism", "title": "Federalism & Emergency Provisions", "notes": "${PLACEHOLDER}" },
          { "id": "pol-elections-evm", "title": "Elections & Political Parties", "notes": "${PLACEHOLDER}" }
        ]
      }
    ]
  }`;
  console.log('✅ Added: premium-polity');
}

if (!alreadyHasEco) {
  newSubjects += `,
  "premium-economics": {
    "title": "Indian Economy & Economics (CDS)",
    "chapters": [
      {
        "id": "premium-eco-main",
        "title": "Indian Economy",
        "topics": [
          { "id": "eco-gdp-national-income", "title": "GDP & National Income", "notes": "${PLACEHOLDER}" },
          { "id": "eco-banking-rbi", "title": "Banking System & RBI", "notes": "${PLACEHOLDER}" },
          { "id": "eco-budget-fiscal", "title": "Union Budget & Fiscal Policy", "notes": "${PLACEHOLDER}" },
          { "id": "eco-trade-forex", "title": "International Trade & Forex", "notes": "${PLACEHOLDER}" },
          { "id": "eco-govt-schemes", "title": "Government Schemes & Policies", "notes": "${PLACEHOLDER}" }
        ]
      }
    ]
  }`;
  console.log('✅ Added: premium-economics');
}

if (newSubjects) {
  // Insert newSubjects just before the }; that closes NOTES_DATABASE
  data = data.substring(0, lastBrace) + newSubjects + '\n' + data.substring(lastBrace);
  fs.writeFileSync(DATA_FILE, data, 'utf8');
  console.log(`\n✅ data.js updated: ${Math.round(fs.statSync(DATA_FILE).size/1024)}KB`);
} else {
  console.log('\n✅ All subjects already in data.js — nothing to add.');
}
