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

months = ["April 2026", "May 2026", "June 2026", "July 2026", "August 2026", "September 2026"]

system_prompt = """
You are an expert UPSC CDS, NDA, and AFCAT examiner and defence analyst.
Your task is to generate highly accurate, exam-oriented Current Affairs notes for the requested month.
You must output a strictly valid JSON array of objects. Do not use markdown codeblocks around the output.
Do NOT hallucinate. Present verified facts. Prioritize military/strategic relevance (Defence, National Affairs, Economy, Science, Environment).
Limit your output to EXACTLY 5 of the absolute most critical high-yield events for the requested month to avoid token limits.

JSON Schema per object:
{
  "id": "unique-id-month-year",
  "topic": "Priority Emoji + Priority Level | Category | Event Name", // e.g. "🔴 MUST KNOW | Defence | Exercise Cyclone"
  "text": "One-line rapid revision summary of the event.", // Keep it to one line!
  "details": {
    "summary": "Full markdown string containing the detailed analysis."
  },
  "mcq": null
}

For the `details.summary` field, you MUST format the string EXACTLY like this using Markdown (use \n for newlines within the string):
### 📌 What Happened
[Explanation]

### 🎯 Why It Matters
[Relevance for India/CDS]

### 🧠 Key Facts
- [Fact 1]
- [Fact 2]

### 🔗 Static GK Connection
[Static GK context]

### ⚠️ Exam Trap
[Commonly confused fact]

### 🎯 Possible Question Angle
[How UPSC will frame this]
"""

all_ca = {}

for month in months:
    print(f"Generating high-yield intelligence for {month}...")
    user_prompt = f"Generate 5 highly critical CDS/NDA exam-oriented Current Affairs for {month} in the exact JSON format requested."
    
    retries = 3
    success = False
    
    while retries > 0 and not success:
        try:
            response = client.chat.completions.create(
                model=model,
                messages=[
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": user_prompt}
                ],
                temperature=0.3
            )
            
            content = response.choices[0].message.content.strip()
            # Strip potential markdown backticks
            if content.startswith("```json"):
                content = content[7:]
            if content.startswith("```"):
                content = content[3:]
            if content.endswith("```"):
                content = content[:-3]
                
            data = json.loads(content)
            all_ca[month] = data
            print(f"  [OK] Success! Generated {len(data)} entries for {month}")
            success = True
            
        except Exception as e:
            print(f"  [FAIL] Failed for {month}: {e}")
            retries -= 1
            time.sleep(5)
            
    # Small delay between months to avoid rate limits
    time.sleep(2)

with open("legacy_ca_april_sept_2026.json", "w", encoding="utf-8") as f:
    json.dump(all_ca, f, indent=2, ensure_ascii=False)

print("Done! Data saved to legacy_ca_april_sept_2026.json")
