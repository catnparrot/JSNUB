const str1 = "JS 200 exam";
const str2 = new String("JS 200 exam");

console.log(typeof str1);
console.log(typeof str2);
console.log(str1);
console.log(str2);

console.log("");

console.log(str1 === "JS 200 exam");
console.log(str2 === new String("JS 200 exam"));

console.log(str1.valueOf());
console.log(str2.valueOf());
console.log(str1 === str2.valueOf());
