/**
 * merge_dronacharya.js
 * Unifies the two "Ask Dronacharya" implementations:
 *   - Removes old #chatbot-launcher / #chatbot-drawer from index.html
 *   - Updates app.js to target the new #dronacharya-panel / #drona-chat-area / #drona-input IDs
 *   - Renames functions: toggleChatbot → toggleDronaPanel, sendChatbotMessage → sendDronaQuery
 *   - Updates mock_tests.js hide/show references
 */
const fs = require('fs');

function replaceAll(src, from, to) {
  return src.split(from).join(to);
}

// ─── 1. UPDATE app.js ────────────────────────────────────────────────────────
let appJs = fs.readFileSync('app.js', 'utf8');

// Hide/Show the FAB during mock tests
appJs = replaceAll(appJs,
  `const launcher = document.getElementById("chatbot-launcher");\r\n\r\n  if (launcher) launcher.style.display = "none";\r\n\r\n  const drawer = document.getElementById("chatbot-drawer");\r\n\r\n  if (drawer) drawer.style.display = "none";`,
  `const launcher = document.getElementById("dronacharya-fab");\r\n\r\n  if (launcher) launcher.style.display = "none";\r\n\r\n  const panel = document.getElementById("dronacharya-panel");\r\n\r\n  if (panel) panel.classList.remove("active");`
);

appJs = appJs.replace(/const launcher = document\.getElementById\("chatbot-launcher"\);\r?\n\r?\n\s*if \(launcher\) launcher\.style\.display = "flex";/g, (match) => {
  return `const launcher = document.getElementById("dronacharya-fab");\r\n\r\n      if (launcher) launcher.style.display = "flex";`;
});

// toggleChatbot function
appJs = replaceAll(appJs,
  `function toggleChatbot() {\r\n\r\n  const drawer = document.getElementById("chatbot-drawer");\r\n\r\n  if (drawer) {\r\n\r\n    drawer.classList.toggle("open");\r\n\r\n  }\r\n\r\n}`,
  `function toggleDronaPanel() {\r\n\r\n  const panel = document.getElementById("dronacharya-panel");\r\n\r\n  if (panel) {\r\n\r\n    panel.classList.toggle("active");\r\n\r\n  }\r\n\r\n}\r\n\r\n// Alias for backward compatibility\r\nwindow.toggleChatbot = toggleDronaPanel;`
);

// sendChatbotMessage function: update IDs inside it
appJs = replaceAll(appJs,
  `const inputEl = document.getElementById("chatbot-user-input");`,
  `const inputEl = document.getElementById("drona-input");`
);

appJs = replaceAll(appJs,
  `const container = document.getElementById("chatbot-messages-container");`,
  `const container = document.getElementById("drona-chat-area");`
);

appJs = appJs.replace(/replyEl\.className = "chat-message system";/g, `replyEl.className = "drona-message ai";`);
appJs = appJs.replace(/userMsgEl\.className = "chat-message user";/g, `userMsgEl.className = "drona-message user";`);
appJs = appJs.replace(/loadingEl\.className = "chat-message system";/g, `loadingEl.className = "drona-message ai";`);

// Rename function
appJs = replaceAll(appJs,
  `async function sendChatbotMessage()`,
  `async function sendDronaQuery()`
);

// Add window aliases
appJs = appJs.replace(
  /window\.toggleChatbot = toggleDronaPanel;/,
  `window.toggleChatbot = toggleDronaPanel;\r\nwindow.sendChatbotMessage = sendDronaQuery;`
);

// "Explain this" quick-open
appJs = replaceAll(appJs,
  `const drawer = document.getElementById("chatbot-drawer");\r\n\r\n      if (drawer && !drawer.classList.contains("open")) {\r\n\r\n        drawer.classList.add("open");\r\n\r\n      }`,
  `const panel = document.getElementById("dronacharya-panel");\r\n\r\n      if (panel && !panel.classList.contains("active")) {\r\n\r\n        panel.classList.add("active");\r\n\r\n      }`
);
appJs = replaceAll(appJs,
  `const chatbotInput = document.getElementById("chatbot-user-input");\r\n\r\n      if (chatbotInput) {\r\n\r\n        chatbotInput.value = \`Can you explain: \${inputVal}\`;\r\n\r\n        sendChatbotMessage();`,
  `const chatbotInput = document.getElementById("drona-input");\r\n\r\n      if (chatbotInput) {\r\n\r\n        chatbotInput.value = \`Can you explain: \${inputVal}\`;\r\n\r\n        sendDronaQuery();`
);

// Text-selection tooltip handler
appJs = replaceAll(appJs,
  `const drawer = document.getElementById("chatbot-drawer");\r\n\r\n      if (drawer && !drawer.classList.contains("open") && typeof window.toggleChatbot === 'function') {\r\n\r\n        window.toggleChatbot();\r\n\r\n      }`,
  `const panel = document.getElementById("dronacharya-panel");\r\n\r\n      if (panel && !panel.classList.contains("active") && typeof window.toggleDronaPanel === 'function') {\r\n\r\n        window.toggleDronaPanel();\r\n\r\n      }`
);
appJs = replaceAll(appJs,
  `const chatbotInput = document.getElementById('chatbot-user-input');\r\n\r\n      if (chatbotInput) {\r\n\r\n        chatbotInput.value = \`Can you explain: \${selectedText}\`;\r\n\r\n        if (typeof window.sendChatbotMessage === 'function') {\r\n\r\n          window.sendChatbotMessage();`,
  `const chatbotInput = document.getElementById('drona-input');\r\n\r\n      if (chatbotInput) {\r\n\r\n        chatbotInput.value = \`Can you explain: \${selectedText}\`;\r\n\r\n        if (typeof window.sendDronaQuery === 'function') {\r\n\r\n          window.sendDronaQuery();`
);

fs.writeFileSync('app.js', appJs, 'utf8');

// ─── 2. UPDATE mock_tests.js ─────────────────────────────────────────────────
let mockJs = fs.readFileSync('js/mock_tests.js', 'utf8');

mockJs = mockJs.replace(
  /const launcher = document\.getElementById\("chatbot-launcher"\);\s*\r?\n\s*if \(launcher\) launcher\.style\.display = "none";\s*\r?\n\s*const drawer = document\.getElementById\("chatbot-drawer"\);\s*\r?\n\s*if \(drawer\) drawer\.style\.display = "none";/,
  `const launcher = document.getElementById("dronacharya-fab");\n  if (launcher) launcher.style.display = "none";\n  const panel = document.getElementById("dronacharya-panel");\n  if (panel) panel.classList.remove("active");`
);

mockJs = mockJs.replace(
  /const launcher = document\.getElementById\("chatbot-launcher"\);\s*\r?\n\s*if \(launcher\) launcher\.style\.display = ['"](flex|block)['"];/g,
  `const launcher = document.getElementById("dronacharya-fab");\n      if (launcher) launcher.style.display = "flex";`
);

fs.writeFileSync('js/mock_tests.js', mockJs, 'utf8');

// ─── 3. UPDATE index.html ─────────────────────────────────────────────────────
let html = fs.readFileSync('index.html', 'utf8');

const launcherStart = html.indexOf('  <!-- AI DRONACHARYA CHATBOT DRAWER -->');
const drawerEnd = html.indexOf('</div>', html.indexOf('</div>', html.indexOf('chatbot-input-area'))) + 6;

if (launcherStart !== -1 && drawerEnd !== -1) {
  let searchFrom = html.indexOf('id="chatbot-drawer"');
  let depth = 0;
  let i = html.indexOf('>', searchFrom) + 1;
  while (i < html.length) {
    if (html[i] === '<') {
      if (html.substring(i, i+2) === '</') {
        if (depth === 0) {
          const closeEnd = html.indexOf('>', i) + 1;
          const removalBlock = html.substring(launcherStart, closeEnd);
          html = html.replace(removalBlock, '  <!-- Ask Dronacharya is now the FAB panel below -->');
          break;
        }
        depth--;
      } else if (html[i+1] !== '/') {
        const tagEnd = html.indexOf('>', i);
        if (!html.substring(i, tagEnd+1).endsWith('/>')) {
          depth++;
        }
      }
    }
    i++;
  }
}

html = html.replace(
  `<div id="dronacharya-fab" onclick="toggleDronaPanel()" title="Ask Dronacharya (AI Tutor)">
    <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.76.46 3.4 1.25 4.84L2 22l5.16-1.25C8.6 21.54 10.24 22 12 22c5.52 22 10-4.48 10-10S17.52 2 12 2zm0 18c-1.46 0-2.84-.34-4.08-.94l-.29-.14-3.03.73.74-2.96-.15-.3A7.95 7.95 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm3-9h-2V7h2v4zm-4 0H9V7h2v4zm4 4h-6v-2h6v2z"/></svg>
  </div>`,
  `<div id="dronacharya-fab" onclick="toggleDronaPanel()" title="Ask Dronacharya (AI Tutor)">
    🏹
  </div>`
);

html = html.replace(
  `<div class="drona-message system">Welcome, Cadet. I am Dronacharya. I can read the specific chapter you are currently studying. What do you need help with?</div>`,
  `<div class="drona-message ai">🏹 Welcome, Cadet! I am <strong>Dronacharya</strong>, your context-aware AI Tutor. I can see the chapter you are currently studying. Ask me any doubt — conceptual, mathematical, or exam-oriented — and I will solve it exhaustively!</div>`
);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Update Complete.');
