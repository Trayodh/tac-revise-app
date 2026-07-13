// Dynamically inject the AI-generated notes into the main NOTES_DATABASE

(function() {
    if (typeof NOTES_DATABASE !== 'undefined' && typeof AI_GENERATED_NOTES !== 'undefined') {
        const subjectMap = {
            'Mathematics': 'mathematics',
            'English': 'english',
            'Physics': 'physics',
            'Chemistry': 'chemistry',
            'Biology': 'biology',
            'History': 'history',
            'Geography': 'geography',
            'Polity': 'polity',
            'Economy': 'economics',
            'Current_Affairs': 'current_affairs'
        };

        AI_GENERATED_NOTES.forEach(topic => {
            const subjectKey = subjectMap[topic.subject] || topic.subject.toLowerCase();
            const subjectObj = NOTES_DATABASE[subjectKey];
            
            if (!subjectObj) {
                console.warn(`Subject ${subjectKey} not found in NOTES_DATABASE. Skipping topic: ${topic.title}`);
                return;
            }

            // Find an appropriate chapter to house these topics
            let targetChapter = null;
            if (subjectKey === 'mathematics') {
                targetChapter = subjectObj.chapters.find(c => c.title && c.title.toLowerCase().includes('arithmetic'));
            } else {
                targetChapter = subjectObj.chapters.find(c => c.title && c.title.toLowerCase().includes('pathfinder'));
            }
            
            if (!targetChapter) {
                targetChapter = {
                    id: 'pathfinder-ai-' + subjectKey,
                    title: 'Pathfinder AI Notes',
                    topics: []
                };
                if (!subjectObj.chapters) subjectObj.chapters = [];
                subjectObj.chapters.push(targetChapter);
            }

            if (!targetChapter.topics) targetChapter.topics = [];

            // Check if topic ID already exists anywhere in the subject
            let existingTopic = null;
            subjectObj.chapters.forEach(chap => {
                if (chap.topics) {
                    const found = chap.topics.find(t => t.id === topic.id);
                    if (found) existingTopic = found;
                }
            });

            if (existingTopic) {
                // If it already exists in data.js, just update the notes
                existingTopic.notes = topic.notes;
            } else {
                // If it doesn't exist, MAKE SPACE FOR IT by adding it as a distinct topic!
                targetChapter.topics.push({
                    id: topic.id,
                    title: topic.title,
                    notes: topic.notes
                });
            }
        });

        console.log(`Successfully injected ${AI_GENERATED_NOTES.length} distinct AI topics into NOTES_DATABASE.`);
    }
})();
