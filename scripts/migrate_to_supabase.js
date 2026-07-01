require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Configure these securely or in .env
// We need the SERVICE ROLE KEY to bypass RLS and bulk insert safely.
const supabaseUrl = process.env.SUPABASE_URL || 'YOUR_SUPABASE_URL';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'YOUR_SUPABASE_SERVICE_ROLE_KEY';

const supabase = createClient(supabaseUrl, supabaseKey);
const DATA_JS_PATH = path.join(__dirname, '../data.js');

async function main() {
    if (supabaseUrl === 'YOUR_SUPABASE_URL' || supabaseKey === 'YOUR_SUPABASE_SERVICE_ROLE_KEY') {
        console.error("❌ Please provide SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your .env file.");
        process.exit(1);
    }

    console.log("Loading CBT_EXAMS_DATABASE from data.js...");
    const dataContent = fs.readFileSync(DATA_JS_PATH, 'utf8');
    const match = dataContent.match(/const CBT_EXAMS_DATABASE = (\[[\s\S]*\]);/);
    if (!match) {
        console.error("Could not parse CBT_EXAMS_DATABASE");
        return;
    }
    const db = eval(match[1]);
    
    console.log(`Found ${db.length} exams. Beginning migration...`);

    let totalQuestionsInserted = 0;

    for (let exam of db) {
        console.log(`\nInserting Exam: ${exam.title} (ID: ${exam.id})`);
        
        const { data: examData, error: examError } = await supabase
            .from('exams')
            .upsert({
                id: exam.id, // Using existing UUIDs to maintain relations
                title: exam.title,
                duration: exam.duration,
                total_marks: exam.totalMarks,
                instructions: exam.instructions || null,
                sections: exam.sections || null,
                negative_marking: exam.negativeMarking || 0,
                type: exam.type || 'mock'
            }, { onConflict: 'id' })
            .select();

        if (examError) {
            console.error(`Failed to insert exam ${exam.title}:`, examError.message);
            continue;
        }

        console.log(`✅ Exam inserted. Inserting ${exam.questions.length} questions...`);

        // Batch insert questions (Supabase limit is usually ~1000 per request, we do 100 for safety)
        const batchSize = 100;
        let qCount = 0;
        
        for (let i = 0; i < exam.questions.length; i += batchSize) {
            const batch = exam.questions.slice(i, i + batchSize).map(q => ({
                id: q.id || undefined, // If question has an ID, use it, else let Supabase generate UUID
                exam_id: exam.id,
                question: q.question,
                options: q.options,
                correct: q.correct,
                explanation: q.explanation || null,
                topic_id: q.topicId || 'general'
            }));

            const { error: qError } = await supabase
                .from('questions')
                .upsert(batch, { onConflict: 'id', ignoreDuplicates: true }); // Avoid duplicating if rerun

            if (qError) {
                console.error(`Failed to insert question batch for ${exam.title}:`, qError.message);
            } else {
                qCount += batch.length;
            }
        }
        console.log(`✅ Inserted ${qCount} questions for ${exam.title}.`);
        totalQuestionsInserted += qCount;
    }

    console.log(`\n🎉 Migration Complete! Inserted ${db.length} exams and ${totalQuestionsInserted} questions.`);
}

main();
