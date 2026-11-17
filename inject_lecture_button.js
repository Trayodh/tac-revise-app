const fs = require('fs');

let appjs = fs.readFileSync('app.js', 'utf8');

const target1 = `  // Focus Mode toggle button
  const focusModeBtn = \`
    <button class="tactical-action-btn \${distractionFreeMode ? 'active' : ''}" onclick="toggleFocusReadingMode()">
      <span>\${distractionFreeMode ? '️ Standard View' : ' Focus Mode'}</span>
    </button>
  \`;`;

const repl1 = `  // Focus Mode toggle button
  const focusModeBtn = \`
    <button class="tactical-action-btn \${distractionFreeMode ? 'active' : ''}" onclick="toggleFocusReadingMode()">
      <span>\${distractionFreeMode ? '️ Standard View' : ' Focus Mode'}</span>
    </button>
  \`;

  // Lecture Mode button
  const lectureModeBtn = \`
    <button class="lecture-mode-btn" onclick="launchLectureMode('\${subjectId}', '\${chapterId}', '\${topicId}')" title="Watch this topic as an animated lecture with narration">
       Lecture
    </button>
  \`;`;

const target2 = `        <div style="display:flex; align-items:center; gap:12px;">
          \${focusModeBtn}
          \${completeToggleBtn}
        </div>`;

const repl2 = `        <div style="display:flex; align-items:center; gap:12px;">
          \${lectureModeBtn}
          \${focusModeBtn}
          \${completeToggleBtn}
        </div>`;

if(appjs.includes(target1) && appjs.includes(target2)) {
    appjs = appjs.replace(target1, repl1);
    appjs = appjs.replace(target2, repl2);
    fs.writeFileSync('app.js', appjs, 'utf8');
    console.log("Successfully added Lecture Mode button back to app.js");
} else {
    console.log("Could not find targets in app.js");
    console.log("Target 1 found:", appjs.includes(target1));
    console.log("Target 2 found:", appjs.includes(target2));
}
