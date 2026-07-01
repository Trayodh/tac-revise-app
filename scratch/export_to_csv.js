const fs = require('fs');
const xlsx = require('xlsx');

const wb = xlsx.readFile('scratch/cds_review_granular_v2.xlsx');
let csvData = 'Category,ID,Exam,Action,TargetSubject,Topic,Question,Options\n';

function escapeCSV(str) {
    if (str == null) return '';
    const s = str.toString().replace(/"/g, '""');
    if (s.search(/("|,|\n)/g) >= 0) return '"' + s + '"';
    return s;
}

for (const sheetName of wb.SheetNames) {
    const sheet = xlsx.utils.sheet_to_json(wb.Sheets[sheetName]);
    for (const row of sheet) {
        const line = [
            sheetName,
            row.ID,
            row.Exam,
            row.Action,
            row.TargetSubject,
            row.Topic,
            row.Question,
            row.Options
        ].map(escapeCSV).join(',');
        csvData += line + '\n';
    }
}

fs.writeFileSync('scratch/cds_review_granular_v2.csv', csvData);
console.log('Successfully generated scratch/cds_review_granular_v2.csv');
