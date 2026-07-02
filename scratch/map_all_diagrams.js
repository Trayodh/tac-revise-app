const fs = require('fs');

// Read all existing images
const imagesDir = 'images';
const images = fs.readdirSync(imagesDir).filter(img => img.endsWith('.png'));

// Define mapping logic
const keywordMap = {
  history: ['history_1857_revolt_map.png', 'history_mauryan_gupta_map.png'],
  geography: ['india_rivers_map.png', 'india_mountains_map.png', 'india_plateaus_passes_map.png', 'india_latlong_map.png', 'india_soils_map.png', 'world_climatic_zones_map.png', 'world_tectonics_map.png', 'landforms_diagram.png'],
  physics: ['mirrors_lens_ray_diagrams.png', 'physics_ray_diagram.png', 'physics_circuit_diagram.png', 'em_waves_chart.png'],
  biology: ['animal_plant_kingdoms.png', 'cell_diagram.png', 'cell_division_mitosis.png', 'chromosome_structure.png', 'flower_parts_diagram.png', 'human_body_systems.png'],
  afcat: ['afcat_dot_situation.png', 'afcat_embedded_figures.png', 'afcat_venn_diagram.png']
};

const fileList = fs.readdirSync('.').filter(f => f.endsWith('.js') && (f === 'data.js' || f.startsWith('notes_extra')));

let allTopics = [];
for (const file of fileList) {
  const content = fs.readFileSync(file, 'utf8');
  
  // Extract subject ids
  const subjectRegex = /"(sub-[^"]+)":\s*{[\s\S]*?id:\s*"([^"]+)"/g;
  
  // Just use regex to find all topic IDs and their titles
  // { id: "topic-id", title: "Topic Title" }
  const topicRegex = /{\s*id:\s*['"]([^'"]+)['"],\s*title:\s*['"]([^'"]+)['"]/g;
  let match;
  while ((match = topicRegex.exec(content)) !== null) {
    allTopics.push({ id: match[1], title: match[2], file });
  }
}

console.log(`Found ${allTopics.length} topics in database.`);

// Generate a massive TOPIC_MAPS object
let newTopicMaps = {};
for (const topic of allTopics) {
  const tTitle = topic.title.toLowerCase();
  const tId = topic.id.toLowerCase();
  
  let mappedImages = [];
  
  // 1. Precise mappings
  if (tId.includes('1857')) mappedImages.push({ title: "1857 Revolt Map", src: "images/history_1857_revolt_map.png" });
  if (tId.includes('maurya') || tId.includes('gupta')) mappedImages.push({ title: "Maurya & Gupta Map", src: "images/history_mauryan_gupta_map.png" });
  if (tId.includes('river')) mappedImages.push({ title: "River Systems Map", src: "images/india_rivers_map.png" });
  if (tId.includes('mountain')) mappedImages.push({ title: "Mountains Map", src: "images/india_mountains_map.png" });
  if (tId.includes('soil')) mappedImages.push({ title: "Soils Map", src: "images/india_soils_map.png" });
  if (tId.includes('cell')) {
      mappedImages.push({ title: "Cell Structure", src: "images/cell_diagram.png" });
      mappedImages.push({ title: "Cell Division", src: "images/cell_division_mitosis.png" });
  }
  if (tId.includes('human') || tId.includes('system') || tId.includes('digest')) mappedImages.push({ title: "Human Body Systems", src: "images/human_body_systems.png" });
  
  // 2. Broad mappings based on subject keywords if no precise match
  if (mappedImages.length === 0) {
    if (tId.includes('hist')) {
      mappedImages.push({ title: "Historical Context", src: "images/history_mauryan_gupta_map.png" });
    } else if (tId.includes('geo') || tId.includes('clima')) {
      mappedImages.push({ title: "World Climatic Zones", src: "images/world_climatic_zones_map.png" });
    } else if (tId.includes('phys')) {
      mappedImages.push({ title: "EM Waves Chart", src: "images/em_waves_chart.png" });
    } else if (tId.includes('bio') || tId.includes('plant')) {
      mappedImages.push({ title: "Kingdoms", src: "images/animal_plant_kingdoms.png" });
    } else if (tId.includes('afcat') || tId.includes('reasoning')) {
      mappedImages.push({ title: "Venn Diagrams", src: "images/afcat_venn_diagram.png" });
    }
  }
  
  if (mappedImages.length > 0) {
    newTopicMaps[topic.id] = mappedImages;
  }
}

console.log(`Mapped ${Object.keys(newTopicMaps).length} topics to diagrams.`);

// Write mapping to a file so we can inspect
fs.writeFileSync('scratch/generated_topic_maps.json', JSON.stringify(newTopicMaps, null, 2));
