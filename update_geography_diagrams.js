const fs = require('fs');

let content = fs.readFileSync('diagrams_db.js', 'utf8');

const replacements = [
  {
    key: "general-knowledge__syl-geog",
    file: "map_physical_geography_1784178968525.png"
  },
  {
    key: "general-knowledge__earth-atmosphere",
    file: "map_geography_details_1784178979944.png"
  },
  {
    key: "general-knowledge__mapping-borders-capitals",
    file: "map_industries_geopolitics_1784179000256.png"
  },
  {
    key: "general-knowledge__world-geography-straits-deserts",
    file: "map_geography_pyq_1784179012067.png"
  }
];

replacements.forEach(r => {
  const regex = new RegExp(`DIAGRAMS_DB\\["${r.key}"\\]\\s*=\\s*\`([\\s\\S]*?)\`;`, 'g');
  const newHtml = `
<div style="width:100%; text-align:center; padding:20px; background:#0f1117;">
  <img src="assets/maps/${r.file}" style="max-width:100%; border-radius:8px; box-shadow:0 4px 12px rgba(0,0,0,0.5);" alt="${r.key} map" />
</div>
`;
  content = content.replace(regex, `DIAGRAMS_DB["${r.key}"] = \`${newHtml}\`;`);
});

fs.writeFileSync('diagrams_db.js', content);
console.log("Updated geography diagrams in diagrams_db.js!");
