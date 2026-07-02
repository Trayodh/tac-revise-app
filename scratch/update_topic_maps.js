const fs = require('fs');

// All new images available (old + new)
const IMG = {
  // HISTORY
  revolt1857:       'images/history_1857_revolt_map.png',
  mauryaGupta:      'images/history_mauryan_gupta_map.png',
  mughal:           'images/mughal_empire_map.png',
  freedomMovement:  'images/freedom_movement_timeline.png',
  harappan:         'images/harappan_civilization_map.png',
  // GEOGRAPHY
  rivers:           'images/india_rivers_map.png',
  mountains:        'images/india_mountains_map.png',
  plateaus:         'images/india_plateaus_passes_map.png',
  latlong:          'images/india_latlong_map.png',
  soils:            'images/india_soils_map.png',
  resources:        'images/india_resources_map.png',
  highways:         'images/india_highways_map.png',
  transport:        'images/india_transport_map.png',
  parks:            'images/india_parks_map.png',
  damsRivers:       'images/india_dams_rivers_detailed.png',
  dams:             'images/india_dams_map.png',
  monsoon:          'images/india_monsoon_patterns.png',
  climatic:         'images/world_climatic_zones_map.png',
  tectonics:        'images/world_tectonics_map.png',
  landforms:        'images/landforms_diagram.png',
  oceanCurrents:    'images/world_ocean_currents_map.png',
  clouds:           'images/clouds_diagram.png',
  // PHYSICS
  rayDiagrams:      'images/mirrors_lens_ray_diagrams.png',
  rayOptics:        'images/physics_ray_diagram.png',
  circuits:         'images/physics_circuit_diagram.png',
  emWaves:          'images/em_waves_chart.png',
  newtonsLaws:      'images/newtons_laws_mechanics_diagram.png',
  soundWaves:       'images/sound_waves_diagram.png',
  thermodynamics:   'images/thermodynamics_heat_diagram.png',
  // CHEMISTRY
  atomicPeriodic:   'images/atomic_structure_periodic_table.png',
  chemBonding:      'images/chemical_bonding_reactions.png',
  // BIOLOGY
  cell:             'images/cell_diagram.png',
  cellDivision:     'images/cell_division_mitosis.png',
  chromosome:       'images/chromosome_structure.png',
  humanBody:        'images/human_body_systems.png',
  kingdoms:         'images/animal_plant_kingdoms.png',
  flower:           'images/flower_parts_diagram.png',
  digestive:        'images/human_digestive_system.png',
  circulatory:      'images/human_circulatory_heart.png',
  nervous:          'images/human_nervous_system.png',
  photosynthesis:   'images/photosynthesis_respiration_diagram.png',
  // POLITY / ECONOMICS / MATHS
  constitution:     'images/indian_constitution_structure.png',
  economics:        'images/economics_market_gdp_diagram.png',
  trigCircle:       'images/trigonometry_unit_circle.png',
  mensuration:      'images/mensuration_geometry_formulas.png',
  // AFCAT
  dotSituation:     'images/afcat_dot_situation.png',
  embedded:         'images/afcat_embedded_figures.png',
  venn:             'images/afcat_venn_diagram.png',
};

const T = (title, img) => ({ title, src: img });

const TOPIC_MAPS = {
  // ===== MATHEMATICS =====
  "trigonometry":           [T("Trigonometry Unit Circle & Values", IMG.trigCircle)],
  "trig-identities":        [T("Trigonometry Unit Circle & Identities", IMG.trigCircle)],
  "inverse-trig":           [T("Trigonometric Values & Identities", IMG.trigCircle)],
  "2d-geometry":            [T("2D Geometry & Mensuration", IMG.mensuration)],
  "geometry":               [T("Geometry Shapes & Formulas", IMG.mensuration)],
  "lines-angles-triangles": [T("Lines, Angles & Triangle Properties", IMG.mensuration)],
  "circles-polygons":       [T("Circles & Polygon Formulas", IMG.mensuration)],
  "mensuration":            [T("Mensuration: Area, Volume & Surface Area", IMG.mensuration)],
  "area-perimeter":         [T("Area & Perimeter Formulas", IMG.mensuration)],
  "surface-area-volume":    [T("Surface Area & Volume of 3D Solids", IMG.mensuration)],

  // ===== HISTORY =====
  "revolt-1857":            [T("1857 Revolt Centres & Outbreaks Map", IMG.revolt1857)],
  "mauryan-period":         [T("Maurya & Gupta Empires Map", IMG.mauryaGupta)],
  "gupta-period":           [T("Gupta Empire Extent Map", IMG.mauryaGupta)],
  "mughal-period":          [T("Mughal Empire Territorial Extent", IMG.mughal)],
  "medieval-history":       [T("Mughal Empire Map", IMG.mughal), T("Maurya & Gupta Map", IMG.mauryaGupta)],
  "ancient-history":        [T("Harappan Civilization Sites", IMG.harappan), T("Maurya & Gupta Empires", IMG.mauryaGupta)],
  "indus-valley":           [T("Harappan / Indus Valley Civilization", IMG.harappan)],
  "harappan-period":        [T("Harappan Civilization & Key Sites", IMG.harappan)],
  "freedom-movement":       [T("Indian Freedom Movement 1857–1947", IMG.freedomMovement)],
  "independence-movement":  [T("Freedom Movement Timeline", IMG.freedomMovement)],
  "gandhi-movements":       [T("Freedom Movement Key Events", IMG.freedomMovement)],
  "modern-history":         [T("Freedom Movement Timeline", IMG.freedomMovement), T("1857 Revolt Map", IMG.revolt1857)],

  // ===== GEOGRAPHY =====
  "syl-geog":               [T("Major River Systems", IMG.rivers), T("Mountain Ranges", IMG.mountains), T("Plateaus & Passes", IMG.plateaus), T("Location & Latitudes", IMG.latlong), T("Soil Types Map", IMG.soils)],
  "physical-geography":     [T("Physiographic Divisions of India", IMG.mountains), T("Tectonic Plates Map", IMG.tectonics), T("Landforms Diagram", IMG.landforms)],
  "earth-atmosphere":       [T("Atmosphere Layers & Clouds", IMG.clouds), T("Climatic Zones (Köppen)", IMG.climatic)],
  "climatology-clouds":     [T("World Climatic Zones (Köppen)", IMG.climatic), T("Atmosphere & Clouds", IMG.clouds), T("India Monsoon Patterns", IMG.monsoon)],
  "geomorphology-rocks":    [T("Tectonic Plates & Seismic Belts", IMG.tectonics), T("Landforms: Fluvial/Karst/Glacial", IMG.landforms)],
  "universe-solar-system":  [T("World Climatic Zones Reference", IMG.climatic)],
  "world-geography-mountains": [T("Mountain Ranges Map", IMG.mountains), T("Tectonic Plates Map", IMG.tectonics)],
  "world-geography-straits-deserts": [T("World Climatic & Geographical Zones", IMG.climatic), T("Ocean Currents Map", IMG.oceanCurrents)],
  "geography-details":      [T("World Ocean Currents", IMG.oceanCurrents), T("Climatic Zones Map", IMG.climatic)],
  "india-forests-wetlands": [T("Soil Types Map", IMG.soils), T("India National Parks", IMG.parks)],
  "india-resources-farming":[T("Mineral Resources & Farming Zones", IMG.resources)],
  "india-transport-routes": [T("National Highways & Infrastructure", IMG.highways), T("Air, Rail & Sea Routes", IMG.transport)],
  "india-national-parks":   [T("National Parks & Wildlife Sanctuaries", IMG.parks)],
  "mapping-borders-capitals":[T("India Political Geography", IMG.latlong)],
  "geog-industries":        [T("Mineral Resources Map", IMG.resources)],
  "geog-geopolitics":       [T("World Political Geography", IMG.climatic), T("Ocean Currents Map", IMG.oceanCurrents)],
  "industrics-geopolitics": [T("World Geopolitical Map", IMG.climatic)],
  "geography-pyq-trends":   [T("River Systems Map", IMG.rivers), T("Mountain Ranges Map", IMG.mountains)],
  "india-monsoon":          [T("India Monsoon Patterns", IMG.monsoon)],
  "env-hotspots":           [T("Biodiversity Hotspots Map", IMG.parks)],
  "biodiversity-conservation":[T("National Parks & Wildlife Map", IMG.parks)],
  "env-species":            [T("Animal & Plant Kingdoms", IMG.kingdoms)],

  // ===== PHYSICS =====
  "physics-optics":         [T("Ray Diagrams: Mirrors & Lenses", IMG.rayDiagrams), T("Human Eye & Prism", IMG.rayOptics)],
  "reflection-refraction":  [T("Ray Diagrams: Mirrors & Lenses", IMG.rayDiagrams), T("Optics Ray Diagrams", IMG.rayOptics)],
  "physics-mechanics":      [T("Newton's Laws & Free Body Diagrams", IMG.newtonsLaws)],
  "newtons-laws":           [T("Newton's Laws of Motion", IMG.newtonsLaws)],
  "energy-power-mechanics": [T("Mechanics: Force, Energy & Power", IMG.newtonsLaws)],
  "physics-waves":          [T("EM Waves Spectrum", IMG.emWaves), T("Sound Waves Diagram", IMG.soundWaves)],
  "physics-sound":          [T("Sound Waves & Doppler Effect", IMG.soundWaves)],
  "physics-em-waves":       [T("Electromagnetic Spectrum Chart", IMG.emWaves)],
  "physics-thermodynamics": [T("Thermodynamics & Heat Transfer", IMG.thermodynamics)],
  "physics-heat":           [T("Heat Transfer: Conduction/Convection/Radiation", IMG.thermodynamics)],
  "physics-electromagnetism":[T("Electrical Circuits & Symbols", IMG.circuits)],
  "physics-electricity-magnetism":[T("Electrical Circuits & Symbol Legend", IMG.circuits)],
  "physics-modern":         [T("EM Spectrum & Nuclear Physics", IMG.emWaves)],
  "physics-nuclear-basics": [T("Nuclear Physics & EM Waves", IMG.emWaves)],
  "physics-units-everyday": [T("Physics Reference Diagrams", IMG.newtonsLaws)],

  // ===== CHEMISTRY =====
  "chemistry-substances":   [T("Atomic Structure & Periodic Table", IMG.atomicPeriodic)],
  "acids-bases":            [T("Chemical Bonding & pH Scale", IMG.chemBonding)],
  "chemistry-bonding":      [T("Chemical Bonding Types", IMG.chemBonding), T("Atomic Structure", IMG.atomicPeriodic)],
  "chemistry-metallurgy":   [T("Periodic Table & Reactivity", IMG.atomicPeriodic)],
  "metals-alloys":          [T("Periodic Table & Metal Properties", IMG.atomicPeriodic)],
  "reactivity-series":      [T("Chemical Bonding & Reactivity", IMG.chemBonding)],
  "carbon-compounds":       [T("Chemical Bonding & Organic Chemistry", IMG.chemBonding)],
  "chemistry-everyday-env": [T("Chemistry & Environment", IMG.chemBonding)],
  "environmental-chemistry":[T("Chemical Reactions & Environmental Impact", IMG.chemBonding)],

  // ===== BIOLOGY =====
  "biology-cell":           [T("Animal & Plant Cell Structure", IMG.cell), T("Cell Division: Mitosis & Meiosis", IMG.cellDivision)],
  "cell-structure":         [T("Cell Structure Diagram", IMG.cell), T("Cell Division", IMG.cellDivision), T("Chromosome & DNA", IMG.chromosome)],
  "biology-physiology":     [T("Human Organ Systems", IMG.humanBody), T("Digestive System", IMG.digestive), T("Circulatory System", IMG.circulatory)],
  "human-systems":          [T("Major Human Organ Systems", IMG.humanBody), T("Digestive System", IMG.digestive), T("Nervous System", IMG.nervous)],
  "diseases":               [T("Human Immune & Disease Systems", IMG.humanBody)],
  "biology-diseases":       [T("Human Body Systems & Immunity", IMG.humanBody)],
  "immunity-vaccines":      [T("Human Immunity & Circulatory System", IMG.circulatory)],
  "biology-kingdoms":       [T("Animal & Plant Kingdom Tree", IMG.kingdoms)],
  "plant-kingdom":          [T("Plant Kingdom Classification", IMG.kingdoms), T("Parts of a Flower", IMG.flower)],
  "animal-kingdom":         [T("Animal Kingdom Classification", IMG.kingdoms)],
  "biology-botany":         [T("Plant Kingdom & Flower Parts", IMG.kingdoms), T("Photosynthesis & Respiration", IMG.photosynthesis)],
  "plant-reproduction":     [T("Parts of a Flower & Reproduction", IMG.flower), T("Photosynthesis & Respiration", IMG.photosynthesis)],
  "biology-ecology":        [T("Ecosystem & Food Chain", IMG.parks)],
  "biology-ecology-basics": [T("Ecosystem & Biodiversity Map", IMG.parks)],

  // ===== POLITY =====
  "constitution-basics":    [T("Indian Constitution Structure", IMG.constitution)],
  "preamble":               [T("Constitutional Framework & Preamble", IMG.constitution)],
  "schedules":              [T("Schedules of the Constitution", IMG.constitution)],
  "fundamental-rights":     [T("Fundamental Rights & Constitutional Framework", IMG.constitution)],
  "dpsp":                   [T("DPSP & Constitutional Articles", IMG.constitution)],
  "citizenship":            [T("Constitutional Structure & Citizenship", IMG.constitution)],
  "union-executive":        [T("Union Executive & Parliamentary System", IMG.constitution)],
  "president":              [T("President's Role in Parliament", IMG.constitution)],
  "parliament":             [T("Parliament of India Structure", IMG.constitution)],
  "judiciary":              [T("Indian Judiciary & Constitutional Framework", IMG.constitution)],
  "panchayati-raj":         [T("Local Self-Government Structure", IMG.constitution)],
  "polity-advanced":        [T("Advanced Constitutional Structures", IMG.constitution)],
  "amendments-parts":       [T("Constitutional Amendments & Parts", IMG.constitution)],
  "important-articles":     [T("High-Yield Constitutional Articles", IMG.constitution)],
  "federal-rpa":            [T("Federal Structure Diagram", IMG.constitution)],
  "polity-federal-structure":[T("Federal Structure of India", IMG.constitution)],
  "governance-emergency":   [T("Emergency Provisions & Governance", IMG.constitution)],
  "constitutional-bodies":  [T("Constitutional Bodies Chart", IMG.constitution)],
  "goverment-executives":   [T("Government Executive Structure", IMG.constitution)],

  // ===== ECONOMICS =====
  "economics-basics":       [T("GDP, Markets & Monetary Policy", IMG.economics)],
  "econ-concepts":          [T("Economic Concepts & Market Structures", IMG.economics)],
  "econ-poverty-employment":[T("Economy: Employment & Poverty", IMG.economics)],
  "monetary-fiscal":        [T("Monetary & Fiscal Policy Tools", IMG.economics)],
  "rbi-monetary-policy":    [T("RBI Monetary Policy Instruments", IMG.economics)],
  "budget-trade-reforms":   [T("Budget, Trade & Economic Reforms", IMG.economics)],
  "econ-budget-fiscal":     [T("Fiscal Policy & Budget Structure", IMG.economics)],
  "econ-trade-bop":         [T("Trade & Balance of Payments", IMG.economics)],
  "econ-reforms":           [T("Economic Reforms since 1991", IMG.economics)],
  "external-sector-institutions": [T("Global Institutions & Trade", IMG.economics)],
  "econ-govt-schemes":      [T("Government Economic Schemes", IMG.economics)],

  // ===== AFCAT REASONING =====
  "syl-afcat-spatial":      [T("Dot Situation Test", IMG.dotSituation), T("Embedded Figures", IMG.embedded), T("Venn Diagrams", IMG.venn)],
  "afcat-r-embedded":       [T("Embedded Figures Practice", IMG.embedded)],
  "afcat-r-dot":            [T("Dot Situation Test Concepts", IMG.dotSituation)],
  "afcat-r-venn":           [T("Logical Venn Diagrams", IMG.venn)],
  "afcat-r-fig-analogy":    [T("Figure Analogy & Pattern Recognition", IMG.embedded)],
  "afcat-r-fig-class-series":[T("Figure Classification & Series", IMG.embedded)],
  "afcat-r-fig-completion": [T("Figure Completion Concepts", IMG.embedded)],
  "afcat-r-cube-dice":      [T("Cube & Dice Visual Reasoning", IMG.dotSituation)],
  "afcat-r-fig-coding":     [T("Figure Coding & Pattern Map", IMG.embedded)],
  "afcat-nonverbal-reasoning":[T("Non-Verbal Reasoning: Figures", IMG.embedded), T("Venn Diagrams", IMG.venn)],
  "syl-nonverbal-reasoning": [T("Non-Verbal Reasoning Concepts", IMG.embedded)],

  // ===== DEFENCE STRUCTURES =====
  "defence-structures":     [T("Defence Forces Structure", IMG.constitution)],
  "rank-equivalence":       [T("Defence Ranks Equivalence Chart", IMG.constitution)],
};

const content = fs.readFileSync('js/notes_browser.js', 'utf8');
const startIdx = content.indexOf('// Topic Maps');
const endAfterBrace = content.indexOf('\n};\n', startIdx);
const endIdx = endAfterBrace !== -1 ? endAfterBrace + 4 : content.indexOf('\r\n};\r\n', startIdx) + 5;

if (startIdx === -1) {
  console.error('Could not find TOPIC_MAPS start!');
  process.exit(1);
}

const newMapBlock = `// Topic Maps & Diagrams Mapping\nconst TOPIC_MAPS = ${JSON.stringify(TOPIC_MAPS, null, 2)};\n`;
const newContent = content.substring(0, startIdx) + newMapBlock + content.substring(endIdx);
fs.writeFileSync('js/notes_browser.js', newContent, 'utf8');
console.log('TOPIC_MAPS updated with', Object.keys(TOPIC_MAPS).length, 'topic mappings across all subjects!');
