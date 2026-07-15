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

            // Distribute into actual chapters based on keyword matching
            let targetChapter = null;
            const topicNameLower = mod.topic_name.toLowerCase();
            
            for (const ch of db[dbKey].chapters) {
                 const chTitle = ch.title.toLowerCase();
                 if (dbKey === 'history') {
                     if (topicNameLower.includes('ancient') && chTitle.includes('ancient')) { targetChapter = ch; break; }
                     if (topicNameLower.includes('medieval') && chTitle.includes('medieval')) { targetChapter = ch; break; }
                     if (topicNameLower.includes('modern') && chTitle.includes('modern')) { targetChapter = ch; break; }
                     if (topicNameLower.includes('world') && chTitle.includes('world')) { targetChapter = ch; break; }
                 } else if (dbKey === 'geography') {
                     if ((topicNameLower.includes('world') || topicNameLower.includes('cosmology')) && chTitle.includes('physical')) { targetChapter = ch; break; }
                     if (topicNameLower.includes('indian') && chTitle.includes('indian')) { targetChapter = ch; break; }
                     if (topicNameLower.includes('environmental') && (chTitle.includes('ecology') || chTitle.includes('environment') || chTitle.includes('physical'))) { targetChapter = ch; break; }
                 } else if (dbKey === 'polity') {
                     if ((topicNameLower.includes('framework') || topicNameLower.includes('rights')) && chTitle.includes('framework')) { targetChapter = ch; break; }
                     if ((topicNameLower.includes('executive') || topicNameLower.includes('judiciary')) && (chTitle.includes('executive') || chTitle.includes('union'))) { targetChapter = ch; break; }
                     if (topicNameLower.includes('state') && chTitle.includes('state')) { targetChapter = ch; break; }
                 }
            }
            
            // Fallback for math and others, or if no keyword match
            if (!targetChapter && db[dbKey].chapters.length > 0) {
                 targetChapter = db[dbKey].chapters[0];
            }
            
            if (targetChapter) {
                targetChapter.topics.push({
                    id: `elite_${mod.subject}_${mod.filename}`,
                    title: mod.topic_name.replace(/and MCQs/gi, '').replace(/Revision MCQs/gi, '').replace(/Core/gi, '').trim(),
                    isEliteUpdate: true,
                    notes: htmlContent,
                    formulas: ""
                });
            }
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
