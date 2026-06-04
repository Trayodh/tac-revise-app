global.window = {};
global.EXPANDED_NOTES_DATA = {};
global.window.EXPANDED_NOTES_DATA = global.EXPANDED_NOTES_DATA;
require('../notes_extra_polity.js');
console.log("Length of president notes:", global.window.EXPANDED_NOTES_DATA['president'] ? global.window.EXPANDED_NOTES_DATA['president'].length : 0);
console.log("President notes sample:\n", global.window.EXPANDED_NOTES_DATA['president'] ? global.window.EXPANDED_NOTES_DATA['president'].substring(0, 500) : "undefined");
