import json
import os

filepath = r"c:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\scratch\defence-exams-revision\temp_august_ca.json"
with open(filepath, "r", encoding="utf-16") as f:
    data = json.load(f)

new_entry = {
    "id": "aug-pm-speech-2026",
    "topic": "National Affairs",
    "text": "During the 80th Independence Day speech at the Red Fort, PM Modi laid out the **'Viksit Bharat @ 2047'** roadmap, highlighting significant progress in poverty alleviation, defence, and electronics manufacturing.",
    "details": {
        "winner": "Government of India",
        "award": "Viksit Bharat Highlights",
        "nationality": "Indian",
        "summary": "Key announcements included AI skill training for 1 crore youth, 200 GW nuclear capacity target, and a 4x increase in defence production. The national song 'Vande Mataram' was also rendered at the Red Fort for the first time since Independence."
    },
    "mcq": {
        "question": "In the PM's 2026 Independence Day speech, what major announcement was made for the youth?",
        "options": [
            "Laptops for 1 crore students",
            "AI skill training for 1 crore youth",
            "Free internet for 5 crore youth",
            "Start-up funding for 10 lakh youth"
        ],
        "correct": 1,
        "explanation": "PM Modi announced a major initiative to provide AI skill training to 1 crore (10 million) youth to prepare them for a tech-driven future."
    }
}

data.append(new_entry)

with open(filepath, "w", encoding="utf-16") as f:
    json.dump(data, f, indent=2)

print("Successfully updated temp_august_ca.json")
