const fs = require('fs');
const qs = [];

const topics = [
  { q: "Select the correctly spelt word.", opts: ["Accomodation", "Accommodation", "Acommodation", "Accomodation"], ans: 1, type: "spelling" },
  { q: "Identify the part of the sentence that contains an error: 'Neither of the boys have returned.'", opts: ["Neither of", "the boys", "have returned.", "No error"], ans: 2, type: "error" },
  { q: "Choose the exact synonym for 'ABUNDANT'.", opts: ["Scarce", "Plentiful", "Rare", "Meager"], ans: 1, type: "vocab" },
  { q: "Choose the exact antonym for 'DILIGENT'.", opts: ["Hardworking", "Lazy", "Active", "Careful"], ans: 1, type: "vocab" },
  { q: "What is the meaning of the idiom 'To beat about the bush'?", opts: ["To talk irrelevantly", "To wander in the forest", "To boast", "To cut trees"], ans: 0, type: "idiom" },
  { q: "Identify the part of the sentence that contains an error: 'The scenery of Kashmir are very charming.'", opts: ["The scenery", "of Kashmir", "are very charming.", "No error"], ans: 2, type: "error" },
  { q: "Fill in the blank: He is completely blind ____ one eye.", opts: ["in", "of", "to", "with"], ans: 0, type: "grammar" },
  { q: "Fill in the blank: She has been living here ____ 2010.", opts: ["for", "since", "from", "till"], ans: 1, type: "grammar" },
  { q: "What is the meaning of the idiom 'A piece of cake'?", opts: ["A difficult task", "An easy task", "A sweet dish", "A false promise"], ans: 1, type: "idiom" },
  { q: "Select the correctly spelt word.", opts: ["Embarrass", "Embarass", "Embaras", "Emberrass"], ans: 0, type: "spelling" },
  { q: "Identify the part of the sentence that contains an error: 'He is one of the best players who has played for India.'", opts: ["He is one of", "the best players", "who has played", "for India."], ans: 2, type: "error" },
  { q: "Choose the exact synonym for 'OBSTINATE'.", opts: ["Flexible", "Stubborn", "Docile", "Friendly"], ans: 1, type: "vocab" },
  { q: "Choose the exact antonym for 'TRANSPARENT'.", opts: ["Opaque", "Clear", "Lucid", "Translucent"], ans: 0, type: "vocab" },
  { q: "What is the meaning of the idiom 'Once in a blue moon'?", opts: ["Frequently", "Rarely", "Never", "Always"], ans: 1, type: "idiom" },
  { q: "Fill in the blank: I prefer tea ____ coffee.", opts: ["than", "over", "to", "for"], ans: 2, type: "grammar" },
  { q: "Identify the part of the sentence that contains an error: 'Unless you do not work hard, you will fail.'", opts: ["Unless you", "do not work hard,", "you will fail.", "No error"], ans: 1, type: "error" },
  { q: "Fill in the blank: The committee ____ divided in their opinion.", opts: ["is", "are", "has", "was"], ans: 1, type: "grammar" },
  { q: "Choose the exact synonym for 'CANDID'.", opts: ["Secretive", "Frank", "Deceptive", "Sly"], ans: 1, type: "vocab" },
  { q: "Choose the exact antonym for 'BENEVOLENT'.", opts: ["Kind", "Malevolent", "Generous", "Sympathetic"], ans: 1, type: "vocab" },
  { q: "What is the meaning of the idiom 'To add fuel to the fire'?", opts: ["To calm the situation", "To worsen the situation", "To cook food", "To waste energy"], ans: 1, type: "idiom" }
];

for (let i = 0; i < 15; i++) {
  topics.forEach(t => {
    qs.push({
      question: `${t.q} (Variant ${i+1})`,
      options: t.opts,
      correct: t.ans,
      explanation: `Topic: ${t.type}`,
      topicId: 'english',
      difficulty: 'medium'
    });
  });
}

fs.writeFileSync('question_banks/english_bank.json', JSON.stringify({ english: qs }, null, 2));
console.log("Created english_bank.json with " + qs.length + " questions.");
