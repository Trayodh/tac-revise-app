// 12. AI TACTICAL STRATEGY BUILDER
// ==========================================
async function generateAiStrategy() {
  const container = document.getElementById("strategy-report-container");
  container.style.display = "block";
  container.className = "ai-response-area loading";
  container.innerHTML = `
    <div style="text-align: center; margin-top: 20px;">
      <div class="cbt-spinner" style="border-color: var(--info); border-top-color: transparent; width: 40px; height: 40px; border-width: 4px; margin: 0 auto 16px;"></div>
      <p style="color: var(--info); font-family: var(--font-logo); letter-spacing: 1px; font-weight: 600;">ANALYZING CADET PROGRESS...</p>
      <p style="color: var(--text-muted); font-size: 0.85rem;">Gemini AI is reviewing your syllabus mastery and CBT scores...</p>
    </div>
  `;

  // Calculate Progress Metrics
  let totalTopics = 0;
  let completedTopics = 0;
  for (const subjectId in NOTES_DATABASE) {
    NOTES_DATABASE[subjectId].chapters.forEach(c => {
      c.topics.forEach(t => {
        totalTopics++;
        if (STATE.syllabusProgress[t.id] === 'completed') completedTopics++;
      });
    });
  }
  const syllabusPct = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
  const formulasRead = STATE.readFormulasCount || 0;
  
  let cbtAvg = 0;
  if (STATE.cbtScores && STATE.cbtScores.length > 0) {
    const sum = STATE.cbtScores.reduce((acc, val) => acc + val, 0);
    cbtAvg = Math.round(sum / STATE.cbtScores.length);
  }

  const promptText = `You are an expert, strict, and motivating military exam strategist for the NDA, CDS, and AFCAT exams.
The user is a cadet preparing for these exams.
Here is their current operational progress:
- Syllabus Mastery: ${completedTopics} out of ${totalTopics} topics completed (${syllabusPct}%).
- High-Yield Formulas Memorized: ${formulasRead}.
- Average CBT Mock Test Score: ${cbtAvg}%.

Provide a harsh but highly effective tactical action plan for the next 7 days. 
Tell them exactly what they are failing at based on these numbers, what subjects they need to hammer hard, and how to improve.
Format the response cleanly with markdown headings, bullet points, and strong military phrasing. Keep it concise (under 250 words). Do NOT use any emojis in the response.`;

  try {
    const response = await fetch('/api/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: promptText, model: 'gemini-2.5-flash', contents: [{ parts: [{ text: promptText }] }] })
    });

    if (!response.ok) throw new Error("Proxy error");

    const data = await response.json();
    let replyText = data.text || "No response received.";
    
    // Format Markdown
    let formattedText = replyText
      .replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--info);">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/^#{1,3} (.+)$/gm, '<h4 style="color:var(--accent); margin:16px 0 8px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:4px;">$1</h4>')
      .replace(/\n/g, '<br/>');

    container.className = "ai-response-area fade-in";
    container.innerHTML = `
      <div style="padding: 16px;">
        <h3 style="color: var(--info); font-family: var(--font-logo); margin-bottom: 16px; letter-spacing: 1px;">[ STRATEGY UPLINK SECURED ]</h3>
        <div style="line-height: 1.8;">${formattedText}</div>
      </div>
    `;
  } catch (error) {
    console.error("Strategy AI Error:", error);
    container.className = "ai-response-area";
    container.innerHTML = `<p style="color: var(--danger);">Failed to connect to Strategy AI. Ensure your Node.js proxy server is running on port 4000.</p>`;
  }
}

// ==========================================