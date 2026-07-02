const fs = require('fs');

// ── Image paths ──────────────────────────────────────────────────────────────
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
  // NEW BATCH (July 2026)
  algebraQuadratic: 'images/algebra_quadratic_complex.png',
  coordinateGeom:   'images/coordinate_geometry.png',
  statisticsProb:   'images/statistics_probability.png',
  arithmeticPct:    'images/arithmetic_percentages.png',
  calculus:         'images/calculus_limits_derivatives.png',
  engGrammar:       'images/english_grammar_chart.png',
  engSentence:      'images/english_sentence_skills.png',
  engVocab:         'images/english_vocabulary_chart.png',
  defenceOrg:       'images/defence_organisations_weapons.png',
  reasoningChart:   'images/reasoning_verbal_nonverbal.png',
  caIndia:          'images/current_affairs_india.png',
  caWorld:          'images/current_affairs_world.png',
  envLaws:          'images/environment_laws_treaties.png',
  spaceTech:        'images/space_technology_defence.png',
  polityElections:  'images/polity_elections_constitution.png',
  chemReactions:    'images/chemistry_reactions_everyday.png',
};

const T = (title, img) => ({ title, src: img });

// ── Complete TOPIC_MAPS ───────────────────────────────────────────────────────
const TOPIC_MAPS = {

  // ═══════════════════════════════════════════════════════════════════════════
  // MATHEMATICS
  // ═══════════════════════════════════════════════════════════════════════════
  "trigonometry":              [T("Trigonometry Unit Circle & Values", IMG.trigCircle)],
  "trig-identities":           [T("Trigonometry Unit Circle & Identities", IMG.trigCircle)],
  "inverse-trig":              [T("Trigonometric Values & Identities", IMG.trigCircle)],
  "2d-geometry":               [T("2D Geometry & Mensuration", IMG.mensuration)],
  "geometry":                  [T("Geometry Shapes & Formulas", IMG.mensuration)],
  "lines-angles-triangles":    [T("Lines, Angles & Triangle Properties", IMG.mensuration)],
  "circles-polygons":          [T("Circles & Polygon Formulas", IMG.mensuration)],
  "mensuration":               [T("Mensuration: Area, Volume & Surface Area", IMG.mensuration)],
  "area-perimeter":            [T("Area & Perimeter Formulas", IMG.mensuration)],
  "surface-area-volume":       [T("Surface Area & Volume of 3D Solids", IMG.mensuration)],
  "algebra-complex":           [T("Quadratic Equations & Complex Numbers", IMG.algebraQuadratic)],
  "quadratic-eq":              [T("Quadratic Equations — Formula Reference", IMG.algebraQuadratic)],
  "complex-numbers":           [T("Complex Numbers — Argand Diagram & De Moivre", IMG.algebraQuadratic)],
  "straight-lines":            [T("Coordinate Geometry & Straight Lines", IMG.coordinateGeom)],
  "statistics-prob":           [T("Statistics & Probability Reference", IMG.statisticsProb)],
  "central-tendency":          [T("Central Tendency — Mean, Median, Mode", IMG.statisticsProb)],
  "data-interpretation":       [T("Data Interpretation — Charts & Calculations", IMG.statisticsProb)],
  "calculus":                  [T("Calculus — Limits, Derivatives & Integration", IMG.calculus)],
  "limits-continuity":         [T("Limits & Continuity Reference", IMG.calculus)],
  "differentiation":           [T("Differentiation — Rules & Applications", IMG.calculus)],
  "integration":               [T("Integration — Techniques & Applications", IMG.calculus)],
  "algebra-matrices":          [T("Matrices & Determinants", IMG.algebraQuadratic)],
  "syl-matrices":              [T("Matrices & Determinants Reference", IMG.algebraQuadratic)],
  "probability-stats":         [T("Probability & Statistics Chart", IMG.statisticsProb)],
  "syl-probability":           [T("Probability — Concepts & Formulas", IMG.statisticsProb)],
  "arithmetic":                [T("Arithmetic — Percentages, Profit & Loss", IMG.arithmeticPct)],
  "percentages-profit-loss":   [T("Percentages, Profit/Loss & Interest", IMG.arithmeticPct)],
  "ratios-averages":           [T("Ratios, Averages & Alligation", IMG.arithmeticPct)],
  "time-distance":             [T("Time, Speed, Distance & Work", IMG.arithmeticPct)],
  "quantitative-aptitude":     [T("Quantitative Aptitude Quick Reference", IMG.arithmeticPct)],
  "syl-numerical-speed":       [T("Number Speed & Accuracy Practice", IMG.arithmeticPct)],
  "syl-numerical-ratios":      [T("Ratios & Numerical Reasoning", IMG.arithmeticPct)],

  // ═══════════════════════════════════════════════════════════════════════════
  // HISTORY
  // ═══════════════════════════════════════════════════════════════════════════
  "revolt-1857":               [T("1857 Revolt Centres & Outbreaks Map", IMG.revolt1857)],
  "mauryan-period":            [T("Maurya & Gupta Empires Map", IMG.mauryaGupta)],
  "gupta-period":              [T("Gupta Empire Extent Map", IMG.mauryaGupta)],
  "mughal-period":             [T("Mughal Empire Territorial Extent", IMG.mughal)],
  "medieval-history":          [T("Mughal Empire Map", IMG.mughal), T("Maurya & Gupta Map", IMG.mauryaGupta)],
  "ancient-history":           [T("Harappan Civilization Sites", IMG.harappan), T("Maurya & Gupta Empires", IMG.mauryaGupta)],
  "indus-valley":              [T("Harappan / Indus Valley Civilization", IMG.harappan)],
  "harappan-period":           [T("Harappan Civilization & Key Sites", IMG.harappan)],
  "freedom-movement":          [T("Indian Freedom Movement 1857–1947", IMG.freedomMovement)],
  "independence-movement":     [T("Freedom Movement Timeline", IMG.freedomMovement)],
  "gandhi-movements":          [T("Freedom Movement Key Events", IMG.freedomMovement)],
  "modern-history":            [T("Freedom Movement Timeline", IMG.freedomMovement), T("1857 Revolt Map", IMG.revolt1857)],

  // ═══════════════════════════════════════════════════════════════════════════
  // GEOGRAPHY
  // ═══════════════════════════════════════════════════════════════════════════
  "syl-geog":                  [T("Major River Systems", IMG.rivers), T("Mountain Ranges", IMG.mountains), T("Plateaus & Passes", IMG.plateaus), T("Location & Latitudes", IMG.latlong), T("Soil Types Map", IMG.soils)],
  "physical-geography":        [T("Physiographic Divisions of India", IMG.mountains), T("Tectonic Plates Map", IMG.tectonics), T("Landforms Diagram", IMG.landforms)],
  "earth-atmosphere":          [T("Atmosphere Layers & Clouds", IMG.clouds), T("Climatic Zones (Köppen)", IMG.climatic)],
  "climatology-clouds":        [T("World Climatic Zones (Köppen)", IMG.climatic), T("Atmosphere & Clouds", IMG.clouds), T("India Monsoon Patterns", IMG.monsoon)],
  "geomorphology-rocks":       [T("Tectonic Plates & Seismic Belts", IMG.tectonics), T("Landforms: Fluvial/Karst/Glacial", IMG.landforms)],
  "universe-solar-system":     [T("World Climatic Zones Reference", IMG.climatic)],
  "world-geography-mountains": [T("Mountain Ranges Map", IMG.mountains), T("Tectonic Plates Map", IMG.tectonics)],
  "world-geography-straits-deserts": [T("World Climatic & Geographical Zones", IMG.climatic), T("Ocean Currents Map", IMG.oceanCurrents)],
  "geography-details":         [T("World Ocean Currents", IMG.oceanCurrents), T("Climatic Zones Map", IMG.climatic)],
  "india-forests-wetlands":    [T("Soil Types Map", IMG.soils), T("India National Parks", IMG.parks)],
  "india-resources-farming":   [T("Mineral Resources & Farming Zones", IMG.resources)],
  "india-transport-routes":    [T("National Highways & Infrastructure", IMG.highways), T("Air, Rail & Sea Routes", IMG.transport)],
  "india-national-parks":      [T("National Parks & Wildlife Sanctuaries", IMG.parks)],
  "mapping-borders-capitals":  [T("India Political Geography", IMG.latlong)],
  "geog-industries":           [T("Mineral Resources Map", IMG.resources)],
  "geog-geopolitics":          [T("World Political Geography", IMG.climatic), T("Ocean Currents Map", IMG.oceanCurrents)],
  "geography-pyq-trends-topic":[T("River Systems Map", IMG.rivers), T("Mountain Ranges Map", IMG.mountains)],
  "geography-pyq-trends":      [T("River Systems Map", IMG.rivers), T("Mountain Ranges Map", IMG.mountains)],
  "india-monsoon":             [T("India Monsoon Patterns", IMG.monsoon)],
  "env-hotspots":              [T("Biodiversity Hotspots & National Parks", IMG.parks)],
  "biodiversity-conservation": [T("National Parks & Wildlife Map", IMG.parks)],
  "env-species":               [T("Animal & Plant Kingdoms", IMG.kingdoms)],
  "env-conservation":          [T("Environment Conservation — Laws & Treaties", IMG.envLaws), T("National Parks Map", IMG.parks)],
  "climate-laws-energy":       [T("Environment — Laws, Treaties & Renewable Energy", IMG.envLaws)],
  "env-treaties":              [T("International Environmental Treaties", IMG.envLaws)],
  "env-laws":                  [T("Indian Environmental Laws & Acts", IMG.envLaws)],
  "env-renewable":             [T("Renewable Energy & Climate Change", IMG.envLaws)],
  "env-pollution":             [T("Pollution Types & Environmental Impact", IMG.envLaws)],

  // ═══════════════════════════════════════════════════════════════════════════
  // PHYSICS
  // ═══════════════════════════════════════════════════════════════════════════
  "physics-optics":            [T("Ray Diagrams: Mirrors & Lenses", IMG.rayDiagrams), T("Human Eye & Prism", IMG.rayOptics)],
  "reflection-refraction":     [T("Ray Diagrams: Mirrors & Lenses", IMG.rayDiagrams), T("Optics Ray Diagrams", IMG.rayOptics)],
  "physics-mechanics":         [T("Newton's Laws & Free Body Diagrams", IMG.newtonsLaws)],
  "newtons-laws":              [T("Newton's Laws of Motion", IMG.newtonsLaws)],
  "energy-power-mechanics":    [T("Mechanics: Force, Energy & Power", IMG.newtonsLaws)],
  "physics-waves":             [T("EM Waves Spectrum", IMG.emWaves), T("Sound Waves Diagram", IMG.soundWaves)],
  "physics-sound":             [T("Sound Waves & Doppler Effect", IMG.soundWaves)],
  "physics-em-waves":          [T("Electromagnetic Spectrum Chart", IMG.emWaves)],
  "physics-thermodynamics":    [T("Thermodynamics & Heat Transfer", IMG.thermodynamics)],
  "physics-heat":              [T("Heat Transfer: Conduction/Convection/Radiation", IMG.thermodynamics)],
  "physics-electromagnetism":  [T("Electrical Circuits & Symbols", IMG.circuits)],
  "physics-electricity-magnetism":[T("Electrical Circuits & Symbol Legend", IMG.circuits)],
  "physics-modern":            [T("EM Spectrum & Nuclear Physics", IMG.emWaves)],
  "physics-nuclear-basics":    [T("Nuclear Physics & EM Waves", IMG.emWaves)],
  "physics-units-everyday":    [T("Physics Reference Diagrams", IMG.newtonsLaws)],
  "physics-pyq-trends":        [T("Newton's Laws Reference", IMG.newtonsLaws), T("EM Spectrum", IMG.emWaves)],
  "physics-pyq-trends-topic":  [T("Physics PYQ Key Diagrams", IMG.newtonsLaws), T("Circuits Diagram", IMG.circuits)],
  "syl-exercises":             [T("Physics Numerical Problems", IMG.newtonsLaws)],
  "syl-numerical":             [T("Physics Numericals Reference", IMG.newtonsLaws)],

  // ═══════════════════════════════════════════════════════════════════════════
  // CHEMISTRY
  // ═══════════════════════════════════════════════════════════════════════════
  "chemistry-substances":      [T("Atomic Structure & Periodic Table", IMG.atomicPeriodic)],
  "acids-bases":               [T("Chemical Bonding & pH Scale", IMG.chemBonding)],
  "chemistry-bonding":         [T("Chemical Bonding Types", IMG.chemBonding), T("Atomic Structure", IMG.atomicPeriodic)],
  "chemistry-metallurgy":      [T("Periodic Table & Reactivity", IMG.atomicPeriodic)],
  "metals-alloys":             [T("Metals, Alloys & Reactivity Series", IMG.chemReactions)],
  "reactivity-series":         [T("Chemical Bonding & Reactivity", IMG.chemBonding)],
  "carbon-compounds":          [T("Chemical Bonding & Organic Chemistry", IMG.chemBonding)],
  "chemistry-everyday-env":    [T("Chemistry & Environment", IMG.chemBonding)],
  "environmental-chemistry":   [T("Chemical Reactions & Environmental Impact", IMG.chemBonding)],
  "chemistry-carbon-numericals":[T("Chemistry Numericals & Carbon Compounds", IMG.chemReactions)],
  "chemistry-numericals":      [T("Chemistry Reactions & Numericals", IMG.chemReactions)],
  "chemistry-everyday-fertilisers":[T("Chemistry in Daily Life — Fertilisers & Materials", IMG.chemReactions)],

  // ═══════════════════════════════════════════════════════════════════════════
  // BIOLOGY
  // ═══════════════════════════════════════════════════════════════════════════
  "biology-cell":              [T("Animal & Plant Cell Structure", IMG.cell), T("Cell Division: Mitosis & Meiosis", IMG.cellDivision)],
  "cell-structure":            [T("Cell Structure Diagram", IMG.cell), T("Cell Division", IMG.cellDivision), T("Chromosome & DNA", IMG.chromosome)],
  "biology-physiology":        [T("Human Organ Systems", IMG.humanBody), T("Digestive System", IMG.digestive), T("Circulatory System", IMG.circulatory)],
  "human-systems":             [T("Major Human Organ Systems", IMG.humanBody), T("Digestive System", IMG.digestive), T("Nervous System", IMG.nervous)],
  "diseases":                  [T("Human Immune & Disease Systems", IMG.humanBody)],
  "biology-diseases":          [T("Human Body Systems & Immunity", IMG.humanBody)],
  "immunity-vaccines":         [T("Human Immunity & Circulatory System", IMG.circulatory)],
  "biology-kingdoms":          [T("Animal & Plant Kingdom Tree", IMG.kingdoms)],
  "plant-kingdom":             [T("Plant Kingdom Classification", IMG.kingdoms), T("Parts of a Flower", IMG.flower)],
  "animal-kingdom":            [T("Animal Kingdom Classification", IMG.kingdoms)],
  "biology-botany":            [T("Plant Kingdom & Flower Parts", IMG.kingdoms), T("Photosynthesis & Respiration", IMG.photosynthesis)],
  "plant-reproduction":        [T("Parts of a Flower & Reproduction", IMG.flower), T("Photosynthesis & Respiration", IMG.photosynthesis)],
  "biology-ecology":           [T("Ecosystem & Food Chain", IMG.parks)],
  "biology-ecology-basics":    [T("Ecosystem & Biodiversity Map", IMG.parks)],

  // ═══════════════════════════════════════════════════════════════════════════
  // POLITY
  // ═══════════════════════════════════════════════════════════════════════════
  "constitution-basics":       [T("Indian Constitution Structure", IMG.constitution)],
  "preamble":                  [T("Constitutional Framework & Preamble", IMG.constitution)],
  "schedules":                 [T("Schedules of the Constitution", IMG.constitution)],
  "fundamental-rights":        [T("Fundamental Rights & Constitutional Framework", IMG.constitution)],
  "dpsp":                      [T("DPSP & Constitutional Articles", IMG.constitution)],
  "citizenship":               [T("Constitutional Structure & Citizenship", IMG.constitution)],
  "union-executive":           [T("Union Executive & Parliamentary System", IMG.constitution)],
  "president":                 [T("President's Role in Parliament", IMG.constitution)],
  "parliament":                [T("Parliament of India Structure", IMG.constitution)],
  "judiciary":                 [T("Indian Judiciary & Constitutional Framework", IMG.constitution)],
  "panchayati-raj":            [T("Local Self-Government Structure", IMG.constitution)],
  "polity-advanced":           [T("Advanced Constitutional Structures", IMG.constitution)],
  "amendments-parts":          [T("Constitutional Amendments & Parts", IMG.constitution)],
  "important-articles":        [T("High-Yield Constitutional Articles", IMG.constitution)],
  "federal-rpa":               [T("Federal Structure Diagram", IMG.constitution)],
  "polity-federal-structure":  [T("Federal Structure of India", IMG.constitution)],
  "governance-emergency":      [T("Emergency Provisions & Governance", IMG.constitution)],
  "constitutional-bodies":     [T("Constitutional Bodies Chart", IMG.constitution)],
  "goverment-executives":      [T("Government Executive Structure", IMG.constitution)],
  "positions-tenures":         [T("Positions, Tenures & Removal Process", IMG.polityElections)],
  "polity-rpa":                [T("Representation of People Act & Elections", IMG.polityElections)],

  // ═══════════════════════════════════════════════════════════════════════════
  // ECONOMICS
  // ═══════════════════════════════════════════════════════════════════════════
  "economics-basics":          [T("GDP, Markets & Monetary Policy", IMG.economics)],
  "econ-concepts":             [T("Economic Concepts & Market Structures", IMG.economics)],
  "econ-poverty-employment":   [T("Economy: Employment & Poverty", IMG.economics)],
  "monetary-fiscal":           [T("Monetary & Fiscal Policy Tools", IMG.economics)],
  "rbi-monetary-policy":       [T("RBI Monetary Policy Instruments", IMG.economics)],
  "budget-trade-reforms":      [T("Budget, Trade & Economic Reforms", IMG.economics)],
  "econ-budget-fiscal":        [T("Fiscal Policy & Budget Structure", IMG.economics)],
  "econ-trade-bop":            [T("Trade & Balance of Payments", IMG.economics)],
  "econ-reforms":              [T("Economic Reforms since 1991", IMG.economics)],
  "external-sector-institutions": [T("Global Institutions & Trade", IMG.economics)],
  "econ-govt-schemes":         [T("Government Economic Schemes", IMG.economics)],
  "five-year-plans":           [T("India's Five Year Plans & NITI Aayog", IMG.caIndia)],
  "govt-schemes":              [T("Government Schemes — Quick Reference", IMG.caIndia)],

  // ═══════════════════════════════════════════════════════════════════════════
  // ENGLISH
  // ═══════════════════════════════════════════════════════════════════════════
  "grammar-rules":             [T("English Grammar — Parts of Speech & Tenses", IMG.engGrammar)],
  "parts-of-speech":           [T("8 Parts of Speech — Reference Card", IMG.engGrammar)],
  "tenses-complete":           [T("Tense Chart — All 12 Tenses", IMG.engGrammar)],
  "subject-verb-agreement":    [T("Subject-Verb Agreement Rules", IMG.engGrammar)],
  "sentence-structure":        [T("Sentence Types & Structure", IMG.engSentence)],
  "voice-conversion":          [T("Active & Passive Voice Rules", IMG.engSentence)],
  "narration-speech":          [T("Direct & Indirect Speech Rules", IMG.engSentence)],
  "modifiers":                 [T("Modifiers, Clauses & Phrases", IMG.engSentence)],
  "punctuation-basics":        [T("Punctuation & Grammar Rules", IMG.engGrammar)],
  "transformation-sentences":  [T("Sentence Transformation Techniques", IMG.engSentence)],
  "vocabulary":                [T("Vocabulary — Synonyms, Antonyms & Idioms", IMG.engVocab)],
  "synonyms-antonyms-detailed":[T("Synonyms & Antonyms Quick Reference", IMG.engVocab)],
  "one-word-substitution":     [T("One Word Substitution List", IMG.engVocab)],
  "idioms-phrases":            [T("Common Idioms & Phrases", IMG.engVocab)],
  "phrasal-verbs":             [T("Phrasal Verbs Reference", IMG.engVocab)],
  "reading-comprehension":     [T("Reading Comprehension Strategies", IMG.engGrammar)],
  "exam-patterns":             [T("English Exam Pattern & Strategy", IMG.engGrammar)],
  "error-detection":           [T("Error Detection — Grammar Rules", IMG.engGrammar)],
  "sentence-improvement":      [T("Sentence Improvement Techniques", IMG.engSentence)],
  "ordering-rearrangement":    [T("Ordering & Rearrangement — Para Jumbles", IMG.engSentence)],
  "fill-blanks-cloze":         [T("Fill in the Blanks — Cloze Test Strategies", IMG.engVocab)],

  // ═══════════════════════════════════════════════════════════════════════════
  // DEFENCE & MILITARY
  // ═══════════════════════════════════════════════════════════════════════════
  "defence-structures":        [T("Defence Forces Structure", IMG.defenceOrg)],
  "rank-equivalence":          [T("Defence Ranks Equivalence Chart", IMG.defenceOrg)],
  "commands":                  [T("Military Commands & Structures", IMG.defenceOrg)],
  "defence-organisations-weapons":[T("Defence Organisations, Missiles & Exercises", IMG.defenceOrg)],
  "tactical-defence-gk":       [T("Defence GK — Organisations & Exercises", IMG.defenceOrg)],
  "bilateral-exercises":       [T("India's Bilateral Military Exercises", IMG.defenceOrg)],
  "missiles-systems":          [T("Indian Missiles & Weapons Systems", IMG.defenceOrg)],

  // ═══════════════════════════════════════════════════════════════════════════
  // REASONING / AFCAT
  // ═══════════════════════════════════════════════════════════════════════════
  "syl-afcat-spatial":         [T("Dot Situation Test", IMG.dotSituation), T("Embedded Figures", IMG.embedded), T("Venn Diagrams", IMG.venn)],
  "afcat-r-embedded":          [T("Embedded Figures Practice", IMG.embedded)],
  "afcat-r-dot":               [T("Dot Situation Test Concepts", IMG.dotSituation)],
  "afcat-r-venn":              [T("Logical Venn Diagrams", IMG.venn)],
  "afcat-r-fig-analogy":       [T("Figure Analogy & Pattern Recognition", IMG.embedded)],
  "afcat-r-fig-class-series":  [T("Figure Classification & Series", IMG.embedded)],
  "afcat-r-fig-completion":    [T("Figure Completion Concepts", IMG.embedded)],
  "afcat-r-cube-dice":         [T("Cube & Dice Visual Reasoning", IMG.dotSituation)],
  "afcat-r-fig-coding":        [T("Figure Coding & Pattern Map", IMG.embedded)],
  "afcat-nonverbal-reasoning": [T("Non-Verbal Reasoning: Figures", IMG.embedded), T("Venn Diagrams", IMG.venn)],
  "syl-nonverbal-reasoning":   [T("Non-Verbal Reasoning Concepts", IMG.embedded)],
  "reasoning-oir":             [T("Verbal & Non-Verbal Reasoning", IMG.reasoningChart)],
  "syl-verbal-reasoning":      [T("Verbal Reasoning — Analogy, Series & Coding", IMG.reasoningChart)],
  "afcat-verbal-reasoning":    [T("Verbal Reasoning Reference Chart", IMG.reasoningChart)],
  "afcat-r-analogy":           [T("Analogy Types — Word, Number & Letter", IMG.reasoningChart)],
  "afcat-r-classification":    [T("Classification & Odd One Out", IMG.reasoningChart)],
  "afcat-r-series":            [T("Number & Letter Series Patterns", IMG.reasoningChart)],
  "afcat-r-coding":            [T("Coding-Decoding Methods", IMG.reasoningChart)],
  "afcat-r-directions":        [T("Direction Sense & Blood Relations", IMG.reasoningChart)],
  "afcat-r-clock-calendar":    [T("Clock & Calendar Problems", IMG.reasoningChart)],
  "afcat-r-syllogism":         [T("Syllogism & Logical Deduction", IMG.reasoningChart)],
  "afcat-r-conclusions":       [T("Conclusions & Inferences", IMG.reasoningChart)],
  "afcat-r-assumptions":       [T("Assumptions & Course of Action", IMG.reasoningChart)],

  // ═══════════════════════════════════════════════════════════════════════════
  // CURRENT AFFAIRS
  // ═══════════════════════════════════════════════════════════════════════════
  "schemes-policies":          [T("Government Schemes & Policies", IMG.caIndia)],
  "ca-schemes":                [T("Current Affairs — Govt Schemes 2024-25", IMG.caIndia)],
  "ca-policies":               [T("Key Government Policies 2024-25", IMG.caIndia)],
  "ca-summits":                [T("International Summits & Meetings", IMG.caWorld)],
  "reports-awards-judgments":  [T("Reports, Awards & Key Judgments", IMG.caIndia)],
  "ca-reports":                [T("Important Reports & Indices 2024-25", IMG.caIndia)],
  "ca-judgments":              [T("Supreme Court Landmark Judgments", IMG.caIndia)],
  "ca-awards":                 [T("Awards & Honours 2024-25", IMG.caIndia)],
  "ca-economic-measures":      [T("Economic Policy Measures 2024-25", IMG.economics)],
  "ca-science-tech-space":     [T("Space, Technology & Defence Acquisitions", IMG.spaceTech)],
  "ca-upsc-master-framework":  [T("Current Affairs Master Framework", IMG.caIndia)],
  "global-events-defence":     [T("Global Affairs & Geopolitics", IMG.caWorld)],
  "ca-geopolitical-flashpoints":[T("Geopolitical Flashpoints & Conflicts", IMG.caWorld)],
  "ca-defence-cooperation":    [T("India's Defence Cooperation", IMG.defenceOrg)],
  "ca-red-sea-crisis":         [T("Red Sea Crisis & Global Trade", IMG.caWorld)],
  "ca-quad-indopacific":       [T("QUAD & Indo-Pacific Strategy", IMG.caWorld)],
  "ca-defense-acquisitions":   [T("Defence Acquisitions & Technology", IMG.spaceTech)],
  "ca-icet-drones":            [T("iCET, Drones & Emerging Technology", IMG.spaceTech)],
  "ca-spain-c295":             [T("C-295 Aircraft & Defence Deals", IMG.defenceOrg)],
  "ca-space-nuclear":          [T("Space Missions & Nuclear Technology", IMG.spaceTech)],
  "ca-relations":              [T("India's International Relations", IMG.caWorld)],
};

// ── Inject into notes_browser.js ─────────────────────────────────────────────
const content = fs.readFileSync('js/notes_browser.js', 'utf8');

// Find start of TOPIC_MAPS block (searching for the comment or const declaration)
const startMarker = '// Topic Maps';
const altMarker   = 'const TOPIC_MAPS';

let startIdx = content.indexOf(startMarker);
if (startIdx === -1) startIdx = content.indexOf(altMarker);

if (startIdx === -1) {
  console.error('Could not find TOPIC_MAPS in notes_browser.js!');
  process.exit(1);
}

// Find the closing `};` of TOPIC_MAPS
// The TOPIC_MAPS object starts with `const TOPIC_MAPS = {` — find its closing `};`
const tmStart = content.indexOf('const TOPIC_MAPS', startIdx);
// find opening brace
let braceDepth = 0;
let tmEnd = -1;
for (let i = tmStart; i < content.length; i++) {
  if (content[i] === '{') braceDepth++;
  else if (content[i] === '}') {
    braceDepth--;
    if (braceDepth === 0) {
      // skip to end of line (the `;`)
      tmEnd = content.indexOf('\n', i);
      break;
    }
  }
}

if (tmEnd === -1) {
  console.error('Could not find end of TOPIC_MAPS object!');
  process.exit(1);
}

const newMapBlock =
  '// Topic Maps & Diagrams Mapping\n' +
  'const TOPIC_MAPS = ' +
  JSON.stringify(TOPIC_MAPS, null, 2) +
  ';\n';

const newContent =
  content.substring(0, startIdx) +
  newMapBlock +
  content.substring(tmEnd + 1);

fs.writeFileSync('js/notes_browser.js', newContent, 'utf8');
console.log('SUCCESS! TOPIC_MAPS updated with', Object.keys(TOPIC_MAPS).length, 'topic mappings.');
