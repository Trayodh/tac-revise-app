const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error' || msg.type() === 'warning') {
      console.log(`PAGE LOG [${msg.type()}]:`, msg.text());
    }
  });

  page.on('pageerror', error => {
    console.log('PAGE ERROR:', error.message);
  });

  page.on('requestfailed', request => {
    console.log('REQUEST FAILED:', request.url(), request.failure().errorText);
  });

  try {
    await page.goto('http://localhost:4000', { waitUntil: 'networkidle2' });
    console.log('Page loaded successfully. Checking dashboard status...');
    const motivationText = await page.evaluate(() => {
      const el = document.getElementById('motivation-hero');
      return el ? el.textContent : 'NOT FOUND';
    });
    console.log('Motivation text:', motivationText);
  } catch (e) {
    console.error('Failed to load page:', e);
  }

  await browser.close();
})();
