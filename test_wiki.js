const axios = require('axios');
async function test() {
  try {
    const topic = 'List of active Indian military aircraft';
    const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(topic)}&utf8=&format=json`;
    const searchRes = await axios.get(searchUrl, { headers: { 'User-Agent': 'DefenceExamsApp/1.0 (trayodh@example.com)' } });
    const topResult = searchRes.data.query.search[0];
    console.log('Top match:', topResult.title);
    
    const pageUrl = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro=false&explaintext=true&titles=${encodeURIComponent(topResult.title)}&format=json`;
    const pageRes = await axios.get(pageUrl, { headers: { 'User-Agent': 'DefenceExamsApp/1.0 (trayodh@example.com)' } });
    const pages = pageRes.data.query.pages;
    const pageId = Object.keys(pages)[0];
    console.log('Content snippet:', pages[pageId].extract.substring(0, 500));
  } catch (err) {
    console.error(err.message);
  }
}
test();
