//자료형 이해하기
let x = 5;  //숫자형Number
let y = 'five'; //문자형String
let isTrue = true;  //논리형Boolean
let empty = null;   //null
let nothing = undefined;    //undefined
let sym = Symbol('me'); //Symbol

let item = {
    price: 5000,
    count: 10
};  //객체Object

let fruits = ['apple', 'orange', 'kiwi'];   //배열Array
let addfruit = function (fruit) {
    fruits.push(fruit);
}   //함수function
addfruit('watermelon');
addfruit(1);
addfruit(fruits);   //[Circular *1] 출력
console.log(fruits);