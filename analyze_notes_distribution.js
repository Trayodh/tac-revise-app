const fs = require('fs');
const vm = require('vm');

const sandbox = { 
  window: {}, 
  document: { getElementById: () => null, addEventListener: () => {} }, 
  console: { log: () => {} } 
};
sandbox.window = sandbox;
vm.createContext(sandbox);

const scripts = [
  'notes_data.js',
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
  'notes_data_exam_focused.js',
  'notes_generated_upgraded.js',
  'notes_generated_polity.js',
  'notes_generated_geography.js',
  'notes_generated_economics.js',
  'notes_generated_science.js',
  'notes_generated_defence_env.js',
  'notes_generated_batch6.js',
  'notes_generated_final_patch.js',
  'notes_generated_final_upgrade.js',
  'ai_generated_notes.js',
  'inject_ai_notes.js'
];

for (const s of scripts) {
  if (fs.existsSync(s)) {
    try { vm.runInContext(fs.readFileSync(s, 'utf8'), sandbox); } catch(e) {}
  }
}

const db = sandbox.NOTES_DATABASE;
const exp = sandbox.window.EXPANDED_NOTES_DATA || {};

const stats = [];
for (const [subId, sub] of Object.entries(db)) {
  for (const ch of (sub.chapters || [])) {
    for (const t of (ch.topics || [])) {
      const expContent = exp[t.id] || exp[ch.id];
      const content = expContent || t.notes || '';
      stats.push({
        subject: subId,
        chapterId: ch.id,
        topicId: t.id,
        title: t.title || ch.title,
        len: content.length,
        words: content.split(/\s+/).length
      });
    }
  }
}

stats.sort((a,b) => a.len - b.len);
console.log('Total notes items:', stats.length);
console.log('\nShortest 30 notes:');
stats.slice(0, 30).forEach(s => {
  console.log(`[${s.subject}] ${s.chapterId} / ${s.topicId} (${s.title}): ${s.len} chars (${s.words} words)`);
});

const bySubject = {};
stats.forEach(s => {
  if (!bySubject[s.subject]) bySubject[s.subject] = { totalLen: 0, count: 0, min: 999999, max: 0 };
  bySubject[s.subject].totalLen += s.len;
  bySubject[s.subject].count += 1;
  if (s.len < bySubject[s.subject].min) bySubject[s.subject].min = s.len;
  if (s.len > bySubject[s.subject].max) bySubject[s.subject].max = s.len;
});

console.log('\nSubject-wise average note length:');
for (const [sub, d] of Object.entries(bySubject)) {
  console.log(`${sub} (${d.count} notes): avg ${Math.round(d.totalLen / d.count)} chars (min: ${d.min}, max: ${d.max})`);
}

const shortCount = stats.filter(s => s.len < 10000).length;
const medCount = stats.filter(s => s.len >= 10000 && s.len < 25000).length;
const longCount = stats.filter(s => s.len >= 25000).length;

console.log(`\nLength distribution:`);
console.log(` < 10,000 chars: ${shortCount}`);
console.log(` 10k - 25k chars: ${medCount}`);
console.log(` >= 25k chars: ${longCount}`);
