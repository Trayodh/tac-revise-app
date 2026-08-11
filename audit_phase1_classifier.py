import os
import json
import sqlite3
import time
import sys
from groq import Groq

# Load Groq API Key
def load_env():
    env_path = '.env'
    if os.path.exists(env_path):
        with open(env_path, 'r') as f:
            for line in f:
                if line.startswith('GROQ_API_KEY='):
                    return line.strip().split('=', 1)[1]
    return None

api_key = load_env()
client = Groq(api_key=api_key) if api_key else None

def init_db():
    conn = sqlite3.connect('intelligence_db.sqlite')
    cursor = conn.cursor()
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS pyq_intelligence (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        canonical_question_id TEXT UNIQUE,
        original_text TEXT,
        provenance TEXT,
        exam TEXT,
        year TEXT,
        subject TEXT,
        chapter TEXT,
        topic TEXT,
        subtopic TEXT,
        micro_topic TEXT,
        question_type TEXT,
        difficulty TEXT,
        depth TEXT,
        confidence REAL,
        classification_status TEXT
    )
    ''')
    conn.commit()
    return conn

def run_classifier_batch(batch_size=50):
    print(f"Initializing 2-Stage Classifier for {batch_size} questions...")
    if not client:
        print("Groq API key not found.")
        return
        
    conn = init_db()
    cursor = conn.cursor()
    
    # Load Taxonomy
    taxonomy = "Syllabus Map unavailable in simple string format. Will infer based on standard Defence Exam taxonomy."
    try:
        with open('syllabus_data.js', 'r', encoding='utf-8') as f:
            taxonomy = f.read()[:5000] # Pass truncated taxonomy to prompt
    except Exception:
        pass
        
    # Load verified PYQs
    if not os.path.exists('verified_pyqs.json'):
        print("verified_pyqs.json missing.")
        return
        
    with open('verified_pyqs.json', 'r', encoding='utf-8') as f:
        pyqs = json.load(f)
        
    questions_to_process = pyqs.get('questions', [])[:batch_size]
    
    processed = 0
    for q in questions_to_process:
        q_text = q.get('question_text')
        canonical_id = q_text[:30].replace(" ", "_") # Simplified ID
        
        # Check if already processed
        cursor.execute("SELECT 1 FROM pyq_intelligence WHERE canonical_question_id = ?", (canonical_id,))
        if cursor.fetchone():
            continue
            
        try:
            print(f"Processing: {canonical_id}".encode(sys.stdout.encoding, errors='replace').decode(sys.stdout.encoding))
        except Exception:
            pass
        
        # STAGE 1: Structural
        prompt_1 = f"Analyze this exam question structure. Extract Exam (CDS/NDA/AFCAT), Year, Subject (Geography/History/etc). Return JSON only. Question: {q_text}"
        try:
            res1 = client.chat.completions.create(
                messages=[{"role": "user", "content": prompt_1}],
                model="llama-3.1-8b-instant",
                response_format={"type": "json_object"}
            )
            structural = json.loads(res1.choices[0].message.content)
            exam = structural.get('Exam', 'UNKNOWN')
            subject = structural.get('Subject', 'UNKNOWN')
        except Exception as e:
            print(f"Stage 1 error: {e}")
            exam, subject = 'UNKNOWN', 'UNKNOWN'
            
        time.sleep(1) # Rate limit mitigation
        
        # STAGE 2: Semantic
        prompt_2 = f"""
        Map this {subject} question to a specific topic and micro-topic based on Defence Exam syllabus.
        Determine Difficulty (EASY/MEDIUM/HARD) and Depth (D1-D5, where D1=Basic Fact, D5=Specialist/Deep Concept).
        Provide Confidence (0.0 to 1.0). Return JSON only (topic, micro_topic, difficulty, depth, confidence).
        Question: {q_text}
        """
        try:
            res2 = client.chat.completions.create(
                messages=[{"role": "user", "content": prompt_2}],
                model="llama-3.1-8b-instant",
                response_format={"type": "json_object"}
            )
            semantic = json.loads(res2.choices[0].message.content)
        except Exception as e:
            print(f"Stage 2 error: {e}")
            semantic = {"topic": "Error", "micro_topic": "Error", "difficulty": "UNKNOWN", "depth": "UNKNOWN", "confidence": 0.0}

        time.sleep(1) # Rate limit mitigation
        
        cursor.execute('''
            INSERT INTO pyq_intelligence 
            (canonical_question_id, original_text, provenance, exam, subject, topic, micro_topic, difficulty, depth, confidence, classification_status)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (
            canonical_id, q_text, q.get('canonical_confidence', 'UNKNOWN'),
            exam, subject, semantic.get('topic', ''), semantic.get('micro_topic', ''),
            semantic.get('difficulty', ''), semantic.get('depth', ''), float(semantic.get('confidence', 0.0)),
            'COMPLETE'
        ))
        conn.commit()
        processed += 1

    print(f"Processed {processed} questions in this batch.")
    conn.close()

if __name__ == "__main__":
    run_classifier_batch(50)
