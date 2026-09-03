import os
import json
import time
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()
client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=os.environ.get("OPENROUTER_API_KEY"),
)
model = "openrouter/free"

# Read the generated CA data
with open("august_2026_ca_generated.json", "r", encoding="utf-8") as f:
    ca_data = json.load(f)

system_prompt = """
You are an expert UPSC CDS, NDA, and AFCAT question setter.
Given a current affairs topic, generate exactly 3 High-Yield Multiple Choice Questions (MCQs).
One should be CDS style (Statement based), one NDA style (Fact based), one AFCAT style (Direct).
Output must be strictly valid JSON in this format:
[
  {
    "question": "Question text",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correct": 0, // index of correct option (0-3)
    "explanation": "Detailed explanation",
    "topicId": "current-affairs-aug-2026"
  }
]
Do not output anything except the JSON array.
"""

all_mcqs = []

for item in ca_data:
    safe_topic = item['topic'].encode('ascii', 'ignore').decode('ascii')
    print(f"Generating MCQs for: {safe_topic}")
    prompt = f"Topic: {item['topic']}\nDetails: {item['whatHappened']}\nExam Fact: {item['examFact']}\nTrap: {item['examTrap']}"
    
    retries = 3
    while retries > 0:
        try:
            response = client.chat.completions.create(
                model=model,
                messages=[
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": prompt}
                ],
                temperature=0.3
            )
            out = response.choices[0].message.content.strip()
            if out.startswith("```json"):
                out = out[7:]
            if out.startswith("```"):
                out = out[3:]
            if out.endswith("```"):
                out = out[:-3]
                
            data = json.loads(out.strip())
            all_mcqs.extend(data)
            print(f"Success! Generated {len(data)} MCQs.")
            break
        except Exception as e:
            print(f"Failed: {e}")
            retries -= 1
            time.sleep(5)
    time.sleep(2) # rate limit

with open("august_2026_mcqs_generated.json", "w", encoding="utf-8") as f:
    json.dump(all_mcqs, f, indent=2)
print("Done. Saved to august_2026_mcqs_generated.json")
