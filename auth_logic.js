let isSignUpMode = false;

function toggleAuthMode() {
  isSignUpMode = !isSignUpMode;
  const title = document.getElementById('auth-modal-title');
  const actionBtn = document.getElementById('auth-action-btn');
  const toggleBtn = document.getElementById('auth-toggle-btn');
  
  if (isSignUpMode) {
    title.innerText = 'Sign Up';
    actionBtn.innerText = 'Sign Up';
    toggleBtn.innerText = 'Already have an account? Sign In';
  } else {
    title.innerText = 'Sign In';
    actionBtn.innerText = 'Sign In';
    toggleBtn.innerText = 'Need an account? Sign Up';
  }
}

async function handleAuthAction() {
  const email = document.getElementById('auth-email').value;
  const password = document.getElementById('auth-password').value;
  
  if (!email || !password) {
    alert('Please enter both email and password.');
    return;
  }
  
  const actionBtn = document.getElementById('auth-action-btn');
  const originalText = actionBtn.innerText;
  actionBtn.innerText = 'Loading...';
  actionBtn.disabled = true;
  
  try {
    if (isSignUpMode) {
      if (supabaseClientInstance) {
        const { data, error } = await supabaseClientInstance.auth.signUp({
          email: email,
          password: password,
        });
        if (error) throw error;
        if (typeof STATE !== 'undefined') {
          STATE.activeProfile = { email: email };
          if (typeof saveState === 'function') saveState();
        }
        document.getElementById('auth-modal').style.display = 'none';
        document.getElementById('onboarding-modal').style.display = 'flex';
      } else {
        if (typeof STATE !== 'undefined') {
          STATE.activeProfile = { email: email };
          if (typeof saveState === 'function') saveState();
        }
        document.getElementById('auth-modal').style.display = 'none';
        document.getElementById('onboarding-modal').style.display = 'flex';
      }
    } else {
      if (supabaseClientInstance) {
        const { data, error } = await supabaseClientInstance.auth.signInWithPassword({
          email: email,
          password: password,
        });
        if (error) throw error;
        alert('Sign in successful!');
        document.getElementById('auth-modal').style.display = 'none';
        updateUserProfile(data.user);
      } else {
        alert('Offline mode: Sign in mocked.');
        document.getElementById('auth-modal').style.display = 'none';
        updateUserProfile({ email: email });
      }
    }
  } catch (error) {
    alert(`Error: ${error.message}`);
  } finally {
    actionBtn.innerText = originalText;
    actionBtn.disabled = false;
  }
}

function updateUserProfile(user) {
  if (!user) return;
  const avatar = document.getElementById('profile-avatar');
  const infoContainer = document.querySelector('.profile-info');
  
  if (avatar && user.email) {
    avatar.innerText = user.email.charAt(0).toUpperCase();
  }
  
  if (infoContainer) {
    infoContainer.innerHTML = `
      <div style="font-weight: 600; font-size: 0.95rem;">${user.email.split('@')[0]}</div>
      <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 4px;">Cadet Level</div>
    `;
  }
}

// Check for existing session on load
document.addEventListener('DOMContentLoaded', async () => {
  let hasSession = false;

  if (window.supabaseClient) {
    const { data: { session } } = await window.supabaseClient.auth.getSession();
    if (session) {
      updateUserProfile(session.user);
      hasSession = true;
    }
  }

  // Fallback for offline mock profiles (if STATE is initialized and contains a profile)
  if (!hasSession && typeof STATE !== 'undefined' && STATE.activeProfile && STATE.activeProfile.email) {
    updateUserProfile(STATE.activeProfile);
    hasSession = true;
  }

  if (!hasSession) {
    // Show auth modal for new user automatically
    const authModal = document.getElementById('auth-modal');
    if (authModal) {
      authModal.style.display = 'flex';
      
      // Ensure it defaults to "Sign Up" mode for new users
      if (!isSignUpMode) {
        toggleAuthMode();
      }
    }
  }
});


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
    if (!STATE.activeProfile) STATE.activeProfile = {};
    STATE.activeProfile.branch = window.selectedSignupBranch;
    if (typeof saveState === 'function') saveState();
  }
  
  // Hide modal
  document.getElementById('onboarding-modal').style.display = 'none';
  
  // Update UI Profile Widget
  const infoContainer = document.querySelector('.profile-info');
  if (infoContainer && STATE.activeProfile.email) {
    const branchDisplay = window.selectedSignupBranch === 'army' ? 'Indian Army' : window.selectedSignupBranch === 'navy' ? 'Indian Navy' : 'Air Force';
    infoContainer.innerHTML = `
      <div id="profile-rank" style="font-weight: 600; font-size: 0.9rem; color: var(--text-primary); white-space: nowrap; text-overflow: ellipsis; overflow: hidden;">Cadet</div>
      <div id="profile-branch" style="font-size: 0.75rem; color: var(--accent);">${branchDisplay}</div>
      <div style="height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; margin-top: 6px; overflow: hidden;">
        <div id="profile-xp-bar" style="width: 10%; height: 100%; background: var(--success); border-radius: 2px;"></div>
      </div>
    `;
  }

  alert(`Welcome to the ${window.selectedSignupBranch.toUpperCase()}! Your rank progression begins now.`);
};
