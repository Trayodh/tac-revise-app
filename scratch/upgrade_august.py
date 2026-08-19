import os
import json
import time
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()
genai.configure(api_key=os.environ.get("GEMINI_API_KEY"))

model = genai.GenerativeModel('gemini-2.5-flash')
filename = "current_affairs_db.js"

prompt_template = """
You are a subject matter expert for Indian Defence Exams (NDA, CDS, AFCAT).
I am providing you with a brief Current Affairs item.
Your task is to generate the rich metadata fields for it (UPSC Highlights, detailed analysis, etc.) so it can be displayed in a deep-dive UI.

ORIGINAL TOPIC: {topic}
ORIGINAL TEXT: {text}
ORIGINAL DETAILS: {details}

Output strictly as a JSON object (no markdown, no backticks).
Include ONLY the following keys in your JSON object (do not include id, topic, text, details, mcq):
{{
  "upscHighlights": ["Highlight 1 (5-10 words)", "Highlight 2", "Highlight 3"],
  "institutionalContext": "Brief context about the institution involved.",
  "strategicImportance": "Why this matters for UPSC / Defence.",
  "quickSummary": "A slightly longer paragraph summarizing the event.",
  "detailedAnalysis": "Detailed background and analysis paragraph.",
  "backgroundContext": "Historical or contextual background.",
  "stakeholders": ["Entity A", "Entity B"],
  "relatedTopics": ["Topic 1", "Topic 2"],
  "examRelevanceMatrix": {{
    "NDA": "High/Medium/Low",
    "CDS": "High/Medium/Low",
    "AFCAT": "High/Medium/Low"
  }},
  "potentialQuestions": {{
    "shortAnswers": ["Question 1?", "Question 2?"],
    "interviewQuestions": ["Interview Q 1?", "Interview Q 2?"],
    "ssbDiscussionTopics": ["SSB topic 1", "SSB topic 2"]
  }}
}}
"""

def generate_rich_fields(item):
    prompt = prompt_template.format(
        topic=item.get("topic", ""),
        text=item.get("text", ""),
        details=json.dumps(item.get("details", {}))
    )
    
    max_retries = 3
    attempt = 0
    while True:
        try:
            response = model.generate_content(prompt)
            output_text = response.text.strip()
            
            if output_text.startswith("```json"):
                output_text = output_text[7:]
            elif output_text.startswith("```"):
                output_text = output_text[3:]
                
            if output_text.endswith("```"):
                output_text = output_text[:-3]
                
            return json.loads(output_text.strip())
        except Exception as e:
            err_str = str(e)
            if "429" in err_str or "Quota exceeded" in err_str:
                print(f"Rate limited. Sleeping for 10 seconds...")
                time.sleep(10)
                continue
            elif attempt < max_retries - 1:
                attempt += 1
                print(f"Error calling API (Attempt {attempt}): {e}. Retrying in 10 seconds...")
                time.sleep(10)
            else:
                print(f"Failed to generate for {item.get('id')} after {max_retries} attempts.")
                raise e

def upgrade_db():
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    prefix = "window.CURRENT_AFFAIRS_DB = "
    ca_json_str = content.replace(prefix, "").strip()
    if ca_json_str.endswith(";"):
        ca_json_str = ca_json_str[:-1]

    ca_db = json.loads(ca_json_str)

    total_upgraded = 0
    # We only want to upgrade August 2026
    items = ca_db.get("August 2026", [])
    print(f"Processing August 2026...")
    for i, item in enumerate(items):
        if "detailedAnalysis" in item and item["detailedAnalysis"]:
            continue
            
        print(f"  Upgrading {item.get('id', 'Unknown')}...")
        rich_fields = generate_rich_fields(item)
        if rich_fields:
            item.update(rich_fields)
            total_upgraded += 1
            
            new_ca_db_str = prefix + json.dumps(ca_db, indent=2) + ";\n"
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(new_ca_db_str)
            
        time.sleep(2) 

    print(f"Done! Upgraded {total_upgraded} items.")

if __name__ == "__main__":
    upgrade_db()
