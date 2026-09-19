require("dotenv").config();
const fs = require("fs");

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error("Missing GEMINI_API_KEY in .env");
  process.exit(1);
}

global.window = {};
const loadScript = (filename) => {
  try {
    if (fs.existsSync(filename)) {
      const code = fs.readFileSync(filename, "utf8");
      eval(code.replace(/(const|let|var)\s+(NOTES_DATABASE|OFFICIAL_SYLLABUS_DATA|PYQ_TRENDS_DATA|EXPANDED_NOTES_DATA)/g, "window.$2"));
    }
  } catch (e) { console.error("Load error:", e.message); }
};

loadScript("data.js");
const NOTES_DATABASE = window.NOTES_DATABASE;
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

function buildImagePrompt(topic, chapter, subject) {
  const subjectId = subject._id || "";
  const isMath = subjectId === "mathematics";
  const isHistory = subjectId === "history";
  const isGeography = subjectId === "geography";
  const isPolity = subjectId === "polity";
  const isBiology = subjectId === "biology";
  const isPhysics = subjectId === "physics";
  const isChemistry = subjectId === "chemistry";
  const isEconomics = subjectId === "economics";
  const isEnglish = subjectId === "english";

  let visualStyle = "";
  let contentHint = "";

  if (isMath) {
    visualStyle = "mathematical diagram with precise geometric shapes, equations, and formulas";
    contentHint = "Show the key formulas, geometric constructions, number lines, graphs, or step-by-step worked solutions. Use dark background with clear mathematical notation.";
  } else if (isHistory) {
    visualStyle = "historical infographic with timeline, maps, and key events";
    contentHint = "Include a timeline of key events, important dates in bold, names of rulers or leaders, and a simple map or diagram showing relevant regions or battles.";
  } else if (isGeography) {
    visualStyle = "geographical diagram or map with labels and annotations";
    contentHint = "Show a relevant map outline, geographical features like rivers, mountains, climate zones, or ocean currents with clear labels.";
  } else if (isPolity) {
    visualStyle = "constitutional infographic with flowcharts and hierarchy diagrams";
    contentHint = "Show the structure of government bodies, constitutional articles, rights, or powers using a clear hierarchy diagram with boxes and arrows. Include key article numbers.";
  } else if (isBiology) {
    visualStyle = "biological diagram with labeled anatomy or process flow";
    contentHint = "Draw a clean anatomical diagram, cell structure, process cycle, or classification hierarchy with clear labels and arrows.";
  } else if (isPhysics) {
    visualStyle = "physics diagram with labeled forces, waves, circuits, or equations";
    contentHint = "Show a ray diagram, circuit diagram, force diagram, or motion graph. Label all key components and include the core formula(s) prominently.";
  } else if (isChemistry) {
    visualStyle = "chemistry diagram with molecular structures, periodic table section, or reaction equations";
    contentHint = "Show relevant molecular structures, a reaction equation, or key chemical properties with labels.";
  } else if (isEconomics) {
    visualStyle = "economics infographic with graphs, charts, and key statistics";
    contentHint = "Show a demand-supply curve, economic cycle diagram, GDP components chart, or relevant economic model with labels.";
  } else if (isEnglish) {
    visualStyle = "grammar and vocabulary reference chart";
    contentHint = "Show a structured chart of grammar rules, tense tables, word forms, or vocabulary classification. Clean, text-based layout with examples.";
  } else {
    visualStyle = "educational infographic with key facts, diagrams, and labels";
    contentHint = "Show a structured diagram, flowchart, or key-facts panel covering the most important aspects of this topic.";
  }

  return `Create a high-quality educational study diagram for Indian Defence Exam (NDA/CDS/AFCAT) aspirants on the topic: "${topic.title}" from the chapter "${chapter.title}" in ${subject.title}. Style: ${visualStyle}. Content: ${contentHint}. Visual rules: dark premium background (dark navy #1a1a2e), bright contrasting text and elements (white, gold, sky blue, green), clean professional infographic style, bold legible fonts, title "${topic.title}" prominently at the top, at least 6-8 labeled elements or data points specific to this topic, landscape format. Do NOT include faces, watermarks, or logos.`;
}

async function generateImage(prompt, filename) {
  const model = "imagen-3.0-generate-002";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:predict?key=${GEMINI_API_KEY}`;
  
  let retries = 4;
  while (retries > 0) {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          instances: [{ prompt }],
          parameters: {
            sampleCount: 1,
            aspectRatio: "16:9",
            safetyFilterLevel: "BLOCK_ONLY_HIGH",
            personGeneration: "DONT_ALLOW"
          }
        })
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 429) {
          console.log("  Rate limited. Waiting 60s...");
          await sleep(60000);
          retries--;
          continue;
        }
        const errMsg = data.error?.message || JSON.stringify(data).substring(0,200);
        console.error("  API error:", errMsg);
        return false;
      }

      const b64 = data.predictions?.[0]?.bytesBase64Encoded;
      if (!b64) {
        console.error("  No image data returned");
        retries--;
        await sleep(5000);
        continue;
      }

      const imgBuffer = Buffer.from(b64, "base64");
      fs.writeFileSync(filename, imgBuffer);
      return true;
    } catch (err) {
      console.error("  Fetch error:", err.message);
      await sleep(10000);
      retries--;
    }
  }
  return false;
}

async function run() {
  if (!fs.existsSync("images")) {
    fs.mkdirSync("images");
  }

  const tasks = [];
  for (const subjectId in NOTES_DATABASE) {
    const subject = { ...NOTES_DATABASE[subjectId], _id: subjectId };
    for (const chapter of subject.chapters) {
      for (const topic of chapter.topics) {
        tasks.push({ subjectId, subject, chapter, topic });
      }
    }
  }

  console.log(`Generating images for ${tasks.length} topics...`);

  const newTopicMaps = {};

  for (let i = 0; i < tasks.length; i++) {
    const { subjectId, subject, chapter, topic } = tasks[i];
    const filename = `images/${topic.id}.png`;
    
    console.log(`[${i+1}/${tasks.length}] ${topic.title}`);

    if (fs.existsSync(filename)) {
      console.log("  Already exists, skipping.");
      newTopicMaps[topic.id] = [{ title: topic.title, src: filename }];
      continue;
    }

    const prompt = buildImagePrompt(topic, chapter, subject);
    const success = await generateImage(prompt, filename);
    
    if (success) {
      console.log(`  Saved ${filename}`);
      newTopicMaps[topic.id] = [{ title: topic.title, src: filename }];
    } else {
      console.error(`  FAILED for ${topic.id}`);
    }

    await sleep(6000);
  }

  console.log("\nUpdating TOPIC_MAPS in js/notes_browser.js...");
  
  const topicMapsCode = "// Topic Maps & Diagrams Mapping (AUTO-GENERATED)\nconst TOPIC_MAPS = " + JSON.stringify(newTopicMaps, null, 2) + ";\n";

  let notesBrowserContent = fs.readFileSync("js/notes_browser.js", "utf8");
  notesBrowserContent = notesBrowserContent.replace(
    /\/\/ Topic Maps[\s\S]*?^\};$/m,
    topicMapsCode + "\n"
  );
  fs.writeFileSync("js/notes_browser.js", notesBrowserContent, "utf8");
  
  console.log("notes_browser.js updated!");
  console.log("\nALL IMAGES GENERATED AND TOPIC_MAPS UPDATED!");
}

run().catch(console.error);
