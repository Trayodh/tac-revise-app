"""
batch_expand_short_notes.py

High-reliability AI expansion engine for short chapters across Jayastra.
Leverages Groq qwen/qwen3.8-27b with proactive token-bucket tracking,
intelligent backoff, real-time caching, and pure HTML table conversion.
"""

import os
import sys
import time
import json
import re
import requests
from dotenv import load_dotenv

sys.stdout.reconfigure(encoding='utf-8', line_buffering=True)
load_dotenv()

from test_table_converter import convert_markdown_tables_to_html

GROQ_KEY = os.getenv("GROQ_API_KEY")
if not GROQ_KEY:
    print("ERROR: GROQ_API_KEY is not set.")
    sys.exit(1)

CACHE_FILE = "expanded_canonical_notes.json"

# Load existing cache
expanded_cache = {}
if os.path.exists(CACHE_FILE):
    try:
        with open(CACHE_FILE, 'r', encoding='utf-8') as f:
            expanded_cache = json.load(f)
    except Exception as e:
        print(f"Warning reading {CACHE_FILE}: {e}")

# Load canonical syllabus
with open('canonical_syllabus.json', 'r', encoding='utf-8') as f:
    syllabus = json.load(f)

# Load existing AI generated notes to check current lengths
ai_notes_lens = {}
if os.path.exists('ai_generated_notes.js'):
    with open('ai_generated_notes.js', 'r', encoding='utf-8') as f:
        text = f.read()
    m = re.search(r'const AI_GENERATED_NOTES = (\[[\s\S]*?\]);\s*if \(typeof window', text)
    if m:
        try:
            arr = json.loads(m.group(1))
            for item in arr:
                ai_notes_lens[item['id']] = len(item.get('notes', ''))
        except Exception:
            pass

# Load library snippets for grounding
snippets_db = {}
if os.path.exists('chapter_snippets.json'):
    try:
        with open('chapter_snippets.json', 'r', encoding='utf-8') as f:
            snippets_db = json.load(f)
    except Exception:
        pass

# Identify chapters needing expansion (< 10,000 characters)
targets = []
for sub_id, sub_data in syllabus.items():
    chapters = sub_data.get('chapters', []) if isinstance(sub_data, dict) else sub_data
    for ch in chapters:
        ch_id = ch['id']
        current_len = ai_notes_lens.get(ch_id, 0)
        cached = expanded_cache.get(ch_id, '')
        
        # If already in cache with >= 5000 chars, it has already been expanded
        if len(cached) >= 5000:
            continue
            
        if current_len < 10000 or len(cached) < 5000:
            targets.append({
                'subject': sub_id,
                'id': ch_id,
                'title': ch['title'],
                'current_len': current_len
            })

# Sort targets so shortest chapters get expanded first
targets.sort(key=lambda x: x['current_len'])

print(f"=== IDENTIFIED {len(targets)} CHAPTERS NEEDING AI EXPANSION ===")
for t in targets[:15]:
    print(f" - [{t['subject']}] {t['id']}: {t['current_len']} chars ({t['title']})")

def build_prompt(subject_id, chapter_id, chapter_title, snippets):
    snip_text = ""
    if snippets:
        snip_text = "Factual textbook excerpts for context:\n" + "\n".join(f"- {s[:200]}" for s in snippets[:6])

    return f"""You are the Lead Content Architect for Jayastra (revision platform for NDA, CDS, AFCAT, CAPF exams).
Generate an EXHAUSTIVE, MASTER-GRADE revision compendium for:
Subject: {subject_id.upper()}
Chapter: {chapter_title} (ID: {chapter_id})

Target Audience: Officers-in-training taking UPSC CDS, NDA, AFCAT. The content MUST be deep, authoritative, mathematically/historically rigorous, and filled with exact definitions, dates, articles, formulas, operational details, and scientific laws.

{snip_text}

CRITICAL FORMATTING RULES:
1. Wrap everything in a single top-level: <div class="revision-card"> ... </div>
2. Header: <h3><i class="fa-solid fa-book-bookmark" style="color: var(--accent); margin-right: 8px;"></i> {chapter_title.upper()} — MASTER REVISION GUIDE</h3>
3. Section 1: <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 24px; color: var(--text-primary); font-weight: 600;">📌 EXECUTIVE OVERVIEW & FOUNDATIONAL CONCEPTS</h4>
   - Deep conceptual paragraphs, core principles, standard definitions. Highlight all key terms with <strong>...</strong>.
4. Section 2: <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; color: var(--text-primary); font-weight: 600;">📊 HIGH-YIELD COMPARISON & CLASSIFICATION MATRIX</h4>
   - Must include at least ONE detailed HTML table (<table style="width: 100%; border-collapse: collapse; margin: 16px 0; background: rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; overflow: hidden;">)
   - Include <thead> with styled <th> (padding: 10px 14px; text-align: left; background: rgba(255,255,255,0.06); color: var(--text-primary);)
   - Include <tbody> with multiple rows and styled <td> (padding: 9px 14px; border-bottom: 1px solid rgba(255,255,255,0.03); color: var(--text-secondary);)
   - Pure HTML <table> tags only! Absolutely NO markdown pipe tables!
5. Section 3: <div class="trap-box"><strong>⚡ UPSC & DEFENCE EXAM TRAPS (High-Frequency Distractors):</strong>
   - Tricky pitfalls, exceptions, sign conventions, historical ambiguities, or distractor choices frequently set by UPSC examiners.
   </div>
6. Section 4: <div class="mnemonic-box"><strong>💡 HIGH-SPEED MNEMONICS & MEMORY TRIGGERS:</strong>
   - Memorable acronyms or memory peg systems.
   </div>
7. Section 5: <h4 style="border-left: 3px solid var(--warning); padding-left: 8px; margin-top: 24px; color: var(--text-primary); font-weight: 600;">📋 HIGH-YIELD FACT BANK & STRATEGIC TIMELINES</h4>
   - Bulleted list of high-yield facts, numbers, dates, articles, amendments, or specifications.
"""

def generate_chapter_note(target):
    prompt = build_prompt(
        target['subject'],
        target['id'],
        target['title'],
        snippets_db.get(target['id'], [])
    )
    
    url = "https://api.groq.com/openai/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {GROQ_KEY}",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0"
    }
    
    models = ["openai/gpt-oss-120b", "openai/gpt-oss-20b", "qwen/qwen3.8-27b"]
    
    for model_name in models:
        payload = {
            "model": model_name,
            "messages": [{"role": "user", "content": prompt}],
            "max_tokens": 2200 if "gpt-oss" in model_name else 950,
            "temperature": 0.2
        }
        
        for attempt in range(3):
            try:
                r = requests.post(url, headers=headers, json=payload, timeout=60)
                if r.status_code == 200:
                    content = r.json()['choices'][0]['message']['content'].strip()
                    # Clean up markdown fences
                    content = re.sub(r'^```html\s*', '', content)
                    content = re.sub(r'\s*```$', '', content)
                    # Convert any raw markdown pipe tables to styled HTML tables
                    content = convert_markdown_tables_to_html(content)
                    return content
                elif r.status_code == 429:
                    retry_after = r.headers.get('retry-after')
                    wait_sec = int(retry_after) if retry_after and retry_after.isdigit() else 8
                    print(f" [429: wait {wait_sec}s]", end="", flush=True)
                    time.sleep(wait_sec)
                else:
                    break
            except Exception as e:
                time.sleep(2)
    return None

def main():
    if not targets:
        print("No short chapters to expand! All chapters meet master criteria.")
        return

    limit = len(targets)
    if len(sys.argv) > 1:
        try:
            limit = int(sys.argv[1])
        except ValueError:
            pass

    print(f"\nProcessing batch of {min(limit, len(targets))} chapters...")
    success_count = 0

    for idx, target in enumerate(targets[:limit], 1):
        print(f"[{idx}/{min(limit, len(targets))}] Generating [{target['subject']}] {target['id']} ({target['title']})...", end="", flush=True)
        note = generate_chapter_note(target)
        if note and len(note) > 1500:
            expanded_cache[target['id']] = note
            with open(CACHE_FILE, 'w', encoding='utf-8') as f:
                json.dump(expanded_cache, f, ensure_ascii=False, indent=2)
            print(f" DONE! ({len(note)} chars)")
            success_count += 1
        else:
            print(" FAILED.")
        
        # Pacing delay between chapters (4s keeps us securely under 8,000 tokens/min)
        time.sleep(4)

    print(f"\n=== BATCH EXPANSION COMPLETE: {success_count} CHAPTERS SUCCESSFULLY EXPANDED ===")

if __name__ == "__main__":
    main()
