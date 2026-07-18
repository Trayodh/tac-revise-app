const fs = require('fs');

let appJs = fs.readFileSync('app.js', 'utf8');
let authJs = fs.readFileSync('auth_logic.js', 'utf8');

// Replace in app.js
appJs = appJs.replace(
  /const { data, error } = await window\.supabaseClient\.from\('user_profiles'\)\.select\('\*'\)\.order\('created_at', \{ ascending: false \}\);/g,
  `const { data, error } = await window.supabaseClient.from('user_data').select('user_id, state, updated_at').order('updated_at', { ascending: false });`
);

appJs = appJs.replace(
  /if \(!error && data && data\.length > 0\) \{\s*displayUsers = data;\s*\}/g,
  `if (!error && data && data.length > 0) {
      displayUsers = data.map(d => ({
        id: d.user_id,
        email: d.state?.activeProfile?.email || d.user_id,
        status: d.state?.activeProfile?.status || 'pending_payment',
        transaction_id: d.state?.activeProfile?.transaction_id || null
      })).filter(u => u.email && u.email !== 'default_cadet');
    }`
);

appJs = appJs.replace(
  /await window\.supabaseClient\.from\('user_profiles'\)\.update\(\{ status: newStatus \}\)\.eq\('id', userIdOrEmail\);/g,
  `const { data } = await window.supabaseClient.from('user_data').select('state').eq('user_id', userIdOrEmail).single();
    if (data && data.state) {
      if (!data.state.activeProfile) data.state.activeProfile = {};
      data.state.activeProfile.status = newStatus;
      await window.supabaseClient.from('user_data').update({ state: data.state }).eq('user_id', userIdOrEmail);
    }`
);

// We need to also remove the user_profiles update in submitOnboardingPayment in app.js
appJs = appJs.replace(
  /await window\.supabaseClient\.from\('user_profiles'\)\.update\(\{ transaction_id: txId, status: 'locked' \}\)\.eq\('id', STATE\.activeProfile\.id\);/g,
  `// updated via saveState automatically`
);


// Replace in auth_logic.js
// Sign up profile creation
authJs = authJs.replace(
  /const { error: profileError } = await window\.supabaseClient\s*\n\s*\.from\('user_profiles'\)\s*\n\s*\.upsert\(\{ id: data\.user\.id, email: email, status: defaultStatus \}, \{ onConflict: 'id' \}\);\s*\n\s*if \(profileError\) console\.error\("Error creating profile:", profileError\);/g,
  `// Profile handled by saveState()`
);

// Sign in profile fetching
authJs = authJs.replace(
  /let userStatus = email === 'trayodh@gmail\.com' \? 'active' : 'pending_payment';\s*\n\s*let txId = null;\s*\n\s*if \(data\.user\) \{\s*\n\s*const \{ data: profileData \} = await window\.supabaseClient\s*\n\s*\.from\('user_profiles'\)\s*\n\s*\.select\('status, transaction_id'\)\s*\n\s*\.eq\('id', data\.user\.id\)\s*\n\s*\.single\(\);\s*\n\s*if \(profileData\) \{\s*\n\s*userStatus = profileData\.status;\s*\n\s*txId = profileData\.transaction_id;\s*\n\s*\} else \{\s*\n\s*\/\/ Profile missing, recreate it\s*\n\s*await window\.supabaseClient\.from\('user_profiles'\)\.upsert\(\{ id: data\.user\.id, email: email, status: userStatus \}, \{ onConflict: 'id' \}\);\s*\n\s*\}\s*\n\s*\}/g,
  `let userStatus = email === 'trayodh@gmail.com' ? 'active' : 'pending_payment';
        let txId = null;
        if (data.user) {
          const { data: ud } = await window.supabaseClient.from('user_data').select('state').eq('user_id', data.user.id).single();
          if (ud && ud.state && ud.state.activeProfile) {
            userStatus = ud.state.activeProfile.status || userStatus;
            txId = ud.state.activeProfile.transaction_id || txId;
          }
        }`
);

// On load session fetch
authJs = authJs.replace(
  /const \{ data: profileData \} = await window\.supabaseClient\s*\n\s*\.from\('user_profiles'\)\s*\n\s*\.select\('status, transaction_id'\)\s*\n\s*\.eq\('id', session\.user\.id\)\s*\n\s*\.single\(\);/g,
  `const { data: ud } = await window.supabaseClient.from('user_data').select('state').eq('user_id', session.user.id).single();
      const profileData = ud && ud.state && ud.state.activeProfile ? ud.state.activeProfile : null;`
);

fs.writeFileSync('app.js', appJs);
fs.writeFileSync('auth_logic.js', authJs);

console.log("Replaced user_profiles with user_data in app.js and auth_logic.js");
