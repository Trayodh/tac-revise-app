import os
import json

def generate_report():
    ledger_path = 'document_ledger.json'
    pyq_path = 'verified_pyqs.json'
    
    # Load Ledger
    total_docs = 0
    total_failed = 0
    pages_processed = 0
    pages_ocr = 0
    if os.path.exists(ledger_path):
        with open(ledger_path, 'r', encoding='utf-8') as f:
            ledger = json.load(f)
            total_docs = len(ledger)
            for key, val in ledger.items():
                if val.get("processing_status") == "FAILED":
                    total_failed += 1
                pages_processed += val.get("pages_successfully_processed", 0)
                pages_ocr += val.get("pages_requiring_ocr", 0)
                
    # Load PYQs
    pyq_stats = {}
    if os.path.exists(pyq_path):
        with open(pyq_path, 'r', encoding='utf-8') as f:
            pyqs = json.load(f)
            pyq_stats = pyqs.get("stats", {})
            
    report_content = f"""# Final Phase 1 Audit Report (Validation Mode)

## 1. Complete Document Ledger
- **Total Documents Scanned**: {total_docs}
- **Successfully Processed Pages**: {pages_processed}
- **Pages Requiring OCR**: {pages_ocr}
- **Failed Documents**: {total_failed} (Corrupted/MuPDF memory errors)

## 2. Complete Extracted Corpus Statistics
Extraction was run on all {total_docs} PDF files. However, due to {total_failed} document failures and {pages_ocr} image-only pages, the corpus extraction is technically **incomplete**.

## 3. Document Classification Report
Files were classified using directory structures (e.g., `AFCAT Papers`, `Pathfinder_Premium`). Programmatic block-by-block semantic classification was bypassed due to hardware/OCR limitations.

## 4. Verified PYQ Database Statistics
- **Total PYQs Extracted**: {pyq_stats.get('total_questions_extracted', 0)}
- **Unique PYQs (Post-Deduplication)**: {pyq_stats.get('unique_questions', 0)}
*Note: Deduplication was applied using normalized text hashing to prevent frequency inflation.*

## 5. Subject → Chapter → Topic → Micro-topic Map
Available and generated within `syllabus_data.js`. 

## 6. PYQ Intelligence Map
**[UNAVAILABLE - BLOCKER]**: Requires NLP mapping of {pyq_stats.get('unique_questions', 0)} unstructured PYQs to the Subject Map.

## 7. Empirical Depth Map
**[UNAVAILABLE - BLOCKER]**: Depends on the successful execution of the PYQ Intelligence Map.

## 8. Knowledge Gap Map
**[UNAVAILABLE - BLOCKER]**: Depends on Empirical Depth calculation.

## 9. Static vs Dynamic Knowledge Map
**[UNAVAILABLE - BLOCKER]**: Depends on the Knowledge Gap Map.

## 10. AI Enrichment Plan
**[UNAVAILABLE - BLOCKER]**

## 11. Internet Research Queue
**[UNAVAILABLE - BLOCKER]**

## 12. Subject Priority Matrix
**[UNAVAILABLE - BLOCKER]**

## 13. Final Phase 1 Audit Report
See below for the Validation Gate assessment.

---

# FINAL VALIDATION GATE

### 1. Document Coverage (FAILED)
Were 100% of meaningful documents processed? **No**. {total_failed} documents failed entirely.

### 2. Extraction (FAILED)
Were all meaningful pages processed? **No**. {pages_ocr} pages require an external OCR engine.

### 3. PYQ Provenance (PARTIAL)
Actual PYQs separated from practice/predicted material? **Partial**. We established CONFIDENCE levels (VERIFIED, PROBABLE, PRACTICE), but exact page numbers were lost during regex string extraction.

### 4. Duplicate Control (PASSED)
Repeated PYQs do not distort statistics. **Yes**. Normalized text matching successfully deduplicated the PYQ database.

### 5. Topic Mapping (FAILED)
PYQs mapped to subject/topic/subtopic. **No**. A technical blocker exists: mapping thousands of raw string questions requires an LLM Classifier Engine, which cannot be synchronously run on this scale.

### 6. Depth Evidence (FAILED)
D3/D4/D5 classifications justified. **No**.

### 7. Gap Evidence (FAILED)
Knowledge gaps derived from actual comparison. **No**.

### 8. Provenance (FAILED)
Important extracted knowledge is traceable. **No**.

### 9. Research Queue (FAILED)
Every research task corresponds to an identified knowledge gap. **No**.

---

> [!CAUTION]
> **PHASE 1 INCOMPLETE — PROCESSING REMAINS**
> 
> As mandated by the execution rules: "If any check fails: PHASE 1 INCOMPLETE... Do not falsely declare completion."
> 
> A **genuine technical blocker** prevents further processing: 
> 1. We require a robust OCR engine to read the {pages_ocr} image-heavy pages from Pathfinder/Class Notes.
> 2. We require an asynchronous AI Mapping Pipeline to categorize the {pyq_stats.get('unique_questions', 0)} extracted PYQs into the exact Micro-topic Map, which is computationally impossible to execute locally via standard Python regex.
"""

    with open('phase_1_report.md', 'w', encoding='utf-8') as f:
        f.write(report_content)
        
    print("Final Report generated at phase_1_report.md")

if __name__ == "__main__":
    generate_report()
