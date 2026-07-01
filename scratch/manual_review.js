const fs = require('fs');
const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const BANK_PATH = 'question_banks/cds_pyq_bank.json';
const STATE_PATH = 'scratch/manual_review_state.json';

const rl = readline.createInterface({ input, output });

async function main() {
    console.log("Loading bank...");
    let bank;
    try {
        bank = JSON.parse(fs.readFileSync(BANK_PATH, 'utf8'));
    } catch (e) {
        console.error(`Failed to load bank at ${BANK_PATH}:`, e.message);
        process.exit(1);
    }
    
    let state = { currentIndex: 0 };
    if (fs.existsSync(STATE_PATH)) {
        state = JSON.parse(fs.readFileSync(STATE_PATH, 'utf8'));
        console.log(`Resuming from question index ${state.currentIndex + 1}...`);
    }

    if (!bank.gs || bank.gs.length === 0) {
        console.log("No GS questions found in bank.");
        process.exit(0);
    }

    let modified = false;

    while (state.currentIndex < bank.gs.length) {
        const q = bank.gs[state.currentIndex];
        console.clear();
        console.log(`=== Reviewing GS Question ${state.currentIndex + 1} of ${bank.gs.length} ===`);
        console.log(`\n[Question]: ${q.question}\n`);
        
        if (q.options && q.options.length > 0) {
            q.options.forEach((opt, idx) => {
                console.log(`  ${String.fromCharCode(65 + idx)}. ${opt}`);
            });
        }
        
        console.log(`\n---------------------------------------------------`);
        const answer = await rl.question('Keep this question? (y = keep / n = delete / q = quit): ');
        
        const ans = answer.trim().toLowerCase();
        
        if (ans === 'q' || ans === 'quit') {
            console.log("\nSaving progress and quitting...");
            break;
        } else if (ans === 'n' || ans === 'no') {
            bank.gs.splice(state.currentIndex, 1);
            modified = true;
            // Array shifted left, so we don't increment currentIndex
        } else {
            // Treat 'y' or any unknown input as a safe "Keep"
            state.currentIndex++;
        }
        
        // Save progress after every decision so no work is lost
        if (modified) {
             fs.writeFileSync(BANK_PATH, JSON.stringify(bank, null, 2));
             modified = false;
        }
        fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2));
    }

    if (state.currentIndex >= bank.gs.length) {
        console.log(`\nCongratulations! You have reviewed all ${bank.gs.length} questions.`);
        // Reset state so they can start over next time if they want
        fs.writeFileSync(STATE_PATH, JSON.stringify({ currentIndex: 0 }, null, 2));
    } else {
        console.log(`\nReview session ended. Progress saved at question ${state.currentIndex + 1}.`);
    }
    
    rl.close();
}

main().catch(e => {
    console.error("An error occurred:", e);
    rl.close();
});
