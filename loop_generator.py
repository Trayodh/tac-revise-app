import os
import json
import time
import subprocess

def get_done_count():
    try:
        with open('targeted_notes_progress.json', 'r', encoding='utf-8') as f:
            p = json.load(f)
            return len(p.get('done', []))
    except:
        return 0

total_topics = 108

while True:
    done = get_done_count()
    if done >= total_topics:
        print(f"All {total_topics} topics completed!")
        break
    
    print(f"Current progress: {done}/{total_topics}. Launching generator...")
    subprocess.run(["python", "-u", "generate_targeted_notes.py"])
    
    done = get_done_count()
    if done >= total_topics:
        print(f"All {total_topics} topics completed!")
        break
        
    print("Generator pass finished. Waiting 60 seconds for API limits to reset before retrying missing topics...")
    time.sleep(60)
