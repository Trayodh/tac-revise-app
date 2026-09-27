const fs = require('fs');
const ytdl = require('ytdl-core');

ytdl('https://www.youtube.com/watch?v=kY44H7J3JpA', { filter: 'audioonly' })
  .pipe(fs.createWriteStream('assets/tum_se_hi.webm'))
  .on('finish', () => console.log('Download complete'))
  .on('error', (err) => console.error('Error downloading:', err));
