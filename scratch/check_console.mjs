import * as puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', error => console.log('BROWSER ERROR:', error.message));
  page.on('requestfailed', request => console.log('REQUEST FAILED:', request.url(), request.failure().errorText));

  try {
    await page.goto('http://localhost:4000', { waitUntil: 'networkidle0', timeout: 5000 });
  } catch (e) {
    console.log('Navigation error:', e.message);
  }

  await browser.close();
})();
