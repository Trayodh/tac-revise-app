const fs = require('fs');
const https = require('https');

const files = [
  { id: '1PUA_pE6C84SHA9RV2tQe9Omk7eQnF1Xu', name: 'doc1.pdf' },
  { id: '1_EBcmyo4sGfIwxq-SeFCVbZLatRT5Zjl', name: 'doc2.pdf' },
  { id: '1LXgI-l-gOwBaeokooa2QiFSMsJbWmYLZ', name: 'doc3.pdf' },
  { id: '16l_n6ge9nMyBbUtHGgaCEbrh2ZKVOnwW', name: 'doc4.pdf' },
  { id: '1QTKsLyieu2GOKIAg-ctzpK2W1ntBOQhZ', name: 'doc5.pdf' },
  { id: '1JC_pjzBWb2SmENFVO-mrLVR6Dt3oq1jH', name: 'doc6.pdf' },
  { id: '1Q9Zk5ofylEBiIMg4uzA2j2mF3pSMVegV', name: 'doc7.pdf' }
];

function downloadFile(fileInfo) {
  return new Promise((resolve, reject) => {
    const url = `https://drive.google.com/uc?export=download&id=${fileInfo.id}`;
    const file = fs.createWriteStream(fileInfo.name);
    
    // We need to handle redirects since Google Drive redirects to a download server
    // or to a virus warning page for large files.
    const request = https.get(url, function(response) {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        https.get(response.headers.location, function(redirectResponse) {
          redirectResponse.pipe(file);
          file.on('finish', function() {
            file.close(resolve);
          });
        }).on('error', reject);
      } else {
        response.pipe(file);
        file.on('finish', function() {
          file.close(resolve);
        });
      }
    }).on('error', reject);
  });
}

async function main() {
  for (const f of files) {
    console.log(`Downloading ${f.name}...`);
    try {
      await downloadFile(f);
      console.log(`Successfully downloaded ${f.name}`);
    } catch (e) {
      console.error(`Failed to download ${f.name}:`, e);
    }
  }
}

main();
