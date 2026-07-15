document.addEventListener('DOMContentLoaded', async () => {
    try {
        const metadataRes = await fetch('Pathfinder_Elite/metadata.json');
        if (!metadataRes.ok) throw new Error('Could not fetch metadata.json');
        const eliteData = await metadataRes.json();
        
        // Ensure marked is available
        while (typeof marked === 'undefined') {
            await new Promise(r => setTimeout(r, 100));
        }

        const subjectKeyMap = {
            "Mathematics": "mathematics",
            "English": "english",
            "Physics": "physics",
            "Chemistry": "chemistry",
            "Biology": "biology",
            "History": "history",
            "Geography": "geography",
            "Polity": "polity",
            "Economy": "economy",
            "Current_Affairs": "general_knowledge"
        };

        // Inject into NOTES_DATABASE
        const db = typeof NOTES_DATABASE !== 'undefined' ? NOTES_DATABASE : window.NOTES_DATABASE;
        
        for (const mod of eliteData) {
            const dbKey = subjectKeyMap[mod.subject];
            if (!dbKey || !db || !db[dbKey]) continue;

            const modPath = `Pathfinder_Elite/modules/${mod.subject}/${mod.filename}`;
            const fileRes = await fetch(modPath);
            if (!fileRes.ok) continue;
            const mdText = await fileRes.text();
            const htmlContent = (typeof parseWikiLinks === 'function') ? parseWikiLinks(mdText) : marked.parse(mdText);

            // Find or create Elite chapter
            let eliteChapter = db[dbKey].chapters.find(c => c.id === 'elite_updates');
            if (!eliteChapter) {
                eliteChapter = {
                    id: 'elite_updates',
                    title: 'Pathfinder Elite Updates',
                    topics: []
                };
                db[dbKey].chapters.unshift(eliteChapter);
            }

            eliteChapter.topics.push({
                id: `elite_${mod.subject}_${mod.filename}`,
                title: mod.topic_name,
                isEliteUpdate: true,
                notes: htmlContent,
                formulas: ""
            });
        }
        
        if (typeof renderNotesBrowser === 'function') renderNotesBrowser();

        // Load Question Armoury
        const qRes = await fetch('Pathfinder_Elite/question_armoury.json');
        if (qRes.ok) {
            const armoury = await qRes.json();
            if (!window.EXTRA_QUESTION_BANK) window.EXTRA_QUESTION_BANK = {};
            
            if (!window.EXTRA_QUESTION_BANK.gs) window.EXTRA_QUESTION_BANK.gs = [];
            if (!window.EXTRA_QUESTION_BANK.english) window.EXTRA_QUESTION_BANK.english = [];
            if (!window.EXTRA_QUESTION_BANK.maths_nda) window.EXTRA_QUESTION_BANK.maths_nda = [];

            for (const q of armoury) {
                const mappedQ = {
                    question: q.stem,
                    options: q.options.map(opt => opt.replace(/^\[[A-D]\]\s*/, '')),
                    correct: ["A", "B", "C", "D"].indexOf(q.answer) !== -1 ? ["A", "B", "C", "D"].indexOf(q.answer) : 0,
                    explanation: q.rationale,
                    topicId: "elite_update",
                    isEliteUpdate: true
                };

                if (q.subject === "English") {
                    window.EXTRA_QUESTION_BANK.english.unshift(mappedQ);
                } else if (q.subject === "Mathematics") {
                    window.EXTRA_QUESTION_BANK.maths_nda.unshift(mappedQ);
                } else {
                    window.EXTRA_QUESTION_BANK.gs.unshift(mappedQ);
                }
            }
            
            if (typeof renderQuestionBank === 'function' && typeof currentBankSubject !== 'undefined' && currentBankSubject) {
                renderQuestionBank(currentBankSubject);
            }
        }
        
    } catch (e) {
        console.error("Elite Integration failed:", e);
    }
});
