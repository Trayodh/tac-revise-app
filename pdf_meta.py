import fitz
import sys

def main():
    try:
        doc = fitz.open("defence_pdf.pdf")
        print(f"Number of pages: {doc.page_count}")
        print("Metadata:", doc.metadata)
        
        toc = doc.get_toc()
        print("Table of contents length:", len(toc))
        if len(toc) > 0:
            for item in toc[:10]:
                print(f" - L{item[0]} {item[1]} (Page {item[2]})")
            if len(toc) > 10:
                print("   ...")
        
        # sample text from page 1 and 2
        for p in range(min(5, doc.page_count)):
            text = doc[p].get_text("text")
            print(f"--- Page {p+1} Snippet ---")
            print(text[:200].replace('\n', ' '))
    except Exception as e:
        print("Error:", e)

if __name__ == "__main__":
    main()
