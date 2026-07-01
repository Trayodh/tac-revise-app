import re

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Patch 1
p1 = r"""  const scoreRecord = \{
    examId: exam\.id,
    examTitle: exam\.title,
    examSubject: exam\.subject,
    score: netScore,
    maxScore: maxPossible,
    accuracy: parseFloat\(accuracy\),
    date: new Date\(\)\.toLocaleDateString\(\)
  \};([\s\S]*?)const qualified = netScore >= \(maxPossible \* 0\.4\);"""

r1 = r"""  const qualified = netScore >= (maxPossible * 0.4);
  
  const scoreRecord = {
    examId: exam.id,
    examTitle: exam.title,
    examSubject: exam.subject,
    score: netScore,
    maxScore: maxPossible,
    accuracy: parseFloat(accuracy),
    isPass: qualified,
    date: new Date().toLocaleDateString()
  };\1"""

content = re.sub(p1, r1, content)

# Patch 2
p2 = r"""<span class="exam-type-badge \$\{s\.examId \? s\.examId\.split\('-\'\)\[0\]\.toLowerCase\(\) : \'\'\}" style="font-size: 0\.7rem;">
          \$\{s\.examSubject \|\| \'General\'\}
        </span>
      </td>
      <td style="padding: 12px; font-family: var\(--font-mono\); font-weight: 600; color: \$\{s\.score > 0 \? \'var\(--accent\)\' : \'var\(--danger\)\'\};">"""

r2 = r"""<span class="exam-type-badge ${s.examId ? s.examId.split('-')[0].toLowerCase() : ''}" style="font-size: 0.7rem;">
          ${s.examSubject || 'General'}
        </span>
      </td>
      <td style="padding: 12px; font-weight: 700; font-size: 0.85rem; color: ${s.isPass ? '#10B981' : '#EF4444'};">
        ${s.isPass ? 'PASS' : 'FAIL'}
      </td>
      <td style="padding: 12px; font-family: var(--font-mono); font-weight: 600; color: ${s.score > 0 ? 'var(--accent)' : 'var(--danger)'};">"""

content = re.sub(p2, r2, content)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(content)

print('Done applying patches.')
