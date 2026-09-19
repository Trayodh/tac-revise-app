// 4. SYLLABUS DATA FOR SYLLABUS TRACKER
// ==========================================
const SYLLABUS_DATABASE = [
  {
    exam: "NDA",
    subject: "Mathematics",
    topics: [
      { id: "syl-trig", name: "Trigonometric Identities & Equations" },
      { id: "syl-limits", name: "Limits, Continuity & Differentiability" },
      { id: "syl-integration", name: "Definite and Indefinite Integrals" },
      { id: "syl-matrices", name: "Matrices and Determinants" },
      { id: "syl-probability", name: "Probability & Statistics" }
    ]
  },
  {
    exam: "CDS",
    subject: "General Knowledge",
    topics: [
      { id: "syl-fr", name: "Fundamental Rights & Duties" },
      { id: "syl-parliament", name: "President, Parliament & State Legislature" },
      { id: "dpsp", name: "DPSP & Fundamental Duties" },
      { id: "ancient-india", name: "Ancient Indian History" },
      { id: "medieval-india", name: "Medieval Indian History" },
      { id: "syl-history", name: "Indian National Movement (1885 - 1947)" },
      { id: "syl-geog", name: "Indian Geography (Rivers, Passes & Soils)" },
      { id: "earth-atmosphere", name: "Earth Structure & Atmosphere" },
      { id: "econ-concepts", name: "Core Economic Concepts & Sectors" },
      { id: "rbi-monetary-policy", name: "RBI & Monetary Policy Tools" },
      { id: "reflection-refraction", name: "Physics: Optics & Light" },
      { id: "newtons-laws", name: "Physics: Mechanics & Motion" },
      { id: "syl-exercises", name: "Physics: Work, Energy & Gravity" },
      { id: "physics-sound", name: "Physics: Sound Waves & Acoustics" },
      { id: "physics-em-waves", name: "Physics: Electromagnetic Waves & Spectrum" },
      { id: "acids-bases", name: "Chemistry: Acids, Bases & Salts" },
      { id: "syl-numerical", name: "Chemistry: Chemical Bonding & Periodic Table" },
      { id: "metals-alloys", name: "Chemistry: Metals, Ores, Alloys & Metallurgy" },
      { id: "reactivity-series", name: "Chemistry: Reactivity Series & Displacement" },
      { id: "carbon-compounds", name: "Chemistry: Carbon & its Compounds" },
      { id: "chemistry-numericals", name: "Chemistry: Mole Concept & Concentration" },
      { id: "cell-structure", name: "Biology: Cell Biology & Division" },
      { id: "human-systems", name: "Biology: Vital Human Systems & Organs" },
      { id: "diseases", name: "Biology: Human Diseases & Pathogens" },
      { id: "plant-kingdom", name: "Biology: Plant Kingdom Classification" },
      { id: "animal-kingdom", name: "Biology: Animal Kingdom Classification" },
      { id: "plant-reproduction", name: "Biology: Plant Reproduction & Hormones" },
      { id: "vedic-age", name: "History: Vedic Age & Literature" },
      { id: "sangam-age", name: "History: Sangam Age & Tinais" },
      { id: "sikh-history", name: "History: Sikh History & Gurus" },
      { id: "european-arrival", name: "History: European Arrival & Expansion" },
      { id: "revolt-1857", name: "History: Revolt of 1857 & Impact" },
      { id: "acts-reforms", name: "History: Constitutional Acts & Reforms" },
      { id: "partition-independence", name: "History: Partition, Independence & Integration" },
      { id: "world-history-basics", name: "History: World History & Revolutions" },
      { id: "culture-dances-festivals", name: "Culture: Classical & Folk Dances, Paintings" },
      { id: "culture-monuments-sites", name: "Culture: Temples, Monuments & UNESCO Sites" },
      { id: "world-geography-straits-deserts", name: "Geography: Straits, Canals, Deserts & Seas" },
      { id: "mapping-borders-capitals", name: "Geography: Borders, Capitals & Strategic Mapping" },
      { id: "citizenship", name: "Polity: Citizenship Rules & CAA" },
      { id: "goverment-executives", name: "Polity: PM, CM & Governor comparison" },
      { id: "judiciary", name: "Polity: Supreme Court, High Court & Writs" },
      { id: "panchayati-raj", name: "Polity: Panchayati Raj & Municipalities" },
      { id: "governance-emergency", name: "Polity: Emergency Provisions" },
      { id: "econ-poverty-employment", name: "Economics: Poverty, Jobs & Agriculture" },
      { id: "five-year-plans", name: "Economics: Five-Year Plans & planning" },
      { id: "external-sector-institutions", name: "Economics: IMF, WTO & Balance of Payments" },
      { id: "immunity-vaccines", name: "Biology: Immunity, Lymphocytes & Vaccines" },
      { id: "biology-ecology-basics", name: "Biology: Ecology Basics & Energy Pyramids" },
      { id: "physics-heat", name: "Physics: Thermodynamics & Heat Transfer" },
      { id: "physics-electricity-magnetism", name: "Physics: Electricity, Circuits & Magnetism" },
      { id: "physics-nuclear-basics", name: "Physics: Nuclear Decay, Fission & Fusion" },
      { id: "physics-units-everyday", name: "Physics: SI Units & Everyday Phenomena" },
      { id: "chemistry-everyday-fertilisers", name: "Chemistry: Soaps, Glass, Cement & Fuels" },
      { id: "environmental-chemistry", name: "Chemistry: Environmental Chemistry & Pollution" },
      { id: "ca-science-tech-space", name: "Current Affairs: Science, Tech & Space Missions" },
      { id: "defence-organisations-weapons", name: "Military: Defence Organisations, Weapons & treaties" }
    ]
  },
  {
    exam: "AFCAT",
    subject: "General Test & Military Aptitude",
    topics: [
      { id: "syl-ranks", name: "Officer Equivalent Ranks Chart" },
      { id: "syl-commands", name: "Military Commands & Headquarters" },
      { id: "syl-exercises", name: "Joint Military Exercises & Missiles" },
      { id: "syl-verbal-reasoning", name: "Verbal Reasoning & OIR" },
      { id: "syl-nonverbal-reasoning", name: "Non-Verbal Reasoning & OIR" }
    ]
  },
  {
    exam: "AFCAT",
    subject: "Numerical Ability (Mathematics)",
    topics: [
      { id: "syl-numerical-speed", name: "Time, Speed & Distance Formulas" },
      { id: "syl-numerical-ratios", name: "Ratios, Proportions & Percentages" }
    ]
  },
  {
    exam: "NDA",
    subject: "English",
    topics: [
      { id: "parts-of-speech", name: "Grammar: Parts of Speech" },
      { id: "tenses-complete", name: "Grammar: Tenses & Consistency" },
      { id: "subject-verb-agreement", name: "Grammar: Subject-Verb Agreement" },
      { id: "voice-conversion", name: "Grammar: Active & Passive Voice" },
      { id: "narration-speech", name: "Grammar: Direct & Indirect Speech" },
      { id: "synonyms-antonyms-detailed", name: "Vocabulary: Synonyms & Antonyms" },
      { id: "one-word-substitution", name: "Vocabulary: One-Word Substitutions" },
      { id: "idioms-phrases", name: "Vocabulary: Idioms & Phrases" },
      { id: "error-detection", name: "UPSC: Spotting Errors" }
    ]
  },
  {
    exam: "CDS",
    subject: "English",
    topics: [
      { id: "parts-of-speech", name: "Grammar: Parts of Speech" },
      { id: "tenses-complete", name: "Grammar: Tenses & Consistency" },
      { id: "subject-verb-agreement", name: "Grammar: Subject-Verb Agreement" },
      { id: "sentence-structure", name: "Grammar: Sentence Structure & Parallelism" },
      { id: "voice-conversion", name: "Grammar: Active & Passive Voice" },
      { id: "narration-speech", name: "Grammar: Direct & Indirect Speech" },
      { id: "modifiers", name: "Grammar: Misplaced & Dangling Modifiers" },
      { id: "punctuation-basics", name: "Grammar: Punctuation Basics" },
      { id: "transformation-sentences", name: "Grammar: Transformation of Sentences" },
      { id: "synonyms-antonyms-detailed", name: "Vocabulary: Synonyms & Antonyms" },
      { id: "one-word-substitution", name: "Vocabulary: One-Word Substitutions" },
      { id: "idioms-phrases", name: "Vocabulary: Idioms & Phrases" },
      { id: "phrasal-verbs", name: "Vocabulary: Phrasal Verbs" },
      { id: "reading-comprehension", name: "Vocabulary: Reading Comprehension" },
      { id: "error-detection", name: "UPSC: Spotting Errors" },
      { id: "sentence-improvement", name: "UPSC: Sentence Improvement" },
      { id: "ordering-rearrangement", name: "UPSC: Ordering of Words & Sentences" },
      { id: "fill-blanks-cloze", name: "UPSC: Fill in the Blanks & Cloze Test" }
    ]
  },
  {
    exam: "AFCAT",
    subject: "Verbal Ability in English",
    topics: [
      { id: "parts-of-speech", name: "Grammar: Parts of Speech" },
      { id: "tenses-complete", name: "Grammar: Tenses & Consistency" },
      { id: "subject-verb-agreement", name: "Grammar: Subject-Verb Agreement" },
      { id: "voice-conversion", name: "Grammar: Active & Passive Voice" },
      { id: "narration-speech", name: "Grammar: Direct & Indirect Speech" },
      { id: "synonyms-antonyms-detailed", name: "Vocabulary: Synonyms & Antonyms" },
      { id: "one-word-substitution", name: "Vocabulary: One-Word Substitutions" },
      { id: "idioms-phrases", name: "Vocabulary: Idioms & Phrases" },
      { id: "phrasal-verbs", name: "Vocabulary: Phrasal Verbs" },
      { id: "error-detection", name: "Grammar: Spotting Errors" }
    ]
  }
];

// ==========================================