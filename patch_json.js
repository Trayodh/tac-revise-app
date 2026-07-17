const fs = require('fs');

const dataArr = [
    {
      "id": "jul-26-venezuela-aid",
      "topic": "Humanitarian Assistance",
      "text": "India launched **Operation Sahayata** in July 2026, dispatching IAF C-17 Globemaster aircraft carrying 50 tonnes of emergency relief materials and medical teams to earthquake-hit **Venezuela**.",
      "details": {
        "winner": "India & Venezuela",
        "award": "Humanitarian Aid",
        "nationality": "International",
        "summary": "Demonstrates India's role as a First Responder and Vishwamitra (friend of the world)."
      },
      "mcq": {
        "question": "Under which operation did India send 50 tonnes of emergency relief materials to earthquake-hit Venezuela in July 2026?",
        "options": [
          "A) Operation Dost",
          "B) Operation Maitri",
          "C) Operation Sahayata",
          "D) Operation Karuna"
        ],
        "answer": "C",
        "explanation": "Operation Sahayata was initiated to provide relief to Venezuela following a devastating earthquake."
      }
    },
    {
      "id": "jul-26-drdo-hstdv",
      "topic": "Defence Technology",
      "text": "The **Defence Research and Development Organisation (DRDO)** successfully flight-tested the indigenous **Hypersonic Technology Demonstrator Vehicle (HSTDV)** powered by a scramjet engine off the coast of Odisha.",
      "details": {
        "winner": "DRDO",
        "award": "HSTDV Test",
        "nationality": "Indian",
        "summary": "Crucial step toward developing indigenous hypersonic cruise missiles."
      },
      "mcq": {
        "question": "The DRDO recently flight-tested the HSTDV. What type of engine powers the HSTDV during its hypersonic cruise phase?",
        "options": [
          "A) Ramjet engine",
          "B) Scramjet engine",
          "C) Cryogenic engine",
          "D) Turbojet engine"
        ],
        "answer": "B",
        "explanation": "HSTDV is powered by a scramjet engine, which allows supersonic combustion necessary for hypersonic flight."
      }
    },
    {
      "id": "jul-26-wimbledon",
      "topic": "Sports",
      "text": "In Tennis, **Carlos Alcaraz** successfully defended his **Wimbledon Men's Singles** title in July 2026, securing his dominance on grass courts.",
      "details": {
        "winner": "Carlos Alcaraz",
        "award": "Wimbledon Men's Singles",
        "nationality": "Spanish",
        "summary": "One of the most prestigious Grand Slam tournaments."
      },
      "mcq": {
        "question": "Who won the Wimbledon Men's Singles title in July 2026?",
        "options": [
          "A) Novak Djokovic",
          "B) Jannik Sinner",
          "C) Carlos Alcaraz",
          "D) Daniil Medvedev"
        ],
        "answer": "C",
        "explanation": "Carlos Alcaraz won the Wimbledon Men's Singles championship in July 2026."
      }
    },
    {
      "id": "jul-26-indonesia-brahmos",
      "topic": "Defence Exports",
      "text": "India and **Indonesia** signed a landmark **$200 million deal** for the export of two batteries of the **BrahMos supersonic cruise missile**, making Indonesia the third international customer.",
      "details": {
        "winner": "India & Indonesia",
        "award": "BrahMos Export Deal",
        "nationality": "International",
        "summary": "Strengthens defence ties under India's Act East Policy and MAHASAGAR vision."
      },
      "mcq": {
        "question": "Which Southeast Asian country became the third international customer of the BrahMos missile in July 2026?",
        "options": [
          "A) Malaysia",
          "B) Indonesia",
          "C) Thailand",
          "D) Singapore"
        ],
        "answer": "B",
        "explanation": "Indonesia signed a $200 million deal for two BrahMos batteries, joining the Philippines and Vietnam."
      }
    },
    {
      "id": "jul-26-brics-summit",
      "topic": "International Summits",
      "text": "The **18th BRICS Summit** was held in **Kazan, Russia** in July 2026, focusing on expanding the use of local currencies for international trade and reforming multilateral institutions.",
      "details": {
        "winner": "BRICS Nations",
        "award": "18th BRICS Summit",
        "nationality": "International",
        "summary": "Key focus on de-dollarization and expanding the alliance."
      },
      "mcq": {
        "question": "Where was the 18th BRICS Summit held in July 2026?",
        "options": [
          "A) Johannesburg, South Africa",
          "B) Kazan, Russia",
          "C) Beijing, China",
          "D) New Delhi, India"
        ],
        "answer": "B",
        "explanation": "The 18th BRICS Summit was hosted by Russia in the city of Kazan."
      }
    }
];

let jsonContent = fs.readFileSync('ca_db_extracted.json', 'utf8');
let data = JSON.parse(jsonContent);

data["July 2026"] = dataArr;

fs.writeFileSync('ca_db_extracted.json', JSON.stringify(data, null, 2), 'utf8');
console.log("Updated ca_db_extracted.json");
