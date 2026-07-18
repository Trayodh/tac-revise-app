const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

const pollerCode = `
// --- LIVE STATUS POLLER ---
window.statusPollerInterval = null;

window.startStatusPoller = function() {
  if (window.statusPollerInterval) return; // Already running
  console.log("Starting live status poller...");
  window.statusPollerInterval = setInterval(async () => {
    if (!window.supabaseClient || !STATE || !STATE.activeProfile || !STATE.activeProfile.id) return;
    try {
      const { data } = await window.supabaseClient.from('user_data').select('state').eq('user_id', STATE.activeProfile.id).single();
      if (data && data.state && data.state.activeProfile) {
        const newStatus = data.state.activeProfile.status;
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
  }, 5000);
};

window.stopStatusPoller = function() {
  if (window.statusPollerInterval) {
    clearInterval(window.statusPollerInterval);
    window.statusPollerInterval = null;
    console.log("Stopped live status poller.");
  }
};
// -------------------------
`;

// Insert the poller code before switchScreen
code = code.replace('function switchScreen(screenId) {', pollerCode + '\nfunction switchScreen(screenId) {');

// Inject start/stop into switchScreen
const hookCode = `
  if (screenId === 'onboarding-payment' || screenId === 'locked') {
    if (typeof startStatusPoller === 'function') startStatusPoller();
  } else {
    if (typeof stopStatusPoller === 'function') stopStatusPoller();
  }
`;

code = code.replace('STATE.currentScreen = screenId;', 'STATE.currentScreen = screenId;\n  ' + hookCode);

fs.writeFileSync('app.js', code);
console.log('Poller injected.');
