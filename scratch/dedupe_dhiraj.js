const fs = require('fs');
let code = fs.readFileSync('../data.js', 'utf8');

// The file has:
// const CURRENT_AFFAIRS_DATABASE = {
//   ...
// };
// Let's parse it securely.
const startIndex = code.indexOf('const CURRENT_AFFAIRS_DATABASE = {');
let endIndex = -1;
let openBrackets = 0;
let inString = false;
let escapeNext = false;
for (let i = startIndex + 'const CURRENT_AFFAIRS_DATABASE = '.length; i < code.length; i++) {
  let char = code[i];
  if (escapeNext) {
    escapeNext = false;
    continue;
  }
  if (char === '\\') {
    escapeNext = true;
    continue;
  }
  if (char === '"') {
    inString = !inString;
    continue;
  }
  if (!inString) {
    if (char === '{') openBrackets++;
    if (char === '}') {
      openBrackets--;
      if (openBrackets === 0) {
        endIndex = i + 1;
        break;
      }
    }
  }
}

if (endIndex !== -1) {
  let dbString = code.substring(startIndex + 'const CURRENT_AFFAIRS_DATABASE = '.length, endIndex);
  let db = JSON.parse(dbString);
  let july = db['July 2026'];
  console.log('Total July items before:', july.length);
  
  let nonDhiraj = july.filter(item => !item.text.includes('Dhiraj Seth'));
  console.log('Items without Dhiraj Seth:', nonDhiraj.length);
  
  let newDhiraj = {
      "id": "ca_live_2026_07_01_0",
      "topic": "Military Appointments",
      "topicColor": "#b45309",
      "summary": "General Dhiraj Seth has officially assumed charge as the 31st Chief of the Army Staff (COAS) of the Indian Army, succeeding General Upendra Dwivedi and outlining his strategic 'VIJAY' vision for modernization and self-reliance.",
      "text": "<strong>General Dhiraj Seth</strong> has assumed command as the <mark style='background:rgba(255,210,0,0.25);padding:1px 4px;border-radius:3px;'>31st Chief of the Army Staff (COAS)</mark> of the <strong>Indian Army</strong>. His tenure begins with the unveiling of the <strong>'VIJAY' vision</strong>, which prioritizes technological absorption, indigenous defense production under <mark style='background:rgba(255,210,0,0.25);padding:1px 4px;border-radius:3px;'>Atmanirbhar Bharat</mark>, and enhanced jointness among the tri-services. This transition comes at a critical juncture of theaterisation reforms and ongoing border standoffs.",
      "quickSummary": "General Dhiraj Seth took charge as the 31st Chief of the Army Staff (COAS), succeeding General Upendra Dwivedi. He introduced the 'VIJAY' vision, focusing on modernization, self-reliance, and tri-service integration to address contemporary security challenges.",
      "detailedAnalysis": "The appointment of General Dhiraj Seth as the 31st COAS marks a pivotal moment in [[Indian Army Modernisation]]. Under his 'VIJAY' (Vigorous, Integrated, Joint, Agile, and Yield-oriented) vision, the Indian Army aims to accelerate the transition from a manpower-intensive force to a technology-enabled one. This involves the integration of niche technologies like artificial intelligence, quantum computing, and unmanned aerial systems (UAS). Historically, the role of the COAS has evolved from the Commander-in-Chief post-independence to a key member of the Chiefs of Staff Committee, now working closely with the [[Chief of Defence Staff]] (CDS) to implement theaterisation. The strategic significance lies in addressing the dual-front threat from China and Pakistan, requiring robust border management along the Line of Actual Control (LAC) and Line of Control (LoC). A key challenge (weakness) remains the slow pace of capital acquisition and bureaucratic delays in indigenous defense production, contrasted with the advantage of a highly battle-hardened infantry. In comparison to global peers like the US Army or China's PLA, which have highly integrated theater commands, the Indian Army is still in the transition phase of establishing joint theater commands. Future upgrades under this tenure will focus on the induction of [[F-INSAS]] (Futuristic Infantry Soldier As a System), [[Zorawar Light Tank]], and advanced swarm drone systems to ensure tactical superiority.",
      "backgroundContext": "The appointment of the Chief of the Army Staff is governed by the government's discretion, typically following the seniority principle, though exceptions have occurred historically. The transition from General Upendra Dwivedi to General Dhiraj Seth comes amidst structural reforms initiated after the creation of the post of [[Chief of Defence Staff]] (CDS) in 2019. The Indian Army has been actively restructuring its combat formations into Integrated Battle Groups (IBGs) and upgrading its infrastructure along the northern borders following the 2020 Galwan Valley clash, highlighting the need for agile leadership and modern warfare capabilities.",
      "stakeholders": [
        "Indian Army",
        "Ministry of Defence, Government of India",
        "Chief of Defence Staff (CDS)",
        "General Dhiraj Seth (Chief of the Army Staff)"
      ],
      "examRelevanceMatrix": {
        "NDA": "Very High",
        "CDS": "Very High",
        "AFCAT": "High",
        "CAPF": "High",
        "UPSC": "Very High"
      },
      "relatedTopics": [
        "[[Chief of Defence Staff]]",
        "[[Theaterisation of Armed Forces]]",
        "[[Atmanirbhar Bharat in Defence]]",
        "[[Indian Army Modernisation]]"
      ],
      "potentialQuestions": {
        "shortAnswers": [
          "What is the 'VIJAY' vision outlined by the newly appointed COAS?",
          "How does the appointment of the new COAS impact the ongoing theaterisation process?"
        ],
        "interviewQuestions": [
          "What are the major challenges the new Chief of the Army Staff will face in the context of the border standoff with China?",
          "How important is indigenization for the Indian Army's modernization goals?"
        ],
        "ssbDiscussionTopics": [
          "Atmanirbhar Bharat in Defence: Rhetoric vs Reality",
          "The role of technology in future warfare for the Indian Army."
        ]
      },
      "upscHighlights": [
        "Transition of leadership to General Dhiraj Seth as 31st COAS.",
        "Focus on 'VIJAY' vision: Vigorous, Integrated, Joint, Agile, and Yield-oriented.",
        "Emphasis on Atmanirbhar Bharat and technological absorption.",
        "Context of theaterisation and border standoffs."
      ],
      "institutionalContext": "Ministry of Defence / Indian Army",
      "strategicImportance": "Leadership changes in the Armed Forces are crucial for understanding strategic direction, modernization plans, and defense policies.",
      "originalSource": "Official Press Release / Defence Ministry",
      "publicationDate": "2026-07-01",
      "lastUpdatedDate": "2026-07-02",
      "verificationStatus": "Verified",
      "relatedOfficialDocuments": "MoD Press Release on COAS Appointment",
      "mcq": {
        "question": "What does the 'VIJAY' vision, outlined by the 31st Chief of the Army Staff General Dhiraj Seth, primarily focus on?",
        "options": [
          "A) Expanding the size of the infantry.",
          "B) Technological absorption, indigenous defense production, and jointness.",
          "C) Withdrawing troops from the northern borders.",
          "D) Relying exclusively on imported defense equipment."
        ],
        "correct": 1,
        "explanation": "The 'VIJAY' vision emphasizes technological absorption, indigenous defense production under Atmanirbhar Bharat, and enhanced jointness among the tri-services to modernize the Indian Army."
      }
    };
  
  nonDhiraj.unshift(newDhiraj);
  db['July 2026'] = nonDhiraj;
  
  let newDbString = JSON.stringify(db, null, 2);
  let newCode = code.substring(0, startIndex + 'const CURRENT_AFFAIRS_DATABASE = '.length) + newDbString + code.substring(endIndex);
  
  fs.writeFileSync('../data.js', newCode, 'utf8');
  console.log('Successfully updated data.js');
} else {
  console.log('Failed to parse CURRENT_AFFAIRS_DATABASE object.');
}
