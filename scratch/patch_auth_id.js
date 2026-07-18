const fs = require('fs');

let authCode = fs.readFileSync('auth_logic.js', 'utf8');

// Fix missing ID on signup
authCode = authCode.replace(
  /STATE\.activeProfile = \{ email: email, status: email === 'trayodh@gmail\.com' \? 'active' : 'pending_payment' \};/g,
  `STATE.activeProfile = { id: data?.user?.id || null, email: email, status: email === 'trayodh@gmail.com' ? 'active' : 'pending_payment' };`
);

fs.writeFileSync('auth_logic.js', authCode);
console.log('Patched auth_logic.js with missing ID on signup');
