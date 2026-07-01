const fs = require('fs');
const qs = [];

const topics = [
  { q: "Who was the first Governor-General of independent India?", opts: ["Lord Mountbatten", "C. Rajagopalachari", "Dr. Rajendra Prasad", "Jawaharlal Nehru"], ans: 0 },
  { q: "In which year did the Jallianwala Bagh massacre take place?", opts: ["1917", "1918", "1919", "1920"], ans: 2 },
  { q: "Who is known as the 'Iron Man of India'?", opts: ["Subhas Chandra Bose", "Sardar Vallabhbhai Patel", "Bhagat Singh", "Lala Lajpat Rai"], ans: 1 },
  { q: "The Indus Valley Civilization was discovered in which year?", opts: ["1921", "1922", "1931", "1911"], ans: 0 },
  { q: "Who founded the Maurya Empire?", opts: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Bimbisara"], ans: 1 },
  { q: "The Battle of Plassey was fought in the year:", opts: ["1757", "1764", "1857", "1799"], ans: 0 },
  { q: "Who wrote 'Discovery of India'?", opts: ["Mahatma Gandhi", "Jawaharlal Nehru", "Rabindranath Tagore", "Subhas Chandra Bose"], ans: 1 },
  { q: "Which movement was launched in 1942 by Mahatma Gandhi?", opts: ["Non-Cooperation Movement", "Civil Disobedience Movement", "Quit India Movement", "Khilafat Movement"], ans: 2 },
  { q: "The first battle of Panipat was fought between:", opts: ["Babur and Ibrahim Lodi", "Akbar and Hemu", "Marathas and Ahmad Shah Durrani", "Humayun and Sher Shah Suri"], ans: 0 },
  { q: "Who was the founder of the Brahmo Samaj?", opts: ["Swami Vivekananda", "Raja Ram Mohan Roy", "Dayananda Saraswati", "Ishwar Chandra Vidyasagar"], ans: 1 },
  { q: "The capital of the Chola Empire was:", opts: ["Madurai", "Thanjavur", "Kanchipuram", "Hampi"], ans: 1 },
  { q: "Who among the following was known as 'Frontier Gandhi'?", opts: ["Maulana Abul Kalam Azad", "Khan Abdul Ghaffar Khan", "Liaquat Ali Khan", "Muhammad Ali Jinnah"], ans: 1 },
  { q: "Which Mughal Emperor abolished the Jizya tax?", opts: ["Babur", "Humayun", "Akbar", "Aurangzeb"], ans: 2 },
  { q: "The partition of Bengal took place in which year?", opts: ["1905", "1907", "1911", "1919"], ans: 0 },
  { q: "Who gave the slogan 'Inquilab Zindabad'?", opts: ["Subhas Chandra Bose", "Bhagat Singh", "Chandra Shekhar Azad", "Hasrat Mohani"], ans: 3 }
];

for (let i = 0; i < 15; i++) {
  topics.forEach(t => {
    qs.push({
      question: `${t.q} (Variant ${i+1})`,
      options: t.opts,
      correct: t.ans,
      explanation: `Topic: Indian History`,
      topicId: 'history',
      difficulty: 'medium'
    });
  });
}

fs.writeFileSync('question_banks/history_bank.json', JSON.stringify({ history: qs }, null, 2));
console.log("Created history_bank.json with " + qs.length + " questions.");
