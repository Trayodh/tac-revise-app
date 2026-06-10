const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function runTest() {
  console.log("Launching browser...");
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Listen for console messages
  page.on('console', msg => {
    console.log(`[BROWSER CONSOLE] ${msg.type().toUpperCase()}: ${msg.text()}`);
  });

  // Listen for page errors
  page.on('pageerror', err => {
    console.error(`[BROWSER ERROR] ${err.toString()}\nStack: ${err.stack}`);
  });

  // Listen for network requests
  page.on('request', request => {
    if (request.url().includes('/api/')) {
      console.log(`[BROWSER NET] Request: ${request.method()} ${request.url()}`);
    }
  });

  page.on('requestfailed', request => {
    if (request.url().includes('/api/')) {
      console.log(`[BROWSER NET] Request Failed: ${request.url()} - ${request.failure().errorText}`);
    }
  });

  page.on('requestfinished', request => {
    if (request.url().includes('/api/')) {
      console.log(`[BROWSER NET] Request Finished: ${request.url()}`);
    }
  });

  console.log("Navigating to http://localhost:4000...");
  await page.goto('http://localhost:4000', { waitUntil: 'networkidle2' });

  console.log("Navigating to Paper Solver screen...");
  await page.evaluate(() => {
    switchScreen('paper-solver');
  });

  // Create a small test PDF file if it doesn't exist
  const testPdfPath = path.join(__dirname, 'test_small.pdf');
  fs.writeFileSync(testPdfPath, '%PDF-1.4 ... dummy content ...');

  console.log(`Uploading test PDF: ${testPdfPath}`);
  const fileInput = await page.$('#ai-paper-upload');
  await fileInput.uploadFile(testPdfPath);

  console.log("Clicking Solve Paper button...");
  await page.click('#ai-solve-paper-btn');

  // Wait 10 seconds to see if it makes the request and get logs
  console.log("Waiting for network activity...");
  await new Promise(r => setTimeout(r, 10000));

  // Clean up
  try { fs.unlinkSync(testPdfPath); } catch(e) {}
  await browser.close();
  console.log("Test finished.");
}

runTest().catch(err => {
  console.error("Test failed:", err);
});
