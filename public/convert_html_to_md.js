const fs = require('fs');
const TurndownService = require('turndown');

const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced'
});

// We want to keep tables as HTML because Markdown tables in turndown require an extension, 
// and marked.js handles HTML tables perfectly fine.
turndownService.keep(['table']);

function processFile(filename) {
    let txt = fs.readFileSync(filename, 'utf8');
    
    // We need to parse out the backticks block
    // EXPANDED_NOTES_DATA["key"] = `...`;
    
    // Split by EXPANDED_NOTES_DATA to isolate blocks
    const regex = /(window\.EXPANDED_NOTES_DATA\[".*?"\]\s*=\s*)`([\s\S]*?)`;/g;
    
    const newTxt = txt.replace(regex, (match, prefix, htmlContent) => {
        const md = turndownService.turndown(htmlContent);
        // Put it back in backticks
        return prefix + '`\n' + md.replace(/`/g, '\\`') + '\n`;';
    });
    
    fs.writeFileSync(filename, newTxt, 'utf8');
    console.log(`Converted ${filename} to markdown!`);
}

processFile('notes_extra_history.js');
