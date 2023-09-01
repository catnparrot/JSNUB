// 정규표현식으로 문자열 변환(exec)
const str = "Java is not in JS";

const result1 = /java/gi.exec(str);
const result1_2 = /js/gi.exec(str);
console.log(result1[0]);
console.log(result1[1]);
console.log(result1.index);
console.log(result1.input);
console.log(result1_2[0]);
console.log(result1_2.index);
console.log(result1_2.input);

const nums = '"1", "2", "3"';
const regex = /\d+/g;
while ((result2 = regex.exec(nums))) {
  console.log("result2: ", result2, " // regex: ", regex.lastIndex);
}
