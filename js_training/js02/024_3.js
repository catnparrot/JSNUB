// console.log()에 대한 의문점, 혹은 () 식에 대한 의문점
let con = true;
let result = con ? (
    console.log("삼항 연산식의 첫 번째 표현식"),
    "표현식1"
) : (
    console.log("삼항 연산식의 두번째 표현식"),
    "표현식2"
);
// console.log(result);

console.log();

let result2 = (console.log("doUwannabeThesnowMan"), "Mouse");
console.log(result2);

console.log();

let result2_2 = (console.log("doUwannabeThesnowMan"), "Mouse");
// console.log(result2_2);

console.log();

let result3 = ("a", "b");
console.log(result3);
let result3_2 = (1, 2);
console.log(result3_2);