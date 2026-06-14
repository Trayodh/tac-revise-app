import json
import re

file_path = r"c:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\scratch\defence-exams-revision\data.js"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# We want to extract CURRENT_AFFAIRS_DB from data.js, update April and May 2026, and write it back.
# Since it's a JS file, let's locate the CURRENT_AFFAIRS_DB definition.
# It starts at `let CURRENT_AFFAIRS_DB = {` and ends before `const CBT_EXAMS_DATABASE = [`
db_start_match = re.search(r"let CURRENT_AFFAIRS_DB = \{", content)
db_end_match = re.search(r"const CBT_EXAMS_DATABASE = \[", content)

if db_start_match and db_end_match:
    start_pos = db_start_match.start()
    end_pos = db_end_match.start()
    
    db_js = content[start_pos:end_pos].strip()
    
    # We can parse the database by extracting the json portion
    # The JSON starts after `let CURRENT_AFFAIRS_DB = ` and ends before the last semicolon or closing brace
    json_start = db_js.find("{")
    json_end = db_js.rfind("}")
    json_str = db_js[json_start:json_end+1]
    
    # Parse json_str as a Python dict
    # Wait, some values might contain multiline strings or JS-specific escapes, but let's try standard json loading
    # To be safe, let's write a targeted regex replacement inside Python or parse it safely.
    # Let's inspect data.js format again: it has valid JSON inside CURRENT_AFFAIRS_DB!
    # Let's load it
    # Clean up trailing commas from JS object to make it valid JSON
    cleaned_json = re.sub(r',(\s*[}\]])', r'\1', json_str)
    
    try:
        db = json.loads(cleaned_json)
        
        # Convert April and May
        for month in ["April 2026", "May 2026"]:
            if month in db:
                for item in db[month]:
                    if "details" in item:
                        details = item["details"]
                        
                        # Build upscHighlights
                        highlights = []
                        if details.get("winner"):
                            highlights.append(f"Subject/Authority: {details['winner']}")
                        if details.get("award"):
                            highlights.append(f"Key Initiative/Event: {details['award']}")
                        if details.get("nationality"):
                            highlights.append(f"Location/Nationality: {details['nationality']}")
                        if details.get("summary"):
                            highlights.append(details["summary"])
                            
                        item["upscHighlights"] = highlights
                        
                        # Build institutionalContext
                        item["institutionalContext"] = details.get("winner") or "Not Specified"
                        
                        # Build strategicImportance
                        item["strategicImportance"] = item.get("mcq", {}).get("explanation") or "Key concept tested frequently in UPSC and defence examinations."
                        
                        # Delete details
                        del item["details"]
                        
        # Convert back to JSON string with nice indentation
        updated_db_str = "let CURRENT_AFFAIRS_DB = " + json.dumps(db, indent=2) + ";\n\n"
        
        # Replace the old database block in content
        new_content = content[:start_pos] + updated_db_str + content[end_pos:]
        
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print("Successfully converted April and May 2026 to UPSC Highlights format!")
        
    except Exception as e:
        print("JSON parsing error:", e)

