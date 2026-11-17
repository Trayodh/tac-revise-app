/**
 * fix_maths_bucket.js
 * 
 * Removes GS questions that leaked into the Maths bucket and routes them 
 * to their respective GS buckets (Biology, Geography, History, etc.).
 * Leaves genuine Maths questions (like percentage, pie chart, elections) in Maths.
 */

const fs = require('fs');
const bank = JSON.parse(fs.readFileSync('question_banks/structured_bank.json', 'utf8'));

let fixed = 0;

// GS identifiers that definitely aren't maths
const GS_KEYWORDS = [
    'petroleum', 'brain in the figure', 'rods and cones', 'high altitude', 'pressure cooker',
    'vitamin', 'blood sugar', 'virus', 'treaty', 'ocean', 'currents', 'minerals', 'ph of human blood',
    'reserve bank of india', 'code on wages', 'air quality guidelines', 'proteins', 'bacteria',
    'government of india'
];

// Helper to route to GS
function routeToGS(q) {
    const txt = q.question.toLowerCase();
    let target = 'general_knowledge';
    
    if (/vitamin|blood|brain|rods and cones|proteins|virus|bacteria|cell/i.test(txt)) target = 'biology';
    else if (/ocean|minerals|geography/i.test(txt)) target = 'geography';
    else if (/treaty/i.test(txt)) target = 'history';
    else if (/ph of|petroleum/i.test(txt)) target = 'chemistry';
    else if (/pressure cooker|altitude/i.test(txt)) target = 'physics';
    else if (/reserve bank|wages/i.test(txt)) target = 'economy';

    bank.cds.gs[target].push(q);
    
    // Mirror to NDA GAT
    if (['history','geography','polity','current_affairs'].includes(target)) {
        if (bank.nda.gat[target]) bank.nda.gat[target].push(q);
    }
    if (['physics','chemistry','biology'].includes(target)) {
        if (bank.nda.gat[target]) bank.nda.gat[target].push(q);
    }
    
    // Mirror to AFCAT
    const afcatMap = { history:'history', geography:'geography', polity:'polity', current_affairs:'current_affairs', physics:'science', chemistry:'science', biology:'science' };
    if (afcatMap[target] && bank.afcat.general_awareness[afcatMap[target]]) {
        bank.afcat.general_awareness[afcatMap[target]].push(q);
    }
}

function processMathsArray(arr) {
    return arr.filter(q => {
        if (!q || !q.question) return false;
        const txt = q.question.toLowerCase();
        
        // Exclude actual maths questions about elections/votes/pie charts
        if (txt.includes('fought an election') || txt.includes('pie chart') || txt.includes('voter list did not cast')) {
            return true; 
        }

        if (GS_KEYWORDS.some(k => txt.includes(k))) {
            console.log(`[Maths -> GS] ${q.question.substring(0, 80)}`);
            routeToGS(q);
            fixed++;
            return false; // Remove from maths
        }
        return true;
    });
}

// Clean CDS Maths
Object.keys(bank.cds.maths).forEach(sub => {
    bank.cds.maths[sub] = processMathsArray(bank.cds.maths[sub]);
});

// Clean NDA Maths
if (bank.nda && bank.nda.maths && !Array.isArray(bank.nda.maths)) {
    Object.keys(bank.nda.maths).forEach(sub => {
        bank.nda.maths[sub] = processMathsArray(bank.nda.maths[sub]);
    });
} else if (Array.isArray(bank.nda.maths)) {
    bank.nda.maths = processMathsArray(bank.nda.maths);
}

console.log('\n=== FIX COMPLETE ===');
console.log('Maths questions routed to GS: ' + fixed);

fs.writeFileSync('question_banks/structured_bank.json', JSON.stringify(bank, null, 2));
console.log('\nSaved. Regenerating papers...');
require('child_process').execSync('node generate_all_papers.js', { stdio: 'inherit' });
