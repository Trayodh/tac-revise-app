const axios = require('axios');
const cheerio = require('cheerio');

async function searchRecent(topic) {
  try {
    const query = `${topic} "2025" OR "2026"`;
    const searchUrl = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`;
    console.log('Fetching:', searchUrl);
    
    const res = await axios.get(searchUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5'
      }
    });
    
    const $ = cheerio.load(res.data);
    let results = [];
    $('.result__snippet').each((i, el) => {
      results.push($(el).text().trim());
    });
    
    console.log('Snippets:', results.join('\n\n'));
  } catch (err) {
    console.error('Error:', err.message);
  }
}

searchRecent('Indian Air Force helicopters induction');
