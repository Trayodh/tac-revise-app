import os
import json
import time
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()
client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=os.environ.get("OPENROUTER_API_KEY"),
)
model = "openrouter/free"

def generate_ca():
    prompt = """
    Generate 15 MORE current affairs items for August 2026 relevant to Indian Defence Exams (NDA, CDS, AFCAT).
    DO NOT include these topics which are already covered: Tejas Mk2 delivery, Malabar Plus 2026, MQ-9B Predator drone deal, Sela Tunnel Phase 2, GSAT-7C (Vayu Shakti) launch.
    Ensure they cover different areas like Military Exercises, Defence Procurements, Appointments, Space/Missile tests, and Geopolitics.
    Output the items strictly as a JSON array of objects. Do not include markdown codeblocks, just the raw JSON string.
    Each object should have the following exact structure:
    {
      "topic": "Topic Name (e.g. Defence Procurements, Joint Exercises, etc.)",
      "text": "Short news text with important parts in **bold** or <mark style='background:rgba(255,210,0,0.25);padding:1px 4px;border-radius:3px;'>highlighted</mark>.",
      "details": {
        "winner": "Key Entity",
        "award": "Key Event/Award",
        "nationality": "Country",
        "summary": "1 sentence summary"
      },
      "mcq": {
        "question": "A multiple choice question?",
        "options": ["Opt A", "Opt B", "Opt C", "Opt D"],
        "correct": 0,
        "explanation": "Why the answer is correct."
      },
      "upscHighlights": ["Highlight 1 (5-10 words)", "Highlight 2", "Highlight 3"],
      "institutionalContext": "Brief context about the institution involved.",
      "strategicImportance": "Why this matters for UPSC / Defence.",
      "quickSummary": "A slightly longer paragraph summarizing the event.",
      "detailedAnalysis": "Detailed background and analysis paragraph.",
      "backgroundContext": "Historical or contextual background.",
      "stakeholders": ["Entity A", "Entity B"],
      "relatedTopics": ["Topic 1", "Topic 2"],
      "examRelevanceMatrix": {
        "NDA": "High",
        "CDS": "Medium",
        "AFCAT": "High"
      },
      "potentialQuestions": {
        "shortAnswers": ["Question 1?", "Question 2?"],
        "interviewQuestions": ["Interview Q 1?", "Interview Q 2?"],
        "ssbDiscussionTopics": ["SSB topic 1", "SSB topic 2"]
      }
    }
    """
    
    response = client.chat.completions.create(
        model=model,
        messages=[{"role": "user", "content": prompt}],
        temperature=0.7
    )
    output_text = response.choices[0].message.content.strip()
    
    if output_text.startswith("```json"):
        output_text = output_text[7:]
    elif output_text.startswith("```"):
        output_text = output_text[3:]
        
    if output_text.endswith("```"):
        output_text = output_text[:-3]
        
    return json.loads(output_text.strip())

def update_db():
    filename = "notes_data_exam_focused.js"
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    split_str = "const NOTES_DATABASE = "
    parts = content.split(split_str)
    ca_db_str = parts[0]
    nd_json_str = parts[1]

    prefix = "let CURRENT_AFFAIRS_DB = "
    ca_json_str = ca_db_str.replace(prefix, "").strip()
    if ca_json_str.endswith(";"):
        ca_json_str = ca_json_str[:-1]

    ca_db = json.loads(ca_json_str)

    print("Generating 15 MORE CA items for August 2026...")
    new_aug_ca = generate_ca()
    
    existing_aug = ca_db.get("August 2026", [])
    start_id = len(existing_aug) + 1
    
    # Fix IDs
    for i, item in enumerate(new_aug_ca):
        item["id"] = f"aug-{start_id + i}"
        
    ca_db["August 2026"] = existing_aug + new_aug_ca

    new_ca_db_str = prefix + json.dumps(ca_db, indent=2) + ";\n\n"

    with open(filename, 'w', encoding='utf-8') as f:
        f.write(new_ca_db_str + split_str + nd_json_str)
    
    print(f"Done! Appended {len(new_aug_ca)} new CA items to August 2026.")

if __name__ == "__main__":
    update_db()
