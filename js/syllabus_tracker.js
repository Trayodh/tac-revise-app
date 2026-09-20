// 12. SYLLABUS TRACKER SCREEN MODULE
// ==========================================
function renderSyllabusTracker() {
  const list = document.getElementById("syllabus-tracker-list");
  list.innerHTML = "";
  
  SYLLABUS_DATABASE.forEach(group => {
    const groupDiv = document.createElement("div");
    groupDiv.className = "syllabus-group";
    
    const total = group.topics.length;
    let completed = 0;
    group.topics.forEach(t => {
      if (STATE.syllabusProgress[t.id] === 'completed') {
        completed++;
      }
    });
    
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    groupDiv.innerHTML = `
      <div class="syllabus-group-header">
        <div>
          <span class="syllabus-group-title">${group.exam} - ${group.subject}</span>
          <div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">Tracked Core Topics</div>
        </div>
        <div style="text-align:right;">
          <span style="font-family:var(--font-mono); font-weight:bold; font-size:0.9rem;">${pct}% Complete</span>
          <div style="width: 120px;" class="progress-bar-container">
            <div class="progress-bar-fill" style="width: ${pct}%;"></div>
          </div>
        </div>
      </div>
      <div id="syllabus-topics-${group.exam}-${group.subject}"></div>
    `;
    
    list.appendChild(groupDiv);
    
    const topicsContainer = document.getElementById(`syllabus-topics-${group.exam}-${group.subject}`);
    
    group.topics.forEach(topic => {
      const row = document.createElement("div");
      row.className = "syllabus-row";
      
      const status = STATE.syllabusProgress[topic.id] || "not-started";
      let badgeClass = "not-started";
      let badgeText = "Not Started";
      
      if (status === "completed") {
        badgeClass = "completed";
        badgeText = "Revision Complete";
      } else if (status === "in-progress") {
        badgeClass = "in-progress";
        badgeText = "In Progress";
      }
      
      row.innerHTML = `
        <div class="syllabus-topic-name">${topic.name}</div>
        <div>
          <span class="status-badge ${badgeClass}">${badgeText}</span>
        </div>
        <div>
          <select class="status-selector" onchange="updateSyllabusTopicStatus('${topic.id}', this.value)">
            <option value="not-started" ${status === 'not-started' ? 'selected' : ''}>Not Started</option>
            <option value="in-progress" ${status === 'in-progress' ? 'selected' : ''}>In Progress</option>
            <option value="completed" ${status === 'completed' ? 'selected' : ''}>Completed</option>
          </select>
        </div>
      `;
      topicsContainer.appendChild(row);
    });
  });
}

function updateSyllabusTopicStatus(topicId, newStatus) {
  STATE.syllabusProgress[topicId] = newStatus;
  saveState();
  renderSyllabusTracker(); 
}

// ==========================================
// 12.5. AI PAPER SOLVER & CHATBOT MODULES
// ==========================================
// API calls are handled securely via the /api/gemini server proxy

function toggleChatbot() {
  const drawer = document.getElementById("chatbot-drawer");
  if (drawer) {
    drawer.classList.toggle("open");
  }
}

async function sendChatbotMessage() {
  const inputEl = document.getElementById("chatbot-user-input");
  const container = document.getElementById("chatbot-messages-container");
  if (!inputEl || !container) return;
  
  const text = inputEl.value.trim();
  if (!text) return;
  if (typeof deductTokens === 'function') {
    if (!deductTokens(500)) return;
  }
  
  inputEl.value = "";
  
  const userMsgEl = document.createElement("div");
  userMsgEl.className = "chat-message user";
  userMsgEl.textContent = text;
  container.appendChild(userMsgEl);
  container.scrollTop = container.scrollHeight;
  
  const loadingEl = document.createElement("div");
  loadingEl.className = "chat-message system";
  loadingEl.style.opacity = "0.7";
  loadingEl.textContent = "AI is thinking...";
  container.appendChild(loadingEl);
  container.scrollTop = container.scrollHeight;
  
  let contextText = "";
  if (typeof selectedTopicId !== 'undefined' && selectedTopicId) {
    const notesScreen = document.getElementById("screen-notes");
    if (notesScreen && notesScreen.classList.contains("active")) {
      if (typeof EXPANDED_NOTES_DATA !== 'undefined' && EXPANDED_NOTES_DATA[selectedTopicId]) {
        contextText = EXPANDED_NOTES_DATA[selectedTopicId].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').substring(0, 3000);
      } else if (typeof NOTES_DATABASE !== 'undefined') {
        const subject = NOTES_DATABASE[selectedSubjectId];
        const chapter = subject?.chapters.find(c => c.id === selectedChapterId);
        const topic = chapter?.topics.find(t => t.id === selectedTopicId);
        if (topic && topic.notes) {
          contextText = topic.notes.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').substring(0, 3000);
        }
      }
    }
  }

  let promptText = `You are Dronacharya, the legendary ancient tutor and guide, acting as the AI tutor for cadets preparing for NDA, CDS, AFCAT, CAPF, SSC, and other competitive defence examinations. Speak with the authority, deep wisdom, and encouraging pedagogical guidance of Guru Dronacharya.

When explaining complex systems, military strategies, physics concepts, or geographical hierarchies, you MUST heavily integrate rich visual elements:
1. Use Mermaid.js diagrams to visually map out concepts. Write these diagrams inside standard \`\`\`mermaid code blocks.
2. Generate inline SVG graphs/charts (<svg> tags directly) for data representation.
3. Embed contextual placeholder images using: <img src="https://loremflickr.com/800/400/[keyword]" alt="[keyword]" style="width:100%; border-radius:8px; margin: 15px 0; box-shadow: 0 4px 12px rgba(0,0,0,0.3);" />
Solve the user's doubt directly. Adapt the length and depth of your response to exactly match what the user requested.
- If the user asks for a quick definition or a simple diagram, provide JUST that with minimal extra text to ensure lightning-fast response times.
- If the user explicitly asks for a detailed explanation, provide a comprehensive breakdown.
- Reference related concepts (e.g. [[Federalism]], [[Parliament]]) using Wikipedia double brackets when relevant.

- SOURCE INTEGRITY: Prioritize official, primary information (PIB, MoD, Supreme Court, Gazette of India, RBI, NITI Aayog, DRDO, ISRO, UN, etc.) over secondary coaching summaries.

Doubt to solve: ${text}`;
  if (contextText.length > 50) {
    promptText += `\n\nCONTEXT (The user is currently reading this material):\n${contextText}\n\nUse this context to inform your answer if relevant. Format math with $ or $$.`;
  }
  
  try {
    const modelsToTry = ["gemini-flash-latest", "gemini-2.5-flash", "gemini-2.0-flash", "gemini-1.5-flash"];
    let success = false;
    let replyText = "";
    let lastStatus = 0;
    
    for (const model of modelsToTry) {
      try {
        const response = await fetch('/api/gemini', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            model: model,
            contents: [{
              parts: [{
                text: promptText
              }]
            }]
          })
        });
        
        lastStatus = response.status;
        if (response.ok) {
          const resData = await response.json();
          if (resData.candidates && resData.candidates[0] && resData.candidates[0].content && resData.candidates[0].content.parts[0]) {
            replyText = resData.candidates[0].content.parts[0].text;
            success = true;
            break;
          }
        }
      } catch (err) {
        console.error(err);
      }
    }
    
    if (loadingEl.parentNode) container.removeChild(loadingEl);
    
    const replyEl = document.createElement("div");
    replyEl.className = "chat-message system";
    
    if (success) {
      replyEl.innerHTML = parseWikiLinks(replyText);
      
      if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise([replyEl]).catch(err => console.warn("MathJax error:", err));
      }
    } else {
      if (lastStatus === 429) {
        replyEl.innerHTML = "<span style='color:var(--warning);'> AI Quota Exhausted: The Gemini free-tier quota is temporarily fully utilized. Please try again in a few minutes or switch model settings.</span>";
      } else if (lastStatus === 403) {
        replyEl.innerHTML = "<span style='color:var(--danger);'> Forbidden: The server's API key is inactive or invalid. Please contact the administrator.</span>";
      } else if (lastStatus === 413) {
        replyEl.innerHTML = "<span style='color:var(--danger);'> Request Too Large: The request payload exceeds the allowed limits.</span>";
      } else {
        replyEl.textContent = "Sorry, I am unable to connect to the doubt-solving engine right now. Please check your internet connection or try again later.";
      }
    }
    
    container.appendChild(replyEl);
    container.scrollTop = container.scrollHeight;
    
    if (window.MathJax && typeof window.MathJax.typeset === 'function') {
      window.MathJax.typeset();
    }
  } catch (e) {
    console.error(e);
    if (loadingEl.parentNode) container.removeChild(loadingEl);
    const replyEl = document.createElement("div");
    replyEl.className = "chat-message system";
    replyEl.textContent = "An error occurred. Please try again.";
    container.appendChild(replyEl);
    container.scrollTop = container.scrollHeight;
  }
}

window.toggleChatbot = toggleChatbot;
window.sendChatbotMessage = sendChatbotMessage;

function toggleCustomPageInput() {
  const select = document.getElementById("ai-paper-page-preset");
  const container = document.getElementById("ai-paper-custom-range-container");
  if (select && container) {
    container.style.display = select.value === "custom" ? "flex" : "none";
  }
}
window.toggleCustomPageInput = toggleCustomPageInput;

function initAiPaperSolver() {
  const solvePaperBtn = document.getElementById("ai-solve-paper-btn");
  const paperUpload = document.getElementById("ai-paper-upload");
  const paperResultArea = document.getElementById("paper-solver-result-area");
  
  if (solvePaperBtn && paperUpload && paperResultArea) {
    solvePaperBtn.addEventListener("click", async () => {
      const file = paperUpload.files[0];
      if (!file) {
        alert("Please select a PDF file first.");
        return;
      }
      if (typeof deductTokens === 'function') {
        if (!deductTokens(5000)) return;
      }
      
      const preset = document.getElementById("ai-paper-page-preset") ? document.getElementById("ai-paper-page-preset").value : "1-5";
      let pageText = "";
      let statusLabel = "";
      if (preset === "all") {
        pageText = "Scan the entire document page-by-page and solve all questions sequentially.";
        statusLabel = "All Pages";
      } else if (preset === "custom") {
        const start = document.getElementById("ai-paper-start-page").value || 1;
        const end = document.getElementById("ai-paper-end-page").value || 5;
        pageText = `IMPORTANT: Only extract and solve the questions found on pages ${start} to ${end} of this PDF. Ignore other pages.`;
        statusLabel = `Pages ${start} to ${end}`;
      } else {
        const [start, end] = preset.split("-");
        pageText = `IMPORTANT: Only extract and solve the questions found on pages ${start} to ${end} of this PDF. Ignore other pages.`;
        statusLabel = `Pages ${start} to ${end}`;
      }
      
      paperResultArea.style.display = "block";
      paperResultArea.className = "ai-response-area loading";
      paperResultArea.innerHTML = `
        <div style="display:flex; justify-content:center; align-items:center; flex-direction:column; padding: 40px 0;">
          <div style="border: 4px solid rgba(255,255,255,0.1); border-top: 4px solid var(--accent); border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; margin-bottom: 16px;"></div>
          <p style="color:var(--text-secondary); font-size:0.95rem;">Reading and solving ${statusLabel} of the exam paper... This may take up to a minute.</p>
        </div>
      `;
      
      const fastAnswerKey = document.getElementById("ai-paper-no-explanation") ? document.getElementById("ai-paper-no-explanation").checked : true;
      let promptText = "";
      if (fastAnswerKey) {
        promptText = `You are given a multi-page PDF of a defence exam paper. ${pageText} For each question, extract the question number and the correct answer option (a, b, c, or d). You MUST output ONLY the question number and the correct option (e.g., 'Question 1: (c)', 'Question 2: (a)', etc.). Do NOT write any explanations, question text, options, or other text whatsoever. This is critical to fit all questions within the output limit. Format as a clean markdown list or table.`;
      } else {
        promptText = `You are given a multi-page PDF of a defence exam paper. ${pageText} For each question, provide the question text, options (a, b, c, d), the correct answer, and a brief one-sentence step-by-step mathematical explanation. Keep the explanations extremely brief so we can fit all questions in that range within the output limits. Format the response beautifully using Markdown with clear heading structures.`;
      }

      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const base64Data = reader.result.split(',')[1];
          const modelsToTry = ["gemini-3-flash-preview", "gemini-2.5-flash", "gemini-3.1-flash-lite", "gemini-2.0-flash", "gemini-1.5-flash", "gemini-1.5-pro"];
          let success = false;
          let resultText = "";
          let lastStatus = 0;
          
          for (const model of modelsToTry) {
            try {
              const response = await fetch('/api/gemini', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  model: model,
                  contents: [{
                    parts: [
                      {
                        inlineData: {
                          mimeType: "application/pdf",
                          data: base64Data
                        }
                      },
                      {
                        text: promptText
                      }
                    ]
                  }]
                })
              });
              
              lastStatus = response.status;
              if (response.ok) {
                const resData = await response.json();
                if (resData.candidates && resData.candidates[0] && resData.candidates[0].content && resData.candidates[0].content.parts[0]) {
                  resultText = resData.candidates[0].content.parts[0].text;
                  success = true;
                  break;
                }
              }
            } catch (e) {
              console.error(e);
            }
          }
          
          if (success) {
            paperResultArea.className = "ai-response-area";
            let html = resultText
              .replace(/^# (.*$)/gim, '<h1 style="color: var(--accent); font-family:var(--font-logo); margin-bottom:12px;">$1</h1>')
              .replace(/^## (.*$)/gim, '<h2 style="color:var(--accent); font-family:var(--font-logo); margin-top:20px; margin-bottom:8px;">$1</h2>')
              .replace(/^### (.*$)/gim, '<h3 style="color:var(--accent-dark); margin-top:16px; margin-bottom:6px;">$1</h3>')
              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              .replace(/\*(.*?)\*/g, '<em>$1</em>')
              .replace(/`([^`]+)`/g, '<code style="background-color:rgba(255,255,255,0.05); padding:2px 6px; border-radius:4px; font-family:var(--font-mono); font-size:0.9rem;">$1</code>')
              .replace(/^\s*-\s+(.*$)/gim, '<li style="margin-left:20px; color:var(--text-secondary); margin-bottom:6px;">$1</li>')
              .replace(/^\s*\d+\.\s+(.*$)/gim, '<li style="margin-left:20px; color:var(--text-secondary); margin-bottom:6px; list-style-type: decimal;">$1</li>')
              .replace(/\n/g, '<br/>');
              
            paperResultArea.innerHTML = `
              <div style="border-bottom:1px solid var(--border); padding-bottom:12px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
                <h3 style="font-family:var(--font-logo); color: var(--accent);">STEP-BY-STEP EXAM SOLUTIONS</h3>
                <span style="font-size:0.75rem; color:var(--text-muted); font-family:var(--font-mono)">Gemini AI Solver</span>
              </div>
              <div style="line-height:1.6; font-size:0.95rem; color:var(--text-primary);">
                ${html}
              </div>
            `;
            
            if (window.MathJax && typeof window.MathJax.typeset === 'function') {
              window.MathJax.typeset();
            }
          } else {
            let errorMsgDetail = "The request timed out or the API is busy.";
            let proTip = "If you are uploading a large scanned PDF (e.g. 10MB+ or 100+ questions), the process can exceed the network timeout limit. Try splitting the PDF into a smaller selection of pages (e.g., 5-10 pages) for extremely fast, reliable solving!";
            if (lastStatus === 429) {
              errorMsgDetail = "Gemini API quota exhausted. The daily limit has been exceeded. Please switch model/tier or try again later.";
            } else if (lastStatus === 403) {
              errorMsgDetail = "Access Forbidden: The backend API key is invalid or inactive. Please verify API key configuration.";
            } else if (lastStatus === 413) {
              errorMsgDetail = "Payload Too Large: The file upload size exceeds the 50MB limit allowed by the proxy server.";
              proTip = "Please reduce the file size or compile it with fewer pages before uploading.";
            }
            
            paperResultArea.className = "ai-response-area error";
            paperResultArea.innerHTML = `
              <div style="color:var(--danger); padding:20px; text-align:center;">
                <span style="font-size:2rem;"></span>
                <p style="margin-top:10px; font-weight:600;">Failed to solve paper with Gemini AI.</p>
                <p style="font-size:0.85rem; color:var(--text-secondary); margin-top:4px;">${errorMsgDetail}</p>
                <p style="font-size:0.8rem; color:var(--text-muted); margin-top:8px; background:rgba(255,255,255,0.03); padding:8px; border-radius:4px; display:inline-block; border:1px solid rgba(255,255,255,0.05);"><strong> Pro-Tip:</strong> ${proTip}</p>
              </div>
            `;
          }
        } catch (err) {
          console.error(err);
          paperResultArea.className = "ai-response-area error";
          paperResultArea.innerHTML = `<div style="color:var(--danger); padding:20px; text-align:center;">Error parsing file. Please check if the file is a valid PDF.</div>`;
        }
      };
      reader.readAsDataURL(file);
    });
  }
  
  const solveDoubtBtn = document.getElementById("ai-solve-btn");
  if (solveDoubtBtn) {
    solveDoubtBtn.addEventListener("click", () => {
      const inputVal = document.getElementById("ai-custom-topic-input").value.trim();
      if (!inputVal) {
        alert("Please enter a concept or doubt to solve.");
        return;
      }
      
      const drawer = document.getElementById("chatbot-drawer");
      if (drawer && !drawer.classList.contains("open")) {
        drawer.classList.add("open");
      }
      
      const chatbotInput = document.getElementById("chatbot-user-input");
      if (chatbotInput) {
        chatbotInput.value = `Can you explain: ${inputVal}`;
        sendChatbotMessage();
      }
    });
  
  // OMR/Answer Sheet Evaluator logic
  const evaluateOmrBtn = document.getElementById("ai-evaluate-omr-btn");
  const omrUpload = document.getElementById("ai-omr-upload");
  const omrResultArea = document.getElementById("omr-evaluation-result-area");
  
  if (evaluateOmrBtn && omrUpload && omrResultArea) {
    evaluateOmrBtn.addEventListener("click", async () => {
      const file = omrUpload.files[0];
      const omrText = document.getElementById("ai-omr-text") ? document.getElementById("ai-omr-text").value.trim() : "";
      
      if (!file && !omrText) {
        alert("Please select a PDF/Image scan OR type your answers in the text area.");
        return;
      }
      if (typeof deductTokens === 'function') {
        if (!deductTokens(4000)) return;
      }
      
      const examName = document.getElementById("ai-eval-exam-name").value.trim();
      if (!examName) {
        alert("Please specify the Target Exam Name (e.g., CDS 1 2026).");
        return;
      }
      
      const subjectType = document.getElementById("ai-eval-subject").value;
      
      omrResultArea.style.display = "block";
      omrResultArea.className = "ai-response-area loading";
      omrResultArea.innerHTML = `
        <div style="display:flex; justify-content:center; align-items:center; flex-direction:column; padding: 40px 0;">
          <div style="border: 4px solid rgba(255,255,255,0.1); border-top: 4px solid var(--accent); border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; margin-bottom: 16px;"></div>
          <p style="color:var(--text-secondary); font-size:0.95rem;">Uploading answer sheet and initiating grading report for ${examName} (${subjectType})... This may take up to a minute.</p>
        </div>
      `;
      
      const promptText = `You are the Official UPSC Exam Grading System for NDA, CDS, and AFCAT exams.
You are given:
1. Target Exam: "${examName}"
2. Subject / Paper Type: "${subjectType}"
3. An uploaded document (which may be a formal OMR bubble sheet OR a scanned handwritten list of answers on regular paper) OR a manually typed text list below.

If a text list is provided below, use it. Otherwise, carefully read the candidate's answers from the uploaded document page-by-page. If the document is a handwritten list (like "1-a", "2: c", etc.), use your OCR vision to accurately extract the chosen option for each question number.
Manually Typed Answers (if any):
${omrText ? omrText : "None provided"}

Your task is to:
1. Identify the correct answers for the "${examName}" - "${subjectType}" paper. Rely on your pre-trained knowledge base of UPSC papers and national examinations to fetch/retrieve the official answer key for "${examName}" - "${subjectType}". If you do not have the exact key, generate a highly realistic, accurate expert-level answer key for this specific paper.
2. Read the candidate's answers from the uploaded document page-by-page. Extract the chosen options (a, b, c, or d) for each question number.
3. Compare the candidate's answers against the official answer key.
4. Calculate the performance metrics based on the official marking schemes:
   - **NDA Mathematics**: +2.5 marks for correct, -0.83 marks for incorrect.
   - **NDA General Ability Test (GAT)**: +4.0 marks for correct, -1.33 marks for incorrect.
   - **CDS (Maths, English, or General Knowledge)**: +1.0 marks for correct, -0.33 marks for incorrect.
   - **AFCAT**: +3.0 marks for correct, -1.0 marks for incorrect.
   - Unattempted questions: 0 marks.

Produce a beautiful, production-ready grading report in HTML. The output should be raw, styled HTML. Do NOT wrap it in a markdown block. Use these classes for styling (which fit the application's CSS system):
- Header container with class "panel result-card" containing the Exam Name, Subject, Candidate Net Score, and Qualification Verdict.
- A summary table with class "result-table" displaying:
  * Total Questions
  * Attempted Questions
  * Correct Answers
  * Incorrect Answers
  * Accuracy (%)
  * Final Net Score (out of max possible marks)
- A detailed question-by-question breakdown table with columns:
  * Question Number
  * Candidate Option
  * Correct Option
  * Status (use styled badges: e.g., <span style="color:var(--accent); font-weight:600;">CORRECT</span>, <span style="color:var(--danger); font-weight:600;">INCORRECT</span>, or <span style="color:var(--text-muted);">UNATTEMPTED</span>)
  * Short explanation or correct answer details.

Ensure the design is clean, readable, premium, and uses variables like var(--accent), var(--danger), var(--warning), var(--text-primary), var(--text-secondary), etc. Do NOT use any emojis or pictorial symbols anywhere in the HTML report. Keep it completely emoji-free and professional.`;

      const executeEvaluation = async (base64Data = null, fileMime = null) => {
        try {
          const modelsToTry = ["gemini-3-flash-preview", "gemini-2.5-flash", "gemini-3.1-flash-lite", "gemini-2.0-flash", "gemini-1.5-flash", "gemini-1.5-pro"];
          let success = false;
          let resultText = "";
          let lastStatus = 0;
          
          for (const model of modelsToTry) {
            try {
              const parts = [];
              if (base64Data && fileMime) {
                parts.push({
                  inlineData: {
                    mimeType: fileMime,
                    data: base64Data
                  }
                });
              }
              parts.push({ text: promptText });
              
              const response = await fetch('/api/gemini', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  model: model,
                  contents: [{ parts }]
                })
              });
              
              lastStatus = response.status;
              if (response.ok) {
                const resData = await response.json();
                if (resData.candidates && resData.candidates[0] && resData.candidates[0].content && resData.candidates[0].content.parts[0]) {
                  resultText = resData.candidates[0].content.parts[0].text;
                  success = true;
                  break;
                }
              }
            } catch (e) {
              console.error(e);
            }
          }
          
          if (success) {
            omrResultArea.className = "ai-response-area";
            let htmlContent = resultText.trim();
            if (htmlContent.startsWith("```html")) {
              htmlContent = htmlContent.substring(7);
            } else if (htmlContent.startsWith("```")) {
              htmlContent = htmlContent.substring(3);
            }
            if (htmlContent.endsWith("```")) {
              htmlContent = htmlContent.substring(0, htmlContent.length - 3);
            }
            htmlContent = htmlContent.trim();
            
            omrResultArea.innerHTML = `
              <div style="border-bottom:1px solid var(--border); padding-bottom:12px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
                <h3 style="font-family:var(--font-logo); color: var(--accent);">OMR EVALUATION REPORT</h3>
                <span style="font-size:0.75rem; color:var(--text-muted); font-family:var(--font-mono)">Gemini Auto-Grade</span>
              </div>
              <div style="line-height:1.6; font-size:0.95rem; color:var(--text-primary);">
                ${htmlContent}
              </div>
            `;
            
            if (window.MathJax && typeof window.MathJax.typeset === 'function') {
              window.MathJax.typeset();
            }
          } else {
            let errorMsgDetail = "The request timed out or the API is busy.";
            let proTip = "Make sure the uploaded file is a clear scan and fits under the proxy limit.";
            if (lastStatus === 429) {
              errorMsgDetail = "Gemini API quota exhausted.";
            } else if (lastStatus === 403) {
              errorMsgDetail = "Access Forbidden: Invalid API key.";
            } else if (lastStatus === 413) {
              errorMsgDetail = "Payload Too Large: File exceeds 50MB proxy limit.";
            }
            
            omrResultArea.className = "ai-response-area error";
            omrResultArea.innerHTML = `
              <div style="color:var(--danger); padding:20px; text-align:center;">
                <span style="font-size:2rem;"></span>
                <p style="margin-top:10px; font-weight:600;">Failed to evaluate answer sheet.</p>
                <p style="font-size:0.85rem; color:var(--text-secondary); margin-top:4px;">${errorMsgDetail}</p>
                <p style="font-size:0.8rem; color:var(--text-muted); margin-top:8px; background:rgba(255,255,255,0.03); padding:8px; border-radius:4px; display:inline-block; border:1px solid rgba(255,255,255,0.05);"><strong> Pro-Tip:</strong> ${proTip}</p>
              </div>
            `;
          }
        } catch (err) {
          console.error(err);
          omrResultArea.className = "ai-response-area error";
          omrResultArea.innerHTML = `<div style="color:var(--danger); padding:20px; text-align:center;">Error processing answer sheet. Please try again.</div>`;
        }
      };
      
      if (file) {
        const reader = new FileReader();
        reader.onload = async () => {
          const base64Data = reader.result.split(',')[1];
          const fileMime = file.type || "application/pdf";
          await executeEvaluation(base64Data, fileMime);
        };
        reader.readAsDataURL(file);
      } else {
        await executeEvaluation();
      }
    });
  }
}
}

// Dynamic Profile editing
function initUserProfile() {
  const profileDiv = document.querySelector(".user-profile-widget") || document.querySelector(".user-profile");
  const avatarDiv = document.getElementById("profile-avatar") || document.getElementById("user-avatar");
  const nameDiv = document.getElementById("profile-branch") || document.querySelector(".user-name");
  const rankDiv = document.getElementById("profile-rank") || document.getElementById("user-rank");
  
  if (!profileDiv || !avatarDiv || !nameDiv || !rankDiv) return;
  
  // Load saved profile
  const savedName = localStorage.getItem("tac_user_name") || "Defence Cadet";
  const savedRank = localStorage.getItem("tac_user_rank") || "Lieutenant";
  
  nameDiv.textContent = savedName;
  rankDiv.textContent = savedRank;
  
  // Calculate initials for avatar
  const initials = savedName.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();
  avatarDiv.textContent = initials || "CD";
  
  profileDiv.addEventListener("click", () => {
    const newName = prompt("Enter your Name:", nameDiv.textContent);
    if (newName === null) return;
    const cleanName = newName.trim();
    if (!cleanName) return;
    
    const newRank = prompt("Enter your Rank (e.g. Lieutenant, Captain, Major):", rankDiv.textContent);
    if (newRank === null) return;
    const cleanRank = newRank.trim();
    if (!cleanRank) return;
    
    localStorage.setItem("tac_user_name", cleanName);
    localStorage.setItem("tac_user_rank", cleanRank);
    
    nameDiv.textContent = cleanName;
    rankDiv.textContent = cleanRank;
    avatarDiv.textContent = cleanName.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();
  });
}


// ==========================================
// ==========================================