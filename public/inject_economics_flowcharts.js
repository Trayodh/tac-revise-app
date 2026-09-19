const fs = require('fs');

console.log('[Phase 2: Econ Flowcharts] Loading notes_data_exam_focused.js...');

let rawData = fs.readFileSync('notes_data_exam_focused.js', 'utf-8');

const evalCode = rawData.replace('const NOTES_DATABASE =', 'global.NOTES_DATABASE =').replace('let CURRENT_AFFAIRS_DB =', 'global.CURRENT_AFFAIRS_DB =');

try {
    eval(evalCode);
} catch (e) {
    console.error("Failed to parse notes_data_exam_focused.js.");
    process.exit(1);
}

const db = global.NOTES_DATABASE;

const flowcharts = {
    'Repo Rate': `
<div class="mermaid">
graph TD
    A[RBI Increases Repo Rate] --> B[Banks borrow at higher cost]
    B --> C[Banks increase lending rates for public]
    C --> D[Loans become expensive]
    D --> E[Money supply liquidity decreases]
    E --> F[Demand for goods decreases]
    F --> G[Inflation Drops]
</div>`,
    'CRR': `
<div class="mermaid">
graph TD
    A[RBI Increases CRR] --> B[Banks must keep more cash with RBI]
    B --> C[Banks have less money to lend]
    C --> D[Money supply in market decreases]
    D --> E[Inflation Drops]
</div>`
};

let modifiedCount = 0;

if (db['Economics']) {
    console.log('[Phase 2: Econ Flowcharts] Processing Economics topics...');
    for (let topicId in db['Economics']) {
        let notes = db['Economics'][topicId].notes;
        if (!notes) continue;
        
        let changed = false;
        
        for (const [trigger, chartHTML] of Object.entries(flowcharts)) {
            // If the notes mention the trigger and don't already have the chart
            if (notes.includes(trigger) && !notes.includes(chartHTML.substring(0, 30))) {
                notes = notes + "\n\n<h3>Causality Flowchart: " + trigger + "</h3>\n" + chartHTML;
                changed = true;
                modifiedCount++;
            }
        }
        
        if (changed) {
            db['Economics'][topicId].notes = notes;
        }
    }
}

if (modifiedCount > 0) {
    console.log(`[Phase 2: Econ Flowcharts] Injected flowcharts at ${modifiedCount} locations.`);
    const newContent = `let CURRENT_AFFAIRS_DB = ${JSON.stringify(global.CURRENT_AFFAIRS_DB, null, 2)};\n\nconst NOTES_DATABASE = ${JSON.stringify(db, null, 2)};\n`;
    fs.writeFileSync('notes_data_exam_focused.js', newContent, 'utf-8');
    console.log('[Phase 2: Econ Flowcharts] Successfully saved notes_data_exam_focused.js');
} else {
    console.log('[Phase 2: Econ Flowcharts] No topics required flowcharts.');
}
