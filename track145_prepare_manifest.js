/**
 * track145_prepare_manifest.js
 * Builds track145_manifest.json listing exact targets for:
 *  - Track 1 + Track 4: All 69 new granular chapters + all existing chapters < 60,000 chars
 *  - Track 5: All GS, Science, and Current Affairs chapters missing TRACK5_EXAM_EDGE_MATRIX
 */
const fs = require('fs');
const vm = require('vm');

const sylSb = { window: {} };
vm.createContext(sylSb);
vm.runInContext(fs.readFileSync('syllabus_data.js', 'utf8'), sylSb);
const OFFICIAL_SYLLABUS = sylSb.window.OFFICIAL_SYLLABUS_DATA;

const aiSb = { window: {} };
vm.createContext(aiSb);
vm.runInContext(fs.readFileSync('ai_generated_notes.js', 'utf8'), aiSb);
const notes = aiSb.window.AI_GENERATED_NOTES;

// Identify the 69 newly added granular chapters (last 69 entries)
const newGranularIds = new Set(notes.slice(-69).map(n => n.id));

const track14Targets = [];
const track5Targets = [];
const TRACK5_SUBJECTS = new Set([
  'polity', 'history', 'geography', 'economics', 'environment',
  'physics', 'chemistry', 'biology', 'current-affairs'
]);

for (const ch of notes) {
  const len = (ch.notes || '').length;
  const desc = OFFICIAL_SYLLABUS[ch.id] || ch.title;

  if (!ch.notes.includes('<!-- TRACK14_MASTERCLASS -->') && (newGranularIds.has(ch.id) || len < 60000)) {
    track14Targets.push({
      id: ch.id,
      title: ch.title,
      subject: ch.subject,
      current_len: len,
      is_new_granular: newGranularIds.has(ch.id),
      syllabus_desc: desc
    });
  }

  if (TRACK5_SUBJECTS.has(ch.subject) && !ch.notes.includes('<!-- TRACK5_EXAM_EDGE_MATRIX -->')) {
    track5Targets.push({
      id: ch.id,
      title: ch.title,
      subject: ch.subject,
      syllabus_desc: desc
    });
  }
}

const manifest = {
  generated_at: new Date().toISOString(),
  track14_count: track14Targets.length,
  track5_count: track5Targets.length,
  track14_targets: track14Targets,
  track5_targets: track5Targets
};

fs.writeFileSync('track145_manifest.json', JSON.stringify(manifest, null, 2), 'utf8');
console.log(`✅ track145_manifest.json written:`);
console.log(`   - Track 1+4 Masterclass targets: ${track14Targets.length}`);
console.log(`   - Track 5 Trap+NCERT Matrix targets: ${track5Targets.length}`);
