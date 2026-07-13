import os
import json
import fitz  # PyMuPDF
import re

MODULES_DIR = "Pathfinder_Elite/modules"
os.makedirs(MODULES_DIR, exist_ok=True)

PDF_PATH = "616861773-Pathfinder-CDS-Combined-Defence-2022-23-Arihant-Experts.pdf"
PAGE_OFFSET = 284

def extract_pdf_pages(doc, start_page, end_page):
    text = ""
    for i in range(start_page + PAGE_OFFSET, end_page + PAGE_OFFSET + 1):
        try:
            page = doc.load_page(i)
            # Use block extraction to sort properly by layout columns
            blocks = page.get_text("blocks", sort=True)
            for b in blocks:
                # b[4] contains the block text
                text += b[4] + "\n"
        except Exception as e:
            print(f"Error loading page {i}: {e}")
    return text

def main():
    with open('Pathfinder_Elite/metadata.json', 'r') as f:
        metadata = json.load(f)
        
    doc = fitz.open(PDF_PATH)
    total = len(metadata)
    
    for idx, item in enumerate(metadata):
        subject = item["subject"]
        topic_title = item["topic_name"]
        start_page = item["start_page"]
        end_page = item["end_page"]
        filename = item["filename"]
        
        os.makedirs(os.path.join(MODULES_DIR, subject), exist_ok=True)
        file_path = os.path.join(MODULES_DIR, subject, filename)
        
        print(f"Processing [{idx+1}/{total}]: {subject} -> {topic_title} (Pages {start_page}-{end_page})")
        
        context_text = extract_pdf_pages(doc, start_page, end_page)
        if not context_text.strip():
            continue
            
        # Clean up text by reconstructing sentences and filtering headers/footers
        raw_lines = []
        for line in context_text.split('\n'):
            line = line.strip()
            if not line: continue
            
            # Filter out common headers, footers, and page numbers
            if line.isdigit(): continue # Page numbers
            if line.upper() in ["CDS PATHFINDER", "PATHFINDER CDS"]: continue
            if subject.upper() in line.upper() and len(line) < 30: continue # E.g., "MATHEMATICS", "ENGLISH"
            if "All Rights Reserved" in line or "ARIHANT PUBLICATIONS" in line: continue
            
            raw_lines.append(line)
        
        notes = []
        examples = []
        
        current_section = "notes"
        current_block = []
        
        # Parse all lines
        for line in raw_lines:
            if len(line) < 2: continue
            
            # Filter out random junk characters from PDF parsing
            if line in ['|', '(', ')', '-']: continue
            
            # Detect section shifts
            if re.match(r'^(EXAMPLE|Example|Q\.|Q)\s*\d+', line):
                if current_block and current_section == "notes":
                    notes.append(" ".join(current_block))
                elif current_block and current_section == "examples":
                    examples.append(" ".join(current_block))
                current_block = [line]
                current_section = "examples"
                continue
                
            if re.match(r'^(Sol\.|Solution|Answer)', line):
                if current_block and current_section == "examples":
                    current_block.append("\n**Solution:** " + line)
                else:
                    current_block = [line]
                    current_section = "examples"
                continue
                
            # Otherwise append to current block
            current_block.append(line)
            
            # If line ends with period, close the block (sentence)
            if line.endswith('.') or line.endswith(':'):
                if current_section == "notes":
                    notes.append(" ".join(current_block))
                elif current_section == "examples":
                    examples.append(" ".join(current_block))
                current_block = []
                
        # Append anything left over
        if current_block:
            if current_section == "notes":
                notes.append(" ".join(current_block))
            elif current_section == "examples":
                examples.append(" ".join(current_block))
                
        # Build Markdown
        md = '<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">\n'
        md += f'  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">{topic_title.upper()}</h3>\n'
        
        md += '  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">DEEP CONCEPTUAL EXPLANATION</h4>\n\n'
        
        # Combine notes lines into proper readable paragraphs
        paragraphs = []
        current_para = []
        for note in notes:
            # If note starts with a number or bullet, it's a list item, start a new line
            is_list_item = re.match(r'^(\d+[\.\)]|\u2022|\-)\s', note) or len(note) < 40
            
            if is_list_item:
                if current_para:
                    paragraphs.append(" ".join(current_para))
                    current_para = []
                paragraphs.append(note) # Add as its own paragraph/line
            else:
                current_para.append(note)
                if len(current_para) >= 3: # 3 sentences per paragraph
                    paragraphs.append(" ".join(current_para))
                    current_para = []
                    
        if current_para:
            paragraphs.append(" ".join(current_para))
            
        # Clean up weird spacing in paragraphs
        clean_paragraphs = [re.sub(r'\s+', ' ', p).strip() for p in paragraphs if p.strip()]
        md += "\n\n".join(clean_paragraphs) + "\n\n"
        
        md += '\n</div>\n'
        
        with open(file_path, "w", encoding="utf-8") as out_f:
            out_f.write(md)

if __name__ == "__main__":
    main()
