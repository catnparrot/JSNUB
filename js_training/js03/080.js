// 문자열을 특정 구분자에 의해 배열로 나누기(split)
const capitals = `Prague,Czech Republic
Copenhagen,Denmark
Paris,France
Rome,Italy`;

capitals.split("\n").forEach((s) => {
  const capital = s.split(",")[0];
  const country = s.split(",")[1];
  console.log(`${capital} is in ${country}`);
});
