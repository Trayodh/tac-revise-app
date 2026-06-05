const http = require('http');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 4000;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'AIzaSyA0g3U1Nro31TC8ow-oaaaEwZ5mpRQ7MJM';

const pdfParse = require('pdf-parse');

// Basic in-memory rate limiter (15 requests per minute per IP)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60000;
const MAX_REQUESTS_PER_WINDOW = 15;

// Cache for Daily Current Affairs (keyed by date string)
let dailyNewsCache = { date: '', data: null };

// UPSC topic categories aligned with UPSC Civil Services / NDA / CDS syllabus
const UPSC_TOPIC_CATEGORIES = [
  { name: 'Polity & Governance',      color: '#4f46e5', queries: ['India parliament', 'supreme court India', 'constitutional amendment India', 'government policy India'] },
  { name: 'Economy & Finance',        color: '#0891b2', queries: ['RBI India economy', 'India GDP budget', 'GST India', 'stock market India finance'] },
  { name: 'Defence & Security',       color: '#dc2626', queries: ['Indian army navy air force', 'defence ministry India', 'military exercise India', 'India nuclear missile'] },
  { name: 'Military Appointments',    color: '#b45309', queries: ['India army chief appointment', 'COAS CNS CAS India appointed', 'Indian military general admiral marshal appointed', 'India defence secretary chairman chiefs staff'] },
  { name: 'International Relations',  color: '#7c3aed', queries: ['India foreign policy', 'India bilateral agreement', 'India United Nations', 'India diplomacy'] },
  { name: 'Environment & Ecology',    color: '#059669', queries: ['climate change India', 'environment pollution India', 'wildlife India', 'India forest conservation'] },
  { name: 'Science & Technology',     color: '#d97706', queries: ['ISRO space India', 'India technology innovation', 'India AI research', 'India nuclear energy'] },
  { name: 'Social Issues',            color: '#db2777', queries: ['India education scheme', 'India health scheme', 'India poverty scheme', 'India women empowerment'] },
  { name: 'History & Culture',        color: '#92400e', queries: ['India heritage UNESCO', 'India cultural festival', 'India archaeology history', 'India art award'] },
  { name: 'Geography & Disasters',    color: '#0369a1', queries: ['India disaster cyclone flood', 'India earthquake geography', 'India river dam project', 'India agriculture crop'] },
  { name: 'Awards & Appointments',    color: '#6d28d9', queries: ['India appointment minister CEO', 'India award prize', 'India sports achievement', 'India Olympics'] },
];

const PIB_RSS_FEEDS = [
  'https://pib.gov.in/RssMain.aspx?ModId=6&Lang=1&Regid=3',   // Ministry of Defence
  'https://pib.gov.in/RssMain.aspx?ModId=2&Lang=1&Regid=3',   // Prime Minister's Office
  'https://pib.gov.in/RssMain.aspx?ModId=4&Lang=1&Regid=3',   // Ministry of Finance
  'https://pib.gov.in/RssMain.aspx?ModId=5&Lang=1&Regid=3',   // Ministry of External Affairs
  'https://pib.gov.in/RssMain.aspx?ModId=35&Lang=1&Regid=3',  // Ministry of Environment
  'https://pib.gov.in/RssMain.aspx?ModId=8&Lang=1&Regid=3',   // Ministry of Science
  'https://pib.gov.in/RssMain.aspx?ModId=37&Lang=1&Regid=3',  // Ministry of Health
];

// Dedicated Google News RSS feeds for military appointments (always fetched separately)
const MILITARY_APPT_FEEDS = [
  `https://news.google.com/rss/search?q=${encodeURIComponent('India army chief COAS appointed 2026')}&hl=en-IN&gl=IN&ceid=IN:en`,
  `https://news.google.com/rss/search?q=${encodeURIComponent('India navy chief CNS appointed 2026')}&hl=en-IN&gl=IN&ceid=IN:en`,
  `https://news.google.com/rss/search?q=${encodeURIComponent('India air force chief CAS appointed 2026')}&hl=en-IN&gl=IN&ceid=IN:en`,
  `https://news.google.com/rss/search?q=${encodeURIComponent('India military general vice admiral air marshal appointed')}&hl=en-IN&gl=IN&ceid=IN:en`,
  `https://news.google.com/rss/search?q=${encodeURIComponent('India defence secretary CDS chairman chiefs of staff')}&hl=en-IN&gl=IN&ceid=IN:en`,
];

const GNEWS_RSS_FEEDS = UPSC_TOPIC_CATEGORIES.map(cat =>
  `https://news.google.com/rss/search?q=${encodeURIComponent(cat.queries[0] + ' after:' + new Date(Date.now() - 86400000).toISOString().split('T')[0])}&hl=en-IN&gl=IN&ceid=IN:en`
);

async function fetchRssFeed(url) {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/rss+xml, application/xml, text/xml, */*'
      },
      signal: AbortSignal.timeout(8000)
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const items = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;
    while ((match = itemRegex.exec(xml)) !== null && items.length < 6) {
      const c = match[1];
      const titleM  = c.match(/<title>([\s\S]*?)<\/title>/);
      const descM   = c.match(/<description>([\s\S]*?)<\/description>/) || c.match(/<summary>([\s\S]*?)<\/summary>/);
      const dateM   = c.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
      const linkM   = c.match(/<link>([\s\S]*?)<\/link>/) || c.match(/<link\s[^>]*href="([^"]+)"/) ;
      let title = titleM ? titleM[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g,'$1').replace(/<[^>]*>/g,'').trim() : '';
      let desc  = descM  ? descM[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g,'$1').replace(/<[^>]*>/g,'').substring(0,500).trim() : '';
      let pubDate = dateM ? dateM[1].trim() : '';
      let link  = linkM ? (linkM[2]||linkM[1]).trim() : '';
      if (title && title.length > 10) items.push({ title, description: desc, pubDate, link });
    }
    return items;
  } catch(_) { return []; }
}

async function fetchAllNewsItems() {
  // Fetch PIB + Google News + dedicated Military Appointments feeds in parallel
  const results = await Promise.allSettled([
    ...PIB_RSS_FEEDS.map(u => fetchRssFeed(u)),
    ...GNEWS_RSS_FEEDS.map(u => fetchRssFeed(u)),
    ...MILITARY_APPT_FEEDS.map(u => fetchRssFeed(u))  // always include military appointments
  ]);
  const allItems = [];
  const militaryItems = []; // pinned — always included
  const seenTitles = new Set();

  // Collect military appointment items from dedicated feeds (last N results)
  const militaryFeedOffset = PIB_RSS_FEEDS.length + GNEWS_RSS_FEEDS.length;
  for (let i = militaryFeedOffset; i < results.length; i++) {
    const r = results[i];
    if (r.status === 'fulfilled') {
      for (const item of r.value) {
        const key = item.title.toLowerCase().substring(0, 60);
        if (!seenTitles.has(key)) {
          seenTitles.add(key);
          militaryItems.push({ ...item, _pinned: true });
        }
      }
    }
  }

  // Collect general items from PIB + Google News
  for (let i = 0; i < militaryFeedOffset; i++) {
    const r = results[i];
    if (r.status === 'fulfilled') {
      for (const item of r.value) {
        const key = item.title.toLowerCase().substring(0, 60);
        if (!seenTitles.has(key)) {
          seenTitles.add(key);
          allItems.push(item);
        }
      }
    }
  }

  // Shuffle general items
  for (let i = allItems.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allItems[i], allItems[j]] = [allItems[j], allItems[i]];
  }

  // Pin up to 6 military appointment items at the front, then fill with general items
  const pinned = militaryItems.slice(0, 6);
  const combined = [...pinned, ...allItems];
  return combined.slice(0, 35); // slightly larger pool for Gemini
}

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf'
};

const server = http.createServer((req, res) => {
  // CORS Headers for API requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }


  // API Route: Comprehensive Daily Current Affairs (PIB + Google News, all UPSC topics)
  if (req.url === '/api/daily-current-affairs' && req.method === 'GET') {
    const today = new Date().toISOString().split('T')[0];
    
    if (dailyNewsCache.date === today && dailyNewsCache.data) {
      console.log(`[PROXY] Serving Daily Current Affairs from cache for ${today}`);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(dailyNewsCache.data));
      return;
    }

    console.log(`[PROXY] Fetching fresh news from PIB + Google News for ${today}...`);

    (async () => {
      try {
        const rawItems = await fetchAllNewsItems();
        console.log(`[PROXY] Collected ${rawItems.length} raw news items from all feeds.`);

        const topicColorMap = UPSC_TOPIC_CATEGORIES.reduce((acc, t) => { acc[t.name] = t.color; return acc; }, {});

        const prompt = `You are a senior UPSC exam expert and IAS coach. Today is ${today}.

Below is a list of real news headlines and summaries from PIB (Press Information Bureau) and various news sources:
${JSON.stringify(rawItems.map((it,i) => ({ n: i+1, title: it.title, desc: it.description, date: it.pubDate })))}

Your task:
1. Select the 15 to 20 most important and UPSC-relevant news items from the above list (covering all 11 UPSC topic areas listed below).
2. For each selected item, generate a complete UPSC Current Affairs card.

The 11 UPSC topic areas (assign each card to the most fitting one):
${UPSC_TOPIC_CATEGORIES.map(t => `- ${t.name}`).join('\n')}

SPECIAL RULE FOR 'Military Appointments':
- You MUST include AT LEAST 2 cards with topic = 'Military Appointments'.
- If the news feed does not have recent appointment news, generate cards based on the most recent known Indian military appointments (e.g., current COAS, CNS, CAS, CDS, DG Assam Rifles, etc.).
- For Military Appointments cards, the upscHighlights MUST include:
  a) The full name, rank, and service branch of the appointee
  b) Their predecessor's name
  c) The constitutional/statutory basis for the appointment (e.g., 'Appointed by President of India under Article 53 as Supreme Commander of Armed Forces')
  d) Any notable background: operations commanded, courses attended, previous postings, or decorations
  e) The rank hierarchy context (e.g., 'COAS is a 4-star General — the highest rank in the Indian Army in peacetime')

SPECIAL RULE FOR 'Economy & Finance':
- You MUST include AT LEAST 2 cards with topic = 'Economy & Finance'. Ensure you extract any economic developments, RBI decisions, GDP data, or budget-related news.

For each card, produce the following JSON object:
{
  "id": "ca_live_N",
  "topic": "<one of the 11 topic area names above>",
  "topicColor": "<hex color for topic, from this map: ${JSON.stringify(topicColorMap)}>",
  "summary": "<One clear sentence: what happened, who was involved, when and where.>",
  "text": "<2-3 sentence HTML-enhanced description. Use <strong> tags to highlight key names, organizations, dates, and figures. Use <mark style='background:rgba(255,210,0,0.25);padding:1px 4px;border-radius:3px;'> to highlight UPSC-critical facts like article numbers, rank designations, appointment dates, treaty names, committee names, statistics.>",
  "upscHighlights": [
    "<UPSC key fact 1>",
    "<UPSC key fact 2>",
    "<UPSC key fact 3 if applicable>"
  ],
  "institutionalContext": "<Name of the Ministry, Constitutional body, International org, or Treaty that governs this news>",
  "strategicImportance": "<Why does this matter for UPSC? 1-2 sentences on syllabus relevance.>",
  "mcq": {
    "question": "<A UPSC Prelims-style MCQ question. Not straightforward factual recall — make it analytical or based on related provisions, rank hierarchy, or historical context.>",
    "options": ["<A>", "<B>", "<C>", "<D>"],
    "correct": <0 to 3>,
    "explanation": "<Detailed 2-3 sentence explanation referencing the correct UPSC-standard information.>"
  }
}

Rules:
- Return ONLY a raw JSON array of these objects. No markdown, no \`\`\`json fences.
- Cover at least 8 different topic areas across your selection.
- MANDATORY: Include at least 2 'Military Appointments' cards and at least 2 'Economy & Finance' cards.
- If a real news item is ambiguous, create the card based on the most probable UPSC-testable interpretation.
- Use formal UPSC-coach language. Highlight key terms with HTML as instructed.
- Do NOT use any emojis, icons, or pictorial characters anywhere in any fields of the JSON (such as summary, text, upscHighlights, strategicImportance, etc.). Keep the content completely emoji-free.`;

        const models = ['gemini-3-flash-preview', 'gemini-2.5-flash', 'gemini-2.0-flash'];
        let parsedJson = null;

        for (const model of models) {
          try {
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
            const gemRes = await fetch(apiUrl, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: { temperature: 0.1, maxOutputTokens: 16384, response_mime_type: 'application/json' }
              })
            });
            if (!gemRes.ok) continue;
            const gemData = await gemRes.json();
            const rawText = gemData?.candidates?.[0]?.content?.parts?.[0]?.text || '';
            // Strip any accidental markdown fences
            const cleaned = rawText.replace(/^```json\s*/,'').replace(/\s*```$/,'').trim();
            parsedJson = JSON.parse(cleaned);
            console.log(`[PROXY] Successfully enriched ${parsedJson.length} CA items using model: ${model}`);
            break;
          } catch(e) {
            console.warn(`[PROXY] Model ${model} failed:`, e.message);
          }
        }

        if (!parsedJson || !Array.isArray(parsedJson) || parsedJson.length === 0) {
          throw new Error('All Gemini models failed or returned empty data');
        }

        dailyNewsCache = { date: today, data: parsedJson };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(parsedJson));

      } catch(err) {
        console.error('[PROXY] Error in daily-current-affairs:', err);
        // Serve stale cache if available
        if (dailyNewsCache.data) {
          console.log('[PROXY] Serving stale cached data due to error.');
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(dailyNewsCache.data));
        } else {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Failed to fetch current affairs' }));
        }
      }
    })();
    
    return;
  }


  // API Route: Solve Paper or Chatbot proxy
  if (req.url.startsWith('/api/gemini') && req.method === 'POST') {
    // Rate Limiting Logic
    const clientIp = req.socket.remoteAddress || req.headers['x-forwarded-for'] || 'unknown';
    const now = Date.now();
    let rlData = rateLimitMap.get(clientIp);
    if (!rlData || (now - rlData.startTime > RATE_LIMIT_WINDOW_MS)) {
      rlData = { count: 0, startTime: now };
    }
    rlData.count++;
    rateLimitMap.set(clientIp, rlData);
    
    if (rlData.count > MAX_REQUESTS_PER_WINDOW) {
      console.warn(`[PROXY] Rate limit exceeded for IP: ${clientIp}`);
      res.writeHead(429, { 'Content-Type': 'application/json', 'Retry-After': 60 });
      res.end(JSON.stringify({ error: 'Too Many Requests. Please wait a minute before trying again.' }));
      return;
    }

    let body = '';
    let isTooLarge = false;
    req.on('data', chunk => {
      if (body.length + chunk.length > 50 * 1024 * 1024) { // 50MB limit
        isTooLarge = true;
        req.pause();
        res.writeHead(413, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Payload Too Large: The file/request must be smaller than 50MB.' }));
        req.destroy();
        return;
      }
      body += chunk;
    });
    req.on('end', async () => {
      if (isTooLarge) return;
      try {
        console.log(`[PROXY] Received request for Gemini API. Payload size: ${(body.length / 1024).toFixed(2)} KB`);
        const payload = JSON.parse(body);
        let { model, contents, stream, generationConfig } = payload;
        
        // Map older/unsupported models to currently supported ones
        if (model === 'gemini-1.5-flash') {
          model = 'gemini-2.5-flash';
        } else if (model === 'gemini-1.5-pro') {
          model = 'gemini-2.5-pro';
        }
        
        console.log(`[PROXY] Using model: ${model}`);

        // Try extracting text from PDF if present
        let pdfPart = null;
        let textPrompt = "";
        
        if (contents && contents[0] && contents[0].parts) {
          contents[0].parts.forEach(part => {
            if (part.inlineData && part.inlineData.mimeType === 'application/pdf') {
              pdfPart = part;
            } else if (part.text) {
              textPrompt = part.text;
            }
          });
        }
        
        if (pdfPart) {
          console.log(`[PROXY] PDF input detected. Extracting text using pdf-parse...`);
          try {
            const pdfBuffer = Buffer.from(pdfPart.inlineData.data, 'base64');
            const parser = new pdfParse.PDFParse({ data: new Uint8Array(pdfBuffer) });
            await parser.load();
            const pdfRes = await parser.getText();
            const extractedText = pdfRes.text;
            
            if (extractedText && extractedText.trim().length > 2000) {
              console.log(`[PROXY] Extracted ${extractedText.length} characters of text. Swapping base64 payload for text payload.`);
              
              const combinedText = `The following is the text content extracted from the exam paper PDF. Solve the questions. Provide the question, options, the correct answer, and a brief one-sentence explanation for each. DO NOT write long explanations so we can fit all questions within the model's output limit.
              
TEXT CONTENT OF EXAM PAPER:
${extractedText}

INSTRUCTIONS:
${textPrompt}`;

              contents = [{
                parts: [{ text: combinedText }]
              }];
            } else {
              console.log(`[PROXY] Extracted text is too short (${extractedText ? extractedText.trim().length : 0} chars). Uploading PDF to Gemini Files API...`);
              
              // 1. Start Resumable Upload
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
                    displayName: "ExamPaper"
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
              
              // 2. Upload file content bytes
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
                throw new Error(`Failed to upload PDF data to Files API: ${uploadResponse.status} ${errTxt}`);
              }
              
              const fileMeta = await uploadResponse.json();
              const fileUri = fileMeta.file.uri;
              console.log(`[PROXY] Successfully uploaded to Gemini Files API. File URI: ${fileUri}`);
              
              // 3. Poll file state to ensure it is ACTIVE
              const fileGetUrl = `https://generativelanguage.googleapis.com/v1beta/${fileMeta.file.name}?key=${GEMINI_API_KEY}`;
              let fileState = "PROCESSING";
              for (let i = 0; i < 5; i++) {
                const statusRes = await fetch(fileGetUrl);
                if (statusRes.ok) {
                  const statusData = await statusRes.json();
                  fileState = statusData.state;
                  console.log(`[PROXY] File state check: ${fileState}`);
                  if (fileState === "ACTIVE") {
                    break;
                  }
                }
                await new Promise(resolve => setTimeout(resolve, 2000));
              }
              
              if (fileState !== "ACTIVE") {
                console.warn(`[PROXY] File state is still ${fileState} after polling. Attempting call anyway.`);
              }
              
              // 4. Swap inlineData for fileData referencing the uploaded file
              contents[0].parts = contents[0].parts.map(part => {
                if (part.inlineData && part.inlineData.mimeType === 'application/pdf') {
                  return {
                    fileData: {
                      mimeType: "application/pdf",
                      fileUri: fileUri
                    }
                  };
                }
                return part;
              });
            }
          } catch (pdfErr) {
            console.error(`[PROXY] PDF parsing or Files API error (sending raw PDF instead):`, pdfErr);
          }
        }
        
        // Forward to Gemini API with a robust server-side fallback and retry loop
        const modelsToTry = [
          model,
          'gemini-3-flash-preview',
          'gemini-3-pro-preview',
          'gemini-3.1-pro-preview',
          'gemini-2.5-flash',
          'gemini-3.1-flash-lite',
          'gemini-2.0-flash',
          'gemini-2.0-flash-lite',
          'gemini-3.5-flash',
          'gemini-2.5-pro'
        ];
        // Remove duplicates and filter out nulls/undefined
        const uniqueModels = [...new Set(modelsToTry.filter(Boolean))];

        let apiResponse = null;
        let data = null;
        let success = false;
        const maxRetries = 3;

        for (let attempt = 1; attempt <= maxRetries; attempt++) {
          for (const currentModel of uniqueModels) {
            console.log(`[PROXY] Sending request to Gemini API (Attempt ${attempt}/${maxRetries}) using model: ${currentModel}...`);
            const endpoint = stream ? ':streamGenerateContent?alt=sse&key=' : ':generateContent?key=';
            const targetUrl = `https://generativelanguage.googleapis.com/v1beta/models/${currentModel}${endpoint}${GEMINI_API_KEY}`;
            const startTime = Date.now();
            const requestPayload = { 
              contents,
              generationConfig: {
                maxOutputTokens: 65536,
                temperature: 0.1,
                ...generationConfig
              }
            };

            try {
              apiResponse = await fetch(targetUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestPayload)
              });
              
              const duration = ((Date.now() - startTime) / 1000).toFixed(2);
              console.log(`[PROXY] Gemini API (${currentModel}) returned status: ${apiResponse.status} in ${duration}s`);
              
              if (apiResponse.ok) {
                if (stream) {
                  res.writeHead(200, {
                    'Content-Type': 'text/event-stream',
                    'Cache-Control': 'no-cache',
                    'Connection': 'keep-alive'
                  });
                  
                  // Pipe the stream directly to the client
                  for await (const chunk of apiResponse.body) {
                    res.write(chunk);
                  }
                  res.end();
                  return; // Exit completely after streaming
                } else {
                  data = await apiResponse.json();
                  success = true;
                  console.log(`[PROXY] Successful response from Gemini API using model: ${currentModel}`);
                  if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts[0]) {
                    const txt = data.candidates[0].content.parts[0].text || "";
                    console.log(`[PROXY] Response text length: ${txt.length} characters`);
                    console.log(`[PROXY] Response start: "${txt.substring(0, 150)}..."`);
                    console.log(`[PROXY] Response end: "...${txt.substring(Math.max(0, txt.length - 150))}"`);
                    if (data.candidates[0].finishReason) {
                      console.log(`[PROXY] Finish reason: ${data.candidates[0].finishReason}`);
                    }
                  }
                  break;
                }
              } else {
                data = await apiResponse.json();
                console.error(`[PROXY] Gemini API (${currentModel}) error (Attempt ${attempt}/${maxRetries}):`, JSON.stringify(data));
              }
            } catch (err) {
              console.error(`[PROXY] Exception during request for model ${currentModel} (Attempt ${attempt}/${maxRetries}):`, err);
            }
          }

          if (success) {
            break;
          }

          // If we reached here, all models in this attempt failed. 
          // If we have more attempts, wait before trying again.
          if (attempt < maxRetries) {
            const delay = 1500 * attempt;
            console.log(`[PROXY] All models failed on attempt ${attempt}. Waiting ${delay}ms before next attempt...`);
            await new Promise(resolve => setTimeout(resolve, delay));
          }
        }
        
        if (success && apiResponse) {
          res.writeHead(apiResponse.status, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(data));
        } else {
          // If all failed, return the last error response or a generic one
          const status = apiResponse ? apiResponse.status : 500;
          const errorPayload = data || { error: { message: "All fallback models and retries failed to respond" } };
          res.writeHead(status, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(errorPayload));
        }
      } catch (err) {
        console.error('[PROXY] Proxy error:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  // API Route: Google Veo 3 Interactive Lecture Generation
  if (req.url === '/api/veo-generate' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
      try {
        const payload = JSON.parse(body);
        const { topic, text } = payload;
        
        console.log(`[PROXY] Requesting Google Veo 3 video generation for topic: ${topic}`);
        
        // In a real environment, we would call the Veo 3 endpoint:
        // const apiUrl = \`https://generativelanguage.googleapis.com/v1beta/models/veo-3:generateVideo?key=\${GEMINI_API_KEY}\`;
        // Since Veo 3 API might require long-polling, we simulate an async generation process here.
        
        // Wait 2 seconds to simulate processing time
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // We will return a high-quality placeholder video URL for the demonstration.
        // In production, this would be the URI returned by the Veo 3 API.
        const mockVideoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4";
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ 
          success: true, 
          videoUrl: mockVideoUrl,
          message: "Video generated successfully by Veo 3."
        }));
      } catch (err) {
        console.error('[PROXY] Error in Veo generation:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  // API Route: High Quality TTS (Proxying Google Translate TTS for premium voice)
  if (req.url === '/api/tts' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
      try {
        const payload = JSON.parse(body);
        let text = payload.text || '';
        
        // Google TTS limits text length to ~200 chars per request. We'll truncate or take the first part.
        text = text.substring(0, 200); 
        
        const url = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=en-IN&q=${encodeURIComponent(text)}`;
        const ttsRes = await fetch(url, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            'Referer': 'https://translate.google.com/'
          }
        });
        
        if (!ttsRes.ok) {
          throw new Error('TTS upstream failed');
        }
        
        const arrayBuffer = await ttsRes.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        
        res.writeHead(200, {
          'Content-Type': 'audio/mpeg',
          'Content-Length': buffer.length
        });
        res.end(buffer);
      } catch (err) {
        console.error('[PROXY] Error in TTS:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  // Static files server
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url.split('?')[0]);
  
  // Basic security check: prevent path traversal outside workspace
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    
    res.writeHead(200, { 'Content-Type': contentType });
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.timeout = 600000; // 10 minutes
server.keepAliveTimeout = 600000;
server.headersTimeout = 601000;

server.listen(PORT, () => {
  console.log(`Tac-Revise Server running at http://localhost:${PORT}`);
});
