const fs = require('fs');
const path = require('path');
require('dotenv').config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'AIzaSyA0g3U1Nro31TC8ow-oaaaEwZ5mpRQ7MJM';

// UPSC topic categories
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

const PIB_RSS_FEEDS = [
  'https://pib.gov.in/RssMain.aspx?ModId=6&Lang=1&Regid=3',
];

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
    while ((match = itemRegex.exec(xml)) !== null && items.length < 3) {
      const c = match[1];
      const titleM  = c.match(/<title>([\s\S]*?)<\/title>/);
      const descM   = c.match(/<description>([\s\S]*?)<\/description>/) || c.match(/<summary>([\s\S]*?)<\/summary>/);
      const dateM   = c.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
      let title = titleM ? titleM[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g,'$1').replace(/<[^>]*>/g,'').trim() : '';
      let desc  = descM  ? descM[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g,'$1').replace(/<[^>]*>/g,'').substring(0,200).trim() : '';
      let pubDate = dateM ? dateM[1].trim() : '';
      if (title) items.push({ title, description: desc, pubDate });
    }
    return items;
  } catch(_) { return []; }
}

async function runTest() {
  console.log("Fetching RSS items...");
  const rawItems = await fetchRssFeed(PIB_RSS_FEEDS[0]);
  console.log(`Fetched ${rawItems.length} items.`);
  
  const today = new Date().toISOString().split('T')[0];
  const topicColorMap = UPSC_TOPIC_CATEGORIES.reduce((acc, t) => { acc[t.name] = t.color; return acc; }, {});
  
  const prompt = `You are a senior UPSC exam expert and IAS coach. Today is ${today}.
Generate a JSON array of 2 Current Affairs cards based on:
${JSON.stringify(rawItems)}

JSON structure for each card:
{
  "id": "ca_live_test_1",
  "topic": "Polity & Governance",
  "topicColor": "#4f46e5",
  "summary": "Test summary",
  "text": "Test HTML description",
  "quickSummary": "Quick summary",
  "detailedAnalysis": "Concise deep-dive",
  "backgroundContext": "Concise background",
  "stakeholders": ["India"],
  "examRelevanceMatrix": {"NDA": "High", "CDS": "High", "AFCAT": "High", "CAPF": "High", "UPSC": "High"},
  "relatedTopics": ["[[Polity]]"],
  "potentialQuestions": {"shortAnswers": ["Q"], "interviewQuestions": ["Q"], "ssbDiscussionTopics": ["Q"]},
  "upscHighlights": ["Fact"],
  "institutionalContext": "Ministry",
  "strategicImportance": "Relevance",
  "originalSource": "PIB",
  "publicationDate": "${today}",
  "lastUpdatedDate": "${today}",
  "verificationStatus": "Verified",
  "relatedOfficialDocuments": "None",
  "mcq": {"question": "Q", "options": ["A","B","C","D"], "correct": 0, "explanation": "Exp"}
}
Return ONLY a raw JSON array. No markdown fences.`;

  console.log("Calling Gemini API...");
  const model = 'gemini-2.5-flash';
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
  
  try {
    const gemRes = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.1, maxOutputTokens: 8192, response_mime_type: 'application/json' }
      })
    });
    
    console.log("Response status:", gemRes.status);
    if (!gemRes.ok) {
      console.log("Error response body:", await gemRes.text());
      return;
    }
    
    const gemData = await gemRes.json();
    const rawText = gemData?.candidates?.[0]?.content?.parts?.[0]?.text || '';
    console.log("Raw text length:", rawText.length);
    console.log("Raw text:", rawText);
    
    const cleaned = rawText.replace(/^```json\s*/,'').replace(/\s*```$/,'').trim();
    const parsed = JSON.parse(cleaned);
    console.log("Parsed JSON successfully! Number of items:", parsed.length);
  } catch (err) {
    console.error("Test failed with exception:", err);
  }
}

runTest();
