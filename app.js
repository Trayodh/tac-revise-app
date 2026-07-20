// Tac-Revise Application Logic
// Dependencies: data.js (which contains NOTES_DATABASE, window.CURRENT_AFFAIRS_DB, etc.)
// ==========================================
// 0. STANDALONE AI INTERCEPTOR (For Android/Capacitor App Support)
// ==========================================
// This intercepts fetch calls to the node backend (/api/gemini) and routes them directly 
// to Cerebras API so the app can function completely offline as a standalone mobile app!
const originalFetch = window.fetch;
window.fetch = async function() {
    const url = typeof arguments[0] === 'string' ? arguments[0] : (arguments[0] instanceof Request ? arguments[0].url : '');
    
    // Web Bypass: Let Vercel handle the API routing using its secure backend 
    // since Vercel does not inject environment variables into static JS files.
    // The interceptor is ONLY for Android/Capacitor standalone mode.
    const isCapacitor = window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform();
    if (!isCapacitor && url.includes('/api/gemini')) {
        return originalFetch.apply(this, arguments);
    }
    
    // Intercept backend Current Affairs calls to serve them completely offline!
    if (url.includes('/api/daily-current-affairs')) {
        let payload = {};
        if (window.CURRENT_AFFAIRS_DB) {
            // Need to return array for current_affairs parser which expects Array if successful
            // Or wait, window.CURRENT_AFFAIRS_DB is an object map! Let's return just the object?
            // Actually app.js line 1089 checks `if (Array.isArray(data))`. 
            // The API returns the raw parsed JSON which is an array of items for TODAY.
            // But if offline, we can just return an empty array, and it falls back to the database!
            payload = [];
        }
        return new Response(JSON.stringify(payload), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    // Intercept backend AI calls
    if (url.includes('/api/gemini')) {
        try {
            const reqBody = typeof arguments[1].body === 'string' ? JSON.parse(arguments[1].body) : arguments[1].body;
            let messages = [];
            let systemInstructionText = "";
            let promptText = "";
            
            if (reqBody.systemInstruction && reqBody.systemInstruction.parts && reqBody.systemInstruction.parts[0].text) {
               systemInstructionText = reqBody.systemInstruction.parts[0].text;
               messages.push({ role: 'system', content: systemInstructionText });
            }
            
            if (reqBody.contents && reqBody.contents.length > 0) {
                promptText = reqBody.contents[0].parts
                    .filter(p => p.text)
                    .map(p => p.text)
                    .join('\n');
                messages.push({ role: 'user', content: promptText });
            }
            
            // ----------------------------------------------------
            // MULTI-MODEL INTELLIGENT ROUTER
            // ----------------------------------------------------
            let targetAI = 'gemini'; // Default fallback (Notes, Learn/Explain, Current Affairs, etc.)
            const combinedText = (systemInstructionText + " " + promptText).toLowerCase();
            
            // 0. Explicit Override for Detailed Notes -> Gemini
            if (
                combinedText.includes("exhaustive, deep-dive") ||
                combinedText.includes("academic intelligence engine")
            ) {
                targetAI = 'gemini';
            }
            // 1. Groq (MCQs, Flashcards, Revision plans, Subject classification)
            else if (
                combinedText.includes("multiple choice") || 
                combinedText.includes("mcq") ||
                combinedText.includes("flashcard") ||
                combinedText.includes("spaced repetition") ||
                combinedText.includes("revision plan") ||
                combinedText.includes("study plan") ||
                combinedText.includes("classify") ||
                combinedText.includes("categorize")
            ) {
                targetAI = 'cerebras';
            }
            // 2. Gemini (Chatbot / Dronacharya / Tell Me More / Wiki Links)
            else if (
                combinedText.includes("chatbot") || 
                combinedText.includes("dronacharya") ||
                combinedText.includes("conversational") ||
                combinedText.includes("educational preview")
            ) {
                targetAI = 'gemini';
            }
            // 3. Fallback
            else {
                targetAI = 'gemini';
            }
            
            // ----------------------------------------------------
            // API EXECUTION
            // ----------------------------------------------------
            let aiText = "";
            let responseStatus = 200;
            const isJsonRequired = (reqBody.generationConfig?.response_mime_type === 'application/json');
            
            // DIRECT CLIENT-SIDE API CALLS
            let callSuccessful = false;

            if (targetAI === 'gemini') {
                try {
                    const res = await originalFetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=PROCESS_ENV_GEMINI_KEY`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(reqBody)
                    });
                    if (!res.ok) throw new Error("Gemini API Error: " + await res.text());
                    const data = await res.json();
                    if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
                        aiText = data.candidates[0].content.parts.map(p => p.text).join("");
                    } else {
                        aiText = "";
                    }
                    callSuccessful = true;
                } catch (err) {
                    console.warn("Gemini API call failed, falling back to Cerebras:", err);
                    targetAI = 'cerebras';
                }
            }
            
            if (targetAI === 'cerebras' && !callSuccessful) {
                try {
                    const cerebrasBody = {
                        model: 'gpt-oss-120b',
                        messages: messages,
                        temperature: reqBody.generationConfig?.temperature || 0.7,
                        max_completion_tokens: 1500
                    };
                    if (isJsonRequired) cerebrasBody.response_format = { type: 'json_object' };

                    const res = await originalFetch('https://api.cerebras.ai/v1/chat/completions', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer PROCESS_ENV_CEREBRAS_KEY'
                        },
                        body: JSON.stringify(cerebrasBody)
                    });
                    if (!res.ok) throw new Error("Cerebras API Error: " + await res.text());
                    const data = await res.json();
                    aiText = data.choices?.[0]?.message?.content || "";
                    callSuccessful = true;
                } catch (err) {
                    throw new Error("Cerebras Fallback Error: " + err.message);
                }
            }
            
            // Reconstruct Gemini format for the frontend parsing logic
            const fakeGeminiResponse = {
                candidates: [
                    { content: { parts: [{ text: aiText }] } }
                ]
            };
            
            return new Response(JSON.stringify(fakeGeminiResponse), {
                status: responseStatus,
                headers: { 'Content-Type': 'application/json' }
            });
        } catch (e) {
            console.error("AI Intercept Error:", e);
            // Fallback response if offline or errored
            return new Response(JSON.stringify({
                candidates: [{ content: { parts: [{ text: "```json\n[]\n```\n\n_AI uplink failed (" + e.message + "). Working in offline mode._" }] } }]
            }), { status: 200, headers: { 'Content-Type': 'application/json' }});
        }
    }
    
    return originalFetch.apply(window, arguments);
};

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

window.updateBreadcrumbs = function() {
  const container = document.getElementById('global-breadcrumbs');
  const list = document.getElementById('breadcrumb-list');
  const schema = document.getElementById('breadcrumb-schema');
  
  if (!container || !list) return;
  
  let breadcrumbs = [];
  
  // Base Home
  breadcrumbs.push({ label: 'Home', action: () => switchScreen('dashboard') });
  
  const screenId = typeof STATE !== 'undefined' ? STATE.currentScreen : 'dashboard';
  
  // Mapping of screens to base names
  const screenNames = {
    'notes': 'Study Material',
    'current-affairs': 'Current Affairs',
    'cbt-mock-hub': 'Mock Tests',
    'ai-console': 'Ask Dronacharya',
    'paper-solver': 'Paper Solver',
    'vocab-builder': 'Vocab Builder',
    'advanced-solver': 'Advanced Solver',
    'question-bank': 'Question Bank'
  };
  
  if (screenId !== 'dashboard' && screenNames[screenId]) {
    breadcrumbs.push({ label: screenNames[screenId], action: () => {
      if (screenId === 'notes') {
        window.backToNotesSubjects();
      } else {
        switchScreen(screenId);
      }
    }});
  }
  
  // Handle specifics for Notes / Study Material
  if (screenId === 'notes') {
    if (typeof currentSubjectFilter !== 'undefined' && currentSubjectFilter !== 'all' && typeof NOTES_DATABASE !== 'undefined' && NOTES_DATABASE[currentSubjectFilter]) {
      const subject = NOTES_DATABASE[currentSubjectFilter];
      breadcrumbs.push({ label: subject.title, action: () => {
         const subjectsView = document.getElementById('notes-view-subjects');
         const chaptersView = document.getElementById('notes-view-chapters');
         const contentView = document.getElementById('notes-view-content');
         if (chaptersView) chaptersView.style.display = 'block';
         if (contentView) contentView.style.display = 'none';
         if (subjectsView) subjectsView.style.display = 'none';
         updateBreadcrumbs();
      }});
      
      const contentView = document.getElementById('notes-view-content');
      
      if (contentView && contentView.style.display === 'block') {
         // We are in a specific topic
         if (typeof selectedChapterId !== 'undefined' && typeof selectedTopicId !== 'undefined') {
            const chapter = subject.chapters.find(c => c.id === selectedChapterId);
            if (chapter) {
               breadcrumbs.push({ label: chapter.title, action: () => {
                 const chaptersView = document.getElementById('notes-view-chapters');
                 const contentView = document.getElementById('notes-view-content');
                 if (chaptersView) chaptersView.style.display = 'block';
                 if (contentView) contentView.style.display = 'none';
                 updateBreadcrumbs();
               }}); 
               
               const topic = chapter.topics.find(t => t.id === selectedTopicId);
               if (topic) {
                  breadcrumbs.push({ label: topic.title, action: null }); 
               }
            }
         }
      }
    }
  }
  
  // Render HTML
  if (breadcrumbs.length <= 1) {
    container.style.display = 'none'; // Only Home, don't show
    if (schema) schema.textContent = '{}';
    return;
  }
  
  container.style.display = 'block';
  list.innerHTML = '';
  
  const schemaList = [];
  const origin = window.location.origin;
  const path = window.location.pathname;
  
  const svgChevron = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`;
  
  breadcrumbs.forEach((item, index) => {
    const isLast = index === breadcrumbs.length - 1;
    const li = document.createElement('li');
    li.className = 'breadcrumb-item' + (isLast ? ' active' : '');
    if (isLast) li.setAttribute('aria-current', 'page');
    
    const element = isLast ? document.createElement('span') : document.createElement('a');
    element.className = 'breadcrumb-link';
    
    // Add title attribute for tooltip
    element.title = item.label;
    
    // Add Home icon for the first item
    if (index === 0 && item.label === 'Home') {
      element.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> ${item.label}`;
    } else {
      element.textContent = item.label;
    }
    
    if (!isLast && item.action) {
      element.href = '#';
      element.addEventListener('click', (e) => {
        e.preventDefault();
        item.action();
      });
    }
    
    li.appendChild(element);
    
    if (!isLast) {
      const sep = document.createElement('span');
      sep.className = 'breadcrumb-separator';
      sep.innerHTML = svgChevron;
      sep.setAttribute('aria-hidden', 'true');
      li.appendChild(sep);
    }
    
    list.appendChild(li);
    
    schemaList.push({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": isLast ? origin + path : origin + path + "#" + encodeURIComponent(item.label)
    });
  });
  
  // Render Schema
  if (schema) {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": schemaList
    };
    schema.textContent = JSON.stringify(jsonLd, null, 2);
  }
};

window.backToNotesSubjects = function() {
  currentSubjectFilter = 'all';
  const subjectsView = document.getElementById('notes-view-subjects');
  const chaptersView = document.getElementById('notes-view-chapters');
  const contentView = document.getElementById('notes-view-content');
  if (subjectsView) subjectsView.style.display = 'block';
  if (chaptersView) chaptersView.style.display = 'none';
  if (contentView) contentView.style.display = 'none';
  renderNotesBrowser();
  updateBreadcrumbs();
};


// --- LIVE STATUS POLLER ---
window.statusPollerInterval = null;

window.startStatusPoller = function() {
  if (window.statusPollerInterval) return; // Already running
  console.log("Starting live status poller...");
  window.statusPollerInterval = setInterval(async () => {
    await window.checkApprovalStatus();
  }, 15000);
};

window.checkApprovalStatus = async function() {
  if (!window.supabaseClient || !STATE || !STATE.activeProfile || !STATE.activeProfile.id) return;
  try {
    const { data } = await window.supabaseClient.from('user_profiles').select('status').eq('id', STATE.activeProfile.id).single();
    if (data && data.status) {
      const newStatus = data.status;
      if (newStatus !== STATE.activeProfile.status) {
        console.log("Status changed to:", newStatus);
        STATE.activeProfile.status = newStatus;
        if (newStatus === 'active') {
           stopStatusPoller();
           switchScreen('dashboard');
           alert('Your account has been approved! Welcome.');
        } else if (newStatus === 'locked') {
           switchScreen('locked');
        } else if (newStatus === 'pending_payment') {
           switchScreen('onboarding-payment');
        }
      }
    }
  } catch (e) {
    console.error("Poller error:", e);
  }
};

window.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && STATE && STATE.activeProfile && STATE.activeProfile.status !== 'active') {
    window.checkApprovalStatus();
  }
});

window.addEventListener('online', () => {
  if (STATE && STATE.activeProfile && STATE.activeProfile.status !== 'active') {
    window.checkApprovalStatus();
  }
});

window.stopStatusPoller = function() {
  if (window.statusPollerInterval) {
    clearInterval(window.statusPollerInterval);
    window.statusPollerInterval = null;
    console.log("Stopped live status poller.");
  }
};
// -------------------------

// --- ADMIN DASHBOARD POLLER ---
window.adminPollerInterval = null;

window.startAdminPoller = function() {
  if (window.adminPollerInterval) return;
  console.log("Starting Admin Dashboard live poller...");
  window.adminPollerInterval = setInterval(() => {
    if (STATE.currentScreen === 'admin' && typeof renderAdminDashboard === 'function') {
      renderAdminDashboard();
    }
  }, 5000);
};

window.stopAdminPoller = function() {
  if (window.adminPollerInterval) {
    clearInterval(window.adminPollerInterval);
    window.adminPollerInterval = null;
    console.log("Stopped Admin Dashboard live poller.");
  }
};
// -----------------------------

function switchScreen(screenId) {
  // --- ROUTE MIDDLEWARE GUARD ---
  if (typeof STATE !== 'undefined' && STATE.activeProfile) {
    const status = STATE.activeProfile.status;
    if (status && status !== 'active' && screenId !== 'onboarding-payment' && screenId !== 'locked') {
      console.warn('Access denied. Redirecting to payment/locked screen. Current status:', status);
      screenId = status === 'locked' ? 'locked' : 'onboarding-payment';
    }
    
    // Admin Guard
    if (screenId === 'admin' && STATE.activeProfile.email !== 'trayodh@gmail.com') {
      alert('Unauthorized: Admin access only.');
      screenId = 'dashboard';
    }
  }
  // ------------------------------

  STATE.currentScreen = screenId;
  
  if (screenId === 'locked' || screenId === 'onboarding-payment') {
    document.body.classList.add('locked-mode');
  } else {
    document.body.classList.remove('locked-mode');
  }
  
  if (screenId === 'onboarding-payment' || screenId === 'locked') {
    if (typeof startStatusPoller === 'function') startStatusPoller();
  } else {
    if (typeof stopStatusPoller === 'function') stopStatusPoller();
  }
  
  if (screenId === 'admin') {
    if (typeof startAdminPoller === 'function') startAdminPoller();
  } else {
    if (typeof stopAdminPoller === 'function') stopAdminPoller();
  }

  
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
  } else if (screenId === "paper-solver") {
    renderPaperSolver();
  } else if (screenId === "advanced-solver") {
    renderAdvancedSolver();
  } else if (screenId === "admin") {
    if (typeof renderAdminDashboard === 'function') renderAdminDashboard();
  } else if (screenId === "ai-console") {
    renderAiConsoleSuggestions();
  } else if (screenId === "vocab-builder") {
    renderVocabBuilder();
  } else if (screenId === "question-bank") {
    renderQuestionBank('gs');
  }
  updateBreadcrumbs();
}

window.tellMeMoreHistoryStack = [];

window.initiateTellMeMore = function(contextData) {
  // Save scroll position and screen
  const mainScrollY = window.scrollY;
  const currentScreenId = STATE.currentScreen;
  
  window.tellMeMoreHistoryStack.push({
    screen: currentScreenId,
    scrollY: mainScrollY,
  });

  // Navigate to AI Console
  switchScreen('ai-console');

  // Trigger AI context
  if (typeof window.startTellMeMoreAI === 'function') {
    setTimeout(() => window.startTellMeMoreAI(contextData), 100);
  } else {
    console.warn("startTellMeMoreAI function is not defined.");
  }
};

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
let currentExamTagFilter = 'all'; // 'all' | 'NDA' | 'CDS' | 'AFCAT'
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

const TOPIC_WEIGHTAGE_MAP = {
  // Mathematics
  "trig-identities": "15 Qs (~37.5 Marks)",
  "inverse-trig": "5 Qs (~12.5 Marks)",
  "quadratic-eq": "6 Qs (~15 Marks)",
  "complex-numbers": "6 Qs (~15 Marks)",
  "straight-lines": "5 Qs (~12.5 Marks)",
  "central-tendency": "6 Qs (~15 Marks)",
  "data-interpretation": "5 Qs (~12.5 Marks)",
  "limits-continuity": "5 Qs (~12.5 Marks)",
  "differentiation": "8 Qs (~20 Marks)",
  "integration": "10 Qs (~25 Marks)",
  "syl-matrices": "9 Qs (~22.5 Marks)",
  "syl-probability": "10 Qs (~25 Marks)",
  "lines-angles-triangles": "6 Qs (~15 Marks)",
  "circles-polygons": "5 Qs (~12.5 Marks)",
  "area-perimeter": "6 Qs (~15 Marks)",
  "surface-area-volume": "6 Qs (~15 Marks)",
  "percentages-profit-loss": "5 Qs (~12.5 Marks)",
  "ratios-averages": "5 Qs (~12.5 Marks)",
  "time-distance": "6 Qs (~15 Marks)",
  "syl-numerical-speed": "4 Qs (~10 Marks)",
  "syl-numerical-ratios": "4 Qs (~10 Marks)",

  // English
  "parts-of-speech": "10 Qs (~8.3 Marks)",
  "tenses-complete": "10 Qs (~8.3 Marks)",
  "subject-verb-agreement": "10 Qs (~8.3 Marks)",
  "sentence-structure": "5 Qs (~4.2 Marks)",
  "voice-conversion": "10 Qs (~8.3 Marks)",
  "narration-speech": "10 Qs (~8.3 Marks)",
  "modifiers": "5 Qs (~4.2 Marks)",
  "punctuation-basics": "5 Qs (~4.2 Marks)",
  "transformation-sentences": "5 Qs (~4.2 Marks)",
  "synonyms-antonyms-detailed": "20 Qs (~16.6 Marks)",
  "one-word-substitution": "10 Qs (~8.3 Marks)",
  "idioms-phrases": "10 Qs (~8.3 Marks)",
  "phrasal-verbs": "5 Qs (~4.2 Marks)",
  "reading-comprehension": "15 Qs (~12.5 Marks)",
  "error-detection": "10 Qs (~8.3 Marks)",
  "sentence-improvement": "10 Qs (~8.3 Marks)",
  "ordering-rearrangement": "10 Qs (~8.3 Marks)",
  "fill-blanks-cloze": "10 Qs (~8.3 Marks)",

  // Polity
  "preamble": "2 Qs (~1.7 Marks)",
  "schedules": "2 Qs (~1.7 Marks)",
  "fundamental-rights": "5 Qs (~4.2 Marks)",
  "dpsp": "4 Qs (~3.3 Marks)",
  "citizenship": "2 Qs (~1.7 Marks)",
  "president": "3 Qs (~2.5 Marks)",
  "parliament": "6 Qs (~5.0 Marks)",
  "goverment-executives": "3 Qs (~2.5 Marks)",
  "judiciary": "4 Qs (~3.3 Marks)",
  "panchayati-raj": "2 Qs (~1.7 Marks)",
  "amendments-parts": "3 Qs (~2.5 Marks)",
  "important-articles": "3 Qs (~2.5 Marks)",
  "positions-tenures": "2 Qs (~1.7 Marks)",
  "constitutional-bodies": "3 Qs (~2.5 Marks)",
  "governance-emergency": "2 Qs (~1.7 Marks)",
  "polity-federal-structure": "2 Qs (~1.7 Marks)",
  "polity-rpa": "2 Qs (~1.7 Marks)",

  // History
  "what-is-history": "1 Qs (~0.8 Marks)",
  "sources-indian-history": "2 Qs (~1.7 Marks)",
  "dating-systems": "1 Qs (~0.8 Marks)",
  "stone-age": "2 Qs (~1.7 Marks)",
  "chalcolithic-age": "2 Qs (~1.7 Marks)",
  "rock-art": "1 Qs (~0.8 Marks)",
  "indus-valley-civilization": "3 Qs (~2.5 Marks)",
  "vedic-age": "2 Qs (~1.7 Marks)",
  "mahajanapadas": "2 Qs (~1.7 Marks)",
  "magadha-expansion": "2 Qs (~1.7 Marks)",
  "buddhism-jainism": "4 Qs (~3.3 Marks)",
  "mauryan-period": "3 Qs (~2.5 Marks)",
  "post-mauryan-india": "2 Qs (~1.7 Marks)",
  "gupta-period": "2 Qs (~1.7 Marks)",
  "south-indian-kingdoms": "3 Qs (~2.5 Marks)",
  "ancient-indian-culture": "2 Qs (~1.7 Marks)",
  "early-medieval-india": "2 Qs (~1.7 Marks)",
  "delhi-sultanate": "3 Qs (~2.5 Marks)",
  "custom-history-topic": "3 Qs (~2.5 Marks)",
  "vijayanagara-empire": "3 Qs (~2.5 Marks)",
  "bahmani-deccan-sultanates": "2 Qs (~1.7 Marks)",
  "mughal-empire": "4 Qs (~3.3 Marks)",
  "marathas": "2 Qs (~1.7 Marks)",
  "bhakti-movement": "2 Qs (~1.7 Marks)",
  "sufi-movement": "2 Qs (~1.7 Marks)",
  "sikh-history": "2 Qs (~1.7 Marks)",
  "european-arrival": "2 Qs (~1.7 Marks)",
  "british-expansion": "2 Qs (~1.7 Marks)",
  "economic-impact-british": "2 Qs (~1.7 Marks)",
  "socio-religious-reform": "3 Qs (~2.5 Marks)",
  "revolt-1857": "3 Qs (~2.5 Marks)",
  "governor-generals-viceroys": "4 Qs (~3.3 Marks)",
  "constitutional-development": "3 Qs (~2.5 Marks)",
  "freedom-movement": "8 Qs (~6.6 Marks)",
  "post-independence-consolidation": "2 Qs (~1.7 Marks)",
  "revolutions": "2 Qs (~1.7 Marks)",
  "world-war-i": "2 Qs (~1.7 Marks)",
  "interwar-period": "2 Qs (~1.7 Marks)",
  "world-war-ii": "2 Qs (~1.7 Marks)",
  "cold-war": "2 Qs (~1.7 Marks)",
  "international-institutions": "2 Qs (~1.7 Marks)",
  "architecture": "3 Qs (~2.5 Marks)",
  "paintings": "2 Qs (~1.7 Marks)",

  // Geography
  "universe-solar-system": "3 Qs (~2.5 Marks)",
  "earth-atmosphere": "3 Qs (~2.5 Marks)",
  "climatology-clouds": "3 Qs (~2.5 Marks)",
  "geomorphology-rocks": "4 Qs (~3.3 Marks)",
  "world-geography-mountains": "5 Qs (~4.2 Marks)",
  "world-geography-straits-deserts": "5 Qs (~4.2 Marks)",
  "syl-geog": "6 Qs (~5.0 Marks)",
  "india-forests-wetlands": "4 Qs (~3.3 Marks)",
  "india-resources-farming": "4 Qs (~3.3 Marks)",
  "india-transport-routes": "4 Qs (~3.3 Marks)",
  "india-national-parks": "5 Qs (~4.2 Marks)",
  "mapping-borders-capitals": "4 Qs (~3.3 Marks)",
  "geog-industries": "3 Qs (~2.5 Marks)",
  "geog-geopolitics": "3 Qs (~2.5 Marks)",
  "geography-pyq-trends-topic": "Trend Analysis",

  // Economics
  "econ-concepts": "5 Qs (~4.2 Marks)",
  "econ-poverty-employment": "4 Qs (~3.3 Marks)",
  "rbi-monetary-policy": "6 Qs (~5.0 Marks)",
  "econ-budget-fiscal": "5 Qs (~4.2 Marks)",
  "econ-trade-bop": "4 Qs (~3.3 Marks)",
  "econ-reforms": "3 Qs (~2.5 Marks)",
  "five-year-plans": "3 Qs (~2.5 Marks)",
  "external-sector-institutions": "3 Qs (~2.5 Marks)",
  "econ-govt-schemes": "4 Qs (~3.3 Marks)",

  // Physics
  "reflection-refraction": "6 Qs (~5.0 Marks)",
  "newtons-laws": "5 Qs (~4.2 Marks)",
  "syl-exercises": "4 Qs (~3.3 Marks)",
  "physics-sound": "3 Qs (~2.5 Marks)",
  "physics-em-waves": "3 Qs (~2.5 Marks)",
  "physics-heat": "4 Qs (~3.3 Marks)",
  "physics-electricity-magnetism": "5 Qs (~4.2 Marks)",
  "physics-nuclear-basics": "3 Qs (~2.5 Marks)",
  "physics-units-everyday": "4 Qs (~3.3 Marks)",
  "physics-pyq-trends-topic": "Trend Analysis",

  // Chemistry
  "acids-bases": "4 Qs (~3.3 Marks)",
  "syl-numerical": "4 Qs (~3.3 Marks)",
  "metals-alloys": "4 Qs (~3.3 Marks)",
  "reactivity-series": "3 Qs (~2.5 Marks)",
  "carbon-compounds": "3 Qs (~2.5 Marks)",
  "chemistry-numericals": "3 Qs (~2.5 Marks)",
  "chemistry-everyday-fertilisers": "4 Qs (~3.3 Marks)",
  "environmental-chemistry": "3 Qs (~2.5 Marks)",

  // Biology
  "cell-structure": "4 Qs (~3.3 Marks)",
  "human-systems": "6 Qs (~5.0 Marks)",
  "diseases": "5 Qs (~4.2 Marks)",
  "immunity-vaccines": "4 Qs (~3.3 Marks)",
  "plant-kingdom": "3 Qs (~2.5 Marks)",
  "animal-kingdom": "3 Qs (~2.5 Marks)",
  "plant-reproduction": "3 Qs (~2.5 Marks)",
  "biology-ecology-basics": "4 Qs (~3.3 Marks)",

  // Military Aptitude
  "rank-equivalence": "3 Qs (~7.5 Marks)",
  "commands": "3 Qs (~7.5 Marks)",
  "defence-organisations-weapons": "4 Qs (~10.0 Marks)",
  "bilateral-exercises": "4 Qs (~10.0 Marks)",
  "missiles-systems": "4 Qs (~10.0 Marks)",

  // Current Affairs
  "ca-schemes": "5 Qs (~4.2 Marks)",
  "ca-relations": "5 Qs (~4.2 Marks)",
  "ca-policies": "4 Qs (~3.3 Marks)",
  "ca-summits": "4 Qs (~3.3 Marks)",
  "ca-reports": "3 Qs (~2.5 Marks)",
  "ca-judgments": "3 Qs (~2.5 Marks)",
  "ca-awards": "3 Qs (~2.5 Marks)",
  "ca-economic-measures": "3 Qs (~2.5 Marks)",
  "ca-science-tech-space": "4 Qs (~3.3 Marks)",
  "ca-upsc-master-framework": "Trend Analysis",

  // Environment
  "env-hotspots": "3 Qs (~2.5 Marks)",
  "env-conservation": "3 Qs (~2.5 Marks)",
  "env-species": "3 Qs (~2.5 Marks)",
  "env-treaties": "4 Qs (~3.3 Marks)",
  "env-laws": "3 Qs (~2.5 Marks)",
  "env-renewable": "3 Qs (~2.5 Marks)",
  "env-pollution": "3 Qs (~2.5 Marks)"
};

function getTopicWeightage(topicId, subjectId) {
  if (TOPIC_WEIGHTAGE_MAP[topicId]) {
    return TOPIC_WEIGHTAGE_MAP[topicId];
  }
  // Fallbacks based on subject
  switch (subjectId) {
    case 'mathematics':
      return '4-6 Qs (~10-15 Marks)';
    case 'english':
      return '5-10 Qs (~4-8 Marks)';
    case 'military-aptitude':
      return '3-5 Qs';
    default:
      return '3-4 Qs (~2.5-3.3 Marks)';
  }
}

function getTopicExams(topicId, subjectId) {
  const syllabusText = window.OFFICIAL_SYLLABUS_DATA ? window.OFFICIAL_SYLLABUS_DATA[topicId] : null;
  let exams = [];
  if (syllabusText) {
    const examMatch = syllabusText.match(/Exams:\s*([^.]+)/i);
    if (examMatch) {
      const text = examMatch[1].toLowerCase();
      if (text.includes('all')) {
        exams = ['NDA', 'CDS', 'AFCAT'];
      } else {
        if (text.includes('nda')) exams.push('NDA');
        if (text.includes('cds')) exams.push('CDS');
        if (text.includes('afcat')) exams.push('AFCAT');
      }
    }
  }
  
  if (exams.length === 0) {
    if (topicId.startsWith('acids-') || topicId === 'syl-numerical' || topicId === 'metals-alloys' || 
        topicId === 'reactivity-series' || topicId === 'carbon-compounds' || topicId === 'chemistry-numericals' || 
        topicId === 'chemistry-everyday-fertilisers' || topicId === 'environmental-chemistry') {
      exams = ['NDA', 'CDS'];
    } else if (subjectId === 'mathematics') {
      if (['trig-identities', 'central-tendency'].includes(topicId)) {
        exams = ['NDA', 'CDS', 'AFCAT'];
      } else if (['inverse-trig', 'complex-numbers', 'limits-continuity', 'differentiation', 'integration'].includes(topicId)) {
        exams = ['NDA'];
      } else if (['syl-numerical-speed', 'syl-numerical-ratios'].includes(topicId)) {
        exams = ['AFCAT'];
      } else {
        exams = ['NDA', 'CDS'];
      }
    } else if (subjectId === 'military-aptitude') {
      if (topicId.startsWith('afcat-r-')) {
        if (['afcat-r-clock-calendar', 'afcat-r-venn', 'afcat-r-fig-analogy', 'afcat-r-fig-class-series', 
             'afcat-r-fig-completion', 'afcat-r-embedded', 'afcat-r-dot', 'afcat-r-cube-dice', 'afcat-r-fig-coding'].includes(topicId)) {
          exams = ['AFCAT'];
        } else {
          exams = ['CDS', 'AFCAT'];
        }
      } else if (topicId.startsWith('syl-afcat-')) {
        exams = ['AFCAT'];
      } else {
        exams = ['NDA', 'CDS', 'AFCAT'];
      }
    } else if (subjectId === 'english') {
      if (['modifiers', 'transformation-sentences'].includes(topicId)) {
        exams = ['CDS'];
      } else if (['sentence-improvement', 'ordering-rearrangement'].includes(topicId)) {
        exams = ['NDA', 'CDS'];
      } else {
        exams = ['NDA', 'CDS', 'AFCAT'];
      }
    } else {
      exams = ['NDA', 'CDS', 'AFCAT'];
    }
  }
  return exams;
}

// -- Drill-Down View Logic for Notes --
window.openNotesSubject = function(subjectId) {
  if (STATE.currentScreen !== 'notes') {
    switchScreen('notes');
  }
  currentSubjectFilter = subjectId;
  const subjData = NOTES_DATABASE[subjectId];
  if (subjData) {
    document.getElementById('notes-active-subject-title').innerText = subjData.title;
  }
  
  // Update Views
  document.querySelectorAll('#screen-notes .full-page-view').forEach(el => {
    el.style.display = 'none';
    el.classList.remove('active');
  });
  const chaptersView = document.getElementById('notes-view-chapters');
  if(chaptersView) {
    chaptersView.style.display = 'block';
    chaptersView.classList.add('active');
  }
  
  renderNotesBrowser();
  updateBreadcrumbs();
};

window.backToNotesSubjects = function() {
  currentSubjectFilter = 'all';
  document.querySelectorAll('#screen-notes .full-page-view').forEach(el => {
    el.style.display = 'none';
    el.classList.remove('active');
  });
  const subjectsView = document.getElementById('notes-view-subjects');
  if(subjectsView) {
    subjectsView.style.display = 'block';
    subjectsView.classList.add('active');
  }
  renderNotesBrowser();
  updateBreadcrumbs();
};

window.backToNotesChapters = function() {
  document.querySelectorAll('#screen-notes .full-page-view').forEach(el => {
    el.style.display = 'none';
    el.classList.remove('active');
  });
  const chaptersView = document.getElementById('notes-view-chapters');
  if(chaptersView) {
    chaptersView.style.display = 'block';
    chaptersView.classList.add('active');
  }
};

function renderNotesBrowser() {
  const accordionList = document.getElementById("notes-accordion-list");
  if (!accordionList) return;
  accordionList.innerHTML = "";
  
  // Render Legend
  const legendDiv = document.createElement("div");
  legendDiv.style.display = "flex";
  legendDiv.style.alignItems = "center";
  legendDiv.style.justifyContent = "space-between";
  legendDiv.style.padding = "8px 12px";
  legendDiv.style.marginBottom = "12px";
  legendDiv.style.background = "rgba(255, 255, 255, 0.02)";
  legendDiv.style.border = "1px solid rgba(255, 255, 255, 0.05)";
  legendDiv.style.borderRadius = "6px";
  legendDiv.style.fontSize = "0.7rem";
  legendDiv.style.fontFamily = "var(--font-mono)";
  legendDiv.style.color = "var(--text-secondary)";
  legendDiv.innerHTML = `
    <span style="font-weight: 700; color: var(--text-muted);">EXAMS:</span>
    <span style="display:flex; align-items:center; gap:4px;"><span style="display:inline-block; width:6px; height:6px; border-radius:50%; background:#ef4444;"></span>NDA</span>
    <span style="display:flex; align-items:center; gap:4px;"><span style="display:inline-block; width:6px; height:6px; border-radius:50%; background:#87a96b;"></span>CDS</span>
    <span style="display:flex; align-items:center; gap:4px;"><span style="display:inline-block; width:6px; height:6px; border-radius:50%; background:#38bdf8;"></span>AFCAT</span>
  `;
  accordionList.appendChild(legendDiv);
  
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
        const exams = getTopicExams(topic.id, subjectId);
        const matchesQuery = topic.title.toLowerCase().includes(query) ||
                             (topic.notes && topic.notes.toLowerCase().includes(query)) ||
                             (topic.formulas && topic.formulas.toLowerCase().includes(query));
        const matchesExam = currentExamTagFilter === "all" || exams.includes(currentExamTagFilter);
        return matchesQuery && matchesExam;
      });
      
      if (filteredTopics.length > 0) {
        filteredChapters.push({
          ...chapter,
          topics: filteredTopics
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
        <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.75rem; color:var(--text-muted); font-weight:600; text-transform:uppercase; margin-left:12px; margin-bottom:6px; gap:8px;">
          <span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis; flex:1;" title="${chapter.title}">${chapter.title}</span>
          <span style="font-family:var(--font-mono); font-size:0.7rem; flex-shrink:0;">${completedChTopics}/${totalChTopics}</span>
        </div>
      `;
      
      chapter.topics.forEach(topic => {
        const topicLink = document.createElement("div");
        const isTopicCompleted = STATE.syllabusProgress[topic.id] === 'completed';
        const isTopicActive = selectedTopicId === topic.id;
        
        // Get exams list and build dots
        const exams = getTopicExams(topic.id, subjectId);
        const examColors = {
          'NDA': '#ef4444',
          'CDS': '#87a96b',
          'AFCAT': '#38bdf8'
        };
        const examDots = exams.map(exam => `
          <span style="display:inline-block; width:6px; height:6px; border-radius:50%; background:${examColors[exam] || '#ccc'}; flex-shrink: 0;" title="${exam}"></span>
        `).join('');
        
        topicLink.className = `topic-link ${isTopicActive ? 'active' : ''}`;
        topicLink.innerHTML = `
          <div style="display:flex; align-items:center; gap:8px; width:100%; justify-content:space-between;">
            <div style="display:flex; align-items:center; gap:8px; overflow:hidden;">
              <span class="topic-dot ${isTopicCompleted ? 'completed' : ''}"></span>
              <div style="display:flex; align-items:center; gap:3px; flex-shrink:0;">
                ${examDots}
              </div>
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
          
          document.getElementById('notes-view-chapters').style.display = 'none';
          document.getElementById('notes-view-content').style.display = 'block';
          
          renderTopicView(subjectId, chapter.id, topic.id);
          renderNotesBrowser();
          if (typeof updateBreadcrumbs === 'function') updateBreadcrumbs();
        });
        chapterDiv.appendChild(topicLink);
      });
      content.appendChild(chapterDiv);
    });
    
    // In drill-down mode, chapters should be open by default
    if (Object.keys(NOTES_DATABASE).length === 1 || currentSubjectFilter !== 'all') {
      header.classList.add("active");
      accordionGroup.classList.add("open");
      setTimeout(() => {
        if (header.classList.contains("active")) {
          content.style.maxHeight = Math.max(content.scrollHeight, 5000) + "px";
        }
      }, 50);
    }
    
    header.addEventListener("click", () => {
      const isActive = header.classList.toggle("active");
      accordionGroup.classList.toggle("open", isActive);
      if (isActive) {
        content.style.maxHeight = Math.max(content.scrollHeight, 5000) + "px";
      } else {
        content.style.maxHeight = "0px";
      }
    });
    
    accordionGroup.appendChild(header);
    accordionGroup.appendChild(content);
    
    accordionList.appendChild(accordionGroup);
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
  const weightageText = (typeof generateWeightageText === 'function') ? generateWeightageText(subject, chapter) : (chapter.weightage || 'High-Yield');
  const breadcrumbs = `
    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; flex-wrap: wrap;">
      <span style="color: var(--text-muted); font-size: 0.85rem; font-family: var(--font-sans); display: flex; align-items: center; gap: 6px;">
        <span style="color: var(--text-secondary);">${subject.title}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="opacity:0.5"><path d="m9 18 6-6-6-6"/></svg>
        <span style="color: var(--text-secondary);">${chapter.title}</span>
      </span>
      <span style="margin: 0 4px; color: var(--border);">|</span>
      <span style="font-size: 0.75rem; font-family: var(--font-mono); font-weight: 700; color: var(--accent); border: 1px solid rgba(34, 197, 94, 0.3); padding: 4px 8px; border-radius: 6px; background: rgba(34, 197, 94, 0.08); text-transform: uppercase; white-space: nowrap; flex-shrink: 0;">
        Weightage: ${weightageText}
      </span>
    </div>
  `;
  
  const subjectKey = subjectId;
  const chapterDiagramId = `${subjectKey}__${(chapter.id || chapter.title.replace(/[^a-z0-9]/gi, '-').toLowerCase())}`;
  const chapterDiagramHtml = (typeof window.DIAGRAMS_DB !== 'undefined' && window.DIAGRAMS_DB[chapterDiagramId] && subjectId !== 'geography')
    ? `<div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.08);">
        <div style="color: var(--text-muted); font-size: 0.75rem; font-family: var(--font-mono); margin-bottom: 14px; letter-spacing: 1px; text-transform: uppercase; display: flex; align-items: center; gap: 8px;">
          <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='#4ade80' stroke-width='2'><rect x='3' y='3' width='18' height='18' rx='2'/><path d='M3 9h18M9 21V9'/></svg>
          Chapter Visual Reference
        </div>
        ${DIAGRAMS_DB[chapterDiagramId]}
      </div>`
    : '';

  const tabsHtml = `
    <div class="topic-tab-bar" style="display: flex; flex-wrap: nowrap; overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; gap: 8px; border-bottom: 1px solid var(--border); padding-bottom: 2px;">
      <button class="tab-btn ${activeNotesTab === 'notes' ? 'active' : ''}" onclick="setNotesTab('notes')" style="white-space: nowrap; flex-shrink: 0;">
        📖 Concept Notes
      </button>
      <button class="tab-btn ${activeNotesTab === 'formulas' ? 'active' : ''}" onclick="setNotesTab('formulas')" style="white-space: nowrap; flex-shrink: 0;">
        📐 High-Yield Formulas
      </button>
      <button class="tab-btn ${activeNotesTab === 'mindmap' ? 'active' : ''}" onclick="setNotesTab('mindmap')" style="white-space: nowrap; flex-shrink: 0; display: ${topic.mindmap ? 'block' : 'none'};">
        🧠 Mind Map
      </button>
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
          ${topicId === 'all-equipment' ? '<div id="armed-forces-equipment-container"></div>' : parseWikiLinks(mainNotesContent)}
          ${(!isPlaceholder && typeof window.EXPANDED_NOTES_DATA !== 'undefined' && window.EXPANDED_NOTES_DATA[topic.id]) ? `
            <div class="expanded-notes" style="margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1);">
              <div style="color: var(--accent); font-size: 0.8rem; font-family: var(--font-mono); margin-bottom: 12px; letter-spacing: 1px; text-transform: uppercase;">
                [ Advanced Revision Data ]
              </div>
              ${parseWikiLinks(EXPANDED_NOTES_DATA[topic.id])}
            </div>
          ` : ''}
          ${(typeof window.EXPERT_REVISION_DATA !== 'undefined' && window.EXPERT_REVISION_DATA[topic.id]) ? `
            <div class="expert-notes" style="margin-top: 24px; padding-top: 24px; border-top: 1px dashed var(--warning);">
              <div style="color: var(--warning); font-size: 0.8rem; font-family: var(--font-mono); margin-bottom: 12px; letter-spacing: 1px; text-transform: uppercase;">
                [ Expert Tactical Edge ]
              </div>
              ${parseWikiLinks(EXPERT_REVISION_DATA[topic.id])}
            </div>
          ` : ''}
          ${chapterDiagramHtml}
          ${(() => {
            if (typeof window.GEOGRAPHY_VISUALS_DB === 'undefined' || subjectId !== 'geography') return '';
            const tTitle = topic.title.toLowerCase();
            const visuals = window.GEOGRAPHY_VISUALS_DB.filter(v => v.topic && v.topic.toLowerCase() === tTitle || (v.chapter && v.chapter.toLowerCase() === chapter.title.toLowerCase()));
            if (visuals.length === 0) return '';
            
            let html = '<div class="geography-visuals-container" style="margin-top: 24px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.1);">';
            html += '<div style="color: #60a5fa; font-size: 0.8rem; font-family: var(--font-mono); margin-bottom: 12px; letter-spacing: 1px; text-transform: uppercase;">[ GEOGRAPHY VISUALS ]</div>';
            
            visuals.forEach(vis => {
              html += '<div class="visual-card" style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; margin-bottom: 16px; border: 1px solid rgba(255,255,255,0.05);">';
              html += '<h4 style="margin: 0 0 8px 0; color: #e2e8f0; font-size: 0.95rem;">' + vis.title + '</h4>';
              if (vis.description) {
                html += '<p style="font-size: 0.8rem; color: #94a3b8; margin-bottom: 12px;">' + vis.description + '</p>';
              }
              if (vis.format === 'Mermaid' && vis.mermaidCode) {
                html += '<pre class="mermaid" style="background: transparent;">' + vis.mermaidCode + '</pre>';
              } else if (vis.format === 'RealMap' && vis.imgPath) {
                html += '<img src="assets/geography' + vis.imgPath + '" alt="' + vis.title + '" style="width:100%; border-radius: 6px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">';
              }
              html += '</div>';
            });
            html += '</div>';
            // Schedule mermaid init after rendering
            setTimeout(() => {
              if (window.mermaid) {
                mermaid.init(undefined, document.querySelectorAll('.mermaid'));
              }
            }, 100);
            return html;
          })()}
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
    
    // Generate Mermaid Code Dynamically
    let mmdCode = `mindmap\n  root((${topic.mindmap.root.replace(/[\(\)\[\]\{\}\"\n]/g, ' ')}))\n`;
    topic.mindmap.branches.forEach(branch => {
      mmdCode += `    ${branch.title.replace(/[\(\)\[\]\{\}\"\n]/g, ' ')}\n`;
      if (branch.subnodes) {
        branch.subnodes.forEach(sub => {
          mmdCode += `      ::icon(fas fa-check)\n`;
          mmdCode += `      ${sub.replace(/[\(\)\[\]\{\}\"\n]/g, ' ')}\n`;
        });
      }
    });
    
    topic.mindmap.branches.forEach(branch => {
      let subnodesHtml = '';
      branch.subnodes.forEach(sub => {
        const cleanSub = sub.replace(/'/g, "\\'");
        subnodesHtml += `<div class="mindmap-subnode" onclick="triggerDoubtExplain('${cleanSub}')" style="cursor: pointer; padding: 8px 16px; margin: 4px; background: rgba(255,255,255,0.03); border: 1px solid var(--border); border-radius: 6px; transition: all 0.2s ease; display: inline-block; color: var(--text-primary); font-size: 0.82rem; font-weight: 500;" onmouseover="this.style.background='rgba(34, 197, 94, 0.1)'; this.style.borderColor='var(--accent)'; this.style.transform='scale(1.02)'" onmouseout="this.style.background='rgba(255,255,255,0.03)'; this.style.borderColor='var(--border)'; this.style.transform='scale(1)'">${sub}</div>`;
      });
      const cleanBranch = branch.title.replace(/'/g, "\\'");
      branchesHtml += `
        <div class="mindmap-branch" style="display: flex; flex-direction: column; align-items: center; border: 1px dashed rgba(255,255,255,0.08); border-radius: 12px; padding: 12px; background: rgba(0,0,0,0.15); min-width: 180px;">
          <div class="mindmap-node" onclick="triggerDoubtExplain('${cleanBranch}')" style="cursor: pointer; padding: 10px 20px; background: linear-gradient(135deg, rgba(37, 99, 235, 0.2) 0%, rgba(34, 197, 94, 0.1) 100%); border: 1px solid rgba(37, 99, 235, 0.4); border-radius: 8px; font-weight: 700; font-family: var(--font-logo); font-size: 0.9rem; text-align: center; color: #fff; width: 100%; box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: all 0.2s ease;" onmouseover="this.style.boxShadow='0 0 15px rgba(37,99,235,0.3)'; this.style.transform='scale(1.03)';" onmouseout="this.style.boxShadow='none'; this.style.transform='scale(1)';">${branch.title}</div>
          <div class="mindmap-subnodes" style="display: flex; flex-direction: column; gap: 6px; width: 100%; margin-top: 10px;">
            ${subnodesHtml}
          </div>
        </div>
      `;
    });
    
    const cleanRoot = topic.mindmap.root.replace(/'/g, "\\'");
    tabContentHtml = `
      <div class="tab-pane-content fade-in" style="height: 100%; display: flex; flex-direction: column;">
        <div class="mindmap-tree scroll-x" style="padding: 24px; height: 100%; overflow-y: auto; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; gap: 24px;">
          
          <!-- Gen AI Diagram SVG Integration (Client-Side Rendering) -->
          <div style="width: 100%; display: flex; justify-content: center; margin-bottom: 20px; background: rgba(0,0,0,0.4); padding: 20px; border-radius: 12px; border: 1px dashed var(--accent); box-shadow: 0 4px 20px rgba(0,0,0,0.5) inset;">
            <div class="mermaid" style="max-width: 100%; overflow-x: auto; text-align: center;">
              ${mmdCode}
            </div>
          </div>

          <div class="mindmap-root" onclick="triggerDoubtExplain('${cleanRoot}')" style="cursor: pointer; padding: 14px 28px; background: linear-gradient(135deg, var(--accent-dark) 0%, var(--accent) 100%); border-radius: 12px; font-weight: 800; font-family: var(--font-logo); font-size: 1.15rem; color: var(--bg-primary); text-shadow: 0 1px 2px rgba(0,0,0,0.2); box-shadow: 0 0 20px rgba(34, 197, 94, 0.35); text-align: center; transition: all 0.3s ease; letter-spacing: 0.5px;" onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 0 28px rgba(34, 197, 94, 0.55)';" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 0 20px rgba(34, 197, 94, 0.35)';">${topic.mindmap.root}</div>
          <div style="width: 2px; height: 20px; background: linear-gradient(to bottom, var(--accent), rgba(255,255,255,0.1));"></div>
          <div class="mindmap-branches" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; width: 100%;">
            ${branchesHtml}
          </div>
        </div>
        <div style="font-size: 0.72rem; color: var(--text-muted); text-align: center; font-family: var(--font-mono); margin-top: 8px; letter-spacing: 0.5px;">* CLICK ANY NODE IN THE GRAPH TO ASK GURU DRONACHARYA DIRECTLY *</div>
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
      <div class="topic-viewer-header" style="flex-wrap: wrap; gap: 12px;">
        <div style="display:flex; flex-direction:column; gap:4px; flex: 1; min-width: 0;">
          ${breadcrumbs}
          <h2 style="font-family:var(--font-logo); font-size:1.4rem; letter-spacing:0.5px; color:#fff; text-shadow:0 0 10px rgba(255,255,255,0.05); line-height: 1.3; margin: 0;">${topic.title}</h2>
        </div>
        <div style="display:flex; align-items:center; gap:8px; flex-wrap: wrap;">
          ${lectureModeBtn}
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

  // Initialize Mermaid diagrams for newly injected content
  setTimeout(() => {
    try {
      if (window.mermaid) {
        const mermaidNodes = Array.from(viewerPane.querySelectorAll('.mermaid:not([data-processed])'));
        if (mermaidNodes.length > 0) {
          if (typeof window.mermaid.run === 'function') {
            window.mermaid.run({ nodes: mermaidNodes });
          } else if (typeof window.mermaid.init === 'function') {
            window.mermaid.init(undefined, mermaidNodes);
          }
        }
        const alreadyProcessed = Array.from(viewerPane.querySelectorAll('.mermaid[data-processed]'));
        if (alreadyProcessed.length > 0) {
          alreadyProcessed.forEach(el => el.removeAttribute('data-processed'));
          if (typeof window.mermaid.run === 'function') {
            window.mermaid.run({ nodes: alreadyProcessed });
          } else if (typeof window.mermaid.init === 'function') {
            window.mermaid.init(undefined, alreadyProcessed);
          }
        }
      }
    } catch(e) { console.warn('Mermaid render error:', e); }
  }, 150);

  // Initialize dynamic vocabulary search vault if synonyms/antonyms topic is active
  if (topicId === 'synonyms-antonyms-detailed' && activeNotesTab === 'notes') {
    setTimeout(() => {
      if (typeof window.initVocabVault === 'function') {
        window.initVocabVault();
      }
    }, 100);
  }

  // Initialize equipment DB renderer if equipment topic is active
  if (topicId === 'all-equipment' && activeNotesTab === 'notes') {
    setTimeout(() => {
      if (typeof window.renderEquipmentDB === 'function') {
        window.renderEquipmentDB();
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

const CA_CYCLES_CONFIG = {
  AFCAT: {
    label: "AFCAT",
    months: ["February", "March", "April", "May", "June", "July", "August"],
    shortLabel: "FEB '26\n-\nAUG '26",
    examDate: new Date("2026-08-08T00:00:00")
  },
  NDA_CDS: {
    label: "NDA / CDS",
    months: ["April", "May", "June", "July", "August", "September"],
    shortLabel: "APR '26\n-\nSEP '26",
    examDate: new Date("2026-09-12T00:00:00")
  }
};

let activeCaCycle = localStorage.getItem('activeCaCycle');
if (!activeCaCycle || !CA_CYCLES_CONFIG[activeCaCycle]) {
  const now = new Date();
  if (now <= CA_CYCLES_CONFIG.AFCAT.examDate && now <= CA_CYCLES_CONFIG.NDA_CDS.examDate) {
    activeCaCycle = CA_CYCLES_CONFIG.AFCAT.examDate < CA_CYCLES_CONFIG.NDA_CDS.examDate ? 'AFCAT' : 'NDA_CDS';
  } else if (now <= CA_CYCLES_CONFIG.AFCAT.examDate) {
    activeCaCycle = 'AFCAT';
  } else if (now <= CA_CYCLES_CONFIG.NDA_CDS.examDate) {
    activeCaCycle = 'NDA_CDS';
  } else {
    activeCaCycle = 'AFCAT'; // Default fallback
  }
  localStorage.setItem('activeCaCycle', activeCaCycle);
}

/**
 * Returns the current exam cycle bounds based on CA_CYCLES_CONFIG and activeCaCycle.
 */
function getExamCycleBounds() {
  const config = CA_CYCLES_CONFIG[activeCaCycle];
  const year = config.examDate.getFullYear();
  const months = config.months.map(m => `${m} ${year}`);
  
  return { 
    cycleLabel: config.shortLabel.replace(/\n/g, ' '), 
    months 
  };
}
window.getExamCycleBounds = getExamCycleBounds;

let activeCaMonth = ""; // Will be auto-selected based on active cycle


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

  fetch('/api/daily-current-affairs')
    .then(res => res.json())
    .then(data => {
      if (Array.isArray(data)) {
        const monthStr = new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' });
        
        if (!window.CURRENT_AFFAIRS_DB[monthStr]) {
          const newDb = { [monthStr]: data };
          Object.assign(newDb, window.CURRENT_AFFAIRS_DB);
          const oldKeys = Object.keys(window.CURRENT_AFFAIRS_DB);
          oldKeys.forEach(k => delete window.CURRENT_AFFAIRS_DB[k]);
          Object.assign(window.CURRENT_AFFAIRS_DB, newDb);
        } else {
          // Avoid duplicating identical entries if fetching happens again during dev
          const existingSummaries = window.CURRENT_AFFAIRS_DB[monthStr].map(i => i.summary);
          const newData = data.filter(item => !existingSummaries.includes(item.summary));
          window.CURRENT_AFFAIRS_DB[monthStr] = [...newData, ...window.CURRENT_AFFAIRS_DB[monthStr]];
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

  const cycle = getExamCycleBounds();

  // Filter DB keys to only those within the current exam cycle
  const allKeys  = Object.keys(window.CURRENT_AFFAIRS_DB);
  const cycleKeys = allKeys.filter(k => cycle.months.includes(k));
  // If no data falls in current cycle, fall back to all keys (graceful degradation)
  const keys = cycleKeys.length > 0 ? cycleKeys : allKeys;

  // Auto-select a month: prefer current month → first month in cycle → fallback first key
  if (!keys.includes(activeCaMonth)) {
    const currentMonthStr = new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' });
    if (keys.includes(currentMonthStr)) {
      activeCaMonth = currentMonthStr;
    } else if (keys.length > 0) {
      activeCaMonth = keys[keys.length - 1]; // latest month in cycle
    }
  }

  const monthsList = document.getElementById("ca-month-list");
  monthsList.innerHTML = "";

  // Interactive Cycle Card selector at top of sidebar
  const cycleCard = document.createElement("div");
  cycleCard.className = "panel glow";
  cycleCard.style.cssText = "padding: 12px; margin-bottom: 16px; background: rgba(34,197,94,0.08); border: 1px solid rgba(34,197,94,0.2); border-radius: 8px; text-align: center; cursor: pointer; transition: all 0.2s; user-select: none;";
  
  const config = CA_CYCLES_CONFIG[activeCaCycle];
  cycleCard.innerHTML = `
    <div style="font-size: 0.65rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px;">CURRENT CYCLE</div>
    <div style="font-size: 1.1rem; color: var(--accent); font-weight: 800; font-family: var(--font-mono); margin-bottom: 6px;">${config.label}</div>
    <div style="font-size: 0.75rem; color: var(--text-secondary); font-family: var(--font-mono); line-height: 1.4;">${config.shortLabel.replace(/\n/g, '<br>')}</div>
  `;
  
  cycleCard.addEventListener('click', () => {
    activeCaCycle = activeCaCycle === 'AFCAT' ? 'NDA_CDS' : 'AFCAT';
    localStorage.setItem('activeCaCycle', activeCaCycle);
    
    // reset active month to force re-evaluation of best month in new cycle
    activeCaMonth = ""; 
    renderCurrentAffairsHub();
  });
  cycleCard.onmouseover = () => cycleCard.style.background = 'rgba(34,197,94,0.15)';
  cycleCard.onmouseout = () => cycleCard.style.background = 'rgba(34,197,94,0.08)';
  
  monthsList.appendChild(cycleCard);

  // Render only cycle-relevant months in sorted order
  cycle.months
    .filter(m => keys.includes(m))
    .forEach(month => {
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

function isArticleForCycle(article, cycleConfig, monthStr) {
  const text = ((article.text || '') + ' ' + (article.summary || '') + ' ' + (article.details ? JSON.stringify(article.details) : '')).toLowerCase();
  const topic = (article.topic || '').toLowerCase();
  const isAFCAT = cycleConfig === 'AFCAT';
  const isNDACDS = cycleConfig === 'NDA_CDS';

  const isAirForce = topic.includes('air force') || topic.includes('iaf') || topic.includes('aviation');
  const isArmyNaval = topic.includes('army') || topic.includes('navy') || topic.includes('naval') || topic.includes('military');

  let day = -1;
  if (monthStr.includes('April')) {
    const m = text.match(/\b([1-9]|[1-2][0-9]|3[0-1])\s*(?:th|st|nd|rd)?\s+april\b/) || text.match(/\bapril\s+([1-9]|[1-2][0-9]|3[0-1])\b/);
    if (m) day = parseInt(m[1]);
    
    if (day !== -1) {
      if (day <= 12) {
        if (isAFCAT) return true;
        if (isNDACDS && isArmyNaval && !isAirForce) return true;
        return false;
      } else {
        if (isNDACDS) return true;
        if (isAFCAT && isAirForce) return true;
        return false;
      }
    }
  } else if (monthStr.includes('August')) {
    const m = text.match(/\b([1-9]|[1-2][0-9]|3[0-1])\s*(?:th|st|nd|rd)?\s+august\b/) || text.match(/\baugust\s+([1-9]|[1-2][0-9]|3[0-1])\b/);
    if (m) day = parseInt(m[1]);
    
    if (day !== -1) {
      if (day <= 8) {
        return true;
      } else {
        if (isNDACDS) return true;
        if (isAFCAT) return false;
      }
    }
  } else if (monthStr.includes('September')) {
    if (isAFCAT) return false;
  }
  
  return true;
}

function renderCurrentMonthAffairs() {
  const pane = document.getElementById("ca-content-pane");
  let data = window.CURRENT_AFFAIRS_DB[activeCaMonth] || [];
  
  data = data.filter(item => isArticleForCycle(item, activeCaCycle, activeCaMonth));

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
      <p style="margin:0 0 12px; font-size:0.82rem; color:var(--text-muted); font-family:var(--font-mono); letter-spacing:0.5px;">PIB + NEWS · AI-ENRICHED · ${data.length} ITEMS · CYCLE: ${getExamCycleBounds().cycleLabel}</p>
      <p style="margin:0 0 12px; font-size:0.75rem; color:var(--info); font-style:italic; opacity: 0.9;">Update Schedule: Refreshes daily with new intelligence briefs.</p>
      <div style="display:flex; gap:5px; flex-wrap:wrap;">
        ${Object.entries(topicCounts).map(([t,c]) => {
          const safeTopic = (t || 'General').toUpperCase().replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
          return `<span onclick="document.getElementById('topic-${safeTopic}')?.scrollIntoView({behavior: 'smooth', block: 'start'})" onmouseover="this.style.background='rgba(255,255,255,0.12)'" onmouseout="this.style.background='rgba(255,255,255,0.06)'" style="cursor:pointer; font-family:var(--font-mono); font-size:0.65rem; font-weight:600; padding:2px 7px; border-radius:3px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); letter-spacing:0.4px; white-space:nowrap; text-transform:uppercase; transition:background 0.2s;">${t}&thinsp;·&thinsp;${c}</span>`;
        }).join('')}
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
    if (t.includes('sport')) return '#0d9488';   // teal for Sports
    if (t.includes('award')) return '#6d28d9';
    return '#64748b';
  }

  let topicSeen = new Set();
  data.forEach(item => {
    const topicColor = getTopicColor(item.topic, item.topicColor);
    const topicLabel = (item.topic || 'General').toUpperCase();
    const safeTopic = topicLabel.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
    
    let idAttr = '';
    if (!topicSeen.has(safeTopic)) {
      topicSeen.add(safeTopic);
      idAttr = ` id="topic-${safeTopic}"`;
    }
    
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

    // Source Transparency block
    let sourceTransparencyBox = '';
    if (item.originalSource) {
      sourceTransparencyBox = `
        <div style="margin-top:10px; padding:10px; background:rgba(34,197,94,0.04); border:1px solid rgba(34,197,94,0.15); border-radius:6px; display:flex; flex-direction:column; gap:6px;">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px;">
            <div style="display:flex; align-items:center; gap:4px; font-size:0.65rem; font-weight:700; letter-spacing:0.8px; color:#4ade80; text-transform:uppercase; font-family:var(--font-mono);">
              <span style="display:inline-block; width:6px; height:6px; border-radius:50%; background:#4ade80; box-shadow:0 0 6px #4ade80;"></span> 
              Official Source Verification
            </div>
            <span style="font-size:0.65rem; font-weight:700; padding:1px 6px; border-radius:3px; background:rgba(34,197,94,0.12); color:#4ade80; border:1px solid rgba(34,197,94,0.25); font-family:var(--font-mono); text-transform:uppercase;">${item.verificationStatus || 'VERIFIED'}</span>
          </div>
          <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap:6px; font-size:0.75rem; color:var(--text-secondary);">
            <div><strong>Source:</strong> <span style="color:var(--text-primary);">${item.originalSource}</span></div>
            <div><strong>Published:</strong> <span style="color:var(--text-primary); font-family:var(--font-mono);">${item.publicationDate || new Date().toISOString().split('T')[0]}</span></div>
            ${item.relatedOfficialDocuments ? `<div><strong>Document Ref:</strong> <span style="color:var(--text-primary); font-style:italic;">${item.relatedOfficialDocuments}</span></div>` : ''}
          </div>
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
      <div${idAttr} class="panel" style="margin-bottom:16px; border-left:3px solid ${topicColor}; padding:16px 18px; position:relative; overflow:hidden;">
        <div style="position:absolute; top:0; right:0; width:100px; height:100px; background:radial-gradient(circle at top right, rgba(${hexToRgb(topicColor)},0.06), transparent 70%); pointer-events:none;"></div>
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px; flex-wrap:wrap;">
          <span style="font-family:var(--font-mono); font-size:0.65rem; font-weight:700; letter-spacing:0.8px; padding:3px 8px; border-radius:3px; background:${topicColor}1a; border:1px solid ${topicColor}44; color:${topicColor}; text-transform:uppercase; white-space:nowrap;">${topicLabel}</span>
        </div>
        <div style="font-size:0.92rem; line-height:1.65; color:var(--text-primary); font-family:var(--font-main);">${parseWikiLinks(mainText)}</div>
        ${item.upscHighlights && item.upscHighlights.length > 0 ? `
          <div style="margin-top:14px; padding:11px 14px; background:rgba(255,210,0,0.06); border:1px solid rgba(255,210,0,0.2); border-left:3px solid rgba(255,210,0,0.65); border-radius:0 5px 5px 0;">
            <div style="display:flex; align-items:center; gap:5px; font-size:0.67rem; font-weight:700; letter-spacing:1px; color:rgba(255,200,50,0.85); margin-bottom:8px; text-transform:uppercase; font-family:var(--font-mono);">
              <span style="color:rgba(255,200,50,0.85);">${SVG_FACTS}</span> UPSC Key Facts
            </div>
            <ul style="margin:0; padding-left:16px; display:flex; flex-direction:column; gap:5px; list-style:disc;">
              ${item.upscHighlights.filter(h => h && h.length > 5).map(h => `<li style="font-size:0.86rem; color:var(--text-primary); line-height:1.55;">${parseWikiLinks(h)}</li>`).join('')}
            </ul>
          </div>
        ` : ''}
        ${legacyDetails}
        ${contextBox}
        ${sourceTransparencyBox}
        ${item.quickSummary ? `
          <details style="margin-top: 12px; border: 1px solid rgba(168, 85, 247, 0.2); border-radius: 6px; background: rgba(168, 85, 247, 0.02); overflow: hidden;">
            <summary style="padding: 10px 14px; font-weight: 700; font-size: 0.8rem; color: #c084fc; cursor: pointer; user-select: none; display: flex; align-items: center; justify-content: space-between; outline: none; background: rgba(168, 85, 247, 0.05);">
              <span>⚡ COMMAND INTEL: Click to expand UPSC Depth Analysis</span>
            </summary>
            <div style="padding: 16px; border-top: 1px solid rgba(168, 85, 247, 0.15); font-size: 0.88rem; line-height: 1.6; display: flex; flex-direction: column; gap: 14px; color: var(--text-secondary);">
              <div>
                <strong style="color: var(--accent); display: block; margin-bottom: 4px; font-family: var(--font-mono); font-size: 0.72rem; text-transform: uppercase;">Quick Summary (50-100 words)</strong>
                <div style="color: var(--text-primary); font-size: 0.9rem;">${parseWikiLinks(item.quickSummary)}</div>
              </div>
              
              <div>
                <strong style="color: var(--accent); display: block; margin-bottom: 4px; font-family: var(--font-mono); font-size: 0.72rem; text-transform: uppercase;">Detailed Analysis (500-1000 words)</strong>
                <div style="line-height: 1.65; white-space: pre-line;">${parseWikiLinks(item.detailedAnalysis)}</div>
              </div>
              
              <div>
                <strong style="color: var(--accent); display: block; margin-bottom: 4px; font-family: var(--font-mono); font-size: 0.72rem; text-transform: uppercase;">Background Context</strong>
                <div>${parseWikiLinks(item.backgroundContext)}</div>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 4px;">
                <div>
                  <strong style="color: var(--accent); display: block; margin-bottom: 4px; font-family: var(--font-mono); font-size: 0.72rem; text-transform: uppercase;">Key Stakeholders</strong>
                  <ul style="padding-left: 16px; margin: 0; list-style: square;">
                    ${item.stakeholders ? item.stakeholders.map(s => `<li>${parseWikiLinks(s)}</li>`).join('') : '<li>General</li>'}
                  </ul>
                </div>
                <div>
                  <strong style="color: var(--accent); display: block; margin-bottom: 4px; font-family: var(--font-mono); font-size: 0.72rem; text-transform: uppercase;">Related Topics</strong>
                  <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                    ${item.relatedTopics ? item.relatedTopics.map(t => `<span style="font-size: 0.75rem; background: rgba(255,255,255,0.05); padding: 2px 6px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.08);">${parseWikiLinks(t)}</span>`).join('') : 'None'}
                  </div>
                </div>
              </div>

              <div style="margin-top: 6px; padding-top: 10px; border-top: 1px dashed rgba(255,255,255,0.08);">
                <strong style="color: var(--accent); display: block; margin-bottom: 6px; font-family: var(--font-mono); font-size: 0.72rem; text-transform: uppercase;">Exam Relevance Matrix</strong>
                <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 6px; text-align: center; font-size: 0.72rem;">
                  ${item.examRelevanceMatrix ? Object.entries(item.examRelevanceMatrix).map(([exam, importance]) => `
                    <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); padding: 6px; border-radius: 4px;">
                      <div style="font-weight: bold; color: var(--text-muted);">${exam}</div>
                      <div style="color: ${importance.toLowerCase().includes('high') ? 'var(--danger)' : 'var(--text-primary)'}; font-weight: bold; margin-top: 2px;">${importance}</div>
                    </div>
                  `).join('') : ''}
                </div>
              </div>

              ${item.potentialQuestions ? `
                <div style="margin-top: 8px; padding: 12px; background: rgba(0,0,0,0.15); border-radius: 6px; border: 1px solid rgba(255,255,255,0.05); display: flex; flex-direction: column; gap: 8px; font-size: 0.82rem;">
                  <strong style="color: var(--info); font-family: var(--font-mono); font-size: 0.72rem; text-transform: uppercase;">💡 Analytical Doubts & SSB Scenarios</strong>
                  ${item.potentialQuestions.shortAnswers ? `<div><strong>Short Answer Qs:</strong><ul style="margin: 2px 0 0; padding-left: 16px;">${item.potentialQuestions.shortAnswers.map(q => `<li>${q}</li>`).join('')}</ul></div>` : ''}
                  ${item.potentialQuestions.interviewQuestions ? `<div><strong>Personal Interview Qs:</strong><ul style="margin: 2px 0 0; padding-left: 16px;">${item.potentialQuestions.interviewQuestions.map(q => `<li>${q}</li>`).join('')}</ul></div>` : ''}
                  ${item.potentialQuestions.ssbDiscussionTopics ? `<div><strong>SSB Group Discussion:</strong><ul style="margin: 2px 0 0; padding-left: 16px;">${item.potentialQuestions.ssbDiscussionTopics.map(t => `<li>${t}</li>`).join('')}</ul></div>` : ''}
                </div>
              ` : ''}
            </div>
          </details>
        ` : ''}
        ${legacyDetails}
      </div>
    `;
  });

  // MCQ section
  // Support both legacy `item.mcq` (object) and new advanced schema `item.mcqs` (array)
  const itemsWithMcq = [];
  data.forEach(item => {
    if (item.mcqs && Array.isArray(item.mcqs) && item.mcqs.length > 0) {
      itemsWithMcq.push(item);
    } else if (item.mcq && item.mcq.question) {
      itemsWithMcq.push(item);
    }
  });

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
      
      // Normalize to an array of questions to unify rendering
      const questionsToRender = [];
      if (item.mcqs && Array.isArray(item.mcqs)) {
        questionsToRender.push(...item.mcqs);
      } else if (item.mcq && item.mcq.question) {
        questionsToRender.push(item.mcq);
      }

      questionsToRender.forEach((qObj, qIdx) => {
        const uniqueId = `${item.id}-q${qIdx}`;
        html += `
          <div style="margin-bottom:26px; padding-bottom:22px; ${(index === itemsWithMcq.length - 1 && qIdx === questionsToRender.length - 1) ? '' : 'border-bottom:1px solid var(--border);'}" id="ca-mcq-${uniqueId}">
            <div style="display:flex; align-items:center; gap:6px; margin-bottom:10px;">
              <span style="font-family:var(--font-mono); font-size:0.62rem; font-weight:700; letter-spacing:0.6px; padding:2px 6px; border-radius:3px; background:${topicColor}1a; color:${topicColor}; text-transform:uppercase;">${item.topic || 'General'}</span>
              <span style="font-family:var(--font-mono); font-size:0.65rem; color:var(--text-muted);">Q${index + 1}.${qIdx + 1}</span>
            </div>
            <p style="font-weight:600; font-size:0.94rem; margin:0 0 14px; line-height:1.55; color:var(--text-primary);">${qObj.question}</p>
            <div style="display:flex; flex-direction:column; gap:7px;">
        `;
        
        let correctValue = qObj.correct;
        // Legacy support: if correct is a string like "A", convert to index 0
        if (typeof correctValue === 'string') {
          correctValue = correctValue.charCodeAt(0) - 65;
        }
        
        if (qObj.options && Array.isArray(qObj.options)) {
          qObj.options.forEach((opt, optIdx) => {
            html += `
              <button class="action-btn" onclick="checkCaMcq('${uniqueId}', ${optIdx}, ${correctValue}, this)" style="text-align:left; width:100%; justify-content:flex-start; padding:9px 13px; font-family:var(--font-main);">
                <span style="font-family:var(--font-mono); font-weight:700; font-size:0.8rem; margin-right:10px; color:var(--text-muted); min-width:18px;">${String.fromCharCode(65 + optIdx)}</span>${opt}
              </button>
            `;
          });
        }
        
        html += `
            </div>
            <div class="solution-explanation" id="ca-explain-${uniqueId}" style="display:none; margin-top:12px;">${qObj.explanation}</div>
          </div>
        `;
      });
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
// SUPABASE DATA INITIALIZATION
// ==========================================
window.CBT_EXAMS_DATABASE = [];
window.isSupabaseLoaded = false;

async function initSupabaseData() {
  if (!window.supabaseClient) {
    console.warn("Supabase client not initialized.");
    return;
  }
  
  try {
    const mockHubContainer = document.getElementById("cbtMockList");
    if (mockHubContainer) {
      mockHubContainer.innerHTML = '<div style="padding: 20px;">Securely loading exam database from Supabase...</div>';
    }
    
    // Fetch exams
    const { data: exams, error: examsErr } = await window.supabaseClient.from('exams').select('*');
    if (examsErr) throw examsErr;
    
    // Fetch questions
    // In production with 10k+ questions, this should be paginated or loaded on-demand per exam
    const { data: questions, error: questionsErr } = await window.supabaseClient.from('questions').select('*');
    if (questionsErr) throw questionsErr;
    
    // Construct local object
    window.CBT_EXAMS_DATABASE = exams.map(exam => {
      return {
        id: exam.id,
        title: exam.title,
        duration: exam.duration,
        totalMarks: exam.total_marks,
        instructions: exam.instructions || [],
        sections: exam.sections || [],
        negativeMarking: exam.negative_marking,
        type: exam.type,
        exam: exam.title.includes('NDA') ? 'NDA' : (exam.title.includes('AFCAT') ? 'AFCAT' : 'CDS'),
        subject: exam.title.includes('Math') ? 'Mathematics' : (exam.title.includes('English') ? 'English' : 'General Studies & Aptitude'),
        questions: questions.filter(q => q.exam_id === exam.id).map(q => ({
          id: q.id,
          question: q.question,
          options: q.options,
          correct: q.correct,
          explanation: q.explanation,
          topicId: q.topic_id
        }))
      };
    });
    
    window.isSupabaseLoaded = true;
    console.log("Successfully loaded CBT DB from Supabase. Exams:", window.CBT_EXAMS_DATABASE.length);
    
    // If the user is on the mock hub screen, re-render it now that data is available
    if (document.getElementById("screen-cbt-mock-hub") && document.getElementById("screen-cbt-mock-hub").classList.contains("active")) {
      renderCbtMockHub();
    }
  } catch (err) {
    console.error("Failed to load data from Supabase:", err);
  }
}

// ==========================================
// 1. STATE MANAGEMENT & DOM ELEMENTS
// =============================================================================
// 10. CBT MOCK TEST ENGINE MODULE
// ==========================================
let activeExamFilter = "all";
let CBT_SESSION = null; 

// -- Drill-Down View Logic for CBT Mock Hub --
window.openCbtExam = function(examId) {
  activeExamFilter = examId;
  document.getElementById('cbt-active-exam-title').innerText = examId + ' Mock Exams';
  
  document.querySelectorAll('#screen-cbt-mock-hub .full-page-view').forEach(el => {
    el.style.display = 'none';
    el.classList.remove('active');
  });
  const listView = document.getElementById('cbt-view-list');
  if(listView) {
    listView.style.display = 'block';
    listView.classList.add('active');
  }
  
  renderCbtMockHub();
};

window.backToCbtExams = function() {
  activeExamFilter = 'all';
  document.querySelectorAll('#screen-cbt-mock-hub .full-page-view').forEach(el => {
    el.style.display = 'none';
    el.classList.remove('active');
  });
  const examsView = document.getElementById('cbt-view-exams');
  if(examsView) {
    examsView.style.display = 'block';
    examsView.classList.add('active');
  }
}; 

function renderCbtMockHub() {
  const container = document.getElementById("exams-list-container");
  container.innerHTML = "";
  
  const subjectsMap = {
    "Mathematics": [],
    "English": [],
    "General Studies & Aptitude": []
  };

  CBT_EXAMS_DATABASE.forEach(exam => {
    if (activeExamFilter !== "all" && exam.exam !== activeExamFilter) {
      return;
    }
    
    const sub = exam.subject.toLowerCase();
    if (sub.includes("math")) {
      subjectsMap["Mathematics"].push(exam);
    } else if (sub.includes("english")) {
      subjectsMap["English"].push(exam);
    } else {
      subjectsMap["General Studies & Aptitude"].push(exam);
    }
  });

  for (const [subjectName, list] of Object.entries(subjectsMap)) {
    if (list.length === 0) continue;

    // Subject Group Header (spans full grid width)
    const sectionHeader = document.createElement("div");
    sectionHeader.style.cssText = "grid-column: 1 / -1; margin-top: 24px; margin-bottom: 12px; border-bottom: 2px solid var(--border); padding-bottom: 6px; display: flex; align-items: center; gap: 8px;";
    
    let subIcon = "📚";
    if (subjectName === "Mathematics") subIcon = "📐";
    else if (subjectName === "English") subIcon = "✍️";
    else subIcon = "🌍";

    sectionHeader.innerHTML = `<h2 style="color: var(--accent); font-family: var(--font-logo); font-size: 1.1rem; margin: 0; letter-spacing: 0.5px; text-transform: uppercase;">${subIcon} ${subjectName} Papers</h2>`;
    container.appendChild(sectionHeader);

    // Subject Group Cards
    list.forEach(exam => {
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
            <span>${exam.questionsCount || (exam.questions ? exam.questions.length : 0)} Qs</span>
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
  const launcher = document.getElementById("chatbot-launcher");
  if (launcher) launcher.style.display = "none";
  const drawer = document.getElementById("chatbot-drawer");
  if (drawer) drawer.style.display = "none";

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
      const launcher = document.getElementById("chatbot-launcher");
      if (launcher) launcher.style.display = "flex";
      submitCbtExam();
    }
  } else {
    const confirmExit = confirm(`You have only attempted ${attemptedCount} out of ${totalQuestions} questions. Ending the test now will abort your attempt and return you to the Dashboard. Proceed?`);
    if (confirmExit) {
      if (CBT_SESSION.timerId) clearInterval(CBT_SESSION.timerId);
      document.getElementById("cbt-player-overlay").style.display = "none";
      // Restore chatbot icon
      const launcher = document.getElementById("chatbot-launcher");
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

// Toggle image upload row depending on selected Ask Dronacharya mode
document.querySelectorAll('input[name="ai-mode"]').forEach(radio => {
  radio.addEventListener('change', (e) => {
    const imgContainer = document.getElementById('ai-image-upload-container');
    if (imgContainer) {
      imgContainer.style.display = e.target.value === 'solve' ? 'flex' : 'none';
    }
  });
});

document.getElementById("ai-generate-btn").addEventListener("click", async () => {
  const query = document.getElementById("ai-custom-topic-input").value.trim();
  const fileInput = document.getElementById("ai-doubt-image-input");
  const hasImage = fileInput && fileInput.files && fileInput.files[0];
  if (!query && !hasImage) {
    alert("Please enter a topic or attach a doubt image.");
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

  const modelsToTry = ["gemini-1.5-flash", "gemini-2.5-flash", "gemini-3.1-flash-lite", "gemini-2.0-flash", "gemini-1.5-flash", "gemini-1.5-pro"];
  let success = false;
  let generatedData = null;

  for (const model of modelsToTry) {
    try {
      const response = await fetch('/api/gemini', {
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

async function triggerAiSolveDoubt(templateKey, customQueryText = "", contextText = "") {
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
   let imagePart = null;
  const fileInput = document.getElementById("ai-doubt-image-input");
  if (fileInput && fileInput.files && fileInput.files[0]) {
    const file = fileInput.files[0];
    try {
      const base64Data = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result;
          const base64 = result.substring(result.indexOf(",") + 1);
          resolve(base64);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
      imagePart = {
        inlineData: {
          mimeType: file.type,
          data: base64Data
        }
      };
      console.log("[DRONACHARYA-DOUBT] Successfully parsed attached image:", file.name);
    } catch (err) {
      console.error("[DRONACHARYA-DOUBT] Error reading image file:", err);
    }
  }

  let syllabusText = "";
  if (templateKey && window.OFFICIAL_SYLLABUS_DATA && window.OFFICIAL_SYLLABUS_DATA[templateKey]) {
    syllabusText = `\n\nEnsure you cover the official UPSC/AFCAT syllabus requirements: ${window.OFFICIAL_SYLLABUS_DATA[templateKey]}`;
  }
  
  let pyqText = "";
  if (templateKey && window.PYQ_TRENDS_DATA && window.PYQ_TRENDS_DATA[templateKey]) {
    pyqText = `\n\nTake note of the following actual questions and trends from the last 7 years (2020-2026) of UPSC/AFCAT exams on this topic, and ensure they are addressed in the explanation: ${window.PYQ_TRENDS_DATA[templateKey]}`;
  }

  let contextPrompt = "";
  if (contextText) {
    contextPrompt = `\n\nCONTEXT OF THE QUERY: The student clicked this term while studying/viewing: "${contextText}". You MUST use this context to resolve any ambiguity in the term.
Specifically, adapt the explanation dynamically to the context:
- For example, if the term is "NATO" and context is "History", explain its historical evolution (Cold War origin).
- If context is "Current Affairs", explain its modern geopolitical significance.
- If context is "Defence Studies", explain its military structure and doctrine.
- If context is "International Relations", explain its diplomatic relevance.
- Similarly, if they clicked "Cell" under a Biology topic, explain biological cells, whereas under a military/strategy topic, explain military planning cells. Make the entire explanation highly relevant to this specific context.`;
  }

  let prompt = `You are Guru Dronacharya, the legendary ancient tutor and guide, acting as the AI tutor for Indian Defence Examinations (NDA, CDS, AFCAT) and civil services exams. Speak with authority, deep wisdom, and encouraging pedagogical guidance.
Your goal is to teach the user the topic "${topicName}" so exceptionally well that they are fully equipped to clear the exam with excellent marks.
Structure your notes as a comprehensive educational guide.${contextPrompt}`;

  if (imagePart) {
    prompt += `\n\nADDITIONAL INPUT: The student has attached an image containing a specific question or doubt related to "${topicName}". You must read and analyze the doubt from the attached image, solve it completely, and explain the solution with detailed step-by-step reasoning.`;
  }

  prompt += `\n\nIMPORTANT REQUIREMENT: Throughout your response, wrap any important terms, sub-topics, historical dates, organizations, treaties, laws, equations, or doctrines in double square brackets, e.g. [[Constituent Assembly]] or [[Article 19]], so that they act as recursive clickable knowledge graph nodes. Generate at least 15-20 such inline links.

Cover the following sections in your notes:
1. Level 1: Instant Definition:
   - A concise one-line explanation of "${topicName}".
2. Level 2: Detailed Concept Breakdown:
   - What it is, Why it exists, How it works, Historical background, Key components, Advantages, and Limitations.
3. Level 3: Exam-Oriented Notes:
   - Specific relevance to UPSC, CDS, AFCAT, NDA, SSC, and State PSC exams.
   - Frequently asked areas and common exam traps/misconceptions.
4. Level 4: Memory Techniques:
   - Mnemonics, short tricks, easy recall methods, and exam hacks. Wrap in <div class="mnemonic-box"><strong>Mnemonic:</strong> ...</div> or <div class="trap-box"><strong>Exam Trap:</strong> ...</div> or <div class="strategist-tip"><strong>Strategist Tip:</strong> ...</div>.
5. Level 5: Related Concepts:
   - Display 10-20 related terms as clickable AI knowledge links (e.g. [[Related Term 1]], [[Related Term 2]]).
6. Topic Dependency Tree:
   - Prerequisites (Foundational concepts to understand first, e.g. [[Prerequisite Concept]])
   - Advanced Concepts (What to study next, e.g. [[Advanced Concept]])
7. AI Follow-Up Learning:
   - Common Doubts Students Ask (Generate 5 questions starting with Why, How, When, Where, What if, e.g., "[[Why is this concept vital for national security?]]" - make sure they are fully wrapped in double square brackets so the user can click them to run a follow-up doubt resolution).
8. Visual Understanding:
   - Present comparative tables, step-by-step text flowcharts, chronological timelines, or cause-and-effect diagrams to map out the concept structurally.

Use bold headings, structured layout, and do NOT use any emojis, icons, or pictorial characters. Keep the content completely emoji-free and professional.${syllabusText}${pyqText}`;

  const modelsToTry = ["gemini-1.5-flash", "gemini-2.5-flash", "gemini-3.1-flash-lite", "gemini-2.0-flash", "gemini-1.5-flash", "gemini-1.5-pro"];
  let replyText = "";
  let success = false;

  for (const model of modelsToTry) {
    try {
      const parts = [{ text: prompt }];
      if (imagePart) {
        parts.push(imagePart);
      }
      const response = await fetch('/api/gemini', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: model,
          contents: [{ parts: parts }]
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
        <div style="font-size:0.95rem; line-height:1.8; color:#f8fafc !important; font-weight: 400; letter-spacing: 0.3px; text-shadow: 0 0 1px rgba(255,255,255,0.1);">${parseWikiLinks(formattedText)}</div>
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

  let promptText = `You are Dronacharya, the legendary ancient tutor and guide, acting as the AI tutor for cadets preparing for NDA, CDS, AFCAT, CAPF, SSC, and other competitive defence examinations. Speak with the authority, deep wisdom, and encouraging pedagogical guidance of Guru Dronacharya.
Solve the user's doubt exhaustively using the following 8-step Doubt Resolution Framework. Do not give short answers:
Step 1: Understand and state what the student is confused about.
Step 2: Explain the concept in simple, beginner-friendly language.
Step 3: Explain the same concept in detailed, comprehensive language.
Step 4: Provide at least 3 simple examples and 3 real-world/defence applications.
Step 5: Address and debunk common exam misconceptions or traps.
Step 6: Outline or recommend diagrammatic elements (timelines, flowcharts, concept trees) or comparison tables.
Step 7: Reference related concepts (e.g. [[Federalism]], [[Parliament]]) using Wikipedia double brackets.
Step 8: Generate 3 practice MCQs/Scenario-based questions with answers and detailed reasoning to check understanding.

- SOURCE INTEGRITY: Prioritize official, primary information (PIB, MoD, Supreme Court, Gazette of India, RBI, NITI Aayog, DRDO, ISRO, UN, etc.) over secondary coaching summaries.

Doubt to solve: ${text}`;
  if (contextText.length > 50) {
    promptText += `\n\nCONTEXT (The user is currently reading this material):\n${contextText}\n\nUse this context to inform your answer if relevant. Format math with $ or $$.`;
  }
  
  try {
    const modelsToTry = ["gemini-1.5-flash", "gemini-2.5-flash", "gemini-3.1-flash-lite", "gemini-2.0-flash", "gemini-1.5-flash", "gemini-1.5-pro"];
    let success = false;
    let replyText = "";
    let lastStatus = 0;
    
    for (const model of modelsToTry) {
      try {
        const response = await fetch('/api/gemini', {
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
      replyEl.innerHTML = parseWikiLinks(formattedText);
      
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
          const modelsToTry = ["gemini-1.5-flash", "gemini-2.5-flash", "gemini-3.1-flash-lite", "gemini-2.0-flash", "gemini-1.5-flash", "gemini-1.5-pro"];
          let success = false;
          let resultText = "";
          let lastStatus = 0;
          
          for (const model of modelsToTry) {
            try {
              const response = await fetch('/api/gemini', {
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
          const modelsToTry = ["gemini-1.5-flash", "gemini-2.5-flash", "gemini-3.1-flash-lite", "gemini-2.0-flash", "gemini-1.5-flash", "gemini-1.5-pro"];
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
              
              const response = await fetch('/api/gemini', {
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
  const profileDiv = document.querySelector(".user-profile-widget") || document.querySelector(".user-profile");
  const avatarDiv = document.getElementById("profile-avatar") || document.getElementById("user-avatar");
  const nameDiv = document.getElementById("profile-branch") || document.querySelector(".user-name");
  const rankDiv = document.getElementById("profile-rank") || document.getElementById("user-rank");
  
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
    console.log(" Post-Exam Prep Cycle logic triggered. (Erasure disabled by user request to keep April/May/June accessible).");
    // const oldMonths = ["January 2026", "February 2026", "March 2026", "April 2026", "May 2026", "June 2026", "July 2026", "August 2026"];
    // let erasedCount = 0;
    // oldMonths.forEach(m => {
    //   if (window.CURRENT_AFFAIRS_DB[m]) {
    //     delete window.CURRENT_AFFAIRS_DB[m];
    //     erasedCount++;
    //   }
    // });
    
    // Show a visual alert of the cleanup (disabled)
    // setTimeout(() => {
    //   alert(" Post-Exam Cycle Initiated!\n\nOutdated current affairs (prior to September 2026) have been erased.\nYour study path is now updated with the next cycle's current affairs.");
    // }, 500);
  }
  
  // 1. Fisher-Yates Shuffle current affairs items inside each month
  for (const month in window.CURRENT_AFFAIRS_DB) {
    const list = window.CURRENT_AFFAIRS_DB[month];
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
    afcat: { name: "AFCAT 2 2026", date: new Date("2026-08-08T10:00:00").getTime() },
    nda: { name: "NDA 2 2026", date: new Date("2026-09-13T10:00:00").getTime() },
    cds: { name: "CDS 2 2026", date: new Date("2026-09-13T09:00:00").getTime() }
  };

  // Hide native select dropdown
  selector.style.display = "none";

  // Build custom dropdown container
  const customContainer = document.createElement("div");
  customContainer.id = "custom-exam-dropdown-container";
  customContainer.style.cssText = "position: relative; width: 100%; margin-bottom: 10px;";

  const customBtn = document.createElement("div");
  customBtn.id = "custom-exam-dropdown-btn";
  customBtn.style.cssText = `
    width: 100%;
    padding: 8px 12px;
    border-radius: 6px;
    background-color: var(--bg-primary);
    border: 1px solid var(--border);
    color: var(--text-primary);
    font-size: 0.82rem;
    font-family: var(--font-main);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    transition: all 0.2s ease;
  `;

  const customList = document.createElement("div");
  customList.id = "custom-exam-dropdown-list";
  customList.style.cssText = `
    display: none;
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    width: 100%;
    background-color: #111827;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.5);
    z-index: 100;
    overflow: hidden;
    box-sizing: border-box;
  `;

  customContainer.appendChild(customBtn);
  customContainer.appendChild(customList);
  selector.parentNode.insertBefore(customContainer, selector);

  // Helper to resolve colors and labels dynamically
  const getExamData = (val) => {
    let color = "#ffffff";
    let name = "Nearest Exam (Auto)";
    if (val === "afcat") {
      color = "#38bdf8"; // sky blue
      name = "AFCAT 2 2026";
    } else if (val === "cds") {
      color = "#87a96b"; // olive green
      name = "CDS 2 2026";
    } else if (val === "nda") {
      color = "#ffffff";
      name = "NDA 2 2026";
    } else if (val === "auto") {
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
      color = nearestKeyVal === "afcat" ? "#38bdf8" : (nearestKeyVal === "cds" ? "#87a96b" : "#ffffff");
      name = exams[nearestKeyVal].name + " (Nearest)";
    }
    return { color, name };
  };

  // Re-render custom dropdown state
  const renderCustomDropdown = () => {
    const currentVal = selector.value;
    const currentData = getExamData(currentVal);

    customBtn.innerHTML = `
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="width: 10px; height: 10px; border-radius: 50%; background-color: ${currentData.color}; display: inline-block; box-shadow: 0 0 6px ${currentData.color};"></span>
        <span>${currentData.name}</span>
      </div>
      <span style="font-size: 0.6rem; color: var(--text-muted);">▼</span>
    `;

    // Populate option panel items
    const options = ["auto", "afcat", "nda", "cds"];
    customList.innerHTML = options.map(opt => {
      const data = getExamData(opt);
      return `
        <div class="custom-dropdown-opt" data-val="${opt}" style="
          padding: 8px 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-secondary);
          font-size: 0.8rem;
          transition: background 0.2s ease;
        ">
          <span style="width: 10px; height: 10px; border-radius: 50%; background-color: ${data.color}; display: inline-block;"></span>
          <span>${data.name}</span>
        </div>
      `;
    }).join('');

    // Add option click events
    customList.querySelectorAll(".custom-dropdown-opt").forEach(optEl => {
      optEl.addEventListener("mouseenter", () => {
        optEl.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
        optEl.style.color = "var(--text-primary)";
      });
      optEl.addEventListener("mouseleave", () => {
        optEl.style.backgroundColor = "transparent";
        optEl.style.color = "var(--text-secondary)";
      });
      optEl.addEventListener("click", () => {
        const val = optEl.getAttribute("data-val");
        selector.value = val;
        localStorage.setItem("tac_countdown_selection", val);
        renderCustomDropdown();
        customList.style.display = "none";
        selector.dispatchEvent(new Event("change"));
      });
    });
  };

  // Toggle dropdown visibility
  customBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isVisible = customList.style.display === "block";
    customList.style.display = isVisible ? "none" : "block";
  });

  document.addEventListener("click", () => {
    customList.style.display = "none";
  });

  // Load target exam selection from localStorage if saved
  const savedSelection = localStorage.getItem("tac_countdown_selection") || "auto";
  selector.value = savedSelection;
  renderCustomDropdown();

  selector.addEventListener("change", (e) => {
    localStorage.setItem("tac_countdown_selection", e.target.value);
    renderCustomDropdown();
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
  initSupabaseData();
  initAppState();
  initUserProfile();
  initCountdownTimer();
  initTokenManager();
  
// Removed duplicate function from DOMContentLoaded
  initMotivationOfTheDay();
  switchScreen("dashboard");
  initAiPaperSolver();
  initWeeklyPlanner();
  
  // Search Input for Notes & Formulas screen
  const searchInput = document.getElementById("notes-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      notesSearchQuery = e.target.value;
      renderNotesBrowser();
    });
  }
  
  // Exam Tag Filters binding
  document.querySelectorAll('.exam-tag-filter').forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll('.exam-tag-filter').forEach(b => {
        b.classList.remove("active");
        b.style.background = "transparent";
        b.style.color = "";
      });
      btn.classList.add("active");
      
      const tag = btn.getAttribute("data-exam-tag");
      currentExamTagFilter = tag;
      
      // Highlight selection based on exam color code
      if (tag === 'NDA') {
        btn.style.background = 'rgba(239, 68, 68, 0.15)';
        btn.style.color = '#ef4444';
      } else if (tag === 'CDS') {
        btn.style.background = 'rgba(59, 130, 246, 0.15)';
        btn.style.color = '#3b82f6';
      } else if (tag === 'AFCAT') {
        btn.style.background = 'rgba(234, 179, 8, 0.15)';
        btn.style.color = '#eab308';
      } else {
        btn.style.background = 'rgba(255, 255, 255, 0.1)';
        btn.style.color = 'var(--text-primary)';
      }
      
      renderNotesBrowser();
    });
  });
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
  const awardsContainer  = document.getElementById("ca-awards-container");
  const exercisesContainer = document.getElementById("ca-exercises-container");

  const btnMonthly = document.getElementById("btn-ca-mode-monthly");
  const btnVisits  = document.getElementById("btn-ca-mode-visits");
  const btnFta     = document.getElementById("btn-ca-mode-fta");
  const btnDates   = document.getElementById("btn-ca-mode-dates");
  const btnAwards  = document.getElementById("btn-ca-mode-awards");
  const btnExercises = document.getElementById("btn-ca-mode-exercises");

  [monthlyContainer, visitsContainer, ftaContainer, datesContainer, awardsContainer, exercisesContainer].forEach(el => { if (el) el.style.display = "none"; });
  
  [btnMonthly, btnVisits, btnFta, btnDates, btnAwards, btnExercises].forEach(btn => { 
    if (btn) {
      btn.classList.remove("active");
      btn.style.background = "rgba(255,255,255,0.05)";
      btn.style.border = "1px solid var(--border)";
    }
  });

  function activateBtn(btn) {
    if (btn) {
      btn.classList.add("active");
      btn.style.background = "rgba(34,197,94,0.1)";
      btn.style.border = "1px solid var(--accent)";
    }
  }

  if (mode === "monthly") {
    activateBtn(btnMonthly);
    if (monthlyContainer) monthlyContainer.style.display = "flex";
  } else if (mode === "visits") {
    activateBtn(btnVisits);
    if (visitsContainer) visitsContainer.style.display = "block";
    renderCaVisitsTable();
  } else if (mode === "fta") {
    activateBtn(btnFta);
    if (ftaContainer) ftaContainer.style.display = "block";
    renderCaFtaTable();
  } else if (mode === "dates") {
    activateBtn(btnDates);
    if (datesContainer) datesContainer.style.display = "block";
    renderCaDatesTable();
  } else if (mode === "awards") {
    activateBtn(btnAwards);
    if (awardsContainer) awardsContainer.style.display = "block";
    renderCaAwardsTable();
  } else if (mode === "exercises") {
    activateBtn(btnExercises);
    if (exercisesContainer) exercisesContainer.style.display = "block";
    renderMilitaryExercisesDashboard();
  }
}
window.toggleCurrentAffairsMode = toggleCurrentAffairsMode;

let currentCaMode = 'monthly';

let isFetchingMilitaryExercises = false;
let hasFetchedMilitaryExercises = false;

function fetchMilitaryExercises() {
  if (isFetchingMilitaryExercises || hasFetchedMilitaryExercises) return;
  isFetchingMilitaryExercises = true;
  
  fetch('/api/daily-military-exercises')
    .then(async res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then(data => {
      // Overwrite global window variable if valid data is received
      if (data && typeof data === 'object') {
        window.MILITARY_EXERCISES_LIVE = data;
      }
      isFetchingMilitaryExercises = false;
      hasFetchedMilitaryExercises = true;
      renderMilitaryExercisesDashboard();
    })
    .catch(err => {
      console.warn("Could not fetch latest military exercises from API, falling back to static data.js.", err);
      isFetchingMilitaryExercises = false;
      hasFetchedMilitaryExercises = true;
      renderMilitaryExercisesDashboard();
    });
}

let meCurrentPage = 1;
const ME_ITEMS_PER_PAGE = 9;
let currentMeData = [];

function renderMilitaryExercisesDashboard() {
  const grid = document.getElementById("me-grid");
  const countEl = document.getElementById("me-results-count");
  if (!grid) return;

  if (!hasFetchedMilitaryExercises && !isFetchingMilitaryExercises) {
    grid.innerHTML = `<p style="color: var(--text-secondary); padding: 20px; grid-column: 1 / -1;">Fetching Latest Military Exercises Database...</p>`;
    fetchMilitaryExercises();
    return;
  }
  
  const liveData = window.MILITARY_EXERCISES_LIVE || (typeof MILITARY_EXERCISES_LIVE !== 'undefined' ? MILITARY_EXERCISES_LIVE : null);
  if (isFetchingMilitaryExercises && (!liveData || Object.keys(liveData).length === 0)) {
     return; 
  }

  // Flatten
  let allExercises = [];
  if (liveData) {
    for (const month in liveData) {
      if (Array.isArray(liveData[month])) {
        allExercises = allExercises.concat(liveData[month]);
      }
    }
  }

  const filtered = allExercises;

  // Sort Descending
  filtered.sort((a, b) => new Date(b.end_date || b.start_date) - new Date(a.end_date || a.start_date));
  currentMeData = filtered;
  meCurrentPage = 1;
  
  if (countEl) countEl.textContent = `Showing ${filtered.length} exercises`;
  
  renderMePage();
}

function renderMePage() {
  const grid = document.getElementById("me-grid");
  const prevBtn = document.getElementById("btn-me-prev");
  const nextBtn = document.getElementById("btn-me-next");
  const pageInd = document.getElementById("me-page-indicator");
  
  grid.innerHTML = "";
  if (currentMeData.length === 0) {
    grid.innerHTML = `<p style="color: var(--text-secondary); padding: 20px; grid-column: 1 / -1;">No exercises match the selected filters.</p>`;
    prevBtn.style.display = "none"; nextBtn.style.display = "none"; pageInd.textContent = "";
    return;
  }

  const totalPages = Math.ceil(currentMeData.length / ME_ITEMS_PER_PAGE);
  if (meCurrentPage > totalPages) meCurrentPage = totalPages;
  if (meCurrentPage < 1) meCurrentPage = 1;

  const startIdx = (meCurrentPage - 1) * ME_ITEMS_PER_PAGE;
  const pageData = currentMeData.slice(startIdx, startIdx + ME_ITEMS_PER_PAGE);

  pageData.forEach(ex => {
    const card = document.createElement('div');
    card.className = "me-card glow";
    card.style.cssText = "background: var(--bg-tertiary); border: 1px solid var(--border); border-radius: 8px; padding: 16px; cursor: pointer; transition: transform 0.2s; display: flex; flex-direction: column;";
    card.onmouseover = () => card.style.transform = "translateY(-3px)";
    card.onmouseout = () => card.style.transform = "translateY(0)";
    card.onclick = () => openMeDetailModal(ex);
    
    let tierBadge = "";
    if (ex.tier === 1) tierBadge = `<span style="background: rgba(34,197,94,0.15); color: var(--primary); padding: 2px 6px; border-radius: 4px; font-size: 0.75rem; font-weight: bold; border: 1px solid var(--primary);">TIER 1</span>`;
    else if (ex.tier === 2) tierBadge = `<span style="background: rgba(245,158,11,0.15); color: #f59e0b; padding: 2px 6px; border-radius: 4px; font-size: 0.75rem; font-weight: bold; border: 1px solid #f59e0b;">TIER 2</span>`;
    else if (ex.tier === 3) tierBadge = `<span style="background: rgba(59,130,246,0.15); color: #3b82f6; padding: 2px 6px; border-radius: 4px; font-size: 0.75rem; font-weight: bold; border: 1px solid #3b82f6;">TIER 3</span>`;
    
    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
        ${tierBadge}
        <span style="font-size: 0.75rem; color: var(--text-muted);">${ex.year}</span>
      </div>
      <h3 style="margin: 0 0 8px 0; color: var(--accent); font-size: 1.1rem;">${ex.exercise_name ? (ex.exercise_name + (ex.edition ? ` ${ex.edition}` : '')) : ex.title}</h3>
      <p style="margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-secondary); flex-grow: 1;">${ex.type}</p>
      <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 4px;"><strong>Participants:</strong> ${ex.participant_nations?.join(', ') || 'N/A'}</div>
      <div style="font-size: 0.8rem; color: var(--text-muted);"><strong>Domain:</strong> ${ex.exercise_domain?.join(', ') || 'N/A'}</div>
    `;
    grid.appendChild(card);
  });

  // Pagination UI
  if (totalPages > 1) {
    prevBtn.style.display = meCurrentPage > 1 ? "block" : "none";
    nextBtn.style.display = meCurrentPage < totalPages ? "block" : "none";
    pageInd.textContent = `Page ${meCurrentPage} of ${totalPages}`;
  } else {
    prevBtn.style.display = "none"; nextBtn.style.display = "none"; pageInd.textContent = "";
  }
}

function meChangePage(delta) {
  meCurrentPage += delta;
  renderMePage();
}

function openMeDetailModal(ex) {
  const content = document.getElementById("me-detail-content");
  
  let html = `
    <div style="margin-bottom: 20px;">
      <h2 style="color: var(--accent); margin: 0 0 5px 0;">${ex.exercise_name ? (ex.exercise_name + (ex.edition ? ` ${ex.edition}` : '')) : ex.title}</h2>
      <div style="color: var(--text-secondary); font-size: 0.95rem;">${ex.type} | ${ex.status}</div>
    </div>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
      <div style="background: rgba(0,0,0,0.1); padding: 12px; border-radius: 6px; border: 1px solid var(--border);">
        <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 4px;">DATES</div>
        <div style="color: var(--text-primary);">${ex.start_date || 'Unknown'} - ${ex.end_date || 'Unknown'} ${ex.duration ? `(${ex.duration})` : ''}</div>
      </div>
      <div style="background: rgba(0,0,0,0.1); padding: 12px; border-radius: 6px; border: 1px solid var(--border);">
        <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 4px;">LOCATION</div>
        <div style="color: var(--text-primary);">${ex.location?.city ? ex.location.city + ', ' : ''}${ex.location?.state ? ex.location.state + ', ' : ''}${ex.location?.country || ''} (${ex.location?.region || ''})</div>
      </div>
    </div>
    
    <div style="margin-bottom: 20px;">
      <h4 style="color: var(--primary); margin: 0 0 8px 0; border-bottom: 1px solid var(--border); padding-bottom: 4px;">Participants & Units</h4>
      <div style="font-size: 0.9rem;"><strong>Nations:</strong> ${ex.participant_nations?.join(', ') || 'None listed'}</div>
      <div style="font-size: 0.9rem; margin-top: 4px;"><strong>Indian Services:</strong> ${ex.indian_service?.join(', ') || 'None listed'}</div>
      ${ex.indian_units && ex.indian_units.length > 0 ? `<div style="font-size: 0.9rem; margin-top: 4px;"><strong>Indian Units:</strong> ${ex.indian_units.join(', ')}</div>` : ''}
      <div style="font-size: 0.9rem; margin-top: 4px;"><strong>Foreign Services:</strong> ${ex.foreign_services?.join(', ') || 'None listed'}</div>
      ${ex.foreign_units && ex.foreign_units.length > 0 ? `<div style="font-size: 0.9rem; margin-top: 4px;"><strong>Foreign Units:</strong> ${ex.foreign_units.join(', ')}</div>` : ''}
    </div>
    
    <div style="margin-bottom: 20px;">
      <h4 style="color: var(--primary); margin: 0 0 8px 0; border-bottom: 1px solid var(--border); padding-bottom: 4px;">Strategic Significance</h4>
      <p style="font-size: 0.95rem; line-height: 1.5; color: var(--text-primary); margin:0;">${parseWikiLinks(ex.strategic_significance || 'No analysis available.')}</p>
    </div>
    
    <div style="margin-bottom: 20px; background: rgba(34,197,94,0.05); border-left: 4px solid var(--primary); padding: 12px;">
      <h4 style="color: var(--primary); margin: 0 0 4px 0;">Exam Focus</h4>
      <p style="font-size: 0.9rem; margin:0; color: var(--text-primary);">${ex.exam_importance || 'N/A'}</p>
    </div>
  `;
  
  if (ex.units_and_hardware) {
     let hardwareHtml = Object.entries(ex.units_and_hardware)
       .map(([nation, units]) => `<div style="font-size: 0.9rem; margin-top: 4px;"><strong>${nation}:</strong> ${units.join(', ')}</div>`)
       .join('');
     
     if (hardwareHtml) {
         html += `
         <div style="margin-bottom: 20px;">
           <h4 style="color: var(--primary); margin: 0 0 8px 0; border-bottom: 1px solid var(--border); padding-bottom: 4px;">Units & Hardware</h4>
           ${hardwareHtml}
         </div>
         `;
     }
  } else if (ex.equipment_used) {
     const indEq = ex.equipment_used.india?.join(', ') || 'None listed';
     const forEq = ex.equipment_used.foreign?.join(', ') || 'None listed';
     if (indEq !== 'None listed' || forEq !== 'None listed') {
         html += `
         <div style="margin-bottom: 20px;">
           <h4 style="color: var(--primary); margin: 0 0 8px 0; border-bottom: 1px solid var(--border); padding-bottom: 4px;">Equipment & Platforms</h4>
           <div style="font-size: 0.9rem;"><strong>India:</strong> ${indEq}</div>
           <div style="font-size: 0.9rem; margin-top: 4px;"><strong>Foreign:</strong> ${forEq}</div>
         </div>
         `;
     }
  }

  content.innerHTML = html;
  document.getElementById("me-detail-modal").style.display = "flex";
}

function renderCaVisitsTable() {
  const wrapper = document.getElementById("ca-visits-table-wrapper");
  if (!wrapper) return;

  const meta   = window.CA_META   || {};
  const visits = window.CA_VISITS_DATA || [];

  // Update panel header with current exam cycle
  const cycle = getExamCycleBounds();
  const titleEl = document.getElementById("ca-visits-panel-title");
  if (titleEl) titleEl.textContent = `International Visits & Bilateral Deals — Exam Cycle: ${cycle.cycleLabel}`;

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
    td(`<strong>${parseWikiLinks(v.visit)}</strong>`) +
    td(`<strong>${v.period}:</strong> ${parseWikiLinks(v.purpose)}`) +
    td(parseWikiLinks(v.deals)) +
    `</tr>`
  ).join("");

  wrapper.innerHTML = `<table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.9rem; border: 1px solid var(--border);">${headerRow}${rows}</table>`;
}

function renderCaAwardsTable() {
  const wrapper = document.getElementById("ca-awards-table-wrapper");
  if (!wrapper) return;

  const awards = window.CA_AWARDS_DATA || [];

  if (awards.length === 0) {
    wrapper.innerHTML = `<p style="color: var(--text-secondary); padding: 20px;">No awards data loaded. Update CA_AWARDS_DATA in ca_data.js.</p>`;
    return;
  }

  const th = (txt) => `<th style="padding:12px; border:1px solid var(--border); text-align: left;">${txt}</th>`;
  const td = (txt) => `<td style="padding:10px; border:1px solid var(--border);">${txt}</td>`;
  const headerRow = `<tr style="background-color: rgba(34,197,94,0.15); color: var(--accent); font-weight: bold; border-bottom: 2px solid var(--border);">` +
    th("Award Name") + th("Category of Work") + th("Work Name") + th("Recipient") + th("Recipient's Country") + th("Giving Country") + `</tr>`;

  const rows = awards.map(a =>
    `<tr style="border-bottom: 1px solid var(--border);">` +
    td(`<strong>${parseWikiLinks(a.awardName || "")}</strong>`) +
    td(parseWikiLinks(a.categoryOfWork || "")) +
    td(parseWikiLinks(a.workName || "")) +
    td(`<strong>${parseWikiLinks(a.recipient || "")}</strong>`) +
    td(parseWikiLinks(a.recipientCountry || "")) +
    td(parseWikiLinks(a.givingCountry || "")) +
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

  const cycle2 = getExamCycleBounds();
  const titleEl2 = document.getElementById("ca-fta-panel-title");
  if (titleEl2) titleEl2.textContent = `Trade Deals & FTAs — Exam Cycle: ${cycle2.cycleLabel} (Last Refreshed: ${meta.lastRefreshed || ""})`;

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
    `<td style="padding:10px; border:1px solid var(--border);"><strong>${parseWikiLinks(f.deal)}</strong></td>` +
    `<td style="padding:10px; border:1px solid var(--border);"><span style="${statusColor(f.status)}">${parseWikiLinks(f.status)}</span></td>` +
    `<td style="padding:10px; border:1px solid var(--border);">${parseWikiLinks(f.scope)}</td>` +
    `<td style="padding:10px; border:1px solid var(--border); font-style:italic; color: var(--text-secondary);">${parseWikiLinks(f.significance)}</td>` +
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
    th("Date", "10%") + th("Day / Event", "25%") + th(`${year} Theme`, "25%") + th("Significance & Deep Analysis", "40%") + `</tr>`;

  const rows = dates.map((d, index) => {
    const themeCell = d.theme
      ? `<strong>${parseWikiLinks(d.theme)}</strong>`
      : `<span style="color: var(--text-muted); font-style: italic;">No official theme declared for ${year}</span>`;
      
    const significanceCell = `
      <div>
        <div style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 8px;">
          ${parseWikiLinks(d.significance)}
        </div>
        <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
          <button onclick="streamDetailedDateAnalysis('${d.name.replace(/'/g, "\\'")}', '${d.date.replace(/'/g, "\\'")}', 'ca-date-deep-${index}')" class="btn-primary" style="padding: 4px 10px; font-size: 0.72rem; border-radius: 4px; display: inline-flex; align-items: center; gap: 4px; background: rgba(168, 85, 247, 0.15); border: 1px solid rgba(168, 85, 247, 0.3); color: #c084fc; cursor: pointer;">
            🔍 Generate Cadet Deep Dive (10-15 Paragraphs)
          </button>
        </div>
        <div id="ca-date-deep-${index}" style="display: none; margin-top: 10px; padding: 12px; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.06); border-radius: 6px; font-size: 0.85rem; line-height: 1.6; color: var(--text-secondary);">
          <!-- Dynamic stream -->
        </div>
      </div>
    `;

    return `<tr style="border-bottom: 1px solid var(--border);">` +
      `<td style="padding:10px; border:1px solid var(--border);">${d.date}</td>` +
      `<td style="padding:10px; border:1px solid var(--border);"><strong>${parseWikiLinks(d.name)}</strong></td>` +
      `<td style="padding:10px; border:1px solid var(--border);">${themeCell}</td>` +
      `<td style="padding:10px; border:1px solid var(--border);">${significanceCell}</td>` +
      `</tr>`;
  }).join("");

  wrapper.innerHTML = `<table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.9rem; border: 1px solid var(--border);">${headerRow}${rows}</table>`;
}

async function streamDetailedDateAnalysis(dateName, dateValue, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.style.display = 'block';
  container.innerHTML = `
    <div style="display: flex; align-items: center; gap: 8px; color: var(--accent); font-family: var(--font-mono); font-size: 0.75rem;">
      <div class="cbt-spinner" style="border-color: var(--accent); border-top-color: transparent; width: 14px; height: 14px; border-width: 2px;"></div>
      DRONACHARYA IS CONSTRUCTING DEEP DIVE BRIEFING (10-15 PARAGRAPHS)...
    </div>
  `;

  const prompt = `You are Dronacharya, the legendary military guru and expert tutor for Indian Defence Examinations (NDA, CDS, AFCAT, CAPF, UPSC).
Provide a highly comprehensive, deep-dive explanation of the significance of the important date: "${dateName}" (observed on ${dateValue}).

Detailed Notes on this date must not be short summaries. You MUST structure your explanation into 12 detailed sections, writing at least 10 to 15 well-written explanatory paragraphs in total:
1. ORIGIN: Where and how this day originated.
2. HISTORICAL BACKGROUND: The history behind it.
3. PURPOSE: Why it was established.
4. KEY EVENTS: Major milestones associated with it.
5. INTERNATIONAL SIGNIFICANCE: Global impact.
6. NATIONAL SIGNIFICANCE: Relevance to India.
7. MILITARY SIGNIFICANCE: Strategic/operational military importance (if applicable, else general defence significance).
8. ECONOMIC IMPACT: Trade, finance, budget impact of related policies.
9. SOCIAL IMPACT: Societal changes or awareness.
10. CURRENT RELEVANCE: Modern significance.
11. INTERESTING FACTS: 3-5 unique, lesser-known facts.
12. EXAM RELEVANCE: How it is tested in NDA/CDS/AFCAT/UPSC.

Ensure you wrap important terms, sub-topics, agencies, or events in double square brackets, e.g. [[Ramsar Convention]] or [[Mahatma Gandhi]] or [[Operation Shakti]], so they act as interactive smart context links.
Do not use any emojis in your response. Keep the tone professional, scholarly, and authoritative.`;

  try {
    const response = await fetch('/api/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'gemini-1.5-flash',
        stream: true,
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    if (!response.ok || !response.body) {
      throw new Error("Failed to connect to Dronacharya Intelligence Server.");
    }

    container.innerHTML = `
      <div style="border-bottom: 1px dashed rgba(255,255,255,0.1); padding-bottom: 6px; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center;">
        <span style="font-weight: bold; color: var(--accent); font-family: var(--font-mono); font-size: 0.75rem;">CADET BRIEFING: ${dateName}</span>
        <button onclick="this.parentElement.parentElement.style.display='none'" style="background: transparent; border: none; color: var(--text-muted); cursor: pointer; font-size: 0.8rem;">[Hide]</button>
      </div>
      <div class="stream-text-area" style="max-height: 400px; overflow-y: auto; padding-right: 8px;"></div>
    `;
    const streamTextArea = container.querySelector('.stream-text-area');

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
      buffer = lines.pop();

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          try {
            const dataStr = line.replace('data: ', '').trim();
            if (dataStr && dataStr !== '[DONE]') {
              const parsed = JSON.parse(dataStr);
              if (parsed.candidates && parsed.candidates[0].content && parsed.candidates[0].content.parts[0]) {
                finalText += parsed.candidates[0].content.parts[0].text;
                
                // Format paragraphs nicely
                let formatted = finalText
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em>$1</em>')
                  .replace(/\n\n/g, '<br/><br/>')
                  .replace(/\n/g, '<br/>');

                streamTextArea.innerHTML = parseWikiLinks(formatted);
              }
            }
          } catch(e) {}
        }
      }
    }

    if (window.MathJax && typeof window.MathJax.typeset === 'function') {
      window.MathJax.typeset();
    }
  } catch (err) {
    container.innerHTML = `<span style="color: var(--danger); font-size: 0.8rem;">Guru uplink failed: ${err.message}</span>`;
  }
}
window.renderCaVisitsTable = renderCaVisitsTable;
window.renderCaFtaTable = renderCaFtaTable;
window.renderCaDatesTable = renderCaDatesTable;


// ==========================================
// 14. MOTIVATION OF THE DAY (ARMED FORCES BRAVERY STORIES)
// ==========================================
// BRAVERY_STORIES is now loaded from js/motivation_data.js via window.BRAVERY_STORIES


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
  
  currentMotivationIndex = dayOfYear % (window.BRAVERY_STORIES ? window.BRAVERY_STORIES.length : 1);
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
  
  const storyObj = window.BRAVERY_STORIES ? window.BRAVERY_STORIES[currentMotivationIndex] : null;
  if (!storyObj) return;
  heroEl.innerText = storyObj.hero;
  awardEl.innerText = storyObj.award;
  unitEl.innerText = storyObj.unit;
  yearEl.innerText = storyObj.year;
  storyEl.innerText = `"${storyObj.story}"`;
}

function showNextMotivation() {
  currentMotivationIndex = (currentMotivationIndex + 1) % (window.BRAVERY_STORIES ? window.BRAVERY_STORIES.length : 1);
  renderMotivationStory();
}

window.initMotivationOfTheDay = initMotivationOfTheDay;
window.showNextMotivation = showNextMotivation;

async function generateDetailedNotesOnDemand(subjectId, chapterId, topicId) {
  const subject = NOTES_DATABASE[subjectId];
  const chapter = subject.chapters.find(c => c.id === chapterId);
  const topic = chapter.topics.find(t => t.id === topicId);
  if (!topic) return;

  const cacheKey = `tac_ai_notes_v2_${topicId}`;
  
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

  // Check Supabase first
  if (window.supabaseClient) {
    try {
      const { data, error } = await window.supabaseClient
        .from('notes')
        .select('notes_content')
        .eq('id', 'detailed-' + topicId)
        .single();
        
      if (!error && data && data.notes_content) {
        console.log("Loading AI notes from Supabase for", topicId);
        localStorage.setItem(cacheKey, data.notes_content);
        renderAiNotes(data.notes_content, contentArea, btnCopy, btnDownload, topic.title);
        return;
      }
    } catch (err) {
      console.warn("Failed to fetch detailed notes from Supabase", err);
    }
  }

  let syllabusText = "";
  if (window.OFFICIAL_SYLLABUS_DATA && window.OFFICIAL_SYLLABUS_DATA[topicId]) {
    syllabusText = `\n\nEnsure you exhaustively cover the following official UPSC/AFCAT syllabus requirements: ${window.OFFICIAL_SYLLABUS_DATA[topicId]}`;
  }

  let pyqText = "";
  if (window.PYQ_TRENDS_DATA && window.PYQ_TRENDS_DATA[topicId]) {
    pyqText = `\n\nActual Questions, numerical patterns, and conceptual trends from the last 7 years (2020-2026) of UPSC CDS, NDA, and AFCAT exams for this topic: ${window.PYQ_TRENDS_DATA[topicId]}`;
  }

  let topicNotesStr = topic.notes || 'No short notes provided, please generate from scratch.';
  if (typeof topicNotesStr === 'string' && topicNotesStr.trim().startsWith('Detailed notes expanded in')) {
    if (typeof window.EXPANDED_NOTES_DATA !== 'undefined' && window.EXPANDED_NOTES_DATA[topicId]) {
      topicNotesStr = window.EXPANDED_NOTES_DATA[topicId];
    }
  }
  if (typeof topicNotesStr === 'string') {
    topicNotesStr = topicNotesStr.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').substring(0, 3000);
  }

  let prompt = `You are Dronacharya, the legendary military guru and Academic Intelligence Engine of an AI-powered NDA, CDS, AFCAT, CAPF, and UPSC Examination Preparation Platform.
Your task is to provide an EXHAUSTIVE, deep-dive, UPSC-level explanation of the topic "${topic.title}" from the chapter "${chapter.title}" in ${subject.title}. 
IMPORTANT: Your entire explanation MUST be exclusively in English. Do not write in Hindi or any other language.

Detailed Notes must not be short summaries. Ensure proper extraction from the provided notes, syllabus, and PYQs to add actual actionable data. Extract all specific factual data, formulas, dates, numerical values, and exceptions. Provide highly actionable study material packed with tables of important facts rather than just narrative text. (minimum 1000 words, target 1500-2500 words). You MUST include diagrams, pictures, and high-yield concepts!

Here are the existing short notes for this topic:
${topicNotesStr}
${syllabusText}
${pyqText}

MANDATORY INTRODUCTORY STRUCTURE:
You must start your entire response with this exact HTML structure, filling in the dynamic parts:
<h1 style="color: var(--primary); text-align: center; margin-bottom: 16px;">The ${topic.title}: [Create a grand, poetic subtitle relevant to the topic] (NDA/CDS/UPSC)</h1>
<p style="font-style: italic; text-align: center; margin-bottom: 32px; color: var(--text-secondary);">
"Salutations, my dear aspirants! I am Dronacharya, your Academic Intelligence Engine. Today, we embark on a profound journey into [Topic Focus]. [Add 2-3 sentences of inspiring, military-themed context about why mastering this is essential for an officer]."
</p>

MANDATORY SECTION STRUCTURE: Organize the rest of the output strictly into these 21 numbered sections:
1. INTRODUCTION: What it is, why it exists, basic principles, and exam relevance overview.
2. HISTORICAL BACKGROUND: Complete historical context, origins, evolution, and major milestones.
3. CORE CONCEPTS: Breakdown of the topic into individual core concepts with clear definitions, examples, and significance.
4. TECHNICAL EXPLANATION: Detailed mechanisms, equations, scientific or structural parameters, and technical descriptions.
5. IMPORTANT FACTS: Summary of key facts, comparative tables, data, and statistics.
6. EXAM PERSPECTIVE: Focus areas for NDA/CDS/AFCAT/CAPF/UPSC, potential question patterns, high-yield areas.
7. MILITARY RELEVANCE: Strategic, operational, and tactical relevance to the Indian Armed Forces (weapons, combat record, operators, comparisons, if applicable).
8. CURRENT AFFAIRS RELEVANCE: Recent developments, news occurrences, policy decisions, or modern debates.
9. ADVANTAGES: Detailed benefits, strengths, or pros of the concept/system.
10. CHALLENGES: Weaknesses, issues, obstacles, criticisms, or constraints.
11. FUTURE DEVELOPMENTS: Emerging trends, next-generation upgrades, future outlook.
12. IMPORTANT PERSONALITIES: Names of key figures, scientists, military commanders, leaders, or philosophers associated with this topic.
13. IMPORTANT ORGANISATIONS: Key agencies, ministries, research bodies, or international organizations.
14. PREVIOUS YEAR QUESTION REFERENCES: Actual or representative question references from past NDA/CDS/AFCAT/UPSC papers.
15. KEY TAKEAWAYS: Structured list of the 20 most critical facts and summary points.
16. HIGH-YIELD CONCEPTS: The most heavily tested, repeatedly asked, "must-know" concepts for scoring high.
17. AI GENERATED REVISION NOTES: 1-Page revision sheet, 5-minute revision version, and last-minute exam notes.
18. FLASHCARDS: At least 5 high-yield question-answer pairs for self-testing.
19. MEMORY TRICKS: Mnemonic devices, memory aids, and common exam traps to avoid.
20. FREQUENTLY ASKED QUESTIONS: At least 5 detailed Q&As addressing common student doubts.
21. DIAGRAMS & VISUALS: Provide a visual description or Mermaid diagram (wrapped in \`\`\`mermaid blocks) to visually explain the concept. Also include an AI image visualization by adding an HTML image tag: <img src="https://image.pollinations.ai/prompt/Highly%20detailed%20infographic%20diagram%20about%20[topic_name]%20for%20Indian%20Defence%20Exams?width=800&height=400&nologo=true" style="width:100%; border-radius: 8px; margin: 16px 0;"> (Replace [topic_name] with URL-encoded topic).

MANDATORY KNOWLEDGE EXPANSION LAYER:
At the very beginning or end of your note, include these structured sections:
- CONCEPT TREE:
  * Prerequisites: [List of 2-3 basic concepts needed beforehand, formatted as links like [[Concept Name]]].
  * Advanced Topics: [List of 2-3 next-level concepts to study next, formatted as links like [[Concept Name]]].
- EXAM MAPPING:
  * NDA: [Very High / High / Medium / Low]
  * CDS: [Very High / High / Medium / Low]
  * AFCAT: [Very High / High / Medium / Low]
  * UPSC: [Very High / High / Medium / Low]

SOURCE INTEGRITY: Prioritize authentic, official, primary information (PIB, Ministry of Defence, Supreme Court, Gazette of India, RBI, NITI Aayog, DRDO, ISRO, United Nations, World Bank, etc.) over secondary coaching summaries.

MILITARY & DEFENCE SPECIFICATION:
If this is a defence or military-related topic (e.g. Rafale, Agni, Submarines), you MUST detail:
- Technical specs, historical combat record, weaknesses, global operators, and comparative systems.
- Automatically link critical related subnodes in double square brackets, e.g. [[Meteor Missile]], [[MICA]], [[AESA Radar]], [[Indian Air Force]], [[Dassault Aviation]], [[BVR Combat]].

INTERACTIVE WIKI LINKING:
Throughout the entire response, wrap any important terms, sub-topics, historical dates, organizations, treaties, laws, equations, or doctrines in double square brackets, e.g. [[Constituent Assembly]] or [[Article 19]], so they function as recursive clickable knowledge graph nodes. Generate at least 15-20 such inline links.

Formatting Guidelines for maximum visual appeal:
- Wrap memory aids or mnemonics in: <div class="mnemonic-box"><strong>Mnemonic:</strong> description</div>
- Wrap common errors or traps in: <div class="trap-box"><strong>Common Exam Trap:</strong> explanation of the trap</div>
- Wrap high-level tips in: <div class="strategist-tip"><strong>Strategist Tip:</strong> tip text</div>
- Wrap formulas, equations, variables, or article numbers in <code> tags.
- Use tables (<table>, <tr>, <th>, <td>) to compare concepts or summarize facts.
- Use lists (<ul>, <li>) for multiple points.`;

  if (subject.title && (subject.title.toLowerCase().includes("math") || subject.title.toLowerCase().includes("quant"))) {
    prompt += `\n\nMATHEMATICS SPECIFICATION:\nSince this is a Mathematics topic, you MUST add a dedicated section at the very end titled "22. MATHEMATICS PRACTICE (NDA/CDS LEVEL)". In this section, provide exactly 3 fully solved examples (sums) and exactly 2 unsolved practice sums related to this topic. Ensure the difficulty matches the standard of the NDA/CDS examination.`;
  }

  const model = 'gemini-1.5-flash';
  
  try {
    const response = await fetch('/api/gemini', {
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
      ${parseWikiLinks(formattedText)}
    </div>
  `;
  
  if (window.MathJax && typeof window.MathJax.typeset === 'function') {
    window.MathJax.typeset();
  }

  // Initialize Mermaid diagrams if any
  setTimeout(() => {
    if (window.mermaid && typeof window.mermaid.run === 'function') {
      try { window.mermaid.run({ querySelector: '.mermaid' }); } catch(e) { console.warn(e); }
    } else if (window.mermaid && typeof window.mermaid.init === 'function') {
      try { window.mermaid.init(undefined, contentArea.querySelectorAll('.mermaid')); } catch(e) { console.warn(e); }
    }
  }, 100);
  
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
    const response = await fetch('/api/gemini', {
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
// 12. VOCAB BUILDER MODULE
// ==========================================
let vocabData = null;

// -- Drill-Down View Logic for Vocab Builder --
window.openVocabMode = function(mode) {
  document.querySelectorAll('#screen-vocab-builder .full-page-view').forEach(el => {
    el.style.display = 'none';
    el.classList.remove('active');
  });
  
  if (mode === 'word') {
    const wordView = document.getElementById('vocab-view-word');
    if(wordView) {
      wordView.style.display = 'block';
      wordView.classList.add('active');
    }
    // ensure word is loaded
    if(document.getElementById('vocab-word').innerText === 'Loading...') {
      loadRandomWord();
    }
  } else if (mode === 'quiz') {
    const quizView = document.getElementById('vocab-view-quiz');
    if(quizView) {
      quizView.style.display = 'block';
      quizView.classList.add('active');
    }
  }
};

window.backToVocabModes = function() {
  document.querySelectorAll('#screen-vocab-builder .full-page-view').forEach(el => {
    el.style.display = 'none';
    el.classList.remove('active');
  });
  const modesView = document.getElementById('vocab-view-modes');
  if (modesView) {
    modesView.style.display = 'block';
    modesView.classList.add('active');
  }
};

let currentVocabQuizQuestions = [];

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
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 8px;">
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

// ==========================================
// TACTICAL SCRATCHPAD CANVAS DRAWING LOGIC
// ==========================================
let scratchpadIsDrawing = false;
let scratchpadContext = null;
let scratchpadCanvas = null;

function initScratchpad() {
  scratchpadCanvas = document.getElementById('cbt-scratchpad-canvas');
  if (!scratchpadCanvas) return;
  scratchpadContext = scratchpadCanvas.getContext('2d');
  
  const rect = scratchpadCanvas.getBoundingClientRect();
  scratchpadCanvas.width = rect.width;
  scratchpadCanvas.height = rect.height;
  
  scratchpadContext.strokeStyle = '#0ea5e9'; // Accent Sky Blue
  scratchpadContext.lineWidth = 4;
  scratchpadContext.lineCap = 'round';
  scratchpadContext.lineJoin = 'round';
  
  // Mouse Event Listeners
  scratchpadCanvas.addEventListener('mousedown', startDrawing);
  scratchpadCanvas.addEventListener('mousemove', draw);
  scratchpadCanvas.addEventListener('mouseup', stopDrawing);
  scratchpadCanvas.addEventListener('mouseout', stopDrawing);
  
  // Touch Event Listeners for mobile/tablet support
  scratchpadCanvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousedown', {
      clientX: touch.clientX,
      clientY: touch.clientY
    });
    scratchpadCanvas.dispatchEvent(mouseEvent);
  });
  scratchpadCanvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousemove', {
      clientX: touch.clientX,
      clientY: touch.clientY
    });
    scratchpadCanvas.dispatchEvent(mouseEvent);
  });
  scratchpadCanvas.addEventListener('touchend', (e) => {
    e.preventDefault();
    const mouseEvent = new MouseEvent('mouseup', {});
    scratchpadCanvas.dispatchEvent(mouseEvent);
  });
}

function startDrawing(e) {
  scratchpadIsDrawing = true;
  if (!scratchpadContext) return;
  const rect = scratchpadCanvas.getBoundingClientRect();
  scratchpadContext.beginPath();
  scratchpadContext.moveTo(e.clientX - rect.left, e.clientY - rect.top);
}

function draw(e) {
  if (!scratchpadIsDrawing || !scratchpadContext) return;
  const rect = scratchpadCanvas.getBoundingClientRect();
  
  const sizeSelect = document.getElementById('scratchpad-size');
  if (sizeSelect) {
    scratchpadContext.lineWidth = parseInt(sizeSelect.value);
  }
  
  scratchpadContext.lineTo(e.clientX - rect.left, e.clientY - rect.top);
  scratchpadContext.stroke();
}

function stopDrawing() {
  scratchpadIsDrawing = false;
}

function toggleScratchpad() {
  const container = document.getElementById('cbt-scratchpad-container');
  if (!container) return;
  
  if (container.style.display === 'none' || container.style.display === '') {
    container.style.display = 'flex';
    setTimeout(() => {
      initScratchpad();
    }, 100);
  } else {
    container.style.display = 'none';
  }
}

function clearScratchpad() {
  if (!scratchpadCanvas || !scratchpadContext) return;
  scratchpadContext.clearRect(0, 0, scratchpadCanvas.width, scratchpadCanvas.height);
}

window.toggleScratchpad = toggleScratchpad;
window.clearScratchpad = clearScratchpad;

// =============================================================================
// TACTICAL WAR ROOM & AUDIO HUD SYSTEMS
// =============================================================================

// Map Hotspot Data
const MAP_BRIEFINGS = {
  siachen: {
    title: "Siachen Glacier (Operation Meghdoot)",
    desc: "1. Siachen Glacier is the highest battlefield in the world, located in the eastern Karakoram range.\n2. In April 1984, India launched Operation Meghdoot to pre-empt Pakistan's troop movement.\n3. The military operation secured control of the entire glacier and its key passes.\n4. Saltoro Ridge, which guards the glacier from the west, is fully controlled by Indian posts.\n5. Important passes to remember: Bilafond La, Sia La, and Gyong La.\n6. Aspirants must study extreme high-altitude logistics, avalanche risks, and hypoxia effects.\n7. The region acts as a wedge between Pakistan-occupied Kashmir and Shaksgam Valley (China).\n8. Troops are deployed at altitudes exceeding 18,000 feet in freezing sub-zero conditions.\n9. Operation Meghdoot remains one of the most successful mountain warfare campaigns in history.\n10. The strategic control of Siachen prevents a joint militarized front by Pakistan and China."
  },
  kargil: {
    title: "Kargil Sector (Operation Vijay)",
    desc: "1. The Kargil War of 1999 was fought along the Line of Control (LoC) in Ladakh.\n2. Operation Vijay was launched to clear infiltrations from key peaks like Tiger Hill and Tololing.\n3. The conflict took place at extreme altitudes (11,000 to 18,000 feet) in rugged terrain.\n4. NH 1D (Srinagar-Leh Highway) was the primary target of Pakistani shelling from high heights.\n5. Defence exams cover Bofors artillery, MiG-29 air superiority, and Operation Safed Sagar (IAF).\n6. The war ended on 26th July 1999, commemorated annually as Kargil Vijay Diwas.\n7. It highlighted critical gaps in military intelligence, border surveillance, and UAV requirements.\n8. The Kargil Review Committee recommendations led to the creation of the Chief of Defence Staff (CDS).\n9. Captain Vikram Batra and Lt. Manoj Pandey were awarded Param Vir Chakra posthumously.\n10. Mountain warfare doctrine and artillery integration are key syllabus topics based on this war."
  },
  galwan: {
    title: "Galwan Valley (Border Standoff)",
    desc: "1. The Galwan River Valley in eastern Ladakh is located along the Line of Actual Control (LAC).\n2. A major military standoff occurred in June 2020, resulting in hand-to-hand combat casualties.\n3. The region is named after Ghulam Rasool Galwan, a Ladakhi explorer of the late 19th century.\n4. The valley is highly strategic as it lies close to the Darbuk-Shyok-Daulat Beg Oldie (DSDBO) road.\n5. The DSDBO road is critical for India to connect Leh to the Karakoram Pass.\n6. Border agreements like 1993, 1996, and 2005 disallow firing of weapons within 2 km of LAC.\n7. In exams, geography of Shyok river, Chang Chenmo range, and Pangong Tso are heavily featured.\n8. The standoff led to massive military mirror-deployments and infrastructure build-ups on both sides.\n9. Infrastructure upgrades include bridges, all-weather tunnels (like Atal Tunnel), and troop shelters.\n10. Understanding border management agencies (ITBP and Indian Army) is critical for defence papers."
  },
  chabahar: {
    title: "Chabahar Port (Iran - Strategic Transit Node)",
    desc: "1. Chabahar Port is located in southeastern Iran on the Gulf of Oman, outside the Persian Gulf.\n2. It provides India direct access to Afghanistan and Central Asia, bypassing Pakistan.\n3. India signed a tripartite agreement in 2016 to develop the port and the Chabahar-Zahedan railway.\n4. It serves as a key gateway for the International North-South Transport Corridor (INSTC).\n5. Strategically, it counterbalances China's development of Gwadar Port in Pakistan (72 km away).\n6. For the Indian Navy, it secures energy transit lanes in the Gulf of Oman and northern Arabian Sea.\n7. Afghanistan is connected via the Zaranj-Delaram highway built by India's Border Roads Organisation (BRO).\n8. It is India's first overseas port project, showing strategic depth in maritime foreign policy.\n9. Chabahar is a tax-free zone, facilitating duty-free trading, warehousing, and trade routes.\n10. Maritime diplomacy, maritime security, and security of Indian Ocean choke points are tested."
  },
  malacca: {
    title: "Malacca Strait (Indian Ocean Choke Point)",
    desc: "1. The Strait of Malacca is the primary maritime shipping channel between the Indian Ocean and South China Sea.\n2. Over 25% of global trade and energy passes through this narrow 1.5-mile choke point.\n3. The Andaman and Nicobar Command (ANC), India's only tri-service command, guards its western entrance.\n4. In the event of conflict, India's naval dominance at the strait poses a 'Malacca Dilemma' for China.\n5. Security patrols (like Coordinated Patrols - CORPAT) are held with Indonesia, Thailand, and Malaysia.\n6. The Navy utilizes strategic bases in Great Nicobar (INS Baaz) to monitor ship transits.\n7. Deep-sea cables, submarine paths, and sea lines of communication (SLOC) are monitored here.\n8. Piracy, maritime terrorism, and freedom of navigation are major regional security challenges.\n9. The strait is bordered by Singapore, Malaysia, and Indonesia, forming a key economic corridor.\n10. Geopolitics of the Indo-Pacific and maritime domain awareness (MDA) are regular CDS exam topics."
  }
};

// Flashcard Decks Data
const FLASHCARD_DECKS = {
  important_dates: [
    { q: "Pravasi Bharatiya Divas (Jan 9)", a: "Marks return of Mahatma Gandhi from South Africa in 1915; honors overseas Indian diaspora contributions." },
    { q: "Indian Army Day (Jan 15)", a: "Marks Field Marshal K. M. Cariappa taking over command in 1949, transferring authority from British military." },
    { q: "National Voters' Day (Jan 25)", a: "Marks the foundation day of the Election Commission of India in 1950, promoting democratic participation." },
    { q: "National Technology Day (May 11)", a: "Commemorates the successful Pokhran-II nuclear tests in 1998 under Operation Shakti." },
    { q: "Constitution Day (Nov 26)", a: "Commemorates the formal adoption of the Constitution by the Constituent Assembly in 1949." }
  ],
  military_operations: [
    { q: "Operation Trident (1971)", a: "Decisive Indian Navy attack on Karachi harbor using missile boats, now celebrated as Navy Day on Dec 4." },
    { q: "Operation Meghdoot (1984)", a: "Indian Army operation securing the strategic Siachen Glacier, preempting Pakistani troop movements." },
    { q: "Operation Cactus (1988)", a: "India's airborne and naval military assistance securing the Maldives against a coup attempt by mercenaries." },
    { q: "Operation Vijay (1999)", a: "Military campaign that successfully evicted infiltrators from Kargil, culminating on July 26." },
    { q: "Operation Pawan (1987)", a: "Peacekeeping mandate of the IPKF in northern and eastern Sri Lanka to disarm militant groups." }
  ],
  strategic_weapons: [
    { q: "BrahMos supersonic cruise missile", a: "Joint venture between DRDO (India) and NPO Mashinostroyeniya (Russia). Multi-platform, supersonic (~Mach 3)." },
    { q: "Agni-V ballistic missile", a: "India's intercontinental ballistic missile (ICBM) with a solid-fueled range exceeding 5,000 km." },
    { q: "S-400 Triumf air defence", a: "Mobile surface-to-air missile (SAM) defense system procured from Russia, covering range up to 400 km." },
    { q: "INS Arihant (S73)", a: "India's lead ship of nuclear-powered ballistic missile submarines, completing the nuclear triad." },
    { q: "Tejas LCA", a: "Indigenously developed delta-wing, single-engine multirole light combat aircraft developed by HAL." }
  ],
  defence_abbreviations: [
    { q: "IGMDP", a: "Integrated Guided Missile Development Programme - conceived by Dr. Kalam (developed Prithvi, Trishul, Akash, Nag, Agni)." },
    { q: "IDS", a: "Integrated Defence Staff - established in 2001 to promote synergy and coordination among the three service branches." },
    { q: "MAD", a: "Mutual Assured Destruction - nuclear deterrence doctrine guaranteeing complete annihilation of both attacker and defender." },
    { q: "EEZ", a: "Exclusive Economic Zone - sea zone over which a state has special rights (up to 200 nautical miles from coastline)." },
    { q: "CORPAT", a: "Coordinated Patrol - bilateral maritime patrols held by the Indian Navy with neighboring friendly nations." }
  ]
};

// Leitner Spaced Repetition State
let leitnerState = {};
let currentDeck = "important_dates";
let currentCardIndex = -1;

function initWarRoom() {
  switchWarRoomTab('map');
  loadFlashcardDeck();
  initSimulatorCanvas();
}

function switchWarRoomTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    if (btn.id.startsWith('war-room-tab-')) {
      btn.classList.remove('active');
    }
  });
  const activeBtn = document.getElementById(`war-room-tab-${tabId}`);
  if (activeBtn) activeBtn.classList.add('active');

  document.querySelectorAll('.war-room-pane').forEach(pane => {
    pane.classList.remove('active');
  });
  const activePane = document.getElementById(`pane-war-room-${tabId}`);
  if (activePane) activePane.classList.add('active');

  if (tabId === 'simulator') {
    setTimeout(initSimulatorCanvas, 100);
  }
}

// Map Hotspots
function selectMapHotspot(id) {
  const data = MAP_BRIEFINGS[id];
  if (!data) return;

  const titleEl = document.getElementById('map-briefing-title');
  const contentEl = document.getElementById('map-briefing-content');
  if (titleEl) titleEl.innerText = data.title;
  if (contentEl) {
    const listHtml = data.desc.split('\n').map(line => `<li style="margin-bottom: 8px; line-height:1.5; font-size:0.9rem;">${parseWikiLinks(line)}</li>`).join('');
    contentEl.innerHTML = `
      <ul style="list-style-type: none; padding-left: 0; text-align: left; margin: 0;">
        ${listHtml}
      </ul>
    `;
  }

  // Visual feedback on Map hotspots
  document.querySelectorAll('.map-hotspot').forEach(hotspot => {
    hotspot.querySelector('circle:nth-child(2)').style.fill = hotspot.id === `hotspot-${id}` ? 'var(--accent)' : '';
  });
}

// Leitner Spaced Repetition logic
function loadFlashcardDeck() {
  currentDeck = document.getElementById('flashcard-deck-selector').value;
  
  // Load levels from localStorage
  const saved = localStorage.getItem('tac-leitner-boxes');
  if (saved) {
    try { leitnerState = JSON.parse(saved); } catch(e) { leitnerState = {}; }
  } else {
    leitnerState = {};
  }

  // Initialize missing cards to Box 1
  FLASHCARD_DECKS[currentDeck].forEach(card => {
    const key = `${currentDeck}_${card.q}`;
    if (!leitnerState[key]) {
      leitnerState[key] = 1;
    }
  });

  saveLeitnerState();
  updateLeitnerStats();
  pickNextFlashcard();
}

function saveLeitnerState() {
  localStorage.setItem('tac-leitner-boxes', JSON.stringify(leitnerState));
}

function updateLeitnerStats() {
  const counts = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
  FLASHCARD_DECKS[currentDeck].forEach(card => {
    const key = `${currentDeck}_${card.q}`;
    const box = leitnerState[key] || 1;
    counts[box] = (counts[box] || 0) + 1;
  });

  const container = document.getElementById('leitner-stats-container');
  if (container) {
    container.innerHTML = Object.keys(counts).map(box => `
      <div class="leitner-box-item">
        <span>Box ${box} (${box === '1' ? 'Review Daily' : box === '5' ? 'Mastered' : 'Intermediate'})</span>
        <span class="leitner-box-badge">${counts[box]} cards</span>
      </div>
    `).join('');
  }
}

function pickNextFlashcard() {
  const cards = FLASHCARD_DECKS[currentDeck];
  
  // Group cards by box
  const boxes = {1: [], 2: [], 3: [], 4: [], 5: []};
  cards.forEach((card, index) => {
    const key = `${currentDeck}_${card.q}`;
    const box = leitnerState[key] || 1;
    boxes[box].push(index);
  });

  // Leitner weight probabilities: Box 1 (55%), Box 2 (25%), Box 3 (10%), Box 4 (7%), Box 5 (3%)
  const roll = Math.random() * 100;
  let targetBox = 1;
  if (roll < 55) targetBox = 1;
  else if (roll < 80) targetBox = 2;
  else if (roll < 90) targetBox = 3;
  else if (roll < 97) targetBox = 4;
  else targetBox = 5;

  let chosenPool = boxes[targetBox];
  if (chosenPool.length === 0) {
    // Fallback to any non-empty box
    for (let b = 1; b <= 5; b++) {
      if (boxes[b].length > 0) {
        chosenPool = boxes[b];
        break;
      }
    }
  }

  if (chosenPool && chosenPool.length > 0) {
    currentCardIndex = chosenPool[Math.floor(Math.random() * chosenPool.length)];
    const card = cards[currentCardIndex];
    
    // Reset Card Flip State
    const cardEl = document.getElementById('war-room-flashcard');
    if (cardEl) cardEl.parentElement.classList.remove('flipped');

    document.getElementById('flashcard-front-text').innerText = card.q;
    document.getElementById('flashcard-back-text').innerText = card.a;

    // Show reveal button, hide grading
    document.getElementById('flashcard-reveal-btn').style.display = 'block';
    document.getElementById('flashcard-grading-controls').style.display = 'none';
  }
}

function flipFlashcard() {
  const cardEl = document.getElementById('war-room-flashcard');
  if (cardEl) {
    cardEl.parentElement.classList.toggle('flipped');
  }
}

function revealFlashcard() {
  const cardEl = document.getElementById('war-room-flashcard');
  if (cardEl) {
    cardEl.parentElement.classList.add('flipped');
  }
  document.getElementById('flashcard-reveal-btn').style.display = 'none';
  document.getElementById('flashcard-grading-controls').style.display = 'flex';
}

function gradeFlashcard(boxAction) {
  const cards = FLASHCARD_DECKS[currentDeck];
  if (currentCardIndex === -1 || !cards[currentCardIndex]) return;

  const card = cards[currentCardIndex];
  const key = `${currentDeck}_${card.q}`;
  let currentBox = leitnerState[key] || 1;

  if (boxAction === 1) {
    currentBox = 1; // Send back to box 1
  } else if (boxAction === 2) {
    currentBox = Math.min(5, currentBox + 1); // Upgrade box level
  } else if (boxAction === 5) {
    currentBox = 5; // Direct Mastery
  }

  leitnerState[key] = currentBox;
  saveLeitnerState();
  updateLeitnerStats();
  pickNextFlashcard();
}

function resetLeitnerProgress() {
  if (confirm("Reset spaced repetition memory state for this deck?")) {
    FLASHCARD_DECKS[currentDeck].forEach(card => {
      const key = `${currentDeck}_${card.q}`;
      leitnerState[key] = 1;
    });
    saveLeitnerState();
    updateLeitnerStats();
    pickNextFlashcard();
  }
}

// Interactive Weapons & Radar Simulator
let simCanvas, simCtx;
let simInterval = null;
let missilePos = { x: 0, y: 0 };
let missileVelocity = { x: 0, y: 0 };
let isMissileFlying = false;
let simPath = [];
let simG = 0.08; // Custom gravity factor for canvas dimensions

function initSimulatorCanvas() {
  simCanvas = document.getElementById('weapons-sim-canvas');
  if (!simCanvas) return;
  simCtx = simCanvas.getContext('2d');
  
  // Set dimensions
  const rect = simCanvas.getBoundingClientRect();
  simCanvas.width = rect.width || 460;
  simCanvas.height = rect.height || 320;
  
  drawSimulator();
}

function drawSimulator() {
  if (!simCtx || !simCanvas) return;
  simCtx.clearRect(0, 0, simCanvas.width, simCanvas.height);
  
  // Draw ground
  simCtx.fillStyle = '#1e293b';
  simCtx.fillRect(0, simCanvas.height - 20, simCanvas.width, 20);
  
  // Sliders values
  const angle = parseInt(document.getElementById('input-sim-angle').value);
  const velocityPct = parseInt(document.getElementById('input-sim-velocity').value);
  const radarRadius = parseInt(document.getElementById('input-sim-radar').value);
  
  document.getElementById('label-sim-angle').innerText = `${angle}°`;
  document.getElementById('label-sim-velocity').innerText = `${velocityPct}%`;
  document.getElementById('label-sim-radar').innerText = `${radarRadius} km`;

  // Draw early warning Radar Dome (centered at X=200)
  const radarX = 220;
  const radarY = simCanvas.height - 20;
  
  // Draw radar coverage zone
  simCtx.beginPath();
  simCtx.arc(radarX, radarY, radarRadius * 0.6, Math.PI, 0); // scale radius for canvas sizing
  simCtx.fillStyle = 'rgba(22, 163, 74, 0.06)';
  simCtx.fill();
  simCtx.strokeStyle = 'rgba(22, 163, 74, 0.3)';
  simCtx.lineWidth = 1.5;
  simCtx.stroke();
  
  // Radar post
  simCtx.fillStyle = 'var(--accent)';
  simCtx.fillRect(radarX - 4, radarY - 10, 8, 10);
  
  // Draw Launch Platform
  simCtx.fillStyle = '#64748b';
  simCtx.fillRect(15, simCanvas.height - 30, 20, 10);

  // Draw vector pointer line
  const radians = (angle * Math.PI) / 180;
  const ptrLen = 35;
  simCtx.beginPath();
  simCtx.moveTo(25, simCanvas.height - 30);
  simCtx.lineTo(25 + Math.cos(radians) * ptrLen, simCanvas.height - 30 - Math.sin(radians) * ptrLen);
  simCtx.strokeStyle = 'var(--warning)';
  simCtx.lineWidth = 2;
  simCtx.stroke();

  // Draw trajectory trace
  if (simPath.length > 1) {
    simCtx.beginPath();
    simCtx.moveTo(simPath[0].x, simPath[0].y);
    for (let i = 1; i < simPath.length; i++) {
      simCtx.lineTo(simPath[i].x, simPath[i].y);
    }
    simCtx.strokeStyle = 'rgba(251, 191, 36, 0.5)';
    simCtx.lineWidth = 1.5;
    simCtx.stroke();
  }

  // Draw Missile
  if (isMissileFlying) {
    simCtx.beginPath();
    simCtx.arc(missilePos.x, missilePos.y, 4, 0, Math.PI * 2);
    simCtx.fillStyle = 'var(--danger)';
    simCtx.fill();
    simCtx.shadowColor = 'var(--danger)';
    simCtx.shadowBlur = 8;
    
    // Check if missile is in radar coverage dome
    const distToRadar = Math.hypot(missilePos.x - radarX, missilePos.y - radarY);
    if (distToRadar < (radarRadius * 0.6)) {
      // Draw radar sweep beam intercepting the missile
      simCtx.beginPath();
      simCtx.moveTo(radarX, radarY);
      simCtx.lineTo(missilePos.x, missilePos.y);
      simCtx.strokeStyle = 'rgba(239, 68, 68, 0.4)';
      simCtx.lineWidth = 1.5;
      simCtx.stroke();
      
      document.getElementById('sim-status-label').innerText = "RADAR INTERCEPT ACTIVE";
      document.getElementById('sim-status-label').style.color = "var(--danger)";
    } else {
      document.getElementById('sim-status-label').innerText = "FLIGHT IN PROGRESS";
      document.getElementById('sim-status-label').style.color = "var(--warning)";
    }
    simCtx.shadowBlur = 0; // reset
  }
}

// Cockpit Audio HUD & Verbal Speech Alerts
let audioContext = null;
let cockpitOsc = null;
let cockpitGain = null;

function toggleAudioHud(active) {
  if (active) {
    try {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      
      // Low cockpit engine rumble/drone
      cockpitOsc = audioContext.createOscillator();
      cockpitOsc.type = 'triangle';
      cockpitOsc.frequency.setValueAtTime(55, audioContext.currentTime); // 55Hz G1 rumble
      
      cockpitGain = audioContext.createGain();
      cockpitGain.gain.setValueAtTime(0.04, audioContext.currentTime); // low background volume
      
      cockpitOsc.connect(cockpitGain);
      cockpitGain.connect(audioContext.destination);
      cockpitOsc.start();
      
      announceVerbalHUD("Cockpit Audio HUD initialized. Tactical systems online.");
    } catch (e) {
      console.warn("AudioContext failed", e);
    }
  } else {
    // Terminate audio nodes
    if (cockpitOsc) {
      try { cockpitOsc.stop(); } catch(e) {}
      cockpitOsc.disconnect();
    }
    if (audioContext) {
      audioContext.close();
    }
    audioContext = null;
  }
}

function announceVerbalHUD(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.volume = 0.85;
    utterance.rate = 1.05;
    // Find an English male/robotic voice if available
    const voices = window.speechSynthesis.getVoices();
    const targetVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Natural')));
    if (targetVoice) utterance.voice = targetVoice;
    
    window.speechSynthesis.speak(utterance);
  }
}

// Intercept timer updates in app.js and speak alarms
setInterval(() => {
  const activeOverlay = document.getElementById('cbt-player-overlay');
  const toggle = document.getElementById('cbt-audio-hud-toggle');
  if (activeOverlay && activeOverlay.style.display !== 'none' && toggle && toggle.checked) {
    const timerText = document.getElementById('cbt-active-timer').innerText;
    // Check for remaining time thresholds
    if (timerText === "00:05:00") {
      announceVerbalHUD("Warning Cadet. Five minutes remaining to complete mission parameters.");
      triggerBeepAlert(880, 0.4);
    } else if (timerText === "00:01:00") {
      announceVerbalHUD("Alert: Critical warning. One minute remaining. Wrap up all calculations.");
      triggerBeepAlert(1200, 0.8);
    }
  }
}, 1000);

function triggerBeepAlert(freq, duration) {
  if (!audioContext) return;
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0.1, audioContext.currentTime);
  osc.connect(gain);
  gain.connect(audioContext.destination);
  osc.start();
  setTimeout(() => {
    osc.stop();
  }, duration * 1000);
}

// Export functions to global scope

window.toggleAudioHud = toggleAudioHud;

// Weekly Study Planner Logic
function initWeeklyPlanner() {
  const defaultPlan = {
    "Monday": { subject: "Mathematics", topic: "Trigonometric Identities", completed: false },
    "Tuesday": { subject: "English", topic: "Parts of Speech", completed: false },
    "Wednesday": { subject: "Polity", topic: "Fundamental Rights", completed: false },
    "Thursday": { subject: "History", topic: "Indus Valley Civilization", completed: false },
    "Friday": { subject: "Geography", topic: "Earth & Atmosphere", completed: false },
    "Saturday": { subject: "Science", topic: "Newton's Laws of Motion", completed: false },
    "Sunday": { subject: "CBT Mock Exam", topic: "Full Length NDA/CDS Mock", completed: false }
  };
  
  let plan = localStorage.getItem("tac-weekly-plan");
  if (!plan) {
    localStorage.setItem("tac-weekly-plan", JSON.stringify(defaultPlan));
  }
  renderWeeklyPlanner();
}

function renderWeeklyPlanner() {
  const container = document.getElementById("weekly-planner-container");
  if (!container) return;
  
  let plan = JSON.parse(localStorage.getItem("tac-weekly-plan"));
  if (!plan) return;
  
  container.innerHTML = "";
  
  const daysOrder = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
  daysOrder.forEach(day => {
    const dayData = plan[day];
    const card = document.createElement("div");
    card.style.background = "rgba(255, 255, 255, 0.03)";
    card.style.border = dayData.completed ? "1px solid rgba(34, 197, 94, 0.3)" : "1px solid rgba(255, 255, 255, 0.05)";
    card.style.borderRadius = "8px";
    card.style.padding = "12px";
    card.style.cursor = "pointer";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.justifyContent = "space-between";
    card.style.transition = "all 0.2s ease";
    card.style.minHeight = "110px";
    card.style.position = "relative";
    card.style.overflow = "hidden";
    
    // Hover effects
    card.addEventListener("mouseenter", () => {
      card.style.background = "rgba(255, 255, 255, 0.06)";
      card.style.border = "1px solid var(--accent)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.background = "rgba(255, 255, 255, 0.03)";
      card.style.border = dayData.completed ? "1px solid rgba(34, 197, 94, 0.3)" : "1px solid rgba(255, 255, 255, 0.05)";
    });
    
    // Content
    card.innerHTML = `
      <div>
        <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); font-weight: 700; margin-bottom: 6px; text-transform: uppercase;">${day}</div>
        <div style="font-weight: 600; font-size: 0.85rem; color: var(--text-primary); margin-bottom: 2px;">${dayData.subject}</div>
        <div style="font-size: 0.75rem; color: var(--text-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 120px;" title="${dayData.topic}">${dayData.topic}</div>
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:12px; gap:8px;">
        <span style="font-size:0.65rem; color:${dayData.completed ? '#4ade80' : 'var(--text-muted)'}; font-family:var(--font-mono); font-weight:700;">
          ${dayData.completed ? 'SUCCESS' : 'PENDING'}
        </span>
        <input type="checkbox" ${dayData.completed ? 'checked' : ''} onclick="event.stopPropagation(); toggleDayPlan('${day}')" style="cursor:pointer; width:14px; height:14px; accent-color:var(--accent);">
      </div>
    `;
    
    // Click to edit
    card.addEventListener("click", () => {
      editDayPlan(day);
    });
    
    container.appendChild(card);
  });
}

function toggleDayPlan(day) {
  let plan = JSON.parse(localStorage.getItem("tac-weekly-plan"));
  if (plan && plan[day]) {
    plan[day].completed = !plan[day].completed;
    localStorage.setItem("tac-weekly-plan", JSON.stringify(plan));
    renderWeeklyPlanner();
    
    // Add XP reward for completing study plans!
    if (plan[day].completed) {
      if (typeof STATE !== 'undefined' && STATE.userProfile) {
        STATE.userProfile.xp += 100;
        localStorage.setItem('tac-revise-state', JSON.stringify(STATE));
        initUserProfile();
      }
    }
  }
}

function editDayPlan(day) {
  let plan = JSON.parse(localStorage.getItem("tac-weekly-plan"));
  if (!plan || !plan[day]) return;
  
  const currentSubject = plan[day].subject;
  const currentTopic = plan[day].topic;
  
  const newSubject = prompt(`[MISSION RE-ASSIGNMENT] Enter Subject for ${day}:`, currentSubject);
  if (newSubject === null) return; // cancelled
  
  const newTopic = prompt(`[MISSION RE-ASSIGNMENT] Enter Topic/Target details:`, currentTopic);
  if (newTopic === null) return; // cancelled
  
  plan[day].subject = newSubject || "Rest Day";
  plan[day].topic = newTopic || "No target assigned";
  plan[day].completed = false; // Reset completed status on edit
  
  localStorage.setItem("tac-weekly-plan", JSON.stringify(plan));
  renderWeeklyPlanner();
}

window.initWeeklyPlanner = initWeeklyPlanner;
window.renderWeeklyPlanner = renderWeeklyPlanner;
window.toggleDayPlan = toggleDayPlan;
window.editDayPlan = editDayPlan;

window.renderSyllabusMasteryHeatmap = function() {
  const container = document.getElementById("dashboard-mastery-heatmap");
  if (!container) return;
  if (typeof NOTES_DATABASE === 'undefined') return;
  
  let html = "";
  for (const [subjectId, subject] of Object.entries(NOTES_DATABASE)) {
    let total = 0;
    let completed = 0;
    if (subject && subject.chapters) {
      subject.chapters.forEach(c => {
        if (c.topics) {
          c.topics.forEach(t => {
            total++;
            if (STATE.syllabusProgress && STATE.syllabusProgress[t.id] === 'completed') {
              completed++;
            }
          });
        }
      });
    }
    
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
    let color = "#ef4444"; // Red
    if (pct >= 80) color = "#22c55e"; // Green
    else if (pct >= 40) color = "#eab308"; // Yellow
    else if (pct > 0) color = "#f97316"; // Orange
    
    const displayName = subject.title || subjectId.charAt(0).toUpperCase() + subjectId.slice(1);
    
    html += `
      <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border); padding: 10px; border-radius: 6px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; align-items: center; min-height: 80px;">
        <span style="font-size: 0.72rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase; margin-bottom: 6px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100%;" title="${displayName}">${displayName}</span>
        <div style="width: 100%; height: 6px; background: rgba(255,255,255,0.08); border-radius: 3px; overflow: hidden; margin-bottom: 8px;">
          <div style="width: ${pct}%; height: 100%; background: ${color}; transition: width 0.3s ease;"></div>
        </div>
        <span style="font-family: var(--font-mono); font-size: 0.82rem; font-weight: bold; color: ${color};">${pct}%</span>
      </div>
    `;
  }
  
  container.innerHTML = html;
};

window.generateCustomTargets = async function() {
  const hours = document.getElementById("target-hours-input").value;
  const subjectId = document.getElementById("target-subject-select").value;
  const output = document.getElementById("custom-targets-output");
  
  if (!output) return;
  output.style.display = "block";
  output.innerHTML = `
    <div style="text-align: center;">
      <div class="cbt-spinner" style="border-color: var(--accent); border-top-color: transparent; width: 30px; height: 30px; border-width: 3px; margin: 0 auto 12px;"></div>
      <p style="color: var(--accent); font-family: var(--font-logo); font-size: 0.85rem; font-weight: 600;">FORMULATING REVISION BLUEPRINT...</p>
    </div>
  `;
  
  // Collect subject specific info
  const subject = NOTES_DATABASE[subjectId];
  let topicsList = [];
  if (subject && subject.chapters) {
    subject.chapters.forEach(c => {
      if (c.topics) {
        c.topics.forEach(t => {
          const status = (STATE.syllabusProgress && STATE.syllabusProgress[t.id]) || "uncompleted";
          topicsList.push(`- ${t.title} (${status})`);
        });
      }
    });
  }
  
  const prompt = `You are a high-ranking Indian military strategist and academic advisor.
The cadet wants to revise the subject "${subjectId.toUpperCase()}" during a ${hours}-hour study block.

Below is their current syllabus progress for this subject:
${topicsList.join('\n')}

Develop an hourly, high-yield tactical revision blueprint for this ${hours}-hour study block. 
Break down the allocation of time (e.g., 0-60 mins, 60-120 mins) and match them with specific topics, prioritizing their uncompleted topics. 
For each block, provide:
1. Revision objective
2. High-yield terms or formulas to focus on (wrap key terms in Wikipedia brackets, e.g. [[Fundamental Rights]] or [[Matrices]])
3. Strategic tip for memory retention

Format with clean, bold headings and simple HTML line breaks. Do NOT use any emojis, icons, or pictorial characters. Keep the tone strictly professional, inspiring, and military-oriented.`;

  try {
    const response = await fetch('/api/gemini', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "gemini-2.5-flash",
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.2 }
      })
    });
    
    if (response.ok) {
      const data = await response.json();
      if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts[0]) {
        let text = data.candidates[0].content.parts[0].text;
        let formattedText = text
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/\*(.*?)\*/g, '<em>$1</em>')
          .replace(/`([^`]+)`/g, '<code style="background-color:rgba(255,255,255,0.05); padding:2px 4px; border-radius:4px;">$1</code>')
          .replace(/^#{1,3} (.+)$/gm, '<h4 style="color:var(--accent); margin:12px 0 6px;">$1</h4>')
          .replace(/\n/g, '<br/>');
        
        output.innerHTML = `
          <h3 style="color: var(--accent); font-family: var(--font-logo); font-size: 1rem; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-bottom: 12px;">[ TACTICAL STUDY TARGET PLAN ]</h3>
          <div style="line-height: 1.7; font-size: 0.9rem; color: var(--text-primary);">${parseWikiLinks(formattedText)}</div>
        `;
        return;
      }
    }
    throw new Error("API call failed");
  } catch(e) {
    console.error(e);
    output.innerHTML = `<p style="color: var(--danger);">Failed to formulate blueprint. Check server status and try again.</p>`;
  }
};

// Decorate the updateDashboardMetrics global function to automatically render the new Mastery Heatmap
if (typeof window.updateDashboardMetrics === 'function') {
  const originalUpdateMetrics = window.updateDashboardMetrics;
  window.updateDashboardMetrics = function() {
    originalUpdateMetrics();
    if (typeof renderSyllabusMasteryHeatmap === 'function') {
      renderSyllabusMasteryHeatmap();
    }
  };
} else {
  // Fallback wrapper if loaded out-of-order
  document.addEventListener("DOMContentLoaded", () => {
    const originalUpdateMetrics = window.updateDashboardMetrics;
    if (typeof originalUpdateMetrics === 'function') {
      window.updateDashboardMetrics = function() {
        originalUpdateMetrics();
        if (typeof renderSyllabusMasteryHeatmap === 'function') {
          renderSyllabusMasteryHeatmap();
        }
      };
    }
  });
}




// 4. SYLLABUS DATA FOR SYLLABUS TRACKER
// ==========================================
const SYLLABUS_DATABASE = [
  {
    exam: "NDA",
    subject: "Mathematics",
    topics: [
      { id: "syl-trig", name: "Trigonometric Identities & Equations" },
      { id: "syl-limits", name: "Limits, Continuity & Differentiability" },
      { id: "syl-integration", name: "Definite and Indefinite Integrals" },
      { id: "syl-matrices", name: "Matrices and Determinants" },
      { id: "syl-probability", name: "Probability & Statistics" }
    ]
  },
  {
    exam: "CDS",
    subject: "General Knowledge",
    topics: [
      { id: "syl-fr", name: "Fundamental Rights & Duties" },
      { id: "syl-parliament", name: "President, Parliament & State Legislature" },
      { id: "dpsp", name: "DPSP & Fundamental Duties" },
      { id: "ancient-india", name: "Ancient Indian History" },
      { id: "medieval-india", name: "Medieval Indian History" },
      { id: "syl-history", name: "Indian National Movement (1885 - 1947)" },
      { id: "syl-geog", name: "Indian Geography (Rivers, Passes & Soils)" },
      { id: "earth-atmosphere", name: "Earth Structure & Atmosphere" },
      { id: "econ-concepts", name: "Core Economic Concepts & Sectors" },
      { id: "rbi-monetary-policy", name: "RBI & Monetary Policy Tools" },
      { id: "reflection-refraction", name: "Physics: Optics & Light" },
      { id: "newtons-laws", name: "Physics: Mechanics & Motion" },
      { id: "syl-exercises", name: "Physics: Work, Energy & Gravity" },
      { id: "physics-sound", name: "Physics: Sound Waves & Acoustics" },
      { id: "physics-em-waves", name: "Physics: Electromagnetic Waves & Spectrum" },
      { id: "acids-bases", name: "Chemistry: Acids, Bases & Salts" },
      { id: "syl-numerical", name: "Chemistry: Chemical Bonding & Periodic Table" },
      { id: "metals-alloys", name: "Chemistry: Metals, Ores, Alloys & Metallurgy" },
      { id: "reactivity-series", name: "Chemistry: Reactivity Series & Displacement" },
      { id: "carbon-compounds", name: "Chemistry: Carbon & its Compounds" },
      { id: "chemistry-numericals", name: "Chemistry: Mole Concept & Concentration" },
      { id: "cell-structure", name: "Biology: Cell Biology & Division" },
      { id: "human-systems", name: "Biology: Vital Human Systems & Organs" },
      { id: "diseases", name: "Biology: Human Diseases & Pathogens" },
      { id: "plant-kingdom", name: "Biology: Plant Kingdom Classification" },
      { id: "animal-kingdom", name: "Biology: Animal Kingdom Classification" },
      { id: "plant-reproduction", name: "Biology: Plant Reproduction & Hormones" },
      { id: "vedic-age", name: "History: Vedic Age & Literature" },
      { id: "sangam-age", name: "History: Sangam Age & Tinais" },
      { id: "sikh-history", name: "History: Sikh History & Gurus" },
      { id: "european-arrival", name: "History: European Arrival & Expansion" },
      { id: "revolt-1857", name: "History: Revolt of 1857 & Impact" },
      { id: "acts-reforms", name: "History: Constitutional Acts & Reforms" },
      { id: "partition-independence", name: "History: Partition, Independence & Integration" },
      { id: "world-history-basics", name: "History: World History & Revolutions" },
      { id: "culture-dances-festivals", name: "Culture: Classical & Folk Dances, Paintings" },
      { id: "culture-monuments-sites", name: "Culture: Temples, Monuments & UNESCO Sites" },
      { id: "world-geography-straits-deserts", name: "Geography: Straits, Canals, Deserts & Seas" },
      { id: "mapping-borders-capitals", name: "Geography: Borders, Capitals & Strategic Mapping" },
      { id: "citizenship", name: "Polity: Citizenship Rules & CAA" },
      { id: "goverment-executives", name: "Polity: PM, CM & Governor comparison" },
      { id: "judiciary", name: "Polity: Supreme Court, High Court & Writs" },
      { id: "panchayati-raj", name: "Polity: Panchayati Raj & Municipalities" },
      { id: "governance-emergency", name: "Polity: Emergency Provisions" },
      { id: "econ-poverty-employment", name: "Economics: Poverty, Jobs & Agriculture" },
      { id: "five-year-plans", name: "Economics: Five-Year Plans & planning" },
      { id: "external-sector-institutions", name: "Economics: IMF, WTO & Balance of Payments" },
      { id: "immunity-vaccines", name: "Biology: Immunity, Lymphocytes & Vaccines" },
      { id: "biology-ecology-basics", name: "Biology: Ecology Basics & Energy Pyramids" },
      { id: "physics-heat", name: "Physics: Thermodynamics & Heat Transfer" },
      { id: "physics-electricity-magnetism", name: "Physics: Electricity, Circuits & Magnetism" },
      { id: "physics-nuclear-basics", name: "Physics: Nuclear Decay, Fission & Fusion" },
      { id: "physics-units-everyday", name: "Physics: SI Units & Everyday Phenomena" },
      { id: "chemistry-everyday-fertilisers", name: "Chemistry: Soaps, Glass, Cement & Fuels" },
      { id: "environmental-chemistry", name: "Chemistry: Environmental Chemistry & Pollution" },
      { id: "ca-science-tech-space", name: "Current Affairs: Science, Tech & Space Missions" },
      { id: "defence-organisations-weapons", name: "Military: Defence Organisations, Weapons & treaties" }
    ]
  },
  {
    exam: "AFCAT",
    subject: "General Test & Military Aptitude",
    topics: [
      { id: "syl-ranks", name: "Officer Equivalent Ranks Chart" },
      { id: "syl-commands", name: "Military Commands & Headquarters" },
      { id: "syl-exercises", name: "Joint Military Exercises & Missiles" },
      { id: "syl-verbal-reasoning", name: "Verbal Reasoning & OIR" },
      { id: "syl-nonverbal-reasoning", name: "Non-Verbal Reasoning & OIR" }
    ]
  },
  {
    exam: "AFCAT",
    subject: "Numerical Ability (Mathematics)",
    topics: [
      { id: "syl-numerical-speed", name: "Time, Speed & Distance Formulas" },
      { id: "syl-numerical-ratios", name: "Ratios, Proportions & Percentages" }
    ]
  },
  {
    exam: "NDA",
    subject: "English",
    topics: [
      { id: "parts-of-speech", name: "Grammar: Parts of Speech" },
      { id: "tenses-complete", name: "Grammar: Tenses & Consistency" },
      { id: "subject-verb-agreement", name: "Grammar: Subject-Verb Agreement" },
      { id: "voice-conversion", name: "Grammar: Active & Passive Voice" },
      { id: "narration-speech", name: "Grammar: Direct & Indirect Speech" },
      { id: "synonyms-antonyms-detailed", name: "Vocabulary: Synonyms & Antonyms" },
      { id: "one-word-substitution", name: "Vocabulary: One-Word Substitutions" },
      { id: "idioms-phrases", name: "Vocabulary: Idioms & Phrases" },
      { id: "error-detection", name: "UPSC: Spotting Errors" }
    ]
  },
  {
    exam: "CDS",
    subject: "English",
    topics: [
      { id: "parts-of-speech", name: "Grammar: Parts of Speech" },
      { id: "tenses-complete", name: "Grammar: Tenses & Consistency" },
      { id: "subject-verb-agreement", name: "Grammar: Subject-Verb Agreement" },
      { id: "sentence-structure", name: "Grammar: Sentence Structure & Parallelism" },
      { id: "voice-conversion", name: "Grammar: Active & Passive Voice" },
      { id: "narration-speech", name: "Grammar: Direct & Indirect Speech" },
      { id: "modifiers", name: "Grammar: Misplaced & Dangling Modifiers" },
      { id: "punctuation-basics", name: "Grammar: Punctuation Basics" },
      { id: "transformation-sentences", name: "Grammar: Transformation of Sentences" },
      { id: "synonyms-antonyms-detailed", name: "Vocabulary: Synonyms & Antonyms" },
      { id: "one-word-substitution", name: "Vocabulary: One-Word Substitutions" },
      { id: "idioms-phrases", name: "Vocabulary: Idioms & Phrases" },
      { id: "phrasal-verbs", name: "Vocabulary: Phrasal Verbs" },
      { id: "reading-comprehension", name: "Vocabulary: Reading Comprehension" },
      { id: "error-detection", name: "UPSC: Spotting Errors" },
      { id: "sentence-improvement", name: "UPSC: Sentence Improvement" },
      { id: "ordering-rearrangement", name: "UPSC: Ordering of Words & Sentences" },
      { id: "fill-blanks-cloze", name: "UPSC: Fill in the Blanks & Cloze Test" }
    ]
  },
  {
    exam: "AFCAT",
    subject: "Verbal Ability in English",
    topics: [
      { id: "parts-of-speech", name: "Grammar: Parts of Speech" },
      { id: "tenses-complete", name: "Grammar: Tenses & Consistency" },
      { id: "subject-verb-agreement", name: "Grammar: Subject-Verb Agreement" },
      { id: "voice-conversion", name: "Grammar: Active & Passive Voice" },
      { id: "narration-speech", name: "Grammar: Direct & Indirect Speech" },
      { id: "synonyms-antonyms-detailed", name: "Vocabulary: Synonyms & Antonyms" },
      { id: "one-word-substitution", name: "Vocabulary: One-Word Substitutions" },
      { id: "idioms-phrases", name: "Vocabulary: Idioms & Phrases" },
      { id: "phrasal-verbs", name: "Vocabulary: Phrasal Verbs" },
      { id: "error-detection", name: "Grammar: Spotting Errors" }
    ]
  }
];

// ==========================================
// 5. AI GENERATOR DATA TEMPLATES
// ==========================================
const AI_TOPIC_TEMPLATES = {
  "matrices": {
    topic: "Matrices and Determinants",
    questions: [
      {
        question: "If A is a square matrix of order 3 and |A| = 5, what is the value of |2A|?",
        options: ["10", "40", "20", "80"],
        correct: 1,
        explanation: "For a matrix A of order n, the property is |kA| = kⁿ|A|. Here, n = 3, k = 2, and |A| = 5. So, |2A| = 2³ * 5 = 8 * 5 = 40. Option B is correct."
      },
      {
        question: "If A and B are symmetric matrices of same order, then AB - BA is always a:",
        options: ["Symmetric matrix", "Skew-symmetric matrix", "Identity matrix", "Zero matrix"],
        correct: 1,
        explanation: "Let X = AB - BA. Take transpose: Xᵀ = (AB - BA)ᵀ = (AB)ᵀ - (BA)ᵀ = BᵀAᵀ - AᵀBᵀ. Since A and B are symmetric, Aᵀ = A and Bᵀ = B. So Xᵀ = BA - AB = -(AB - BA) = -X. Since Xᵀ = -X, the matrix is skew-symmetric. Option B is correct."
      },
      {
        question: "If the determinant of matrix [[x, 2], [3, x]] is 10, what are the possible values of x?",
        options: ["±4", "±2", "±16", "0"],
        correct: 0,
        explanation: "Det = (x * x) - (2 * 3) = x² - 6. Set this to 10: x² - 6 = 10 => x² = 16 => x = ±4. Option A is correct."
      }
    ]
  },
  "fundamental-rights": {
    topic: "Fundamental Rights (Polity)",
    questions: [
      {
        question: "Which Fundamental Right cannot be suspended even during a National Emergency declared under Article 352?",
        options: ["Article 19", "Articles 20 and 21", "Articles 14 and 19", "Article 21 and 22"],
        correct: 1,
        explanation: "By the 44th Amendment Act, the right to protection in respect of conviction for offences (Article 20) and the right to life and personal liberty (Article 21) cannot be suspended during emergency. Option B is correct."
      },
      {
        question: "Which Writ is issued by a court to command a public official to perform a duty they have failed or refused to do?",
        options: ["Habeas Corpus", "Mandamus", "Certiorari", "Quo Warranto"],
        correct: 1,
        explanation: "Mandamus literally means 'We Command'. It is issued to a public authority to perform legal duties which they have failed/refused to do. Option B is correct."
      }
    ]
  },
  "optics": {
    topic: "Lenses & Reflection (Physics)",
    questions: [
      {
        question: "A concave mirror produces a real image of size 3 times that of the object. If the object is placed 10 cm from the mirror, where is the image formed?",
        options: ["-30 cm", "-10 cm", "+30 cm", "+10 cm"],
        correct: 0,
        explanation: "Magnification m = -v/u. Since the image is real, m = -3. The object distance u = -10 cm. So, -3 = -v / (-10) => v = -30 cm. The negative sign implies the image is formed in front of the mirror. Option A is correct."
      },
      {
        question: "What is the refractive index of a medium if the speed of light in it is 2 * 10⁸ m/s? (Speed of light in vacuum c = 3 * 10⁸ m/s)",
        options: ["1.5", "1.2", "2.0", "1.33"],
        correct: 0,
        explanation: "Refractive index n = c / v. n = (3 * 10⁸) / (2 * 10⁸) = 1.5. Option A is correct."
      }
    ]
  },
  "commands": {
    topic: "Military Commands & Headquarters",
    questions: [
      {
        question: "Where is the headquarters of the Eastern Command of the Indian Navy located?",
        options: ["Chennai", "Kochi", "Visakhapatnam", "Kolkata"],
        correct: 2,
        explanation: "The Eastern Naval Command is headquartered in Visakhapatnam, Andhra Pradesh. The Western is in Mumbai, and Southern in Kochi. Option C is correct."
      },
      {
        question: "The Maintenance Command of the Indian Air Force is located at:",
        options: ["Bengaluru", "New Delhi", "Nagpur", "Shillong"],
        correct: 2,
        explanation: "The Maintenance Command of the Indian Air Force has its headquarters in Nagpur, Maharashtra. Option C is correct."
      }
    ]
  },
  "schedules-constitution": {
    topic: "Schedules of the Constitution",
    questions: [
      {
        question: "Which amendment added the Ninth Schedule to the Constitution of India?",
        options: ["First Amendment, 1951", "Forty-Second Amendment, 1976", "Forty-Fourth Amendment, 1978", "Seventh Amendment, 1956"],
        correct: 0,
        explanation: "The Ninth Schedule was added by the 1st Constitutional Amendment in 1951 to protect land reform laws from judicial review. Option A is correct."
      },
      {
        question: "The provision for the administration of scheduled tribes in the states of Assam, Meghalaya, Tripura, and Mizoram is contained in which Schedule?",
        options: ["Fifth Schedule", "Sixth Schedule", "Seventh Schedule", "Eighth Schedule"],
        correct: 1,
        explanation: "The Sixth Schedule specifically addresses administrative provisions for tribal areas in Assam, Meghalaya, Tripura, and Mizoram. Option B is correct."
      }
    ]
  },
  "newton-laws": {
    topic: "Newton's Laws of Motion (Physics)",
    questions: [
      {
        question: "The working principle of a rocket propulsion system is based on which law of Newton?",
        options: ["First Law", "Second Law", "Third Law", "Law of Gravitation"],
        correct: 2,
        explanation: "Rocket propulsion is based on Newton's Third Law (Action & Reaction). The escaping exhaust gases exert an equal and opposite upward thrust on the rocket body. Option C is correct."
      },
      {
        question: "The coefficient of static friction is always:",
        options: ["Less than coefficient of kinetic friction", "Greater than coefficient of kinetic friction", "Equal to coefficient of kinetic friction", "Zero"],
        correct: 1,
        explanation: "Static friction is generally higher than kinetic friction because surfaces interlock more deeply when stationary. Therefore, μs > μk. Option B is correct."
      }
    ]
  },
  "joint-exercises": {
    topic: "Joint Military Exercises",
    questions: [
      {
        question: "Bilateral military exercise 'Surya Kiran' is conducted between India and which of the following nations?",
        options: ["Bangladesh", "Sri Lanka", "Nepal", "Bhutan"],
        correct: 2,
        explanation: "Exercise Surya Kiran is a bilateral infantry exercise between the Indian Army and the Nepalese Army. Option C is correct."
      },
      {
        question: "Which of the following is a joint tri-service exercise of India with Russia?",
        options: ["Exercise Indra", "Exercise Vajra Prahar", "Exercise Hand-in-Hand", "Exercise Shakti"],
        correct: 0,
        explanation: "Exercise Indra is a joint tri-services military exercise conducted between India and Russia. Option A is correct."
      }
    ]
  },
  "acids-bases": {
    topic: "Acids, Bases & Salts (Chemistry)",
    questions: [
      {
        question: "Which chemical compound is known as Plaster of Paris?",
        options: ["CaSO₄ · 2H₂O", "CaSO₄ · 0.5H₂O", "Na₂CO₃ · 10H₂O", "NaHCO₃"],
        correct: 1,
        explanation: "Plaster of Paris is Calcium Sulphate Hemihydrate (CaSO₄ · 0.5H₂O). Gypsum is CaSO₄ · 2H₂O. Option B is correct."
      },
      {
        question: "What color is phenolphthalein indicator in a basic/alkaline solution?",
        options: ["Colorless", "Deep Pink/Red", "Yellow", "Blue"],
        correct: 1,
        explanation: "Phenolphthalein turns deep pink in basic solutions (pH > 8.2) and remains completely colorless in acidic and neutral solutions. Option B is correct."
      }
    ]
  },
  "history-movement": {
    topic: "Indian National Movement",
    questions: [
      {
        question: "Which session of the Indian National Congress passed the famous 'Purna Swaraj' (Complete Independence) resolution?",
        options: ["Surat Session, 1907", "Lucknow Session, 1916", "Lahore Session, 1929", "Karachi Session, 1931"],
        correct: 2,
        explanation: "The Purna Swaraj declaration was promulgated by the Indian National Congress at the Lahore Session in December 1929, presided over by Jawaharlal Nehru. Option C is correct."
      },
      {
        question: "In which year did Mahatma Gandhi lead the Dandi March (Salt Satyagraha)?",
        options: ["1919", "1922", "1930", "1942"],
        correct: 2,
        explanation: "The Dandi March started from Sabarmati Ashram on March 12, 1930, and concluded at Dandi on April 6, 1930, marking the launch of the Civil Disobedience Movement. Option C is correct."
      },
      {
        question: "Who was the Governor-General of India during the Partition of Bengal in 1905?",
        options: ["Lord Ripon", "Lord Curzon", "Lord Chelmsford", "Lord Irwin"],
        correct: 1,
        explanation: "Lord Curzon was the Governor-General (Viceroy) who announced the Partition of Bengal in 1905, which triggered the Swadeshi and Boycott Movement. Option B is correct."
      }
    ]
  },
  "indian-monsoon": {
    topic: "Monsoon & Soils of India",
    questions: [
      {
        question: "Which winds are responsible for winter rainfall on the Coromandel Coast (Tamil Nadu) of India?",
        options: ["South-West Monsoon", "Western Disturbances", "North-East Monsoon (Retreating Monsoon)", "Local Land Breezes"],
        correct: 2,
        explanation: "The North-East Monsoon (retreating monsoon) picks up moisture over the Bay of Bengal and brings rainfall to the Coromandel coast (Tamil Nadu) during October-December. Option C is correct."
      },
      {
        question: "Which type of soil in India is self-ploughing in character and develops deep cracks when dry?",
        options: ["Alluvial Soil", "Laterite Soil", "Black Soil (Regur)", "Red Soil"],
        correct: 2,
        explanation: "Black soil (also called Regur or Black Cotton soil) is highly argillaceous (clayey) and expands when wet, contracting when dry to form deep cracks, which aids in self-aeration (self-ploughing). Option C is correct."
      },
      {
        question: "Through which of the following mountain passes does the River Sutlej enter India from Tibet?",
        options: ["Zoji La", "Shipki La", "Nathu La", "Lipulekh"],
        correct: 1,
        explanation: "The Sutlej River enters India from Tibet through the Shipki La pass in Himachal Pradesh. Option B is correct."
      }
    ]
  },
  "rbi-monetary": {
    topic: "RBI & Monetary Policy",
    questions: [
      {
        question: "What is the interest rate at which the RBI lends short-term money to commercial banks against government securities?",
        options: ["Reverse Repo Rate", "Repo Rate", "Bank Rate", "Statutory Liquidity Rate (SLR)"],
        correct: 1,
        explanation: "Repo Rate (Repurchase Option Rate) is the rate at which the RBI lends money to commercial banks for short terms. Option B is correct."
      },
      {
        question: "Which of the following is classified as an indirect tax in India?",
        options: ["Corporate Income Tax", "Wealth Tax", "Goods and Services Tax (GST)", "Personal Income Tax"],
        correct: 2,
        explanation: "GST is a comprehensive, multi-stage, destination-based indirect tax in India, whereas income taxes are direct taxes. Option C is correct."
      },
      {
        question: "The Harrod-Domar model formed the basis of which Five Year Plan of India?",
        options: ["First Five Year Plan", "Second Five Year Plan", "Third Five Year Plan", "Fourth Five Year Plan"],
        correct: 0,
        explanation: "The First Five Year Plan (1951-1956) was based on the Harrod-Domar model and focused heavily on agriculture. The Second was based on the Mahalanobis model. Option A is correct."
      }
    ]
  },
  "biology": {
    topic: "Cell Biology & Human Physiology",
    questions: [
      {
        question: "Which of the following cell organelles is known as the 'Suicide Bag' of the cell?",
        options: ["Ribosome", "Mitochondria", "Lysosome", "Golgi Apparatus"],
        correct: 2,
        explanation: "Lysosomes contain highly active hydrolytic enzymes. Under cellular stress or damage, these lysosomes may burst, digesting the cell itself. Hence they are called 'Suicide Bags'. Option C is correct."
      },
      {
        question: "Which blood group is considered the 'Universal Donor' because it lacks A, B, and Rh antigens on the RBC surface?",
        options: ["AB Positive", "O Positive", "AB Negative", "O Negative"],
        correct: 3,
        explanation: "O-negative blood lacks A, B, and Rh antigens. Therefore, it does not trigger an immune reaction in any recipient, making it the universal donor. Option D is correct."
      },
      {
        question: "Insulin, which regulates blood glucose levels, is secreted by which cells of the pancreas?",
        options: ["Alpha cells", "Beta cells", "Delta cells", "F cells"],
        correct: 1,
        explanation: "Beta cells of the Islets of Langerhans in the pancreas secrete insulin to lower blood sugar. Alpha cells secrete glucagon to raise it. Option B is correct."
      }
    ]
  }
};

// ==========================================
// 6. GLOBAL STATE MANAGEMENT & LOCALSTORAGE MOVED TO js/state_manager.js
// ==========================================

// ==========================================
// 7. ADVANCED MATH SOLVER LOGIC
// ==========================================
async function solveAdvancedMath() {
  const inputEl = document.getElementById("advanced-solver-input");
  const btnEl = document.getElementById("advanced-solver-btn");
  const resultContainer = document.getElementById("advanced-solver-result-container");
  const resultEl = document.getElementById("advanced-solver-result");

  const questionText = inputEl.value.trim();
  if (!questionText) {
    alert("Please paste a math question first!");
    return;
  }

  // Set loading state
  btnEl.innerHTML = `<span class="spinner" style="width: 20px; height: 20px; border: 2px solid rgba(255,255,255,0.3); border-radius: 50%; border-top-color: #fff; animation: spin 1s ease-in-out infinite;"></span> Searching & Solving...`;
  btnEl.disabled = true;
  resultContainer.style.display = "none";
  resultEl.innerHTML = "";

  try {
    const payload = {
      model: "gemini-2.5-pro",
      contents: [{ parts: [{ text: questionText }] }],
      tools: [{ googleSearch: {} }],
      systemInstruction: {
        parts: [{ 
          text: "You are an advanced mathematical solver. Your primary directive is to use Google Search to find the exact official solution to this exact question if it exists online (e.g., from platforms like Toppr, Doubtnut, Byjus, Brainly, etc.). If you find the solution online, provide it and cite the source. If you cannot find the exact question online, you must solve it mathematically step-by-step from scratch. Always format your final output beautifully in Markdown, preserving mathematical symbols."
        }]
      }
    };

    const res = await fetch('/api/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || 'Failed to fetch solution');
    }

    const data = await res.json();
    let textResult = '';
    
    if (data.candidates && data.candidates[0].content && data.candidates[0].content.parts) {
      textResult = data.candidates[0].content.parts.map(p => p.text).join('\n');
    } else {
      throw new Error("Invalid response from API");
    }

    resultEl.innerHTML = marked.parse(textResult);
    resultContainer.style.display = "block";
    
  } catch (error) {
    console.error("Advanced Solver Error:", error);
    resultEl.innerHTML = `<span style="color:var(--danger)"><strong>Error:</strong> ${error.message}</span>`;
    resultContainer.style.display = "block";
  } finally {
    // Reset button
    btnEl.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
      Search & Solve
    `;
    btnEl.disabled = false;
  }
}

// ==========================================
// TELL ME MORE - TEXT SELECTION FEATURE
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
  const tooltip = document.getElementById('tell-me-more-tooltip');
  if (!tooltip) return;

  let selectedText = "";

  function checkSelection(e) {
    // If clicking on the tooltip itself, do nothing here.
    if (e.target && e.target.id === 'tell-me-more-tooltip') return;
    
    // Disable in exam modes
    const mockExam = document.getElementById('mock-exam-section');
    const cbtExam = document.getElementById('cbt-exam-section');
    if ((mockExam && !mockExam.classList.contains('hidden')) || 
        (cbtExam && !cbtExam.classList.contains('hidden'))) {
        tooltip.style.display = 'none';
        selectedText = "";
        return;
    }
    
    setTimeout(() => {
      const selection = window.getSelection();
      const text = selection.toString().trim();
      
      if (text.length > 0) {
        selectedText = text;
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        
        // Use fixed positioning so scrolling doesn't detach the tooltip
        tooltip.style.left = (rect.left + (rect.width / 2)) + 'px';
        tooltip.style.top = (rect.top) + 'px';
        tooltip.style.display = 'block';
      } else {
        selectedText = "";
        tooltip.style.display = 'none';
      }
    }, 10);
  }

  document.addEventListener('mouseup', checkSelection);
  document.addEventListener('touchend', checkSelection);
  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') tooltip.style.display = 'none';
  });

  window.addEventListener('scroll', () => {
    if (tooltip.style.display === 'block') {
      tooltip.style.display = 'none';
      window.getSelection().removeAllRanges();
      selectedText = "";
    }
  }, true);

  // Handle mousedown separately to prevent selection clearing if clicking the tooltip
  document.addEventListener('mousedown', (e) => {
    if (e.target && e.target.id === 'tell-me-more-tooltip') {
      e.preventDefault(); 
    } else {
      tooltip.style.display = 'none';
    }
  });

  tooltip.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (selectedText) {
      // 1. Open Chatbot Drawer
      const drawer = document.getElementById("chatbot-drawer");
      if (drawer && !drawer.classList.contains("open") && typeof window.toggleChatbot === 'function') {
        window.toggleChatbot();
      }
      
      // 2. Set the input text and send message
      const chatbotInput = document.getElementById('chatbot-user-input');
      if (chatbotInput) {
        chatbotInput.value = `Can you explain: ${selectedText}`;
        if (typeof window.sendChatbotMessage === 'function') {
          window.sendChatbotMessage();
        }
      }
      
      // Clean up
      window.getSelection().removeAllRanges();
      tooltip.style.display = 'none';
    }
  });
});

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

let currentArmourySubject = null;
let currentArmouryChapter = null;
let currentBankPage = 0;
const BANK_PAGE_SIZE = 50;
let currentBankPool = [];

function initQuestionArmoury() {
    if (typeof window.EXTRA_QUESTION_BANK === 'undefined') {
        document.getElementById('armoury-navigation').innerHTML = '<p>Error loading question bank.</p>';
        return;
    }
    currentArmourySubject = null;
    currentArmouryChapter = null;
    renderArmouryBreadcrumb();
    renderArmourySubjects();
}

function renderArmouryBreadcrumb() {
    const breadcrumb = document.getElementById('armoury-breadcrumb');
    let html = `<span onclick="initQuestionArmoury()">Question Armoury</span>`;
    
    if (currentArmourySubject) {
        html += ` &nbsp;>&nbsp; <span onclick="openArmourySubject('${currentArmourySubject}')">${currentArmourySubject}</span>`;
    }
    if (currentArmouryChapter) {
        html += ` &nbsp;>&nbsp; <span>${currentArmouryChapter}</span>`;
    }
    
    breadcrumb.innerHTML = html;
}

function renderArmourySubjects() {
    document.getElementById('bank-container').style.display = 'none';
    document.getElementById('load-more-btn').style.display = 'none';
    
    const nav = document.getElementById('armoury-navigation');
    nav.style.display = 'grid';
    nav.innerHTML = '';
    
    const subjects = Object.keys(window.EXTRA_QUESTION_BANK || {});
    subjects.forEach(subject => {
        let count = 0;
        const chapters = window.EXTRA_QUESTION_BANK[subject];
        for (let c in chapters) {
            count += chapters[c].length;
        }
        
        const card = document.createElement('div');
        card.className = 'subject-card';
        card.style.cssText = 'background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 20px; border-radius: 12px; cursor: pointer; transition: all 0.2s ease;';
        card.onmouseover = () => { card.style.background = 'rgba(255,255,255,0.1)'; card.style.borderColor = 'var(--accent)'; };
        card.onmouseleave = () => { card.style.background = 'rgba(255,255,255,0.05)'; card.style.borderColor = 'rgba(255,255,255,0.1)'; };
        card.onclick = () => openArmourySubject(subject);
        card.innerHTML = `<h3 style="margin-bottom: 4px; font-size: 1.1rem; color: var(--accent);">${subject}</h3><p style="margin-top:5px; font-size:12px; color:var(--text-muted);">${count} Questions</p>`;
        nav.appendChild(card);
    });
}

function openArmourySubject(subject) {
    currentArmourySubject = subject;
    currentArmouryChapter = null;
    renderArmouryBreadcrumb();
    
    document.getElementById('bank-container').style.display = 'none';
    document.getElementById('load-more-btn').style.display = 'none';
    
    const nav = document.getElementById('armoury-navigation');
    nav.style.display = 'grid';
    nav.innerHTML = '';
    
    const chapters = window.EXTRA_QUESTION_BANK[subject] || {};
    Object.keys(chapters).forEach(chapter => {
        const count = chapters[chapter].length;
        const card = document.createElement('div');
        card.className = 'subject-card';
        card.style.cssText = 'background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 20px; border-radius: 12px; cursor: pointer; transition: all 0.2s ease;';
        card.onmouseover = () => { card.style.background = 'rgba(255,255,255,0.1)'; card.style.borderColor = 'var(--accent)'; };
        card.onmouseleave = () => { card.style.background = 'rgba(255,255,255,0.05)'; card.style.borderColor = 'rgba(255,255,255,0.1)'; };
        card.onclick = () => openArmouryChapter(chapter);
        card.innerHTML = `<h3 style="margin-bottom: 4px; font-size: 1.1rem; color: var(--accent);">${chapter}</h3><p style="margin-top:5px; font-size:12px; color:var(--text-muted);">${count} Questions</p>`;
        nav.appendChild(card);
    });
}

function openArmouryChapter(chapter) {
    currentArmouryChapter = chapter;
    renderArmouryBreadcrumb();
    
    document.getElementById('armoury-navigation').style.display = 'none';
    document.getElementById('bank-container').style.display = 'block';
    
    currentBankPool = window.EXTRA_QUESTION_BANK[currentArmourySubject][chapter] || [];
    currentBankPage = 0;
    
    const container = document.getElementById('bank-container');
    container.innerHTML = '';
    
    loadMoreBankQuestions();
}

// Keep old wrapper function for sidebar compatibility
function renderQuestionBank(subject) {
    initQuestionArmoury();
}

function loadMoreBankQuestions() {
    const container = document.getElementById('bank-container');
    const pool = currentBankPool;
    
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
            <div class="bank-q-text" id="bank-q-text-${i}">
                Q${i+1}. ${q.question}
            </div>
            ${optionsHtml}
            <div style="margin-top: 15px; display: flex; gap: 10px;">
                <button class="bank-reveal-btn" onclick="revealBankSolution(this)" style="margin-top: 0; flex: 1;">Reveal Solution</button>
                <button class="bank-reveal-btn up-armour-btn" onclick="upArmourQuestion(this, ${i})" style="margin-top: 0; flex: 1; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; border: none;">
                    Up-Armour It
                </button>
            </div>
            <div class="bank-solution" style="display: none; margin-top: 15px;">
                <strong>Correct Answer:</strong> ${String.fromCharCode(65 + q.correct)}<br><br>
                <div class="explanation-text">${q.explanation || 'No detailed explanation provided.'}</div>
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
    const solutionDiv = card.querySelector('.bank-solution');
    const opts = card.querySelectorAll('.bank-opt');
    
    // Highlight correct option
    opts.forEach(opt => {
        if (opt.getAttribute('data-correct') === 'true') {
            opt.classList.add('correct');
        }
    });
    
    // Toggle solution visibility
    if (solutionDiv.style.display === 'none') {
        solutionDiv.style.display = 'block';
        btn.innerText = 'Hide Solution';
    } else {
        solutionDiv.style.display = 'none';
        btn.innerText = 'Reveal Solution';
        opts.forEach(opt => opt.classList.remove('correct'));
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
}

// --- UP-ARMOUR LOGIC ---
async function upArmourQuestion(btn, index) {
    const pool = currentBankPool || [];
    const q = pool[index];
    if (!q) return;

    const originalBtnText = btn.innerHTML;
    btn.innerHTML = 'Up-Armouring...';
    btn.disabled = true;

    const prompt = `You are an expert UPSC/NDA/CDS exam setter. I have a simple multiple choice question. Your task is to "Up-Armour" this question, meaning make it significantly more difficult, analytical, and conceptual (e.g., using Statement I and Statement II, or multi-statement format common in UPSC exams).
    
CRUCIAL RULE: You MUST keep the EXACT SAME options, meaning the correct answer must still be Option ${String.fromCharCode(65 + q.correct)}. 

Original Question: ${q.question}
Options:
A. ${q.options[0]}
B. ${q.options[1]}
C. ${q.options[2]}
D. ${q.options[3]}

Return the response in this exact format:
[NEW_QUESTION]
(Write the new, harder question text here)
[NEW_EXPLANATION]
(Write a detailed, advanced explanation justifying the answer here)`;

    try {
        const response = await fetch('/api/gemini', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'gemini-1.5-flash',
                stream: false,
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        if (!response.ok) throw new Error("Failed to generate up-armoured question");
        const data = await response.json();
        const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || "";

        const questionMatch = aiText.match(/\[NEW_QUESTION\]\s*(?:\*\*)?([\s\S]*?)(?:\*\*)?\s*\[NEW_EXPLANATION\]/i);
        const expMatch = aiText.match(/\[NEW_EXPLANATION\]\s*(?:\*\*)?([\s\S]*)/i);

        if (questionMatch && questionMatch[1]) {
            const card = btn.closest('.bank-card');
            const qTextDiv = card.querySelector('.bank-q-text');
            qTextDiv.innerHTML = `<span style="color: #f59e0b; font-weight: bold;">[UP-ARMOURED] Q${index+1}.</span> ${questionMatch[1].trim().replace(/\n/g, '<br>')}`;
            
            if (expMatch && expMatch[1]) {
                const expDiv = card.querySelector('.explanation-text');
                if (expDiv) {
                    expDiv.innerHTML = `<br><strong style="color: #f59e0b;">Advanced Explanation:</strong><br>${expMatch[1].trim().replace(/\n/g, '<br>')}`;
                }
            }
            
            btn.innerHTML = 'Up-Armoured';
            btn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
        } else {
            throw new Error("Invalid format returned by AI");
        }
    } catch (err) {
        console.error("Up-armour failed", err);
        btn.innerHTML = 'Failed';
        btn.disabled = false;
        setTimeout(() => { btn.innerHTML = originalBtnText; }, 2000);
    }
}

// ==========================================
// MOBILE RESPONSIVENESS LOGIC
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const overlay = document.getElementById("sidebar-overlay");
  const sidebarLinks = document.querySelectorAll(".nav-item");

  function toggleSidebar() {
    document.body.classList.toggle("sidebar-open");
  }

  function closeSidebar() {
    document.body.classList.remove("sidebar-open");
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", toggleSidebar);
  }
  if (overlay) {
    overlay.addEventListener("click", closeSidebar);
  }

  sidebarLinks.forEach(link => {
    link.addEventListener("click", () => {
      // Small delay allows the visual click effect before sliding out
      setTimeout(closeSidebar, 150);
    });
  });
});



// --- ONBOARDING & ADMIN LOGIC ---
window.submitOnboardingPayment = async function() {
  const txId = document.getElementById('onboarding-transaction-id').value;
  if (!txId) {
    alert('Please enter a Transaction ID.');
    return;
  }
  document.getElementById('onboarding-payment-msg').style.display = 'block';
  
  if (typeof STATE !== 'undefined' && STATE.activeProfile) {
    if (STATE.activeProfile.status === 'active') {
      alert('Your account is already active.');
      switchScreen('dashboard');
      return;
    }
    STATE.activeProfile.transaction_id = txId;
    STATE.activeProfile.status = 'locked';
    if (typeof saveState === 'function') saveState();
    
    // Update Supabase if available
    if (window.supabaseClient && STATE.activeProfile.id) {
      window.supabaseClient.from('user_profiles').update({ status: 'locked', transaction_id: txId }).eq('id', STATE.activeProfile.id).then();
    }
  }
  
  // Switch to locked screen
  setTimeout(() => { switchScreen('locked'); }, 1000);
};

// Mock users for offline admin dashboard
window.MOCK_ADMIN_USERS = [
  { email: 'newuser1@gmail.com', status: 'pending_payment', transaction_id: null, created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString() },
  { email: 'paiduser2@gmail.com', status: 'locked', transaction_id: 'UTR987654321', created_at: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000).toISOString() },
  { email: 'activeuser3@gmail.com', status: 'active', transaction_id: 'UTR123456789', created_at: new Date(Date.now() - 100 * 24 * 60 * 60 * 1000).toISOString() }
];

window.renderAdminDashboard = async function() {
  const tbody = document.getElementById('admin-users-list');
  if (!tbody) return;
  
  let displayUsers = [];
  
  if (window.supabaseClient) {
    const { data, error } = await window.supabaseClient.from('user_profiles').select('id, email, status, transaction_id, created_at, approved_at').order('created_at', { ascending: false });
    
    console.log("[Admin] Supabase user_profiles fetch data:", data);
    if (error) {
      console.error("[Admin] Supabase error fetching users:", error);
    }
    
    if (!error && data && data.length > 0) {
      displayUsers = data.map(d => ({
        id: d.id,
        email: d.email,
        status: d.status,
        transaction_id: d.transaction_id,
        created_at: d.created_at,
        approved_at: d.approved_at
      })).filter(u => u.email && u.email !== 'default_cadet');
    }
  }
  
  // Check if Supabase returned an error or empty data
  if (window.supabaseClient && displayUsers.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding: 20px; color: var(--text-muted);">No users found in Supabase (or RLS policy is blocking access). Check console logs.</td></tr>`;
    return;
  }
  
  // Fallback only if no users and no Supabase connection
  if (displayUsers.length === 0 && !window.supabaseClient) {
    let offlineUsers = [];
    try {
      offlineUsers = JSON.parse(localStorage.getItem('offline_users')) || [];
    } catch (e) {
      console.error(e);
    }
    
    // Merge MOCK users with offline users, avoiding duplicates by email
    const allOffline = [...window.MOCK_ADMIN_USERS];
    for (const u of offlineUsers) {
      if (!allOffline.find(mock => mock.email === u.email)) {
        allOffline.push(u);
      } else {
        // Update status if it changed
        const existing = allOffline.find(mock => mock.email === u.email);
        existing.status = u.status;
      }
    }
    
    displayUsers = allOffline;
    if (STATE.activeProfile && STATE.activeProfile.email !== 'trayodh@gmail.com' && !displayUsers.find(u => u.email === STATE.activeProfile.email)) {
      displayUsers.push(STATE.activeProfile);
    }
  }
  
  const newHTML = displayUsers.map((u) => {
    let accountAgeText = '-';
    if (u.created_at) {
      const diffMs = Date.now() - new Date(u.created_at).getTime();
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      if (diffDays === 0) accountAgeText = 'Today';
      else if (diffDays < 30) accountAgeText = `${diffDays} day${diffDays > 1 ? 's' : ''}`;
      else {
        const months = Math.floor(diffDays / 30);
        accountAgeText = `${months} month${months > 1 ? 's' : ''}`;
      }
    }
    return `
    <tr style='border-bottom: 1px solid rgba(255,255,255,0.05);'>
      <td style='padding: 12px; font-weight: 600; display: flex; align-items: center; gap: 10px;'>
        ${u.email}
        ${accountAgeText !== '-' ? `<span style='padding: 2px 8px; border-radius: 12px; background: rgba(255,255,255,0.08); color: var(--text-muted); font-size: 0.7rem; font-weight: 500;'>${accountAgeText}</span>` : ''}
      </td>
      <td style='padding: 12px;'>
        <span style='padding: 4px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 600; background: ${u.status === 'active' ? 'rgba(34,197,94,0.2)' : u.status === 'locked' ? 'rgba(239,68,68,0.2)' : 'rgba(234,179,8,0.2)'}; color: ${u.status === 'active' ? '#4ade80' : u.status === 'locked' ? '#ef4444' : '#eab308'};'>
          ${u.status.toUpperCase()}
        </span>
      </td>
      <td style='padding: 12px; font-family: monospace; color: var(--text-muted); font-size: 0.85rem;'>${u.transaction_id || '-'}</td>
      <td style='padding: 12px; display: flex; gap: 8px; align-items: center;'>
        <button onclick='updateUserStatus("${u.id || u.email}", "active")' style='padding: 4px 8px; background: transparent; color: var(--text-secondary); border: none; border-radius: 4px; cursor: pointer; font-size: 0.85rem; transition: color 0.2s;' onmouseover='this.style.color="#4ade80"' onmouseout='this.style.color="var(--text-secondary)"'>Approve</button>
        <button onclick='updateUserStatus("${u.id || u.email}", "locked")' style='padding: 4px 10px; background: #ef4444; color: #fff; border: none; border-radius: 4px; cursor: pointer; font-size: 0.75rem;'>Lock</button>
        <button onclick='updateUserStatus("${u.id || u.email}", "pending_payment")' style='padding: 4px 10px; background: #3b82f6; color: #fff; border: none; border-radius: 4px; cursor: pointer; font-size: 0.75rem;'>Reject</button>
      </td>
    </tr>
  `;
  }).join('');
  if (tbody.innerHTML !== newHTML) {
    tbody.innerHTML = newHTML;
  }
};

window.updateUserStatus = async function(userIdOrEmail, newStatus) {
  if (window.supabaseClient && userIdOrEmail.includes('-')) {
    // Looks like a UUID
    let updateData = { status: newStatus };
    if (newStatus === 'active') {
      updateData.approved_at = new Date().toISOString();
    }
    await window.supabaseClient.from('user_profiles').update(updateData).eq('id', userIdOrEmail);
  } else {
    // Mock user logic
    let offlineUsers = [];
    try {
      offlineUsers = JSON.parse(localStorage.getItem('offline_users')) || [];
    } catch(e) {}
    
    let u = offlineUsers.find(u => u.email === userIdOrEmail);
    if (!u) {
       // Check MOCK array and clone
       const mockU = window.MOCK_ADMIN_USERS.find(m => m.email === userIdOrEmail);
       if (mockU) {
         u = { ...mockU };
         offlineUsers.push(u);
       }
    }
    
    if (u) {
      u.status = newStatus;
      if (newStatus === 'active') {
        u.approved_at = new Date().toISOString();
      }
      localStorage.setItem('offline_users', JSON.stringify(offlineUsers));
    }
  }
  
  // Update local state if modifying self
  if (STATE.activeProfile && (STATE.activeProfile.id === userIdOrEmail || STATE.activeProfile.email === userIdOrEmail)) {
    STATE.activeProfile.status = newStatus;
    if (typeof saveState === 'function') saveState();
  }
  renderAdminDashboard();
};
// Military C2 Clocks
setInterval(() => {
    const utcEl = document.getElementById('clock-utc');
    const istEl = document.getElementById('clock-ist');
    const now = new Date();
    
    if (utcEl) {
        utcEl.innerText = now.toISOString().substring(11, 19) + ' Z';
    }
    if (istEl) {
        istEl.innerText = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: false }) + ' IST';
    }
}, 1000);
