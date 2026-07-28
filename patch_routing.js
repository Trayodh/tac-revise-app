const fs = require('fs');

let appJs = fs.readFileSync('app.js', 'utf8').replace(/\r\n/g, '\n');

// 1. switchScreen function signature and pushState
const switchScreenOriginal = `function switchScreen(screenId) {
  // --- ROUTE MIDDLEWARE GUARD ---`;
const switchScreenReplacement = `function switchScreen(screenId, pushState = true) {
  if (pushState) {
    history.pushState(null, null, '#' + screenId);
  }
  // --- ROUTE MIDDLEWARE GUARD ---`;

if (appJs.includes(switchScreenOriginal)) {
    appJs = appJs.replace(switchScreenOriginal, switchScreenReplacement);
    console.log("Found switchScreen");
} else {
    console.error('Could not find switchScreen original');
}

// 2. DOMContentLoaded switchScreen("dashboard");
const initOriginal = `switchScreen("dashboard");`;
const initReplacement = `window.handleRoute();`;

// Only replace the first occurrence which is in the DOMContentLoaded block
appJs = appJs.replace(initOriginal, initReplacement);

// 3. handleRoute implementation and hashchange listener
const routerCode = `
// ==========================================
// HASH ROUTING LOGIC
// ==========================================
window.handleRoute = function() {
    let hash = window.location.hash.replace('#', '');
    if (!hash) hash = 'dashboard';
    
    const parts = hash.split('/');
    const screenId = parts[0];
    
    // Call switchScreen without pushing state
    switchScreen(screenId, false);
    
    if (screenId === 'notes') {
        if (parts.length === 4) {
            // #notes/subjectId/chapterId/topicId
            const subjectId = parts[1];
            const chapterId = parts[2];
            const topicId = parts[3];
            
            selectedSubjectId = subjectId;
            selectedChapterId = chapterId;
            selectedTopicId = topicId;
            
            const chaptersView = document.getElementById('notes-view-chapters');
            const contentView = document.getElementById('notes-view-content');
            if (chaptersView) chaptersView.style.display = 'none';
            if (contentView) contentView.style.display = 'block';
            
            renderTopicView(subjectId, chapterId, topicId);
            renderNotesBrowser();
            if (typeof updateBreadcrumbs === 'function') updateBreadcrumbs();
        } else {
            // #notes
            window.backToNotesSubjects(false);
        }
    }
};

window.addEventListener('hashchange', window.handleRoute);

// ==========================================
// 13. APP RUN SUITE - INITIALIZATION
// ==========================================
`;

const initSectionOriginal = `// ==========================================
// 13. APP RUN SUITE - INITIALIZATION
// ==========================================`;

if (appJs.includes(initSectionOriginal) && !appJs.includes('window.handleRoute = function')) {
    appJs = appJs.replace(initSectionOriginal, routerCode);
    console.log("Found init section");
} else {
    console.error('Could not find init section');
}

// 4. Nav item click listener
const navItemOriginal = `// Bind Navigation Click Handlers
document.querySelectorAll(".nav-item").forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const screenId = item.getAttribute("data-screen");
    switchScreen(screenId);
  });
});`;

const navItemReplacement = `// Bind Navigation Click Handlers
document.querySelectorAll(".nav-item").forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const screenId = item.getAttribute("data-screen");
    window.location.hash = screenId;
  });
});`;

if (appJs.includes(navItemOriginal)) {
    appJs = appJs.replace(navItemOriginal, navItemReplacement);
    console.log("Found nav item");
} else {
    console.error('Could not find nav item listener');
}

// 5. Topic link click
const topicLinkOriginal = `          topicLink.addEventListener("click", () => {
            selectedSubjectId = subjectId;
            selectedChapterId = chapter.id;
            selectedTopicId = topic.id;
            document.querySelectorAll(".topic-link").forEach(l => l.classList.remove("active"));
            topicLink.classList.add("active");
            
            document.getElementById('notes-view-chapters').style.display = 'none';
            document.getElementById('notes-view-content').style.display = 'block';
            
            renderTopicView(subjectId, chapter.id, topic.id);
            renderNotesBrowser();
            if (typeof updateBreadcrumbs === 'function') updateBreadcrumbs();
          });`;

const topicLinkReplacement = `          topicLink.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.hash = \`notes/\${subjectId}/\${chapter.id}/\${topic.id}\`;
          });`;

if (appJs.includes(topicLinkOriginal)) {
    appJs = appJs.replace(topicLinkOriginal, topicLinkReplacement);
    console.log("Found topic link");
} else {
    console.error('Could not find topic link listener');
}

// 6. backToNotesSubjects and Chapters
const backToSubjectsOriginal = `window.backToNotesSubjects = function() {
  currentSubjectFilter = 'all';`;

const backToSubjectsReplacement = `window.backToNotesSubjects = function(pushState = true) {
  if (pushState) window.location.hash = 'notes';
  currentSubjectFilter = 'all';`;

if (appJs.includes(backToSubjectsOriginal)) {
    appJs = appJs.replace(backToSubjectsOriginal, backToSubjectsReplacement);
    console.log("Found backtoSubjects");
} else {
    console.error('Could not find backToNotesSubjects');
}

// Also wait, updateBreadcrumbs uses switchScreen. Let's fix updateBreadcrumbs.
const breadcrumbHomeOriginal = `breadcrumbs.push({ label: 'Home', action: () => switchScreen('dashboard') });`;
const breadcrumbHomeReplacement = `breadcrumbs.push({ label: 'Home', action: () => { window.location.hash = 'dashboard'; } });`;
appJs = appJs.replace(breadcrumbHomeOriginal, breadcrumbHomeReplacement);

const breadcrumbsBlockOriginal = `breadcrumbs.push({ label: screenNames[screenId], action: () => {
      if (screenId === 'notes') {
        window.backToNotesSubjects();
      } else {
        switchScreen(screenId);
      }
    }});`;
const breadcrumbsBlockReplacement = `breadcrumbs.push({ label: screenNames[screenId], action: () => {
      if (screenId === 'notes') {
        window.location.hash = 'notes';
      } else {
        window.location.hash = screenId;
      }
    }});`;
if (appJs.includes(breadcrumbsBlockOriginal)) {
    appJs = appJs.replace(breadcrumbsBlockOriginal, breadcrumbsBlockReplacement);
}

fs.writeFileSync('app.js', appJs);
console.log('Patched app.js successfully');
