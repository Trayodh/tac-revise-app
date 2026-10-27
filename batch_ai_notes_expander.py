"""
batch_ai_notes_expander.py

Scalable AI Batch Expansion Pipeline for all 202 Canonical Chapters.
Leverages Groq (qwen/qwen3.8-27b) with automatic fallback to Gemini (gemini-2.5-flash)
to generate 15,000+ chars of master-grade revision notes per chapter with:
- Rendered HTML comparison tables
- Exam Traps (.trap-box)
- Mnemonics (.mnemonic-box)
- Strategic PYQ tips (.strategist-tip)
- Exhaustive conceptual & factual depth
"""

import json
import os
import re
import sys
import time
import requests
from dotenv import load_dotenv

sys.stdout.reconfigure(encoding='utf-8')
load_dotenv()

GROQ_KEY = os.environ.get("GROQ_API_KEY")
GEMINI_KEY = os.environ.get("GEMINI_API_KEY")
CACHE_FILE = "expanded_canonical_notes.json"

def call_groq(prompt):
    if not GROQ_KEY:
        return None
    url = "https://api.groq.com/openai/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {GROQ_KEY}",
        "Content-Type": "application/json"
    }
    payload = {
        "model": "qwen/qwen3.8-27b",
        "messages": [{"role": "user", "content": prompt}],
        "max_tokens": 4096,
        "temperature": 0.25
    }
    try:
        r = requests.post(url, headers=headers, json=payload, timeout=60)
        if r.status_code == 200:
            return r.json()['choices'][0]['message']['content'].strip()
        else:
            print(f"Groq returned {r.status_code}: {r.text[:120]}")
            return None
    except Exception as e:
        print(f"Groq error: {e}")
        return None

def call_gemini(prompt):
    if not GEMINI_KEY:
        return None
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={GEMINI_KEY}"
    payload = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {"temperature": 0.25, "maxOutputTokens": 8192}
    }
    try:
        r = requests.post(url, headers={"Content-Type": "application/json"}, json=payload, timeout=60)
        if r.status_code == 200:
            return r.json()['candidates'][0]['content']['parts'][0]['text'].strip()
        else:
            print(f"Gemini returned {r.status_code}: {r.text[:120]}")
            return None
    except Exception as e:
        print(f"Gemini error: {e}")
        return None

def generate_chapter_prompt(subject_id, chapter_id, chapter_title, raw_snippets=""):
    return f"""You are the Lead Exam Strategist & Chief Content Architect for Jayastra (NDA, CDS, AFCAT, CAPF exams).
Generate an EXHAUSTIVE, MASTER-GRADE revision compendium for the following canonical chapter:

Subject: {subject_id.upper()}
Chapter: {chapter_title} (ID: {chapter_id})

Target Audience: Officers-in-training taking UPSC CDS, NDA, AFCAT. The content MUST be deep, authoritative, mathematically/historically rigorous, and filled with exact definitions, dates, articles, formulas, chemical equations, or scientific laws.

CRITICAL FORMATTING RULES:
1. Wrap everything in a single top-level: <div class="revision-card"> ... </div>
2. Header: <h3><i class="fa-solid fa-book-bookmark" style="color: var(--accent); margin-right: 8px;"></i> {chapter_title.upper()} — MASTER REVISION GUIDE</h3>
3. Section 1: <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 24px; color: var(--text-primary); font-weight: 600;">📌 EXECUTIVE OVERVIEW & FOUNDATIONAL CONCEPTS</h4>
   - Deep conceptual paragraphs, core principles, standard definitions. Highlight all key terms with <strong>...</strong>.
4. Section 2: <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; color: var(--text-primary); font-weight: 600;">📊 HIGH-YIELD COMPARISON & CLASSIFICATION MATRIX</h4>
   - Must include at least ONE detailed HTML table (<table style="width: 100%; border-collapse: collapse; margin: 16px 0; background: rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; overflow: hidden;">)
   - Include <thead> with styled <th> (padding: 10px 14px; text-align: left; background: rgba(255,255,255,0.06); color: var(--text-primary);)
   - Include <tbody> with multiple rows and styled <td> (padding: 9px 14px; border-bottom: 1px solid rgba(255,255,255,0.03); color: var(--text-secondary);)
   - Absolutely NO raw markdown pipe tables! Use pure HTML <table> tags.
5. Section 3: <div class="trap-box"><strong>⚡ UPSC & DEFENCE EXAM TRAPS (High-Frequency Distractors):</strong>
   - Specific tricky pitfalls, exceptions, sign conventions, historical ambiguities, or distractor choices frequently set by UPSC examiners.
   </div>
6. Section 4: <div class="mnemonic-box"><strong>💡 HIGH-SPEED MNEMONICS & MEMORY TRIGGERS:</strong>
   - Memorable acronyms, rhyming triggers, or memory peg systems for instant exam recall.
   </div>
7. Section 5: <div class="strategist-tip"><strong>🎯 STRATEGIC PYQ ANALYSIS & DEFENCE FOCUS:</strong>
   - Question trends from NDA, CDS, and AFCAT over the past 5 years. Weightage and recurring question formats.
   </div>
8. Section 6: <h4 style="border-left: 3px solid var(--warning); padding-left: 8px; margin-top: 24px; color: var(--text-primary); font-weight: 600;">📚 COMPREHENSIVE FACT BANK & ADVANCED DERIVATIONS</h4>
   - 20+ dense bullet points covering all granular facts, specific numbers, formulas in <code>...</code>, case laws/articles (if polity), battles/dates (if history), units/constants (if physics/chem), structures/pathogens (if bio), aircraft/ranks/exercises (if military).

{f'Relevant Book Snippets to Integrate:\n{raw_snippets[:1500]}' if raw_snippets else ''}

Return ONLY clean, valid HTML. Do NOT wrap output in markdown ```html code blocks."""

def run_expansion(start_index=0, count=202):
    print("=== STARTING AI BATCH EXPANSION PIPELINE ===")
    with open('canonical_syllabus.json', 'r', encoding='utf-8') as f:
        syllabus = json.load(f)

    # Flatten all 202 chapters
    all_chapters = []
    for sub_id, sub_data in syllabus.items():
        for ch in sub_data['chapters']:
            all_chapters.append({
                'subject': sub_id,
                'id': ch['id'],
                'title': ch['title']
            })

    print(f"Total chapters in syllabus: {len(all_chapters)}")

    # Load cache
    expanded_cache = {}
    if os.path.exists(CACHE_FILE):
        try:
            with open(CACHE_FILE, 'r', encoding='utf-8') as f:
                expanded_cache = json.load(f)
            print(f"Loaded {len(expanded_cache)} previously expanded chapters from cache.")
        except Exception as e:
            print(f"Cache load error: {e}")

    # Load raw notes snippets for grounding
    from smart_taxonomy_matcher import smart_match_note
    from collections import defaultdict
    chapter_map = {c['id']: c for c in all_chapters}
    subject_chapters = defaultdict(list)
    for c in all_chapters:
        subject_chapters[c['subject']].append(c['id'])

    print("Indexing book snippets for AI context...")
    notes_snippets = defaultdict(list)
    try:
        with open('notes_database.json', 'r', encoding='utf-8') as f:
            raw_notes = json.load(f)
        for n in raw_notes:
            sub, ch_id = smart_match_note(n, chapter_map, subject_chapters)
            txt = n.get('text') or n.get('content') or ''
            if txt:
                notes_snippets[ch_id].append(txt[:300])
    except Exception as e:
        print(f"Warning loading raw snippets: {e}")

    target_slice = all_chapters[start_index:start_index + count]
    print(f"Processing slice: {start_index} to {start_index + len(target_slice)} ({len(target_slice)} chapters)...")

    success_count = 0
    for idx, ch in enumerate(target_slice, start=start_index + 1):
        ch_id = ch['id']
        sub_id = ch['subject']
        ch_title = ch['title']

        # Skip if already cached and substantive (>10,000 chars)
        if ch_id in expanded_cache and len(expanded_cache[ch_id]) > 10000:
            print(f"[{idx}/{len(all_chapters)}] Skipping '{ch_id}' (Already cached: {len(expanded_cache[ch_id])} chars)")
            continue

        print(f"[{idx}/{len(all_chapters)}] Expanding '{ch_title}' ({ch_id}) in {sub_id.upper()}...")
        snippets = "\n".join(notes_snippets.get(ch_id, [])[:5])
        prompt = generate_chapter_prompt(sub_id, ch_id, ch_title, snippets)

        # Call Groq first
        result = call_groq(prompt)
        time.sleep(1.2)  # Respect rate limit

        # Fallback to Gemini if Groq failed
        if not result or len(result) < 3000:
            print(f"  -> Falling back to Gemini for '{ch_id}'...")
            result = call_gemini(prompt)
            time.sleep(1.0)

        if result and len(result) > 3000:
            # Clean any backticks
            clean_res = result.replace('```html', '').replace('```', '').strip()
            # Ensure outer revision card
            if not clean_res.startswith('<div class="revision-card"'):
                clean_res = f'<div class="revision-card">\n{clean_res}\n</div>'
            expanded_cache[ch_id] = clean_res
            success_count += 1
            print(f"  ✅ Generated {len(clean_res)} chars for '{ch_id}'")

            # Periodically persist cache
            if success_count % 5 == 0:
                with open(CACHE_FILE, 'w', encoding='utf-8') as f:
                    json.dump(expanded_cache, f, ensure_ascii=False, indent=2)
                print(f"  [Persisted cache with {len(expanded_cache)} chapters]")
        else:
            print(f"  ❌ Failed to generate notes for '{ch_id}'")

    # Final persist
    with open(CACHE_FILE, 'w', encoding='utf-8') as f:
        json.dump(expanded_cache, f, ensure_ascii=False, indent=2)
    print(f"Cache saved. Total expanded chapters: {len(expanded_cache)}")

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("--start", type=int, default=0)
    parser.add_argument("--count", type=int, default=202)
    args = parser.parse_args()
    run_expansion(args.start, args.count)
