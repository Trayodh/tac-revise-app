const http = require('http');
http.get('http://localhost:4000/api/daily-current-affairs', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log("Status:", res.statusCode);
    if (res.statusCode === 200) {
      try {
        const json = JSON.parse(data);
        console.log("Parsed JSON successfully, items:", json.length);
        const badItem = json.find(i => typeof i.quickSummary !== 'string' && typeof i.summary !== 'string');
        if (badItem) {
          console.log("Bad item found:", badItem);
        } else {
          console.log("Data seems okay at top level.");
        }
      } catch (e) {
        console.log("JSON parsing error:", e);
      }
    } else {
      console.log("Response data:", data);
    }
  });
}).on('error', (e) => {
  console.log("Request error:", e);
});
