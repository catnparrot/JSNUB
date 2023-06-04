// 삼항 연산자
let con = 5 > 10;
con ? console.log('Left') : console.log('Right');

console.log();

let result = con ? (
    console.log("삼항 연산식의 첫 번째 표현식"),
    "표현식1"
) : (
    console.log("삼항 연산식의 두번째 표현식"),
    "표현식2"
);
console.log(result);