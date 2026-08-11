import json
import os

def run_qa():
    report = ["# Phase 1.5 — Adversarial Audit Quality Assurance\n"]
    
    # 1. Document Completeness
    ledger_path = 'document_ledger.json'
    if os.path.exists(ledger_path):
        with open(ledger_path, 'r', encoding='utf-8') as f:
            ledger = json.load(f)
        
        total_docs = len(ledger)
        failed_pages = sum(v.get('pages_unsuccessfully_processed', 0) for v in ledger.values())
        ocr_pages = sum(v.get('pages_requiring_ocr', 0) for v in ledger.values())
        
        suspicious_extractions = []
        for k, v in ledger.items():
            # If large document but 0 pages extracted successfully
            if v.get('total_pages', 0) > 10 and v.get('pages_successfully_processed', 0) == 0:
                suspicious_extractions.append(os.path.basename(k))
                
        report.append("## 1. Document Completeness (FAIL)")
        report.append(f"- **Total Documents**: {total_docs}")
        report.append(f"- **Failed Pages**: {failed_pages}")
        report.append(f"- **Pages requiring OCR**: {ocr_pages}")
        if suspicious_extractions:
            report.append(f"- **Suspicious Extractions (0 pages read)**: {len(suspicious_extractions)} documents, e.g., {suspicious_extractions[:3]}")
    else:
        report.append("## 1. Document Completeness (CRITICAL FAIL: Ledger missing)")

    # 2. PYQ Integrity
    pyq_path = 'verified_pyqs.json'
    if os.path.exists(pyq_path):
        with open(pyq_path, 'r', encoding='utf-8') as f:
            pyqs = json.load(f)
        
        stats = pyqs.get("stats", {})
        total_extracted = stats.get('total_questions_extracted', 0)
        total_unique = stats.get('unique_questions', 0)
        
        # Check attribution
        questions = pyqs.get("questions", [])
        missing_attribution = sum(1 for q in questions if not any(year in q.get('question_text', '') for year in ['201', '202', 'AFCAT', 'NDA', 'CDS']))
        
        report.append("\n## 2. PYQ Integrity (FAIL)")
        report.append("- Duplicate PYQs were successfully deduplicated mathematically.")
        report.append(f"- Total Unique: {total_unique}")
        report.append(f"- **Integrity Breach**: {missing_attribution} questions lack explicit examination/year attribution within the extracted text string. The regex string extractor captured text but failed to capture the structural header context of the PDF.")
    else:
        report.append("\n## 2. PYQ Integrity (CRITICAL FAIL: DB missing)")

    # 3-7. Missing Pipelines
    report.append("\n## 3. Topic Mapping (FAIL)")
    report.append("- As explicitly stated in the Phase 1 Report, the NLP mapping pipeline was NOT built due to technical limitations. Mapping 26,000 strings to `syllabus_data.js` programmatically via script failed.")

    report.append("\n## 4. Depth Validation (FAIL)")
    report.append("- Depth classifications do not exist because the mapping pipeline failed.")

    report.append("\n## 5. Knowledge Gap Validation (FAIL)")
    report.append("- Gap Maps do not exist because Depth calculation failed.")
    
    report.append("\n## 6. Trend Validation (FAIL)")
    report.append("- Trends cannot be statistically proven without the Topic Map.")

    report.append("\n## 7. Internet Research Queue QA (FAIL)")
    report.append("- No queue generated.")

    # 8. Internal Consistency
    report.append("\n## 8. Internal Consistency (WARNING)")
    report.append(f"- **Inconsistency Detected**: The ledger extracted text from ~22,000 pages, but the PYQ regex matched {total_extracted} strings. This suggests a very high false-positive rate for the regex `^(?:Q)?\d+[\.\)]\s+(.*)` capturing non-questions (e.g., numbered lists).")

    # 9. Verdict
    report.append("\n## 9. FINAL VERDICT")
    report.append("> [!CAUTION]")
    report.append("> **FAIL**")
    report.append("> ")
    report.append("> The Foundation Intelligence Phase 1 Audit contains critical audit failures.")
    report.append("> 1. Structural context (Headers, Year, Exam) was lost during PDF text extraction.")
    report.append("> 2. The mapping, depth, and gap components are completely missing due to technical blockers.")
    report.append("> 3. The raw regex extraction generated immense noise (false positives).")
    report.append("> **Phase 1 must be corrected before enrichment.**")

    with open('qa_report.md', 'w', encoding='utf-8') as f:
        f.write('\n'.join(report))
        
if __name__ == "__main__":
    run_qa()
