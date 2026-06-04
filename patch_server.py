import re

with open('server.js', 'r', encoding='utf-8') as f:
    server_code = f.read()

cache_code = """
// Cache for Daily Current Affairs
let dailyNewsCache = { date: '', data: null };

"""

endpoint_code = """
  // API Route: Daily Current Affairs
  if (req.url === '/api/daily-current-affairs' && req.method === 'GET') {
    const today = new Date().toISOString().split('T')[0];
    
    if (dailyNewsCache.date === today && dailyNewsCache.data) {
      console.log(`[PROXY] Serving Daily Current Affairs from cache for ${today}`);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(dailyNewsCache.data));
      return;
    }

    console.log(`[PROXY] Fetching new Daily Current Affairs for ${today} from Gemini...`);
    const prompt = `Generate exactly 4 of the most important Indian Defence current affairs updates for today (${today}). 
Return the output strictly as a JSON array of objects. Do not include any markdown formatting or code blocks.
Each object must have exactly these keys: 
"id" (string, e.g. "ca_daily_1"),
"title" (string),
"date" (string, format: "DD MMM YYYY"),
"content" (string, 1-2 short sentences),
"details" (object with keys: "winner", "award", "nationality"). You can repurpose these keys to fit the news context (e.g. winner -> entity, award -> event, nationality -> location).`;

    const payload = {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.2,
        response_mime_type: "application/json"
      }
    };

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
    
    fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(r => r.json())
    .then(data => {
      try {
        const textResponse = data.candidates[0].content.parts[0].text;
        const parsedJson = JSON.parse(textResponse);
        
        dailyNewsCache = {
          date: today,
          data: parsedJson
        };
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(parsedJson));
      } catch (err) {
        console.error('[PROXY] Error parsing daily news JSON:', err, data);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Failed to parse AI response' }));
      }
    })
    .catch(err => {
      console.error('[PROXY] Error fetching daily news:', err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal Server Error fetching news' }));
    });
    
    return;
  }
"""

if "let dailyNewsCache" not in server_code:
    # Insert cache initialization near the top after RATE_LIMIT variables
    server_code = re.sub(
        r'const MAX_REQUESTS_PER_WINDOW = 15;',
        f'const MAX_REQUESTS_PER_WINDOW = 15;\n{cache_code}',
        server_code
    )

if "/api/daily-current-affairs" not in server_code:
    # Insert endpoint
    server_code = re.sub(
        r'(// API Route: Solve Paper or Chatbot proxy)',
        f'{endpoint_code}\n  \\1',
        server_code
    )

with open('server.js', 'w', encoding='utf-8') as f:
    f.write(server_code)

print("server.js patched successfully.")
