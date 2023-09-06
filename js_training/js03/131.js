// Set 객체의 값 추가/삭제/확인 (add, delete, has)
const s = new Set();

s.add("one");
s.add("two");
s.add("three");

console.log(s);
console.log(s.has("one"));
s.delete("one");
console.log(s.has("one"));
console.log(s.has("two"));
console.log(s);
