import os
import json
import time
from groq import Groq
from dotenv import load_dotenv
import threading

load_dotenv()
client = Groq(api_key=os.environ.get("GROQ_API_KEY"))

model_name = 'llama-3.1-70b-versatile'
filename = "current_affairs_db.js"

prompt_template = """
You are a subject matter expert for Indian Defence Exams (NDA, CDS, AFCAT).
I am providing you with a brief Current Affairs item.
Your task is to generate the rich metadata fields for it (UPSC Highlights, detailed analysis, etc.) so it can be displayed in a deep-dive UI.

ORIGINAL TOPIC: {topic}
ORIGINAL TEXT: {text}
ORIGINAL DETAILS: {details}

Output strictly as a JSON object (no markdown, no backticks, no comments).
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
    while attempt < max_retries:
        try:
            chat_completion = client.chat.completions.create(
                messages=[
                    {"role": "user", "content": prompt}
                ],
                model=model_name,
                temperature=0.2,
                response_format={"type": "json_object"}
            )
            output_text = chat_completion.choices[0].message.content.strip()
            
            return json.loads(output_text.strip())
        except Exception as e:
            attempt += 1
            print(f"Error calling API (Attempt {attempt}): {e}. Retrying...")
            time.sleep(2)
            
    print(f"Failed to generate for {item.get('id')} after {max_retries} attempts.")
    return None

def upgrade_db():
    print("Reading file...")
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    prefix = "window.CURRENT_AFFAIRS_DB = "
    if not content.startswith(prefix):
        print("Unexpected file format.")
        return

    ca_json_str = content[len(prefix):].strip()
    if ca_json_str.endswith(";"):
        ca_json_str = ca_json_str[:-1]

    ca_db = json.loads(ca_json_str)
    
    target_months = ['April 2026', 'May 2026', 'June 2026', 'July 2026', 'August 2026']

    total_upgraded = 0
    
    # Define a worker function
    def process_item(item):
        if "upscHighlights" in item and item["upscHighlights"]:
            return
        
        rich_fields = generate_rich_fields(item)
        if rich_fields:
            # Add to the item
            for key, value in rich_fields.items():
                item[key] = value

    import concurrent.futures

    print("Starting processing...")
    for month in target_months:
        if month not in ca_db:
            continue
        items = ca_db[month]
        print(f"Processing {month} ({len(items)} items)...")
        
        with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
            list(executor.map(process_item, items))
            
        # Save progress after each month
        new_ca_db_str = prefix + json.dumps(ca_db, indent=2) + ";\n"
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(new_ca_db_str)
            
        print(f"Saved {month}.")

    print(f"Done!")

if __name__ == "__main__":
    upgrade_db()
