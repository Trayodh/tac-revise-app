const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

(async () => {
    fs.writeFileSync('test_sdk.html', '<script src="sarvamai.bundle.js"></script><script>console.log("KEYS:", Object.keys(SarvamAI).join(", "));</script>');
    const browser = await puppeteer.launch({ 
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        headless: 'new' 
    });
    const page = await browser.newPage();
    page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
    await page.goto('file://' + __dirname.replace(/\\/g, '/') + '/test_sdk.html', {waitUntil: 'networkidle0'});
    await browser.close();
})();
