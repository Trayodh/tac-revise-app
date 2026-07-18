const fs = require('fs');

let authCode = fs.readFileSync('auth_logic.js', 'utf8');

authCode = authCode.replace(
  /const useOffline = confirm\(`Supabase Error: \$\{error\.message\}\\n\\nSupabase limits email signups to 3 per hour on the free tier by default\.\\n\\nWould you like to bypass this and continue in local testing mode\?`\);/,
  `const useOffline = confirm(\`Supabase Error: \${error.message}\\n\\nWould you like to bypass this and continue in OFFLINE local testing mode?\\n\\n⚠️ WARNING: Users created in offline mode are NOT saved to the cloud and WILL NOT appear on the Admin Dashboard!\`);`
);

fs.writeFileSync('auth_logic.js', authCode);
console.log('Updated auth_logic.js prompt');
