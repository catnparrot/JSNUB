// Map 객체 순환1 (for-of, foreach)
const map = new Map();

map.set("one", 1);
map.set("two", 2);

console.log("to only out a key info");
for (let key of map.keys()) {
  console.log(key);
}

console.log("to only out a value info");
for (let value of map.values()) {
  console.log(value);
}

console.log("[for..of, entries] to out key, value info both");
for (let [key, value] of map.entries()) {
  console.log(`Key: ${key} // Value: ${value}`);
}

console.log("[for..of] to out key, value info both");
for (let [key, value] of map) {
  console.log(`Key: ${key} // Value: ${value}`);
}

console.log("[forEach] to out key, value info both");
map.forEach((value, key) => {
  console.log(`Key: ${key} // Value: ${value}`);
});
