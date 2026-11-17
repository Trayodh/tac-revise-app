const fs = require('fs');

console.log('[Phase 3: Military Expansion] Loading notes_data_exam_focused.js...');

let rawData = fs.readFileSync('notes_data_exam_focused.js', 'utf-8');

const evalCode = rawData.replace('const NOTES_DATABASE =', 'global.NOTES_DATABASE =').replace('let CURRENT_AFFAIRS_DB =', 'global.CURRENT_AFFAIRS_DB =');

try {
    eval(evalCode);
} catch (e) {
    console.error("Failed to parse notes_data_exam_focused.js.");
    process.exit(1);
}

const db = global.NOTES_DATABASE;

// Ensure Military Aptitude exists
if (!db['Military Aptitude']) {
    db['Military Aptitude'] = {};
}

const newChapters = {
    'military_chiefs_timeline': {
        title: 'Chiefs Timeline (Army, Navy, Air Force)',
        notes: `
<h2>Commanders-in-Chief & Chiefs of Staff</h2>
<p>The timeline of all military chiefs is a frequent topic in AFCAT and CDS matches.</p>
<div class="ncert-box" style="background-color: rgba(69, 170, 242, 0.1); border-left: 4px solid #45aaf2; padding: 12px; margin: 20px 0; border-radius: 4px;">
<strong>💡 Fun Fact time!</strong><br>
The first Indian Commander-in-Chief of the Indian Army was Field Marshal K. M. Cariappa, who took over from Sir Francis Roy Bucher on 15 January 1949. This day is celebrated as Army Day!
</div>
<table border="1" style="width:100%; border-collapse: collapse; text-align: left; margin-bottom: 20px;">
<tr><th>Service</th><th>First Indian Chief</th><th>Current Chief (2024-25)</th></tr>
<tr><td>Indian Army</td><td>Field Marshal K.M. Cariappa</td><td>General Upendra Dwivedi</td></tr>
<tr><td>Indian Navy</td><td>Admiral R.D. Katari</td><td>Admiral Dinesh K Tripathi</td></tr>
<tr><td>Indian Air Force</td><td>Air Marshal Subroto Mukerjee</td><td>Air Chief Marshal Amar Preet Singh</td></tr>
</table>
`
    },
    'military_dedicated_branches': {
        title: 'Dedicated Branches (Army, Navy, IAF, ICG)',
        notes: `
<h2>Structure of the Armed Forces</h2>
<p>India maintains four primary armed branches under the Ministry of Defence.</p>
<h3>1. Indian Army</h3>
<p>Divided into 7 commands. The fighting arms include Infantry, Armoured Corps, and Artillery.</p>
<h3>2. Indian Air Force</h3>
<p>Divided into 7 commands. Operates fighters like the Su-30MKI, Rafale, and LCA Tejas.</p>
<h3>3. Indian Navy</h3>
<p>Divided into 3 commands (Western, Eastern, Southern). Operates Aircraft Carriers like INS Vikramaditya and INS Vikrant.</p>
<h3>4. Indian Coast Guard (ICG)</h3>
<p>Established in 1978. Protects India's maritime interests and enforces maritime law over territorial waters and the EEZ.</p>
<div class="memory-hack-box" style="background-color: rgba(162, 155, 254, 0.1); border-left: 4px solid #a29bfe; padding: 12px; margin: 20px 0; border-radius: 4px;">
<strong>💡 Memory Hack!</strong><br>
Navy Commands: WES (West, East, South). There is NO Northern Command in the Navy (obviously, no ocean there!).
</div>
`
    },
    'military_allied_agencies': {
        title: 'Allied Agencies (Intelligence, BRO, ISRO, CAPF)',
        notes: `
<h2>Allied Defence & Intelligence Agencies</h2>
<p>UPSC frequently tests the mandates of various allied agencies.</p>
<ul>
<li><strong>RAW (Research and Analysis Wing):</strong> India's primary foreign intelligence agency.</li>
<li><strong>IB (Intelligence Bureau):</strong> India's internal intelligence agency.</li>
<li><strong>BRO (Border Roads Organisation):</strong> Develops and maintains road networks in India's border areas.</li>
<li><strong>ISRO (Indian Space Research Organisation):</strong> Provides critical defence satellite capabilities (e.g., GSAT-7 'Rukmini' for the Navy).</li>
</ul>
<h3>Central Armed Police Forces (CAPF)</h3>
<p>Includes CRPF, BSF, ITBP, CISF, and SSB. They operate under the Ministry of Home Affairs, NOT the Ministry of Defence.</p>
`
    }
};

let added = 0;
for (const [id, content] of Object.entries(newChapters)) {
    if (!db['Military Aptitude'][id]) {
        db['Military Aptitude'][id] = content;
        added++;
    }
}

if (added > 0) {
    console.log(`[Phase 3: Military Expansion] Successfully injected ${added} new encyclopedic chapters into Military Aptitude.`);
    const newContent = `let CURRENT_AFFAIRS_DB = ${JSON.stringify(global.CURRENT_AFFAIRS_DB, null, 2)};\n\nconst NOTES_DATABASE = ${JSON.stringify(db, null, 2)};\n`;
    fs.writeFileSync('notes_data_exam_focused.js', newContent, 'utf-8');
    console.log('[Phase 3: Military Expansion] Successfully saved notes_data_exam_focused.js');
} else {
    console.log('[Phase 3: Military Expansion] Chapters already exist. Skipping.');
}
