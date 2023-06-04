// 객체 문법 - 속성 계산명
let obj = {};
for (let i = 0; i < 4; i++) {
    obj['key' + i] = i;
}
console.log(obj);

console.log();

let profile = 'chloe:30';
let person = {
    [profile] : true,
    [profile.split(':')[0]]: profile.split(':')[1]
};
console.log(person);