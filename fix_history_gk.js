/**
 * fix_history_gk.js
 * 
 * User-confirmed fixes:
 * 
 * HISTORY:
 *  - Q9 style: Govt scheme questions (SAGY, Pradhan Mantri etc.) → GK
 *  - Drop all "(Variant N)" questions — they are duplicate low-quality clones
 * 
 * GK:
 *  - Drop questions with self-repeating/copy-paste options (broken extraction)
 *  - Drop Stats/Maths questions (Median statements, salary %, projectile, geometry angles)
 *  - Move vocabulary questions (single word meaning, "what does X imply") → English
 *  - Drop truncated questions with no meaningful statement body
 *    ("Turks did not add colour...", "Coffee in Brazil Select the correct...")
 */

const fs   = require('fs');
const bank = JSON.parse(fs.readFileSync('question_banks/structured_bank.json', 'utf8'));

let stats = { history_to_gk: 0, history_variants_dropped: 0, gk_maths_dropped: 0, gk_english_moved: 0, gk_broken_dropped: 0 };

// ─── HISTORY bucket ───────────────────────────────────────────────────────────

const SCHEME_IN_HISTORY = [
    /saansad adarsh gram/i, /pradhan mantri.*yojana/i, /pm.*scheme/i,
    /government.*programme/i, /ministry of/i, /niti aayog/i,
    /skill india/i, /make in india/i, /digital india/i,
    /ayushman bharat/i, /swachh bharat/i, /jal jeevan/i,
];

bank.cds.gs.history = bank.cds.gs.history.filter(q => {
    if (!q || !q.question) return false;

    // Drop "(Variant N)" duplicates
    if (/\(Variant \d+\)/i.test(q.question)) {
        stats.history_variants_dropped++;
        return false;
    }

    // Move govt scheme questions to GK
    const txt = q.question + ' ' + (q.options||[]).join(' ');
    if (SCHEME_IN_HISTORY.some(p => p.test(txt))) {
        bank.cds.gs.general_knowledge.push(q);
        stats.history_to_gk++;
        console.log('[History→GK/scheme] ' + q.question.substring(0,70));
        return false;
    }

    return true;
});

// ─── GK bucket — deep pass ────────────────────────────────────────────────────

function isBrokenExtraction(q) {
    if (!q || !q.question || !q.options) return false;
    const qLower = q.question.toLowerCase();

    // Options that are just fragments of the question text
    const matchCount = (q.options||[]).filter(o => qLower.includes(o.toLowerCase().substring(0,20))).length;
    if (matchCount >= 3) return true;

    // Question that ends with "Select the correct answer using the codes given below." 
    // but has no actual content before it (< 50 chars before that phrase)
    const selectIdx = qLower.indexOf('select the correct answer');
    if (selectIdx !== -1 && selectIdx < 40) return true;

    // Question body is basically just the subject word + "select the correct answer"
    if (/^[A-Za-z\s]{1,30} Select the correct answer/i.test(q.question)) return true;

    return false;
}

function isMathsInGK(q) {
    if (!q || !q.question) return false;
    const txt = (q.question + ' ' + (q.options||[]).join(' ')).toLowerCase();

    // Stats/probability
    if (/median.*statement/i.test(txt) || /statement.*median/i.test(txt)) return true;
    if (/mean.*statement.*true/i.test(txt)) return true;

    // Salary/percentage calculation
    if (/salary is half.*rise/i.test(txt) || /got a \d+% rise/i.test(txt)) return true;
    if (/shopkeeper.*discount/i.test(txt) || /successive discount/i.test(txt)) return true;

    // Projectile / time-of-flight (no context)
    if (/how long will it take before hitting/i.test(txt)) return true;
    if (/time of flight/i.test(txt) && /projectile/i.test(txt)) return true;

    // Geometry problems (circle, angle, triangle with specific values)
    if (/∠.*=.*°/i.test(txt) || /angle.*aob.*\d+°/i.test(txt)) return true;
    if (/o is the centre of the circle.*intersect/i.test(txt)) return true;

    // Numeric-only options = maths
    const numericOpts = (q.options||[]).filter(o => /^[\d\s\.:π√±\-\/°%]+$/.test(o.trim()));
    if (numericOpts.length >= 3) return true;

    return false;
}

function isEnglishVocabInGK(q) {
    if (!q || !q.question) return false;
    const txt = (q.question).toLowerCase();

    // "I am HUNGRY for success" — underlined word meaning
    if (/i am [A-Z]{3,} /.test(q.question)) return true;
    // "What does the word X imply/mean?"
    if (/what does.*word.*imply/i.test(txt) || /what does.*word.*mean/i.test(txt)) return true;
    if (/what does.*'.*'.*imply/i.test(txt) || /what does.*".*".*imply/i.test(txt)) return true;
    // "meaning of X"
    if (/^what is the meaning of/i.test(txt)) return true;
    // Single word questions with meaning options
    if (q.question.trim().split(' ').length <= 4 && (q.options||[]).some(o => /accepting|tolerating|reducing|removing|desperate|fighting/i.test(o))) return true;

    return false;
}

function isTruncatedGK(q) {
    if (!q || !q.question) return false;
    // Very short questions that are clearly fragments
    if (q.question.trim().length < 30 && (q.options||[]).some(o => /only \d|and \d|all of/i.test(o))) return true;
    return false;
}

const cleanGK = [];
bank.cds.gs.general_knowledge.forEach(q => {
    if (!q || !q.question) { stats.gk_broken_dropped++; return; }

    if (isBrokenExtraction(q)) {
        stats.gk_broken_dropped++;
        console.log('[GK→DROP/broken] ' + q.question.substring(0,70));
        return;
    }

    if (isMathsInGK(q)) {
        stats.gk_maths_dropped++;
        console.log('[GK→DROP/maths] ' + q.question.substring(0,70));
        return;
    }

    if (isTruncatedGK(q)) {
        stats.gk_broken_dropped++;
        console.log('[GK→DROP/truncated] ' + q.question.substring(0,70));
        return;
    }

    if (isEnglishVocabInGK(q)) {
        // Move to English vocabulary bucket
        const enriched = { ...q, topicId: 'english' };
        bank.cds.english.vocabulary.push(enriched);
        bank.nda.gat.english.vocabulary.push(enriched);
        bank.afcat.english.vocabulary.push(enriched);
        stats.gk_english_moved++;
        console.log('[GK→English/vocab] ' + q.question.substring(0,70));
        return;
    }

    cleanGK.push(q);
});
bank.cds.gs.general_knowledge = cleanGK;

// ─── Summary ──────────────────────────────────────────────────────────────────
console.log('\n=== FIX COMPLETE ===');
console.log('History scheme questions → GK: ' + stats.history_to_gk);
console.log('History (Variant N) dropped:    ' + stats.history_variants_dropped);
console.log('GK maths dropped:               ' + stats.gk_maths_dropped);
console.log('GK broken/truncated dropped:    ' + stats.gk_broken_dropped);
console.log('GK vocab moved → English:       ' + stats.gk_english_moved);

console.log('\nFinal bucket sizes:');
Object.entries(bank.cds.gs).forEach(([k,v]) => console.log('  '+k+': '+v.length));

fs.writeFileSync('question_banks/structured_bank.json', JSON.stringify(bank, null, 2));
console.log('\nSaved. Regenerating...');
require('child_process').execSync('node generate_all_papers.js', { stdio: 'inherit' });
