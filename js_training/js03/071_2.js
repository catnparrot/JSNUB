// 문자열 길이 구하기 (length)
const arr1 = ["long sentence, it is not appropriate", "short"];
const arr2 = ["short", "long sentence, it is not appropriate"];

arr1.forEach((str) => {
  //forEach 메서드가 배열의 첫 번째 요소부터 순차적으로 조건문에 맞춰 처리하여. "short"가 먼저 출력된다.
  if (str.length >= 10) {
    console.log(str);
  } else if (str.length < 10) {
    console.log(str);
  }
});

arr2.forEach((str) => {
  if (str.length >= 10) {
    console.log(str);
  } else if (str.length < 10) {
    console.log(str);
  }
});
