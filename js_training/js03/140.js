// Async
// await 구문과 함께 비동기 작업 제어
// await 키워드는 반드시 async 함수 안에서만 유효
function doJob(name, person) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (person.stamina > 50) {
        person.stamina -= 30;
        resolve({
          result: `${name} success`,
        });
      } else {
        reject(new Error(`${name} failed`));
      }
    }, 1000);
  });
}

const harin = { stamina: 100 };

const execute = async function () {
  console.log("start");
  try {
    let v = await doJob("work", harin);
    console.log(v.result);
    v = await doJob("study", harin);
    console.log(v.result);
    v = await doJob("work", harin);
    console.log(v.result);
    v = await doJob("study", harin);
  } catch (e) {
    console.log(e);
  }
  console.log("end");
};

execute();
