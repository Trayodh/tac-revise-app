import os
import re
import json
import time
import requests
from dotenv import load_dotenv

load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

if not GEMINI_API_KEY:
    print("ERROR: GEMINI_API_KEY is missing in .env")
    exit(1)

is_oauth = GEMINI_API_KEY.startswith("AQ.") or GEMINI_API_KEY.startswith("ya29.")

SYSTEM_PROMPT = """You are an Expert Defence Examination Educator compiling Current Affairs for July 2026.
Use your Google Search tool to find 10 major Indian Defence and National Security events from July 2026.
Include topics like Joint Exercises, Missile Technology, Naval Inductions, Space & Defence, and Sports Awards.

You MUST return the output EXACTLY as a raw JSON array of objects. Do not use markdown blocks like ```json.
Every object must strictly follow this schema:
{
  "id": "jul-1",
  "topic": "Choose a relevant topic (e.g. Defence Technology, Joint Exercises)",
  "text": "Write a comprehensive 4-5 sentence paragraph explaining What happened, Why it matters, How it works, and its Effect on national security.",
  "details": {
    "winner": "Key Entity/Person/Country",
    "award": "Name of Event/Missile/Exercise",
    "nationality": "Indian/Relevant Country",
    "summary": "1 sentence summary"
  },
  "mcq": {
    "question": "Formulate a UPSC standard MCQ",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correct": 0, // Integer index of the correct option (0-3)
    "explanation": "Detailed explanation of why the answer is correct."
  }
}
"""

def generate_july_ca():
    print("Querying Gemini API with Google Search to compile July 2026 Current Affairs...")
    
    url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent"
    if not is_oauth:
        url += f"?key={GEMINI_API_KEY}"
        
    headers = {'Content-Type': 'application/json'}
    if is_oauth:
        headers['Authorization'] = f'Bearer {GEMINI_API_KEY}'
        
    payload = {
        "contents": [{"parts": [{"text": SYSTEM_PROMPT}]}],
        "tools": [{"googleSearch": {}}],
        "generationConfig": {"temperature": 0.2}
    }
    
    response = requests.post(url, json=payload, headers=headers, timeout=120)
    response.raise_for_status()
    resp_json = response.json()
    
    if "candidates" in resp_json and len(resp_json["candidates"]) > 0:
        result_text = resp_json["candidates"][0]["content"]["parts"][0]["text"]
        
        # Clean markdown wrappers if Gemini returns them
        if result_text.startswith("```json"):
            result_text = result_text[7:]
        elif result_text.startswith("```"):
            result_text = result_text[3:]
        if result_text.endswith("```"):
            result_text = result_text[:-3]
            
        return result_text.strip()
    else:
        print("Error: No response generated.")
        return None

def inject_into_js(json_string):
    input_path = 'notes_data.js'
    
    if not os.path.exists(input_path):
        print(f"ERROR: Cannot find {input_path}")
        return

    print("Parsing generated JSON...")
    try:
        new_data = json.loads(json_string)
        if not isinstance(new_data, list):
            raise ValueError("Output is not a JSON array.")
    except Exception as e:
        print(f"Failed to parse JSON from AI: {e}")
        print("Raw Output:", json_string)
        return

    print(f"Successfully generated {len(new_data)} Current Affairs entries for July 2026.")
    
    with open(input_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find where the database starts
    db_match = re.search(r'let CURRENT_AFFAIRS_DB\s*=\s*\{', content)
    if not db_match:
        print("Could not find CURRENT_AFFAIRS_DB in notes_data.js")
        return
        
    insertion_point = db_match.end()
    
    # Format the new entry as Javascript code
    july_code = f'\n  "July 2026": {json.dumps(new_data, indent=4)},\n'
    
    new_content = content[:insertion_point] + july_code + content[insertion_point:]
    
    with open(input_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print(f"✅ Successfully injected July 2026 data into {input_path}!")

if __name__ == "__main__":
    generated_json = generate_july_ca()
    if generated_json:
        inject_into_js(generated_json)
