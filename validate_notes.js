/**
 * validate_notes.js
 * Automated note validator checking schema integrity, required fields,
 * HTML tag balancing, and metadata validity across all note database files.
 */

const fs = require('fs');
const path = require('path');

function validateNoteEntry(note, index, fileBasename) {
  const errors = [];
  const warnings = [];

  if (!note.id || typeof note.id !== 'string') {
    errors.push(`[${fileBasename} #${index}] Missing or non-string 'id'`);
  }

  if (!note.title || typeof note.title !== 'string') {
    errors.push(`[${fileBasename} #${index}] Missing or non-string 'title'`);
  }

  if (!note.notes || typeof note.notes !== 'string' || note.notes.trim().length === 0) {
    errors.push(`[${fileBasename} #${index}] Note ID '${note.id || index}' has empty or non-string 'notes' content`);
  }

  // Validate HTML tags balance (basic check for common block tags)
  if (typeof note.notes === 'string') {
    const openTables = (note.notes.match(/<table/gi) || []).length;
    const closeTables = (note.notes.match(/<\/table>/gi) || []).length;
    if (openTables !== closeTables) {
      warnings.push(`[${fileBasename} #${note.id}] Mismatched <table> tags (${openTables} open vs ${closeTables} close)`);
    }

    const openDivs = (note.notes.match(/<div/gi) || []).length;
    const closeDivs = (note.notes.match(/<\/div>/gi) || []).length;
    if (Math.abs(openDivs - closeDivs) > 3) {
      warnings.push(`[${fileBasename} #${note.id}] Significant div tag imbalance (${openDivs} open vs ${closeDivs} close)`);
    }
  }

  // Check structured metadata if present
  if (note.difficulty && !['Basic', 'Intermediate', 'Advanced'].includes(note.difficulty)) {
    warnings.push(`[${fileBasename} #${note.id}] Invalid difficulty value '${note.difficulty}'`);
  }

  if (note.syllabus && !['NDA', 'CDS', 'AFCAT', 'CAPF', 'ALL'].includes(note.syllabus)) {
    warnings.push(`[${fileBasename} #${note.id}] Invalid syllabus value '${note.syllabus}'`);
  }

  return { errors, warnings };
}

function runValidation() {
  console.log('🔍 Running Automated Notes Validation...\n');
  let totalNotesChecked = 0;
  let totalErrors = 0;
  let totalWarnings = 0;

  const targetFiles = [
    'notes_data_exam_focused.js',
    'notes_data_upgraded.js'
  ];

  targetFiles.forEach((fileBasename) => {
    const filePath = path.join(__dirname, fileBasename);
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️ File ${fileBasename} not found, skipping.`);
      return;
    }

    try {
      let content = fs.readFileSync(filePath, 'utf8');
      content = content.replace(/(let|var|const)\s+NOTES_DATABASE\s*=/, 'global.NOTES_DATABASE =');
      eval(content);

      let notesList = [];
      if (Array.isArray(global.NOTES_DATABASE)) {
        notesList = global.NOTES_DATABASE;
      } else if (typeof global.NOTES_DATABASE === 'object' && global.NOTES_DATABASE !== null) {
        Object.keys(global.NOTES_DATABASE).forEach(subjectKey => {
          const subject = global.NOTES_DATABASE[subjectKey];
          if (Array.isArray(subject)) {
            notesList.push(...subject);
          } else if (subject && Array.isArray(subject.chapters)) {
            subject.chapters.forEach(chap => {
              if (Array.isArray(chap.topics)) {
                notesList.push(...chap.topics);
              } else if (chap.notes) {
                notesList.push(chap);
              }
            });
          }
        });
      }

      console.log(`📂 Validating ${fileBasename} (${notesList.length} notes extracted)...`);

      notesList.forEach((note, idx) => {
        totalNotesChecked++;
        const { errors, warnings } = validateNoteEntry(note, idx, fileBasename);
        errors.forEach(e => { console.error(`  ❌ ${e}`); totalErrors++; });
        warnings.forEach(w => { console.warn(`  ⚠️ ${w}`); totalWarnings++; });
      });

    } catch (err) {
      console.error(`❌ Error parsing ${fileBasename}:`, err.message);
      totalErrors++;
    }
  });

  console.log('\n========================================');
  console.log(`📊 Validation Summary:`);
  console.log(`   Notes Scanned: ${totalNotesChecked}`);
  console.log(`   Errors: ${totalErrors}`);
  console.log(`   Warnings: ${totalWarnings}`);
  console.log('========================================\n');

  if (totalErrors > 0) {
    console.error('❌ Validation failed with errors.');
    process.exit(1);
  } else {
    console.log('✅ All note databases passed validation!');
  }
}

if (require.main === module) {
  runValidation();
}

module.exports = { validateNoteEntry, runValidation };
