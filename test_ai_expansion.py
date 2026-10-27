import os
import json
import requests
from dotenv import load_dotenv

load_dotenv()
groq_key = os.environ.get("GROQ_API_KEY")
gemini_key = os.environ.get("GEMINI_API_KEY")

prompt = """You are the Senior UPSC & Defence Exam Content Architect for Jayastra (NDA, CDS, AFCAT, CAPF).
Generate an EXHAUSTIVE, MASTER-GRADE, DEEP-DIVE revision module for the following syllabus chapter:

Subject: History
Chapter: Indus Valley Civilization (Bronze Age Urbanization)

You must produce an in-depth, rich, highly structured HTML study guide with ZERO omissions.
Use the following format and CSS classes:
- Wrap in <div class="revision-card">
- <h3> header with icon and uppercase title
- Section 1: <h4>📌 Chronology, Geographical Extent & River Basins</h4> (Pre, Early, Mature, Late Harappan dates; Manda, Daimabad, Sutkagendor, Alamgirpur; Ghaggar-Hakra system)
- Section 2: <h4>📊 Master Matrix: Key Sites, Excavators & Major Discoveries</h4> (A comprehensive, styled HTML <table> with at least 12 sites: Harappa, Mohenjodaro, Lothal, Kalibangan, Dholavira, Banawali, Chanhudaro, Rakhigarhi, Surkotada, Kot Diji, Ropar, Sutkagendor)
- Section 3: <h4>🏗️ Town Planning, Architecture & Sanitation Engineering</h4> (Grid plan, burnt bricks 1:2:4, Great Bath dimensions/bitumen, Great Granary, covered drainage, Dholavira 3-part layout and reservoirs)
- Section 4: <h4>🌾 Economic Life: Agriculture, Metallurgy & Craft Specialization</h4> (Crops, Sindon/cotton, bronze lost-wax dancing girl, seal carving, steatite, bead making factories, weights in binary 16 multiples)
- Section 5: <h4>🚢 Trade Networks: Domestic & Mesopotamian Contacts</h4> (Meluhha, Dilmun, Makan, Lothal dockyard tidal lock, imports of lapis lazuli, copper, tin, gold)
- Section 6: <h4>🕊️ Religion, Society & Burial Traditions</h4> (Mother goddess, Pashupati seal animals, linga/yoni, no temples, tree/animal worship, burial types at Lothal, Kalibangan, Harappa)
- Section 7: <h4>🔍 Script, Seals & Weights</h4> (Boustrophedon, pictographic ~400 signs, undeciphered, unicorn seal)
- Section 8: <h4>📉 Theories of Decline</h4> (Styled HTML <table> of 7 scholars and specific causes: Wheeler, Raikes, Lambrick, Fairservis, etc.)
- Section 9: <div class="trap-box"><strong>⚡ UPSC & Defence Exam Traps (High-Frequency Distractors):</strong> (Iron unknown, cow not on seals, horse rarity, no temples, lion not on seals, Dholavira unique features, etc.)</div>
- Section 10: <div class="mnemonic-box"><strong>💡 High-Speed Mnemonics & Memory Triggers:</strong> (Memorable mnemonics for sites, rivers, findings)</div>
- Section 11: <div class="strategist-tip"><strong>🎯 Strategic PYQ Insights (NDA/CDS/CAPF):</strong> (Past year questions analyzed, recurring themes, weightage)</div>
- Section 12: <h4>📚 Comprehensive Fact Bank & Reference Details</h4> (Dense bulleted list of 25+ specific high-yield facts)

Return ONLY valid, beautifully formatted HTML. No markdown code backticks around the output."""

print("Calling Groq Qwen...")
r = requests.post(
    "https://api.groq.com/openai/v1/chat/completions",
    headers={"Authorization": f"Bearer {groq_key}", "Content-Type": "application/json"},
    json={
        "model": "qwen/qwen3.8-27b",
        "messages": [{"role": "user", "content": prompt}],
        "max_tokens": 4096,
        "temperature": 0.3
    },
    timeout=60
)

if r.status_code == 200:
    content = r.json()['choices'][0]['message']['content'].strip()
    print("Success! Generated length:", len(content), "chars")
    with open("test_expanded_ivc.html", "w", encoding="utf-8") as f:
        f.write(content)
    print("Saved to test_expanded_ivc.html")
else:
    print("Error:", r.status_code, r.text[:300])
