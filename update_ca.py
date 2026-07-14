import os
import json
import re

data_js_path = r"C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\scratch\defence-exams-revision\data.js"

july_data = """    {
      "id": "jul-1",
      "topic": "Naval Inductions",
      "text": "The Indian Navy commissioned **INS Mahendragiri**, the sixth and final ship of the Nilgiri-class (Project 17A) stealth frigates, at the Naval Dockyard in Visakhapatnam.",
      "details": {
        "winner": "Indian Navy",
        "award": "INS Mahendragiri Commissioned",
        "nationality": "India",
        "summary": "The vessel was designed by the Navy's Warship Design Bureau and built by Mazagon Dock Shipbuilders Limited (MDL)."
      },
      "mcq": {
        "question": "Which of the following is the final stealth frigate commissioned under Project 17A by the Indian Navy?",
        "options": [
          "INS Nilgiri",
          "INS Himgiri",
          "INS Mahendragiri",
          "INS Taragiri"
        ],
        "correct": 2,
        "explanation": "INS Mahendragiri is the final ship of the Project 17A stealth frigates, commissioned in July 2026."
      }
    },
    {
      "id": "jul-2",
      "topic": "Defence Procurements",
      "text": "The Defence Acquisition Council (DAC) granted Acceptance of Necessity (AoN) for proposals worth approximately **₹52,000 crore**, including HAMMER missiles and Man-Portable Anti-Tank Guided Missiles (MP-ATGMs).",
      "details": {
        "winner": "Ministry of Defence",
        "award": "₹52k Cr DAC Approval",
        "nationality": "India",
        "summary": "Approvals were granted for HAMMER precision-guided missiles, MP-ATGMs, and Verba air defence systems."
      },
      "mcq": {
        "question": "The Defence Acquisition Council recently approved the procurement of which precision-guided missiles under a ₹52,000 crore deal?",
        "options": [
          "BrahMos",
          "HAMMER",
          "Astra",
          "Meteor"
        ],
        "correct": 1,
        "explanation": "The DAC granted AoN for HAMMER precision-guided missiles along with MP-ATGMs and Verba air defence systems."
      }
    },
    {
      "id": "jul-3",
      "topic": "Defence Technology",
      "text": "The Request for Proposal (RFP) for the indigenous **Advanced Medium Combat Aircraft (AMCA)**, a fifth-generation fighter jet, was issued to private-sector-led consortia.",
      "details": {
        "winner": "Indian Air Force",
        "award": "AMCA RFP Issued",
        "nationality": "India",
        "summary": "This marks a major step towards developing India's indigenous fifth-generation stealth fighter capabilities."
      },
      "mcq": {
        "question": "India's upcoming indigenous fifth-generation fighter jet program is officially known by which acronym?",
        "options": [
          "LCA Tejas",
          "TEDBF",
          "AMCA",
          "MRFA"
        ],
        "correct": 2,
        "explanation": "AMCA stands for Advanced Medium Combat Aircraft, which is India's fifth-generation stealth fighter jet program."
      }
    },
    {
      "id": "jul-4",
      "topic": "Joint Exercises",
      "text": "Indian Army personnel participated in the 23rd edition of the multinational peacekeeping exercise **'Khaan Quest 2026'** held in Mongolia.",
      "details": {
        "winner": "Indian Army",
        "award": "Ex Khaan Quest 2026",
        "nationality": "Mongolia",
        "summary": "The exercise focuses on enhancing interoperability and sharing best practices in UN peacekeeping missions."
      },
      "mcq": {
        "question": "In which country was the multinational peacekeeping exercise 'Khaan Quest 2026' held?",
        "options": [
          "Kazakhstan",
          "Mongolia",
          "Kyrgyzstan",
          "Tajikistan"
        ],
        "correct": 1,
        "explanation": "Exercise Khaan Quest is a multinational peacekeeping exercise hosted annually in Mongolia."
      }
    },
    {
      "id": "jul-5",
      "topic": "Defence Technology",
      "text": "DRDO successfully flight-tested the upgraded long-range guided version of the **Pinaka** rocket system.",
      "details": {
        "winner": "DRDO",
        "award": "Pinaka Rocket Tested",
        "nationality": "India",
        "summary": "The guided Pinaka system provides enhanced precision and extended range for artillery strikes."
      },
      "mcq": {
        "question": "Pinaka, which was recently successfully flight-tested by the DRDO, is a type of what?",
        "options": [
          "Air-to-Air Missile",
          "Multiple Rocket Launcher System",
          "Torpedo",
          "Anti-Tank Missile"
        ],
        "correct": 1,
        "explanation": "Pinaka is an indigenous multiple rocket launcher system developed by the DRDO for the Indian Army."
      }
    },"""

with open(data_js_path, 'r', encoding='utf-8') as f:
    data_content = f.read()

# Since `"July 2026": [` is already there, we just prepend our data into the array
if '  "July 2026": [' in data_content:
    if '"jul-1"' not in data_content:
        new_data_content = data_content.replace(
            '  "July 2026": [',
            '  "July 2026": [\n' + july_data
        )
        with open(data_js_path, 'w', encoding='utf-8') as f:
            f.write(new_data_content)
        print("Updated data.js with July 2026 events")
    else:
        print("Events already injected!")
else:
    print("July 2026 array not found.")
