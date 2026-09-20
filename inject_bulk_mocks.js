const fs = require('fs');

const NEW_MOCKS = [];

for(let i=2; i<=6; i++) {
  NEW_MOCKS.push({
    id: `nda-gat-coaching-mock-${i}`,
    exam: "NDA",
    subject: "General Ability Test",
    title: `NDA GAT Mock Test ${i} (Coaching Replica)`,
    duration: 150,
    questionsCount: 15,
    rules: { correctMarks: 4.0, incorrectMarks: -1.33, examType: "NDA" },
    questions: [
      { question: `Which of the following is true regarding Newton's ${i}th law equivalents? (Conceptual)`, options: ["Action reaction", "Inertia", "F=ma", "None"], correct: 1, explanation: "Concept check on Newton's laws." },
      { question: "The velocity of sound in vacuum is:", options: ["330 m/s", "0 m/s", "3 * 10^8 m/s", "343 m/s"], correct: 1, explanation: "Sound requires a medium to travel. In vacuum, its velocity is 0." },
      { question: "What is the oxidation state of Oxygen in H2O2?", options: ["-2", "-1", "+1", "+2"], correct: 1, explanation: "In peroxides, the oxidation state of oxygen is -1." },
      { question: "Which lens is used to correct Myopia?", options: ["Convex", "Concave", "Cylindrical", "Bifocal"], correct: 1, explanation: "Concave lens diverges light rays to form image on the retina for myopic eyes." },
      { question: "Which gas is responsible for the Bhopal Gas Tragedy?", options: ["Carbon monoxide", "Phosgene", "Methyl Isocyanate", "Mustard Gas"], correct: 2, explanation: "Methyl Isocyanate (MIC) leaked from the Union Carbide plant in 1984." },
      { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Lysosome"], correct: 2, explanation: "Mitochondria generate most of the cell's supply of ATP." },
      { question: "Deficiency of Vitamin C causes:", options: ["Beri-beri", "Scurvy", "Night blindness", "Rickets"], correct: 1, explanation: "Scurvy is caused by a severe lack of vitamin C in the diet." },
      { question: "The SI unit of Electrical Resistance is:", options: ["Ampere", "Volt", "Ohm", "Watt"], correct: 2, explanation: "The ohm is the SI derived unit of electrical resistance." },
      { question: "Which planet is known as the Morning Star?", options: ["Mars", "Venus", "Jupiter", "Mercury"], correct: 1, explanation: "Venus is often called the morning or evening star because it's the brightest planet." },
      { question: "The headquarters of the World Health Organization is located in:", options: ["New York", "Geneva", "Paris", "London"], correct: 1, explanation: "WHO is headquartered in Geneva, Switzerland." },
      { question: "Which Indian state has the longest coastline?", options: ["Maharashtra", "Gujarat", "Andhra Pradesh", "Tamil Nadu"], correct: 1, explanation: "Gujarat has the longest mainland coastline in India." },
      { question: "The fundamental rights in the Indian Constitution are derived from the Constitution of:", options: ["UK", "USA", "USSR", "Ireland"], correct: 1, explanation: "Fundamental rights are inspired by the US Bill of Rights." },
      { question: "Who was the first Governor-General of independent India?", options: ["C. Rajagopalachari", "Lord Mountbatten", "Rajendra Prasad", "Jawaharlal Nehru"], correct: 1, explanation: "Lord Mountbatten served as the first Governor-General of independent India." },
      { question: "Which latitude passes through the middle of India?", options: ["Equator", "Tropic of Capricorn", "Tropic of Cancer", "Arctic Circle"], correct: 2, explanation: "The Tropic of Cancer (23.5° N) passes almost halfway through India." },
      { question: "The highest peace time gallantry award in India is:", options: ["Param Vir Chakra", "Maha Vir Chakra", "Ashoka Chakra", "Kirti Chakra"], correct: 2, explanation: "Ashoka Chakra is the highest peacetime military decoration." }
    ]
  });

  NEW_MOCKS.push({
    id: `cds-gk-coaching-mock-${i}`,
    exam: "CDS",
    subject: "General Knowledge",
    title: `CDS GK Mock Test ${i} (Coaching Replica)`,
    duration: 120,
    questionsCount: 15,
    rules: { correctMarks: 0.83, incorrectMarks: -0.27, examType: "CDS" },
    questions: [
      { question: "Who introduced the Permanent Settlement in Bengal?", options: ["Lord Cornwallis", "Lord Wellesley", "Lord Hastings", "Lord Dalhousie"], correct: 0, explanation: "The Permanent Settlement was introduced by Lord Cornwallis in 1793." },
      { question: "Article 32 of the Indian Constitution deals with:", options: ["Right to Equality", "Right to Freedom of Religion", "Right to Constitutional Remedies", "Right against Exploitation"], correct: 2, explanation: "Article 32 provides the right to Constitutional remedies (issuing writs)." },
      { question: "The Phillips Curve shows the relationship between:", options: ["Inflation and Unemployment", "Tax rate and Tax revenue", "Economic growth and Inequality", "Money supply and Interest rate"], correct: 0, explanation: "The Phillips curve illustrates an inverse relationship between inflation and unemployment." },
      { question: "The headquarter of UNESCO is at:", options: ["Rome", "Geneva", "New York", "Paris"], correct: 3, explanation: "UNESCO is headquartered in Paris, France." },
      { question: "Which of the following is not a greenhouse gas?", options: ["Carbon Dioxide", "Methane", "Nitrous Oxide", "Nitrogen"], correct: 3, explanation: "Nitrogen constitutes 78% of the atmosphere but is not a greenhouse gas." },
      { question: "The Brahmo Samaj was founded by:", options: ["Swami Vivekananda", "Raja Ram Mohan Roy", "Dayanand Saraswati", "Annie Besant"], correct: 1, explanation: "Raja Ram Mohan Roy founded the Brahmo Samaj in 1828." },
      { question: "Which schedule of the Indian Constitution contains the division of powers between Union and States?", options: ["5th", "6th", "7th", "8th"], correct: 2, explanation: "The 7th Schedule contains the Union List, State List, and Concurrent List." },
      { question: "A closed economy is an economy in which:", options: ["Only export takes place", "Money supply is fully controlled", "Deficit financing takes place", "Neither export nor import takes place"], correct: 3, explanation: "A closed economy is self-sufficient, meaning no imports are brought in and no exports are sent out." },
      { question: "Which is the largest desert in the world?", options: ["Sahara", "Arabian", "Gobi", "Antarctic Desert"], correct: 3, explanation: "The Antarctic Desert is the largest cold desert in the world." },
      { question: "Which river is known as the 'Sorrow of Bihar'?", options: ["Ganga", "Kosi", "Son", "Gandak"], correct: 1, explanation: "The Kosi River is known as the Sorrow of Bihar due to its frequent flooding." },
      { question: "The Battle of Buxar was fought in:", options: ["1757", "1764", "1761", "1773"], correct: 1, explanation: "The Battle of Buxar was fought in 1764, establishing British control over Bengal." },
      { question: "Panchayati Raj was first introduced in which state?", options: ["Andhra Pradesh", "Rajasthan", "Bihar", "Gujarat"], correct: 1, explanation: "Rajasthan was the first state to implement Panchayati Raj in Nagaur district (1959)." },
      { question: "Repo rate is the rate at which:", options: ["RBI lends to commercial banks", "Banks lend to RBI", "RBI lends to public", "Banks lend to public"], correct: 0, explanation: "Repo rate is the rate at which the central bank (RBI) lends short-term money to commercial banks." },
      { question: "Which article abolishes Untouchability?", options: ["Article 14", "Article 15", "Article 16", "Article 17"], correct: 3, explanation: "Article 17 of the Indian Constitution abolishes untouchability." },
      { question: "Which planet has the maximum number of moons?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], correct: 1, explanation: "Saturn recently surpassed Jupiter as the planet with the most recognized moons." }
    ]
  });
}

// Read app.js, find the closing of CBT_EXAMS_DATABASE and inject NEW_MOCKS
let appJs = fs.readFileSync('app.js', 'utf8');

// The array CBT_EXAMS_DATABASE ends with `\n];`
const lines = appJs.split('\\n');
let endIdx = -1;
let brackets = 0;
let started = false;

for(let i=0; i<lines.length; i++) {
  if(lines[i].includes('const CBT_EXAMS_DATABASE')) started = true;
  if(!started) continue;
  
  brackets += (lines[i].match(/\[/g) || []).length;
  brackets -= (lines[i].match(/\]/g) || []).length;
  
  if(brackets === 0 && lines[i].includes(']')) {
    endIdx = i;
    break;
  }
}

if(endIdx !== -1) {
  const newMocksString = NEW_MOCKS.map(m => JSON.stringify(m, null, 2)).join(',\\n');
  lines.splice(endIdx, 0, '  ,\\n' + newMocksString);
  fs.writeFileSync('app.js', lines.join('\\n'));
  console.log('Successfully injected 10 mock exams into app.js');
} else {
  console.log('Failed to find end of CBT_EXAMS_DATABASE');
}
