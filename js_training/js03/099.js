// 배열 내 값 누적(reduce-1)
/**
 * 배열.reduce((누적된_값, 현재_요소_값, 현재_인덱스_값, 원본_배열) => {
 *  return 누적값으로_반환되는_값;
 * }, 초기값);
 */

const numArr = [1, 2, 3, 4, 5];

const result = numArr.reduce((acc, el) => {
  return acc + el;
}, 3);
// 15 + 3

console.log(result);
