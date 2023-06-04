// 자료형 변환
console.log("5" + 1);
console.log("5" - 1);
console.log("5" * 2);
console.log("There is " + 5);
console.log("Five" + 2);

console.log();

console.log('**연산자를 활용한 자료형 변환**');
let str = 5 + "1";
console.log("let str = 5 + \"1\"");
console.log("str :", str);
console.log("typeof str :", typeof str);

console.log();

let num = + str;
console.log("let num = + str");
console.log("num :", num);
console.log("typeof num :", typeof num);

console.log();

console.log('**함수를 활용한 자료형 변환**');
str = String(num);
console.log("str = String(num)");
console.log("str :", str);
console.log("typeof str :", typeof str);

console.log();

num - Number(str);
console.log("num - Number(str)");
console.log("num :", num);
console.log("typeof num :", typeof num);