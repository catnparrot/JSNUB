//문자열 자르기 2(substring):
const sentence = 'This will be the end of Wakada';
console.log("13: ", sentence.substring(13));
console.log("13: ", sentence.slice(13));

console.log("13, 20: ", sentence.substring(13, 20));
console.log("13, 20: ", sentence.slice(13, 20));

console.log("0: ", sentence.substring(0));
console.log("0: ", sentence.slice(0));

console.log("0, -20: ", sentence.substring(0, -20));    //*
console.log("-20: ", sentence.substring(0, -20));    //*
console.log("50: ", sentence.substring(50));
console.log("50: ", sentence.slice(50));

console.log("20, 13: ", sentence.substring(20, 13));    //*