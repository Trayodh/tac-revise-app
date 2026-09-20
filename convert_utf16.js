const fs = require('fs');
try {
  let content = fs.readFileSync('data.js.pre_regen_backup', 'utf16le');
  fs.writeFileSync('data.js', content, 'utf8');
  console.log('Successfully converted data.js.pre_regen_backup from UTF-16LE to UTF-8 data.js');
} catch (e) {
  console.error('Error with data.js.pre_regen_backup', e);
}
try {
  let tempContent = fs.readFileSync('temp_data.js', 'utf16le');
  fs.writeFileSync('data_from_temp.js', tempContent, 'utf8');
  console.log('Successfully converted temp_data.js to data_from_temp.js');
} catch(e) {
  console.error('Error with temp_data.js', e);
}
