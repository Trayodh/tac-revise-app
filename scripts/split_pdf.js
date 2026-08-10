const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function splitPdf() {
    const inputPath = path.join(__dirname, '../pathfinder-cds-combined-defence-expertsarihant-90f15b25.pdf');
    if (!fs.existsSync(inputPath)) {
        console.error("PDF not found at", inputPath);
        return;
    }

    console.log("Loading PDF...");
    const pdfBytes = fs.readFileSync(inputPath);
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const totalPages = pdfDoc.getPageCount();
    console.log(`Loaded PDF with ${totalPages} pages.`);

    if (totalPages > 1000) {
        console.log("Splitting PDF...");
        const half = Math.ceil(totalPages / 2);
        
        // Part 1
        const doc1 = await PDFDocument.create();
        const pages1 = await doc1.copyPages(pdfDoc, Array.from({length: half}, (_, i) => i));
        pages1.forEach(p => doc1.addPage(p));
        fs.writeFileSync(path.join(__dirname, '../pathfinder_part1.pdf'), await doc1.save());
        console.log(`Saved part 1 with ${half} pages.`);

        // Part 2
        const doc2 = await PDFDocument.create();
        const pages2 = await doc2.copyPages(pdfDoc, Array.from({length: totalPages - half}, (_, i) => i + half));
        pages2.forEach(p => doc2.addPage(p));
        fs.writeFileSync(path.join(__dirname, '../pathfinder_part2.pdf'), await doc2.save());
        console.log(`Saved part 2 with ${totalPages - half} pages.`);
    } else {
        console.log("PDF is under 1000 pages, no need to split.");
    }
}

splitPdf().catch(console.error);
