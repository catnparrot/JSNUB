// Promise
// * Promise 상태
// 1.대기중(Pending): 약속을 했지만아직 결과가 없는 상태.
// 2.이행됨(Fulfilled): 비동기 처리가 성공적으로 완료되어 약속을 이행한 상태. 이때 결과로 하나의 값이 전달됨.
// 3.거부됨(Rejected): 비동기 처리 실패 상태.
// ** Promise 객체
// 1.then(onFulfilled, onReject): 약속이 완료됐을 때 호출될 함수들 정의
// 첫번째 인자로 전달되는 함수는 약속이 성공적으로 이행됐을 떄 호출
// 두번째 인자로 전달된 함수는 거부됐을 때 호출
// 두 전달 인자 함수들은 매개변수를 가지며 각각 결과가 매개변수를 통해 전달
// 2.catch(onReject): 약속이 거부됐을 떄 호출될 함수(onReject) 등록
function promiseForHomework(mustDo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("doing homework");
      if (mustDo) {
        resolve({
          result: "homework-result",
        });
      } else {
        reject(new Error("Too lazy!"));
      }
    }, 3000);
  });
}

const promiseA = promiseForHomework(true);
console.log("promiseA created");

const promiseB = promiseForHomework();
console.log("promiseB created");

promiseA.then((v) => console.log(v));

promiseB.then((v) => console.log(v)).catch((e) => console.error(e));
