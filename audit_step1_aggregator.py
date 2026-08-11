import json
import os
import glob

def load_json(filepath):
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            return json.load(f)
    return []

def main():
    print("Starting Step 1: Context Aggregation...")
    
    # Check dependencies
    if not os.path.exists("Phase3_Analysis_Results.json"):
        print("Error: Phase3_Analysis_Results.json not found. You must run Step 0 scripts first.")
        return
        
    analysis_data = load_json("Phase3_Analysis_Results.json")
    
    clusters = {}
    
    # Load all extracted text into memory (can be large, but usually fits in modern RAM)
    # Optimization: map file paths to text
    text_cache = {}
    for f in glob.glob("extracted_*.json"):
        text_cache[f] = load_json(f)
        
    for item in analysis_data:
        subject = item.get("subject", "Unknown_Subject")
        chapter = item.get("chapter", "Unknown_Chapter")
        topic = item.get("topic", "Unknown_Topic")
        subtopic = item.get("subtopic", "Unknown_Subtopic")
        
        # Build hierarchy key
        key = f"{subject} || {chapter} || {topic} || {subtopic}"
        
        if key not in clusters:
            clusters[key] = {
                "subject": subject,
                "chapter": chapter,
                "topic": topic,
                "subtopic": subtopic,
                "sources": []
            }
            
        src_file = item.get("source_file")
        pages_str = item.get("pages", "")
        
        if src_file and src_file in text_cache and pages_str:
            try:
                start_p, end_p = map(int, pages_str.split("-"))
                extracted_pages = text_cache[src_file]
                
                # Pages are 1-indexed in the extraction logic
                chunk_text = []
                for i in range(start_p - 1, min(end_p, len(extracted_pages))):
                    chunk_text.append(extracted_pages[i]["text"])
                    
                combined_text = "\\n\\n".join(chunk_text)
                
                clusters[key]["sources"].append({
                    "file": src_file,
                    "pages": pages_str,
                    "text": combined_text
                })
            except Exception as e:
                print(f"Error parsing pages {pages_str} from {src_file}: {e}")
                
    # Save the huge clustered JSON
    output_file = "Raw_Topic_Clusters.json"
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(clusters, f, indent=2)
        
    print(f"Aggregation complete. Created {output_file} with {len(clusters)} distinct topics.")

if __name__ == "__main__":
    main()
