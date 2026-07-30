const fs = require('fs');

global.window = global;
global.EXPANDED_NOTES_DATA = {};
global.EXPERT_REVISION_DATA = {};
global.TOPIC_SVGS = {};

// 1. Read notes_extra files
const files = fs.readdirSync('.');
const notesExtraFiles = files.filter(f => f.startsWith('notes_extra_') && f.endsWith('.js'));
for (const f of notesExtraFiles) {
    try {
        let text = fs.readFileSync(f, 'utf8');
        text = text.replace(/const /g, 'var ').replace(/let /g, 'var ');
        eval(text);
    } catch(e) {
        console.error('Error evaluating', f, e);
    }
}

console.log('EXPANDED_NOTES_DATA keys:', Object.keys(global.EXPANDED_NOTES_DATA).length);
console.log('EXPERT_REVISION_DATA keys:', Object.keys(global.EXPERT_REVISION_DATA).length);

// 1.5 Read SVG generated data
if (fs.existsSync('notes_svgs_generated.js')) {
    try {
        let svgTxt = fs.readFileSync('notes_svgs_generated.js', 'utf8');
        eval(svgTxt);
    } catch(e) {
        console.error('Error evaluating notes_svgs_generated.js', e);
    }
}
console.log('TOPIC_SVGS keys:', Object.keys(global.TOPIC_SVGS).length);

// 2. Read notes_data.js
let notesDataText = fs.readFileSync('notes_data.js', 'utf8');
notesDataText = notesDataText.replace(/const /g, 'var ').replace(/let /g, 'var ');
eval(notesDataText);

let mergedCount = 0;

// 3. Merge data
for (const sId in NOTES_DATABASE) {
    const subject = NOTES_DATABASE[sId];
    subject.chapters.forEach(c => {
        c.topics.forEach(t => {
            const expData = global.EXPANDED_NOTES_DATA[t.id];
            const expertData = global.EXPERT_REVISION_DATA[t.id];
            const svgData = global.TOPIC_SVGS[t.id];
            
            let newNotes = t.notes || '';
            const isPlaceholder = newNotes.includes('Detailed notes expanded');
            
            let updated = false;

            if (svgData) {
                const svgWrapper = `
<div class="topic-diagram" style="margin-bottom: 20px; background: rgba(0,0,0,0.1); border-radius: 8px; padding: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.05);">
  ${svgData.replace(/<svg\s+/, '<svg style="max-width: 100%; height: auto; border-radius: 4px;" ')}
</div>`;
                if (isPlaceholder || newNotes.trim() === '') {
                    newNotes = svgWrapper;
                } else {
                    newNotes = svgWrapper + newNotes;
                }
                updated = true;
            }

            if (expData) {
                const wrapper = `
<div class="expanded-notes" style="margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1);">
  <div style="color: var(--accent); font-size: 0.8rem; font-family: var(--font-mono); margin-bottom: 12px; letter-spacing: 1px; text-transform: uppercase;">
    [ Advanced Revision Data ]
  </div>
  ${expData}
</div>`;
                if (isPlaceholder || newNotes.trim() === '') {
                    newNotes = wrapper;
                } else {
                    newNotes += wrapper;
                }
                updated = true;
            } else if (isPlaceholder) {
                // If it's a placeholder but no data was found, just clear it so it doesn't show garbage
                newNotes = '';
                updated = true;
            }

            if (expertData) {
                newNotes += `
<div class="expert-notes" style="margin-top: 24px; padding-top: 24px; border-top: 1px dashed var(--warning);">
  <div style="color: var(--warning); font-size: 0.8rem; font-family: var(--font-mono); margin-bottom: 12px; letter-spacing: 1px; text-transform: uppercase;">
    [ Expert Tactical Edge ]
  </div>
  ${expertData}
</div>`;
                updated = true;
            }

            if (updated) {
                t.notes = newNotes;
                mergedCount++;
            }
        });
    });
}

console.log('Topics modified:', mergedCount);

// 4. Write back to notes_data.js
let outText = '';
if (typeof CURRENT_AFFAIRS_DB !== 'undefined') outText += 'let CURRENT_AFFAIRS_DB = ' + JSON.stringify(CURRENT_AFFAIRS_DB, null, 2) + ';\n\n';
if (typeof NOTES_DATABASE !== 'undefined') outText += 'const NOTES_DATABASE = ' + JSON.stringify(NOTES_DATABASE, null, 2) + ';\n';
fs.writeFileSync('notes_data.js', outText, 'utf8');

console.log('notes_data.js successfully written.');
