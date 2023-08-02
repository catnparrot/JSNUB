// 배열정렬(sort)
// 배열.sort(function(a, b){ return 비교값; })
/**
 * 비교값 > 0 : a가 b보다 작은 숫자의 인덱스
 * 비교값 < 0 : b가 a보다 작은 숫자의 인덱스
 * 비교값 = 0 : a와 b의 위치 변경 안함 */

const numArr1 = [2, 0, 3, 4, 1];
const numArr2 = [2, 0, 3, 4, 1];
const objArr = [
  { id: 2, name: "Leo" },
  { id: 0, name: "Daniel" },
  { id: 3, name: "Asher" },
  { id: 4, name: "Chloe" },
  { id: 1, name: "Chloe" },
];

// numArr1.sort(function (a, b) {
//   return a - b;
// });

numArr1.sort((a, b) => {
  return a - b;
});

// numArr2.sort(function (a, b) {
//   return b - a;
// });

numArr2.sort((a, b) => {
  return b - a;
});

// objArr.sort(function (a, b) {
//   if (a.name > b.name) return 1;
//   else if (b.name > a.name) return -1;
//   else return 0;
// });

objArr.sort((a, b) => {
  if (a.name > b.name) return 1;
  else if (b.name > a.name) return -1;
  else return 0;
});

console.log(`오름차순 : ${numArr1}`);
console.log(`내림차순 : ${numArr2}`);
console.log(objArr);
