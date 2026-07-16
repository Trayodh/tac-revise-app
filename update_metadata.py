import json
import os

meta_path = r"C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\scratch\defence-exams-revision\Pathfinder_Elite\metadata.json"

with open(meta_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

for module in data:
    if module.get('subject') == 'Geography':
        if ' and MCQs' in module.get('topic_name', ''):
            module['topic_name'] = module['topic_name'].replace(' and MCQs', '')
        if '_and_MCQs' in module.get('file_path', ''):
            module['file_path'] = module['file_path'].replace('_and_MCQs', '')
        if '_and_MCQs' in module.get('filename', ''):
            module['filename'] = module['filename'].replace('_and_MCQs', '')
        if '-and-mcqs' in module.get('target_id', ''):
            module['target_id'] = module['target_id'].replace('-and-mcqs', '')

with open(meta_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=4)
    
print("Updated metadata.json successfully.")
