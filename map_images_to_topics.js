const fs = require('fs');
const images = fs.readdirSync('images').filter(f => f.endsWith('png') || f.endsWith('jpg'));
const topics = JSON.parse(fs.readFileSync('all_topics_mapping.json', 'utf8'));
let notesData = fs.readFileSync('notes_data.js', 'utf8');

const mapping = {};
for (const img of images) {
  let imgName = img.replace(/\.(png|jpg)$/, '').replace(/_/g, ' ').toLowerCase();
  let bestMatch = null; let bestScore = 0;
  for (const topic of topics) {
    let score = 0;
    const tTitle = topic.title.toLowerCase();
    const tId = topic.id.toLowerCase().replace(/-/g, ' ');
    const imgWords = imgName.split(' ');
    for (const w of imgWords) {
      if (w.length < 3) continue;
      if (tTitle.includes(w)) score += 2;
      if (tId.includes(w)) score += 2;
    }
    if (score > bestScore) { bestScore = score; bestMatch = topic; }
  }
  if (bestMatch && bestScore >= 2) mapping[img] = bestMatch.id;
}

fs.writeFileSync('auto_map_draft.json', JSON.stringify(mapping, null, 2));
let injectedCount = 0;
for (const [img, topicId] of Object.entries(mapping)) {
  const searchStr = `"id": "${topicId}",`;
  const searchStr2 = `id: "${topicId}",`;
  const searchStr3 = `id: '${topicId}',`;
  let target = searchStr;
  if (!notesData.includes(searchStr)) target = searchStr2;
  if (!notesData.includes(target)) target = searchStr3;
  
  const parts = notesData.split(target);
  if (parts.length > 1) {
    let afterId = parts[1];
    const notesIndex = afterId.indexOf('"notes": "');
    if (notesIndex !== -1) {
      const insertionPoint = notesIndex + '"notes": "'.length;
      const imgTag = `\\n\\n<!-- VISUAL INJECTION -->\\n<div class=\\"visual-summary text-center my-6\\"><img src=\\"images/${img}\\" alt=\\"Visual Summary\\" class=\\"max-w-full h-auto rounded-lg shadow-md border border-slate-700 mx-auto\\" /></div>\\n\\n`;
      if (!afterId.includes(img)) {
        notesData = parts[0] + target + afterId.slice(0, insertionPoint) + imgTag + afterId.slice(insertionPoint);
        injectedCount++;
      }
    }
  }
}

fs.writeFileSync('notes_data.js', notesData);
console.log('Injected ' + injectedCount + ' images.');