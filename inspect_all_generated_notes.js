const fs = require('fs');
const vm = require('vm');

const genFiles = fs.readdirSync('.').filter(f => f.startsWith('notes_generated_') && f.endsWith('.js'));
console.log('Found generated note files:', genFiles);

const allGenKeys = {};

genFiles.forEach(f => {
    try {
        const text = fs.readFileSync(f, 'utf8');
        const sandbox = { window: {}, document: {}, console: console };
        sandbox.window = sandbox;
        vm.createContext(sandbox);
        vm.runInContext(text, sandbox);
        const data = sandbox.window.EXPANDED_NOTES_DATA || {};
        const keys = Object.keys(data);
        console.log(`  ${f}: ${keys.length} keys (${keys.slice(0, 5).join(', ')}...)`);
        for (const [k, v] of Object.entries(data)) {
            if (!allGenKeys[k] || v.length > allGenKeys[k].length) {
                allGenKeys[k] = v;
            }
        }
    } catch (e) {
        console.error(`Error loading ${f}:`, e.message);
    }
});

console.log(`\nTotal unique keys across all notes_generated_ files: ${Object.keys(allGenKeys).length}`);
fs.writeFileSync('all_generated_notes_map.json', JSON.stringify(allGenKeys, null, 2));
console.log('Saved to all_generated_notes_map.json.');
