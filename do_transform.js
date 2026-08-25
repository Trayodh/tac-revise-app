const fs = require('fs');

function transformFile(filename, outputFilename) {
    if (!fs.existsSync(filename)) return;
    
    let content = fs.readFileSync(filename, 'utf8');

    // Extract NOTES_DATABASE part using eval
    // Replace const with var to avoid reassignment issues in some cases
    let evalContent = content
        .replace(/const NOTES_DATABASE/g, 'var NOTES_DATABASE')
        .replace(/let CURRENT_AFFAIRS_DB/g, 'var CURRENT_AFFAIRS_DB')
        .replace(/const CURRENT_AFFAIRS_LIVE/g, 'var CURRENT_AFFAIRS_LIVE')
        .replace(/let CURRENT_AFFAIRS_LIVE/g, 'var CURRENT_AFFAIRS_LIVE')
        .replace(/let CBT_EXAMS_DATABASE/g, 'var CBT_EXAMS_DATABASE')
        .replace(/const CBT_EXAMS_DATABASE/g, 'var CBT_EXAMS_DATABASE')
        .replace(/module\.exports.*$/g, '');

    // Execute the code in this context to get the variable
    eval(evalContent);

    if (typeof NOTES_DATABASE === 'undefined') {
        console.log(`NOTES_DATABASE not found in ${filename}`);
        return;
    }

    // Transform
    for (const subjectId in NOTES_DATABASE) {
        const subject = NOTES_DATABASE[subjectId];
        if (subject.chapters) {
            let newChapters = [];
            subject.chapters.forEach(chapter => {
                if (chapter.topics && chapter.topics.length > 0) {
                    chapter.topics.forEach((topic, idx) => {
                        newChapters.push({
                            id: topic.id, // using topic id for chapter id
                            title: topic.title, // using topic title for chapter title
                            icon: topic.icon || chapter.icon || 'fa-solid fa-book-open',
                            topics: [ topic ] // Retain the format as requested
                        });
                    });
                } else {
                    newChapters.push(chapter);
                }
            });
            subject.chapters = newChapters;
        }
    }

    let finalContent = "";
    if (typeof CURRENT_AFFAIRS_LIVE !== 'undefined') {
        finalContent += `let CURRENT_AFFAIRS_LIVE = ${JSON.stringify(CURRENT_AFFAIRS_LIVE, null, 2)};\n\n`;
    }
    if (typeof CURRENT_AFFAIRS_DB !== 'undefined') {
        finalContent += `let CURRENT_AFFAIRS_DB = ${JSON.stringify(CURRENT_AFFAIRS_DB, null, 2)};\n\n`;
    }
    if (typeof CBT_EXAMS_DATABASE !== 'undefined') {
        finalContent += `const CBT_EXAMS_DATABASE = ${JSON.stringify(CBT_EXAMS_DATABASE, null, 2)};\n\n`;
    }
    finalContent += `const NOTES_DATABASE = ${JSON.stringify(NOTES_DATABASE, null, 2)};\n\n`;

    // Append module.exports if it was present
    if (content.includes('module.exports')) {
        let exportLine = content.match(/module\.exports.*$/m);
        if(exportLine) {
            finalContent += exportLine[0] + "\n";
        }
    }

    fs.writeFileSync(outputFilename, finalContent);
    console.log(`Transformed ${filename} into ${outputFilename}`);
}

const filesToTransform = [
    'notes_data_exam_focused.js',
    'notes_data_upgraded.js',
    'notes_data.js',
    'data.js',
    'data_upgraded.js'
];

filesToTransform.forEach(file => {
    transformFile(file, file); // Overwrite in place
});
