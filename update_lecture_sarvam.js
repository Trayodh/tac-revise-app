const fs = require('fs');

let code = fs.readFileSync('lecture_mode.js', 'utf8');

const ttsEngineCode = `  // ==========================================
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
      let apiKey = localStorage.getItem('sarvam_api_key');
      if (!apiKey) {
        apiKey = prompt("Please enter your Sarvam AI API Subscription Key to use Indian Voices:\\n(You can get one at dashboard.sarvam.ai)");
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
        const response = await fetch('https://api.sarvam.ai/text-to-speech', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'api-subscription-key': apiKey
          },
          body: JSON.stringify({
            inputs: [cleanText],
            target_language_code: "hi-IN", // Indian English / Hindi mix
            speaker: "meera",
            pitch: 0,
            pace: playbackRate,
            loudness: 1.5,
            speech_sample_rate: 8000,
            enable_preprocessing: true,
            model: "bulbul:v1"
          })
        });

        const data = await response.json();
        if (data.audios && data.audios[0]) {
          const base64Audio = data.audios[0];
          currentAudio = new Audio('data:audio/wav;base64,' + base64Audio);
          currentAudio.playbackRate = playbackRate;
          currentAudio.onended = () => { if (onEnd) onEnd(); };
          currentAudio.onerror = () => { if (onEnd) onEnd(); };
          currentAudio.play();
          return;
        } else {
          console.error("Sarvam AI Error:", data);
          throw new Error("Invalid API response");
        }
      } catch (e) {
        console.error("Failed to fetch Sarvam AI TTS:", e);
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
  }`;

code = code.replace(/\/\/ ==========================================\s*\/\/ TTS ENGINE\s*\/\/ ==========================================[\s\S]*?function stopSpeech\(\) \{[\s\S]*?\}/, ttsEngineCode);

// Add the settings button in the overlay HTML
const overlayHtmlOld = `<button class="lm-speed-btn" data-speed="2" onclick="LectureMode.setSpeed(2)">2A-</button>`;
const overlayHtmlNew = `<button class="lm-speed-btn" data-speed="2" onclick="LectureMode.setSpeed(2)">2A-</button>
            <button class="lm-ctrl-btn" onclick="LectureMode.toggleSarvam()" title="Toggle Sarvam AI Indian Voices">IN Voice</button>`;

code = code.replace(overlayHtmlOld, overlayHtmlNew);

// Add toggleSarvam to the public API
code = code.replace(`return { open, close, toggle: togglePlayPause, next: nextSlide, prev: prevSlide, setSpeed };`, `return { open, close, toggle: togglePlayPause, next: nextSlide, prev: prevSlide, setSpeed, toggleSarvam };`);

fs.writeFileSync('lecture_mode.js', code, 'utf8');
console.log("Updated lecture_mode.js for Sarvam AI");
