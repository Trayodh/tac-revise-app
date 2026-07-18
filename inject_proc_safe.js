const fs = require('fs');
let dataJs = fs.readFileSync('data.js', 'utf8');

const procJan = `{
          "id": "proc_202601_mq9b",
          "title": "Procurement of 31 MQ-9B Predator Drones",
          "type": "Military Procurement",
          "exercise_name": "MQ-9B Acquisition",
          "edition": "",
          "status": "Signed",
          "start_date": "2026-01-15",
          "end_date": "2026-01-15",
          "year": "2026",
          "tier": 1,
          "participant_nations": ["India", "USA"],
          "indian_service": ["Tri-Service"],
          "location": {
              "country": "India",
              "region": "National"
          },
          "exercise_domain": ["ISR", "Unmanned Aerial Systems"],
          "equipment_used": {
              "india": ["MQ-9B SkyGuardian", "MQ-9B SeaGuardian"],
              "foreign": []
          },
          "strategic_significance": "Enhances long-range ISR capabilities across the IOR and land borders.",
          "exam_importance": "Highly important for CDS. Know the breakdown (15 for Navy, 8 Army, 8 IAF) and manufacturer (General Atomics)."
      }`;

const procMarch = `{
          "id": "proc_202603_rafalem",
          "title": "Procurement of 26 Rafale Marine Jets",
          "type": "Military Procurement",
          "exercise_name": "Rafale-M Acquisition",
          "edition": "",
          "status": "Contract finalized",
          "start_date": "2026-03-22",
          "end_date": "2026-03-22",
          "year": "2026",
          "tier": 1,
          "participant_nations": ["India", "France"],
          "indian_service": ["Indian Navy"],
          "location": {
              "country": "India",
              "region": "National"
          },
          "exercise_domain": ["Naval Aviation", "Carrier Strike"],
          "equipment_used": {
              "india": ["Rafale-M"],
              "foreign": []
          },
          "strategic_significance": "Replaces aging MiG-29Ks and bolsters INS Vikrant's strike capability.",
          "exam_importance": "Critical for all exams. Manufacturer: Dassault Aviation."
      }`;

const procMay = `{
          "id": "proc_202605_lch",
          "title": "Mass Procurement of Light Combat Helicopters (Prachand)",
          "type": "Military Procurement",
          "exercise_name": "LCH Prachand Acquisition",
          "edition": "",
          "status": "Induction phase",
          "start_date": "2026-05-10",
          "end_date": "2026-05-10",
          "year": "2026",
          "tier": 1,
          "participant_nations": ["India"],
          "indian_service": ["Indian Army", "Indian Air Force"],
          "location": {
              "country": "India",
              "region": "National"
          },
          "exercise_domain": ["Aviation", "High-Altitude Warfare"],
          "equipment_used": {
              "india": ["LCH Prachand"],
              "foreign": []
          },
          "strategic_significance": "Crucial for high-altitude operations in Ladakh and Siachen.",
          "exam_importance": "Indigenously built by HAL. Know its weapon payload."
      }`;

const procJuly = `{
          "id": "proc_202607_p75i",
          "title": "Project 75I Submarine Deal Approval",
          "type": "Military Procurement",
          "exercise_name": "Project 75I",
          "edition": "",
          "status": "Approved",
          "start_date": "2026-07-05",
          "end_date": "2026-07-05",
          "year": "2026",
          "tier": 1,
          "participant_nations": ["India", "Germany"],
          "indian_service": ["Indian Navy"],
          "location": {
              "country": "India",
              "region": "National"
          },
          "exercise_domain": ["Submarine Warfare", "AIP Technology"],
          "equipment_used": {
              "india": ["AIP-equipped Submarines"],
              "foreign": []
          },
          "strategic_significance": "Brings Air Independent Propulsion (AIP) tech to Indian submarines for longer underwater endurance.",
          "exam_importance": "Key strategic deal. TKMS (Germany) partnering with Mazagon Dock."
      }`;

function addToExercises(month, itemStr) {
    const startIdx = dataJs.indexOf('let MILITARY_EXERCISES_LIVE');
    if (startIdx === -1) throw new Error('MILITARY_EXERCISES_LIVE not found');
    const monthIdx = dataJs.indexOf('"' + month + '": [', startIdx);
    if (monthIdx !== -1) {
        const insertPos = monthIdx + ('"' + month + '": [').length;
        dataJs = dataJs.substring(0, insertPos) + '\n      ' + itemStr + ',' + dataJs.substring(insertPos);
    } else {
        // Find the start of the object and add the month array
        const startRegex = /(let MILITARY_EXERCISES_LIVE = \{)/;
        dataJs = dataJs.replace(startRegex, `$1\n  "${month}": [\n    ${itemStr}\n  ],`);
    }
}

addToExercises("January 2026", procJan);
addToExercises("March 2026", procMarch);
addToExercises("May 2026", procMay);
addToExercises("July 2026", procJuly);


const caMarch = `{
      "id": "proc-ca-mar-1",
      "topic": "Defence Procurement",
      "text": "The Ministry of Defence finalized the landmark deal to acquire **26 Rafale-M** fighter jets from France to operate from the indigenous aircraft carrier INS Vikrant.",
      "details": {
        "winner": "Indian Navy",
        "award": "Rafale-M Deal",
        "nationality": "France (Dassault Aviation)",
        "summary": "This deal will significantly enhance the striking power of the Indian Navy's carrier battle groups."
      },
      "mcq": {
        "question": "The 26 Rafale-M fighters being procured for the Indian Navy are manufactured by which aerospace company?",
        "options": [
          "Boeing",
          "Lockheed Martin",
          "Dassault Aviation",
          "Airbus"
        ],
        "correct": 2,
        "explanation": "Dassault Aviation, a French company, manufactures the Rafale-M."
      }
    }`;

const caMay = `{
      "id": "proc-ca-may-1",
      "topic": "Defence Procurement",
      "text": "The Defence Acquisition Council (DAC) cleared the mass procurement of **Light Combat Helicopters (LCH) Prachand** for the Army and IAF, manufactured indigenously by HAL.",
      "details": {
        "winner": "Indian Armed Forces",
        "award": "LCH Prachand",
        "nationality": "India (HAL)",
        "summary": "These helicopters are specifically designed for operations at extreme high altitudes like the Siachen Glacier."
      },
      "mcq": {
        "question": "Which organization manufactures the Light Combat Helicopter (LCH) Prachand?",
        "options": [
          "DRDO",
          "HAL",
          "Tata Advanced Systems",
          "Bharat Dynamics"
        ],
        "correct": 1,
        "explanation": "LCH Prachand is designed and manufactured by Hindustan Aeronautics Limited (HAL)."
      }
    }`;

const caJuly = `{
      "id": "proc-ca-jul-1",
      "topic": "Defence Procurement",
      "text": "India and Germany moved forward on **Project 75I**, focusing on the co-development of 6 advanced conventional submarines with Air Independent Propulsion (AIP) tech.",
      "details": {
        "winner": "Indian Navy",
        "award": "Project 75I Approval",
        "nationality": "India-Germany",
        "summary": "Partnering TKMS with Mazagon Dock Shipbuilders Limited (MDL) for local production under the Strategic Partnership model."
      },
      "mcq": {
        "question": "Project 75I of the Indian Navy is related to the procurement of which of the following?",
        "options": [
          "Nuclear Submarines",
          "Aircraft Carriers",
          "Diesel-Electric Submarines with AIP",
          "Fifth Generation Fighter Aircraft"
        ],
        "correct": 2,
        "explanation": "Project 75I involves building six conventional diesel-electric submarines featuring Air Independent Propulsion (AIP) systems."
      }
    }`;

function addToCurrentAffairs(month, itemStr) {
    const startIdx = dataJs.indexOf('let CURRENT_AFFAIRS_DB');
    if (startIdx === -1) throw new Error('CURRENT_AFFAIRS_DB not found');
    let monthIdx = dataJs.indexOf('"' + month + '": [', startIdx);
    
    // ensure monthIdx is before the END of CURRENT_AFFAIRS_DB (not strictly necessary but good)
    if (monthIdx !== -1) {
        const insertPos = monthIdx + ('"' + month + '": [').length;
        dataJs = dataJs.substring(0, insertPos) + '\n      ' + itemStr + ',' + dataJs.substring(insertPos);
    } else {
        const caStartRegex = /(let CURRENT_AFFAIRS_DB = \{)/;
        if (caStartRegex.test(dataJs)) {
            dataJs = dataJs.replace(caStartRegex, `$1\n  "${month}": [\n    ${itemStr}\n  ],`);
        }
    }
}

addToCurrentAffairs("March 2026", caMarch);
addToCurrentAffairs("May 2026", caMay);
addToCurrentAffairs("July 2026", caJuly);

fs.writeFileSync('data.js', dataJs, 'utf8');
console.log('Successfully injected procurements securely.');
