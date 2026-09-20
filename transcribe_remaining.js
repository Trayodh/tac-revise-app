const fs = require('fs');

require('dotenv').config();
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'AIzaSyA0g3U1Nro31TC8ow-oaaaEwZ5mpRQ7MJM';
const pdfPath = 'C:\\Users\\Trayodh Khandalkar\\.gemini\\antigravity-ide\\scratch\\defence-exams-revision\\gdrive_downloaded_file';

async function main() {
  try {
    console.log("Reading PDF...");
    const pdfBuffer = fs.readFileSync(pdfPath);
    
    console.log("Uploading...");
    const initResponse = await fetch(`https://generativelanguage.googleapis.com/upload/v1beta/files?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "X-Goog-Upload-Protocol": "resumable",
        "X-Goog-Upload-Command": "start",
        "X-Goog-Upload-Header-Content-Length": pdfBuffer.length.toString(),
        "X-Goog-Upload-Header-Content-Type": "application/pdf",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        file: {
          displayName: "SyllabusRemaining"
        }
      })
    });
    
    if (!initResponse.ok) {
      throw new Error(`Upload init failed: ${initResponse.status}`);
    }
    
    const uploadUrl = initResponse.headers.get("x-goog-upload-url");
    const uploadResponse = await fetch(uploadUrl, {
      method: "POST",
      headers: {
        "X-Goog-Upload-Offset": "0",
        "X-Goog-Upload-Command": "upload, finalize",
        "Content-Length": pdfBuffer.length.toString()
      },
      body: pdfBuffer
    });
    
    const fileMeta = await uploadResponse.json();
    const fileUri = fileMeta.file.uri;
    const fileName = fileMeta.file.name;
    
    console.log("Polling state...");
    const fileGetUrl = `https://generativelanguage.googleapis.com/v1beta/${fileName}?key=${GEMINI_API_KEY}`;
    let state = "PROCESSING";
    for (let i = 0; i < 10; i++) {
      const res = await fetch(fileGetUrl);
      if (res.ok) {
        const d = await res.json();
        state = d.state;
        if (state === "ACTIVE") break;
      }
      await new Promise(r => setTimeout(r, 2000));
    }
    
    if (state !== "ACTIVE") throw new Error("File not active");
    
    console.log("Sending generateContent for slides 28-45...");
    const targetUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${GEMINI_API_KEY}`;
    const payload = {
      contents: [{
        parts: [
          {
            fileData: {
              mimeType: "application/pdf",
              fileUri: fileUri
            }
          },
          {
            text: "This PDF contains revision slides for UPSC defence exams. Please transcribe slides 28 to 45 in absolute full detail, slide by slide. Write '### Slide X' followed by its complete transcribed contents, lists, matrices, facts, and labels. Do not summarize or skip anything."
          }
        ]
      }]
    };
    
    const res = await fetch(targetUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    
    if (!res.ok) {
      const txt = await res.text();
      throw new Error(`generateContent failed: ${res.status} ${txt}`);
    }
    
    const data = await res.json();
    const text = data.candidates[0].content.parts[0].text;
    console.log("SUCCESS!");
    fs.writeFileSync('C:\\Users\\Trayodh Khandalkar\\.gemini\\antigravity-ide\\scratch\\defence-exams-revision\\gdrive_transcription_remaining.txt', text);
    console.log("Saved to gdrive_transcription_remaining.txt");
  } catch (err) {
    console.error("Error:", err.message);
  }
}

main();
