//문자열 자르기 1(slice):
const sentence = 'The sun will shine on us again';
console.log("13: ", sentence.slice(13));
console.log("13, 24: ", sentence.slice(13, 24));
console.log("0: ", sentence.slice(0));
console.log("0, -23: ", sentence.slice(0, -23));
console.log("-23: ", sentence.slice(-23));
console.log("50: ", sentence.slice(50));
console.log("7, 2: ", sentence.slice(7, 2));