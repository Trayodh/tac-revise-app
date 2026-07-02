/**
 * coverage_audit.js
 * Shows which topics are covered by specific images vs. fallback
 */
const fs = require('fs');
const src = fs.readFileSync('js/notes_browser.js', 'utf8');

// Extract TOPIC_MAPS
const start = src.indexOf('const TOPIC_MAPS');
const end = src.indexOf(';\n', start);
const raw = src.slice(start, end + 1);

// Count unique topic IDs in TOPIC_MAPS
const topicKeys = [...raw.matchAll(/"([a-z0-9\-]+)":\s*\[/g)].map(m => m[1]);
console.log('Topics with specific image mappings:', topicKeys.length);

// Also read data.js to find all topic IDs
const dataSrc = fs.readFileSync('data.js', 'utf8');
const allTopicIds = [...dataSrc.matchAll(/id:\s*["']([^"']+)["']/g)].map(m => m[1]);

// Get only topics that have notes (true topics, not chapters/subjects)
// Find topics that appear in TOPIC_MAPS
const inMap = new Set(topicKeys);

// Find topics NOT in map
const notInMap = allTopicIds.filter(id => !inMap.has(id));
console.log('\nAll topic IDs in data.js:', allTopicIds.length);
console.log('NOT in TOPIC_MAPS (using fallback):', notInMap.length);
console.log('\nTopics needing specific images:');
notInMap.forEach(id => console.log(' -', id));
