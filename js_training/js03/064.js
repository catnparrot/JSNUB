// 배열 자료형 확인하기(isArray)
function callRoll(As) {
    if (!Array.isArray(As)) return;

    As.forEach((a)=>{
        console.log(`Are you here, ${a}`);
    });
}

const students = ['Jun', 'Ali', 'Murry', 'Toby'];
callRoll(students);