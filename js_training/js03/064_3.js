// forEach()
// forEach()의 문법은 아래와 같으며, 함수로 value, index, array를 전달할 수 있습니다.
// arr.forEach(func(value, index, array))
// forEach는 인자 전달인가?
function myFunc(item) {
    console.log(item);
}

const arr = ['apple', 'kiwi', 'grape', 'orange'];

arr.forEach(myFunc);

//----------<----->-----------//

const arr2 = [1, 2, 3, 4, 5];
for(const x of arr2 ){
    console.log(x);
}