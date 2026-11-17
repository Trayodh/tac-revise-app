const puppeteer = require('puppeteer');

(async () => {
  console.log('Starting puppeteer...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1280, height: 800 });
  
  console.log('Navigating to localhost:4000...');
  await page.goto('http://localhost:4000', { waitUntil: 'networkidle2' });
  
  // Click Study Room
  await page.click('a[onclick="showSection(\\\'study-room\\\')"]');
  await new Promise(r => setTimeout(r, 500));
  
  // Click Mathematics
  await page.evaluate(() => {
    const cards = document.querySelectorAll('.subject-card');
    for (let card of cards) {
      if (card.textContent.includes('Mathematics')) {
        card.click();
        break;
      }
    }
  });
  await new Promise(r => setTimeout(r, 1000));
  
  // Click Trigonometry
  await page.evaluate(() => {
    const headers = document.querySelectorAll('.accordion-header');
    for (let h of headers) {
      if (h.textContent.includes('Trigonometry')) {
        h.click();
        break;
      }
    }
  });
  await new Promise(r => setTimeout(r, 1000));
  
  // Click Trigonometric Identities
  await page.evaluate(() => {
    const items = document.querySelectorAll('.topic-item');
    for (let item of items) {
      if (item.textContent.includes('Trigonometric Identities')) {
        item.click();
        break;
      }
    }
  });
  await new Promise(r => setTimeout(r, 2000));
  
  // Get DOM info
  const diagramHtml = await page.evaluate(() => {
    const visualRef = Array.from(document.querySelectorAll('div')).find(d => d.textContent.includes('Chapter Visual Reference'));
    if (visualRef) {
      return visualRef.parentElement.innerHTML;
    }
    return null;
  });
  
  console.log('Diagram HTML present?', diagramHtml ? 'YES (length: ' + diagramHtml.length + ')' : 'NO');
  
  // Scroll down
  await page.evaluate(() => {
    const pane = document.querySelector('.tab-pane-content');
    if (pane) pane.scrollTop = pane.scrollHeight;
    
    const notesText = document.querySelector('.notes-text');
    if (notesText) notesText.scrollTop = notesText.scrollHeight;
  });
  await new Promise(r => setTimeout(r, 1000));
  
  console.log('Saving screenshot to artifacts...');
  await page.screenshot({ path: 'C:\\Users\\Trayodh Khandalkar\\.gemini\\antigravity-ide\\brain\\4b6c30cd-7dbe-4ac4-8cce-ce635abd5e91\\diagram_screenshot.png' });
  
  await browser.close();
  console.log('Done.');
})();
