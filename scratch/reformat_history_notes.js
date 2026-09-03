/**
 * Step 3: Reformat all existing history EXPANDED_NOTES_DATA entries
 * - Strip <!DOCTYPE html> / <html> / <head> / <body> / <style> wrappers
 * - Extract inner content only
 * - Wrap in standard revision-card div matching the app's dark theme
 * - Ensure h3 heading present
 * - Replace inline font/color styles that assume light backgrounds
 */
const fs = require('fs');

const INPUT_FILE = 'notes_extra_history.js';
const BACKUP_FILE = 'notes_extra_history.js.bak3';

// Backup first
if (!fs.existsSync(BACKUP_FILE)) {
  fs.copyFileSync(INPUT_FILE, BACKUP_FILE);
  console.log(`Backup saved to ${BACKUP_FILE}`);
} else {
  console.log(`Backup already exists at ${BACKUP_FILE} — skipping backup`);
}

// Load the file
const src = fs.readFileSync(INPUT_FILE, 'utf8').replace(/\r\n/g, '\n').replace(/\r/g, '\n');

// Extract all EXPANDED_NOTES_DATA entries — matches both:
//   EXPANDED_NOTES_DATA["key"] = `...`;            (original 43)
//   window.EXPANDED_NOTES_DATA["key"] = `...`;     (new 4 generated)
const entries = {};
// Use split approach to avoid backtick-in-regex issues
const lines = src.split('\n');
let i = 0;
while (i < lines.length) {
  const line = lines[i];
  const keyMatch = line.match(/(?:window\.)?EXPANDED_NOTES_DATA\[["']([^"']+)["']\]\s*=\s*`/);
  if (keyMatch) {
    const key = keyMatch[1];
    // Collect all lines until closing backtick+semicolon
    let content = '';
    // Check if opening and closing are on same line (unlikely but safe)
    const rest = line.slice(line.indexOf('`') + 1);
    if (rest.endsWith('`;') || rest.endsWith('` ;')) {
      content = rest.replace(/`\s*;$/, '');
    } else {
      content = rest + '\n';
      i++;
      while (i < lines.length) {
        if (lines[i] === '`;' || lines[i] === '` ;' || lines[i].match(/^`\s*;$/)) {
          break;
        }
        content += lines[i] + '\n';
        i++;
      }
    }
    entries[key] = content;
  }
  i++;
}
const count = Object.keys(entries).length;

console.log(`Found ${count} entries to process`);

function reformatHtml(topicId, rawHtml) {
  let html = rawHtml.trim();

  // Check if this is a full document
  const hasDoctype = html.includes('<!DOCTYPE') || html.includes('<html');
  let innerContent = html;

  if (hasDoctype) {
    // Extract body content
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) {
      innerContent = bodyMatch[1].trim();
    } else {
      // Remove doc-level tags by stripping from top
      innerContent = html
        .replace(/<!DOCTYPE[^>]*>/gi, '')
        .replace(/<html[^>]*>/gi, '')
        .replace(/<\/html>/gi, '')
        .replace(/<head>[\s\S]*?<\/head>/gi, '')
        .replace(/<body[^>]*>/gi, '')
        .replace(/<\/body>/gi, '')
        .trim();
    }
  }

  // Strip any <style> blocks left over
  innerContent = innerContent.replace(/<style[\s\S]*?<\/style>/gi, '');

  // Replace light-mode inline color styles with dark-mode compatible versions
  // These patterns appear when generated without dark-mode context
  innerContent = innerContent
    .replace(/color:\s*#2E3B55/gi, 'color: #e2e8f0')
    .replace(/color:\s*#333/gi, 'color: #e2e8f0')
    .replace(/color:\s*#444/gi, 'color: #cbd5e1')
    .replace(/color:\s*#555/gi, 'color: #94a3b8')
    .replace(/color:\s*black/gi, 'color: #e2e8f0')
    .replace(/background(-color)?:\s*white/gi, 'background: rgba(255,255,255,0.02)')
    .replace(/background(-color)?:\s*#fff/gi, 'background: rgba(255,255,255,0.02)')
    .replace(/background(-color)?:\s*#f[0-9a-f]{5}/gi, 'background: rgba(255,255,255,0.03)')
    .replace(/font-family:[^;]+;/gi, '')  // Remove custom font-family (app handles this)
    .replace(/margin:\s*20px[^;]*;/gi, '')  // Remove broad margins
    .replace(/line-height:\s*1\.[0-9];/gi, '');

  // Check if already wrapped in revision-card
  const isWrapped = innerContent.trim().startsWith('<div class="revision-card"') ||
                    innerContent.trim().startsWith("<div class='revision-card'");

  if (!isWrapped) {
    // Derive a title from the topic ID
    const titleFromId = topicId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    // Check if there's an h1/h2 at the top we can use as title
    const h1Match = innerContent.match(/<h[12][^>]*>([^<]+)<\/h[12]>/i);
    const title = h1Match ? h1Match[1].trim() : titleFromId;

    // Remove the leading h1/h2 since we'll add it in our wrapper
    if (h1Match) {
      innerContent = innerContent.replace(h1Match[0], '').trim();
    }

    innerContent = `<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: #4ade80; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600;">${title}</h3>
${innerContent}
</div>`;
  } else {
    // Already wrapped — just apply the dark-mode color fixes above
  }

  return innerContent;
}

// Rebuild the file
const header = `window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};\n`;
let output = header;

for (const [topicId, rawHtml] of Object.entries(entries)) {
  const reformatted = reformatHtml(topicId, rawHtml);
  const escaped = reformatted.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
  output += `\nwindow.EXPANDED_NOTES_DATA["${topicId}"] = \`\n${escaped}\n\`;\n`;
  console.log(`  Reformatted [${topicId}] — ${reformatted.length} chars`);
}

fs.writeFileSync(INPUT_FILE, output, 'utf8');
console.log(`\n=== Step 3 Complete ===`);
console.log(`Reformatted ${count} entries. Output: ${INPUT_FILE} (${(output.length/1024).toFixed(0)} KB)`);
