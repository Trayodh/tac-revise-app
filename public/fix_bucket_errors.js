/**
 * fix_bucket_errors.js
 * 
 * Corrects misplaced questions across all buckets based on user-confirmed rules:
 * 
 * ECONOMY → remove:
 *   - Discount/percentage calculation questions (MATHS)
 *   - SDG Index / rankings with explicit recent years (CURRENT AFFAIRS)
 * 
 * POLITY → remove:
 *   - Physics questions (momentum, force etc.) that slipped in
 *   - History trivia (Swami Vivekananda speech, freedom fighters etc.)
 * 
 * PHYSICS → remove:
 *   - History questions (treaties, summits, timelines)
 *   - Geography questions (temperature inversion, atmospheric)
 *   - Chemistry questions (micelles, soap, graphene → Chemistry)
 * 
 * CHEMISTRY → remove:
 *   - History questions (Salt Satyagraha, independence movement locations)
 *   - Geography questions (Earth's crust composition)
 * 
 * BIOLOGY → remove:
 *   - Government scheme / Polity questions
 *   - Computer Science / Technology questions
 * 
 * Removed questions are re-routed to correct buckets or GK.
 */

const fs   = require('fs');
const bank = JSON.parse(fs.readFileSync('question_banks/structured_bank.json', 'utf8'));

let fixed = 0;

// ─── Helper: move a question from source to dest bucket ───────────────────────
function move(q, from, to) {
    const src = bank.cds.gs[from];
    const idx = src.indexOf(q);
    if (idx === -1) return;
    src.splice(idx, 1);

    if (to === 'drop') { fixed++; return; }

    if (bank.cds.gs[to]) bank.cds.gs[to].push(q);
    else bank.cds.gs.general_knowledge.push(q); // fallback to GK

    // Mirror to NDA GAT
    if (['history','geography','polity','current_affairs'].includes(to)) {
        if (bank.nda.gat[to]) bank.nda.gat[to].push(q);
    }
    if (['physics','chemistry','biology'].includes(to)) {
        bank.nda.gat[to].push(q);
    }

    // Mirror to AFCAT
    const afcatMap = { history:'history', geography:'geography', polity:'polity', current_affairs:'current_affairs', physics:'science', chemistry:'science', biology:'science' };
    if (afcatMap[to]) bank.afcat.general_awareness[afcatMap[to]].push(q);

    fixed++;
}

// ─── ECONOMY bucket cleanup ───────────────────────────────────────────────────

const MATHS_IN_ECONOMY = [
    /discount of \d+%/i, /consecutive discount/i, /marked price/i,
    /profit percent/i, /loss percent/i, /selling price/i, /cost price/i,
    /simple interest.*principal/i, /compound interest.*amount/i,
    /what is.*price/i, /ratio.*profit/i,
];

const CA_IN_ECONOMY = [
    /sdg india index/i, /ranked first.*202/i, /index.*202/i, /202\d.*index/i,
    /sustainability.*202/i,
];

[...bank.cds.gs.economy].forEach(q => {
    const txt = q.question + ' ' + (q.options||[]).join(' ');
    if (MATHS_IN_ECONOMY.some(p => p.test(txt))) {
        move(q, 'economy', 'drop');
        console.log('[Economy→DROP/Maths] ' + q.question.substring(0,70));
    } else if (CA_IN_ECONOMY.some(p => p.test(txt))) {
        move(q, 'economy', 'current_affairs');
        console.log('[Economy→CA] ' + q.question.substring(0,70));
    }
});

// ─── POLITY bucket cleanup ────────────────────────────────────────────────────

const PHYSICS_IN_POLITY = [
    /momentum/i, /net force/i, /kinetic energy/i, /potential energy/i,
    /velocity/i, /acceleration/i, /newton/i, /torque/i,
    /ohm/i, /electric field/i, /magnetic field/i,
    /refraction/i, /reflection/i, /wavelength/i,
];

const HISTORY_IN_POLITY = [
    /swami vivekanand/i, /chicago.*189/i, /sisters and brothers of america/i,
    /salt satyagraha/i, /dandi march/i, /jallianwala/i,
    /bhagat singh/i, /bal gangadhar/i,
    /quit india.*194/i, /non-cooperation.*192/i,
    /simla agreement/i, /agra summit/i,
];

[...bank.cds.gs.polity].forEach(q => {
    const txt = q.question + ' ' + (q.options||[]).join(' ');
    if (PHYSICS_IN_POLITY.some(p => p.test(txt))) {
        move(q, 'polity', 'physics');
        console.log('[Polity→Physics] ' + q.question.substring(0,70));
    } else if (HISTORY_IN_POLITY.some(p => p.test(txt))) {
        move(q, 'polity', 'history');
        console.log('[Polity→History] ' + q.question.substring(0,70));
    }
});

// ─── PHYSICS bucket cleanup ───────────────────────────────────────────────────

const HISTORY_IN_PHYSICS = [
    /simla agreement/i, /agra summit/i, /shimla.*19[0-9][0-9]/i,
    /chronological order.*agreement/i, /signing of/i,
    /battle of/i, /treaty of/i, /viceroy/i, /governor-general/i,
    /arrange.*following.*event/i, /sequence.*event/i,
];

const GEO_IN_PHYSICS = [
    /temperature inversion/i, /ground surface inversion/i,
    /atmospheric.*temperature/i, /lapse rate/i,
    /cloud formation/i, /fog/i, /dew/i,
    /season.*earth.*tilt/i, /monsoon/i,
];

const CHEM_IN_PHYSICS = [
    /micelle/i, /soap molecule/i, /saponification/i,
    /graphene/i, /band.gap/i, /wide band/i,
    /carbon nanotube/i,
];

[...bank.cds.gs.physics].forEach(q => {
    const txt = q.question + ' ' + (q.options||[]).join(' ');
    if (HISTORY_IN_PHYSICS.some(p => p.test(txt))) {
        move(q, 'physics', 'history');
        console.log('[Physics→History] ' + q.question.substring(0,70));
    } else if (GEO_IN_PHYSICS.some(p => p.test(txt))) {
        move(q, 'physics', 'geography');
        console.log('[Physics→Geography] ' + q.question.substring(0,70));
    } else if (CHEM_IN_PHYSICS.some(p => p.test(txt))) {
        move(q, 'physics', 'chemistry');
        console.log('[Physics→Chemistry] ' + q.question.substring(0,70));
    }
});

// ─── CHEMISTRY bucket cleanup ─────────────────────────────────────────────────

const HISTORY_IN_CHEMISTRY = [
    /salt satyagraha/i, /sanikatta/i, /dandi/i, /gandhi.*salt/i,
    /freedom movement/i, /independence.*192/i, /independence.*193/i,
    /quit india/i, /non-cooperation/i, /rowlatt/i,
    /swadeshi/i, /khilafat/i,
    /first woman.*minister/i, /bharat ratna.*recipient/i,
];

const GEO_IN_CHEMISTRY = [
    /earth.*crust.*composition/i, /elements.*earth.*crust/i,
    /major elements.*earth/i, /weight percent.*earth/i,
    /tectonic.*composition/i,
];

[...bank.cds.gs.chemistry].forEach(q => {
    const txt = q.question + ' ' + (q.options||[]).join(' ');
    if (HISTORY_IN_CHEMISTRY.some(p => p.test(txt))) {
        move(q, 'chemistry', 'history');
        console.log('[Chemistry→History] ' + q.question.substring(0,70));
    } else if (GEO_IN_CHEMISTRY.some(p => p.test(txt))) {
        move(q, 'chemistry', 'geography');
        console.log('[Chemistry→Geography] ' + q.question.substring(0,70));
    }
});

// ─── BIOLOGY bucket cleanup ───────────────────────────────────────────────────

const GK_IN_BIOLOGY = [
    /government programme/i, /government scheme/i,
    /skill training/i, /skill india/i, /pm-mitra/i, /swanidhi/i,
    /pradhan mantri.*scheme/i, /ministry of/i,
    /microprocessor/i, /computer generation/i, /second generation computer/i,
    /third generation computer/i, /fourth generation computer/i,
    /fifth generation computer/i, /mainframe computer/i,
    /operating system/i, /software/i, /hardware.*computer/i,
    /internet.*protocol/i, /artificial intelligence.*application/i,
];

[...bank.cds.gs.biology].forEach(q => {
    const txt = q.question + ' ' + (q.options||[]).join(' ');
    if (GK_IN_BIOLOGY.some(p => p.test(txt))) {
        move(q, 'biology', 'general_knowledge');
        console.log('[Biology→GK] ' + q.question.substring(0,70));
    }
});

// ─── Summary ──────────────────────────────────────────────────────────────────
console.log('\n=== FIX COMPLETE ===');
console.log('Total corrections: ' + fixed);
console.log('\nFinal CDS GS bucket sizes:');
Object.entries(bank.cds.gs).forEach(([k,v]) => console.log('  '+k+': '+v.length));

fs.writeFileSync('question_banks/structured_bank.json', JSON.stringify(bank, null, 2));
console.log('\nSaved. Regenerating all papers...');
require('child_process').execSync('node generate_all_papers.js', { stdio: 'inherit' });
