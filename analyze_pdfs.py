import os
import hashlib
from PyPDF2 import PdfReader

def get_file_hash(filepath):
    hasher = hashlib.md5()
    try:
        with open(filepath, 'rb') as f:
            buf = f.read(65536)
            while len(buf) > 0:
                hasher.update(buf)
                buf = f.read(65536)
        return hasher.hexdigest()
    except Exception:
        return None

def main():
    root_dir = r"c:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\scratch\defence-exams-revision"
    report_file = r"c:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\brain\585e3787-0afd-4dc0-8313-4d81e27facc9\pdf_quality_report.md"
    
    unique_pdfs = {}
    
    print("Finding PDFs...")
    for dirpath, dirnames, filenames in os.walk(root_dir):
        if 'node_modules' in dirpath or '.git' in dirpath:
            continue
        for f in filenames:
            if f.lower().endswith('.pdf'):
                filepath = os.path.join(dirpath, f)
                file_hash = get_file_hash(filepath)
                if file_hash and file_hash not in unique_pdfs:
                    unique_pdfs[file_hash] = filepath

    print(f"Found {len(unique_pdfs)} unique PDFs. Analyzing...")
    
    results = []
    
    for i, (f_hash, filepath) in enumerate(unique_pdfs.items()):
        if i > 0 and i % 50 == 0:
            print(f"Processed {i} PDFs...")
            
        filename = os.path.basename(filepath)
        num_pages = 0
        quality = "Unknown"
        material_snippet = ""
        
        try:
            reader = PdfReader(filepath)
            num_pages = len(reader.pages)
            
            text_content = ""
            for p in range(min(3, num_pages)):
                page = reader.pages[p]
                text = page.extract_text()
                if text:
                    text_content += text + " "
                    
            if len(text_content.strip()) > 50:
                quality = "High (Searchable Text / Good OCR)"
                words = text_content.split()
                material_snippet = " ".join(words[:30]) + "..."
            elif num_pages > 0:
                quality = "Low (Scanned Images / Poor OCR)"
                material_snippet = "No readable text found. Likely images/scans."
            else:
                quality = "Error (0 pages)"
                material_snippet = "Empty PDF."
                
        except Exception as e:
            quality = f"Error reading PDF"
            material_snippet = str(e)[:50]
            
        results.append({
            "File": filename,
            "Pages": num_pages,
            "Quality": quality,
            "Content Snippet": material_snippet.replace('\n', ' ').replace('\r', ' ')
        })
        
    print("Writing report...")
    with open(report_file, 'w', encoding='utf-8') as out:
        out.write("# PDF Quality and Content Report\n\n")
        out.write(f"Total Unique PDFs Analyzed: {len(results)}\n\n")
        out.write("| Filename | Pages | Text Quality | Content Snippet |\n")
        out.write("|---|---|---|---|\n")
        
        results.sort(key=lambda x: x["File"].lower())
        
        for r in results:
            out.write(f"| {r['File']} | {r['Pages']} | {r['Quality']} | {r['Content Snippet']} |\n")

    print(f"Report written to {report_file}")

if __name__ == "__main__":
    main()
