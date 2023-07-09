//배열과 요소1(특정 위치의 요소 추출) -slice
//배열.slice(startIndex, endIndex)
//startIndex: 추출을 시작하는 인덱스. 해당 인덱스의 요소를 포함하여 추출.
//endIndex: 추출을 종료할 인덱스. 해당 인덱스의 요소를 포함하여 추출.
const arr = ['melon', 'lemon', 'source', 'apple', 'juice'];
console.log(`과일이 아닌 요소는 ${arr.slice(2, 3)}와 ${arr.slice(4, 5)}입니다.`);
console.log(arr.slice(0, 1));
console.log(arr.slice(0, 10));
console.log(arr[0]);