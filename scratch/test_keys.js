const envKey = 'AQ.Ab8RN6IFA0WSWUSD_CH9N98HtvrPy3OWznEoFH1mekYQ0yGWag';
const fallbackKey = 'AIzaSyA0g3U1Nro31TC8ow-oaaaEwZ5mpRQ7MJM';

async function testKey(key, name) {
  // Let's use v1beta models/gemini-2.5-flash or models/gemini-1.5-flash
  // Note: v1beta requires models/ prefix or not depending on URL
  const targetUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`;
  const payload = {
    contents: [{ parts: [{ text: "Hello" }] }]
  };
  try {
    const res = await fetch(targetUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      console.log(`Key ${name} is WORKING!`);
      return true;
    } else {
      const txt = await res.text();
      console.log(`Key ${name} FAILED (${res.status}): ${txt.substring(0, 200)}`);
      return false;
    }
  } catch (e) {
    console.log(`Key ${name} ERROR: ${e.message}`);
    return false;
  }
}

async function main() {
  console.log("Testing envKey...");
  await testKey(envKey, "ENV_KEY");
  console.log("\nTesting fallbackKey...");
  await testKey(fallbackKey, "FALLBACK_KEY");
}

main();
