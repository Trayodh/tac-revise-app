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