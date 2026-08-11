import os
import glob
import fitz
import json
import re
import hashlib

# Directories defined by confidence
DIR_VERIFIED = ['AFCAT Papers', 'CAPF_CSE_Papers', 'NDA Papers', 'PYQ Papers']
DIR_PRACTICE = ['Pathfinder_Premium', 'Pathfinder_Elite']
# We'll treat the root explicit PYQ files as verified
ROOT_VERIFIED = ['pyq_upload.pdf', 'pyq_upload_2.pdf']

def get_normalized_text(text):
    # Remove non-alphanumeric chars and lowercase for deduplication
    return re.sub(r'[^a-z0-9]', '', text.lower())

def classify_and_extract_pyqs():
    print("Starting PYQ Extraction, Classification, and Deduplication...")
    
    all_pdfs = glob.glob('**/*.pdf', recursive=True)
    
    stats = {
        "total_documents_scanned": len(all_pdfs),
        "total_questions_extracted": 0,
        "unique_questions": 0,
        "failed_documents": []
    }
    
    unique_q_map = {} # normalized_text -> canonical question record
    
    q_pattern = re.compile(r'^(?:Q)?\d+[\.\)]\s+(.*)', re.MULTILINE)
    
    for pdf_path in all_pdfs:
        basename = os.path.basename(pdf_path)
        
        # Determine confidence based on folder
        confidence = "UNKNOWN"
        is_verified = any(d in pdf_path for d in DIR_VERIFIED) or basename in ROOT_VERIFIED
        is_practice = any(d in pdf_path for d in DIR_PRACTICE) or "mock" in basename.lower()
        
        if is_verified:
            confidence = "VERIFIED_PYQ"
        elif is_practice:
            confidence = "PRACTICE"
        elif "Pathfinder" in basename or "notes" in basename.lower():
            confidence = "PROBABLE_PYQ" # Questions in study guides are probably past PYQs but unverified source
            
        try:
            doc = fitz.open(pdf_path)
            doc_text = ""
            for i in range(doc.page_count):
                try:
                    doc_text += doc[i].get_text("text") + "\n"
                except:
                    pass
            
            matches = q_pattern.findall(doc_text)
            for m in matches:
                q_text = m.strip()
                if len(q_text) > 20: 
                    normalized = get_normalized_text(q_text)
                    if not normalized:
                        continue
                        
                    occurrence = {
                        "source_document": basename,
                        "confidence": confidence
                    }
                    
                    if normalized in unique_q_map:
                        # It's a duplicate
                        unique_q_map[normalized]["occurrences"].append(occurrence)
                        # If a verified source has this, upgrade canonical confidence to VERIFIED
                        if confidence == "VERIFIED_PYQ":
                            unique_q_map[normalized]["canonical_confidence"] = "VERIFIED_PYQ"
                    else:
                        unique_q_map[normalized] = {
                            "question_text": q_text[:300], # Store snippet
                            "canonical_confidence": confidence,
                            "occurrences": [occurrence]
                        }
                    stats["total_questions_extracted"] += 1
                    
            doc.close()
        except Exception as e:
            stats["failed_documents"].append(pdf_path)

    stats["unique_questions"] = len(unique_q_map)
    
    # Save the DB
    with open('verified_pyqs.json', 'w', encoding='utf-8') as f:
        json.dump({
            "stats": stats, 
            "questions": list(unique_q_map.values())
        }, f, indent=4)
        
    print(f"PYQ extraction complete. Extracted {stats['total_questions_extracted']} total questions.")
    print(f"Deduplication resulted in {stats['unique_questions']} UNIQUE questions.")

if __name__ == "__main__":
    classify_and_extract_pyqs()
