(function() {
    if (typeof AI_GENERATED_NOTES === 'undefined' || typeof NOTES_DATABASE === 'undefined') {
        console.warn('AI_GENERATED_NOTES or NOTES_DATABASE not found.');
        return;
    }

    // Helper: strip MCQ blocks
    function stripMCQs(htmlNotes) {
        let cleaned = htmlNotes
            .replace(/GENERAL\s+STUDIES\s+\d+\.[\s\S]*?(?=<\/|$)/gi, '')
            .replace(/\d+\.\s+(?:(?!\d+\.\s).)+?(?:\([a-d]\)[^<(]{0,250}){3,}/gs, '')
            .replace(/\([a-d]\)\s*[^<(]{5,200}(?:\([a-d]\)\s*[^<(]{5,200}){2,}/g, '')
            .replace(/Consider the following statements?[\s\S]{0,800}?(?:Select|Choose|Which of the above)/gi, '')
            .replace(/Which of the following[\s\S]{0,400}?(?:\([a-d]\)[^<(]{0,200}){2,}/gi, '')
            .replace(/Match the following[\s\S]{0,600}?(?:\([a-d]\)[^<(]{0,200}){2,}/gi, '')
            .replace(/Select the correct answer using (the )?codes? given below\.?\s*/gi, '')
            .replace(/Codes?\s*:?\s*(?:\([a-d]\)[^<\n]{0,100}\n?){2,}/gi, '')
            .replace(/(?:Answer|Ans)[\s:.]+[A-D]\b[^\n]*/gi, '')
            .trim();
        return cleaned;
    }

    // Create a flat map of all chapters across all subjects
    const flatChapters = {};
    Object.values(NOTES_DATABASE).forEach(subject => {
        if (subject.chapters) {
            subject.chapters.forEach(ch => {
                flatChapters[ch.id] = ch;
            });
        }
    });

    let injectedCount = 0;

    AI_GENERATED_NOTES.forEach(topic => {
        // Find the exact chapter using topic.id
        const chapter = flatChapters[topic.id];
        if (!chapter) {
            console.warn(`[inject_ai_notes] Could not find chapter for id: ${topic.id}`);
            return;
        }

        if (!chapter.topics) chapter.topics = [];
        
        const cleanNotes = stripMCQs(topic.notes || '');

        // Overwrite the existing topic notes, or push if it doesn't exist
        const existingTopic = chapter.topics.find(t => t.id === topic.id);
        if (existingTopic) {
            if (cleanNotes && !existingTopic.notes.includes(cleanNotes.substring(0, 80))) {
                existingTopic.notes = '\n<div style="margin-bottom: 24px; padding: 16px; border: 2px solid var(--accent); border-radius: 8px; background: rgba(34, 197, 94, 0.05);"><h4 style="color: var(--accent); margin-top: 0; border-bottom: 1px solid var(--border); padding-bottom: 8px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style="display:inline; vertical-align:middle; margin-right:6px;" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm.5 11.5a.5.5 0 0 1-1 0V7.707L6.354 8.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 7.707V11.5z"/></svg>NEW AI-GENERATED NOTES</h4>' + cleanNotes + '</div>\n' + existingTopic.notes;
            }
        } else {
            chapter.topics.push({
                id: topic.id,
                title: topic.title.replace(/\s*and MCQs\s*/gi, '').replace(/\s*MCQs\s*/gi, '').trim(),
                notes: cleanNotes,
                formulas: ''
            });
        }
        injectedCount++;
    });

    // Remove any leftover AI chapters
    Object.values(NOTES_DATABASE).forEach(subject => {
        if (!subject.chapters) return;
        subject.chapters = subject.chapters.filter(ch => !ch.id || !ch.id.startsWith('pathfinder-ai-'));
    });

    if (typeof DIAGRAMS_DB !== 'undefined') {
        let diagramCount = 0;
        Object.keys(DIAGRAMS_DB).forEach(key => {
            const parts = key.split('__');
            if (parts.length < 2) return;
            const subjectKey = parts[0];
            const chapterId = parts[1];
            const subjectObj = NOTES_DATABASE[subjectKey];
            if (!subjectObj || !subjectObj.chapters) return;
            const chapter = subjectObj.chapters.find(ch => ch.id === chapterId);
            if (!chapter || !chapter.topics || chapter.topics.length === 0) return;

            const diagramHtml = DIAGRAMS_DB[key];
            if (!chapter.topics[0].notes.includes('<!-- DIAGRAMS_DB_INJECTED -->')) {
                chapter.topics[0].notes = '<!-- DIAGRAMS_DB_INJECTED -->\n' + diagramHtml + '\n' + chapter.topics[0].notes;
                diagramCount++;
            }
        });
        console.log(`[inject_ai_notes] Injected ${diagramCount} diagrams from DIAGRAMS_DB.`);
    }

    console.log(`[inject_ai_notes] Done. Injected ${injectedCount} topics perfectly.`);
})();
