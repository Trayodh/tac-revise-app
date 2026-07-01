const fs = require('fs');
const xlsx = require('xlsx');
const { parse } = require('csv-parse/sync');

function generateCompleteReview() {
    console.log("Loading previous review data...");
    let oldMap = {};
    try {
        const fileContent = fs.readFileSync('scratch/cds_review_granular.csv', 'utf8');
        const records = parse(fileContent, {
            columns: true,
            skip_empty_lines: true
        });
        for (const row of records) {
            if (row.Question && row.Action && row.Action !== 'DELETE') {
                oldMap[row.Question.trim()] = {
                    Action: row.Action,
                    Exam: row.Exam
                };
            }
        }
        console.log(`Loaded ${Object.keys(oldMap).length} retained manual edits from previous review.`);
    } catch (e) {
        console.log("No previous review file found or couldn't parse. Proceeding without previous edits.");
    }

    const files = fs.readdirSync('question_banks').filter(f => f.endsWith('.json') && f !== 'structured_bank.json');
    console.log(`Found ${files.length} raw source files.`);

    let globalId = 0;
    const allMap = [];
    const sheetData = {};

    function isMathsQ(q) {
        if (!q || !q.question) return false;
        const txt = (q.question + ' ' + (q.options||[]).join(' ')).toLowerCase();
        
        // Strong maths keywords
        if (txt.match(/\b(triangle|polygon|equation|derivative|integer|matrix|probability|logarithm|trigonometry|tangent|secant|cosecant)\b/i)) return true;
        if (txt.match(/\b(sin|cos|tan|cot|sec|cosec)\b/i)) return true;
        if (txt.includes('x^2') || txt.includes('x^3') || txt.includes('y^2') || txt.includes('y^3')) return true;
        if (txt.includes('what is the value of x') || txt.includes('what is the value of y')) return true;
        if (txt.includes('sum of the roots') || txt.includes('product of the roots')) return true;

        const hasFormulaOpts = (q.options||[]).filter(o => /[\u03c0\u221a\u00b2\u00b3\u2074\u00b9]/.test(o) || /\d+[a-z]\d*/.test(o.toLowerCase().trim())).length >= 2;
        if (hasFormulaOpts) return true;
        
        return false;
    }

    function getGranularSheet(file, bucket, q) {
        const f = file.toLowerCase();
        const b = (bucket || '').toLowerCase();
        let base = 'GS';
        
        if (f.includes('afcat') || b.includes('afcat')) base = 'AFCAT';
        else if (f.includes('math') || b.includes('math') || isMathsQ(q)) base = 'MATHS';
        else if (f.includes('english') || b.includes('english')) base = 'ENG';
        
        const t = (q.topicId || q.subject || q.category || bucket || '').toLowerCase();
        
        if (base === 'MATHS') {
            if (t.includes('trigo')) return 'MATHS_Trigo';
            if (t.includes('algebra') || t.includes('equation') || t.includes('complex') || t.includes('matrix') || t.includes('determinant')) return 'MATHS_Algebra';
            if (t.includes('geometry') || t.includes('conic') || t.includes('circle') || t.includes('vector') || t.includes('3d')) return 'MATHS_Geometry';
            if (t.includes('calculus') || t.includes('derivative') || t.includes('limit') || t.includes('integration') || t.includes('differential') || t.includes('functions')) return 'MATHS_Calculus';
            if (t.includes('prob') || t.includes('stat') || t.includes('permut') || t.includes('combin')) return 'MATHS_ProbStats';
            if (t.includes('arithmetic') || t.includes('number')) return 'MATHS_Arithmetic';
            return 'MATHS_Misc';
        }
        
        if (base === 'ENG') {
            if (t.includes('gramm') || t.includes('senten') || t.includes('cloze')) return 'ENG_Grammar';
            if (t.includes('vocab') || t.includes('idiom') || t.includes('antonym') || t.includes('synonym') || t.includes('word')) return 'ENG_Vocab';
            if (t.includes('comp') || t.includes('read')) return 'ENG_Compreh';
            return 'ENG_Misc';
        }
        
        if (base === 'GS') {
            if (t.includes('hist')) return 'GS_History';
            if (t.includes('polity')) return 'GS_Polity';
            if (t.includes('geog') || t.includes('env') || t.includes('agri')) return 'GS_Geography';
            if (t.includes('phys')) return 'GS_Physics';
            if (t.includes('chem')) return 'GS_Chemistry';
            if (t.includes('bio') || t.includes('science')) return 'GS_Biology';
            if (t.includes('eco')) return 'GS_Economy';
            if (t.includes('current') || t.includes('sport')) return 'GS_CurAffairs';
            return 'GS_Misc';
        }
        
        return 'AFCAT_Misc';
    }

    function pushToSheet(sheetName, id, action, targetSubject, topic, question, optionsArr, exam) {
        let optionsStr = '';
        if (optionsArr && optionsArr.length > 0) {
            optionsStr = optionsArr.map((o, idx) => `${String.fromCharCode(65+idx)}. ${o}`).join('   |   ');
        }
        
        const qText = (question || '').trim();
        let finalAction = action;
        let finalExam = exam;

        if (oldMap[qText]) {
            finalAction = oldMap[qText].Action;
            finalExam = oldMap[qText].Exam;
        }

        if (!sheetData[sheetName]) sheetData[sheetName] = [];
        sheetData[sheetName].push({
            ID: id,
            Exam: finalExam,
            Action: finalAction,
            TargetSubject: targetSubject,
            Topic: topic,
            Question: question,
            Options: optionsStr
        });
    }

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
        if (!['CDS', 'NDA', 'AFCAT', 'CAPF', 'CSE'].includes(examName)) {
            // guess from name or default to ALL
            examName = 'ALL';
        }
        
        if (Array.isArray(data)) {
            for (const q of data) {
                const sheetName = getGranularSheet(file, '', q);
                allMap.push({ globalId, sourceFile: file, originalBucket: '', q });
                pushToSheet(sheetName, globalId, 'KEEP', sheetName, q.topicId || q.subject || 'unknown', q.question, q.options, examName);
                globalId++;
            }
        } else {
            for (const bucket of Object.keys(data)) {
                const arr = Array.isArray(data[bucket]) ? data[bucket] : [];
                for (const q of arr) {
                    const sheetName = getGranularSheet(file, bucket, q);
                    allMap.push({ globalId, sourceFile: file, originalBucket: bucket, q });
                    pushToSheet(sheetName, globalId, 'KEEP', bucket, q.topicId || q.subject || 'unknown', q.question, q.options, examName);
                    globalId++;
                }
            }
        }
    }

    // Export to Excel
    const wb = xlsx.utils.book_new();
    // Sort sheet names alphabetically for easy finding
    const sortedSheets = Object.keys(sheetData).sort();
    for (const sheetName of sortedSheets) {
        const rows = sheetData[sheetName];
        if (rows.length === 0) continue;
        const ws = xlsx.utils.json_to_sheet(rows);
        
        // Auto-width
        const colWidths = [
            { wch: 10 }, // ID
            { wch: 10 }, // Exam
            { wch: 10 }, // Action
            { wch: 20 }, // TargetSubject
            { wch: 20 }, // Topic
            { wch: 100 }, // Question
            { wch: 80 }  // Options
        ];
        ws['!cols'] = colWidths;
        
        xlsx.utils.book_append_sheet(wb, ws, sheetName);
        console.log(`Generated sheet ${sheetName} with ${rows.length} questions.`);
    }

    xlsx.writeFile(wb, 'scratch/cds_review_granular_v2.xlsx');
    console.log(`Successfully generated scratch/cds_review_granular_v2.xlsx with ${globalId} total questions.`);

    // Save map
    fs.writeFileSync('scratch/complete_questions_map.json', JSON.stringify(allMap, null, 2));
    console.log(`Saved mapping to scratch/complete_questions_map.json`);
}

generateCompleteReview();
