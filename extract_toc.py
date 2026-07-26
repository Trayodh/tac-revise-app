import pypdf
import sys

def get_toc(pdf_path):
    try:
        reader = pypdf.PdfReader(pdf_path)
        outlines = reader.outline
        if not outlines:
            print("No TOC found in this PDF.")
            return

        def parse_outlines(outlines_list, indent=""):
            for item in outlines_list:
                if isinstance(item, list):
                    parse_outlines(item, indent + "  ")
                else:
                    title = item.title
                    try:
                        page_num = reader.get_destination_page_number(item)
                        print(f"{indent}- {title} (Page {page_num})")
                    except Exception:
                        print(f"{indent}- {title} (Page Unknown)")

        print(f"Total Pages: {len(reader.pages)}")
        parse_outlines(outlines)
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    pdf = 'pathfinder-cds-combined-defence-expertsarihant-90f15b25.pdf'
    get_toc(pdf)
