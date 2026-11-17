const fs = require("fs");
const { execSync } = require("child_process");

// Files that need merging (the ones that were cleared and rebuilt from scratch)
const filesToMerge = [
  "notes_extra.js",          // mathematics
  "notes_extra_polity.js",
  "notes_extra_history.js",
  "notes_extra_geography.js",
  "notes_extra_economics.js",
  "notes_extra_physics.js",
  "notes_extra_chemistry.js",
  "notes_extra_biology.js",
  "notes_extra_afcat.js",
  "notes_extra_10.js",
  "notes_extra_general_studies.js",
  "notes_extra_english.js"
];

// The last known-good commit where all original notes were intact
const ORIGINAL_COMMIT = "233c065";

for (const file of filesToMerge) {
  // Get original content from git
  let oldContent;
  try {
    oldContent = execSync(`git show ${ORIGINAL_COMMIT}:${file}`, { encoding: "utf8" });
  } catch (e) {
    console.log(`No original for ${file}, skipping`);
    continue;
  }

  // Get current new content
  const newContent = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";

  // Find which IDs are already in the new file
  const newIds = new Set((newContent.match(/EXPANDED_NOTES_DATA\(["[^"]+)"\]/g) || []).map(m => m.match(/\(["[^"]+)"\]/)[1]));
  console.log(`${file}: ${newIds.size} new/already-generated topics`);

  // Find all topic blocks in the old file and append missing ones
  const topicPattern = /\nwindow\.EXPANDED_NOTES_DATA\(["[^"]+)"\]\s*=\s*`[\s\S]*?`;\n/g;
  let match;
  let appended = 0;
  while ((match = topicPattern.exec(oldContent)) !== null) {
    const id = match[1];
    if (!newIds.has(id)) {
      fs.appendFileSync(file, match[0], "utf8");
      appended++;
    }
  }
  console.log(`  -> Appended ${appended} old topics to ${file}`);
}

console.log("Merge complete!");
