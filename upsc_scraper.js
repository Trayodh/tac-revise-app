const puppeteer = require('puppeteer');
const fs = require('fs');
const https = require('https');
const path = require('path');

const UPSC_URL = 'https://upsc.gov.in/examinations/previous-question-papers';

async function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err));
        });
    });
}

async function scrapeUPSC() {
    console.log('Launching browser to scrape UPSC website...');
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    // Disguise as a real browser
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36');

    console.log(`Navigating to ${UPSC_URL}...`);
    try {
        await page.goto(UPSC_URL, { waitUntil: 'networkidle2', timeout: 60000 });
        
        console.log('Page loaded. Extracting PDF links...');
        
        // Evaluate page to find links related to NDA or CDS
        const papers = await page.evaluate(() => {
            const results = [];
            const rows = document.querySelectorAll('tr'); // Usually in a table
            
            // Fallback: just look at all links
            const links = document.querySelectorAll('a[href$=".pdf"]');
            
            links.forEach(link => {
                const text = link.innerText || link.textContent;
                const href = link.href;
                
                if (
                    text.toLowerCase().includes('nda') || 
                    text.toLowerCase().includes('national defence academy') ||
                    text.toLowerCase().includes('cds') || 
                    text.toLowerCase().includes('combined defence services')
                ) {
                    results.push({ name: text.trim().replace(/[\r\n]+/g, ' '), url: href });
                }
            });
            
            // Also try to find rows that have the exam name in one column and the PDF in another
            rows.forEach(row => {
                const text = row.innerText.toLowerCase();
                if (text.includes('nda') || text.includes('cds') || text.includes('national defence academy') || text.includes('combined defence services')) {
                    const pdfLink = row.querySelector('a[href$=".pdf"]');
                    if (pdfLink) {
                        results.push({
                            name: row.cells ? (row.cells[0]?.innerText || 'Unknown Exam').trim() : pdfLink.innerText.trim(),
                            url: pdfLink.href
                        });
                    }
                }
            });
            
            return results;
        });

        // Deduplicate
        const uniquePapers = Array.from(new Set(papers.map(p => p.url)))
            .map(url => papers.find(p => p.url === url));

        console.log(`Found ${uniquePapers.length} relevant NDA/CDS papers on the first page.`);
        
        if (uniquePapers.length === 0) {
            console.log("Could not find any NDA or CDS papers on the main page. UPSC might have moved them to an archive or changed the layout.");
        } else {
            console.log("Papers found:");
            uniquePapers.forEach((p, i) => console.log(`${i+1}. ${p.name} - ${p.url}`));
            
            // Optionally download the first one as a test
            const firstPaper = uniquePapers[0];
            const fileName = path.basename(firstPaper.url);
            const dlPath = path.join(__dirname, fileName);
            console.log(`\nDownloading the most recent paper: ${firstPaper.name} to ${dlPath}...`);
            await downloadFile(firstPaper.url, dlPath);
            console.log('Download complete!');
        }

    } catch (error) {
        console.error('Error during scraping:', error);
    } finally {
        await browser.close();
    }
}

scrapeUPSC();
