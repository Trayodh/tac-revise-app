import fitz
import glob
import os
import json

def analyze_pdfs():
    pdf_files = glob.glob('**/*.pdf', recursive=True)
    results = {}
    
    for pdf_path in pdf_files:
        try:
            doc = fitz.open(pdf_path)
            num_pages = doc.page_count
            toc = doc.get_toc()
            
            sample_text = ""
            # Get text from first few pages for classification
            for i in range(min(10, num_pages)):
                sample_text += doc[i].get_text("text") + " "
                
            results[pdf_path] = {
                "pages": num_pages,
                "has_toc": len(toc) > 0,
                "toc_length": len(toc),
                "toc_sample": toc[:5] if toc else [],
                "text_snippet": sample_text[:1000].replace('\n', ' ')
            }
        except Exception as e:
            results[pdf_path] = {"error": str(e)}
            
    with open('pdf_analysis_results.json', 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2)

if __name__ == "__main__":
    analyze_pdfs()
    print("Analysis complete. Results written to pdf_analysis_results.json")
