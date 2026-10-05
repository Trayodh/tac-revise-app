const axios = require('axios');
async function test() {
    const topic = 'Fighter jets in IAF';
    const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(topic)}&utf8=&format=json`;
    const searchRes = await axios.get(searchUrl, { headers: { 'User-Agent': 'DefenceExamsApp/1.0 (admin@example.com)' } });
    if (searchRes.data && searchRes.data.query && searchRes.data.query.search.length > 0) {
        console.log('Top match:', searchRes.data.query.search[0].title);
        const pageUrl = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro=false&explaintext=true&titles=${encodeURIComponent(searchRes.data.query.search[0].title)}&format=json`;
        const pageRes = await axios.get(pageUrl, { headers: { 'User-Agent': 'DefenceExamsApp/1.0 (admin@example.com)' } });
        const pages = pageRes.data.query.pages;
        const pageId = Object.keys(pages)[0];
        const extract = pages[pageId].extract;
        console.log('Snippet length:', extract.length);
        console.log(extract.substring(0, 500));
        
        // Find if MiG-21 retirement is in the extract
        console.log('Mentions MiG-21?', extract.includes('MiG-21'));
        console.log('Mentions retired/phased?', extract.includes('retire') || extract.includes('phased'));
    } else {
        console.log('No matches');
    }
}
test();
