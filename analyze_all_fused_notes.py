import json
import os
import glob
import re

# 1. Load syllabus
with open('canonical_syllabus.json', 'r', encoding='utf-8') as f:
    syllabus = json.load(f)

# 2. Load public/notes-data files
public_html_files = glob.glob('public/notes-data/**/*.html', recursive=True)
public_by_ch = {}
for p in public_html_files:
    parts = os.path.normpath(p).split(os.sep)
    ch = parts[-2]
    if ch not in public_by_ch:
        public_by_ch[ch] = []
    with open(p, 'r', encoding='utf-8') as f:
        public_by_ch[ch].append(f.read().strip())

# 3. Load notes_extra_*.js via node extraction
import subprocess
extra_notes = {}
node_script = """
const fs = require('fs');
const vm = require('vm');
const sandbox = { window: {}, document: {}, console: console };
sandbox.window = sandbox;
vm.createContext(sandbox);

const files = fs.readdirSync('.').filter(f => f.startsWith('notes_extra_') && f.endsWith('.js'));
files.forEach(f => vm.runInContext(fs.readFileSync(f, 'utf8'), sandbox));
process.stdout.write(JSON.stringify(sandbox.window.EXPANDED_NOTES_DATA || {}));
"""
proc = subprocess.run(['node', '-e', node_script], capture_output=True, text=True, encoding='utf-8')
if proc.returncode == 0:
    extra_notes = json.loads(proc.stdout)

# 4. Load snippets
with open('chapter_snippets.json', 'r', encoding='utf-8') as f:
    snippets_by_ch = json.load(f)

# 5. Load golden notes
import inject_golden_compendiums as igc
golden_by_ch = {
    'schedules': igc.golden_notes[0]['content'],
    'fundamental-rights': igc.golden_notes[1]['content'],
    'important-articles': igc.golden_notes[2]['content'],
    'amendments-parts': igc.golden_notes[3]['content'],
    'syl-geog': igc.golden_notes[4]['content'],
    'climatology-clouds': igc.golden_notes[5]['content'],
    'freedom-movement': igc.golden_notes[6]['content'],
    'buddhism-jainism': igc.golden_notes[7]['content'],
}

# 6. Analyze fused length per chapter
fused_lengths = {}
low_content_chapters = []

total_all_chars = 0

for sub_id, sub_data in syllabus.items():
    for c in sub_data['chapters']:
        ch_id = c['id']
        ch_title = c['title']

        parts = []
        if ch_id in extra_notes:
            parts.append(extra_notes[ch_id])
        if ch_id in public_by_ch:
            parts.extend(public_by_ch[ch_id])
        if ch_id in golden_by_ch:
            parts.append(golden_by_ch[ch_id])
        if ch_id in snippets_by_ch:
            parts.append("\n".join(snippets_by_ch[ch_id]))

        total_len = sum(len(p) for p in parts)
        fused_lengths[ch_id] = total_len
        total_all_chars += total_len

        if total_len < 10000:
            low_content_chapters.append((sub_id, ch_id, ch_title, total_len))

print(f"Total Canonical Chapters: 202")
print(f"Total Fused Character Volume: {total_all_chars:,} chars (~{total_all_chars // 6:,} words)")
print(f"Average Length per Chapter: {total_all_chars // 202:,} chars")
print(f"Chapters with >= 10,000 chars: {202 - len(low_content_chapters)} / 202")
print(f"Chapters needing expansion (< 10,000 chars): {len(low_content_chapters)}")

if low_content_chapters:
    print("\n--- CHAPTERS NEEDING EXPANSION (<10k chars) ---")
    for sub, cid, title, length in low_content_chapters:
        print(f"  [{sub:18}] {title:38} ({cid}): {length:,} chars")
