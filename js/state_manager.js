// 6. GLOBAL STATE MANAGEMENT & LOCALSTORAGE
// ==========================================
let STATE = {
  streak: 0,
  lastActiveDate: null,
  syllabusProgress: {},  
  readFormulasCount: 0,
  readFormulasList: [], 
  cbtScores: [],        
  currentScreen: "dashboard",
  cbtMistakesDeck: [],
  weaknessStats: {}
};

async function syncFromSupabase() {
  if (!window.supabaseClient) {
    console.log("Supabase client not initialized. Using offline mode.");
    return;
  }
  try {
    const { data: { session } } = await window.supabaseClient.auth.getSession();
    if (!session) return;
    
    console.log("Attempting to sync state from Supabase cloud...");
    const { data, error } = await window.supabaseClient
      .from('user_data')
      .select('state')
      .eq('user_id', session.user.id)
      .maybeSingle();
      
    if (error) {
      console.error("Supabase load error:", error.message);
      return;
    }
    
    if (data && data.state) {
      const cloudState = data.state;
      const localUpdatedAt = STATE.updatedAt ? new Date(STATE.updatedAt).getTime() : 0;
      const cloudUpdatedAt = cloudState.updatedAt ? new Date(cloudState.updatedAt).getTime() : 0;
      
      if (cloudUpdatedAt >= localUpdatedAt) {
        console.log("Found newer or equal cloud state. Merging state...");
        const localScreen = STATE.currentScreen;
        STATE = { ...STATE, ...cloudState };
        STATE.currentScreen = localScreen; // Preserve active screen state
        localStorage.setItem("tac_revise_state_v1", JSON.stringify(STATE));
        if (typeof updateDashboardMetrics === 'function') updateDashboardMetrics();
        console.log("Cloud sync complete!");
      } else {
        console.log("Local state is newer than cloud. Syncing local state to cloud...");
        await syncToSupabase();
      }
    } else {
      console.log("No cloud state found. Initializing cloud database with current local state...");
      await syncToSupabase();
    }
  } catch (err) {
    console.error("Failed to sync from Supabase:", err);
  }
}

async function syncToSupabase() {
  if (!window.supabaseClient) {
    return;
  }
  try {
    const { data: { session } } = await window.supabaseClient.auth.getSession();
    if (!session) return;
    
    const { error } = await window.supabaseClient
      .from('user_data')
      .upsert({ 
        user_id: session.user.id, 
        state: STATE, 
        updated_at: new Date().toISOString() 
      }, { onConflict: 'user_id' });
      
    if (error) {
      console.error("Supabase upsert error:", error.message);
    } else {
      console.log("Cloud state auto-saved to Supabase.");
    }
  } catch (err) {
    console.error("Failed to auto-save to Supabase:", err);
  }
}

function initAppState() {
  const localData = localStorage.getItem("tac_revise_state_v1");
  if (localData) {
    try {
      let parsed = JSON.parse(localData); if (parsed) { STATE = { ...STATE, ...parsed }; }
    } catch (e) {
      console.error("Error loading localStorage state:", e);
    }
  }
  
  // Initialize dynamic FLASHCARD_DECKS
  if (!STATE.cbtMistakesDeck) STATE.cbtMistakesDeck = [];
  FLASHCARD_DECKS['cbt_mistakes'] = STATE.cbtMistakesDeck;
  
  checkStreak();
  if (!STATE.updatedAt) {
    STATE.updatedAt = new Date().toISOString();
  }
  localStorage.setItem("tac_revise_state_v1", JSON.stringify(STATE));
  updateDashboardMetrics();
  
  checkCurrentAffairsExpiry();
  
  // Trigger async cloud database sync
  syncFromSupabase();
  // syncDatabaseFromSupabase();
}

function saveState() {
  STATE.updatedAt = new Date().toISOString();
  localStorage.setItem("tac_revise_state_v1", JSON.stringify(STATE));
  updateDashboardMetrics();
  
  // Trigger async cloud database save
  syncToSupabase();
}

function checkStreak() {
  const todayStr = new Date().toDateString();
  
  if (!STATE.lastActiveDate) {
    STATE.streak = 1;
    STATE.lastActiveDate = todayStr;
  } else {
    const lastDate = new Date(STATE.lastActiveDate);
    const todayDate = new Date(todayStr);
    
    const diffTime = Math.abs(todayDate - lastDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      STATE.streak += 1;
      STATE.lastActiveDate = todayStr;
    } else if (diffDays > 1) {
      STATE.streak = 1;
      STATE.lastActiveDate = todayStr;
    }
  }
}

function checkCurrentAffairsExpiry() {
  const currentYear = new Date().getFullYear();
  const lastCheckedYear = localStorage.getItem("tac_ca_year_check");
  
  if (lastCheckedYear && parseInt(lastCheckedYear) < currentYear) {
    console.log("New calendar year detected. Wiping local Current Affairs metrics.");
    localStorage.setItem("tac_ca_year_check", currentYear.toString());
  } else if (!lastCheckedYear) {
    localStorage.setItem("tac_ca_year_check", currentYear.toString());
  }
}

function updateDashboardMetrics() {
  document.getElementById("stat-streak").innerText = STATE.streak + " Days";
  
  const totalTopics = SYLLABUS_DATABASE.reduce((sum, exam) => sum + exam.topics.length, 0);
  let completedTopics = 0;
  for (const topicId in STATE.syllabusProgress) {
    if (STATE.syllabusProgress[topicId] === 'completed') {
      completedTopics++;
    }
  }
  const syllabusPct = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
  document.getElementById("stat-syllabus").innerText = syllabusPct + "%";
  
  document.getElementById("stat-formulas").innerText = STATE.readFormulasCount;
  
  if (STATE.cbtScores.length > 0) {
    const totalPct = STATE.cbtScores.reduce((sum, record) => sum + (record.score / record.maxScore), 0);
    const avgPct = Math.round((totalPct / STATE.cbtScores.length) * 100);
    document.getElementById("stat-cbt-avg").innerText = avgPct + "%";
  } else {
    document.getElementById("stat-cbt-avg").innerText = "0%";
  }
  
  // Branch-aware rank progression
  const RANK_LADDERS = {
    army:     ['Cadet', 'Lieutenant', 'Captain', 'Major', 'Lieutenant Colonel', 'Colonel', 'Brigadier', 'General'],
    navy:     ['Cadet', 'Sub Lieutenant', 'Lieutenant', 'Lieutenant Commander', 'Commander', 'Captain', 'Commodore', 'Admiral'],
    airforce: ['Cadet', 'Flying Officer', 'Flight Lieutenant', 'Squadron Leader', 'Wing Commander', 'Group Captain', 'Air Commodore', 'Air Marshal'],
  };
  // Thresholds: [minCompletedTopics OR minCBTs] for each step up
  const RANK_THRESHOLDS = [0, 1, 5, 10, 20, 35, 55, 80];

  const branch = (STATE.activeProfile && STATE.activeProfile.branch) || 'army';
  const ladder = RANK_LADDERS[branch] || RANK_LADDERS.army;

  let rankIndex = 0;
  for (let i = RANK_THRESHOLDS.length - 1; i >= 0; i--) {
    if (completedTopics >= RANK_THRESHOLDS[i] || STATE.cbtScores.length >= RANK_THRESHOLDS[i]) {
      rankIndex = i;
      break;
    }
  }
  const rank = ladder[Math.min(rankIndex, ladder.length - 1)];

  const rankEl = document.getElementById("profile-rank") || document.getElementById("user-rank");
  if (rankEl) rankEl.innerText = rank;
  
  renderDashboardRecentCBT();
  renderDashboardMedals();
  if (typeof renderWeeklyPlanner === 'function') renderWeeklyPlanner();
  renderSyllabusMasteryHeatmap();
  renderPerformanceChart();
  
  // Update SRS Mistake queue count
  const srsCountEl = document.getElementById("srs-due-count");
  if (srsCountEl) {
    srsCountEl.innerText = STATE.cbtMistakesDeck ? STATE.cbtMistakesDeck.length : 0;
  }
}

// Phase 6 UI Analytics & Settings Logic
let performanceChartInstance = null;

function renderPerformanceChart() {
  const canvas = document.getElementById("performanceChart");
  const emptyMsg = document.getElementById("performanceChart-empty");
  if (!canvas) return;

  if (STATE.cbtScores.length === 0) {
    canvas.style.display = "none";
    if (emptyMsg) emptyMsg.style.display = "block";
    return;
  }

  canvas.style.display = "block";
  if (emptyMsg) emptyMsg.style.display = "none";

  const recent = STATE.cbtScores.slice(-10); // Show last 10 scores
  const labels = recent.map((s, i) => `Test ${i + 1}`);
  const dataPoints = recent.map(s => Math.round((s.score / s.maxScore) * 100));

  if (performanceChartInstance) {
    performanceChartInstance.destroy();
  }

  const ctx = canvas.getContext('2d');
  
  // Create gradient
  const gradient = ctx.createLinearGradient(0, 0, 0, 200);
  gradient.addColorStop(0, 'rgba(132, 204, 22, 0.4)'); // accent color
  gradient.addColorStop(1, 'rgba(132, 204, 22, 0.0)');

  performanceChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Accuracy %',
        data: dataPoints,
        borderColor: '#84cc16',
        backgroundColor: gradient,
        borderWidth: 2,
        pointBackgroundColor: '#fff',
        pointBorderColor: '#84cc16',
        pointRadius: 4,
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          grid: { color: 'rgba(255,255,255,0.05)' },
          ticks: { color: 'rgba(255,255,255,0.5)' }
        },
        x: {
          grid: { display: false },
          ticks: { color: 'rgba(255,255,255,0.5)' }
        }
      }
    }
  });
}

// Tactical Web Audio API
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
let soundEnabled = true;

window.playSound = function(type) {
  if (!soundEnabled) return;
  if (audioCtx.state === 'suspended') audioCtx.resume();
  
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  
  const now = audioCtx.currentTime;
  
  if (type === 'click') {
    // Low tactile click
    osc.type = 'sine';
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.exponentialRampToValueAtTime(50, now + 0.05);
    gain.gain.setValueAtTime(0.5, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
    osc.start(now);
    osc.stop(now + 0.05);
  } else if (type === 'success') {
    // Mission complete chime
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(440, now); // A4
    osc.frequency.setValueAtTime(554.37, now + 0.1); // C#5
    osc.frequency.setValueAtTime(659.25, now + 0.2); // E5
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.3, now + 0.05);
    gain.gain.setValueAtTime(0.3, now + 0.2);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
    osc.start(now);
    osc.stop(now + 0.6);
  } else if (type === 'error') {
    // Dull error thud
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(50, now + 0.2);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
    osc.start(now);
    osc.stop(now + 0.2);
  }
};

window.toggleAudioSetting = function(checked) {
  soundEnabled = checked;
  if(checked) playSound('click');
};

window.confirmResetProgress = function() {
  playSound('error');
  if (confirm("DANGER: Are you sure you want to wipe all tactical data? This cannot be undone.")) {
    localStorage.removeItem("tac_revise_state_v1");
    localStorage.removeItem("tac-leitner-boxes");
    alert("Data wiped. Reloading command centre.");
    window.location.reload();
  }
};

// Hook clicks to document
document.addEventListener('click', (e) => {
  if (e.target.closest('button') || e.target.closest('a')) {
    playSound('click');
  }
});

function renderSyllabusMasteryHeatmap() {
  const container = document.getElementById("dashboard-mastery-heatmap");
  if (!container) return;
  
  if (!STATE.weaknessStats || Object.keys(STATE.weaknessStats).length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; padding: 12px; background: rgba(255,255,255,0.05); color: var(--text-secondary); text-align: center; border-radius: 6px; font-size: 0.85rem;">Take CBT Mock tests to populate your mastery heatmap.</div>`;
    return;
  }

  let html = '';
  // Convert stats to array and sort by worst accuracy to highlight weaknesses first
  const statsArr = Object.keys(STATE.weaknessStats).map(topicId => {
    const data = STATE.weaknessStats[topicId];
    const correct = data.attempts - data.incorrect;
    const accuracy = data.attempts > 0 ? Math.round((correct / data.attempts) * 100) : 0;
    return { topicId, accuracy, attempts: data.attempts };
  }).sort((a, b) => a.accuracy - b.accuracy).slice(0, 24); // Show top 24 active topics

  statsArr.forEach(item => {
    // Determine color tier
    let colorClass = 'heatmap-tile-green';
    if (item.accuracy < 50) colorClass = 'heatmap-tile-red';
    else if (item.accuracy < 75) colorClass = 'heatmap-tile-amber';
    
    // Find friendly name
    let topicName = item.topicId.replace(/-/g, ' ');
    if (topicName.length > 15) topicName = topicName.substring(0, 13) + '..';

    html += `
      <div class="heatmap-tile ${colorClass}" title="${item.topicId}: ${item.accuracy}% Accuracy (${item.attempts} attempts)">
        <div class="heatmap-topic">${topicName}</div>
        <div class="heatmap-accuracy">${item.accuracy}%</div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function renderDashboardRecentCBT() {
  const container = document.getElementById("dashboard-recent-cbt");
  if (STATE.cbtScores.length === 0) {
    container.innerHTML = `<p style="color:var(--text-muted);">No tests taken yet. Launch CBT Mock Test Hub to start your revision.</p>`;
    return;
  }
  
  let html = `<ul style="list-style:none; display:flex; flex-direction:column; gap:10px;">`;
  const recent = STATE.cbtScores.slice(-3).reverse();
  recent.forEach(r => {
    const pct = Math.round((r.score / r.maxScore) * 100);
    html += `
      <li style="display:flex; justify-content:space-between; align-items:center; background-color:rgba(255,255,255,0.02); padding:8px 12px; border-radius:6px; border:1px solid var(--border);">
        <div>
          <strong style="font-size:0.85rem;">${r.examTitle}</strong>
          <div style="font-size:0.75rem; color:var(--text-muted);">${r.date}</div>
        </div>
        <div style="font-family:var(--font-mono); font-weight:bold; color:${pct >= 50 ? 'var(--accent)' : 'var(--danger)'}">
          ${r.score}/${r.maxScore} (${pct}%)
        </div>
      </li>
    `;
  });
  html += `</ul>`;
  container.innerHTML = html;
}

function renderDashboardMedals() {
  const container = document.getElementById("dashboard-medals-grid");
  if (!container) return;
  
  const ACHIEVEMENTS = [
    { id: "streak-3", name: "3-Day Streak", desc: "Maintain a study streak of 3 days", icon: "🔥", check: (state) => state.streak >= 3 },
    { id: "streak-7", name: "Weekly Warrior", desc: "Maintain a study streak of 7 days", icon: "👑", check: (state) => state.streak >= 7 },
    { id: "cbt-first", name: "First Blood", desc: "Complete 1 CBT mock test", icon: "🎯", check: (state) => state.cbtScores && state.cbtScores.length >= 1 },
    { id: "cbt-expert", name: "Marksman", desc: "Average CBT score of 80%+", icon: "🎖️", check: (state) => {
        if (!state.cbtScores || state.cbtScores.length === 0) return false;
        const totalPct = state.cbtScores.reduce((sum, record) => sum + (record.score / record.maxScore), 0);
        return (totalPct / state.cbtScores.length) >= 0.8;
    }},
    { id: "syl-start", name: "Bootcamp", desc: "Complete at least 1 syllabus topic", icon: "📖", check: (state) => {
        let completed = 0;
        for (const k in state.syllabusProgress) {
          if (state.syllabusProgress[k] === 'completed') completed++;
        }
        return completed >= 1;
    }},
    { id: "syl-half", name: "Squad Leader", desc: "Complete at least 5 syllabus topics", icon: "⚔️", check: (state) => {
        let completed = 0;
        for (const k in state.syllabusProgress) {
          if (state.syllabusProgress[k] === 'completed') completed++;
        }
        return completed >= 5;
    }}
  ];
  
  container.innerHTML = ACHIEVEMENTS.map(ach => {
    const unlocked = ach.check(STATE);
    return `
      <div class="medal-badge ${unlocked ? 'unlocked' : ''}">
        <div class="medal-icon">${ach.icon}</div>
        <div class="medal-name">${ach.name}</div>
        <div class="medal-desc">${ach.desc} (${unlocked ? 'Unlocked' : 'Locked'})</div>
      </div>
    `;
  }).join("");
}

// === Supabase Database Sync ===
async function syncDatabaseFromSupabase() {
  if (typeof supabaseClientInstance === 'undefined' || !supabaseClientInstance) {
    console.log("Supabase client not initialized. Database syncing disabled.");
    return;
  }
  
  try {
    console.log("Syncing exams, questions, notes, and current affairs from Supabase...");
    
    // 1. Fetch current affairs
    const { data: ca, error: caErr } = await supabaseClientInstance
      .from('current_affairs')
      .select('*');
      
    if (caErr) throw caErr;
    
    if (ca && ca.length > 0) {
      const newCaDb = {};
      ca.forEach(item => {
        if (!newCaDb[item.month]) {
          newCaDb[item.month] = [];
        }
        newCaDb[item.month].push({
          id: item.id,
          topic: item.topic,
          text: item.text,
          details: item.details,
          mcq: item.mcq
        });
      });
      
      // Update in-memory CURRENT_AFFAIRS_DB properties if it is const, or reassign if let
      if (typeof CURRENT_AFFAIRS_DB !== 'undefined') {
        Object.keys(CURRENT_AFFAIRS_DB).forEach(k => delete CURRENT_AFFAIRS_DB[k]);
        Object.assign(CURRENT_AFFAIRS_DB, newCaDb);
      }
      console.log("Sync: loaded current affairs from Supabase.");
    }

    // 2. Fetch exams and questions
    const { data: exams, error: examsErr } = await supabaseClientInstance
      .from('cbt_exams')
      .select('*');
      
    let questions = [];
    let page = 0;
    const pageSize = 1000;
    let hasMore = true;
    
    while (hasMore) {
      const { data: pageData, error: qErr } = await supabaseClientInstance
        .from('cbt_questions')
        .select('*')
        .range(page * pageSize, (page + 1) * pageSize - 1);
        
      if (qErr) throw qErr;
      
      if (pageData && pageData.length > 0) {
        questions = questions.concat(pageData);
        if (pageData.length < pageSize) {
          hasMore = false;
        } else {
          page++;
        }
      } else {
        hasMore = false;
      }
    }
      
    if (examsErr) throw examsErr;
    
    if (exams && questions.length > 0 && typeof CBT_EXAMS_DATABASE !== 'undefined') {
      const newCbtDb = exams.map(exam => {
        return {
          id: exam.id,
          title: exam.title,
          subject: exam.subject,
          exam: exam.exam,
          duration: exam.duration,
          questions: questions
            .filter(q => q.exam_id === exam.id)
            .map(q => ({
              id: q.id,
              question: q.question_text,
              options: q.options,
              correct: q.correct_option,
              explanation: q.explanation
            }))
        };
      });
      
      CBT_EXAMS_DATABASE.length = 0;
      newCbtDb.forEach(e => CBT_EXAMS_DATABASE.push(e));
      console.log("Sync: loaded mock exams and questions from Supabase.");
    }

    // 3. Fetch notes
    const { data: dbNotes, error: notesErr } = await supabaseClientInstance
      .from('notes')
      .select('*');
      
    if (notesErr) throw notesErr;
    
    if (dbNotes && dbNotes.length > 0 && typeof NOTES_DATABASE !== 'undefined') {
      const newNotesDb = {};
      const newExpandedNotes = {};
      
      dbNotes.forEach(row => {
        if (!newNotesDb[row.subject_id]) {
          newNotesDb[row.subject_id] = {
            title: row.subject_title,
            chapters: []
          };
        }
        
        const subject = newNotesDb[row.subject_id];
        let chapter = subject.chapters.find(c => c.id === row.chapter_id);
        if (!chapter) {
          chapter = {
            id: row.chapter_id,
            title: row.chapter_title,
            topics: []
          };
          subject.chapters.push(chapter);
        }
        
        chapter.topics.push({
          id: row.id,
          title: row.topic_title,
          notes: row.notes_content ? row.notes_content.slice(0, 100) + '...' : '',
          formulas: row.formulas || [],
          mindmap: row.mindmap || ''
        });
        
        newExpandedNotes[row.id] = row.notes_content || '';
      });
      
      Object.keys(NOTES_DATABASE).forEach(k => delete NOTES_DATABASE[k]);
      Object.assign(NOTES_DATABASE, newNotesDb);
      
      if (typeof EXPANDED_NOTES_DATA !== 'undefined') {
        Object.keys(EXPANDED_NOTES_DATA).forEach(k => delete EXPANDED_NOTES_DATA[k]);
        Object.assign(EXPANDED_NOTES_DATA, newExpandedNotes);
      }
      
      console.log("Sync: loaded notes from Supabase.");
    }
    
    // 4. Trigger UI re-renders if the user is on that screen
    if (typeof STATE !== 'undefined' && STATE.currentScreen) {
      if (STATE.currentScreen === 'notes' && typeof renderNotesBrowser === 'function') {
        renderNotesBrowser();
      } else if (STATE.currentScreen === 'cbt-mock-hub' && typeof renderCbtMockHub === 'function') {
        renderCbtMockHub();
      } else if (STATE.currentScreen === 'current-affairs' && typeof renderCurrentAffairsHub === 'function') {
        renderCurrentAffairsHub();
      }
    }
    
  } catch (err) {
    console.error("Failed to sync database from Supabase:", err);
  }
}

// ==========================================

// ==========================================