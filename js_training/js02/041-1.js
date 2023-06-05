// let으로 변수 선언
var value = "바깥값";
if (true) {
    console.log(value)
    var value = "안쪽값";
}

let value2 = "바깥값";
if (true) {
    console.log(value2);
    // let value2 = "안쪽값";
}

let value3 = "바깥값";
if (true) {
    console.log(value3);
    let value3 = "안쪽값";
}