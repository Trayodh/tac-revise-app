import json
import os
import glob
import time
import requests
from dotenv import load_dotenv

load_dotenv()
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")

SYSTEM_PROMPT_QC = """You are an expert Chief Quality Controller for Defence Examination Materials (NDA, CDS, AFCAT).
Your task is to perform a rigorous 10-point Quality Control audit on the provided chapter of Master Notes.

EVALUATE THE FOLLOWING 10 POINTS:
1. SYLLABUS COVERAGE: Verify every syllabus topic has appropriate coverage.
2. DEPTH: Determine whether important subjects contain sufficient depth. (No generic shallow summaries).
3. ACCURACY: Check factual claims, dates, terminology, definitions, statistics, and classifications.
4. CURRENTNESS: Identify outdated dynamic information.
5. INTERNAL CONSISTENCY: Ensure the notes do not contradict themselves.
6. DUPLICATION: Remove unnecessary repetition.
7. EXAM RELEVANCE: Ensure no genuinely irrelevant trivia (but retain obscure info if it serves advanced learning).
8. EXPLANATORY QUALITY: Ensure concepts explain WHAT, WHY, HOW, EFFECT, and EXAMPLE.
9. VISUAL LEARNING: Identify opportunities for maps, timelines, flowcharts, tables.
10. REVISION: Ensure the chapter ends with a useful rapid-revision section.

Based on the audit, you must issue a FINAL VERDICT for the chapter. The verdict MUST be exactly one of:
- COMPLETE (Adequate depth and coverage)
- NEEDS EXPANSION (Important knowledge remains missing)
- NEEDS VERIFICATION (Factual uncertainty remains)
- NEEDS UPDATE (Dynamic information is outdated)

Output a strict JSON object matching this schema:
{
  "chapter_title": "Title of the chapter",
  "audit_results": {
    "1_syllabus_coverage": "Pass/Fail with brief reason",
    "2_depth": "Pass/Fail with brief reason",
    "3_accuracy": "Pass/Fail with brief reason",
    "4_currentness": "Pass/Fail with brief reason",
    "5_internal_consistency": "Pass/Fail with brief reason",
    "6_duplication": "Pass/Fail with brief reason",
    "7_exam_relevance": "Pass/Fail with brief reason",
    "8_explanatory_quality": "Pass/Fail with brief reason",
    "9_visual_learning": "Suggestions for visual elements",
    "10_revision": "Pass/Fail with brief reason"
  },
  "critical_issues": ["List of any critical failures stopping this from being COMPLETE"],
  "final_verdict": "COMPLETE | NEEDS EXPANSION | NEEDS VERIFICATION | NEEDS UPDATE"
}
"""

def split_markdown_by_chapter(markdown_text):
    """Splits the calibrated markdown by Chapter headers."""
    chunks = []
    lines = markdown_text.split('\\n')
    current_chapter = "Unknown Chapter"
    current_chunk = []
    
    for line in lines:
        if line.startswith("# Chapter: "):
            if current_chunk:
                chunks.append((current_chapter, "\\n".join(current_chunk)))
            current_chapter = line.replace("# Chapter: ", "").strip()
            current_chunk = [line]
        else:
            current_chunk.append(line)
            
    if current_chunk:
        chunks.append((current_chapter, "\\n".join(current_chunk)))
        
    return chunks

def run_qc_audit(chapter_title, chapter_text):
    if not GEMINI_API_KEY:
        return None
        
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent?key={GEMINI_API_KEY}"
    headers = {"Content-Type": "application/json"}
    
    prompt_text = (
        f"--- CHAPTER: {chapter_title} ---\\n"
        f"{chapter_text}\\n\\n"
        f"Perform the 10-point audit and issue the JSON report."
    )
    
    data = {
        "contents": [
            {
                "parts": [
                    {"text": SYSTEM_PROMPT_QC},
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
            text = res_json["candidates"][0]["content"]["parts"][0].get("text", "")
            return json.loads(text)
        return None
    except Exception as e:
        print(f"API Error during QC Audit: {e}")
        return None

def main():
    print("Starting Step 6: Master Notes Quality Control...")
    
    files = glob.glob("Master_Notes_*_Calibrated.md")
    if not files:
        print("No Calibrated Master Notes found. Run Step 5 first.")
        return
        
    for file in files:
        subject = file.replace("Master_Notes_", "").replace("_Calibrated.md", "")
        print(f"Running QC Audit for {subject}...")
        
        with open(file, "r", encoding="utf-8") as f:
            full_text = f.read()
            
        chapters = split_markdown_by_chapter(full_text)
        audit_reports = []
        
        for idx, (ch_title, ch_text) in enumerate(chapters):
            print(f"  [{idx+1}/{len(chapters)}] Auditing Chapter: {ch_title}")
            
            # Skip metadata/header chunks
            if len(ch_text) < 500:
                continue
                
            report = run_qc_audit(ch_title, ch_text)
            if report:
                audit_reports.append(report)
                
            time.sleep(5) # Rate limiting
            
        # Write QC Audit Report
        report_file = f"QC_Audit_Report_{subject}.md"
        with open(report_file, "w", encoding="utf-8") as f:
            f.write(f"# Final Quality Control Audit: {subject}\\n\\n")
            f.write("> Evaluated against the 10-point Master Notes Quality Standard.\\n\\n")
            
            all_complete = True
            
            for rep in audit_reports:
                verdict = rep.get("final_verdict", "UNKNOWN")
                if verdict != "COMPLETE":
                    all_complete = False
                    
                f.write(f"## Chapter: {rep.get('chapter_title', 'Unknown')}\\n")
                f.write(f"**Final Verdict:** `{verdict}`\\n\\n")
                
                f.write("### 10-Point Evaluation\\n")
                audit = rep.get("audit_results", {})
                for k, v in audit.items():
                    # Format key nicely: '1_syllabus_coverage' -> '1. Syllabus Coverage'
                    nice_key = k.replace("_", " ").title().replace(" ", ". ", 1)
                    f.write(f"- **{nice_key}:** {v}\\n")
                    
                issues = rep.get("critical_issues", [])
                if issues:
                    f.write("\\n### Critical Issues to Resolve\\n")
                    for issue in issues:
                        f.write(f"- [ ] {issue}\\n")
                        
                f.write("\\n---\\n\\n")
                
            if all_complete:
                f.write("\\n## 🏆 SUBJECT CERTIFIED COMPLETE\\n")
                f.write("All chapters have passed the rigorous 10-point Quality Control audit.\\n")
            else:
                f.write("\\n## ⚠️ SUBJECT REQUIRES REVISION\\n")
                f.write("One or more chapters failed the audit. Please address the critical issues listed above.\\n")
                
        print(f"Finished {subject}. Generated {report_file}")

    print("Quality Control Audit Complete!")

if __name__ == "__main__":
    main()
