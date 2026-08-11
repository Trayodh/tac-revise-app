import json
import random
import csv
import re
import os

def stratify_sample():
    print("Generating Stratified Validation Sample...")
    with open('verified_pyqs.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    questions = data.get('questions', [])
    
    buckets = {
        'afcat': [],
        'cds': [],
        'nda': [],
        'numerical': [],
        'statement': [],
        'assertion': [],
        'short': [],
        'long': [],
        'obscure_chars': [],
        'other': []
    }
    
    for q in questions:
        text = q.get('question_text', '')
        text_lower = text.lower()
        
        # Provenance Buckets
        if 'afcat' in text_lower or 'afcat' in str(q.get('occurrences', '')):
            buckets['afcat'].append(q)
        elif 'cds' in text_lower or 'cds' in str(q.get('occurrences', '')):
            buckets['cds'].append(q)
        elif 'nda' in text_lower or 'nda' in str(q.get('occurrences', '')):
            buckets['nda'].append(q)
            
        # Type Buckets
        if re.search(r'\d+\.\d+', text):
            buckets['numerical'].append(q)
        if 'statement' in text_lower or '1.' in text:
            buckets['statement'].append(q)
        if 'assertion' in text_lower or 'reason' in text_lower:
            buckets['assertion'].append(q)
            
        # Length Buckets
        if len(text) < 50:
            buckets['short'].append(q)
        elif len(text) > 300:
            buckets['long'].append(q)
            
        # Obscure/OCR artifact
        if re.search(r'[^a-zA-Z0-9\s\.,\?\(\)\[\]]', text):
            buckets['obscure_chars'].append(q)
            
        buckets['other'].append(q)
        
    # Sample 200 total ensuring diversity
    sample = []
    # 20 from each specific bucket, remainder from other
    for k, v in buckets.items():
        if k == 'other': continue
        if len(v) > 0:
            samp_size = min(len(v), 20)
            sample.extend(random.sample(v, samp_size))
            
    # Deduplicate sample based on text
    unique_sample = {q['question_text']: q for q in sample}
    final_sample = list(unique_sample.values())
    
    # Fill up to 200
    if len(final_sample) < 200:
        remainder = 200 - len(final_sample)
        final_sample.extend(random.sample(buckets['other'], min(remainder, len(buckets['other']))))
        
    final_sample = final_sample[:200]
    print(f"Generated {len(final_sample)} validation questions.")
    
    # Write to CSV
    headers = [
        "canonical_question_id", "question_text", "provenance_source",
        "GT_provenance", "GT_exam", "GT_year", "GT_subject", "GT_chapter", 
        "GT_topic", "GT_micro_topic", "GT_question_type", "GT_difficulty", 
        "GT_depth", "GT_obscurity"
    ]
    
    with open('validation_sample.csv', 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(headers)
        
        for q in final_sample:
            text = q.get('question_text', '')
            can_id = text[:30].replace(" ", "_")
            source = str(q.get('occurrences', ''))[:100]
            # Write empty GT columns
            writer.writerow([can_id, text, source] + ["GROUND_TRUTH_UNKNOWN"] * 11)
            
    print("Saved validation_sample.csv. Awaiting independent ground truth labeling.")

if __name__ == "__main__":
    stratify_sample()
