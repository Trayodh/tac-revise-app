const fs = require('fs');
let code = fs.readFileSync('lecture_mode.js', 'utf8');

const oldFetchBlock = `      try {
        const response = await fetch('https://api.sarvam.ai/text-to-speech', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'api-subscription-key': apiKey
          },
          body: JSON.stringify({
            inputs: [cleanText],
            target_language_code: "en-IN", // English with Indian accent for proper Hindi pronunciation
            speaker: "kavya",
            pace: playbackRate,
            speech_sample_rate: 8000,
            enable_preprocessing: true,
            model: "bulbul:v3"
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
      }`;

const newSdkBlock = `      try {
        const client = new SarvamAI.SarvamAIClient({ token: apiKey });
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
      }`;

if (code.includes(oldFetchBlock)) {
    code = code.replace(oldFetchBlock, newSdkBlock);
    fs.writeFileSync('lecture_mode.js', code, 'utf8');
    console.log("Successfully replaced fetch with SarvamAI SDK");
} else {
    console.log("Could not find old fetch block");
}
