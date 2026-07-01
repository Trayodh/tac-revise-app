const fs = require('fs');
const xlsx = require('xlsx');

// Note: we'll load data.js using eval or regex since it's a script file not a JSON file
const dataJsPath = './data.js';
const dataContent = fs.readFileSync(dataJsPath, 'utf8');

// A simple trick to extract the CBT_EXAMS_DATABASE variable
// Since it's attached to window or exported, we can create a fake context to evaluate it
let CBT_EXAMS_DATABASE = [];
try {
    const sandbox = { window: {}, module: { exports: {} } };
    const script = new Function('window', 'module', dataContent + '; return CBT_EXAMS_DATABASE;');
    CBT_EXAMS_DATABASE = script(sandbox.window, sandbox.module);
} catch (e) {
    console.error('Failed to parse data.js directly. Using regex fallback...');
    // Fallback if the file has too much other stuff
    const match = dataContent.match(/const CBT_EXAMS_DATABASE = (\[[\s\S]*?\]);\n/);
    if (match) {
        CBT_EXAMS_DATABASE = eval(match[1]);
    }
}

const ndaMathExams = CBT_EXAMS_DATABASE.filter(exam => exam.exam === 'NDA' && exam.subject === 'Mathematics');

let excelRows = [];
for (const exam of ndaMathExams) {
    for (const q of exam.questions) {
        excelRows.push({
            'Exam': exam.exam,
            'Mock Test Title': exam.title,
            'Topic': q.topicId || '',
            'Question': q.question,
            'Option A': q.options[0],
            'Option B': q.options[1],
            'Option C': q.options[2],
            'Option D': q.options[3],
            'Correct Option (0-3)': q.correct,
            'Explanation': q.explanation || ''
        });
    }
}

if (excelRows.length > 0) {
    const worksheet = xlsx.utils.json_to_sheet(excelRows);
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, "NDA Math Questions");

    // Save to the artifacts directory so the user can download it
    const outputPath = 'c:/Users/Trayodh Khandalkar/.gemini/antigravity-ide/brain/8ee9d83f-0c15-47b6-8266-9041308bed4b/scratch/nda_math_existing.xlsx';
    xlsx.writeFile(workbook, outputPath);
    console.log(`✅ Saved ${excelRows.length} existing NDA Math questions to ${outputPath}`);
} else {
    console.log('No NDA Math questions found in the existing database.');
}
