import os
import json
import google.generativeai as genai
import re
from dotenv import load_dotenv

load_dotenv()
genai.configure(api_key=os.environ["GEMINI_API_KEY"])

model = genai.GenerativeModel('gemini-1.5-pro')

def get_html_from_ai(prompt):
    print(f"Generating content for prompt...")
    response = model.generate_content(prompt)
    text = response.text
    # Remove markdown code blocks if any
    text = re.sub(r'```html', '', text)
    text = re.sub(r'```', '', text)
    return text.strip()

def augment_notes():
    # 1. Military Chiefs
    chiefs_prompt = """
    Generate an HTML string (just the inner HTML, no <html> or <body> tags) that contains:
    <h2>Commanders-in-Chief & Chiefs of Staff</h2>
    <p>The timeline of all military chiefs from 1947 to 2024.</p>
    <div class="ncert-box" style="background-color: rgba(69, 170, 242, 0.1); border-left: 4px solid #45aaf2; padding: 12px; margin: 20px 0; border-radius: 4px;">
    <strong>💡 Fun Fact time!</strong><br>
    The first Indian Commander-in-Chief of the Indian Army was Field Marshal K. M. Cariappa, who took over from Sir Francis Roy Bucher on 15 January 1949. This day is celebrated as Army Day!
    </div>
    Then, create 3 detailed HTML tables:
    1. All Chiefs of Army Staff of India from 1947 to present (including Gen Upendra Dwivedi). Table columns: S.No, Name, Tenure.
    2. All Chiefs of Naval Staff of India from 1947 to present (including Adm Dinesh K Tripathi). Table columns: S.No, Name, Tenure.
    3. All Chiefs of Air Staff of India from 1947 to present (including ACM Amar Preet Singh). Table columns: S.No, Name, Tenure.
    Format tables elegantly with inline styles (border="1" style="width:100%; border-collapse: collapse; text-align: left; margin-bottom: 20px;").
    Ensure you list EVERY SINGLE chief, do not skip or summarize.
    """
    chiefs_html = get_html_from_ai(chiefs_prompt)

    # 2. Dedicated Branches
    branches_prompt = """
    Generate an HTML string containing dedicated sections for the Indian Army, Indian Navy, Indian Air Force, and Indian Coast Guard.
    For each, include:
    - Brief History & Motto
    - Commands (with headquarters locations)
    - Combat Arms / Branches
    - Key Equipment (Aircraft, Tanks, Ships, Submarines)
    Include at least two <div class="ncert-box" style="background-color: rgba(69, 170, 242, 0.1); border-left: 4px solid #45aaf2; padding: 12px; margin: 20px 0; border-radius: 4px;"> with "💡 Fun Fact time!" about equipment or history.
    """
    branches_html = get_html_from_ai(branches_prompt)

    # 3. Allied Agencies
    agencies_prompt = """
    Generate an HTML string covering Allied Defence & Intelligence Agencies and Paramilitary/CAPF:
    - Intelligence Agencies: RAW, IB, NTRO, DIA.
    - Specialized Organizations: BRO (Border Roads Organisation), ISRO (Defence applications).
    - CAPF (Central Armed Police Forces): CRPF, BSF, ITBP, CISF, SSB, Assam Rifles, NSG.
    Describe their mandate, who they report to (e.g. CAPF to MHA, not MoD), and brief history.
    Include a <div class="ncert-box" style="background-color: rgba(69, 170, 242, 0.1); border-left: 4px solid #45aaf2; padding: 12px; margin: 20px 0; border-radius: 4px;"> with "💡 Fun Fact time!" about one of these agencies.
    """
    agencies_html = get_html_from_ai(agencies_prompt)

    # 4. Science Comparisons
    science_prompt = """
    Generate an HTML string containing tables comparing key science and geography concepts for exams:
    <h2>Important Tabular Comparisons</h2>
    <p>Many topics are easily explained by comparison.</p>
    Include tables for:
    - Biology: Plant vs Animal Cells; Prokaryotic vs Eukaryotic Cells; DNA vs RNA; RBC vs WBC vs Platelets.
    - Chemistry: Metals vs Non-Metals; Isotopes vs Isobars vs Isotones; Acids vs Bases.
    - Physics: Concave vs Convex mirrors; Scalar vs Vector quantities.
    - Geography: Cyclones vs Anti-cyclones; El Nino vs La Nina.
    Use inline CSS for tables (border="1" style="width:100%; border-collapse: collapse; text-align: left; margin-bottom: 20px;").
    Include a <div class="ncert-box" style="background-color: rgba(69, 170, 242, 0.1); border-left: 4px solid #45aaf2; padding: 12px; margin: 20px 0; border-radius: 4px;"> with "💡 Fun Fact time!" somewhere.
    """
    science_html = get_html_from_ai(science_prompt)

    # Now read the JS file
    with open('notes_data_exam_focused.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We will inject these into the military_aptitude section.
    # First, let's build the new military_aptitude object string
    new_military = f'''  "military_aptitude": {{
    "title": "Military Aptitude",
    "icon": "fas fa-fighter-jet",
    "chapters": [
      {{
        "chapterTitle": "Military Knowledge",
        "topics": [
          {{
            "id": "military_chiefs_timeline",
            "title": "Chiefs Timeline (Army, Navy, Air Force)",
            "notes": {json.dumps(chiefs_html)}
          }},
          {{
            "id": "military_dedicated_branches",
            "title": "Dedicated Branches (Army, Navy, IAF, ICG)",
            "notes": {json.dumps(branches_html)}
          }},
          {{
            "id": "military_allied_agencies",
            "title": "Allied Agencies (Intelligence, BRO, ISRO, CAPF)",
            "notes": {json.dumps(agencies_html)}
          }}
        ]
      }}
    ]
  }},'''

    # Replace old military_aptitude
    pattern_military = r'  "military_aptitude":\s*\{[\s\S]*?(?=\n  "[a-zA-Z_0-9]+":\s*\{|\n\};\s*$)'
    content = re.sub(pattern_military, new_military, content, count=1)

    # Now append Science comparisons to general_science chapter if found, or just to biology
    # Find general_science topic list end
    new_science_topic = f'''          }},
          {{
            "id": "science_tabular_comparisons",
            "title": "Important Tabular Comparisons",
            "notes": {json.dumps(science_html)}
          }}'''
    # We will look for "title": "Scientific Discoveries & Instruments" and replace its closing block
    content = content.replace('"title": "Scientific Discoveries & Instruments",\n            "notes": "<p>Loading...</p>"\n          }', '"title": "Scientific Discoveries & Instruments",\n            "notes": "<p>Loading...</p>"\n          }' + new_science_topic)

    with open('notes_data_exam_focused.js', 'w', encoding='utf-8') as f:
        f.write(content)

    print("Successfully augmented notes data!")

if __name__ == "__main__":
    augment_notes()
