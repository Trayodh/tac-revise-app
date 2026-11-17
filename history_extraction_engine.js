require('dotenv').config();
const fs = require('fs');
const path = require('path');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
    console.error("FATAL: GEMINI_API_KEY not found in .env");
    process.exit(1);
}

const CHUNKS_DIR = path.join(__dirname, 'pathfinder_ocr_results', 'General_Studies');
const STATE_FILE = path.join(__dirname, 'scratch', 'history_extraction_state.json');
const NOTES_OUTPUT = path.join(__dirname, 'extracted_clean_history_notes.html');
const MCQS_OUTPUT = path.join(__dirname, 'quarantined_history_mcqs.json');
const SYSTEM_PROMPT_PATH = path.join(__dirname, 'HISTORY_EXTRACTION_PROMPT.md');

let systemPrompt = '';
try {
    systemPrompt = fs.readFileSync(SYSTEM_PROMPT_PATH, 'utf8');
} catch (e) {
    console.error("Could not read HISTORY_EXTRACTION_PROMPT.md", e);
    process.exit(1);
}

const CEREBRAS_API_KEY = process.env.CEREBRAS_API_KEY;
const GROQ_API_KEY = process.env.GROQ_API_KEY;

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function generateWithFallback(userPrompt, retryDepth = 0) {
  const providers = [
    {
      name: 'Gemini',
      available: !!GEMINI_API_KEY,
      call: async () => {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            system_instruction: { parts: [{ text: systemPrompt }] },
            contents: [{ parts: [{ text: userPrompt }] }],
            generationConfig: { temperature: 0.1, maxOutputTokens: 8192, response_mime_type: "application/json" }
          })
        });
        const data = await res.json();
        if (!res.ok) throw Object.assign(new Error(data.error?.message || res.status), { status: res.status });
        return data.candidates?.[0]?.content?.parts?.[0]?.text || '{}';
      }
    },
    {
      name: 'Cerebras',
      available: !!CEREBRAS_API_KEY,
      call: async () => {
        const url = `https://api.cerebras.ai/v1/chat/completions`;
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${CEREBRAS_API_KEY}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: 'gpt-oss-120b',
            messages: [
              { role: 'system', content: systemPrompt },
              { role: 'user', content: userPrompt }
            ],
            response_format: { type: "json_object" },
            max_completion_tokens: 8192,
            temperature: 0.1
          })
        });
        const data = await res.json();
        if (!res.ok) throw Object.assign(new Error(data.error?.message || res.status), { status: res.status });
        return data.choices[0].message.content || '{}';
      }
    },
    /* {
      name: 'Groq',
      available: !!GROQ_API_KEY,
      call: async () => {
        const url = `https://api.groq.com/openai/v1/chat/completions`;
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${GROQ_API_KEY}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
            messages: [
              { role: 'system', content: systemPrompt },
              { role: 'user', content: userPrompt }
            ],
            response_format: { type: "json_object" },
            max_completion_tokens: 8192,
            temperature: 0.1
          })
        });
        const data = await res.json();
        if (!res.ok) throw Object.assign(new Error(data.error?.message || res.status), { status: res.status });
        return data.choices[0].message.content || '{}';
      }
    } */
  ];

  const available = providers.filter(p => p.available);

  for (let i = 0; i < available.length; i++) {
    const provider = available[i];
    try {
      process.stdout.write(`  → Trying ${provider.name}... `);
      const text = await provider.call();
      console.log(`✓ (${provider.name})`);
      return text;
    } catch (err) {
      const is429 = err.status === 429 || String(err.message).includes('429');
      console.log(`✗ [${provider.name} ${is429 ? 'rate-limited' : 'failed'}: ${err.message.slice(0,80)}]`);
      if (is429 && i < available.length - 1) {
        continue;
      } else if (is429 && i === available.length - 1) {
        if (retryDepth < 3) {
          const waitMs = 20000 + retryDepth * 15000;
          console.log(`  All providers rate-limited. Waiting ${waitMs/1000}s then retrying chain...`);
          await sleep(waitMs);
          return generateWithFallback(userPrompt, retryDepth + 1);
        }
      }
    }
  }

  console.error('  ✗✗ All providers exhausted. Skipping.');
  return null;
}

async function runEngine() {
    let state = {};
    if (fs.existsSync(STATE_FILE)) {
        state = JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'));
    }
    
    let quarantinedMcqs = [];
    if (fs.existsSync(MCQS_OUTPUT)) {
        quarantinedMcqs = JSON.parse(fs.readFileSync(MCQS_OUTPUT, 'utf8'));
    }

    // Read all chunks
    if (!fs.existsSync(CHUNKS_DIR)) {
        console.error("Chunks directory not found:", CHUNKS_DIR);
        process.exit(1);
    }
    
    let files = fs.readdirSync(CHUNKS_DIR).filter(f => f.endsWith('.txt'));
    files.sort(); // chunk_000.txt to chunk_067.txt
    
    console.log(`Found ${files.length} chunk files in General_Studies.`);
    
    let notesOutputBuffer = '';

    const OUTPUT_SCHEMA = `
CRITICAL INSTRUCTION: Output MUST be a valid JSON object matching the exact schema below. Do not use Markdown wrappers.
{
  "content_type": "NOTE_CONTENT" | "MCQ_CONTENT" | "NON_HISTORY" | "NOISE",
  "chapter_topic": "String (Suggested chapter or topic name, e.g. 'Modern India - Revolt of 1857'. Empty if not applicable)",
  "history_notes_html": "String (Extracted and structured history notes in HTML format following the rules in the system prompt. ONLY include this if content is history. Do not include MCQs here.)",
  "quarantined_mcqs": [
    {
      "question": "The isolated question text",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "answer": "The correct answer key if present",
      "explanation": "Any question-specific explanation if present"
    }
  ]
}
`;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        
        if (state[file]) {
            console.log(`[${i+1}/${files.length}] Skipping ${file} (Already processed)`);
            continue;
        }
        
        console.log(`\n[${i+1}/${files.length}] Processing ${file}...`);
        const chunkContent = fs.readFileSync(path.join(CHUNKS_DIR, file), 'utf8');
        
        if (chunkContent.trim().length < 50) {
            console.log(` -> Skipping ${file} (Too short, likely noise)`);
            state[file] = { status: 'skipped', reason: 'too_short' };
            fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
            continue;
        }

        const promptText = `${OUTPUT_SCHEMA}\n\nSOURCE TEXT FOR EXTRACTION:\n\n${chunkContent}`;
        
        const jsonResponse = await generateWithFallback(promptText);
        
        if (!jsonResponse) {
            console.log(` -> FAILED to process ${file}. Pausing execution.`);
            break; // Stop on failure so user can check
        }
        
        try {
            let parsed = JSON.parse(jsonResponse.trim());
            
            console.log(` -> Type: ${parsed.content_type} | Topic: ${parsed.chapter_topic || 'N/A'}`);
            
            if (parsed.history_notes_html && parsed.history_notes_html.length > 50) {
                console.log(` -> Extracted ${parsed.history_notes_html.length} chars of history notes.`);
                notesOutputBuffer += `\n\n<!-- SOURCE: ${file} | TOPIC: ${parsed.chapter_topic} -->\n`;
                notesOutputBuffer += parsed.history_notes_html;
            }
            
            if (parsed.quarantined_mcqs && parsed.quarantined_mcqs.length > 0) {
                console.log(` -> Quarantined ${parsed.quarantined_mcqs.length} MCQs.`);
                parsed.quarantined_mcqs.forEach(q => q.source = file);
                quarantinedMcqs.push(...parsed.quarantined_mcqs);
            }
            
            // Mark as done
            state[file] = { 
                status: 'success', 
                type: parsed.content_type, 
                mcqs: parsed.quarantined_mcqs?.length || 0 
            };
            
            // Save state immediately
            fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
            if (notesOutputBuffer.length > 0) {
                fs.appendFileSync(NOTES_OUTPUT, notesOutputBuffer, 'utf8');
                notesOutputBuffer = '';
            }
            fs.writeFileSync(MCQS_OUTPUT, JSON.stringify(quarantinedMcqs, null, 2));
            
        } catch (e) {
            console.error(` -> JSON Parse Error on ${file}:`, e.message);
            // Save failed response to debug
            fs.writeFileSync(path.join(__dirname, 'scratch', `failed_${file}.json`), jsonResponse, 'utf8');
            state[file] = { status: 'failed', reason: 'json_parse_error' };
            fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
        }
        
        // Anti-rate-limit sleep
        await sleep(3000);
    }
    
    console.log(`\n🎉 Extraction process completed (or caught up). Check output files!`);
}

runEngine();
