import os
import re
import json
import sys
from datetime import datetime

# File paths
WORKSPACE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_JS_PATH = os.path.join(WORKSPACE_DIR, 'data.js')

def load_ca_database():
    if not os.path.exists(DATA_JS_PATH):
        print(f"Error: {DATA_JS_PATH} not found.")
        sys.exit(1)
        
    with open(DATA_JS_PATH, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Find start and end of CURRENT_AFFAIRS_DB
    start_match = re.search(r'let\s+CURRENT_AFFAIRS_DB\s*=', content)
    if not start_match:
        print("Error: Could not locate start of CURRENT_AFFAIRS_DB in data.js")
        sys.exit(1)
        
    end_match = re.search(r'const\s+CBT_EXAMS_DATABASE\s*=', content)
    if not end_match:
        print("Error: Could not locate start of CBT_EXAMS_DATABASE in data.js")
        sys.exit(1)
        
    db_start_idx = start_match.start()
    db_end_idx = end_match.start()
    
    db_decl = content[db_start_idx:db_end_idx].strip()
    brace_start = db_decl.find('{')
    
    # Extract the JS object representation
    db_obj_str = db_decl[brace_start:]
    # Strip trailing semicolon and potential comments
    if db_obj_str.endswith(';'):
        db_obj_str = db_obj_str[:-1]
    db_obj_str = db_obj_str.strip()
    
    # To parse this as JSON, we should load it. Since it might not be perfect JSON (it could be JS),
    # we can clean up trailing commas and write a simple parser or use JS execution.
    # But a robust way to handle it in Python is:
    # We will write a small Node script to read it and output strict JSON, then parse it.
    import subprocess
    node_cmd = f"const fs = require('fs'); const data = fs.readFileSync('{DATA_JS_PATH.replace('\\', '/')}', 'utf8'); const start = data.indexOf('let CURRENT_AFFAIRS_DB ='); const end = data.indexOf('const CBT_EXAMS_DATABASE ='); const expr = data.substring(start, end).replace('let CURRENT_AFFAIRS_DB =', '').trim().replace(/;$/, ''); console.log(JSON.stringify(eval('(' + expr + ')')));"
    
    try:
        res = subprocess.run(['node', '-e', node_cmd], capture_output=True, text=True, check=True)
        db = json.loads(res.stdout)
        return db, db_start_idx, db_end_idx, content
    except Exception as e:
        print("Error evaluating database with Node:", e)
        sys.exit(1)

def save_ca_database(db, start_idx, end_idx, original_content):
    formatted_db = "let CURRENT_AFFAIRS_DB = " + json.dumps(db, indent=2) + ";\n\n"
    new_content = original_content[:start_idx] + formatted_db + original_content[end_idx:]
    
    with open(DATA_JS_PATH, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Database updated and saved successfully!")

def add_or_update_entries(month_name, new_entries):
    db, start_idx, end_idx, content = load_ca_database()
    
    if month_name not in db:
        db[month_name] = []
        
    existing_ids = {item['id'] for item in db[month_name]}
    existing_topics = {item['topic'].lower() for item in db[month_name]}
    
    added_count = 0
    updated_count = 0
    
    for entry in new_entries:
        # Check by id or topic name to avoid duplicate issues
        if entry['id'] in existing_ids:
            # Update existing
            db[month_name] = [entry if item['id'] == entry['id'] else item for item in db[month_name]]
            updated_count += 1
        elif entry['topic'].lower() in existing_topics:
            # Same topic, let's replace or skip. For now, replace it to enrich.
            db[month_name] = [entry if item['topic'].lower() == entry['topic'].lower() else item for item in db[month_name]]
            updated_count += 1
        else:
            db[month_name].append(entry)
            added_count += 1
            
    # Sort entries by ID number
    def get_id_num(item):
        m = re.search(r'\d+', item['id'])
        return int(m.group(0)) if m else 999
        
    db[month_name].sort(key=get_id_num)
    
    save_ca_database(db, start_idx, end_idx, content)
    print(f"Summary for {month_name}: Added {added_count} new entries, updated {updated_count} entries.")

if __name__ == "__main__":
    print("Current Affairs Update Engine loaded.")
