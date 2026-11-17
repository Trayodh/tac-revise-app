/**
 * boost_prepare_manifest.js
 * Builds boost_manifest.json for all chapters whose core narrative is < 2,200 words
 * OR total visible word count is < 5,000 words.
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

const targets = [];

for (const ch of notes) {
  const html = ch.notes || '';
  if (html.includes('<!-- CORE_BOOST_EXPANSION -->')) continue;

  const cuts = [
    html.indexOf('<!-- EXTRACTED CONCEPT LIBRARY'),
    html.indexOf('<!-- RECOVERED_NOTES_DB -->'),
    html.indexOf('<div class="extracted-topic-module"')
  ].filter(i => i !== -1);
  const core = cuts.length ? html.slice(0, Math.min(...cuts)) : html;

  const coreWords = core.replace(/<svg[\s\S]*?<\/svg>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(/\s+/).filter(Boolean).length;
  const totalWords = html.replace(/<svg[\s\S]*?<\/svg>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(/\s+/).filter(Boolean).length;

  if (coreWords < 2200 || totalWords < 5000) {
    targets.push({
      id: ch.id,
      title: ch.title,
      subject: ch.subject,
      core_words: coreWords,
      total_words: totalWords,
      syllabus_desc: OFFICIAL_SYLLABUS[ch.id] || ch.title
    });
  }
}

fs.writeFileSync('boost_manifest.json', JSON.stringify({ count: targets.length, targets }, null, 2), 'utf8');
console.log(`✅ boost_manifest.json written: ${targets.length} chapters queued for deep core textbook expansion.`);
