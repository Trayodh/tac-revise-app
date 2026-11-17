// fetch_wiki_diagrams.js
const fs = require('fs');

let notesDataTxt = fs.readFileSync('notes_data.js', 'utf8');
notesDataTxt = notesDataTxt
  .replace('const NOTES_DATABASE =', 'global.NOTES_DATABASE =')
  .replace('let CURRENT_AFFAIRS_DB =', 'global.CURRENT_AFFAIRS_DB =');
eval(notesDataTxt);
const db = global.NOTES_DATABASE;

const OUTPUT_FILE = 'notes_diagrams_data.js';

let topicImages = {};
if (fs.existsSync(OUTPUT_FILE)) {
  global.window = global;
  let existingTxt = fs.readFileSync(OUTPUT_FILE, 'utf8');
  eval(existingTxt);
  if (global.window && global.window.TOPIC_IMAGES) {
    topicImages = global.window.TOPIC_IMAGES;
  }
}

async function fetchWikiImage(query) {
    try {
        // Step 1: Search Wikipedia for the closest article
        const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&utf8=&format=json`;
        const headers = { 'User-Agent': 'TacReviseApp/1.0 (test@example.com)' };
        const searchRes = await fetch(searchUrl, { headers });
        const searchData = await searchRes.json();
        
        if (!searchData.query || !searchData.query.search || searchData.query.search.length === 0) {
            return null;
        }
        
        const bestTitle = searchData.query.search[0].title;
        
        // Step 2: Fetch the summary of that article to get the primary image
        const summaryUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(bestTitle)}`;
        const summaryRes = await fetch(summaryUrl, { headers });
        const summaryData = await summaryRes.json();
        
        if (summaryData && summaryData.originalimage && summaryData.originalimage.source) {
            return {
                url: summaryData.originalimage.source,
                title: bestTitle,
                description: summaryData.description || bestTitle
            };
        }
        return null;
    } catch (e) {
        console.log(`Failed to fetch for ${query}: ${e.message}`);
        return null;
    }
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function processAll() {
    const subjects = ['history', 'geography', 'polity', 'physics', 'chemistry', 'biology', 'mathematics'];
    let count = 0;

    for (const subject of subjects) {
        if (!db[subject] || !db[subject].chapters) continue;
        
        for (const c of db[subject].chapters) {
            for (const t of c.topics) {
                if (t.id.includes('pyq-trends')) continue;
                
                // If we already fetched an image successfully, skip it
                if (topicImages[t.id]) continue;
                
                let query = t.title || t.name;
                // Add subject context to improve search accuracy
                if (subject === 'history' && !query.toLowerCase().includes('history')) query += ' History India';
                if (subject === 'geography' && !query.toLowerCase().includes('geography')) query += ' Geography';
                if (subject === 'polity' && !query.toLowerCase().includes('india')) query += ' Constitution India';
                
                console.log(`Searching Wiki for: ${query}`);
                
                const imageData = await fetchWikiImage(query);
                if (imageData) {
                    topicImages[t.id] = imageData;
                    count++;
                    console.log(`  ✓ Found image: ${imageData.title}`);
                } else {
                    console.log(`  ❌ No image found.`);
                    // Store a null so we don't retry unnecessarily
                    topicImages[t.id] = { url: null };
                }
                
                // Polite delay for Wikipedia API
                await sleep(500);
            }
        }
    }
    
    // Save to the data file. We will replace TOPIC_DIAGRAMS entirely since the user doesn't want the old flowcharts at all.
    const content = `// Auto-generated Wikipedia Image Mappings\nwindow.TOPIC_IMAGES = ${JSON.stringify(topicImages, null, 2)};\n`;
    fs.writeFileSync(OUTPUT_FILE, content, 'utf8');
    console.log(`Done! Found ${count} new images.`);
}

processAll();
