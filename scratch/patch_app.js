const fs = require('fs');
const file = 'app.js';
let content = fs.readFileSync(file, 'utf8');

// Patch 1: submitCbtExam()
const target1 = `  const scoreRecord = {
    examId: exam.id,
    examTitle: exam.title,
    examSubject: exam.subject,
    score: netScore,
    maxScore: maxPossible,
    accuracy: parseFloat(accuracy),
    date: new Date().toLocaleDateString()
  };
  
  STATE.cbtScores.push(scoreRecord);
  saveState(); 
  
  document.getElementById("report-exam-title").innerText = exam.title;
  document.getElementById("report-final-score").innerText = netScore + " / " + maxPossible;
  
  const qualified = netScore >= (maxPossible * 0.4);
  const verdict = document.getElementById("report-verdict");`;

const replacement1 = `  const qualified = netScore >= (maxPossible * 0.4);
  
  const scoreRecord = {
    examId: exam.id,
    examTitle: exam.title,
    examSubject: exam.subject,
    score: netScore,
    maxScore: maxPossible,
    accuracy: parseFloat(accuracy),
    isPass: qualified,
    date: new Date().toLocaleDateString()
  };
  
  STATE.cbtScores.push(scoreRecord);
  saveState(); 
  
  document.getElementById("report-exam-title").innerText = exam.title;
  document.getElementById("report-final-score").innerText = netScore + " / " + maxPossible;
  
  const verdict = document.getElementById("report-verdict");`;

if (content.includes(target1)) {
  content = content.replace(target1, replacement1);
  console.log('Successfully patched submitCbtExam() logic.');
} else {
  console.log('Failed to find target 1.');
}

// Patch 2: renderAnalytics() table
const target2 = `      <td style="padding: 12px;">
        <span class="exam-type-badge \${s.examId ? s.examId.split('-')[0].toLowerCase() : ''}" style="font-size: 0.7rem;">
          \${s.examSubject || 'General'}
        </span>
      </td>
      <td style="padding: 12px; font-family: var(--font-mono); font-weight: 600; color: \${s.score > 0 ? 'var(--accent)' : 'var(--danger)'};">
        \${s.score} / \${s.maxScore}
      </td>`;

const replacement2 = `      <td style="padding: 12px;">
        <span class="exam-type-badge \${s.examId ? s.examId.split('-')[0].toLowerCase() : ''}" style="font-size: 0.7rem;">
          \${s.examSubject || 'General'}
        </span>
      </td>
      <td style="padding: 12px; font-weight: 700; font-size: 0.85rem; color: \${s.isPass ? '#10B981' : '#EF4444'};">
        \${s.isPass ? 'PASS' : 'FAIL'}
      </td>
      <td style="padding: 12px; font-family: var(--font-mono); font-weight: 600; color: \${s.score > 0 ? 'var(--accent)' : 'var(--danger)'};">
        \${s.score} / \${s.maxScore}
      </td>`;

if (content.includes(target2)) {
  content = content.replace(target2, replacement2);
  console.log('Successfully patched renderAnalytics() table.');
} else {
  console.log('Failed to find target 2.');
}

fs.writeFileSync(file, content);
console.log('Done.');
