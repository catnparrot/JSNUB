// 함수 호이스팅
hello();
function hello() {
    console.log("안녕하세요");
}

hello2();
var hello2 = function () {
    console.log("안녕하세요");
}

/*
hello3();
let hello2 = function () {
    console.log("안녕하세요");
}
*/