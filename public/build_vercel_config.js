const fs = require('fs');
const path = require('path');

// Simulate scanning the notes and question armoury
function generateConfigs() {
    console.log("Generating Vercel Configurations...");
    
    // metadata.json
    const metadata = {
        project: "Defence Exams Revision App",
        build_version: "2.0.0-Syllabus-Engine",
        total_ingested_items: 0, // Should dynamically pull from armoury lengths
        total_outputted_files: 0,
        validation_status: "PENDING"
    };
    
    try {
        if (fs.existsSync('question_armoury.json')) {
            const armoury = JSON.parse(fs.readFileSync('question_armoury.json', 'utf8'));
            const numQuestions = armoury.questions ? armoury.questions.length : 0;
            metadata.total_ingested_items = numQuestions;
            metadata.total_outputted_files = numQuestions;
            metadata.validation_status = "SUCCESS";
        }
    } catch (e) {
        console.error("Could not read question armoury", e);
    }

    fs.writeFileSync("metadata.json", JSON.stringify(metadata, null, 4));
    console.log("-> Created metadata.json");

    // toc.json
    const toc = [
        {
            subject: "Mathematics",
            chapters: ["Number System", "Sequence and Series", "HCF and LCM of Numbers"]
        },
        {
            subject: "General English",
            chapters: ["Spotting the Errors", "Vocabulary"]
        }
    ];
    fs.writeFileSync("toc.json", JSON.stringify(toc, null, 4));
    console.log("-> Created toc.json");

    // chapters.csv
    let csvData = "Subject,Chapter,Exam_Tags\n";
    toc.forEach(subjectGroup => {
        subjectGroup.chapters.forEach(chapter => {
            // Static mapping for NDA & CDS
            csvData += `${subjectGroup.subject},${chapter},NDA|CDS\n`;
        });
    });
    fs.writeFileSync("chapters.csv", csvData);
    console.log("-> Created chapters.csv");
    
    console.log("Vercel Configurations built successfully!");
}

generateConfigs();
