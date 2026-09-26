const fs = require('fs');

const files = ['public/app.js', 'live_app.js', 'app.js', 'public/app_before_0edf5a5.js'];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    let newContent = content.replace(/if \(url\.includes\('\/api\/gemini'\)\) \{/g, "if (url.includes('/api/gemini') && isCapacitor) {");
    
    if (content !== newContent) {
      fs.writeFileSync(file, newContent, 'utf8');
      console.log('Updated ' + file);
    }
  }
});
