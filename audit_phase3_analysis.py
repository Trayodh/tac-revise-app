import json
import os
import glob
import time
import requests
from dotenv import load_dotenv

load_dotenv()
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")

SYSTEM_PROMPT = """You are an expert Defence Examination Content Engineer. 
Analyze the provided text corpus chunk and extract metadata to build a comprehensive knowledge map.
For each chunk, you must output a JSON array of objects, one for each distinct topic found in the text.
The JSON array MUST conform exactly to this schema:
[
  {
    "document_type": ["NOTES", "REFERENCE", "PYQ", "PRACTICE", "PREDICTED", "CURRENT_AFFAIRS", "MIXED"],
    "subject": "e.g. Mathematics, History, Geography, Physics...",
    "chapter": "e.g. Trigonometry",
    "topic": "e.g. Heights and Distances",
    "subtopic": "e.g. Angle of Elevation",
    "knowledge_depth": "D1 (Basic), D2 (Standard), D3 (Advanced), D4 (UPSC-Prelims-like), D5 (Specialist)",
    "knowledge_types": ["definitions", "concepts", "mechanisms/processes", "factual information", "formulas", "examples", "diagrams", "tables", "applications", ...],
    "knowledge_nature": "STATIC or DYNAMIC",
    "is_new_topic_candidate": true/false
  }
]
Reply ONLY with the raw JSON array.
"""

def analyze_chunk(text_chunk):
    if not GEMINI_API_KEY:
        return []
        
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key={GEMINI_API_KEY}"
    headers = {"Content-Type": "application/json"}
    
    data = {
        "contents": [
            {
                "parts": [
                    {"text": SYSTEM_PROMPT},
                    {"text": f"Text to analyze:\\n\\n{text_chunk}"}
                ]
            }
        ],
        "generationConfig": {
            "temperature": 0.1,
            "response_mime_type": "application/json"
        }
    }

    try:
        response = requests.post(url, headers=headers, json=data)
        response.raise_for_status()
        res_json = response.json()
        
        if "candidates" in res_json and len(res_json["candidates"]) > 0:
            text = res_json["candidates"][0]["content"]["parts"][0]["text"]
            return json.loads(text)
        return []
    except Exception as e:
        print(f"API Error: {e}")
        return []

def main():
    extracted_files = glob.glob("extracted_*.json")
    
    if not extracted_files:
        print("No extracted files found. Run phase 2 first.")
        return
        
    all_analysis = []
    
    for file in extracted_files:
        print(f"Analyzing {file}...")
        with open(file, "r", encoding="utf-8") as f:
            pages = json.load(f)
            
        # Chunk text (e.g. 5 pages per chunk)
        chunk_size = 5
        for i in range(0, len(pages), chunk_size):
            chunk_pages = pages[i:i+chunk_size]
            chunk_text = "\\n\\n".join([f"--- PAGE {p['page']} ---\\n{p['text']}" for p in chunk_pages])
            
            print(f"  Sending pages {i+1} to {min(i+chunk_size, len(pages))} to Gemini...")
            result = analyze_chunk(chunk_text)
            
            if result:
                for item in result:
                    item['source_file'] = file
                    item['pages'] = f"{i+1}-{min(i+chunk_size, len(pages))}"
                all_analysis.extend(result)
            
            time.sleep(4) # Rate limiting
            
    with open("Phase3_Analysis_Results.json", "w") as f:
        json.dump(all_analysis, f, indent=2)
        
    print("Phase 3 complete!")

if __name__ == "__main__":
    main()
