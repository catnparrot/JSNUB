// 문자열 순환(for-of)
// for (변수 of 반복가능한 객체) {
//     실행할 문장
// }
const str = "hello";
for (const item of str) {
  console.log(item);
}

const iter = str[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
