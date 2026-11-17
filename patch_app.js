const fs = require('fs');

let appCode = fs.readFileSync('app.js', 'utf8');

const regex = /async function generateDetailedNotesOnDemand\(subjectId, chapterId, topicId\) \{[\s\S]*?\n\}/;

const replacement = `async function generateDetailedNotesOnDemand(subjectId, chapterId, topicId) {
  const subject = NOTES_DATABASE[subjectId];
  const chapter = subject.chapters.find(c => c.id === chapterId);
  const topic = chapter.topics.find(t => t.id === topicId);
  if (!topic) return;

  const cacheKey = \`tac_ai_notes_\${topicId}\`;
  
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

  modal.innerHTML = \`
    <div class="cbt-header">
      <div class="cbt-exam-title"> AI Detailed Notes: \${topic.title}</div>
      <div style="display: flex; gap: 8px;">
        <button id="btn-copy-notes" class="btn-primary" style="padding: 4px 12px; background: rgba(59, 130, 246, 0.2); color: #60a5fa; border: 1px solid #3b82f6; display: none;"> Copy</button>
        <button id="btn-download-notes" class="btn-primary" style="padding: 4px 12px; background: rgba(16, 185, 129, 0.2); color: #34d399; border: 1px solid #10b981; display: none;">Save PDF</button>
        <button class="btn-secondary" onclick="document.getElementById('ai-detailed-notes-modal').style.display='none'">Close</button>
      </div>
    </div>
    <div style="padding: 32px; max-width: 900px; margin: 0 auto; width: 100%; overflow-y: auto; height: 100%;">
      <div class="panel" id="ai-notes-content-panel" style="margin-bottom: 50px;">
        <h3 style="color: var(--accent); margin-bottom: 16px;">Generating comprehensive explanation...</h3>
        <p style="color: var(--text-secondary);">Please wait while AI constructs the detailed notes from start to end.</p>
        <div style="margin-top:20px; font-size:2rem;"></div>
      </div>
    </div>
  \`;

  const contentArea = modal.querySelector('#ai-notes-content-panel');
  const btnCopy = modal.querySelector('#btn-copy-notes');
  const btnDownload = modal.querySelector('#btn-download-notes');

  // Check cache first
  const cachedData = localStorage.getItem(cacheKey);
  if (cachedData) {
    console.log("Loading AI notes from cache for", topicId);
    renderAiNotes(cachedData, contentArea, btnCopy, btnDownload, topic.title);
    return;
  }

  const prompt = \`You are an expert tutor for Indian Defence Examinations. Provide a highly detailed, comprehensive explanation of the topic "\${topic.title}" from the chapter "\${chapter.title}" in \${subject.title}. Explain the entire topic from start to end. Make it easy to read with headings, bullet points, and clear examples.\`;
  const model = 'gemini-3.1-flash-lite';
  
  try {
    const response = await fetch('/api/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: model,
        stream: true,
        contents: [{ parts: [{ text: prompt }] }]
      })
    });
    
    if (!response.ok || !response.body) {
      throw new Error("Failed to fetch stream");
    }

    contentArea.innerHTML = \`
      <h3 style="color: var(--accent); margin-bottom: 20px;">Detailed AI Explanation</h3>
      <div id="ai-stream-text" style="line-height: 1.8; color: var(--text-primary); font-size: 0.95rem;"></div>
    \`;
    const streamContainer = document.getElementById('ai-stream-text');
    
    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let fullText = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      
      const chunk = decoder.decode(value, { stream: true });
      fullText += chunk;
      
      // Attempt rudimentary parsing of JSON stream chunks if it's SSE, but we can also just append if it's plain text.
      // If the proxy sends direct TextEventStream or JSON chunks, we must parse. 
      // Assuming proxy is sending standard Gemini SSE (data: {...})
      const lines = chunk.split('\\n');
      for (const line of lines) {
        if (line.startsWith('data: ')) {
          try {
            const dataStr = line.replace('data: ', '').trim();
            if (dataStr && dataStr !== '[DONE]') {
              const parsed = JSON.parse(dataStr);
              if (parsed.candidates && parsed.candidates[0].content && parsed.candidates[0].content.parts[0]) {
                const textChunk = parsed.candidates[0].content.parts[0].text;
                streamContainer.innerHTML += formatTextChunk(textChunk);
              }
            }
          } catch(e) {}
        }
      }
    }
    
    // Once complete, format it properly, cache, and show buttons
    // However, since parsing SSE chunk by chunk into markdown is tricky, we re-render the final compiled text.
    // We will extract all text from the full string if we stored it
    let finalText = "";
    const allLines = fullText.split('\\n');
    for (const line of allLines) {
      if (line.startsWith('data: ')) {
        try {
          const dataStr = line.replace('data: ', '').trim();
          if (dataStr && dataStr !== '[DONE]') {
            const parsed = JSON.parse(dataStr);
            if (parsed.candidates && parsed.candidates[0].content && parsed.candidates[0].content.parts[0]) {
              finalText += parsed.candidates[0].content.parts[0].text;
            }
          }
        } catch(e) {}
      }
    }
    
    // Fallback if it wasn't SSE format
    if (!finalText) {
      try {
        const parsed = JSON.parse(fullText);
        if (parsed.candidates) finalText = parsed.candidates[0].content.parts[0].text;
      } catch(e) {}
    }
    
    localStorage.setItem(cacheKey, finalText);
    renderAiNotes(finalText, contentArea, btnCopy, btnDownload, topic.title);

  } catch (err) {
    console.error('Gemini API error:', err);
    contentArea.innerHTML = \`
      <h3 style="color: var(--danger);">Failed to generate notes</h3>
      <p style="color: var(--text-secondary);">Could not reach the AI service or stream was interrupted. \${err.message}</p>
    \`;
  }
}

function formatTextChunk(text) {
  return text
    .replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>')
    .replace(/\\*(.*?)\\*/g, '<em>$1</em>')
    .replace(/\`/g, '')
    .replace(/\\n/g, '<br/>');
}

function renderAiNotes(text, contentArea, btnCopy, btnDownload, title) {
  let formattedText = text
    .replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>')
    .replace(/\\*(.*?)\\*/g, '<em>$1</em>')
    .replace(/\`([^\`]+)\`/g, '<code style="background-color:rgba(255,255,255,0.05); padding:2px 4px; border-radius:4px;">$1</code>')
    .replace(/^#{1,3} (.+)$/gm, '<h4 style="color: var(--accent); margin:16px 0 8px;">$1</h4>')
    .replace(/\\n/g, '<br/>');

  contentArea.innerHTML = \`
    <h3 style="color: var(--accent); margin-bottom: 20px;">Detailed AI Explanation</h3>
    <div id="ai-final-notes" style="line-height: 1.8; color: var(--text-primary); font-size: 0.95rem;">
      \${formattedText}
    </div>
  \`;
  
  if (window.MathJax && typeof window.MathJax.typeset === 'function') {
    window.MathJax.typeset();
  }
  
  // Show Action Buttons
  btnCopy.style.display = 'block';
  btnCopy.onclick = () => {
    navigator.clipboard.writeText(text);
    btnCopy.innerText = "• Copied";
    setTimeout(() => btnCopy.innerText = " Copy", 2000);
  };
  
  // Basic mock for PDF download (In real app, would use html2pdf.js)
  btnDownload.style.display = 'block';
  btnDownload.onclick = () => {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = \`\${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_notes.txt\`;
    a.click();
  };
}`;

if (!regex.test(appCode)) {
  console.log("Could not find generateDetailedNotesOnDemand function in app.js");
} else {
  appCode = appCode.replace(regex, replacement);
  fs.writeFileSync('app.js', appCode);
  console.log("Successfully patched app.js with streaming and caching logic.");
}
