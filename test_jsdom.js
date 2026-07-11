const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = fs.readFileSync('index.html', 'utf8');

const dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" });
const window = dom.window;
const document = window.document;

// Mock some APIs for the browser
window.localStorage = {
  getItem: () => null,
  setItem: () => {}
};

// Wait for load
dom.window.addEventListener('load', () => {
  console.log("Window loaded!");
  try {
    if (typeof window.openNotesSubject !== 'function') {
      console.log("openNotesSubject is not a function:", window.openNotesSubject);
    } else {
      console.log("Calling openNotesSubject('mathematics')...");
      window.openNotesSubject('mathematics');
      
      const chaptersList = document.getElementById('notes-accordion-list');
      console.log("chaptersList innerHTML length:", chaptersList.innerHTML.length);
      console.log("chaptersList children:", chaptersList.children.length);
      
      if (chaptersList.children.length === 0) {
        console.log("Accordion list is EMPTY! Something failed in renderNotesBrowser()");
      }
    }
  } catch (err) {
    console.error("Caught error:", err);
  }
});
