// 15. ENGLISH VOCAB BUILDER MODULE
// ==========================================

let activeVocabWord = null;

function renderVocabBuilder() {
  if (!activeVocabWord) {
    getWordOfTheDay();
  } else {
    displayVocabWord(activeVocabWord);
  }
}

function getWordOfTheDay() {
  if (typeof ENGLISH_VOCAB_DB === 'undefined' || ENGLISH_VOCAB_DB.length === 0) {
    document.getElementById('vocab-word').innerText = "Database Offline";
    return;
  }
  
  // Create a predictable index based on today's date
  const today = new Date();
  const dateString = today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate();
  let hash = 0;
  for (let i = 0; i < dateString.length; i++) {
    hash = dateString.charCodeAt(i) + ((hash << 5) - hash);
  }
  hash = Math.abs(hash);
  
  const index = hash % ENGLISH_VOCAB_DB.length;
  activeVocabWord = ENGLISH_VOCAB_DB[index];
  
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('vocab-date-label').innerText = today.toLocaleDateString('en-US', dateOptions);
  
  displayVocabWord(activeVocabWord);
}

function loadRandomWord() {
  if (typeof ENGLISH_VOCAB_DB === 'undefined' || ENGLISH_VOCAB_DB.length === 0) return;
  
  const index = Math.floor(Math.random() * ENGLISH_VOCAB_DB.length);
  activeVocabWord = ENGLISH_VOCAB_DB[index];
  
  document.getElementById('vocab-date-label').innerText = "Random Word Mode";
  
  displayVocabWord(activeVocabWord);
}

function displayVocabWord(wordObj) {
  document.getElementById('vocab-word').innerText = wordObj.word.charAt(0).toUpperCase() + wordObj.word.slice(1);
  document.getElementById('vocab-pos').innerText = wordObj.pos || 'Unknown POS';
  document.getElementById('vocab-meaning').innerText = wordObj.meaning || 'No meaning provided.';
  
  const syns = wordObj.synonyms || wordObj.expected || 'None';
  document.getElementById('vocab-synonyms').innerText = syns;
  
  const ants = wordObj.antonyms || 'None';
  document.getElementById('vocab-antonyms').innerText = ants;
}

function startVocabQuiz() {
  if (typeof ENGLISH_VOCAB_DB === 'undefined' || ENGLISH_VOCAB_DB.length < 20) {
    alert("Vocab database is loading or offline.");
    return;
  }
  
  const quizContainer = document.getElementById('vocab-quiz-container');
  quizContainer.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">Generating high-yield drill...</p>';
  
  // Clear previous quiz state
  window.vocabQuizState = {};
  
  // Pick 5 random questions
  const questions = [];
  while(questions.length < 5) {
    const w = ENGLISH_VOCAB_DB[Math.floor(Math.random() * ENGLISH_VOCAB_DB.length)];
    // Ensure word has synonyms/antonyms
    if (!w.synonyms || w.synonyms === '—' || !w.antonyms || w.antonyms === '—') continue;
    
    // Type 0: Synonym, Type 1: Antonym
    const type = Math.random() > 0.5 ? 'synonym' : 'antonym';
    const correctAns = type === 'synonym' ? w.synonyms.split(',')[0].trim() : w.antonyms.split(',')[0].trim();
    
    // Pick 3 wrong options from other words
    const options = [correctAns];
    while(options.length < 4) {
      const wrongW = ENGLISH_VOCAB_DB[Math.floor(Math.random() * ENGLISH_VOCAB_DB.length)];
      if (wrongW.word !== w.word) {
        let wrongAns = '';
        if (type === 'synonym' && wrongW.synonyms && wrongW.synonyms !== '—') {
          wrongAns = wrongW.synonyms.split(',')[0].trim();
        } else if (type === 'antonym' && wrongW.antonyms && wrongW.antonyms !== '—') {
          wrongAns = wrongW.antonyms.split(',')[0].trim();
        } else {
          wrongAns = wrongW.word;
        }
        
        if (wrongAns && !options.includes(wrongAns)) {
          options.push(wrongAns);
        }
      }
    }
    
    // Shuffle options
    options.sort(() => Math.random() - 0.5);
    
    questions.push({
      word: w.word,
      type: type,
      options: options,
      correct: correctAns
    });
  }
  
  // Render Quiz
  let html = `<div style="background: rgba(0,0,0,0.2); padding: 16px; border-radius: 8px;">`;
  questions.forEach((q, idx) => {
    html += `
      <div class="vocab-q-card" style="margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px solid rgba(255,255,255,0.05);">
        <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 12px; font-size: 1.05rem;">
          <span style="color: var(--accent); margin-right: 8px;">Q${idx+1}.</span> 
          What is the closest <strong style="color: ${q.type === 'synonym' ? 'var(--info)' : 'var(--danger)'}; text-transform: uppercase;">${q.type}</strong> of the word <em>"${q.word.toUpperCase()}"</em>?
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
    `;
    
    q.options.forEach((opt, oIdx) => {
      html += `
        <button class="exam-btn vocab-opt-btn" id="vocab-opt-${idx}-${oIdx}" style="text-align: left; background: rgba(255,255,255,0.03);" onclick="checkVocabAnswer(${idx}, ${oIdx}, '${opt.replace(/'/g, "\\'")}', '${q.correct.replace(/'/g, "\\'")}')">
          ${String.fromCharCode(65 + oIdx)}. ${opt}
        </button>
      `;
    });
    
    html += `
        </div>
        <div id="vocab-feedback-${idx}" style="margin-top: 12px; font-size: 0.9rem; display: none;"></div>
      </div>
    `;
  });
  
  html += `
    <div style="text-align: center; margin-top: 20px;">
      <button class="btn-primary" onclick="startVocabQuiz()" style="width: auto; padding: 10px 24px;">Generate New Drill</button>
    </div>
  </div>`;
  
  quizContainer.innerHTML = html;
}

window.vocabQuizState = {};

function checkVocabAnswer(qIdx, oIdx, selectedOpt, correctOpt) {
  // Prevent double clicking
  if (window.vocabQuizState[qIdx]) return;
  window.vocabQuizState[qIdx] = true;
  
  const isCorrect = selectedOpt === correctOpt;
  const btn = document.getElementById(`vocab-opt-${qIdx}-${oIdx}`);
  const feedback = document.getElementById(`vocab-feedback-${qIdx}`);
  
  // Disable all buttons in this question
  for(let i=0; i<4; i++) {
    const b = document.getElementById(`vocab-opt-${qIdx}-${i}`);
    if(b) b.style.opacity = "0.5";
    if(b && b.innerText.includes(correctOpt)) {
      b.style.background = "rgba(34, 197, 94, 0.2)";
      b.style.borderColor = "var(--accent)";
      b.style.opacity = "1";
    }
  }
  
  if (isCorrect) {
    btn.style.background = "rgba(34, 197, 94, 0.2)";
    btn.style.borderColor = "var(--accent)";
    feedback.innerHTML = `<span style="color: var(--accent); font-weight: 600;">Correct!</span>`;
  } else {
    btn.style.background = "rgba(239, 68, 68, 0.2)";
    btn.style.borderColor = "var(--danger)";
    btn.style.opacity = "1";
    feedback.innerHTML = `<span style="color: var(--danger); font-weight: 600;">Incorrect.</span> The correct answer was <strong>${correctOpt}</strong>.`;
  }
  
  feedback.style.display = "block";
}

window.renderVocabBuilder = renderVocabBuilder;
window.getWordOfTheDay = getWordOfTheDay;
window.loadRandomWord = loadRandomWord;
window.displayVocabWord = displayVocabWord;
window.startVocabQuiz = startVocabQuiz;
window.checkVocabAnswer = checkVocabAnswer;

// ==========================================
// TACTICAL SCRATCHPAD CANVAS DRAWING LOGIC
// ==========================================
let scratchpadIsDrawing = false;
let scratchpadContext = null;
let scratchpadCanvas = null;

function initScratchpad() {
  scratchpadCanvas = document.getElementById('cbt-scratchpad-canvas');
  if (!scratchpadCanvas) return;
  scratchpadContext = scratchpadCanvas.getContext('2d');
  
  const rect = scratchpadCanvas.getBoundingClientRect();
  scratchpadCanvas.width = rect.width;
  scratchpadCanvas.height = rect.height;
  
  scratchpadContext.strokeStyle = '#0ea5e9'; // Accent Sky Blue
  scratchpadContext.lineWidth = 4;
  scratchpadContext.lineCap = 'round';
  scratchpadContext.lineJoin = 'round';
  
  // Mouse Event Listeners
  scratchpadCanvas.addEventListener('mousedown', startDrawing);
  scratchpadCanvas.addEventListener('mousemove', draw);
  scratchpadCanvas.addEventListener('mouseup', stopDrawing);
  scratchpadCanvas.addEventListener('mouseout', stopDrawing);
  
  // Touch Event Listeners for mobile/tablet support
  scratchpadCanvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousedown', {
      clientX: touch.clientX,
      clientY: touch.clientY
    });
    scratchpadCanvas.dispatchEvent(mouseEvent);
  });
  scratchpadCanvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousemove', {
      clientX: touch.clientX,
      clientY: touch.clientY
    });
    scratchpadCanvas.dispatchEvent(mouseEvent);
  });
  scratchpadCanvas.addEventListener('touchend', (e) => {
    e.preventDefault();
    const mouseEvent = new MouseEvent('mouseup', {});
    scratchpadCanvas.dispatchEvent(mouseEvent);
  });
}

function startDrawing(e) {
  scratchpadIsDrawing = true;
  if (!scratchpadContext) return;
  const rect = scratchpadCanvas.getBoundingClientRect();
  scratchpadContext.beginPath();
  scratchpadContext.moveTo(e.clientX - rect.left, e.clientY - rect.top);
}

function draw(e) {
  if (!scratchpadIsDrawing || !scratchpadContext) return;
  const rect = scratchpadCanvas.getBoundingClientRect();
  
  const sizeSelect = document.getElementById('scratchpad-size');
  if (sizeSelect) {
    scratchpadContext.lineWidth = parseInt(sizeSelect.value);
  }
  
  scratchpadContext.lineTo(e.clientX - rect.left, e.clientY - rect.top);
  scratchpadContext.stroke();
}

function stopDrawing() {
  scratchpadIsDrawing = false;
}

function toggleScratchpad() {
  const container = document.getElementById('cbt-scratchpad-container');
  if (!container) return;
  
  if (container.style.display === 'none' || container.style.display === '') {
    container.style.display = 'flex';
    setTimeout(() => {
      initScratchpad();
    }, 100);
  } else {
    container.style.display = 'none';
  }
}

function clearScratchpad() {
  if (!scratchpadCanvas || !scratchpadContext) return;
  scratchpadContext.clearRect(0, 0, scratchpadCanvas.width, scratchpadCanvas.height);
}

window.toggleScratchpad = toggleScratchpad;
window.clearScratchpad = clearScratchpad;

// =============================================================================
// TACTICAL WAR ROOM & AUDIO HUD SYSTEMS
// =============================================================================

// Map Hotspot Data
const MAP_BRIEFINGS = {
  siachen: {
    title: "Siachen Glacier (Operation Meghdoot)",
    desc: "1. Siachen Glacier is the highest battlefield in the world, located in the eastern Karakoram range.\n2. In April 1984, India launched Operation Meghdoot to pre-empt Pakistan's troop movement.\n3. The military operation secured control of the entire glacier and its key passes.\n4. Saltoro Ridge, which guards the glacier from the west, is fully controlled by Indian posts.\n5. Important passes to remember: Bilafond La, Sia La, and Gyong La.\n6. Aspirants must study extreme high-altitude logistics, avalanche risks, and hypoxia effects.\n7. The region acts as a wedge between Pakistan-occupied Kashmir and Shaksgam Valley (China).\n8. Troops are deployed at altitudes exceeding 18,000 feet in freezing sub-zero conditions.\n9. Operation Meghdoot remains one of the most successful mountain warfare campaigns in history.\n10. The strategic control of Siachen prevents a joint militarized front by Pakistan and China."
  },
  kargil: {
    title: "Kargil Sector (Operation Vijay)",
    desc: "1. The Kargil War of 1999 was fought along the Line of Control (LoC) in Ladakh.\n2. Operation Vijay was launched to clear infiltrations from key peaks like Tiger Hill and Tololing.\n3. The conflict took place at extreme altitudes (11,000 to 18,000 feet) in rugged terrain.\n4. NH 1D (Srinagar-Leh Highway) was the primary target of Pakistani shelling from high heights.\n5. Defence exams cover Bofors artillery, MiG-29 air superiority, and Operation Safed Sagar (IAF).\n6. The war ended on 26th July 1999, commemorated annually as Kargil Vijay Diwas.\n7. It highlighted critical gaps in military intelligence, border surveillance, and UAV requirements.\n8. The Kargil Review Committee recommendations led to the creation of the Chief of Defence Staff (CDS).\n9. Captain Vikram Batra and Lt. Manoj Pandey were awarded Param Vir Chakra posthumously.\n10. Mountain warfare doctrine and artillery integration are key syllabus topics based on this war."
  },
  galwan: {
    title: "Galwan Valley (Border Standoff)",
    desc: "1. The Galwan River Valley in eastern Ladakh is located along the Line of Actual Control (LAC).\n2. A major military standoff occurred in June 2020, resulting in hand-to-hand combat casualties.\n3. The region is named after Ghulam Rasool Galwan, a Ladakhi explorer of the late 19th century.\n4. The valley is highly strategic as it lies close to the Darbuk-Shyok-Daulat Beg Oldie (DSDBO) road.\n5. The DSDBO road is critical for India to connect Leh to the Karakoram Pass.\n6. Border agreements like 1993, 1996, and 2005 disallow firing of weapons within 2 km of LAC.\n7. In exams, geography of Shyok river, Chang Chenmo range, and Pangong Tso are heavily featured.\n8. The standoff led to massive military mirror-deployments and infrastructure build-ups on both sides.\n9. Infrastructure upgrades include bridges, all-weather tunnels (like Atal Tunnel), and troop shelters.\n10. Understanding border management agencies (ITBP and Indian Army) is critical for defence papers."
  },
  chabahar: {
    title: "Chabahar Port (Iran - Strategic Transit Node)",
    desc: "1. Chabahar Port is located in southeastern Iran on the Gulf of Oman, outside the Persian Gulf.\n2. It provides India direct access to Afghanistan and Central Asia, bypassing Pakistan.\n3. India signed a tripartite agreement in 2016 to develop the port and the Chabahar-Zahedan railway.\n4. It serves as a key gateway for the International North-South Transport Corridor (INSTC).\n5. Strategically, it counterbalances China's development of Gwadar Port in Pakistan (72 km away).\n6. For the Indian Navy, it secures energy transit lanes in the Gulf of Oman and northern Arabian Sea.\n7. Afghanistan is connected via the Zaranj-Delaram highway built by India's Border Roads Organisation (BRO).\n8. It is India's first overseas port project, showing strategic depth in maritime foreign policy.\n9. Chabahar is a tax-free zone, facilitating duty-free trading, warehousing, and trade routes.\n10. Maritime diplomacy, maritime security, and security of Indian Ocean choke points are tested."
  },
  malacca: {
    title: "Malacca Strait (Indian Ocean Choke Point)",
    desc: "1. The Strait of Malacca is the primary maritime shipping channel between the Indian Ocean and South China Sea.\n2. Over 25% of global trade and energy passes through this narrow 1.5-mile choke point.\n3. The Andaman and Nicobar Command (ANC), India's only tri-service command, guards its western entrance.\n4. In the event of conflict, India's naval dominance at the strait poses a 'Malacca Dilemma' for China.\n5. Security patrols (like Coordinated Patrols - CORPAT) are held with Indonesia, Thailand, and Malaysia.\n6. The Navy utilizes strategic bases in Great Nicobar (INS Baaz) to monitor ship transits.\n7. Deep-sea cables, submarine paths, and sea lines of communication (SLOC) are monitored here.\n8. Piracy, maritime terrorism, and freedom of navigation are major regional security challenges.\n9. The strait is bordered by Singapore, Malaysia, and Indonesia, forming a key economic corridor.\n10. Geopolitics of the Indo-Pacific and maritime domain awareness (MDA) are regular CDS exam topics."
  }
};

// Flashcard Decks Data
const FLASHCARD_DECKS = {
  important_dates: [
    { q: "Pravasi Bharatiya Divas (Jan 9)", a: "Marks return of Mahatma Gandhi from South Africa in 1915; honors overseas Indian diaspora contributions." },
    { q: "Indian Army Day (Jan 15)", a: "Marks Field Marshal K. M. Cariappa taking over command in 1949, transferring authority from British military." },
    { q: "National Voters' Day (Jan 25)", a: "Marks the foundation day of the Election Commission of India in 1950, promoting democratic participation." },
    { q: "National Technology Day (May 11)", a: "Commemorates the successful Pokhran-II nuclear tests in 1998 under Operation Shakti." },
    { q: "Constitution Day (Nov 26)", a: "Commemorates the formal adoption of the Constitution by the Constituent Assembly in 1949." }
  ],
  military_operations: [
    { q: "Operation Trident (1971)", a: "Decisive Indian Navy attack on Karachi harbor using missile boats, now celebrated as Navy Day on Dec 4." },
    { q: "Operation Meghdoot (1984)", a: "Indian Army operation securing the strategic Siachen Glacier, preempting Pakistani troop movements." },
    { q: "Operation Cactus (1988)", a: "India's airborne and naval military assistance securing the Maldives against a coup attempt by mercenaries." },
    { q: "Operation Vijay (1999)", a: "Military campaign that successfully evicted infiltrators from Kargil, culminating on July 26." },
    { q: "Operation Pawan (1987)", a: "Peacekeeping mandate of the IPKF in northern and eastern Sri Lanka to disarm militant groups." }
  ],
  strategic_weapons: [
    { q: "BrahMos supersonic cruise missile", a: "Joint venture between DRDO (India) and NPO Mashinostroyeniya (Russia). Multi-platform, supersonic (~Mach 3)." },
    { q: "Agni-V ballistic missile", a: "India's intercontinental ballistic missile (ICBM) with a solid-fueled range exceeding 5,000 km." },
    { q: "S-400 Triumf air defence", a: "Mobile surface-to-air missile (SAM) defense system procured from Russia, covering range up to 400 km." },
    { q: "INS Arihant (S73)", a: "India's lead ship of nuclear-powered ballistic missile submarines, completing the nuclear triad." },
    { q: "Tejas LCA", a: "Indigenously developed delta-wing, single-engine multirole light combat aircraft developed by HAL." }
  ],
  defence_abbreviations: [
    { q: "IGMDP", a: "Integrated Guided Missile Development Programme - conceived by Dr. Kalam (developed Prithvi, Trishul, Akash, Nag, Agni)." },
    { q: "IDS", a: "Integrated Defence Staff - established in 2001 to promote synergy and coordination among the three service branches." },
    { q: "MAD", a: "Mutual Assured Destruction - nuclear deterrence doctrine guaranteeing complete annihilation of both attacker and defender." },
    { q: "EEZ", a: "Exclusive Economic Zone - sea zone over which a state has special rights (up to 200 nautical miles from coastline)." },
    { q: "CORPAT", a: "Coordinated Patrol - bilateral maritime patrols held by the Indian Navy with neighboring friendly nations." }
  ]
};

// Leitner Spaced Repetition State
let leitnerState = {};
let currentDeck = "important_dates";
let currentCardIndex = -1;

function initWarRoom() {
  switchWarRoomTab('map');
  loadFlashcardDeck();
  initSimulatorCanvas();
}

function switchWarRoomTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    if (btn.id.startsWith('war-room-tab-')) {
      btn.classList.remove('active');
    }
  });
  const activeBtn = document.getElementById(`war-room-tab-${tabId}`);
  if (activeBtn) activeBtn.classList.add('active');

  document.querySelectorAll('.war-room-pane').forEach(pane => {
    pane.classList.remove('active');
  });
  const activePane = document.getElementById(`pane-war-room-${tabId}`);
  if (activePane) activePane.classList.add('active');

  if (tabId === 'simulator') {
    setTimeout(initSimulatorCanvas, 100);
  }
}

// Map Hotspots
function selectMapHotspot(id) {
  const data = MAP_BRIEFINGS[id];
  if (!data) return;

  const titleEl = document.getElementById('map-briefing-title');
  const contentEl = document.getElementById('map-briefing-content');
  if (titleEl) titleEl.innerText = data.title;
  if (contentEl) {
    const listHtml = data.desc.split('\n').map(line => `<li style="margin-bottom: 8px; line-height:1.5; font-size:0.9rem;">${parseWikiLinks(line)}</li>`).join('');
    contentEl.innerHTML = `
      <ul style="list-style-type: none; padding-left: 0; text-align: left; margin: 0;">
        ${listHtml}
      </ul>
    `;
  }

  // Visual feedback on Map hotspots
  document.querySelectorAll('.map-hotspot').forEach(hotspot => {
    hotspot.querySelector('circle:nth-child(2)').style.fill = hotspot.id === `hotspot-${id}` ? 'var(--accent)' : '';
  });
}

// Leitner Spaced Repetition logic
function loadFlashcardDeck() {
  currentDeck = document.getElementById('flashcard-deck-selector').value;
  
  // Load levels from localStorage
  const saved = localStorage.getItem('tac-leitner-boxes');
  if (saved) {
    try { leitnerState = JSON.parse(saved); } catch(e) { leitnerState = {}; }
  } else {
    leitnerState = {};
  }

  // Initialize missing cards to Box 1
  FLASHCARD_DECKS[currentDeck].forEach(card => {
    const key = `${currentDeck}_${card.q}`;
    if (!leitnerState[key]) {
      leitnerState[key] = 1;
    }
  });

  saveLeitnerState();
  updateLeitnerStats();
  pickNextFlashcard();
}

function saveLeitnerState() {
  localStorage.setItem('tac-leitner-boxes', JSON.stringify(leitnerState));
}

function updateLeitnerStats() {
  const counts = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
  FLASHCARD_DECKS[currentDeck].forEach(card => {
    const key = `${currentDeck}_${card.q}`;
    const box = leitnerState[key] || 1;
    counts[box] = (counts[box] || 0) + 1;
  });

  const container = document.getElementById('leitner-stats-container');
  if (container) {
    container.innerHTML = Object.keys(counts).map(box => `
      <div class="leitner-box-item">
        <span>Box ${box} (${box === '1' ? 'Review Daily' : box === '5' ? 'Mastered' : 'Intermediate'})</span>
        <span class="leitner-box-badge">${counts[box]} cards</span>
      </div>
    `).join('');
  }
}

function pickNextFlashcard() {
  const cards = FLASHCARD_DECKS[currentDeck];
  
  // Group cards by box
  const boxes = {1: [], 2: [], 3: [], 4: [], 5: []};
  cards.forEach((card, index) => {
    const key = `${currentDeck}_${card.q}`;
    const box = leitnerState[key] || 1;
    boxes[box].push(index);
  });

  // Leitner weight probabilities: Box 1 (55%), Box 2 (25%), Box 3 (10%), Box 4 (7%), Box 5 (3%)
  const roll = Math.random() * 100;
  let targetBox = 1;
  if (roll < 55) targetBox = 1;
  else if (roll < 80) targetBox = 2;
  else if (roll < 90) targetBox = 3;
  else if (roll < 97) targetBox = 4;
  else targetBox = 5;

  let chosenPool = boxes[targetBox];
  if (chosenPool.length === 0) {
    // Fallback to any non-empty box
    for (let b = 1; b <= 5; b++) {
      if (boxes[b].length > 0) {
        chosenPool = boxes[b];
        break;
      }
    }
  }

  if (chosenPool && chosenPool.length > 0) {
    currentCardIndex = chosenPool[Math.floor(Math.random() * chosenPool.length)];
    const card = cards[currentCardIndex];
    
    // Reset Card Flip State
    const cardEl = document.getElementById('war-room-flashcard');
    if (cardEl) cardEl.parentElement.classList.remove('flipped');

    document.getElementById('flashcard-front-text').innerText = card.q;
    document.getElementById('flashcard-back-text').innerText = card.a;

    // Show reveal button, hide grading
    document.getElementById('flashcard-reveal-btn').style.display = 'block';
    document.getElementById('flashcard-grading-controls').style.display = 'none';
  }
}

function flipFlashcard() {
  const cardEl = document.getElementById('war-room-flashcard');
  if (cardEl) {
    cardEl.parentElement.classList.toggle('flipped');
  }
}

function revealFlashcard() {
  const cardEl = document.getElementById('war-room-flashcard');
  if (cardEl) {
    cardEl.parentElement.classList.add('flipped');
  }
  document.getElementById('flashcard-reveal-btn').style.display = 'none';
  document.getElementById('flashcard-grading-controls').style.display = 'flex';
}

function gradeFlashcard(boxAction) {
  const cards = FLASHCARD_DECKS[currentDeck];
  if (currentCardIndex === -1 || !cards[currentCardIndex]) return;

  const card = cards[currentCardIndex];
  const key = `${currentDeck}_${card.q}`;
  let currentBox = leitnerState[key] || 1;

  if (boxAction === 1) {
    currentBox = 1; // Send back to box 1
  } else if (boxAction === 2) {
    currentBox = Math.min(5, currentBox + 1); // Upgrade box level
  } else if (boxAction === 5) {
    currentBox = 5; // Direct Mastery
  }

  leitnerState[key] = currentBox;
  saveLeitnerState();
  updateLeitnerStats();
  pickNextFlashcard();
}

function resetLeitnerProgress() {
  if (confirm("Reset spaced repetition memory state for this deck?")) {
    FLASHCARD_DECKS[currentDeck].forEach(card => {
      const key = `${currentDeck}_${card.q}`;
      leitnerState[key] = 1;
    });
    saveLeitnerState();
    updateLeitnerStats();
    pickNextFlashcard();
  }
}

// Interactive Weapons & Radar Simulator
let simCanvas, simCtx;
let simInterval = null;
let missilePos = { x: 0, y: 0 };
let missileVelocity = { x: 0, y: 0 };
let isMissileFlying = false;
let simPath = [];
let simG = 0.08; // Custom gravity factor for canvas dimensions

function initSimulatorCanvas() {
  simCanvas = document.getElementById('weapons-sim-canvas');
  if (!simCanvas) return;
  simCtx = simCanvas.getContext('2d');
  
  // Set dimensions
  const rect = simCanvas.getBoundingClientRect();
  simCanvas.width = rect.width || 460;
  simCanvas.height = rect.height || 320;
  
  drawSimulator();
}

function drawSimulator() {
  if (!simCtx || !simCanvas) return;
  simCtx.clearRect(0, 0, simCanvas.width, simCanvas.height);
  
  // Draw ground
  simCtx.fillStyle = '#1e293b';
  simCtx.fillRect(0, simCanvas.height - 20, simCanvas.width, 20);
  
  // Sliders values
  const angle = parseInt(document.getElementById('input-sim-angle').value);
  const velocityPct = parseInt(document.getElementById('input-sim-velocity').value);
  const radarRadius = parseInt(document.getElementById('input-sim-radar').value);
  
  document.getElementById('label-sim-angle').innerText = `${angle}°`;
  document.getElementById('label-sim-velocity').innerText = `${velocityPct}%`;
  document.getElementById('label-sim-radar').innerText = `${radarRadius} km`;

  // Draw early warning Radar Dome (centered at X=200)
  const radarX = 220;
  const radarY = simCanvas.height - 20;
  
  // Draw radar coverage zone
  simCtx.beginPath();
  simCtx.arc(radarX, radarY, radarRadius * 0.6, Math.PI, 0); // scale radius for canvas sizing
  simCtx.fillStyle = 'rgba(22, 163, 74, 0.06)';
  simCtx.fill();
  simCtx.strokeStyle = 'rgba(22, 163, 74, 0.3)';
  simCtx.lineWidth = 1.5;
  simCtx.stroke();
  
  // Radar post
  simCtx.fillStyle = 'var(--accent)';
  simCtx.fillRect(radarX - 4, radarY - 10, 8, 10);
  
  // Draw Launch Platform
  simCtx.fillStyle = '#64748b';
  simCtx.fillRect(15, simCanvas.height - 30, 20, 10);

  // Draw vector pointer line
  const radians = (angle * Math.PI) / 180;
  const ptrLen = 35;
  simCtx.beginPath();
  simCtx.moveTo(25, simCanvas.height - 30);
  simCtx.lineTo(25 + Math.cos(radians) * ptrLen, simCanvas.height - 30 - Math.sin(radians) * ptrLen);
  simCtx.strokeStyle = 'var(--warning)';
  simCtx.lineWidth = 2;
  simCtx.stroke();

  // Draw trajectory trace
  if (simPath.length > 1) {
    simCtx.beginPath();
    simCtx.moveTo(simPath[0].x, simPath[0].y);
    for (let i = 1; i < simPath.length; i++) {
      simCtx.lineTo(simPath[i].x, simPath[i].y);
    }
    simCtx.strokeStyle = 'rgba(251, 191, 36, 0.5)';
    simCtx.lineWidth = 1.5;
    simCtx.stroke();
  }

  // Draw Missile
  if (isMissileFlying) {
    simCtx.beginPath();
    simCtx.arc(missilePos.x, missilePos.y, 4, 0, Math.PI * 2);
    simCtx.fillStyle = 'var(--danger)';
    simCtx.fill();
    simCtx.shadowColor = 'var(--danger)';
    simCtx.shadowBlur = 8;
    
    // Check if missile is in radar coverage dome
    const distToRadar = Math.hypot(missilePos.x - radarX, missilePos.y - radarY);
    if (distToRadar < (radarRadius * 0.6)) {
      // Draw radar sweep beam intercepting the missile
      simCtx.beginPath();
      simCtx.moveTo(radarX, radarY);
      simCtx.lineTo(missilePos.x, missilePos.y);
      simCtx.strokeStyle = 'rgba(239, 68, 68, 0.4)';
      simCtx.lineWidth = 1.5;
      simCtx.stroke();
      
      document.getElementById('sim-status-label').innerText = "RADAR INTERCEPT ACTIVE";
      document.getElementById('sim-status-label').style.color = "var(--danger)";
    } else {
      document.getElementById('sim-status-label').innerText = "FLIGHT IN PROGRESS";
      document.getElementById('sim-status-label').style.color = "var(--warning)";
    }
    simCtx.shadowBlur = 0; // reset
  }
}

// Cockpit Audio HUD & Verbal Speech Alerts
let audioContext = null;
let cockpitOsc = null;
let cockpitGain = null;

function toggleAudioHud(active) {
  if (active) {
    try {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      
      // Low cockpit engine rumble/drone
      cockpitOsc = audioContext.createOscillator();
      cockpitOsc.type = 'triangle';
      cockpitOsc.frequency.setValueAtTime(55, audioContext.currentTime); // 55Hz G1 rumble
      
      cockpitGain = audioContext.createGain();
      cockpitGain.gain.setValueAtTime(0.04, audioContext.currentTime); // low background volume
      
      cockpitOsc.connect(cockpitGain);
      cockpitGain.connect(audioContext.destination);
      cockpitOsc.start();
      
      announceVerbalHUD("Cockpit Audio HUD initialized. Tactical systems online.");
    } catch (e) {
      console.warn("AudioContext failed", e);
    }
  } else {
    // Terminate audio nodes
    if (cockpitOsc) {
      try { cockpitOsc.stop(); } catch(e) {}
      cockpitOsc.disconnect();
    }
    if (audioContext) {
      audioContext.close();
    }
    audioContext = null;
  }
}

function announceVerbalHUD(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.volume = 0.85;
    utterance.rate = 1.05;
    // Find an English male/robotic voice if available
    const voices = window.speechSynthesis.getVoices();
    const targetVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Natural')));
    if (targetVoice) utterance.voice = targetVoice;
    
    window.speechSynthesis.speak(utterance);
  }
}

// Intercept timer updates in app.js and speak alarms
setInterval(() => {
  const activeOverlay = document.getElementById('cbt-player-overlay');
  const toggle = document.getElementById('cbt-audio-hud-toggle');
  if (activeOverlay && activeOverlay.style.display !== 'none' && toggle && toggle.checked) {
    const timerText = document.getElementById('cbt-active-timer').innerText;
    // Check for remaining time thresholds
    if (timerText === "00:05:00") {
      announceVerbalHUD("Warning Cadet. Five minutes remaining to complete mission parameters.");
      triggerBeepAlert(880, 0.4);
    } else if (timerText === "00:01:00") {
      announceVerbalHUD("Alert: Critical warning. One minute remaining. Wrap up all calculations.");
      triggerBeepAlert(1200, 0.8);
    }
  }
}, 1000);

function triggerBeepAlert(freq, duration) {
  if (!audioContext) return;
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0.1, audioContext.currentTime);
  osc.connect(gain);
  gain.connect(audioContext.destination);
  osc.start();
  setTimeout(() => {
    osc.stop();
  }, duration * 1000);
}

// Export functions to global scope

window.toggleAudioHud = toggleAudioHud;

// Weekly Study Planner Logic
function initWeeklyPlanner() {
  const defaultPlan = {
    "Monday": { subject: "Mathematics", topic: "Trigonometric Identities", completed: false },
    "Tuesday": { subject: "English", topic: "Parts of Speech", completed: false },
    "Wednesday": { subject: "Polity", topic: "Fundamental Rights", completed: false },
    "Thursday": { subject: "History", topic: "Indus Valley Civilization", completed: false },
    "Friday": { subject: "Geography", topic: "Earth & Atmosphere", completed: false },
    "Saturday": { subject: "Science", topic: "Newton's Laws of Motion", completed: false },
    "Sunday": { subject: "CBT Mock Exam", topic: "Full Length NDA/CDS Mock", completed: false }
  };
  
  let plan = localStorage.getItem("tac-weekly-plan");
  if (!plan) {
    localStorage.setItem("tac-weekly-plan", JSON.stringify(defaultPlan));
  }
  renderWeeklyPlanner();
}

function renderWeeklyPlanner() {
  const container = document.getElementById("weekly-planner-container");
  if (!container) return;
  
  let plan = JSON.parse(localStorage.getItem("tac-weekly-plan"));
  if (!plan) return;
  
  container.innerHTML = "";
  
  const daysOrder = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
  daysOrder.forEach(day => {
    const dayData = plan[day];
    const card = document.createElement("div");
    card.style.background = "rgba(255, 255, 255, 0.03)";
    card.style.border = dayData.completed ? "1px solid rgba(34, 197, 94, 0.3)" : "1px solid rgba(255, 255, 255, 0.05)";
    card.style.borderRadius = "8px";
    card.style.padding = "12px";
    card.style.cursor = "pointer";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.justifyContent = "space-between";
    card.style.transition = "all 0.2s ease";
    card.style.minHeight = "110px";
    card.style.position = "relative";
    card.style.overflow = "hidden";
    
    // Hover effects
    card.addEventListener("mouseenter", () => {
      card.style.background = "rgba(255, 255, 255, 0.06)";
      card.style.border = "1px solid var(--accent)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.background = "rgba(255, 255, 255, 0.03)";
      card.style.border = dayData.completed ? "1px solid rgba(34, 197, 94, 0.3)" : "1px solid rgba(255, 255, 255, 0.05)";
    });
    
    // Content
    card.innerHTML = `
      <div>
        <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); font-weight: 700; margin-bottom: 6px; text-transform: uppercase;">${day}</div>
        <div style="font-weight: 600; font-size: 0.85rem; color: var(--text-primary); margin-bottom: 2px;">${dayData.subject}</div>
        <div style="font-size: 0.75rem; color: var(--text-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 120px;" title="${dayData.topic}">${dayData.topic}</div>
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:12px; gap:8px;">
        <span style="font-size:0.65rem; color:${dayData.completed ? '#4ade80' : 'var(--text-muted)'}; font-family:var(--font-mono); font-weight:700;">
          ${dayData.completed ? 'SUCCESS' : 'PENDING'}
        </span>
        <input type="checkbox" ${dayData.completed ? 'checked' : ''} onclick="event.stopPropagation(); toggleDayPlan('${day}')" style="cursor:pointer; width:14px; height:14px; accent-color:var(--accent);">
      </div>
    `;
    
    // Click to edit
    card.addEventListener("click", () => {
      editDayPlan(day);
    });
    
    container.appendChild(card);
  });
}

function toggleDayPlan(day) {
  let plan = JSON.parse(localStorage.getItem("tac-weekly-plan"));
  if (plan && plan[day]) {
    plan[day].completed = !plan[day].completed;
    localStorage.setItem("tac-weekly-plan", JSON.stringify(plan));
    renderWeeklyPlanner();
    
    // Add XP reward for completing study plans!
    if (plan[day].completed) {
      if (typeof STATE !== 'undefined' && STATE.userProfile) {
        STATE.userProfile.xp += 100;
        localStorage.setItem('tac-revise-state', JSON.stringify(STATE));
        initUserProfile();
      }
    }
  }
}

function editDayPlan(day) {
  let plan = JSON.parse(localStorage.getItem("tac-weekly-plan"));
  if (!plan || !plan[day]) return;
  
  const currentSubject = plan[day].subject;
  const currentTopic = plan[day].topic;
  
  const newSubject = prompt(`[MISSION RE-ASSIGNMENT] Enter Subject for ${day}:`, currentSubject);
  if (newSubject === null) return; // cancelled
  
  const newTopic = prompt(`[MISSION RE-ASSIGNMENT] Enter Topic/Target details:`, currentTopic);
  if (newTopic === null) return; // cancelled
  
  plan[day].subject = newSubject || "Rest Day";
  plan[day].topic = newTopic || "No target assigned";
  plan[day].completed = false; // Reset completed status on edit
  
  localStorage.setItem("tac-weekly-plan", JSON.stringify(plan));
  renderWeeklyPlanner();
}

window.initWeeklyPlanner = initWeeklyPlanner;
window.renderWeeklyPlanner = renderWeeklyPlanner;
window.toggleDayPlan = toggleDayPlan;
window.editDayPlan = editDayPlan;

window.renderSyllabusMasteryHeatmap = function() {
  const container = document.getElementById("dashboard-mastery-heatmap");
  if (!container) return;
  if (typeof NOTES_DATABASE === 'undefined') return;
  
  let html = "";
  for (const [subjectId, subject] of Object.entries(NOTES_DATABASE)) {
    let total = 0;
    let completed = 0;
    if (subject && subject.chapters) {
      subject.chapters.forEach(c => {
        if (c.topics) {
          c.topics.forEach(t => {
            total++;
            if (STATE.syllabusProgress && STATE.syllabusProgress[t.id] === 'completed') {
              completed++;
            }
          });
        }
      });
    }
    
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
    let color = "#ef4444"; // Red
    if (pct >= 80) color = "#22c55e"; // Green
    else if (pct >= 40) color = "#eab308"; // Yellow
    else if (pct > 0) color = "#f97316"; // Orange
    
    const displayName = subject.title || subjectId.charAt(0).toUpperCase() + subjectId.slice(1);
    
    html += `
      <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border); padding: 10px; border-radius: 6px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; align-items: center; min-height: 80px;">
        <span style="font-size: 0.72rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase; margin-bottom: 6px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100%;" title="${displayName}">${displayName}</span>
        <div style="width: 100%; height: 6px; background: rgba(255,255,255,0.08); border-radius: 3px; overflow: hidden; margin-bottom: 8px;">
          <div style="width: ${pct}%; height: 100%; background: ${color}; transition: width 0.3s ease;"></div>
        </div>
        <span style="font-family: var(--font-mono); font-size: 0.82rem; font-weight: bold; color: ${color};">${pct}%</span>
      </div>
    `;
  }
  
  container.innerHTML = html;
};

window.generateCustomTargets = async function() {
  const hours = document.getElementById("target-hours-input").value;
  const subjectId = document.getElementById("target-subject-select").value;
  const output = document.getElementById("custom-targets-output");
  
  if (!output) return;
  output.style.display = "block";
  output.innerHTML = `
    <div style="text-align: center;">
      <div class="cbt-spinner" style="border-color: var(--accent); border-top-color: transparent; width: 30px; height: 30px; border-width: 3px; margin: 0 auto 12px;"></div>
      <p style="color: var(--accent); font-family: var(--font-logo); font-size: 0.85rem; font-weight: 600;">FORMULATING REVISION BLUEPRINT...</p>
    </div>
  `;
  
  // Collect subject specific info
  const subject = NOTES_DATABASE[subjectId];
  let topicsList = [];
  if (subject && subject.chapters) {
    subject.chapters.forEach(c => {
      if (c.topics) {
        c.topics.forEach(t => {
          const status = (STATE.syllabusProgress && STATE.syllabusProgress[t.id]) || "uncompleted";
          topicsList.push(`- ${t.title} (${status})`);
        });
      }
    });
  }
  
  const prompt = `You are a high-ranking Indian military strategist and academic advisor.
The cadet wants to revise the subject "${subjectId.toUpperCase()}" during a ${hours}-hour study block.

Below is their current syllabus progress for this subject:
${topicsList.join('\n')}

Develop an hourly, high-yield tactical revision blueprint for this ${hours}-hour study block. 
Break down the allocation of time (e.g., 0-60 mins, 60-120 mins) and match them with specific topics, prioritizing their uncompleted topics. 
For each block, provide:
1. Revision objective
2. High-yield terms or formulas to focus on (wrap key terms in Wikipedia brackets, e.g. [[Fundamental Rights]] or [[Matrices]])
3. Strategic tip for memory retention

Format with clean, bold headings and simple HTML line breaks. Do NOT use any emojis, icons, or pictorial characters. Keep the tone strictly professional, inspiring, and military-oriented.`;

  try {
    const response = await fetch('/api/gemini', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "gemini-2.5-flash",
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.2 }
      })
    });
    
    if (response.ok) {
      const data = await response.json();
      if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts[0]) {
        let text = data.candidates[0].content.parts[0].text;
        let formattedText = text
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/\*(.*?)\*/g, '<em>$1</em>')
          .replace(/`([^`]+)`/g, '<code style="background-color:rgba(255,255,255,0.05); padding:2px 4px; border-radius:4px;">$1</code>')
          .replace(/^#{1,3} (.+)$/gm, '<h4 style="color:var(--accent); margin:12px 0 6px;">$1</h4>')
          .replace(/\n/g, '<br/>');
        
        output.innerHTML = `
          <h3 style="color: var(--accent); font-family: var(--font-logo); font-size: 1rem; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-bottom: 12px;">[ TACTICAL STUDY TARGET PLAN ]</h3>
          <div style="line-height: 1.7; font-size: 0.9rem; color: var(--text-primary);">${parseWikiLinks(formattedText)}</div>
        `;
        return;
      }
    }
    throw new Error("API call failed");
  } catch(e) {
    console.error(e);
    output.innerHTML = `<p style="color: var(--danger);">Failed to formulate blueprint. Check server status and try again.</p>`;
  }
};

// Decorate the updateDashboardMetrics global function to automatically render the new Mastery Heatmap
if (typeof window.updateDashboardMetrics === 'function') {
  const originalUpdateMetrics = window.updateDashboardMetrics;
  window.updateDashboardMetrics = function() {
    originalUpdateMetrics();
    if (typeof renderSyllabusMasteryHeatmap === 'function') {
      renderSyllabusMasteryHeatmap();
    }
  };
} else {
  // Fallback wrapper if loaded out-of-order
  document.addEventListener("DOMContentLoaded", () => {
    const originalUpdateMetrics = window.updateDashboardMetrics;
    if (typeof originalUpdateMetrics === 'function') {
      window.updateDashboardMetrics = function() {
        originalUpdateMetrics();
        if (typeof renderSyllabusMasteryHeatmap === 'function') {
          renderSyllabusMasteryHeatmap();
        }
      };
    }
  });
}



