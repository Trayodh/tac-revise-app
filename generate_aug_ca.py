import os
import json
import re
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()
genai.configure(api_key=os.environ.get("GEMINI_API_KEY"))

def generate_ca():
    model = genai.GenerativeModel('gemini-2.5-flash')
    
    prompt = """
    Generate 5 current affairs items for August 2026 relevant to Indian Defence Exams (NDA, CDS, AFCAT).
    Output the items strictly as a JSON array of objects. Do not include markdown codeblocks, just the raw JSON string.
    Each object should have the following exact structure:
    {
      "id": "aug-1",
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
    
    response = model.generate_content(prompt)
    output_text = response.text.strip()
    
    if output_text.startswith("```json"):
        output_text = output_text[7:]
    elif output_text.startswith("```"):
        output_text = output_text[3:]
        
    if output_text.endswith("```"):
        output_text = output_text[:-3]
        
    return json.loads(output_text.strip())

def update_db():
    filename = "notes_data_upgraded.js"
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

    print("Generating CA for August 2026...")
    aug_ca = generate_ca()
    
    # Fix IDs
    for i, item in enumerate(aug_ca):
        item["id"] = f"aug-{i+1}"
        
    ca_db["August 2026"] = aug_ca

    new_ca_db_str = prefix + json.dumps(ca_db, indent=2) + ";\n\n"

    with open(filename, 'w', encoding='utf-8') as f:
        f.write(new_ca_db_str + split_str + nd_json_str)
    
    print("Done! Updated August 2026 with 5 new CA items.")

if __name__ == "__main__":
    update_db()
