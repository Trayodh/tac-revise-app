const fs = require('fs');

let css = fs.readFileSync('index.css', 'utf8');

const additionalCSS = `
/* ==========================================
   THEME TOGGLE & MODAL TRANSITIONS (ADDED)
========================================== */
body.light-mode {
  --bg-primary: #f3f4f6;
  --bg-secondary: #ffffff;
  --bg-tertiary: #e5e7eb;
  --bg-hover: #d1d5db;
  --border: rgba(0, 0, 0, 0.1);
  --border-glow: rgba(34, 197, 94, 0.4);
  --text-primary: #111827;
  --text-secondary: #4b5563;
  --text-muted: #9ca3af;
  
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.theme-toggle-btn {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  margin-top: auto;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-main);
  transition: var(--transition-fast);
}
.theme-toggle-btn:hover {
  background-color: var(--bg-tertiary);
  color: var(--text-primary);
}

/* Smooth modal transitions */
.cbt-overlay {
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
}
`;

if (!css.includes('THEME TOGGLE & MODAL TRANSITIONS')) {
  fs.appendFileSync('index.css', additionalCSS);
  console.log("Appended light mode and transition CSS.");
} else {
  console.log("CSS already contains the theme toggle logic.");
}

let html = fs.readFileSync('index.html', 'utf8');
if (!html.includes('id="theme-toggle"')) {
  html = html.replace('</aside>', `
      <button class="theme-toggle-btn" id="theme-toggle" onclick="document.body.classList.toggle('light-mode');">
        First Quarter Toggle Light/Dark Theme
      </button>
    </aside>`);
  fs.writeFileSync('index.html', html);
  console.log("Added theme toggle to sidebar in index.html.");
}
