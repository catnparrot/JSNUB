// Map 객체에 요소 추가/삭제/확인(set, get, delete, has)
// Map은 ES6부터 표준으로 추가된 데이터 집합체(Collection)의 종류
// Key와 Value를 한 쌍으로 저장
// 중복 Key는 허용X
// 반복 가능한 객체 -> Iterator를 통해 Map 객체 내부를 순환할 수 있음
/** Object와 차이점
 * 1. Map 객체 Key는 다양한 자료형 값으로 정의할 수 있다. Object는 문자, Symbol 자료형만 가능.
 * 2. Map 객체는 Iterable 객체로 Symbol.iterator이 기본적으로 정의되어 있다.
 */
/** ====================================================================== */
const map = new Map();

map.set("one", 1);
map.set("two", 2);

console.log(map.get("one"));
console.log(map.has("one"));
map.delete("one");

console.log(map.has("one"));
console.log(map.has("two"));
