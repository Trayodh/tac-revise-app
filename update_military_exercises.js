const fs = require('fs');
const path = require('path');

const dataJsPath = path.join(__dirname, 'data.js');
let content = fs.readFileSync(dataJsPath, 'utf8');

const finalStartIdx = content.indexOf('let MILITARY_EXERCISES_LIVE =');
const archStartIdx = content.indexOf('let MILITARY_EXERCISES_ARCHIVE =');

if (finalStartIdx === -1 || archStartIdx === -1) {
  console.error("Could not locate MILITARY_EXERCISES_LIVE");
  process.exit(1);
}

const liveExpr = content.substring(finalStartIdx, archStartIdx).replace('let MILITARY_EXERCISES_LIVE =', '').trim().replace(/;$/, '');
let dbLive = eval('(' + liveExpr + ')');

// Add tier to existing
for (const month in dbLive) {
    dbLive[month].forEach(ex => {
        ex.tier = 1;
        ex.relevance = "High";
    });
}

// Add baseline data
const newExercises = [
    {
        month: "July 2026",
        data: {
          "id": "me_20260720_southern_readiness",
          "title": "Indian Navy to host Operation Southern Readiness 26-2",
          "type": "Multilateral Naval Exercise",
          "exercise_name": "Operation Southern Readiness",
          "edition": "26-2",
          "status": "Upcoming",
          "start_date": "2026-07-20",
          "end_date": "2026-07-23",
          "duration": "4 Days",
          "year": "2026",
          "tier": 1,
          "relevance": "High",
          "participant_nations": ["India", "Combined Maritime Forces (CMF)", "USA", "UK"],
          "indian_service": ["Indian Navy"],
          "foreign_services": ["CMF Naval Forces"],
          "location": {
            "city": "Kochi",
            "state": "Kerala",
            "country": "India",
            "region": "Indian Ocean Region",
            "coordinates": ""
          },
          "exercise_domain": ["Naval", "Maritime Security"],
          "equipment_used": { "india": ["INS Sunayna"], "foreign": [] },
          "strategic_significance": "Strengthening regional maritime security and interoperability with the Combined Maritime Forces.",
          "exam_importance": "Where is Op Southern Readiness 26-2 being held? Which Indian ship is participating?"
        }
    },
    {
        month: "June 2026",
        data: {
          "id": "me_20260627_rimpac_2026",
          "title": "RIMPAC 2026 Commences in Hawaii",
          "type": "Multilateral Naval Exercise",
          "exercise_name": "RIMPAC",
          "edition": "2026",
          "status": "Ongoing",
          "start_date": "2026-06-27",
          "end_date": "2026-08-01",
          "duration": "1 Month",
          "year": "2026",
          "tier": 2,
          "relevance": "Medium",
          "participant_nations": ["USA", "India", "Japan", "Australia", "South Korea", "20+ Nations"],
          "indian_service": ["Indian Navy"],
          "foreign_services": ["US Navy", "JMSDF", "Royal Australian Navy"],
          "location": {
            "city": "Honolulu",
            "state": "Hawaii",
            "country": "USA",
            "region": "Pacific Ocean",
            "coordinates": ""
          },
          "exercise_domain": ["Naval", "Multilateral"],
          "equipment_used": { "india": ["INS Shivalik", "P-8I"], "foreign": ["US Carrier Strike Group"] },
          "strategic_significance": "The world's largest international maritime warfare exercise. India's participation underscores its commitment to a free and open Indo-Pacific.",
          "exam_importance": "What is RIMPAC? Where is it held?"
        }
    },
    {
        month: "June 2026",
        data: {
          "id": "me_20260620_khaan_quest_2026",
          "title": "Indian Army Contingent Participates in Exercise KHAAN QUEST 2026",
          "type": "Multilateral Peacekeeping Exercise",
          "exercise_name": "Khaan Quest",
          "edition": "2026",
          "status": "Completed",
          "start_date": "2026-06-20",
          "end_date": "2026-07-03",
          "duration": "14 Days",
          "year": "2026",
          "tier": 1,
          "relevance": "High",
          "participant_nations": ["Mongolia", "India", "USA", "20+ Nations"],
          "indian_service": ["Indian Army"],
          "foreign_services": ["Mongolian Armed Forces", "US INDOPACOM"],
          "location": {
            "city": "Ulaanbaatar",
            "state": "",
            "country": "Mongolia",
            "region": "East Asia",
            "coordinates": ""
          },
          "exercise_domain": ["Peacekeeping", "Land"],
          "equipment_used": { "india": [], "foreign": [] },
          "strategic_significance": "Enhances interoperability for UN peacekeeping operations.",
          "exam_importance": "Which country hosts Ex Khaan Quest?"
        }
    },
    {
        month: "May 2026",
        data: {
          "id": "me_20260520_pragati_2026",
          "title": "Multilateral Exercise PRAGATI 2026 Kicks Off in Meghalaya",
          "type": "Multilateral Military Exercise",
          "exercise_name": "Pragati",
          "edition": "2026",
          "status": "Completed",
          "start_date": "2026-05-20",
          "end_date": "2026-06-03",
          "duration": "14 Days",
          "year": "2026",
          "tier": 1,
          "relevance": "High",
          "participant_nations": ["India", "12 ASEAN & Partner Nations"],
          "indian_service": ["Indian Army"],
          "foreign_services": [],
          "location": {
            "city": "Umroi",
            "state": "Meghalaya",
            "country": "India",
            "region": "South Asia",
            "coordinates": ""
          },
          "exercise_domain": ["Counter-Terrorism", "Land"],
          "equipment_used": { "india": [], "foreign": [] },
          "strategic_significance": "Bolsters regional security partnerships in counter-terrorism.",
          "exam_importance": "Where was Ex Pragati 2026 held?"
        }
    },
    {
        month: "March 2026",
        data: {
          "id": "me_20260224_dharma_guardian_2026",
          "title": "Exercise DHARMA GUARDIAN 2026",
          "type": "Bilateral Military Exercise",
          "exercise_name": "Dharma Guardian",
          "edition": "7th Edition",
          "status": "Completed",
          "start_date": "2026-02-24",
          "end_date": "2026-03-09",
          "duration": "14 Days",
          "year": "2026",
          "tier": 1,
          "relevance": "High",
          "participant_nations": ["India", "Japan"],
          "indian_service": ["Indian Army"],
          "foreign_services": ["Japan Ground Self-Defense Force"],
          "location": {
            "city": "Chaubattia",
            "state": "Uttarakhand",
            "country": "India",
            "region": "South Asia",
            "coordinates": ""
          },
          "exercise_domain": ["Land", "Counter-Terrorism"],
          "equipment_used": { "india": [], "foreign": [] },
          "strategic_significance": "Deepens bilateral military ties and interoperability in urban and semi-urban counter-terrorism operations between India and Japan.",
          "exam_importance": "Dharma Guardian is held between India and which country?"
        }
    }
];

newExercises.forEach(ex => {
    if (!dbLive[ex.month]) dbLive[ex.month] = [];
    // prevent duplicates
    if (!dbLive[ex.month].find(e => e.id === ex.data.id)) {
        dbLive[ex.month].push(ex.data);
    }
});

const formattedDbLive = "let MILITARY_EXERCISES_LIVE = " + JSON.stringify(dbLive, null, 2) + ";\n\n";

const newContent = content.substring(0, finalStartIdx) + formattedDbLive + content.substring(archStartIdx);
fs.writeFileSync(dataJsPath, newContent, 'utf8');
console.log("Successfully updated MILITARY_EXERCISES_LIVE in data.js");
