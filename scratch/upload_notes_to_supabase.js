require('dotenv').config();
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const https = require('https');

const SUPABASE_URL = process.env.SUPABASE_URL || "https://usjzsdvsasjtsyzrvivx.supabase.co";
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzanpzZHZzYXNqdHN5enJ2aXZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyNTUxMzksImV4cCI6MjA5NDgzMTEzOX0.8wLng1SDAhFPGvk5PQRu8XCqEWClpNPqHgEGpAx1vjk";
const BUCKET_NAME = 'topic-notes';

function uploadFile(filepath, content) {
    return new Promise((resolve, reject) => {
        const url = `${SUPABASE_URL}/storage/v1/object/${BUCKET_NAME}/${filepath}`;
        
        const options = {
            method: 'POST',
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                'Content-Type': 'text/html; charset=utf-8',
                'Content-Length': Buffer.byteLength(content)
            }
        };

        const req = https.request(url, options, (res) => {
            let body = '';
            res.on('data', chunk => body += chunk);
            res.on('end', () => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(body);
                } else if (res.statusCode === 400 && body.includes('Duplicate')) {
                    // It already exists, we should PUT
                    const putOptions = { ...options, method: 'PUT' };
                    const putReq = https.request(url, putOptions, (putRes) => {
                        let putBody = '';
                        putRes.on('data', chunk => putBody += chunk);
                        putRes.on('end', () => {
                            if (putRes.statusCode >= 200 && putRes.statusCode < 300) {
                                resolve(putBody);
                            } else {
                                reject(new Error(`PUT Status ${putRes.statusCode}: ${putBody}`));
                            }
                        });
                    });
                    putReq.on('error', e => reject(e));
                    putReq.write(content);
                    putReq.end();
                } else {
                    reject(new Error(`Status ${res.statusCode}: ${body}`));
                }
            });
        });

        req.on('error', e => reject(e));
        req.write(content);
        req.end();
    });
}

function ensureBucket() {
    return new Promise((resolve, reject) => {
        const url = `${SUPABASE_URL}/storage/v1/bucket`;
        const options = {
            method: 'POST',
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                'Content-Type': 'application/json'
            }
        };
        const payload = JSON.stringify({
            id: BUCKET_NAME,
            name: BUCKET_NAME,
            public: true
        });

        const req = https.request(url, options, (res) => {
            let body = '';
            res.on('data', chunk => body += chunk);
            res.on('end', () => {
                if (res.statusCode >= 200 && res.statusCode < 300 || body.includes('Duplicate') || body.includes('already exists')) {
                    resolve();
                } else {
                    console.log("Bucket creation status:", res.statusCode, body);
                    resolve();
                }
            });
        });

        req.on('error', e => reject(e));
        req.write(payload);
        req.end();
    });
}


async function main() {
    console.log("Loading local database files into VM sandbox...");
    const sandbox = {
      window: {},
      global: {},
      console: console,
      fetch: () => new Promise((resolve) => resolve({ text: () => Promise.resolve('') })),
      EXPANDED_NOTES_DATA: {},
      EXPERT_REVISION_DATA: {},
      NOTES_DATABASE: {}
    };
    vm.createContext(sandbox);

    // 1. Load data.js
    const dataJsPath = path.join(__dirname, '..', 'data.js');
    let dataJsContent = fs.readFileSync(dataJsPath, 'utf8');
    dataJsContent += '\n; window.NOTES_DATABASE = NOTES_DATABASE;\n';
    vm.runInContext(dataJsContent, sandbox);
    const { NOTES_DATABASE } = sandbox.window;

    // 2. Load all notes_extra files in a sandbox
    const dir = path.join(__dirname, '..');
    const notesFiles = fs.readdirSync(dir).filter(f => f.startsWith('notes_extra') && f.endsWith('.js'));

    notesFiles.forEach(f => {
      const content = fs.readFileSync(path.join(dir, f), 'utf8');
      vm.runInContext(content, sandbox);
    });

    const EXPANDED_NOTES_DATA = sandbox.EXPANDED_NOTES_DATA || {};
    console.log(`Loaded ${Object.keys(EXPANDED_NOTES_DATA).length} expanded notes.`);

    await ensureBucket();

    // 4. Map subjects/topics to prepare uploads
    const uploads = [];
    for (const subjectId in NOTES_DATABASE) {
        const subject = NOTES_DATABASE[subjectId];
        if (!subject.chapters) continue;
        
        for (const chapter of subject.chapters) {
            if (!chapter.topics) continue;
            
            for (const topic of chapter.topics) {
                if (EXPANDED_NOTES_DATA[topic.id]) {
                    // Only upload if it doesn't have the corrupted message
                    if (!EXPANDED_NOTES_DATA[topic.id].includes("currently undergoing high rate limits")) {
                        const htmlContent = EXPANDED_NOTES_DATA[topic.id];
                        uploads.push({
                            path: `${subjectId}/${topic.id}.html`,
                            content: htmlContent
                        });
                    }
                }
            }
        }
    }

    console.log(`Prepared ${uploads.length} files to upload. Starting upload...`);
    
    let successCount = 0;
    let failCount = 0;

    for (let i = 0; i < uploads.length; i++) {
        const item = uploads[i];
        
        try {
            await uploadFile(item.path, item.content);
            successCount++;
            if (successCount % 50 === 0) {
                console.log(`✅ Uploaded ${successCount}/${uploads.length} files...`);
            }
        } catch (error) {
            console.error(`❌ Failed to upload ${item.path}:`, error.message);
            failCount++;
        }
    }

    console.log(`\n🎉 Upload Complete!`);
    console.log(`Successfully uploaded: ${successCount}`);
    console.log(`Failed to upload: ${failCount}`);
}

main();
