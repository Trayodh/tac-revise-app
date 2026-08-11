const fs = require('fs');

const images = fs.readdirSync('www/images').filter(f => f.endsWith('.png') || f.endsWith('.jpg'));

const mapping = {};
// Subject keyword to Subject ID mapping
const subjectMap = {
  'maths': ['algebra', 'arithmetic', 'calculus', 'coordinate', 'statistics', 'trigonometry'],
  'biology': ['animal', 'cell', 'chromosome', 'flower', 'human', 'photosynthesis'],
  'chemistry': ['atomic', 'chemical', 'chemistry'],
  'physics': ['em_waves', 'newtons', 'physics', 'thermodynamics', 'mirrors'],
  'geography': ['geo_', 'earth', 'india_dams', 'india_highways', 'india_latlong', 'india_monsoon', 'india_mountains', 'india_parks', 'india_plateaus', 'india_resources', 'india_rivers', 'india_soils', 'india_transport', 'clouds', 'atmospheric', 'glacial', 'landforms', 'mountains', 'types-of-rainfall', 'volcanic', 'world_'],
  'history': ['harappan', 'history', 'freedom', 'mughal'],
  'polity': ['polity', 'indian_constitution'],
  'english': ['english'],
  'reasoning': ['afcat', 'reasoning'],
  'current_affairs': ['current_affairs', 'space_technology', 'defence_organisations']
};

for (const img of images) {
  let mappedSubject = 'general';
  for (const [subject, keywords] of Object.entries(subjectMap)) {
    if (keywords.some(k => img.toLowerCase().includes(k))) {
      mappedSubject = subject;
      break;
    }
  }
  
  if (!mapping[mappedSubject]) mapping[mappedSubject] = [];
  mapping[mappedSubject].push(`images/${img}`);
}

console.log("window.SUBJECT_IMAGES = " + JSON.stringify(mapping, null, 2) + ";");
