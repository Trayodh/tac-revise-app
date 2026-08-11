import os
import glob
import fitz
import json
from datetime import datetime

def analyze_documents():
    pdf_files = glob.glob('**/*.pdf', recursive=True)
    ledger = {}
    
    print(f"Starting audit of {len(pdf_files)} PDF files...")
    
    for pdf_path in pdf_files:
        print(f"Processing: {pdf_path}")
        stats = {
            "filename": os.path.basename(pdf_path),
            "filepath": pdf_path,
            "file_size_bytes": os.path.getsize(pdf_path),
            "total_pages": 0,
            "pages_successfully_processed": 0,
            "pages_requiring_ocr": 0,
            "pages_unsuccessfully_processed": 0,
            "extraction_completeness_pct": 0,
            "detected_subjects": [],
            "detected_document_categories": [],
            "processing_status": "PARTIALLY PROCESSED",
            "error": None
        }
        
        try:
            doc = fitz.open(pdf_path)
            stats["total_pages"] = doc.page_count
            
            text_extracted = 0
            for i in range(doc.page_count):
                try:
                    page = doc[i]
                    text = page.get_text("text")
                    if len(text.strip()) < 50 and len(page.get_images()) > 0:
                        stats["pages_requiring_ocr"] += 1
                    else:
                        stats["pages_successfully_processed"] += 1
                        text_extracted += len(text)
                except Exception as e:
                    stats["pages_unsuccessfully_processed"] += 1
            
            if stats["total_pages"] > 0:
                stats["extraction_completeness_pct"] = round(
                    (stats["pages_successfully_processed"] / stats["total_pages"]) * 100, 2
                )
            
            if stats["extraction_completeness_pct"] == 100:
                stats["processing_status"] = "COMPLETE"
                
            doc.close()
        except Exception as e:
            stats["processing_status"] = "FAILED"
            stats["error"] = str(e)
            
        ledger[pdf_path] = stats
        
    with open('document_ledger.json', 'w', encoding='utf-8') as f:
        json.dump(ledger, f, indent=4)
        
    print(f"Ledger created at document_ledger.json with {len(ledger)} entries.")

if __name__ == "__main__":
    analyze_documents()
