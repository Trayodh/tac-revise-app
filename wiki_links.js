// AI Knowledge Graph Revision Ecosystem - Wiki Links and Dronacharya Integration
let CONCEPT_GLOSSARY = [];
let GLOSSARY_REGEX = null;
let GLOSSARY_MAP = {};

// Caches for performance and rate limit prevention
window.HOVER_CACHE = {};
window.DRONACHARYA_CACHE = {}; // Key format: "topicName_level"
let currentDoubtLevel = "L3"; // Default: Competitive Exam
let activeHoverTimeout = null;
let hoverTooltipEl = null;

// Dynamic CSS Injection for Tooltips, Glassmorphism, and Relationship Graph
const style = document.createElement('style');
style.textContent = `
  /* Wiki Links */
  .wiki-link {
    color: var(--accent) !important;
    font-weight: 600;
    text-decoration: none;
    border-bottom: 1px dashed var(--accent);
    cursor: pointer;
    transition: all 0.2s ease;
    padding: 0 2px;
    border-radius: 3px;
  }
  .wiki-link:hover {
    background: rgba(168, 85, 247, 0.15);
    border-bottom-style: solid;
  }

  /* Interactive Formula */
  .formula-block {
    display: inline-flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 2px 8px;
    border-radius: 4px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    gap: 4px;
  }
  .formula-var {
    color: #38bdf8 !important;
    cursor: pointer;
    text-decoration: underline;
    font-style: italic;
    transition: all 0.2s ease;
  }
  .formula-var:hover {
    color: #60a5fa !important;
    background: rgba(56, 189, 248, 0.15);
    border-radius: 2px;
  }

  /* Hover Preview Popover Card */
  .wiki-hover-popover {
    position: absolute;
    z-index: 1200;
    width: 280px;
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(168, 85, 247, 0.3);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.7), 0 0 15px rgba(168, 85, 247, 0.15);
    border-radius: 8px;
    padding: 12px;
    color: var(--text-primary);
    font-family: var(--font-main);
    font-size: 0.82rem;
    pointer-events: none;
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.25s ease, transform 0.25s ease;
  }
  .wiki-hover-popover.visible {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  /* Level Switcher Style */
  .level-btn {
    flex: 1;
    padding: 6px 4px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: var(--text-muted);
    font-size: 0.72rem;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .level-btn.active {
    background: rgba(168, 85, 247, 0.2);
    border-color: var(--accent);
    color: var(--accent);
  }

  /* Bubble Graph */
  .bubble-container {
    position: relative;
    width: 100%;
    height: 300px;
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    overflow: hidden;
    margin-top: 16px;
  }
  .bubble-node {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 50%;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0,0,0,0.5);
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(8px);
    padding: 8px;
    font-size: 0.72rem;
  }
  .bubble-node:hover {
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(168, 85, 247, 0.4);
  }
  .bubble-center {
    width: 90px;
    height: 90px;
    background: rgba(168, 85, 247, 0.25);
    border-color: var(--accent);
    color: var(--accent);
    font-size: 0.8rem;
    font-weight: 700;
    z-index: 10;
  }
  .bubble-relation {
    width: 70px;
    height: 70px;
  }
  .bubble-parent { background: rgba(59, 130, 246, 0.2); border-color: #3b82f6; color: #93c5fd; }
  .bubble-child { background: rgba(34, 197, 94, 0.2); border-color: #22c55e; color: #86efac; }
  .bubble-sibling { background: rgba(234, 179, 8, 0.2); border-color: #eab308; color: #fef08a; }
  .bubble-confused { background: rgba(239, 68, 68, 0.2); border-color: #ef4444; color: #fca5a5; }
  .bubble-opposite { background: rgba(249, 115, 22, 0.2); border-color: #f97316; color: #ffedd5; }
`;
document.head.appendChild(style);

// List of standard formulas that we auto-detect and build variables for
const COMMON_FORMULAS = [
  {
    expr: "F = ma",
    variables: { "F": "Force", "m": "Mass", "a": "Acceleration" }
  },
  {
    expr: "E = mc^2",
    variables: { "E": "Energy", "m": "Mass", "c": "Speed of Light" }
  },
  {
    expr: "v = u + at",
    variables: { "v": "Final Velocity", "u": "Initial Velocity", "a": "Acceleration", "t": "Time" }
  },
  {
    expr: "p = mv",
    variables: { "p": "Momentum", "m": "Mass", "v": "Velocity" }
  },
  {
    expr: "V = IR",
    variables: { "V": "Voltage", "I": "Current", "R": "Resistance" }
  },
  {
    expr: "W = Fd",
    variables: { "W": "Work Done", "F": "Force", "d": "Distance" }
  }
];

// 1. Concept Glossary definition & Setup
function initializeGlossary() {
  CONCEPT_GLOSSARY = [];
  GLOSSARY_MAP = {};

  if (typeof NOTES_DATABASE !== 'undefined') {
    for (const subjectId in NOTES_DATABASE) {
      const subject = NOTES_DATABASE[subjectId];
      subject.chapters.forEach(chapter => {
        chapter.topics.forEach(topic => {
          addGlossaryTerm(topic.title, topic.title);
          let cleanTitle = (topic.title || "").replace(/\s*\(.*?\)\s*/g, "").trim();
          addGlossaryTerm(cleanTitle, topic.title);
        });
      });
    }
  }
  
  const extraTerms = [
    // History
    "Vedas", "Puranas", "Buddhism", "Jainism", "Mauryan", "Gupta", "Delhi Sultanate", "Mughal", "Harappa", "Indus Valley", "Ashoka", "Chandragupta", "Chola", "Chalukya", "Maratha", "Sikh", "British", "Revolt of 1857", "Indian National Congress", "Gandhi", "Bose",
    
    // Polity & Institutions
    "Federalism", "Central Government", "State Government", "Constitution", "Parliament", 
    "Judiciary", "Seventh Schedule", "Preamble", "Fundamental Rights", "DPSP", "President", 
    "Supreme Court", "Constituent Assembly", "Cabinet Mission", "Independence Act", 
    "British Parliament", "Westminster System", "Panchayati Raj", "Directive Principles", 
    "Fundamental Duties", "Emergency Provisions", "Amendments", "Governor", "CAG", 
    "Attorney General", "High Court", "Writs", "Habeas Corpus", "Mandamus", "Prohibition", 
    "Certiorari", "Quo Warranto", "Official Languages", "Anti-defection", "Panchayats", 
    "Municipalities", "Sovereign", "Socialist", "Secular", "Democratic", "Republic",
    "Justice", "Liberty", "Equality", "Fraternity", "Union Territories", "Citizenship",
    "Lok Sabha", "Rajya Sabha", "Speaker", "Chairman", "Ordinance", "Bill", "Veto",
    "Money Bill", "Finance Bill", "Joint Sitting", "No-Confidence Motion", "Prorogation",
    "Dissolution", "Adjournment", "Question Hour", "Zero Hour", "Public Accounts Committee",
    "Estimates Committee", "Judicial Review", "Judicial Activism", "PIL", "High Courts",
    "Subordinate Courts", "Tribunals", "Election Commission", "UPSC", "SPSC", "Finance Commission",
    "National Commission", "GST Council", "NITI Aayog", "NHRC", "State Human Rights Commission",
    "CIC", "SIC", "CVC", "CBI", "Lokpal", "Lokayukta", "NDMA", "Syllabus",
    
    // History & Eras
    "Vedic Age", "Indus Valley Civilization", "Buddhism", "Jainism", 
    "Mauryan Period", "Gupta Period", "Delhi Sultanate", "Mughal Empire", "Marathas", 
    "Revolt of 1857", "Governor-Generals", "Viceroys", "Freedom Movement", "World War I", 
    "World War II", "Cold War", "Battle of Plassey", "Battle of Buxar", "Non-Cooperation Movement",
    "Civil Disobedience Movement", "Quit India Movement", "Swadeshi Movement", "Partition of Bengal",
    "Rowlatt Act", "Jallianwala Bagh", "Khilafat Movement", "Simon Commission", "Nehru Report",
    "Poona Pact", "Cripps Mission", "Quit India", "Cabinet Mission Plan", "Mountbatten Plan",
    "Harappan", "Mohenjodaro", "Aryans", "Vedas", "Upanishads", "Ashoka", "Chandragupta",
    "Samudragupta", "Harsha", "Cholas", "Pallavas", "Rashtrakutas", "Rajputs", "Alauddin Khilji",
    "Muhammad bin Tughluq", "Babur", "Humayun", "Akbar", "Jahangir", "Shah Jahan", "Aurangzeb",
    "Shivaji", "Peshwas", "East India Company", "Subsidiary Alliance", "Doctrine of Lapse",
    "Permanent Settlement", "Ryotwari", "Mahalwari", "Social Reformers", "Raja Ram Mohan Roy",
    "Satyashodhak Samaj", "Arya Samaj", "Prarthana Samaj", "Indian National Congress",
    
    // Geography & Ecosystems
    "Monsoon", "Indian Monsoon", "Ecology", "Carbon Cycle", "Indian Ocean Rim", 
    "Atmosphere", "Troposphere", "Stratosphere", "Mesosphere", "Thermosphere", "Exosphere",
    "Insolation", "Albedo", "Pressure Belts", "Cyclones", "Anticyclones", "Wind Systems",
    "Ocean Currents", "Tides", "Coral Reefs", "El Nino", "La Nina", "Plate Tectonics",
    "Earthquakes", "Volcanoes", "Rocks", "Weathering", "Erosion", "Rivers", "Glaciers",
    "Landforms", "Soils", "Vegetation", "Forests", "Agriculture", "Crops", "Kharif", "Rabi",
    "Zaid", "Irrigation", "Minerals", "Industries", "Population", "Urbanization", "Resources",
    "Himalayas", "Peninsular Plateau", "Coastal Plains", "Islands", "Drainage System",
    "Ganga", "Indus", "Brahmaputra", "Godavari", "Krishna", "Cauvery", "Narmada", "Tapi",
    
    // Physics & Units
    "Newton's Laws", "Newton's Laws of Motion", "Reflection", "Refraction", "Bernoulli's Principle",
    "Electromagnetic Spectrum", "Force", "Mass", "Acceleration", "Velocity", "Speed", "Motion",
    "Inertia", "Momentum", "Impulse", "Gravity", "Gravitation", "Weight", "Work", "Energy",
    "Power", "Kinetic Energy", "Potential Energy", "Conservation of Energy", "Friction",
    "Centripetal Force", "Centrifugal Force", "Pressure", "Density", "Buoyancy", "Surface Tension",
    "Viscosity", "Elasticity", "Heat", "Temperature", "Thermodynamics", "Conduction",
    "Convection", "Radiation", "Specific Heat", "Latent Heat", "Thermal Expansion",
    "Light", "Mirrors", "Lenses", "Dispersion", "Scattering", "Interference", "Diffraction",
    "Polarization", "Sound", "Frequency", "Wavelength", "Amplitude", "Velocity of Sound",
    "Doppler Effect", "Electricity", "Charge", "Current", "Voltage", "Resistance", "Ohm's Law",
    "Joule's Heating Effect", "Magnetism", "Magnetic Field", "Electromagnetic Induction",
    "AC", "DC", "Electronics", "Semiconductors", "Radioactivity", "Nuclear Fission", "Nuclear Fusion",
    
    // Chemistry & Atomic Structure
    "Acids", "Bases", "Metals", "Alloys", "Reactivity Series", "Carbon Compounds", "Elements",
    "Compounds", "Mixtures", "Atoms", "Molecules", "Atomic Structure", "Protons", "Neutrons",
    "Electrons", "Valency", "Isotopes", "Isobars", "Chemical Bonding", "Covalent Bond",
    "Ionic Bond", "Chemical Reactions", "Oxidation", "Reduction", "Redox", "Catalyst",
    "Periodic Table", "Periodic Trends", "Non-Metals", "Metalloids", "Salts", "pH Scale",
    "Indicators", "Combustion", "Flame", "Coal", "Petroleum", "Synthetic Fibers", "Plastics",
    "Polymers", "Soaps", "Detergents", "Glass", "Cement", "Fertilizers", "Corrosion",
    
    // Biology & Life Sciences
    "Cell", "Cell Structure", "Diseases", "Immunity", "Vaccines", "Plant Kingdom", "Animal Kingdom",
    "Photosynthesis", "Genetics", "DNA", "Chromosomes", "Genes", "Tissues", "Meristematic",
    "Permanent Tissues", "Epithelial", "Connective Tissue", "Muscular Tissue", "Nervous Tissue",
    "Nutrition", "Respiration", "Transportation", "Excretion", "Control and Coordination",
    "Nervous System", "Brain", "Spinal Cord", "Reflex Action", "Hormones", "Endocrine Glands",
    "Reproduction", "Asexual Reproduction", "Sexual Reproduction", "Heredity", "Evolution",
    "Our Environment", "Ecosystem", "Food Chain", "Food Web", "Trophic Levels", "Ozone Depletion",
    "Natural Resources", "Biodiversity", "Classification", "Monera", "Protista", "Fungi",
    "Plantae", "Animalia", "Vertebrates", "Invertebrates",
    
    // Economics & Schemes
    "RBI", "Monetary Policy", "Repo Rate", "GST", "Fiscal Policy", "Budget", "Poverty", 
    "Unemployment", "Green Revolution", "GDP", "Fiscal Deficit", "agricultural productivity", 
    "High Yielding Variety seeds", "Norman Borlaug", "Food Security", "White Revolution", 
    "Inflation", "National Income", "GNP", "NDP", "NNP", "CPI", "WPI", "Banking System",
    "Commercial Banks", "NPA", "Monetary Instruments", "Reverse Repo", "MSF", "Bank Rate",
    "CRR", "SLR", "Open Market Operations", "Capital Market", "Money Market", "SEBI",
    "Insurance", "IRDAI", "Public Finance", "Direct Taxes", "Indirect Taxes", "Subsidies",
    "Balance of Payments", "FDI", "FII", "Exchange Rate", "WTO", "IMF", "World Bank",
    "Economic Planning", "Five Year Plans", "Poverty Alleviation", "Employment Schemes",
    "Demography", "Human Development Index", "Sustainable Development",
    
    // Defence Systems
    "Bilateral Exercises", "Joint Exercises", "Agni", "Agni Missile", "Ranks", "Commands", 
    "Missiles", "Red Sea Crisis", "Quad", "Indo-Pacific", "Rafale-m", "Submarines", 
    "Vikrant", "MQ-9B", "Predator Drone", "Agni-5", "Divyastra", "C-295",
    
    // Academic & Structural Vocab Keywords (Ensures ultra-high link density)
    "System", "Process", "Structure", "Function", "Method", "Principle", "Theory", 
    "Concept", "Model", "Analysis", "Evidence", "Result", "Effect", "Cause", 
    "Factor", "Role", "Impact", "Influence", "Development", "Growth", "Rate", 
    "Level", "Value", "Source", "Document", "Report", "Study", "Research", 
    "Experiment", "Observation", "Measurement", "Unit", "Standard", "Quality", 
    "Quantity", "Property", "Characteristic", "Feature", "Aspect", "Element", 
    "Component", "Type", "Class", "Group", "Category", "Organization", 
    "Institution", "Agency", "Board", "Commission", "Department", "Ministry", 
    "Policy", "Program", "Project", "Plan", "Strategy", "Goal", "Objective", 
    "Target", "Measure", "Action", "Decision", "Agreement", "Treaty", "Alliance", 
    "Union", "State", "Nation", "Country", "Region", "Area", "Zone", "Territory", 
    "Border", "Boundary", "Limit", "Range", "Scale", "Size", "Weight", "Pressure", 
    "Water", "Air", "Land", "Soil", "Rock", "Mineral", "Resource", "Fuel", "Coal", 
    "Oil", "Gas", "Solar", "Wind", "Nuclear", "Industry", "Trade", "Market", 
    "Finance", "Money", "Capital", "Investment", "Revenue", "Cost", "Price", 
    "Debt", "Credit", "Bank", "Labor", "Employment", "Job", "Education", "School", 
    "University", "Student", "Teacher", "Exam", "Test", "Question", "Answer", 
    "Score", "Grade", "Rank", "Force", "Army", "Navy", "Military", "Soldier", 
    "Officer", "Weapon", "Radar", "Ship", "Aircraft", "Combat", "Defense", 
    "Security", "Threat", "Peace", "War", "Battle", "Victory", "History", 
    "Period", "Era", "Age", "Century", "Decade", "Time", "Space", "Earth", 
    "World", "Universe"
  ];
  
  extraTerms.forEach(term => {
    addGlossaryTerm(term, term);
  });

  CONCEPT_GLOSSARY.sort((a, b) => b.term.length - a.term.length);

  const escapedTerms = CONCEPT_GLOSSARY.map(g => {
    GLOSSARY_MAP[g.term.toLowerCase()] = g.topic;
    return g.term.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  });

  if (escapedTerms.length > 0) {
    GLOSSARY_REGEX = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'gi');
  }
}

function addGlossaryTerm(term, topicName) {
  const t = (term || '').trim();
  if (t.length < 3) return;
  if (!CONCEPT_GLOSSARY.some(g => (g.term || '').toLowerCase() === t.toLowerCase())) {
    CONCEPT_GLOSSARY.push({ term: t, topic: topicName });
  }
  if (!t.endsWith('s')) {
    const plural = t + 's';
    if (!CONCEPT_GLOSSARY.some(g => g.term.toLowerCase() === plural.toLowerCase())) {
      CONCEPT_GLOSSARY.push({ term: plural, topic: topicName });
    }
  }
}

// Intercepts and parses formulas to make variables interactive
function parseFormulas(htmlString) {
  if (!htmlString) return "";
  let result = htmlString;
  COMMON_FORMULAS.forEach(formula => {
    const regex = new RegExp(`\\b${formula.expr.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'g');
    result = result.replace(regex, () => {
      let formulaHtml = `<span class="formula-block">`;
      let parts = formula.expr.split('');
      parts.forEach(char => {
        if (formula.variables[char]) {
          formulaHtml += `<a class="formula-var" onclick="triggerDoubtExplain('${formula.variables[char]}', this)">${char}</a>`;
        } else {
          formulaHtml += char;
        }
      });
      formulaHtml += `</span>`;
      return formulaHtml;
    });
  });
  return result;
}

function autoLinkConcepts(htmlString) {
  if (!htmlString) return "";
  if (!GLOSSARY_REGEX) {
    initializeGlossary();
  }
  if (!GLOSSARY_REGEX) return htmlString;

  const regex = /(<[^>]+>|\$\$.*?\$\$|\$.*?\$|\\\(.*?\\\)|\\\[.*?\\\]|\[\[.*?\]\])/gs;
  const parts = htmlString.split(regex);
  
  let insideLink = false;
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (!part) continue;
    if (part.match(regex)) {
      if (part.startsWith("<a ") || part.startsWith("<a\t") || part.startsWith("<a\n")) {
        insideLink = true;
      } else if (part.startsWith("</a>")) {
        insideLink = false;
      }
      continue;
    }
    if (insideLink) {
      continue;
    }
    
    parts[i] = part.replace(GLOSSARY_REGEX, (match) => {
      const topic = GLOSSARY_MAP[match.toLowerCase()];
      if (topic) {
        return `[[${topic}|${match}]]`;
      }
      return match;
    });
  }
  
  return parts.join("");
}

function parseWikiLinks(text) {
  if (!text) return "";
  
  // Dedent text to prevent marked.js from treating indented HTML as code blocks
  const indentMatches = text.match(/^[ \t]+(?=\S)/gm);
  if (indentMatches) {
    const minIndent = Math.min(...indentMatches.map(s => s.length));
    if (minIndent > 0) {
      const regex = new RegExp(`^[ \\t]{1,${minIndent}}`, 'gm');
      text = text.replace(regex, '');
    }
  }
  
  // Remove leading whitespace for lines starting with HTML tags so marked doesn't treat them as code blocks
  text = text.replace(/^[ \t]+</gm, '<');

  // 1. Intercept Mermaid blocks and convert to Custom Diagrams
  let processed = text.replace(/```mermaid\r?\n([\s\S]*?)```/g, function(match, code) {
    try {
      if (typeof parseMermaid !== 'undefined') {
        const data = parseMermaid(code);
        return `<div class="custom-diagram" data-diagram='${JSON.stringify(data).replace(/'/g, "&#39;")}'></div>`;
      } else {
        return `<pre class="custom-diagram-error">Parser missing for: ${code}</pre>`;
      }
    } catch(e) {
      console.error("Failed to parse diagram", e);
      return `<pre class="custom-diagram-error">Failed to parse diagram.</pre>`;
    }
  });
  
  // 2. Parse Markdown (if marked is available)
  if (typeof marked !== 'undefined') {
    processed = marked.parse(processed);
  } else {
    // Fallback basic bolding and line breaks
    processed = processed.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    processed = processed.replace(/\n/g, '<br/>');
  }
  
  // 3. Parse custom wiki concepts and formulas
  let linkedText = autoLinkConcepts(processed);
  linkedText = parseFormulas(linkedText);
  
  // 4. Resolve wiki links [[Topic]] -> <a>
  let parsed = linkedText.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (match, topicName, displayLabel) => {
    const label = displayLabel || topicName || "";
    const cleanTopic = (topicName || "").trim().replace(/'/g, "\\'");
    return `<a class="wiki-link" onclick="triggerDoubtExplain('${cleanTopic}', this)">${label}</a>`;
  });
  
  // 5. Trigger Custom Diagram rendering asynchronously
  setTimeout(() => {
    if (typeof renderCustomDiagram !== 'undefined') {
      document.querySelectorAll('.custom-diagram:not([data-rendered="true"])').forEach(el => {
        try {
          const dataStr = el.getAttribute('data-diagram');
          if (dataStr) {
            const data = JSON.parse(dataStr.replace(/&#39;/g, "'"));
            el.innerHTML = renderCustomDiagram(data);
            el.setAttribute('data-rendered', 'true');
          }
        } catch(e) {
          console.error("Diagram render error:", e);
        }
      });
    }
  }, 100);
  
  return parsed;
}

// Hover Learning Layer Integration
function createHoverTooltipElement() {
  if (hoverTooltipEl) return;
  hoverTooltipEl = document.createElement('div');
  hoverTooltipEl.className = 'wiki-hover-popover';
  document.body.appendChild(hoverTooltipEl);

  hoverTooltipEl.addEventListener('mouseenter', () => {
    if (activeHoverTimeout) clearTimeout(activeHoverTimeout);
  });
  hoverTooltipEl.addEventListener('mouseleave', () => {
    hideHoverTooltip();
  });
}

function showHoverTooltip(element, termName) {
  createHoverTooltipElement();
  if (activeHoverTimeout) clearTimeout(activeHoverTimeout);

  const rect = element.getBoundingClientRect();
  const top = rect.top + window.scrollY - 10;
  const left = rect.left + window.scrollX;

  hoverTooltipEl.style.top = `${top - 120}px`;
  hoverTooltipEl.style.left = `${left}px`;
  hoverTooltipEl.classList.add('visible');

  const cached = window.HOVER_CACHE[termName.toLowerCase()];
  if (cached) {
    renderHoverTooltipContent(termName, cached);
    return;
  }

  hoverTooltipEl.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 70px;">
      <div class="cbt-spinner" style="border-color: var(--accent); border-top-color: transparent; width: 20px; height: 20px; border-width: 2px;"></div>
      <div style="font-size: 0.68rem; color: var(--accent); margin-top: 6px; font-family: var(--font-mono);">FETCHING PREVIEW</div>
    </div>
  `;

  // Asynchronous background query
  const queryPrompt = `Provide a very brief educational preview of the term "${termName}". Output strictly a JSON object with:
  {
    "definition": "<Clear, concise 1-2 sentence definition>",
    "category": "<e.g., Biology, Defence Technology, Strategic Location, Ancient Indian History>",
    "importance": "High/Medium/Low",
    "frequency": "High/Medium/Low",
    "difficulty": "Easy/Medium/Hard"
  }
  Ensure the response is strictly valid JSON only. Do not wrap in markdown fences. Keep language formal and emoji-free.`;

  fetch('/api/gemini', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'gemini-2.5-flash',
      contents: [{ parts: [{ text: queryPrompt }] }],
      generationConfig: { response_mime_type: 'application/json', temperature: 0.1 }
    })
  }).then(res => res.json()).then(data => {
    const rawText = data.candidates[0].content.parts[0].text;
    const cleaned = rawText.replace(/^```json\s*/,'').replace(/\s*```$/,'').trim();
    const result = JSON.parse(cleaned);
    window.HOVER_CACHE[termName.toLowerCase()] = result;
    renderHoverTooltipContent(termName, result);
  }).catch(err => {
    console.error("Hover preview error:", err);
    hoverTooltipEl.innerHTML = `
      <div style="color: var(--text-muted); font-size: 0.75rem;">Preview unavailable for ${termName}</div>
    `;
  });
}

function renderHoverTooltipContent(termName, data) {
  const getBadgeColor = (val) => {
    if (val === 'High' || val === 'Hard') return 'background: rgba(239, 68, 68, 0.15); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.3);';
    if (val === 'Medium') return 'background: rgba(234, 179, 8, 0.15); color: #facc15; border: 1px solid rgba(234, 179, 8, 0.3);';
    return 'background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3);';
  };

  hoverTooltipEl.innerHTML = `
    <div style="font-weight: 700; color: var(--accent); margin-bottom: 6px; font-size: 0.88rem; text-transform: uppercase;">${termName}</div>
    <div style="color: var(--text-muted); font-size: 0.68rem; margin-bottom: 8px; font-family: var(--font-mono);">${data.category}</div>
    <div style="line-height: 1.4; color: var(--text-secondary); margin-bottom: 10px;">${data.definition}</div>
    <div style="display: flex; gap: 6px; flex-wrap: wrap;">
      <span style="font-size: 0.65rem; font-weight: bold; padding: 2px 6px; border-radius: 4px; ${getBadgeColor(data.importance)}">IMP: ${data.importance}</span>
      <span style="font-size: 0.65rem; font-weight: bold; padding: 2px 6px; border-radius: 4px; ${getBadgeColor(data.frequency)}">FREQ: ${data.frequency}</span>
      <span style="font-size: 0.65rem; font-weight: bold; padding: 2px 6px; border-radius: 4px; ${getBadgeColor(data.difficulty)}">DIFF: ${data.difficulty}</span>
    </div>
  `;
}

function hideHoverTooltip() {
  if (activeHoverTimeout) clearTimeout(activeHoverTimeout);
  activeHoverTimeout = setTimeout(() => {
    if (hoverTooltipEl) {
      hoverTooltipEl.classList.remove('visible');
    }
  }, 300);
}

// Set up delegated hover listeners
document.addEventListener('mouseover', (e) => {
  const target = e.target.closest('.wiki-link, .formula-var');
  if (target) {
    const term = target.innerText || target.textContent;
    if (term) {
      if (activeHoverTimeout) clearTimeout(activeHoverTimeout);
      activeHoverTimeout = setTimeout(() => {
        term = term || '';
        showHoverTooltip(target, term.trim());
      }, 250);
    }
  }
});

document.addEventListener('mouseout', (e) => {
  const target = e.target.closest('.wiki-link, .formula-var');
  if (target) {
    hideHoverTooltip();
  }
});

// 2. Ask Dronacharya Revision Console Implementation
let doubtHistory = [];

async function showDronacharyaQuickDoubt(topicName, pushToHistory = true, contextText = "") {
  if (pushToHistory) {
    if (doubtHistory.length === 0 || doubtHistory[doubtHistory.length - 1] !== topicName) {
      doubtHistory.push(topicName);
    }
  }

  let modal = document.getElementById('dronacharya-quick-doubt-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'dronacharya-quick-doubt-modal';
    modal.className = 'cbt-overlay';
    modal.style.cssText = `
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(8, 10, 15, 0.75);
      backdrop-filter: blur(10px);
      z-index: 1100;
    `;
    document.body.appendChild(modal);
  } else {
    modal.style.display = 'flex';
  }

  // Render initial loading state
  modal.innerHTML = `
    <div style="
      background: rgba(17, 24, 39, 0.95);
      border: 1px solid rgba(168, 85, 247, 0.2);
      border-radius: 12px;
      width: 90%;
      max-width: 850px;
      height: 85vh;
      display: flex;
      flex-direction: column;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(168, 85, 247, 0.1);
      overflow: hidden;
      animation: fadeIn 0.2s ease-out;
    ">
      <div style="
        padding: 16px 20px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: rgba(0, 0, 0, 0.2);
      ">
        <div style="display: flex; align-items: center; gap: 10px;">
          ${doubtHistory.length > 1 ? `
            <button onclick="popDoubtHistory()" style="
              background: rgba(255,255,255,0.05);
              border: 1px solid rgba(255,255,255,0.1);
              color: var(--text-primary);
              padding: 4px 8px;
              border-radius: 4px;
              cursor: pointer;
              font-size: 0.8rem;
              display: flex;
              align-items: center;
              gap: 4px;
            ">← Back</button>
          ` : ''}
          <span style="font-size: 1.1rem; font-weight: 700; color: var(--accent); letter-spacing: 0.5px;">🎓 Ask Dronacharya: ${topicName}</span>
        </div>
        <button onclick="document.getElementById('dronacharya-quick-doubt-modal').style.display='none'" style="
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0 4px;
          line-height: 1;
        ">&times;</button>
      </div>
      
      <div style="flex: 1; display: flex; align-items: center; justify-content: center; flex-direction: column; padding: 40px; text-align: center;">
        <div class="cbt-spinner" style="border-color: var(--accent); border-top-color: transparent; width: 40px; height: 40px; border-width: 3px; margin-bottom: 16px;"></div>
        <div style="color: var(--accent); font-family: var(--font-mono); font-weight: bold; font-size: 0.9rem; letter-spacing: 1px;">DRONACHARYA IS CONSTRUCTING KNOWLEDGE MATRIX [${currentDoubtLevel}]</div>
        <div style="color: var(--text-muted); font-size: 0.8rem; margin-top: 4px;">Resolving context-aware terminology and dependencies...</div>
      </div>
    </div>
  `;

  const cacheKey = `${topicName.toLowerCase()}_${currentDoubtLevel}`;
  if (window.DRONACHARYA_CACHE[cacheKey]) {
    renderDronacharyaModalContent(modal, topicName, window.DRONACHARYA_CACHE[cacheKey], contextText);
    return;
  }

  // Generate Prompt satisfying all required fields (5 tabs)
  const prompt = `You are Dronacharya, the legendary expert tutor for Indian Defence Examinations.
Provide a comprehensive context-aware explanation for: "${topicName}" at explanation level: "${currentDoubtLevel}".
The surrounding context text where this term was clicked is: "${contextText}". Correctly disambiguate the term if it has multiple meanings (e.g. "cell" in biology vs military vs technology).

Generate your response as a valid JSON object matching this schema exactly:
{
  "quickDefinition": "<One clear sentence definition>",
  "detailedExplanation": "<Detailed breakdown of the concept based on the level. Provide rich diagrams or structural points.>",
  "whyItMatters": "<Practical and national/military significance of this concept>",
  "examRelevance": {
    "NDA": "High/Medium/Low",
    "CDS": "High/Medium/Low",
    "AFCAT": "High/Medium/Low",
    "UPSC": "High/Medium/Low",
    "analysis": "<Specific analysis of topics tested in exams for this concept>"
  },
  "pyqs": [
    {
      "exam": "<Exam name e.g., CDS II 2024>",
      "question": "<UPSC/Defence PYQ or premium simulated high-yield question>",
      "options": ["<Option A>", "<Option B>", "<Option C>", "<Option D>"],
      "correctIndex": 0,
      "explanation": "<Explanation of why the option is correct>"
    }
  ],
  "realWorldApplications": ["<Real-world application 1>", "<Real-world application 2>"],
  "memoryTricks": ["<Mnemonic, shortcut or memory trick to remember key facts>"],
  "commonMistakes": ["<Common mistake or conceptual gap related to this topic>"],
  "visualExplanation": "<Structured ASCII, SVG, or Mermaid diagram representing the concept structure. ALWAYS use mermaid code blocks for complex hierarchies, processes, or visual representations. Use newline \\n characters.>",
  "practiceQuestions": [
    {
      "question": "<Interactive practice question>",
      "options": ["<Option A>", "<Option B>", "<Option C>", "<Option D>"],
      "correctIndex": 1,
      "explanation": "<Detailed feedback explanation>"
    }
  ],
  "flashcards": [
    {
      "front": "<Recall card front>",
      "back": "<Recall card back>"
    }
  ],
  "relations": {
    "parent": ["<Parent Concept 1>", "<Parent Concept 2>"],
    "child": ["<Subtopic 1>", "<Subtopic 2>"],
    "sibling": ["<Related Sibling Concept 1>", "<Sibling 2>"],
    "confused": ["<Frequently Confused Concept>"],
    "opposite": ["<Contrasting or Opposite Concept>"]
  }
}
Keep language strictly formal, highly authoritative, and emoji-free. Return strictly the raw JSON without code block wrappers.`;

  try {
    const response = await fetch('/api/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'gemini-2.5-flash',
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { response_mime_type: 'application/json', temperature: 0.1 }
      })
    });

    if (!response.ok) throw new Error("API call failed");
    const data = await response.json();
    let resText = data.candidates[0].content.parts[0].text;
    let cleaned = resText.trim();
    try {
      JSON.parse(cleaned);
    } catch (e) {
      const jsonMatch = resText.match(/```json\s*([\s\S]*?)\s*```/i);
      if (jsonMatch) {
        cleaned = jsonMatch[1].trim();
      } else {
        const start = resText.indexOf('{');
        const end = resText.lastIndexOf('}');
        if (start !== -1 && end !== -1 && end > start) {
          cleaned = resText.substring(start, end + 1).trim();
        }
      }
    }
    
    // Check if it's our interceptor's offline fallback
    if (resText.includes("_AI uplink failed")) {
      throw new Error(resText.split("_AI uplink failed")[1].replace(/[\(\)]/g, '').trim() || "Offline mode active.");
    }
    
    const result = JSON.parse(cleaned);
    window.DRONACHARYA_CACHE[cacheKey] = result;
    renderDronacharyaModalContent(modal, topicName, result, contextText);
  } catch (err) {
    console.error("Dronacharya doubt error:", err);
    modal.innerHTML = `
      <div style="background: rgba(17, 24, 39, 0.98); border: 1px solid var(--danger); border-radius: 12px; width: 90%; max-width: 600px; padding: 24px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7); text-align: center;">
        <h3 style="color: var(--danger); margin-bottom: 12px;">Tactical Network Offline</h3>
        <p style="color: var(--text-secondary); margin-bottom: 20px;">Dronacharya uplink interrupted. ${err.message}</p>
        <button onclick="document.getElementById('dronacharya-quick-doubt-modal').style.display='none'" class="btn-primary">Acknowledge</button>
      </div>
    `;
  }
}

function popDoubtHistory() {
  if (doubtHistory.length > 1) {
    doubtHistory.pop();
    const prev = doubtHistory.pop();
    showDronacharyaQuickDoubt(prev, true);
  }
}

function renderDronacharyaModalContent(modal, topicName, data, contextText) {
  modal.innerHTML = `
    <div style="
      background: rgba(17, 24, 39, 0.98);
      border: 1px solid rgba(168, 85, 247, 0.35);
      border-radius: 12px;
      width: 92%;
      max-width: 850px;
      height: 85vh;
      display: flex;
      flex-direction: column;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 50px rgba(168, 85, 247, 0.15);
      overflow: hidden;
    ">
      <!-- Header -->
      <div style="
        padding: 16px 20px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: rgba(0, 0, 0, 0.3);
      ">
        <div style="display: flex; align-items: center; gap: 10px;">
          ${doubtHistory.length > 1 ? `
            <button id="dronacharya-back-btn" style="
              background: rgba(255,255,255,0.06);
              border: 1px solid rgba(255,255,255,0.12);
              color: var(--text-primary);
              padding: 4px 10px;
              border-radius: 4px;
              cursor: pointer;
              font-size: 0.78rem;
              font-family: var(--font-mono);
            ">← BACK</button>
          ` : ''}
          <span style="font-size: 1.15rem; font-weight: 700; color: var(--accent); letter-spacing: 0.5px;">🎓 Ask Dronacharya: ${topicName}</span>
        </div>
        <button onclick="document.getElementById('dronacharya-quick-doubt-modal').style.display='none'" style="
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-size: 1.6rem;
          cursor: pointer;
          line-height: 1;
        ">&times;</button>
      </div>

      <!-- Tab bar (5 Tabs) -->
      <div id="dronacharya-tabs" style="
        display: flex;
        background: rgba(0,0,0,0.15);
        border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        overflow-x: auto;
      ">
        <button class="dron-tab active" data-tab="overview" style="flex: 1; padding: 12px 8px; border: none; border-bottom: 2px solid var(--accent); background: transparent; color: var(--text-primary); font-weight: 600; font-size: 0.8rem; cursor: pointer; text-transform: uppercase; letter-spacing: 0.5px; white-space: nowrap;">Overview</button>
        <button class="dron-tab" data-tab="exam" style="flex: 1; padding: 12px 8px; border: none; border-bottom: 2px solid transparent; background: transparent; color: var(--text-muted); font-weight: 600; font-size: 0.8rem; cursor: pointer; text-transform: uppercase; letter-spacing: 0.5px; white-space: nowrap;">Exam & PYQs</button>
        <button class="dron-tab" data-tab="visuals" style="flex: 1; padding: 12px 8px; border: none; border-bottom: 2px solid transparent; background: transparent; color: var(--text-muted); font-weight: 600; font-size: 0.8rem; cursor: pointer; text-transform: uppercase; letter-spacing: 0.5px; white-space: nowrap;">Memory & Visuals</button>
        <button class="dron-tab" data-tab="qna" style="flex: 1; padding: 12px 8px; border: none; border-bottom: 2px solid transparent; background: transparent; color: var(--text-muted); font-weight: 600; font-size: 0.8rem; cursor: pointer; text-transform: uppercase; letter-spacing: 0.5px; white-space: nowrap;">Q&A & Flashcards</button>
        <button class="dron-tab" data-tab="advanced" style="flex: 1; padding: 12px 8px; border: none; border-bottom: 2px solid transparent; background: transparent; color: var(--text-muted); font-weight: 600; font-size: 0.8rem; cursor: pointer; text-transform: uppercase; letter-spacing: 0.5px; white-space: nowrap;">Advanced & Relations</button>
      </div>

      <!-- Tab Content Area -->
      <div id="dronacharya-content" style="flex: 1; overflow-y: auto; padding: 24px; color: #f8fafc !important; line-height: 1.7; font-size: 0.95rem; text-shadow: 0 0 1px rgba(255,255,255,0.1);">
        <!-- Loaded dynamically -->
      </div>

      <!-- Footer Action Area -->
      <div style="
        padding: 14px 20px;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        background: rgba(0, 0, 0, 0.2);
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
      ">
        <div style="display:flex; align-items:center; gap:10px; flex:1; min-width:0;">
          <span style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono); white-space:nowrap;">SOURCE INTEGRITY: TIER 1 OFFICIAL INTEL</span>
          <button id="dronacharya-tell-more-btn" style="
            background: linear-gradient(135deg, rgba(168,85,247,0.15) 0%, rgba(59,130,246,0.15) 100%);
            border: 1px solid rgba(168,85,247,0.4);
            color: #c084fc;
            padding: 6px 14px;
            border-radius: 6px;
            font-size: 0.8rem;
            font-weight: 700;
            cursor: pointer;
            font-family: var(--font-mono);
            letter-spacing: 0.05em;
            display: flex;
            align-items: center;
            gap: 6px;
            transition: all 0.2s ease;
            white-space: nowrap;
          " onmouseover="this.style.background='linear-gradient(135deg,rgba(168,85,247,0.3) 0%,rgba(59,130,246,0.3) 100%)';this.style.boxShadow='0 0 16px rgba(168,85,247,0.35)';" onmouseout="this.style.background='linear-gradient(135deg,rgba(168,85,247,0.15) 0%,rgba(59,130,246,0.15) 100%)';this.style.boxShadow='none';">
            📖 Tell Me More
          </button>
        </div>
        <button id="dronacharya-open-full-btn" class="btn-primary" style="padding: 6px 14px; font-size: 0.8rem; border-radius: 6px; font-weight: 600; white-space:nowrap;">Open Full Topic Note</button>
      </div>
    </div>
  `;

  const contentArea = modal.querySelector('#dronacharya-content');
  const tabs = modal.querySelectorAll('.dron-tab');
  const backBtn = modal.querySelector('#dronacharya-back-btn');
  const fullBtn = modal.querySelector('#dronacharya-open-full-btn');
  const tellMoreBtn = modal.querySelector('#dronacharya-tell-more-btn');

  if (backBtn) {
    backBtn.onclick = popDoubtHistory;
  }

  // Handle "Tell Me More" — advance to next explanation level
  const LEVEL_SEQUENCE = ['L1', 'L2', 'L3', 'L4', 'L5'];
  const LEVEL_LABELS = { L1: 'L1: Beginner', L2: 'L2: School', L3: 'L3: Exam', L4: 'L4: University', L5: 'L5: Expert' };
  if (tellMoreBtn) {
    const currentIdx = LEVEL_SEQUENCE.indexOf(currentDoubtLevel);
    const nextLevel = LEVEL_SEQUENCE[currentIdx + 1];
    if (nextLevel) {
      tellMoreBtn.title = `Deepen explanation to ${LEVEL_LABELS[nextLevel]}`;
      tellMoreBtn.onclick = () => {
        currentDoubtLevel = nextLevel;
        showDronacharyaQuickDoubt(topicName, false, contextText);
      };
    } else {
      // Already at max depth
      tellMoreBtn.textContent = '✅ Max Depth Reached';
      tellMoreBtn.disabled = true;
      tellMoreBtn.style.opacity = '0.45';
      tellMoreBtn.style.cursor = 'default';
    }
  }

  // Handle Full Note Redirect
  fullBtn.onclick = () => {
    modal.style.display = 'none';
    let foundSubjectId = null;
    let foundChapterId = null;
    let foundTopicId = null;

    if (typeof NOTES_DATABASE !== 'undefined') {
      const query = topicName.toLowerCase();
      for (const [subId, sub] of Object.entries(NOTES_DATABASE)) {
        for (const chap of sub.chapters) {
          for (const top of chap.topics) {
            if (top.title.toLowerCase() === query || top.id.toLowerCase() === query || query.includes(top.title.toLowerCase())) {
              foundSubjectId = subId;
              foundChapterId = chap.id;
              foundTopicId = top.id;
              break;
            }
          }
          if (foundTopicId) break;
        }
        if (foundTopicId) break;
      }
    }

    if (foundTopicId && typeof switchScreen === 'function') {
      selectedSubjectId = foundSubjectId;
      selectedChapterId = foundChapterId;
      selectedTopicId = foundTopicId;
      switchScreen('notes');
      if (typeof renderNotesBrowser === 'function') {
        renderNotesBrowser();
      }
    } else {
      // Open AI Doubt solver
      if (typeof switchScreen === 'function') {
        switchScreen('ai-console');
      }
      const solveRadio = document.querySelector('input[name="ai-mode"][value="solve"]');
      if (solveRadio) {
        solveRadio.checked = true;
        solveRadio.dispatchEvent(new Event('change', { bubbles: true }));
      }
      const inputEl = document.getElementById("ai-custom-topic-input");
      if (inputEl) {
        inputEl.value = topicName;
      }
      if (typeof triggerAiSolveDoubt === 'function') {
        triggerAiSolveDoubt(null, topicName, "Doubt Link");
      }
    }
  };

  // Tab Renderer switcher
  const switchTab = (tabName) => {
    tabs.forEach(t => {
      if (t.getAttribute('data-tab') === tabName) {
        t.classList.add('active');
        t.style.borderBottomColor = 'var(--accent)';
        t.style.color = 'var(--text-primary)';
      } else {
        t.classList.remove('active');
        t.style.borderBottomColor = 'transparent';
        t.style.color = 'var(--text-muted)';
      }
    });

    if (tabName === 'overview') {
      contentArea.innerHTML = `
        <!-- Explanation Level Selector -->
        <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px; background: rgba(0,0,0,0.15); padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);">
          <div style="font-size: 0.72rem; font-weight: bold; color: var(--accent); text-transform: uppercase; font-family: var(--font-mono);">Explanation Level Switcher</div>
          <div style="display: flex; gap: 6px;">
            <button class="level-btn ${currentDoubtLevel === 'L1' ? 'active' : ''}" data-lvl="L1">L1: Beginner</button>
            <button class="level-btn ${currentDoubtLevel === 'L2' ? 'active' : ''}" data-lvl="L2">L2: School</button>
            <button class="level-btn ${currentDoubtLevel === 'L3' ? 'active' : ''}" data-lvl="L3">L3: Exam</button>
            <button class="level-btn ${currentDoubtLevel === 'L4' ? 'active' : ''}" data-lvl="L4">L4: University</button>
            <button class="level-btn ${currentDoubtLevel === 'L5' ? 'active' : ''}" data-lvl="L5">L5: Expert</button>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div>
            <h4 style="color: var(--accent); margin-bottom: 6px; font-size: 0.95rem;">Quick Definition</h4>
            <p style="font-size: 1.05rem; line-height: 1.6; color: var(--text-primary); font-weight: 500;">
              ${parseWikiLinks(data.quickDefinition)}
            </p>
          </div>
          <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 14px;">
            <h4 style="color: var(--accent); margin-bottom: 6px; font-size: 0.95rem;">Detailed breakdown</h4>
            <div style="font-size: 0.92rem; line-height: 1.75; color: var(--text-secondary);">
              ${parseWikiLinks(data.detailedExplanation)}
            </div>
          </div>
          <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 14px; background: rgba(168, 85, 247, 0.03); padding: 12px; border-radius: 6px; border-left: 3px solid var(--accent);">
            <h4 style="color: var(--accent); margin-bottom: 4px; font-size: 0.95rem; margin-top: 0;">Why It Matters</h4>
            <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-primary); margin: 0;">
              ${parseWikiLinks(data.whyItMatters)}
            </p>
          </div>
        </div>
      `;

      // Bind Level buttons
      contentArea.querySelectorAll('.level-btn').forEach(btn => {
        btn.onclick = (e) => {
          currentDoubtLevel = e.target.getAttribute('data-lvl');
          showDronacharyaQuickDoubt(topicName, false, contextText);
        };
      });

    } else if (tabName === 'exam') {
      contentArea.innerHTML = `
        <h4 style="color: var(--accent); margin-bottom: 12px; font-size: 0.95rem;">Exam Importance matrix</h4>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 20px;">
          <div style="background: rgba(59,130,246,0.1); border: 1px solid rgba(59,130,246,0.2); padding: 10px; border-radius: 6px; text-align: center;">
            <div style="font-weight: bold; font-size: 0.75rem; color: #60a5fa; text-transform: uppercase;">NDA</div>
            <div style="font-size: 1rem; font-weight: 700; margin-top: 4px; color: var(--text-primary);">${data.examRelevance.NDA || 'Medium'}</div>
          </div>
          <div style="background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.2); padding: 10px; border-radius: 6px; text-align: center;">
            <div style="font-weight: bold; font-size: 0.75rem; color: #4ade80; text-transform: uppercase;">CDS</div>
            <div style="font-size: 1rem; font-weight: 700; margin-top: 4px; color: var(--text-primary);">${data.examRelevance.CDS || 'High'}</div>
          </div>
          <div style="background: rgba(234,179,8,0.1); border: 1px solid rgba(234,179,8,0.2); padding: 10px; border-radius: 6px; text-align: center;">
            <div style="font-weight: bold; font-size: 0.75rem; color: #facc15; text-transform: uppercase;">AFCAT</div>
            <div style="font-size: 1rem; font-weight: 700; margin-top: 4px; color: var(--text-primary);">${data.examRelevance.AFCAT || 'High'}</div>
          </div>
          <div style="background: rgba(249,115,22,0.1); border: 1px solid rgba(249,115,22,0.2); padding: 10px; border-radius: 6px; text-align: center;">
            <div style="font-weight: bold; font-size: 0.75rem; color: #fb923c; text-transform: uppercase;">UPSC</div>
            <div style="font-size: 1rem; font-weight: 700; margin-top: 4px; color: var(--text-primary);">${data.examRelevance.UPSC || 'High'}</div>
          </div>
        </div>
        
        <div style="font-size: 0.88rem; color: var(--text-secondary); background: rgba(0,0,0,0.12); padding: 12px; border-radius: 6px; border-left: 3px solid var(--accent); margin-bottom: 24px;">
          <strong>Strategic Syllabus Relevance:</strong> ${data.examRelevance.analysis}
        </div>

        <h4 style="color: var(--accent); margin-bottom: 12px; font-size: 0.95rem;">Previous Year Questions (PYQs)</h4>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          ${(data.pyqs || []).map((q, idx) => `
            <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 16px; border-radius: 8px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span style="font-weight: bold; color: var(--accent); font-size: 0.8rem; text-transform: uppercase; font-family: var(--font-mono);">${q.exam || 'UPSC CDS'}</span>
              </div>
              <div style="font-weight: 600; margin-bottom: 10px; font-size: 0.9rem;">${q.question}</div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px;">
                ${(q.options || []).map((opt, oIdx) => `
                  <button class="btn-pyq-option-${idx}-${oIdx}" onclick="checkQuickDoubtOption('pyq-${idx}', ${oIdx}, ${q.correctIndex || 0})" style="
                    text-align: left;
                    padding: 8px 12px;
                    background: rgba(0, 0, 0, 0.2);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    color: var(--text-secondary);
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 0.85rem;
                    transition: all 0.2s ease;
                  ">${opt}</button>
                `).join('')}
              </div>
              <div id="qd-explanation-pyq-${idx}" style="display: none; font-size: 0.8rem; line-height: 1.5; color: var(--text-secondary); padding: 10px; background: rgba(0,0,0,0.15); border-radius: 5px; border-left: 2px solid var(--accent);">
                <strong>Explanation:</strong> ${q.explanation}
              </div>
            </div>
          `).join('')}
        </div>
      `;

    } else if (tabName === 'visuals') {
      contentArea.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div>
            <h4 style="color: var(--accent); margin-bottom: 6px; font-size: 0.95rem;">Real-World Applications</h4>
            <ul style="margin: 0; padding-left: 20px; font-size: 0.88rem; color: var(--text-secondary);">
              ${(data.realWorldApplications || []).map(app => `<li style="margin-bottom: 4px;">${parseWikiLinks(app)}</li>`).join('')}
            </ul>
          </div>

          <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 14px;">
            <h4 style="color: var(--accent); margin-bottom: 6px; font-size: 0.95rem;">Memory Tricks & Mnemonics</h4>
            <ul style="margin: 0; padding-left: 20px; font-size: 0.88rem; color: var(--text-secondary);">
              ${(data.memoryTricks || []).map(trick => `<li style="margin-bottom: 4px; font-style: italic;">${parseWikiLinks(trick)}</li>`).join('')}
            </ul>
          </div>

          <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 14px;">
            <h4 style="color: var(--accent); margin-bottom: 6px; font-size: 0.95rem;">Common Mistakes & Conceptual Gaps</h4>
            <ul style="margin: 0; padding-left: 20px; font-size: 0.88rem; color: var(--text-secondary);">
              ${(data.commonMistakes || []).map(mistake => `<li style="margin-bottom: 4px;">${parseWikiLinks(mistake)}</li>`).join('')}
            </ul>
          </div>

          <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 14px;">
            <h4 style="color: var(--accent); margin-bottom: 6px; font-size: 0.95rem;">Visual Conceptual Diagram</h4>
            <pre style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.08); padding: 12px; border-radius: 6px; font-family: monospace; font-size: 0.8rem; overflow-x: auto; color: #a855f7;">${data.visualExplanation || "No diagram available"}</pre>
          </div>
        </div>
      `;

    } else if (tabName === 'qna') {
      contentArea.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          <!-- Practice Qs -->
          <div>
            <h4 style="color: var(--accent); margin-bottom: 12px; font-size: 0.95rem;">Interactive Practice Questions</h4>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              ${(data.practiceQuestions || []).map((q, idx) => `
                <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 16px; border-radius: 8px;">
                  <div style="font-weight: 600; margin-bottom: 10px; font-size: 0.9rem;">Q${idx+1}. ${q.question}</div>
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px;">
                    ${(q.options || []).map((opt, oIdx) => `
                      <button class="btn-option-${idx}-${oIdx}" onclick="checkQuickDoubtOption(${idx}, ${oIdx}, ${q.correctIndex || 0})" style="
                        text-align: left;
                        padding: 8px 12px;
                        background: rgba(0, 0, 0, 0.2);
                        border: 1px solid rgba(255, 255, 255, 0.08);
                        color: var(--text-secondary);
                        border-radius: 6px;
                        cursor: pointer;
                        font-size: 0.85rem;
                        transition: all 0.2s ease;
                      ">${opt}</button>
                    `).join('')}
                  </div>
                  <div id="qd-explanation-${idx}" style="display: none; font-size: 0.8rem; line-height: 1.5; color: var(--text-secondary); padding: 10px; background: rgba(0,0,0,0.15); border-radius: 5px; border-left: 2px solid var(--accent);">
                    <strong>Explanation:</strong> ${q.explanation}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Flashcards -->
          <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 14px;">
            <h4 style="color: var(--accent); margin-bottom: 12px; font-size: 0.95rem;">Rapid Recall Flashcards</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
              ${(data.flashcards || []).map((f, idx) => `
                <div onclick="flipQuickFlashcard(this)" style="
                  background: rgba(168, 85, 247, 0.05);
                  border: 1px solid rgba(168, 85, 247, 0.15);
                  border-radius: 8px;
                  height: 120px;
                  perspective: 1000px;
                  cursor: pointer;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  text-align: center;
                  padding: 16px;
                  position: relative;
                  transition: transform 0.6s;
                  transform-style: preserve-3d;
                ">
                  <div class="fc-front" style="
                    backface-visibility: hidden;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 10px;
                    color: var(--accent);
                    font-weight: 600;
                    font-size: 0.88rem;
                  ">
                    ${f.front}
                  </div>
                  <div class="fc-back" style="
                    backface-visibility: hidden;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 10px;
                    color: var(--text-secondary);
                    font-size: 0.82rem;
                    transform: rotateY(180deg);
                    background: rgba(0, 0, 0, 0.4);
                    border-radius: 8px;
                  ">
                    ${f.back}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- AI Tutor Console -->
          <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 14px; background: rgba(0,0,0,0.15); padding: 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.04);">
            <h4 style="color: var(--accent); margin-bottom: 8px; font-size: 0.95rem; margin-top: 0;">Interactive AI Tutor Console</h4>
            <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 12px;">
              <button class="tutor-preset-btn level-btn" data-query="Explain this concept differently.">Explain Differently</button>
              <button class="tutor-preset-btn level-btn" data-query="Explain this concept with Indian military examples.">Military Examples</button>
              <button class="tutor-preset-btn level-btn" data-query="Explain this concept specifically for CDS exam importance.">For CDS</button>
              <button class="tutor-preset-btn level-btn" data-query="Explain this concept like I am 10 years old.">Like I'm 10</button>
              <button class="tutor-preset-btn level-btn" data-query="Give a clear real-world practical example of this concept.">Real-world Example</button>
            </div>
            <div id="ai-tutor-response-box" style="display: none; padding: 12px; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.06); border-radius: 6px; font-size: 0.85rem; line-height: 1.6; color: var(--text-secondary);">
              <!-- Tutor response loads here -->
            </div>
          </div>
        </div>
      `;

      // Bind Tutor Presets
      contentArea.querySelectorAll('.tutor-preset-btn').forEach(btn => {
        btn.onclick = async (e) => {
          const query = e.target.getAttribute('data-query');
          const responseBox = contentArea.querySelector('#ai-tutor-response-box');
          responseBox.style.display = 'block';
          responseBox.innerHTML = `
            <div style="display: flex; align-items: center; gap: 8px;">
              <div class="cbt-spinner" style="border-color: var(--accent); border-top-color: transparent; width: 14px; height: 14px; border-width: 2px;"></div>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent);">GURU INSTRUCTING...</span>
            </div>
          `;
          
          const fullQuery = `Concept: "${topicName}". Context: "${contextText}". Level: "${currentDoubtLevel}". Request: "${query}"`;
          try {
            const apiRes = await fetch('/api/gemini', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                model: 'gemini-2.5-flash',
                contents: [{ parts: [{ text: fullQuery }] }]
              })
            });
            const resData = await apiRes.json();
            const reply = resData.candidates[0].content.parts[0].text;
            responseBox.innerHTML = parseWikiLinks(reply);
          } catch(err) {
            responseBox.innerHTML = `<span style="color: var(--danger);">Guru uplink failed: ${err.message}</span>`;
          }
        };
      });

    } else if (tabName === 'advanced') {
      const rels = data.relations || { parent: [], child: [], sibling: [], confused: [], opposite: [] };
      
      contentArea.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div>
            <h4 style="color: var(--accent); margin-bottom: 6px; font-size: 0.95rem;">Relationship Mapping</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
              <div style="background: rgba(255,255,255,0.02); padding: 10px; border-radius: 6px;">
                <span style="font-weight: bold; font-size: 0.72rem; color: #93c5fd; text-transform: uppercase;">Parent Concepts (Broader)</span>
                <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 6px;">
                  ${(rels.parent || []).map(p => `<span class="wiki-link" onclick="showDronacharyaQuickDoubt('${p.replace(/'/g, "\\'")}', true)">${p}</span>`).join('') || '<span style="color: var(--text-muted); font-size: 0.8rem;">None</span>'}
                </div>
              </div>
              <div style="background: rgba(255,255,255,0.02); padding: 10px; border-radius: 6px;">
                <span style="font-weight: bold; font-size: 0.72rem; color: #86efac; text-transform: uppercase;">Child Concepts (Subtopics)</span>
                <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 6px;">
                  ${(rels.child || []).map(c => `<span class="wiki-link" onclick="showDronacharyaQuickDoubt('${c.replace(/'/g, "\\'")}', true)">${c}</span>`).join('') || '<span style="color: var(--text-muted); font-size: 0.8rem;">None</span>'}
                </div>
              </div>
              <div style="background: rgba(255,255,255,0.02); padding: 10px; border-radius: 6px;">
                <span style="font-weight: bold; font-size: 0.72rem; color: #fef08a; text-transform: uppercase;">Sibling Concepts (Related)</span>
                <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 6px;">
                  ${(rels.sibling || []).map(s => `<span class="wiki-link" onclick="showDronacharyaQuickDoubt('${s.replace(/'/g, "\\'")}', true)">${s}</span>`).join('') || '<span style="color: var(--text-muted); font-size: 0.8rem;">None</span>'}
                </div>
              </div>
              <div style="background: rgba(255,255,255,0.02); padding: 10px; border-radius: 6px;">
                <span style="font-weight: bold; font-size: 0.72rem; color: #fca5a5; text-transform: uppercase;">Frequently Confused Concepts</span>
                <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 6px;">
                  ${(rels.confused || []).map(c => `<span class="wiki-link" onclick="showDronacharyaQuickDoubt('${c.replace(/'/g, "\\'")}', true)">${c}</span>`).join('') || '<span style="color: var(--text-muted); font-size: 0.8rem;">None</span>'}
                </div>
              </div>
              <div style="background: rgba(255,255,255,0.02); padding: 10px; border-radius: 6px; grid-column: span 2;">
                <span style="font-weight: bold; font-size: 0.72rem; color: #ffedd5; text-transform: uppercase;">Opposite / Contrasting Concepts</span>
                <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 6px;">
                  ${(rels.opposite || []).map(o => `<span class="wiki-link" onclick="showDronacharyaQuickDoubt('${o.replace(/'/g, "\\'")}', true)">${o}</span>`).join('') || '<span style="color: var(--text-muted); font-size: 0.8rem;">None</span>'}
                </div>
              </div>
            </div>
          </div>

          <!-- Interactive Bubble Graph -->
          <div>
            <h4 style="color: var(--accent); margin: 0; font-size: 0.95rem;">Interactive Concept Relationship Graph</h4>
            <div class="bubble-container" id="bubble-graph-area">
              <!-- Rendered programmatically -->
            </div>
          </div>
        </div>
      `;

      renderBubbleGraph(topicName, rels);
    }
  };

  // Render Interactive Bubble Relationship Graph
  const renderBubbleGraph = (centerTopic, rels) => {
    const area = document.getElementById('bubble-graph-area');
    if (!area) return;

    // Clear previous
    area.innerHTML = '';

    // Create central node
    const centerNode = document.createElement('div');
    centerNode.className = 'bubble-node bubble-center';
    centerNode.innerText = centerTopic;
    centerNode.style.top = '105px';
    centerNode.style.left = 'calc(50% - 45px)';
    area.appendChild(centerNode);

    // Collect branching nodes
    const branches = [];
    if (rels.parent && rels.parent[0]) branches.push({ name: rels.parent[0], type: 'bubble-parent', relType: 'Parent' });
    if (rels.child && rels.child[0]) branches.push({ name: rels.child[0], type: 'bubble-child', relType: 'Child' });
    if (rels.sibling && rels.sibling[0]) branches.push({ name: rels.sibling[0], type: 'bubble-sibling', relType: 'Sibling' });
    if (rels.confused && rels.confused[0]) branches.push({ name: rels.confused[0], type: 'bubble-confused', relType: 'Confused' });
    if (rels.opposite && rels.opposite[0]) branches.push({ name: rels.opposite[0], type: 'bubble-opposite', relType: 'Opposite' });

    // Setup coordinates relative to center
    const angles = [0, 72, 144, 216, 288];
    const distance = 110;

    branches.forEach((b, i) => {
      const angleRad = (angles[i] * Math.PI) / 180;
      const x = Math.cos(angleRad) * distance + (area.clientWidth / 2) - 35;
      const y = Math.sin(angleRad) * distance + 150 - 35;

      const node = document.createElement('div');
      node.className = `bubble-node bubble-relation ${b.type}`;
      node.innerHTML = `<div style="font-size:0.6rem;opacity:0.75;text-transform:uppercase;">${b.relType}</div>${b.name}`;
      node.style.left = `${x}px`;
      node.style.top = `${y}px`;
      node.onclick = () => {
        showDronacharyaQuickDoubt(b.name, true, contextText);
      };
      area.appendChild(node);
    });
  };

  // Bind tab click events
  tabs.forEach(t => {
    t.onclick = (e) => {
      const tabName = e.target.getAttribute('data-tab');
      switchTab(tabName);
    };
  });

  // Load initial tab
  switchTab('overview');
}

window.checkQuickDoubtOption = function(qIdx, oIdx, correctIdx) {
  const container = document.getElementById(`qd-explanation-${qIdx}`);
  const btns = document.querySelectorAll(`.btn-option-${qIdx}, .btn-pyq-option-${qIdx.replace('pyq-','')}-${oIdx}`);
  
  // Handle both standard practice questions and PYQs
  const targetBtns = qIdx.toString().startsWith('pyq-') 
    ? document.querySelectorAll(`.btn-pyq-option-${qIdx.replace('pyq-','')}`)
    : document.querySelectorAll(`.btn-option-${qIdx}`);

  targetBtns.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === correctIdx) {
      btn.style.background = 'rgba(34, 197, 94, 0.15)';
      btn.style.borderColor = 'rgba(34, 197, 94, 0.4)';
      btn.style.color = '#4ade80';
    } else if (idx === oIdx) {
      btn.style.background = 'rgba(239, 68, 68, 0.15)';
      btn.style.borderColor = 'rgba(239, 68, 68, 0.4)';
      btn.style.color = '#f87171';
    }
  });
  
  const targetExplanation = document.getElementById(`qd-explanation-${qIdx}`);
  if (targetExplanation) {
    targetExplanation.style.display = 'block';
  }
};

window.flipQuickFlashcard = function(el) {
  if (el.style.transform === 'rotateY(180deg)') {
    el.style.transform = 'rotateY(0deg)';
  } else {
    el.style.transform = 'rotateY(180deg)';
  }
};

window.popDoubtHistory = popDoubtHistory;
window.showDronacharyaQuickDoubt = showDronacharyaQuickDoubt;
window.triggerDoubtExplain = (topicName, element) => {
  let contextText = "";
  if (element && element.parentElement) {
    contextText = element.parentElement.innerText || element.parentElement.textContent || "";
  }
  showDronacharyaQuickDoubt(topicName, true, contextText);
};

// 4. Expose functions to global context
window.parseWikiLinks = parseWikiLinks;
window.autoLinkConcepts = autoLinkConcepts;
window.initializeGlossary = initializeGlossary;
