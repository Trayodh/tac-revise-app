import os
import csv
import json
import sqlite3
import time
import sys
from groq import Groq

def load_env(key):
    env_path = '.env'
    if os.path.exists(env_path):
        with open(env_path, 'r') as f:
            for line in f:
                if line.startswith(f'{key}='):
                    return line.strip().split('=', 1)[1]
    return None

groq_key = load_env('GROQ_API_KEY')
client = Groq(api_key=groq_key) if groq_key else None

def classify_question(q_text, level=1):
    model = "llama-3.1-8b-instant" if level == 1 else "llama-3.3-70b-versatile"
    
    prompt = f"""
    Analyze this Defence Exam question. 
    Return JSON EXACTLY matching this schema:
    {{
        "exam": "CDS/NDA/AFCAT/UNKNOWN",
        "subject": "Geography/History/etc",
        "topic": "...",
        "micro_topic": "...",
        "difficulty": "EASY/MEDIUM/HARD/VERY_HARD",
        "depth": "D1/D2/D3/D4/D5",
        "obscurity": "LOW/MEDIUM/HIGH",
        "confidence": 0.0 to 1.0,
        "justification": "Why this depth?"
    }}
    Question: {q_text}
    """
    
    try:
        res = client.chat.completions.create(
            messages=[{"role": "user", "content": prompt}],
            model=model,
            response_format={"type": "json_object"}
        )
        return json.loads(res.choices[0].message.content)
    except Exception as e:
        return {"error": str(e), "confidence": 0.0}

def run_calibration():
    print("Running Multi-Stage Calibration Engine...")
    if not os.path.exists('validation_sample.csv'):
        print("validation_sample.csv missing.")
        return

    questions = []
    with open('validation_sample.csv', 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            questions.append(row)
            
    conn = sqlite3.connect('intelligence_db.sqlite')
    cursor = conn.cursor()
    
    results = []
    for q in questions:
        q_text = q['question_text']
        
        # LEVEL 1
        prediction = classify_question(q_text, level=1)
        escalation = 1
        
        # LEVEL 2 ESCALATION
        if prediction.get('confidence', 0.0) < 0.70 or 'error' in prediction:
            escalation = 2
            time.sleep(1) # rate limit mitigation
            prediction = classify_question(q_text, level=2)
            
        # LEVEL 3 ESCALATION
        if prediction.get('confidence', 0.0) < 0.70:
            escalation = 3
            prediction['review_status'] = 'REVIEW_QUEUE'
        else:
            prediction['review_status'] = 'COMPLETE'
            
        prediction['escalation_level'] = escalation
        prediction['canonical_question_id'] = q['canonical_question_id']
        prediction['GT_subject'] = q['GT_subject']
        prediction['GT_depth'] = q['GT_depth']
        
        results.append(prediction)
        
        # Insert to DB
        try:
            cursor.execute('''
                UPDATE pyq_intelligence 
                SET obscurity=?, escalation_level=?, justification=?, review_status=?,
                    classifier_model=?, processing_timestamp=?
                WHERE canonical_question_id=?
            ''', (
                prediction.get('obscurity', 'UNKNOWN'),
                escalation,
                prediction.get('justification', ''),
                prediction.get('review_status', ''),
                "llama-multi-stage",
                time.time(),
                q['canonical_question_id']
            ))
            conn.commit()
        except Exception:
            pass
            
        time.sleep(1)
        
    conn.close()
    
    # Calculate accuracy against Ground Truth where not UNKNOWN
    subject_correct = 0
    subject_total = 0
    depth_correct = 0
    depth_total = 0
    
    for r in results:
        if r['GT_subject'] and r['GT_subject'] != 'GROUND_TRUTH_UNKNOWN':
            subject_total += 1
            if r.get('subject', '').lower() == r['GT_subject'].lower():
                subject_correct += 1
                
        if r['GT_depth'] and r['GT_depth'] != 'GROUND_TRUTH_UNKNOWN':
            depth_total += 1
            if r.get('depth', '').lower() == r['GT_depth'].lower():
                depth_correct += 1
                
    subj_acc = (subject_correct / subject_total * 100) if subject_total > 0 else 0
    depth_acc = (depth_correct / depth_total * 100) if depth_total > 0 else 0
    
    with open('calibration_report.md', 'w', encoding='utf-8') as f:
        f.write("# Calibration Report\n\n")
        f.write(f"- **Subject Accuracy**: {subj_acc:.1f}% ({subject_correct}/{subject_total})\n")
        f.write(f"- **Depth Accuracy**: {depth_acc:.1f}% ({depth_correct}/{depth_total})\n")
        
        if subj_acc < 95 or depth_acc < 85:
            f.write("\n> [!CAUTION]\n> **PRODUCTION THRESHOLD FAILED**. Do not proceed to the 26,000 batch.\n")
        else:
            f.write("\n> [!NOTE]\n> **PRODUCTION THRESHOLD PASSED**.\n")
            
    print("Calibration finished. Wrote to calibration_report.md")

if __name__ == "__main__":
    run_calibration()
