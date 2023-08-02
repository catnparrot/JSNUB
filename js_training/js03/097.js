// 배열 요소 찾기 (find)
const arr = [
  { id: 0, name: "혜림", age: 5 },
  { id: 1, name: "현일", age: 3 },
  { id: 2, name: "현아", age: 6 },
  { id: 3, name: "우림", age: 1 },
  { id: 4, name: "탄아", age: 30 },
];

const myFriend = arr.find((a) => a.age === 30);
console.log(myFriend);
