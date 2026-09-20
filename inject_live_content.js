const fs = require('fs');
const vm = require('vm');

function injectContent() {
    console.log("Loading mega extraction result...");
    const res = JSON.parse(fs.readFileSync('live_extraction_result.json', 'utf8'));

    console.log("Injecting generated questions into question bank...");
    const bankFile = 'question_banks/cds_pyq_bank.json';
    let bank = { gs: [], english: [], maths: [], afcat: [] };
    if (fs.existsSync(bankFile)) bank = JSON.parse(fs.readFileSync(bankFile, 'utf8'));
    
    // Attempt to parse subject mapping from the response
    let subject = 'gs'; // Default fallback
    if (res.exam_mapping && res.exam_mapping.subject) {
        subject = res.exam_mapping.subject.toLowerCase();
    } else if (res.subjects) {
        if (res.subjects.main_subject) {
            subject = res.subjects.main_subject.toLowerCase();
        } else {
            const keys = Object.keys(res.subjects);
            if (keys.length > 0) subject = keys[0].toLowerCase();
        }
    }
    
    if (subject.includes('math')) subject = 'maths';
    if (subject.includes('eng')) subject = 'english';
    if (!bank[subject]) bank[subject] = [];
    
    // Inject extracted questions
    const extractedQuestions = (res.questions || []).filter(q => q && q.options && q.options.length > 0);
    bank[subject].push(...extractedQuestions);

    // Inject generated questions
    const generatedQuestions = (res.generated_questions || []).filter(q => q && q.options && q.options.length > 0);
    bank[subject].push(...generatedQuestions);

    fs.writeFileSync(bankFile, JSON.stringify(bank, null, 2));
    console.log(`Injected ${extractedQuestions.length + generatedQuestions.length} questions to ${subject} in cds_pyq_bank.json`);

    console.log("Injecting intelligence data into data.js NOTES_DATABASE...");
    let dataJs = fs.readFileSync('data.js', 'utf8');
    
    const dbEnd = dataJs.indexOf('const CBT_EXAMS_DATABASE');
    const beforeDB = dataJs.substring(0, dbEnd);
    const afterDB = dataJs.substring(dbEnd);
    
    const sandbox = {};
    vm.createContext(sandbox);
    const executable = beforeDB.replace('const NOTES_DATABASE', 'var NOTES_DATABASE');
    vm.runInContext(executable, sandbox);
    
    const notesDB = sandbox.NOTES_DATABASE;
    
    let targetSubject = 'current_affairs';
    
    // Check if the extracted subject exists as a root key in NOTES_DATABASE
    if (subject === 'gs' || subject === 'general studies') {
        // Try to find a more specific GS subject from res.subjects
        let specificGs = '';
        if (res.subjects) {
            if (res.subjects.main_subject) specificGs = res.subjects.main_subject.toLowerCase();
            else if (res.subjects.primary) specificGs = res.subjects.primary.toLowerCase();
        }
        if (notesDB[specificGs]) {
            targetSubject = specificGs;
        } else if (specificGs.includes('geo')) targetSubject = 'geography';
        else if (specificGs.includes('his')) targetSubject = 'history';
        else if (specificGs.includes('pol')) targetSubject = 'polity';
        else if (specificGs.includes('sci')) targetSubject = 'science';
    } else if (notesDB[subject]) {
        targetSubject = subject;
    } else if (subject.includes('geo')) targetSubject = 'geography';
    else if (subject.includes('his')) targetSubject = 'history';
    else if (subject.includes('pol')) targetSubject = 'polity';
    else if (subject.includes('sci')) targetSubject = 'science';
    
    if (!notesDB[targetSubject]) {
        notesDB[targetSubject] = {
            title: "Current Affairs & Strategy",
            chapters: []
        };
    }
    
    let chapter = notesDB[targetSubject].chapters.find(c => c.id === 'mega_intelligence');
    if (!chapter) {
        chapter = { id: 'mega_intelligence', title: 'Deep Video Intelligence', topics: [] };
        notesDB[targetSubject].chapters.push(chapter);
    }
    
    const title = res.video_summary && res.video_summary.Video_Title ? res.video_summary.Video_Title : "YouTube Intelligence Report";
    
    const newTopic = {
        id: 'yt_mega_' + Date.now(),
        title: title,
        type: 'intelligence',
        intelligence_data: res
    };
    
    chapter.topics.push(newTopic);
        
    const newNotesDbStr = "const NOTES_DATABASE = " + JSON.stringify(notesDB, null, 2) + ";\n\n";
    
    const finalDataJs = newNotesDbStr + afterDB;
    fs.writeFileSync('data.js', finalDataJs, 'utf8');
    console.log(`Successfully injected Mega Intelligence under ${targetSubject} in data.js!`);
}

injectContent();
