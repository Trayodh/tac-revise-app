import os, requests, fitz, json
from dotenv import load_dotenv

load_dotenv()
key = os.environ.get("GROQ_API_KEY")
doc = fitz.open("pathfinder_studies.pdf")
page_text = doc.load_page(234).get_text()

prompt = (
    "You are an expert exam content extractor for NDA/CDS/AFCAT.\n"
    "Extract all educational facts and practice questions from the following page text.\n"
    "Output valid JSON format with keys:\n"
    "1. 'notes_database': list of objects with keys: 'subject', 'chapter', 'subchapter', 'topic', 'content' (detailed markdown notes, facts, definitions, formulas).\n"
    "2. 'question_database': list of MCQ objects with keys: 'question_text', 'options' (dict A,B,C,D), 'correct_answer', 'explanation', 'subject', 'chapter', 'topic'.\n"
    "Return valid JSON only.\n\n"
    "PAGE CONTENT:\n" + page_text[:4000]
)

res = requests.post(
    "https://api.groq.com/openai/v1/chat/completions",
    headers={"Authorization": f"Bearer {key}", "Content-Type": "application/json"},
    json={
        "model": "qwen/qwen3.8-27b",
        "messages": [{"role": "user", "content": prompt}],
        "max_tokens": 3000,
        "temperature": 0.1
    },
    timeout=60
)
print("Status:", res.status_code)
if res.status_code == 200:
    content = res.json()["choices"][0]["message"]["content"]
    print("Content length:", len(content))
    clean = content.strip()
    if "```json" in clean:
        clean = clean.split("```json")[1].split("```")[0].strip()
    elif "```" in clean:
        clean = clean.split("```")[1].split("```")[0].strip()
    try:
        data = json.loads(clean)
    except Exception:
        # Truncate to last complete object closing brace
        last_brace = clean.rfind('}')
        if last_brace > 0:
            candidate = clean[:last_brace+1]
            if not candidate.endswith('}'):
                candidate += '}'
            if 'question_database' in candidate and not candidate.endswith(']}'):
                candidate += ']}'
            try:
                data = json.loads(candidate)
            except Exception:
                # Fallback: regex extract questions and notes
                import re
                notes_matches = re.findall(r'\{\s*"subject".*?\}', clean, re.DOTALL)
                q_matches = re.findall(r'\{\s*"question_text".*?\}', clean, re.DOTALL)
                data = {
                    "notes_database": [json.loads(m) for m in notes_matches if m.endswith('}')],
                    "question_database": [json.loads(m) for m in q_matches if m.endswith('}')]
                }
    print("Notes parsed:", len(data.get("notes_database", [])))
    print("Questions parsed:", len(data.get("question_database", [])))
else:
    print("Error:", res.text[:200])
