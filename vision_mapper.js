const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error("Please set GEMINI_API_KEY");
  process.exit(1);
}

const allTopics = JSON.parse(fs.readFileSync('all_topics_mapping.json', 'utf8'));

// To keep prompt small and accurate, we can group topics by chapter and feed only relevant ones to Gemini
// The Drive folders might map to chapter names.
const topicsPromptList = allTopics.map(t => `- ID: ${t.id} | Subject: ${t.subject} | Chapter: ${t.chapter} | Title: ${t.title}`).join('\n');

const driveImagesDir = path.join(__dirname, 'assets', 'drive_images');
const diagramsDir = path.join(__dirname, 'assets', 'diagrams');

function getFilesRecursively(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(file));
    } else {
      if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
        results.push(file);
      }
    }
  });
  return results;
}

const images = getFilesRecursively(driveImagesDir);

async function identifyImage(filePath) {
  const mimeType = filePath.endsWith('.png') ? 'image/png' : 'image/jpeg';
  const base64Image = fs.readFileSync(filePath).toString('base64');
  
  // We can pass the parent folder name as a hint
  const folderName = path.basename(path.dirname(filePath));
  
  const prompt = `You are an expert educator mapping diagrams to syllabus topics.
The image comes from a folder named "${folderName}".
Here are the possible topic IDs and titles across all subjects:
${topicsPromptList}

Analyze the provided image and the folder hint. Which topic ID EXACTLY does it correspond to?
Reply ONLY with the exact ID string from the list above. Do not include any other text, explanation, or markdown.`;

  let attempts = 0;
  while (attempts < 5) {
    attempts++;
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [
              { text: prompt },
              {
                inlineData: {
                  mimeType: mimeType,
                  data: base64Image
                }
              }
            ]
          }],
          generationConfig: { temperature: 0.1 }
        })
      });

      const data = await response.json();
      if (data.error) {
        const errMsg = data.error.message;
        if (errMsg.includes('Quota exceeded') || errMsg.includes('retry in') || errMsg.includes('429')) {
          let waitSecs = 60;
          const match = errMsg.match(/retry in ([\d\.]+)s/);
          if (match) waitSecs = parseFloat(match[1]) + 2;
          console.log(`    ! Rate limited. Waiting ${waitSecs.toFixed(1)}s...`);
          await new Promise(r => setTimeout(r, waitSecs * 1000));
          continue;
        }
        throw new Error(errMsg);
      }
      
      return data.candidates[0].content.parts[0].text.trim();
    } catch (err) {
      console.log(`    ! Fetch error on attempt ${attempts}: ${err.message}. Waiting 10s...`);
      await new Promise(r => setTimeout(r, 10000));
      if (attempts >= 5) throw err;
    }
  }
  throw new Error("Max retries exceeded");
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

async function run() {
  // Cache of file contents so we don't re-read constantly
  const filesCache = {};
  
  function getFileContent(subject) {
    const filename = `notes_extra_${subject}_rich.js`;
    if (!filesCache[filename]) {
      if (fs.existsSync(filename)) {
        filesCache[filename] = fs.readFileSync(filename, 'utf8');
      } else {
        filesCache[filename] = "";
      }
    }
    return filesCache[filename];
  }
  
  function setFileContent(subject, content) {
    const filename = `notes_extra_${subject}_rich.js`;
    filesCache[filename] = content;
  }

  for (let imgPath of images) {
    console.log(`Processing ${path.basename(imgPath)}...`);
    try {
      const topicId = await identifyImage(imgPath);
      console.log(`  -> Mapped to: ${topicId}`);
      
      const topicInfo = allTopics.find(t => t.id === topicId);
      if (!topicInfo) {
        console.warn(`  ! Could not find topic info for ${topicId}`);
        continue;
      }
      
      const ext = path.extname(imgPath);
      const chapterSlug = slugify(topicInfo.chapter);
      
      const targetDir = path.join(diagramsDir, topicInfo.subject, chapterSlug);
      if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
      
      const targetPath = path.join(targetDir, `${topicId}${ext}`);
      fs.copyFileSync(imgPath, targetPath);
      console.log(`  -> Copied to ${targetPath}`);
      fs.unlinkSync(imgPath); // Delete original so we don't re-process if restarted
      
      // Update HTML content to point to new image (SVG -> PNG/JPG)
      let notesExtraContent = getFileContent(topicInfo.subject);
      if (notesExtraContent) {
        const svgSrc = `assets/diagrams/${topicInfo.subject}/${chapterSlug}/${topicId}.svg`;
        const newSrc = `assets/diagrams/${topicInfo.subject}/${chapterSlug}/${topicId}${ext}`;
        notesExtraContent = notesExtraContent.split(svgSrc).join(newSrc);
        setFileContent(topicInfo.subject, notesExtraContent);
      }
      
    } catch (e) {
      console.error(`  ! Error processing ${imgPath}:`, e.message);
    }
    
    // Wait slightly for API limit (Gemini 2.5 flash free tier is 15 RPM, so 11s delay keeps it around 5-6 RPM)
    await new Promise(r => setTimeout(r, 11000));
  }
  
  // Write back all cached files
  for (let filename in filesCache) {
    if (filesCache[filename]) {
      fs.writeFileSync(filename, filesCache[filename], 'utf8');
      console.log(`Updated ${filename}`);
    }
  }
}

run();
