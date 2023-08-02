// 모든 배열 요소가 특정 조건 만족하는지 확인 (every)
const arr = [
  { id: 0, name: "혜림", age: 5 },
  { id: 1, name: "현일", age: 3 },
  { id: 2, name: "현아", age: 6 },
  { id: 3, name: "우림", age: 1 },
];

const isHyunAHere = arr.every((el) => el.name == "현아");
const olderThanSix = arr.every((el) => el.age < 7);

console.log(isHyunAHere);
console.log(olderThanSix);
