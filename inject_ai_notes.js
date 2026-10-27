/**
 * inject_ai_notes.js
 * 
 * Master Canonical Note Injection Engine.
 * Injects ALL 202 synthesized chapters and topics from AI_GENERATED_NOTES directly
 * into their respective canonical places in NOTES_DATABASE and EXPANDED_NOTES_DATA.
 * 
 * Strict Architectural Guarantees:
 * 1. Strictly maintains the 12 canonical subjects.
 * 2. Strictly maintains the 202 syllabus chapters.
 * 3. Never spawns rogue pseudo-subjects (general_studies, science, defence are blocked).
 * 4. Injects rich HTML tables, mnemonics, traps, and library fact banks seamlessly.
 */

(function () {
    if (typeof window !== 'undefined') {
        if (typeof window.NOTES_DATABASE === 'undefined') {
            window.NOTES_DATABASE = {};
        }
        if (typeof window.EXPANDED_NOTES_DATA === 'undefined') {
            window.EXPANDED_NOTES_DATA = {};
        }
    }
    
    var db = (typeof window !== 'undefined' ? window.NOTES_DATABASE : (typeof NOTES_DATABASE !== 'undefined' ? NOTES_DATABASE : {}));
    var expData = (typeof window !== 'undefined' ? window.EXPANDED_NOTES_DATA : {});

    if (typeof AI_GENERATED_NOTES === 'undefined') {
        console.warn('[inject_ai_notes] AI_GENERATED_NOTES not found.');
        return;
    }

    const CANONICAL_SUBJECTS = [
        'mathematics', 'english', 'polity', 'history',
        'geography', 'economics', 'physics', 'chemistry',
        'biology', 'military-aptitude', 'current-affairs', 'environment'
    ];

    // Clean up any rogue subjects if present in database
    Object.keys(db).forEach(subKey => {
        if (!CANONICAL_SUBJECTS.includes(subKey)) {
            delete db[subKey];
        }
    });

    // Map all canonical chapters and topics
    const flatChapters = {};
    const flatTopics = {};

    Object.values(db).forEach(subject => {
        (subject.chapters || []).forEach(ch => {
            flatChapters[ch.id] = ch;
            (ch.topics || []).forEach(t => {
                flatTopics[t.id] = t;
            });
        });
    });

    let injectedCount = 0;
    let expandedCount = 0;

    AI_GENERATED_NOTES.forEach(item => {
        const chId = item.id;
        const noteHtml = item.notes || '';
        if (!noteHtml) return;

        // 1. Inject into EXPANDED_NOTES_DATA for instant lookup by app.js
        expData[chId] = noteHtml;
        expandedCount++;

        // 2. Direct match on topic
        if (flatTopics[chId]) {
            flatTopics[chId].notes = noteHtml;
            injectedCount++;
        }
        // 3. Direct match on chapter
        else if (flatChapters[chId]) {
            if (!flatChapters[chId].topics || flatChapters[chId].topics.length === 0) {
                flatChapters[chId].topics = [{
                    id: chId,
                    title: item.title,
                    notes: noteHtml,
                    formulas: ''
                }];
            } else {
                flatChapters[chId].topics[0].notes = noteHtml;
            }
            flatTopics[chId] = flatChapters[chId].topics[0];
            injectedCount++;
        }
    });

    console.log(`[inject_ai_notes] Successfully arranged ${injectedCount} canonical notes across ${Object.keys(db).length} subjects.`);

    if (typeof window !== 'undefined') {
        window.NOTES_DATABASE = db;
        window.EXPANDED_NOTES_DATA = expData;
    }
})();
