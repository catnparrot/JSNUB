// 일정 시간 후 코드 실행(setTimeout)
const timer = {
  run: function () {
    if (this.t) console.log("there is a timer already ticking");

    this.t = setTimeout(() => {
      console.log("after 1 sec");
    }, 1000);
  },
  cancel: function () {
    if (this.t) clearTimeout(this.t);
    this.t = undefined;
  },
};

timer.run();
timer.cancel();
timer.run();
