const fs = require('fs');

let css = fs.readFileSync('index.css', 'utf8');
if (!css.includes('.locked-mode')) {
  css += `\n/* --- LOCKED MODE OVERRIDES --- */\nbody.locked-mode .sidebar,\nbody.locked-mode .mobile-menu-toggle,\nbody.locked-mode .sidebar-overlay {\n  display: none !important;\n}\n\nbody.locked-mode .main-content {\n  margin-left: 0 !important;\n  width: 100% !important;\n}\n`;
  fs.writeFileSync('index.css', css);
}

let js = fs.readFileSync('app.js', 'utf8');
if (!js.includes('classList.add("locked-mode")')) {
  js = js.replace('STATE.currentScreen = screenId;', `STATE.currentScreen = screenId;\n  \n  if (screenId === 'locked' || screenId === 'onboarding-payment') {\n    document.body.classList.add('locked-mode');\n  } else {\n    document.body.classList.remove('locked-mode');\n  }`);
  fs.writeFileSync('app.js', js);
}
console.log('Locked mode styling applied.');
