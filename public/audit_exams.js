const fs = require('fs');

let s = fs.readFileSync('data.js', 'utf8');
s = s.replace(/const CBT_EXAMS_DATABASE/g, 'var CBT_EXAMS_DATABASE');

const vm = require('vm');
const context = {};
vm.createContext(context);
vm.runInContext(s, context);

const exams = context.CBT_EXAMS_DATABASE;

// --- CLASSIFICATION HEURISTICS ---

const MATH_KEYWORDS = [
  /\bprofit\b/i, /\bloss\b/i, /\bcost price\b/i, /\bselling price\b/i,
  /\binterest\b/i, /\bprincipal\b/i, /\bcompound interest\b/i, /\bsimple interest\b/i,
  /\bratio\b/i, /\bproportion\b/i, /\bpercentage\b/i, /\bdiscount\b/i,
  /\bHCF\b/, /\bLCM\b/, /\bgcd\b/i,
  /\btriangle\b/i, /\bcircle\b/i, /\brectangle\b/i, /\bsquare\b/i,
  /\barea\b/i, /\bperimeter\b/i, /\bvolume\b/i, /\bdiameter\b/i, /\bradius\b/i,
  /\balgebra\b/i, /\bequation\b/i, /\bquadratic\b/i, /\bpolynomial\b/i,
  /\bsin\b/, /\bcos\b/, /\btan\b/, /\btrigonometr/i,
  /\bgeometry\b/i, /\bcoordinate\b/i,
  /\bspeed\b/i, /\btime\b.*\bdistance\b/i, /\bdistance\b.*\btime\b/i,
  /\btrain\b.*\blong\b/i, /\btrain\b.*\bspeed\b/i,
  /\bpipe\b.*\bfill\b/i, /\bcistern\b/i,
  /\bwork\b.*\bdays\b/i, /\bdays\b.*\bwork\b/i,
  /\baverage\b/i, /\bmedian\b/i, /\bmean\b/i,
  /\bfactorial\b/i, /\bpermutation\b/i, /\bcombination\b/i,
  /\bprobability\b/i,
  /\bdivisible\b/i, /\bremainder\b/i, /\bquotient\b/i,
  /\bfraction\b/i, /\bdecimal\b/i,
  /\bsurface area\b/i, /\bcone\b/i, /\bcylinder\b/i, /\bsphere\b/i, /\bcuboid\b/i,
  /\barithmetic progression\b/i, /\bgeometric progression\b/i,
  /\bA\.P\.\b/, /\bG\.P\.\b/,
  /\bx\s*[\+\-\*\/\=]\s*\d/i, /\d\s*[\+\-\*\/]\s*\d\s*=/, // equation patterns
  /\bsolve\b.*\bx\b/i,
  /\bhow many\b.*\b(litres|meters|km|hours|minutes|days|workers|men|women)\b/i,
  /\bfind the value\b/i, /\bwhat is the value\b/i,
  /₹|Rs\.?\s*\d/i, /` \d+/,
  /\d+\s*%/,
];

const ENGLISH_KEYWORDS = [
  /\bsynonym\b/i, /\bantonym\b/i, /\bidiom\b/i, /\bphrase\b/i,
  /\bgrammar\b/i, /\btense\b/i, /\bverb\b/i, /\bnoun\b/i, /\badjective\b/i, /\badverb\b/i,
  /\bspelling\b/i, /\bcomprehension\b/i, /\bpassage\b/i,
  /\bfill in the blank\b/i, /\bcorrect sentence\b/i,
  /\bmeaning of\b/i, /\bopposite of\b/i,
  /\bone word substitution\b/i,
  /\bparts? of speech\b/i,
  /\bactive voice\b/i, /\bpassive voice\b/i,
  /\bdirect speech\b/i, /\bindirect speech\b/i,
  /\bcloze\b/i,
  /\bprecis\b/i,
];

const GK_KEYWORDS = [
  /\bwho is\b/i, /\bwho was\b/i, /\bwho founded\b/i,
  /\bwhich country\b/i, /\bwhich state\b/i, /\bcapital of\b/i,
  /\bpresident\b/i, /\bprime minister\b/i, /\bchief minister\b/i,
  /\bconstitution\b/i, /\barticle\s*\d/i, /\bamendment\b/i,
  /\bindependence\b/i, /\bbattle of\b/i, /\btreaty of\b/i,
  /\briver\b/i, /\bmountain\b/i, /\bplateau\b/i,
  /\bplanet\b/i, /\bsolar system\b/i,
  /\bscientist\b/i, /\bdiscovered\b/i, /\binvented\b/i,
  /\baward\b/i, /\bnoble prize\b/i, /\bnobel\b/i,
  /\bISRO\b/, /\bNASA\b/, /\bDRDO\b/, /\bUNO\b/, /\bUNESCO\b/,
  /\bolympic\b/i, /\bworld cup\b/i,
  /\bvitamin\b/i, /\bmineral\b/i, /\bdisease\b/i,
  /\bwar\b/i, /\brevolt\b/i, /\bmovement\b/i,
];

function classifyQuestion(q) {
    const text = q.question;
    let mathScore = 0, engScore = 0, gkScore = 0;

    for (const kw of MATH_KEYWORDS) {
        if (kw.test(text)) mathScore++;
    }
    for (const kw of ENGLISH_KEYWORDS) {
        if (kw.test(text)) engScore++;
    }
    for (const kw of GK_KEYWORDS) {
        if (kw.test(text)) gkScore++;
    }

    // Check options too for math-like content (numeric options)
    let numericOptions = 0;
    for (const opt of q.options) {
        if (/^[\s₹`Rs\.]*[\d\.\-\/\s\,\%]+$/.test(opt.trim())) {
            numericOptions++;
        }
    }
    if (numericOptions >= 3) mathScore += 3;

    return { math: mathScore, english: engScore, gk: gkScore };
}

function getExamType(examId) {
    if (examId.includes('math')) return 'MATH';
    if (examId.includes('english')) return 'ENGLISH';
    if (examId.includes('gk')) return 'GK';
    if (examId.includes('gat')) return 'GAT'; // NDA GAT has English + GK + some basic math
    if (examId.includes('afcat')) return 'AFCAT'; // AFCAT has English + GK + Math
    return 'UNKNOWN';
}

// --- MAIN AUDIT ---

const flagged = {};

for (const exam of exams) {
    const examType = getExamType(exam.id);
    const issues = [];

    for (let i = 0; i < exam.questions.length; i++) {
        const q = exam.questions[i];
        const scores = classifyQuestion(q);
        let issue = null;

        if (examType === 'GK') {
            // GK papers should NOT have math or English questions
            if (scores.math >= 3 && scores.gk < 2) {
                issue = `MATH in GK paper (math=${scores.math}, gk=${scores.gk})`;
            }
            if (scores.english >= 2 && scores.gk < 1) {
                issue = `ENGLISH in GK paper (eng=${scores.english}, gk=${scores.gk})`;
            }
        } else if (examType === 'ENGLISH') {
            // English papers should NOT have math or GK questions
            if (scores.math >= 3 && scores.english < 1) {
                issue = `MATH in ENGLISH paper (math=${scores.math}, eng=${scores.english})`;
            }
            if (scores.gk >= 3 && scores.english < 1) {
                issue = `GK in ENGLISH paper (gk=${scores.gk}, eng=${scores.english})`;
            }
        } else if (examType === 'MATH') {
            // Math papers should NOT have English or pure GK questions
            if (scores.english >= 2 && scores.math < 1) {
                issue = `ENGLISH in MATH paper (eng=${scores.english}, math=${scores.math})`;
            }
            if (scores.gk >= 3 && scores.math < 1) {
                issue = `GK in MATH paper (gk=${scores.gk}, math=${scores.math})`;
            }
        }
        // NDA GAT and AFCAT are combined, so we skip strict checking for them

        if (issue) {
            issues.push({
                qIndex: i + 1,
                question: q.question.substring(0, 150) + (q.question.length > 150 ? '...' : ''),
                options: q.options,
                correct: q.correct,
                topicId: q.topicId || 'NO_TOPIC',
                issue: issue
            });
        }
    }

    if (issues.length > 0) {
        flagged[exam.id] = { title: exam.title, issues };
    }
}

// --- OUTPUT ---
let output = '';
let totalFlagged = 0;

for (const [examId, data] of Object.entries(flagged)) {
    output += `\n${'='.repeat(80)}\n`;
    output += `EXAM: ${data.title} (${examId})\n`;
    output += `${'='.repeat(80)}\n`;

    for (const item of data.issues) {
        totalFlagged++;
        output += `\n  Q${item.qIndex} [${item.issue}]\n`;
        output += `  Topic: ${item.topicId}\n`;
        output += `  "${item.question}"\n`;
        output += `  Options:\n`;
        for (let j = 0; j < item.options.length; j++) {
            const marker = j === item.correct ? ' ✓' : '';
            output += `    ${String.fromCharCode(65 + j)}) ${item.options[j]}${marker}\n`;
        }
    }
}

output = `TOTAL FLAGGED QUESTIONS: ${totalFlagged}\n` + output;

fs.writeFileSync('audit_report.txt', output, 'utf8');
console.log(output);
console.log('\n--- Report saved to audit_report.txt ---');
