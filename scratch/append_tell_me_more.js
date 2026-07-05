const fs = require('fs');
const jsCode = `
// ==========================================
// TELL ME MORE - TEXT SELECTION FEATURE
// ==========================================
(function() {
  const tooltip = document.getElementById('tell-me-more-tooltip');
  if (!tooltip) return;

  let selectedText = "";

  function checkSelection(e) {
    // If clicking on the tooltip itself, do nothing here.
    if (e.target && e.target.id === 'tell-me-more-tooltip') return;
    
    setTimeout(() => {
      const selection = window.getSelection();
      const text = selection.toString().trim();
      
      if (text.length > 0) {
        selectedText = text;
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        
        tooltip.style.left = (rect.left + window.scrollX + (rect.width / 2)) + 'px';
        tooltip.style.top = (rect.top + window.scrollY) + 'px';
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
      // 1. Switch to AI Console Screen
      if (typeof switchScreen === 'function') {
        switchScreen('ai-console');
      }
      
      // 2. Set the input text
      const inputEl = document.getElementById('ai-custom-topic-input');
      if (inputEl) {
        inputEl.value = selectedText;
      }
      
      // 3. Select 'Solve Doubt' mode
      const solveRadio = document.querySelector('input[name="ai-mode"][value="solve"]');
      if (solveRadio) {
        solveRadio.checked = true;
      }
      
      // 4. Trigger generation
      const generateBtn = document.getElementById('ai-generate-btn');
      if (generateBtn) {
        generateBtn.click();
      }
      
      // Clean up
      window.getSelection().removeAllRanges();
      tooltip.style.display = 'none';
    }
  });
})();
`;
fs.appendFileSync('app.js', jsCode);
console.log("Appended successfully.");
