import json
import os
import time
import requests
from dotenv import load_dotenv

load_dotenv()
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")

SYSTEM_PROMPT = """You are an expert Defence Examination Content Engineer. 
You are performing SUBJECT KNOWLEDGE CONSOLIDATION.

Your objective is to capture the COMPLETE useful knowledge available across the supplied sources for the given topic. 
Do NOT create short revision notes. Do not reduce information merely to make the output shorter.
Preserve all useful tables, examples, classifications, and facts. Resolve contradictions if possible.

Structure your output as a JSON object strictly following this schema:
{
  "subject": "<subject>",
  "chapter": "<chapter>",
  "topic": "<topic>",
  "subtopic": "<subtopic>",
  "consolidation": {
    "core_knowledge": "Essential understanding in deep detail.",
    "supporting_knowledge": "Facts and explanations needed to understand the topic properly.",
    "advanced_knowledge": "Less obvious but relevant information.",
    "exceptions_and_traps": "Facts that are commonly misunderstood or exceptions to rules.",
    "applications": "Real-world/scientific/administrative/defence applications where relevant.",
    "relationships": "Connections to other topics.",
    "current_dynamic_elements": "Information requiring periodic updating."
  },
  "missing_elements": "Identify what is still missing from standard defence-level knowledge for this topic."
}
Reply ONLY with the raw JSON object.
"""

def consolidate_topic(key, topic_data):
    if not GEMINI_API_KEY:
        return None
        
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent?key={GEMINI_API_KEY}"
    headers = {"Content-Type": "application/json"}
    
    # Combine all raw text from all sources
    raw_text_blocks = []
    for idx, src in enumerate(topic_data["sources"]):
        raw_text_blocks.append(f"--- SOURCE {idx+1} ({src['file']} pages {src['pages']}) ---\\n{src['text']}")
        
    full_text = "\\n\\n".join(raw_text_blocks)
    
    # Safety cut-off if it's absurdly large (e.g. >100k chars for a single subtopic)
    if len(full_text) > 200000:
        full_text = full_text[:200000] + "\\n...[TRUNCATED DUE TO SIZE]..."
        
    prompt_text = (
        f"Subject: {topic_data['subject']}\\n"
        f"Chapter: {topic_data['chapter']}\\n"
        f"Topic: {topic_data['topic']}\\n"
        f"Subtopic: {topic_data['subtopic']}\\n\\n"
        f"RAW SOURCE MATERIAL:\\n{full_text}"
    )
    
    data = {
        "contents": [
            {
                "parts": [
                    {"text": SYSTEM_PROMPT},
                    {"text": prompt_text}
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
        return None
    except Exception as e:
        print(f"API Error for {key}: {e}")
        return None

def main():
    print("Starting Step 1: LLM Knowledge Consolidation...")
    
    if not os.path.exists("Raw_Topic_Clusters.json"):
        print("Error: Raw_Topic_Clusters.json not found. Run aggregator first.")
        return
        
    with open("Raw_Topic_Clusters.json", "r", encoding="utf-8") as f:
        clusters = json.load(f)
        
    consolidated_db = {}
    
    # For demonstration/checkpointing, save periodically
    total = len(clusters)
    count = 0
    
    for key, data in clusters.items():
        count += 1
        print(f"[{count}/{total}] Consolidating {key}...")
        
        # Skip empty sources
        if not data["sources"]:
            continue
            
        result = consolidate_topic(key, data)
        if result:
            subject = result.get("subject", "General")
            if subject not in consolidated_db:
                consolidated_db[subject] = []
            consolidated_db[subject].append(result)
            
        time.sleep(4) # Rate limiting
        
        # Periodic save every 20 topics to prevent data loss
        if count % 20 == 0:
            for subj, records in consolidated_db.items():
                with open(f"Consolidated_Knowledge_{subj}.json", "w", encoding="utf-8") as out:
                    json.dump(records, out, indent=2)
                    
    # Final save & markdown generation
    for subj, records in consolidated_db.items():
        # Save JSON
        with open(f"Consolidated_Knowledge_{subj}.json", "w", encoding="utf-8") as out:
            json.dump(records, out, indent=2)
            
        # Generate Markdown
        with open(f"Consolidated_Knowledge_{subj}.md", "w", encoding="utf-8") as out:
            out.write(f"# Consolidated Knowledge Base: {subj}\\n\\n")
            
            # Group by chapter/topic
            for r in records:
                out.write(f"## Chapter: {r.get('chapter')}\\n")
                out.write(f"### Topic: {r.get('topic')}\\n")
                out.write(f"#### Subtopic: {r.get('subtopic')}\\n\\n")
                
                c = r.get("consolidation", {})
                
                out.write("##### Core Knowledge\\n")
                out.write(f"{c.get('core_knowledge', 'N/A')}\\n\\n")
                
                out.write("##### Supporting Knowledge\\n")
                out.write(f"{c.get('supporting_knowledge', 'N/A')}\\n\\n")
                
                out.write("##### Advanced Knowledge\\n")
                out.write(f"{c.get('advanced_knowledge', 'N/A')}\\n\\n")
                
                out.write("##### Exceptions & Traps\\n")
                out.write(f"{c.get('exceptions_and_traps', 'N/A')}\\n\\n")
                
                out.write("##### Applications\\n")
                out.write(f"{c.get('applications', 'N/A')}\\n\\n")
                
                out.write("##### Relationships\\n")
                out.write(f"{c.get('relationships', 'N/A')}\\n\\n")
                
                out.write("##### Current/Dynamic Elements\\n")
                out.write(f"{c.get('current_dynamic_elements', 'N/A')}\\n\\n")
                
                out.write("> **Missing Elements Identified:**\\n> ")
                out.write(f"{r.get('missing_elements', 'None identified.')}\\n\\n")
                out.write("---\\n\\n")
                
    print("Consolidation Phase Complete!")

if __name__ == "__main__":
    main()
