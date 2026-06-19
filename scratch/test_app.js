const { JSDOM } = require('jsdom');
const fs = require('fs');

(async () => {
  try {
    const virtualConsole = new (require('jsdom')).VirtualConsole();
    virtualConsole.on("error", (err) => {
      console.log('JSDOM BROWSER ERROR:', err);
    });
    virtualConsole.on("jsdomError", (err) => {
      console.log('JSDOM ERROR:', err.message, err.detail);
    });

    const dom = await JSDOM.fromFile('index.html', {
      runScripts: "dangerously",
      resources: "usable",
      virtualConsole
    });

    console.log("JSDOM initialized...");
    setTimeout(() => {
      console.log("Checking if dashboard is rendered...");
      console.log("Motivation content:", dom.window.document.getElementById('motivation-hero') ? dom.window.document.getElementById('motivation-hero').textContent : 'MISSING');
      process.exit(0);
    }, 2000);
  } catch (e) {
    console.error("Setup error:", e);
  }
})();
