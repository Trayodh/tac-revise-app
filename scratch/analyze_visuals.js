const fs = require("fs");

const content = fs.readFileSync("notes_data.js", "utf-8");
const topicRegex = /"id":\s*"([^"]+)"([\s\S]*?)(?="id":|$)/g;

let match;
while ((match = topicRegex.exec(content)) !== null) {
  const topicId = match[1];
  const topicContent = match[2];
  
  const imgRegex = /<!-- VISUAL INJECTION -->[\s\S]*?<img src=\\"images\/([^"]+)\\"[^>]*>/g;
  let imgMatch;
  const images = [];
  while ((imgMatch = imgRegex.exec(topicContent)) !== null) {
    images.push(imgMatch[1]);
  }
  
  // Also try unescaped quotes
  const imgRegex2 = /<!-- VISUAL INJECTION -->[\s\S]*?<img src="images\/([^"]+)"[^>]*>/g;
  while ((imgMatch = imgRegex2.exec(topicContent)) !== null) {
    if (!images.includes(imgMatch[1])) {
      images.push(imgMatch[1]);
    }
  }

  if (images.length > 0) {
    console.log(`Topic: ${topicId}`);
    images.forEach(img => console.log(`  - ${img}`));
  }
}
