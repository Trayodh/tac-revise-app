"""
optimized_ai_expander.py

High-speed, multi-threaded AI Expansion Pipeline for 202 Canonical Chapters.
Runs with 3 concurrent workers, Groq qwen/qwen3.8-27b with Gemini 2.5 flash fallback.
Immediate cache writing and real-time live progress logging.
"""

import json
import os
import re
import sys
import time
import threading
from concurrent.futures import ThreadPoolExecutor, as_completed
import requests
from dotenv import load_dotenv

sys.stdout.reconfigure(encoding='utf-8', line_buffering=True)
load_dotenv()

GROQ_KEY = os.environ.get("GROQ_API_KEY")
GEMINI_KEY = os.environ.get("GEMINI_API_KEY")
CACHE_FILE = "expanded_canonical_notes.json"

cache_lock = threading.Lock()

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
        "temperature": 0.2
    }
    for attempt in range(2):
        try:
            r = requests.post(url, headers=headers, json=payload, timeout=60)
            if r.status_code == 200:
                return r.json()['choices'][0]['message']['content'].strip()
            elif r.status_code == 429:
                time.sleep(3)
            else:
                break
        except Exception:
            time.sleep(1)
    return None

def call_gemini(prompt):
    if not GEMINI_KEY:
        return None
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={GEMINI_KEY}"
    payload = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {"temperature": 0.2, "maxOutputTokens": 8192}
    }
    for attempt in range(2):
        try:
            r = requests.post(url, headers={"Content-Type": "application/json"}, json=payload, timeout=60)
            if r.status_code == 200:
                return r.json()['candidates'][0]['content']['parts'][0]['text'].strip()
            elif r.status_code == 429:
                time.sleep(3)
            else:
                break
        except Exception:
            time.sleep(1)
    return None

def build_prompt(subject_id, chapter_id, chapter_title, snippets):
    return f"""You are the Lead Content Architect for Jayastra (NDA, CDS, AFCAT, CAPF exams).
Generate an EXHAUSTIVE, MASTER-GRADE revision compendium for the following syllabus chapter:

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
8. Section 6: <h4 style="border-left: 3px solid var(--warning); padding-left: 8px; margin-top: 24px; color: var(--text-primary); font-weight: 600;">📚 COMPREHENSIVE FACT BANK & ADVANCED DETAILS</h4>
   - 20+ dense bullet points covering all granular facts, specific numbers, formulas in <code>...</code>, case laws/articles (if polity), battles/dates (if history), units/constants (if physics/chem), structures/pathogens (if bio), aircraft/ranks/exercises (if military).

{f'Relevant Book Snippets to Integrate:\n{snippets[:1200]}' if snippets else ''}

Return ONLY clean, valid HTML. Do NOT wrap output in markdown ```html code blocks."""

from test_table_converter import convert_markdown_tables_to_html

def process_single_chapter(ch, snippets_dict, expanded_cache):
    ch_id = ch['id']
    sub_id = ch['subject']
    ch_title = ch['title']

    # Check cache
    with cache_lock:
        if ch_id in expanded_cache and len(expanded_cache[ch_id]) > 10000:
            print(f"Skipping '{ch_id}' (Already cached: {len(expanded_cache[ch_id])} chars)")
            return ch_id, len(expanded_cache[ch_id]), True

    print(f"Expanding '{ch_title}' ({ch_id}) in {sub_id.upper()}...")
    snippets = "\n".join(snippets_dict.get(ch_id, [])[:4])
    prompt = build_prompt(sub_id, ch_id, ch_title, snippets)

    # 1. Try Groq
    html_res = call_groq(prompt)
    if not html_res or len(html_res) < 3000:
        # 2. Fallback to Gemini
        print(f"  -> Gemini fallback for '{ch_id}'...")
        html_res = call_gemini(prompt)

    if html_res and len(html_res) > 3000:
        clean = html_res.replace('```html', '').replace('```', '').strip()
        # Convert any markdown tables to HTML
        clean = convert_markdown_tables_to_html(clean)
        if not clean.startswith('<div class="revision-card"'):
            clean = f'<div class="revision-card">\n{clean}\n</div>'

        with cache_lock:
            expanded_cache[ch_id] = clean
            with open(CACHE_FILE, 'w', encoding='utf-8') as f:
                json.dump(expanded_cache, f, ensure_ascii=False, indent=2)

        print(f"  ✅ [SAVED] '{ch_id}': {len(clean)} chars (Total cached: {len(expanded_cache)}/202)")
        return ch_id, len(clean), True
    else:
        print(f"  ❌ [FAILED] '{ch_id}'")
        return ch_id, 0, False

def run_pipeline(max_workers=3):
    print(f"=== LAUNCHING OPTIMIZED AI EXPANSION PIPELINE ({max_workers} WORKERS) ===")
    
    with open('canonical_syllabus.json', 'r', encoding='utf-8') as f:
        syllabus = json.load(f)

    all_chapters = []
    for sub_id, sub_data in syllabus.items():
        for ch in sub_data['chapters']:
            all_chapters.append({
                'subject': sub_id,
                'id': ch['id'],
                'title': ch['title']
            })

    print(f"Total syllabus chapters: {len(all_chapters)}")

    # Load cache
    expanded_cache = {}
    if os.path.exists(CACHE_FILE):
        try:
            with open(CACHE_FILE, 'r', encoding='utf-8') as f:
                expanded_cache = json.load(f)
            print(f"Loaded {len(expanded_cache)} chapters from {CACHE_FILE}.")
        except Exception as e:
            print(f"Cache load error: {e}")

    # Load snippets
    snippets_dict = {}
    if os.path.exists('chapter_snippets.json'):
        with open('chapter_snippets.json', 'r', encoding='utf-8') as f:
            snippets_dict = json.load(f)
        print(f"Loaded precomputed snippets for {len(snippets_dict)} chapters.")

    pending_chapters = [c for c in all_chapters if c['id'] not in expanded_cache or len(expanded_cache[c['id']]) <= 10000]
    print(f"Pending chapters to expand: {len(pending_chapters)} / {len(all_chapters)}")

    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        futures = {executor.submit(process_single_chapter, ch, snippets_dict, expanded_cache): ch for ch in pending_chapters}
        for future in as_completed(futures):
            try:
                ch_id, chars, success = future.result()
            except Exception as e:
                print(f"Exception during worker execution: {e}")

    print(f"\nPipeline finished. Total chapters in cache: {len(expanded_cache)} / {len(all_chapters)}")

if __name__ == "__main__":
    run_pipeline(max_workers=3)
