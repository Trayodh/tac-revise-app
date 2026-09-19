const fs = require('fs');
const puppeteer = require('puppeteer-core');

(async () => {
    fs.writeFileSync('test_tts.html', `
        <script src="sarvam_browser.js"></script>
        <script>
            (async () => {
                try {
                    const client = new SarvamAI.SarvamAIClient({ apiSubscriptionKey: 'sk_v3bby5fy_DhmPey79kHxLFgrdxBWA0eZ5' });
                    const response = await client.textToSpeech.convert({
                        text: 'Hello, this is Kavya speaking testing.',
                        target_language_code: 'en-IN',
                        speaker: 'kavya',
                        pace: 1.0,
                        speech_sample_rate: 8000,
                        enable_preprocessing: true,
                        model: 'bulbul:v3'
                    });
                    console.log('SUCCESS, Audio generated:', !!response.audios);
                } catch (e) {
                    console.log('SDK ERROR:', e.message);
                }
            })();
        </script>
    `);
    
    const browser = await puppeteer.launch({ 
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        headless: 'new' 
    });
    const page = await browser.newPage();
    page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
    
    await page.goto('file://' + __dirname.replace(/\\/g, '/') + '/test_tts.html');
    await new Promise(r => setTimeout(r, 6000));
    await browser.close();
})();
