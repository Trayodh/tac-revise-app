// lecture_mode.js — In-App VideoLecture Mode
// Transforms any topic's notes into an animated, narrated slide presentation
// Uses Web Speech API (TTS), CSS animations, and keyboard controls.

// ==========================================
// LECTURE MODE — GLOBAL STATE
// ==========================================
const LectureMode = (() => {
  let slides = [];
  let currentSlideIndex = 0;
  let isPlaying = false;
  let speechUtterance = null;
  let autoAdvanceTimer = null;
  let bulletRevealIndex = 0;
  let bulletRevealTimer = null;
  let playbackRate = 1;
  let topicTitle = '';
  let subjectLabel = '';
  let voices = [];

  // ==========================================
  // SLIDE PARSING
  // ==========================================

  function extractTextFromHTML(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return (div.textContent || div.innerText || '').replace(/\s+/g, ' ').trim();
  }

  function parseSlides(htmlContent, title, subject) {
    topicTitle = title;
    subjectLabel = subject;
    slides = [];

    // SLIDE 0: Title card
    slides.push({
      type: 'title',
      heading: title,
      subheading: subject,
      bullets: [],
      narration: `Welcome to your lecture on ${title}. Part of ${subject}. Let's begin.`
    });

    const parser = new DOMParser();
    const doc = parser.parseFromString(`<div>${htmlContent}</div>`, 'text/html');
    const root = doc.body.querySelector('div');
    if (!root) return slides;

    const children = Array.from(root.childNodes);
    let currentSlide = null;

    const isHeading = el => el.nodeType === 1 && /^H[1-4]$/.test(el.tagName);
    const isParagraph = el => el.nodeType === 1 && el.tagName === 'P';
    const isList = el => el.nodeType === 1 && (el.tagName === 'UL' || el.tagName === 'OL');
    const isTable = el => el.nodeType === 1 && el.tagName === 'TABLE';

    const pushCurrent = () => {
      if (currentSlide && (currentSlide.bullets.length > 0 || currentSlide.introText)) {
        slides.push(currentSlide);
      }
    };

    const buildNarration = slide => {
      let text = '';
      if (slide.introText) text += slide.introText + '. ';
      slide.bullets.forEach(b => {
        text += extractTextFromHTML(b.main) + '. ';
        if (b.sub) b.sub.forEach(s => { text += extractTextFromHTML(s) + '. '; });
      });
      if (slide.tableRows) {
        slide.tableRows.forEach(row => {
          text += row.join(', ') + '. ';
        });
      }
      return text.trim() || 'Next slide.';
    };

    children.forEach(el => {
      if (el.nodeType !== 1) return;

      if (isHeading(el)) {
        pushCurrent();
        currentSlide = {
          type: 'content',
          heading: el.textContent.trim(),
          introText: '',
          bullets: [],
          tableRows: null,
          narration: ''
        };
      } else if (isParagraph(el)) {
        if (!currentSlide) {
          currentSlide = { type: 'content', heading: title, introText: '', bullets: [], tableRows: null, narration: '' };
        }
        currentSlide.introText = (currentSlide.introText + ' ' + el.innerHTML.trim()).trim();
      } else if (isList(el)) {
        if (!currentSlide) {
          currentSlide = { type: 'content', heading: title, introText: '', bullets: [], tableRows: null, narration: '' };
        }
        Array.from(el.children).forEach(li => {
          const subList = li.querySelector('ul, ol');
          const mainText = subList ? li.innerHTML.replace(subList.outerHTML, '').trim() : li.innerHTML.trim();
          const bullet = { main: mainText, sub: [] };
          if (subList) {
            Array.from(subList.children).forEach(sub => bullet.sub.push(sub.innerHTML.trim()));
          }
          currentSlide.bullets.push(bullet);
        });
      } else if (isTable(el)) {
        pushCurrent();
        const rows = [];
        const tableSlide = { type: 'table', heading: currentSlide ? currentSlide.heading : 'Key Facts Table', tableHTML: el.outerHTML, tableRows: [], narration: '' };
        Array.from(el.querySelectorAll('tr')).forEach(tr => {
          const cellTexts = Array.from(tr.querySelectorAll('td, th')).map(c => c.textContent.trim()).filter(Boolean);
          if (cellTexts.length) tableSlide.tableRows.push(cellTexts);
        });
        tableSlide.narration = 'Here is a summary table. ' + tableSlide.tableRows.slice(1).map(r => r.join(' — ')).join('. ') + '.';
        slides.push(tableSlide);
        currentSlide = null;
      }
    });

    pushCurrent();

    // Build narration text for all content slides
    slides.forEach(s => {
      if (s.type === 'content') {
        s.narration = `${s.heading}. ` + buildNarration(s);
      }
    });

    // CLOSING SLIDE
    slides.push({
      type: 'end',
      heading: 'Lecture Complete!',
      subheading: `You've finished: ${title}`,
      bullets: [],
      narration: `That concludes the lecture on ${title}. Review the notes again or take a practice quiz to reinforce your memory.`
    });

    return slides;
  }

    // ==========================================
  // TTS ENGINE
  // ==========================================

  let currentAudio = null;
  let useSarvamAI = localStorage.getItem('use_sarvam_ai') === 'true';

  function loadVoices() {
    voices = window.speechSynthesis.getVoices();
    if (voices.length === 0) {
      window.speechSynthesis.onvoiceschanged = () => { voices = window.speechSynthesis.getVoices(); };
    }
  }

  function getBestVoice() {
    const preferred = ['Google UK English Male', 'Google UK English Female', 'Google US English', 'en-US', 'en-GB'];
    for (const name of preferred) {
      const v = voices.find(v => v.name.includes(name) || v.lang.includes(name));
      if (v) return v;
    }
    return voices.find(v => v.lang.startsWith('en')) || voices[0] || null;
  }

  async function speakText(text, onEnd) {
    if (useSarvamAI) {
      let apiKey = localStorage.getItem('sarvam_api_key') || 'sk_v3bby5fy_DhmPey79kHxLFgrdxBWA0eZ5';
      if (!apiKey) {
        apiKey = prompt("Please enter your Sarvam AI API Subscription Key to use Indian Voices:\n(You can get one at dashboard.sarvam.ai)");
        if (apiKey) {
          localStorage.setItem('sarvam_api_key', apiKey);
        } else {
          useSarvamAI = false;
          localStorage.setItem('use_sarvam_ai', 'false');
          alert("Falling back to native browser TTS.");
          return speakText(text, onEnd);
        }
      }

      // Truncate text to 2500 chars (Sarvam limit)
      const cleanText = text.substring(0, 2500);
      
      try {
        const client = new SarvamAI.SarvamAIClient({ apiSubscriptionKey: apiKey });
        const response = await client.textToSpeech.convert({
            text: cleanText,
            target_language_code: "en-IN",
            speaker: "kavya",
            pace: playbackRate,
            speech_sample_rate: 8000,
            enable_preprocessing: true,
            model: "bulbul:v3"
        });

        if (response.audios && response.audios[0]) {
          const base64Audio = response.audios[0];
          currentAudio = new Audio('data:audio/wav;base64,' + base64Audio);
          currentAudio.playbackRate = playbackRate;
          currentAudio.onended = () => { if (onEnd) onEnd(); };
          currentAudio.onerror = () => { if (onEnd) onEnd(); };
          currentAudio.play();
          return;
        } else {
          console.error("Sarvam AI Error:", response);
          throw new Error("Invalid API response");
        }
      } catch (e) {
        console.error("Failed to fetch Sarvam AI TTS via SDK:", e);
        // Fallback to native
        useSarvamAI = false;
        return speakText(text, onEnd);
      }
    } else {
      if (!window.speechSynthesis) { if (onEnd) onEnd(); return; }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = playbackRate;
      utterance.pitch = 1;
      utterance.volume = 1;
      const voice = getBestVoice();
      if (voice) utterance.voice = voice;
      utterance.onend = () => { if (onEnd) onEnd(); };
      utterance.onerror = () => { if (onEnd) onEnd(); };
      speechUtterance = utterance;
      window.speechSynthesis.speak(utterance);
    }
  }

  function stopSpeech() {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    speechUtterance = null;
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio = null;
    }
  }

  function toggleSarvam() {
    useSarvamAI = !useSarvamAI;
    localStorage.setItem('use_sarvam_ai', useSarvamAI);
    alert(useSarvamAI ? "Sarvam AI (Indian Voices) Enabled!" : "Native Browser TTS Enabled.");
    if (isPlaying) {
      stopSpeech();
      play(); // Restart current slide with new voice
    }
  }

  // ==========================================
  // SLIDE RENDERING
  // ==========================================

  function renderSlide() {
    const slide = slides[currentSlideIndex];
    if (!slide) return;

    updateProgress();
    updateSlideCounter();
    bulletRevealIndex = 0;
    clearTimeout(bulletRevealTimer);

    const area = document.getElementById('lm-slide-area');
    if (!area) return;

    if (slide.type === 'title') {
      area.innerHTML = `
        <div class="lm-title-card">
          <div class="lm-title-badge">${subjectLabel}</div>
          <h1 class="lm-title-heading">${slide.heading}</h1>
          <div class="lm-title-divider"></div>
          <p class="lm-title-sub">AI-Powered Revision Lecture</p>
          <div class="lm-pulse-ring"></div>
        </div>`;
    } else if (slide.type === 'end') {
      area.innerHTML = `
        <div class="lm-end-card">
          <div class="lm-end-icon"></div>
          <h1 class="lm-end-heading">${slide.heading}</h1>
          <p class="lm-end-sub">${slide.subheading}</p>
          <div class="lm-end-actions">
            <button class="lm-end-btn" onclick="LectureMode.close()">Back to Notes</button>
          </div>
        </div>`;
    } else if (slide.type === 'table') {
      area.innerHTML = `
        <div class="lm-content-card">
          <div class="lm-slide-heading">${slide.heading}</div>
          <div class="lm-table-wrap">${slide.tableHTML}</div>
        </div>`;
    } else {
      // Content slide
      const bulletsHtml = slide.bullets.map((b, i) => `
        <div class="lm-bullet" id="lm-bullet-${i}" style="opacity:0;transform:translateX(-20px);">
          <div class="lm-bullet-main"><span class="lm-bullet-dash">—</span><span>${b.main}</span></div>
          ${b.sub.length ? `<div class="lm-bullet-sub">${b.sub.map(s => `<div class="lm-sub-item">↳ ${s}</div>`).join('')}</div>` : ''}
        </div>`).join('');

      area.innerHTML = `
        <div class="lm-content-card">
          <div class="lm-slide-heading">${slide.heading}</div>
          ${slide.introText ? `<div class="lm-intro-text">${slide.introText}</div>` : ''}
          <div class="lm-bullets-list">${bulletsHtml}</div>
        </div>`;

      // Reveal bullets progressively
      if (slide.bullets.length > 0) {
        revealNextBullet(slide.bullets.length);
      }
    }
  }

  function revealNextBullet(total) {
    if (bulletRevealIndex >= total) return;
    const el = document.getElementById(`lm-bullet-${bulletRevealIndex}`);
    if (el) {
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateX(0)';
    }
    bulletRevealIndex++;
    const delay = Math.max(200, 900 / playbackRate);
    bulletRevealTimer = setTimeout(() => revealNextBullet(total), delay);
  }

  // ==========================================
  // PLAYBACK CONTROL
  // ==========================================

  function play() {
    isPlaying = true;
    updatePlayBtn();
    const slide = slides[currentSlideIndex];
    if (!slide) return;

    speakText(slide.narration, () => {
      if (!isPlaying) return;
      const waitTime = slide.type === 'table' ? 2500 : 1200;
      autoAdvanceTimer = setTimeout(() => {
        if (!isPlaying) return;
        nextSlide();
      }, waitTime / playbackRate);
    });
  }

  function pause() {
    isPlaying = false;
    stopSpeech();
    clearTimeout(autoAdvanceTimer);
    clearTimeout(bulletRevealTimer);
    updatePlayBtn();
  }

  function togglePlayPause() {
    if (isPlaying) pause();
    else play();
  }

  function nextSlide() {
    if (currentSlideIndex >= slides.length - 1) return;
    stopSpeech();
    clearTimeout(autoAdvanceTimer);
    bulletRevealIndex = slides[currentSlideIndex + 1]?.bullets?.length || 0;
    currentSlideIndex++;
    renderSlide();
    if (isPlaying) play();
  }

  function prevSlide() {
    if (currentSlideIndex <= 0) return;
    stopSpeech();
    clearTimeout(autoAdvanceTimer);
    currentSlideIndex--;
    renderSlide();
    if (isPlaying) play();
  }

  function setSpeed(rate) {
    playbackRate = parseFloat(rate);
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    document.querySelectorAll('.lm-speed-btn').forEach(b => b.classList.toggle('active', parseFloat(b.dataset.speed) === playbackRate));
    if (isPlaying) play();
  }

  // ==========================================
  // UI STATE HELPERS
  // ==========================================

  function updateProgress() {
    const bar = document.getElementById('lm-progress-fill');
    if (bar) bar.style.width = `${((currentSlideIndex + 1) / slides.length) * 100}%`;
  }

  function updateSlideCounter() {
    const el = document.getElementById('lm-slide-counter');
    if (el) el.textContent = `${currentSlideIndex + 1} / ${slides.length}`;
  }

  function updatePlayBtn() {
    const btn = document.getElementById('lm-play-btn');
    if (btn) btn.innerHTML = isPlaying ? '' : '▶';
  }

  // ==========================================
  // KEYBOARD SHORTCUTS
  // ==========================================

  function onKeydown(e) {
    if (!document.getElementById('lm-overlay')) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextSlide();
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevSlide();
    else if (e.key === ' ') { e.preventDefault(); togglePlayPause(); }
    else if (e.key === 'Escape') close();
  }

  // ==========================================
  // OPEN / CLOSE
  // ==========================================

  function open(htmlContent, title, subject) {
    loadVoices();
    parseSlides(htmlContent, title, subject);
    currentSlideIndex = 0;
    isPlaying = false;
    playbackRate = 1;

    // Build overlay DOM
    const overlay = document.createElement('div');
    overlay.id = 'lm-overlay';
    overlay.innerHTML = `
      <div class="lm-wrapper">
        <!-- Top Bar -->
        <div class="lm-topbar">
          <div class="lm-topbar-title">Lecture Mode — ${title}</div>
          <div style="display:flex;align-items:center;gap:12px;">
            <span id="lm-slide-counter" class="lm-counter">1 / ${slides.length}</span>
            <button class="lm-close-btn" onclick="LectureMode.close()">&#215;</button>
          </div>
        </div>

        <!-- Progress Bar -->
        <div class="lm-progress-track">
          <div id="lm-progress-fill" class="lm-progress-fill" style="width:${(1/slides.length)*100}%"></div>
        </div>

        <!-- Slide Area -->
        <div id="lm-slide-area" class="lm-slide-area"></div>

        <!-- Controls Bar -->
        <div class="lm-controls">
          <div class="lm-controls-left">
            <button class="lm-ctrl-btn" onclick="LectureMode.prev()" title="Previous (←)">&#9664;&#9664;</button>
            <button id="lm-play-btn" class="lm-ctrl-btn lm-play" onclick="LectureMode.toggle()" title="Play/Pause (Space)">▶</button>
            <button class="lm-ctrl-btn" onclick="LectureMode.next()" title="Next (→)">&#9654;&#9654;</button>
          </div>
          <div class="lm-controls-center">
            <div class="lm-speed-label">Speed</div>
            <button class="lm-speed-btn" data-speed="0.75" onclick="LectureMode.setSpeed(0.75)">0.75×</button>
            <button class="lm-speed-btn active" data-speed="1" onclick="LectureMode.setSpeed(1)">1×</button>
            <button class="lm-speed-btn" data-speed="1.5" onclick="LectureMode.setSpeed(1.5)">1.5×</button>
            <button class="lm-speed-btn" data-speed="2" onclick="LectureMode.setSpeed(2)">2×</button>
            <button class="lm-ctrl-btn" onclick="LectureMode.toggleSarvam()" title="Toggle Sarvam AI Indian Voices" style="margin-left:8px; background:var(--primary); color:white; border-radius:4px; padding:4px 8px; font-weight:bold;">IN Voice</button>
          </div>
          <div class="lm-controls-right">
            <div class="lm-hint">Space = Play/Pause &nbsp;|&nbsp; ← → = Navigate &nbsp;|&nbsp; Esc = Close</div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    document.addEventListener('keydown', onKeydown);

    // Render first slide
    setTimeout(() => {
      renderSlide();
      overlay.classList.add('lm-visible');
    }, 50);
  }

  function close() {
    pause();
    stopSpeech();
    clearTimeout(autoAdvanceTimer);
    clearTimeout(bulletRevealTimer);
    document.removeEventListener('keydown', onKeydown);
    const overlay = document.getElementById('lm-overlay');
    if (overlay) {
      overlay.classList.remove('lm-visible');
      setTimeout(() => overlay.remove(), 300);
    }
  }

  // Public API
  return { open, close, toggle: togglePlayPause, next: nextSlide, prev: prevSlide, setSpeed, toggleSarvam };
})();

// ==========================================
// ENTRY POINT — called from renderTopicView
// ==========================================
function launchLectureMode(subjectId, chapterId, topicId) {
  const subject = NOTES_DATABASE[subjectId];
  if (!subject) return;
  const chapter = subject.chapters.find(c => c.id === chapterId);
  if (!chapter) return;
  const topic = chapter.topics.find(t => t.id === topicId);
  if (!topic) return;

  let html = topic.notes || '';
  // Prefer the richer EXPANDED_NOTES_DATA if available
  if (typeof EXPANDED_NOTES_DATA !== 'undefined' && EXPANDED_NOTES_DATA[topic.id]) {
    html = EXPANDED_NOTES_DATA[topic.id];
  }

  const subjectLabel = `${subject.title} › ${chapter.title}`;
  LectureMode.open(html, topic.title, subjectLabel);
}
