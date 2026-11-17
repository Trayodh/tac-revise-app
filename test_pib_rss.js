async function testPib() {
  const url = 'https://pib.gov.in/RSSFeed.aspx';
  try {
    console.log("Fetching PIB RSS feed...");
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    console.log("Status:", res.status);
    const xml = await res.text();
    console.log("Received XML length:", xml.length);
    console.log("First 1000 characters of XML:\n", xml.substring(0, 1000));
    
    // Simple regex to count <item> tags
    const items = xml.match(/<item>([\s\S]*?)<\/item>/g);
    console.log("Found items:", items ? items.length : 0);
  } catch (err) {
    console.error("Error fetching PIB RSS:", err);
  }
}

testPib();
