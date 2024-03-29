// 배열 요소가 특정조건을 만족하는지 확인(some)
const arr = [
  { id: 0, name: "혜림", age: 5 },
  { id: 1, name: "현일", age: 3 },
  { id: 2, name: "현아", age: 6 },
  { id: 3, name: "우림", age: 1 },
];

const isHyunAHere = arr.some((el) => el.name == "현아");
const olderThanSix = arr.some((el) => el.age > 6);

console.log(isHyunAHere);
console.log(olderThanSix);
