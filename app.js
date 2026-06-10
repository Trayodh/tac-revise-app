// Tac-Revise Application Logic
// Dependencies: data.js (which contains NOTES_DATABASE, CURRENT_AFFAIRS_DB, etc.)
// ==========================================
// 0. THEME SWITCHER
// ==========================================
function applyTheme(themeName) {
  if (themeName === 'default') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', themeName);
  }
  localStorage.setItem('tac-revise-theme', themeName);
  
  const modal = document.getElementById('theme-selector-modal');
  if (modal) modal.style.display = 'none';
}

// Load theme on boot
const savedTheme = localStorage.getItem('tac-revise-theme');
if (savedTheme) {
  applyTheme(savedTheme);
}

// ==========================================
// 7. SCREEN SWITCHER & NAVIGATION
// ==========================================
function switchScreen(screenId) {
  if (typeof distractionFreeMode !== 'undefined' && distractionFreeMode) {
    toggleFocusReadingMode();
  }

  STATE.currentScreen = screenId;
  
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
  
  const targetScreen = document.getElementById(`screen-${screenId}`);
  if (targetScreen) 
    targetScreen.classList.add("active");
  
  
  const navItem = document.querySelector(`.nav-item[data-screen="${screenId}"]`);
  if (navItem) {
    navItem.classList.add("active");
  }
  
  if (screenId === "notes") {
    renderNotesBrowser();
  } else if (screenId === "current-affairs") {
    renderCurrentAffairsHub();
  } else if (screenId === "cbt-mock-hub") {
    renderCbtMockHub();
  } else if (screenId === "ai-console") {
    renderAiConsoleSuggestions();
  } else if (screenId === "vocab-builder") {
    renderVocabBuilder();
  }
}

// Bind Navigation Click Handlers
document.querySelectorAll(".nav-item").forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const screenId = item.getAttribute("data-screen");
    switchScreen(screenId);
  });
});

// ==========================================
// ==========================================
// 8. NOTES & FORMULAS HUB MODULE
// ==========================================
let currentSubjectFilter = "all";
let selectedSubjectId = null;
let selectedChapterId = null;
let selectedTopicId = null;
let activeNotesTab = 'notes'; // 'notes' | 'formulas' | 'mindmap'
let notesSearchQuery = '';
let distractionFreeMode = false;

function updateNotesProgressBar() {
  const container = document.getElementById("notes-progress-bar-container");
  if (!container) return;
  
  let total = 0;
  let completed = 0;
  
  for (const subjectId in NOTES_DATABASE) {
    if (currentSubjectFilter !== "all" && currentSubjectFilter !== subjectId) {
      continue;
    }
    const subject = NOTES_DATABASE[subjectId];
    subject.chapters.forEach(c => {
      c.topics.forEach(t => {
        total++;
        if (STATE.syllabusProgress[t.id] === 'completed') {
          completed++;
        }
      });
    });
  }
  
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
  const subjectName = currentSubjectFilter === "all" ? "All Subjects" : NOTES_DATABASE[currentSubjectFilter].title;
  
  container.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; font-size:0.9rem;">
      <span style="font-weight:600; color:var(--text-primary);"><span style="color:var(--accent);">TAC</span> ${subjectName} Progress</span>
      <span style="font-family:var(--font-mono); font-weight:700; color:var(--accent);">${completed}/${total} Mastered (${pct}%)</span>
    </div>
    <div style="width:100%; height:6px; background:rgba(255,255,255,0.05); border-radius:3px; overflow:hidden; border:1px solid rgba(255,255,255,0.03);">
      <div style="width:${pct}%; height:100%; background:linear-gradient(90deg, var(--accent-dark) 0%, var(--accent) 100%); transition: width 0.4s ease; box-shadow:0 0 8px var(--accent);"></div>
    </div>
  `;
}

function getFilteredTopicsList() {
  const list = [];
  for (const subjectId in NOTES_DATABASE) {
    if (currentSubjectFilter !== "all" && currentSubjectFilter !== subjectId) {
      continue;
    }
    const subject = NOTES_DATABASE[subjectId];
    subject.chapters.forEach(chapter => {
      chapter.topics.forEach(topic => {
        list.push({
          subjectId,
          chapterId: chapter.id,
          topicId: topic.id,
          title: topic.title
        });
      });
    });
  }
  return list;
}

function renderNotesBrowser() {
  const accordionList = document.getElementById("notes-accordion-list");
  if (!accordionList) return;
  accordionList.innerHTML = "";
  
  updateNotesProgressBar();
  
  for (const subjectId in NOTES_DATABASE) {
    if (currentSubjectFilter !== "all" && currentSubjectFilter !== subjectId) {
      continue;
    }
    
    const subject = NOTES_DATABASE[subjectId];
    
    // Filter chapters and topics by search query
    const filteredChapters = [];
    subject.chapters.forEach(chapter => {
      const filteredTopics = chapter.topics.filter(topic => {
        const query = notesSearchQuery.toLowerCase();
        return topic.title.toLowerCase().includes(query) ||
               (topic.notes && topic.notes.toLowerCase().includes(query)) ||
               (topic.formulas && topic.formulas.toLowerCase().includes(query));
      });
      
      if (filteredTopics.length > 0 || chapter.title.toLowerCase().includes(notesSearchQuery.toLowerCase())) {
        filteredChapters.push({
          ...chapter,
          topics: filteredTopics.length > 0 ? filteredTopics : chapter.topics
        });
      }
    });
    
    if (filteredChapters.length === 0 && !subject.title.toLowerCase().includes(notesSearchQuery.toLowerCase())) {
      continue;
    }
    
    const displayChapters = filteredChapters.length > 0 ? filteredChapters : subject.chapters;
    
    const accordionGroup = document.createElement("div");
    accordionGroup.className = "accordion-group";
    
    // Calculate progress for this subject
    const totalTopics = subject.chapters.reduce((sum, c) => sum + c.topics.length, 0);
    let completedTopics = 0;
    subject.chapters.forEach(c => {
      c.topics.forEach(t => {
        if (STATE.syllabusProgress[t.id] === 'completed') {
          completedTopics++;
        }
      });
    });
    const pct = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
    
    const header = document.createElement("div");
    header.className = "accordion-header";
    header.innerHTML = `
      <div style="display:flex; flex-direction:column; gap:2px;">
        <span style="font-weight:600;">${subject.title}</span>
        <span style="font-size:0.7rem; color:var(--text-muted); font-family:var(--font-mono);">${completedTopics}/${totalTopics} Mastered (${pct}%)</span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    `;
    
    const content = document.createElement("div");
    content.className = "accordion-content";
    
    displayChapters.forEach(chapter => {
      const chapterDiv = document.createElement("div");
      chapterDiv.style.margin = "12px 0 12px 4px";
      chapterDiv.style.borderLeft = "1px solid rgba(255,255,255,0.04)";
      chapterDiv.style.paddingLeft = "8px";
      
      // Calculate chapter progress
      const totalChTopics = chapter.topics.length;
      let completedChTopics = 0;
      chapter.topics.forEach(t => {
        if (STATE.syllabusProgress[t.id] === 'completed') {
          completedChTopics++;
        }
      });
      
      chapterDiv.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.75rem; color:var(--text-muted); font-weight:600; text-transform:uppercase; margin-left:12px; margin-bottom:6px;">
          <span>${chapter.title}</span>
          <span style="font-family:var(--font-mono); font-size:0.7rem;">${completedChTopics}/${totalChTopics}</span>
        </div>
      `;
      
      chapter.topics.forEach(topic => {
        const topicLink = document.createElement("div");
        const isTopicCompleted = STATE.syllabusProgress[topic.id] === 'completed';
        const isTopicActive = selectedTopicId === topic.id;
        
        topicLink.className = `topic-link ${isTopicActive ? 'active' : ''}`;
        topicLink.innerHTML = `
          <div style="display:flex; align-items:center; gap:8px; width:100%; justify-content:space-between;">
            <div style="display:flex; align-items:center; gap:8px; overflow:hidden;">
              <span class="topic-dot ${isTopicCompleted ? 'completed' : ''}"></span>
              <span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${topic.title}</span>
            </div>
            ${isTopicCompleted ? '<span style="font-size:0.75rem;"></span>' : ''}
          </div>
        `;
        
        topicLink.addEventListener("click", () => {
          selectedSubjectId = subjectId;
          selectedChapterId = chapter.id;
          selectedTopicId = topic.id;
          document.querySelectorAll(".topic-link").forEach(l => l.classList.remove("active"));
          topicLink.classList.add("active");
          renderTopicView(subjectId, chapter.id, topic.id);
          renderNotesBrowser();
        });
        chapterDiv.appendChild(topicLink);
      });
      content.appendChild(chapterDiv);
    });
    
    header.addEventListener("click", () => {
      accordionGroup.classList.toggle("open");
    });
    
    accordionGroup.appendChild(header);
    accordionGroup.appendChild(content);
    accordionList.appendChild(accordionGroup);
    accordionGroup.classList.add("open");
  }
}

document.querySelectorAll('[data-subject-filter]').forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll('[data-subject-filter]').forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentSubjectFilter = btn.getAttribute("data-subject-filter");
    renderNotesBrowser();
  });
});

function renderTopicView(subjectId, chapterId, topicId) {
  selectedSubjectId = subjectId;
  selectedChapterId = chapterId;
  selectedTopicId = topicId;
  
  const viewerPane = document.getElementById("deck-viewer-pane");
  const subject = NOTES_DATABASE[subjectId];
  const chapter = subject.chapters.find(c => c.id === chapterId);
  const topic = chapter.topics.find(t => t.id === topicId);
  
  if (!topic) return;
  
  const isCompleted = STATE.syllabusProgress[topic.id] === 'completed';
  const isFormulaSaved = STATE.readFormulasList.includes(topic.id);
  
  // Get prev and next topics
  const topicsList = getFilteredTopicsList();
  const currentIdx = topicsList.findIndex(t => t.topicId === topicId);
  const prevTopic = currentIdx > 0 ? topicsList[currentIdx - 1] : null;
  const nextTopic = currentIdx < topicsList.length - 1 ? topicsList[currentIdx + 1] : null;
  
  // Render Breadcrumbs
  const breadcrumbs = `<span style="color:var(--text-muted); font-size:0.8rem; font-family:var(--font-mono);">${subject.title} &gt; ${chapter.title}</span>`;
  
  // Tab buttons
  const tabsHtml = `
    <div class="topic-tab-bar">
      <button class="tab-btn ${activeNotesTab === 'notes' ? 'active' : ''}" onclick="setNotesTab('notes')">
        Concept Notes
      </button>
      <button class="tab-btn ${activeNotesTab === 'formulas' ? 'active' : ''}" onclick="setNotesTab('formulas')">
        High-Yield Formulas
      </button>
      ${topic.mindmap ? `
        <button class="tab-btn ${activeNotesTab === 'mindmap' ? 'active' : ''}" onclick="setNotesTab('mindmap')">
          Concept Mindmap
        </button>
      ` : ''}
    </div>
  `;
  
  // Tab content selection
  let tabContentHtml = '';
  if (activeNotesTab === 'notes') {
    let mainNotesContent = topic.notes;
    let isPlaceholder = false;
    if (typeof topic.notes === 'string' && topic.notes.trim().startsWith('Detailed notes expanded in')) {
      isPlaceholder = true;
      if (typeof EXPANDED_NOTES_DATA !== 'undefined' && EXPANDED_NOTES_DATA[topic.id]) {
        mainNotesContent = EXPANDED_NOTES_DATA[topic.id];
      } else {
        mainNotesContent = `<div class="error-msg" style="color: var(--warning); padding: 12px; border: 1px dashed var(--warning); border-radius: 4px;">Notes are loading or currently being updated for this topic.</div>`;
      }
    }
    
    tabContentHtml = `
      <div class="tab-pane-content fade-in" style="height: 100%;">
        <div class="notes-text scroll-y" style="height: 100%; padding-bottom: 30px; box-sizing: border-box; overflow-y: auto;">
          ${mainNotesContent}
          ${(!isPlaceholder && typeof window.EXPANDED_NOTES_DATA !== 'undefined' && window.EXPANDED_NOTES_DATA[topic.id]) ? `
            <div class="expanded-notes" style="margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1);">
              <div style="color: var(--accent); font-size: 0.8rem; font-family: var(--font-mono); margin-bottom: 12px; letter-spacing: 1px; text-transform: uppercase;">
                [ Advanced Revision Data ]
              </div>
              ${EXPANDED_NOTES_DATA[topic.id]}
            </div>
          ` : ''}
          ${(typeof window.EXPERT_REVISION_DATA !== 'undefined' && window.EXPERT_REVISION_DATA[topic.id]) ? `
            <div class="expert-notes" style="margin-top: 24px; padding-top: 24px; border-top: 1px dashed var(--warning);">
              <div style="color: var(--warning); font-size: 0.8rem; font-family: var(--font-mono); margin-bottom: 12px; letter-spacing: 1px; text-transform: uppercase;">
                [ Expert Tactical Edge ]
              </div>
              ${EXPERT_REVISION_DATA[topic.id]}
            </div>
          ` : ''}
        </div>
      </div>
    `;
  } else if (activeNotesTab === 'formulas') {
    tabContentHtml = `
      <div class="tab-pane-content fade-in" style="display: flex; flex-direction: column; height: 100%;">
        <div class="concept-formula-box scroll-y" style="flex: 1; white-space: pre-line; margin: 0 0 16px 0; overflow-y: auto;">
          ${topic.formulas}
        </div>
        <div style="display:flex; justify-content:flex-end;">
          <button class="action-btn ${isFormulaSaved ? 'active-green' : ''}" onclick="toggleFormulaReadStatus('${topic.id}', this)" style="padding: 10px 20px;">
             ${isFormulaSaved ? 'Formula Memorized' : 'Mark Formula as Memorized'}
          </button>
        </div>
      </div>
    `;
  } else if (activeNotesTab === 'mindmap' && topic.mindmap) {
    let branchesHtml = '';
    topic.mindmap.branches.forEach(branch => {
      let subnodesHtml = '';
      branch.subnodes.forEach(sub => {
        subnodesHtml += `<div class="mindmap-subnode">${sub}</div>`;
      });
      branchesHtml += `
        <div class="mindmap-branch">
          <div class="mindmap-node">${branch.title}</div>
          <div class="mindmap-subnodes">
            ${subnodesHtml}
          </div>
        </div>
      `;
    });
    
    tabContentHtml = `
      <div class="tab-pane-content fade-in" style="height: 100%;">
        <div class="mindmap-tree scroll-x" style="padding: 20px 0; height: 100%; overflow-y: auto; box-sizing: border-box;">
          <div class="mindmap-root">${topic.mindmap.root}</div>
          <div class="mindmap-branches">
            ${branchesHtml}
          </div>
        </div>
      </div>
    `;
  } else {
    tabContentHtml = `<p style="color:var(--text-secondary)">Content not available.</p>`;
  }
  
  // Complete action toggle button
  const completeToggleBtn = `
    <button class="tactical-toggle-btn ${isCompleted ? 'completed' : ''}" onclick="toggleSyllabusTopicStatus('${topic.id}', this)">
      <span class="toggle-dot"></span>
      <span class="toggle-text">${isCompleted ? 'Completed' : 'TAC Mark Complete'}</span>
    </button>
  `;
  
  //Lecture Mode button
  const lectureModeBtn = `
    <button class="lecture-mode-btn" onclick="launchLectureMode('${subjectId}', '${chapterId}', '${topicId}')" style="background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.3); color: #4ade80; padding: 6px 12px; border-radius: 6px; font-weight: 500; cursor: pointer; display: flex; align-items: center; gap: 6px;" title="Watch this topic as an animated lecture with narration">
      Lecture (Beta)
    </button>
  `;

  //Detailed Notes button
  const detailedNotesBtn = `
    <button class="action-btn" onclick="generateDetailedNotesOnDemand('${subjectId}', '${chapterId}', '${topicId}')" style="background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.3); color: #c084fc; padding: 6px 12px; border-radius: 6px; font-weight: 500; cursor: pointer; display: flex; align-items: center; gap: 6px;" title="Explain the entire topic from start to end with AI">
      Detailed Notes
    </button>
  `;

  //Focus Mode toggle button
  const focusModeBtn = `
    <button class="tactical-action-btn ${distractionFreeMode ? 'active' : ''}" onclick="toggleFocusReadingMode()">
      <span>${distractionFreeMode ? 'Standard View' : 'Focus Mode'}</span>
    </button>
  `;
  
  // Navigation footer
  const navFooterHtml = `
    <div class="topic-navigation-footer">
      ${prevTopic ? `
        <button class="nav-arrow-btn" onclick="navigateToTopic('${prevTopic.subjectId}', '${prevTopic.chapterId}', '${prevTopic.topicId}')">
          Previous: ${prevTopic.title}
        </button>
      ` : '<div style="flex:1;"></div>'}
      ${nextTopic ? `
        <button class="nav-arrow-btn next" onclick="navigateToTopic('${nextTopic.subjectId}', '${nextTopic.chapterId}', '${nextTopic.topicId}')">
          Next: ${nextTopic.title}
        </button>
      ` : '<div style="flex:1;"></div>'}
    </div>
  `;
  
  viewerPane.innerHTML = `
    <div class="topic-viewer-card panel ${distractionFreeMode ? 'fullscreen-mode' : ''}">
      <div class="topic-viewer-header">
        <div style="display:flex; flex-direction:column; gap:4px; max-width: 60%; overflow: hidden;">
          ${breadcrumbs}
          <h2 style="font-family:var(--font-logo); font-size:1.4rem; letter-spacing:0.5px; color:#fff; text-shadow:0 0 10px rgba(255,255,255,0.05); white-space: nowrap; overflow: hidden; text-shadow: 0 0 8px rgba(34, 197, 94, 0.1);">${topic.title}</h2>
        </div>
        <div style="display:flex; align-items:center; gap:12px;">
          ${detailedNotesBtn}
          ${lectureModeBtn}
          ${focusModeBtn}
          ${completeToggleBtn}
        </div>
      </div>
      
      ${tabsHtml}
      
      <div class="topic-tab-body">
        ${tabContentHtml}
      </div>
      
      ${navFooterHtml}
    </div>
  `;

  // Re-typeset MathJax after injecting new content
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise([viewerPane]).catch(function(err) {
      console.warn('MathJax typeset error:', err);
    });
  }

  // Initialize dynamic vocabulary search vault if synonyms/antonyms topic is active
  if (topicId === 'synonyms-antonyms-detailed' && activeNotesTab === 'notes') {
    setTimeout(() => {
      if (typeof window.initVocabVault === 'function') {
        window.initVocabVault();
      }
    }, 100);
  }
}

function setNotesTab(tab) {
  activeNotesTab = tab;
  if (selectedSubjectId && selectedChapterId && selectedTopicId) {
    renderTopicView(selectedSubjectId, selectedChapterId, selectedTopicId);
  }
}

function navigateToTopic(subjectId, chapterId, topicId) {
  selectedSubjectId = subjectId;
  selectedChapterId = chapterId;
  selectedTopicId = topicId;
  
  const subject = NOTES_DATABASE[subjectId];
  const chapter = subject.chapters.find(c => c.id === chapterId);
  const topic = chapter.topics.find(t => t.id === topicId);
  if (activeNotesTab === 'mindmap' && (!topic || !topic.mindmap)) {
    activeNotesTab = 'notes';
  }
  
  renderTopicView(subjectId, chapterId, topicId);
  renderNotesBrowser();
}

function toggleFocusReadingMode() {
  distractionFreeMode = !distractionFreeMode;
  
  const deckBrowser = document.querySelector(".deck-browser");
  const sidebar = document.querySelector(".sidebar");
  const topicList = document.querySelector(".topic-list");
  const filterContainer = document.querySelector(".exam-select-container");
  const mainHeader = document.querySelector("#screen-notes h1");
  const mainSub = document.querySelector("#screen-notes .subtitle");
  const progressPanel = document.getElementById("notes-progress-bar-container");
  
  if (distractionFreeMode) {
    if (sidebar) sidebar.style.display = "none";
    if (topicList) topicList.style.display = "none";
    if (progressPanel) progressPanel.style.display = "none";
    if (filterContainer) filterContainer.style.display = "none";
    if (mainHeader) mainHeader.style.display = "none";
    if (mainSub) mainSub.style.display = "none";
    
    if (deckBrowser) {
      deckBrowser.style.gridTemplateColumns = "1fr";
      deckBrowser.style.height = "calc(100vh - 60px)";
    }
  } else {
    if (sidebar) sidebar.style.display = "flex";
    if (topicList) topicList.style.display = "flex";
    if (progressPanel) progressPanel.style.display = "block";
    if (filterContainer) filterContainer.style.display = "flex";
    if (mainHeader) mainHeader.style.display = "block";
    if (mainSub) mainSub.style.display = "block";
    
    if (deckBrowser) {
      deckBrowser.style.gridTemplateColumns = "280px 1fr";
      deckBrowser.style.height = "calc(100vh - 180px)";
    }
  }
  
  if (selectedSubjectId && selectedChapterId && selectedTopicId) {
    renderTopicView(selectedSubjectId, selectedChapterId, selectedTopicId);
  }
}

function toggleSyllabusTopicStatus(topicId, button) {
  const currentStatus = STATE.syllabusProgress[topicId];
  if (currentStatus === 'completed') {
    STATE.syllabusProgress[topicId] = 'in-progress';
  } else {
    STATE.syllabusProgress[topicId] = 'completed';
  }
  saveState();
  
  if (selectedSubjectId && selectedChapterId && selectedTopicId === topicId) {
    renderTopicView(selectedSubjectId, selectedChapterId, topicId);
  }
  renderNotesBrowser();
}

function toggleFormulaReadStatus(topicId, button) {
  const index = STATE.readFormulasList.indexOf(topicId);
  if (index > -1) {
    STATE.readFormulasList.splice(index, 1);
    STATE.readFormulasCount = Math.max(0, STATE.readFormulasCount - 1);
  } else {
    STATE.readFormulasList.push(topicId);
    STATE.readFormulasCount++;
  }
  saveState();
  
  if (selectedSubjectId && selectedChapterId && selectedTopicId === topicId) {
    renderTopicView(selectedSubjectId, selectedChapterId, topicId);
  }
}

// 9. CURRENT AFFAIRS (CA) SCREEN MODULE
// ==========================================
let activeCaMonth = "January 2026";


let isFetchingDailyNews = false;
let hasFetchedDailyNews = false;
let lastFetchedNewsDate = '';
let fetchStartTime = 0;

function fetchDailyCurrentAffairs() {
  // Reset daily so we re-fetch new news each day
  const todayStr = new Date().toISOString().split('T')[0];
  if (lastFetchedNewsDate !== todayStr) {
    hasFetchedDailyNews = false;
    lastFetchedNewsDate = todayStr;
  }
  
  // Auto-reset if a previous fetch got stuck for more than 90 seconds
  if (isFetchingDailyNews && Date.now() - fetchStartTime > 90000) {
    console.warn('[CA] Fetch timeout — resetting flags and retrying...');
    isFetchingDailyNews = false;
  }
  if (isFetchingDailyNews || hasFetchedDailyNews) return;
  isFetchingDailyNews = true;
  fetchStartTime = Date.now();
  
  const pane = document.getElementById("ca-content-pane");
  if (pane) {
    pane.innerHTML = `<div style="text-align: center; margin-top: 40px; padding: 30px;">
      <div class="cbt-spinner" style="border-color: var(--accent); border-top-color: transparent; width: 48px; height: 48px; border-width: 4px; margin: 0 auto 20px;"></div>
      <p style="color: var(--accent); font-family: var(--font-mono); letter-spacing: 1px; font-weight: 700; font-size: 0.95rem;">RETRIEVING INTELLIGENCE BRIEFING</p>
      <p style="color: var(--text-secondary); font-size: 0.85rem; margin-top: 8px;">Scanning PIB · Google News · 10 UPSC Topic Areas</p>
      <p style="color: var(--text-muted); font-size: 0.8rem; margin-top: 6px;">AI enriching with UPSC highlights — this may take 15-30 seconds...</p>
    </div>`;
  }

  fetch('http://localhost:4000/api/daily-current-affairs')
    .then(res => res.json())
    .then(data => {
      if (Array.isArray(data)) {
        const monthStr = new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' });
        
        if (!CURRENT_AFFAIRS_DB[monthStr]) {
          const newDb = { [monthStr]: data };
          Object.assign(newDb, CURRENT_AFFAIRS_DB);
          const oldKeys = Object.keys(CURRENT_AFFAIRS_DB);
          oldKeys.forEach(k => delete CURRENT_AFFAIRS_DB[k]);
          Object.assign(CURRENT_AFFAIRS_DB, newDb);
        } else {
          // Avoid duplicating identical entries if fetching happens again during dev
          const existingSummaries = CURRENT_AFFAIRS_DB[monthStr].map(i => i.summary);
          const newData = data.filter(item => !existingSummaries.includes(item.summary));
          CURRENT_AFFAIRS_DB[monthStr] = [...newData, ...CURRENT_AFFAIRS_DB[monthStr]];
        }
        
        activeCaMonth = monthStr;
      }
      isFetchingDailyNews = false;
      hasFetchedDailyNews = true;
      renderCurrentAffairsHub();
    })
    .catch(err => {
      console.error("Failed to fetch daily news:", err);
      isFetchingDailyNews = false;
      hasFetchedDailyNews = true;
      if (pane) pane.innerHTML = `<p style="color: var(--danger); padding: 20px;">Secure uplink failed. Could not retrieve today's intelligence.</p>`;
      setTimeout(() => renderCurrentAffairsHub(), 3000);
    });
}

function renderCurrentAffairsHub() {
  if (!hasFetchedDailyNews && !isFetchingDailyNews) {
    fetchDailyCurrentAffairs();
    return;
  }
  
  const monthsList = document.getElementById("ca-month-list");
  monthsList.innerHTML = "";
  
  const keys = Object.keys(CURRENT_AFFAIRS_DB);
  // Only auto-select a month when the current selection is invalid (first load or after DB reset).
  // Never override a user's explicit month click.
  if (!keys.includes(activeCaMonth)) {
    const currentMonthStr = new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' });
    if (keys.includes(currentMonthStr)) {
      activeCaMonth = currentMonthStr;   // prefer today's month
    } else if (keys.length > 0) {
      activeCaMonth = keys[0];           // fallback to first available
    }
  }
  
  keys.forEach(month => {
    const item = document.createElement("div");
    item.className = `month-item ${month === activeCaMonth ? 'active' : ''}`;
    item.innerText = month;
    item.addEventListener("click", () => {
      activeCaMonth = month;
      renderCurrentAffairsHub();
    });
    monthsList.appendChild(item);
  });
  
  renderCurrentMonthAffairs();
}

function renderCurrentMonthAffairs() {
  const pane = document.getElementById("ca-content-pane");
  const data = CURRENT_AFFAIRS_DB[activeCaMonth] || [];

  if (data.length === 0) {
    pane.innerHTML = `<p style="color:var(--text-secondary); padding:20px 0;">No current affairs registered for this month.</p>`;
    return;
  }

  // Inline SVG icons (no emojis)
  const SVG_FACTS   = `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  const SVG_INST    = `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 22V9l9-7 9 7v13"/><path d="M9 22V12h6v10"/></svg>`;
  const SVG_TARGET  = `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`;
  const SVG_QUIZ    = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`;

  // Topic distribution summary
  const topicCounts = {};
  data.forEach(item => { const t = item.topic || 'General'; topicCounts[t] = (topicCounts[t] || 0) + 1; });

  let html = `
    <div style="margin-bottom:20px;">
      <h2 style="margin:0 0 4px; font-size:1.2rem; font-weight:700; letter-spacing:0.3px;">Current Affairs — ${activeCaMonth}</h2>
      <p style="margin:0 0 12px; font-size:0.82rem; color:var(--text-muted); font-family:var(--font-mono); letter-spacing:0.5px;">PIB + NEWS · AI-ENRICHED · ${data.length} ITEMS</p>
      <div style="display:flex; gap:5px; flex-wrap:wrap;">
        ${Object.entries(topicCounts).map(([t,c]) => `<span style="font-family:var(--font-mono); font-size:0.65rem; font-weight:600; padding:2px 7px; border-radius:3px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); letter-spacing:0.4px; white-space:nowrap; text-transform:uppercase;">${t}&thinsp;·&thinsp;${c}</span>`).join('')}
      </div>
    </div>
    <div style="height:1px; background:var(--border); margin-bottom:22px;"></div>
  `;

  function getTopicColor(topicStr, itemTopicColor) {
    if (itemTopicColor && /^#[0-9A-Fa-f]{3,6}$/.test(itemTopicColor)) return itemTopicColor;
    if (!topicStr) return '#64748b';
    const t = topicStr.toLowerCase();
    if (t.includes('polity') || t.includes('govern')) return '#4f46e5';
    if (t.includes('econom') || t.includes('financ')) return '#0891b2';
    if (t.includes('defence') || t.includes('securit') || t.includes('military')) return '#dc2626';
    if (t.includes('appointment')) return '#b45309';
    if (t.includes('international') || t.includes('relation') || t.includes('foreign')) return '#7c3aed';
    if (t.includes('environ') || t.includes('ecolog') || t.includes('climat')) return '#059669';
    if (t.includes('science') || t.includes('technolog') || t.includes('space')) return '#d97706';
    if (t.includes('social') || t.includes('welfare')) return '#db2777';
    if (t.includes('history') || t.includes('cultur') || t.includes('heritage')) return '#92400e';
    if (t.includes('geograph') || t.includes('disaster')) return '#0369a1';
    if (t.includes('award') || t.includes('sport')) return '#6d28d9';
    return '#64748b';
  }

  data.forEach(item => {
    const topicColor = getTopicColor(item.topic, item.topicColor);
    const topicLabel = (item.topic || 'General').toUpperCase();
    const mainText   = item.text || item.summary || '';

    // UPSC Key Facts block
    let upscBox = '';
    if (item.upscHighlights && item.upscHighlights.length > 0) {
      const highlights = item.upscHighlights.filter(h => h && h.length > 5);
      if (highlights.length > 0) {
        upscBox = `
          <div style="margin-top:14px; padding:11px 14px; background:rgba(255,210,0,0.06); border:1px solid rgba(255,210,0,0.2); border-left:3px solid rgba(255,210,0,0.65); border-radius:0 5px 5px 0;">
            <div style="display:flex; align-items:center; gap:5px; font-size:0.67rem; font-weight:700; letter-spacing:1px; color:rgba(255,200,50,0.85); margin-bottom:8px; text-transform:uppercase; font-family:var(--font-mono);">
              <span style="color:rgba(255,200,50,0.85);">${SVG_FACTS}</span> UPSC Key Facts
            </div>
            <ul style="margin:0; padding-left:16px; display:flex; flex-direction:column; gap:5px; list-style:disc;">
              ${highlights.map(h => `<li style="font-size:0.86rem; color:var(--text-primary); line-height:1.55;">${h}</li>`).join('')}
            </ul>
          </div>
        `;
      }
    }

    // Institutional + Strategic block
    let contextBox = '';
    if (item.institutionalContext || item.strategicImportance) {
      contextBox = `
        <div style="margin-top:10px; display:grid; grid-template-columns:1fr 1fr; gap:8px;">
          ${item.institutionalContext ? `
          <div style="padding:9px 11px; background:rgba(${hexToRgb(topicColor)},0.07); border-radius:5px; border:1px solid rgba(${hexToRgb(topicColor)},0.18);">
            <div style="display:flex; align-items:center; gap:4px; font-size:0.65rem; font-weight:700; letter-spacing:0.8px; color:${topicColor}; margin-bottom:4px; text-transform:uppercase; font-family:var(--font-mono);">
              <span>${SVG_INST}</span> Institutional Context
            </div>
            <div style="font-size:0.84rem; color:var(--text-secondary); line-height:1.45;">${item.institutionalContext}</div>
          </div>` : ''}
          ${item.strategicImportance ? `
          <div style="padding:9px 11px; background:rgba(100,116,139,0.08); border-radius:5px; border:1px solid rgba(100,116,139,0.18);">
            <div style="display:flex; align-items:center; gap:4px; font-size:0.65rem; font-weight:700; letter-spacing:0.8px; color:var(--text-muted); margin-bottom:4px; text-transform:uppercase; font-family:var(--font-mono);">
              <span style="color:var(--text-muted);">${SVG_TARGET}</span> UPSC Relevance
            </div>
            <div style="font-size:0.84rem; color:var(--text-secondary); line-height:1.45;">${item.strategicImportance}</div>
          </div>` : ''}
        </div>
      `;
    }

    // Legacy details fallback
    let legacyDetails = '';
    if (!item.upscHighlights && item.details) {
      legacyDetails = `
        <div style="display:grid; grid-template-columns:130px 1fr; gap:5px 14px; margin-top:12px; padding:11px; background:rgba(0,0,0,0.18); border-radius:5px; border-left:3px solid ${topicColor}; font-size:0.86rem;">
          ${item.details.winner    ? `<div style="color:var(--text-muted);font-weight:600;font-family:var(--font-mono);font-size:0.72rem;letter-spacing:0.5px;text-transform:uppercase;">Subject</div><div style="font-weight:600;color:var(--text-primary);">${item.details.winner}</div>` : ''}
          ${item.details.award     ? `<div style="color:var(--text-muted);font-weight:600;font-family:var(--font-mono);font-size:0.72rem;letter-spacing:0.5px;text-transform:uppercase;">Event</div><div style="color:${topicColor};font-weight:600;">${item.details.award}</div>` : ''}
          ${item.details.nationality ? `<div style="color:var(--text-muted);font-weight:600;font-family:var(--font-mono);font-size:0.72rem;letter-spacing:0.5px;text-transform:uppercase;">Location</div><div style="color:var(--text-secondary);">${item.details.nationality}</div>` : ''}
          ${item.details.summary   ? `<div style="color:var(--text-muted);font-weight:600;font-family:var(--font-mono);font-size:0.72rem;letter-spacing:0.5px;text-transform:uppercase;">Details</div><div style="color:var(--text-secondary);">${item.details.summary}</div>` : ''}
        </div>
      `;
    }

    html += `
      <div class="panel" style="margin-bottom:16px; border-left:3px solid ${topicColor}; padding:16px 18px; position:relative; overflow:hidden;">
        <div style="position:absolute; top:0; right:0; width:100px; height:100px; background:radial-gradient(circle at top right, rgba(${hexToRgb(topicColor)},0.06), transparent 70%); pointer-events:none;"></div>
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px; flex-wrap:wrap;">
          <span style="font-family:var(--font-mono); font-size:0.65rem; font-weight:700; letter-spacing:0.8px; padding:3px 8px; border-radius:3px; background:${topicColor}1a; border:1px solid ${topicColor}44; color:${topicColor}; text-transform:uppercase; white-space:nowrap;">${topicLabel}</span>
        </div>
        <div style="font-size:0.92rem; line-height:1.65; color:var(--text-primary); font-family:var(--font-main);">${mainText}</div>
        ${upscBox}
        ${contextBox}
        ${legacyDetails}
      </div>
    `;
  });

  // MCQ section
  const itemsWithMcq = data.filter(item => item.mcq && item.mcq.question);
  if (itemsWithMcq.length > 0) {
    html += `
      <div style="margin-top:32px; border-top:1px solid var(--border); padding-top:26px;">
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
          <span style="color:var(--accent);">${SVG_QUIZ}</span>
          <h3 style="margin:0; font-size:1rem; font-weight:700; letter-spacing:0.3px;">UPSC Prelims Mock</h3>
        </div>
        <p style="color:var(--text-muted); font-size:0.82rem; margin:0 0 20px; font-family:var(--font-mono); letter-spacing:0.4px; text-transform:uppercase;">Current Affairs MCQs — Analytical, not recall-based</p>
        <div class="panel">
    `;

    itemsWithMcq.forEach((item, index) => {
      const topicColor = getTopicColor(item.topic, item.topicColor);
      html += `
        <div style="margin-bottom:26px; padding-bottom:22px; ${index < itemsWithMcq.length - 1 ? 'border-bottom:1px solid var(--border);' : ''}" id="ca-mcq-${item.id}">
          <div style="display:flex; align-items:center; gap:6px; margin-bottom:10px;">
            <span style="font-family:var(--font-mono); font-size:0.62rem; font-weight:700; letter-spacing:0.6px; padding:2px 6px; border-radius:3px; background:${topicColor}1a; color:${topicColor}; text-transform:uppercase;">${item.topic || 'General'}</span>
            <span style="font-family:var(--font-mono); font-size:0.65rem; color:var(--text-muted);">Q${index + 1}</span>
          </div>
          <p style="font-weight:600; font-size:0.94rem; margin:0 0 14px; line-height:1.55; color:var(--text-primary);">${item.mcq.question}</p>
          <div style="display:flex; flex-direction:column; gap:7px;">
      `;
      item.mcq.options.forEach((opt, optIdx) => {
        html += `
          <button class="action-btn" onclick="checkCaMcq('${item.id}', ${optIdx}, ${item.mcq.correct}, this)" style="text-align:left; width:100%; justify-content:flex-start; padding:9px 13px; font-family:var(--font-main);">
            <span style="font-family:var(--font-mono); font-weight:700; font-size:0.8rem; margin-right:10px; color:var(--text-muted); min-width:18px;">${String.fromCharCode(65 + optIdx)}</span>${opt}
          </button>
        `;
      });
      html += `
          </div>
          <div class="solution-explanation" id="ca-explain-${item.id}" style="display:none; margin-top:12px;">${item.mcq.explanation}</div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
  }

  pane.innerHTML = html;
}

// Helper: hex color (#4f46e5) -> "79,70,229"
function hexToRgb(hex) {
  if (!hex || hex.length < 7) return '100,116,139';
  try {
    const r = parseInt(hex.slice(1,3),16);
    const g = parseInt(hex.slice(3,5),16);
    const b = parseInt(hex.slice(5,7),16);
    return `${r},${g},${b}`;
  } catch(_) { return '100,116,139'; }
}


function checkCaMcq(itemId, selectedIdx, correctIdx, btnElement) {
  const container = document.getElementById(`ca-mcq-${itemId}`);
  const explanationDiv = document.getElementById(`ca-explain-${itemId}`);
  
  container.querySelectorAll("button").forEach(btn => {
    btn.disabled = true;
    btn.style.opacity = "0.7";
  });
  
  if (selectedIdx === correctIdx) {
    btnElement.style.borderColor = "var(--accent)";
    btnElement.style.backgroundColor = "rgba(34, 197, 94, 0.1)";
    btnElement.style.color = "var(--accent)";
  } else {
    btnElement.style.borderColor = "var(--danger)";
    btnElement.style.backgroundColor = "rgba(239, 68, 68, 0.1)";
    btnElement.style.color = "var(--danger)";
    
    const correctBtn = container.querySelectorAll("button")[correctIdx];
    if (correctBtn) {
      correctBtn.style.borderColor = "var(--accent)";
      correctBtn.style.color = "var(--accent)";
    }
  }
  
  explanationDiv.style.display = "block";
}

// ==========================================
// 9.5. PYQ SEMANTIC SEARCH MODULE
// ==========================================

function executePyqSearch() {
  const inputEl = document.getElementById("pyq-search-input");
  const query = inputEl.value.trim().toLowerCase();
  const resultsContainer = document.getElementById("pyq-search-results");
  
  if (!query) {
    resultsContainer.style.display = "none";
    return;
  }
  
  // Search through CBT_EXAMS_DATABASE
  let matchedQuestions = [];
  CBT_EXAMS_DATABASE.forEach(exam => {
    exam.questions.forEach((q, idx) => {
      const qText = q.question.toLowerCase();
      const optionsText = q.options.join(" ").toLowerCase();
      if (qText.includes(query) || optionsText.includes(query)) {
        matchedQuestions.push({
          examTitle: exam.title,
          examName: exam.exam,
          questionObj: q,
          qIndex: idx + 1
        });
      }
    });
  });
  
  resultsContainer.style.display = "block";
  resultsContainer.innerHTML = "";
  
  if (matchedQuestions.length === 0) {
    resultsContainer.innerHTML = `<div style="color: var(--text-secondary); text-align: center; padding: 20px;">No Past Year Questions matched "${query}".</div>`;
    return;
  }
  
  const displayLimit = Math.min(matchedQuestions.length, 20);
  const titleHtml = `<div style="font-weight: 600; color: var(--accent); margin-bottom: 12px;">Found ${matchedQuestions.length} matches (showing top ${displayLimit}):</div>`;
  
  let cardsHtml = matchedQuestions.slice(0, displayLimit).map((match, i) => {
    const q = match.questionObj;
    const uid = 'pyq-' + Date.now() + '-' + i;
    
    let optionsHtml = '';
    q.options.forEach((opt, optIdx) => {
      const isCorrect = (optIdx === q.correct);
      optionsHtml += `
        <div style="padding: 8px; border: 1px solid var(--border); border-radius: 4px; margin-bottom: 4px; background: rgba(0,0,0,0.2);">
          <span style="font-weight: 600; margin-right: 8px;">${String.fromCharCode(65 + optIdx)}.</span> ${opt}
          <div class="pyq-ans-indicator ${uid}-ans" style="display: none; font-weight: 600; margin-top: 4px; ${isCorrect ? 'color: var(--accent);' : 'color: var(--danger);'}">
            ${isCorrect ? '✓ CORRECT ANSWER' : '✗ INCORRECT'}
          </div>
        </div>
      `;
    });
    
    return `
      <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border); border-radius: 8px; padding: 16px; margin-bottom: 16px; position: relative;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
          <span style="font-family: var(--font-logo); font-size: 0.75rem; background: var(--accent); color: #000; padding: 2px 8px; border-radius: 4px; font-weight: 700;">${match.examName}</span>
          <span style="font-size: 0.8rem; color: var(--text-secondary);">Source: ${match.examTitle} (Q.${match.qIndex})</span>
        </div>
        <div style="font-size: 1rem; color: var(--text-primary); margin-bottom: 16px; line-height: 1.5;">
          ${q.question}
        </div>
        <div style="margin-bottom: 16px;">
          ${optionsHtml}
        </div>
        <button class="btn-secondary" onclick="togglePyqAnswer('${uid}')" style="width: auto; padding: 6px 12px; font-size: 0.85rem;">Toggle Answer & Solution</button>
        <div id="${uid}-sol" style="display: none; margin-top: 12px; padding: 12px; border-left: 3px solid var(--info); background: rgba(14, 165, 233, 0.05); color: var(--text-secondary); font-size: 0.9rem;">
          <strong>Explanation:</strong><br/>
          ${q.explanation || 'Self-explanatory or factual based on the core syllabus.'}
        </div>
      </div>
    `;
  }).join('');
  
  resultsContainer.innerHTML = titleHtml + cardsHtml;
  
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise([resultsContainer]).catch(err => console.warn(err));
  }
}

function togglePyqAnswer(uid) {
  const indicators = document.querySelectorAll('.' + uid + '-ans');
  const solDiv = document.getElementById(uid + '-sol');
  
  if (!solDiv) return;
  const isCurrentlyVisible = solDiv.style.display === 'block';
  
  if (isCurrentlyVisible) {
    indicators.forEach(el => el.style.display = 'none');
    solDiv.style.display = 'none';
  } else {
    indicators.forEach(el => el.style.display = 'block');
    solDiv.style.display = 'block';
  }
}

// ==========================================
// 10. CBT MOCK TEST ENGINE MODULE
// ==========================================
let activeExamFilter = "all";
let CBT_SESSION = null; 

function renderCbtMockHub() {
  const container = document.getElementById("exams-list-container");
  container.innerHTML = "";
  
  CBT_EXAMS_DATABASE.forEach(exam => {
    if (activeExamFilter !== "all" && exam.exam !== activeExamFilter) {
      return;
    }
    
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
          <span>${exam.questionsCount} Qs</span>
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

document.querySelectorAll('[data-exam-filter]').forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll('[data-exam-filter]').forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeExamFilter = btn.getAttribute("data-exam-filter");
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
    optDiv.className = `cbt-option ${CBTSESSION.answers[currentIdx] === optIdx ? 'selected' : ''}`;
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
  const confirmSubmit = confirm("Are you sure you want to submit the exam? This will close the player and show the corrections worksheet.");
  if (confirmSubmit) {
    submitCbtExam();
  }
});

function submitCbtExam() {
  if (CBT_SESSION.timerId) clearInterval(CBT_SESSION.timerId);
  const exam = CBT_SESSION.examData;
  let correctCount = 0;
  let incorrectCount = 0;
  let attemptedCount = 0;
  
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
      }
    }
  });
  
  const totalQuestions = exam.questions.length;
  const gain = correctCount * exam.rules.correctMarks;
  const loss = incorrectCount * Math.abs(exam.rules.incorrectMarks);
  const netScore = parseFloat((gain - loss).toFixed(2));
  const maxPossible = totalQuestions * exam.rules.correctMarks;
  const accuracy = attemptedCount > 0 ? ((correctCount / attemptedCount) * 100).toFixed(1) : 0;
  
  document.getElementById("cbt-player-overlay").style.display = "none";
  
  const scoreRecord = {
    examId: exam.id,
    examTitle: exam.title,
    score: netScore,
    maxScore: maxPossible,
    date: new Date().toLocaleDateString()
  };
  
  STATE.cbtScores.push(scoreRecord);
  saveState(); 
  
  document.getElementById("report-exam-title").innerText = exam.title;
  document.getElementById("report-final-score").innerText = netScore + " / " + maxPossible;
  
  const qualified = netScore >= (maxPossible * 0.4);
  const verdict = document.getElementById("report-verdict");
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
  
  const solutionsContainer = document.getElementById("report-solutions-list");
  solutionsContainer.innerHTML = "";
  
  exam.questions.forEach((q, idx) => {
    const userAns = CBT_SESSION.answers[idx];
    const isCorrect = userAns === q.correct;
    
    const div = document.createElement("div");
    div.className = `solution-item ${userAns === null ? '' : (isCorrect ? 'correct' : 'incorrect')}`;
    
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
// 11. AI REVISION QUESTION GENERATOR MODULE
// ==========================================
const PRESET_SUGGESTIONS = [
  { id: "matrices", text: "Matrices and Determinants" },
  { id: "fundamental-rights", text: "Fundamental Rights" },
  { id: "optics", text: "Optics Laws & Refraction" },
  { id: "commands", text: "Military Command Centers" },
  { id: "history-movement", text: "Indian National Movement" },
  { id: "indian-monsoon", text: "Monsoon & Soils of India" },
  { id: "rbi-monetary", text: "RBI & Monetary Policy" },
  { id: "biology", text: "Cell Biology & Human Systems" },
  { id: "govt-schemes", text: "Government Schemes" },
  { id: "ca-red-sea-crisis", text: "Red Sea Maritime Security" },
  { id: "ca-quad-indopacific", text: "Quad Indo-Pacific Strategy" },
  { id: "ca-defense-acquisitions", text: "Key Defense Acquisitions" }
];

function renderAiConsoleSuggestions() {
  const container = document.getElementById("ai-suggestion-container");
  container.innerHTML = "";
  
  PRESET_SUGGESTIONS.forEach(s => {
    const chip = document.createElement("div");
    chip.className = "suggestion-chip";
    chip.innerText = s.text;
    chip.addEventListener("click", () => {
      document.getElementById("ai-custom-topic-input").value = s.text;
      triggerAiQuestionGeneration(s.id);
    });
    container.appendChild(chip);
  });
}

document.getElementById("ai-generate-btn").addEventListener("click", async () => {
  const query = document.getElementById("ai-custom-topic-input").value.trim();
  if (!query) {
    alert("Please enter a topic.");
    return;
  }
  const mode = document.querySelector('input[name="ai-mode"]:checked').value;
  let templateKey = null;
  const lowerQuery = query.toLowerCase();
  if (lowerQuery.includes("matrix") || lowerQuery.includes("determinant")) templateKey = "matrices";
  else if (lowerQuery.includes("right") || lowerQuery.includes("article")) templateKey = "fundamental-rights";
  else if (lowerQuery.includes("optic") || lowerQuery.includes("refract") || lowerQuery.includes("mirror") || lowerQuery.includes("lens")) templateKey = "optics";
  else if (lowerQuery.includes("command") || lowerQuery.includes("headquarter") || lowerQuery.includes("military")) templateKey = "commands";
  else if (lowerQuery.includes("schedule")) templateKey = "schedules-constitution";
  else if (lowerQuery.includes("newton") || lowerQuery.includes("motion") || lowerQuery.includes("law")) templateKey = "newton-laws";
  else if (lowerQuery.includes("exercise") || lowerQuery.includes("bilateral")) templateKey = "joint-exercises";
  else if (lowerQuery.includes("acid") || lowerQuery.includes("base") || lowerQuery.includes("indicator")) templateKey = "acids-bases";
  else if (lowerQuery.includes("history") || lowerQuery.includes("national") || lowerQuery.includes("movement") || lowerQuery.includes("gandhi") || lowerQuery.includes("congress") || lowerQuery.includes("inc")) templateKey = "history-movement";
  else if (lowerQuery.includes("monsoon") || lowerQuery.includes("soil") || lowerQuery.includes("rain") || lowerQuery.includes("pass") || lowerQuery.includes("river") || lowerQuery.includes("geography")) templateKey = "indian-monsoon";
  else if (lowerQuery.includes("scheme") || lowerQuery.includes("welfare") || lowerQuery.includes("yojana") || lowerQuery.includes("pension") || lowerQuery.includes("mgnrega")) templateKey = "govt-schemes";
  else if (lowerQuery.includes("rbi") || lowerQuery.includes("monetary") || lowerQuery.includes("rate") || lowerQuery.includes("repo") || lowerQuery.includes("tax") || lowerQuery.includes("gst") || lowerQuery.includes("economics") || lowerQuery.includes("plan")) templateKey = "rbi-monetary";
  else if (lowerQuery.includes("cell") || lowerQuery.includes("organelle") || lowerQuery.includes("biology") || lowerQuery.includes("circulatory") || lowerQuery.includes("blood") || lowerQuery.includes("hormone") || lowerQuery.includes("disease") || lowerQuery.includes("physiol") || lowerQuery.includes("pathogen")) templateKey = "biology";
  else if (lowerQuery.includes("red sea") || lowerQuery.includes("crisis") || lowerQuery.includes("houthi") || lowerQuery.includes("sankalp") || lowerQuery.includes("bab-el-mandeb") || lowerQuery.includes("aden")) templateKey = "ca-red-sea-crisis";
  else if (lowerQuery.includes("quad") || lowerQuery.includes("indo-pacific") || lowerQuery.includes("first island chain") || lowerQuery.includes("malabar")) templateKey = "ca-quad-indopacific";
  else if (lowerQuery.includes("acquisition") || lowerQuery.includes("rafale-m") || lowerQuery.includes("scorpene") || lowerQuery.includes("submarine") || lowerQuery.includes("vikrant") || lowerQuery.includes("procurement")) templateKey = "ca-defense-acquisitions";
  else if (lowerQuery.includes("icet") || lowerQuery.includes("mq-9b") || lowerQuery.includes("predator") || lowerQuery.includes("drone") || lowerQuery.includes("seaguardian") || lowerQuery.includes("skyguardian")) templateKey = "ca-icet-drones";
  else if (lowerQuery.includes("c-295") || lowerQuery.includes("c295") || lowerQuery.includes("airbus") || lowerQuery.includes("vadodara") || lowerQuery.includes("spain")) templateKey = "ca-spain-c295";
  else if (lowerQuery.includes("space nuclear") || lowerQuery.includes("nuclear space") || lowerQuery.includes("mirv") || lowerQuery.includes("agni") || lowerQuery.includes("divyastra")) templateKey = "ca-space-nuclear";

  if (mode === "questions") {
    triggerAiQuestionGeneration(templateKey, query);
  } else {
    await triggerAiSolveDoubt(templateKey, query);
  }
});

async function triggerAiQuestionGeneration(templateKey, customQueryText = "") {
  const area = document.getElementById("ai-result-area");
  area.style.display = "block";
  area.className = "ai-response-area loading";
  
  const topicName = customQueryText || (templateKey && AI_TOPIC_TEMPLATES[templateKey] ? AI_TOPIC_TEMPLATES[templateKey].topic : "Tactical Topic");
  
  let syllabusContext = "";
  if (templateKey && window.OFFICIAL_SYLLABUS_DATA && window.OFFICIAL_SYLLABUS_DATA[templateKey]) {
    syllabusContext = `\n\nOfficial syllabus context: ${window.OFFICIAL_SYLLABUS_DATA[templateKey]}`;
  }
  
  let pyqContext = "";
  if (templateKey && window.PYQ_TRENDS_DATA && window.PYQ_TRENDS_DATA[templateKey]) {
    pyqContext = `\n\nActual Questions, numerical patterns, and conceptual trends from the last 7 years (2020-2026) of UPSC/AFCAT exams on this topic: ${window.PYQ_TRENDS_DATA[templateKey]}`;
  }

  const promptText = `You are an expert examiner for Indian Defence Examinations (NDA, CDS, AFCAT).
Generate exactly 10 high-yield, exam-standard multiple-choice questions for the topic "${topicName}" to teach the topic comprehensively and prepare the user to clear the exam.
Twist the questions in all possible ways they can be asked in the actual exam. Specifically include:
- At least 2 numerical or calculation-based questions (if applicable to the subject).
- At least 2 statement-based questions (e.g., "Which of the following statements is/are correct?").
- At least 2 assertion-reasoning or exception-based questions.
- Match the following or chronological sequence questions (where appropriate).
- Twisted conceptual questions designed to expose common exam traps and misconceptions.
${syllabusContext}${pyqContext}

For each of the 10 questions, provide:
1. The question text.
2. 4 distinct options (a, b, c, d).
3. The index of the correct option (0 for A, 1 for B, 2 for C, 3 for D).
4. A highly detailed, step-by-step educational explanation that teaches the concept clearly and resolves why other options are incorrect.

Your response must be a single JSON object in the following format:
{
  "topic": "${topicName}",
  "questions": [
    {
      "question": "question text",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correct": 0,
      "explanation": "detailed step-by-step explanation"
    },
    ... (exactly 10 questions)
  ]
}
Do not output any surrounding markdown formatting (no \`\`\`json, no \`\`\`), do not output any other text. Output only the raw JSON. Do NOT use any emojis, icons, or pictorial characters anywhere in the questions, options, or explanations. Keep the content completely emoji-free.`;

  const modelsToTry = ["gemini-3-flash-preview", "gemini-2.5-flash", "gemini-3.1-flash-lite", "gemini-2.0-flash", "gemini-1.5-flash", "gemini-1.5-pro"];
  let success = false;
  let generatedData = null;

  for (const model of modelsToTry) {
    try {
      const response = await fetch('http://localhost:4000/api/gemini', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: model,
          contents: [{ parts: [{ text: promptText }] }],
          generationConfig: {
            temperature: 0.2,
            response_mime_type: 'application/json'
          }
        })
      });

      if (response.ok) {
        const resData = await response.json();
        if (resData.candidates && resData.candidates[0] && resData.candidates[0].content && resData.candidates[0].content.parts[0]) {
          let text = resData.candidates[0].content.parts[0].text.trim();
          if (text.startsWith('```json')) text = text.substring(7);
          if (text.startsWith('```')) text = text.substring(3);
          if (text.endsWith('```')) text = text.substring(0, text.length - 3);
          
          generatedData = JSON.parse(text.trim());
          success = true;
          break;
        }
      }
    } catch (err) {
      console.error(`Failed to generate questions using model ${model}:`, err);
    }
  }

  area.className = "ai-response-area";
  
  if (!success || !generatedData || !generatedData.questions || generatedData.questions.length < 10) {
    console.warn("API question generation failed or incomplete, using fallback...");
    if (templateKey && AI_TOPIC_TEMPLATES[templateKey]) {
      generatedData = AI_TOPIC_TEMPLATES[templateKey];
    } else {
      generatedData = {
        topic: topicName,
        questions: [
          {
            question: `[FALLBACK] In reference to "${topicName}", which of the following statements represents the core concept tested under National Defence service guidelines?`,
            options: [
              `Hypothesis showing standard operational and mathematical behavior of ${topicName}.`,
              `Tactical deployment parameters corresponding strictly to ${topicName} values.`,
              "Both A and B are correct depending on parameters specified in the exam syllabus.",
              "None of the above statements represent the core concept accurately."
            ],
            correct: 2,
            explanation: `Let's break down the subject matter of ${topicName}. In typical Defence Entrance exams, ${topicName} is studied to check logical application and standard definitions.`
          }
        ]
      };
    }
  }

  let html = `
    <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border); padding-bottom:12px; margin-bottom:20px;">
      <h3 style="font-family:var(--font-logo); color: var(--accent);"> AI-GENERATED WORKSPACE: ${generatedData.topic.toUpperCase()}</h3>
      <span style="font-size:0.75rem; color:var(--text-muted); font-family:var(--font-mono)">QUESTIONS: ${generatedData.questions.length} | DEPTH: HIGH</span>
    </div>
    <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:24px;">
      Generated <strong>${generatedData.questions.length} twisted revision questions</strong> with detailed step-by-step solutions below.
    </p>
  `;
  
  generatedData.questions.forEach((q, qIdx) => {
    html += `
      <div class="panel" style="margin-bottom:20px; background-color:rgba(0,0,0,0.15);" id="ai-q-${qIdx}">
        <div style="font-size:0.8rem; font-family:var(--font-mono); color:var(--text-muted); margin-bottom:8px;">Generated Question ${qIdx+1}</div>
        <p style="font-weight:600; margin-bottom:16px; font-size:0.95rem;">${q.question}</p>
        <div style="display:flex; flex-direction:column; gap:8px;">
    `;
    
    q.options.forEach((opt, optIdx) => {
      html += `
        <button class="action-btn" onclick="checkAiConsoleQuestion(${qIdx}, ${optIdx}, ${q.correct}, this)" style="text-align:left; width:100%; justify-content:flex-start;">
          ${String.fromCharCode(65 + optIdx)}. ${opt}
        </button>
      `;
    });
    
    html += `
        </div>
        <div class="solution-explanation" id="ai-explain-${qIdx}" style="display:none; margin-top:14px;">
          <strong>Solution explanation:</strong><br>
          ${q.explanation}
        </div>
      </div>
    `;
  });
  
  area.innerHTML = html;
}

async function triggerAiSolveDoubt(templateKey, customQueryText = "") {
  const area = document.getElementById("ai-result-area");
  area.style.display = "block";
  area.className = "ai-response-area loading";

  let topicName = "";
  if (templateKey && AI_TOPIC_TEMPLATES[templateKey]) {
    topicName = AI_TOPIC_TEMPLATES[templateKey].topic;
  } else {
    topicName = customQueryText || "Your topic";
  }

  area.innerHTML = `
    <div class="panel" style="margin-bottom:20px;">
      <h3 style="font-family:var(--font-logo); color: var(--accent);"> Explanation: ${topicName}</h3>
      <p style="font-size:0.9rem; color:var(--text-muted); margin-top:12px;"> AI is generating explanation...</p>
    </div>
  `;
  area.className = "ai-response-area";

  let syllabusText = "";
  if (templateKey && window.OFFICIAL_SYLLABUS_DATA && window.OFFICIAL_SYLLABUS_DATA[templateKey]) {
    syllabusText = `\n\nEnsure you cover the official UPSC/AFCAT syllabus requirements: ${window.OFFICIAL_SYLLABUS_DATA[templateKey]}`;
  }
  
  let pyqText = "";
  if (templateKey && window.PYQ_TRENDS_DATA && window.PYQ_TRENDS_DATA[templateKey]) {
    pyqText = `\n\nTake note of the following actual questions and trends from the last 7 years (2020-2026) of UPSC/AFCAT exams on this topic, and ensure they are addressed in the explanation: ${window.PYQ_TRENDS_DATA[templateKey]}`;
  }

  const prompt = `You are an expert tutor for Indian Defence Examinations (NDA, CDS, AFCAT). 
Your goal is to teach the user the topic "${topicName}" so exceptionally well that they are fully equipped to clear the exam with excellent marks.
Structure your notes as a comprehensive educational guide. The provided previous year papers (PYQ trends) are there to help you understand the exact depth, level of detail, and formatting of notes that must be generated for this topic to ensure success.

Cover the following sections in your notes:
1. Core concept and definition: Explain the fundamentals clearly, step-by-step, starting from first principles with intuitive language and/or analogies.
2. Key principles, laws, or facts: Detailed explanations with mathematical derivations or logical breakdowns where applicable (use styled numbered points or bullet points).
3. Important sub-topics and their significance: A deep dive into all nuances and related sub-concepts.
4. Examples or applications: Show real-world scenarios or numerical problems, particularly those relevant to Defence Exams.
5. Common exam traps, misconceptions, or memory tips/mnemonics.

Formatting Guidelines for maximum visual appeal:
- For any memory aids or mnemonics, wrap them in: <div class="mnemonic-box"><strong>Mnemonic:</strong> description</div>
- For common errors, traps, or misconceptions, wrap them in: <div class="trap-box"><strong>Common Exam Trap:</strong> explanation of the trap</div>
- For high-level tips or strategic suggestions, wrap them in: <div class="strategist-tip"><strong>Strategist Tip:</strong> tip text</div>
- Wrap formulas, equations, variables, or article numbers in <code> tags (e.g. <code>sin²Î¸ + cos²Î¸ = 1</code> or <code>Article 338B</code>).
- Use tables (<table>, <tr>, <th>, <td>) to compare concepts or summarize facts.
- Use lists (<ul>, <li>) for multiple points.

Use clear, highly readable, and structured formatting with bold headings. Be extremely thorough, leaving out no details or formulas required to answer the exam questions. Make the content engaging and easy to learn. Do NOT use any emojis, icons, or pictorial characters anywhere in the response. Keep it completely emoji-free and professional.${syllabusText}${pyqText}`;

  const modelsToTry = ["gemini-3-flash-preview", "gemini-2.5-flash", "gemini-3.1-flash-lite", "gemini-2.0-flash", "gemini-1.5-flash", "gemini-1.5-pro"];
  let replyText = "";
  let success = false;

  for (const model of modelsToTry) {
    try {
      const response = await fetch('http://localhost:4000/api/gemini', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: model,
          contents: [{ parts: [{ text: prompt }] }]
        })
      });
      if (response.ok) {
        const resData = await response.json();
        if (resData.candidates && resData.candidates[0] && resData.candidates[0].content && resData.candidates[0].content.parts[0]) {
          replyText = resData.candidates[0].content.parts[0].text;
          success = true;
          break;
        }
      }
    } catch (err) {
      console.error("Gemini API error:", err);
    }
  }


  if (success) {
    let formattedText = replyText
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code style="background-color:rgba(255,255,255,0.05); padding:2px 4px; border-radius:4px;">$1</code>')
      .replace(/^#{1,3} (.+)$/gm, '<h4 style="color: var(--accent); margin:16px 0 8px;">$1</h4>')
      .replace(/\n/g, '<br/>');

    area.innerHTML = `
      <div class="panel" style="margin-bottom:20px;">
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border); padding-bottom:12px; margin-bottom:20px;">
          <h3 style="font-family:var(--font-logo); color: var(--accent);"> AI Explanation: ${topicName}</h3>
          <span style="font-size:0.75rem; color:var(--text-muted); font-family:var(--font-mono)">POWERED BY GEMINI AI · FREE</span>
        </div>
        <div style="font-size:0.92rem; line-height:1.8; color:var(--text-primary);">${formattedText}</div>
      </div>
    `;
    if (window.MathJax && typeof window.MathJax.typeset === 'function') {
      window.MathJax.typeset();
    }
  } else {
    area.innerHTML = `
      <div class="panel" style="margin-bottom:20px; border-color:var(--danger);">
        <h3 style="color:var(--danger);">AI Unavailable</h3>
        <p style="color:var(--text-secondary); margin-top:8px;">Could not reach the Gemini AI service. Please check your server connection and try again.</p>
      </div>
    `;
  }
}



function checkAiConsoleQuestion(qIdx, selectedIdx, correctIdx, btnElement) {
  const container = document.getElementById(`ai-q-${qIdx}`);
  const explanationDiv = document.getElementById(`ai-explain-${qIdx}`);
  
  container.querySelectorAll("button").forEach(btn => {
    btn.disabled = true;
    btn.style.opacity = "0.7";
  });
  
  if (selectedIdx === correctIdx) {
    btnElement.style.borderColor = "var(--accent)";
    btnElement.style.backgroundColor = "rgba(34, 197, 94, 0.1)";
    btnElement.style.color = "var(--accent)";
  } else {
    btnElement.style.borderColor = "var(--danger)";
    btnElement.style.backgroundColor = "rgba(239, 68, 68, 0.1)";
    btnElement.style.color = "var(--danger)";
    
    const correctBtn = container.querySelectorAll("button")[correctIdx];
    if (correctBtn) {
      correctBtn.style.borderColor = "var(--accent)";
      correctBtn.style.color = "var(--accent)";
    }
  }
  
  explanationDiv.style.display = "block";
}

// ==========================================
// 12. SYLLABUS TRACKER SCREEN MODULE
// ==========================================
function renderSyllabusTracker() {
  const list = document.getElementById("syllabus-tracker-list");
  list.innerHTML = "";
  
  SYLLABUS_DATABASE.forEach(group => {
    const groupDiv = document.createElement("div");
    groupDiv.className = "syllabus-group";
    
    const total = group.topics.length;
    let completed = 0;
    group.topics.forEach(t => {
      if (STATE.syllabusProgress[t.id] === 'completed') {
        completed++;
      }
    });
    
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    groupDiv.innerHTML = `
      <div class="syllabus-group-header">
        <div>
          <span class="syllabus-group-title">${group.exam} - ${group.subject}</span>
          <div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">Tracked Core Topics</div>
        </div>
        <div style="text-align:right;">
          <span style="font-family:var(--font-mono); font-weight:bold; font-size:0.9rem;">${pct}% Complete</span>
          <div style="width: 120px;" class="progress-bar-container">
            <div class="progress-bar-fill" style="width: ${pct}%;"></div>
          </div>
        </div>
      </div>
      <div id="syllabus-topics-${group.exam}-${group.subject}"></div>
    `;
    
    list.appendChild(groupDiv);
    
    const topicsContainer = document.getElementById(`syllabus-topics-${group.exam}-${group.subject}`);
    
    group.topics.forEach(topic => {
      const row = document.createElement("div");
      row.className = "syllabus-row";
      
      const status = STATE.syllabusProgress[topic.id] || "not-started";
      let badgeClass = "not-started";
      let badgeText = "Not Started";
      
      if (status === "completed") {
        badgeClass = "completed";
        badgeText = "Revision Complete";
      } else if (status === "in-progress") {
        badgeClass = "in-progress";
        badgeText = "In Progress";
      }
      
      row.innerHTML = `
        <div class="syllabus-topic-name">${topic.name}</div>
        <div>
          <span class="status-badge ${badgeClass}">${badgeText}</span>
        </div>
        <div>
          <select class="status-selector" onchange="updateSyllabusTopicStatus('${topic.id}', this.value)">
            <option value="not-started" ${status === 'not-started' ? 'selected' : ''}>Not Started</option>
            <option value="in-progress" ${status === 'in-progress' ? 'selected' : ''}>In Progress</option>
            <option value="completed" ${status === 'completed' ? 'selected' : ''}>Completed</option>
          </select>
        </div>
      `;
      topicsContainer.appendChild(row);
    });
  });
}

function updateSyllabusTopicStatus(topicId, newStatus) {
  STATE.syllabusProgress[topicId] = newStatus;
  saveState();
  renderSyllabusTracker(); 
}

// ==========================================
// 12.5. AI PAPER SOLVER & CHATBOT MODULES
// ==========================================
// API calls are handled securely via the /api/gemini server proxy

function toggleChatbot() {
  const drawer = document.getElementById("chatbot-drawer");
  if (drawer) {
    drawer.classList.toggle("open");
  }
}

async function sendChatbotMessage() {
  const inputEl = document.getElementById("chatbot-user-input");
  const container = document.getElementById("chatbot-messages-container");
  if (!inputEl || !container) return;
  
  const text = inputEl.value.trim();
  if (!text) return;
  if (typeof deductTokens === 'function') {
    if (!deductTokens(500)) return;
  }
  
  inputEl.value = "";
  
  const userMsgEl = document.createElement("div");
  userMsgEl.className = "chat-message user";
  userMsgEl.textContent = text;
  container.appendChild(userMsgEl);
  container.scrollTop = container.scrollHeight;
  
  const loadingEl = document.createElement("div");
  loadingEl.className = "chat-message system";
  loadingEl.style.opacity = "0.7";
  loadingEl.textContent = "AI is thinking...";
  container.appendChild(loadingEl);
  container.scrollTop = container.scrollHeight;
  
  let contextText = "";
  if (typeof selectedTopicId !== 'undefined' && selectedTopicId) {
    const notesScreen = document.getElementById("screen-notes");
    if (notesScreen && notesScreen.classList.contains("active")) {
      if (typeof EXPANDED_NOTES_DATA !== 'undefined' && EXPANDED_NOTES_DATA[selectedTopicId]) {
        contextText = EXPANDED_NOTES_DATA[selectedTopicId].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').substring(0, 3000);
      } else if (typeof NOTES_DATABASE !== 'undefined') {
        const subject = NOTES_DATABASE[selectedSubjectId];
        const chapter = subject?.chapters.find(c => c.id === selectedChapterId);
        const topic = chapter?.topics.find(t => t.id === selectedTopicId);
        if (topic && topic.notes) {
          contextText = topic.notes.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').substring(0, 3000);
        }
      }
    }
  }

  let promptText = `You are an expert tutor for Indian Defence Examinations (NDA, CDS, AFCAT). Solve this user's doubt clearly, with mathematical derivations, step-by-step logic, or concise explanations depending on the question. Doubt: ${text}`;
  if (contextText.length > 50) {
    promptText += `\n\nCONTEXT (The user is currently reading this material):\n${contextText}\n\nUse this context to inform your answer if relevant. Format math with $ or $$.`;
  }
  
  try {
    const modelsToTry = ["gemini-3-flash-preview", "gemini-2.5-flash", "gemini-3.1-flash-lite", "gemini-2.0-flash", "gemini-1.5-flash", "gemini-1.5-pro"];
    let success = false;
    let replyText = "";
    let lastStatus = 0;
    
    for (const model of modelsToTry) {
      try {
        const response = await fetch('http://localhost:4000/api/gemini', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            model: model,
            contents: [{
              parts: [{
                text: promptText
              }]
            }]
          })
        });
        
        lastStatus = response.status;
        if (response.ok) {
          const resData = await response.json();
          if (resData.candidates && resData.candidates[0] && resData.candidates[0].content && resData.candidates[0].content.parts[0]) {
            replyText = resData.candidates[0].content.parts[0].text;
            success = true;
            break;
          }
        }
      } catch (err) {
        console.error(err);
      }
    }
    
    if (loadingEl.parentNode) container.removeChild(loadingEl);
    
    const replyEl = document.createElement("div");
    replyEl.className = "chat-message system";
    
    if (success) {
      let formattedText = replyText
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`([^`]+)`/g, '<code style="background-color:rgba(255,255,255,0.05); padding:2px 4px; border-radius:4px;">$1</code>')
        .replace(/\n/g, '<br/>');
      replyEl.innerHTML = formattedText;
      
      if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise([replyEl]).catch(err => console.warn("MathJax error:", err));
      }
    } else {
      if (lastStatus === 429) {
        replyEl.innerHTML = "<span style='color:var(--warning);'> AI Quota Exhausted: The Gemini free-tier quota is temporarily fully utilized. Please try again in a few minutes or switch model settings.</span>";
      } else if (lastStatus === 403) {
        replyEl.innerHTML = "<span style='color:var(--danger);'> Forbidden: The server's API key is inactive or invalid. Please contact the administrator.</span>";
      } else if (lastStatus === 413) {
        replyEl.innerHTML = "<span style='color:var(--danger);'> Request Too Large: The request payload exceeds the allowed limits.</span>";
      } else {
        replyEl.textContent = "Sorry, I am unable to connect to the doubt-solving engine right now. Please check your internet connection or try again later.";
      }
    }
    
    container.appendChild(replyEl);
    container.scrollTop = container.scrollHeight;
    
    if (window.MathJax && typeof window.MathJax.typeset === 'function') {
      window.MathJax.typeset();
    }
  } catch (e) {
    console.error(e);
    if (loadingEl.parentNode) container.removeChild(loadingEl);
    const replyEl = document.createElement("div");
    replyEl.className = "chat-message system";
    replyEl.textContent = "An error occurred. Please try again.";
    container.appendChild(replyEl);
    container.scrollTop = container.scrollHeight;
  }
}

window.toggleChatbot = toggleChatbot;
window.sendChatbotMessage = sendChatbotMessage;

function toggleCustomPageInput() {
  const select = document.getElementById("ai-paper-page-preset");
  const container = document.getElementById("ai-paper-custom-range-container");
  if (select && container) {
    container.style.display = select.value === "custom" ? "flex" : "none";
  }
}
window.toggleCustomPageInput = toggleCustomPageInput;

function initAiPaperSolver() {
  const solvePaperBtn = document.getElementById("ai-solve-paper-btn");
  const paperUpload = document.getElementById("ai-paper-upload");
  const paperResultArea = document.getElementById("paper-solver-result-area");
  
  if (solvePaperBtn && paperUpload && paperResultArea) {
    solvePaperBtn.addEventListener("click", async () => {
      const file = paperUpload.files[0];
      if (!file) {
        alert("Please select a PDF file first.");
        return;
      }
      if (typeof deductTokens === 'function') {
        if (!deductTokens(5000)) return;
      }
      
      const preset = document.getElementById("ai-paper-page-preset") ? document.getElementById("ai-paper-page-preset").value : "1-5";
      let pageText = "";
      let statusLabel = "";
      if (preset === "all") {
        pageText = "Scan the entire document page-by-page and solve all questions sequentially.";
        statusLabel = "All Pages";
      } else if (preset === "custom") {
        const start = document.getElementById("ai-paper-start-page").value || 1;
        const end = document.getElementById("ai-paper-end-page").value || 5;
        pageText = `IMPORTANT: Only extract and solve the questions found on pages ${start} to ${end} of this PDF. Ignore other pages.`;
        statusLabel = `Pages ${start} to ${end}`;
      } else {
        const [start, end] = preset.split("-");
        pageText = `IMPORTANT: Only extract and solve the questions found on pages ${start} to ${end} of this PDF. Ignore other pages.`;
        statusLabel = `Pages ${start} to ${end}`;
      }
      
      paperResultArea.style.display = "block";
      paperResultArea.className = "ai-response-area loading";
      paperResultArea.innerHTML = `
        <div style="display:flex; justify-content:center; align-items:center; flex-direction:column; padding: 40px 0;">
          <div style="border: 4px solid rgba(255,255,255,0.1); border-top: 4px solid var(--accent); border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; margin-bottom: 16px;"></div>
          <p style="color:var(--text-secondary); font-size:0.95rem;">Reading and solving ${statusLabel} of the exam paper... This may take up to a minute.</p>
        </div>
      `;
      
      const fastAnswerKey = document.getElementById("ai-paper-no-explanation") ? document.getElementById("ai-paper-no-explanation").checked : true;
      let promptText = "";
      if (fastAnswerKey) {
        promptText = `You are given a multi-page PDF of a defence exam paper. ${pageText} For each question, extract the question number and the correct answer option (a, b, c, or d). You MUST output ONLY the question number and the correct option (e.g., 'Question 1: (c)', 'Question 2: (a)', etc.). Do NOT write any explanations, question text, options, or other text whatsoever. This is critical to fit all questions within the output limit. Format as a clean markdown list or table.`;
      } else {
        promptText = `You are given a multi-page PDF of a defence exam paper. ${pageText} For each question, provide the question text, options (a, b, c, d), the correct answer, and a brief one-sentence step-by-step mathematical explanation. Keep the explanations extremely brief so we can fit all questions in that range within the output limits. Format the response beautifully using Markdown with clear heading structures.`;
      }

      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const base64Data = reader.result.split(',')[1];
          const modelsToTry = ["gemini-3-flash-preview", "gemini-2.5-flash", "gemini-3.1-flash-lite", "gemini-2.0-flash", "gemini-1.5-flash", "gemini-1.5-pro"];
          let success = false;
          let resultText = "";
          let lastStatus = 0;
          
          for (const model of modelsToTry) {
            try {
              const response = await fetch('http://localhost:4000/api/gemini', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  model: model,
                  contents: [{
                    parts: [
                      {
                        inlineData: {
                          mimeType: "application/pdf",
                          data: base64Data
                        }
                      },
                      {
                        text: promptText
                      }
                    ]
                  }]
                })
              });
              
              lastStatus = response.status;
              if (response.ok) {
                const resData = await response.json();
                if (resData.candidates && resData.candidates[0] && resData.candidates[0].content && resData.candidates[0].content.parts[0]) {
                  resultText = resData.candidates[0].content.parts[0].text;
                  success = true;
                  break;
                }
              }
            } catch (e) {
              console.error(e);
            }
          }
          
          if (success) {
            paperResultArea.className = "ai-response-area";
            let html = resultText
              .replace(/^# (.*$)/gim, '<h1 style="color: var(--accent); font-family:var(--font-logo); margin-bottom:12px;">$1</h1>')
              .replace(/^## (.*$)/gim, '<h2 style="color:var(--accent); font-family:var(--font-logo); margin-top:20px; margin-bottom:8px;">$1</h2>')
              .replace(/^### (.*$)/gim, '<h3 style="color:var(--accent-dark); margin-top:16px; margin-bottom:6px;">$1</h3>')
              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              .replace(/\*(.*?)\*/g, '<em>$1</em>')
              .replace(/`([^`]+)`/g, '<code style="background-color:rgba(255,255,255,0.05); padding:2px 6px; border-radius:4px; font-family:var(--font-mono); font-size:0.9rem;">$1</code>')
              .replace(/^\s*-\s+(.*$)/gim, '<li style="margin-left:20px; color:var(--text-secondary); margin-bottom:6px;">$1</li>')
              .replace(/^\s*\d+\.\s+(.*$)/gim, '<li style="margin-left:20px; color:var(--text-secondary); margin-bottom:6px; list-style-type: decimal;">$1</li>')
              .replace(/\n/g, '<br/>');
              
            paperResultArea.innerHTML = `
              <div style="border-bottom:1px solid var(--border); padding-bottom:12px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
                <h3 style="font-family:var(--font-logo); color: var(--accent);">STEP-BY-STEP EXAM SOLUTIONS</h3>
                <span style="font-size:0.75rem; color:var(--text-muted); font-family:var(--font-mono)">Gemini AI Solver</span>
              </div>
              <div style="line-height:1.6; font-size:0.95rem; color:var(--text-primary);">
                ${html}
              </div>
            `;
            
            if (window.MathJax && typeof window.MathJax.typeset === 'function') {
              window.MathJax.typeset();
            }
          } else {
            let errorMsgDetail = "The request timed out or the API is busy.";
            let proTip = "If you are uploading a large scanned PDF (e.g. 10MB+ or 100+ questions), the process can exceed the network timeout limit. Try splitting the PDF into a smaller selection of pages (e.g., 5-10 pages) for extremely fast, reliable solving!";
            if (lastStatus === 429) {
              errorMsgDetail = "Gemini API quota exhausted. The daily limit has been exceeded. Please switch model/tier or try again later.";
            } else if (lastStatus === 403) {
              errorMsgDetail = "Access Forbidden: The backend API key is invalid or inactive. Please verify API key configuration.";
            } else if (lastStatus === 413) {
              errorMsgDetail = "Payload Too Large: The file upload size exceeds the 50MB limit allowed by the proxy server.";
              proTip = "Please reduce the file size or compile it with fewer pages before uploading.";
            }
            
            paperResultArea.className = "ai-response-area error";
            paperResultArea.innerHTML = `
              <div style="color:var(--danger); padding:20px; text-align:center;">
                <span style="font-size:2rem;"></span>
                <p style="margin-top:10px; font-weight:600;">Failed to solve paper with Gemini AI.</p>
                <p style="font-size:0.85rem; color:var(--text-secondary); margin-top:4px;">${errorMsgDetail}</p>
                <p style="font-size:0.8rem; color:var(--text-muted); margin-top:8px; background:rgba(255,255,255,0.03); padding:8px; border-radius:4px; display:inline-block; border:1px solid rgba(255,255,255,0.05);"><strong> Pro-Tip:</strong> ${proTip}</p>
              </div>
            `;
          }
        } catch (err) {
          console.error(err);
          paperResultArea.className = "ai-response-area error";
          paperResultArea.innerHTML = `<div style="color:var(--danger); padding:20px; text-align:center;">Error parsing file. Please check if the file is a valid PDF.</div>`;
        }
      };
      reader.readAsDataURL(file);
    });
  }
  
  const solveDoubtBtn = document.getElementById("ai-solve-btn");
  if (solveDoubtBtn) {
    solveDoubtBtn.addEventListener("click", () => {
      const inputVal = document.getElementById("ai-custom-topic-input").value.trim();
      if (!inputVal) {
        alert("Please enter a concept or doubt to solve.");
        return;
      }
      
      const drawer = document.getElementById("chatbot-drawer");
      if (drawer && !drawer.classList.contains("open")) {
        drawer.classList.add("open");
      }
      
      const chatbotInput = document.getElementById("chatbot-user-input");
      if (chatbotInput) {
        chatbotInput.value = `Can you explain: ${inputVal}`;
        sendChatbotMessage();
      }
    });
  
  // OMR/Answer Sheet Evaluator logic
  const evaluateOmrBtn = document.getElementById("ai-evaluate-omr-btn");
  const omrUpload = document.getElementById("ai-omr-upload");
  const omrResultArea = document.getElementById("omr-evaluation-result-area");
  
  if (evaluateOmrBtn && omrUpload && omrResultArea) {
    evaluateOmrBtn.addEventListener("click", async () => {
      const file = omrUpload.files[0];
      const omrText = document.getElementById("ai-omr-text") ? document.getElementById("ai-omr-text").value.trim() : "";
      
      if (!file && !omrText) {
        alert("Please select a PDF/Image scan OR type your answers in the text area.");
        return;
      }
      if (typeof deductTokens === 'function') {
        if (!deductTokens(4000)) return;
      }
      
      const examName = document.getElementById("ai-eval-exam-name").value.trim();
      if (!examName) {
        alert("Please specify the Target Exam Name (e.g., CDS 1 2026).");
        return;
      }
      
      const subjectType = document.getElementById("ai-eval-subject").value;
      
      omrResultArea.style.display = "block";
      omrResultArea.className = "ai-response-area loading";
      omrResultArea.innerHTML = `
        <div style="display:flex; justify-content:center; align-items:center; flex-direction:column; padding: 40px 0;">
          <div style="border: 4px solid rgba(255,255,255,0.1); border-top: 4px solid var(--accent); border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; margin-bottom: 16px;"></div>
          <p style="color:var(--text-secondary); font-size:0.95rem;">Uploading answer sheet and initiating grading report for ${examName} (${subjectType})... This may take up to a minute.</p>
        </div>
      `;
      
      const promptText = `You are the Official UPSC Exam Grading System for NDA, CDS, and AFCAT exams.
You are given:
1. Target Exam: "${examName}"
2. Subject / Paper Type: "${subjectType}"
3. An uploaded document (which may be a formal OMR bubble sheet OR a scanned handwritten list of answers on regular paper) OR a manually typed text list below.

If a text list is provided below, use it. Otherwise, carefully read the candidate's answers from the uploaded document page-by-page. If the document is a handwritten list (like "1-a", "2: c", etc.), use your OCR vision to accurately extract the chosen option for each question number.
Manually Typed Answers (if any):
${omrText ? omrText : "None provided"}

Your task is to:
1. Identify the correct answers for the "${examName}" - "${subjectType}" paper. Rely on your pre-trained knowledge base of UPSC papers and national examinations to fetch/retrieve the official answer key for "${examName}" - "${subjectType}". If you do not have the exact key, generate a highly realistic, accurate expert-level answer key for this specific paper.
2. Read the candidate's answers from the uploaded document page-by-page. Extract the chosen options (a, b, c, or d) for each question number.
3. Compare the candidate's answers against the official answer key.
4. Calculate the performance metrics based on the official marking schemes:
   - **NDA Mathematics**: +2.5 marks for correct, -0.83 marks for incorrect.
   - **NDA General Ability Test (GAT)**: +4.0 marks for correct, -1.33 marks for incorrect.
   - **CDS (Maths, English, or General Knowledge)**: +1.0 marks for correct, -0.33 marks for incorrect.
   - **AFCAT**: +3.0 marks for correct, -1.0 marks for incorrect.
   - Unattempted questions: 0 marks.

Produce a beautiful, production-ready grading report in HTML. The output should be raw, styled HTML. Do NOT wrap it in a markdown block. Use these classes for styling (which fit the application's CSS system):
- Header container with class "panel result-card" containing the Exam Name, Subject, Candidate Net Score, and Qualification Verdict.
- A summary table with class "result-table" displaying:
  * Total Questions
  * Attempted Questions
  * Correct Answers
  * Incorrect Answers
  * Accuracy (%)
  * Final Net Score (out of max possible marks)
- A detailed question-by-question breakdown table with columns:
  * Question Number
  * Candidate Option
  * Correct Option
  * Status (use styled badges: e.g., <span style="color:var(--accent); font-weight:600;">CORRECT</span>, <span style="color:var(--danger); font-weight:600;">INCORRECT</span>, or <span style="color:var(--text-muted);">UNATTEMPTED</span>)
  * Short explanation or correct answer details.

Ensure the design is clean, readable, premium, and uses variables like var(--accent), var(--danger), var(--warning), var(--text-primary), var(--text-secondary), etc. Do NOT use any emojis or pictorial symbols anywhere in the HTML report. Keep it completely emoji-free and professional.`;

      const executeEvaluation = async (base64Data = null, fileMime = null) => {
        try {
          const modelsToTry = ["gemini-3-flash-preview", "gemini-2.5-flash", "gemini-3.1-flash-lite", "gemini-2.0-flash", "gemini-1.5-flash", "gemini-1.5-pro"];
          let success = false;
          let resultText = "";
          let lastStatus = 0;
          
          for (const model of modelsToTry) {
            try {
              const parts = [];
              if (base64Data && fileMime) {
                parts.push({
                  inlineData: {
                    mimeType: fileMime,
                    data: base64Data
                  }
                });
              }
              parts.push({ text: promptText });
              
              const response = await fetch('http://localhost:4000/api/gemini', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  model: model,
                  contents: [{ parts }]
                })
              });
              
              lastStatus = response.status;
              if (response.ok) {
                const resData = await response.json();
                if (resData.candidates && resData.candidates[0] && resData.candidates[0].content && resData.candidates[0].content.parts[0]) {
                  resultText = resData.candidates[0].content.parts[0].text;
                  success = true;
                  break;
                }
              }
            } catch (e) {
              console.error(e);
            }
          }
          
          if (success) {
            omrResultArea.className = "ai-response-area";
            let htmlContent = resultText.trim();
            if (htmlContent.startsWith("```html")) {
              htmlContent = htmlContent.substring(7);
            } else if (htmlContent.startsWith("```")) {
              htmlContent = htmlContent.substring(3);
            }
            if (htmlContent.endsWith("```")) {
              htmlContent = htmlContent.substring(0, htmlContent.length - 3);
            }
            htmlContent = htmlContent.trim();
            
            omrResultArea.innerHTML = `
              <div style="border-bottom:1px solid var(--border); padding-bottom:12px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
                <h3 style="font-family:var(--font-logo); color: var(--accent);">OMR EVALUATION REPORT</h3>
                <span style="font-size:0.75rem; color:var(--text-muted); font-family:var(--font-mono)">Gemini Auto-Grade</span>
              </div>
              <div style="line-height:1.6; font-size:0.95rem; color:var(--text-primary);">
                ${htmlContent}
              </div>
            `;
            
            if (window.MathJax && typeof window.MathJax.typeset === 'function') {
              window.MathJax.typeset();
            }
          } else {
            let errorMsgDetail = "The request timed out or the API is busy.";
            let proTip = "Make sure the uploaded file is a clear scan and fits under the proxy limit.";
            if (lastStatus === 429) {
              errorMsgDetail = "Gemini API quota exhausted.";
            } else if (lastStatus === 403) {
              errorMsgDetail = "Access Forbidden: Invalid API key.";
            } else if (lastStatus === 413) {
              errorMsgDetail = "Payload Too Large: File exceeds 50MB proxy limit.";
            }
            
            omrResultArea.className = "ai-response-area error";
            omrResultArea.innerHTML = `
              <div style="color:var(--danger); padding:20px; text-align:center;">
                <span style="font-size:2rem;"></span>
                <p style="margin-top:10px; font-weight:600;">Failed to evaluate answer sheet.</p>
                <p style="font-size:0.85rem; color:var(--text-secondary); margin-top:4px;">${errorMsgDetail}</p>
                <p style="font-size:0.8rem; color:var(--text-muted); margin-top:8px; background:rgba(255,255,255,0.03); padding:8px; border-radius:4px; display:inline-block; border:1px solid rgba(255,255,255,0.05);"><strong> Pro-Tip:</strong> ${proTip}</p>
              </div>
            `;
          }
        } catch (err) {
          console.error(err);
          omrResultArea.className = "ai-response-area error";
          omrResultArea.innerHTML = `<div style="color:var(--danger); padding:20px; text-align:center;">Error processing answer sheet. Please try again.</div>`;
        }
      };
      
      if (file) {
        const reader = new FileReader();
        reader.onload = async () => {
          const base64Data = reader.result.split(',')[1];
          const fileMime = file.type || "application/pdf";
          await executeEvaluation(base64Data, fileMime);
        };
        reader.readAsDataURL(file);
      } else {
        await executeEvaluation();
      }
    });
  }
}
}

// Dynamic Profile editing
function initUserProfile() {
  const profileDiv = document.querySelector(".user-profile");
  const avatarDiv = document.getElementById("user-avatar");
  const nameDiv = document.querySelector(".user-name");
  const rankDiv = document.getElementById("user-rank");
  
  if (!profileDiv || !avatarDiv || !nameDiv || !rankDiv) return;
  
  // Load saved profile
  const savedName = localStorage.getItem("tac_user_name") || "Defence Cadet";
  const savedRank = localStorage.getItem("tac_user_rank") || "Lieutenant";
  
  nameDiv.textContent = savedName;
  rankDiv.textContent = savedRank;
  
  // Calculate initials for avatar
  const initials = savedName.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();
  avatarDiv.textContent = initials || "CD";
  
  profileDiv.addEventListener("click", () => {
    const newName = prompt("Enter your Name:", nameDiv.textContent);
    if (newName === null) return;
    const cleanName = newName.trim();
    if (!cleanName) return;
    
    const newRank = prompt("Enter your Rank (e.g. Lieutenant, Captain, Major):", rankDiv.textContent);
    if (newRank === null) return;
    const cleanRank = newRank.trim();
    if (!cleanRank) return;
    
    localStorage.setItem("tac_user_name", cleanName);
    localStorage.setItem("tac_user_rank", cleanRank);
    
    nameDiv.textContent = cleanName;
    rankDiv.textContent = cleanRank;
    avatarDiv.textContent = cleanName.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();
  });
}


// ==========================================
// ==========================================
// 12. CURRENT AFFAIRS REFRESHER & COUNTDOWN TIMER
// ==========================================

function refreshCurrentAffairs(isNdaOrCds = false) {
  console.log(" Tactical Intelligence Update: Shuffling and resetting current affairs...");
  
  if (isNdaOrCds) {
    console.log(" Post-Exam Prep Cycle: Erasing current affairs prior to the exam month (September 2026) and noting new ones...");
    const oldMonths = ["January 2026", "February 2026", "March 2026", "April 2026", "May 2026", "June 2026", "July 2026", "August 2026"];
    let erasedCount = 0;
    oldMonths.forEach(m => {
      if (CURRENT_AFFAIRS_DB[m]) {
        delete CURRENT_AFFAIRS_DB[m];
        erasedCount++;
      }
    });
    
    // Show a visual alert of the cleanup
    setTimeout(() => {
      alert(" Post-Exam Cycle Initiated!\n\nOutdated current affairs (prior to September 2026) have been erased.\nYour study path is now updated with the next cycle's current affairs.");
    }, 500);
  }
  
  // 1. Fisher-Yates Shuffle current affairs items inside each month
  for (const month in CURRENT_AFFAIRS_DB) {
    const list = CURRENT_AFFAIRS_DB[month];
    if (Array.isArray(list)) {
      for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
      }
    }
  }
  
  // 2. Clear any answered styled buttons or correct states if rendered in the DOM
  const pane = document.getElementById("ca-content-pane");
  if (pane) {
    pane.querySelectorAll(".solution-explanation").forEach(div => {
      div.style.display = "none";
    });
    pane.querySelectorAll("button").forEach(btn => {
      btn.disabled = false;
      btn.style.opacity = "1";
      btn.style.borderColor = "";
      btn.style.backgroundColor = "";
      btn.style.color = "";
    });
  }

  // 3. Re-render Current Affairs Hub if currently viewed
  const caScreen = document.getElementById("screen-current-affairs");
  if (caScreen && caScreen.classList.contains("active")) {
    renderCurrentAffairsHub();
  }
  
  // 4. Show a visual feedback toast or system alert
  const toast = document.createElement("div");
  toast.className = "glow panel";
  toast.style.position = "fixed";
  toast.style.bottom = "24px";
  toast.style.right = "24px";
  toast.style.zIndex = "1000";
  toast.style.borderLeft = "4px solid var(--accent)";
  toast.style.padding = "16px 24px";
  toast.style.background = "var(--bg-secondary)";
  toast.style.boxShadow = "var(--shadow-lg)";
  toast.style.borderRadius = "8px";
  toast.style.fontSize = "0.9rem";
  toast.style.display = "flex";
  toast.style.alignItems = "center";
  toast.style.gap = "10px";
  toast.style.animation = "fadeIn 0.3s ease-out";
  toast.innerHTML = `
    <span style="font-size:1.2rem;"></span>
    <div>
      <div style="font-weight:600; color:var(--text-primary);">Tactical Intelligence Refreshed</div>
      <div style="font-size:0.75rem; color:var(--text-secondary); margin-top:2px;">Current affairs facts & test questions scrambled.</div>
    </div>
  `;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = "fadeIn 0.3s ease-in reverse";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

function initCountdownTimer() {
  const selector = document.getElementById("countdown-exam-selector");
  const display = document.getElementById("sidebar-countdown-timer");
  if (!selector || !display) return;

  const exams = {
    afcat: { name: "AFCAT 2 2026", date: new Date("August 8, 2026 10:00:00").getTime() },
    nda: { name: "NDA 2 2026", date: new Date("September 13, 2026 10:00:00").getTime() },
    cds: { name: "CDS 2 2026", date: new Date("September 13, 2026 09:00:00").getTime() }
  };

  // Load target exam selection from localStorage if saved
  const savedSelection = localStorage.getItem("tac_countdown_selection") || "auto";
  
  // Dynamically set default label of "auto" to the actual nearest exam name
  const nowVal = Date.now();
  let nearestKeyVal = "afcat";
  let minDiffVal = Infinity;
  for (const [key, info] of Object.entries(exams)) {
    const diff = info.date - nowVal;
    if (diff > 0 && diff < minDiffVal) {
      minDiffVal = diff;
      nearestKeyVal = key;
    }
  }
  const autoOption = selector.querySelector('option[value="auto"]');
  if (autoOption) {
    autoOption.innerText = exams[nearestKeyVal].name + " (Nearest)";
  }

  selector.value = savedSelection;

  selector.addEventListener("change", (e) => {
    localStorage.setItem("tac_countdown_selection", e.target.value);
    updateTimer();
  });

  function updateTimer() {
    const now = Date.now();
    let targetKey = selector.value;

    if (targetKey === "auto") {
      // Find the nearest future exam
      let nearestKey = "afcat";
      let minDiff = Infinity;
      for (const [key, info] of Object.entries(exams)) {
        const diff = info.date - now;
        if (diff > 0 && diff < minDiff) {
          minDiff = diff;
          nearestKey = key;
        }
      }
      targetKey = nearestKey;
    }

    const targetExam = exams[targetKey] || exams.afcat;
    const distance = targetExam.date - now;

    if (distance < 0) {
      display.innerText = "MISSION ACTIVE";
      display.style.color = "var(--danger)";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const dStr = days.toString().padStart(2, '0');
    const hStr = hours.toString().padStart(2, '0');
    const mStr = minutes.toString().padStart(2, '0');
    const sStr = seconds.toString().padStart(2, '0');

    display.innerText = `${dStr}d : ${hStr}h : ${mStr}m : ${sStr}s`;
    display.style.color = "var(--danger)";
  }

  // Update immediately and then run interval
  updateTimer();
  setInterval(updateTimer, 1000);
}

// ==========================================
// 13. APP RUN SUITE - INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initAppState();
  initUserProfile();
  initCountdownTimer();
  initTokenManager();
  
// Removed duplicate function from DOMContentLoaded
  initMotivationOfTheDay();
  switchScreen("dashboard");
  initAiPaperSolver();
  
  // Search Input for Notes & Formulas screen
  const searchInput = document.getElementById("notes-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      notesSearchQuery = e.target.value;
      renderNotesBrowser();
    });
  }
});


function togglePaperSolverMode(mode) {
  const solveContainer = document.getElementById("panel-solve-paper-container");
  const evalContainer = document.getElementById("panel-evaluate-omr-container");
  const btnSolve = document.getElementById("btn-mode-solve-paper");
  const btnEval = document.getElementById("btn-mode-evaluate-omr");
  
  if (!solveContainer || !evalContainer || !btnSolve || !btnEval) return;
  
  if (mode === "solve") {
    solveContainer.style.display = "block";
    evalContainer.style.display = "none";
    btnSolve.classList.add("active");
    btnEval.classList.remove("active");
  } else {
    solveContainer.style.display = "none";
    evalContainer.style.display = "block";
    btnSolve.classList.remove("active");
    btnEval.classList.add("active");
  }
}
window.togglePaperSolverMode = togglePaperSolverMode;


// ==========================================
// 14. TACTICAL AI TOKENS QUOTA MANAGER
// ==========================================
function initTokenManager() {
  const defaultQuota = 50000;
  const today = new Date().toDateString();
  
  let savedTokens = localStorage.getItem("tac_tokens_remaining");
  let savedDate = localStorage.getItem("tac_tokens_date");
  
  if (!savedDate || savedDate !== today) {
    savedTokens = defaultQuota;
    localStorage.setItem("tac_tokens_remaining", defaultQuota);
    localStorage.setItem("tac_tokens_date", today);
  } else {
    savedTokens = parseInt(savedTokens);
    if (isNaN(savedTokens)) savedTokens = defaultQuota;
  }
  
  updateTokenUI(savedTokens, defaultQuota);
}

function updateTokenUI(remaining, total = 50000) {
  const countDisplay = document.getElementById("sidebar-token-count");
  const barDisplay = document.getElementById("sidebar-token-bar");
  if (!countDisplay || !barDisplay) return;
  
  countDisplay.innerText = remaining.toLocaleString() + " / " + total.toLocaleString();
  const percent = (remaining / total) * 100;
  barDisplay.style.width = percent + "%";
  
  if (percent < 20) {
    barDisplay.style.background = "var(--danger)";
  } else if (percent < 50) {
    barDisplay.style.background = "var(--warning)";
  } else {
    barDisplay.style.background = "linear-gradient(90deg, var(--info), var(--accent))";
  }
}

function deductTokens(amount) {
  const defaultQuota = 50000;
  let remaining = parseInt(localStorage.getItem("tac_tokens_remaining"));
  if (isNaN(remaining)) remaining = defaultQuota;
  
  if (remaining < amount) {
    alert(" Insufficient Tactical Tokens!\n\nYour daily AI token quota is exhausted. Your operations quota will automatically reset tomorrow.");
    return false;
  }
  
  remaining -= amount;
  localStorage.setItem("tac_tokens_remaining", remaining);
  updateTokenUI(remaining, defaultQuota);
  return true;
}


// ==========================================
// 15. DYNAMIC CURRENT AFFAIRS VISITS VIEW
// ==========================================
function toggleCurrentAffairsMode(mode) {
  const monthlyContainer = document.getElementById("ca-monthly-feed-container");
  const visitsContainer  = document.getElementById("ca-visits-container");
  const ftaContainer     = document.getElementById("ca-fta-container");
  const datesContainer   = document.getElementById("ca-dates-container");
  const btnMonthly = document.getElementById("btn-ca-mode-monthly");
  const btnVisits  = document.getElementById("btn-ca-mode-visits");
  const btnFta     = document.getElementById("btn-ca-mode-fta");
  const btnDates   = document.getElementById("btn-ca-mode-dates");

  [monthlyContainer, visitsContainer, ftaContainer, datesContainer].forEach(el => { if (el) el.style.display = "none"; });
  [btnMonthly, btnVisits, btnFta, btnDates].forEach(btn => { if (btn) btn.classList.remove("active"); });

  if (mode === "monthly") {
    if (monthlyContainer) monthlyContainer.style.display = "flex";
    if (btnMonthly) btnMonthly.classList.add("active");
  } else if (mode === "visits") {
    if (visitsContainer) visitsContainer.style.display = "block";
    if (btnVisits) btnVisits.classList.add("active");
    renderCaVisitsTable();
  } else if (mode === "fta") {
    if (ftaContainer) ftaContainer.style.display = "block";
    if (btnFta) btnFta.classList.add("active");
    renderCaFtaTable();
  } else if (mode === "dates") {
    if (datesContainer) datesContainer.style.display = "block";
    if (btnDates) btnDates.classList.add("active");
    renderCaDatesTable();
  }
}
window.toggleCurrentAffairsMode = toggleCurrentAffairsMode;


function renderCaVisitsTable() {
  const wrapper = document.getElementById("ca-visits-table-wrapper");
  if (!wrapper) return;

  const meta   = window.CA_META   || {};
  const visits = window.CA_VISITS_DATA || [];

  // Update panel header with current exam cycle
  const titleEl = document.getElementById("ca-visits-panel-title");
  if (titleEl) titleEl.textContent = `International Visits & Bilateral Deals — ${meta.examCycle || "2026"} (Coverage: ${meta.coverageFrom || ""} to ${meta.coverageTo || ""})`;

  if (visits.length === 0) {
    wrapper.innerHTML = `<p style="color: var(--text-secondary); padding: 20px;">No visit data loaded for this exam cycle. Update CA_VISITS_DATA in ca_data.js.</p>`;
    return;
  }

  const th = (txt) => `<th style="padding:12px; border:1px solid var(--border); text-align: left;">${txt}</th>`;
  const td = (txt) => `<td style="padding:10px; border:1px solid var(--border);">${txt}</td>`;
  const headerRow = `<tr style="background-color: rgba(34,197,94,0.15); color: var(--accent); font-weight: bold; border-bottom: 2px solid var(--border);">` +
    th("Visit &amp; Dignitary") + th("Period / Purpose") + th("Key Deals &amp; Agreements") + `</tr>`;

  const rows = visits.map(v =>
    `<tr style="border-bottom: 1px solid var(--border);">` +
    td(`<strong>${v.visit}</strong>`) +
    td(`<strong>${v.period}:</strong> ${v.purpose}`) +
    td(v.deals) +
    `</tr>`
  ).join("");

  wrapper.innerHTML = `<table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.9rem; border: 1px solid var(--border);">${headerRow}${rows}</table>`;
}

// Data-driven renderer — reads from window.CA_FTA_DATA in ca_data.js
function renderCaFtaTable() {
  const wrapper = document.getElementById("ca-fta-table-wrapper");
  if (!wrapper) return;

  const meta = window.CA_META   || {};
  const ftas = window.CA_FTA_DATA || [];

  const titleEl = document.getElementById("ca-fta-panel-title");
  if (titleEl) titleEl.textContent = `Trade Deals & FTAs — ${meta.examCycle || "2026"} (Last Refreshed: ${meta.lastRefreshed || ""})`;

  if (ftas.length === 0) {
    wrapper.innerHTML = `<p style="color: var(--text-secondary); padding: 20px;">No FTA data loaded. Update CA_FTA_DATA in ca_data.js.</p>`;
    return;
  }

  const statusColor = (s) => {
    const sl = s.toLowerCase();
    if (sl.includes("in force") || sl.includes("ratified") || sl.includes("concluded")) return "color:#22c55e; font-weight:bold;";
    if (sl.includes("suspended")) return "color:#ef4444; font-weight:bold;";
    return "color:#f59e0b; font-weight:bold;";
  };

  const th = (txt, w) => `<th style="padding:12px; border:1px solid var(--border); text-align: left; width:${w};">${txt}</th>`;
  const headerRow = `<tr style="background-color: rgba(34,197,94,0.15); color: var(--accent); font-weight: bold; border-bottom: 2px solid var(--border);">` +
    th("Deal / Agreement", "30%") + th("Status", "18%") + th("Key Scope", "30%") + th("Strategic Significance", "22%") + `</tr>`;

  const rows = ftas.map(f =>
    `<tr style="border-bottom: 1px solid var(--border);">` +
    `<td style="padding:10px; border:1px solid var(--border);"><strong>${f.deal}</strong></td>` +
    `<td style="padding:10px; border:1px solid var(--border);"><span style="${statusColor(f.status)}">${f.status}</span></td>` +
    `<td style="padding:10px; border:1px solid var(--border);">${f.scope}</td>` +
    `<td style="padding:10px; border:1px solid var(--border); font-style:italic; color: var(--text-secondary);">${f.significance}</td>` +
    `</tr>`
  ).join("");

  wrapper.innerHTML = `<table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.88rem; border: 1px solid var(--border);">${headerRow}${rows}</table>`;
}

// Data-driven renderer — reads from window.CA_DATES_DATA in ca_data.js
function renderCaDatesTable() {
  const wrapper = document.getElementById("ca-dates-table-wrapper");
  if (!wrapper) return;

  const meta  = window.CA_META || {};
  const dates = window.CA_DATES_DATA || [];

  const titleEl = document.getElementById("ca-dates-panel-title");
  if (titleEl) titleEl.textContent = `Important Dates & Themes — ${meta.examCycle || "2026"}`;

  if (dates.length === 0) {
    wrapper.innerHTML = `<p style="color: var(--text-secondary); padding: 20px;">No dates data loaded. Update CA_DATES_DATA in ca_data.js.</p>`;
    return;
  }

  const year = new Date().getFullYear();
  const th = (txt, w) => `<th style="padding:12px; border:1px solid var(--border); text-align: left; width:${w};">${txt}</th>`;
  const headerRow = `<tr style="background-color: rgba(34,197,94,0.15); color: var(--accent); font-weight: bold; border-bottom: 2px solid var(--border);">` +
    th("Date", "10%") + th("Day / Event", "25%") + th(`${year} Theme`, "25%") + th("Significance", "40%") + `</tr>`;

  const rows = dates.map(d => {
    const themeCell = d.theme
      ? `<strong>${d.theme}</strong>`
      : `<span style="color: var(--text-muted); font-style: italic;">No official theme declared for ${year}</span>`;
    return `<tr style="border-bottom: 1px solid var(--border);">` +
      `<td style="padding:10px; border:1px solid var(--border);">${d.date}</td>` +
      `<td style="padding:10px; border:1px solid var(--border);"><strong>${d.name}</strong></td>` +
      `<td style="padding:10px; border:1px solid var(--border);">${themeCell}</td>` +
      `<td style="padding:10px; border:1px solid var(--border);">${d.significance}</td>` +
      `</tr>`;
  }).join("");

  wrapper.innerHTML = `<table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.9rem; border: 1px solid var(--border);">${headerRow}${rows}</table>`;
}

window.toggleCurrentAffairsMode = toggleCurrentAffairsMode;
window.renderCaVisitsTable = renderCaVisitsTable;
window.renderCaFtaTable = renderCaFtaTable;
window.renderCaDatesTable = renderCaDatesTable;

// ==========================================
// 14. MOTIVATION OF THE DAY (ARMED FORCES BRAVERY STORIES)
// ==========================================
const BRAVERY_STORIES = [
  {
    hero: "Major Somnath Sharma, PVC",
    award: "Param Vir Chakra (Posthumous)",
    unit: "4 Kumaon Regiment",
    year: "1947 (Battle of Badgam)",
    story: "During the 1947 Indo-Pakistani War, Major Sharma's company was heavily outnumbered by enemy raiders at Badgam. Despite a fractured arm, he ran across open ground to distribute ammunition and directed mortar fire. His final message to HQ was: 'The enemy are only 50 yards from us. We are heavily outnumbered. I shall not withdraw an inch but will fight to the last man and the last round.'"
  },
  {
    hero: "Captain Vikram Batra, PVC",
    award: "Param Vir Chakra (Posthumous)",
    unit: "13 Jammu & Kashmir Rifles (JAK RIF)",
    year: "1999 (Kargil War)",
    story: "Captain Batra led the capture of Point 5140, famously radioing the success code 'Yeh Dil Maange More!'. He then volunteered to capture Point 4875. Under devastating fire, he charged enemy bunkers, killed five enemy soldiers in close combat, and rescued an injured officer before being fatally shot. His bravery turned the tide of the war."
  },
  {
    hero: "Subedar Major Yogendra Singh Yadav, PVC",
    award: "Param Vir Chakra",
    unit: "18 Grenadiers",
    year: "1999 (Kargil War, Tiger Hill)",
    story: "Part of the commando platoon 'Ghatak', Subedar Yadav crawled up a vertical snow-clad cliff face under heavy enemy machine-gun fire to secure ropes. Despite being hit by 15 bullets and shrapnel, he crawled to the first bunker, lobbed a grenade, and killed four enemy soldiers, enabling his platoon to capture Tiger Hill."
  },
  {
    hero: "Major Sandeep Unnikrishnan, AC",
    award: "Ashoka Chakra (Posthumous)",
    unit: "51 Special Action Group, NSG",
    year: "2008 (Mumbai Attacks)",
    story: "During the rescue operation at the Taj Mahal Palace Hotel, Major Unnikrishnan led his team to clear the hotel of terrorists. When his colleague was injured, he engaged the terrorists, dragged his colleague to safety, and chased the fleeing terrorists alone. His final words to his team were: 'Don't come up, I will handle them.'"
  },
  {
    hero: "Second Lieutenant Arun Khetarpal, PVC",
    award: "Param Vir Chakra (Posthumous)",
    unit: "17 Poona Horse",
    year: "1971 (Battle of Basantar)",
    story: "At just 21 years old, Arun Khetarpal commanded a tank troop during the Battle of Basantar. When his tank was hit and caught fire, his commander ordered him to abandon it. Khetarpal refused, stating, 'My gun is still working and I will get these bastards.' He single-handedly destroyed 10 enemy tanks before his tank received a second, fatal hit."
  },
  {
    hero: "Major Shaitan Singh, PVC",
    award: "Param Vir Chakra (Posthumous)",
    unit: "13 Kumaon",
    year: "1962 (Battle of Rezang La)",
    story: "Major Shaitan Singh commanded a company of 120 men at Rezang La, Ladakh, which was attacked by over 5,000 Chinese soldiers. Despite being mortally wounded, he crawled from section to section, reorganizing his men and encouraging them to fight. His company killed over 1,000 enemy troops, standing their ground until the very last man."
  },
  {
    hero: "Naib Subedar Bana Singh, PVC",
    award: "Param Vir Chakra",
    unit: "8 Jammu & Kashmir Light Infantry (JAK LI)",
    year: "1987 (Siachen Glacier)",
    story: "Naib Subedar Bana Singh volunteered to capture the 'Quaid Post' at 21,153 feet on the Siachen Glacier, which was held by Pakistani forces. Climbing a vertical ice wall of 1,500 feet in a blizzard, Bana Singh and his team surprised the enemy, cleared the bunkers with bayonets and grenades, and captured the strategic post (now renamed 'Bana Post')."
  },
  {
    hero: "Rifleman Jaswant Singh Rawat, MVC",
    award: "Maha Vir Chakra (Posthumous)",
    unit: "4 Garhwal Rifles",
    year: "1962 (Battle of Nuranang)",
    story: "During the Sino-Indian War, Rifleman Rawat refused to retreat. With the help of two local girls, Sela and Nura, he set up firing positions at three different locations to trick the enemy into thinking they were facing a large force. He successfully held off the enemy for 72 hours, single-handedly neutralizing 300 enemy soldiers before being overrun."
  }
];

let currentMotivationIndex = 0;
let lastMotivationDateString = "";
let isMotivationRefreshRegistered = false;

function initMotivationOfTheDay() {
  const dateSpan = document.getElementById("motivation-date");
  if (!dateSpan) return;
  
  const today = new Date();
  const dateString = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  dateSpan.innerText = dateString;
  lastMotivationDateString = today.toDateString();
  
  // Calculate daily index based on day of year
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  
  currentMotivationIndex = dayOfYear % BRAVERY_STORIES.length;
  renderMotivationStory();

  // Register dynamic daily refresh check if not already done
  if (!isMotivationRefreshRegistered) {
    isMotivationRefreshRegistered = true;
    
    // Check periodically if the calendar day has changed
    setInterval(() => {
      const currentTodayString = new Date().toDateString();
      if (currentTodayString !== lastMotivationDateString) {
        initMotivationOfTheDay();
      }
    }, 60000);

    // Also check when tab becomes visible
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        const currentTodayString = new Date().toDateString();
        if (currentTodayString !== lastMotivationDateString) {
          initMotivationOfTheDay();
        }
      }
    });
  }
}

function renderMotivationStory() {
  const heroEl = document.getElementById("motivation-hero");
  const awardEl = document.getElementById("motivation-award");
  const unitEl = document.getElementById("motivation-unit");
  const yearEl = document.getElementById("motivation-year");
  const storyEl = document.getElementById("motivation-story");
  
  if (!heroEl || !awardEl || !unitEl || !yearEl || !storyEl) return;
  
  const storyObj = BRAVERY_STORIES[currentMotivationIndex];
  heroEl.innerText = storyObj.hero;
  awardEl.innerText = storyObj.award;
  unitEl.innerText = storyObj.unit;
  yearEl.innerText = storyObj.year;
  storyEl.innerText = `"${storyObj.story}"`;
}

function showNextMotivation() {
  currentMotivationIndex = (currentMotivationIndex + 1) % BRAVERY_STORIES.length;
  renderMotivationStory();
}

window.initMotivationOfTheDay = initMotivationOfTheDay;
window.showNextMotivation = showNextMotivation;

async function generateDetailedNotesOnDemand(subjectId, chapterId, topicId) {
  const subject = NOTES_DATABASE[subjectId];
  const chapter = subject.chapters.find(c => c.id === chapterId);
  const topic = chapter.topics.find(t => t.id === topicId);
  if (!topic) return;

  const cacheKey = `tac_ai_notes_${topicId}`;
  
  let modal = document.getElementById('ai-detailed-notes-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'ai-detailed-notes-modal';
    modal.className = 'cbt-overlay';
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.zIndex = '1000';
    modal.style.backgroundColor = 'var(--bg-primary)';
    document.body.appendChild(modal);
  } else {
    modal.style.display = 'flex';
  }

  modal.innerHTML = `
    <div class="cbt-header">
      <div class="cbt-exam-title"> AIDetailed Notes: ${topic.title}</div>
      <div style="display: flex; gap: 8px;">
        <button id="btn-copy-notes" class="btn-secondary" style="padding: 4px 12px; display: none;"> Copy</button>
        <button id="btn-download-notes" class="btn-primary" style="padding: 4px 12px; display: none;">Save PDF</button>
        <button class="btn-secondary" onclick="document.getElementById('ai-detailed-notes-modal').style.display='none'">Close</button>
      </div>
    </div>
    <div style="padding: 32px; max-width: 900px; margin: 0 auto; width: 100%; overflow-y: auto; height: 100%;">
      <div class="panel" id="ai-notes-content-panel" style="margin-bottom: 50px;">
        <h3 style="color: var(--accent); margin-bottom: 16px;">Generating comprehensive explanation...</h3>
        <p style="color: var(--text-secondary);">Please wait while AI constructs the detailed notes from start to end.</p>
        <div style="margin-top:20px; font-size:2rem;"></div>
      </div>
    </div>
  `;

  const contentArea = modal.querySelector('#ai-notes-content-panel');
  const btnCopy = modal.querySelector('#btn-copy-notes');
  const btnDownload = modal.querySelector('#btn-download-notes');

  // Check cache first
  const cachedData = localStorage.getItem(cacheKey);
  if (cachedData) {
    console.log("Loading AI notes from cache for", topicId);
    renderAiNotes(cachedData, contentArea, btnCopy, btnDownload, topic.title);
    return;
  }

  let syllabusText = "";
  if (window.OFFICIAL_SYLLABUS_DATA && window.OFFICIAL_SYLLABUS_DATA[topicId]) {
    syllabusText = `\n\nEnsure you exhaustively cover the following official UPSC/AFCAT syllabus requirements: ${window.OFFICIAL_SYLLABUS_DATA[topicId]}`;
  }

  let pyqText = "";
  if (window.PYQ_TRENDS_DATA && window.PYQ_TRENDS_DATA[topicId]) {
    pyqText = `\n\nActual Questions, numerical patterns, and conceptual trends from the last 7 years (2020-2026) of UPSC CDS, NDA, and AFCAT exams for this topic: ${window.PYQ_TRENDS_DATA[topicId]}`;
  }

  const prompt = `You are an elite academic tutor and strategist for Indian Defence Examinations (UPSC NDA, CDS, AFCAT). Your task is to provide an EXHAUSTIVE, highly detailed, and deep-dive explanation of the topic "${topic.title}" from the chapter "${chapter.title}" in ${subject.title}. 

Explain the entire topic from start to end with maximum depth. Do not hold back on complexity.
- For theoretical subjects (History, Polity, Geography, Biology), provide extensive theoretical background, underlying principles, graduate-level conceptual context, and historical timelines so the user grasps the complete picture. Include exceptions, edge cases, and nuanced constitutional/historical debates where applicable.
- For quantitative subjects (Maths, Physics, Chemistry), provide full derivations of key formulas, step-by-step methodology, and advanced application scenarios.

Make it easy to read with headings, bullet points, and clear examples. Aim for a comprehensive, textbook-level depth (1000+ words if necessary).${syllabusText}${pyqText}

Ensure the generated notes are extremely thorough, leaving no stone unturned, covering all aspects to the absolute maximum depth required to answer the hardest possible questions from the aforementioned PYQ trends.

Formatting Guidelines for maximum visual appeal:
- For any memory aids or mnemonics, wrap them in: <div class="mnemonic-box"><strong>Mnemonic:</strong> description</div>
- For common errors, traps, or misconceptions, wrap them in: <div class="trap-box"><strong>Common Exam Trap:</strong> explanation of the trap</div>
- For high-level tips or strategic suggestions, wrap them in: <div class="strategist-tip"><strong>Strategist Tip:</strong> tip text</div>
- Wrap formulas, equations, variables, or article numbers in <code> tags (e.g. <code>sin²Î¸ + cos²Î¸ = 1</code> or <code>Article 338B</code>).
- Use tables (<table>, <tr>, <th>, <td>) to compare concepts or summarize facts.
- Use lists (<ul>, <li>) for multiple points.`;
  const model = 'gemini-3-flash-preview';
  
  try {
    const response = await fetch('http://localhost:4000/api/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: model,
        stream: true,
        contents: [{ parts: [{ text: prompt }] }]
      })
    });
    
    if (!response.ok || !response.body) {
      throw new Error("Failed to fetch stream");
    }

    contentArea.innerHTML = `
      <h3 style="color: var(--accent); margin-bottom: 20px;">Detailed AI Explanation</h3>
      <div id="ai-stream-text" style="line-height: 1.8; color: var(--text-primary); font-size: 0.95rem;"></div>
    `;
    const streamContainer = document.getElementById('ai-stream-text');
    
    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let buffer = "";
    let finalText = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      
      const chunk = decoder.decode(value, { stream: true });
      buffer += chunk;
      
      const lines = buffer.split('\n');
      // Keep the last line in buffer as it could be incomplete
      buffer = lines.pop(); 
      
      for (const line of lines) {
        if (line.startsWith('data: ')) {
          try {
            const dataStr = line.replace('data: ', '').trim();
            if (dataStr && dataStr !== '[DONE]') {
              const parsed = JSON.parse(dataStr);
              if (parsed.candidates && parsed.candidates[0].content && parsed.candidates[0].content.parts[0]) {
                finalText += parsed.candidates[0].content.parts[0].text;
                // Render the complete accumulated text formatted so far
                streamContainer.innerHTML = formatTextChunk(finalText);
              }
            }
          } catch(e) {
            console.error("[STREAM] Error parsing line:", e);
          }
        }
      }
    }
    
    // Process any remaining data in the buffer
    if (buffer && buffer.startsWith('data: ')) {
      try {
        const dataStr = buffer.replace('data: ', '').trim();
        if (dataStr && dataStr !== '[DONE]') {
          const parsed = JSON.parse(dataStr);
          if (parsed.candidates && parsed.candidates[0].content && parsed.candidates[0].content.parts[0]) {
            finalText += parsed.candidates[0].content.parts[0].text;
          }
        }
      } catch(e) {}
    }

    // Fallback in case of raw JSON response instead of SSE
    if (!finalText) {
      try {
        const parsed = JSON.parse(buffer);
        if (parsed.candidates) finalText = parsed.candidates[0].content.parts[0].text;
      } catch(e) {}
    }
    
    localStorage.setItem(cacheKey, finalText);
    renderAiNotes(finalText, contentArea, btnCopy, btnDownload, topic.title);

  } catch (err) {
    console.error('Gemini API error:', err);
    contentArea.innerHTML = `
      <h3 style="color: var(--danger);">Failed to generate notes</h3>
      <p style="color: var(--text-secondary);">Could not reach the AI service or stream was interrupted. ${err.message}</p>
    `;
  }
}

function formatTextChunk(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`/g, '')
    .replace(/\n/g, '<br/>');
}

function renderAiNotes(text, contentArea, btnCopy, btnDownload, title) {
  let formattedText = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code style="background-color:rgba(255,255,255,0.05); padding:2px 4px; border-radius:4px;">$1</code>')
    .replace(/^#{1,3} (.+)$/gm, '<h4 style="color:var(--accent); margin:16px 0 8px;">$1</h4>')
    .replace(/\n/g, '<br/>');

  contentArea.innerHTML = `
    <h3 style="color: var(--accent); margin-bottom: 20px;">Detailed AI Explanation</h3>
    <div id="ai-final-notes" style="line-height: 1.8; color: var(--text-primary); font-size: 0.95rem;">
      ${formattedText}
    </div>
  `;
  
  if (window.MathJax && typeof window.MathJax.typeset === 'function') {
    window.MathJax.typeset();
  }
  
  // Show Action Buttons
  btnCopy.style.display = 'block';
  btnCopy.onclick = () => {
    navigator.clipboard.writeText(text);
    btnCopy.innerText = "Copied Copied";
    setTimeout(() => btnCopy.innerText = " Copy", 2000);
  };
  
  // Basic mock for PDF download (In real app, would use html2pdf.js)
  btnDownload.style.display = 'block';
  btnDownload.onclick = () => {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_notes.txt`;
    a.click();
  };
}

window.renderDashboardWeaknessHeatmap = function() {
  const container = document.getElementById("dashboard-weakness-heatmap");
  if (!container) return;
  if (!STATE.weaknessStats || Object.keys(STATE.weaknessStats).length === 0) {
    container.innerHTML = `<p style="color:var(--text-muted); font-size: 0.9rem;">No weakness data available yet. Take some CBT mocks!</p>`;
    return;
  }
  
  let html = "";
  for (const [topicId, stats] of Object.entries(STATE.weaknessStats)) {
    if (stats.attempts > 0) {
      const errorRate = stats.incorrect / stats.attempts;
      if (errorRate > 0) {
        let color = "var(--warning)";
        if (errorRate > 0.5) color = "var(--danger)";
        
        // Try to find topic title
        let topicTitle = topicId;
        if (typeof AI_TOPIC_TEMPLATES !== 'undefined' && AI_TOPIC_TEMPLATES[topicId]) {
          topicTitle = AI_TOPIC_TEMPLATES[topicId].topic;
        }
        
        html += `<div style="background: rgba(255,255,255,0.05); border-left: 3px solid ${color}; padding: 6px 12px; border-radius: 4px; font-size: 0.85rem; display: flex; justify-content: space-between; align-items: center; width: 100%; max-width: 48%; box-sizing: border-box;">
          <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 70%;" title="${topicTitle}">${topicTitle}</span>
          <span style="color: ${color}; font-weight: bold; font-family: var(--font-mono);">${Math.round(errorRate * 100)}% Error</span>
        </div>`;
      }
    }
  }
  
  if (html === "") {
    container.innerHTML = `<p style="color:var(--text-muted); font-size: 0.9rem;">Great job! No major weaknesses detected.</p>`;
  } else {
    container.innerHTML = html;
  }
};

window.updateDashboardSrsQueue = function() {
  const countEl = document.getElementById("srs-due-count");
  if (!countEl) return;
  
  let dueCount = 0;
  const now = Date.now();
  if (STATE.srsData) {
    for (const [topicId, data] of Object.entries(STATE.srsData)) {
      if (data.nextReview && data.nextReview <= now) {
        dueCount++;
      }
    }
  }
  countEl.innerText = dueCount;
  countEl.style.color = dueCount > 0 ? "var(--warning)" : "var(--info)";
};

let currentSrsQueue = [];
let currentSrsIndex = 0;

window.launchSrsReview = function() {
  if (!STATE.srsData) STATE.srsData = {};
  const now = Date.now();
  currentSrsQueue = Object.keys(STATE.srsData).filter(tid => STATE.srsData[tid].nextReview <= now);
  
  if (currentSrsQueue.length === 0) {
    alert("No items due for review! Excellent work.");
    return;
  }
  
  currentSrsIndex = 0;
  document.getElementById('srs-review-modal').style.display = 'flex';
  renderCurrentSrsItem();
};

function renderCurrentSrsItem() {
  const topicId = currentSrsQueue[currentSrsIndex];
  const srsData = STATE.srsData[topicId];
  
  // Try to find topic title and content
  let topicTitle = topicId;
  let questionContent = srsData.question || "Do you remember the key concepts for this topic?";
  let answerContent = srsData.answer || "Review the notes for this topic to refresh your memory.";
  
  if (typeof AI_TOPIC_TEMPLATES !== 'undefined' && AI_TOPIC_TEMPLATES[topicId]) {
    topicTitle = AI_TOPIC_TEMPLATES[topicId].topic;
  }

  document.getElementById('srs-progress').innerText = `${currentSrsIndex + 1} / ${currentSrsQueue.length}`;
  document.getElementById('srs-topic-label').innerText = topicTitle;
  document.getElementById('srs-question-text').innerHTML = questionContent;
  document.getElementById('srs-answer-text').innerHTML = answerContent;
  
  // Reset UI state
  document.getElementById('srs-answer-container').style.display = 'none';
  document.getElementById('srs-controls-reveal').style.display = 'block';
  document.getElementById('srs-controls-grade').style.display = 'none';
}

window.revealSrsAnswer = function() {
  document.getElementById('srs-answer-container').style.display = 'block';
  document.getElementById('srs-controls-reveal').style.display = 'none';
  document.getElementById('srs-controls-grade').style.display = 'flex';
};

window.gradeSrsItem = function(quality) {
  const topicId = currentSrsQueue[currentSrsIndex];
  let srs = STATE.srsData[topicId];
  const now = Date.now();
  
  srs.repetitions = (srs.repetitions || 0) + 1;
  srs.efactor = Math.max(1.3, (srs.efactor || 2.5) + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));
  
  if (quality < 3) {
      srs.repetitions = 0;
      srs.interval = 1;
  } else {
      if (srs.repetitions === 1) srs.interval = 1;
      else if (srs.repetitions === 2) srs.interval = 6;
      else srs.interval = Math.round(srs.interval * srs.efactor);
  }
  
  // Set next review to X days from now
  srs.nextReview = now + srs.interval * 24 * 60 * 60 * 1000;
  
  saveState(); // Ensure state is persisted immediately
  updateDashboardMetrics(); // update UI counters
  currentSrsIndex++;
  
  if (currentSrsIndex < currentSrsQueue.length) {
    renderCurrentSrsItem();
  } else {
    document.getElementById('srs-review-modal').style.display = 'none';
    alert("SRS Review Complete! Scheduling metadata updated.");
  }
};

// ==========================================
// 12. AI TACTICAL STRATEGY BUILDER
// ==========================================
async function generateAiStrategy() {
  const container = document.getElementById("strategy-report-container");
  container.style.display = "block";
  container.className = "ai-response-area loading";
  container.innerHTML = `
    <div style="text-align: center; margin-top: 20px;">
      <div class="cbt-spinner" style="border-color: var(--info); border-top-color: transparent; width: 40px; height: 40px; border-width: 4px; margin: 0 auto 16px;"></div>
      <p style="color: var(--info); font-family: var(--font-logo); letter-spacing: 1px; font-weight: 600;">ANALYZING CADET PROGRESS...</p>
      <p style="color: var(--text-muted); font-size: 0.85rem;">Gemini AI is reviewing your syllabus mastery and CBT scores...</p>
    </div>
  `;

  // Calculate Progress Metrics
  let totalTopics = 0;
  let completedTopics = 0;
  for (const subjectId in NOTES_DATABASE) {
    NOTES_DATABASE[subjectId].chapters.forEach(c => {
      c.topics.forEach(t => {
        totalTopics++;
        if (STATE.syllabusProgress[t.id] === 'completed') completedTopics++;
      });
    });
  }
  const syllabusPct = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
  const formulasRead = STATE.readFormulasCount || 0;
  
  let cbtAvg = 0;
  if (STATE.cbtScores && STATE.cbtScores.length > 0) {
    const sum = STATE.cbtScores.reduce((acc, val) => acc + val, 0);
    cbtAvg = Math.round(sum / STATE.cbtScores.length);
  }

  const promptText = `You are an expert, strict, and motivating military exam strategist for the NDA, CDS, and AFCAT exams.
The user is a cadet preparing for these exams.
Here is their current operational progress:
- Syllabus Mastery: ${completedTopics} out of ${totalTopics} topics completed (${syllabusPct}%).
- High-Yield Formulas Memorized: ${formulasRead}.
- Average CBT Mock Test Score: ${cbtAvg}%.

Provide a harsh but highly effective tactical action plan for the next 7 days. 
Tell them exactly what they are failing at based on these numbers, what subjects they need to hammer hard, and how to improve.
Format the response cleanly with markdown headings, bullet points, and strong military phrasing. Keep it concise (under 250 words). Do NOT use any emojis in the response.`;

  try {
    const response = await fetch('http://localhost:4000/api/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: promptText, model: 'gemini-2.5-flash', contents: [{ parts: [{ text: promptText }] }] })
    });

    if (!response.ok) throw new Error("Proxy error");

    const data = await response.json();
    let replyText = data.text || "No response received.";
    
    // Format Markdown
    let formattedText = replyText
      .replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--info);">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/^#{1,3} (.+)$/gm, '<h4 style="color:var(--accent); margin:16px 0 8px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:4px;">$1</h4>')
      .replace(/\n/g, '<br/>');

    container.className = "ai-response-area fade-in";
    container.innerHTML = `
      <div style="padding: 16px;">
        <h3 style="color: var(--info); font-family: var(--font-logo); margin-bottom: 16px; letter-spacing: 1px;">[ STRATEGY UPLINK SECURED ]</h3>
        <div style="line-height: 1.8;">${formattedText}</div>
      </div>
    `;
  } catch (error) {
    console.error("Strategy AI Error:", error);
    container.className = "ai-response-area";
    container.innerHTML = `<p style="color: var(--danger);">Failed to connect to Strategy AI. Ensure your Node.js proxy server is running on port 4000.</p>`;
  }
}

// ==========================================
// 15. ENGLISH VOCAB BUILDER MODULE
// ==========================================

let activeVocabWord = null;

function renderVocabBuilder() {
  if (!activeVocabWord) {
    getWordOfTheDay();
  } else {
    displayVocabWord(activeVocabWord);
  }
}

function getWordOfTheDay() {
  if (typeof ENGLISH_VOCAB_DB === 'undefined' || ENGLISH_VOCAB_DB.length === 0) {
    document.getElementById('vocab-word').innerText = "Database Offline";
    return;
  }
  
  // Create a predictable index based on today's date
  const today = new Date();
  const dateString = today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate();
  let hash = 0;
  for (let i = 0; i < dateString.length; i++) {
    hash = dateString.charCodeAt(i) + ((hash << 5) - hash);
  }
  hash = Math.abs(hash);
  
  const index = hash % ENGLISH_VOCAB_DB.length;
  activeVocabWord = ENGLISH_VOCAB_DB[index];
  
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('vocab-date-label').innerText = today.toLocaleDateString('en-US', dateOptions);
  
  displayVocabWord(activeVocabWord);
}

function loadRandomWord() {
  if (typeof ENGLISH_VOCAB_DB === 'undefined' || ENGLISH_VOCAB_DB.length === 0) return;
  
  const index = Math.floor(Math.random() * ENGLISH_VOCAB_DB.length);
  activeVocabWord = ENGLISH_VOCAB_DB[index];
  
  document.getElementById('vocab-date-label').innerText = "Random Word Mode";
  
  displayVocabWord(activeVocabWord);
}

function displayVocabWord(wordObj) {
  document.getElementById('vocab-word').innerText = wordObj.word.charAt(0).toUpperCase() + wordObj.word.slice(1);
  document.getElementById('vocab-pos').innerText = wordObj.pos || 'Unknown POS';
  document.getElementById('vocab-meaning').innerText = wordObj.meaning || 'No meaning provided.';
  
  const syns = wordObj.synonyms || wordObj.expected || 'None';
  document.getElementById('vocab-synonyms').innerText = syns;
  
  const ants = wordObj.antonyms || 'None';
  document.getElementById('vocab-antonyms').innerText = ants;
}

function startVocabQuiz() {
  if (typeof ENGLISH_VOCAB_DB === 'undefined' || ENGLISH_VOCAB_DB.length < 20) {
    alert("Vocab database is loading or offline.");
    return;
  }
  
  const quizContainer = document.getElementById('vocab-quiz-container');
  quizContainer.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">Generating high-yield drill...</p>';
  
  // Clear previous quiz state
  window.vocabQuizState = {};
  
  // Pick 5 random questions
  const questions = [];
  while(questions.length < 5) {
    const w = ENGLISH_VOCAB_DB[Math.floor(Math.random() * ENGLISH_VOCAB_DB.length)];
    // Ensure word has synonyms/antonyms
    if (!w.synonyms || w.synonyms === '—' || !w.antonyms || w.antonyms === '—') continue;
    
    // Type 0: Synonym, Type 1: Antonym
    const type = Math.random() > 0.5 ? 'synonym' : 'antonym';
    const correctAns = type === 'synonym' ? w.synonyms.split(',')[0].trim() : w.antonyms.split(',')[0].trim();
    
    // Pick 3 wrong options from other words
    const options = [correctAns];
    while(options.length < 4) {
      const wrongW = ENGLISH_VOCAB_DB[Math.floor(Math.random() * ENGLISH_VOCAB_DB.length)];
      if (wrongW.word !== w.word) {
        let wrongAns = '';
        if (type === 'synonym' && wrongW.synonyms && wrongW.synonyms !== '—') {
          wrongAns = wrongW.synonyms.split(',')[0].trim();
        } else if (type === 'antonym' && wrongW.antonyms && wrongW.antonyms !== '—') {
          wrongAns = wrongW.antonyms.split(',')[0].trim();
        } else {
          wrongAns = wrongW.word;
        }
        
        if (wrongAns && !options.includes(wrongAns)) {
          options.push(wrongAns);
        }
      }
    }
    
    // Shuffle options
    options.sort(() => Math.random() - 0.5);
    
    questions.push({
      word: w.word,
      type: type,
      options: options,
      correct: correctAns
    });
  }
  
  // Render Quiz
  let html = `<div style="background: rgba(0,0,0,0.2); padding: 16px; border-radius: 8px;">`;
  questions.forEach((q, idx) => {
    html += `
      <div class="vocab-q-card" style="margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px solid rgba(255,255,255,0.05);">
        <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 12px; font-size: 1.05rem;">
          <span style="color: var(--accent); margin-right: 8px;">Q${idx+1}.</span> 
          What is the closest <strong style="color: ${q.type === 'synonym' ? 'var(--info)' : 'var(--danger)'}; text-transform: uppercase;">${q.type}</strong> of the word <em>"${q.word.toUpperCase()}"</em>?
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
    `;
    
    q.options.forEach((opt, oIdx) => {
      html += `
        <button class="exam-btn vocab-opt-btn" id="vocab-opt-${idx}-${oIdx}" style="text-align: left; background: rgba(255,255,255,0.03);" onclick="checkVocabAnswer(${idx}, ${oIdx}, '${opt.replace(/'/g, "\\'")}', '${q.correct.replace(/'/g, "\\'")}')">
          ${String.fromCharCode(65 + oIdx)}. ${opt}
        </button>
      `;
    });
    
    html += `
        </div>
        <div id="vocab-feedback-${idx}" style="margin-top: 12px; font-size: 0.9rem; display: none;"></div>
      </div>
    `;
  });
  
  html += `
    <div style="text-align: center; margin-top: 20px;">
      <button class="btn-primary" onclick="startVocabQuiz()" style="width: auto; padding: 10px 24px;">Generate New Drill</button>
    </div>
  </div>`;
  
  quizContainer.innerHTML = html;
}

window.vocabQuizState = {};

function checkVocabAnswer(qIdx, oIdx, selectedOpt, correctOpt) {
  // Prevent double clicking
  if (window.vocabQuizState[qIdx]) return;
  window.vocabQuizState[qIdx] = true;
  
  const isCorrect = selectedOpt === correctOpt;
  const btn = document.getElementById(`vocab-opt-${qIdx}-${oIdx}`);
  const feedback = document.getElementById(`vocab-feedback-${qIdx}`);
  
  // Disable all buttons in this question
  for(let i=0; i<4; i++) {
    const b = document.getElementById(`vocab-opt-${qIdx}-${i}`);
    if(b) b.style.opacity = "0.5";
    if(b && b.innerText.includes(correctOpt)) {
      b.style.background = "rgba(34, 197, 94, 0.2)";
      b.style.borderColor = "var(--accent)";
      b.style.opacity = "1";
    }
  }
  
  if (isCorrect) {
    btn.style.background = "rgba(34, 197, 94, 0.2)";
    btn.style.borderColor = "var(--accent)";
    feedback.innerHTML = `<span style="color: var(--accent); font-weight: 600;">Correct!</span>`;
  } else {
    btn.style.background = "rgba(239, 68, 68, 0.2)";
    btn.style.borderColor = "var(--danger)";
    btn.style.opacity = "1";
    feedback.innerHTML = `<span style="color: var(--danger); font-weight: 600;">Incorrect.</span> The correct answer was <strong>${correctOpt}</strong>.`;
  }
  
  feedback.style.display = "block";
}

window.renderVocabBuilder = renderVocabBuilder;
window.getWordOfTheDay = getWordOfTheDay;
window.loadRandomWord = loadRandomWord;
window.displayVocabWord = displayVocabWord;
window.startVocabQuiz = startVocabQuiz;
window.checkVocabAnswer = checkVocabAnswer;
