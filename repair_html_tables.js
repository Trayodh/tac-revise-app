/**
 * repair_html_tables.js
 * Repairs truncated <table> / <tr> / < fragments inside extracted modules
 * (originating from truncated tails in ssbcrack_gs_notes / extra_subjects_notes)
 * so all 302 chapters have 100% balanced <table> tags.
 */
const fs = require('fs');
const vm = require('vm');

const sb = { window: {} };
vm.createContext(sb);
vm.runInContext(fs.readFileSync('ai_generated_notes.js', 'utf8'), sb);
const notes = sb.window.AI_GENERATED_NOTES;

let fixedChapters = 0;

for (const ch of notes) {
  let html = ch.notes || '';
  const ot = (html.match(/<table\b/gi) || []).length;
  const ct = (html.match(/<\/table>/gi) || []).length;
  if (ot === ct) continue;

  // Split by module cards and fix any module whose open <table > close </table>
  const parts = html.split('<div class="extracted-topic-module"');
  for (let i = 1; i < parts.length; i++) {
    let part = parts[i];
    const pot = (part.match(/<table\b/gi) || []).length;
    const pct = (part.match(/<\/table>/gi) || []).length;
    if (pot > pct) {
      // Find the module body closing marker: "  </div>\n</div>" before next comment or end
      const bodyEndRe = /(\s*<\/div>\s*<\/div>\s*(?:<!--|$))/;
      // Clean truncated trailing "<" or incomplete last <tr> without </tr> before </div>
      part = part.replace(/<tr[^>]*>(?:(?!<\/tr>)[\s\S])*?<\s*(?=\s*<\/div>)/i, '');
      part = part.replace(/<\s*(?=\s*<\/div>)/g, '');
      const missingTables = pot - pct;
      const closeInsertion = '</tbody></table>'.repeat(missingTables);
      if (bodyEndRe.test(part)) {
        part = part.replace(bodyEndRe, `\n${closeInsertion}$1`);
      } else {
        part = part.replace(/<\/div>\s*<\/div>\s*$/, `\n${closeInsertion}\n  </div>\n</div>\n`);
      }
      parts[i] = part;
    }
  }
  const updated = parts.join('<div class="extracted-topic-module"');
  if (updated !== html) {
    ch.notes = updated;
    fixedChapters++;
  }
}

function safeWrite(filepath, text, chunkSize = 2 * 1024 * 1024) {
  const fd = fs.openSync(filepath, 'w');
  for (let i = 0; i < text.length; i += chunkSize) {
    fs.writeSync(fd, text.slice(i, i + chunkSize), null, 'utf8');
  }
  fs.closeSync(fd);
}

const outAi = `// AI_GENERATED_NOTES — Master Synthesized Compendium for Jayastra\n// Canonical Knowledge Base for Defence Examinations Revision (302 Granular Chapters)\n\nconst AI_GENERATED_NOTES = ${JSON.stringify(notes, null, 2)};\n\nif (typeof window !== 'undefined') {\n  window.AI_GENERATED_NOTES = AI_GENERATED_NOTES;\n}\nif (typeof module !== 'undefined') {\n  module.exports = { AI_GENERATED_NOTES };\n}\n`;

safeWrite('ai_generated_notes.js', outAi);
safeWrite('public/ai_generated_notes.js', outAi);

let remainingImbalanced = 0;
for (const ch of notes) {
  const ot = (ch.notes.match(/<table\b/gi) || []).length;
  const ct = (ch.notes.match(/<\/table>/gi) || []).length;
  if (ot !== ct) {
    remainingImbalanced++;
    console.log('Still imbalanced:', ch.id, ot, 'vs', ct);
  }
}
console.log(`✅ Fixed ${fixedChapters} chapters. Remaining imbalanced <table> chapters: ${remainingImbalanced}`);
