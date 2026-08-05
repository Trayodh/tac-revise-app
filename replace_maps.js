const fs = require('fs');

const REAL_MAPS = {
  "universe-solar-system": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Solar_system_scale.jpg/1024px-Solar_system_scale.jpg",
  "earth-atmosphere": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Earth_atmosphere_diagram.svg/1024px-Earth_atmosphere_diagram.svg.png",
  "climatology-clouds": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Koppen-Geiger_Map_World_present.svg/1024px-Koppen-Geiger_Map_World_present.svg.png",
  "geomorphology-rocks": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Tectonic_plates_boundaries_detailed-en.svg/1024px-Tectonic_plates_boundaries_detailed-en.svg.png",
  "world-geography-mountains": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Relief_Map_of_World.png/1024px-Relief_Map_of_World.png",
  "world-geography-straits-deserts": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Desert_distribution.png/1024px-Desert_distribution.png",
  "syl-geog": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/India_climatic_zones_map_en.svg/1024px-India_climatic_zones_map_en.svg.png",
  "india-forests-wetlands": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/India_forest_map_en.svg/1024px-India_forest_map_en.svg.png",
  "india-resources-farming": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/India_agriculture_map.png/1024px-India_agriculture_map.png",
  "india-transport-routes": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/India_National_Highway_Network_Map.png/1024px-India_National_Highway_Network_Map.png",
  "india-national-parks": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/India_National_Parks_Map.svg/1024px-India_National_Parks_Map.svg.png",
  "mapping-borders-capitals": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/India_political_map.svg/1024px-India_political_map.svg.png",
  "geog-industries": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/India_industry_map_en.svg/1024px-India_industry_map_en.svg.png",
  "geog-geopolitics": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Indo-Pacific_region.svg/1024px-Indo-Pacific_region.svg.png",
  "geography-pyq-trends-topic": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/India_physical_map.svg/1024px-India_physical_map.svg.png"
};

const ALT_FALLBACKS = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/India_relief_location_map.jpg/1024px-India_relief_location_map.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Himalaya_relief_map.jpg/1024px-Himalaya_relief_map.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Ganges-Brahmaputra-Meghna_basins.jpg/1024px-Ganges-Brahmaputra-Meghna_basins.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/India_river_map.svg/1024px-India_river_map.svg.png"
];

const file = 'notes_extra_geography.js';
let content = fs.readFileSync(file, 'utf8');

// The AI injected pollinations.ai maps into almost every chapter block.
// We will parse out each EXPANDED_NOTES_DATA block and replace its <img> tags.

let allMatches = [...content.matchAll(/(?:window\.)?EXPANDED_NOTES_DATA\(["[^"]+)"\]\s*=\s*`([\s\S]*?)`;/g)];

allMatches.forEach((match, i) => {
  const chapter = match[1];
  let chapterText = match[2];
  
  // Replace ALL pollinations.ai images in this chapter with the correct one
  const targetMap = REAL_MAPS[chapter] || ALT_FALLBACKS[i % ALT_FALLBACKS.length];
  
  const modifiedText = chapterText.replace(/<img[^>]*src=["']https:\/\/image\.pollinations\.ai[^>]*>/gi, `<img src="${targetMap}" alt="Map for ${chapter}" style="width:100%; border-radius: 8px; margin: 15px 0; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">`);
  
  content = content.replace(match[0], `EXPANDED_NOTES_DATA["${chapter}"] = \`${modifiedText}\`;`);
});

fs.writeFileSync(file, content);
console.log("Successfully replaced AI generated maps with high-quality Wikipedia map URLs in " + file);
