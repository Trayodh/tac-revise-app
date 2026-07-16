// --- ONBOARDING & ADMIN LOGIC ---
window.submitOnboardingPayment = function() {
  const txId = document.getElementById('onboarding-transaction-id').value;
  if (!txId) {
    alert('Please enter a Transaction ID.');
    return;
  }
  document.getElementById('onboarding-payment-msg').style.display = 'block';
  if (typeof STATE !== 'undefined' && STATE.activeProfile) {
    STATE.activeProfile.transaction_id = txId;
    STATE.activeProfile.status = 'locked';
    if (typeof saveState === 'function') saveState();
  }
  // Mock backend delay then switch to locked screen
  setTimeout(() => { switchScreen('locked'); }, 2000);
};

// Mock users for offline admin dashboard
window.MOCK_ADMIN_USERS = [
  { email: 'newuser1@gmail.com', status: 'pending_payment', transaction_id: null },
  { email: 'paiduser2@gmail.com', status: 'locked', transaction_id: 'UTR987654321' },
  { email: 'activeuser3@gmail.com', status: 'active', transaction_id: 'UTR123456789' }
];

window.renderAdminDashboard = function() {
  const tbody = document.getElementById('admin-users-list');
  if (!tbody) return;
  
  // Also include the current user if not already in mock list
  let displayUsers = [...window.MOCK_ADMIN_USERS];
  if (STATE.activeProfile && STATE.activeProfile.email !== 'admin@jayastra.com' && !displayUsers.find(u => u.email === STATE.activeProfile.email)) {
    displayUsers.push(STATE.activeProfile);
  }
  
  tbody.innerHTML = displayUsers.map((u, i) => `
    <tr style='border-bottom: 1px solid rgba(255,255,255,0.05);'>
      <td style='padding: 12px;'>${u.email}</td>
      <td style='padding: 12px;'>
        <span style='padding: 4px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 600; background: ${u.status === 'active' ? 'rgba(34,197,94,0.2)' : u.status === 'locked' ? 'rgba(239,68,68,0.2)' : 'rgba(234,179,8,0.2)'}; color: ${u.status === 'active' ? '#4ade80' : u.status === 'locked' ? '#ef4444' : '#eab308'};'>
          ${u.status.toUpperCase()}
        </span>
      </td>
      <td style='padding: 12px; font-family: monospace; color: var(--text-muted);'>${u.transaction_id || '-'}</td>
      <td style='padding: 12px; display: flex; gap: 8px;'>
        <button onclick='updateUserStatus(${i}, "active")' style='padding: 4px 8px; background: var(--success); color: #000; border: none; border-radius: 4px; cursor: pointer; font-size: 0.75rem;'>Approve</button>
        <button onclick='updateUserStatus(${i}, "locked")' style='padding: 4px 8px; background: #ef4444; color: #fff; border: none; border-radius: 4px; cursor: pointer; font-size: 0.75rem;'>Lock</button>
        <button onclick='updateUserStatus(${i}, "pending_payment")' style='padding: 4px 8px; background: #3b82f6; color: #fff; border: none; border-radius: 4px; cursor: pointer; font-size: 0.75rem;'>Reject</button>
      </td>
    </tr>
  `).join('');
};

window.updateUserStatus = function(idx, newStatus) {
  let displayUsers = [...window.MOCK_ADMIN_USERS];
  if (STATE.activeProfile && STATE.activeProfile.email !== 'admin@jayastra.com' && !displayUsers.find(u => u.email === STATE.activeProfile.email)) {
    displayUsers.push(STATE.activeProfile);
  }
  const user = displayUsers[idx];
  if (user) {
    user.status = newStatus;
    // Update local state if we are modifying the current logged-in test user
    if (user.email === STATE.activeProfile?.email) {
      STATE.activeProfile.status = newStatus;
      if (typeof saveState === 'function') saveState();
    }
    renderAdminDashboard();
  }
};
