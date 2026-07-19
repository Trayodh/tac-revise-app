let isSignUpMode = true;

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
      if (window.supabaseClient) {
        const { data, error } = await window.supabaseClient.auth.signUp({
          email: email,
          password: password,
        });
        if (error) throw error;
        
        // Create user profile in Supabase
        const defaultStatus = email === 'trayodh@gmail.com' ? 'active' : 'pending_payment';
        if (data.user) {
          const { error: profileError } = await window.supabaseClient
            .from('user_profiles')
            .insert({ id: data.user.id, email: email, status: defaultStatus });
          if (profileError) console.error("Error creating profile:", profileError);
        }

        if (!data.session) {
          alert('Sign up successful! Please check your email to confirm your account before signing in.');
          toggleAuthMode(); // switch to sign in view
          return;
        }

        if (typeof STATE !== 'undefined') {
          STATE.activeProfile = { email: email, status: email === 'trayodh@gmail.com' ? 'active' : 'pending_payment' };
          if (typeof saveState === 'function') saveState();
        }
        document.getElementById('auth-modal').style.display = 'none';
        
        if (STATE.activeProfile.status !== 'active') {
          if (typeof switchScreen === 'function') switchScreen('onboarding-payment');
        } else {
          document.getElementById('onboarding-modal').style.display = 'flex';
        }
      } else {
        if (typeof STATE !== 'undefined') {
          STATE.activeProfile = { email: email, status: email === 'trayodh@gmail.com' ? 'active' : 'pending_payment' };
          if (typeof saveState === 'function') saveState();
        }
        let offlineUsers = JSON.parse(localStorage.getItem('offline_users')) || [];
        if (!offlineUsers.find(u => u.email === email)) {
          offlineUsers.push({ 
            email: email, 
            status: email === 'trayodh@gmail.com' ? 'active' : 'pending_payment', 
            created_at: new Date().toISOString(),
            id: 'mock-' + Math.random().toString(36).substring(2, 9)
          });
          localStorage.setItem('offline_users', JSON.stringify(offlineUsers));
        }
        document.getElementById('auth-modal').style.display = 'none';
        
        if (STATE.activeProfile.status !== 'active') {
          if (typeof switchScreen === 'function') switchScreen('onboarding-payment');
        } else {
          document.getElementById('onboarding-modal').style.display = 'flex';
        }
      }
    } else {
      if (window.supabaseClient) {
        let data, error;
        // Admin Backdoor
        if (email === 'trayodh@gmail.com' && password === 'admin1') {
           data = { user: { id: 'admin-mock-id', email: email } };
           error = null;
           alert('Admin override activated. Logging in offline mode.');
        } else {
           const res = await window.supabaseClient.auth.signInWithPassword({
             email: email,
             password: password,
           });
           data = res.data;
           error = res.error;
           if (error) throw error;
           alert('Sign in successful!');
        }
        
        // Fetch user profile from Supabase
        let userStatus = email === 'trayodh@gmail.com' ? 'active' : 'pending_payment';
        let txId = null;
        if (data.user) {
          const { data: profileData } = await window.supabaseClient
            .from('user_profiles')
            .select('status, transaction_id')
            .eq('id', data.user.id)
            .single();
          if (profileData) {
            userStatus = profileData.status;
            txId = profileData.transaction_id;
          } else {
            // Profile missing, recreate it safely
            const { error: insertError } = await window.supabaseClient.from('user_profiles').insert({ id: data.user.id, email: email, status: userStatus });
            if (insertError && insertError.code !== '23505') console.error("Error creating profile:", insertError);
          }
        }

        if (typeof STATE !== 'undefined') {
          STATE.activeProfile = { email: email, status: userStatus, transaction_id: txId, id: data.user.id };
          if (typeof saveState === 'function') saveState();
        }
        document.getElementById('auth-modal').style.display = 'none';
        updateUserProfile(data.user);
        
        if (STATE.activeProfile && STATE.activeProfile.status !== 'active') {
          if (typeof switchScreen === 'function') switchScreen('onboarding-payment');
        } else {
          if (typeof syncFromSupabase === 'function') {
            syncFromSupabase();
          }
          if (typeof switchScreen === 'function') switchScreen('dashboard');
        }
      } else {
        alert('Offline mode: Sign in mocked.');
        if (typeof STATE !== 'undefined') {
          let offlineUsers = JSON.parse(localStorage.getItem('offline_users')) || [];
          let userStatus = email === 'trayodh@gmail.com' ? 'active' : 'pending_payment';
          let foundUser = offlineUsers.find(u => u.email === email);
          
          if (foundUser) {
             userStatus = foundUser.status;
          } else {
             // Mock creating them if they don't exist
             offlineUsers.push({ email: email, status: userStatus, created_at: new Date().toISOString(), id: 'mock-' + Math.random().toString(36).substring(2, 9) });
             localStorage.setItem('offline_users', JSON.stringify(offlineUsers));
          }
          
          if (!STATE.activeProfile || STATE.activeProfile.email !== email) {
            STATE.activeProfile = { email: email, status: userStatus };
          }
          if (typeof saveState === 'function') saveState();
        }
        document.getElementById('auth-modal').style.display = 'none';
        updateUserProfile({ email: email });
        
        if (STATE.activeProfile && STATE.activeProfile.status !== 'active') {
          if (typeof switchScreen === 'function') switchScreen('onboarding-payment');
        } else {
          if (typeof switchScreen === 'function') switchScreen('dashboard');
        }
      }
    }
  } catch (error) {
    // Handle Supabase rate limits gracefully by offering local fallback
    if (error.message && error.message.toLowerCase().includes('rate limit')) {
      const useOffline = confirm(`Supabase Error: ${error.message}\n\nSupabase limits email signups to 3 per hour on the free tier by default.\n\nWould you like to bypass this and continue in local testing mode?`);
      if (useOffline) {
        if (typeof STATE !== 'undefined') {
          STATE.activeProfile = { email: email, status: email === 'trayodh@gmail.com' ? 'active' : 'pending_payment' };
          if (typeof saveState === 'function') saveState();
        }
        document.getElementById('auth-modal').style.display = 'none';
        updateUserProfile({ email: email });
        
        if (STATE.activeProfile && STATE.activeProfile.status !== 'active') {
          if (typeof switchScreen === 'function') switchScreen('onboarding-payment');
        } else {
          if (typeof switchScreen === 'function') switchScreen('dashboard');
        }
        return;
      }
    } else if (error.message && error.message.toLowerCase().includes('already registered')) {
      alert("You already have an account! Switching to Sign In.");
      if (isSignUpMode) toggleAuthMode();
      return;
    }
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
  
  // Show admin nav item if admin
  const adminNav = document.getElementById('nav-item-admin');
  if (adminNav) {
    if (user.email === 'trayodh@gmail.com') {
      adminNav.style.display = 'flex';
    } else {
      adminNav.style.display = 'none';
    }
  }
}

// Check for existing session on load
document.addEventListener('DOMContentLoaded', async () => {
  let hasSession = false;

  if (window.supabaseClient) {
    const { data: { session } } = await window.supabaseClient.auth.getSession();
    if (session) {
      // Fetch fresh profile data
      const { data: profileData } = await window.supabaseClient
        .from('user_profiles')
        .select('status, transaction_id')
        .eq('id', session.user.id)
        .single();
        
      if (typeof STATE !== 'undefined') {
        STATE.activeProfile = { 
          id: session.user.id,
          email: session.user.email, 
          status: profileData ? profileData.status : (session.user.email === 'trayodh@gmail.com' ? 'active' : 'pending_payment'),
          transaction_id: profileData ? profileData.transaction_id : null
        };
        if (typeof saveState === 'function') saveState();
      }

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
