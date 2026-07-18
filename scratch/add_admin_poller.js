const fs = require('fs');

let code = fs.readFileSync('app.js', 'utf8');

// 1. Add admin poller code
const adminPollerCode = `
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
`;

// Insert it right after stopStatusPoller
code = code.replace(
  /\/\/ -------------------------\s*\n\s*function switchScreen\(screenId\) \{/,
  "// -------------------------\n" + adminPollerCode + "\nfunction switchScreen(screenId) {"
);

// 2. Hook it into switchScreen
code = code.replace(
  /if \(typeof stopStatusPoller === 'function'\) stopStatusPoller\(\);\s*\n\s*\}/,
  `if (typeof stopStatusPoller === 'function') stopStatusPoller();
  }
  
  if (screenId === 'admin') {
    if (typeof startAdminPoller === 'function') startAdminPoller();
  } else {
    if (typeof stopAdminPoller === 'function') stopAdminPoller();
  }`
);

// 3. Update renderAdminDashboard to prevent flickering
code = code.replace(
  /tbody\.innerHTML = displayUsers\.map\(\(u\) => `([\s\S]*?)`\)\.join\(''\);/,
  `const newHTML = displayUsers.map((u) => \`$1\`).join('');
  if (tbody.innerHTML !== newHTML) {
    tbody.innerHTML = newHTML;
  }`
);

// 4. Update updateUserStatus to trigger instant re-render
code = code.replace(
  /await window\.supabaseClient\.from\('user_data'\)\.update\(\{ state: data\.state \}\)\.eq\('user_id', userIdOrEmail\);\s*\n\s*\}/,
  `await window.supabaseClient.from('user_data').update({ state: data.state }).eq('user_id', userIdOrEmail);
      if (typeof renderAdminDashboard === 'function') renderAdminDashboard();
    }`
);


fs.writeFileSync('app.js', code);
console.log("Admin poller added successfully.");
