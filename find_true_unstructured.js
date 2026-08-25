const fs = require('fs');

function checkFile(filename, variableName) {
    if (!fs.existsSync(filename)) return;
    const data = fs.readFileSync(filename, 'utf8');
    
    // We can evaluate it to get the object directly.
    try {
        // Strip out 'export const' or 'const' or 'let' to just evaluate the expression
        let cleanData = data.replace(/^(export\s+)?(const|let|var)\s+\w+\s*=\s*/, '');
        // Sometimes the file ends with a semicolon
        cleanData = cleanData.replace(/;\s*$/, '');
        
        let obj;
        // eval requires parentheses around object literals
        if (cleanData.trim().startsWith('{')) {
            obj = eval('(' + cleanData + ')');
        } else if (cleanData.trim().startsWith('[')) {
            obj = eval(cleanData);
        }
        
        let items = [];
        if (Array.isArray(obj)) items = obj;
        else if (obj.subjects) items = obj.subjects.flatMap(s => s.chapters).flatMap(c => c.topics);
        else if (Array.isArray(obj[Object.keys(obj)[0]])) items = obj[Object.keys(obj)[0]].flatMap(c => c.topics);
        
        items.forEach(topic => {
            if (!topic || !topic.notes) return;
            const n = topic.notes;
            const hasMarkdownHeaders = (n.match(/#+\s/g) || []).length > 0;
            const hasHtmlHeaders = (n.match(/<h[1-6][^>]*>/g) || []).length > 0; // The revision card has <h3> and <h4>
            
            // The problem is that the notes are just raw text.
            // A raw text block won't have <p> tags, <ul> tags, or \n# tags.
            // BUT the revision card at the top DOES have <h3> and <h4>!
            // Let's strip out the revision card header part and look at the REST of the text.
            
            // The revision card usually ends with </h4>\r\n\r\n
            let contentWithoutCard = n.replace(/<div class="revision-card"[\s\S]*?<\/h4>\s*/, '');
            
            const pCount = (contentWithoutCard.match(/<p>/g) || []).length;
            const ulCount = (contentWithoutCard.match(/<ul>/g) || []).length;
            const liCount = (contentWithoutCard.match(/<li>/g) || []).length;
            const mdHCount = (contentWithoutCard.match(/#+\s/g) || []).length;
            
            // If there's no structure inside the actual content
            if (pCount === 0 && ulCount === 0 && liCount === 0 && mdHCount === 0 && contentWithoutCard.length > 500) {
                console.log(filename, '->', topic.title, '(Length:', contentWithoutCard.length, ')');
            }
        });
    } catch (e) {
        console.log('Error parsing', filename, e.message);
    }
}

checkFile('ai_generated_notes.js', 'AI_GENERATED_NOTES');
checkFile('notes_data.js', 'NOTES_DATA');
checkFile('notes_data_exam_focused.js', 'EXAM_FOCUSED_NOTES');
checkFile('notes_data_upgraded.js', 'UPGRADED_NOTES');
