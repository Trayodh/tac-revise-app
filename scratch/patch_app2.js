const fs = require('fs');
const file = 'app.js';
let content = fs.readFileSync(file, 'utf8');

// Patch 1: submitCbtExam()
// We want to move 'const qualified = netScore >= (maxPossible * 0.4);' up and add 'isPass: qualified,' to scoreRecord.
content = content.replace(/const scoreRecord = \{\s*examId: exam\.id,\s*examTitle: exam\.title,\s*examSubject: exam\.subject,\s*score: netScore,\s*maxScore: maxPossible,\s*accuracy: parseFloat\(accuracy\),\s*date: new Date\(\)\.toLocaleDateString\(\)\s*\};([\s\S]*?)const qualified = netScore >= \(maxPossible \* 0\.4\);/m, 
\`const qualified = netScore >= (maxPossible * 0.4);
  
  const scoreRecord = {
    examId: exam.id,
    examTitle: exam.title,
    examSubject: exam.subject,
    score: netScore,
    maxScore: maxPossible,
    accuracy: parseFloat(accuracy),
    isPass: qualified,
    date: new Date().toLocaleDateString()
  };$1\`);

// Patch 2: renderAnalytics() table
content = content.replace(/<span class="exam-type-badge \$\{s\.examId \? s\.examId\.split\('-\'\)\[0\]\.toLowerCase\(\) : \'\'\}" style="font-size: 0\.7rem;">\s*\$\{s\.examSubject \|\| \'General\'\}\s*<\/span>\s*<\/td>\s*<td style="padding: 12px; font-family: var\(--font-mono\); font-weight: 600; color: \$\{s\.score > 0 \? \'var\(--accent\)\' : \'var\(--danger\)\'\};">/m, 
\`<span class="exam-type-badge \${s.examId ? s.examId.split('-')[0].toLowerCase() : ''}" style="font-size: 0.7rem;">
          \${s.examSubject || 'General'}
        </span>
      </td>
      <td style="padding: 12px; font-weight: 700; font-size: 0.85rem; color: \${s.isPass ? '#10B981' : '#EF4444'};">
        \${s.isPass ? 'PASS' : 'FAIL'}
      </td>
      <td style="padding: 12px; font-family: var(--font-mono); font-weight: 600; color: \${s.score > 0 ? 'var(--accent)' : 'var(--danger)'};">\`);

fs.writeFileSync(file, content);
console.log('RegEx patch applied.');
