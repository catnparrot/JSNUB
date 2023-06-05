const CONST_USER = {name: 'jay', age: 30}
console.log(CONST_USER.name, CONST_USER.age);

CONST_USER.name = 'jay2';
CONST_USER.age = 31;
console.log(CONST_USER.name, CONST_USER.age);

//불변 객체가 아니기 때문에 속성에 다른 값 할당 가능

CONST_USER = {name: 'bbo'};

//새로운 객체로 할당은 불가능. 객체 내부의 값value만 변경 가능?