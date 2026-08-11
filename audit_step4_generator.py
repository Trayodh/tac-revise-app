import json
import os
import glob
import time
import requests
from dotenv import load_dotenv

load_dotenv()
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")

SYSTEM_PROMPT = """You are an expert Defence Examination Content Engineer for NDA, CDS, AFCAT, and CAPF.
Your task is to generate COMPREHENSIVE MASTER NOTES for a specific topic, using both the base consolidated knowledge and the enriched internet research provided.

PRIMARY OBJECTIVE:
Create detailed notes that are substantially more comprehensive than conventional coaching notes.
Do NOT artificially shorten the material. Do NOT convert everything into simple bullet-point summaries.
Explain "why", not merely "what".
Prefer CAUSE -> MECHANISM -> EFFECT -> EXAMPLE.
For factual subjects use FACT -> CONTEXT -> SIGNIFICANCE -> RELATED FACTS.
Every advanced fact must have a reason for inclusion.
Do not repeat conflicting source information without resolving it or marking it uncertain.

STRUCTURE RULES:
You MUST output the notes in Markdown format, strictly containing these 13 sections for the topic:
## 1. FOUNDATION
## 2. CORE KNOWLEDGE
## 3. DETAILED EXPLANATION
## 4. IMPORTANT FACTS
## 5. CLASSIFICATIONS
## 6. COMPARISONS
## 7. EXCEPTIONS
## 8. EXAMPLES
## 9. MAPS / DIAGRAMS / TABLES (Describe visual structures or output markdown tables)
## 10. ADVANCED KNOWLEDGE
## 11. CURRENT / DYNAMIC INFORMATION (Mark what needs updating)
## 12. EXAM TRAPS
## 13. QUICK REVISION

DEPTH LEVELS:
Where appropriate, label information as [CORE], [ADVANCED], or [DEEP DIVE].

Output ONLY valid Markdown text containing the 13 sections. Do not include JSON structures.
"""

def generate_master_notes(topic, base_knowledge, enriched_knowledge):
    if not GEMINI_API_KEY:
        return None
        
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent?key={GEMINI_API_KEY}"
    headers = {"Content-Type": "application/json"}
    
    prompt_text = (
        f"Topic: {topic}\\n\\n"
        f"--- BASE KNOWLEDGE ---\\n"
        f"{json.dumps(base_knowledge, indent=2)}\\n\\n"
        f"--- ENRICHED INTERNET RESEARCH (GAP FILLS) ---\\n"
        f"{json.dumps(enriched_knowledge, indent=2)}\\n\\n"
        f"Generate the comprehensive master notes following the strict 13-section structure."
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
            "temperature": 0.2,
            # Expecting a very large output
            "maxOutputTokens": 8192 
        }
    }

    try:
        response = requests.post(url, headers=headers, json=data)
        response.raise_for_status()
        res_json = response.json()
        
        if "candidates" in res_json and len(res_json["candidates"]) > 0:
            text = res_json["candidates"][0]["content"]["parts"][0].get("text", "")
            return text
        return None
    except Exception as e:
        print(f"API Error during generation: {e}")
        return None

def main():
    print("Starting Step 4: Comprehensive Master Notes Generation...")
    
    # We expect subjects based on Step 1 outputs
    base_files = glob.glob("Consolidated_Knowledge_*.json")
    if not base_files:
        print("No Consolidated Knowledge JSON files found. Run Step 1 first.")
        return
        
    for base_file in base_files:
        subject = base_file.replace("Consolidated_Knowledge_", "").replace(".json", "")
        print(f"Generating Master Notes for {subject}...")
        
        # Load Base
        with open(base_file, "r", encoding="utf-8") as f:
            base_data = json.load(f)
            
        # Load Enriched (if it exists)
        enriched_data = []
        enriched_file = f"Enriched_Knowledge_{subject}.json"
        if os.path.exists(enriched_file):
            with open(enriched_file, "r", encoding="utf-8") as f:
                enriched_data = json.load(f)
                
        # Group enriched by topic for fast lookup
        enriched_lookup = {}
        for item in enriched_data:
            enriched_lookup[item.get("topic")] = item
            
        # Generate final markdown document
        md_out = f"Master_Notes_{subject}.md"
        with open(md_out, "w", encoding="utf-8") as f:
            f.write(f"# COMPREHENSIVE MASTER NOTES: {subject}\\n\\n")
            
            # Iterate over unique chapters and topics
            chapters = {}
            for record in base_data:
                ch = record.get("chapter")
                if ch not in chapters:
                    chapters[ch] = []
                chapters[ch].append(record)
                
            for ch_name, records in chapters.items():
                print(f"  Processing Chapter: {ch_name}")
                f.write(f"# Chapter: {ch_name}\\n\\n")
                
                # Group by topic
                topics = {}
                for r in records:
                    t = r.get("topic")
                    if t not in topics:
                        topics[t] = []
                    topics[t].append(r)
                    
                for t_name, base_list in topics.items():
                    print(f"    -> Generating Topic: {t_name}")
                    f.write(f"## {t_name}\\n\\n")
                    
                    enrichment = enriched_lookup.get(t_name, {})
                    
                    # Generate the massive markdown chunk
                    notes_markdown = generate_master_notes(t_name, base_list, enrichment)
                    
                    if notes_markdown:
                        f.write(notes_markdown + "\\n\\n---\\n\\n")
                    else:
                        f.write("> *Error generating notes for this topic.*\\n\\n")
                        
                    time.sleep(5) # Strict rate limiting for large generations
                    
        print(f"Finished {subject}. Generated {md_out}")

    print("Master Notes Generation Complete!")

if __name__ == "__main__":
    main()
