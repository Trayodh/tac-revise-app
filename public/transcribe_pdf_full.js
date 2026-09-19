const fs = require('fs');

require('dotenv').config();
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'AIzaSyA0g3U1Nro31TC8ow-oaaaEwZ5mpRQ7MJM';
const pdfPath = 'C:\\Users\\Trayodh Khandalkar\\.gemini\\antigravity-ide\\scratch\\defence-exams-revision\\gdrive_downloaded_file';

// Order models starting with the most likely working and least overloaded models
const candidateModels = [
  'models/gemini-2.0-flash-lite',
  'models/gemini-3.1-flash-lite',
  'models/gemini-2.0-flash',
  'models/gemini-2.5-flash',
  'models/gemini-3-flash-preview'
];

async function fetchWithTimeout(url, options, timeoutMs = 25000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}

async function callGeminiWithRetryAndFallback(fileUri, promptText, maxRetries = 3) {
  for (const model of candidateModels) {
    console.log(`Attempting generateContent using model: ${model}`);
    const targetUrl = `https://generativelanguage.googleapis.com/v1beta/${model}:generateContent?key=${GEMINI_API_KEY}`;
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
            text: promptText
          }
        ]
      }]
    };

    let delay = 3000;
    let succeeded = false;
    let responseText = '';

    for (let attempt = 0; attempt < maxRetries; attempt++) {
      try {
        // Use timeout of 25 seconds to prevent hanging
        const res = await fetchWithTimeout(targetUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        }, 25000);

        if (res.status === 429 || res.status === 503) {
          console.warn(`Model ${model} returned status ${res.status}. Retrying in ${delay / 1000}s...`);
          await new Promise(resolve => setTimeout(resolve, delay));
          delay *= 2;
          continue;
        }

        if (!res.ok) {
          const errTxt = await res.text();
          console.warn(`Model ${model} returned non-OK status ${res.status}: ${errTxt.substring(0, 150)}`);
          break; // Try next model
        }

        const data = await res.json();
        if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0]) {
          responseText = data.candidates[0].content.parts[0].text;
          succeeded = true;
          break; // Success!
        } else {
          console.warn(`Model ${model} returned unexpected payload: ${JSON.stringify(data).substring(0, 150)}`);
          break;
        }
      } catch (e) {
        console.warn(`Attempt ${attempt + 1} failed for model ${model}: ${e.message}`);
        if (attempt < maxRetries - 1) {
          console.log(`Retrying in ${delay / 1000}s...`);
          await new Promise(resolve => setTimeout(resolve, delay));
          delay *= 2;
        }
      }
    }

    if (succeeded) {
      console.log(`Successfully generated content using model: ${model}`);
      return responseText;
    }
  }

  throw new Error(`Failed to generate content using all candidate models.`);
}

async function main() {
  try {
    console.log("Reading PDF file bytes...");
    const pdfBuffer = fs.readFileSync(pdfPath);
    
    console.log("1. Starting resumable upload session on Gemini Files API...");
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
          displayName: "SyllabusOrNotesDocumentFull6"
        }
      })
    });
    
    if (!initResponse.ok) {
      const errTxt = await initResponse.text();
      throw new Error(`Failed to initialize Files API upload: ${initResponse.status} ${errTxt}`);
    }
    
    const uploadUrl = initResponse.headers.get("x-goog-upload-url");
    if (!uploadUrl) {
      throw new Error("Did not receive X-Goog-Upload-URL from Gemini Files API");
    }
    
    console.log("2. Uploading file bytes...");
    const uploadResponse = await fetch(uploadUrl, {
      method: "POST",
      headers: {
        "X-Goog-Upload-Offset": "0",
        "X-Goog-Upload-Command": "upload, finalize",
        "Content-Length": pdfBuffer.length.toString()
      },
      body: pdfBuffer
    });
    
    if (!uploadResponse.ok) {
      const errTxt = await uploadResponse.text();
      throw new Error(`Failed to upload PDF data: ${uploadResponse.status} ${errTxt}`);
    }
    
    const fileMeta = await uploadResponse.json();
    const fileUri = fileMeta.file.uri;
    const fileName = fileMeta.file.name;
    console.log(`Successfully uploaded to Gemini Files API. File Name: ${fileName}, File URI: ${fileUri}`);
    
    console.log("3. Polling file status to ensure it is ACTIVE...");
    const fileGetUrl = `https://generativelanguage.googleapis.com/v1beta/${fileName}?key=${GEMINI_API_KEY}`;
    let fileState = "PROCESSING";
    for (let i = 0; i < 20; i++) {
      const statusRes = await fetch(fileGetUrl);
      if (statusRes.ok) {
        const statusData = await statusRes.json();
        fileState = statusData.state;
        console.log(`File state check ${i+1}: ${fileState}`);
        if (fileState === "ACTIVE") {
          break;
        }
      }
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    if (fileState !== "ACTIVE") {
      throw new Error(`File did not reach ACTIVE state, current state: ${fileState}`);
    }
    
    console.log("4. Requesting transcription for Part 1 (Pages 1 to 24)...");
    const prompt1 = "This PDF contains scanned study revision slides for UPSC Defence exams. Please transcribe slides 1 to 24 in absolute full detail, slide by slide. For each slide, write '### Slide X' followed by a complete transcription of all texts, timelines, lists, points, and comparison tables. Do not summarize, do not skip slides, and do not paraphrase. Write out everything literally as it is shown in the slides.";
    const part1Text = await callGeminiWithRetryAndFallback(fileUri, prompt1);
    
    console.log("Sleeping for 5 seconds to prevent rate limits...");
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    console.log("5. Requesting transcription for Part 2 (Pages 25 to 46)...");
    const prompt2 = "This PDF contains scanned study revision slides for UPSC Defence exams. Please transcribe slides 25 to 46 in absolute full detail, slide by slide. For each slide, write '### Slide X' followed by a complete transcription of all texts, classifications, maps/diagram text labels, lists, points, and comparison tables. Do not summarize, do not skip slides, and do not paraphrase. Write out everything literally as it is shown in the slides.";
    const part2Text = await callGeminiWithRetryAndFallback(fileUri, prompt2);
    
    const fullText = `# PART 1: Slides 1-24\n\n${part1Text}\n\n# PART 2: Slides 25-46\n\n${part2Text}`;
    fs.writeFileSync('C:\\Users\\Trayodh Khandalkar\\.gemini\\antigravity-ide\\scratch\\defence-exams-revision\\gdrive_full_transcription.txt', fullText);
    console.log("Full transcription saved to gdrive_full_transcription.txt");
    
  } catch (err) {
    console.error("Error during transcription:", err);
  }
}

main();
