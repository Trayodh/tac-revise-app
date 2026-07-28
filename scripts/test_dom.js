const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const html = fs.readFileSync('index.html', 'utf8');

const virtualConsole = new jsdom.VirtualConsole();
virtualConsole.on("error", (err) => {
  console.log("JSDOM Error:", err);
});
virtualConsole.on("jsdomError", (err) => {
  console.log("JSDOM Internal Error:", err.message);
});
virtualConsole.on("log", (msg) => {
  console.log("JSDOM Log:", msg);
});

const dom = new JSDOM(html, {
  runScripts: "dangerously",
  resources: "usable",
  virtualConsole
});

setTimeout(() => {
    console.log("Finished waiting for JSDOM.");
    process.exit(0);
}, 3000);
