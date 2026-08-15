const term = 'Primary Source';
const escaped = term.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
const regex = new RegExp('\\b(' + escaped + ')\\b', 'gi');
console.log('regex:', regex);
console.log('Match in "Primary Sources":', 'Primary Sources'.match(regex));
console.log('Match in "interpretations":', 'interpretations'.match(regex));
