// 배열순환(forEach)
const arr = [
  { id: 0, name: "혜림", age: 5 },
  { id: 1, name: "현일", age: 3 },
  { id: 2, name: "현아", age: 6 },
  { id: 3, name: "우림", age: 1 },
];

arr.forEach((el) => {
  console.log(el.name);
});
