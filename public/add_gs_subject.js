/**
 * add_gs_subject.js
 * Inserts a new 'general-science' subject block into NOTES_DATABASE in data.js
 * at line 9004 (before the closing });
 */
const fs = require('fs');

const GS_SUBJECT = `,
  "general-science": {
    "title": "General Science (CDS/NDA/AFCAT)",
    "chapters": [
      {
        "id": "gs-biology",
        "title": "Biology — Human Body & Life Sciences",
        "topics": [
          { "id": "gs-cell-biology", "title": "Cell Biology — Structure, Organelles & Division" },
          { "id": "gs-human-nutrition", "title": "Human Nutrition — Vitamins, Minerals & Deficiencies" },
          { "id": "gs-digestive-system", "title": "Human Digestive System — Organs & Enzymes" },
          { "id": "gs-circulatory-system", "title": "Human Circulatory System — Heart, Blood & Blood Groups" },
          { "id": "gs-respiratory-system", "title": "Human Respiratory System — Lungs & High-Altitude Physiology" },
          { "id": "gs-nervous-system", "title": "Human Nervous System — Brain, Spinal Cord & Reflex Action" },
          { "id": "gs-endocrine-system", "title": "Human Endocrine System — Glands & Hormones" },
          { "id": "gs-excretory-system", "title": "Human Excretory System — Kidneys & Nephron" },
          { "id": "gs-musculoskeletal", "title": "Human Skeletal & Muscular System — Bones & Muscles" },
          { "id": "gs-reproduction-heredity", "title": "Reproduction & Heredity — DNA, Genetics & Mendel Laws" },
          { "id": "gs-diseases-immunity", "title": "Human Diseases, Immunity & Vaccines" },
          { "id": "gs-plant-kingdom", "title": "Plant Kingdom — Classification, Photosynthesis & Hormones" },
          { "id": "gs-animal-kingdom", "title": "Animal Kingdom — Classification & Characteristics" },
          { "id": "gs-ecology-environment", "title": "Ecology & Environment — Food Chains, Biodiversity & Pollution" }
        ]
      },
      {
        "id": "gs-physics",
        "title": "Physics — Laws & Applications",
        "topics": [
          { "id": "gs-units-measurement", "title": "Units, Dimensions & Measurement" },
          { "id": "gs-laws-of-motion", "title": "Laws of Motion — Newton's Laws, Friction & Applications" },
          { "id": "gs-work-energy-power", "title": "Work, Energy & Power — Conservation Laws & Collisions" },
          { "id": "gs-gravitation", "title": "Gravitation — Kepler's Laws, Satellites & Escape Velocity" },
          { "id": "gs-heat-thermodynamics", "title": "Heat & Thermodynamics — Laws & Heat Transfer" },
          { "id": "gs-waves-sound", "title": "Waves & Sound — Properties, Doppler Effect & Applications" },
          { "id": "gs-light-optics", "title": "Light & Optics — Reflection, Refraction & Optical Instruments" },
          { "id": "gs-electricity-magnetism", "title": "Electricity & Magnetism — Circuits & Electromagnetic Induction" },
          { "id": "gs-modern-physics", "title": "Modern Physics — Atomic Structure, Radioactivity & Nuclear Physics" }
        ]
      },
      {
        "id": "gs-chemistry",
        "title": "Chemistry — Matter & Reactions",
        "topics": [
          { "id": "gs-matter-states", "title": "States of Matter & Gas Laws" },
          { "id": "gs-atomic-structure-periodic", "title": "Atomic Structure & Periodic Table" },
          { "id": "gs-chemical-bonding", "title": "Chemical Bonding — Ionic, Covalent & Metallic Bonds" },
          { "id": "gs-chemical-reactions", "title": "Chemical Reactions — Types, Rates & Equilibrium" },
          { "id": "gs-acids-bases-salts", "title": "Acids, Bases & Salts — pH & Neutralization" },
          { "id": "gs-metals-nonmetals", "title": "Metals & Non-Metals — Properties, Reactivity & Uses" },
          { "id": "gs-carbon-organic", "title": "Carbon & Organic Chemistry — Hydrocarbons & Polymers" },
          { "id": "gs-everyday-chemistry", "title": "Everyday Chemistry — Food, Medicines, Fuels & Materials" }
        ]
      }
    ]
  }`;

const DATA_FILE = 'data.js';
const lines = fs.readFileSync(DATA_FILE, 'utf8').split('\n');

// Find line 9004 (0-indexed: 9003) — "  ]" just before "};"
// Insert our new subject key at line 9003 (after "  ]" of the last subject's questions array)
const insertAt = 9004; // 1-indexed — before the "};"

const before = lines.slice(0, insertAt - 1);
const after = lines.slice(insertAt - 1);

// The current line 9004 should be "  ]" and line 9005 should be "};"
// We replace "  ]" with "  ]" + our new subject + keep "};"
const combined = [...before, GS_SUBJECT, ...after];
fs.writeFileSync(DATA_FILE, combined.join('\n'), 'utf8');
console.log(`✅ Inserted general-science subject at line ${insertAt}`);
console.log(`📁 data.js is now ${Math.round(fs.statSync(DATA_FILE).size/1024)}KB`);
