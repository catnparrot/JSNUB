//상수 선언: const
const URL = 'http://js.com';        //const (대문자);
URL = 'http://js.com';

if(true) {
    const URL2 = 'http://js.com';
}

console.log(URL2);

/*
const 키워드로 정의된 상수에 객체를 할당한다고 불변 객체Immutable Object가
되지 않는다.
불변 객체: 정의된 후에 그 상태를 바꿀 수 없는 객체
*/