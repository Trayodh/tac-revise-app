const fs = require('fs');

let caData = fs.readFileSync('ca_data.js', 'utf8');
let cleanCaData = caData.replace(/\{\s*visit:\s*"Exercise PRAGATI 2026"[\s\S]*?NASM-MR\) Test"[\s\S]*?terminal guidance\."\s*\},?\s*/g, '');
fs.writeFileSync('ca_data.js', cleanCaData);
console.log("Removed from ca_data.js");

let dataJs = fs.readFileSync('data.js', 'utf8');
const mayNews = `
      {
        "id": "may-2026-pragati",
        "topic": "Military Exercises",
        "text": "**Exercise PRAGATI 2026**: Multinational exercise hosted by the Indian Army at Umroi, Meghalaya. It involved over 400 personnel from 12 friendly nations, focusing on counter-terrorism and tactical operations in semi-mountainous and jungle terrain.",
        "details": {
          "winner": "Indian Army & 12 Nations",
          "award": "Exercise PRAGATI",
          "nationality": "Umroi, Meghalaya",
          "summary": "Multinational counter-terrorism exercise."
        }
      },`;

const juneNews = `
      {
        "id": "june-2026-khaan-quest",
        "topic": "Military Exercises",
        "text": "**Exercise KHAAN QUEST 2026**: Multilateral peacekeeping exercise in Ulaanbaatar, Mongolia. The Indian Army contingent participated alongside 17 other nations to refine peacekeeping skills under the UN Charter and boost interoperability.",
        "details": {
          "winner": "Indian Army & 17 Nations",
          "award": "Exercise KHAAN QUEST",
          "nationality": "Ulaanbaatar, Mongolia",
          "summary": "Multilateral UN peacekeeping exercise."
        }
      },
      {
        "id": "june-2026-lrlacm",
        "topic": "Defence Technology",
        "text": "**DRDO Long Range Land Attack Cruise Missile (LRLACM) Test**: Successful flight test from Dr. APJ Abdul Kalam Island, Odisha. It is an indigenously developed missile featuring terrain-following and waypoint navigation capabilities, with an estimated range of 1,000-1,500 km.",
        "details": {
          "winner": "DRDO",
          "award": "LRLACM Test",
          "nationality": "APJ Abdul Kalam Island, Odisha",
          "summary": "Indigenous 1000-1500 km range cruise missile."
        }
      },
      {
        "id": "june-2026-bmd",
        "topic": "Defence Technology",
        "text": "**DRDO Multi-Layered Ballistic Missile Defence (BMD) Test**: Successful consecutive flight tests of AD-1 and AD-2 interceptors. Demonstrated a multi-layered BMD system capable of neutralizing threats ranging up to Intercontinental Ballistic Missiles (ICBMs) across endo and exo-atmospheric ranges.",
        "details": {
          "winner": "DRDO",
          "award": "BMD Test",
          "nationality": "India",
          "summary": "Multi-layered ballistic missile defence."
        }
      },
      {
        "id": "june-2026-nasm-mr",
        "topic": "Defence Technology",
        "text": "**DRDO Naval Anti-Ship Missile-Medium Range (NASM-MR) Test**: Maiden flight test of the new maritime strike missile. Designed for maritime strike operations, featuring a range of approximately 300 km, sea-skimming capabilities, and advanced terminal guidance.",
        "details": {
          "winner": "DRDO",
          "award": "NASM-MR Test",
          "nationality": "India",
          "summary": "300 km range anti-ship maritime strike missile."
        }
      },`;

dataJs = dataJs.replace(/"May 2026":\s*\[/, '"May 2026": [' + mayNews);
dataJs = dataJs.replace(/"June 2026":\s*\[/, '"June 2026": [' + juneNews);
fs.writeFileSync('data.js', dataJs);
console.log("Added to data.js CURRENT_AFFAIRS_DB");
