const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const mdFiles = [];
walkDir('evolved_notes', function(filePath) {
    if (filePath.endsWith('.md')) {
        mdFiles.push(filePath.replace(/\\/g, '/'));
    }
});

// Build glossary
const glossary = [
    // Predefined terms from wiki_links.js
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
    "Viscosity", "Elasticity", "Heat", "Temperature", "Thermodynamics", "Conduction", "Convection",
    "Radiation", "Specific Heat", "Latent Heat", "Wave", "Sound", "Frequency", "Wavelength",
    "Amplitude", "Pitch", "Loudness", "Doppler Effect", "Light", "Mirror", "Lens", "Dispersion",
    "Scattering", "Interference", "Diffraction", "Polarization", "Electricity", "Current",
    "Voltage", "Resistance", "Ohm's Law", "Capacitance", "Magnetism", "Magnetic Field",
    "Electromagnetic Induction", "Transformer", "Generator", "Motor", "Nuclear Physics",
    "Radioactivity", "Alpha Decay", "Beta Decay", "Gamma Decay", "Fission", "Fusion",
    "Electron", "Proton", "Neutron", "Atom", "Molecule", "Isotopes", "Isobars", "Isotones",
    
    // Chemistry
    "Acids", "Bases", "Salts", "pH Scale", "Indicators", "Periodic Table", "Elements", "Compounds",
    "Mixtures", "Solutions", "Colloids", "Suspensions", "Metals", "Non-metals", "Alloys",
    "Ores", "Minerals (Chemistry)", "Metallurgy", "Carbon", "Organic Compounds", "Hydrocarbons",
    "Alkanes", "Alkenes", "Alkynes", "Alcohols", "Aldehydes", "Ketones", "Carboxylic Acids",
    "Polymers", "Plastics", "Fibers", "Soaps", "Detergents", "Fertilizers", "Pesticides",
    "Glass", "Cement", "Explosives", "Isomerism", "Chemical Bonding", "Ionic Bond", "Covalent Bond",
    "Coordinate Bond", "Hydrogen Bond", "Oxidation", "Reduction", "Redox Reactions",
    "Electrolysis", "Catalysis", "Enzymes", "Vitamins", "Carbohydrates", "Proteins", "Fats",
    
    // Biology
    "Cell", "Cell Theory", "Prokaryotes", "Eukaryotes", "Plasma Membrane", "Cell Wall",
    "Nucleus", "Mitochondria", "Chloroplasts", "Ribosomes", "Endoplasmic Reticulum",
    "Golgi Apparatus", "Lysosomes", "Vacuoles", "Cell Division", "Mitosis", "Meiosis",
    "Genetics", "DNA", "RNA", "Chromosomes", "Genes", "Mendel's Laws", "Mutation",
    "Evolution", "Darwinism", "Lamarckism", "Human Anatomy", "Digestive System",
    "Respiratory System", "Circulatory System", "Heart", "Blood", "Excretory System",
    "Kidneys", "Nervous System", "Brain", "Spinal Cord", "Endocrine System", "Hormones",
    "Reproductive System", "Diseases", "Pathogens", "Bacteria", "Viruses", "Fungi", "Protozoa",
    "Immunity", "Antigens", "Antibodies", "Vaccines", "Plant Physiology", "Photosynthesis",
    "Transpiration", "Respiration in Plants", "Plant Hormones", "Tropism", "Ecosystem",
    "Food Chain", "Food Web", "Ecological Pyramids", "Biogeochemical Cycles", "Biodiversity",
    "Conservation", "Pollution"
];

// Add chapter titles to glossary
mdFiles.forEach(mdPath => {
    let content = fs.readFileSync(mdPath, 'utf8');
    let match = content.match(/^#\s+(.+)$/m);
    if (match) {
        let title = match[1].trim();
        // Remove markdown bold/italic
        title = title.replace(/\*\*/g, '').replace(/\*/g, '');
        if (title.length > 3) {
            glossary.push(title);
        }
    }
    // Add filename base
    let base = path.basename(mdPath, '.md').replace(/-/g, ' ');
    if (base.length > 3) {
        glossary.push(base);
    }
});

// Sort by length descending to match longest terms first
const uniqueGlossary = [...new Set(glossary)].sort((a, b) => b.length - a.length);
// Escape regex characters
const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const termsPattern = uniqueGlossary.map(escapeRegExp).join('|');
const glossaryRegex = new RegExp(`(?<!\\[\\[|\\w)(${termsPattern})(?!\\w|\\]\\])`, 'gi');

let totalInjected = 0;

mdFiles.forEach(mdPath => {
    let content = fs.readFileSync(mdPath, 'utf8');
    let original = content;

    // We must avoid injecting into:
    // 1. Existing links: [Text](url)
    // 2. Existing wiki links: [[Text]]
    // 3. Code blocks: ```...``` or `...`
    // 4. Image tags: ![Text](url)
    // 5. HTML tags: <a href="...">
    
    const parts = content.split(/(```[\s\S]*?```|`[^`]+`|\[\[[^\]]+\]\]|\[[^\]]+\]\([^)]+\)|<[^>]+>)/g);
    
    for (let i = 0; i < parts.length; i++) {
        // Skip even indices if they are the special blocks (split keeps capturing groups at odd indices)
        // Actually, split with 1 capturing group puts normal text at even indices (0, 2, 4...) and matched blocks at odd indices (1, 3, 5...)
        if (i % 2 === 0) {
            let part = parts[i];
            
            // Further protect lines starting with # (headers) to not mess up TOC
            let lines = part.split('\n');
            for (let j = 0; j < lines.length; j++) {
                if (!lines[j].startsWith('#')) {
                    lines[j] = lines[j].replace(glossaryRegex, (match) => {
                        return `[[${match}]]`;
                    });
                }
            }
            parts[i] = lines.join('\n');
        }
    }
    
    content = parts.join('');

    if (content !== original) {
        fs.writeFileSync(mdPath, content, 'utf8');
        let count = (content.match(/\[\[/g) || []).length - (original.match(/\[\[/g) || []).length;
        totalInjected += count;
        if (count > 0) {
            console.log(`Injected ${count} links in ${mdPath}`);
        }
    }
});

console.log(`Total wiki links injected: ${totalInjected}`);
