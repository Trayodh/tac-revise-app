/**
 * merge_extracted_notes.js
 * 
 * Ingests all 15,788 extracted notes and MCQs from notes_database.json
 * and merges them directly into the 202 canonical syllabus chapters in ai_generated_notes.js.
 */

const fs = require('fs');
const vm = require('vm');

console.log('--- Step 1: Loading Syllabus & Current Masterclass Notes ---');

// 1. Load Syllabus Data
const sylCode = fs.readFileSync('syllabus_data.js', 'utf8');
const sylSandbox = { window: {} };
sylSandbox.window = sylSandbox;
vm.createContext(sylSandbox);
vm.runInContext(sylCode, sylSandbox);
const OFFICIAL_SYLLABUS = sylSandbox.OFFICIAL_SYLLABUS_DATA;
const chKeys = Object.keys(OFFICIAL_SYLLABUS);
console.log(`Loaded ${chKeys.length} canonical chapters from syllabus.`);

// 2. Load Existing AI_GENERATED_NOTES
const { AI_GENERATED_NOTES } = require('./ai_generated_notes.js');
console.log(`Loaded ${AI_GENERATED_NOTES.length} chapters from ai_generated_notes.js.`);

// 3. Load notes_database.json
console.log('--- Step 2: Loading & Filtering notes_database.json ---');
const rawNotes = JSON.parse(fs.readFileSync('notes_database.json', 'utf8'));
console.log(`Loaded ${rawNotes.length} raw extracted notes from notes_database.json.`);

// Subject mapping helper
const SUBJECT_MAP = {
  'mathematics': 'mathematics',
  'math': 'mathematics',
  'arithmetic': 'mathematics',
  'algebra': 'mathematics',
  'geometry': 'mathematics',
  'trigonometry': 'mathematics',
  'calculus': 'mathematics',
  'statistics': 'mathematics',
  'quantitative aptitude': 'mathematics',
  
  'english': 'english',
  'english grammar': 'english',
  'vocabulary': 'english',
  'general english': 'english',
  
  'polity': 'polity',
  'indian polity': 'polity',
  'constitution': 'polity',
  'indian constitution': 'polity',
  'constitutional law': 'polity',
  'political science': 'polity',
  'judiciary': 'polity',
  'governance': 'polity',
  
  'history': 'history',
  'indian history': 'history',
  'ancient history': 'history',
  'modern history': 'history',
  'modern indian history': 'history',
  'medieval history': 'history',
  'world history': 'history',
  'art and culture': 'history',
  'art & culture': 'history',
  
  'geography': 'geography',
  'indian geography': 'geography',
  'physical geography': 'geography',
  'climatology': 'geography',
  'oceanography': 'geography',
  
  'economics': 'economics',
  'economy': 'economics',
  'indian economy': 'economics',
  'banking': 'economics',
  'public finance': 'economics',
  
  'physics': 'physics',
  'optics': 'physics',
  'mechanics': 'physics',
  'thermodynamics': 'physics',
  
  'chemistry': 'chemistry',
  'organic chemistry': 'chemistry',
  'inorganic chemistry': 'chemistry',
  
  'biology': 'biology',
  'human anatomy': 'biology',
  'human physiology': 'biology',
  'botany': 'biology',
  'zoology': 'biology',
  'general science': 'biology', // default fallback for life science
  
  'military-aptitude': 'military-aptitude',
  'defence': 'military-aptitude',
  'defence studies': 'military-aptitude',
  'reasoning': 'military-aptitude',
  'logical reasoning': 'military-aptitude',
  'verbal reasoning': 'military-aptitude',
  
  'current-affairs': 'current-affairs',
  'international relations': 'current-affairs',
  'awards and honors': 'current-affairs',
  
  'environment': 'environment',
  'environmental science': 'environment',
  'ecology': 'environment'
};

function getCanonicalSubject(subj) {
  if (!subj) return null;
  const s = subj.toLowerCase().trim();
  for (const [k, v] of Object.entries(SUBJECT_MAP)) {
    if (s === k || s.includes(k)) return v;
  }
  return null;
}

// Map chapter ID to canonical subject based on AI_GENERATED_NOTES
const chapterToSubject = {};
const chapterMap = {};
AI_GENERATED_NOTES.forEach(ch => {
  chapterToSubject[ch.id] = ch.subject;
  chapterMap[ch.id] = ch;
});

// Build keyword registry for each syllabus chapter
const chapterKeywords = {};
for (const [chId, desc] of Object.entries(OFFICIAL_SYLLABUS)) {
  const targetSubj = chapterToSubject[chId] || '';
  const cleanId = chId.replace(/-/g, ' ');
  const words = (cleanId + ' ' + (desc || ''))
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2 && !['subtopics','standard','exams','class','concepts','topic','topics','with','from','that','this'].includes(w));
  chapterKeywords[chId] = {
    subject: targetSubj,
    keywords: Array.from(new Set(words))
  };
}

// 4. Map and group extracted notes
console.log('--- Step 3: Classifying & Grouping 15,788 Notes into Chapters ---');
const groupedNotes = {};
chKeys.forEach(k => groupedNotes[k] = []);

let mappedCount = 0;
let skippedCount = 0;

rawNotes.forEach(item => {
  const txt = (item.text || item.content || '').trim();
  if (txt.length < 90) {
    skippedCount++;
    return;
  }
  if (txt.includes('Pages ') && txt.length < 200 && !txt.includes('<table') && !txt.includes('###')) {
    skippedCount++;
    return;
  }

  const rawSubj = (item.subject || '').trim();
  const canonSubj = getCanonicalSubject(rawSubj);
  const chName = (item.chapter || '').toLowerCase();
  const topName = (item.topic || '').toLowerCase();
  const fullText = (rawSubj + ' ' + chName + ' ' + topName).replace(/[^a-z0-9 ]/g, ' ');

  let bestCh = null;
  let maxScore = 0;

  for (const [chId, info] of Object.entries(chapterKeywords)) {
    // Subject compatibility bonus / penalty
    let score = 0;
    if (canonSubj && info.subject) {
      if (canonSubj === info.subject) {
        score += 8;
      } else if (canonSubj === 'biology' && (info.subject === 'physics' || info.subject === 'chemistry')) {
        // general science cross-boundary
        score += 2;
      } else {
        // Mismatched subject - penalize heavily to prevent bleed
        score -= 20;
      }
    }

    // Exact chapter ID matching
    const cleanId = chId.replace(/-/g, ' ');
    if (chName.includes(cleanId) || topName.includes(cleanId)) {
      score += 25;
    }

    // Keyword matching
    for (const kw of info.keywords) {
      if (kw.length >= 4 && (chName.includes(kw) || topName.includes(kw))) {
        score += 5;
      } else if (kw.length >= 4 && fullText.includes(kw)) {
        score += 2;
      }
    }

    if (score > maxScore && score >= 12) {
      maxScore = score;
      bestCh = chId;
    }
  }

  if (bestCh) {
    groupedNotes[bestCh].push(item);
    mappedCount++;
  } else {
    skippedCount++;
  }
});

console.log(`Successfully classified ${mappedCount} extracted notes across chapters.`);
console.log(`Filtered out ${skippedCount} low-signal / TOC / duplicate notes.`);

// 5. Merge into AI_GENERATED_NOTES
console.log('--- Step 4: Synthesizing & Appending Extracted Modules ---');

let totalAddedChars = 0;
let totalFinalChars = 0;

AI_GENERATED_NOTES.forEach(ch => {
  const chId = ch.id;
  const items = groupedNotes[chId] || [];
  if (items.length === 0) {
    totalFinalChars += (ch.notes || '').length;
    return;
  }

  // Deduplicate items by topic title
  const seenTopics = new Set();
  const uniqueItems = [];
  items.forEach(it => {
    const t = (it.topic || it.title || '').trim().toLowerCase();
    if (!seenTopics.has(t)) {
      seenTopics.add(t);
      uniqueItems.push(it);
    }
  });

  // Build the extracted concept library section
  let libraryHtml = `\n\n<!-- EXTRACTED CONCEPT LIBRARY: ${ch.title} -->\n`;
  libraryHtml += `<div class="extracted-concept-library" style="margin-top: 48px; padding-top: 36px; border-top: 3px double var(--border);">\n`;
  libraryHtml += `  <div style="background: linear-gradient(135deg, rgba(56, 189, 248, 0.12), rgba(34, 197, 94, 0.08)); border: 1px solid var(--border); border-left: 5px solid var(--accent); padding: 20px 24px; border-radius: 10px; margin-bottom: 28px;">\n`;
  libraryHtml += `    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">\n`;
  libraryHtml += `      <div>\n`;
  libraryHtml += `        <h3 style="margin: 0 0 6px 0; color: var(--accent); font-size: 1.35rem; display: flex; align-items: center; gap: 10px;">\n`;
  libraryHtml += `          <i class="fa-solid fa-layer-group"></i> Comprehensive Extracted Concept Library\n`;
  libraryHtml += `        </h3>\n`;
  libraryHtml += `        <p style="margin: 0; color: var(--text-secondary); font-size: 0.95rem; line-height: 1.5;">\n`;
  libraryHtml += `          Specialized high-yield topic modules, comparative data matrices, and question archives extracted directly from defense syllabus references for <strong>${ch.title}</strong>.\n`;
  libraryHtml += `        </p>\n`;
  libraryHtml += `      </div>\n`;
  libraryHtml += `      <div style="background: var(--bg-tertiary); padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: 0.85rem; color: var(--accent); border: 1px solid var(--border);">\n`;
  libraryHtml += `        📚 ${uniqueItems.length} Extracted Sub-Modules\n`;
  libraryHtml += `      </div>\n`;
  libraryHtml += `    </div>\n`;
  libraryHtml += `  </div>\n\n`;

  // Append each sub-module
  uniqueItems.forEach((it, idx) => {
    const topicTitle = it.topic || it.title || `Concept Module ${idx + 1}`;
    let bodyText = it.text || it.content || '';
    
    // Convert markdown if not html
    if (!bodyText.trim().startsWith('<') && !/<(p|div|table|h[1-6]|ul|ol)/i.test(bodyText)) {
      bodyText = bodyText
        .replace(/^### (.*$)/gim, '<h5 style="color: var(--accent); margin: 16px 0 8px;">$1</h5>')
        .replace(/^## (.*$)/gim, '<h4 style="color: var(--accent); margin: 20px 0 10px;">$1</h4>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/^- (.*$)/gim, '<li style="margin-bottom: 6px;">$1</li>')
        .replace(/(<li.*<\/li>)/s, '<ul style="padding-left: 20px; color: var(--text-secondary);">$1</ul>');
    }

    libraryHtml += `  <div class="extracted-topic-module" style="background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 10px; padding: 22px 26px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">\n`;
    libraryHtml += `    <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border); padding-bottom: 12px; margin-bottom: 16px;">\n`;
    libraryHtml += `      <h4 style="margin: 0; color: var(--text-primary); font-size: 1.15rem; display: flex; align-items: center; gap: 8px;">\n`;
    libraryHtml += `        <span style="display: inline-flex; align-items: center; justify-content: center; width: 26px; height: 26px; border-radius: 50%; background: rgba(56, 189, 248, 0.15); color: var(--accent); font-size: 0.8rem; font-weight: bold;">${idx + 1}</span>\n`;
    libraryHtml += `        ${topicTitle}\n`;
    libraryHtml += `      </h4>\n`;
    if (it.chapter && it.chapter !== topicTitle) {
      libraryHtml += `      <span style="font-size: 0.8rem; color: var(--text-muted); background: var(--bg-tertiary); padding: 3px 10px; border-radius: 12px;">${it.chapter}</span>\n`;
    }
    libraryHtml += `    </div>\n`;
    libraryHtml += `    <div class="extracted-topic-body" style="color: var(--text-secondary); line-height: 1.7; font-size: 0.95rem;">\n`;
    libraryHtml += `      ${bodyText}\n`;
    libraryHtml += `    </div>\n`;

    // MCQ Attachment if present
    if (it.mcq) {
      const q = it.mcq.question || it.mcq.q || '';
      const opts = it.mcq.options || it.mcq.choices || [];
      const ans = it.mcq.answer || it.mcq.ans || it.mcq.correct || '';
      const exp = it.mcq.explanation || it.mcq.sol || '';
      if (q) {
        libraryHtml += `    <div class="msc-checkpoint" style="margin-top: 18px; background: rgba(34, 197, 94, 0.05); border: 1px solid rgba(34, 197, 94, 0.2); border-left: 4px solid var(--success); padding: 14px 18px; border-radius: 8px;">\n`;
        libraryHtml += `      <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 8px;"><i class="fa-solid fa-circle-question" style="color: var(--success);"></i> Practice Question</div>\n`;
        libraryHtml += `      <div style="color: var(--text-secondary); margin-bottom: 10px;">${q}</div>\n`;
        if (Array.isArray(opts) && opts.length > 0) {
          libraryHtml += `      <ul style="list-style-type: none; padding-left: 0; margin-bottom: 10px;">\n`;
          opts.forEach((opt, oIdx) => {
            const letter = String.fromCharCode(65 + oIdx);
            libraryHtml += `        <li style="margin-bottom: 4px; padding: 4px 8px; border-radius: 4px; background: var(--bg-tertiary); font-size: 0.9rem;"><strong>(${letter})</strong> ${opt}</li>\n`;
          });
          libraryHtml += `      </ul>\n`;
        }
        if (ans) {
          libraryHtml += `      <div style="font-size: 0.88rem; color: var(--success); font-weight: bold; margin-top: 6px;">✓ Correct Answer: ${ans}</div>\n`;
        }
        if (exp) {
          libraryHtml += `      <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;"><strong>Explanation:</strong> ${exp}</div>\n`;
        }
        libraryHtml += `    </div>\n`;
      }
    }

    libraryHtml += `  </div>\n\n`;
  });

  libraryHtml += `</div>\n`;

  ch.notes = (ch.notes || '') + libraryHtml;
  totalAddedChars += libraryHtml.length;
  totalFinalChars += ch.notes.length;
});

console.log(`\n=================================================`);
console.log(`Extraction Ingestion Complete!`);
console.log(`Characters Added: ${totalAddedChars.toLocaleString()} (~${Math.round(totalAddedChars/6).toLocaleString()} words)`);
console.log(`Total Masterclass Compendium Size: ${totalFinalChars.toLocaleString()} (~${Math.round(totalFinalChars/6).toLocaleString()} words)`);
console.log(`Average Size Per Chapter: ${Math.round(totalFinalChars / AI_GENERATED_NOTES.length).toLocaleString()} chars`);
console.log(`=================================================\n`);

// 6. Write updated ai_generated_notes.js and public copy
console.log('--- Step 5: Writing updated compendium files ---');
const fileContent = `// AI_GENERATED_NOTES — Master Synthesized Compendium for Jayastra
// Canonical Knowledge Base for Defence Examinations Revision
// Combined AI Masterclasses + Extracted Syllabus Concept Libraries

const AI_GENERATED_NOTES = ${JSON.stringify(AI_GENERATED_NOTES, null, 2)};

if (typeof window !== 'undefined') {
  window.AI_GENERATED_NOTES = AI_GENERATED_NOTES;
}
if (typeof module !== 'undefined') {
  module.exports = { AI_GENERATED_NOTES };
}
`;

fs.writeFileSync('ai_generated_notes.js', fileContent, 'utf8');
fs.writeFileSync('public/ai_generated_notes.js', fileContent, 'utf8');
console.log('Successfully written ai_generated_notes.js and public/ai_generated_notes.js!');
