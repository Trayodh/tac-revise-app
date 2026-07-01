// 7. SCREEN SWITCHER & NAVIGATION
// ==========================================
function switchScreen(screenId) {
  if (typeof distractionFreeMode !== 'undefined' && distractionFreeMode) {
    toggleFocusReadingMode();
  }

  STATE.currentScreen = screenId;
  localStorage.setItem("tac_revise_state_v1", JSON.stringify(STATE));
  window.scrollTo(0, 0);
  
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
  } else if (screenId === "analytics") {
    renderAnalytics();
  } else if (screenId === "question-bank") {
    renderQuestionBank('gs');
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