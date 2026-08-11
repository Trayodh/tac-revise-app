import json
import os
import glob
import time
import requests
from datetime import datetime
from dotenv import load_dotenv

load_dotenv()
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")

# The prompt strictly enforces the research rules and schema
SYSTEM_PROMPT = """You are an expert Defence Examination Research Agent.
Your task is to research a specific 'Micro-Gap' identified in the knowledge base and fill it with authoritative, detailed, and current information.

SOURCE PRIORITY:
1. Government of India / nic.in / gov.in
2. Official ministries/departments
3. Constitutional/statutory bodies
4. DRDO/ISRO/armed forces
5. Universities and academic institutions
6. Established reference sources

RESEARCH RULES:
1. Answer the specific gap precisely. Do NOT collect random facts.
2. Reach the requested Target Depth (D1 to D5).
3. If multiple sources disagree, record the conflict in 'conflicting_information'. Do NOT silently choose one version.

Your response MUST be a JSON object strictly matching this schema:
{
  "claim": "The core factual or conceptual answer to the micro-gap.",
  "explanation": "Detailed explanation reaching the target depth, including mechanisms and exceptions.",
  "source": "URL or name of the authoritative source used.",
  "date_accessed": "YYYY-MM-DD",
  "static_dynamic_status": "STATIC | DYNAMIC",
  "confidence": "HIGH | MEDIUM | LOW",
  "conflicting_information": "Describe any disagreements found between sources, or write 'None' if unambiguous."
}
"""

def research_gap(subject, chapter, topic, target_depth, mg):
    if not GEMINI_API_KEY:
        return None
        
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent?key={GEMINI_API_KEY}"
    headers = {"Content-Type": "application/json"}
    
    query = f"Provide authoritative information regarding '{mg.get('gap')}' in the context of '{topic}' for Indian Defence Exams."
    
    prompt_text = (
        f"Subject: {subject}\\n"
        f"Chapter: {chapter}\\n"
        f"Topic: {topic}\\n"
        f"Target Depth: {target_depth}\\n"
        f"Micro-Gap Focus: {mg.get('gap')}\\n"
        f"Category: {mg.get('category')}\\n"
        f"Research Type: {mg.get('research_type')}\\n\\n"
        f"Execute search and synthesize the authoritative answer.\\n"
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
        "tools": [
            {
                "googleSearch": {} # Enable Google Search Grounding natively in Gemini API
            }
        ],
        "generationConfig": {
            "temperature": 0.2,
            "response_mime_type": "application/json"
        }
    }

    try:
        response = requests.post(url, headers=headers, json=data)
        response.raise_for_status()
        res_json = response.json()
        
        if "candidates" in res_json and len(res_json["candidates"]) > 0:
            text = res_json["candidates"][0]["content"]["parts"][0].get("text", "")
            if text:
                return json.loads(text)
        return None
    except Exception as e:
        print(f"API Error during research: {e}")
        return None

def main():
    print("Starting Step 3: AI + Internet Knowledge Expansion...")
    
    queue_files = glob.glob("Research_Queue_*.json")
    if not queue_files:
        print("No Research Queue JSON files found. Run Step 2 first.")
        return
        
    for file in queue_files:
        subject = file.replace("Research_Queue_", "").replace(".json", "")
        print(f"Executing automated research for {subject}...")
        
        with open(file, "r", encoding="utf-8") as f:
            queue_data = json.load(f)
            
        enriched_dataset = []
        log_entries = []
        
        for idx, item in enumerate(queue_data):
            ch = item.get("chapter")
            top = item.get("topic")
            target_depth = item.get("gap_analysis", {}).get("topic_depth_target", "D2")
            gaps = item.get("gap_analysis", {}).get("micro_gaps", [])
            
            print(f"  [{idx+1}/{len(queue_data)}] Researching Topic: {top} ({len(gaps)} gaps)")
            
            topic_enrichment = {
                "chapter": ch,
                "topic": top,
                "target_depth": target_depth,
                "researched_gaps": []
            }
            
            for mg in gaps:
                print(f"      -> Querying: {mg.get('gap')}")
                result = research_gap(subject, ch, top, target_depth, mg)
                
                if result:
                    # Enforce current date if missing or hallucinated
                    if not result.get("date_accessed") or "YYYY" in result.get("date_accessed"):
                        result["date_accessed"] = datetime.now().strftime("%Y-%m-%d")
                        
                    # Add trace metadata
                    result["original_gap"] = mg.get("gap")
                    result["priority"] = mg.get("priority")
                    
                    topic_enrichment["researched_gaps"].append(result)
                    
                    # Markdown logging
                    log_entries.append(
                        f"### {top}: {mg.get('gap')}\\n"
                        f"- **Claim:** {result.get('claim')}\\n"
                        f"- **Explanation:** {result.get('explanation')}\\n"
                        f"- **Source:** {result.get('source')} *(Accessed: {result.get('date_accessed')})*\\n"
                        f"- **Status/Confidence:** {result.get('static_dynamic_status')} / {result.get('confidence')}\\n"
                        f"- **Conflicts:** {result.get('conflicting_information')}\\n"
                    )
                    
                time.sleep(4) # Rate limit protection
                
            enriched_dataset.append(topic_enrichment)
            
        # Save Outputs
        json_out = f"Enriched_Knowledge_{subject}.json"
        with open(json_out, "w", encoding="utf-8") as f:
            json.dump(enriched_dataset, f, indent=2)
            
        md_out = f"Enriched_Knowledge_Log_{subject}.md"
        with open(md_out, "w", encoding="utf-8") as f:
            f.write(f"# Step 3 Enriched Knowledge Log: {subject}\\n\\n")
            f.write(f"Generated on: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\\n\\n")
            f.write("\\n---\\n".join(log_entries))
            
        print(f"Finished {subject}. Generated {json_out} and {md_out}")

    print("Internet Knowledge Expansion Complete!")

if __name__ == "__main__":
    main()
