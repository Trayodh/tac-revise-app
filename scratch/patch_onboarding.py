import re

with open('auth_logic.js', 'r', encoding='utf-8') as f:
    content = f.read()

append_code = r"""

// --- ONBOARDING MODAL LOGIC ---
window.selectedSignupBranch = null;

window.selectBranch = function(branch) {
  window.selectedSignupBranch = branch;
  
  // Reset all styles
  const branches = ['army', 'navy', 'airforce'];
  branches.forEach(b => {
    const el = document.getElementById(`branch-card-${b}`);
    if (el) {
      el.style.border = '1px solid var(--border)';
      el.style.boxShadow = 'none';
      el.style.background = 'rgba(0,0,0,0.2)';
    }
  });
  
  // Highlight selected
  const selectedEl = document.getElementById(`branch-card-${branch}`);
  if (selectedEl) {
    selectedEl.style.border = '1px solid var(--accent)';
    selectedEl.style.boxShadow = '0 0 15px rgba(59, 130, 246, 0.3)';
    selectedEl.style.background = 'rgba(59, 130, 246, 0.1)';
  }
};

window.confirmBranchSelection = function() {
  if (!window.selectedSignupBranch) {
    alert("Please select a service branch to continue.");
    return;
  }
  
  // Update state (assuming STATE is global from app.js)
  if (typeof STATE !== 'undefined') {
    STATE.activeProfile.branch = window.selectedSignupBranch;
    if (typeof saveState === 'function') saveState();
  }
  
  // Hide modal
  document.getElementById('onboarding-modal').style.display = 'none';
  alert(`Welcome to the ${window.selectedSignupBranch.toUpperCase()}! Your rank progression begins now.`);
};
"""

content += append_code

with open('auth_logic.js', 'w', encoding='utf-8') as f:
    f.write(content)

print('Done appending onboarding logic to auth_logic.js.')
