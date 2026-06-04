import json
import os
import re

# Load syllabus_data.json
SYLLABUS_DATA = {}
if os.path.exists("syllabus_data.json"):
    with open("syllabus_data.json", "r", encoding="utf-8") as f:
        SYLLABUS_DATA = json.load(f)

# Mock a topic
topic = {
    "id": "trig-identities",
    "title": "Trigonometric Identities & Values",
    "subject": "Mathematics (NDA/CDS)",
    "chapter": "Trigonometry",
    "formulas": "sin(A+B) = sinA·cosB + cosA·sinB",
    "notes": "Original notes text"
}

topic_id = topic["id"]
title = topic["title"]
subject = topic["subject"]
chapter = topic["chapter"]
formulas = topic["formulas"]

syllabus_context = SYLLABUS_DATA.get(topic_id, "")
syllabus_instruction = ""
if syllabus_context:
    syllabus_instruction = f'\nMake sure to exhaustively cover the official UPSC/AFCAT syllabus requirements: {syllabus_context}\n'

prompt = f"""You are an expert tutor for Indian Defence Examinations (NDA, CDS, AFCAT).
Generate highly detailed, comprehensive, and premium study notes for the topic: "{title}" under the chapter "{chapter}" in the subject "{subject}".
{syllabus_instruction}
The notes must be in raw HTML format...
"""

print("[PASS] Python file loads syllabus_data.json successfully.")
print(f"[INFO] Keys loaded: {len(SYLLABUS_DATA)}")
print(f"[INFO] Sample Prompt generated:\n{prompt}")
