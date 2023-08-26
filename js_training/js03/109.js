// random
// Math.random === 1이하?의 난수값
console.log("랜덤값: " + Math.random());

const generateRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log("==================");
for (let i = 0; i < 5; i++) {
  console.log(generateRandom(1, 10));
}

console.log("==================");
for (let i = 0; i < 5; i++) {
  console.log(generateRandom(10, 100));
}
