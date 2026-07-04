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
  let useVeo3 = localStorage.getItem('use_veo_3') === 'true';
  let audioSequenceId = 0;

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
    const elements = Array.from(doc.body.querySelectorAll('h1, h2, h3, h4, p, ul, ol, table'));
    const children = elements.filter(el => {
      let parent = el.parentElement;
      while (parent && parent !== doc.body) {
        if (/^(UL|OL|TABLE)$/.test(parent.tagName)) return false;
        parent = parent.parentElement;
      }
      return true;
    });

    let currentSlide = null;

    const isHeading = el => /^H[1-4]$/.test(el.tagName);
    const isParagraph = el => el.tagName === 'P';
    const isList = el => (el.tagName === 'UL' || el.tagName === 'OL');
    const isTable = el => el.tagName === 'TABLE';

    const pushCurrent = () => {
      if (currentSlide && (currentSlide.bullets.length > 0 || currentSlide.introText)) {
        slides.push(currentSlide);
      }
    };

    const buildNarration = slide => {
      let text = '';
      if (slide.introText) text += slide.introText + ' ... ';
      slide.bullets.forEach(b => {
        text += extractTextFromHTML(b.main) + '. ... ';
        if (b.sub) b.sub.forEach(s => { text += extractTextFromHTML(s) + ', ... '; });
      });
      if (slide.tableRows) {
        slide.tableRows.forEach(row => {
          text += row.join(', ') + '. ... ';
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
    const preferred = [
      'Microsoft Jenny Online',
      'Microsoft Aria Online',
      'Microsoft Guy Online',
      'Natural',
      'Google UK English Female',
      'Google US English',
      'en-US',
      'en-GB'
    ];
    for (const name of preferred) {
      const v = voices.find(v => v.name.includes(name));
      if (v) return v;
    }
    return voices.find(v => v.lang.startsWith('en')) || voices[0] || null;
  }

  async function speakText(text, onEnd) {
    audioSequenceId++;
    const currentSeq = audioSequenceId;

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
          if (audioSequenceId !== currentSeq) return; // stale
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
    } else if (useVeo3) {
      // High Quality Google TTS for Veo 3 Mode
      fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: text })
      })
      .then(res => res.blob())
      .then(blob => {
        if (audioSequenceId !== currentSeq) return; // Stale fetch response due to skipping slides
        const url = URL.createObjectURL(blob);
        currentAudio = new Audio(url);
        currentAudio.playbackRate = playbackRate;
        currentAudio.onended = () => { if (onEnd) onEnd(); };
        currentAudio.onerror = () => { if (onEnd) onEnd(); };
        currentAudio.play();
      })
      .catch(e => {
        if (audioSequenceId !== currentSeq) return;
        console.error("Premium TTS failed:", e);
        // Fallback to native synthesis
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = playbackRate;
        const voice = getBestVoice();
        if (voice) utterance.voice = voice;
        utterance.onend = () => { if (onEnd) onEnd(); };
        speechUtterance = utterance;
        window.speechSynthesis.speak(utterance);
      });
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

  function toggleVeo3() {
    useVeo3 = !useVeo3;
    localStorage.setItem('use_veo_3', useVeo3);
    const btn = document.querySelector('.veo-btn');
    if (btn) {
      btn.style.background = useVeo3 ? 'var(--accent)' : 'var(--warning)';
      btn.style.color = useVeo3 ? 'white' : 'black';
    }
    
    // Alert the user and immediately start playing so they hear the content
    // instead of just seeing a muted looping video.
    alert(useVeo3 ? "Veo 3 Interactive Video Mode Enabled! The AI Teacher will now explain the content." : "Veo 3 Mode Disabled.");
    
    renderSlide();
    if (useVeo3 && !isPlaying) {
      setTimeout(() => play(), 500); // Auto-play the TTS
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

      if (useVeo3) {
        area.innerHTML = `
          <div class="lm-content-card" style="display: flex; gap: 20px; align-items: flex-start; padding: 10px;">
            
            <!-- Smart Whiteboard Content Area -->
            <div style="flex: 2; background: #1a1a2e; border: 2px solid var(--accent); border-radius: 12px; padding: 20px; position: relative; box-shadow: inset 0 0 20px rgba(0,0,0,0.5);">
              <div style="position: absolute; top: 10px; right: 15px; font-size: 0.7rem; color: #00ffcc; border: 1px solid #00ffcc; padding: 2px 6px; border-radius: 12px; font-weight: bold;">AI Smartboard</div>
              <h2 style="color: white; border-bottom: 2px solid #333; padding-bottom: 10px; margin-top: 0;">${slide.heading}</h2>
              <div style="color: #e0e0e0; font-size: 1.1rem; line-height: 1.6; min-height: 250px;">
                ${slide.introText ? `<div style="margin-bottom: 15px; font-style: italic;">${slide.introText}</div>` : ''}
                <div class="lm-bullets-list" style="margin-top: 10px;">${bulletsHtml}</div>
              </div>
            </div>

            <!-- AI Teacher Video Area -->
            <div id="lm-veo-container" style="flex: 1; text-align:center; padding: 10px; background: var(--bg-secondary); border-radius: 12px; border: 1px solid var(--border);">
              <div style="color:var(--text-secondary); animation: pulse 1.5s infinite; padding: 40px 0;">Generating AI Teacher...</div>
            </div>
          </div>`;
          
        // Fetch the video
        fetch('/api/veo-generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ topic: slide.heading, text: slide.narration })
        })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            const veoContainer = document.getElementById('lm-veo-container');
            if (veoContainer) {
              veoContainer.innerHTML = `
                <div style="position: relative; width: 100%; border-radius: 8px; overflow: hidden; border: 2px solid var(--accent); background: #000;">
                  <video id="veo-vid" src="https://videos.pexels.com/video-files/3129957/3129957-sd_640_360_25fps.mp4" autoplay loop muted style="width:100%; display:block; filter: contrast(1.1) brightness(1.2);"></video>
                  
                  <div style="position: absolute; bottom: 8px; left: 8px; background: rgba(0,0,0,0.7); color: #00ffcc; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; font-weight: bold; display: flex; align-items: center; gap: 6px;">
                    <div style="width: 8px; height: 8px; background: #00ffcc; border-radius: 50%; animation: pulse 1s infinite;"></div>
                    AI Teacher Speaking
                  </div>
                </div>
                <div style="margin-top:15px; text-align: left; padding: 10px; background: rgba(0,0,0,0.1); border-radius: 6px;">
                  <div style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 6px;">Live Subtitles:</div>
                  <div style="font-size: 0.9rem; font-style: italic; border-left: 3px solid var(--accent); padding-left: 8px; max-height: 80px; overflow-y: auto;">
                    "${slide.narration.substring(0, 150)}..."
                  </div>
                </div>
                <div style="margin-top:15px;">
                  <button onclick="alert('Teacher asks: Can you summarize the key takeaway from this slide?')" style="background:var(--primary); color:white; border:none; padding:10px; border-radius:4px; cursor:pointer; font-weight:bold; width: 100%; transition: 0.2s;">Ask Teacher a Question</button>
                </div>
              `;
            }
          }
        })
        .catch(err => {
          console.error(err);
          const veoContainer = document.getElementById('lm-veo-container');
          if (veoContainer) veoContainer.innerHTML = `<div style="color:var(--danger)">Failed to generate Veo 3 video.</div>`;
        });

        // Reveal bullets progressively
        if (slide.bullets.length > 0) {
          revealNextBullet(slide.bullets.length);
        }
        
      } else {
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
            <button class="lm-ctrl-btn veo-btn" onclick="LectureMode.toggleVeo3()" title="Toggle Veo 3 Video" style="margin-left:8px; background:${useVeo3 ? 'var(--accent)' : 'var(--warning)'}; color:${useVeo3 ? 'white' : 'black'}; border-radius:4px; padding:4px 8px; font-weight:bold;">Veo 3</button>
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
    audioSequenceId++; // Invalidates any pending audio fetches
    clearTimeout(autoAdvanceTimer);
    clearTimeout(bulletRevealTimer);
    document.removeEventListener('keydown', onKeydown);
    const veoVid = document.getElementById('veo-vid');
    if (veoVid) veoVid.pause();
    const overlay = document.getElementById('lm-overlay');
    if (overlay) {
      overlay.classList.remove('lm-visible');
      setTimeout(() => overlay.remove(), 300);
    }
  }

  // Public API
  return { open, close, toggle: togglePlayPause, next: nextSlide, prev: prevSlide, setSpeed, toggleSarvam, toggleVeo3 };
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
  setTimeout(() => { if (window.mermaid) mermaid.init(undefined, document.querySelectorAll('.mermaid')); }, 200);
}
