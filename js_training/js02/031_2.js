// 객체 문법 - 속성 계산명
let profile = 'chloe:30';
let person = {
    [profile.split(':')]: profile.split(':')[0]
};
console.log(person);
console.log(profile.split(':')[0]);

console.log();

let profile2 = 'bird:dog:mouse';
let person2 = {
    a : profile2.split(':')
};
console.log(person2);
console.log(person2.a);
console.log(profile2.split(':')[1]);

/*
*.split: 내장함수, 문자열을 지정된 구분자를 기준으로 분할하여 배열로 반환합니다.)
interface String {

    split(
        splitter: {
            [Symbol.split](string: string, limit?: number): string[];
        },
        
        limit?: number
    ): string[];

}
*/