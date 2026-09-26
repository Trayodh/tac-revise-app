import json
import os
import time
from google import genai
from dotenv import load_dotenv

load_dotenv()
client = genai.Client(api_key=os.environ.get("GEMINI_API_KEY"))

def reclassify_notes():
    print("Loading notes_database.json...")
    if not os.path.exists("notes_database.json"):
        print("No notes_database.json found.")
        return

    with open("notes_database.json", "r", encoding="utf-8") as f:
        data = json.load(f)

    # We will process in batches to save API calls
    # Create a unique list of topics that lack a subject/chapter
    topics_to_classify = list(set([item.get('topic') for item in data if not item.get('subject') or not item.get('chapter')]))
    print(f"Found {len(topics_to_classify)} unique topics needing classification.")
    
    if not topics_to_classify:
        print("Everything is already classified!")
        return

    mapping = {}
    batch_size = 50
    
    for i in range(0, len(topics_to_classify), batch_size):
        batch = topics_to_classify[i:i+batch_size]
        prompt = f"""
You are an expert curriculum designer. I have a list of random educational topics extracted from textbooks for Defence Exams (NDA/CDS/AFCAT).
For each topic, assign it to a broad 'Subject' (e.g. Physics, Chemistry, Biology, History, Geography, Indian Polity, Economics, Current Affairs, Defence, etc.) and a relevant 'Chapter'.

Return ONLY a raw JSON dictionary mapping the topic string exactly to an object with 'subject' and 'chapter'.
Example:
{{
  "Kinetic Energy And Temperature": {{"subject": "Physics", "chapter": "Work, Energy and Power"}},
  "Early Vedic Period: Geography & Settlements": {{"subject": "History", "chapter": "Vedic Period"}}
}}

Topics to classify:
{json.dumps(batch)}
"""
        try:
            print(f"Processing batch {i//batch_size + 1}...")
            response = client.models.generate_content(
                model="gemini-2.5-flash",
                contents=prompt,
            )
            raw_text = response.text.strip()
            if raw_text.startswith('```json'):
                raw_text = raw_text[7:]
            if raw_text.startswith('```'):
                raw_text = raw_text[3:]
            if raw_text.endswith('```'):
                raw_text = raw_text[:-3]
                
            batch_map = json.loads(raw_text.strip())
            mapping.update(batch_map)
            time.sleep(3) # Avoid rate limit
        except Exception as e:
            print(f"Failed on batch {i//batch_size + 1}: {e}")

    # Apply mapping
    updated_count = 0
    for item in data:
        topic = item.get('topic')
        if topic in mapping:
            item['subject'] = mapping[topic].get('subject', 'General Studies')
            item['chapter'] = mapping[topic].get('chapter', topic)
            updated_count += 1

    print(f"Successfully reclassified {updated_count} notes.")
    
    with open("notes_database.json", "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)
        
    print("Saved notes_database.json. Ready to regenerate frontend.")

if __name__ == "__main__":
    reclassify_notes()
