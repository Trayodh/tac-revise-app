const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log(`[CONSOLE] ${msg.text()}`));
  page.on('pageerror', err => console.log(`[PAGE ERROR] ${err.toString()}`));
  
  await page.goto('file:///' + __dirname.replace(/\\/g, '/') + '/index.html', { waitUntil: 'networkidle0' });
  
  console.log("Page loaded. Clicking 'Notes'...");
  await page.evaluate(() => {
    switchScreen('notes');
  });
  
  await new Promise(r => setTimeout(r, 1000));
  console.log("Clicking 'Mathematics' subject...");
  await page.evaluate(() => {
    openNotesSubject('mathematics');
  });
  
  await new Promise(r => setTimeout(r, 1000));
  console.log("Test finished.");
  await browser.close();
}
run().catch(console.error);
