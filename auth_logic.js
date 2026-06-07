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
        alert('Sign up successful! Please check your email for verification.');
        document.getElementById('auth-modal').style.display = 'none';
      } else {
        alert('Offline mode: Sign up mocked.');
        document.getElementById('auth-modal').style.display = 'none';
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
  if (supabaseClientInstance) {
    const { data: { session } } = await supabaseClientInstance.auth.getSession();
    if (session) {
      updateUserProfile(session.user);
    }
  }
});
