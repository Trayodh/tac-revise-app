import os
import glob
import hashlib
import json
import fitz

def hash_file(filepath):
    hasher = hashlib.sha256()
    with open(filepath, 'rb') as f:
        buf = f.read(65536)
        while len(buf) > 0:
            hasher.update(buf)
            buf = f.read(65536)
    return hasher.hexdigest()

def main():
    print("Scanning for PDFs...")
    # Recursively find all PDFs
    pdfs = glob.glob('**/*.pdf', recursive=True)
    
    inventory = []
    
    for p in pdfs:
        # Ignore things in output folders if any, or temporary ones
        if '__pycache__' in p or 'node_modules' in p:
            continue
            
        print(f"Processing {p}...")
        try:
            doc = fitz.open(p)
            page_count = len(doc)
            doc.close()
            
            file_hash = hash_file(p)
            file_size = os.path.getsize(p)
            
            inventory.append({
                "filename": p,
                "page_count": page_count,
                "hash": file_hash,
                "size_bytes": file_size,
                "status": "success"
            })
        except Exception as e:
            print(f"Failed to process {p}: {e}")
            inventory.append({
                "filename": p,
                "page_count": 0,
                "hash": "",
                "size_bytes": os.path.getsize(p) if os.path.exists(p) else 0,
                "status": f"error: {str(e)}"
            })
            
    # Write JSON output
    with open('document_inventory.json', 'w') as f:
        json.dump(inventory, f, indent=2)
        
    # Analyze duplicates
    hash_map = {}
    for item in inventory:
        if item["status"] == "success":
            if item["hash"] not in hash_map:
                hash_map[item["hash"]] = []
            hash_map[item["hash"]].append(item["filename"])
            
    unique_files_count = len(hash_map)
    total_pages_unique = 0
    for h, files in hash_map.items():
        # Find page count of the first one
        for item in inventory:
            if item["hash"] == h:
                total_pages_unique += item["page_count"]
                break

    # Write Markdown Report
    with open('Complete_Document_Inventory.md', 'w') as f:
        f.write("# Complete Document Inventory\\n\\n")
        f.write(f"**Total PDFs Found**: {len(inventory)}\\n")
        f.write(f"**Unique PDFs (by hash)**: {unique_files_count}\\n")
        f.write(f"**Total Pages (Unique)**: {total_pages_unique}\\n\\n")
        
        f.write("## Exact Duplicates Found\\n")
        has_dupes = False
        for h, files in hash_map.items():
            if len(files) > 1:
                has_dupes = True
                f.write(f"- Hash `{h[:8]}...` is shared by:\\n")
                for file in files:
                    f.write(f"  - `{file}`\\n")
        if not has_dupes:
            f.write("None found.\\n")
            
        f.write("\\n## Inventory List\\n")
        f.write("| Filename | Pages | Status | Hash | Size (MB) |\\n")
        f.write("|---|---|---|---|---|\\n")
        for item in inventory:
            mb = item["size_bytes"] / (1024 * 1024)
            h_short = item["hash"][:8] + "..." if item["hash"] else ""
            f.write(f"| `{item['filename']}` | {item['page_count']} | {item['status']} | {h_short} | {mb:.2f} |\\n")
            
    print("Inventory complete. Wrote document_inventory.json and Complete_Document_Inventory.md")

if __name__ == "__main__":
    main()
