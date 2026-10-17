import os
import json
import hashlib
import fitz

def get_file_hash(path):
    h = hashlib.sha256()
    with open(path, 'rb') as f:
        while chunk := f.read(1024 * 1024):
            h.update(chunk)
    return h.hexdigest()

def scan_duplicates():
    with open('pipeline_state.json', 'r', encoding='utf-8') as f:
        state = json.load(f)

    # Resolve all physical paths
    pdf_files = {}
    for root, dirs, files in os.walk('.'):
        if '.git' in root or 'node_modules' in root:
            continue
        for file in files:
            if file.lower().endswith('.pdf'):
                full_path = os.path.normpath(os.path.join(root, file))
                for key in state:
                    norm_key = os.path.normpath(key)
                    if full_path.endswith(norm_key) or os.path.basename(full_path) == os.path.basename(norm_key):
                        if key not in pdf_files or os.path.exists(full_path):
                            pdf_files[key] = full_path

    print(f"Total PDFs in state: {len(state)}")
    print(f"Found physical files: {len(pdf_files)}")

    # 1. Group by SHA-256 binary hash
    hash_groups = {}
    size_and_pages = {}
    for key, path in pdf_files.items():
        size = os.path.getsize(path)
        file_hash = get_file_hash(path)
        doc = fitz.open(path)
        page_count = len(doc)
        doc.close()
        
        size_and_pages[key] = {
            'path': path,
            'size': size,
            'pages': page_count,
            'hash': file_hash,
            'extracted_pages': len(state[key].get('extracted_pages', []))
        }
        
        if file_hash not in hash_groups:
            hash_groups[file_hash] = []
        hash_groups[file_hash].append(key)

    exact_binary_duplicates = {h: keys for h, keys in hash_groups.items() if len(keys) > 1}
    print(f"\n=== EXACT BINARY (BIT-FOR-BIT) DUPLICATE SETS: {len(exact_binary_duplicates)} ===")
    for h, keys in exact_binary_duplicates.items():
        p = size_and_pages[keys[0]]
        print(f"\nHash: {h[:16]}... ({p['pages']} pages, {p['size']:,} bytes)")
        for k in keys:
            print(f"  - {k} (Extracted: {size_and_pages[k]['extracted_pages']}/{p['pages']})")

    # 2. Check files with same page count that have different binary hashes
    page_groups = {}
    for key, info in size_and_pages.items():
        # skip if already in binary duplicates
        p_count = info['pages']
        if p_count not in page_groups:
            page_groups[p_count] = []
        page_groups[p_count].append(key)

    candidate_page_groups = {p: keys for p, keys in page_groups.items() if len(keys) > 1}
    
    # Line by line content comparison for non-binary-identical PDFs with same page count
    content_comparisons = []
    print(f"\n=== CHECKING NON-BINARY IDENTICAL FILES WITH SAME PAGE COUNT ===")
    
    checked_pairs = set()
    for p_count, keys in candidate_page_groups.items():
        for i in range(len(keys)):
            for j in range(i + 1, len(keys)):
                k1, k2 = keys[i], keys[j]
                if size_and_pages[k1]['hash'] == size_and_pages[k2]['hash']:
                    continue # already verified binary duplicate
                    
                pair = tuple(sorted([k1, k2]))
                if pair in checked_pairs:
                    continue
                checked_pairs.add(pair)
                
                # Check line-by-line across every single page
                path1 = size_and_pages[k1]['path']
                path2 = size_and_pages[k2]['path']
                
                doc1 = fitz.open(path1)
                doc2 = fitz.open(path2)
                
                identical_pages = 0
                diff_pages = 0
                sample_diff = None
                
                for p_idx in range(p_count):
                    t1 = doc1[p_idx].get_text()
                    t2 = doc2[p_idx].get_text()
                    
                    lines1 = [l.strip() for l in t1.splitlines() if l.strip()]
                    lines2 = [l.strip() for l in t2.splitlines() if l.strip()]
                    
                    if lines1 == lines2:
                        identical_pages += 1
                    else:
                        diff_pages += 1
                        if sample_diff is None:
                            sample_diff = {
                                'page': p_idx + 1,
                                'lines1_count': len(lines1),
                                'lines2_count': len(lines2),
                                'sample_l1': lines1[:3],
                                'sample_l2': lines2[:3]
                            }
                            
                doc1.close()
                doc2.close()
                
                match_pct = (identical_pages / p_count) * 100
                res = {
                    'file1': k1,
                    'file2': k2,
                    'pages': p_count,
                    'identical_pages': identical_pages,
                    'diff_pages': diff_pages,
                    'match_pct': match_pct,
                    'sample_diff': sample_diff
                }
                content_comparisons.append(res)
                if match_pct > 0:
                    print(f"Comparing '{k1}' vs '{k2}': {identical_pages}/{p_count} pages match ({match_pct:.1f}%)")

    # Save detailed report
    report = {
        'exact_binary_duplicates': [
            {
                'hash': h,
                'pages': size_and_pages[keys[0]]['pages'],
                'size_bytes': size_and_pages[keys[0]]['size'],
                'files': [{'key': k, 'extracted': size_and_pages[k]['extracted_pages']} for k in keys]
            }
            for h, keys in exact_binary_duplicates.items()
        ],
        'content_comparisons': content_comparisons
    }
    
    with open('pdf_duplicate_audit.json', 'w', encoding='utf-8') as f:
        json.dump(report, f, indent=2)
    print(f"\nWrote full audit to pdf_duplicate_audit.json")

if __name__ == '__main__':
    scan_duplicates()
