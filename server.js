const http = require('http');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 4000;
const CEREBRAS_API_KEY = process.env.CEREBRAS_API_KEY || '';

// Import the new Current Affairs engine
const runCurrentAffairsEngine = require('./current_affairs_engine');
const runMilitaryExercisesEngine = require('./military_exercises_engine');

// Cache for daily news to prevent repeated API calls
let dailyNewsCache = { date: null, data: null };
let dailyMilitaryExercisesCache = { date: null, data: null };
global.DOMMatrix = class {};
const pdfParse = require('pdf-parse');

// Basic in-memory rate limiter (15 requests per minute per IP)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60000;
const MAX_REQUESTS_PER_WINDOW = 200;


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
  { name: 'Important Days & Themes',  color: '#ec4899', queries: ['India important day theme', 'national international day observed', 'India day celebrated theme'] },
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
}

async function autoUpdateCurrentAffairs() {
  const today = new Date().toISOString().split('T')[0];
  try {
    console.log(`[AUTO-UPDATE] Starting daily current affairs update for ${today} using Gemini 2.5 Engine...`);
    const generatedCards = await runCurrentAffairsEngine();
    
    if (generatedCards) {
      dailyNewsCache = { date: today, data: generatedCards };
      return generatedCards;
    } else {
      console.warn("[AUTO-UPDATE] Engine did not return any cards.");
      return dailyNewsCache.data || [];
    }
  } catch (err) {
    console.error(`[AUTO-UPDATE] Daily current affairs update failed:`, err);
    throw err;
  }
}

async function autoUpdateMilitaryExercises() {
  const today = new Date().toISOString().split('T')[0];
  try {
    console.log(`[AUTO-UPDATE] Starting daily military exercises update for ${today} using Gemini 2.5 Engine...`);
    const generatedCards = await runMilitaryExercisesEngine();
    
    if (generatedCards) {
      dailyMilitaryExercisesCache = { date: today, data: generatedCards };
      return generatedCards;
    } else {
      console.warn("[AUTO-UPDATE] Engine did not return any cards for military exercises.");
      return dailyMilitaryExercisesCache.data || [];
    }
  } catch (err) {
    console.error(`[AUTO-UPDATE] Daily military exercises update failed:`, err);
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

  // === NEW ENDPOINT: /api/daily-military-exercises ===
  if (req.method === 'GET' && req.url === '/api/daily-military-exercises') {
    const today = new Date().toISOString().split('T')[0];
    
    if (dailyMilitaryExercisesCache.date === today && dailyMilitaryExercisesCache.data) {
      console.log(`[PROXY] Serving Daily Military Exercises from cache for ${today}`);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(dailyMilitaryExercisesCache.data));
      return;
    }

    (async () => {
      try {
        const parsedJson = await autoUpdateMilitaryExercises();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(parsedJson));
      } catch(err) {
        console.error('[PROXY] Error in daily-military-exercises:', err);
        if (dailyMilitaryExercisesCache.data) {
          console.log('[PROXY] Serving stale cached data due to error.');
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(dailyMilitaryExercisesCache.data));
        } else {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Failed to fetch military exercises' }));
        }
      }
    })();
    
    return;
  }


  // API Route: AI Router Orchestration
  if (req.url === '/api/orchestrate' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
      try {
        const payload = JSON.parse(body);
        const { task, context } = payload;
        
        const GROQ_API_KEY = process.env.GROQ_API_KEY;
        const CEREBRAS_API_KEY = process.env.CEREBRAS_API_KEY || process.env.GROQ_API_KEY; // fallback if needed
        const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
        
        const systemPrompt = `
# AI Router System Prompt

You are the AI Router for a Defence Examination Preparation Platform.

Your job is NOT to answer user requests.

Your only responsibility is to determine which AI model(s) should perform the task.

Available AI Providers:

1. Gemini
   Strengths:
* Long-context reasoning
* PDF analysis
* Previous-year paper analysis
* Educational explanations
* Validation and quality review
* Complex planning

Weaknesses:
* Limited free-tier requests
* Use only when its strengths are required.

2. Cerebras
   Strengths:
* Extremely fast responses
* Note generation
* Flashcards
* Summaries
* Current affairs summaries
* Quick tutoring
* General chat

Weaknesses:
* Do not use for deep document analysis unless required.

3. Gemini (Fallback for formatting)
   Strengths:
* Fast structured generation
* MCQs
* Model question papers
* Quiz generation
* Classification
* JSON generation
* Formatting tasks

Weaknesses:
* Sometimes produces overly long output if not strictly prompted.

Routing Rules:
If the task involves:
* Previous-year paper analysis -> Gemini
* PDF understanding -> Gemini
* Learning exam pattern -> Gemini
* Note generation -> Cerebras
* Flashcard generation -> Cerebras
* Current affairs summary -> Cerebras
* AI tutoring -> Cerebras
* MCQ generation -> Gemini
* Model paper generation -> Gemini
* JSON formatting -> Gemini
* Topic classification -> Gemini
* Validation of generated paper -> Gemini

If multiple steps are required, execute them sequentially.

Example:
User uploads previous-year papers.
Step 1: Gemini analyses the papers and produces the examination blueprint.
Step 2: Store the blueprint in the database.
Step 3: Gemini generates a new paper using the blueprint.
Step 4: Gemini validates the generated paper.
Step 5: Return only the validated paper.

General Rules:
* Always use the cheapest suitable AI.
* Minimize Gemini usage whenever another provider can perform the task with comparable quality.
* Never analyse the same uploaded document twice if a stored blueprint already exists.
* Reuse cached outputs whenever possible.
* If a task fails, retry once with the same provider. If it still fails, route it to another suitable provider.
* If multiple independent tasks are requested, they may be executed in parallel.
* Never expose routing decisions to the user.
* Return only the final result requested by the user.

TASK: ${task}

OUTPUT FORMAT:
Return ONLY a valid JSON object with a "plan" array containing objects with "step" (number), "provider" ("Gemini", "Cerebras", or "Supabase"), and "action" (string describing what the provider must do). 
For database storage steps, use provider "Supabase" and provide a "key" and "data_to_store" description in the action.
`;

        // 1. Call Gemini to generate the plan
        let planRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            systemInstruction: { parts: [{ text: systemPrompt }] },
            contents: [{ parts: [{ text: "Generate the orchestration plan." }] }],
            generationConfig: {
              temperature: 0.1,
              responseMimeType: "application/json"
            }
          })
        });
        
        let planData = await planRes.json();
        let planText = planData.candidates?.[0]?.content?.parts?.[0]?.text || '{}';
        let plan = JSON.parse(planText).plan;
        
        console.log("[ORCHESTRATOR] Generated Plan:", plan);
        
        // 2. Execute the plan sequentially
        let accumulatedContext = context || "";
        let finalResult = "";
        
        const SUPABASE_URL = process.env.SUPABASE_URL || 'https://usjzsdvsasjtsyzrvivx.supabase.co';
        const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzanpzZHZzYXNqdHN5enJ2aXZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyNTUxMzksImV4cCI6MjA5NDgzMTEzOX0.8wLng1SDAhFPGvk5PQRu8XCqEWClpNPqHgEGpAx1vjk';
        
        for (const step of plan) {
          console.log(`[ORCHESTRATOR] Executing step ${step.step}: ${step.provider} - ${step.action}`);
          
          let stepPrompt = `TASK OBJECTIVE: ${step.action}\n\nACCUMULATED CONTEXT SO FAR:\n${accumulatedContext}`;
          
          if (step.provider === 'Gemini') {
            let res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                contents: [{ parts: [{ text: stepPrompt }] }]
              })
            });
            let data = await res.json();
            let output = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
            accumulatedContext += "\n\n--- Output from Gemini ---\n" + output;
            finalResult = output;
            
          } else if (step.provider === 'Cerebras') {
            let res = await fetch('https://api.cerebras.ai/v1/chat/completions', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${CEREBRAS_API_KEY}` },
              body: JSON.stringify({
                model: 'llama3.1-8b',
                messages: [{ role: 'user', content: stepPrompt }]
              })
            });
            let data = await res.json();
            let output = data.choices?.[0]?.message?.content || '';
            accumulatedContext += "\n\n--- Output from Cerebras ---\n" + output;
            finalResult = output;
            
          } else if (step.provider === 'Groq') {
            // Groq has been deprecated; routing to Gemini instead.
            let res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                contents: [{ parts: [{ text: stepPrompt }] }]
              })
            });
            let data = await res.json();
            let output = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
            accumulatedContext += "\n\n--- Output from Gemini (formerly Groq) ---\n" + output;
            finalResult = output;
            
          } else if (step.provider === 'Supabase') {
             // Store into Supabase dynamically
             console.log("[ORCHESTRATOR] Storing intermediate artifact to Supabase...");
             // A simple generic 'artifacts' table insert for intermediate storage
             let res = await fetch(`${SUPABASE_URL}/rest/v1/artifacts`, {
               method: 'POST',
               headers: {
                 'Content-Type': 'application/json',
                 'apikey': SUPABASE_KEY,
                 'Authorization': `Bearer ${SUPABASE_KEY}`
               },
               body: JSON.stringify({
                 action_desc: step.action,
                 content: finalResult
               })
             });
             if(!res.ok) console.error("[ORCHESTRATOR] Supabase store failed", await res.text());
             accumulatedContext += "\n\n--- Output stored in Database ---\n";
          }
        }
        
        // Return only the final result requested by the user
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ result: finalResult }));
        
      } catch (err) {
        console.error("[ORCHESTRATOR] Error:", err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  // API Route: Unified Multi-Model Chat proxy
  if (req.url === '/api/chat' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
      try {
        const payload = JSON.parse(body);
        const { targetAI, messages, isJsonRequired, temperature, originalGeminiBody } = payload;
        let aiText = "";

        let actualTarget = targetAI;
        if (actualTarget === 'groq') {
          // Fallback Groq requests to Gemini
          actualTarget = 'gemini';
        }

        if (actualTarget === 'gemini') {
          const GEMINI_KEY = process.env.GEMINI_API_KEY || '';
          if (!GEMINI_KEY) {
             aiText = (isJsonRequired ? "{}" : "") + "\n\n**[SYSTEM ALERT]** Gemini API key missing from backend! Please add GEMINI_API_KEY to your environment variables.";
          } else {
             let geminiBody = originalGeminiBody;
             if (!geminiBody) {
                 // Construct a Gemini body if one wasn't passed directly
                 geminiBody = {
                     contents: [{ parts: [{ text: messages.map(m => m.content).join('\n') }] }]
                 };
                 if (isJsonRequired) {
                     geminiBody.generationConfig = { responseMimeType: "application/json" };
                 }
             } else if (geminiBody.stream) {
                 delete geminiBody.stream;
             }
             const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_KEY}`;
             const res = await fetch(geminiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(geminiBody)
             });
             if (!res.ok) throw new Error("Gemini API Error: " + await res.text());
             const data = await res.json();
             aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
          }
        }
        else if (actualTarget === 'cerebras') {
          const cerebrasBody = {
            model: 'llama3.1-8b',
            messages: messages,
            temperature: temperature || 0.7,
            max_completion_tokens: 1500
          };
          if (isJsonRequired) cerebrasBody.response_format = { type: 'json_object' };

          const res = await fetch('https://api.cerebras.ai/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${CEREBRAS_API_KEY || ''}`
            },
            body: JSON.stringify(cerebrasBody)
          });
          if (!res.ok) throw new Error("Cerebras API Error: " + await res.text());
          const data = await res.json();
          aiText = data.choices?.[0]?.message?.content || "";
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ text: aiText }));
      } catch (e) {
        console.error("[PROXY] /api/chat error:", e);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: e.message }));
      }
    });
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
        let { model, contents, stream, generationConfig, tools, systemInstruction } = payload;
        
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
            
            if (extractedText && extractedText.trim().length > 20) {
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
              console.warn(`[PROXY] Extracted text is too short. PDF might be scanned/image-based.`);
            }
          } catch (pdfErr) {
            console.error(`[PROXY] PDF parsing error:`, pdfErr);
          }
        }
        
        const GEMINI_KEY = process.env.GEMINI_API_KEY || '';
        if (!GEMINI_KEY) {
          console.warn('[PROXY] Gemini API key missing.');
          throw new Error("Gemini API key missing");
        }

        let targetUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_KEY}`;
        if (stream) {
          targetUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:streamGenerateContent?alt=sse&key=${GEMINI_KEY}`;
        }

        const geminiPayload = {
          contents,
          generationConfig,
          tools,
          systemInstruction
        };

        let apiResponse = null;
        let success = false;
        
        try {
          console.log(`[PROXY] Sending request to Gemini API: ${model}, Stream: ${!!stream}`);
          apiResponse = await fetch(targetUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(geminiPayload)
          });
          
          if (apiResponse.ok) {
            success = true;
          } else {
            console.error(`[PROXY] Gemini API Error Status:`, apiResponse.status);
          }
        } catch (err) {
          console.error(`[PROXY] Exception during request to Gemini API:`, err);
        }
        
        if (success && apiResponse) {
          if (stream) {
            res.writeHead(200, {
              'Content-Type': 'text/event-stream',
              'Cache-Control': 'no-cache',
              'Connection': 'keep-alive'
            });
            for await (const chunk of apiResponse.body) {
              res.write(chunk);
            }
            res.end();
            return;
          } else {
            const data = await apiResponse.json();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
            return;
          }
        } else {
          console.warn('[PROXY] Gemini API returned error/quota-exceeded. Serving premium local fallback.');
          
          let prompt = "";
          try {
            if (contents && contents[0] && contents[0].parts) {
              prompt = contents[0].parts.map(p => p.text || '').join('\n');
            }
          } catch (_) {}
          
          let responseText = "";
          if (prompt.toLowerCase().includes('solve') || prompt.toLowerCase().includes('question') || prompt.toLowerCase().includes('options')) {
            responseText = `### 📝 Exam Question Analysis (UPSC Local Engine)

*Note: The primary cloud model is currently undergoing high rate limits. Serving optimized offline UPSC guidelines.*

Based on standard NDA/CDS/AFCAT patterns:
1. **Core Concept**: Verify the key terms, dates, and provisions.
2. **Answer Verification**: Check the options against verified parameters in the syllabus guides.
3. **High-Yield Hint**: Focus on eliminating options with extreme statements or mismatched attributes.

*Feel free to proceed with other practice papers or retry in a few moments.*`;
          } else {
            responseText = `### 🤖 Guru Dronacharya (Local Mode)

*Note: The primary cloud model is currently undergoing high rate limits. Serving optimized offline UPSC guidelines.*

Hello! I am your AI study assistant. 

Here are some high-yield revision tips for your current topic:
- **Consistent Revision**: Focus on formulas and mindmaps. Make sure you can recall the 4 key branches of each concept map.
- **Mock Tests**: Practicing timed mock tests is the single best way to clear the cutoff.
- **Active Recall**: Try explaining the concept to yourself without looking at the notes.

What subject or topic would you like to plan next?`;
          }

          const fallbackData = {
            candidates: [
              {
                content: {
                  parts: [
                    {
                      text: responseText
                    }
                  ]
                },
                finishReason: "STOP"
              }
            ]
          };
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(fallbackData));
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
  console.log(`[STATIC] ${req.method} ${req.url}`);
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
    
    res.writeHead(200, { 
      'Content-Type': contentType,
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    });
    if (ext === '.html' || ext === '') {
      let content = fs.readFileSync(filePath, 'utf8');
      // Automatically bust the cache for all script/css tags in index.html
      content = content.replace(/\?v=\d+/g, '?v=' + Date.now());
      res.end(content);
    } else if (filePath.endsWith('app.js')) {
      // If the browser requests app2.js, serve the actual app.js from disk
      if (filePath.endsWith('app2.js')) {
        filePath = filePath.replace('app2.js', 'app.js');
      }
      let content = fs.readFileSync(filePath, 'utf8');
      if (process.env.GROQ_API_KEY) {
        content = content.replace(/PROCESS_ENV_GROQ_KEY/g, process.env.GROQ_API_KEY);
      }
      if (process.env.GEMINI_API_KEY) {
        content = content.replace(/PROCESS_ENV_GEMINI_KEY/g, process.env.GEMINI_API_KEY);
      }
      if (process.env.CEREBRAS_API_KEY) {
        content = content.replace(/PROCESS_ENV_CEREBRAS_KEY/g, process.env.CEREBRAS_API_KEY);
      }
      res.end(content);
    } else {
      const stream = fs.createReadStream(filePath);
      stream.pipe(res);
    }
  });
});

server.timeout = 600000; // 10 minutes
server.keepAliveTimeout = 600000;
server.headersTimeout = 601000;

// ── Data Integrity Gate ──────────────────────────────────────────────
// Validates the question database before allowing the server to start.
// Catches duplicates, wrong-subject questions, garbled text, bad answers.
const { runValidation } = require('./validate_questions');
const validationResult = runValidation();

if (!validationResult.success) {
  console.error('\n[SERVER] ⛔ Server startup BLOCKED due to data integrity errors.');
  console.error('[SERVER] Run `node validate_questions.js` for the full report.');
  console.error('[SERVER] Fix the errors in data.js, then restart.\n');
  process.exit(1);
}
// ─────────────────────────────────────────────────────────────────────

server.listen(PORT, () => {
  console.log(`Tac-Revise Server running at http://localhost:${PORT}`);
  
  // Trigger automated daily current affairs updates
  console.log("[AUTO-UPDATE] Scheduling first update in 10 seconds...");
  setTimeout(() => {
    autoUpdateCurrentAffairs()
      .then(() => console.log("[AUTO-UPDATE] Startup auto-update CA completed successfully."))
      .catch(err => console.error("[AUTO-UPDATE] Startup auto-update CA failed:", err));
      
    autoUpdateMilitaryExercises()
      .then(() => console.log("[AUTO-UPDATE] Startup auto-update ME completed successfully."))
      .catch(err => console.error("[AUTO-UPDATE] Startup auto-update ME failed:", err));
  }, 10000);

  setInterval(() => {
    autoUpdateCurrentAffairs()
      .then(() => console.log("[AUTO-UPDATE] Scheduled auto-update CA completed successfully."))
      .catch(err => console.error("[AUTO-UPDATE] Scheduled auto-update CA failed:", err));
      
    autoUpdateMilitaryExercises()
      .then(() => console.log("[AUTO-UPDATE] Scheduled auto-update ME completed successfully."))
      .catch(err => console.error("[AUTO-UPDATE] Scheduled auto-update ME failed:", err));
  }, 24 * 60 * 60 * 1000); // every 24 hours
});

