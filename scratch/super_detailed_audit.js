const fs = require('fs');
const vm = require('vm');
const path = require('path');

console.log("=== RUNNING SUPER DETAILED AUDIT ON MOCK PAPERS ===");

// 1. Load data.js
const dataPath = 'data.js';
let s = fs.readFileSync(dataPath, 'utf8');
s = s.replace(/const CBT_EXAMS_DATABASE/g, 'var CBT_EXAMS_DATABASE');

const context = {};
vm.createContext(context);
try {
  vm.runInContext(s, context);
} catch (e) {
  console.error("Failed to parse data.js:", e.message);
  process.exit(1);
}

const exams = context.CBT_EXAMS_DATABASE;

// 2. Classification Heuristics
const MATH_KEYWORDS = [
  /profit/i, /loss\b/i, /cost price/i, /selling price/i,
  /compound interest/i, /simple interest/i, /rate of interest/i,
  /HCF/i, /LCM/i, /divisible/i, /remainder/i, /quotient/i,
  /triangle/i, /circle/i, /rectangle/i, /square/i,
  /area\b/i, /perimeter/i, /volume/i, /diameter/i, /radius/i,
  /equation/i, /quadratic/i, /polynomial/i,
  /sin\b/, /cos\b/, /tan\b/, /trigonometr/i,
  /speed.*time/i, /time.*distance/i, /km\/h/i, /m\/s/i,
  /pipe.*fill/i, /cistern/i,
  /work.*days/i, /days.*work/i,
  /probability/i, /permutation/i, /combination/i,
  /surface area/i, /cone/i, /cylinder/i, /sphere/i, /cuboid/i,
  /A\.P\./i, /G\.P\./i, /arithmetic progression/i,
  /find the value of/i, /solve/i,
  /how many.*litres/i, /how many.*metres/i,
  /fraction/i, /decimal/i,
  /percentage/i, /discount/i, /marked price/i,
];

const ENGLISH_KEYWORDS = [
  /synonym/i, /antonym/i, /idiom/i, /phrase/i,
  /grammar/i, /tense/i, /verb/i, /noun/i, /adjective/i, /adverb/i,
  /spelling/i, /comprehension/i,
  /fill in the blank/i, /correct sentence/i,
  /meaning of/i, /opposite of/i,
  /one word substitution/i,
  /active voice/i, /passive voice/i,
  /direct speech/i, /indirect speech/i,
  /correctly spelt/i, /misspelt/i,
  /underlined/i, /bold/i, /italicised/i,
  /passage/i,
];

const GK_KEYWORDS = [
  /who is/i, /who was/i, /who founded/i,
  /which country/i, /which state/i, /capital of/i,
  /president/i, /prime minister/i, /chief minister/i,
  /constitution/i, /article\s*\d/i, /amendment/i,
  /battle of/i, /treaty of/i,
  /river/i, /mountain/i, /plateau/i,
  /planet/i, /solar system/i,
  /scientist/i, /discovered/i, /invented/i,
  /award/i, /nobel/i,
  /ISRO/i, /NASA/i, /DRDO/i, /UNESCO/i,
  /olympic/i, /world cup/i,
  /vitamin/i, /disease/i,
  /war\b/i, /revolt/i, /movement/i,
  /mughal/i, /british/i, /dynasty/i, /empire/i, /kingdom/i,
];

function getMathScore(q) {
  let score = 0;
  for (const p of MATH_KEYWORDS) { if (p.test(q.question)) score++; }
  const numOpts = q.options.filter(o => /^[\s₹`Rs\.]*[\d\.\-\/\s\,\%\(\)]+$/.test(o.trim())).length;
  if (numOpts >= 3) score += 3;
  return score;
}

function getEnglishScore(q) {
  let score = 0;
  for (const p of ENGLISH_KEYWORDS) { if (p.test(q.question)) score++; }
  return score;
}

function getGKScore(q) {
  let score = 0;
  for (const p of GK_KEYWORDS) { if (p.test(q.question)) score++; }
  return score;
}

function getExamSubject(id) {
  if (id.includes('math')) return 'MATH';
  if (id.includes('english')) return 'ENGLISH';
  if (id.includes('gk')) return 'GK';
  if (id.includes('gat')) return 'NDA_GAT';
  if (id.includes('afcat')) return 'AFCAT';
  return 'UNKNOWN';
}

// 3. Auditing Variables
const report = {
  totalExams: exams.length,
  totalQuestions: 0,
  wrongSubject: [],
  truncatedStems: [],
  shortOptions: [],
  duplicateOptions: [],
  invalidAnswerIndex: [],
  junkTextOptions: [],
  strayNumbersStem: [],
  duplicatesWithinMock: [],
  crossMockDuplicates: {}
};

const seenQuestionsGlobal = new Map(); // question text -> first exam & index

exams.forEach(exam => {
  const subject = getExamSubject(exam.id);
  const seenInThisExam = new Set();
  
  exam.questions.forEach((q, idx) => {
    report.totalQuestions++;
    const qNum = idx + 1;
    const qLabel = `${exam.id} Q${qNum}`;
    const stem = q.question.trim();
    
    // Check 1: Wrong Subject routing
    const mathScore = getMathScore(q);
    const engScore = getEnglishScore(q);
    const gkScore = getGKScore(q);
    
    if (subject === 'GK' && mathScore >= 4) {
      report.wrongSubject.push({ qLabel, issue: `Math question in GK paper (mathScore=${mathScore})`, q: stem });
    }
    if (subject === 'ENGLISH' && (mathScore >= 3 || gkScore >= 3)) {
      report.wrongSubject.push({ qLabel, issue: `Math/GK in English paper (math=${mathScore}, gk=${gkScore})`, q: stem });
    }
    if (subject === 'MATH' && (engScore >= 2 || gkScore >= 3) && mathScore < 1) {
      report.wrongSubject.push({ qLabel, issue: `English/GK in Math paper (eng=${engScore}, gk=${gkScore})`, q: stem });
    }
    
    // Check 2: Truncated Stems
    if (stem.length < 25) {
      report.truncatedStems.push({ qLabel, len: stem.length, q: stem });
    }
    
    // Check 3: Stray question numbers in stems
    if (/^\d+[\.\s]/.test(stem) && stem.length < 50) {
      report.strayNumbersStem.push({ qLabel, q: stem });
    }
    
    // Check 4: Option Quality
    q.options.forEach((opt, oIdx) => {
      const oTrim = opt.trim();
      const char = String.fromCharCode(65 + oIdx);
      if (oTrim.length === 0) {
        report.shortOptions.push({ qLabel, option: char, issue: "Empty option text" });
      }
      
      // OCR Junk checks
      if (/\b(?:GENERAL\s+(?:SCIENCE|STUDIES|ENGLISH|KNOWLEDGE)|MATHEMATICS\s*>|PRACTICE\s+EXERCISE)/i.test(oTrim)) {
        report.junkTextOptions.push({ qLabel, option: char, text: oTrim });
      }
    });
    
    // Check 5: Duplicate Options in same question
    const optSet = new Set(q.options.map(o => o.trim().toLowerCase()));
    if (optSet.size < q.options.length) {
      report.duplicateOptions.push({ qLabel, uniqueCount: optSet.size, options: q.options });
    }
    
    // Check 6: Invalid Answer Index
    if (q.correct < 0 || q.correct >= q.options.length) {
      report.invalidAnswerIndex.push({ qLabel, index: q.correct, count: q.options.length });
    }
    
    // Check 7: Duplicate questions within same exam
    const normStem = stem.toLowerCase().replace(/[^a-z0-9]/g, '').substring(0, 80);
    if (seenInThisExam.has(normStem)) {
      report.duplicatesWithinMock.push({ qLabel, q: stem });
    }
    seenInThisExam.add(normStem);
    
    // Check 8: Cross-mock duplicates
    const examGroup = exam.id.replace(/-v\d+-\d+$/, '').replace(/-\d+$/, '');
    if (!report.crossMockDuplicates[examGroup]) {
      report.crossMockDuplicates[examGroup] = [];
    }
    
    const key = examGroup + '_' + normStem;
    if (seenQuestionsGlobal.has(key)) {
      report.crossMockDuplicates[examGroup].push({
        qLabel,
        duplicateOf: seenQuestionsGlobal.get(key),
        q: stem
      });
    } else {
      seenQuestionsGlobal.set(key, qLabel);
    }
  });
});

// 4. Generate Markdown Artifact
const artifactDir = 'C:\\Users\\Trayodh Khandalkar\\.gemini\\antigravity-ide\\brain\\ff407405-7e0a-49b6-b2e5-1c6b7d922169';
const reportPath = path.join(artifactDir, 'detailed_audit_report.md');

let md = `# Detailed Question Quality Audit Report\n\n`;
md += `This report lists all potential data quality issues across the 90 mock papers in \`data.js\` compiled on ${new Date().toISOString()}.\n\n`;

md += `## Summary Statistics\n`;
md += `- **Total Mock Papers**: ${report.totalExams}\n`;
md += `- **Total Questions Examined**: ${report.totalQuestions}\n`;
md += `- **Wrong Subject Placement**: ${report.wrongSubject.length}\n`;
md += `- **Truncated Stems (< 25 chars)**: ${report.truncatedStems.length}\n`;
md += `- **Stray Numbers in Stem**: ${report.strayNumbersStem.length}\n`;
md += `- **Empty Options**: ${report.shortOptions.length}\n`;
md += `- **Duplicate Options in Question**: ${report.duplicateOptions.length}\n`;
md += `- **Invalid Correct Answer Index**: ${report.invalidAnswerIndex.length}\n`;
md += `- **Junk Text in Options**: ${report.junkTextOptions.length}\n`;
md += `- **Duplicates Within Same Mock**: ${report.duplicatesWithinMock.length}\n\n`;

md += `---\n\n`;

if (report.wrongSubject.length > 0) {
  md += `## 🔴 Wrong Subject Placement (${report.wrongSubject.length})\n`;
  report.wrongSubject.forEach(i => {
    md += `- **[${i.qLabel}]**: ${i.issue}\n  - *Stem:* "${i.q}"\n`;
  });
  md += `\n`;
}

if (report.truncatedStems.length > 0) {
  md += `## 🟡 Truncated Stems (${report.truncatedStems.length})\n`;
  report.truncatedStems.forEach(i => {
    md += `- **[${i.qLabel}]**: Length = ${i.len}\n  - *Stem:* "${i.q}"\n`;
  });
  md += `\n`;
}

if (report.strayNumbersStem.length > 0) {
  md += `## ⚪ Stray Numbers in Stem (${report.strayNumbersStem.length})\n`;
  report.strayNumbersStem.forEach(i => {
    md += `- **[${i.qLabel}]**\n  - *Stem:* "${i.q}"\n`;
  });
  md += `\n`;
}

if (report.duplicateOptions.length > 0) {
  md += `## 🟣 Duplicate Options inside Question (${report.duplicateOptions.length})\n`;
  report.duplicateOptions.forEach(i => {
    md += `- **[${i.qLabel}]**: Unique options count = ${i.uniqueCount}\n  - *Options:* ${JSON.stringify(i.options)}\n`;
  });
  md += `\n`;
}

if (report.invalidAnswerIndex.length > 0) {
  md += `## ❌ Invalid Correct Answer Index (${report.invalidAnswerIndex.length})\n`;
  report.invalidAnswerIndex.forEach(i => {
    md += `- **[${i.qLabel}]**: Correct index = ${i.index} (options count = ${i.count})\n`;
  });
  md += `\n`;
}

if (report.junkTextOptions.length > 0) {
  md += `## 🟤 OCR Junk in Options (${report.junkTextOptions.length})\n`;
  report.junkTextOptions.forEach(i => {
    md += `- **[${i.qLabel}]**: Option ${i.option}\n  - *Text:* "${i.text}"\n`;
  });
  md += `\n`;
}

if (report.duplicatesWithinMock.length > 0) {
  md += `## ⚠️ Duplicate Questions within same Mock (${report.duplicatesWithinMock.length})\n`;
  report.duplicatesWithinMock.forEach(i => {
    md += `- **[${i.qLabel}]**\n  - *Stem:* "${i.q}"\n`;
  });
  md += `\n`;
}

// Group duplicates count
md += `## 📊 Cross-Mock Question Duplicates by Subject Group\n`;
Object.entries(report.crossMockDuplicates).forEach(([group, list]) => {
  md += `- **${group}**: ${list.length} duplicate pairs\n`;
});

fs.writeFileSync(reportPath, md, 'utf8');
console.log(`Saved detailed report to ${reportPath}`);
console.log("Detailed Audit Completed.");
