import fitz
import sys

def extract_pdf_pages(pdf_path, start_page, end_page, output_path):
    print(f"Extracting {pdf_path} from physical page {start_page} to {end_page}...")
    try:
        doc = fitz.open(pdf_path)
        text = ""
        # PyMuPDF pages are 0-indexed, so we subtract 1 from the physical page number
        for page_num in range(start_page - 1, end_page):
            if page_num < len(doc):
                page = doc.load_page(page_num)
                text += f"\n--- Page {page_num + 1} ---\n"
                text += page.get_text("text")
            else:
                print(f"Warning: Page {page_num + 1} is out of bounds (max {len(doc)}).")
        
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(text)
        print(f"Successfully extracted {len(text)} characters to {output_path}")
    except Exception as e:
        print(f"Error extracting PDF: {e}")

if __name__ == "__main__":
    pdf_file = "616861773-Pathfinder-CDS-Combined-Defence-2022-23-Arihant-Experts.pdf"
    # Number System (Logical 3-19 -> Physical 289-305)
    extract_pdf_pages(pdf_file, 289, 305, "pilot_number_system_pathfinder.txt")
