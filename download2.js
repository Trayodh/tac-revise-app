const youtubedl = require('youtube-dl-exec');

youtubedl('https://www.youtube.com/watch?v=kY44H7J3JpA', {
  extractAudio: true,
  audioFormat: 'mp3',
  output: 'assets/tum_se_hi.mp3'
}).then(output => console.log('Downloaded!', output))
  .catch(err => console.error('Error:', err));
