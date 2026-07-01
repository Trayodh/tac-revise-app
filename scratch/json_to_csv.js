const fs = require('fs');

try {
    const bank = JSON.parse(fs.readFileSync('question_banks/cds_pyq_bank.json', 'utf8'));
    
    // We will collect all questions from all buckets
    const allQuestions = [];
    
    let csv = 'ID,Action,Bucket,Topic,Question,Options\n';
    
    const escapeCsv = (str) => {
        if (str === null || str === undefined) return '""';
        return '"' + String(str).replace(/"/g, '""').replace(/\n/g, ' ') + '"';
    };

    let idCounter = 0;

    // Process all buckets
    for (const bucketName of ['gs', 'english', 'maths', 'afcat']) {
        const questions = bank[bucketName] || [];
        for (const q of questions) {
            allQuestions.push(q);
            
            let optionsStr = '';
            if (q.options && q.options.length > 0) {
                optionsStr = q.options.map((o, idx) => `${String.fromCharCode(65+idx)}. ${o}`).join('   |   ');
            }
            
            const topic = q.topicId || q.subject || 'unknown';
            
            // Output row
            csv += `${idCounter},KEEP,${bucketName},${escapeCsv(topic)},${escapeCsv(q.question)},${escapeCsv(optionsStr)}\n`;
            idCounter++;
        }
    }

    fs.writeFileSync('scratch/cds_gs_review.csv', csv);
    
    // Save the original objects so we can reconstruct them perfectly when reading the CSV back
    fs.writeFileSync('scratch/original_questions_map.json', JSON.stringify(allQuestions, null, 2));

    console.log(`Successfully generated scratch/cds_gs_review.csv with ${idCounter} questions from ALL buckets!`);

} catch (e) {
    console.error("Error creating CSV:", e);
}
