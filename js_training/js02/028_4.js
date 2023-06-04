// 객체 이해하기1
let family = {
    'address': 'Seoul',

    members: {},
    
    addFamily: function (age, name, role) {
        this.members[role] = {
            age: age,
            name: name
        };
    },

    getHeadcount: function () {
        return Object.keys(this.members).length;
    }
};

family.addFamily(30, 'chloe', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(10, 'dangdangi', 'dog');

console.log(family);
console.log();
console.log("family.address ->", family.address);
console.log();
console.log("family.members ->", family.members);
console.log("family.members['aunt'] ->", family.members['aunt']);
// console.log(family.members[aunt]); x
console.log();
console.log("family.addFamily ->", family.addFamily);
console.log("family.addFamily() ->", family.addFamily());
console.log("family.addFamily() ->", family.addFamily());
console.log("family.addFamily(38, 'joh', 'uncle') ->", family.addFamily(38, 'joh', 'uncle'));
console.log("family.addFamily(38, 'joh', 'uncle') ->", family.addFamily(38, 'joh', 'uncle'));
console.log("family.addFamily(31, 'lee', 'uncle') ->", family.addFamily(31, 'lee', 'uncle'));
console.log("family.addFamily(31, 'lee', 'uncle') ->", family.addFamily(31, 'lee', 'father'));
console.log("family.addFamily(22, 'shin', 'sister'), family.members['sister'] ->", family.addFamily(22, 'shin', 'sister'), family.members['sister']);
console.log();
console.log(family.members);
console.log("family.getHeadcount() ->", family.getHeadcount());
console.log("family.getHeadcount ->", family.getHeadcount);
console.log();
console.log("family.members[undefined]) ->", family.members[undefined]);
/*
메모
Java의 메서드를 배웠던 입장에서 JS의 함수 개념은 재밌는 거 같다.
Java에서는 정의된 메서드에서 정해진 매개변수를 입력하지 않으면 애초에 그 메서드가 아니다.
그러나 JS 함수에서 입력해야할 매개변수 자리에 아무것도 입력하지 않는다면
그 값은 undefined가 대체하고 함수가 실행된다.
*/
