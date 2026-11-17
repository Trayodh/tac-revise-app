const fs = require('fs');

const file = 'current_affairs_db.js';
let content = fs.readFileSync(file, 'utf8');

// Parse the JSON data safely
const jsonStr = content.replace('window.CURRENT_AFFAIRS_DB = ', '').trim().replace(/;$/, '');
let db = JSON.parse(jsonStr);

let julyNews = db['July 2026'];
const initialLength = julyNews.length;

// Filter out the insignificant news
julyNews = julyNews.filter(item => {
  const text = item.text || item.summary || "";
  
  if (text.includes("sleep loss") || text.includes("climate change is causing significant sleep loss")) {
    console.log("Removing: sleep loss");
    return false;
  }
  if (text.includes("cashless health scheme for 12 lakh teachers") || text.includes("Uttar Pradesh launched a cashless health scheme")) {
    console.log("Removing: UP health scheme");
    return false;
  }
  if (text.includes("Shri Ram Janmabhoomi Teerth Kshetra Trust") || text.includes("Nripendra Mishra")) {
    console.log("Removing: Ayodhya CEO");
    return false;
  }
  if (text.includes("Chandigarh University") || text.includes("61 National Cadet Corps")) {
    console.log("Removing: Chandigarh NCC");
    return false;
  }
  
  return true;
});

db['July 2026'] = julyNews;

console.log(`Removed ${initialLength - julyNews.length} items.`);

// Write back to the file
const newContent = 'window.CURRENT_AFFAIRS_DB = ' + JSON.stringify(db, null, 2) + ';';
fs.writeFileSync(file, newContent, 'utf8');
console.log("Updated current_affairs_db.js successfully.");
