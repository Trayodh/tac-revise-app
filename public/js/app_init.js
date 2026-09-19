// 13. APP RUN SUITE - INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  try { initAppState(); } catch(e) { console.error("initAppState error:", e); }
  try { initUserProfile(); } catch(e) { console.error("initUserProfile error:", e); }
  try { initCountdownTimer(); } catch(e) { console.error("initCountdownTimer error:", e); }
  try { initTokenManager(); } catch(e) { console.error("initTokenManager error:", e); }
  
  try { initMotivationOfTheDay(); } catch(e) { console.error("initMotivation error:", e); }
  const startScreen = (typeof STATE !== 'undefined' && STATE.currentScreen) ? STATE.currentScreen : "dashboard";
  try { switchScreen(startScreen); } catch(e) { console.error("switchScreen error:", e); }
  try { initAiPaperSolver(); } catch(e) { console.error("initAiPaperSolver error:", e); }
  try { initWeeklyPlanner(); } catch(e) { console.error("initWeeklyPlanner error:", e); }
  
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