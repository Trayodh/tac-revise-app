const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const WIKI_BASE = 'https://en.wikipedia.org';

const PAGES = [
  { url: '/wiki/List_of_equipment_of_the_Indian_Army', branch: 'Army' },
  { url: '/wiki/List_of_active_Indian_military_aircraft', branch: 'Air Force' },
  { url: '/wiki/List_of_active_Indian_Navy_ships', branch: 'Navy' },
  { url: '/wiki/List_of_equipment_of_the_Indian_Coast_Guard', branch: 'Coast Guard' },
  { url: '/wiki/Para_(Special_Forces)', branch: 'Special Forces' }
];

async function scrapePage(page) {
  try {
    const response = await fetch(WIKI_BASE + page.url);
    const data = await response.text();
    const $ = cheerio.load(data);
    
    let items = [];
    
    // Most equipment lists use wikitable
    $('table.wikitable').each((i, table) => {
      // Find headers
      let headers = [];
      $(table).find('tr').first().find('th').each((j, th) => {
        headers.push($(th).text().trim().toLowerCase());
      });
      
      const nameIndex = headers.findIndex(h => h.includes('name') || h.includes('weapon') || h.includes('aircraft') || h.includes('class'));
      const originIndex = headers.findIndex(h => h.includes('origin'));
      const typeIndex = headers.findIndex(h => h.includes('type') || h.includes('role') || h.includes('category'));
      const qtyIndex = headers.findIndex(h => h.includes('quantity') || h.includes('number') || h.includes('in service') || h.includes('active'));
      
      if (nameIndex === -1) return; // Not a useful table
      
      $(table).find('tr').each((j, tr) => {
        if (j === 0) return; // Skip header
        
        const tds = $(tr).find('td, th');
        if (tds.length === 0) return;
        
        // Sometimes th is used for row headers
        const cells = [];
        $(tr).children().each((idx, el) => cells.push($(el)));
        
        if (cells.length <= nameIndex) return;
        
        const nameCell = cells[nameIndex];
        let name = nameCell.text().trim().replace(/\[\d+\]/g, '');
        if (!name || name.length > 100) return; // Too long, probably not a name
        
        const link = nameCell.find('a').first().attr('href');
        const wikiLink = link ? (link.startsWith('/wiki') ? WIKI_BASE + link : link) : null;
        
        let origin = originIndex !== -1 && cells.length > originIndex ? cells[originIndex].text().trim().replace(/\[\d+\]/g, '').split('\n')[0] : 'Unknown';
        let type = typeIndex !== -1 && cells.length > typeIndex ? cells[typeIndex].text().trim().replace(/\[\d+\]/g, '').split('\n')[0] : 'Various';
        let qty = qtyIndex !== -1 && cells.length > qtyIndex ? cells[qtyIndex].text().trim().replace(/\[\d+\]/g, '') : 'Unknown';
        
        // Remove citations
        name = name.replace(/\(.*\)/, '').trim();

        items.push({
          name: name,
          branch: page.branch,
          origin: origin,
          type: type,
          quantity: qty,
          wikiLink: wikiLink
        });
      });
    });
    
    return items;
  } catch (error) {
    console.error(`Error scraping ${page.url}:`, error.message);
    return [];
  }
}

async function main() {
  let allEquipment = [];
  
  for (let page of PAGES) {
    const items = await scrapePage(page);
    console.log(`Scraped ${items.length} items for ${page.branch}`);
    allEquipment = allEquipment.concat(items);
  }
  
  // Deduplicate
  const uniqueItems = [];
  const seen = new Set();
  
  for (let item of allEquipment) {
    const key = `${item.name}-${item.branch}`;
    if (!seen.has(key) && item.name.length > 1 && item.name !== 'Name') {
      seen.add(key);
      uniqueItems.push(item);
    }
  }
  
  console.log(`Total unique items: ${uniqueItems.length}`);
  
  const jsContent = `// Auto-generated Armed Forces Equipment Database
window.ARMED_FORCES_EQUIPMENT = ${JSON.stringify(uniqueItems, null, 2)};
`;

  const outputPath = path.join(__dirname, '..', 'equipment_db.js');
  fs.writeFileSync(outputPath, jsContent);
  console.log(`Saved database to ${outputPath}`);
}

main();
