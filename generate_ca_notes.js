/**
 * generate_ca_notes.js
 * Generates structured Current Affairs notes from current_affairs_db.js
 */
require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

async function gemini(prompt) {
    let retries = 3;
    while (retries > 0) {
        try {
            const result = await model.generateContent(prompt);
            return result.response.text();
        } catch (e) {
            if (e.message && e.message.includes("429")) {
                console.log("[Gemini] Rate limited. Waiting 60s...");
                await new Promise(r => setTimeout(r, 60000));
                retries--;
            } else { throw e; }
        }
    }
    throw new Error("Gemini quota exhausted");
}

function loadCADB() {
    let raw = fs.readFileSync("current_affairs_db.js", "utf8");
    // Strip ALL BOM characters (may appear multiple times in concatenated files)
    raw = raw.split("\uFEFF").join("");
    // Normalize line endings
    raw = raw.split("\r\n").join("\n");
    raw = raw.replace(/^window\.CURRENT_AFFAIRS_DB\s*=\s*/, "").replace(/;\s*$/, "");
    return JSON.parse(raw);
}


function flattenEvents(db) {
    const events = [];
    for (const [year, items] of Object.entries(db)) {
        for (const item of items) { events.push({ year, ...item }); }
    }
    return events;
}

const THEMES = [
    { id: "defence_operations", name: "Indian Military Operations", keywords: ["operation", "military", "hadr", "peacekeeping", "war", "border", "strike", "surgical"] },
    { id: "awards_honours", name: "Awards & Honours", keywords: ["award", "medal", "honour", "prize", "bravery", "gallantry", "padma", "bharat ratna"] },
    { id: "international_relations", name: "International Relations & Diplomacy", keywords: ["bilateral", "summit", "treaty", "agreement", "foreign", "un", "asean", "g20", "sco", "brics", "nato", "quad", "diplomatic"] },
    { id: "science_technology", name: "Science, Technology & Space", keywords: ["isro", "missile", "satellite", "launch", "space", "nuclear", "drdo", "chandrayaan", "aditya", "agni", "brahmos", "ins "] },
    { id: "economy_infrastructure", name: "Economy & Infrastructure", keywords: ["gdp", "budget", "economy", "infrastructure", "project", "scheme", "corridor", "highway", "railway", "port"] },
    { id: "sports_culture", name: "Sports & Culture", keywords: ["olympics", "commonwealth", "asian games", "cricket", "sport", "medal", "gold", "championship", "tournament"] },
    { id: "environment_disasters", name: "Environment & Disasters", keywords: ["climate", "environment", "disaster", "cyclone", "flood", "earthquake", "wildlife", "forest", "conservation", "cop"] },
    { id: "appointments", name: "Key Appointments & Organisations", keywords: ["appointed", "elected", "chairman", "president", "chief", "director", "general", "cds", "coas", "who", "imf"] },
    { id: "india_defence_forces", name: "Indian Defence Forces & Modernisation", keywords: ["ins", "iaf", "regiment", "squadron", "aircraft", "warship", "submarine", "helicopter", "fighter", "indigeno"] },
    { id: "miscellaneous_current", name: "Miscellaneous & Recent Events 2024-2025", keywords: [] }
];

function classifyEvent(event) {
    const text = (event.topic + " " + event.text).toLowerCase();
    for (const theme of THEMES.slice(0, -1)) {
        if (theme.keywords.some(kw => text.includes(kw))) return theme.id;
    }
    return "miscellaneous_current";
}

async function generateThemeNote(theme, events) {
    const eventsText = events.map(e => `[${e.year}] ${e.topic}: ${e.text}`).join("\n");
    const prompt = `You are an expert NDA/CDS 2026 exam coach. Generate a comprehensive Current Affairs master note for the theme: "${theme.name}".

Format as detailed Markdown with these sections:
# ${theme.name} — Current Affairs for NDA/CDS 2026

## 📋 QUICK OVERVIEW
## 🔑 KEY EVENTS & FACTS (table: Year | Event | Key Details | Exam Relevance)
## 📌 CRITICAL POINTS TO REMEMBER
## 🧠 MNEMONICS & MEMORY TRICKS
## ⚠️ EXAM TRAPS & COMMON MISTAKES
## 📝 LIKELY MCQ ANGLES
## 🔄 PYQ-STYLE PRACTICE QUESTIONS (3-5 MCQs with answers)

Raw Events:
${eventsText}

Be thorough, exam-focused, and include all facts from the raw events.`;
    return await gemini(prompt);
}

async function main() {
    console.log("Starting CA Notes Generation...");
    const db = loadCADB();
    const events = flattenEvents(db);
    console.log("Loaded", events.length, "events");

    const grouped = {};
    for (const theme of THEMES) grouped[theme.id] = { theme, events: [] };
    for (const event of events) grouped[classifyEvent(event)].events.push(event);

    console.log("\nTheme distribution:");
    for (const [id, { theme, events: evts }] of Object.entries(grouped)) {
        console.log(" ", theme.name + ":", evts.length);
    }

    const outDir = path.join(__dirname, "evolved_notes", "current-affairs");
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    let generated = 0;
    for (const [id, { theme, events: evts }] of Object.entries(grouped)) {
        const outFile = path.join(outDir, id + ".md");
        if (fs.existsSync(outFile)) { console.log("[SKIP]", theme.name); generated++; continue; }
        if (evts.length === 0) { console.log("[EMPTY]", theme.name); continue; }
        console.log("\n[GENERATING]", theme.name, "(" + evts.length + " events)...");
        try {
            const note = await generateThemeNote(theme, evts);
            fs.writeFileSync(outFile, note, "utf8");
            console.log("[SAVED]", outFile);
            generated++;
            await new Promise(r => setTimeout(r, 3000));
        } catch (e) {
            console.error("[FAILED]", theme.name + ":", e.message);
        }
    }
    console.log("\nDone! Generated", generated, "CA notes.");
}

main().catch(console.error);

