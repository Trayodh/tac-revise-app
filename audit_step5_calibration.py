import json
import os
import glob
import time
import requests
from dotenv import load_dotenv

load_dotenv()
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")

SYSTEM_PROMPT_CALIBRATION = """You are an expert Defence Examination Auditor for UPSC NDA, CDS, and AFCAT.
Your task is to calibrate the provided Master Notes against verified Previous Year Questions (PYQs).

Do NOT rewrite the entire knowledge base around PYQs. The notes must remain driven by the syllabus. PYQs are only used to test coverage.
Do NOT delete advanced knowledge simply because it has never appeared in a PYQ.

Using your internal parametric knowledge of actual PYQs from the last 10 years for this topic:
1. Identify specific PYQs related to this text.
2. Evaluate if the knowledge to solve those PYQs is:
   - COVERED: PYQ knowledge adequately addressed.
   - PARTIALLY COVERED: Concept present but insufficient depth.
   - NOT COVERED: Important tested knowledge absent.
   - OVEREXPANDED: Material significantly beyond reasonable examination relevance (flag this, but do not necessarily delete it unless it's genuinely useless).

Produce a strict JSON output matching this schema:
{
  "calibration_report": {
    "coverage_strengths": ["...", "..."],
    "missing_pyq_knowledge": ["...", "..."],
    "recent_depth_changes": ["...", "..."],
    "high_value_additions": ["...", "..."],
    "unnecessary_material": ["...", "..."],
    "recommended_corrections": ["...", "..."]
  },
  "calibrated_notes_markdown": "The FULL, UPDATED text of the Master Notes with the missing PYQ knowledge seamlessly integrated into the original 13-section structure. Do NOT delete advanced sections. Maintain the exact original structure, just enrich it where the PYQs demanded it."
}
"""

def calibrate_chunk(chapter_topic, chunk_text):
    if not GEMINI_API_KEY:
        return None
        
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent?key={GEMINI_API_KEY}"
    headers = {"Content-Type": "application/json"}
    
    prompt_text = (
        f"Topic Focus: {chapter_topic}\\n\\n"
        f"--- ORIGINAL MASTER NOTES ---\\n"
        f"{chunk_text}\\n\\n"
        f"Generate the calibration report and the updated markdown notes in the requested JSON format."
    )
    
    data = {
        "contents": [
            {
                "parts": [
                    {"text": SYSTEM_PROMPT_CALIBRATION},
                    {"text": prompt_text}
                ]
            }
        ],
        "generationConfig": {
            "temperature": 0.2,
            "maxOutputTokens": 8192,
            "response_mime_type": "application/json"
        }
    }

    try:
        response = requests.post(url, headers=headers, json=data)
        response.raise_for_status()
        res_json = response.json()
        
        if "candidates" in res_json and len(res_json["candidates"]) > 0:
            text = res_json["candidates"][0]["content"]["parts"][0].get("text", "")
            return json.loads(text)
        return None
    except Exception as e:
        print(f"API Error during calibration: {e}")
        return None

def split_markdown_by_topics(markdown_text):
    """A simplistic splitter to chunk huge markdown files by '## ' topic headers"""
    chunks = []
    lines = markdown_text.split('\\n')
    current_topic = "General"
    current_chunk = []
    
    for line in lines:
        if line.startswith("## "):
            if current_chunk:
                chunks.append((current_topic, "\\n".join(current_chunk)))
            current_topic = line.replace("## ", "").strip()
            current_chunk = [line]
        else:
            current_chunk.append(line)
            
    if current_chunk:
        chunks.append((current_topic, "\\n".join(current_chunk)))
        
    return chunks

def main():
    print("Starting Step 5: Exam Calibration of Master Notes...")
    
    master_files = glob.glob("Master_Notes_*.md")
    # Filter out already calibrated files
    master_files = [f for f in master_files if not f.endswith("_Calibrated.md")]
    
    if not master_files:
        print("No Master Notes found. Run Step 4 first.")
        return
        
    for master_file in master_files:
        subject = master_file.replace("Master_Notes_", "").replace(".md", "")
        print(f"Calibrating Notes for {subject}...")
        
        with open(master_file, "r", encoding="utf-8") as f:
            full_text = f.read()
            
        chunks = split_markdown_by_topics(full_text)
        
        all_reports = []
        calibrated_markdown_pieces = []
        
        for idx, (topic, chunk_text) in enumerate(chunks):
            print(f"  [{idx+1}/{len(chunks)}] Calibrating Topic: {topic}")
            
            # Skip very small structural chunks like top-level headers
            if len(chunk_text) < 100:
                calibrated_markdown_pieces.append(chunk_text)
                continue
                
            result = calibrate_chunk(topic, chunk_text)
            
            if result:
                all_reports.append({
                    "topic": topic,
                    "report": result.get("calibration_report", {})
                })
                calibrated_markdown_pieces.append(result.get("calibrated_notes_markdown", chunk_text))
            else:
                calibrated_markdown_pieces.append(chunk_text)
                
            time.sleep(5) # Strict rate limiting for massive generations
            
        # Write Calibration Report
        report_file = f"Calibration_Report_{subject}.md"
        with open(report_file, "w", encoding="utf-8") as f:
            f.write(f"# Calibration Report: {subject}\\n\\n")
            for rep in all_reports:
                f.write(f"## {rep['topic']}\\n")
                cr = rep['report']
                
                f.write("### Coverage Strengths\\n")
                for item in cr.get("coverage_strengths", []): f.write(f"- {item}\\n")
                
                f.write("\\n### Missing PYQ Knowledge Identified\\n")
                for item in cr.get("missing_pyq_knowledge", []): f.write(f"- {item}\\n")
                
                f.write("\\n### Recent Depth Changes\\n")
                for item in cr.get("recent_depth_changes", []): f.write(f"- {item}\\n")
                
                f.write("\\n### High Value Additions Integrated\\n")
                for item in cr.get("high_value_additions", []): f.write(f"- {item}\\n")
                
                f.write("\\n### Overexpanded / Unnecessary Material\\n")
                for item in cr.get("unnecessary_material", []): f.write(f"- {item}\\n")
                
                f.write("\\n### Recommended Corrections Applied\\n")
                for item in cr.get("recommended_corrections", []): f.write(f"- {item}\\n")
                f.write("\\n---\\n\\n")
                
        # Write Calibrated Notes
        calibrated_file = f"Master_Notes_{subject}_Calibrated.md"
        with open(calibrated_file, "w", encoding="utf-8") as f:
            f.write(f"# CALIBRATED MASTER NOTES: {subject}\\n\\n")
            f.write(f"> These notes have been calibrated against NDA/CDS PYQs.\\n\\n")
            f.write("\\n\\n".join(calibrated_markdown_pieces))
            
        print(f"Finished {subject}. Generated {report_file} and {calibrated_file}")

    print("Exam Calibration Complete!")

if __name__ == "__main__":
    main()
