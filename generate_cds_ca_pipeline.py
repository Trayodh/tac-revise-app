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

topics = [
    {"topic": "INS Nipun Commissioning", "category": "Defence & Security", "priority": "🔴 MUST KNOW", "prompt": "INS Nipun commissioning into the Indian Navy on 31 August 2026. Include ship class, role, manufacturer, indigenous content."},
    {"topic": "India–Japan Defence Ministers Meeting", "category": "Defence & Security", "priority": "🔴 MUST KNOW", "prompt": "Meeting between Rajnath Singh and Shinjiro Koizumi on 20 Aug 2026 in New Delhi. Focus on Indo-Pacific, maritime security, QUAD."},
    {"topic": "India's Defence Budget FY 2026-27", "category": "Defence & Security", "priority": "🔴 MUST KNOW", "prompt": "India's Defence Budget for FY 2026-27 set at ₹7.85 lakh crore. Focus on capital vs revenue, Aatmanirbhar Bharat."},
    {"topic": "Sixth-Generation Fighter Development", "category": "Defence & Security", "priority": "🟠 IMPORTANT", "prompt": "India's reported exploration of cooperation with France-led sixth-gen fighter program. Mention AMCA and differentiate speculation from official announcements."},
    {"topic": "Mecca Defence Agreement", "category": "International Relations", "priority": "🟠 IMPORTANT", "prompt": "Reported defence agreement involving Saudi Arabia, Pakistan, and Turkey. Note: Add verification caveat if unverified."},
    {"topic": "India's 80th Independence Day", "category": "National Affairs", "priority": "🔴 MUST KNOW", "prompt": "15 August 2026 — India's 80th Independence Day. PM's address, Red Fort, constitutional facts."},
    {"topic": "Arunachal Pradesh Developments", "category": "National Affairs", "priority": "🔴 MUST KNOW", "prompt": "India's strategic position in Arunachal Pradesh, naming of locations, boundary dispute context (McMahon line)."},
    {"topic": "National Space Day", "category": "Science & Space", "priority": "🔴 MUST KNOW", "prompt": "National Space Day — 23 August. Commemorating Chandrayaan-3 landing (Vikram, Pragyan)."},
    {"topic": "India's Foreign Exchange Reserves", "category": "Economy", "priority": "🔴 MUST KNOW", "prompt": "India's forex reserves reached US$729.33 billion in August 2026. RBI reporting, FCAs, Gold, SDRs."},
    {"topic": "Economic Risks and Inflation", "category": "Economy", "priority": "🟠 IMPORTANT", "prompt": "August 2026 economic risks: global bond yields, inflation, energy prices, El Nino impact."},
    {"topic": "Arunachal Pradesh's First Ramsar Site", "category": "Environment & Geography", "priority": "🔴 MUST KNOW", "prompt": "Arunachal Pradesh's first Ramsar site designated. Mention ecological importance and Ramsar Convention (1971)."},
    {"topic": "India–Japan Strategic Cooperation", "category": "International Relations", "priority": "🔴 MUST KNOW", "prompt": "Broader India-Japan Strategic and Global Partnership, Indo-Pacific, QUAD."},
    {"topic": "Commonwealth Games 2026", "category": "Sports", "priority": "🟠 IMPORTANT", "prompt": "CWG 2026 developments. Host city, dates, India's tally/rank if applicable."},
    {"topic": "International Awards to Indian Leaders", "category": "Awards & Honours", "priority": "🟠 IMPORTANT", "prompt": "Major awards received by Indian personalities in Aug 2026."}
]

system_prompt = """
You are an expert UPSC CDS, NDA, and AFCAT examiner and defence analyst.
Your task is to generate highly accurate, exam-oriented Current Affairs notes based on the provided event.
Your output must be strictly valid JSON without markdown codeblocks or extra text.
Do NOT hallucinate. Present verified facts. Prioritize military/strategic relevance.

Output JSON structure:
{
  "topic": "Event Headline",
  "category": "String (e.g. ⚔️ DEFENCE INTEL, 🇮🇳 INDIA, 🌍 STRATEGIC WORLD, etc. Pick the best fit from the user prompt)",
  "priority": "String (e.g. 🔴 MUST KNOW, 🟠 IMPORTANT)",
  "date": "Exact or approximate date in August 2026",
  "location": "Location if applicable",
  "oneLineRevision": "A single-line rapid revision fact",
  "examFact": "A highly specific fact likely to be asked in exams",
  "examTrap": "Commonly confused fact to watch out for",
  "whatHappened": "Paragraph explaining the event",
  "whyImportant": "Paragraph explaining strategic/national importance",
  "staticGkConnections": ["Fact 1", "Fact 2", "Fact 3"]
}
"""

def process_items():
    results = []
    for item in topics:
        print(f"Generating for: {item['topic']}")
        prompt = f"Event Details to Cover:\n{item['prompt']}\nCategory: {item['category']}\nPriority: {item['priority']}"
        
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
                results.append(data)
                print(f"Success!")
                break
            except Exception as e:
                print(f"Failed: {e}")
                retries -= 1
                time.sleep(5)
        time.sleep(2) # OpenRouter rate limits
    
    with open("august_2026_ca_generated.json", "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2)
    print("Done. Saved to august_2026_ca_generated.json")

if __name__ == "__main__":
    process_items()
