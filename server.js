const http = require('http');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 4000;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'AIzaSyA0g3U1Nro31TC8ow-oaaaEwZ5mpRQ7MJM';

global.DOMMatrix = class {};
const pdfParse = require('pdf-parse');

// Basic in-memory rate limiter (15 requests per minute per IP)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60000;
const MAX_REQUESTS_PER_WINDOW = 15;

// Cache for Daily Current Affairs (keyed by date string)
let dailyNewsCache = { date: '', data: null };

// UPSC topic categories aligned with UPSC Civil Services / NDA / CDS syllabus
const UPSC_TOPIC_CATEGORIES = [
  { name: 'Polity & Governance',      color: '#4f46e5', queries: ['India parliament', 'supreme court India', 'constitutional amendment India', 'government policy India', 'India election commission', 'India law ministry'] },
  { name: 'Economy & Finance',        color: '#0891b2', queries: ['RBI India economy', 'India GDP budget', 'GST India', 'stock market India finance', 'India inflation CPI', 'India exports imports trade balance'] },
  { name: 'Defence & Security',       color: '#dc2626', queries: ['Indian army navy air force', 'defence ministry India', 'military exercise India', 'India nuclear missile', 'India border security', 'India defence procurement'] },
  { name: 'Military Appointments',    color: '#b45309', queries: ['India army chief appointment', 'COAS CNS CAS India appointed', 'Indian military general admiral marshal appointed', 'India defence secretary chairman chiefs staff'] },
  { name: 'International Relations',  color: '#7c3aed', queries: ['India foreign policy', 'India bilateral agreement', 'India United Nations', 'India diplomacy', 'India ASEAN SAARC', 'India G20 SCO BRICS'] },
  { name: 'Environment & Ecology',    color: '#059669', queries: ['climate change India', 'environment pollution India', 'wildlife India', 'India forest conservation', 'India biodiversity COP', 'India renewable energy solar wind'] },
  { name: 'Science & Technology',     color: '#d97706', queries: ['ISRO space India', 'India technology innovation', 'India AI research', 'India nuclear energy', 'India semiconductor chip', 'India quantum computing'] },
  { name: 'Social Issues',            color: '#db2777', queries: ['India education scheme', 'India health scheme', 'India poverty scheme', 'India women empowerment', 'India tribal welfare', 'India Ayushman Bharat'] },
  { name: 'History & Culture',        color: '#92400e', queries: ['India heritage UNESCO', 'India cultural festival', 'India archaeology history', 'India art award', 'India yoga classical arts', 'India museum ancient site'] },
  { name: 'Geography & Disasters',    color: '#0369a1', queries: ['India disaster cyclone flood', 'India earthquake geography', 'India river dam project', 'India agriculture crop', 'India NDMA disaster management', 'India monsoon drought'] },
  { name: 'Awards & Appointments',    color: '#6d28d9', queries: ['India appointment minister CEO', 'India award prize', 'India Padma Bharat Ratna', 'India Nobel prize winner'] },
  { name: 'Sports',                   color: '#0d9488', queries: ['India cricket hockey Olympics', 'India sports championship medal', 'India FIFA athletics', 'India chess tennis badminton'] },
];

// PIB Ministry RSS feeds — covers most UPSC-relevant ministries
const PIB_RSS_FEEDS = [
  'https://pib.gov.in/RssMain.aspx?ModId=6&Lang=1&Regid=3',   // Ministry of Defence
  'https://pib.gov.in/RssMain.aspx?ModId=2&Lang=1&Regid=3',   // Prime Minister's Office
  'https://pib.gov.in/RssMain.aspx?ModId=4&Lang=1&Regid=3',   // Ministry of Finance
  'https://pib.gov.in/RssMain.aspx?ModId=5&Lang=1&Regid=3',   // Ministry of External Affairs
  'https://pib.gov.in/RssMain.aspx?ModId=35&Lang=1&Regid=3',  // Ministry of Environment
  'https://pib.gov.in/RssMain.aspx?ModId=8&Lang=1&Regid=3',   // Ministry of Science
  'https://pib.gov.in/RssMain.aspx?ModId=37&Lang=1&Regid=3',  // Ministry of Health
  'https://pib.gov.in/RssMain.aspx?ModId=23&Lang=1&Regid=3',  // Ministry of Home Affairs
  'https://pib.gov.in/RssMain.aspx?ModId=10&Lang=1&Regid=3',  // Ministry of Commerce
  'https://pib.gov.in/RssMain.aspx?ModId=11&Lang=1&Regid=3',  // Ministry of Agriculture
  'https://pib.gov.in/RssMain.aspx?ModId=3&Lang=1&Regid=3',   // Ministry of Railways
  'https://pib.gov.in/RssMain.aspx?ModId=22&Lang=1&Regid=3',  // Ministry of Education
  'https://pib.gov.in/RssMain.aspx?ModId=31&Lang=1&Regid=3',  // Ministry of Space (ISRO)
  'https://pib.gov.in/RssMain.aspx?ModId=18&Lang=1&Regid=3',  // Ministry of Petroleum
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
  return combined.slice(0, 50); // larger pool for 12 topic categories
}async function autoUpdateCurrentAffairs() {
  const today = new Date().toISOString().split('T')[0];
  try {
    console.log(`[AUTO-UPDATE] Starting daily current affairs update for ${today}...`);
    const rawItems = await fetchAllNewsItems();
    console.log(`[AUTO-UPDATE] Collected ${rawItems.length} raw news items.`);
    
    const topicColorMap = UPSC_TOPIC_CATEGORIES.reduce((acc, t) => { acc[t.name] = t.color; return acc; }, {});
    
    // Step 1: Select the 5 to 6 most important news items
    const selectionPrompt = `You are a senior UPSC exam expert. Select the 5 to 6 most important and UPSC-relevant news items from this list:
${JSON.stringify(rawItems.map((it,i) => ({ index: i, title: it.title, desc: it.description })))}

Rules:
- Assign each to one of these 12 topic areas: ${UPSC_TOPIC_CATEGORIES.map(t => t.name).join(', ')}
- You MUST include at least 1 'Military Appointments' item (if not in the feed, use the most recent known Indian military chief appointment), at least 1 'Economy & Finance' item, and at least 1 'Sports' item.
- Return ONLY a raw JSON array of objects with: { "index": <number or null>, "title": "<news title>", "topic": "<topic area name>", "topicColor": "<hex color from ${JSON.stringify(topicColorMap)}>" }.
- Do not include markdown fences or any formatting other than valid JSON.`;

    const models = ['gemini-2.5-flash', 'gemini-2.0-flash'];
    let selectionList = null;

    for (const model of models) {
      try {
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
        const gemRes = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: selectionPrompt }] }],
            generationConfig: { temperature: 0.1, response_mime_type: 'application/json' }
          })
        });
        if (!gemRes.ok) {
          const errMsg = await gemRes.text();
          console.warn(`[AUTO-UPDATE] Selection using model ${model} returned non-ok status ${gemRes.status}: ${errMsg}`);
          continue;
        }
        const gemData = await gemRes.json();
        const rawText = gemData?.candidates?.[0]?.content?.parts?.[0]?.text || '';
        const cleaned = rawText.replace(/^```json\s*/,'').replace(/\s*```$/,'').trim();
        selectionList = JSON.parse(cleaned);
        break;
      } catch(e) {
        console.warn(`[AUTO-UPDATE] Selection using model ${model} failed:`, e.message);
      }
    }

    if (!selectionList || !Array.isArray(selectionList) || selectionList.length === 0) {
      throw new Error('Failed to select news items');
    }

    console.log(`[AUTO-UPDATE] Selected ${selectionList.length} items for detail generation.`);
    
    // Step 2: Generate details for each selected item in parallel
    const generatedCards = [];
    const cardPromises = selectionList.map(async (selected, idx) => {
      const originalItem = selected.index !== null ? rawItems[selected.index] : null;
      const title = selected.title;
      const topic = selected.topic;
      const topicColor = selected.topicColor;
      
      const detailPrompt = `You are a senior UPSC exam expert. Generate a complete, highly detailed UPSC Current Affairs card for the following news item:
Title: ${title}
Description: ${originalItem ? originalItem.description : 'N/A'}
Topic: ${topic}
Topic Color: ${topicColor}

Your generated card MUST follow this JSON schema exactly:
{
  "id": "ca_live_${today.replace(/-/g, '_')}_${idx}",
  "topic": "${topic}",
  "topicColor": "${topicColor}",
  "summary": "<One clear sentence: what happened, who was involved, when and where.>",
  "text": "<2-3 sentence HTML-enhanced description. Use <strong> tags to highlight key names, organizations, dates, and figures. Use <mark style='background:rgba(255,210,0,0.25);padding:1px 4px;border-radius:3px;'> to highlight UPSC-critical facts like article numbers, rank designations, appointment dates, treaty names, committee names, statistics.>",
  "quickSummary": "<30-50 words quick summary of the current affair.>",
  "detailedAnalysis": "<150-250 words UPSC-level deep-dive analysis of the topic.>",
  "backgroundContext": "<80-120 words background context. Why the event happened, what led to it, and historical developments.>",
  "stakeholders": [
    "<Stakeholder 1 (Country, Org, Leader, Military Force, or Institution)>",
    "<Stakeholder 2>"
  ],
  "examRelevanceMatrix": {
    "NDA": "Very High/High/Medium/Low",
    "CDS": "Very High/High/Medium/Low",
    "AFCAT": "Very High/High/Medium/Low",
    "CAPF": "Very High/High/Medium/Low",
    "UPSC": "Very High/High/Medium/Low"
  },
  "relatedTopics": [
    "[[Related Note 1]]",
    "[[Related Note 2]]"
  ],
  "potentialQuestions": {
    "shortAnswers": ["<Analytical short answer question 1>", "<Analytical short answer question 2>"],
    "interviewQuestions": ["<Personal interview question related to this topic>"],
    "ssbDiscussionTopics": ["<SSB group discussion topic derived from this news>"]
  },
  "upscHighlights": [
    "<UPSC key fact 1>",
    "<UPSC key fact 2>",
    "<UPSC key fact 3 if applicable>"
  ],
  "institutionalContext": "<Name of the Ministry, Constitutional body, International org, or Treaty that governs this news>",
  "strategicImportance": "<Why does this matter for UPSC? 1-2 sentences on syllabus relevance.>",
  "originalSource": "<Official primary source: e.g. Press Information Bureau, Ministry of Defence, Reserve Bank of India, Supreme Court of India, United Nations, etc.>",
  "publicationDate": "${today}",
  "lastUpdatedDate": "${today}",
  "verificationStatus": "Verified (Official Primary Source)",
  "relatedOfficialDocuments": "<PIB Press Release, Ministry Report, ECI Notification, or Supreme Court Judgment reference if available>",
  "mcq": {
    "question": "<A UPSC Prelims-style MCQ question. Not straightforward factual recall — make it analytical or based on related provisions, rank hierarchy, or historical context.>",
    "options": ["<A>", "<B>", "<C>", "<D>"],
    "correct": 0,
    "explanation": "<Detailed 2-3 sentence explanation referencing the correct UPSC-standard information.>"
  }
}

Rules:
- Return ONLY the raw JSON object. No markdown, no \`\`\`json fences.
- Use formal UPSC-coach language. Highlight key terms with HTML as instructed.
- Do NOT use any emojis, icons, or pictorial characters anywhere in any fields of the JSON. Keep the content completely emoji-free.
- If this is a Defence news topic, you MUST include details matching the Military and Defence Knowledge Layer: (a) Technical Specifications, (b) Historical Usage/Context/Background, (c) Combat Record/Significance, (d) Advantages/Weaknesses, (e) Global Operators, (f) Indian Relevance, (g) Future Upgrades, and (h) Comparison with Similar Systems. Automatically link related components in double brackets, e.g. [[Meteor Missile]] or [[MICA]].
- JSON VALIDITY: Ensure that all quotes inside string fields are escaped as \\\" and that there are no unescaped control characters or trailing commas. Every string property must be properly enclosed in double quotes. Do NOT include actual literal line breaks or newlines inside any string properties; instead, escape them as \\n or use HTML tags. The entire response must be strictly valid JSON that can be parsed by JSON.parse().`;

      for (const model of models) {
        try {
          const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
          const gemRes = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: detailPrompt }] }],
              generationConfig: { temperature: 0.1, response_mime_type: 'application/json' }
            })
          });
          if (!gemRes.ok) {
            const errMsg = await gemRes.text();
            console.warn(`[AUTO-UPDATE] Card generation for "${title}" using model ${model} returned non-ok status ${gemRes.status}: ${errMsg}`);
            continue;
          }
          const gemData = await gemRes.json();
          const rawText = gemData?.candidates?.[0]?.content?.parts?.[0]?.text || '';
          const cleaned = rawText.replace(/^```json\s*/,'').replace(/\s*```$/,'').trim();
          const card = JSON.parse(cleaned);
          generatedCards.push(card);
          console.log(`[AUTO-UPDATE] Successfully generated card for "${title}" using ${model}`);
          break;
        } catch(e) {
          console.warn(`[AUTO-UPDATE] Card generation for "${title}" failed using ${model}:`, e.message);
        }
      }
    });

    await Promise.all(cardPromises);

    if (generatedCards.length === 0) {
      throw new Error('Failed to generate details for any cards');
    }

    console.log(`[AUTO-UPDATE] Successfully generated ${generatedCards.length} cards.`);

    const dataJsPath = path.join(__dirname, 'data.js');
    if (fs.existsSync(dataJsPath)) {
      let content = fs.readFileSync(dataJsPath, 'utf8');
      const startIdx = content.indexOf('let CURRENT_AFFAIRS_DB =');
      const endIdx = content.indexOf('const CBT_EXAMS_DATABASE =');
      if (startIdx !== -1 && endIdx !== -1) {
        const expr = content.substring(startIdx, endIdx).replace('let CURRENT_AFFAIRS_DB =', '').trim().replace(/;$/, '');
        let db = eval('(' + expr + ')');
        const monthStr = new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' });
        if (!db[monthStr]) db[monthStr] = [];
        
        const existingIds = new Set(db[monthStr].map(item => item.id));
        const existingTopics = new Set(db[monthStr].map(item => item.topic.toLowerCase()));
        
        let added = 0;
        generatedCards.forEach(entry => {
          if (!existingIds.has(entry.id) && !existingTopics.has(entry.topic.toLowerCase())) {
            db[monthStr].unshift(entry);
            added++;
          }
        });
        
        if (added > 0) {
          const formattedDb = "let CURRENT_AFFAIRS_DB = " + JSON.stringify(db, null, 2) + ";\n\n";
          const newContent = content.substring(0, startIdx) + formattedDb + content.substring(endIdx);
          fs.writeFileSync(dataJsPath, newContent, 'utf8');
          console.log(`[AUTO-UPDATE] Successfully saved ${added} new entries to data.js on disk.`);
        } else {
          console.log("[AUTO-UPDATE] No new unique entries to save.");
        }
      }
    }

    dailyNewsCache = { date: today, data: generatedCards };
    return generatedCards;
  } catch (err) {
    console.error(`[AUTO-UPDATE] Daily current affairs update failed:`, err);
    throw err;
  }
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

    (async () => {
      try {
        const parsedJson = await autoUpdateCurrentAffairs();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(parsedJson));
      } catch(err) {
        console.error('[PROXY] Error in daily-current-affairs:', err);
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
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : decodeURIComponent(req.url.split('?')[0]));
  
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
  
  // Trigger automated daily current affairs updates
  console.log("[AUTO-UPDATE] Scheduling first update in 10 seconds...");
  setTimeout(() => {
    autoUpdateCurrentAffairs()
      .then(() => console.log("[AUTO-UPDATE] Startup auto-update completed successfully."))
      .catch(err => console.error("[AUTO-UPDATE] Startup auto-update failed:", err));
  }, 10000);

  setInterval(() => {
    autoUpdateCurrentAffairs()
      .then(() => console.log("[AUTO-UPDATE] Scheduled auto-update completed successfully."))
      .catch(err => console.error("[AUTO-UPDATE] Scheduled auto-update failed:", err));
  }, 24 * 60 * 60 * 1000); // every 24 hours
});
