// 스코프
let a = 10;
console.log(a);

function print() {
    var b = 20;
    if (true) {
        let c = 30;
        console.log(c);
    }
}

print();
console.log(b);