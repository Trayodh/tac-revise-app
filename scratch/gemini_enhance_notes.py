import os
import json
import time
import requests
import re
from dotenv import load_dotenv

load_dotenv()
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")

SYSTEM_PROMPT = """You are a world-class Indian Defence Exam tutor (NDA/CDS/AFCAT) who writes the best study notes in India. Your notes are renowned for being:
1. DEEPLY DETAILED — every concept is explained clearly with real examples relevant to defence aspirants
2. EXAM-FOCUSED — you always call out which exam (NDA/CDS/AFCAT) and approximately which year a fact is commonly tested
3. STRUCTURED — you use h3/h4 headings, coloured callout boxes, styled tables, and bullet lists
4. MNEMONIC-RICH — you include memory hacks, acronyms, and tricks to memorise sequences, lists, and formulas
5. PURE HTML — output raw HTML only. Never use markdown. Never wrap in code blocks. Close all tags. No DOCTYPE, no <html>/<head>/<body> tags."""

def enhance_notes(topic_id, topic_title, subject_title, base_content):
    if not GEMINI_API_KEY:
        print("MISSING API KEY!")
        return None
        
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={GEMINI_API_KEY}"
    headers = {"Content-Type": "application/json"}
    
    prompt_text = f"""You are enhancing existing study notes for: "{topic_title}"
Subject: "{subject_title}" | Exam: NDA / CDS / AFCAT

EXISTING NOTES (base content to enhance — do NOT delete any information, only ADD and RESTRUCTURE):
{base_content[:8000]}

ENHANCEMENT INSTRUCTIONS:
Start your output DIRECTLY with this opening div (no preamble):
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: #4ade80; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600;">{topic_title}</h3>

MANDATORY ENHANCEMENTS TO ADD (do all of these):

1. STRUCTURE: Organise content under clear <h4> subheadings. Remove any remnant light-theme CSS. Use dark-mode colors: text #e2e8f0, headings #4ade80, accent #fbbf24.
2. EXAM CALLOUT BOX — add at least one:
<div style="background: rgba(74,222,128,0.08); border-left: 4px solid #4ade80; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
  <strong style="color: #4ade80;">⚡ Exam Tip (NDA/CDS):</strong> [specific high-yield fact]
</div>
3. MEMORY HACK — add at least one mnemonic or trick:
<div style="background: rgba(251,191,36,0.08); border-left: 4px solid #fbbf24; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
  <strong style="color: #fbbf24;">💡 Memory Hack:</strong> [clever acronym or trick]
</div>
4. COMPARISON TABLE — if applicable, add a styled table.
5. WIKI LINKS — wrap 5-10 key terms in [[double brackets]].

CRITICAL RULES:
- Minimum output: 1500 words of content
- Raw HTML only — start with <div and end with </div>"""
    
    data = {
        "contents": [{"parts": [{"text": SYSTEM_PROMPT}, {"text": prompt_text}]}],
        "generationConfig": {"temperature": 0.4, "maxOutputTokens": 8192}
    }

    for attempt in range(3):
        try:
            response = requests.post(url, headers=headers, json=data)
            if response.status_code == 429:
                time.sleep(5)
                continue
            response.raise_for_status()
            res_json = response.json()
            if "candidates" in res_json and len(res_json["candidates"]) > 0:
                text = res_json["candidates"][0]["content"]["parts"][0].get("text", "")
                text = text.replace("```html", "").replace("```", "").strip()
                return text
            return None
        except Exception as e:
            time.sleep(5)
    return None

import subprocess

def run():
    print("Loading database...")
    # Quick hack to extract JSON from notes_data_exam_focused.js
    with open('notes_data_exam_focused.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    start_idx = content.find("const NOTES_DATABASE = ") + len("const NOTES_DATABASE = ")
    end_idx = content.find(";", start_idx)
    while content[end_idx-1] != '}':
        end_idx = content.rfind("}", 0, end_idx) + 1
        break
        
    db_json = content[start_idx:end_idx].strip()
    db = json.loads(db_json)
    
    FILE_MAP = {
      'economics': 'notes_extra_economics.js',
      'english': 'notes_extra_english.js',
      'polity': 'notes_extra_polity.js',
      'history': 'notes_extra_history.js',
      'geography': 'notes_extra_geography.js',
    }
    
    for subject_id, filename in FILE_MAP.items():
        if subject_id not in db: continue
        
        # Read existing file to know what to skip
        existing_content = ""
        if os.path.exists(filename):
            with open(filename, 'r', encoding='utf-8') as f:
                existing_content = f.read()
        else:
            existing_content = "window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};\n\n"
            
        print(f"\nProcessing {subject_id} -> {filename}")
        
        subject = db[subject_id]
        for chapter in subject.get('chapters', []):
            for topic in chapter.get('topics', []):
                topic_id = topic['id']
                if f'EXPANDED_NOTES_DATA["{topic_id}"]' in existing_content or f"EXPANDED_NOTES_DATA['{topic_id}']" in existing_content:
                    print(f" [SKIP] {topic['title']}")
                    continue
                    
                print(f" [GEN]  {topic['title']} ...")
                enhanced = enhance_notes(topic_id, topic['title'], subject['title'], topic.get('notes', ''))
                if enhanced and len(enhanced) > 500:
                    escaped = enhanced.replace("\\", "\\\\").replace("`", "\\`").replace("$", "\\$")
                    js_code = f'\nwindow.EXPANDED_NOTES_DATA["{topic_id}"] = `\n{escaped}\n`;\n'
                    with open(filename, 'a', encoding='utf-8') as f:
                        f.write(js_code)
                    print(f"        -> Success (+{len(enhanced)} chars)")
                    # Update existing_content to prevent duplicates in case of errors
                    existing_content += js_code 
                else:
                    print("        -> FAILED")

if __name__ == "__main__":
    run()
