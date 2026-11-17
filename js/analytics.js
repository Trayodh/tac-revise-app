// 15. PERFORMANCE ANALYTICS MODULE
// ==========================================
function renderAnalytics() {
  const scores = STATE.cbtScores || [];
  
  const totalTests = scores.length;
  document.getElementById("analytics-total-tests").innerText = totalTests;
  
  if (totalTests === 0) {
    document.getElementById("analytics-history-table").innerHTML = "";
    document.getElementById("analytics-empty-state").style.display = "block";
    document.getElementById("analytics-overall-accuracy").innerText = "0%";
    document.getElementById("analytics-strongest-subject").innerText = "-";
    document.getElementById("analytics-weakest-subject").innerText = "-";
    const el1 = document.getElementById("analytics-strongest-topic");
    const el2 = document.getElementById("analytics-weakest-topic");
    if(el1) el1.innerText = "-";
    if(el2) el2.innerText = "-";
    return;
  }
  
  document.getElementById("analytics-empty-state").style.display = "none";
  
  // Calculate Overall Accuracy
  let sumAcc = 0;
  let validAccCount = 0;
  scores.forEach(s => {
    if (s.accuracy !== undefined && !isNaN(s.accuracy)) {
      sumAcc += s.accuracy;
      validAccCount++;
    }
  });
  
  const avgAccuracy = validAccCount > 0 ? (sumAcc / validAccCount).toFixed(1) : 0;
  document.getElementById("analytics-overall-accuracy").innerText = `${avgAccuracy}%`;
  
  // Calculate Strongest and Weakest Subject
  const subjectMap = {};
  scores.forEach(s => {
    const sub = s.examSubject || "General";
    if (!subjectMap[sub]) subjectMap[sub] = { totalAcc: 0, count: 0 };
    if (s.accuracy !== undefined && !isNaN(s.accuracy)) {
      subjectMap[sub].totalAcc += s.accuracy;
      subjectMap[sub].count++;
    }
  });
  
  let strongest = { name: "-", acc: -1 };
  let weakest = { name: "-", acc: 101 };
  
  for (const [sub, data] of Object.entries(subjectMap)) {
    if (data.count > 0) {
      const acc = data.totalAcc / data.count;
      if (acc > strongest.acc) {
        strongest = { name: sub, acc: acc };
      }
      if (acc < weakest.acc) {
        weakest = { name: sub, acc: acc };
      }
    }
  }
  
  if (strongest.name !== "-") {
    document.getElementById("analytics-strongest-subject").innerText = `${strongest.name} (${strongest.acc.toFixed(1)}%)`;
  }
  if (weakest.name !== "-") {
    document.getElementById("analytics-weakest-subject").innerText = `${weakest.name} (${weakest.acc.toFixed(1)}%)`;
  }

  // Render Radar Chart
  const globalTopicStats = {};
  scores.forEach(s => {
    if (s.topicAccuracy) {
      for (const [topic, acc] of Object.entries(s.topicAccuracy)) {
        if (!globalTopicStats[topic]) globalTopicStats[topic] = { sum: 0, count: 0 };
        globalTopicStats[topic].sum += acc;
        globalTopicStats[topic].count++;
      }
    }
  });
  
  const topTopics = Object.entries(globalTopicStats)
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 6);
    
  let strongestTopic = { name: "-", acc: -1 };
  let weakestTopic = { name: "-", acc: 101 };
  
  for (const [top, data] of Object.entries(globalTopicStats)) {
    if (data.count >= 1) {
      const acc = data.sum / data.count;
      if (acc > strongestTopic.acc) {
        strongestTopic = { name: top, acc: acc };
      }
      if (acc < weakestTopic.acc) {
        weakestTopic = { name: top, acc: acc };
      }
    }
  }
  
  const elStrongTop = document.getElementById("analytics-strongest-topic");
  const elWeakTop = document.getElementById("analytics-weakest-topic");
  
  if (elStrongTop) {
    elStrongTop.innerText = strongestTopic.name !== "-" ? `${strongestTopic.name}
(${strongestTopic.acc.toFixed(1)}%)` : "-";
  }
  if (elWeakTop) {
    elWeakTop.innerText = weakestTopic.name !== "-" ? `${weakestTopic.name}
(${weakestTopic.acc.toFixed(1)}%)` : "-";
  }
    
  const canvas = document.getElementById('topicRadarChart');
  const emptyState = document.getElementById('radar-empty-state');
  
  if (canvas && emptyState) {
    if (topTopics.length >= 3) {
      emptyState.style.display = 'none';
      const labels = topTopics.map(t => {
        let name = t[0];
        if (name.length > 20) name = name.substring(0, 17) + '...';
        return name;
      });
      const data = topTopics.map(t => parseFloat((t[1].sum / t[1].count).toFixed(1)));
      
      if (window.radarChartInstance) window.radarChartInstance.destroy();
      const ctx = canvas.getContext('2d');
      
      window.radarChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Average Accuracy (%)',
            data: data,
            backgroundColor: 'rgba(16, 185, 129, 0.2)',
            borderColor: '#10B981',
            pointBackgroundColor: '#10B981',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#10B981',
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
              grid: { color: 'rgba(255, 255, 255, 0.1)' },
              pointLabels: { color: 'rgba(255, 255, 255, 0.7)', font: { size: 12, family: "'Inter', sans-serif" } },
              ticks: { display: false, min: 0, max: 100, stepSize: 20 }
            }
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(15, 23, 42, 0.9)',
              titleColor: '#fff',
              bodyColor: '#10B981',
              titleFont: { size: 14, family: "'Inter', sans-serif" },
              bodyFont: { size: 16, weight: 'bold' },
              padding: 12,
              displayColors: false,
              callbacks: {
                label: function(context) { return context.parsed.r + '% Accuracy'; }
              }
            }
          }
        }
      });
    } else {
      emptyState.style.display = 'flex';
    }
  }

  // Render Table (Most recent 15)
  const historyTable = document.getElementById("analytics-history-table");
  historyTable.innerHTML = "";
  
  const recentScores = [...scores].reverse().slice(0, 15);
  
  recentScores.forEach(s => {
    const tr = document.createElement("tr");
    tr.style.borderBottom = "1px solid var(--border)";
    tr.style.transition = "background-color 0.2s ease";
    
    tr.onmouseover = () => tr.style.backgroundColor = "rgba(255,255,255,0.02)";
    tr.onmouseout = () => tr.style.backgroundColor = "transparent";
    
    tr.innerHTML = `
      <td style="padding: 12px; font-size: 0.9rem; color: var(--text-secondary);">${s.date}</td>
      <td style="padding: 12px; font-weight: 600;">${s.examTitle}</td>
      <td style="padding: 12px;">
        <span class="exam-type-badge ${s.examId ? s.examId.split('-')[0].toLowerCase() : ''}" style="font-size: 0.7rem;">
          ${s.examSubject || 'General'}
        </span>
      </td>
      <td style="padding: 12px; font-weight: 700; font-size: 0.85rem; color: ${s.isPass ? '#10B981' : '#EF4444'};">
        ${s.isPass ? 'PASS' : 'FAIL'}
      </td>
      <td style="padding: 12px; font-family: var(--font-mono); font-weight: 600; color: ${s.score > 0 ? 'var(--accent)' : 'var(--danger)'};">
        ${s.score} / ${s.maxScore}
      </td>
      <td style="padding: 12px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <div style="flex-grow: 1; height: 6px; background: var(--bg-card); border-radius: 3px; overflow: hidden;">
            <div style="height: 100%; width: ${s.accuracy || 0}%; background: ${s.accuracy >= 50 ? '#10B981' : '#EF4444'};"></div>
          </div>
          <span style="font-size: 0.85rem; color: var(--text-secondary); width: 40px; text-align: right;">${s.accuracy !== undefined ? s.accuracy + '%' : 'N/A'}</span>
        </div>
      </td>
    `;
    historyTable.appendChild(tr);
  });
}

// Export Backup Hook
const exportBtn = document.getElementById("btn-export-analytics");
if (exportBtn) {
  exportBtn.addEventListener("click", () => {
    const scores = STATE.cbtScores || [];
    if (scores.length === 0) {
      alert("No test history to export!");
      return;
    }
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(scores, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "defence_revision_analytics_backup.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  });
}

// --- EXTRA QUESTION BANK LOGIC ---

function showQuestionBank() {
    // Hide all major sections
    document.getElementById('dashboard-section')?.classList.add('hidden');
    document.getElementById('mock-exam-section')?.classList.add('hidden');
    document.getElementById('cbt-exam-section')?.classList.add('hidden');
    document.getElementById('lecture-mode-section')?.classList.add('hidden');
    
    // Show bank section
    const bankSection = document.getElementById('question-bank-section');
    if (bankSection) {
        bankSection.classList.remove('hidden');
        renderQuestionBank('gs'); // Default load GS
    }
    
    closeSidebar();
}

let currentBankSubject = 'gs';
let currentBankPage = 0;
const BANK_PAGE_SIZE = 10;

function renderQuestionBank(subject) {
    if (typeof EXTRA_QUESTION_BANK === 'undefined') {
        console.warn("Extra question bank data is not loaded! (undefined)");
        return;
    }

    
    currentBankSubject = subject;
    currentBankPage = 0;
    
    // Update filters
    document.querySelectorAll('.bank-filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.toLowerCase().includes(subject)) {
            btn.classList.add('active');
        }
    });
    
    // Update counts
    document.getElementById('count-gs').innerText = EXTRA_QUESTION_BANK.gs.length;
    document.getElementById('count-english').innerText = EXTRA_QUESTION_BANK.english.length;
    document.getElementById('count-maths').innerText = EXTRA_QUESTION_BANK.maths.length;
    
    const container = document.getElementById('bank-container');
    container.innerHTML = ''; // Clear
    
    loadMoreBankQuestions();
}

function loadMoreBankQuestions() {
    const container = document.getElementById('bank-container');
    const pool = EXTRA_QUESTION_BANK[currentBankSubject] || [];
    
    const start = currentBankPage * BANK_PAGE_SIZE;
    const end = Math.min(start + BANK_PAGE_SIZE, pool.length);
    
    for (let i = start; i < end; i++) {
        const q = pool[i];
        if (!q) continue;
        
        const card = document.createElement('div');
        card.className = 'bank-card';
        
        // Options UI
        let optionsHtml = '<div class="bank-options">';
        (q.options || []).forEach((opt, idx) => {
            const isCorrect = idx === q.correct;
            optionsHtml += `<div class="bank-opt" data-correct="${isCorrect}" onclick="handleBankOptionClick(this)">${String.fromCharCode(65 + idx)}. ${opt}</div>`;
        });
        optionsHtml += '</div>';
        
        card.innerHTML = `
            <div class="bank-q-text">Q${i+1}. ${q.question}</div>
            ${optionsHtml}
            <div style="display: flex; gap: 10px; margin-top: auto;">
                <button class="bank-reveal-btn" style="flex: 1;" onclick="revealBankSolution(this)">Reveal Solution</button>
                <button class="bank-reveal-btn" style="flex: 1; background-color: var(--accent); color: white; border-color: var(--accent);" onclick="upArmourQuestion(this, ${i})">Up-Armour It 🛡️</button>
            </div>
            <div class="bank-solution" style="display: none;">
                <strong>Correct Answer:</strong> ${String.fromCharCode(65 + q.correct)}<br><br>
                ${q.explanation || 'No detailed explanation provided.'}
            </div>
        `;
        
        container.appendChild(card);
    }
    
    currentBankPage++;
    
    const loadBtn = document.getElementById('load-more-btn');
    if (end < pool.length) {
        loadBtn.style.display = 'inline-block';
    } else {
        loadBtn.style.display = 'none';
    }
}

function revealBankSolution(btn) {
    const card = btn.closest('.bank-card');
    const solution = card.querySelector('.bank-solution');
    if (solution.style.display === 'none' || solution.style.display === '') {
        solution.style.display = 'block';
        btn.innerText = 'Hide Solution';
    } else {
        solution.style.display = 'none';
        btn.innerText = 'Reveal Solution';
    }
}

function handleBankOptionClick(optElement) {
    const container = optElement.closest('.bank-options');
    if (container.classList.contains('answered')) return; // Already answered
    
    container.classList.add('answered'); // Prevent further clicks
    
    const isCorrect = optElement.getAttribute('data-correct') === 'true';
    
    if (isCorrect) {
        optElement.classList.add('correct');
    } else {
        optElement.classList.add('incorrect');
        // Find and highlight the correct option
        const options = container.querySelectorAll('.bank-opt');
        options.forEach(opt => {
            if (opt.getAttribute('data-correct') === 'true') {
                opt.classList.add('correct');
            }
        });
    }
    
    // Disable hover effects after answered
    const allOptions = container.querySelectorAll('.bank-opt');
    allOptions.forEach(opt => {
        opt.style.cursor = 'default';
    });
    
    // Automatically reveal solution
    const card = optElement.closest('.bank-card');
    const solution = card.querySelector('.bank-solution');
    const revealBtn = card.querySelector('.bank-reveal-btn');
    if (solution && solution.style.display === 'none') {
        solution.style.display = 'block';
        if (revealBtn) revealBtn.innerText = 'Hide Solution';
    }
    
    // Check if all questions on the page are answered
    setTimeout(() => {
        const bankContainer = document.getElementById('bank-container');
        const allQuestions = bankContainer.querySelectorAll('.bank-options');
        const answeredQuestions = bankContainer.querySelectorAll('.bank-options.answered');
        
        if (allQuestions.length > 0 && allQuestions.length === answeredQuestions.length) {
            // All questions answered! Clear and load next set
            bankContainer.innerHTML = '';
            loadMoreBankQuestions();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, 1500); // 1.5s delay to let user review their last answer
}

async function upArmourQuestion(btn, index) {

    
    const pool = EXTRA_QUESTION_BANK[currentBankSubject];
    const q = pool[index];
    if (!q) return;

    // Loading State
    const originalText = btn.innerText;
    btn.innerText = "Up-Armouring... ⚙️";
    btn.disabled = true;
    
    const prompt = `You are an expert, sadistic military exam setter. Your job is to take the following multiple-choice question and "Up-Armour" it—meaning you must rephrase the question to significantly increase its difficulty. Use complex vocabulary, add situational distractors, insert double negatives, or frame it as a multi-statement analysis if possible.
    CRITICAL RULES:
    1. The core factual answer MUST remain the exact same.
    2. You are ONLY rephrasing the question text itself. DO NOT output the options.
    3. Return ONLY the new, harder question text. No pleasantries, no markdown blocks.

    Original Question:
    ${q.question}
    `;

    try {
        const response = await fetch('/api/gemini', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'gemini-2.5-flash',
                contents: [{ parts: [{ text: prompt }] }]
            })
        });
        
        const data = await response.json();
        if (data.candidates && data.candidates[0].content.parts[0].text) {
            const harderQuestion = data.candidates[0].content.parts[0].text.trim();
            
            // Find the question text element and update it with a nice animation
            const card = btn.closest('.bank-card');
            const textElement = card.querySelector('.bank-q-text');
            
            textElement.style.transition = "opacity 0.3s";
            textElement.style.opacity = 0;
            
            setTimeout(() => {
                textElement.innerHTML = `<span style="color: var(--accent); font-weight: bold;">[UP-ARMOURED]</span> ${harderQuestion}`;
                textElement.style.opacity = 1;
            }, 300);
            
            btn.innerText = "Up-Armoured! 💥";
        } else {
            throw new Error("Failed to generate.");
        }
    } catch (e) {
        console.error(e);
        alert("Up-Armour failed. Check your API key or connection.");
        btn.innerText = originalText;
        btn.disabled = false;
    }
}
