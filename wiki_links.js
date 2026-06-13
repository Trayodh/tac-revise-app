// 1. Concept Glossary definition
let CONCEPT_GLOSSARY = [];
let GLOSSARY_REGEX = null;
let GLOSSARY_MAP = {};

// Compiles a comprehensive glossary of terms from NOTES_DATABASE and academic extra terms
function initializeGlossary() {
  CONCEPT_GLOSSARY = [];
  GLOSSARY_MAP = {};

  if (typeof NOTES_DATABASE !== 'undefined') {
    for (const subjectId in NOTES_DATABASE) {
      const subject = NOTES_DATABASE[subjectId];
      subject.chapters.forEach(chapter => {
        chapter.topics.forEach(topic => {
          // Add the full topic title
          addGlossaryTerm(topic.title, topic.title);
          
          // Add a cleaned version of the title (e.g. without parentheses)
          let cleanTitle = topic.title.replace(/\s*\(.*?\)\s*/g, "").trim();
          addGlossaryTerm(cleanTitle, topic.title);
        });
      });
    }
  }
  
  // Extra high-yield academic, historical, polity, and defence concepts
  const extraTerms = [
    "Federalism", "Central Government", "State Government", "Constitution", "Parliament", 
    "Judiciary", "Seventh Schedule", "Preamble", "Fundamental Rights", "DPSP", "President", 
    "Supreme Court", "Constituent Assembly", "Cabinet Mission", "Independence Act", 
    "British Parliament", "Westminster System", "Cell", "Cell Structure", "Newton's Laws", 
    "Newton's Laws of Motion", "Reflection", "Refraction", "Bilateral Exercises", 
    "Joint Exercises", "Agni", "Agni Missile", "Panchayati Raj", "Directive Principles", 
    "Fundamental Duties", "Emergency Provisions", "Amendments", "Governor", "CAG", 
    "Attorney General", "High Court", "Writs", "Habeas Corpus", "Mandamus", "Prohibition", 
    "Certiorari", "Quo Warranto", "Official Languages", "Anti-defection", "Panchayats", 
    "Municipalities", "Vedic Age", "Indus Valley Civilization", "Buddhism", "Jainism", 
    "Mauryan Period", "Gupta Period", "Delhi Sultanate", "Mughal Empire", "Marathas", 
    "Revolt of 1857", "Governor-Generals", "Viceroys", "Freedom Movement", "World War I", 
    "World War II", "Cold War", "Monsoon", "Indian Monsoon", "RBI", "Monetary Policy", 
    "Repo Rate", "GST", "Fiscal Policy", "Budget", "Poverty", "Unemployment", "Acids", 
    "Bases", "Metals", "Alloys", "Reactivity Series", "Carbon Compounds", "Diseases", 
    "Immunity", "Vaccines", "Plant Kingdom", "Animal Kingdom", "Ecology", "Ranks", 
    "Commands", "Missiles", "Red Sea Crisis", "Quad", "Indo-Pacific", "Rafale-m", 
    "Submarines", "Vikrant", "MQ-9B", "Predator Drone", "Agni-5", "Divyastra", "C-295",
    "Photosynthesis", "Green Revolution", "GDP", "NATO", "Battle of Plassey", "Bernoulli's Principle",
    "Fiscal Deficit", "Electromagnetic Spectrum", "Indian Ocean Rim", "Carbon Cycle",
    "agricultural productivity", "High Yielding Variety seeds", "Norman Borlaug", "Food Security",
    "Irrigation", "Fertilizers", "White Revolution", "Genetic Improvement", "Plant Breeding",
    "Genetics", "DNA", "Chromosomes", "Genes"
  ];
  
  extraTerms.forEach(term => {
    addGlossaryTerm(term, term);
  });

  // Sort terms by length descending to match longer multi-word phrases first
  CONCEPT_GLOSSARY.sort((a, b) => b.term.length - a.term.length);

  // Compile regex
  const escapedTerms = CONCEPT_GLOSSARY.map(g => {
    GLOSSARY_MAP[g.term.toLowerCase()] = g.topic;
    return g.term.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  });

  if (escapedTerms.length > 0) {
    GLOSSARY_REGEX = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'gi');
  }
}

// Safely adds a term and its plural form to the glossary
function addGlossaryTerm(term, topicName) {
  const t = term.trim();
  if (t.length < 3) return;
  
  // Add singular
  if (!CONCEPT_GLOSSARY.some(g => g.term.toLowerCase() === t.toLowerCase())) {
    CONCEPT_GLOSSARY.push({ term: t, topic: topicName });
  }
  
  // Add simple plural
  if (!t.endsWith('s')) {
    const plural = t + 's';
    if (!CONCEPT_GLOSSARY.some(g => g.term.toLowerCase() === plural.toLowerCase())) {
      CONCEPT_GLOSSARY.push({ term: plural, topic: topicName });
    }
  }
}

// Automatically wraps significant concept terms in wiki-link double brackets [[Topic]]
function autoLinkConcepts(htmlString) {
  if (!htmlString) return "";
  
  // Compile the glossary regex if not already done
  if (!GLOSSARY_REGEX) {
    initializeGlossary();
  }
  
  if (!GLOSSARY_REGEX) return htmlString;

  // Split content by:
  // - HTML tags: <[^>]+>
  // - MathJax block: \$\$.*?\$\$
  // - MathJax inline: \$.*?\$ or \\\(.*?\\\) or \\\[.*?\\\]
  // - Already established wiki-links: \[\[.*?\]\]
  const regex = /(<[^>]+>|\$\$.*?\$\$|\$.*?\$|\\\(.*?\\\)|\\\[.*?\\\]|\[\[.*?\]\])/gs;
  const parts = htmlString.split(regex);
  
  let insideLink = false;
  
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (!part) continue;
    
    // Check if it's a tag, math equation, or existing wikilink
    if (part.match(regex)) {
      if (part.startsWith("<a ") || part.startsWith("<a\t") || part.startsWith("<a\n")) {
        insideLink = true;
      } else if (part.startsWith("</a>")) {
        insideLink = false;
      }
      continue; // leave untouched
    }
    
    // If inside an <a> tag, do not auto-link
    if (insideLink) {
      continue;
    }
    
    // Auto-link words in the plain text segment
    parts[i] = part.replace(GLOSSARY_REGEX, (match) => {
      const topic = GLOSSARY_MAP[match.toLowerCase()];
      if (topic) {
        return `[[${topic}|${match}]]`;
      }
      return match;
    });
  }
  
  return parts.join("");
}

// 2. Wikipedia Link Parser: Converts [[Concept Name]] to interactive doubt triggers
function parseWikiLinks(text) {
  if (!text) return "";
  
  // First, auto-link plain text concept occurrences to [[Topic|Label]]
  let linkedText = autoLinkConcepts(text);
  
  // Convert markdown double asterisks **text** to HTML strong tags
  let parsed = linkedText.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  
  // Format standard [[Topic Name]] or [[Topic Name|Display Label]]
  return parsed.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (match, topicName, displayLabel) => {
    const label = displayLabel || topicName;
    const cleanTopic = topicName.trim().replace(/'/g, "\\'");
    return `<a class="wiki-link" style="color: var(--accent); font-weight: 600; text-decoration: underline; cursor: pointer;" onclick="triggerDoubtExplain('${cleanTopic}')">${label}</a>`;
  });
}

// 3. Doubt Trigger Function: Renders the Dronacharya Interactive Popover Modal without leaving the page
let doubtHistory = [];

async function showDronacharyaQuickDoubt(topicName, pushToHistory = true) {
  if (pushToHistory) {
    if (doubtHistory.length === 0 || doubtHistory[doubtHistory.length - 1] !== topicName) {
      doubtHistory.push(topicName);
    }
  }

  let modal = document.getElementById('dronacharya-quick-doubt-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'dronacharya-quick-doubt-modal';
    modal.className = 'cbt-overlay';
    modal.style.cssText = `
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(8, 10, 15, 0.75);
      backdrop-filter: blur(10px);
      z-index: 1100;
    `;
    document.body.appendChild(modal);
  } else {
    modal.style.display = 'flex';
  }

  // Set default initial state
  modal.innerHTML = `
    <div style="
      background: rgba(17, 24, 39, 0.95);
      border: 1px solid rgba(168, 85, 247, 0.2);
      border-radius: 12px;
      width: 90%;
      max-width: 750px;
      height: 80vh;
      display: flex;
      flex-direction: column;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(168, 85, 247, 0.1);
      overflow: hidden;
      animation: fadeIn 0.2s ease-out;
    ">
      <div style="
        padding: 16px 20px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: rgba(0, 0, 0, 0.2);
      ">
        <div style="display: flex; align-items: center; gap: 10px;">
          ${doubtHistory.length > 1 ? `
            <button onclick="popDoubtHistory()" style="
              background: rgba(255,255,255,0.05);
              border: 1px solid rgba(255,255,255,0.1);
              color: var(--text-primary);
              padding: 4px 8px;
              border-radius: 4px;
              cursor: pointer;
              font-size: 0.8rem;
              display: flex;
              align-items: center;
              gap: 4px;
            ">← Back</button>
          ` : ''}
          <span style="font-size: 1.1rem; font-weight: 700; color: var(--accent); letter-spacing: 0.5px;">🎓 Ask Dronacharya: ${topicName}</span>
        </div>
        <button onclick="document.getElementById('dronacharya-quick-doubt-modal').style.display='none'" style="
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0 4px;
          line-height: 1;
        ">&times;</button>
      </div>
      
      <div style="flex: 1; display: flex; align-items: center; justify-content: center; flex-direction: column; padding: 40px; text-align: center;">
        <div class="cbt-spinner" style="border-color: var(--accent); border-top-color: transparent; width: 40px; height: 40px; border-width: 3px; margin-bottom: 16px;"></div>
        <div style="color: var(--accent); font-family: var(--font-mono); font-weight: bold; font-size: 0.9rem; letter-spacing: 1px;">DRONACHARYA IS ANALYZING CONCEPT</div>
        <div style="color: var(--text-muted); font-size: 0.8rem; margin-top: 4px;">Retrieving primary official sources & structuring revision guidelines...</div>
      </div>
    </div>
  `;

  // Fetch the data
  const prompt = `You are Dronacharya, the legendary military guru and expert tutor for Indian Defence Examinations (NDA, CDS, AFCAT, CAPF, UPSC). 
Provide a comprehensive explanation for the concept: "${topicName}".
Generate your response as a valid JSON object matching this schema exactly:
{
  "quickExplanation": "<50-100 words explanation of what the concept is and why it matters. Keep it very clear and beginner-friendly.>",
  "detailedExplanation": "<300-500 words deep-dive detailed explanation. Explain key mechanisms, background, and military/national context. Highlight critical points.>",
  "examRelevance": {
    "NDA": "Very High/High/Medium/Low",
    "CDS": "Very High/High/Medium/Low",
    "AFCAT": "Very High/High/Medium/Low",
    "UPSC": "Very High/High/Medium/Low",
    "analysis": "<1-2 sentences on why this topic is tested in defence exams and what questions usually appear.>"
  },
  "conceptTree": {
    "prerequisites": ["<Prerequisite Concept 1>", "<Prerequisite Concept 2>"],
    "advancedTopics": ["<Advanced Topic 1>", "<Advanced Topic 2>"]
  },
  "relatedTopics": ["<Related Topic 1>", "<Related Topic 2>", "<Related Topic 3>", "<Related Topic 4>"],
  "practiceQuestions": [
    {
      "question": "<High-yield Prelims/CBT style question>",
      "options": ["<A>", "<B>", "<C>", "<D>"],
      "correctIndex": 0,
      "explanation": "<Detailed feedback explaining why that option is correct.>"
    },
    {
      "question": "<Second High-yield question>",
      "options": ["<A>", "<B>", "<C>", "<D>"],
      "correctIndex": 1,
      "explanation": "<Explanation>"
    },
    {
      "question": "<Third High-yield question>",
      "options": ["<A>", "<B>", "<C>", "<D>"],
      "correctIndex": 2,
      "explanation": "<Explanation>"
    }
  ],
  "flashcards": [
    {
      "front": "<Question or Term to recall 1>",
      "back": "<Answer or definition 1>"
    },
    {
      "front": "<Question or Term to recall 2>",
      "back": "<Answer or definition 2>"
    },
    {
      "front": "<Question or Term to recall 3>",
      "back": "<Answer or definition 3>"
    }
  ]
}

- Keep the language professional, authoritative, and emoji-free.
- Cover all military/defence aspects if applicable (e.g. if topic is related to defence tech, include weapons, operators, combat history).
- Ensure the output is strictly valid JSON only. Do not wrap in markdown blocks like \`\`\`json.`;

  try {
    const response = await fetch('http://localhost:4000/api/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'gemini-3-flash-preview',
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          response_mime_type: 'application/json',
          temperature: 0.1
        }
      })
    });

    if (!response.ok) throw new Error("API call failed");
    const data = await response.json();
    let resText = data.candidates[0].content.parts[0].text;
    const cleaned = resText.replace(/^```json\s*/,'').replace(/\s*```$/,'').trim();
    const result = JSON.parse(cleaned);
    
    renderDronacharyaModalContent(modal, topicName, result);
  } catch (err) {
    console.error("Dronacharya doubt error:", err);
    modal.innerHTML = `
      <div style="background: rgba(17, 24, 39, 0.95); border: 1px solid var(--danger); border-radius: 12px; width: 90%; max-width: 600px; padding: 24px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);">
        <h3 style="color: var(--danger); margin-bottom: 12px;">Guru Uplink Interrupted</h3>
        <p style="color: var(--text-secondary); margin-bottom: 20px;">Dronacharya is currently meditating or the tactical network is offline. ${err.message}</p>
        <button onclick="document.getElementById('dronacharya-quick-doubt-modal').style.display='none'" class="btn-primary">Acknowledge</button>
      </div>
    `;
  }
}

function popDoubtHistory() {
  if (doubtHistory.length > 1) {
    doubtHistory.pop(); // Pop current
    const prev = doubtHistory.pop(); // Pop previous to reload it
    showDronacharyaQuickDoubt(prev, true);
  }
}

function renderDronacharyaModalContent(modal, topicName, data) {
  modal.innerHTML = `
    <div style="
      background: rgba(17, 24, 39, 0.98);
      border: 1px solid rgba(168, 85, 247, 0.3);
      border-radius: 12px;
      width: 92%;
      max-width: 800px;
      height: 82vh;
      display: flex;
      flex-direction: column;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 50px rgba(168, 85, 247, 0.15);
      overflow: hidden;
    ">
      <!-- Header -->
      <div style="
        padding: 16px 20px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: rgba(0, 0, 0, 0.3);
      ">
        <div style="display: flex; align-items: center; gap: 10px;">
          ${doubtHistory.length > 1 ? `
            <button id="dronacharya-back-btn" style="
              background: rgba(255,255,255,0.06);
              border: 1px solid rgba(255,255,255,0.12);
              color: var(--text-primary);
              padding: 4px 10px;
              border-radius: 4px;
              cursor: pointer;
              font-size: 0.78rem;
              font-family: var(--font-mono);
            ">← BACK</button>
          ` : ''}
          <span style="font-size: 1.15rem; font-weight: 700; color: var(--accent); letter-spacing: 0.5px;">🎓 Ask Dronacharya: ${topicName}</span>
        </div>
        <button onclick="document.getElementById('dronacharya-quick-doubt-modal').style.display='none'" style="
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-size: 1.6rem;
          cursor: pointer;
          line-height: 1;
        ">&times;</button>
      </div>

      <!-- Tab bar -->
      <div id="dronacharya-tabs" style="
        display: flex;
        background: rgba(0,0,0,0.15);
        border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        overflow-x: auto;
      ">
        <button class="dron-tab active" data-tab="quick" style="flex: 1; padding: 12px 8px; border: none; border-bottom: 2px solid var(--accent); background: transparent; color: var(--text-primary); font-weight: 600; font-size: 0.82rem; cursor: pointer; text-transform: uppercase; letter-spacing: 0.5px;">Quick Info</button>
        <button class="dron-tab" data-tab="detailed" style="flex: 1; padding: 12px 8px; border: none; border-bottom: 2px solid transparent; background: transparent; color: var(--text-muted); font-weight: 600; font-size: 0.82rem; cursor: pointer; text-transform: uppercase; letter-spacing: 0.5px;">Detailed Analysis</button>
        <button class="dron-tab" data-tab="relevance" style="flex: 1; padding: 12px 8px; border: none; border-bottom: 2px solid transparent; background: transparent; color: var(--text-muted); font-weight: 600; font-size: 0.82rem; cursor: pointer; text-transform: uppercase; letter-spacing: 0.5px;">Exam Relevance</button>
        <button class="dron-tab" data-tab="questions" style="flex: 1; padding: 12px 8px; border: none; border-bottom: 2px solid transparent; background: transparent; color: var(--text-muted); font-weight: 600; font-size: 0.82rem; cursor: pointer; text-transform: uppercase; letter-spacing: 0.5px;">Practice Qs</button>
        <button class="dron-tab" data-tab="flashcards" style="flex: 1; padding: 12px 8px; border: none; border-bottom: 2px solid transparent; background: transparent; color: var(--text-muted); font-weight: 600; font-size: 0.82rem; cursor: pointer; text-transform: uppercase; letter-spacing: 0.5px;">Flashcards</button>
      </div>

      <!-- Tab Content Area -->
      <div id="dronacharya-content" style="flex: 1; overflow-y: auto; padding: 24px; color: var(--text-primary); line-height: 1.7; font-size: 0.92rem;">
        <!-- Loaded dynamically -->
      </div>

      <!-- Footer Action Area -->
      <div style="
        padding: 14px 20px;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        background: rgba(0, 0, 0, 0.2);
        display: flex;
        justify-content: space-between;
        align-items: center;
      ">
        <span style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono);">SOURCE INTEGRITY: TIER 1 PIB & DEFENCE LAWS</span>
        <button id="dronacharya-open-full-btn" class="btn-primary" style="padding: 6px 14px; font-size: 0.8rem; border-radius: 6px; font-weight: 600;">Open Full Topic Note</button>
      </div>
    </div>
  `;

  const contentArea = modal.querySelector('#dronacharya-content');
  const tabs = modal.querySelectorAll('.dron-tab');
  const backBtn = modal.querySelector('#dronacharya-back-btn');
  const fullBtn = modal.querySelector('#dronacharya-open-full-btn');

  if (backBtn) {
    backBtn.onclick = popDoubtHistory;
  }

  // Handle Full Topic Note opening
  fullBtn.onclick = () => {
    modal.style.display = 'none';
    
    // Check if we can find this topic in NOTES_DATABASE
    let foundSubjectId = null;
    let foundChapterId = null;
    let foundTopicId = null;

    if (typeof NOTES_DATABASE !== 'undefined') {
      const query = topicName.toLowerCase();
      for (const [subId, sub] of Object.entries(NOTES_DATABASE)) {
        for (const chap of sub.chapters) {
          for (const top of chap.topics) {
            if (top.title.toLowerCase() === query || top.id.toLowerCase() === query || query.includes(top.title.toLowerCase())) {
              foundSubjectId = subId;
              foundChapterId = chap.id;
              foundTopicId = top.id;
              break;
            }
          }
          if (foundTopicId) break;
        }
        if (foundTopicId) break;
      }
    }

    if (foundTopicId && typeof switchScreen === 'function') {
      selectedSubjectId = foundSubjectId;
      selectedChapterId = foundChapterId;
      selectedTopicId = foundTopicId;
      switchScreen('notes');
      if (typeof renderNotesBrowser === 'function') {
        renderNotesBrowser();
      }
    } else {
      // If not found, open AI Console and solve it
      if (typeof switchScreen === 'function') {
        switchScreen('ai-console');
      }
      const solveRadio = document.querySelector('input[name="ai-mode"][value="solve"]');
      if (solveRadio) {
        solveRadio.checked = true;
        solveRadio.dispatchEvent(new Event('change', { bubbles: true }));
      }
      const inputEl = document.getElementById("ai-custom-topic-input");
      if (inputEl) {
        inputEl.value = topicName;
      }
      if (typeof triggerAiSolveDoubt === 'function') {
        triggerAiSolveDoubt(null, topicName, "Doubt Link");
      }
    }
  };

  const switchTab = (tabName) => {
    tabs.forEach(t => {
      if (t.getAttribute('data-tab') === tabName) {
        t.classList.add('active');
        t.style.borderBottomColor = 'var(--accent)';
        t.style.color = 'var(--text-primary)';
      } else {
        t.classList.remove('active');
        t.style.borderBottomColor = 'transparent';
        t.style.color = 'var(--text-muted)';
      }
    });

    if (tabName === 'quick') {
      contentArea.innerHTML = `
        <div style="font-size: 1.05rem; line-height: 1.8; color: var(--text-primary);">
          ${parseWikiLinks(data.quickExplanation)}
        </div>
      `;
    } else if (tabName === 'detailed') {
      contentArea.innerHTML = `
        <div style="font-size: 0.92rem; line-height: 1.75; color: var(--text-secondary);">
          ${parseWikiLinks(data.detailedExplanation)}
        </div>
      `;
    } else if (tabName === 'relevance') {
      let treeHtml = "";
      if (data.conceptTree) {
        treeHtml = `
          <div style="margin-top: 24px; padding-top: 18px; border-top: 1px solid rgba(255,255,255,0.06);">
            <h4 style="color: var(--accent); margin-bottom: 12px; font-size: 0.95rem;">Concept Tree Mapping</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
              <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.05);">
                <div style="font-weight: bold; font-size: 0.78rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 6px;">Prerequisites</div>
                <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                  ${data.conceptTree.prerequisites.map(p => `<span style="font-size: 0.8rem; background: rgba(168,85,247,0.1); color: var(--accent); padding: 2px 8px; border-radius: 4px; border: 1px solid rgba(168,85,247,0.2); cursor: pointer;" onclick="showDronacharyaQuickDoubt('${p.replace(/'/g, "\\'")}', true)">${p}</span>`).join('')}
                </div>
              </div>
              <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.05);">
                <div style="font-weight: bold; font-size: 0.78rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 6px;">Advanced Topics</div>
                <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                  ${data.conceptTree.advancedTopics.map(a => `<span style="font-size: 0.8rem; background: rgba(34,197,94,0.1); color: var(--success); padding: 2px 8px; border-radius: 4px; border: 1px solid rgba(34,197,94,0.2); cursor: pointer;" onclick="showDronacharyaQuickDoubt('${a.replace(/'/g, "\\'")}', true)">${a}</span>`).join('')}
                </div>
              </div>
            </div>
          </div>
        `;
      }

      contentArea.innerHTML = `
        <div>
          <h4 style="color: var(--accent); margin-bottom: 12px; font-size: 0.95rem;">Exam Importance Matrix</h4>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 20px;">
            <div style="background: rgba(59,130,246,0.1); border: 1px solid rgba(59,130,246,0.2); padding: 10px; border-radius: 6px; text-align: center;">
              <div style="font-weight: bold; font-size: 0.75rem; color: #60a5fa; text-transform: uppercase;">NDA</div>
              <div style="font-size: 1rem; font-weight: 700; margin-top: 4px; color: var(--text-primary);">${data.examRelevance.NDA}</div>
            </div>
            <div style="background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.2); padding: 10px; border-radius: 6px; text-align: center;">
              <div style="font-weight: bold; font-size: 0.75rem; color: #4ade80; text-transform: uppercase;">CDS</div>
              <div style="font-size: 1rem; font-weight: 700; margin-top: 4px; color: var(--text-primary);">${data.examRelevance.CDS}</div>
            </div>
            <div style="background: rgba(234,179,8,0.1); border: 1px solid rgba(234,179,8,0.2); padding: 10px; border-radius: 6px; text-align: center;">
              <div style="font-weight: bold; font-size: 0.75rem; color: #facc15; text-transform: uppercase;">AFCAT</div>
              <div style="font-size: 1rem; font-weight: 700; margin-top: 4px; color: var(--text-primary);">${data.examRelevance.AFCAT}</div>
            </div>
            <div style="background: rgba(249,115,22,0.1); border: 1px solid rgba(249,115,22,0.2); padding: 10px; border-radius: 6px; text-align: center;">
              <div style="font-weight: bold; font-size: 0.75rem; color: #fb923c; text-transform: uppercase;">UPSC</div>
              <div style="font-size: 1rem; font-weight: 700; margin-top: 4px; color: var(--text-primary);">${data.examRelevance.UPSC}</div>
            </div>
          </div>
          <p style="font-size: 0.88rem; color: var(--text-secondary); background: rgba(0,0,0,0.12); padding: 12px; border-radius: 6px; border-left: 3px solid var(--accent); margin-bottom: 20px;">
            <strong>Cadet Exam Note:</strong> ${data.examRelevance.analysis}
          </p>
          ${treeHtml}
        </div>
      `;
    } else if (tabName === 'questions') {
      contentArea.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <h4 style="color: var(--accent); margin: 0; font-size: 0.95rem;">Interactive Training Questions</h4>
          ${data.practiceQuestions.map((q, idx) => `
            <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 16px; border-radius: 8px;">
              <div style="font-weight: 600; margin-bottom: 10px; font-size: 0.9rem;">Q${idx+1}. ${q.question}</div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px;">
                ${q.options.map((opt, oIdx) => `
                  <button class="btn-option-${idx}-${oIdx}" onclick="checkQuickDoubtOption(${idx}, ${oIdx}, ${q.correctIndex})" style="
                    text-align: left;
                    padding: 8px 12px;
                    background: rgba(0, 0, 0, 0.2);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    color: var(--text-secondary);
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 0.85rem;
                    transition: all 0.2s ease;
                  ">${opt}</button>
                `).join('')}
              </div>
              <div id="qd-explanation-${idx}" style="display: none; font-size: 0.8rem; line-height: 1.5; color: var(--text-secondary); padding: 10px; background: rgba(0,0,0,0.15); border-radius: 5px; border-left: 2px solid var(--accent);">
                <strong>Explanation:</strong> ${q.explanation}
              </div>
            </div>
          `).join('')}
        </div>
      `;
    } else if (tabName === 'flashcards') {
      contentArea.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <h4 style="color: var(--accent); margin: 0; font-size: 0.95rem;">Rapid Recall Flashcards</h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
            ${data.flashcards.map((f, idx) => `
              <div onclick="flipQuickFlashcard(this)" style="
                background: rgba(168, 85, 247, 0.05);
                border: 1px solid rgba(168, 85, 247, 0.15);
                border-radius: 8px;
                height: 130px;
                perspective: 1000px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                padding: 16px;
                position: relative;
                transition: transform 0.6s;
                transform-style: preserve-3d;
              ">
                <div class="fc-front" style="
                  backface-visibility: hidden;
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  padding: 10px;
                  color: var(--accent);
                  font-weight: 600;
                  font-size: 0.88rem;
                ">
                  ${f.front}
                </div>
                <div class="fc-back" style="
                  backface-visibility: hidden;
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  padding: 10px;
                  color: var(--text-secondary);
                  font-size: 0.82rem;
                  transform: rotateY(180deg);
                  background: rgba(0, 0, 0, 0.4);
                  border-radius: 8px;
                ">
                  ${f.back}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
    
    if (window.MathJax && typeof window.MathJax.typeset === 'function') {
      window.MathJax.typeset();
    }
  };

  // Bind tab click events
  tabs.forEach(t => {
    t.onclick = (e) => {
      const tabName = e.target.getAttribute('data-tab');
      switchTab(tabName);
    };
  });

  // Load initial tab
  switchTab('quick');
}

// Global helpers for interactive elements in Dronacharya popover
window.checkQuickDoubtOption = function(qIdx, oIdx, correctIdx) {
  const container = document.getElementById(`qd-explanation-${qIdx}`);
  const btns = document.querySelectorAll(`.btn-option-${qIdx}`);
  
  btns.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === correctIdx) {
      btn.style.background = 'rgba(34, 197, 94, 0.15)';
      btn.style.borderColor = 'rgba(34, 197, 94, 0.4)';
      btn.style.color = '#4ade80';
    } else if (idx === oIdx) {
      btn.style.background = 'rgba(239, 68, 68, 0.15)';
      btn.style.borderColor = 'rgba(239, 68, 68, 0.4)';
      btn.style.color = '#f87171';
    }
  });
  
  if (container) {
    container.style.display = 'block';
  }
};

window.flipQuickFlashcard = function(el) {
  if (el.style.transform === 'rotateY(180deg)') {
    el.style.transform = 'rotateY(0deg)';
  } else {
    el.style.transform = 'rotateY(180deg)';
  }
};

window.popDoubtHistory = popDoubtHistory;
window.showDronacharyaQuickDoubt = showDronacharyaQuickDoubt;

function triggerDoubtExplain(topicName) {
  showDronacharyaQuickDoubt(topicName, true);
}

// 4. Expose functions to global context
window.parseWikiLinks = parseWikiLinks;
window.triggerDoubtExplain = triggerDoubtExplain;
window.autoLinkConcepts = autoLinkConcepts;
window.initializeGlossary = initializeGlossary;

