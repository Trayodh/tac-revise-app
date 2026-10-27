const fs = require('fs');
const vm = require('vm');

const sandbox = {
    window: {},
    document: {
        getElementById: () => null,
        querySelectorAll: () => []
    },
    console: console,
    marked: { parse: (s) => s },
    MathJax: { typesetPromise: () => Promise.resolve() }
};
sandbox.window = sandbox;
vm.createContext(sandbox);

// 1. notes_data.js
vm.runInContext(fs.readFileSync('notes_data.js', 'utf8'), sandbox);
console.log('After notes_data.js:');
console.log('Subjects:', Object.keys(sandbox.NOTES_DATABASE || {}));

// 2. Extra notes files
const extraFiles = [
    'notes_extra_mathematics.js',
    'notes_extra_english.js',
    'notes_extra_polity.js',
    'notes_extra_reasoning.js',
    'notes_extra_history.js',
    'notes_extra_geography.js',
    'notes_extra_economics.js',
    'notes_extra_physics.js',
    'notes_extra_chemistry.js',
    'notes_extra_biology.js',
    'notes_extra_military-aptitude.js',
    'notes_extra_current-affairs.js',
    'notes_extra_environment.js',
    'notes_extra_military_aptitude.js',
    'notes_data_exam_focused.js'
];

for (const f of extraFiles) {
    if (fs.existsSync(f)) {
        try {
            vm.runInContext(fs.readFileSync(f, 'utf8'), sandbox);
        } catch (e) {
            console.log(`Error in ${f}: ${e.message}`);
        }
    }
}

// 3. Generated notes files
const genFiles = [
    'notes_generated_upgraded.js',
    'notes_generated_polity.js',
    'notes_generated_geography.js',
    'notes_generated_geography_deep.js',
    'notes_generated_economics.js',
    'notes_generated_science.js',
    'notes_generated_defence_env.js',
    'notes_generated_batch6.js',
    'notes_generated_final_patch.js',
    'notes_generated_final_upgrade.js',
    'ai_generated_notes.js',
    'inject_ai_notes.js'
];

for (const f of genFiles) {
    if (fs.existsSync(f)) {
        try {
            vm.runInContext(fs.readFileSync(f, 'utf8'), sandbox);
        } catch (e) {
            console.log(`Error in ${f}: ${e.message}`);
        }
    }
}

console.log('\nFinal state of NOTES_DATABASE:');
const db = sandbox.NOTES_DATABASE || sandbox.window.NOTES_DATABASE;
if (db) {
    console.log('Subjects count:', Object.keys(db).length);
    console.log('Subjects:', Object.keys(db));
    let totalCh = 0;
    for (const [k, v] of Object.entries(db)) {
        const count = (v.chapters || []).length;
        totalCh += count;
        console.log(`  ${k}: ${count} chapters`);
    }
    console.log('Total Chapters in NOTES_DATABASE:', totalCh);
} else {
    console.log('NOTES_DATABASE is undefined');
}
