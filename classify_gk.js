const fs = require('fs');

const keywords = {
    physics: ['velocity', 'speed', 'acceleration', 'force', 'gravity', 'optics', 'lens', 'focal', 'resistance', 'ohm', 'volt', 'current', 'magnetic', 'electricity', 'kinetic', 'thermodynamics', 'vector', 'scalar', 'sound', 'wave', 'hz', 'frequency', 'pressure', 'pascal', 'hooke', 'elasticity', 'momentum', 'newton', 'joule', 'watt', 'power', 'work', 'energy', 'light', 'mirror', 'reflection', 'refraction', 'diffraction', 'friction', 'mass', 'weight', 'density', 'temperature', 'heat', 'conductor', 'insulator', 'electron', 'circuit', 'radioactive'],
    chemistry: ['acid', 'base', 'ph', 'metal', 'alloy', 'ore', 'element', 'compound', 'molecule', 'atom', 'electron', 'proton', 'neutron', 'periodic table', 'isotope', 'salt', 'hydroxide', 'carbonate', 'oxide', 'gas', 'oxygen', 'nitrogen', 'carbon', 'synthesis', 'polymer', 'catalyst', 'reaction', 'solution', 'solvent', 'solute', 'molar', 'bond', 'covalent', 'ionic', 'halogens', 'noble gas', 'iron', 'copper', 'zinc', 'sodium', 'potassium', 'calcium', 'sulphur', 'phosphorus', 'combustion', 'rust', 'crystal', 'liquid', 'solid', 'plasma'],
    biology: ['cell', 'tissue', 'organ', 'blood', 'heart', 'disease', 'virus', 'bacteria', 'plant', 'animal', 'photosynthesis', 'respiration', 'protein', 'vitamin', 'dna', 'rna', 'genetics', 'species', 'hormone', 'enzyme', 'digestion', 'mammal', 'reproduction', 'mitosis', 'meiosis', 'fungi', 'algae', 'brain', 'nerve', 'skeleton', 'bone', 'muscle', 'lung', 'kidney', 'liver', 'stomach', 'chlorophyll', 'xylem', 'phloem', 'seed', 'flower', 'fruit', 'root', 'stem', 'leaf', 'vaccine', 'antibody', 'antigen'],
    history: ['gandhi', 'movement', 'congress', 'british', 'viceroy', 'dynasty', 'mughal', 'mauryan', 'gupta', 'chola', 'war', 'treaty', 'revolt', 'act', 'session', 'medieval', 'ancient', 'modern', 'indus', 'vedic', 'harappa', 'buddha', 'mahavira', 'ashoka', 'akbar', 'shah jahan', 'aurangzeb', 'maratha', 'sikh', 'east india company', 'rebellion', 'independence', 'partition', 'satyagraha', 'rebel', 'empire', 'king', 'emperor', 'queen', 'civilization', 'century', 'historic', 'historical', 'reign', 'battle'],
    geography: ['river', 'mountain', 'soil', 'plateau', 'longitude', 'latitude', 'earth', 'planet', 'solar', 'wind', 'climate', 'monsoon', 'forest', 'crop', 'ocean', 'sea', 'lake', 'tectonic', 'earthquake', 'volcano', 'equator', 'map', 'island', 'strait', 'gulf', 'bay', 'desert', 'glacier', 'atmosphere', 'troposphere', 'stratosphere', 'temperature', 'rainfall', 'agriculture', 'continent', 'country', 'city', 'valley', 'hill', 'coast', 'delta', 'basin', 'mineral', 'rock', 'igneous', 'sedimentary', 'metamorphic'],
    polity: ['constitution', 'article', 'amendment', 'parliament', 'lok sabha', 'rajya sabha', 'president', 'prime minister', 'court', 'judge', 'justice', 'fundamental', 'rights', 'duties', 'directive', 'panchayat', 'election', 'bill', 'supreme court', 'high court', 'governor', 'chief minister', 'cabinet', 'ministry', 'democracy', 'republic', 'secular', 'federal', 'writ', 'habeas corpus', 'mandamus', 'certiorari', 'quo warranto', 'prohibition', 'state', 'union', 'territory', 'citizen', 'citizenship', 'legislation', 'legislature', 'executive', 'judiciary'],
    economy: ['gdp', 'inflation', 'bank', 'reserve', 'rbi', 'repo', 'fiscal', 'deficit', 'budget', 'poverty', 'tax', 'revenue', 'market', 'currency', 'plan', 'sector', 'industry', 'trade', 'export', 'import', 'five year plan', 'unemployment', 'investment', 'capital', 'monetary', 'wto', 'imf', 'world bank', 'economic', 'economy', 'growth', 'development', 'welfare', 'subsidy', 'price', 'cost', 'demand', 'supply', 'production', 'consumption']
};

function classifyQuestion(qStr) {
    qStr = qStr.toLowerCase();
    let bestSubject = 'general_knowledge'; // Default
    let maxScore = 0;

    for (const [subject, words] of Object.entries(keywords)) {
        let score = 0;
        for (const word of words) {
            // Check for whole word match to avoid substring false positives
            const regex = new RegExp('\\b' + word + '\\b', 'i');
            if (regex.test(qStr)) {
                score++;
            }
        }
        if (score > maxScore) {
            maxScore = score;
            bestSubject = subject;
        }
    }
    return bestSubject;
}

function main() {
    const bankPath = 'question_banks/structured_bank.json';
    let bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));

    if (bank.cds && bank.cds.gs && bank.cds.gs.general_knowledge) {
        const unclassified = bank.cds.gs.general_knowledge;
        console.log(`Found ${unclassified.length} unclassified questions in CDS GS.`);

        let classifiedCount = 0;
        let remainingCount = 0;

        // Iterate backwards since we are mutating
        for (let i = unclassified.length - 1; i >= 0; i--) {
            const q = unclassified[i];
            const textToSearch = (q.question + " " + (q.options ? q.options.join(" ") : "")).toLowerCase();
            const subject = classifyQuestion(textToSearch);

            if (subject !== 'general_knowledge') {
                if (!bank.cds.gs[subject]) {
                    bank.cds.gs[subject] = [];
                }
                // Add to the new subject
                q.topicId = subject;
                bank.cds.gs[subject].push(q);
                // Remove from general_knowledge
                unclassified.splice(i, 1);
                classifiedCount++;
            } else {
                remainingCount++;
            }
        }

        console.log(`Classification complete!`);
        console.log(`- Classified into subjects: ${classifiedCount}`);
        console.log(`- Left as general_knowledge: ${remainingCount}`);

        fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2), 'utf8');
        
        console.log(`\nNew CDS GS Subject Totals:`);
        for (const [key, arr] of Object.entries(bank.cds.gs)) {
            console.log(`- ${key}: ${arr.length}`);
        }
    } else {
        console.log("No unclassified CDS GS questions found.");
    }
}

main();
