const fs = require('fs');
const https = require('https');
const path = require('path');

// Replace these with actual parsing if notes_data.js is not a module
// Since it uses 'const NOTES_DATABASE =' we can read it and eval it safely in this script context.
const notesDataPath = path.join(__dirname, 'notes_data.js');
let fileContent = fs.readFileSync(notesDataPath, 'utf8');

// We need to extract CURRENT_AFFAIRS_DB and NOTES_DATABASE
// Let's create a safe evaluation context
let CURRENT_AFFAIRS_DB = {};
let NOTES_DATABASE = {};

try {
    // Append module.exports so we can extract them
    const evalScript = fileContent + '\nmodule.exports = { CURRENT_AFFAIRS_DB, NOTES_DATABASE };';
    const tempFile = path.join(__dirname, '_temp_notes_data.js');
    fs.writeFileSync(tempFile, evalScript);
    const data = require('./_temp_notes_data');
    CURRENT_AFFAIRS_DB = data.CURRENT_AFFAIRS_DB || {};
    NOTES_DATABASE = data.NOTES_DATABASE || {};
    fs.unlinkSync(tempFile);
} catch (err) {
    console.error("Failed to load databases:", err);
    process.exit(1);
}

const API_KEY = process.env.GEMINI_API_KEY || 'AIzaSyA0g3U1Nro31TC8ow-oaaaEwZ5mpRQ7MJM';

async function getEmbeddings(texts) {
    return new Promise((resolve, reject) => {
        const payload = JSON.stringify({
            model: 'models/gemini-embedding-2',
            requests: texts.map(t => ({
                model: 'models/gemini-embedding-2',
                content: { parts: [{ text: t }] }
            }))
        });

        // Actually the batchEmbedContents API is different. 
        // We can just use the regular embedContent for batching if we use 'requests' ?
        // Or let's just do them one by one or in small loops to avoid complexity for now, or use batchEmbedContents.
        // Let's do a simple loop over texts using embedContent, or proper batching.
        // Actually, gemini batch embedding endpoint: /v1beta/models/gemini-embedding-2:batchEmbedContents
        const batchPayload = JSON.stringify({
            requests: texts.map(t => ({
                model: 'models/gemini-embedding-2',
                content: { parts: [{ text: t }] }
            }))
        });

        const options = {
            hostname: 'generativelanguage.googleapis.com',
            path: `/v1beta/models/gemini-embedding-2:batchEmbedContents?key=${API_KEY}`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(batchPayload)
            }
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    if (json.embeddings) {
                        resolve(json.embeddings.map(e => e.values));
                    } else {
                        reject(new Error("No embeddings in response: " + data));
                    }
                } catch (e) {
                    reject(e);
                }
            });
        });
        req.on('error', e => reject(e));
        req.write(batchPayload);
        req.end();
    });
}

function chunkText(text, maxLength = 500) {
    const words = text.replace(/<[^>]*>?/gm, '').split(/\s+/);
    const chunks = [];
    for (let i = 0; i < words.length; i += maxLength) {
        chunks.push(words.slice(i, i + maxLength).join(' '));
    }
    return chunks;
}

async function buildIndex() {
    const documents = [];
    const metadata = [];

    console.log("Extracting Current Affairs...");
    for (const [month, items] of Object.entries(CURRENT_AFFAIRS_DB)) {
        for (const item of items) {
            const topic = item.topic || "General";
            const text = item.text || "";
            documents.push(`Topic: ${topic}\nMonth: ${month}\nDetails: ${text}`);
            metadata.push({ month, topic, id: item.id || "" });
        }
    }

    console.log("Extracting Notes Database...");
    for (const [subjectKey, subject] of Object.entries(NOTES_DATABASE)) {
        if (!subject.chapters) continue;
        for (const chapter of subject.chapters) {
            if (!chapter.topics) continue;
            for (const topic of chapter.topics) {
                const topicTitle = topic.title || "";
                let fullText = topic.notes || "";
                if (topic.formulas) fullText += "\nFormulas: " + topic.formulas;
                
                const chunks = chunkText(fullText, 200); // 200 words per chunk
                chunks.forEach((chunk, idx) => {
                    documents.push(`Subject: ${subject.title}\nChapter: ${chapter.title}\nTopic: ${topicTitle}\nDetails: ${chunk}`);
                    metadata.push({
                        subject: subjectKey,
                        chapter: chapter.id,
                        topic: topic.id,
                        chunk_index: idx
                    });
                });
            }
        }
    }

    console.log(`Total chunks to embed: ${documents.length}`);
    
    // Scale to the full database
    const maxChunks = documents.length; 
    const docsToEmbed = documents.slice(0, maxChunks);
    const metaToEmbed = metadata.slice(0, maxChunks);

    const sleep = (ms) => new Promise(r => setTimeout(r, ms));

    const embeddings = [];
    const batchSize = 10;
    
    // Check if we already have partial progress
    const indexPath = path.join(__dirname, 'vector_index.json');
    if (fs.existsSync(indexPath)) {
        try {
            const existingData = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
            if (existingData.embeddings && existingData.embeddings.length > 0) {
                console.log(`[RESUME] Found existing vector_index.json with ${existingData.embeddings.length} embeddings.`);
                // We only resume if the chunks align (this is a simplified resume)
                if (existingData.documents[0] === docsToEmbed[0]) {
                    embeddings.push(...existingData.embeddings);
                    console.log(`[RESUME] Resuming from chunk ${embeddings.length}...`);
                }
            }
        } catch (e) {
            console.log("Could not parse existing vector_index.json, starting fresh.");
        }
    }
    
    for (let i = embeddings.length; i < docsToEmbed.length; i += batchSize) {
        const batch = docsToEmbed.slice(i, i + batchSize);
        let success = false;
        let attempts = 0;
        
        while (!success && attempts < 5) {
            try {
                console.log(`Embedding batch ${Math.floor(i/batchSize) + 1} / ${Math.ceil(docsToEmbed.length/batchSize)}...`);
                
                // Using text-embedding-004 (latest embedding model)
                const batchPayload = JSON.stringify({
                    requests: batch.map(t => ({
                        model: 'models/text-embedding-004',
                        content: { parts: [{ text: t }] }
                    }))
                });

                const options = {
                    hostname: 'generativelanguage.googleapis.com',
                    path: `/v1beta/models/text-embedding-004:batchEmbedContents?key=${API_KEY}`,
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Content-Length': Buffer.byteLength(batchPayload)
                    }
                };

                const embs = await new Promise((resolve, reject) => {
                    const req = https.request(options, (res) => {
                        let data = '';
                        res.on('data', chunk => data += chunk);
                        res.on('end', () => {
                            try {
                                const json = JSON.parse(data);
                                if (res.statusCode === 429 || json.error) {
                                    reject(new Error(`API Error: ${json.error ? json.error.message : res.statusCode}`));
                                } else if (json.embeddings) {
                                    resolve(json.embeddings.map(e => e.values));
                                } else {
                                    reject(new Error("No embeddings in response: " + data));
                                }
                            } catch (e) { reject(e); }
                        });
                    });
                    req.on('error', e => reject(e));
                    req.write(batchPayload);
                    req.end();
                });

                embeddings.push(...embs);
                success = true;
                
                // Save incrementally every 50 chunks
                if (embeddings.length % 50 === 0) {
                    fs.writeFileSync(indexPath, JSON.stringify({
                        documents: docsToEmbed.slice(0, embeddings.length),
                        metadata: metaToEmbed.slice(0, embeddings.length),
                        embeddings: embeddings
                    }, null, 2));
                    console.log(`[SAVE] Incremental save at ${embeddings.length} chunks.`);
                }
                
                // 1500 requests per minute limit = 25 per second. But for safety across other apps, wait 1s.
                await sleep(1000); 
                
            } catch (err) {
                attempts++;
                console.log(`Error at batch ${i}: ${err.message}`);
                if (err.message.includes('429') || err.message.includes('Quota') || err.message.includes('exhausted')) {
                    const backoff = 30000 * attempts; // 30s, 60s, 90s
                    console.log(`Rate limit hit. Waiting ${backoff/1000}s before retrying (Attempt ${attempts}/5)...`);
                    await sleep(backoff);
                } else {
                    console.error(`Unrecoverable error at batch ${i}.`);
                    break;
                }
            }
        }
        
        if (!success) {
            console.error(`Failed to embed batch ${i} after 5 attempts. Stopping.`);
            break;
        }
    }

    if (embeddings.length === docsToEmbed.length) {
        fs.writeFileSync(indexPath, JSON.stringify({
            documents: docsToEmbed,
            metadata: metaToEmbed,
            embeddings: embeddings
        }, null, 2));
        console.log("Saved FULL vector_index.json successfully!");
    } else {
        console.error(`Saved partial index. Embedded ${embeddings.length} out of ${docsToEmbed.length} chunks.`);
    }
}

buildIndex();

