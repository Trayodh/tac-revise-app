const fs = require('fs');
const xlsx = require('xlsx');

try {
    const files = [
        'cds_pyq_bank.json',
        'capf_pyq_bank.json',
        'upsc_master_bank.json',
        'nda_gs_part1.json',
        'nda_gs_part2.json'
    ];

    let globalId = 0;
    const allMap = [];
    const wb = xlsx.utils.book_new();
    const sheetData = { gs: [], english: [], maths: [], afcat: [] };

    function pushToSheet(sheetName, id, action, targetSubject, topic, question, optionsArr, exam) {
        let optionsStr = '';
        if (optionsArr && optionsArr.length > 0) {
            optionsStr = optionsArr.map((o, idx) => `${String.fromCharCode(65+idx)}. ${o}`).join('   |   ');
        }
        if (!sheetData[sheetName]) sheetData[sheetName] = [];
        sheetData[sheetName].push({
            ID: id,
            Exam: exam,
            Action: action,
            TargetSubject: targetSubject,
            Topic: topic,
            Question: question,
            Options: optionsStr
        });
    }

    // Process standard files
    for (const file of files) {
        let data;
        try {
            data = JSON.parse(fs.readFileSync(`question_banks/${file}`, 'utf8'));
        } catch(e) {
            console.error(`Could not read ${file}`);
            continue;
        }
        
        let examName = file.split('_')[0].toUpperCase();
        if (examName === 'UPSC') examName = 'CSE';
        
        if (Array.isArray(data)) {
            for (const q of data) {
                allMap.push({ globalId, sourceFile: file, originalBucket: 'gs', q });
                pushToSheet('gs', globalId, 'KEEP', 'gs', q.topicId || q.subject || 'unknown', q.question, q.options, examName);
                globalId++;
            }
        } else {
            for (const bucket of Object.keys(data)) {
                if (!sheetData[bucket]) sheetData[bucket] = [];
                const arr = Array.isArray(data[bucket]) ? data[bucket] : [];
                for (const q of arr) {
                    allMap.push({ globalId, sourceFile: file, originalBucket: bucket, q });
                    pushToSheet(bucket, globalId, 'KEEP', bucket, q.topicId || q.subject || 'unknown', q.question, q.options, examName);
                    globalId++;
                }
            }
        }
    }
    
    // Process NDA Maths and AFCAT from structured_bank.json
    try {
        const structData = JSON.parse(fs.readFileSync('question_banks/structured_bank.json', 'utf8'));
        if (structData.nda && structData.nda.maths) {
            for (const [topic, arr] of Object.entries(structData.nda.maths)) {
                if (Array.isArray(arr)) {
                    for (const q of arr) {
                        allMap.push({ globalId, sourceFile: 'structured_bank.json', originalBucket: `nda.maths.${topic}`, q });
                        pushToSheet('maths', globalId, 'KEEP', 'maths', topic, q.question, q.options, 'NDA');
                        globalId++;
                    }
                }
            }
        }
        if (structData.afcat) {
            for (const [category, topics] of Object.entries(structData.afcat)) {
                if (typeof topics === 'object' && !Array.isArray(topics)) {
                    for (const [topic, arr] of Object.entries(topics)) {
                        if (Array.isArray(arr)) {
                            for (const q of arr) {
                                allMap.push({ globalId, sourceFile: 'structured_bank.json', originalBucket: `afcat.${category}.${topic}`, q });
                                pushToSheet('afcat', globalId, 'KEEP', 'afcat', topic, q.question, q.options, 'AFCAT');
                                globalId++;
                            }
                        }
                    }
                }
            }
        }
    } catch(e) {
        console.error("Could not process structured_bank.json:", e);
    }

    for (const bucket of Object.keys(sheetData)) {
        if (sheetData[bucket].length > 0) {
            const ws = xlsx.utils.json_to_sheet(sheetData[bucket]);
            ws['!cols'] = [
                {wch: 8}, {wch: 8}, {wch: 10}, {wch: 15}, {wch: 20}, {wch: 100}, {wch: 100}
            ];
            xlsx.utils.book_append_sheet(wb, ws, bucket.toUpperCase());
        }
    }

    xlsx.writeFile(wb, 'scratch/cds_review_all_v2.xlsx');
    fs.writeFileSync('scratch/original_questions_map.json', JSON.stringify(allMap, null, 2));
    console.log(`Successfully generated scratch/all_exams_review.xlsx with ${globalId} total questions.`);
} catch(e) {
    console.error("Error:", e);
}
