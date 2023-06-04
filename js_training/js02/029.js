// 객체 이해하기2 - 속성 접근/추가/수정/삭제
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

let printMembers = function () {
    let members = family.members;
    for (role in members) {
        console.log('role => ' + role + ', name => ' + members[role].name
        + ', age => ' + members[role].age);
    }
};
console.log();

printMembers();

console.log();

let members = family.members;
members['nephew'] = {age: 3, name: 'hyun'};
members.niece = {age: 5, name: 'lyn'};
delete members.aunt;
delete members['dog'];
printMembers();