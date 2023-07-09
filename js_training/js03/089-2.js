//배열과 요소2(특정 요소 수정) -slice
//배열.splice(시작_인덱스, 삭제할요소_갯수, 추가될_요소)
const fruits = ['melon', 'lemon', 'source', 'apple', 'juice'];

fruits.splice(3, 2);
console.log(fruits);
fruits.splice(4, 0, 'grape');
console.log(fruits);
fruits.splice(2, 1, 'mandarin', 'strawberry', 'watermelon');
console.log(fruits);