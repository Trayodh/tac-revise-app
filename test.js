const text1 = "[[Topic]]";
const text2 = "[[Topic|Label]]";
const text3 = "[[|Label]]";
const regex = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;

console.log("text1", [...text1.matchAll(regex)]);
console.log("text2", [...text2.matchAll(regex)]);
console.log("text3", [...text3.matchAll(regex)]);
