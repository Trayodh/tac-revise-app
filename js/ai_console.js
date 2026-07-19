// 11. AI REVISION QUESTION GENERATOR MODULE
// ==========================================
const PRESET_SUGGESTIONS = [
  { id: "matrices", text: "Matrices and Determinants" },
  { id: "fundamental-rights", text: "Fundamental Rights" },
  { id: "optics", text: "Optics Laws & Refraction" },
  { id: "commands", text: "Military Command Centers" },
  { id: "history-movement", text: "Indian National Movement" },
  { id: "indian-monsoon", text: "Monsoon & Soils of India" },
  { id: "rbi-monetary", text: "RBI & Monetary Policy" },
  { id: "biology", text: "Cell Biology & Human Systems" },
  { id: "govt-schemes", text: "Government Schemes" },
  { id: "ca-red-sea-crisis", text: "Red Sea Maritime Security" },
  { id: "ca-quad-indopacific", text: "Quad Indo-Pacific Strategy" },
  { id: "ca-defense-acquisitions", text: "Key Defense Acquisitions" }
];

function renderAiConsoleSuggestions() {
  const container = document.getElementById("ai-suggestion-container");
  container.innerHTML = "";
  
  PRESET_SUGGESTIONS.forEach(s => {
    const chip = document.createElement("div");
    chip.className = "suggestion-chip";
    chip.innerText = s.text;
    chip.addEventListener("click", () => {
      document.getElementById("ai-custom-topic-input").value = s.text;
      triggerAiQuestionGeneration(s.id);
    });
    container.appendChild(chip);
  });
}

// Toggle image upload row depending on selected Ask Dronacharya mode
document.querySelectorAll('input[name="ai-mode"]').forEach(radio => {
  radio.addEventListener('change', (e) => {
    const imgContainer = document.getElementById('ai-image-upload-container');
    if (imgContainer) {
      imgContainer.style.display = e.target.value === 'solve' ? 'flex' : 'none';
    }
  });
});

document.getElementById("ai-generate-btn").addEventListener("click", async () => {
  const query = document.getElementById("ai-custom-topic-input").value.trim();
  const fileInput = document.getElementById("ai-doubt-image-input");
  const hasImage = fileInput && fileInput.files && fileInput.files[0];
  if (!query && !hasImage) {
    alert("Please enter a topic or attach a doubt image.");
    return;
  }
  const mode = document.querySelector('input[name="ai-mode"]:checked').value;
  let templateKey = null;
  const lowerQuery = query.toLowerCase();
  if (lowerQuery.includes("matrix") || lowerQuery.includes("determinant")) templateKey = "matrices";
  else if (lowerQuery.includes("right") || lowerQuery.includes("article")) templateKey = "fundamental-rights";
  else if (lowerQuery.includes("optic") || lowerQuery.includes("refract") || lowerQuery.includes("mirror") || lowerQuery.includes("lens")) templateKey = "optics";
  else if (lowerQuery.includes("command") || lowerQuery.includes("headquarter") || lowerQuery.includes("military")) templateKey = "commands";
  else if (lowerQuery.includes("schedule")) templateKey = "schedules-constitution";
  else if (lowerQuery.includes("newton") || lowerQuery.includes("motion") || lowerQuery.includes("law")) templateKey = "newton-laws";
  else if (lowerQuery.includes("exercise") || lowerQuery.includes("bilateral")) templateKey = "joint-exercises";
  else if (lowerQuery.includes("acid") || lowerQuery.includes("base") || lowerQuery.includes("indicator")) templateKey = "acids-bases";
  else if (lowerQuery.includes("history") || lowerQuery.includes("national") || lowerQuery.includes("movement") || lowerQuery.includes("gandhi") || lowerQuery.includes("congress") || lowerQuery.includes("inc")) templateKey = "history-movement";
  else if (lowerQuery.includes("monsoon") || lowerQuery.includes("soil") || lowerQuery.includes("rain") || lowerQuery.includes("pass") || lowerQuery.includes("river") || lowerQuery.includes("geography")) templateKey = "indian-monsoon";
  else if (lowerQuery.includes("scheme") || lowerQuery.includes("welfare") || lowerQuery.includes("yojana") || lowerQuery.includes("pension") || lowerQuery.includes("mgnrega")) templateKey = "govt-schemes";
  else if (lowerQuery.includes("rbi") || lowerQuery.includes("monetary") || lowerQuery.includes("rate") || lowerQuery.includes("repo") || lowerQuery.includes("tax") || lowerQuery.includes("gst") || lowerQuery.includes("economics") || lowerQuery.includes("plan")) templateKey = "rbi-monetary";
  else if (lowerQuery.includes("cell") || lowerQuery.includes("organelle") || lowerQuery.includes("biology") || lowerQuery.includes("circulatory") || lowerQuery.includes("blood") || lowerQuery.includes("hormone") || lowerQuery.includes("disease") || lowerQuery.includes("physiol") || lowerQuery.includes("pathogen")) templateKey = "biology";
  else if (lowerQuery.includes("red sea") || lowerQuery.includes("crisis") || lowerQuery.includes("houthi") || lowerQuery.includes("sankalp") || lowerQuery.includes("bab-el-mandeb") || lowerQuery.includes("aden")) templateKey = "ca-red-sea-crisis";
  else if (lowerQuery.includes("quad") || lowerQuery.includes("indo-pacific") || lowerQuery.includes("first island chain") || lowerQuery.includes("malabar")) templateKey = "ca-quad-indopacific";
  else if (lowerQuery.includes("acquisition") || lowerQuery.includes("rafale-m") || lowerQuery.includes("scorpene") || lowerQuery.includes("submarine") || lowerQuery.includes("vikrant") || lowerQuery.includes("procurement")) templateKey = "ca-defense-acquisitions";
  else if (lowerQuery.includes("icet") || lowerQuery.includes("mq-9b") || lowerQuery.includes("predator") || lowerQuery.includes("drone") || lowerQuery.includes("seaguardian") || lowerQuery.includes("skyguardian")) templateKey = "ca-icet-drones";
  else if (lowerQuery.includes("c-295") || lowerQuery.includes("c295") || lowerQuery.includes("airbus") || lowerQuery.includes("vadodara") || lowerQuery.includes("spain")) templateKey = "ca-spain-c295";
  else if (lowerQuery.includes("space nuclear") || lowerQuery.includes("nuclear space") || lowerQuery.includes("mirv") || lowerQuery.includes("agni") || lowerQuery.includes("divyastra")) templateKey = "ca-space-nuclear";

  if (mode === "questions") {
    triggerAiQuestionGeneration(templateKey, query);
  } else {
    await triggerAiSolveDoubt(templateKey, query);
  }
});

async function triggerAiQuestionGeneration(templateKey, customQueryText = "") {
  const area = document.getElementById("ai-result-area");
  area.style.display = "block";
  area.className = "ai-response-area loading";
  
  const topicName = customQueryText || (templateKey && AI_TOPIC_TEMPLATES[templateKey] ? AI_TOPIC_TEMPLATES[templateKey].topic : "Tactical Topic");
  
  let syllabusContext = "";
  if (templateKey && window.OFFICIAL_SYLLABUS_DATA && window.OFFICIAL_SYLLABUS_DATA[templateKey]) {
    syllabusContext = `\n\nOfficial syllabus context: ${window.OFFICIAL_SYLLABUS_DATA[templateKey]}`;
  }
  
  let pyqContext = "";
  if (templateKey && window.PYQ_TRENDS_DATA && window.PYQ_TRENDS_DATA[templateKey]) {
    pyqContext = `\n\nActual Questions, numerical patterns, and conceptual trends from the last 7 years (2020-2026) of UPSC/AFCAT exams on this topic: ${window.PYQ_TRENDS_DATA[templateKey]}`;
  }

  const promptText = `You are an expert examiner for Indian Defence Examinations (NDA, CDS, AFCAT).
Generate exactly 10 high-yield, exam-standard multiple-choice questions for the topic "${topicName}" to teach the topic comprehensively and prepare the user to clear the exam.
Twist the questions in all possible ways they can be asked in the actual exam. Specifically include:
- At least 2 numerical or calculation-based questions (if applicable to the subject).
- At least 2 statement-based questions (e.g., "Which of the following statements is/are correct?").
- At least 2 assertion-reasoning or exception-based questions.
- Match the following or chronological sequence questions (where appropriate).
- Twisted conceptual questions designed to expose common exam traps and misconceptions.
${syllabusContext}${pyqContext}

For each of the 10 questions, provide:
1. The question text.
2. 4 distinct options (a, b, c, d).
3. The index of the correct option (0 for A, 1 for B, 2 for C, 3 for D).
4. A highly detailed, step-by-step educational explanation that teaches the concept clearly and resolves why other options are incorrect.

Your response must be a single JSON object in the following format:
{
  "topic": "${topicName}",
  "questions": [
    {
      "question": "question text",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correct": 0,
      "explanation": "detailed step-by-step explanation"
    },
    ... (exactly 10 questions)
  ]
}
Do not output any surrounding markdown formatting (no \`\`\`json, no \`\`\`), do not output any other text. Output only the raw JSON. Do NOT use any emojis, icons, or pictorial characters anywhere in the questions, options, or explanations. Keep the content completely emoji-free.`;

  const modelsToTry = ["gemini-3-flash-preview", "gemini-2.5-flash", "gemini-3.1-flash-lite", "gemini-2.0-flash", "gemini-1.5-flash", "gemini-1.5-pro"];
  let success = false;
  let generatedData = null;

  for (const model of modelsToTry) {
    try {
      const response = await fetch('/api/gemini', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: model,
          contents: [{ parts: [{ text: promptText }] }],
          generationConfig: {
            temperature: 0.2,
            response_mime_type: 'application/json'
          }
        })
      });

      if (response.ok) {
        const resData = await response.json();
        if (resData.candidates && resData.candidates[0] && resData.candidates[0].content && resData.candidates[0].content.parts[0]) {
          let text = resData.candidates[0].content.parts[0].text.trim();
          if (text.startsWith('```json')) text = text.substring(7);
          if (text.startsWith('```')) text = text.substring(3);
          if (text.endsWith('```')) text = text.substring(0, text.length - 3);
          
          generatedData = JSON.parse(text.trim());
          success = true;
          break;
        }
      }
    } catch (err) {
      console.error(`Failed to generate questions using model ${model}:`, err);
    }
  }

  area.className = "ai-response-area";
  
  if (!success || !generatedData || !generatedData.questions || generatedData.questions.length < 10) {
    console.warn("API question generation failed or incomplete, using fallback...");
    if (templateKey && AI_TOPIC_TEMPLATES[templateKey]) {
      generatedData = AI_TOPIC_TEMPLATES[templateKey];
    } else {
      generatedData = {
        topic: topicName,
        questions: [
          {
            question: `[FALLBACK] In reference to "${topicName}", which of the following statements represents the core concept tested under National Defence service guidelines?`,
            options: [
              `Hypothesis showing standard operational and mathematical behavior of ${topicName}.`,
              `Tactical deployment parameters corresponding strictly to ${topicName} values.`,
              "Both A and B are correct depending on parameters specified in the exam syllabus.",
              "None of the above statements represent the core concept accurately."
            ],
            correct: 2,
            explanation: `Let's break down the subject matter of ${topicName}. In typical Defence Entrance exams, ${topicName} is studied to check logical application and standard definitions.`
          }
        ]
      };
    }
  }

  let html = `
    <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border); padding-bottom:12px; margin-bottom:20px;">
      <h3 style="font-family:var(--font-logo); color: var(--accent);"> AI-GENERATED WORKSPACE: ${generatedData.topic.toUpperCase()}</h3>
      <span style="font-size:0.75rem; color:var(--text-muted); font-family:var(--font-mono)">QUESTIONS: ${generatedData.questions.length} | DEPTH: HIGH</span>
    </div>
    <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:24px;">
      Generated <strong>${generatedData.questions.length} twisted revision questions</strong> with detailed step-by-step solutions below.
    </p>
  `;
  
  generatedData.questions.forEach((q, qIdx) => {
    html += `
      <div class="panel" style="margin-bottom:20px; background-color:rgba(0,0,0,0.15);" id="ai-q-${qIdx}">
        <div style="font-size:0.8rem; font-family:var(--font-mono); color:var(--text-muted); margin-bottom:8px;">Generated Question ${qIdx+1}</div>
        <p style="font-weight:600; margin-bottom:16px; font-size:0.95rem;">${q.question}</p>
        <div style="display:flex; flex-direction:column; gap:8px;">
    `;
    
    q.options.forEach((opt, optIdx) => {
      html += `
        <button class="action-btn" onclick="checkAiConsoleQuestion(${qIdx}, ${optIdx}, ${q.correct}, this)" style="text-align:left; width:100%; justify-content:flex-start;">
          ${String.fromCharCode(65 + optIdx)}. ${opt}
        </button>
      `;
    });
    
    html += `
        </div>
        <div class="solution-explanation" id="ai-explain-${qIdx}" style="display:none; margin-top:14px;">
          <strong>Solution explanation:</strong><br>
          ${q.explanation}
        </div>
      </div>
    `;
  });
  
  area.innerHTML = html;
}

async function triggerAiSolveDoubt(templateKey, customQueryText = "", contextText = "") {
  const area = document.getElementById("ai-result-area");
  area.style.display = "block";
  area.className = "ai-response-area loading";

  let topicName = "";
  if (templateKey && AI_TOPIC_TEMPLATES[templateKey]) {
    topicName = AI_TOPIC_TEMPLATES[templateKey].topic;
  } else {
    topicName = customQueryText || "Your topic";
  }

  area.innerHTML = `
    <div class="panel" style="margin-bottom:20px;">
      <h3 style="font-family:var(--font-logo); color: #4ade80;"> Explanation: ${topicName}</h3>
      <p style="font-size:0.9rem; color:#cbd5e1; margin-top:12px;"> AI is generating explanation...</p>
    </div>
  `;
   let imagePart = null;
  const fileInput = document.getElementById("ai-doubt-image-input");
  if (fileInput && fileInput.files && fileInput.files[0]) {
    const file = fileInput.files[0];
    try {
      const base64Data = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result;
          const base64 = result.substring(result.indexOf(",") + 1);
          resolve(base64);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
      imagePart = {
        inlineData: {
          mimeType: file.type,
          data: base64Data
        }
      };
      console.log("[DRONACHARYA-DOUBT] Successfully parsed attached image:", file.name);
    } catch (err) {
      console.error("[DRONACHARYA-DOUBT] Error reading image file:", err);
    }
  }

  let syllabusText = "";
  if (templateKey && window.OFFICIAL_SYLLABUS_DATA && window.OFFICIAL_SYLLABUS_DATA[templateKey]) {
    syllabusText = `\n\nEnsure you cover the official UPSC/AFCAT syllabus requirements: ${window.OFFICIAL_SYLLABUS_DATA[templateKey]}`;
  }
  
  let pyqText = "";
  if (templateKey && window.PYQ_TRENDS_DATA && window.PYQ_TRENDS_DATA[templateKey]) {
    pyqText = `\n\nTake note of the following actual questions and trends from the last 7 years (2020-2026) of UPSC/AFCAT exams on this topic, and ensure they are addressed in the explanation: ${window.PYQ_TRENDS_DATA[templateKey]}`;
  }

  let contextPrompt = "";
  if (contextText) {
    contextPrompt = `\n\nCONTEXT OF THE QUERY: The student clicked this term while studying/viewing: "${contextText}". You MUST use this context to resolve any ambiguity in the term.
Specifically, adapt the explanation dynamically to the context:
- For example, if the term is "NATO" and context is "History", explain its historical evolution (Cold War origin).
- If context is "Current Affairs", explain its modern geopolitical significance.
- If context is "Defence Studies", explain its military structure and doctrine.
- If context is "International Relations", explain its diplomatic relevance.
- Similarly, if they clicked "Cell" under a Biology topic, explain biological cells, whereas under a military/strategy topic, explain military planning cells. Make the entire explanation highly relevant to this specific context.`;
  }

  let prompt = `You are Guru Dronacharya, the legendary ancient tutor and guide, acting as the AI tutor for Indian Defence Examinations (NDA, CDS, AFCAT) and civil services exams. Speak with authority, deep wisdom, and encouraging pedagogical guidance.
Your goal is to teach the user the topic "${topicName}" so exceptionally well that they are fully equipped to clear the exam with excellent marks.
Structure your notes as a comprehensive educational guide.${contextPrompt}`;

  if (imagePart) {
    prompt += `\n\nADDITIONAL INPUT: The student has attached an image containing a specific question or doubt related to "${topicName}". You must read and analyze the doubt from the attached image, solve it completely, and explain the solution with detailed step-by-step reasoning.`;
  }

  prompt += `\n\nIMPORTANT REQUIREMENT: Throughout your response, wrap any important terms, sub-topics, historical dates, organizations, treaties, laws, equations, or doctrines in double square brackets, e.g. [[Constituent Assembly]] or [[Article 19]], so that they act as recursive clickable knowledge graph nodes. Generate at least 15-20 such inline links.

Cover the following sections in your notes:
1. Level 1: Instant Definition:
   - A concise one-line explanation of "${topicName}".
2. Level 2: Detailed Concept Breakdown:
   - What it is, Why it exists, How it works, Historical background, Key components, Advantages, and Limitations.
3. Level 3: Exam-Oriented Notes:
   - Specific relevance to UPSC, CDS, AFCAT, NDA, SSC, and State PSC exams.
   - Frequently asked areas and common exam traps/misconceptions.
4. Level 4: Memory Techniques:
   - Mnemonics, short tricks, easy recall methods, and exam hacks. Wrap in <div class="mnemonic-box"><strong>Mnemonic:</strong> ...</div> or <div class="trap-box"><strong>Exam Trap:</strong> ...</div> or <div class="strategist-tip"><strong>Strategist Tip:</strong> ...</div>.
5. Level 5: Related Concepts:
   - Display 10-20 related terms as clickable AI knowledge links (e.g. [[Related Term 1]], [[Related Term 2]]).
6. Topic Dependency Tree:
   - Prerequisites (Foundational concepts to understand first, e.g. [[Prerequisite Concept]])
   - Advanced Concepts (What to study next, e.g. [[Advanced Concept]])
7. AI Follow-Up Learning:
   - Common Doubts Students Ask (Generate 5 questions starting with Why, How, When, Where, What if, e.g., "[[Why is this concept vital for national security?]]" - make sure they are fully wrapped in double square brackets so the user can click them to run a follow-up doubt resolution).
8. Visual Understanding:
   - Present comparative tables, step-by-step text flowcharts, chronological timelines, or cause-and-effect diagrams to map out the concept structurally.

Use bold headings, structured layout, and do NOT use any emojis, icons, or pictorial characters. Keep the content completely emoji-free and professional.${syllabusText}${pyqText}`;

  const modelsToTry = ["gemini-3-flash-preview", "gemini-2.5-flash", "gemini-3.1-flash-lite", "gemini-2.0-flash", "gemini-1.5-flash", "gemini-1.5-pro"];
  let replyText = "";
  let success = false;

  for (const model of modelsToTry) {
    try {
      const parts = [{ text: prompt }];
      if (imagePart) {
        parts.push(imagePart);
      }
      const response = await fetch('/api/gemini', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: model,
          contents: [{ parts: parts }]
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
      console.error("Gemini API error:", err);
    }
  }

  area.className = "ai-response-area";

  if (success) {
    let formattedText = replyText
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code style="background-color:rgba(255,255,255,0.05); padding:2px 4px; border-radius:4px;">$1</code>')
      .replace(/^#{1,3} (.+)$/gm, '<h4 style="color: var(--accent); margin:16px 0 8px;">$1</h4>')
      .replace(/\n/g, '<br/>');

    area.innerHTML = `
      <div class="panel" style="margin-bottom:20px;">
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border); padding-bottom:12px; margin-bottom:20px;">
          <h3 style="font-family:var(--font-logo); color: #4ade80;"> AI Explanation: ${topicName}</h3>
          <span style="font-size:0.75rem; color:#cbd5e1; font-family:var(--font-mono)">POWERED BY GEMINI AI · FREE</span>
        </div>
        <div style="font-size:0.95rem; line-height:1.8; color:#f8fafc !important; font-weight: 400; letter-spacing: 0.3px; text-shadow: 0 0 1px rgba(255,255,255,0.1);">${parseWikiLinks(formattedText)}</div>
      </div>
    `;
    if (window.MathJax && typeof window.MathJax.typeset === 'function') {
      window.MathJax.typeset();
    }
  } else {
    area.innerHTML = `
      <div class="panel" style="margin-bottom:20px; border-color:var(--danger);">
        <h3 style="color:var(--danger);">AI Unavailable</h3>
        <p style="color:var(--text-secondary); margin-top:8px;">Could not reach the Gemini AI service. Please check your server connection and try again.</p>
      </div>
    `;
  }
}



function checkAiConsoleQuestion(qIdx, selectedIdx, correctIdx, btnElement) {
  const container = document.getElementById(`ai-q-${qIdx}`);
  const explanationDiv = document.getElementById(`ai-explain-${qIdx}`);
  
  container.querySelectorAll("button").forEach(btn => {
    btn.disabled = true;
    btn.style.opacity = "0.7";
  });
  
  if (selectedIdx === correctIdx) {
    btnElement.style.borderColor = "var(--accent)";
    btnElement.style.backgroundColor = "rgba(34, 197, 94, 0.1)";
    btnElement.style.color = "var(--accent)";
  } else {
    btnElement.style.borderColor = "var(--danger)";
    btnElement.style.backgroundColor = "rgba(239, 68, 68, 0.1)";
    btnElement.style.color = "var(--danger)";
    
    const correctBtn = container.querySelectorAll("button")[correctIdx];
    if (correctBtn) {
      correctBtn.style.borderColor = "var(--accent)";
      correctBtn.style.color = "var(--accent)";
    }
  }
  
  explanationDiv.style.display = "block";
}

// ==========================================
// TELL ME MORE AI FEATURE
// ==========================================

window.startTellMeMoreAI = async function(contextData) {
    const area = document.getElementById("ai-result-area");
    area.style.display = "block";
    area.className = "ai-response-area loading";
    
    // Add Back Button and Header
    const headerHtml = `
      <div style="margin-bottom: 20px;">
        <button onclick="handleTellMeMoreBack()" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: var(--text-primary); padding: 6px 12px; border-radius: 6px; cursor: pointer; font-size: 0.85rem; font-family: var(--font-mono); margin-bottom: 15px; transition: background 0.2s;">
          &larr; Back to Reading
        </button>
        <div class="panel" style="margin-bottom:20px; border-left: 4px solid var(--accent); background: rgba(168, 85, 247, 0.05);">
          <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Selected Text</div>
          <blockquote style="margin: 0; font-size: 1rem; color: var(--text-primary); font-style: italic;">
            "${contextData.selectedText}"
          </blockquote>
        </div>
      </div>
    `;
    
    area.innerHTML = headerHtml + `
      <div class="panel">
        <h3 style="font-family:var(--font-logo); color: var(--accent);"> AI Explanation: Tell Me More</h3>
        <p style="font-size:0.9rem; color:var(--text-muted); margin-top:12px;"> AI is analyzing context and generating deep explanation...</p>
      </div>
    `;

    const prompt = `Explain the following study material in detail.
Selected Text:
"${contextData.selectedText}"

Context:
- Page Name: ${contextData.pageName}
- Chapter: ${contextData.chapter}
- Topic: ${contextData.topic}
- Subtopic: ${contextData.subtopic}
- Section Heading: ${contextData.sectionHeading}
- Previous Heading: ${contextData.previousHeading}
- Next Heading: ${contextData.nextHeading}
- Surrounding Paragraph: ${contextData.contextText}

Your explanation should include:
- Simple explanation
- Deep explanation
- Background knowledge
- Why this is important
- Real-life examples
- Analogies
- Mnemonics
- Common mistakes
- Exam relevance (JEE/NEET/CDS/AFCAT/etc. depending on subject)
- Frequently asked questions
- Connections with previous and upcoming topics
- Related concepts
- Advanced insights
- Summary
- Practice questions if appropriate

If the selected text is incomplete or ambiguous, use the surrounding context to infer the intended meaning rather than explaining it in isolation. Make sure to wrap keywords in double square brackets like [[Keyword]] for recursive learning.`;

    const modelsToTry = ["gemini-3-flash-preview", "gemini-2.5-flash", "gemini-3.1-flash-lite", "gemini-2.0-flash", "gemini-1.5-flash"];
    let replyText = "";
    let success = false;
  
    for (const model of modelsToTry) {
      try {
        const response = await fetch('/api/gemini', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ model: model, contents: [{ parts: [{text: prompt}] }] })
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
        console.error("Gemini API error:", err);
      }
    }

    area.className = "ai-response-area";
    
    if (success) {
      let formattedText = replyText
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`([^`]+)`/g, '<code style="background-color:rgba(255,255,255,0.05); padding:2px 4px; border-radius:4px;">$1</code>')
        .replace(/^#{1,3} (.+)$/gm, '<h4 style="color: var(--accent); margin:16px 0 8px;">$1</h4>')
        .replace(/\n/g, '<br/>');

      const toolbarHtml = getAiActionToolbarHtml();

      area.innerHTML = headerHtml + `
        <div class="panel" style="margin-bottom:20px;" id="ai-explanation-content">
          <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border); padding-bottom:12px; margin-bottom:20px;">
            <h3 style="font-family:var(--font-logo); color: var(--accent);"> AI Explanation</h3>
            <span style="font-size:0.75rem; color:var(--text-muted); font-family:var(--font-mono)">POWERED BY GEMINI AI</span>
          </div>
          <div style="font-size:0.95rem; line-height:1.8; color:#f8fafc !important; font-weight: 400; letter-spacing: 0.3px; text-shadow: 0 0 1px rgba(255,255,255,0.1);" id="ai-explanation-text">${parseWikiLinks(formattedText)}</div>
          ${toolbarHtml}
        </div>
      `;
      
      // Store raw text for TTS and Copy
      area.dataset.rawResponse = replyText;
      area.dataset.contextDataStr = JSON.stringify(contextData);

      if (window.MathJax && typeof window.MathJax.typeset === 'function') {
        window.MathJax.typeset();
      }
    } else {
      area.innerHTML = headerHtml + `
        <div class="panel" style="border:1px solid #ef4444; background:rgba(239, 68, 68, 0.1);">
          <h3 style="color:#ef4444;">Generation Failed</h3>
          <p>Please try again later. The AI service may be temporarily unavailable.</p>
        </div>
      `;
    }
};

window.handleTellMeMoreBack = function() {
    const lastState = window.tellMeMoreHistoryStack.pop();
    if (lastState) {
        switchScreen(lastState.screen);
        setTimeout(() => {
            window.scrollTo({ top: lastState.scrollY, behavior: 'smooth' });
        }, 50);
    } else {
        switchScreen('notes');
    }
};

window.getAiActionToolbarHtml = function() {
  return `
    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 25px; padding-top: 15px; border-top: 1px dashed rgba(255,255,255,0.1);">
      <button onclick="aiActionCopy()" class="exam-btn" style="padding: 6px 12px; font-size: 0.8rem; flex-grow: 1;">📋 Copy</button>
      <button onclick="aiActionTTS()" class="exam-btn" style="padding: 6px 12px; font-size: 0.8rem; flex-grow: 1;">🔊 Listen</button>
      <button onclick="aiActionSave()" class="exam-btn" style="padding: 6px 12px; font-size: 0.8rem; flex-grow: 1;">⭐ Save</button>
      <button onclick="aiActionShare()" class="exam-btn" style="padding: 6px 12px; font-size: 0.8rem; flex-grow: 1;">📤 Share</button>
      <button onclick="aiActionPDF()" class="exam-btn" style="padding: 6px 12px; font-size: 0.8rem; flex-grow: 1;">📄 Export PDF</button>
      <button onclick="aiActionRegenerate()" class="exam-btn" style="padding: 6px 12px; font-size: 0.8rem; flex-grow: 1;">🔄 Regenerate</button>
    </div>
  `;
};

window.aiActionCopy = function() {
  const area = document.getElementById("ai-result-area");
  if (area && area.dataset.rawResponse) {
    navigator.clipboard.writeText(area.dataset.rawResponse).then(() => alert('Copied to clipboard!'));
  }
};

window.aiActionTTS = function() {
  const area = document.getElementById("ai-result-area");
  if (area && area.dataset.rawResponse) {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      return;
    }
    const utterance = new SpeechSynthesisUtterance(area.dataset.rawResponse);
    window.speechSynthesis.speak(utterance);
  }
};

window.aiActionSave = function() {
  const area = document.getElementById("ai-result-area");
  if (area && area.dataset.rawResponse) {
    let saved = JSON.parse(localStorage.getItem('saved_explanations') || '[]');
    saved.push({
      date: new Date().toISOString(),
      text: area.dataset.rawResponse,
      context: area.dataset.contextDataStr
    });
    localStorage.setItem('saved_explanations', JSON.stringify(saved));
    alert('Saved to Bookmarks!');
  }
};

window.aiActionShare = function() {
  const area = document.getElementById("ai-result-area");
  if (area && area.dataset.rawResponse && navigator.share) {
    navigator.share({
      title: 'Ask Dronacharya Explanation',
      text: area.dataset.rawResponse
    }).catch(console.error);
  } else {
    window.aiActionCopy();
  }
};

window.aiActionPDF = function() {
  window.print(); // Simple PDF export via print dialog
};

window.aiActionRegenerate = function() {
  const area = document.getElementById("ai-result-area");
  if (area && area.dataset.contextDataStr) {
    try {
      const data = JSON.parse(area.dataset.contextDataStr);
      window.startTellMeMoreAI(data);
    } catch(e) {}
  }
};
