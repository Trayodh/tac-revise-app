/**
 * apply_user_rules.js
 * 
 * User-defined classification rules for the GK bucket:
 * 
 * 1. Military operations/weapons → keep in GK (valid for all CDS GS papers)
 * 2. History topics (Ajanta, Ellora, Gupta, ancient India) → move to history bucket
 * 3. Geography topics (glacial, metamorphic, landforms) → move to geography bucket
 * 4. Current affairs: only move if question says 'recently' or '2023/2024' explicitly
 * 5. DROP questions where statement body is not visible
 *    (i.e., question says "Consider the following statements:" but the statements
 *    themselves are either missing or the question text is under 80 characters)
 */

const fs = require('fs');
const bank = JSON.parse(fs.readFileSync('question_banks/structured_bank.json', 'utf8'));
const gk = [...bank.cds.gs.general_knowledge];

let movedHistory = 0, movedGeo = 0, movedCA = 0, dropped = 0;
const clean = [];

const HISTORY_PATTERNS = [
    'ajanta', 'ellora', 'gupta', 'maurya', 'mughal', 'delhi sultanate',
    'maratha', 'vijayanagara', 'chola', 'pallava', 'rashtrakuta',
    'harappan', 'indus valley', 'vedic', 'ashoka', 'chandragupta',
    'akbar', 'aurangzeb', 'humayun', 'babur', 'shershah',
    'revolt of 1857', 'sepoy mutiny', 'jallianwala', 'quit india',
    'non-cooperation', 'civil disobedience', 'khilafat',
    'partition of india', 'cabinet mission', 'simon commission',
    'bhagat singh', 'subhas chandra bose', 'bal gangadhar tilak',
    'swadeshi movement', 'rowlatt act', 'montague chelmsford',
    'socialist tendency in the national movement',
    'growth of socialist'
];

const GEO_PATTERNS = [
    'glacial trough', 'glacial', 'metamorphic rock', 'igneous rock', 'sedimentary rock',
    'alpine glacier', 'continental glacier',
    'cotton textile industry', 'river basin', 'watershed',
    'monsoon', 'westerlies', 'trade winds', 'jet stream',
    'soil erosion', 'deforestation', 'desertification',
    'earthquake zone', 'tectonic plate', 'volcanic', 'tsunami',
    'saar', 'ruhr', 'nile', 'amazon', 'yangtze', 'ganges', 'brahmaputra',
    'himalayan', 'deccan plateau', 'western ghats', 'eastern ghats',
    'bay of bengal', 'arabian sea', 'indian ocean'
];

const EXPLICIT_CA_PATTERNS = [
    'recently', 'in 2023', 'in 2024', '2023-24', '2024-25'
];

gk.forEach(q => {
    if (!q || !q.question) { dropped++; return; }

    const txt = (q.question + ' ' + (q.options||[]).join(' ')).toLowerCase();
    const fullQ = q.question;

    // RULE 5: Drop questions where statement body is not visible
    // A "Consider the following statements" question should have actual content (>120 chars)
    const isStatementFormat = /consider the following|which of the following statements/i.test(fullQ);
    if (isStatementFormat && fullQ.trim().length < 120) {
        console.log('[DROPPED - truncated/empty] ' + fullQ.substring(0, 80));
        dropped++;
        return;
    }

    // RULE 4: Current affairs (only explicit year/recently mentions)
    if (EXPLICIT_CA_PATTERNS.some(p => txt.includes(p))) {
        bank.cds.gs.current_affairs.push(q);
        bank.nda.gat.current_affairs.push(q);
        bank.afcat.general_awareness.current_affairs.push(q);
        movedCA++;
        return;
    }

    // RULE 2: History → history bucket
    if (HISTORY_PATTERNS.some(p => txt.includes(p))) {
        bank.cds.gs.history.push(q);
        bank.nda.gat.history.push(q);
        bank.afcat.general_awareness.history.push(q);
        movedHistory++;
        return;
    }

    // RULE 3: Geography → geography bucket
    if (GEO_PATTERNS.some(p => txt.includes(p))) {
        bank.cds.gs.geography.push(q);
        bank.nda.gat.geography.push(q);
        bank.afcat.general_awareness.geography.push(q);
        movedGeo++;
        return;
    }

    // RULE 1: Military ops/weapons, and everything else → stays in GK (valid for all CDS GS)
    clean.push(q);
});

bank.cds.gs.general_knowledge = clean;

console.log('\n=== USER RULES APPLIED ===');
console.log('Moved to history:       ' + movedHistory);
console.log('Moved to geography:     ' + movedGeo);
console.log('Moved to current_affairs: ' + movedCA);
console.log('Dropped (truncated):    ' + dropped);
console.log('Clean GK remaining:     ' + clean.length);

console.log('\nUpdated bucket sizes:');
Object.entries(bank.cds.gs).forEach(([k,v]) => console.log('  ' + k + ': ' + v.length));

fs.writeFileSync('question_banks/structured_bank.json', JSON.stringify(bank, null, 2));
console.log('\nSaved structured_bank.json. Regenerating papers...');

require('child_process').execSync('node generate_all_papers.js', { stdio: 'inherit' });
