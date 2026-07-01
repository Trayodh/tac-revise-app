const fs = require('fs');
const vm = require('vm');

let dataJs = fs.readFileSync('data.js', 'utf8');
const dbEnd = dataJs.indexOf('const CBT_EXAMS_DATABASE');
const beforeDB = dataJs.substring(0, dbEnd);
const afterDB = dataJs.substring(dbEnd);

const sandbox = {};
vm.createContext(sandbox);
const executable = beforeDB.replace('const NOTES_DATABASE', 'var NOTES_DATABASE');
vm.runInContext(executable, sandbox);
const notesDB = sandbox.NOTES_DATABASE;

let sourceChapter = notesDB.current_affairs.chapters.find(c => c.id === 'mega_intelligence');
if (sourceChapter) {
    // Find the polity video, e.g. "Indian Polity" or check topics
    let targetIndex = -1;
    for (let i = 0; i < sourceChapter.topics.length; i++) {
        const topic = sourceChapter.topics[i];
        if (topic.intelligence_data && topic.intelligence_data.subjects && topic.intelligence_data.subjects.primary === 'Indian Polity') {
            targetIndex = i;
            break;
        }
    }
    
    if (targetIndex !== -1) {
        const polityTopic = sourceChapter.topics.splice(targetIndex, 1)[0];
        console.log(`Found Polity topic: ${polityTopic.title}. Moving it to Polity...`);
        
        let targetChapter = notesDB.polity.chapters.find(c => c.id === 'mega_intelligence');
        if (!targetChapter) {
            targetChapter = { id: 'mega_intelligence', title: 'Deep Video Intelligence', topics: [] };
            notesDB.polity.chapters.push(targetChapter);
        }
        targetChapter.topics.push(polityTopic);
        console.log("Moved successfully.");
    } else {
        console.log("Could not find the Polity topic in Current Affairs.");
    }
}

const newNotesDbStr = "const NOTES_DATABASE = " + JSON.stringify(notesDB, null, 2) + ";\n\n";
fs.writeFileSync('data.js', newNotesDbStr + afterDB, 'utf8');
console.log("data.js updated.");
