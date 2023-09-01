// 반복 가능한 객체와 반복자 이해하기
// in JS, 반복(Iteration) 동작에 대한 규약(Protocol)으로 Iterable과 Iterator를 정의
/** The Iterable Protocol(반복 가능한 규약)
 * 반복 가능한 규약은 객체 안의 값들을 반복(Iteration)할 수 있도록 반복 동작을 정의하는 것을 허용한다.
 * '잔복동작에 대한 정의'란 for-loop처럼 단순 반복 작업이기도 하며
 * 이와 다르게 어떻게 반복하는지, 반복하면서 어떤 동작을 수행하는지 직접 정의하는 것도 해당된다.
 * 객체가 반복 가능하려면 객체 내부에 \@@iterator\ 메서드를 구현해야 한다.
 * 구현할 때 속성 Key는 반드시 Symbol.iterator이어야하고 Value는 매개변수가 없는 함수가 대입된다.
 * 그리고 이 함수는 반복자 규약(The Iterator Protocol)을 따르는 객체를 반환한다
 */
/**The Iterator Protocol(반복자 규약)
 * 반복자 규약은 연속된 값을 만드는 방법을 정의한다.
 * 객체가 반복자 규약을 충족하려면 next 메서드를 가지고 있어야 한다.
 * 이때 객체 Key는 next()이고 Value는 매개변수가 없는 함수로 정의한다.
 * 함수는 value와 done 속성을 가진 객체를 반환한다. 따라서 반복자의
 * next 메서드를 호출하면 Key 이름이 value와 done인 객체가 반환된다.
 * 이러한 반복자 규약을 충족하는 객체를 Iterator라고 한다.
 */
/** ============================================================= */
const items = ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"];
const seq = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        const value = items[i];
        i++;
        const done = i > items.length;
        return { value, done };
      },
    };
  },
};

for (let s of seq) console.log(s);
console.log("------------------------");
const [a, b, c, ...arr] = seq;
console.log("a >>>", a);
console.log("b >>>", b);
console.log("c >>>", c);
console.log("arr >>>", arr);
