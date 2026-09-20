async function testFeed(url) {
  try {
    console.log("Fetching feed from:", url);
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    console.log("Status:", res.status);
    const text = await res.text();
    console.log("Length:", text.length);
    console.log("Preview:\n", text.substring(0, 500));
  } catch (err) {
    console.error("Error for", url, ":", err.message);
  }
}

async function main() {
  await testFeed('https://nationaldefence.in/feed');
  await testFeed('https://ajaishukla.com/feeds/posts/default');
}

main();
