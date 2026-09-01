import os
import json
import requests
from dotenv import load_dotenv

load_dotenv()
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")

if not GEMINI_API_KEY:
    print("Error: GEMINI_API_KEY not found in .env file.")
    exit(1)

topics = [
    {"id": "afcat-r-analogy", "name": "Analogy"},
    {"id": "afcat-r-classification", "name": "Classification"},
    {"id": "afcat-r-series", "name": "Series"},
    {"id": "afcat-r-coding", "name": "Coding-Decoding"},
    {"id": "afcat-r-directions", "name": "Direction Sense Test"},
    {"id": "afcat-r-clock-calendar", "name": "Clock and Calendar"},
    {"id": "afcat-r-venn", "name": "Venn Diagrams"},
    {"id": "afcat-r-conclusions", "name": "Syllogism and Conclusions"},
    {"id": "afcat-r-assumptions", "name": "Statement and Assumptions"},
    {"id": "afcat-r-fig-analogy", "name": "Figure Analogy"},
    {"id": "afcat-r-fig-class-series", "name": "Figure Classification and Series"},
    {"id": "afcat-r-fig-completion", "name": "Completion of Figure"},
    {"id": "afcat-r-embedded", "name": "Embedded Figures"},
    {"id": "afcat-r-dot", "name": "Dot Situation"},
    {"id": "afcat-r-cube-dice", "name": "Cubes and Dice"}
]

def generate_note(topic):
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key={GEMINI_API_KEY}"
    headers = {"Content-Type": "application/json"}
    
    prompt = f"""
    You are an expert tutor for Indian Defence Exams (NDA, CDS, AFCAT).
    Generate comprehensive, detailed study notes for the Reasoning & Aptitude topic: {topic['name']}.
    The notes must be specifically targeted at AFCAT and NDA exams.

    FORMAT REQUIREMENTS:
    - Return ONLY valid HTML (no markdown code block wrappers like ```html).
    - Start with an <h1>{topic['name']}</h1> followed by <hr />.
    - Use <h2> for sub-topics and <h3> for smaller sections.
    - Use <p>, <ul>, and <li> for standard text.
    - For important tips, formulas, or "Exam Traps", use this specific callout HTML:
      <div style="background-color:rgba(255, 193, 7, 0.15); padding: 10px; border-left: 4px solid #ffc107; margin-bottom: 15px;">
        <strong>EXAM TIP / TRAP:</strong> [content]
      </div>
    - Include at least 2 clear examples of typical questions asked in AFCAT/NDA for this topic, with step-by-step solutions.
    - Ensure the content is highly detailed (at least 500 words).
    - DO NOT include `window.EXPANDED_NOTES_DATA` or JS. Just return the raw HTML string.
    """

    data = {
        "contents": [{"parts": [{"text": prompt}]}]
    }

    response = requests.post(url, headers=headers, json=data)
    response.raise_for_status()
    res_json = response.json()
    
    if "candidates" in res_json and len(res_json["candidates"]) > 0:
        html = res_json["candidates"][0]["content"]["parts"][0]["text"].strip()
        if html.startswith("```html"):
            html = html[7:]
        if html.startswith("```"):
            html = html[3:]
        if html.endswith("```"):
            html = html[:-3]
        return html.strip()
    return ""

output_file = "notes_extra_reasoning.js"
with open(output_file, "w", encoding="utf-8") as f:
    f.write('window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};\\n\\n')
    
    for t in topics:
        print(f"Generating notes for {t['name']}...")
        try:
            html = generate_note(t)
            # Write to JS file using String.raw
            f.write(f'window.EXPANDED_NOTES_DATA["{t["id"]}"] = String.raw`\\n{html}\\n`;\\n\\n')
            print(f"Success for {t['name']}")
        except Exception as e:
            print(f"Failed for {t['name']}: {e}")

print("Reasoning notes generated successfully!")
