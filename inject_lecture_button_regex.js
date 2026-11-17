const fs = require('fs');

let appjs = fs.readFileSync('app.js', 'utf8');

const buttonHtml = `  // Lecture Mode button
  const lectureModeBtn = \`
    <button class="lecture-mode-btn" onclick="launchLectureMode('\${subjectId}', '\${chapterId}', '\${topicId}')" style="background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.3); color: #4ade80; padding: 6px 12px; border-radius: 6px; font-weight: 500; cursor: pointer; display: flex; align-items: center; gap: 6px;" title="Watch this topic as an animated lecture with narration">
       Lecture
    </button>
  \`;

  // Focus Mode toggle button`;

appjs = appjs.replace("  // Focus Mode toggle button", buttonHtml);

appjs = appjs.replace(/\$\{focusModeBtn\}\s*\$\{completeToggleBtn\}/g, "${lectureModeBtn}\n          ${focusModeBtn}\n          ${completeToggleBtn}");

fs.writeFileSync('app.js', appjs, 'utf8');
console.log("Regex injected!");
