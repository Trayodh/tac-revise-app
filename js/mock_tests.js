// 10. CBT MOCK TEST ENGINE MODULE
// ==========================================
let activeExamFilter = "all";
let activeMockFolder = null;
let CBT_SESSION = null; 

function renderCbtMockHub() {
  const container = document.getElementById("exams-list-container");
  container.innerHTML = "";
  
  if (activeMockFolder === null) {
    // FOLDER VIEW: Group exams by Exam + Subject
    const foldersMap = {};
    
    CBT_EXAMS_DATABASE.forEach(exam => {
      if (activeExamFilter !== "all" && exam.exam !== activeExamFilter) return;
      
      const folderKey = `${exam.exam} - ${exam.subject}`;
      if (!foldersMap[folderKey]) {
        foldersMap[folderKey] = {
          exam: exam.exam,
          subject: exam.subject,
          count: 0
        };
      }
      foldersMap[folderKey].count++;
    });

    for (const [folderKey, data] of Object.entries(foldersMap)) {
      const card = document.createElement("div");
      card.className = "exam-card panel";
      card.style.cursor = "pointer";
      card.style.borderTop = "4px solid var(--accent)";
      card.onclick = () => {
        activeMockFolder = folderKey;
        renderCbtMockHub();
      };
      
      card.innerHTML = `
        <div class="exam-card-header" style="justify-content: center; text-align: center; display: flex; flex-direction: column; gap: 8px;">
          <span style="font-size: 2.5rem; display: block; margin-bottom: 8px;">📁</span>
          <div>
             <span class="exam-type-badge ${data.exam.toLowerCase()}">${data.exam}</span>
          </div>
          <h3 class="exam-card-title" style="margin-top:8px;">${data.subject} Mocks</h3>
        </div>
        <div class="exam-meta" style="justify-content: center; margin-top: 16px;">
          <div class="meta-item" style="background: rgba(255,255,255,0.05); padding: 8px 16px; border-radius: 8px; display: flex; flex-direction: column; align-items: center; gap: 4px;">
            <span style="font-size: 1.1rem; font-weight: bold; color: var(--info);">${data.count}</span>
            <span style="color: var(--text-secondary);">Mock Tests</span>
          </div>
        </div>
      `;
      // Hover effect via inline events for ease
      card.onmouseover = () => card.style.transform = "translateY(-4px)";
      card.onmouseout = () => card.style.transform = "none";
      card.style.transition = "transform 0.2s ease";
      
      container.appendChild(card);
    }
  } else {
    // MOCK LIST VIEW (Inside a Folder)
    // Add Back Navigation
    const backNav = document.createElement("div");
    backNav.style.cssText = "grid-column: 1 / -1; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); padding-bottom: 12px;";
    
    let subIcon = "📚";
    if (activeMockFolder.toLowerCase().includes("math")) subIcon = "📐";
    else if (activeMockFolder.toLowerCase().includes("english")) subIcon = "✍️";
    else subIcon = "🌍";
    
    backNav.innerHTML = `
      <div style="display: flex; align-items: center; gap: 12px;">
        <button class="btn-secondary" id="btn-back-folders" style="width: auto; padding: 6px 12px; background: transparent; border: 1px solid var(--border); border-radius: 6px; cursor: pointer;">
          <span style="font-size: 1.2rem;">←</span> Back
        </button>
        <h2 style="color: var(--accent); font-family: var(--font-logo); font-size: 1.1rem; margin: 0; letter-spacing: 0.5px; text-transform: uppercase;">${subIcon} ${activeMockFolder}</h2>
      </div>
    `;
    backNav.querySelector("#btn-back-folders").onclick = () => {
      activeMockFolder = null;
      renderCbtMockHub();
    };
    container.appendChild(backNav);

    // Render Mocks for this folder
    CBT_EXAMS_DATABASE.forEach(exam => {
      const folderKey = `${exam.exam} - ${exam.subject}`;
      if (folderKey !== activeMockFolder) return;
      
      const card = document.createElement("div");
      card.className = "exam-card panel";
      card.innerHTML = `
        <div class="exam-card-header">
          <div>
            <span class="exam-type-badge ${exam.exam.toLowerCase()}">${exam.exam}</span>
            <h3 class="exam-card-title" style="margin-top:8px;">${exam.title}</h3>
          </div>
        </div>
        
        <div class="exam-meta">
          <div class="meta-item">
            <span>Duration:</span>
            <span>${exam.duration} Mins</span>
          </div>
          <div class="meta-item">
            <span>Questions:</span>
            <span>${exam.questions.length} Qs</span>
          </div>
          <div class="meta-item">
            <span>Correct:</span>
            <span>+${exam.rules.correctMarks}</span>
          </div>
          <div class="meta-item">
            <span>Incorrect:</span>
            <span>${exam.rules.incorrectMarks}</span>
          </div>
        </div>
        
        <button class="btn-primary" onclick="launchCbtPlayer('${exam.id}')">Start CBT Test</button>
      `;
      container.appendChild(card);
    });
  }
}

document.querySelectorAll('[data-exam-filter]').forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll('[data-exam-filter]').forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeExamFilter = btn.getAttribute("data-exam-filter");
    activeMockFolder = null; // Reset folder view when changing master filter
    renderCbtMockHub();
  });
});

function launchCbtPlayer(examId) {
  const exam = CBT_EXAMS_DATABASE.find(e => e.id === examId);
  if (!exam) return;
  
  CBT_SESSION = {
    examData: exam,
    answers: Array(exam.questions.length).fill(null), 
    marked: Array(exam.questions.length).fill(false),  
    visited: Array(exam.questions.length).fill(false),  
    timeRemaining: exam.duration * 60,
    currentIdx: 0,
    timerId: null
  };
  
  CBT_SESSION.visited[0] = true; 
  document.getElementById("cbt-player-overlay").style.display = "flex";
  
  // Hide Ask Dronacharya Chatbot during test
  const launcher = document.getElementById("dronacharya-fab");
  if (launcher) launcher.style.display = "none";
  const panel = document.getElementById("dronacharya-panel");
  if (panel) panel.classList.remove("active");

  document.getElementById("cbt-active-title").innerText = exam.title;
  
  startCbtTimer();
  renderCbtPalette();
  renderCbtActiveQuestion();
}

function startCbtTimer() {
  if (CBT_SESSION.timerId) clearInterval(CBT_SESSION.timerId);
  const display = document.getElementById("cbt-active-timer");
  
  function updateTimerUI() {
    const mins = Math.floor(CBT_SESSION.timeRemaining / 60);
    const secs = CBT_SESSION.timeRemaining % 60;
    display.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    
    if (CBT_SESSION.timeRemaining <= 0) {
      clearInterval(CBT_SESSION.timerId);
      alert("Time expired! Your test is submitting automatically.");
      submitCbtExam();
    } else {
      CBT_SESSION.timeRemaining--;
    }
  }
  
  updateTimerUI();
  CBT_SESSION.timerId = setInterval(updateTimerUI, 1000);
}

function renderCbtPalette() {
  const container = document.getElementById("cbt-palette-grid-container");
  container.innerHTML = "";
  
  CBT_SESSION.examData.questions.forEach((_, idx) => {
    const btn = document.createElement("button");
    btn.className = "palette-btn";
    btn.innerText = idx + 1;
    
    const isAnswered = CBT_SESSION.answers[idx] !== null;
    const isMarked = CBT_SESSION.marked[idx];
    const isVisited = CBT_SESSION.visited[idx];
    
    if (isAnswered && isMarked) {
      btn.className += " marked-review";
    } else if (isAnswered) {
      btn.className += " answered";
    } else if (isMarked) {
      btn.className += " marked-review";
    } else if (isVisited) {
      btn.className += " not-answered";
    } else {
      btn.className += " not-visited";
    }
    
    if (idx === CBT_SESSION.currentIdx) {
      btn.className += " active";
    }
    
    btn.addEventListener("click", () => {
      CBT_SESSION.currentIdx = idx;
      CBT_SESSION.visited[idx] = true;
      renderCbtPalette();
      renderCbtActiveQuestion();
    });
    
    container.appendChild(btn);
  });
}

function renderCbtActiveQuestion() {
  const currentIdx = CBT_SESSION.currentIdx;
  const q = CBT_SESSION.examData.questions[currentIdx];
  const total = CBT_SESSION.examData.questions.length;
  
  document.getElementById("cbt-question-index-label").innerText = `Question ${currentIdx + 1} of ${total}`;
  document.getElementById("cbt-marking-scheme-label").innerText = `Correct: +${CBT_SESSION.examData.rules.correctMarks} |Incorrect: ${CBT_SESSION.examData.rules.incorrectMarks}`;
  document.getElementById("cbt-active-question-text").innerText = q.question;
  
  const optionsContainer = document.getElementById("cbt-options-container");
  optionsContainer.innerHTML = "";
  
  q.options.forEach((opt, optIdx) => {
    const optDiv = document.createElement("div");
    optDiv.className = `cbt-option ${CBT_SESSION.answers[currentIdx] === optIdx ? 'selected' : ''}`;
    optDiv.innerHTML = `
      <div class="option-badge">${String.fromCharCode(65 + optIdx)}</div>
      <div class="option-text">${opt}</div>
    `;
    
    optDiv.addEventListener("click", () => {
      if (CBT_SESSION.answers[currentIdx] === optIdx) {
        CBT_SESSION.answers[currentIdx] = null; 
      } else {
        CBT_SESSION.answers[currentIdx] = optIdx;
      }
      renderCbtActiveQuestion();
      renderCbtPalette();
    });
    
    optionsContainer.appendChild(optDiv);
  });
}

document.getElementById("cbt-btn-save-next").addEventListener("click", () => {
  const nextIdx = CBT_SESSION.currentIdx + 1;
  if (nextIdx < CBT_SESSION.examData.questions.length) {
    CBT_SESSION.currentIdx = nextIdx;
    CBT_SESSION.visited[nextIdx] = true;
    renderCbtPalette();
    renderCbtActiveQuestion();
  }
});

document.getElementById("cbt-btn-prev").addEventListener("click", () => {
  const prevIdx = CBT_SESSION.currentIdx - 1;
  if (prevIdx >= 0) {
    CBT_SESSION.currentIdx = prevIdx;
    CBT_SESSION.visited[prevIdx] = true;
    renderCbtPalette();
    renderCbtActiveQuestion();
  }
});

document.getElementById("cbt-btn-clear").addEventListener("click", () => {
  CBT_SESSION.answers[CBT_SESSION.currentIdx] = null;
  CBT_SESSION.marked[CBT_SESSION.currentIdx] = false;
  renderCbtActiveQuestion();
  renderCbtPalette();
});

document.getElementById("cbt-btn-mark-review").addEventListener("click", () => {
  CBT_SESSION.marked[CBT_SESSION.currentIdx] = true;
  const nextIdx = CBT_SESSION.currentIdx + 1;
  if (nextIdx < CBT_SESSION.examData.questions.length) {
    CBT_SESSION.currentIdx = nextIdx;
    CBT_SESSION.visited[nextIdx] = true;
  }
  renderCbtPalette();
  renderCbtActiveQuestion();
});

document.getElementById("cbt-btn-submit-exam").addEventListener("click", () => {
  const exam = CBT_SESSION.examData;
  let attemptedCount = 0;
  exam.questions.forEach((q, idx) => {
    if (CBT_SESSION.answers[idx] !== null) {
      attemptedCount++;
    }
  });

  const totalQuestions = exam.questions.length;
  const isCompleted = attemptedCount === totalQuestions;

  if (isCompleted) {
    const confirmSubmit = confirm("You have completed all questions. Are you sure you want to end the test and view the performance report?");
    if (confirmSubmit) {
      // Restore chatbot icon
      const launcher = document.getElementById("dronacharya-fab");
      if (launcher) launcher.style.display = "flex";
      submitCbtExam();
    }
  } else {
    const confirmExit = confirm(`You have only attempted ${attemptedCount} out of ${totalQuestions} questions. Ending the test now will abort your attempt and return you to the Dashboard. Proceed?`);
    if (confirmExit) {
      if (CBT_SESSION.timerId) clearInterval(CBT_SESSION.timerId);
      document.getElementById("cbt-player-overlay").style.display = "none";
      // Restore chatbot icon
      const launcher = document.getElementById("dronacharya-fab");
      if (launcher) launcher.style.display = "flex";
      switchScreen("dashboard");
    }
  }
});

function submitCbtExam() {
  if (CBT_SESSION.timerId) clearInterval(CBT_SESSION.timerId);
  const exam = CBT_SESSION.examData;
  let correctCount = 0;
  let incorrectCount = 0;
  let attemptedCount = 0;
  
  if (!STATE.weaknessStats) STATE.weaknessStats = {};
  if (!STATE.cbtMistakesDeck) STATE.cbtMistakesDeck = [];
  
  exam.questions.forEach((q, idx) => {
    const ans = CBT_SESSION.answers[idx];
    if (ans !== null) {
      attemptedCount++;
      
      // Track weakness heuristically
      const topicId = q.topicId || exam.id; // Fallback to exam.id
      if (!STATE.weaknessStats[topicId]) {
        STATE.weaknessStats[topicId] = { attempts: 0, incorrect: 0 };
      }
      STATE.weaknessStats[topicId].attempts++;

      if (ans === q.correct) {
        correctCount++;
      } else {
        incorrectCount++;
        STATE.weaknessStats[topicId].incorrect++;
        
        // Push to SRS Mistakes Vault
        const questionText = q.q;
        const correctAnswerText = q.options[q.correct];
        const flashcardAnswer = `Correct Answer: ${correctAnswerText}\n\nExplanation: ${q.explanation || 'No explanation provided.'}`;
        
        // Avoid exact duplicates
        const exists = STATE.cbtMistakesDeck.some(card => card.q === questionText);
        if (!exists) {
          STATE.cbtMistakesDeck.push({
            q: questionText,
            a: flashcardAnswer
          });
        }
      }
    }
  });
  
  // Sync deck reference
  FLASHCARD_DECKS['cbt_mistakes'] = STATE.cbtMistakesDeck;
  
  const totalQuestions = exam.questions.length;
  const gain = correctCount * exam.rules.correctMarks;
  const loss = incorrectCount * Math.abs(exam.rules.incorrectMarks);
  const netScore = parseFloat((gain - loss).toFixed(2));
  const maxPossible = totalQuestions * exam.rules.correctMarks;
  const accuracy = attemptedCount > 0 ? ((correctCount / attemptedCount) * 100).toFixed(1) : 0;
  
  // Calculate Topic Accuracy
  const topicStats = {};
  exam.questions.forEach(q => {
    const topic = q.topic || 'General';
    if (!topicStats[topic]) topicStats[topic] = { attempted: 0, correct: 0 };
    if (exam.userAnswers[q.id] !== undefined && exam.userAnswers[q.id] !== null) {
      topicStats[topic].attempted++;
      if (exam.userAnswers[q.id] === q.correct) {
        topicStats[topic].correct++;
      }
    }
  });
  
  const topicAccuracy = {};
  for (const [topic, stats] of Object.entries(topicStats)) {
    if (stats.attempted > 0) {
      topicAccuracy[topic] = parseFloat(((stats.correct / stats.attempted) * 100).toFixed(1));
    }
  }
  
  document.getElementById("cbt-player-overlay").style.display = "none";
  
  const qualified = netScore >= (maxPossible * 0.4);
  
  const scoreRecord = {
    examId: exam.id,
    examTitle: exam.title,
    examSubject: exam.subject,
    score: netScore,
    maxScore: maxPossible,
    accuracy: parseFloat(accuracy),
    isPass: qualified,
    topicAccuracy: topicAccuracy,
    date: new Date().toLocaleDateString()
  };
  
  STATE.cbtScores.push(scoreRecord);
  saveState(); 
  
  document.getElementById("report-exam-title").innerText = exam.title;
  document.getElementById("report-final-score").innerText = netScore + " / " + maxPossible;
  
  
  const verdict = document.getElementById("report-verdict");
  
  if (typeof playSound === 'function') playSound(qualified ? 'success' : 'error');
  
  if (qualified) {
    verdict.innerText = "QUALIFIED (Target Mock Cut-Off Surpassed)";
    verdict.style.color = "var(--accent)";
  } else {
    verdict.innerText = "UNQUALIFIED (Needs more revision & practice)";
    verdict.style.color = "var(--danger)";
  }
  
  document.getElementById("report-total-qs").innerText = totalQuestions;
  document.getElementById("report-attempted-qs").innerText = attemptedCount;
  document.getElementById("report-correct-qs").innerText = `${correctCount} (Gain +${gain.toFixed(2)})`;
  document.getElementById("report-incorrect-qs").innerText = `${incorrectCount} (Loss -${loss.toFixed(2)})`;
  document.getElementById("report-accuracy").innerText = accuracy + "%";
  
  // 1. Tactical Performance Heatmap Grid
  const heatmapGrid = document.getElementById("report-heatmap-grid");
  if (heatmapGrid) {
    heatmapGrid.innerHTML = "";
    exam.questions.forEach((q, idx) => {
      const userAns = CBT_SESSION.answers[idx];
      const isCorrect = userAns === q.correct;

      const square = document.createElement("div");
      square.style.cssText = `
        height: 28px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.72rem;
        font-weight: 700;
        color: white;
        cursor: pointer;
        transition: transform 0.2s ease;
        background-color: ${userAns === null ? '#4b5563' : (isCorrect ? '#22c55e' : '#ef4444')};
      `;
      square.innerText = idx + 1;
      square.title = `Question ${idx + 1}: ${userAns === null ? 'Unattempted' : (isCorrect ? 'Correct' : 'Incorrect')}`;

      square.addEventListener("click", () => {
        const targetEl = document.getElementById(`solution-question-${idx + 1}`);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          const originalBorder = targetEl.style.borderColor;
          targetEl.style.borderColor = 'var(--accent)';
          targetEl.style.boxShadow = '0 0 15px var(--accent)';
          setTimeout(() => {
            targetEl.style.borderColor = originalBorder;
            targetEl.style.boxShadow = 'none';
          }, 1500);
        }
      });

      square.addEventListener("mouseenter", () => {
        square.style.transform = "scale(1.15)";
      });
      square.addEventListener("mouseleave", () => {
        square.style.transform = "scale(1)";
      });

      heatmapGrid.appendChild(square);
    });
  }

  // 2. AI Error Reconciliation Analysis
  const wrongAnswersInfo = [];
  exam.questions.forEach((q, idx) => {
    const userAns = CBT_SESSION.answers[idx];
    if (userAns !== null && userAns !== q.correct) {
      wrongAnswersInfo.push({
        num: idx + 1,
        question: q.question,
        selected: q.options[userAns],
        correctAnswer: q.options[q.correct]
      });
    }
  });

  const aiBox = document.getElementById("report-ai-reconciliation");
  const aiText = document.getElementById("report-ai-analysis-text");
  const aiSpinner = document.getElementById("report-ai-spinner");

  if (aiBox && aiText) {
    aiBox.style.display = "block";
    if (wrongAnswersInfo.length === 0) {
      if (aiSpinner) aiSpinner.style.display = "none";
      aiText.innerHTML = "<strong>Congratulations Officer!</strong> You marked zero wrong answers. Complete tactical dominance achieved!";
    } else {
      if (aiSpinner) aiSpinner.style.display = "inline-block";
      aiText.innerText = "Analyzing incorrect answers and formulating concept corrections...";

      const prompt = `You are Dronacharya, the expert military tutor. A student just took the exam "${exam.title}" and got the following questions wrong:
${JSON.stringify(wrongAnswersInfo.slice(0, 15))}

For each wrong question, your reconciliation analysis MUST:
1. Mention the entire question text explicitly.
2. Clearly state the correct answer option text.
3. Identify the conceptual gap and explain the core correction.
4. Give a brief, practical memory tip or mnemonic to avoid repeating this error.

Format the output beautifully as structured HTML using subheadings, <strong> tags, and bulleted lists. Keep it completely emoji-free and highly authoritative.`;

      fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'gemini-2.5-flash',
          contents: [{ parts: [{ text: prompt }] }]
        })
      })
      .then(res => res.json())
      .then(data => {
        const reply = data.candidates[0].content.parts[0].text;
        if (aiSpinner) aiSpinner.style.display = "none";
        aiText.innerHTML = parseWikiLinks(reply);
      })
      .catch(err => {
        if (aiSpinner) aiSpinner.style.display = "none";
        aiText.innerHTML = `<span style="color:var(--danger)">Guru AI analysis uplink timed out. Please review the solutions walkthrough below.</span>`;
      });
    }
  }

  // 3. Solutions Walkthrough List
  const solutionsContainer = document.getElementById("report-solutions-list");
  if (solutionsContainer) {
    solutionsContainer.innerHTML = "";

    exam.questions.forEach((q, idx) => {
      const userAns = CBT_SESSION.answers[idx];
      const isCorrect = userAns === q.correct;

      const div = document.createElement("div");
      div.className = `solution-item ${userAns === null ? '' : (isCorrect ? 'correct' : 'incorrect')}`;
      div.id = `solution-question-${idx + 1}`;

      let userAnsText = userAns === null ? "UNATTEMPTED" : `${String.fromCharCode(65 + userAns)}. ${q.options[userAns]}`;
      let correctAnsText = `${String.fromCharCode(65 + q.correct)}. ${q.options[q.correct]}`;

      div.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
          <span class="solution-badge ${userAns === null ? '' : (isCorrect ? 'correct' : 'incorrect')}">
            ${userAns === null ? 'Unattempted' : (isCorrect ? 'Correct' : 'Incorrect')}
          </span>
          <span style="font-family:var(--font-mono); font-size:0.8rem; color:var(--text-muted); font-weight:600;">Question ${idx + 1}</span>
        </div>
        <p style="font-weight:600; margin:10px 0;">${q.question}</p>
        <div style="font-size:0.85rem; margin-bottom:8px;">
          <div>Your Answer: <strong style="${userAns === null ? '' : (isCorrect ? 'color:var(--accent);' : 'color:var(--danger);')}">${userAnsText}</strong></div>
          <div>Correct Answer: <strong style="color:var(--accent);">${correctAnsText}</strong></div>
        </div>
        <div class="solution-explanation">
          <strong>Solution walkthrough:</strong><br>
          ${q.explanation}
        </div>
      `;
      solutionsContainer.appendChild(div);
    });
  }

  // Refresh current affairs after every exam
  if (typeof refreshCurrentAffairs === 'function') {
    const isNdaOrCds = exam.id.startsWith("nda-") || exam.id.startsWith("cds-");
    refreshCurrentAffairs(isNdaOrCds);
  }

  document.getElementById("cbt-report-overlay").style.display = "block";
}

function closeCbtReport() {
  document.getElementById("cbt-report-overlay").style.display = "none";
  switchScreen("dashboard");
}

// ==========================================