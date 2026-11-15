const fs = require('fs');
const path = require('path');
const https = require('https');

// Load index once into memory
let vectorIndex = null;
const INDEX_PATH = path.join(__dirname, 'vector_index.json');

function loadIndex() {
    if (vectorIndex) return vectorIndex;
    try {
        if (fs.existsSync(INDEX_PATH)) {
            const data = fs.readFileSync(INDEX_PATH, 'utf8');
            vectorIndex = JSON.parse(data);
            console.log(`[RAG] Loaded vector index with ${vectorIndex.documents.length} chunks.`);
        } else {
            console.warn('[RAG] vector_index.json not found. Please run the python build script.');
        }
    } catch (e) {
        console.error('[RAG] Error loading vector index:', e);
    }
    return vectorIndex;
}

function cosineSimilarity(vecA, vecB) {
    let dotProduct = 0.0;
    let normA = 0.0;
    let normB = 0.0;
    for (let i = 0; i < vecA.length; i++) {
        dotProduct += vecA[i] * vecB[i];
        normA += vecA[i] * vecA[i];
        normB += vecB[i] * vecB[i];
    }
    if (normA === 0 || normB === 0) return 0;
    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

async function getEmbedding(text, apiKey) {
    return new Promise((resolve, reject) => {
        const payload = JSON.stringify({
            model: 'models/gemini-embedding-2',
            content: { parts: [{ text: text }] }
        });

        const options = {
            hostname: 'generativelanguage.googleapis.com',
            path: `/v1beta/models/gemini-embedding-2:embedContent?key=${apiKey}`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(payload)
            }
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    if (json.embedding && json.embedding.values) {
                        resolve(json.embedding.values);
                    } else {
                        console.error("[RAG] API Error in Embeddings:", json);
                        reject(new Error("Failed to get embedding from Gemini"));
                    }
                } catch (e) {
                    reject(e);
                }
            });
        });

        req.on('error', (e) => reject(e));
        req.write(payload);
        req.end();
    });
}

async function searchRAG(query, apiKey, topK = 3) {
    const index = loadIndex();
    if (!index) throw new Error("Index not loaded");

    console.log(`[RAG] Embedding query: "${query}"`);
    const queryEmb = await getEmbedding(query, apiKey);

    console.log(`[RAG] Calculating similarities...`);
    const results = [];
    for (let i = 0; i < index.embeddings.length; i++) {
        const sim = cosineSimilarity(queryEmb, index.embeddings[i]);
        results.push({
            score: sim,
            document: index.documents[i],
            metadata: index.metadata[i]
        });
    }

    // Sort descending by score
    results.sort((a, b) => b.score - a.score);
    
    // Reranking Stage (Phase 6 placeholder) - currently just taking top K
    return results.slice(0, topK);
}

module.exports = {
    searchRAG,
    loadIndex
};
