const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

const startIdx = code.indexOf('  geography: {');
const endIdx = code.indexOf('  economics: {');

if (startIdx !== -1 && endIdx !== -1) {
  const targetGeography = `  geography: {
    title: "Geography (CDS/NDA)",
    chapters: [
      {
        id: "physical-geography",
        title: "Physical & World Geography",
        topics: [
          {
            id: "universe-solar-system",
            title: "The Universe & Solar System",
            notes: "Detailed notes expanded in notes_extra_4.js",
            formulas: "Cosmology Facts",
            mindmap: {
              root: "Universe",
              branches: [
                {title: "Theories", subnodes: ["Big Bang", "Steady State"]},
                {title: "Solar System", subnodes: ["Inner planets", "Outer planets", "Asteroid belt"]}
              ]
            }
          },
          {
            id: "earth-atmosphere",
            title: "Earth Structure & Atmosphere",
            notes: "Detailed notes expanded in notes_extra_4.js",
            formulas: "Lapse Rate = 6.5°C/km",
            mindmap: {
              root: "Earth & Atmosphere",
              branches: [
                {title: "Earth Layers", subnodes: ["Crust (SIAL)", "Mantle (Asthenosphere)", "Core (NIFE)"]},
                {title: "Atmosphere", subnodes: ["Troposphere", "Stratosphere", "Mesosphere", "Ionosphere"]}
              ]
            }
          },
          {
            id: "climatology-clouds",
            title: "Climatology: Climatic Zones & Clouds",
            notes: "Detailed notes expanded in notes_extra_4.js",
            formulas: "Cloud types: High, Middle, Low, Convective",
            mindmap: {
              root: "Climatology",
              branches: [
                {title: "Climatic Zones", subnodes: ["Köppen classification", "Equatorial", "Monsoon"]},
                {title: "Clouds", subnodes: ["Cirrus", "Altocumulus", "Stratus", "Cumulonimbus"]}
              ]
            }
          },
          {
            id: "geomorphology-rocks",
            title: "Geomorphology: Rocks, Plate Tectonics & Volcanism",
            notes: "Detailed notes expanded in notes_extra_4.js",
            formulas: "Seismic Waves: P-waves, S-waves",
            mindmap: {
              root: "Geomorphology",
              branches: [
                {title: "Rocks", subnodes: ["Igneous", "Sedimentary", "Metamorphic"]},
                {title: "Tectonic Plates", subnodes: ["Major plates", "Minor plates", "Boundaries"]},
                {title: "Activity", subnodes: ["Volcanism", "Earthquakes (Shadow zones)"]}
              ]
            }
          },
          {
            id: "world-geography-mountains",
            title: "World Geography: Mountains, Forests & Rivers",
            notes: "Detailed notes expanded in notes_extra_4.js",
            formulas: "Major Mountains & World Rivers",
            mindmap: {
              root: "World Geography",
              branches: [
                {title: "Mountains", subnodes: ["Fold", "Block", "Volcanic"]},
                {title: "Forests", subnodes: ["Evergreen", "Deciduous", "Coniferous"]},
                {title: "Rivers", subnodes: ["Nile", "Amazon", "Yangtze", "Mississippi"]}
              ]
            }
          }
        ]
      },
      {
        id: "geography-details",
        title: "Indian Geography",
        topics: [
          {
            id: "syl-geog",
            title: "Indian Geography (Rivers, Passes & Soils)",
            notes: "Detailed notes expanded in notes_extra_4.js",
            formulas: "Dakshin Ganga: Godavari",
            mindmap: {
              root: "Indian Geography",
              branches: [
                {title: "Himalayan Rivers", subnodes: ["Ganga", "Indus", "Brahmaputra"]},
                {title: "Peninsular Rivers", subnodes: ["Godavari", "Krishna", "Narmada"]},
                {title: "Soils", subnodes: ["Alluvial", "Black (Regur)", "Laterite"]}
              ]
            }
          },
          {
            id: "india-forests-wetlands",
            title: "Forests, Trees & Wetlands of India",
            notes: "Detailed notes expanded in notes_extra_4.js",
            formulas: "Wetlands (Ramsar Sites)",
            mindmap: {
              root: "Forests & Wetlands",
              branches: [
                {title: "Forest Types", subnodes: ["Evergreen", "Deciduous (Teak/Sal)", "Mangroves"]},
                {title: "Wetlands", subnodes: ["Ramsar Convention", "Chilika", "Keoladeo"]}
              ]
            }
          },
          {
            id: "india-resources-farming",
            title: "Mineral Resources & Types of Farming",
            notes: "Detailed notes expanded in notes_extra_4.js",
            formulas: "Mineral Belts of India",
            mindmap: {
              root: "Resources & Farming",
              branches: [
                {title: "Mineral Belts", subnodes: ["Chhota Nagpur", "Western", "Southern"]},
                {title: "Farming", subnodes: ["Shifting", "Intensive", "Subsistence", "Jhuming"]}
              ]
            }
          },
          {
            id: "india-transport-routes",
            title: "Transport Routes: Highways & Waterways",
            notes: "Detailed notes expanded in notes_extra_4.js",
            formulas: "Highways & Waterways corridors",
            mindmap: {
              root: "Transport",
              branches: [
                {title: "Highways", subnodes: ["NH44", "NH48", "Golden Quadrilateral"]},
                {title: "Waterways", subnodes: ["NW1 (Ganga)", "NW2 (Brahmaputra)"]}
              ]
            }
          },
          {
            id: "india-national-parks",
            title: "National Parks of India (Map Guide)",
            notes: "Detailed notes expanded in notes_extra_4.js",
            formulas: "Key National Parks locations",
            mindmap: {
              root: "National Parks",
              branches: [
                {title: "North", subnodes: ["Jim Corbett", "Dachigam"]},
                {title: "East/Northeast", subnodes: ["Kaziranga", "Sundarbans"]},
                {title: "West/Central", subnodes: ["Gir", "Kanha", "Ranthambore"]},
                {title: "South", subnodes: ["Bandipur", "Silent Valley"]}
              ]
            }
          }
        ]
      }
    ]
  },\n`;

  const before = code.substring(0, startIdx);
  const after = code.substring(endIdx);
  
  fs.writeFileSync('app.js', before + targetGeography + after);
  console.log('Successfully replaced geography subject in app.js!');
} else {
  console.log('Failed to find start/end of geography in app.js.');
}
