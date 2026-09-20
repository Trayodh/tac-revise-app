const fs = require('fs');

const content = `
async function generateDetailedNotesOnDemand(subjectId, chapterId, topicId) {
  const subject = NOTES_DATABASE[subjectId];
  const chapter = subject.chapters.find(c => c.id === chapterId);
  const topic = chapter.topics.find(t => t.id === topicId);
  if (!topic) return;

  let modal = document.getElementById('ai-detailed-notes-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'ai-detailed-notes-modal';
    modal.className = 'cbt-overlay';
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.zIndex = '1000';
    modal.style.backgroundColor = 'var(--bg-primary)';
    document.body.appendChild(modal);
  } else {
    modal.style.display = 'flex';
  }

  modal.innerHTML = \\\`
    <div class="cbt-header">
      <div class="cbt-exam-title"> AI Detailed Notes: \\\${topic.title}</div>
      <button class="btn-secondary" onclick="document.getElementById('ai-detailed-notes-modal').style.display='none'">Close</button>
    </div>
    <div style="padding: 32px; max-width: 900px; margin: 0 auto; width: 100%; overflow-y: auto; height: 100%;">
      <div class="panel" style="margin-bottom: 50px;">
        <h3 style="color: var(--accent); margin-bottom: 16px;">Generating comprehensive explanation...</h3>
        <p style="color: var(--text-secondary);">Please wait while AI constructs the detailed notes from start to end.</p>
        <div style="margin-top:20px; font-size:2rem;"></div>
      </div>
    </div>
  \\\`;

  const prompt = \\\`You are an expert tutor for Indian Defence Examinations. Provide a highly detailed, comprehensive explanation of the topic "\\\${topic.title}" from the chapter "\\\${chapter.title}" in \\\${subject.title}. Explain the entire topic from start to end. Make it easy to read with headings, bullet points, and clear examples.\\\`;

  const modelsToTry = ['gemini-2.5-flash', 'gemini-3.1-flash-lite', 'gemini-2.0-flash', 'gemini-1.5-flash', 'gemini-1.5-pro'];
  let replyText = '';
  let success = false;

  for (const model of modelsToTry) {
    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: model,
          contents: [{ parts: [{ text: prompt }] }]
        })
      });
      if (response.ok) {
        const resData = await response.json();
        if (resData.candidates && resData.candidates[0] && resData.candidates[0].content && resData.candidates[0].content.parts[0]) {
          replyText = resData.candidates[0].content.parts[0].text;
          success = true;
          break;
        }
      }
    } catch (err) {
      console.error('Gemini API error:', err);
    }
  }

  const contentArea = modal.querySelector('.panel');
  if (success) {
    let formattedText = replyText
      .replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>')
      .replace(/\\*(.*?)\\*/g, '<em>$1</em>')
      .replace(/\\\`([^\\\`]+)\\\`/g, '<code style="background-color:rgba(255,255,255,0.05); padding:2px 4px; border-radius:4px;">$1</code>')
      .replace(/^#{1,3} (.+)$/gm, '<h4 style="color: var(--accent); margin:16px 0 8px;">$1</h4>')
      .replace(/\\n/g, '<br/>');

    contentArea.innerHTML = \\\`
      <h3 style="color: var(--accent); margin-bottom: 20px;">Detailed AI Explanation</h3>
      <div style="line-height: 1.8; color: var(--text-primary); font-size: 0.95rem;">
        \\\${formattedText}
      </div>
    \\\`;
    if (window.MathJax && typeof window.MathJax.typeset === 'function') {
      window.MathJax.typeset();
    }
  } else {
    contentArea.innerHTML = \\\`
      <h3 style="color: var(--danger);">Failed to generate notes</h3>
      <p style="color: var(--text-secondary);">Could not reach the AI service. Please ensure the local server proxy is running.</p>
    \\\`;
  }
}
`;
fs.appendFileSync('app.js', '\\n' + content);
