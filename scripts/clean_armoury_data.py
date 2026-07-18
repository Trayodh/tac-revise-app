import json
import re
from collections import defaultdict
import copy

def clean_data():
    in_file = 'extra_bank_data.js'
    out_file = 'extra_bank_data.js'
    
    print("Reading data...")
    with open(in_file, 'r', encoding='utf-8', errors='ignore') as f:
        data = f.read()
        
    match = re.search(r'window\.EXTRA_QUESTION_BANK\s*=\s*(\{.*\});?', data, re.DOTALL)
    if not match:
        print("Could not find window.EXTRA_QUESTION_BANK object.")
        return
        
    try:
        raw_json = match.group(1).strip()
        if raw_json.endswith(';'):
            raw_json = raw_json[:-1]
        bank = json.loads(raw_json)
    except Exception as e:
        print(f"Error parsing JSON: {e}")
        return

    print("Extracting questions...")
    all_questions = []
    
    # Existing structure: Domain -> Subject -> Chapter -> [questions]
    for domain, subjects in bank.items():
        if not isinstance(subjects, dict): continue
        for subject, chapters in subjects.items():
            if not isinstance(chapters, dict): continue
            for chapter, questions in chapters.items():
                if not isinstance(questions, list): continue
                for q in questions:
                    if not isinstance(q, dict): continue
                    # Add current classification for heuristics
                    q['_orig_domain'] = domain
                    q['_orig_subject'] = subject
                    q['_orig_chapter'] = chapter
                    all_questions.append(q)
                    
    print(f"Total questions loaded: {len(all_questions)}")
    
    new_bank = defaultdict(lambda: defaultdict(list))
    
    # Re-classification logic
    for q in all_questions:
        question_text = q.get('question', '')
        
        # 1. Filter out long paragraphs (reading comprehension chunks)
        if len(question_text) > 400:
            continue
            
        # Optional: Skip if it looks like a passage without an actual question
        # e.g. "Read the following passage and answer the questions that follow."
        if 'read the following passage' in question_text.lower():
            continue
            
        orig_ch = q.get('_orig_chapter', '').lower()
        orig_sub = q.get('_orig_subject', '').lower()
        orig_dom = q.get('_orig_domain', '').lower()
        
        # Remove tracking keys
        q.pop('_orig_chapter', None)
        q.pop('_orig_subject', None)
        q.pop('_orig_domain', None)
        
        new_subject = "General Studies"
        new_chapter = "Mixed Questions"
        
        # Classify by Subject and Chapter based on previous names
        combined = f"{orig_ch} {orig_sub} {orig_dom}".lower()
        
        if any(x in combined for x in ['math', 'algebra', 'trigonometry', 'calculus', 'geometry']):
            new_subject = "Mathematics"
            new_chapter = "Mixed Mathematics"
            if 'algebra' in orig_ch: new_chapter = 'Algebra'
            elif 'trigonometry' in orig_ch: new_chapter = 'Trigonometry'
            elif 'geometry' in orig_ch: new_chapter = 'Geometry'
            
        elif any(x in combined for x in ['english', 'vocabulary', 'grammar', 'cloze', 'idiom', 'sentence']):
            new_subject = "English"
            new_chapter = "Mixed English"
            if 'vocab' in orig_ch: new_chapter = 'Vocabulary'
            elif 'grammar' in orig_ch: new_chapter = 'Grammar'
            elif 'idiom' in orig_ch: new_chapter = 'Idioms and Phrases'
            
        elif any(x in combined for x in ['history']):
            new_subject = "History"
            new_chapter = "Mixed History"
            if 'ancient' in orig_ch: new_chapter = 'Ancient History'
            elif 'medieval' in orig_ch: new_chapter = 'Medieval History'
            elif 'modern' in orig_ch: new_chapter = 'Modern History'
            elif 'world' in orig_ch: new_chapter = 'World History'
            
        elif any(x in combined for x in ['geography', 'environment', 'climate', 'earth']):
            new_subject = "Geography"
            new_chapter = "Mixed Geography"
            if 'physical' in orig_ch: new_chapter = 'Physical Geography'
            elif 'india' in orig_ch: new_chapter = 'Indian Geography'
            elif 'environment' in orig_ch: new_chapter = 'Environment'
            
        elif any(x in combined for x in ['polity', 'constitution']):
            new_subject = "Polity"
            new_chapter = orig_ch.title() if orig_ch else "Mixed Polity"
            if 'mixed' in orig_ch or 'polity' == orig_ch: new_chapter = 'Indian Polity'
            
        elif any(x in combined for x in ['econom']):
            new_subject = "Economics"
            new_chapter = "Indian Economy"
            
        elif any(x in combined for x in ['physics', 'optics', 'electricity', 'magnetism', 'mechanics', 'gravitation']):
            new_subject = "Physics"
            new_chapter = orig_ch.title() if orig_ch else "Mixed Physics"
            if 'physics' == orig_ch or 'mixed' in orig_ch: new_chapter = 'General Physics'
            
        elif any(x in combined for x in ['chemistry', 'metal', 'carbon', 'reaction']):
            new_subject = "Chemistry"
            new_chapter = orig_ch.title() if orig_ch else "Mixed Chemistry"
            if 'chemistry' == orig_ch or 'mixed' in orig_ch: new_chapter = 'General Chemistry'
            
        elif any(x in combined for x in ['biology', 'reproduction', 'cell', 'genetic', 'plant', 'health']):
            new_subject = "Biology"
            new_chapter = orig_ch.title() if orig_ch else "Mixed Biology"
            if 'biology' == orig_ch or 'mixed' in orig_ch: new_chapter = 'General Biology'
            
        elif any(x in combined for x in ['current affairs', 'april', 'may', 'news', 'recent']):
            new_subject = "Current Affairs"
            new_chapter = orig_ch.title() if orig_ch else "Mixed Current Affairs"
            if 'current affairs' == orig_ch or 'mixed' in orig_ch: new_chapter = 'General Current Affairs'
            
        else:
            new_subject = "General Knowledge"
            new_chapter = orig_ch.title() if orig_ch else "Mixed General Knowledge"
            if 'general knowledge' == orig_ch or 'mixed' in orig_ch: new_chapter = 'General Knowledge'

        new_bank[new_subject][new_chapter].append(q)

    # Convert back to normal dict
    final_bank = {k: dict(v) for k, v in new_bank.items()}
    
    total_cleaned = sum(len(qs) for subj in final_bank.values() for qs in subj.values())
    print(f"Total questions after cleanup: {total_cleaned}")
    
    print("Writing output to", out_file)
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write("window.EXTRA_QUESTION_BANK = ")
        json.dump(final_bank, f, indent=2)
        f.write(";\n")
        
    print("Success!")

if __name__ == '__main__':
    clean_data()
