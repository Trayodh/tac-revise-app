const fs = require('fs');
const files = fs.readdirSync('question_banks').filter(f => f.endsWith('.json') && f !== 'structured_bank.json');
const topics = new Set();
for (const file of files) {
    const data = JSON.parse(fs.readFileSync(`question_banks/${file}`, 'utf8'));
    if (Array.isArray(data)) {
        data.forEach(q => topics.add(q.topicId || q.subject || q.category || 'unknown'));
    } else {
        for (const b in data) {
            const arr = Array.isArray(data[b]) ? data[b] : [];
            arr.forEach(q => topics.add(q.topicId || q.subject || q.category || b || 'unknown'));
        }
    }
}
console.log(Array.from(topics).sort());
