const https = require('https');
https.get('https://www.youtube.com/results?search_query=Tum+Se+Hi+lofi', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const matches = [...data.matchAll(/\"videoId\":\"([a-zA-Z0-9_-]{11})\"/g)];
    console.log([...new Set(matches.map(m => m[1]))].slice(0, 5));
  });
});
