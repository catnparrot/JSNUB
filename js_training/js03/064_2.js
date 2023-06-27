// 배열 자료형 확인하기(isArray)

// 모두 true 반환
console.log(Array.isArray([]));
console.log(Array.isArray([1]));
console.log(Array.isArray(new Array()));
console.log(Array.isArray(new Array('a', 'b', 'c', 'd')));
console.log(Array.isArray(new Array(3)));
// Array.prototype은 스스로도 배열입니다
console.log(Array.isArray(Array.prototype));

// 모두 false 반환
console.log(Array.isArray());
console.log(Array.isArray({}));
console.log(Array.isArray(null));
console.log(Array.isArray(undefined));
console.log(Array.isArray(17));
console.log(Array.isArray('Array'));
console.log(Array.isArray(true));
console.log(Array.isArray(false));
console.log(Array.isArray({ __proto__: Array.prototype }));