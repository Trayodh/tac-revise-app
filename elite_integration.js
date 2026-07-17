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
            let mdText = await fileRes.text();
            
            // Strip MCQs to keep only notes and visual diagrams
            let practiceIndex = mdText.indexOf('\\nPRACTICE EXERCISE');
            if (practiceIndex === -1) {
                practiceIndex = mdText.indexOf('PRACTICE EXERCISE');
            }
            
            if (practiceIndex !== -1) {
                const endDivIndex = mdText.indexOf('</div>', practiceIndex);
                if (endDivIndex !== -1) {
                    mdText = mdText.substring(0, practiceIndex) + '\\n</div>\\n' + mdText.substring(endDivIndex + 6);
                } else {
                    mdText = mdText.substring(0, practiceIndex) + '\\n</div>\\n';
                }
            }

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

        
    } catch (e) {
        console.error("Elite Integration failed:", e);
    }
});
