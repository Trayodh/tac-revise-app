import fitz
import os
import glob

def process_directory(directory_name):
    print(f"\n--- Processing {directory_name} ---")
    chunks_dir = os.path.join(directory_name, 'chunks')
    os.makedirs(chunks_dir, exist_ok=True)
    
    # Recursively find all PDFs
    pdf_files = glob.glob(os.path.join(directory_name, '**', '*.pdf'), recursive=True)
    # Ignore chunks if we run it twice
    pdf_files = [f for f in pdf_files if 'chunks' not in f]
    
    if not pdf_files:
        print(f"No PDFs found in {directory_name}.")
        return

    for pdf_path in pdf_files:
        basename = os.path.basename(pdf_path)
        print(f"Splitting: {basename}")
        try:
            doc = fitz.open(pdf_path)
            total_pages = len(doc)
            chunk_size = 2
            
            for i in range(0, total_pages, chunk_size):
                chunk_num = (i // chunk_size) + 1
                out_name = f"{basename.replace('.pdf', '')}_chunk_{chunk_num}.pdf"
                out_path = os.path.join(chunks_dir, out_name)
                
                # Only split if chunk doesn't exist
                if not os.path.exists(out_path):
                    chunk_doc = fitz.open()
                    end_page = min(i + chunk_size, total_pages) - 1
                    chunk_doc.insert_pdf(doc, from_page=i, to_page=end_page)
                    chunk_doc.save(out_path)
                    chunk_doc.close()
                    
            print(f"  -> Generated {((total_pages - 1) // chunk_size) + 1} chunks.")
            doc.close()
        except Exception as e:
            print(f"  -> Failed to split {basename}: {e}")

if __name__ == '__main__':
    process_directory('NDA Papers')
    process_directory('AFCAT Papers')
    print("\nAll splitting finished!")
