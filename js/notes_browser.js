// 8. NOTES & FORMULAS HUB MODULE
// ==========================================
let currentSubjectFilter = "all";
let selectedSubjectId = null;
let selectedChapterId = null;
let selectedTopicId = null;
let activeNotesTab = 'notes'; // 'notes' | 'formulas' | 'mindmap'
let notesSearchQuery = '';
let currentExamTagFilter = 'all'; // 'all' | 'NDA' | 'CDS' | 'AFCAT'
let distractionFreeMode = false;

// Topic Maps & Diagrams Mapping
const TOPIC_MAPS = {
  "2d-geometry": [
    {
      "title": "World Climatic Zones",
      "src": "images/world_climatic_zones_map.png"
    }
  ],
  "geometry": [
    {
      "title": "World Climatic Zones",
      "src": "images/world_climatic_zones_map.png"
    }
  ],
  "physical-geography": [
    {
      "title": "World Climatic Zones",
      "src": "images/world_climatic_zones_map.png"
    }
  ],
  "universe-solar-system": [
    {
      "title": "Human Body Systems",
      "src": "images/human_body_systems.png"
    }
  ],
  "climatology-clouds": [
    {
      "title": "World Climatic Zones",
      "src": "images/world_climatic_zones_map.png"
    }
  ],
  "geomorphology-rocks": [
    {
      "title": "World Climatic Zones",
      "src": "images/world_climatic_zones_map.png"
    }
  ],
  "world-geography-mountains": [
    {
      "title": "Mountains Map",
      "src": "images/india_mountains_map.png"
    }
  ],
  "world-geography-straits-deserts": [
    {
      "title": "World Climatic Zones",
      "src": "images/world_climatic_zones_map.png"
    }
  ],
  "geography-details": [
    {
      "title": "World Climatic Zones",
      "src": "images/world_climatic_zones_map.png"
    }
  ],
  "syl-geog": [
    {
      "title": "World Climatic Zones",
      "src": "images/world_climatic_zones_map.png"
    }
  ],
  "industrics-geopolitics": [
    {
      "title": "World Climatic Zones",
      "src": "images/world_climatic_zones_map.png"
    }
  ],
  "geog-industries": [
    {
      "title": "World Climatic Zones",
      "src": "images/world_climatic_zones_map.png"
    }
  ],
  "geog-geopolitics": [
    {
      "title": "World Climatic Zones",
      "src": "images/world_climatic_zones_map.png"
    }
  ],
  "geography-pyq-trends": [
    {
      "title": "World Climatic Zones",
      "src": "images/world_climatic_zones_map.png"
    }
  ],
  "geography-pyq-trends-topic": [
    {
      "title": "World Climatic Zones",
      "src": "images/world_climatic_zones_map.png"
    }
  ],
  "physics-optics": [
    {
      "title": "EM Waves Chart",
      "src": "images/em_waves_chart.png"
    }
  ],
  "physics-mechanics": [
    {
      "title": "EM Waves Chart",
      "src": "images/em_waves_chart.png"
    }
  ],
  "physics-waves": [
    {
      "title": "EM Waves Chart",
      "src": "images/em_waves_chart.png"
    }
  ],
  "physics-sound": [
    {
      "title": "EM Waves Chart",
      "src": "images/em_waves_chart.png"
    }
  ],
  "physics-em-waves": [
    {
      "title": "EM Waves Chart",
      "src": "images/em_waves_chart.png"
    }
  ],
  "physics-thermodynamics": [
    {
      "title": "EM Waves Chart",
      "src": "images/em_waves_chart.png"
    }
  ],
  "physics-heat": [
    {
      "title": "EM Waves Chart",
      "src": "images/em_waves_chart.png"
    }
  ],
  "physics-electromagnetism": [
    {
      "title": "EM Waves Chart",
      "src": "images/em_waves_chart.png"
    }
  ],
  "physics-electricity-magnetism": [
    {
      "title": "EM Waves Chart",
      "src": "images/em_waves_chart.png"
    }
  ],
  "physics-modern": [
    {
      "title": "EM Waves Chart",
      "src": "images/em_waves_chart.png"
    }
  ],
  "physics-nuclear-basics": [
    {
      "title": "EM Waves Chart",
      "src": "images/em_waves_chart.png"
    }
  ],
  "physics-units-everyday": [
    {
      "title": "EM Waves Chart",
      "src": "images/em_waves_chart.png"
    }
  ],
  "physics-pyq-trends": [
    {
      "title": "EM Waves Chart",
      "src": "images/em_waves_chart.png"
    }
  ],
  "physics-pyq-trends-topic": [
    {
      "title": "EM Waves Chart",
      "src": "images/em_waves_chart.png"
    }
  ],
  "biology-cell": [
    {
      "title": "Cell Structure",
      "src": "images/cell_diagram.png"
    },
    {
      "title": "Cell Division",
      "src": "images/cell_division_mitosis.png"
    }
  ],
  "cell-structure": [
    {
      "title": "Cell Structure",
      "src": "images/cell_diagram.png"
    },
    {
      "title": "Cell Division",
      "src": "images/cell_division_mitosis.png"
    }
  ],
  "biology-physiology": [
    {
      "title": "EM Waves Chart",
      "src": "images/em_waves_chart.png"
    }
  ],
  "human-systems": [
    {
      "title": "Human Body Systems",
      "src": "images/human_body_systems.png"
    }
  ],
  "biology-diseases": [
    {
      "title": "Kingdoms",
      "src": "images/animal_plant_kingdoms.png"
    }
  ],
  "biology-kingdoms": [
    {
      "title": "Kingdoms",
      "src": "images/animal_plant_kingdoms.png"
    }
  ],
  "plant-kingdom": [
    {
      "title": "Kingdoms",
      "src": "images/animal_plant_kingdoms.png"
    }
  ],
  "biology-botany": [
    {
      "title": "Kingdoms",
      "src": "images/animal_plant_kingdoms.png"
    }
  ],
  "plant-reproduction": [
    {
      "title": "Kingdoms",
      "src": "images/animal_plant_kingdoms.png"
    }
  ],
  "biology-ecology": [
    {
      "title": "Kingdoms",
      "src": "images/animal_plant_kingdoms.png"
    }
  ],
  "biology-ecology-basics": [
    {
      "title": "Kingdoms",
      "src": "images/animal_plant_kingdoms.png"
    }
  ],
  "missiles-systems": [
    {
      "title": "Human Body Systems",
      "src": "images/human_body_systems.png"
    }
  ],
  "reasoning-oir": [
    {
      "title": "Venn Diagrams",
      "src": "images/afcat_venn_diagram.png"
    }
  ],
  "syl-verbal-reasoning": [
    {
      "title": "Venn Diagrams",
      "src": "images/afcat_venn_diagram.png"
    }
  ],
  "syl-nonverbal-reasoning": [
    {
      "title": "Venn Diagrams",
      "src": "images/afcat_venn_diagram.png"
    }
  ],
  "syl-afcat-spatial": [
    {
      "title": "Venn Diagrams",
      "src": "images/afcat_venn_diagram.png"
    }
  ],
  "afcat-verbal-reasoning": [
    {
      "title": "Venn Diagrams",
      "src": "images/afcat_venn_diagram.png"
    }
  ],
  "afcat-r-analogy": [
    {
      "title": "Venn Diagrams",
      "src": "images/afcat_venn_diagram.png"
    }
  ],
  "afcat-r-classification": [
    {
      "title": "Venn Diagrams",
      "src": "images/afcat_venn_diagram.png"
    }
  ],
  "afcat-r-series": [
    {
      "title": "Venn Diagrams",
      "src": "images/afcat_venn_diagram.png"
    }
  ],
  "afcat-r-coding": [
    {
      "title": "Venn Diagrams",
      "src": "images/afcat_venn_diagram.png"
    }
  ],
  "afcat-r-directions": [
    {
      "title": "Venn Diagrams",
      "src": "images/afcat_venn_diagram.png"
    }
  ],
  "afcat-r-clock-calendar": [
    {
      "title": "Venn Diagrams",
      "src": "images/afcat_venn_diagram.png"
    }
  ],
  "afcat-r-venn": [
    {
      "title": "Venn Diagrams",
      "src": "images/afcat_venn_diagram.png"
    }
  ],
  "afcat-r-syllogism": [
    {
      "title": "Venn Diagrams",
      "src": "images/afcat_venn_diagram.png"
    }
  ],
  "afcat-r-conclusions": [
    {
      "title": "Venn Diagrams",
      "src": "images/afcat_venn_diagram.png"
    }
  ],
  "afcat-r-assumptions": [
    {
      "title": "Venn Diagrams",
      "src": "images/afcat_venn_diagram.png"
    }
  ],
  "afcat-nonverbal-reasoning": [
    {
      "title": "Venn Diagrams",
      "src": "images/afcat_venn_diagram.png"
    }
  ],
  "afcat-r-fig-analogy": [
    {
      "title": "Venn Diagrams",
      "src": "images/afcat_venn_diagram.png"
    }
  ],
  "afcat-r-fig-class-series": [
    {
      "title": "Venn Diagrams",
      "src": "images/afcat_venn_diagram.png"
    }
  ],
  "afcat-r-fig-completion": [
    {
      "title": "Venn Diagrams",
      "src": "images/afcat_venn_diagram.png"
    }
  ],
  "afcat-r-embedded": [
    {
      "title": "Venn Diagrams",
      "src": "images/afcat_venn_diagram.png"
    }
  ],
  "afcat-r-dot": [
    {
      "title": "Venn Diagrams",
      "src": "images/afcat_venn_diagram.png"
    }
  ],
  "afcat-r-cube-dice": [
    {
      "title": "Venn Diagrams",
      "src": "images/afcat_venn_diagram.png"
    }
  ],
  "afcat-r-fig-coding": [
    {
      "title": "Venn Diagrams",
      "src": "images/afcat_venn_diagram.png"
    }
  ],
  "ca-geopolitical-flashpoints": [
    {
      "title": "World Climatic Zones",
      "src": "images/world_climatic_zones_map.png"
    }
  ],
  "biodiversity-conservation": [
    {
      "title": "Kingdoms",
      "src": "images/animal_plant_kingdoms.png"
    }
  ],
  "climate-laws-energy": [
    {
      "title": "World Climatic Zones",
      "src": "images/world_climatic_zones_map.png"
    }
  ]
};

// Global Image Zoom Modal Function
window.zoomImage = function(src, title) {
  let modal = document.getElementById("image-zoom-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "image-zoom-modal";
    modal.style.cssText = "display: none; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.9); z-index: 99999; justify-content: center; align-items: center; flex-direction: column; cursor: zoom-out;";
    modal.onclick = () => modal.style.display = "none";
    modal.innerHTML = `
      <img id="zoom-modal-img" src="" style="max-width: 90vw; max-height: 85vh; border-radius: 6px; box-shadow: 0 0 20px rgba(0,0,0,0.8); border: 2px solid var(--border);" />
      <div id="zoom-modal-title" style="margin-top: 15px; color: white; font-family: var(--font-mono); font-weight: 600; font-size: 1rem; text-align: center;"></div>
      <div style="color: var(--text-muted); font-size: 0.8rem; margin-top: 5px;">Click anywhere to dismiss</div>
    `;
    document.body.appendChild(modal);
  }
  document.getElementById("zoom-modal-img").src = src;
  document.getElementById("zoom-modal-title").innerText = title;
  modal.style.display = "flex";
};

function updateNotesProgressBar() {
  const container = document.getElementById("notes-progress-bar-container");
  if (!container) return;
  
  let total = 0;
  let completed = 0;
  
  for (const subjectId in NOTES_DATABASE) {
    if (currentSubjectFilter !== "all" && currentSubjectFilter !== subjectId) {
      continue;
    }
    const subject = NOTES_DATABASE[subjectId];
    subject.chapters.forEach(c => {
      c.topics.forEach(t => {
        total++;
        if (STATE.syllabusProgress[t.id] === 'completed') {
          completed++;
        }
      });
    });
  }
  
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
  const subjectName = currentSubjectFilter === "all" ? "All Subjects" : NOTES_DATABASE[currentSubjectFilter].title;
  
  container.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; font-size:0.9rem;">
      <span style="font-weight:600; color:var(--text-primary);"><span style="color:var(--accent);">TAC</span> ${subjectName} Progress</span>
      <span style="font-family:var(--font-mono); font-weight:700; color:var(--accent);">${completed}/${total} Mastered (${pct}%)</span>
    </div>
    <div style="width:100%; height:6px; background:rgba(255,255,255,0.05); border-radius:3px; overflow:hidden; border:1px solid rgba(255,255,255,0.03);">
      <div style="width:${pct}%; height:100%; background:linear-gradient(90deg, var(--accent-dark) 0%, var(--accent) 100%); transition: width 0.4s ease; box-shadow:0 0 8px var(--accent);"></div>
    </div>
  `;
}

function getFilteredTopicsList() {
  const list = [];
  for (const subjectId in NOTES_DATABASE) {
    if (currentSubjectFilter !== "all" && currentSubjectFilter !== subjectId) {
      continue;
    }
    const subject = NOTES_DATABASE[subjectId];
    subject.chapters.forEach(chapter => {
      chapter.topics.forEach(topic => {
        list.push({
          subjectId,
          chapterId: chapter.id,
          topicId: topic.id,
          title: topic.title
        });
      });
    });
  }
  return list;
}

const TOPIC_WEIGHTAGE_MAP = {
  // Mathematics
  "trig-identities": "15 Qs (~37.5 Marks)",
  "inverse-trig": "5 Qs (~12.5 Marks)",
  "quadratic-eq": "6 Qs (~15 Marks)",
  "complex-numbers": "6 Qs (~15 Marks)",
  "straight-lines": "5 Qs (~12.5 Marks)",
  "central-tendency": "6 Qs (~15 Marks)",
  "data-interpretation": "5 Qs (~12.5 Marks)",
  "limits-continuity": "5 Qs (~12.5 Marks)",
  "differentiation": "8 Qs (~20 Marks)",
  "integration": "10 Qs (~25 Marks)",
  "syl-matrices": "9 Qs (~22.5 Marks)",
  "syl-probability": "10 Qs (~25 Marks)",
  "lines-angles-triangles": "6 Qs (~15 Marks)",
  "circles-polygons": "5 Qs (~12.5 Marks)",
  "area-perimeter": "6 Qs (~15 Marks)",
  "surface-area-volume": "6 Qs (~15 Marks)",
  "percentages-profit-loss": "5 Qs (~12.5 Marks)",
  "ratios-averages": "5 Qs (~12.5 Marks)",
  "time-distance": "6 Qs (~15 Marks)",
  "syl-numerical-speed": "4 Qs (~10 Marks)",
  "syl-numerical-ratios": "4 Qs (~10 Marks)",

  // English
  "parts-of-speech": "10 Qs (~8.3 Marks)",
  "tenses-complete": "10 Qs (~8.3 Marks)",
  "subject-verb-agreement": "10 Qs (~8.3 Marks)",
  "sentence-structure": "5 Qs (~4.2 Marks)",
  "voice-conversion": "10 Qs (~8.3 Marks)",
  "narration-speech": "10 Qs (~8.3 Marks)",
  "modifiers": "5 Qs (~4.2 Marks)",
  "punctuation-basics": "5 Qs (~4.2 Marks)",
  "transformation-sentences": "5 Qs (~4.2 Marks)",
  "synonyms-antonyms-detailed": "20 Qs (~16.6 Marks)",
  "one-word-substitution": "10 Qs (~8.3 Marks)",
  "idioms-phrases": "10 Qs (~8.3 Marks)",
  "phrasal-verbs": "5 Qs (~4.2 Marks)",
  "reading-comprehension": "15 Qs (~12.5 Marks)",
  "error-detection": "10 Qs (~8.3 Marks)",
  "sentence-improvement": "10 Qs (~8.3 Marks)",
  "ordering-rearrangement": "10 Qs (~8.3 Marks)",
  "fill-blanks-cloze": "10 Qs (~8.3 Marks)",

  // Polity
  "preamble": "2 Qs (~1.7 Marks)",
  "schedules": "2 Qs (~1.7 Marks)",
  "fundamental-rights": "5 Qs (~4.2 Marks)",
  "dpsp": "4 Qs (~3.3 Marks)",
  "citizenship": "2 Qs (~1.7 Marks)",
  "president": "3 Qs (~2.5 Marks)",
  "parliament": "6 Qs (~5.0 Marks)",
  "goverment-executives": "3 Qs (~2.5 Marks)",
  "judiciary": "4 Qs (~3.3 Marks)",
  "panchayati-raj": "2 Qs (~1.7 Marks)",
  "amendments-parts": "3 Qs (~2.5 Marks)",
  "important-articles": "3 Qs (~2.5 Marks)",
  "positions-tenures": "2 Qs (~1.7 Marks)",
  "constitutional-bodies": "3 Qs (~2.5 Marks)",
  "governance-emergency": "2 Qs (~1.7 Marks)",
  "polity-federal-structure": "2 Qs (~1.7 Marks)",
  "polity-rpa": "2 Qs (~1.7 Marks)",

  // History
  "what-is-history": "1 Qs (~0.8 Marks)",
  "sources-indian-history": "2 Qs (~1.7 Marks)",
  "dating-systems": "1 Qs (~0.8 Marks)",
  "stone-age": "2 Qs (~1.7 Marks)",
  "chalcolithic-age": "2 Qs (~1.7 Marks)",
  "rock-art": "1 Qs (~0.8 Marks)",
  "indus-valley-civilization": "3 Qs (~2.5 Marks)",
  "vedic-age": "2 Qs (~1.7 Marks)",
  "mahajanapadas": "2 Qs (~1.7 Marks)",
  "magadha-expansion": "2 Qs (~1.7 Marks)",
  "buddhism-jainism": "4 Qs (~3.3 Marks)",
  "mauryan-period": "3 Qs (~2.5 Marks)",
  "post-mauryan-india": "2 Qs (~1.7 Marks)",
  "gupta-period": "2 Qs (~1.7 Marks)",
  "south-indian-kingdoms": "3 Qs (~2.5 Marks)",
  "ancient-indian-culture": "2 Qs (~1.7 Marks)",
  "early-medieval-india": "2 Qs (~1.7 Marks)",
  "delhi-sultanate": "3 Qs (~2.5 Marks)",
  "custom-history-topic": "3 Qs (~2.5 Marks)",
  "vijayanagara-empire": "3 Qs (~2.5 Marks)",
  "bahmani-deccan-sultanates": "2 Qs (~1.7 Marks)",
  "mughal-empire": "4 Qs (~3.3 Marks)",
  "marathas": "2 Qs (~1.7 Marks)",
  "bhakti-movement": "2 Qs (~1.7 Marks)",
  "sufi-movement": "2 Qs (~1.7 Marks)",
  "sikh-history": "2 Qs (~1.7 Marks)",
  "european-arrival": "2 Qs (~1.7 Marks)",
  "british-expansion": "2 Qs (~1.7 Marks)",
  "economic-impact-british": "2 Qs (~1.7 Marks)",
  "socio-religious-reform": "3 Qs (~2.5 Marks)",
  "revolt-1857": "3 Qs (~2.5 Marks)",
  "governor-generals-viceroys": "4 Qs (~3.3 Marks)",
  "constitutional-development": "3 Qs (~2.5 Marks)",
  "freedom-movement": "8 Qs (~6.6 Marks)",
  "post-independence-consolidation": "2 Qs (~1.7 Marks)",
  "revolutions": "2 Qs (~1.7 Marks)",
  "world-war-i": "2 Qs (~1.7 Marks)",
  "interwar-period": "2 Qs (~1.7 Marks)",
  "world-war-ii": "2 Qs (~1.7 Marks)",
  "cold-war": "2 Qs (~1.7 Marks)",
  "international-institutions": "2 Qs (~1.7 Marks)",
  "architecture": "3 Qs (~2.5 Marks)",
  "paintings": "2 Qs (~1.7 Marks)",

  // Geography
  "universe-solar-system": "3 Qs (~2.5 Marks)",
  "earth-atmosphere": "3 Qs (~2.5 Marks)",
  "climatology-clouds": "3 Qs (~2.5 Marks)",
  "geomorphology-rocks": "4 Qs (~3.3 Marks)",
  "world-geography-mountains": "5 Qs (~4.2 Marks)",
  "world-geography-straits-deserts": "5 Qs (~4.2 Marks)",
  "syl-geog": "6 Qs (~5.0 Marks)",
  "india-forests-wetlands": "4 Qs (~3.3 Marks)",
  "india-resources-farming": "4 Qs (~3.3 Marks)",
  "india-transport-routes": "4 Qs (~3.3 Marks)",
  "india-national-parks": "5 Qs (~4.2 Marks)",
  "mapping-borders-capitals": "4 Qs (~3.3 Marks)",
  "geog-industries": "3 Qs (~2.5 Marks)",
  "geog-geopolitics": "3 Qs (~2.5 Marks)",
  "geography-pyq-trends-topic": "Trend Analysis",

  // Economics
  "econ-concepts": "5 Qs (~4.2 Marks)",
  "econ-poverty-employment": "4 Qs (~3.3 Marks)",
  "rbi-monetary-policy": "6 Qs (~5.0 Marks)",
  "econ-budget-fiscal": "5 Qs (~4.2 Marks)",
  "econ-trade-bop": "4 Qs (~3.3 Marks)",
  "econ-reforms": "3 Qs (~2.5 Marks)",
  "five-year-plans": "3 Qs (~2.5 Marks)",
  "external-sector-institutions": "3 Qs (~2.5 Marks)",
  "econ-govt-schemes": "4 Qs (~3.3 Marks)",

  // Physics
  "reflection-refraction": "6 Qs (~5.0 Marks)",
  "newtons-laws": "5 Qs (~4.2 Marks)",
  "syl-exercises": "4 Qs (~3.3 Marks)",
  "physics-sound": "3 Qs (~2.5 Marks)",
  "physics-em-waves": "3 Qs (~2.5 Marks)",
  "physics-heat": "4 Qs (~3.3 Marks)",
  "physics-electricity-magnetism": "5 Qs (~4.2 Marks)",
  "physics-nuclear-basics": "3 Qs (~2.5 Marks)",
  "physics-units-everyday": "4 Qs (~3.3 Marks)",
  "physics-pyq-trends-topic": "Trend Analysis",

  // Chemistry
  "acids-bases": "4 Qs (~3.3 Marks)",
  "syl-numerical": "4 Qs (~3.3 Marks)",
  "metals-alloys": "4 Qs (~3.3 Marks)",
  "reactivity-series": "3 Qs (~2.5 Marks)",
  "carbon-compounds": "3 Qs (~2.5 Marks)",
  "chemistry-numericals": "3 Qs (~2.5 Marks)",
  "chemistry-everyday-fertilisers": "4 Qs (~3.3 Marks)",
  "environmental-chemistry": "3 Qs (~2.5 Marks)",

  // Biology
  "cell-structure": "4 Qs (~3.3 Marks)",
  "human-systems": "6 Qs (~5.0 Marks)",
  "diseases": "5 Qs (~4.2 Marks)",
  "immunity-vaccines": "4 Qs (~3.3 Marks)",
  "plant-kingdom": "3 Qs (~2.5 Marks)",
  "animal-kingdom": "3 Qs (~2.5 Marks)",
  "plant-reproduction": "3 Qs (~2.5 Marks)",
  "biology-ecology-basics": "4 Qs (~3.3 Marks)",

  // Military Aptitude
  "rank-equivalence": "3 Qs (~7.5 Marks)",
  "commands": "3 Qs (~7.5 Marks)",
  "defence-organisations-weapons": "4 Qs (~10.0 Marks)",
  "bilateral-exercises": "4 Qs (~10.0 Marks)",
  "missiles-systems": "4 Qs (~10.0 Marks)",

  // Current Affairs
  "ca-schemes": "5 Qs (~4.2 Marks)",
  "ca-relations": "5 Qs (~4.2 Marks)",
  "ca-policies": "4 Qs (~3.3 Marks)",
  "ca-summits": "4 Qs (~3.3 Marks)",
  "ca-reports": "3 Qs (~2.5 Marks)",
  "ca-judgments": "3 Qs (~2.5 Marks)",
  "ca-awards": "3 Qs (~2.5 Marks)",
  "ca-economic-measures": "3 Qs (~2.5 Marks)",
  "ca-science-tech-space": "4 Qs (~3.3 Marks)",
  "ca-upsc-master-framework": "Trend Analysis",

  // Environment
  "env-hotspots": "3 Qs (~2.5 Marks)",
  "env-conservation": "3 Qs (~2.5 Marks)",
  "env-species": "3 Qs (~2.5 Marks)",
  "env-treaties": "4 Qs (~3.3 Marks)",
  "env-laws": "3 Qs (~2.5 Marks)",
  "env-renewable": "3 Qs (~2.5 Marks)",
  "env-pollution": "3 Qs (~2.5 Marks)"
};

function getTopicWeightage(topicId, subjectId) {
  if (TOPIC_WEIGHTAGE_MAP[topicId]) {
    return TOPIC_WEIGHTAGE_MAP[topicId];
  }
  // Fallbacks based on subject
  switch (subjectId) {
    case 'mathematics':
      return '4-6 Qs (~10-15 Marks)';
    case 'english':
      return '5-10 Qs (~4-8 Marks)';
    case 'military-aptitude':
      return '3-5 Qs';
    default:
      return '3-4 Qs (~2.5-3.3 Marks)';
  }
}

function getTopicExams(topicId, subjectId) {
  const syllabusText = window.OFFICIAL_SYLLABUS_DATA ? window.OFFICIAL_SYLLABUS_DATA[topicId] : null;
  let exams = [];
  if (syllabusText) {
    const examMatch = syllabusText.match(/Exams:\s*([^.]+)/i);
    if (examMatch) {
      const text = examMatch[1].toLowerCase();
      if (text.includes('all')) {
        exams = ['NDA', 'CDS', 'AFCAT'];
      } else {
        if (text.includes('nda')) exams.push('NDA');
        if (text.includes('cds')) exams.push('CDS');
        if (text.includes('afcat')) exams.push('AFCAT');
      }
    }
  }
  
  if (exams.length === 0) {
    if (topicId.startsWith('acids-') || topicId === 'syl-numerical' || topicId === 'metals-alloys' || 
        topicId === 'reactivity-series' || topicId === 'carbon-compounds' || topicId === 'chemistry-numericals' || 
        topicId === 'chemistry-everyday-fertilisers' || topicId === 'environmental-chemistry') {
      exams = ['NDA', 'CDS'];
    } else if (subjectId === 'mathematics') {
      if (['trig-identities', 'central-tendency'].includes(topicId)) {
        exams = ['NDA', 'CDS', 'AFCAT'];
      } else if (['inverse-trig', 'complex-numbers', 'limits-continuity', 'differentiation', 'integration'].includes(topicId)) {
        exams = ['NDA'];
      } else if (['syl-numerical-speed', 'syl-numerical-ratios'].includes(topicId)) {
        exams = ['AFCAT'];
      } else {
        exams = ['NDA', 'CDS'];
      }
    } else if (subjectId === 'military-aptitude') {
      if (topicId.startsWith('afcat-r-')) {
        if (['afcat-r-clock-calendar', 'afcat-r-venn', 'afcat-r-fig-analogy', 'afcat-r-fig-class-series', 
             'afcat-r-fig-completion', 'afcat-r-embedded', 'afcat-r-dot', 'afcat-r-cube-dice', 'afcat-r-fig-coding'].includes(topicId)) {
          exams = ['AFCAT'];
        } else {
          exams = ['CDS', 'AFCAT'];
        }
      } else if (topicId.startsWith('syl-afcat-')) {
        exams = ['AFCAT'];
      } else {
        exams = ['NDA', 'CDS', 'AFCAT'];
      }
    } else if (subjectId === 'english') {
      if (['modifiers', 'transformation-sentences'].includes(topicId)) {
        exams = ['CDS'];
      } else if (['sentence-improvement', 'ordering-rearrangement'].includes(topicId)) {
        exams = ['NDA', 'CDS'];
      } else {
        exams = ['NDA', 'CDS', 'AFCAT'];
      }
    } else {
      exams = ['NDA', 'CDS', 'AFCAT'];
    }
  }
  return exams;
}

function renderNotesBrowser() {
  const accordionList = document.getElementById("notes-accordion-list");
  if (!accordionList) return;
  accordionList.innerHTML = "";
  
  // Render Legend
  const legendDiv = document.createElement("div");
  legendDiv.style.display = "flex";
  legendDiv.style.alignItems = "center";
  legendDiv.style.justifyContent = "space-between";
  legendDiv.style.padding = "8px 12px";
  legendDiv.style.marginBottom = "12px";
  legendDiv.style.background = "rgba(255, 255, 255, 0.02)";
  legendDiv.style.border = "1px solid rgba(255, 255, 255, 0.05)";
  legendDiv.style.borderRadius = "6px";
  legendDiv.style.fontSize = "0.7rem";
  legendDiv.style.fontFamily = "var(--font-mono)";
  legendDiv.style.color = "var(--text-secondary)";
  legendDiv.innerHTML = `
    <span style="font-weight: 700; color: var(--text-muted);">EXAMS:</span>
    <span style="display:flex; align-items:center; gap:4px;"><span style="display:inline-block; width:6px; height:6px; border-radius:50%; background:#ef4444;"></span>NDA</span>
    <span style="display:flex; align-items:center; gap:4px;"><span style="display:inline-block; width:6px; height:6px; border-radius:50%; background:#87a96b;"></span>CDS</span>
    <span style="display:flex; align-items:center; gap:4px;"><span style="display:inline-block; width:6px; height:6px; border-radius:50%; background:#38bdf8;"></span>AFCAT</span>
  `;
  accordionList.appendChild(legendDiv);
  
  updateNotesProgressBar();
  
  for (const subjectId in NOTES_DATABASE) {
    if (currentSubjectFilter !== "all" && currentSubjectFilter !== subjectId) {
      continue;
    }
    
    const subject = NOTES_DATABASE[subjectId];
    
    // Filter chapters and topics by search query
    const filteredChapters = [];
    subject.chapters.forEach(chapter => {
      const filteredTopics = chapter.topics.filter(topic => {
        const query = notesSearchQuery.toLowerCase();
        const exams = getTopicExams(topic.id, subjectId);
        const expandedNotes = (typeof EXPANDED_NOTES_DATA !== 'undefined' && EXPANDED_NOTES_DATA[topic.id]) || '';
        const expertNotes = (typeof EXPERT_REVISION_DATA !== 'undefined' && EXPERT_REVISION_DATA[topic.id]) || '';
        const matchesQuery = topic.title.toLowerCase().includes(query) ||
                             (topic.notes && topic.notes.toLowerCase().includes(query)) ||
                             (typeof topic.formulas === 'string' && topic.formulas.toLowerCase().includes(query)) ||
                             expandedNotes.toLowerCase().includes(query) ||
                             expertNotes.toLowerCase().includes(query);
        const matchesExam = currentExamTagFilter === "all" || exams.includes(currentExamTagFilter);
        return matchesQuery && matchesExam;
      });
      
      if (filteredTopics.length > 0) {
        filteredChapters.push({
          ...chapter,
          topics: filteredTopics
        });
      }
    });
    
    if (filteredChapters.length === 0 && !subject.title.toLowerCase().includes(notesSearchQuery.toLowerCase())) {
      continue;
    }
    
    const displayChapters = filteredChapters.length > 0 ? filteredChapters : subject.chapters;
    
    const accordionGroup = document.createElement("div");
    accordionGroup.className = "accordion-group";
    
    // Calculate progress for this subject
    const totalTopics = subject.chapters.reduce((sum, c) => sum + c.topics.length, 0);
    let completedTopics = 0;
    subject.chapters.forEach(c => {
      c.topics.forEach(t => {
        if (STATE.syllabusProgress[t.id] === 'completed') {
          completedTopics++;
        }
      });
    });
    const pct = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
    
    const header = document.createElement("div");
    header.className = "accordion-header";
    header.innerHTML = `
      <div style="display:flex; flex-direction:column; gap:2px;">
        <span style="font-weight:600;">${subject.title}</span>
        <span style="font-size:0.7rem; color:var(--text-muted); font-family:var(--font-mono);">${completedTopics}/${totalTopics} Mastered (${pct}%)</span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    `;
    
    const content = document.createElement("div");
    content.className = "accordion-content";
    
    displayChapters.forEach(chapter => {
      const chapterDiv = document.createElement("div");
      chapterDiv.style.margin = "12px 0 12px 4px";
      chapterDiv.style.borderLeft = "1px solid rgba(255,255,255,0.04)";
      chapterDiv.style.paddingLeft = "8px";
      
      // Calculate chapter progress
      const totalChTopics = chapter.topics.length;
      let completedChTopics = 0;
      chapter.topics.forEach(t => {
        if (STATE.syllabusProgress[t.id] === 'completed') {
          completedChTopics++;
        }
      });
      
      chapterDiv.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.75rem; color:var(--text-muted); font-weight:600; text-transform:uppercase; margin-left:12px; margin-bottom:6px;">
          <span>${chapter.title}</span>
          <span style="font-family:var(--font-mono); font-size:0.7rem;">${completedChTopics}/${totalChTopics}</span>
        </div>
      `;
      
      chapter.topics.forEach(topic => {
        const topicLink = document.createElement("div");
        const isTopicCompleted = STATE.syllabusProgress[topic.id] === 'completed';
        const isTopicActive = selectedTopicId === topic.id;
        
        // Get exams list and build dots
        const exams = getTopicExams(topic.id, subjectId);
        const examColors = {
          'NDA': '#ef4444',
          'CDS': '#87a96b',
          'AFCAT': '#38bdf8'
        };
        const examDots = exams.map(exam => `
          <span style="display:inline-block; width:6px; height:6px; border-radius:50%; background:${examColors[exam] || '#ccc'}; flex-shrink: 0;" title="${exam}"></span>
        `).join('');
        
        topicLink.className = `topic-link ${isTopicActive ? 'active' : ''}`;
        topicLink.innerHTML = `
          <div style="display:flex; align-items:center; gap:8px; width:100%; justify-content:space-between;">
            <div style="display:flex; align-items:center; gap:8px; overflow:hidden;">
              <span class="topic-dot ${isTopicCompleted ? 'completed' : ''}"></span>
              <div style="display:flex; align-items:center; gap:3px; flex-shrink:0;">
                ${examDots}
              </div>
              <span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${topic.title}</span>
            </div>
            ${isTopicCompleted ? '<span style="font-size:0.75rem;"></span>' : ''}
          </div>
        `;
        
        topicLink.addEventListener("click", () => {
          selectedSubjectId = subjectId;
          selectedChapterId = chapter.id;
          selectedTopicId = topic.id;
          document.querySelectorAll(".topic-link").forEach(l => l.classList.remove("active"));
          topicLink.classList.add("active");
          renderTopicView(subjectId, chapter.id, topic.id);
          renderNotesBrowser();
        });
        chapterDiv.appendChild(topicLink);
      });
      content.appendChild(chapterDiv);
    });
    
    header.addEventListener("click", () => {
      accordionGroup.classList.toggle("open");
    });
    
    accordionGroup.appendChild(header);
    accordionGroup.appendChild(content);
    accordionList.appendChild(accordionGroup);
    accordionGroup.classList.add("open");
  }
}

document.querySelectorAll('[data-subject-filter]').forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll('[data-subject-filter]').forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentSubjectFilter = btn.getAttribute("data-subject-filter");
    renderNotesBrowser();
  });
});



function renderMegaIntelligence(data) {
  if (!data) return '<p>No intelligence data found.</p>';
  
  // Flashcards UI
  let flashcardsHtml = '';
  if (data.flashcards && Array.isArray(data.flashcards)) {
    flashcardsHtml = data.flashcards.map((f, i) => `
      <div class="mega-card" style="margin-bottom:10px; padding:15px; background:rgba(34,197,94,0.05); border:1px solid rgba(34,197,94,0.2); border-radius:8px;">
        <div style="font-weight:bold; color:var(--accent);">Q: ${f.front || f.question || 'Concept'}</div>
        <div style="margin-top:8px; color:var(--text-secondary);">A: ${f.back || f.answer || 'Explanation'}</div>
      </div>
    `).join('');
  } else if (data.flashcards && typeof data.flashcards === 'object') {
    flashcardsHtml = Object.values(data.flashcards).map(f => `
      <div class="mega-card" style="margin-bottom:10px; padding:15px; background:rgba(34,197,94,0.05); border:1px solid rgba(34,197,94,0.2); border-radius:8px;">
        <div style="font-weight:bold; color:var(--accent);">Q: ${f.front || f.question || 'Concept'}</div>
        <div style="margin-top:8px; color:var(--text-secondary);">A: ${f.back || f.answer || 'Explanation'}</div>
      </div>
    `).join('');
  }
  
  // Strategies UI
  let strategiesHtml = '';
  if (data.strategies && Array.isArray(data.strategies)) {
    strategiesHtml = data.strategies.map(s => `
      <div class="mega-card" style="margin-bottom:10px; padding:15px; background:rgba(239,68,68,0.05); border:1px dashed rgba(239,68,68,0.3); border-radius:8px;">
        <div style="font-weight:bold; color:#ef4444;">🎯 ${s.name || s.strategy || s.type || 'Strategy'}</div>
        <div style="margin-top:8px; color:var(--text-secondary);">${s.description || s.details || JSON.stringify(s)}</div>
      </div>
    `).join('');
  }

  // Revision Notes
  let notesHtml = data.revision_notes ? `<div style="padding:15px; background:rgba(255,255,255,0.02); border:1px solid var(--border); border-radius:8px; white-space:pre-wrap; line-height:1.6;">${typeof data.revision_notes === 'string' ? data.revision_notes : JSON.stringify(data.revision_notes)}</div>` : '';

  // Priorities
  let prioHtml = data.priority_ranking ? `<pre style="font-size:0.75rem; color:#a855f7; background:rgba(0,0,0,0.2); padding:10px; border-radius:6px;">${JSON.stringify(data.priority_ranking, null, 2)}</pre>` : '';

  return `
    <div class="tab-pane-content fade-in scroll-y" style="height: 100%; padding-bottom: 30px; box-sizing: border-box; overflow-y: auto;">
      
      <div style="display:flex; gap:20px; flex-wrap:wrap; margin-bottom:20px;">
        <div style="flex:1; min-width:300px;">
          <h3 style="color:var(--text-primary); margin-bottom:12px; border-bottom:1px solid var(--border); padding-bottom:8px;">📚 Deep Revision Notes</h3>
          ${notesHtml}
        </div>
        <div style="flex:1; min-width:300px;">
          <h3 style="color:var(--text-primary); margin-bottom:12px; border-bottom:1px solid var(--border); padding-bottom:8px;">🧠 Flashcards & Memory Triggers</h3>
          ${flashcardsHtml || '<p>No flashcards extracted.</p>'}
        </div>
      </div>

      <div style="display:flex; gap:20px; flex-wrap:wrap; margin-bottom:20px;">
        <div style="flex:1; min-width:300px;">
          <h3 style="color:var(--text-primary); margin-bottom:12px; border-bottom:1px solid var(--border); padding-bottom:8px;">⚡ Top Exam Strategies</h3>
          ${strategiesHtml || '<p>No specific strategies discussed.</p>'}
        </div>
        <div style="flex:1; min-width:300px;">
          <h3 style="color:var(--text-primary); margin-bottom:12px; border-bottom:1px solid var(--border); padding-bottom:8px;">📊 Priority & Exam Intelligence</h3>
          ${prioHtml || '<p>No priority ranking available.</p>'}
        </div>
      </div>
      
    </div>
  `;
}

function renderTopicView(subjectId, chapterId, topicId) {
  selectedSubjectId = subjectId;
  selectedChapterId = chapterId;
  selectedTopicId = topicId;
  
  const viewerPane = document.getElementById("deck-viewer-pane");
  const subject = NOTES_DATABASE[subjectId];
  const chapter = subject.chapters.find(c => c.id === chapterId);
  const topic = chapter.topics.find(t => t.id === topicId);
  
  if (!topic) return;
  
  const isCompleted = STATE.syllabusProgress[topic.id] === 'completed';
  const isFormulaSaved = STATE.readFormulasList.includes(topic.id);
  
  // Get prev and next topics
  const topicsList = getFilteredTopicsList();
  const currentIdx = topicsList.findIndex(t => t.topicId === topicId);
  const prevTopic = currentIdx > 0 ? topicsList[currentIdx - 1] : null;
  const nextTopic = currentIdx < topicsList.length - 1 ? topicsList[currentIdx + 1] : null;
  
  // Render Breadcrumbs
  const weightageText = getTopicWeightage(topic.id, subjectId);
  const breadcrumbs = `
    <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
      <span style="color:var(--text-muted); font-size:0.8rem; font-family:var(--font-mono);">${subject.title} &gt; ${chapter.title}</span>
      <span style="font-size: 0.7rem; font-family: var(--font-mono); font-weight: 700; color: var(--accent); border: 1px solid rgba(34, 197, 94, 0.3); padding: 1px 6px; border-radius: 4px; background: rgba(34, 197, 94, 0.08); text-transform: uppercase;">
        Weightage: ${weightageText}
      </span>
    </div>
  `;
  
  // Tab buttons
  const tabsHtml = `
    <div class="topic-tab-bar">
      <button class="tab-btn ${activeNotesTab === 'notes' ? 'active' : ''}" onclick="setNotesTab('notes')">
        Concept Notes
      </button>
      <button class="tab-btn ${activeNotesTab === 'formulas' ? 'active' : ''}" onclick="setNotesTab('formulas')">
        High-Yield Formulas
      </button>
      ${topic.mindmap ? `
        <button class="tab-btn ${activeNotesTab === 'mindmap' ? 'active' : ''}" onclick="setNotesTab('mindmap')">
          Concept Mindmap
        </button>
      ` : ''}
    </div>
  `;
  
  // Tab content selection
  let tabContentHtml = '';
  
  if (topic.type === 'intelligence') {
    tabContentHtml = renderMegaIntelligence(topic.intelligence_data);
  } else if (activeNotesTab === 'notes') {
    let mainNotesContent = topic.notes;
    let isPlaceholder = false;
    if (typeof EXPANDED_NOTES_DATA !== 'undefined' && EXPANDED_NOTES_DATA[topic.id]) {
      mainNotesContent = EXPANDED_NOTES_DATA[topic.id];
      isPlaceholder = true;
    } else if (typeof topic.notes === 'string' && topic.notes.trim().startsWith('Detailed notes expanded in')) {
      isPlaceholder = true;
      mainNotesContent = `<div class="error-msg" style="color: var(--warning); padding: 12px; border: 1px dashed var(--warning); border-radius: 4px;">Notes are loading or currently being updated for this topic.</div>`;
    }
    
    let mapsHtml = '';
    let mapsForTopic = [];
    
    if (typeof TOPIC_MAPS !== 'undefined' && TOPIC_MAPS[topic.id]) {
      mapsForTopic = TOPIC_MAPS[topic.id];
    } else {
      // Fallback diagram based on subject ID if no specific topic map exists
      const subj = (selectedSubjectId || "").toLowerCase();
      if (subj.includes('history')) {
        mapsForTopic = [{ title: "History Reference Map", src: "images/history_mauryan_gupta_map.png" }];
      } else if (subj.includes('geography')) {
        mapsForTopic = [{ title: "Geography Reference Map", src: "images/world_climatic_zones_map.png" }];
      } else if (subj.includes('physics')) {
        mapsForTopic = [{ title: "Physics Reference Diagram", src: "images/physics_circuit_diagram.png" }];
      } else if (subj.includes('biology')) {
        mapsForTopic = [{ title: "Biology Reference Diagram", src: "images/animal_plant_kingdoms.png" }];
      } else if (subj.includes('chemistry')) {
        mapsForTopic = [{ title: "Chemistry Elements Map", src: "images/em_waves_chart.png" }];
      } else if (subj.includes('afcat')) {
        mapsForTopic = [{ title: "AFCAT Spatial Map", src: "images/afcat_venn_diagram.png" }];
      } else {
        mapsForTopic = [{ title: "General Reference Diagram", src: "images/india_mountains_map.png" }];
      }
    }

    if (mapsForTopic && mapsForTopic.length > 0) {
      mapsHtml = `
        <div class="tactical-visual-briefing" style="margin-bottom: 24px; padding: 16px; background: rgba(30, 41, 59, 0.4); border: 1px solid var(--border); border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.15);">
          <div style="font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700; color: var(--accent); margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
            🗺️ TACTICAL MAPS & DIAGRAMS (Click to Enlarge)
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px;">
            ${mapsForTopic.map(map => `
              <div class="map-card" onclick="zoomImage('${map.src}', '${map.title}')" style="cursor: zoom-in; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.05); border-radius: 6px; padding: 8px; transition: transform 0.2s, border-color 0.2s; text-align: center;" onmouseover="this.style.borderColor='var(--accent)'; this.style.transform='scale(1.02)';" onmouseout="this.style.borderColor='rgba(255,255,255,0.05)'; this.style.transform='scale(1)';" >
                <img src="${map.src}" style="width: 100%; height: 120px; object-fit: cover; border-radius: 4px; border: 1px solid rgba(255,255,255,0.05);" alt="${map.title}">
                <div style="font-size: 0.75rem; color: var(--text-primary); margin-top: 6px; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${map.title}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
    
    tabContentHtml = `
      <div class="tab-pane-content fade-in" style="height: 100%;">
        <div class="notes-text scroll-y" style="height: 100%; padding-bottom: 30px; box-sizing: border-box; overflow-y: auto;">
          ${mapsHtml}
          ${parseWikiLinks(mainNotesContent)}
          ${(!isPlaceholder && typeof window.EXPANDED_NOTES_DATA !== 'undefined' && window.EXPANDED_NOTES_DATA[topic.id]) ? `
            <div class="expanded-notes" style="margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1);">
              <div style="color: var(--accent); font-size: 0.8rem; font-family: var(--font-mono); margin-bottom: 12px; letter-spacing: 1px; text-transform: uppercase;">
                [ Advanced Revision Data ]
              </div>
              ${parseWikiLinks(EXPANDED_NOTES_DATA[topic.id])}
            </div>
          ` : ''}
          ${(typeof window.EXPERT_REVISION_DATA !== 'undefined' && window.EXPERT_REVISION_DATA[topic.id]) ? `
            <div class="expert-notes" style="margin-top: 24px; padding-top: 24px; border-top: 1px dashed var(--warning);">
              <div style="color: var(--warning); font-size: 0.8rem; font-family: var(--font-mono); margin-bottom: 12px; letter-spacing: 1px; text-transform: uppercase;">
                [ Expert Tactical Edge ]
              </div>
              ${parseWikiLinks(EXPERT_REVISION_DATA[topic.id])}
            </div>
          ` : ''}
        </div>
      </div>
    `;
  } else if (activeNotesTab === 'formulas') {
    const rawFormulas = (topic.formulas || '').trim();
    const FCOLORS = ['#3b82f6','#22c55e','#f59e0b','#a78bfa','#f43f5e','#06b6d4','#fb923c','#84cc16'];
    const lines = rawFormulas.split('\n').filter(l => l.trim());
    let formulaCardsHtml = '';
    let colorIdx = 0;
    let currentCategory = null;
    let cardItems = [];

    const buildCard = () => {
      if (!currentCategory && cardItems.length === 0) return;
      const color = FCOLORS[colorIdx % FCOLORS.length];
      colorIdx++;
      const itemRows = cardItems.map(item =>
        `<div class="formula-item" style="display:flex;align-items:flex-start;gap:10px;padding:9px 12px;margin-bottom:5px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:7px;transition:background 0.18s,border-color 0.18s;" onmouseover="this.style.background='${color}12';this.style.borderColor='${color}50';" onmouseout="this.style.background='rgba(255,255,255,0.03)';this.style.borderColor='rgba(255,255,255,0.07)';">
          <span style="color:${color};flex-shrink:0;margin-top:2px;">▸</span>
          <code style="font-family:var(--font-mono);font-size:0.85rem;color:var(--text-primary);line-height:1.65;flex:1;white-space:pre-wrap;word-break:break-word;">${item}</code>
          <button onclick="navigator.clipboard.writeText(this.dataset.f);this.textContent='✓';setTimeout(()=>this.textContent='⎘',1300);" data-f="${item.replace(/"/g,'&quot;')}" title="Copy" style="background:none;border:none;color:${color};cursor:pointer;font-size:0.9rem;flex-shrink:0;opacity:0.55;padding:2px 4px;border-radius:4px;transition:opacity 0.15s;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.55'">⎘</button>
        </div>`
      ).join('');
      formulaCardsHtml += `<div class="formula-category-card" style="margin-bottom:16px;border-left:3px solid ${color};border-radius:0 8px 8px 0;overflow:hidden;">
        ${currentCategory ? `<div style="background:${color}18;padding:7px 13px;margin-bottom:7px;font-family:var(--font-mono);font-size:0.72rem;font-weight:700;letter-spacing:0.09em;text-transform:uppercase;color:${color};">📌 ${currentCategory}</div>` : ''}
        <div style="padding:0 4px 0 0;">${itemRows}</div>
      </div>`;
      cardItems = [];
      currentCategory = null;
    };

    lines.forEach(line => {
      const s = line.trim();
      if (/^#{1,3}\s/.test(s) || (s.endsWith(':') && s.length < 60 && !s.includes('=') && !s.includes('→'))) {
        buildCard();
        currentCategory = s.replace(/^#{1,3}\s/, '').replace(/:$/, '');
      } else {
        cardItems.push(s);
      }
    });
    buildCard();

    if (!formulaCardsHtml) formulaCardsHtml = `<div style="color:var(--text-muted);font-family:var(--font-mono);font-size:0.85rem;text-align:center;padding:40px 0;">No formulas available for this topic yet.</div>`;

    tabContentHtml = `
      <div class="tab-pane-content fade-in" style="display:flex;flex-direction:column;height:100%;">
        <div style="padding:8px 0 12px;display:flex;align-items:center;gap:10px;flex-shrink:0;">
          <div style="position:relative;flex:1;">
            <input id="formula-search-input" type="text" placeholder="🔍 Search formulas..." oninput="(function(q){var items=document.querySelectorAll('.formula-item');var lq=q.toLowerCase();items.forEach(function(el){el.style.display=(!lq||el.innerText.toLowerCase().includes(lq))?'':'none';});document.querySelectorAll('.formula-category-card').forEach(function(c){var v=[...c.querySelectorAll('.formula-item')].some(function(i){return i.style.display!=='none'});c.style.display=v?'':'none';});})(this.value)" style="width:100%;box-sizing:border-box;background:rgba(255,255,255,0.05);border:1px solid var(--border);border-radius:8px;padding:8px 12px 8px 14px;color:var(--text-primary);font-size:0.84rem;outline:none;font-family:var(--font-mono);">
          </div>
          <button class="action-btn ${isFormulaSaved ? 'active-green' : ''}" onclick="toggleFormulaReadStatus('${topic.id}', this)" style="padding:8px 14px;flex-shrink:0;white-space:nowrap;">
            ${isFormulaSaved ? '✅ Memorized' : '☐ Mark Memorized'}
          </button>
        </div>
        <div id="formula-cards-container" class="scroll-y" style="flex:1;overflow-y:auto;padding-right:4px;">
          ${formulaCardsHtml}
        </div>
        <div style="font-size:0.7rem;color:var(--text-muted);font-family:var(--font-mono);text-align:center;padding-top:8px;flex-shrink:0;">💡 Click ⎘ to copy any formula · Hover to highlight</div>
      </div>
    `;

  } else if (activeNotesTab === 'mindmap' && topic.mindmap) {
    const MM_COLORS = [
      {bg: '#1e293b', border: '#3b82f6', sub: '#0f172a', subBorder: '#1e3a8a', text: '#bfdbfe'},
      {bg: '#1e293b', border: '#22c55e', sub: '#0f172a', subBorder: '#064e3b', text: '#bbf7d0'},
      {bg: '#1e293b', border: '#f59e0b', sub: '#0f172a', subBorder: '#78350f', text: '#fde68a'},
      {bg: '#1e293b', border: '#ef4444', sub: '#0f172a', subBorder: '#7f1d1d', text: '#fecaca'}
    ];
    let branchesHtml = '';
    topic.mindmap.branches.forEach((branch, bi) => {
      let subnodesHtml = '';
      branch.subnodes.forEach(sub => {
        const cleanSub = sub.replace(/'/g, "\\'");
        const c = MM_COLORS[bi % MM_COLORS.length];
        subnodesHtml += `<div onclick="triggerDoubtExplain('${cleanSub}')" title="Ask Dronacharya: ${cleanSub}" style="cursor:pointer;padding:7px 11px;background:${c.sub};border:1px solid ${c.subBorder};border-radius:6px;font-size:0.79rem;font-weight:500;color:var(--text-primary);transition:all 0.17s ease;display:flex;align-items:center;gap:7px;" onmouseover="this.style.background='${c.bg}';this.style.borderColor='${c.border}';this.style.transform='translateX(5px)';this.style.color='${c.text}';" onmouseout="this.style.background='${c.sub}';this.style.borderColor='${c.subBorder}';this.style.transform='translateX(0)';this.style.color='var(--text-primary)';"><span style="width:5px;height:5px;border-radius:50%;background:${c.border};flex-shrink:0;"></span>${sub}</div>`;
      });
      const c = MM_COLORS[bi % MM_COLORS.length];
      const cleanBranch = branch.title.replace(/'/g, "\\'");
      branchesHtml += `
        <div style="display:flex;flex-direction:column;align-items:stretch;min-width:190px;max-width:230px;border:1px solid ${c.border}35;border-radius:12px;background:${c.bg};overflow:hidden;box-shadow:0 4px 16px rgba(0,0,0,0.2);transition:box-shadow 0.2s,transform 0.2s;" onmouseover="this.style.boxShadow='0 0 0 1px ${c.border}55,0 8px 28px rgba(0,0,0,0.35)';this.style.transform='translateY(-2px)';" onmouseout="this.style.boxShadow='0 4px 16px rgba(0,0,0,0.2)';this.style.transform='translateY(0)';">
          <div onclick="triggerDoubtExplain('${cleanBranch}')" title="Ask Dronacharya: ${cleanBranch}" style="cursor:pointer;padding:10px 13px;background:${c.border}20;border-bottom:1px solid ${c.border}35;font-weight:700;font-family:var(--font-logo);font-size:0.86rem;color:${c.text};letter-spacing:0.3px;transition:background 0.17s;" onmouseover="this.style.background='${c.border}35';" onmouseout="this.style.background='${c.border}20';">
            ${branch.title}
          </div>
          <div style="display:flex;flex-direction:column;gap:5px;padding:9px;">
            ${subnodesHtml}
          </div>
        </div>`;
    });
    
    const cleanRoot = topic.mindmap.root.replace(/'/g, "\\'");
    tabContentHtml = `
      <div class="tab-pane-content fade-in" style="height:100%;display:flex;flex-direction:column;">
        <div style="display:flex;flex-direction:column;align-items:center;gap:0;padding:20px 16px 0;flex-shrink:0;">
          <div onclick="triggerDoubtExplain('${cleanRoot}')" title="Ask Dronacharya: ${cleanRoot}" style="cursor:pointer;padding:13px 30px;background:linear-gradient(135deg,#065f46 0%,#22c55e 100%);border-radius:12px;font-weight:800;font-family:var(--font-logo);font-size:1.1rem;color:#fff;text-shadow:0 1px 3px rgba(0,0,0,0.3);box-shadow:0 0 24px rgba(34,197,94,0.4);text-align:center;transition:all 0.3s ease;letter-spacing:0.5px;" onmouseover="this.style.transform='scale(1.04)';this.style.boxShadow='0 0 36px rgba(34,197,94,0.6)';" onmouseout="this.style.transform='scale(1)';this.style.boxShadow='0 0 24px rgba(34,197,94,0.4)';">🎯 ${topic.mindmap.root}</div>
          <div style="width:2px;height:22px;background:linear-gradient(to bottom,#22c55e,rgba(255,255,255,0.1));"></div>
          <div style="width:75%;height:1px;background:linear-gradient(to right,transparent,rgba(255,255,255,0.1) 20%,rgba(255,255,255,0.1) 80%,transparent);"></div>
        </div>
        <div class="scroll-y" style="flex:1;overflow-y:auto;padding:16px;">
          <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:14px;align-items:flex-start;">
            ${branchesHtml}
          </div>
        </div>
        <div style="font-size:0.7rem;color:var(--text-muted);text-align:center;font-family:var(--font-mono);padding:8px;flex-shrink:0;letter-spacing:0.5px;">🎓 CLICK ANY NODE TO ASK GURU DRONACHARYA · Each branch has a unique color for memory association</div>
      </div>
    `;
  } else {
    tabContentHtml = `<p style="color:var(--text-secondary)">Content not available.</p>`;
  }
  
  // Complete action toggle button
  const completeToggleBtn = `
    <button class="tactical-toggle-btn ${isCompleted ? 'completed' : ''}" onclick="toggleSyllabusTopicStatus('${topic.id}', this)">
      <span class="toggle-dot"></span>
      <span class="toggle-text">${isCompleted ? 'Completed' : 'TAC Mark Complete'}</span>
    </button>
  `;
  
  //Lecture Mode button
  const lectureModeBtn = `
    <button class="lecture-mode-btn" onclick="launchLectureMode('${subjectId}', '${chapterId}', '${topicId}')" style="background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.3); color: #4ade80; padding: 6px 12px; border-radius: 6px; font-weight: 500; cursor: pointer; display: flex; align-items: center; gap: 6px;" title="Watch this topic as an animated lecture with narration">
      Lecture (Beta)
    </button>
  `;

  //Detailed Notes button
  const detailedNotesBtn = `
    <button class="action-btn" onclick="generateDetailedNotesOnDemand('${subjectId}', '${chapterId}', '${topicId}')" style="background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.3); color: #c084fc; padding: 6px 12px; border-radius: 6px; font-weight: 500; cursor: pointer; display: flex; align-items: center; gap: 6px;" title="Explain the entire topic from start to end with AI">
      Detailed Notes
    </button>
  `;

  //Focus Mode toggle button
  const focusModeBtn = `
    <button class="tactical-action-btn ${distractionFreeMode ? 'active' : ''}" onclick="toggleFocusReadingMode()">
      <span>${distractionFreeMode ? 'Standard View' : 'Focus Mode'}</span>
    </button>
  `;
  
  // Navigation footer
  const navFooterHtml = `
    <div class="topic-navigation-footer">
      ${prevTopic ? `
        <button class="nav-arrow-btn" onclick="navigateToTopic('${prevTopic.subjectId}', '${prevTopic.chapterId}', '${prevTopic.topicId}')">
          Previous: ${prevTopic.title}
        </button>
      ` : '<div style="flex:1;"></div>'}
      ${nextTopic ? `
        <button class="nav-arrow-btn next" onclick="navigateToTopic('${nextTopic.subjectId}', '${nextTopic.chapterId}', '${nextTopic.topicId}')">
          Next: ${nextTopic.title}
        </button>
      ` : '<div style="flex:1;"></div>'}
    </div>
  `;
  
  viewerPane.innerHTML = `
    <div class="topic-viewer-card panel ${distractionFreeMode ? 'fullscreen-mode' : ''}">
      <div class="topic-viewer-header">
        <div style="display:flex; flex-direction:column; gap:4px; max-width: 60%; overflow: hidden;">
          ${breadcrumbs}
          <h2 style="font-family:var(--font-logo); font-size:1.4rem; letter-spacing:0.5px; color:#fff; text-shadow:0 0 10px rgba(255,255,255,0.05); white-space: nowrap; overflow: hidden; text-shadow: 0 0 8px rgba(34, 197, 94, 0.1);">${topic.title}</h2>
        </div>
        <div style="display:flex; align-items:center; gap:12px;">
          ${detailedNotesBtn}
          ${lectureModeBtn}
          ${focusModeBtn}
          ${completeToggleBtn}
        </div>
      </div>
      
      ${tabsHtml}
      
      <div class="topic-tab-body">
        ${tabContentHtml}
      </div>
      
      ${navFooterHtml}
    </div>
  `;

  // Re-typeset MathJax after injecting new content
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise([viewerPane]).catch(function(err) {
      console.warn('MathJax typeset error:', err);
    });
  }

  // Initialize dynamic vocabulary search vault if synonyms/antonyms topic is active
  if (topicId === 'synonyms-antonyms-detailed' && activeNotesTab === 'notes') {
    setTimeout(() => {
      if (typeof window.initVocabVault === 'function') {
        window.initVocabVault();
      }
    }, 100);
  }
}

function setNotesTab(tab) {
  activeNotesTab = tab;
  if (selectedSubjectId && selectedChapterId && selectedTopicId) {
    renderTopicView(selectedSubjectId, selectedChapterId, selectedTopicId);
  }
}

function navigateToTopic(subjectId, chapterId, topicId) {
  selectedSubjectId = subjectId;
  selectedChapterId = chapterId;
  selectedTopicId = topicId;
  
  const subject = NOTES_DATABASE[subjectId];
  const chapter = subject.chapters.find(c => c.id === chapterId);
  const topic = chapter.topics.find(t => t.id === topicId);
  if (activeNotesTab === 'mindmap' && (!topic || !topic.mindmap)) {
    activeNotesTab = 'notes';
  }
  
  renderTopicView(subjectId, chapterId, topicId);
  renderNotesBrowser();
}

function toggleFocusReadingMode() {
  distractionFreeMode = !distractionFreeMode;
  
  const deckBrowser = document.querySelector(".deck-browser");
  const sidebar = document.querySelector(".sidebar");
  const topicList = document.querySelector(".topic-list");
  const filterContainer = document.querySelector(".exam-select-container");
  const mainHeader = document.querySelector("#screen-notes h1");
  const mainSub = document.querySelector("#screen-notes .subtitle");
  const progressPanel = document.getElementById("notes-progress-bar-container");
  
  if (distractionFreeMode) {
    if (sidebar) sidebar.style.display = "none";
    if (topicList) topicList.style.display = "none";
    if (progressPanel) progressPanel.style.display = "none";
    if (filterContainer) filterContainer.style.display = "none";
    if (mainHeader) mainHeader.style.display = "none";
    if (mainSub) mainSub.style.display = "none";
    
    if (deckBrowser) {
      deckBrowser.style.gridTemplateColumns = "1fr";
      deckBrowser.style.height = "calc(100vh - 60px)";
    }
  } else {
    if (sidebar) sidebar.style.display = "flex";
    if (topicList) topicList.style.display = "flex";
    if (progressPanel) progressPanel.style.display = "block";
    if (filterContainer) filterContainer.style.display = "flex";
    if (mainHeader) mainHeader.style.display = "block";
    if (mainSub) mainSub.style.display = "block";
    
    if (deckBrowser) {
      deckBrowser.style.gridTemplateColumns = "280px 1fr";
      deckBrowser.style.height = "calc(100vh - 180px)";
    }
  }
  
  if (selectedSubjectId && selectedChapterId && selectedTopicId) {
    renderTopicView(selectedSubjectId, selectedChapterId, selectedTopicId);
  }
}

function toggleSyllabusTopicStatus(topicId, button) {
  const currentStatus = STATE.syllabusProgress[topicId];
  if (currentStatus === 'completed') {
    STATE.syllabusProgress[topicId] = 'in-progress';
  } else {
    STATE.syllabusProgress[topicId] = 'completed';
  }
  saveState();
  
  if (selectedSubjectId && selectedChapterId && selectedTopicId === topicId) {
    renderTopicView(selectedSubjectId, selectedChapterId, topicId);
  }
  renderNotesBrowser();
}

function toggleFormulaReadStatus(topicId, button) {
  const index = STATE.readFormulasList.indexOf(topicId);
  if (index > -1) {
    STATE.readFormulasList.splice(index, 1);
    STATE.readFormulasCount = Math.max(0, STATE.readFormulasCount - 1);
  } else {
    STATE.readFormulasList.push(topicId);
    STATE.readFormulasCount++;
  }
  saveState();
  
  if (selectedSubjectId && selectedChapterId && selectedTopicId === topicId) {
    renderTopicView(selectedSubjectId, selectedChapterId, topicId);
  }
}
