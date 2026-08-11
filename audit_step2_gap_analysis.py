import json
import os
import glob
import time
import requests
from dotenv import load_dotenv

load_dotenv()
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")

SYSTEM_PROMPT = """You are an expert Defence Examination Content Auditor (NDA, CDS, AFCAT, CAPF).
Your objective is to perform a strict KNOWLEDGE GAP ANALYSIS against the provided consolidated knowledge for a specific topic.

Use your internal knowledge of the STANDARD syllabus and difficulty level for defence exams to evaluate the provided text.
Determine:
1. COVERED: What is already adequately explained?
2. UNDERDEVELOPED: What is mentioned but insufficiently explained?
3. MISSING: What important knowledge is absent from the text but required by the syllabus?
4. OUTDATED: What information requires updating?
5. UNCERTAIN: What information requires verification?
6. ADVANCED EXPANSION: What deeper knowledge would make the notes stronger?

For each gap identified, output a "Micro-Gap".
Define a target depth for the topic (D1 to D5).
For each Micro-Gap, assign a Priority (CRITICAL, HIGH, MEDIUM, LOW) and a Research Type (STATIC_RESEARCH, DYNAMIC_RESEARCH, CONCEPTUAL_EXPANSION, FACTUAL_EXPANSION, MAP/DIAGRAM_EXPANSION, COMPARATIVE_EXPANSION).

Respond STRICTLY with a JSON object matching this schema:
{
  "topic_depth_target": "D1 | D2 | D3 | D4 | D5",
  "evaluation": {
    "covered": ["...", "..."],
    "underdeveloped": ["...", "..."],
    "missing": ["...", "..."],
    "outdated": ["...", "..."],
    "uncertain": ["...", "..."],
    "advanced_expansion": ["...", "..."]
  },
  "micro_gaps": [
    {
      "gap": "Specific missing concept, e.g., 'Arabian Sea vs Bay of Bengal branches'",
      "category": "UNDERDEVELOPED | MISSING | OUTDATED | UNCERTAIN | ADVANCED",
      "priority": "CRITICAL | HIGH | MEDIUM | LOW",
      "research_type": "STATIC_RESEARCH | DYNAMIC_RESEARCH | CONCEPTUAL_EXPANSION | FACTUAL_EXPANSION | MAP/DIAGRAM_EXPANSION | COMPARATIVE_EXPANSION"
    }
  ]
}
"""

def analyze_gaps(topic_data):
    if not GEMINI_API_KEY:
        return None
        
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent?key={GEMINI_API_KEY}"
    headers = {"Content-Type": "application/json"}
    
    prompt_text = (
        f"Subject: {topic_data.get('subject')}\\n"
        f"Chapter: {topic_data.get('chapter')}\\n"
        f"Topic: {topic_data.get('topic')}\\n"
        f"Subtopic: {topic_data.get('subtopic')}\\n\\n"
        f"--- CONSOLIDATED KNOWLEDGE ---\\n"
        f"{json.dumps(topic_data.get('consolidation', {}), indent=2)}\\n"
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
        print(f"API Error: {e}")
        return None

def main():
    print("Starting Step 2: Knowledge Gap Analysis...")
    
    files = glob.glob("Consolidated_Knowledge_*.json")
    if not files:
        print("No Consolidated Knowledge JSON files found. Run Step 1 first.")
        return
        
    for file in files:
        print(f"Analyzing gaps for {file}...")
        
        with open(file, "r", encoding="utf-8") as f:
            records = json.load(f)
            
        subject_gaps = []
        
        for idx, record in enumerate(records):
            print(f"  [{idx+1}/{len(records)}] Evaluating Topic: {record.get('topic')} / {record.get('subtopic')}")
            gap_data = analyze_gaps(record)
            
            if gap_data:
                # Merge input record metadata with gap analysis
                combined = {
                    "subject": record.get("subject"),
                    "chapter": record.get("chapter"),
                    "topic": record.get("topic"),
                    "subtopic": record.get("subtopic"),
                    "gap_analysis": gap_data
                }
                subject_gaps.append(combined)
            time.sleep(4)
            
        subject = subject_gaps[0]["subject"] if subject_gaps else "Unknown"
        
        # Save JSON
        json_out = f"Research_Queue_{subject}.json"
        with open(json_out, "w", encoding="utf-8") as f:
            json.dump(subject_gaps, f, indent=2)
            
        # Save Markdown Report
        md_out = f"Research_Queue_{subject}.md"
        with open(md_out, "w", encoding="utf-8") as f:
            f.write(f"# Step 3 Research Queue: {subject}\\n\\n")
            
            # Group for markdown hierarchy
            hierarchy = {}
            for g in subject_gaps:
                ch = g["chapter"]
                top = g["topic"]
                if ch not in hierarchy:
                    hierarchy[ch] = {}
                if top not in hierarchy[ch]:
                    hierarchy[ch][top] = []
                hierarchy[ch][top].append(g)
                
            for ch, topics in hierarchy.items():
                f.write(f"## Chapter: {ch}\\n")
                for top, sub_list in topics.items():
                    f.write(f"### Topic: {top}\\n")
                    for sub in sub_list:
                        target = sub["gap_analysis"].get("topic_depth_target", "D2")
                        f.write(f"#### {sub['subtopic']} *(Target Depth: {target})*\\n\\n")
                        
                        gaps = sub["gap_analysis"].get("micro_gaps", [])
                        if not gaps:
                            f.write("- *No significant gaps identified. Topic is fully saturated.*\\n\\n")
                        else:
                            f.write("**Micro-Gaps:**\\n")
                            for mg in gaps:
                                f.write(f"- {mg.get('gap')} `[{mg.get('priority')}]` `[{mg.get('research_type')}]`\\n")
                        f.write("\\n")
                        
        print(f"Finished {subject}. Generated {json_out} and {md_out}")

    print("Knowledge Gap Analysis Complete!")

if __name__ == "__main__":
    main()
