"""
unify_master_knowledge.py

Unifies ALL rich knowledge sources in the repository into the 202 Canonical Chapters:
1. public/notes-data (308 HTML files with SVGs, formulas, diagrams)
2. all_generated_notes_map.json (318 generated keys from all notes_generated_*.js files)
3. notes_extra_*.js (158 expanded keys, 1.92M chars)
4. golden compendiums (TEARS OF OLD PM, writs, articles, freedom struggle)
5. chapter_snippets.json (15,788 extracted library items)
6. expanded_canonical_notes.json (AI deep expansions)

Produces an encyclopedic revision database for all 202 chapters with ZERO omissions.
"""

import json
import os
import glob
import re
import sys
from collections import defaultdict

sys.stdout.reconfigure(encoding='utf-8')
from test_table_converter import convert_markdown_tables_to_html

def run():
    print("=== STARTING MASTER KNOWLEDGE UNIFICATION PIPELINE ===")

    # 1. Load canonical syllabus (202 chapters)
    with open('canonical_syllabus.json', 'r', encoding='utf-8') as f:
        syllabus = json.load(f)

    # 2. Load all_generated_notes_map.json
    gen_notes_map = {}
    if os.path.exists('all_generated_notes_map.json'):
        with open('all_generated_notes_map.json', 'r', encoding='utf-8') as f:
            gen_notes_map = json.load(f)
        print(f"Loaded {len(gen_notes_map)} keys from all_generated_notes_map.json.")

    # 3. Load public/notes-data HTML files
    public_html_files = glob.glob('public/notes-data/**/*.html', recursive=True)
    public_by_ch = defaultdict(list)
    for p in public_html_files:
        parts = os.path.normpath(p).split(os.sep)
        with open(p, 'r', encoding='utf-8') as f:
            html_text = f.read().strip()
        if len(parts) >= 2:
            public_by_ch[parts[-2]].append(html_text)
        if len(parts) >= 3 and parts[-3] != 'notes-data':
            public_by_ch[parts[-3]].append(html_text)
    print(f"Indexed public/notes-data across {len(public_by_ch)} folders.")

    # 4. Load notes_extra_*.js via Node
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
        print(f"Loaded {len(extra_notes)} keys from notes_extra_*.js.")

    # 5. Load golden compendiums
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

    # 6. Load AI cache (expanded_canonical_notes.json)
    ai_cache = {}
    if os.path.exists('expanded_canonical_notes.json'):
        with open('expanded_canonical_notes.json', 'r', encoding='utf-8') as f:
            ai_cache = json.load(f)
        print(f"Loaded {len(ai_cache)} chapters from expanded_canonical_notes.json.")

    # 7. Load chapter snippets
    snippets_by_ch = defaultdict(list)
    if os.path.exists('chapter_snippets.json'):
        with open('chapter_snippets.json', 'r', encoding='utf-8') as f:
            snippets_by_ch = json.load(f)

    # 8. Load PYQ Trends (2020-2026 Examination Patterns)
    pyq_trends = {}
    if os.path.exists('pyq_trends.js'):
        node_pyq_script = """
        const fs = require('fs');
        const vm = require('vm');
        const sandbox = { window: {} };
        vm.createContext(sandbox);
        vm.runInContext(fs.readFileSync('pyq_trends.js', 'utf8'), sandbox);
        process.stdout.write(JSON.stringify(sandbox.window.PYQ_TRENDS_DATA || {}));
        """
        proc_pyq = subprocess.run(['node', '-e', node_pyq_script], capture_output=True, text=True, encoding='utf-8')
        if proc_pyq.returncode == 0:
            pyq_trends = json.loads(proc_pyq.stdout)
            print(f"Loaded {len(pyq_trends)} keys from pyq_trends.js.")

    # Unify for each of the 202 canonical chapters
    master_unified_notes = []
    total_unified_chars = 0
    chapter_lengths = {}

    for sub_id, sub_data in syllabus.items():
        for ch in sub_data['chapters']:
            ch_id = ch['id']
            ch_title = ch['title']

            content_sections = []
            seen_texts = set()

            def add_section(text, source_tag=""):
                if not text or not text.strip():
                    return
                # De-duplicate near-identical texts
                sample_snip = text[:150].strip()
                if sample_snip in seen_texts:
                    return
                seen_texts.add(sample_snip)
                # Clean markdown tables to HTML tables
                clean = convert_markdown_tables_to_html(text)
                # Remove redundant nested revision-card tags
                clean = re.sub(r'^\s*<div class="revision-card"[^>]*>', '', clean)
                clean = re.sub(r'<\/div>\s*$', '', clean)
                content_sections.append(clean.strip())

            # Layer A: AI Deep Expansion (if in ai_cache)
            if ch_id in ai_cache and len(ai_cache[ch_id]) > 1500:
                add_section(ai_cache[ch_id], "AI_EXPANSION")

            # Layer B: Targeted Generated Notes (e.g. from all_generated_notes_map)
            # Check exact match
            if ch_id in gen_notes_map:
                add_section(gen_notes_map[ch_id], "GEN_MAP_EXACT")
            # Check fuzzy / targeted matches (e.g. ai-gen-history-indus-valley-civilization...)
            for gk, gv in gen_notes_map.items():
                if ch_id in gk or gk.replace('ai-gen-', '').startswith(f"{sub_id}-{ch_id}"):
                    add_section(gv, "GEN_MAP_FUZZY")

            # Layer C: Curated Public Notes Data (with SVGs, formulas, diagrams)
            if ch_id in public_by_ch:
                for p_html in public_by_ch[ch_id]:
                    add_section(p_html, "PUBLIC_DATA")

            # Layer D: Extra Notes from notes_extra_*.js
            if ch_id in extra_notes:
                add_section(extra_notes[ch_id], "NOTES_EXTRA")

            # Layer E: Golden Compendiums (A+ matrices & mnemonics)
            if ch_id in golden_by_ch:
                add_section(golden_by_ch[ch_id], "GOLDEN_COMPENDIUM")

            # Layer F: Library Snippets & Book Citations
            if ch_id in snippets_by_ch and snippets_by_ch[ch_id]:
                snip_lines = []
                for s in snippets_by_ch[ch_id][:8]:
                    s_clean = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', s)
                    snip_lines.append(f"<li style='margin-bottom: 6px; line-height: 1.6;'>{s_clean}</li>")
                snip_block = f"""<h4 style="border-left: 3px solid var(--warning); padding-left: 8px; margin-top: 24px; color: var(--text-primary); font-weight: 600;">📚 EXCAVATED ARCHAEOLOGICAL & FACTUAL CITATIONS (LIBRARY SOURCE BOOKS)</h4>
<ul style="margin-left: 20px; color: var(--text-secondary); line-height: 1.6;">
  {"".join(snip_lines)}
</ul>"""
                content_sections.append(snip_block)

            # Layer G: PYQ Examination Trends (2020-2026 Actual Questions & Blueprint)
            pyq_trend_text = None
            if ch_id in pyq_trends:
                pyq_trend_text = pyq_trends[ch_id]
            else:
                for pk, pv in pyq_trends.items():
                    if pk in ch_id or ch_id in pk:
                        pyq_trend_text = pv
                        break
            if pyq_trend_text and len(pyq_trend_text.strip()) > 30:
                pyq_block = f"""<div class="msc-checkpoint" style="margin-top: 28px; border: 1px solid rgba(245, 158, 11, 0.35); background: rgba(245, 158, 11, 0.06); padding: 18px 20px; border-radius: 8px;">
  <div class="msc-title" style="color: var(--warning); font-weight: 700; margin-bottom: 10px; font-size: 1rem; display: flex; align-items: center; gap: 8px;">
    <i class="fa-solid fa-crosshairs" style="color: var(--warning);"></i> 🎯 UPSC / DEFENCE EXAM PYQ TRENDS & BLUEPRINT (2020-2026)
  </div>
  <div style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.7;">{pyq_trend_text.strip()}</div>
</div>"""
                content_sections.append(pyq_block)

            # Assemble into master revision card
            inner_body = "\n\n<hr style='border: 0; border-top: 1px dashed rgba(255,255,255,0.08); margin: 24px 0;'>\n\n".join(content_sections)
            
            # Wrap in top-level revision card
            final_card = f"""<div class="revision-card">
  <h3><i class="fa-solid fa-graduation-cap" style="color: var(--accent); margin-right: 8px;"></i> {ch_title.upper()} — MASTER REVISION & EXAM GUIDE</h3>
{inner_body}
</div>"""

            master_unified_notes.append({
                "id": ch_id,
                "title": ch_title,
                "subject": sub_id,
                "notes": final_card
            })

            total_unified_chars += len(final_card)
            chapter_lengths[ch_id] = len(final_card)

    print(f"\n=== UNIFICATION COMPLETE ===")
    print(f"Total Canonical Chapters: {len(master_unified_notes)} / 202")
    print(f"Total Unified Character Volume: {total_unified_chars:,} characters (~{total_unified_chars // 6:,} words)")
    print(f"Average Chapter Length: {total_unified_chars // 202:,} characters")

    # Show distribution
    sorted_lens = sorted(chapter_lengths.items(), key=lambda x: x[1])
    print(f"Shortest chapter: {sorted_lens[0][0]} ({sorted_lens[0][1]:,} chars)")
    print(f"Longest chapter: {sorted_lens[-1][0]} ({sorted_lens[-1][1]:,} chars)")

    # Write out to frontend bundles
    content = "// Generated by unify_master_knowledge.py - Comprehensive 202 Canonical Chapters\n"
    content += "const AI_GENERATED_NOTES = " + json.dumps(master_unified_notes, indent=2, ensure_ascii=False) + ";\n"
    content += "if (typeof window !== 'undefined') { window.AI_GENERATED_NOTES = AI_GENERATED_NOTES; }\n"
    content += "if (typeof module !== 'undefined') { module.exports = { AI_GENERATED_NOTES }; }\n"

    def safe_write_file(filepath, text, chunk_size=2*1024*1024):
        with open(filepath, "w", encoding="utf-8") as f:
            for i in range(0, len(text), chunk_size):
                f.write(text[i:i+chunk_size])

    safe_write_file("ai_generated_notes.js", content)
    safe_write_file("public/ai_generated_notes.js", content)
    print("Saved to ai_generated_notes.js and public/ai_generated_notes.js successfully!")

if __name__ == "__main__":
    run()
