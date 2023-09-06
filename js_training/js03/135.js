// Set 객체 순환 (for-of, foreach)
const s = new Set();

s.add("one");
s.add("two");

console.log("Key info only out");
for (let key of s.keys()) {
  console.log(key);
}

console.log("value info only out");
for (let value of s.values()) {
  console.log(value);
}

console.log("[forEach] key n value info both out");
s.forEach((value, key) => {
  console.log(`key: ${key} // value: ${value}`);
});
