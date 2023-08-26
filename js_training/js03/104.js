// 객체가 변경되지 않도록 하기(freeze)
let obj = {};

obj.title = "IDOL";
console.log(obj);
obj = Object.freeze(obj);

obj.title = "Euphoria";

const changeUntilNum = (obj, num) => {
  "use strict";

  while (true) {
    console.log(obj);

    if (obj.age >= num) {
      obj = Object.freeze(obj);
    }
    obj.age += 1;
  }
};

let profile = { name: "nature", age: 25 };
changeUntilNum(profile, 30);
